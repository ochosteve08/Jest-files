
const axios = require('axios');



    //  console.log(axios);
const functions = {
   
    swapiGetter: (id)=>
axios
.get(`https://swapi.dev/api/people/${id}/`)
.then((response)=> response.data.name)
.catch((error)=> console.log(error))

}

module.exports = functions;