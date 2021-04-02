const apiURL = 'http://localhost:3000';

const FrameworkService = {
    createFramework: (value) => {
        console.log(JSON.stringify({value}));
        fetch(apiURL + '/frameworks', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify({'framework':value})
        })
        .then(async res => {
            const data = await res.json();

            if (!res.ok) {
                const error = (data && data.message) || res.status;
                return Promise.reject(error);
            } else {
                console.log("framework submitted successefully!");
            }
        })
        .catch(e => {
            console.error('There was an error!', e);
        })
    },

    createGuidelines: (value) => {
        console.log(JSON.stringify({value}));
        fetch(apiURL + '/frameworks/:frameworkId/guidelines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify({'guideline': value}),
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