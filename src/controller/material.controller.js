const materialService = require('../service/material.service')

const listAll = async (req, res) => {
    const item = await materialService.listAll()
    res.send(item)
}

const save = async (req, res) => {
    const item = await materialService.save(req.body)
    res.send(item)
}

const update = async (req, res) => {
    const item = await materialService.update(req.params.id, req.body)
    res.send(item)
}

const remove = async (req, res) => {
    await materialService.remove(req.params.id)
    res.send('Material removed with successful!')
}

module.exports = {
    listAll,
    save,
    update,
    remove
}