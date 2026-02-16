import url from 'url'

const urlString ='https://www.google.com/search?q=hello+world'

const urlObj = new URL(urlString)

console.log(urlObj.pathname)
console.log(url.format(urlObj))

console.log(import.meta.url)

console.log(urlObj.search)

const params = new URLSearchParams(urlObj.search)
params.append('limit', '5')
params.delete('q')

console.log(params )