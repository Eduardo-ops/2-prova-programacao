const teamService = require('../service/team.service')

const listAll = async (req, res) => {
    const item = await teamService.listAll()
    res.send(item)
}

module.exports = {
    listAll,
}