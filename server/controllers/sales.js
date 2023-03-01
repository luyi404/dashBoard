import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
    try {
        const sales = await OverallStat.find();
        res.status(200).json(sales[0]);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}