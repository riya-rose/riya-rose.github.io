import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

export const items: Array<Project> = [
	{
		slug: 'ary-digital',
		color: '#5e95e3',
		description:
			"<p>ARY Zindagi is a popular Pakistani entertainment TV channel that offers a variety of content including dramas, sitcoms, talk shows, and reality programs, appealing to a wide range of audiences.</li><ul>",
		shortDescription:
			"ARY Zindagi is a popular Pakistani entertainment TV channel that offers a variety of content including dramas, sitcoms, talk shows, and reality programs, appealing to a wide range of audiences.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: '#', label: 'In-house' }],
		logo: Assets.Mobits,
		name: 'Mobits',
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html'),
		type: 'In-house Project'
	},
	{
		slug: 'asports',
		color: '#ff3e00',
		description:
			'<p>A Sports is a sports channel providing comprehensive coverage of various sports events. Our role involved crafting engaging content, live updates, and interactive polls, enhancing viewer interaction and expanding the channel`s digital footprint.</p>',
		shortDescription:
			'A Sports is a sports channel providing comprehensive coverage of various sports events. Our role involved crafting engaging content, live updates, and interactive polls, enhancing viewer interaction and expanding the channel`s digital footprint.',
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: '#', label: 'ASports' }],
		logo: Assets.ASports,
		name: 'ASports',
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'ary-zindagi',
		color: '#ff3e00',
		description:
			"<p>ARY Zindagi is a popular Pakistani entertainment channel known for its diverse range of TV shows, dramas, and reality programs. By managing its social media presence, we increased audience engagement and boosted viewership through strategic content promotion and interactive campaigns.</p>",
		shortDescription:
			"ARY Zindagi is a popular Pakistani entertainment channel known for its diverse range of TV shows, dramas, and reality programs. By managing its social media presence, we increased audience engagement and boosted viewership through strategic content promotion and interactive campaigns.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.unilever.pk/', label: 'ARY Zindagi' }],
		logo: Assets.ARYZindagi,
		name: 'ARY Zindagi',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'ary-zap',
		color: '#ff3e00',
		description:
			"<p>ARY Zap is a digital platform offering live streaming of ARY network channels. Through effective social media advertising and targeted promotions, we significantly increased app downloads and user engagement, making it a go-to source for live Pakistani TV.</p>",
		shortDescription:
			"ARY Zap is a digital platform offering live streaming of ARY network channels. Through effective social media advertising and targeted promotions, we significantly increased app downloads and user engagement, making it a go-to source for live Pakistani TV.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.unilever.pk/brands/nutrition/knorr/', label: 'ARY Zap' }],
		logo: Assets.ARYZap,
		name: 'ARY Zap',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'karachi-kings',
		color: '#ff3e00',
		description:
			"<p>Karachi Kings is a franchise cricket team in the Pakistan Super League. Our social media campaigns highlighted key matches, player profiles, and behind-the-scenes content, creating a strong fan base and increasing brand loyalty during the PSL season.</p>",
		shortDescription:
			"Karachi Kings is a franchise cricket team in the Pakistan Super League. Our social media campaigns highlighted key matches, player profiles, and behind-the-scenes content, creating a strong fan base and increasing brand loyalty during the PSL season.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.lipton.com.pk', label: 'Karachi Kings' }],
		logo: Assets.KarachiKings,
		name: 'Karachi Kings',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'always',
		color: '#ff3e00',
		description:
			"<p>Always is a leading brand in feminine hygiene products. By creating informative and empathetic social media content, we helped build brand trust and awareness, encouraging conversations around menstrual health and hygiene.</p>",
		shortDescription:
			"Always is a leading brand in feminine hygiene products. By creating informative and empathetic social media content, we helped build brand trust and awareness, encouraging conversations around menstrual health and hygiene.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.jazz.com.pk', label: 'Always' }],
		logo: Assets.Always,
		name: 'Always',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'ariel',
		color: '#ff3e00',
		description:
			"<p>Ariel is a well-known laundry detergent brand. Our social media strategy focused on showcasing Ariel’s effectiveness through creative visuals and user testimonials, which increased brand engagement and consumer loyalty.</p>",
		shortDescription:
			"Ariel is a well-known laundry detergent brand. Our social media strategy focused on showcasing Ariel’s effectiveness through creative visuals and user testimonials, which increased brand engagement and consumer loyalty.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.hbl.com/', label: 'Ariel' }],
		logo: Assets.Ariel,
		name: 'Ariel',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'head-and-shoulders',
		color: '#ff3e00',
		description:
			"<p>Head & Shoulders is a top anti-dandruff shampoo brand. We promoted its unique benefits and scientific credibility through educational posts, influencer collaborations, and interactive content, boosting brand visibility and consumer trust.</p>",
		shortDescription:
			"Head & Shoulders is a top anti-dandruff shampoo brand. We promoted its unique benefits and scientific credibility through educational posts, influencer collaborations, and interactive content, boosting brand visibility and consumer trust.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.psx.com.pk/', label: 'Head & Shoulders' }],
		logo: Assets.HeadAndShoulders,
		name: 'Head & Shoulders',
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'gillette',
		color: '#ff3e00',
		description:
			"<p>Gillette, a global leader in men's grooming products, benefited from our targeted social media campaigns that highlighted product features, grooming tips, and customer testimonials, thereby enhancing brand loyalty and market presence.</p>",
		shortDescription:
			"Gillette, a global leader in men's grooming products, benefited from our targeted social media campaigns that highlighted product features, grooming tips, and customer testimonials, thereby enhancing brand loyalty and market presence.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.mcb.com.pk', label: 'Gillette' }],
		logo: Assets.Gillette,
		name: 'Gillette',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'pantene',
		color: '#ff3e00',
		description:
			"<p>Pantene is renowned for its hair care products. We developed visually appealing content showcasing hair transformations and expert tips, which significantly increased engagement and promoted brand credibility.</p>",
		shortDescription:
			"Pantene is renowned for its hair care products. We developed visually appealing content showcasing hair transformations and expert tips, which significantly increased engagement and promoted brand credibility.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.faysalbank.com/', label: 'Pantene' }],
		logo: Assets.Pantene,
		name: 'Pantene',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'rafhan',
		color: '#ff3e00',
		description:
			"<p>Rafhan is a staple food brand in Pakistan, known for its cornflour and dessert mixes. Our engaging recipes and cooking tips on social media platforms elevated brand interaction and boosted consumer interest.</p>",
		shortDescription:
			"Rafhan is a staple food brand in Pakistan, known for its cornflour and dessert mixes. Our engaging recipes and cooking tips on social media platforms elevated brand interaction and boosted consumer interest.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.iobm.edu.pk', label: 'Rafhan' }],
		logo: Assets.Rafhan,
		name: 'Rafhan',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'hellmanns',
		color: '#ff3e00',
		description:
			"<p>Hellmann’s is a popular mayonnaise and condiments brand. We crafted appetizing content and recipe ideas, increasing brand engagement and encouraging consumers to explore versatile uses of Hellmann’s products.</p>",
		shortDescription:
			"Hellmann’s is a popular mayonnaise and condiments brand. We crafted appetizing content and recipe ideas, increasing brand engagement and encouraging consumers to explore versatile uses of Hellmann’s products.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.ebm.com.pk/', label: 'Hellmanns' }],
		logo: Assets.Hellmanns,
		name: 'Hellmanns',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'gluco-juniors',
		color: '#ff3e00',
		description:
			"<p>Gluco Juniors is a children’s biscuit brand known for its nutritional value. We targeted parents with creative and informative content, enhancing brand perception and driving product trials.</p>",
		shortDescription:
			"Gluco Juniors is a children’s biscuit brand known for its nutritional value. We targeted parents with creative and informative content, enhancing brand perception and driving product trials.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.martindow.com/', label: 'Gluco Juniors' }],
		logo: Assets.GlucoJuniors,
		name: 'Gluco Juniors',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'pampers',
		color: '#ff3e00',
		description:
			"<p>Pampers is a leading diaper brand. Our social media strategy focused on parenting tips, product benefits, and user stories, fostering a community of loyal customers and enhancing brand trust.</p>",
		shortDescription:
			"Pampers is a leading diaper brand. Our social media strategy focused on parenting tips, product benefits, and user stories, fostering a community of loyal customers and enhancing brand trust.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.searlepakistan.com/', label: 'Pampers' }],
		logo: Assets.Pampers,
		name: 'Pampers',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'lemon-max',
		color: '#ff3e00',
		description:
			"<p>Lemon Max is a dishwashing liquid brand. By promoting its cleaning efficiency and value through engaging visuals and user reviews, we increased brand awareness and consumer preference.</p>",
		shortDescription:
			"Lemon Max is a dishwashing liquid brand. By promoting its cleaning efficiency and value through engaging visuals and user reviews, we increased brand awareness and consumer preference.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.khaadi.com/', label: 'LemonMax' }],
		logo: Assets.LemonMax,
		name: 'LemonMax',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
];

export const getProjects = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Project> => items.filter((it) => slugs.includes(it.slug));

export const title = 'Clients';
