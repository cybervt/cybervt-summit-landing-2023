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
import anteanImg from '../public/img/Antean-Final.png';
import phantomImg from '../public/img/PhantomImg.png'; // Added PhantomImg import

// [scheduleData and FAQ questions remain unchanged]

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
                    {/* [Previous sections remain unchanged: Header, FAQs, Registration, Discord, Schedule] */}

                    <Stack spacing={2}>
                        <Typography variant='h5'>Sponsors</Typography>
                        <Divider variant='inset' />
                        <Grid container justifyContent='space-evenly' spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Stack spacing={1}>
                                    <Box display='flex' justifyContent='center' width='100%'>
                                        <Image src={northropImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
                                    </Box>
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
                                    <Box display='flex' justifyContent='center' width='100%'>
                                        <Image src={triplePointImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
                                    </Box>
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
                                    <Box display='flex' justifyContent='center' width='100%'>
                                        <Image src={anteanImg as StaticImageData} width='300px' height='100%' objectFit='contain' />
                                    </Box>
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
                                        Silver level sponsor. [Note: Original description was missing, you might want to add one]
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
                                            Phantom Security Group
                                        </Typography>
                                    </MuiLink>
                                    <Typography textAlign='justify'>
                                        Silver level sponsor. Phantom Security Group is founded by 3 recent Virginia Tech Graduates and develops elite Red Teaming tools such as EvadeX, ApeX, and Phantom Labs.
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
