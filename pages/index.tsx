import {Typography, Stack, Link as MuiLink, Box, Button, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Accordion from '@mui/material/Accordion';
import Image, {StaticImageData} from 'next/image';
import {competitionDateTime, studentCompetitionDateTime} from '../src/config';
import summitImg from '../public/img/default-monochrome-white.svg';
import comptiaImg from '../public/img/Comptia-logo.svg.png';
import triplePointImg from '../public/img/triplepointsecurity.png';
import percivalImg from '../public/img/percival-logo-new-no-bg.png';
import northropImg from '../public/img/northropgrumman.png';
import corpsImg from '../public/img/22_Corps_Shield_FullColor_RGB.png';

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
				sx={{margin: '0 auto'}}
			>
				<Stack spacing={6}>
					<Box textAlign='center'>
						<Image src={summitImg as StaticImageData}/>
						<Typography variant='h4' fontFamily='monospace' style={{overflowWrap: 'break-word'}}>
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
						<Divider variant='inset'/>

						<Box>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon/>}
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
									expandIcon={<ExpandMoreIcon/>}
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
									expandIcon={<ExpandMoreIcon/>}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>Details for Non-Students</Typography>
								</AccordionSummary>
								<AccordionDetails>
									{ nonStudentFaqQuestions.map(it => (
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

						<Divider variant='inset'/>
						<Button variant='outlined' target='_blank' href='https://forms.office.com/r/rYFyxVuHTb'>Register for Summit 2023</Button>

					</Stack>
					<Stack spacing={2}>
						<Typography variant='h5'>Sponsors</Typography>

						<Divider variant='inset'/>
						<Typography variant='h6'>Platinum Level</Typography>
						<Image src={triplePointImg as StaticImageData} />
						<Divider variant='inset'/>
						<Image src={northropImg as StaticImageData} />
						<Divider variant='inset'/>
						<Typography variant='h6'>VTCC Cyber Team Sponsors</Typography>
						<Image src={percivalImg as StaticImageData} />
						<Divider variant='inset'/>
						<Typography variant='h6'>Contributors</Typography>
						<Image src={comptiaImg as StaticImageData} />
					</Stack>
				</Stack>
			</Box>
			<Typography variant='h5'>Partners</Typography>
			<Image src={corpsImg as StaticImageData} style={imageStyles} />

		</div>
	);
}
