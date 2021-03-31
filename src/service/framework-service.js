const apiURL = 'http://localhost:3000';

const FrameworkService = {
    createFramework: (value) => {
        fetch(apiURL + '/frameworks', {
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
                return data;
            })
            .catch(e => {
                console.error('There was an error!', e);
            })
    },

    createGuidelines: (value) => {
        fetch(apiURL + '/frameworks/:frameworkId/guidelines', {
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
                return data;
            })
            .catch(e => {
                console.error('There was an error!', e);
            }) 
    }
};

export default FrameworkService;