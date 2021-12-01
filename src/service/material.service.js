const { material } = require('../models/index')

const listAll = async () => {
    return item = await material.findAll()
}

const save = async data => {
    return item = await material.create(data)
}

const update = async (materialId, data) => {
    return item = await material.update(data, {
        where: {
            id: materialId
        }
    })
}

const remove = async materialId => {
    return item = await material.destroy({
        where: {
            id: materialId
        }
    })
}

module.exports = {
    listAll,
    save,
    update,
    remove
}