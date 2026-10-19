import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function apiPlugin() {
  return {
    name: 'portfolio-api-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';

        // Helper to parse JSON body
        const readBody = () => {
          return new Promise((resolve, reject) => {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                resolve(body ? JSON.parse(body) : {});
              } catch (err) {
                reject(err);
              }
            });
            req.on('error', reject);
          });
        };

        const jsonResponse = (status, data) => {
          res.statusCode = status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        };

        const inquiriesFile = path.resolve(process.cwd(), 'data/inquiries.json');
        const subscribersFile = path.resolve(process.cwd(), 'data/subscribers.json');

        const readJson = (file) => {
          try {
            if (!fs.existsSync(file)) return [];
            return JSON.parse(fs.readFileSync(file, 'utf-8'));
          } catch {
            return [];
          }
        };

        const writeJson = (file, data) => {
          fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
        };

        // POST /api/contact
        if (url === '/api/contact' && req.method === 'POST') {
          readBody().then(body => {
            const { name, email, message, phone, company, projectType, budget, type } = body;
            if (!name || !email || !message) {
              return jsonResponse(400, { error: 'Name, email, and message are required.' });
            }
            const inquiries = readJson(inquiriesFile);
            const newInquiry = {
              id: 'inq-' + Date.now(),
              name: String(name).trim(),
              email: String(email).trim(),
              phone: phone ? String(phone).trim() : '',
              company: company ? String(company).trim() : '',
              type: type || 'General Contact',
              projectType: projectType || 'Not specified',
              budget: budget || 'Not specified',
              message: String(message).trim(),
              createdAt: new Date().toISOString(),
              status: 'new'
            };
            inquiries.unshift(newInquiry);
            writeJson(inquiriesFile, inquiries);
            return jsonResponse(201, { success: true, inquiry: newInquiry });
          }).catch(() => {
            return jsonResponse(400, { error: 'Invalid JSON payload' });
          });
          return;
        }

        // GET /api/inquiries
        if (url === '/api/inquiries' && req.method === 'GET') {
          const inquiries = readJson(inquiriesFile);
          return jsonResponse(200, inquiries);
        }

        // DELETE /api/inquiries
        if (url.startsWith('/api/inquiries') && req.method === 'DELETE') {
          readBody().then(body => {
            const id = body.id || (req.url.includes('?') ? new URLSearchParams(req.url.split('?')[1]).get('id') : null);
            let inquiries = readJson(inquiriesFile);
            inquiries = inquiries.filter(i => i.id !== id);
            writeJson(inquiriesFile, inquiries);
            return jsonResponse(200, { success: true });
          }).catch(() => {
            return jsonResponse(400, { error: 'Failed to delete inquiry' });
          });
          return;
        }

        // POST /api/newsletter
        if (url === '/api/newsletter' && req.method === 'POST') {
          readBody().then(body => {
            const { email } = body;
            if (!email || !email.includes('@')) {
              return jsonResponse(400, { error: 'Valid email is required.' });
            }
            const subscribers = readJson(subscribersFile);
            const exists = subscribers.some(s => s.email.toLowerCase() === email.toLowerCase());
            if (!exists) {
              subscribers.unshift({
                id: 'sub-' + Date.now(),
                email: email.trim(),
                createdAt: new Date().toISOString()
              });
              writeJson(subscribersFile, subscribers);
            }
            return jsonResponse(201, { success: true, message: 'Subscribed successfully!' });
          }).catch(() => {
            return jsonResponse(400, { error: 'Invalid payload' });
          });
          return;
        }

        // GET /api/subscribers
        if (url === '/api/subscribers' && req.method === 'GET') {
          const subscribers = readJson(subscribersFile);
          return jsonResponse(200, subscribers);
        }

        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiPlugin()],
});
