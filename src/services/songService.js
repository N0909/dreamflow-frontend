import api from "../api/axios.js";

export default async function getSongs(page_no, page_size) {
    const response = await api.get(`/songs?page_no=${page_no}&page_size=${page_size}`);

    return response.data;
}