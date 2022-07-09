import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom'
import AssessmentIcon from '@mui/icons-material/Assessment';


export default function Barra() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <AssessmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }} variant="h6" component="div" >
            Información Sistema de Estacionamiento
          </Typography>
          <Link style={{ textDecoration: 'none' }} color='inherit' to ='/MapaUniversitario'>
            <Button style={{color:"#0077b6",mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              backgroundColor:"#FFFFFF",
              fontWeight:550,
              }}
            > 
              <MapIcon/>Mapa universitario
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}