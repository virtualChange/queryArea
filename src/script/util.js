module.exports = {
    //得到所有的省份
    async getprovinces() {
        return await fetch('/api/local').then(rep => rep.json())
    },
    async getprovincesList(id) {
        if (id === "500000000000") {
            return;
        }
        return await fetch(`/api/local?parentId=${id}`).then(rep => rep.json())
    }
}