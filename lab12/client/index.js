import Axios from 'axios';

async function sendPutRequest() {

    const response = await Axios.put(
        "http://localhost:45030/example",
        {
                firstName: "Omar",
                lastName: "Montelongo"
        }
    );

    console.log(response.data);
}

sendPutRequest();