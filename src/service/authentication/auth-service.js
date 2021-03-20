const apiURL = 'http://localhost:3000';

const AuthService = {
    register: (value) => {
        console.log(value.body);
        fetch(apiURL + '/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.parse(value),
        })
            .then(async res => {
                const data = await res.json();

                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch(e => {
                console.error('There was an error!', e);
            })
    },

    secondValidationMethod: function(value) {
        //inspect the value
    }
};

export default AuthService;