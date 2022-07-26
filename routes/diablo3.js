const { Router } = require("express");
const { getSeasonLeaderboard } = require("../controllers/diablo3");

const router = Router();

router.get('/seasonLeaderboard', getSeasonLeaderboard);

module.exports = router;