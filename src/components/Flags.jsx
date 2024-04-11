import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

Flags.propTypes = {
    dataSuccess: PropTypes.object
};

export default function Flags(props = {}) {
  const [openModal, setOpenModal] = React.useState(false);
  const [countryData, setCountryData] = React.useState({});

  function handleOpen(country, status) {
    setOpenModal(status);
    setCountryData(country);
  };

  function handleClose() {
    setOpenModal(false);
  };

  function renderModal() {
    return (
      <Dialog
        open={openModal}
        onClose={() => handleClose()}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{countryData?.name?.common}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <img
              src={countryData?.flags?.png}
              alt=''
              width="100%"
            />
            {`Capital: ${countryData?.capital[0]}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    )
  }

  function renderFlags() {
    const data = props.dataSuccess;
    return (
      <Grid container spacing={2}>
        {
          data?.map((country, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Tooltip title={country?.name?.common} arrow followCursor sx={{ fontSize: '2rem !important' }}>
                  <Card onClick={() => handleOpen(country, true)}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={country?.flags?.png}
                        alt={country?.flags?.alt}
                      />
                    </CardActionArea>
                  </Card>
                </Tooltip>
              </Grid>
            )
          })
        }
      </Grid>
    )
  }

  function renderContent() {
    const data = props.dataSuccess;

    return (
      <React.Fragment>
        <Typography
          variant="h4"
          component="h1"
          color="rgba(80,80,80,1)"
          sx={{
            fontWeight: 'bold',
            margin: { xs: '1rem', sm: '2rem' },
            fontSize: { xs: '2rem', sm: '3rem' },
            textAlign: 'center'
          }}
          dangerouslySetInnerHTML={{ __html: `${data?.length} PAISES Y BANDERAS DEL MUNDO` }}
        />
      </React.Fragment>
    );
  }

  function renderContainer() {
    return (
      <Box sx={{ margin: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>{renderFlags()}</Grid>
          <Grid item xs={12} md={6}>
            <div style={{ position: 'fixed' }}>
              {renderContent()}
              <img
                src="https://www.geospatialworld.net/wp-content/uploads/2019/10/Gog1.png"
                alt=''
                width="100%"
              />
            </div>
          </Grid>
        </Grid>
        {openModal && renderModal()}
      </Box>
    );
  }

  function render() {
    return renderContainer();
  }

  return render();
}