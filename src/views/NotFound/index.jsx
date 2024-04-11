import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', border: '1px solid lime'}}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{ color: 'rgba(100,100,100,1) !important' }}
      >
        <AdbIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h1" sx={{ fontWeight: '500' }}>404</Typography>
        <Typography variant="h6" sx={{ marginLeft: '1rem' }}>{`[Página no encontrada]`}</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ color: 'rgba(100,100,100,1) !important' }}
      >
        <Button variant="outlined" onClick={() => navigate("/")}>Sacame de aqui</Button>
        <Button variant="outlined" component={RouterLink} to={"/"}>Ir a casa</Button>
      </Stack>
    </div>
  );
}