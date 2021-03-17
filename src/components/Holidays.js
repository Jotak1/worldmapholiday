
import axios from 'axios';
import React, { useEffect } from 'react';

function Holidays({Country}) {
    const [result, setResult] = React.useState([]);
    const thisyear = new Date().getFullYear();
    const APIcountry =`https://date.nager.at/api/v2/publicholidays/${thisyear}/${Country}`;
    
    console.log(Country);
    useEffect(() => {
        const consultarApi = async () => {
            const respuesta = await axios.get(APIcountry);
            console.log(respuesta);
        }
        consultarApi();
    })
    return (
        <div>
           
        </div>
    );
}
export default Holidays;