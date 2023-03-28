import { Typography, Stack, Link as MuiLink, Box, Button, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider, Grid, TableContainer, TableHead, TableRow, TableCell, Table, Paper, TableBody } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Accordion from '@mui/material/Accordion';
import Image, { StaticImageData } from 'next/image';
import { competitionDateTime, studentCompetitionDateTime } from '../src/config';
import summitImg from '../public/img/default-monochrome-white.svg';
import comptiaImg from '../public/img/Comptia-logo.svg.png';
import triplePointImg from '../public/img/triplepointsecurity.png';
import percivalImg from '../public/img/percival-logo-new-no-bg.png';
import northropImg from '../public/img/northropgrumman.png';
import hiiImg from '../public/img/hii.svg';
import corpsImg from '../public/img/22_Corps_Shield_FullColor_RGB.png';

const scheduleData = [
	{
		date: 'April 15, 2023 (In-person)',
		events: [
			{
				time: '7-8 AM',
				activity: 'Reception/Breakfast',
				details: 'Bagels, coffee, and donuts provided. Breakfast at hotel recommended, if possible',
			},
			{
				time: '8-8:30 AM',
				activity: 'Welcome / Format Overview',
				details: '',
			},
			{
				time: '8:35-9:35 AM',
				activity: 'Speaker Event',
				details: 'Stephanie Travis, Virginia Tech Hume Center',
			},
			{
				time: '9:35-10:05 PM',
				activity: 'Hungtington Ingalls Industries (HII) Talk',
				details: '',
			},
			{
				time: '10:05-11 PM',
				activity: 'Meet Percival Engineering and Triple Point Security',
				details: '',
			},
			{
				time: '11am-12pm',
				activity: 'Northrop Grumman',
				details: 'Intro and Northrop Grumman Xetron 101, Hack-A-Sat Problem Walkthroughs!',
			},
			{
				time: '12-1 PM',
				activity: 'Lunch',
				details: 'Sponsored by CyberVT',
			},
			{
				time: '1-5 PM',
				activity: 'King of the Hill CTF!',
				details: 'In-person only, 2 rounds x 2 machines, Each round end will have the machine reset',
			},
			{
				time: '5:30-8 PM',
				activity: 'Event Dinner',
				details: 'Sponsored by CyberVT',
			},
		],
	},
	{
		date: 'April 16, 2023 (Virtual + In-person)',
		events: [
			{
				time: '7am-7:45am',
				activity: 'Reception/Breakfast',
				details: 'Bagels, coffee, and donuts provided. Breakfast at hotel recommended, if possible',
			},
			{
				time: '8am-8:50am',
				activity: 'Alumni Panel',
				details: 'Former Virginia Tech graduates in the Cybersecurity workforce',
			},
			{
				time: '9am-5pm',
				activity: 'Jeopardy Style CTF',
				details: '',
			},
			{
				time: '5:30pm-6pm',
				activity: 'Closing/Awards Ceremony',
				details: '',
			},
		],
	},
];

const studentFaqQuestions = [
	{
		title: '$ ./when',
		description: 'Day 1 of Summit CTF begins ' + studentCompetitionDateTime.toLocaleDateString() + ' at ' + studentCompetitionDateTime.toLocaleTimeString() + ' and lasts for two days.',
	},
	{
		title: '$ ./where',
		description: 'Summit CTF will take place in-person or virtual for undergraduate teams.',
	},
	{
		title: '$ ./prizes',
		description: 'CyberVT has over $2,500 in prizes for the top performing student teams. Prizes include swag, CompTIA exam vouchers, and cash!',
	},
	{
		title: '$ ./eligibility',
		description: 'To be eligible for prizes, students must prove their association with an academic institution. All eligible students will recieve a 10% discount code for the CompTIA store.',
	},
	{
		title: '$ ./lodging',
		description: 'CyberVT encourages all academic institutions to attend in-person. Lodging is not provided by CyberVT and students are encouraged to reach out to your club or school leadership for funding.',
	},
	{
		title: '$ ./team-size',
		description: 'Teams will be limited to four people. However, multiple teams from the same university can compete.',
	},
];

const imageStyles = {
	width: '131px',
	height: '185px'
};

const nonStudentFaqQuestions = [
	{
		title: '$ ./when',
		description: 'Summit CTF begins ' + competitionDateTime.toLocaleDateString() + ' at ' + competitionDateTime.toLocaleTimeString() + '.',
	},
	{
		title: '$ ./where',
		description: 'Summit CTF will take place online for non-students.',
	},
	{
		title: '$ ./prizes',
		description: 'To be determined (Exciting stuff coming!).',
	},
	{
		title: '$ ./team-size',
		description: 'Teams will be limited to four people.',
	},
];

