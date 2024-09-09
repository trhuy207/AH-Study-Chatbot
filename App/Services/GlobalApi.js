import axios from "axios";

async function getOpenAIApi(msg) {
    const url = "https://api.phattriennanglucso.com/index.json";
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const apiUrl = await response.json().then(resp => {
            return resp.baseUrl[0].URL
        })

        const BASE_URL = apiUrl

        const getData = axios.get(BASE_URL+"?ques="+msg)

        return getData
    } catch (error) {
        console.error(error.message);
    }
}

export default {getOpenAIApi}