import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters in Mass Communications and Media Studies ',
		description: '',
		location: 'Pakistan',
		logo: Assets.Greenwich,
		name: '',
		organization: 'Greenwich University ',
		period: { from: new Date(2020, 1), to: new Date(2024, 1) },
		shortDescription: '',
		slug: 'greenwich-university',
		subjects: []
	},
	{
		degree: 'Bachelors in Mass Communications and Media Studies',
		description: '',
		location: 'Pakistan',
		logo: Assets.Greenwich,
		name: '',
		organization: 'Greenwich University',
		period: { from: new Date(2016, 1), to: new Date(2019, 1) },
		shortDescription: '',
		slug: 'greenwich-university',
		subjects: []
	},
];

export const title = 'Education';
