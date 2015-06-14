var POSTS_DIR = '/Users/rasmus/blog/_posts'
var URL_MAP_PATH = '/Users/rasmus/blog/tumblr-urls.json'

console.log('{');
var fs = require('fs')
fs.readdirSync(POSTS_DIR).filter(function (filename) {
  return filename.indexOf('-') !== -1 && filename.indexOf('.') !== -1;
}).forEach(function (filename) {
  try {
    var contents = fs.readFileSync(POSTS_DIR + '/' + filename, 'utf8');
    var headers = contents.substr(0, contents.indexOf('\n---\n'));
    var tumblr_id = headers.match(/^tumblr_id: (.+)/m)[1]
    var url_path = filename.split('-');
    url_path = url_path[0]+'/'+url_path[1]+'/'+url_path[2]+'/'+
               url_path.slice(3).join('-').replace(/\.[^\.]+$/, '.html');
    console.log('%j: %j,', tumblr_id, url_path);
  } catch (e) {
    console.error(e);
  }
})
console.log('}');
