const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");

//create a User
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  let { email, lastName, firstName, password, roleId } = req.body;
  console.log("====================================");
  console.log(email, lastName, firstName, password, roleId);
  console.log("====================================");

  try {
    const user = await User.create({
      email,
      lastName,
      firstName,
      password,
      roleId,
    });

    if (user) {
      return res.status(200).json({
        success: 1,
        error: 0,
        message: "User created successfully.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error,
        message: "Error in creating user.",
      });
    }
  } catch (err) {
    if (err.code === 11000 || err.code === 11001) {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Email already exist.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in creating user.",
      });
    }
  }
});

//get all User
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.find({}).populate("roleId");

    if (user) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: user,
        message: "success.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in getting all user.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in getting all user.",
    });
  }
});

//get User by id
exports.getUserById = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (user) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: user,
        message: "success.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in getting user.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in getting user.",
    });
  }
});

//update User by id
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );

    if (user) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: user,
        message: "User Updated Successfully.",
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
      message: "Error in updating user.",
    });
  }
});

//deleteUser User by id
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findByIdAndRemove(userId);

    if (user) {
      return res.status(200).json({
        success: 1,
        error: 0,
        data: user,
        message: "User Deleted Successfully.",
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in deleting user.",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: 0,
      error,
      message: "Error in deleting user.",
    });
  }
});
