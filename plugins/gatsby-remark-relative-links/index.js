const visit = require('unist-util-visit');
module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', node => {
    if (
      node.url &&
      !node.url.startsWith('//') &&
      !node.url.startsWith('http') &&
      node.url.startsWith('/post')
    ) {
        console.log('befoer:' +node.url)
      node.url = node.url.replace(/\/posts\/(\w.*).md(#.*)?$/, (match, base, hash) => {
        return `/posts/${base}/${hash?hash:""}`
      })
      console.log('after:' + node.url)
    }
  });

  return markdownAST;
};