const axios = require('axios')


const clima = async (ciudad,pais) => {

    const api_key = '5b5f642707741f7a72bf77b33b1cd1a3';
    const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let url ='';
    if(Object.is(pais,'')){
        url = decodeURI(`${api} ${ciudad}&appid=${api_key}&units=metric`)
    }else{
        url = decodeURI(`${api} ${ ciudad },${pais}&appid=${api_key}&units=metric`)
        
    }
    let data = await axios.get(url)

    return data.data
}

module.exports = {
    clima
}