
const isUserLoggedIn = () => sessionStorage.getItem('authenticatedUser') ? true : false

const AppHelpers = {
    isUserLoggedIn
}

export default AppHelpers