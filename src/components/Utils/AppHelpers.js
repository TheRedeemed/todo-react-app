
const isUserLoggedIn = () => {
    let userInfo = sessionStorage.getItem('authenticatedUser')
    return userInfo ? userInfo : ''
}

const AppHelpers = {
    isUserLoggedIn
}

export default AppHelpers