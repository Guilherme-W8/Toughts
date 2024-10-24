function checkAuth(request, response, next) {
    const userId = request.session.userId;

    if (!userId) {
        return response.redirect('/login');
    }

    next();
}

export default checkAuth;