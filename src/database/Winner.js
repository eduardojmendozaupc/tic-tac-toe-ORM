const { Winner } = require("../models/winners.model");

/**
 * @openapi
 * components:
 *   schemas:
 *     Winner:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: X
 *         date:
 *           type: string
 *           example: 14/05/2023
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */
const getAllWinners = async () => {
  try {
    const winners = await Winner.findAll();
    return winners;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneWinner = async (winnerId) => {};

const createNewWinner = async (newWinner) => {
  try {
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneWinner = (winnerId, changes) => {
  try {
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneWinner = (winnerId) => {
  try {
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllWinners, createNewWinner, getOneWinner, deleteOneWinner, updateOneWinner };
