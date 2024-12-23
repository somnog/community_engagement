const User = require('../models/user');

// Save new user
exports.create_user = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "Email is already registered.",
            });
        }

        const new_user = new User({
            name,
            phone,
            email,
            password, // Storing plain text password (not secure)
        });

        await new_user.save();

        res.status(201).json({
            success: true,
            msg: "User registered successfully.",
            user: {
                id: new_user._id,
                name: new_user.name,
                email: new_user.email,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "An error occurred during registration.",
            error: err.message,
        });
    }
};

// Get all users
exports.get_users = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "An error occurred while retrieving users.",
            error: err.message,
        });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password }); // Directly comparing plain-text password
        if (!user) {
            return res.status(401).json({
                success: false,
                msg: "Invalid credentials.",
            });
        }

        res.status(200).json({
            success: true,
            msg: "Successfully logged in.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "An error occurred during login.",
            error: err.message,
        });
    }
};
