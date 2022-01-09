const axios = require('axios')
const qs = require('qs');

/**
 * 获取文章列表数据
 * @param {*} addCollection 添加进collection的方法
 */
const getPost = async (addCollection) => {
    const query = qs.stringify({
        populate: '*',
    }, {
        encodeValuesOnly: true,
    });
    const collection = addCollection('Post')
    const { data } = await axios.get(`${process.env.GRIDSOME_API_URL}/posts?${query}`)
    data.data.forEach(item => {
        const cover = item.attributes.cover.data.attributes.url
        const tags = item.attributes.tags.data.map(res => ({
            id: res.id,
            title: res.attributes.title
        }))
        collection.addNode({
            id: item.id,
            title: item.attributes.title,
            cover,
            is_publish: item.attributes.is_publish,
            content: item.attributes.content,
            tags,
            createdAt: item.attributes.createdAt,
            updatedAt: item.attributes.updatedAt,
            publishedAt: item.attributes.publishedAt,
        })
    })
}

module.exports = {
    getPost
}