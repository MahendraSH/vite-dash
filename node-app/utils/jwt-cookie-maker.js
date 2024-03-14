const jwtCookie = async (res, statusCode, user) => {
    const loginToken = user.getJwtToken();
    const options = {
        expires: new Date(
            Date.now() +
            (process.env.Cookie_Expire
                ? parseInt(process.env.Cookie_Expire) * 24 * 60 * 60 * 1000
                : 0)
        ),
        httpOnly: true,
        secure: true,
        sameSite: "none",
    };

    res.status(statusCode).cookie("loginToken", loginToken, options).json({
        success: true,
        user,
    });
};

export default jwtCookie;
