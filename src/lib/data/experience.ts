import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'social-media-manager',
		company: 'ARY Digital Network',
		description: 'Led comprehensive social media campaigns for ARY Digital and A Sports, driving engagement and brand visibility. Directed content strategy and production, collaborating closely with graphic designers and social media teams to create compelling promotional materials for dramas, sports events, and films. Stayed abreast of social media trends to develop engaging behind-the-scenes content and ensure consistent brand messaging.',
		contract: ContractType.FullTime,
		type: 'Social Media Manager',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2022, 5), to: new Date(2024, 6) },
		skills: getSkills('content-strategy', 'copywriting', 'concept-development', 'social-media-management', 'project-management', 'creative-ideation'),
		name: 'Social Media Manager, Marketing',
		color: 'red',
		links: [],
		logo: Assets.ARYDigital,
		shortDescription: 'Led comprehensive social media campaigns for ARY Digital and A Sports, driving engagement and brand visibility. Directed content strategy and production, collaborating closely with graphic designers and social media teams'
	},
	{
		slug: 'senior-creative-associate',
		company: 'Symmetry Digital',
		description: 'Spearheaded idea generation, concept development, and copywriting initiatives for prestigious brands including HBL, P&G, Unilever, and Colgate-Palmolive. Managed end-to-end digital campaigns, contributing to global client pitches and creative strategies under the guidance of the Creative Manager. Crafted impactful content for television and digital commercials, ensuring alignment with client objectives and brand ethos.',
		contract: ContractType.FullTime,
		type: 'Senior Creative Associate',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2021, 10, 1), to: new Date(2022, 2, 31)},
		skills: getSkills('content-strategy', 'copywriting', 'concept-development', 'project-management', 'creative-ideation'),
		name: 'Senior Creative Associate',
		color: 'blue',
		links: [],
		logo: Assets.Symmetry,
		shortDescription: 'Spearheaded idea generation, concept development, and copywriting initiatives for prestigious brands including HBL, P&G, Unilever, and Colgate-Palmolive. Managed end-to-end digital campaigns, contributing to global client pitches'
	},
	{
		slug: 'marketing-executive',
		company: 'ARY Digital Network',
		description: 'Executed marketing campaigns at ARY Digital, guiding content direction and overseeing graphic design to promote dramas, sports events, and films. Coordinated with internal teams and external partners to ensure effective campaign execution and brand alignment across various media platforms. Monitored campaign performance and adjusted strategies to optimize engagement and reach.',
		contract: ContractType.FullTime,
		type: 'Marketing Executive',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2021, 2), to: new Date(2021, 10) },
		skills: getSkills('content-strategy', 'copywriting', 'concept-development', 'social-media-management', 'project-management', 'creative-ideation'),
		name: 'Marketing Executive',
		color: 'red',
		links: [],
		logo: Assets.ARYDigital,
		shortDescription: 'Executed marketing campaigns at ARY Digital, guiding content direction and overseeing graphic design to promote dramas, sports events, and films. Coordinated with internal teams and external partners to ensure effective campaign execution'
	},
	{
		slug: 'community-manager',
		company: 'East River',
		description: 'Orchestrated digital content creation, community engagement, and web traffic analysis for Continental Biscuits and Engro Foundation. Developed and executed dynamic social media strategies, PR campaigns, and event activations to foster community interaction and amplify brand presence. Implemented innovative initiatives to enhance audience engagement across multiple platforms.',
		contract: ContractType.FullTime,
		type: 'Community Manager',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2019, 6), to: new Date(2019, 9)},
		skills: getSkills('content-strategy', 'copywriting', 'concept-development', 'social-media-management', 'project-management', 'creative-ideation'),
		name: 'Community Manager',
		color: 'blue',
		links: [],
		logo: Assets.EastRiver,
		shortDescription: 'Orchestrated digital content creation, community engagement, and web traffic analysis for Continental Biscuits and Engro Foundation. Developed and executed dynamic social media strategies, PR campaigns, and event activations'
	},
	{
		slug: 'social-media-trainee-intern',
		company: 'Samaa TV',
		description: 'Worked in the Social Media Department at Samaa TV, managing multiple accounts including Samaa TV English (FB, Twitter, Insta, SoundCloud, YouTube), Samaa TV Urdu (FB, Twitter), Samaa Sports (FB, Twitter), and Naya Din (FB, Twitter, Insta). Responsibilities included writing captions for news articles in English and Urdu, scheduling and drafting social media posts, creating Instagram stories from popular news articles, and managing community engagement. Operated in a fast-paced environment, particularly during breaking news situations. Contributed to content creation by writing an article for Samaa TV`s website.',
		contract: ContractType.Internship,
		type: 'Social Media Trainee / Social Media Intern',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2019, 3), to: new Date(2019, 5)},
		skills: getSkills('content-strategy', 'copywriting', 'concept-development', 'social-media-management', 'project-management', 'creative-ideation'),
		name: 'Social Media Trainee / Social Media Intern',
		color: 'blue',
		links: [],
		logo: Assets.SamaaTV,
		shortDescription: 'Worked in the Social Media Department at Samaa TV, managing multiple accounts including Samaa TV English (FB, Twitter, Insta, SoundCloud, YouTube), Samaa TV Urdu (FB, Twitter), Samaa Sports (FB, Twitter), and Naya Din (FB, Twitter, Insta). Responsibilities included writing captions for news articles in English and Urdu, scheduling and drafting social media posts'
	},
	{
		slug: 'research-intern',
		company: 'Express News',
		description: 'Interned at Express News, gaining experience in research methodologies and data analysis. Assisted in gathering and analyzing information for news reports and features. Worked under the guidance of senior editors and journalists to support content development and editorial processes.',
		contract: ContractType.Internship,
		type: 'Research Intern',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2017, 8), to: new Date(2017, 9)},
		skills: getSkills('content-strategy', 'copywriting', 'concept-development', 'social-media-management', 'project-management', 'creative-ideation'),
		name: 'Research Intern',
		color: 'blue',
		links: [],
		logo: Assets.ExpressNews,
		shortDescription: 'Interned at Express News, gaining experience in research methodologies and data analysis. Assisted in gathering and analyzing information for news reports and features. Worked under the guidance of senior editors and journalists to support content development and editorial processes.'
	},
];

export const title = 'Experience';
