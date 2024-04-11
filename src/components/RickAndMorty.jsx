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
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';

Flags.propTypes = {
	dataSuccess: PropTypes.object
};

export default function Flags(props = {}) {

	function renderAccordionDetails(character) {
		return (
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>{`Status: ${character?.status}`}</Grid>
				<Grid item xs={12} md={6}>{`Origin: ${character?.origin?.name}`}</Grid>
			</Grid>
		)
	}

	function renderAccordion(character) {
		return (
			<Box>
				<Accordion sx={{ boxShadow: 'none' }}>
					<AccordionSummary
						expandIcon={<AddIcon sx={{ color: 'tomato' }} />}
						aria-controls="panel1-content"
						id="panel1-header"
						sx={{ border: 'none !important', width: 'max-content', paddingLeft: '0rem !important', color: 'tomato' }}
					>MAS
					</AccordionSummary>
					<AccordionDetails>
						{renderAccordionDetails(character)}
					</AccordionDetails>
				</Accordion>
			</Box>
		)
	}

	function renderCharacters() {
		const data = props.dataSuccess;
		return (
			
			<Grid container spacing={2}>
				{
					data?.results?.map((character, index) => {
						return (
							<Grid item xs={12} key={index}>
								<Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box sx={{ display: 'flex', flexDirection: 'column' }}>
										<CardContent sx={{ flex: '1 0 auto' }}>
											<Typography component="div" variant="h5">
												{character?.name}
											</Typography>
											<Typography variant="subtitle1" color="text.secondary" component="div">
												{character?.gender}
											</Typography>
											{renderAccordion(character)}
										</CardContent>
									</Box>
									<CardMedia
										component="img"
										sx={{ width: 150, height: 150 }}
										image={character?.image}
										alt="Live from space album cover"
									/>
								</Card>
							</Grid>
						)
					})
				}
			</Grid>
		)
	}

	function renderContent() {

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
					dangerouslySetInnerHTML={{ __html: `La API de Rick y Morty` }}
				/>
			</React.Fragment>
		);
	}

	function renderContainer() {
		return (
			<Box sx={{ margin: '2rem' }}>
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={12}>{renderContent()}</Grid>
					<Grid item xs={12} md={6}>{renderCharacters()}</Grid>
				</Grid>
			</Box>
		);
	}

	function render() {
		return renderContainer();
	}

	return render();
}