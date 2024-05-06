import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'mobits',
		color: '#5e95e3',
		description:
			"mobits is a cloud-based platform to manage mobile marketing, reporting and user engagement. it enables clients to manage mobile marketing campaigns, run analytics & reports in real-time and deliver push notifications to users. the platform is a unique, white label, saas on-premise solution that can leverage your existing infrastructure to deliver real-time alerts, information, and communication from customers to enterprise. this solution will improve any company's business allowing them to reach consumers with targeted content, messaging, coupons and alerts regarding new products or sales coupons.",
		shortDescription:
			"<p>mobits is a cloud-based platform to manage mobile marketing, reporting and user engagement. it enables clients to manage mobile marketing campaigns, run analytics & reports in real-time and deliver push notifications to users. the platform is a unique, white label, saas on-premise solution that can leverage your existing infrastructure to deliver real-time alerts, information, and communication from customers to enterprise. this solution will improve any company's business allowing them to reach consumers with targeted content, messaging, coupons and alerts regarding new products or sales coupons</p><ul><li>Developed and implemented a comprehensive campaign creation platform within the Mobits domain, allowing clients to efficiently create and manage SMS campaigns for their users.</li><li>Designed and built multiple portals tailored to different client needs under the Mobits umbrella, enhancing overall platform functionality and user accessibility.</li><ul>",
		links: [{ to: '#', label: 'In-house' }],
		logo: Assets.Mobits,
		name: 'Mobits',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html'),
		type: 'In-house Project'
	},
	{
		slug: 'survit',
		color: '#ff3e00',
		description:
			'survit is an end-to-end saas solution that enables organizations to measure satisfaction level of their customers at scale. the solution is based on csat method of measuring customer satisfaction levels at sales & service touchpoints.',
		shortDescription:
			'survit is an end-to-end saas solution that enables organizations to measure satisfaction level of their customers at scale. the solution is based on csat method of measuring customer satisfaction levels at sales & service touchpoints.',
		links: [],
		logo: Assets.Survit,
		name: 'Survit',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'In-house Project',
		screenshots: [
			// {
			// 	label: 'screen 1',
			// 	src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '2',
			// 	src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '3',
			// 	src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '4',
			// 	src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '5',
			// 	src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '6',
			// 	src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// }
		]
	},
	{
		slug: 'psx',
		color: '#ff3e00',
		description:
			'The Pakistan Stock Exchange is a stock exchange in Pakistan with trading floors in Karachi, Islamabad, and Lahore. The Lahore floor has a subfloor in Sialkot. PSX was classified by MSCI as a frontier market on 8 September 2021',
		shortDescription:
			'The Pakistan Stock Exchange is a stock exchange in Pakistan with trading floors in Karachi, Islamabad, and Lahore. The Lahore floor has a subfloor in Sialkot. PSX was classified by MSCI as a frontier market on 8 September 2021',
		links: [],
		logo: Assets.PSX,
		name: 'PSX',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	}
];

export const title = 'Projects';
