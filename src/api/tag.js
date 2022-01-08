const axios = require('axios')
const qs = require('qs');

/**
 * 获取标签列表数据
 * @param {*} addCollection 添加进collection的方法
 */
const getTag = async (addCollection) => {
    const query = qs.stringify({
        populate: '*',
    }, {
        encodeValuesOnly: true,
    });
    const collection = addCollection('Tag')
    const { data } = await axios.get(`${process.env.GRIDSOME_API_URL}/tags?${query}`)
    data.data.forEach(item => {
        const posts = item.attributes.posts.data.map(res => ({
            id: res.id,
            title: res.attributes.title,
            content: res.attributes.content,
            is_publish: res.attributes.is_publish,
            createdAt: res.attributes.createdAt,
            updatedAt: res.attributes.updatedAt,
        }))
        collection.addNode({
            id: item.id,
            title: item.attributes.title,
            createdAt: item.attributes.createdAt,
            updatedAt: item.attributes.updatedAt,
            posts
        })
    })
}

module.exports = {
    getTag
}