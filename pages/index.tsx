import { Typography, Stack, Link as MuiLink, Box, Button, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider, Grid, TableContainer, TableHead, TableRow, TableCell, Table, Paper, TableBody } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Accordion from '@mui/material/Accordion';
import Image, { StaticImageData } from 'next/image';
import { competitionDateTime, studentCompetitionDateTime } from '../src/config';
import summitImg from '../public/img/default-monochrome-white.svg';
import hacktheairportImg from '../public/img/hacktheairport.png';
import comptiaImg from '../public/img/Comptia-logo.svg.png';
import smcciImg from '../public/img/smcci.png';
import hiiImg from '../public/img/hii.svg';
import triplePointImg from '../public/img/triplepointsecurity.png';
import percivalImg from '../public/img/percival-logo-new-no-bg.png';
import northropImg from '../public/img/northropgrumman.png';
import corpsImg from '../public/img/22_Corps_Shield_FullColor_RGB.png';
import anteanImg from '../public/img/Antean-Final.png';
import phantomImg from '../public/img/PhantomImg.png';
import tcmSecurityImg from '../public/img/TCMSecurityImg.png';

const scheduleData = [
	{
		date: 'April 12th, 2025 (In-person & Virtual)',
		events: [
			{
				time: '8:00-8:30 AM',
				activity: 'Welcome / Format Overview',
				details: '',
			},
			{
				time: '8:35-10:00 AM',
				activity: 'Sponsor Talks',
				details: 'Hear from our amazing sponsors!',
			},
			{
				time: '10:00 AM',
				activity: 'Jeopardy Style CTF Opens (Virtual Option Available)',
				details: '',
			},
			{
				time: '12:30 PM',
				activity: 'Lunch',
				details: '',
			},
			{
				time: '5:00 PM',
				activity: 'In-person Rooms Close',
				details: '',
			},
		],
	},
	{
		date: 'April 13th, 2025 (In-person)',
		events: [
			{
				time: '8:00 AM',
				activity: 'In-person Rooms Open',
				details: '',
			},
			{
				time: '10:00 AM',
				activity: 'Jeopardy Style CTF Closes',
				details: '',
			},
			{
				time: '10:00 AM-11:30 AM',
				activity: 'Jeopardy Style CTF Awards Ceremony',
				details: '',
			},
			{
				time: '11:30 AM-12:00 PM',
				activity: 'Castle Competition Explanation',
				details: 'Brief on the Purple Team competition (in person only)',
			},
			{
				time: '12:30 PM',
				activity: 'Castle Competition Begins (In-person Only)',
				details: '',
			},
			{
				time: '4:30 PM-5:00 PM',
				activity: 'Competition Closes; Award Ceremony',
				details: '',
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
		description: 'Prizes will be released closer to start date. Expect vouchers, courses, merch, and more.',
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
		description: 'The in person competition will take place April 18th and 19th.',
	},
	{
		title: '$ ./where',
		description: 'The in person portion of the competition will be hosted on the Virginia Tech Campus, in the <a href="https://www.vt.edu/about/locations/buildings/data-and-decision-sciences.html" target="_blank" rel="noreferrer">Data and Decision Sciences Building</a>.',
	},
	{
		title: '$ ./prizes',
		description: 'Prizes will be released closer to start date. Expect vouchers, courses, merch, and more.',
	},
	{
		title: '$ ./eligibility',
		description: 'Current student at an academic university.',
	},
	{
		title: '$ ./cost',
		description: 'Early bird registration is $10. After March 18, regular registration is $15',
	},
	{
		title: '$ ./lodging',
		description: 'Lodging is not provided by CyberVT and students are encouraged to reach out to your club or school leadership for funding.',
	},
	{
		title: '$ ./team-size',
		description: 'Teams will be limited to four people. However, multiple teams from the same university can compete.',
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
						<Image
							src={hacktheairportImg as StaticImageData}
							style={{ transform: 'scale(0.80)' }}
						/>
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
									SummitCTF is an annual Capture the Flag (CTF) competition hosted by the Cybersecurity Club at Virginia Tech (CyberVT). There is no virtual option this year.
								</AccordionDetails>

								<AccordionDetails>
									This year the competition theme is Hack the Airport. Along with the normal jeopardy style CTF, there will also be a first-of-its-kind airport red teaming component. More details will be revealed when you arrive.
								</AccordionDetails>

								<AccordionDetails>
									The competition will officially start on {studentCompetitionDateTime.toLocaleDateString()} and last 24 hours.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>Details For The Event</Typography>
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
						<Button variant='outlined' target='_blank' href='https://www.eventbrite.com/e/summitctf-2026-tickets-1982439422679?aff=ebdssbdestsearch'>Register for Summit 2026</Button>
					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Discord Server</Typography>

						<Divider variant='inset' />
						<Button variant='outlined' target='_blank' href='https://discord.gg/zW9fjpsN7X'>Join us on Discord</Button>
					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Official Schedule TBD</Typography>

						{/* <Divider variant='inset' />

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
						</TableContainer> */}

					</Stack>

					<Stack spacing={2}>
						<Typography variant='h5'>Sponsors</Typography>
						<Divider variant='inset' />
						<Grid container justifyContent='space-evenly' spacing={2}>
							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={smcciImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									<MuiLink href='https://hume.vt.edu/undergraduate-education/workforce-development-programs/smc.html' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											DoD Senior Military College Cyber Institute (SMCCI)
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Diamond level sponsor. The Department of Defense Senior Military College Cyber Institute (SMCCI) aims to inspire and mentor undergraduate students interested in pursuing cyber-related careers with the Department of Defense (DoD) either as civilians or uniformed service members.
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={triplePointImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									<MuiLink href='https://www.triplepointsecurity.com/' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Triple Point Security
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Diamond level sponsor. Triple Point Security is a cybersecurity company based in Leesburg, VA. They provide a variety of services to help clients protect their data and systems from cyber threats.
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={hiiImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									<MuiLink href='https://www.percivaleng.com' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											HII MT
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Gold level sponsor. HII is a global engineering and defense technologies provider, and recognized worldwide as America’s largest shipbuilder.
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={percivalImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									<MuiLink href='https://www.percivaleng.com' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Percival Engineering
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Silver level sponsor. Percival Engineering is a people first company focused on cyber, embedded, and critical/operational technology.
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4}>
								<Stack spacing={1}>
									<Box display='flex' justifyContent='center' width='100%'>
										<Image src={phantomImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
									</Box>
									<MuiLink href='https://phantomsec.tools/' target='_blank' rel='noreferrer'>
										<Typography variant='h5' fontWeight='bold' textAlign='center' color='text.primary'>
											Phantom Security
										</Typography>
									</MuiLink>
									<Typography textAlign='justify'>
										Bronze level sponsor. Phantom Security Group is founded by 3 recent Virginia Tech Graduates and develops elite Red Teaming tools such as EvadeX, ApeX, and Phantom Labs.
									</Typography>
								</Stack>
							</Grid>
														
						</Grid>
					</Stack>
				</Stack>
			</Box>
		</div>
	);
}
