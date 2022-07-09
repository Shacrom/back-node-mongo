const blizzard = require('blizzard.js')

const wowClient = async (req, res = response) => {

    const wowClient = await blizzard.wow.createInstance({
        key: process.env.BLIZZARD_CLIENT_ID,
        secret: process.env.BLIZZARD_CLIENT_SECRET,
        origin: 'us', // optional
        locale: 'en_US', // optional
        token: '', // optional
      })
    console.log(wowClient);

    res.status(200).json({
        ok: true,
        wowClient
    })
}

module.exports = {
    wowClient
}