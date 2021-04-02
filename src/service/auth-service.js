const apiURL = 'http://localhost:3000';

const AuthService = {
    register: (user) => {
        console.log(user);
        fetch(apiURL + '/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify({user})
        })
        .then(async res => {
            const data = await res.json();

            if (!res.ok) {
                const error = (data && data.message) || res.status;
                return Promise.reject(error);
            } else {
                console.log("registerd successefully!");
            }
        })
        .catch(e => {
            console.error('There was an error!', e);
        })
    },

    getUser: () => {
        
    },

    login: (user) => {
        console.log(user);
        fetch(apiURL+'/users/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(async res => {
            const data = await res.json();

            if (!res.ok) {
                const error = (data && data.message) || res.status;
                return Promise.reject(error);
            } else {
                console.log("logged in successefully!");
            }
        })
        .catch(e => {
            console.error('There was an error!', e);
        })
    }
};

export default AuthService;