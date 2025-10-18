export const api = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  async post(path, body){ const res = await fetch(this.baseURL+path, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)}); return res.json(); },
  async get(path){ const res = await fetch(this.baseURL+path); return res.json(); }
}
