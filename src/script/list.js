const util = require('./util')


const prov = document.getElementsByClassName("provinces")[0]
provlist()

function provlist() {
    util.getprovinces().then(rep => {
        console.log(rep)
        for (const p of rep) {
            prov.innerHTML += `<li><a href="./detail.html?parentId=${p.id}&name=${p.areaName}">${p.simpleName}</a></li>`
        }

    })
}