import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();
function markdownToHtml(str) {
    return md.render(str)
}

export {
    markdownToHtml
}