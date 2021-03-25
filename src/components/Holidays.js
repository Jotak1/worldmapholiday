import axios from 'axios';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from './Spinner';
import Error from './Error';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function Holidays({Country}) {
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [errormsg, setErrorMsg] = React.useState([]);

    const thisyear = new Date().getFullYear();
    const APIcountry =`https://date.nager.at/api/v2/publicholidays/${thisyear}/${Country}`;
    useEffect(() => {
        const consultarApi = async () => {
            try {
              const response =  await axios.get(`https://private-cors-jotak1.herokuapp.com/${APIcountry}`)
              setResult(response.data);
              setLoading(false);
            } catch (error) {
                setErrorMsg(error);
                setError(true);
                 setLoading(false);
            }
        };
        consultarApi();
    },[]);

    const classes = useStyles();

    return (
        <div>
            {loading ? <Spinner/> : (error ?  <Error errormsg={errormsg}/> : (
           <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Local Name</TableCell>
                    <TableCell align="right">Name</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {result.map((row) => (
                    <TableRow key={row.date+row.localName}>
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    <TableCell align="right">{row.localName}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>) )}
        </div>
    );
}
export default Holidays;