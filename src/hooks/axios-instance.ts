import axios from 'axios';



export const client =  () => {
    // console.log('inside client',token)
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    return {
        get: async (url:string, options = {}) => await axios.get(url, { ...defaultOptions, ...options })
    };
};
