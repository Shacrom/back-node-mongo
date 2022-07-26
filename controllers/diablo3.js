const config = require("../config");
const { response } = require('express');
const { getToken } = require("./requests");
const axios = require('axios');

const getSeasonLeaderboard = async (req, res = response) => {

    const region = "us";
    const id = "1";
    const leaderboard = "achievement-points";
    let url = "";

    try {

        url = config.apiHosts.us + "/data/d3/season/" + id + "/leaderboard/" + leaderboard + "?" + "access_token=US4WEPTgusC09Y9oaBRsC3er2lX5WrsNuR";
        let resp = await axios.get(url)
        return res.status(200).json({
            ok: true,
            url: url,
            data: resp.data,
        })
        
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error: "No se ha podido conseguir la Leaderboard",
        })
    }

}

module.exports = {
    getSeasonLeaderboard
}