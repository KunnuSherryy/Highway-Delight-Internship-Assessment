import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getExperiences() {
  const { data } = await api.get('/experiences');
  return data;
}

export async function getExperienceById(id) {
  const { data } = await api.get(`/experiences/${id}`);
  return data;
}

export async function bookExperience(payload) {
  const { data } = await api.post('/bookings', payload);
  return data;
}

export async function validatePromo(code, baseAmount) {
  const { data } = await api.post('/promo/validate', { code, baseAmount });
  return data;
}


