import axios from "axios";

axios.interceptors.response.use(
    res => res,
    err => {
        throw err;
    }
);


export default class Axios {
    static __headers = (headers) => {
        const result = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        };
        for (const header in headers) result.headers[header] = headers[header];

        return result;
    };

    static get = async (url, headers = {}) => {
        const config = Axios.__headers(headers);
        return await axios.get(url, config);
    };

    static post = async (url, body = {}, headers = {}) => {
        const config = Axios.__headers(headers);
        return await axios.post(url, body, config);
    };

    static put = async (url, body = {}, headers = {}) => {
        const config = Axios.__headers(headers);

        return await axios.put(url, body, config);
    };

    static patch = async (url, body = {}, headers = {}) => {
        const config = Axios.__headers(headers);

        return await axios.patch(url, body, config);
    };

    static delete = async (url, headers = {}) => {
        const config = Axios.__headers(headers);

        return await axios.delete(url, config);
    };
}
