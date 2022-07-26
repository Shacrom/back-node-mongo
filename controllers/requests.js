const blizzard = require('blizzard.js');
const { response } = require('express');

const getToken = async (req, res = response) => {

    const wowClient = await blizzard.wow.createInstance({
        key: process.env.BLIZZARD_CLIENT_ID,
        secret: process.env.BLIZZARD_CLIENT_SECRET,
        origin: 'us', // optional
        locale: 'en_US', // optional
        token: '', // optional
      })

    res.status(200).json({
        ok: true,
        wowClient
    })
}

module.exports = {
    getToken,
}