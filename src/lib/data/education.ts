import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Post Graduate Diploma.',
		description: '',
		location: 'Pakistan',
		logo: Assets.VUni,
		name: '',
		organization: 'Virtual University of Pakistan',
		period: { from: new Date(2021, 3, 1), to: new Date(2022, 3, 1) },
		shortDescription: '',
		slug: 'virtual-university',
		subjects: []
	},
	{
		degree: 'Bachelors in Software Engineering',
		description: '',
		location: 'Pakistan',
		logo: Assets.Iqra,
		name: '',
		organization: 'IQRA University',
		period: { from: new Date(2015, 4, 1), to: new Date(2019, 11, 1) },
		shortDescription: '',
		slug: 'iqra-university',
		subjects: []
	},
];

export const title = 'Education';
