
import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Holidays(props) {
    const [result, setResult] = React.useState([]);
    const APIcountry = "https://date.nager.at/api/v2/publicholidays/";
    var thisyear = new Date().getFullYear()
    console.log(props);
    useEffect(() => {
        fetch(APIcountry+thisyear+"/"+props.Country )
        .then((response) => response.json())
        .then((data) =>  setResult(data))
    })
    return (
        <div>
           
        </div>
    );
}
export default Holidays;