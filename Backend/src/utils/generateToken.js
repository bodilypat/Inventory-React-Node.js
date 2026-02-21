//src/utils/generateToken.js 

const jwt = require('jsonwebtoken');
require('dotenv').config();

/* Generate JWT Token for user authentication
** @param {string} userId - MongoDB user_id
** @param { string } expiresIn - Token expiration time
** @returns {string} JWT token
 */

const generateToken = (userId, expiresIn = '1h') => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

module.exports = generateToken;
