//src/utils/hashPassword.js 

const bcrypt = require('bcrypt');

/* Hash a plain text password
** @param { string } password 
** @return { string } Hashed password
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

/* Compare password with hash 
** @param {string} password 
** @param {string} hash
** @return {boolean} true if match, false otherwise
 */

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = {
    hashPassword,
    comparePassword
};


