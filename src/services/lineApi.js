import axios from "axios";

const lineApi = axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})

export const getLines = async () => {
    const response = await lineApi.get("/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
    return response.data
}

export default lineApi;