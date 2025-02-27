import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


console.log(API_URL);




export const uploadPhoto = async (formData) => axios.post(`${API_URL}/upload`, formData);


export const fetchPhotos = async () => axios.get(API_URL);


export const deletePhoto = async (id) => axios.delete(`${API_URL}/${id}`);