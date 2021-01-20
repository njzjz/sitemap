const fs = require('fs')
const YAML = require('yaml')

const file = fs.readFileSync(__dirname+'/sitemap.yml', 'utf8')
sitemap = YAML.parse(file)
module.exports = sitemap
