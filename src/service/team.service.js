const { team } = require('../models/index')

const listAll = async () => {
    return item = await team.findAll()
}

module.exports = {
    listAll,
}