const fs = require('fs')
const YAML = require('yaml')

const file = fs.readFileSync('./sitemap.yml', 'utf8')
sitemap = YAML.parse(file)
module.exports = sitemap