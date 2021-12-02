const teamService = require('../service/team.service')

const listAll = async (req, res) => {
    const item = await teamService.listAll()
    res.status(200).send(item)
}

module.exports = {
    listAll,
}