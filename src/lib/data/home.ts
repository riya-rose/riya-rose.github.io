import { Platform } from '$lib/types';
// import { getSkills } from './skills';
import { getProjects } from './projects';

export const title = 'Home';

export const name = 'Riya';

export const lastName = 'Rose';

// export const description =
// 	'I am Riya Rose, a seasoned digital marketer and content strategist with a robust background in managing social media for leading brands. Currently serving as a Social Media Manager at ARY Digital Network, I oversee prominent accounts including ARY Digital, ARY Zindagi, and Karachi Kings, among others. My role involves creating comprehensive content strategies, coordinating with PR agencies, and executing BTS shoots for dramas, all while collaborating closely with cross-functional teams to ensure cohesive brand representation. With a strong track record in ideation, copywriting, and campaign management, I thrive in dynamic environments where creativity meets strategic execution.';

export const description =
`A seasoned digital marketer and content strategist with a robust background in managing social media for leading brands. 

Previously the lead Social Media Manager at ARY Digital Network, managing major accounts like ARY Digital, ASports, and Karachi Kings. I developed digital strategies, coordinated project launches, and worked closely with cross-functional teams to maintain consistent brand representation.

Possessing a strong track record in ideation, copywriting, and campaign management, I thrive in dynamic environments where creativity meets strategic execution.`;

export const links: Array<{ platform: Platform; link: string }> = [
	// { platform: Platform.GitHub, link: 'https://github.com/jude-lobo' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/riya-rose/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/JudeJLobo'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/users/24446792/jude-lobo'
	// },
	{
		platform: Platform.Email,
		link: 'riyarose71@yahoo.com'
	},
];

// export const skills = getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html');
export const projects = getProjects('ary-digital', 'asports', 'ary-zindagi', 'ary-zap', 'karachi-kings', 'always', 'ariel', 'head-and-shoulders', 'gillette', 'pantene', 'rafhan', 'hellmanns', 'gluco-juniors', 'pampers', 'lemon-max');
