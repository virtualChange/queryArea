const {
    getprovincesList
} = require('./util')
const qs = require('query-string');
const search = qs.parse(location.search);


const h1 = document.getElementsByClassName('title')[0];
h1.innerText = search.name

const dl = document.getElementsByTagName('dl')[0];

getprovincesList(search.parentId).then(rep => {
    if (!rep) {
        return
    }
    for (p of rep) {
        dl.innerHTML += `<dd>${p.areaName}</dd>`
    }
})