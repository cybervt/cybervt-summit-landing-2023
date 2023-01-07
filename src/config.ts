/* https://github.com/vercel/next.js/issues/28774 */
// eslint-disable-next-line unicorn/prefer-node-protocol
import process from 'process';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {createTheme, Theme} from '@mui/material';

/** Color mode type */
export type CurrentColorMode = 'light' | 'dark';

/** Global variables type */
export type GlobalVars = {
	isDesktop: boolean;
};

/** Create theme */
export const cybervtTheme = createTheme({
	components: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: 'none',
				},
			},
		},
		// eslint-disable-next-line @typescript-eslint/naming-convention
		MuiButton: {
			styleOverrides: {
				root: {
					color: '#ffffff',
				},
			},
		},
	},
	palette: {
		background: {
			default: '#6f1d1b',
		},
		mode: 'dark',
	},
});

export const maxMobileSize = 900;

export type LayoutProps = {
	children: React.ReactElement;
};

/** Global variables */
export const globalContext = React.createContext<GlobalVars>({
	isDesktop: true,
} as GlobalVars);

/** Site title (in <head>) */
export const siteTitle = 'CyberVT Summit CTF 2023';

/** Competition date & time */
export const studentCompetitionDateTime = new Date(0);
studentCompetitionDateTime.setUTCSeconds(1_681_556_400);

export const competitionDateTime = new Date(0);
competitionDateTime.setUTCSeconds(1_681_646_400);
