export const eventName: string = 'MFPE';
export const eventDesc: string = '2018 Educator Conference';
export const eventId: number = 2045;
export const clientId: number = 0;
export const locationId: number = 2453;
export const database: string = 'mea-mft';
export const cl: Function = console.log.bind(window.console);
export const EMAIL_REGEXP: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
export const serverToken: string =
	'F52B49B1932A99C2419321475736B86000A5E6A21BEF8A8B18E80E3D72CE3038';
export const oneSignalKey: string = '777094d2-a189-4306-a6fb-5f99acb9bb99';
export const googleAnalyticsKey: string = 'UA-126658692-1';
export const hasSpeakerLogin: boolean = true;
export const appEmail: string = 'info@eventready.com';
export const appId: string = 'com.eventready.mfpeapp2018';
export const isDemo: boolean = false;

export const eventUrl: string =
	'https://api.eventready.com/mfpe/index.cfm?fuseaction=api';
export const downloadUrl: string = 'https://mobile.eventready.com/files/mfpe/';
export const facebook: string =
	'https://www.facebook.com/MTFederationofPublicEmployees/';
export const twitter: string = 'https://twitter.com/MontanaFed';
export const youtube: string = 'http://www.youtube.com';
export const aboutConference: string =
	'http://www.mea-mft.org/educator_conference.aspx';
export const speakerDownloadURl: string =
	'https://mea-mft.eventready.com/docs/download/photo_files/';
export const defaultProfilePic: string =
	'https://mobile.eventready.com/files/eventready/nobody_m.original.gif';

export const surveyMessage: string =
	'Below you will find survey questions about the MFPE conference. Please answer each question to the best of your ability.';
export const dashboardBannerHeight: string = '150px';
export const dashboardBannerSpeed: number = 3500000;
export const scheduleDays: any[] = [
	{
		day: 'Tues',
		tab: 'ScheduleTabDay1Page',
	},
	{
		day: 'Weds',
		tab: 'ScheduleTabDay2Page',
	},
];
