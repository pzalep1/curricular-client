import PropTypes from 'prop-types';

async function getUser(token) {
    return fetch(process.env.REACT_APP_API_URL+"/users/tokens")
        .then(res => res.json())
}

export default function User({setUser}) {

    async function HandleUserReq() {
        const access_token = sessionStorage.getItem('token');
        var user = await getUser({
            access_token
        });
        setUser(user._id);
    }

    var userObject = HandleUserReq();

    return userObject;

}

User.propTypes = {
    setUser: PropTypes.func.isRequired
}