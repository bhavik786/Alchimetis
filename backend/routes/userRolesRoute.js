const express = require("express");
const {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} = require("../controller/userRolesController");

const router = express.Router();

//------------------ SIMPLE ROUTES --------------------------------------//

router.route("/createRole").post(createRole);
router.route("/getAllRoles").get(getAllRoles);
router.route("/getRoleById").post(getRoleById);
router.route("/updateRole").post(updateRole);
router.route("/deleteRole").post(deleteRole);

module.exports = router;
