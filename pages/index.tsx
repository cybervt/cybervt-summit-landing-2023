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
import anteanImg from '../public/img/Antean-Final.png';

const scheduleData = [
	{
		date: 'March 30, 2024 (Virtual/In Person)',
		events: [
			{
				time: 'To Be Announced',
				activity: 'To Be Announced',
				details: 'To Be Announced',
			},
		],
	},
	{
		date: 'March 31, 2024 (In-person)',
		events: [
			{
				time: 'To Be Announced',
				activity: 'To Be Announced',
				details: 'To Be Announced',
			},
		],
	},
];

const studentFaqQuestions = [
	{
		title: '$ ./when',
		description: 'Summit CTF begins ' + studentCompetitionDateTime.toLocaleDateString() + ' at ' + studentCompetitionDateTime.toLocaleTimeString() + ' and lasts for 24 hours.',
	},
	{
		title: '$ ./where',
		description: 'Virtual.',
	},
	{
		title: '$ ./prizes',
		description: 'Prizes will be released closer to start date. Except vouchers, courses, merch, and more.',
	},
	{
		title: '$ ./eligibility',
		description: 'No eligibility requirements.',
	},
];

const imageStyles = {
	width: '131px',
	height: '185px'
};

const nonStudentFaqQuestions = [
	{
		title: '$ ./when',
		description: 'The in person competition will take place April 13th.',
	},
	{
		title: '$ ./where',
		description: 'The in person portion of the competition will be hosted on the Virginia Tech Campus, exact location will be shared at a later time.',
	},
	{
		title: '$ ./prizes',
		description: 'Prizes will be released closer to start date. Except vouchers, courses, merch, and more.',
	},
	{
		title: '$ ./eligibility',
		description: 'Current student at an academic university.',
	},
	{
		title: '$ ./lodging',
		description: 'CyberVT encourages all academic institutions to attend in-person. Lodging is not provided by CyberVT and students are encouraged to reach out to your club or school leadership for funding.',
	},
	{
		title: '$ ./team-size',
		description: 'Teams will be limited to five people. However, multiple teams from the same university can compete.',
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
						<Typography variant='h4'>Welcome to Hacksburg</Typography>
						<Typography variant='h4' fontFamily='monospace' style={{ overflowWrap: 'break-word' }}>
							<Typewriter
								onInit={typewriter => {
									typewriter.typeString('Virginia Tech\'s Annual CTF Competition')
										.pauseFor(3 * 1000 * 60)
										.deleteAll()
										/* Good on you for reading the source code, challenger! */
										.typeString('Okay, you waited this long. Here\'s a flag for your patience. Submit it during the competition: SummitCTF{1_4m_n0t_Us1ng_L4st_Yrs_flag}')
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
									SummitCTF is an annual Capture the Flag (CTF) competition hosted by the Cybersecurity Club at Virginia Tech (CyberVT). The next competition will have two events, one virtual and one in person.
								</AccordionDetails>

								<AccordionDetails>
									The virtual event will be a standard jeopardy style CTF, with some unique more realistic challenges. The in person event will be a attack defense event with competitors fighting each other for control.
								</AccordionDetails>

								<AccordionDetails>
									The virtual competition will officially start on {studentCompetitionDateTime.toLocaleDateString()} and last 24 hours.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>Details For Virtual Event</Typography>
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
									<Typography>Details For In Person Event</Typography>
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
						<Button variant='outlined' target='_blank' href='https://forms.office.com/Pages/ResponsePage.aspx?id=hGiVYK0Q-kCGPU8yweOjemyRXAedrFJKug2Tcw5CJHFURVMxWDBUMlRQUzZZSVhQSTY0RjY0SzFWRi4u/'>Register for Summit 2024</Button>
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
							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									{/* Add logo on its own line. Use 100% width */}
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={anteanImg as StaticImageData as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									{/* Add name on its own line. Use 100% width */}
									<MuiLink href='https://anteantech.com/' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Antean Technology
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Silver level sponsor. Antean Technology provides simplistically scaled cyber compliance, IT services, and program management solutions with quality, agility, and transparency.
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
