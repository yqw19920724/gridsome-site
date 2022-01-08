import axios from "axios";

const contactApi = async (data) => {
    const { data: res } = await axios({
        method: 'post',
        url: `${process.env.GRIDSOME_API_URL}/contacts`,
        data: { data }
    })
    return res;
}

export {
    contactApi 
}