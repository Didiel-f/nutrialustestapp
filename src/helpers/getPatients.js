

    // Me parece más ordenado el código separando esta parte relacionada la optención de la data

    export const getPatients = async() => {
        const url = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com/';
        const resp = await fetch( url );
        const data = await resp.json();

        return data;
    }

    
