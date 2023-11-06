const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const UserRoles = require("../models/userRoles");

//create a User
exports.createRole = catchAsyncErrors(async (req, res, next) => {
  let { role } = req.body;

  try {
    const userRole = await UserRoles.create({
      role,
    });

    if (userRole) {
      return res.status(200).json({
        success: 1,
        error: 0,
        message: "User Role created successfully.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error,
        message: "Error in creating user role.",
      });
    }
  } catch (err) {
    if (err.code === 11000 || err.code === 11001) {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Role already exist.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in creating user role.",
      });
    }
  }
});

//get all User
exports.getAllRoles = catchAsyncErrors(async (req, res, next) => {
  try {
    const userRoleList = await UserRoles.find({});

    if (userRoleList) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: userRoleList,
        message: "success.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in getting all user roles.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in getting all user roles.",
    });
  }
});

//get User by id
exports.getRoleById = catchAsyncErrors(async (req, res, next) => {
  try {
    const { roleId } = req.body;

    const userRole = await UserRoles.findById(roleId);

    if (userRole) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: userRole,
        message: "success.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in getting user role.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in getting user role.",
    });
  }
});

//update User by id
exports.updateRole = catchAsyncErrors(async (req, res, next) => {
  try {
    const { roleId } = req.body;

    const userRole = await UserRoles.findByIdAndUpdate(
      roleId,
      { $set: req.body },
      { new: true }
    );

    if (userRole) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: user,
        message: "User role Updated Successfully.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in updating user.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in updating user role.",
    });
  }
});

//deleteUser User by id
exports.deleteRole = catchAsyncErrors(async (req, res, next) => {
  try {
    const { roleId } = req.body;

    const userRole = await UserRoles.findByIdAndRemove(roleId);

    if (userRole) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: user,
        message: "User role Deleted Successfully.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in deleting user role.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in deleting user role.",
    });
  }
});