export default function Index() {
	return (
		<div>
			<Box
				width='100%'
				height='100%'
				maxWidth='lg'
				p={8}
				flexGrow={1}
				sx={{ margin: '0 auto' }}
			>
				<Stack spacing={6}>
					<Box textAlign='center'>
						<Image src={summitImg as StaticImageData} />
						<Typography variant='h4' fontFamily='monospace' style={{ overflowWrap: 'break-word' }}>
							<Typewriter
								onInit={typewriter => {
									typewriter.typeString('Virginia Tech\'s Annual CTF Competition')
										.pauseFor(3 * 1000 * 60)
										.deleteAll()
										/* Good on you for reading the source code, challenger! */
										.typeString('Okay, you waited this long. Here\'s a flag for your patience. Submit it during the competition: SummitCTF{r43act_Typ3wr1t3r_3ffect_iz_C0ol}')
										.start();
								}}
							/>
						</Typography>
					</Box>

					<Stack spacing={2}>
						<Typography variant='h5'>Frequently Asked Questions</Typography>
						<Divider variant='inset' />

						<Box>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>General Information</Typography>
								</AccordionSummary>
								<AccordionDetails>
									SummitCTF is an annual Capture the Flag (CTF) competition hosted by the Cybersecurity Club at Virginia Tech (CyberVT). The next competition will have two competition tiers: one for undergraduate competitors, and another for non-students.
								</AccordionDetails>

								<AccordionDetails>
									The main difference between the two tiers is that the non-students will not be able to compete in the King of the Hill CTF and attend in-person. We may also not be able to offer prizes for non-students, pending availability of funds from sponsors.
								</AccordionDetails>

								<AccordionDetails>
									The competition will officially start on {studentCompetitionDateTime.toLocaleDateString()} for students, and the day after for non-students.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>Details for Undergraduate Students</Typography>
								</AccordionSummary>
								<AccordionDetails>
									{studentFaqQuestions.map(it => (
										<div key={it.title}>
											<Typography mb={1} variant='h5' fontFamily='monospace'>{it.title}</Typography>
											<Typography mb={2}>{it.description}</Typography>
										</div>
									))}
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>Details for Non-Students</Typography>
								</AccordionSummary>
								<AccordionDetails>
									{nonStudentFaqQuestions.map(it => (
										<div key={it.title}>
											<Typography mb={1} variant='h5' fontFamily='monospace'>{it.title}</Typography>
											<Typography mb={2}>{it.description}</Typography>
										</div>
									))}
								</AccordionDetails>
							</Accordion>
						</Box>
					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Registration</Typography>

						<Divider variant='inset' />
						<Button variant='outlined' target='_blank' href='https://forms.office.com/r/rYFyxVuHTb'>Register for Summit 2023</Button>
					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Discord Server</Typography>

						<Divider variant='inset' />
						<Button variant='outlined' target='_blank' href='https://discord.gg/zW9fjpsN7X'>Join us on Discord</Button>
					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Official Schedule</Typography>

						<Divider variant='inset' />

						<TableContainer component={Paper}>
							<Table>
								{scheduleData.map((day, index) => (
									<React.Fragment key={index}>
										<TableHead>
											<TableRow>
												<TableCell colSpan={3}>{day.date}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Time</TableCell>
												<TableCell>Activity</TableCell>
												<TableCell>Details</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{day.events.map((event, idx) => (
												<TableRow key={idx}>
													<TableCell>{event.time}</TableCell>
													<TableCell>{event.activity}</TableCell>
													<TableCell>{event.details}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</React.Fragment>
								))}
							</Table>
						</TableContainer>

					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Sponsors</Typography>
						<Divider variant='inset' />
						<Grid container justifyContent='space-evenly' spacing={2}>
							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									{/* Add logo on its own line. Use 100% width */}
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={northropImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									{/* Add name on its own line. Use 100% width */}
									<MuiLink href='https://northropgrumman.com/' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Northrop Grumman
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Platinum level sponsor. Northrop Grumman is an American global aerospace and defense technology company. They provide various cybersecurity services to the government.
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									{/* Add logo on its own line. Use 100% width */}
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={triplePointImg as StaticImageData as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									{/* Add name on its own line. Use 100% width */}
									<MuiLink href='https://www.triplepointsecurity.com/' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Triple Point Security
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Platinum level sponsor. Triple Point Security is a cybersecurity company based in Leesburg, VA. They provide a variety of services to help clients protect their data and systems from cyber threats.
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									{/* Add logo on its own line. Use 100% width */}
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={hiiImg as StaticImageData as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									{/* Add name on its own line. Use 100% width */}
									<MuiLink href='https://www.hii.com/' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											HII
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Silver level sponsor. HII is a global engineering and defense technologies provider, and recognized worldwide as America's largest shipbuilder.
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</Stack>
					<Stack spacing={2}>
						<Typography variant='h5'>Partners</Typography>
						<Divider variant='inset' />
						<Grid container justifyContent='space-evenly' spacing={2}>
							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									{/* Add logo on its own line. Use 100% width */}
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={corpsImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									{/* Add name on its own line. Use 100% width */}
									<MuiLink href='https://vtcc.vt.edu' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Virginia Tech Corp of Cadets
										</Typography>
									</MuiLink>
								</Stack>
							</Grid>
						</Grid>
					</Stack>
					<Stack spacing={2}>
						<Typography variant='h5'>VTCC Cyber Team Sponsors</Typography>
						<Divider variant='inset' />
						<Grid container justifyContent='space-evenly' spacing={2}>
							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									{/* Add logo on its own line. Use 100% width */}
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={percivalImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									{/* Add name on its own line. Use 100% width */}
									<MuiLink href='https://www.percivaleng.com' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Percival Engineering
										</Typography>
									</MuiLink>
								</Stack>
							</Grid>
						</Grid>
					</Stack>
				</Stack>
			</Box>


		</div>
	);
}
