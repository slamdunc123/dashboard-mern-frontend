import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
	{
		title: 'Free',
		price: '0',
		description: [
			'10 users included',
			'2 GB of storage',
			'Help center access',
			'Email support',
		],
		buttonText: 'Sign up for free',
		buttonVariant: 'outlined',
	},
	{
		title: 'Pro',
		subheader: 'Most popular',
		price: '15',
		description: [
			'20 users included',
			'10 GB of storage',
			'Help center access',
			'Priority email support',
		],
		buttonText: 'Get started',
		buttonVariant: 'contained',
	},
	{
		title: 'Enterprise',
		price: '30',
		description: [
			'50 users included',
			'30 GB of storage',
			'Help center access',
			'Phone & email support',
		],
		buttonText: 'Contact us',
		buttonVariant: 'outlined',
	},
];
const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
			'Resource name',
			'Another resource',
			'Final resource',
		],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

function PricingContent() {
	return (
		<>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>

			<Container maxWidth='md' component='main'>
				<Grid container spacing={5} alignItems='flex-end'>
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === 'Enterprise' ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									action={
										tier.title === 'Pro' ? (
											<StarIcon />
										) : null
									}
									subheaderTypographyProps={{
										align: 'center',
									}}
									sx={{
										backgroundColor: (theme) =>
											theme.palette.mode === 'light'
												? theme.palette.grey[200]
												: theme.palette.grey[700],
									}}
								/>
								<CardContent>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'baseline',
											mb: 2,
										}}
									>
										<Typography
											component='h2'
											variant='h3'
											color='text.primary'
										>
											£{tier.price}
										</Typography>
										<Typography
											variant='h6'
											color='text.secondary'
										>
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component='li'
												variant='subtitle1'
												align='center'
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={
											tier.buttonVariant as
												| 'outlined'
												| 'contained'
										}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}

export default function Pricing() {
	return <PricingContent />;
}
