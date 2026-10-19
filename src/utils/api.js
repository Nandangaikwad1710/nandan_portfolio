// API utility with real backend integration and fallback to localStorage

const STORAGE_KEYS = {
  INQUIRIES: 'nandan_inquiries',
  SUBSCRIBERS: 'nandan_subscribers'
};

export async function submitContact(data) {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('API request failed, saving to local storage fallback:', err);
  }

  // Fallback to localStorage
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
  const newInquiry = {
    id: 'inq-' + Date.now(),
    ...data,
    createdAt: new Date().toISOString(),
    status: 'new'
  };
  existing.unshift(newInquiry);
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(existing));
  return { success: true, inquiry: newInquiry };
}

export async function getInquiries() {
  try {
    const res = await fetch('/api/inquiries');
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('API request failed, reading from local storage:', err);
  }
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
}

export async function deleteInquiry(id) {
  try {
    const res = await fetch('/api/inquiries', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    if (res.ok) return true;
  } catch (err) {
    console.warn('Delete API failed, falling back:', err);
  }
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
  const filtered = existing.filter(i => i.id !== id);
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(filtered));
  return true;
}

export async function submitNewsletter(email) {
  try {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Newsletter API failed, falling back:', err);
  }

  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]');
  if (!existing.some(s => s.email === email)) {
    existing.unshift({
      id: 'sub-' + Date.now(),
      email,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(existing));
  }
  return { success: true, message: 'Subscribed successfully!' };
}

export async function getSubscribers() {
  try {
    const res = await fetch('/api/subscribers');
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Get subscribers API failed, falling back:', err);
  }
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]');
}
