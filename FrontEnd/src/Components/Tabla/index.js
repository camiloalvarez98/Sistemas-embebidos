import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import Box from '@mui/material/Box';
//import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

/*
const useStyles = makeStyles({
    titulo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
*/

export default function Tabla() {
    //const classes = useStyles();
    const [data, setData] = useState([]);
    const [clockState, setClockState] = useState();

    

    const getEstacionamientos = async() =>{
        await axios.get('https://sistembebidos.herokuapp.com/router/disponiblecuadrante')
        .then(response =>{
           setData(response.data)
           console.log(response)
        });
    }
    
    useEffect (() => {
        getEstacionamientos();
    },[])

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, [])
    
    return (
        <div align  = 'center'>
            <br/>
            <Box
                sx = {{
                    width:{
                        xs: 300,
                        sm: 400,
                        md: 600,
                        lg: 800,
                        xl: 1200,
                    }
                }}
                color = 'contrastText'
                border = {1}
                borderColor = '#0a9396' 
                bgcolor={'white'}
            >
                <h2
                >
                    Espacios disponibles en tiempo real: {clockState}
                </h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Número de cuadrante</TableCell>
                                <TableCell align='center'>Nombre sección</TableCell>
                                <TableCell align='center'>Cantidad de espacios disponibles</TableCell>
                            </TableRow>
                        </TableHead> 
                        <TableBody>
                            {data.map(estacionamiento =>(
                                <TableRow sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell align='center'>{estacionamiento.idcuadrante}</TableCell>
                                    <TableCell align='center'>{estacionamiento.nombre}</TableCell>
                                    <TableCell align='center'>{estacionamiento.disponibles}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>   
            <br/>
        </div> 
    )
}