const RentService = require('../services/RentService');

const createRent = async (req, res) => {
    try {
        const { userId, bookId, startDate, endDate, rentStatus } = req.body;
        if (!userId || !bookId || !startDate || !endDate ) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Missing required fields'
            });
        }
        const response = await RentService.createRent(req);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const updateRentStatus = async (req, res) => {
    try {
        const rentId = req.params.id
        const data = req.body
        const response = await RentService.updateRentStatus(rentId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getRentDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        const response = await RentService.getRentDetails(userId);

        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
};

const deleteRent = async (req, res) => {
    try {
        const rentId = req.params.id
        const rentStatus = req.body.rentStatus
        const response = await RentService.deleteRent(rentId, rentStatus)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


module.exports = {
    createRent,
    updateRentStatus,
    getRentDetails,
    deleteRent
}