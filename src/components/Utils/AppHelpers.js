import moment from 'moment'

const isUserLoggedIn = () => sessionStorage.getItem('authenticatedUser') ? true : false

const formatDate = (date) => moment(date).format('YYYY-MM-DD')

const AppHelpers = {
    isUserLoggedIn,
    formatDate
}

export default AppHelpers