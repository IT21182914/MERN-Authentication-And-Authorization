const { Signup, Login } = require("../controllers/authController");
const router = require("express").Router();
const { userVerification } = require("../middlewares/authMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

module.exports = router;
