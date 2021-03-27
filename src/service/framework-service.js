const apiURL = 'http://localhost:3000';

const FrameworkService = {
    register: (value) => {
        fetch(apiURL + '/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: value,
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

export default FrameworkService;