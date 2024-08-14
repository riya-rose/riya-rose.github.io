import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

export const items: Array<Project> = [
	{
		slug: 'ary-digital',
		color: '#D9001D',
		description:
			"<p>ARY Zindagi is a popular Pakistani entertainment TV channel that offers a variety of content including dramas, sitcoms, talk shows, and reality programs, appealing to a wide range of audiences.</li><ul>",
		shortDescription:
			"ARY Zindagi is a popular Pakistani entertainment TV channel that offers a variety of content including dramas, sitcoms, talk shows, and reality programs, appealing to a wide range of audiences.",
		links: [{ to: 'https://arydigital.tv/', label: 'In-house' }],
		logo: Assets.ARYDigital,
		name: 'ARY Digital',
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html'),
		type: 'In-house',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
		],
	},
	{
		slug: 'asports',
		color: '#0077C0',
		description:
			'<p>A Sports is a sports channel providing comprehensive coverage of various sports events. Our role involved crafting engaging content, live updates, and interactive polls, enhancing viewer interaction and expanding the channel`s digital footprint.</p>',
		shortDescription:
			'A Sports is a sports channel providing comprehensive coverage of various sports events. Our role involved crafting engaging content, live updates, and interactive polls, enhancing viewer interaction and expanding the channel`s digital footprint.',
		links: [{ to: 'https://a-sports.tv/', label: 'ASports' }],
		logo: Assets.ASports,
		name: 'ASports',
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'In-house',
	},
	{
		slug: 'ary-zindagi',
		color: '#009D8E',
		description:
			"<p>ARY Zindagi is a popular Pakistani entertainment channel known for its diverse range of TV shows, dramas, and reality programs. By managing its social media presence, we increased audience engagement and boosted viewership through strategic content promotion and interactive campaigns.</p>",
		shortDescription:
			"ARY Zindagi is a popular Pakistani entertainment channel known for its diverse range of TV shows, dramas, and reality programs. By managing its social media presence, we increased audience engagement and boosted viewership through strategic content promotion and interactive campaigns.",
		links: [{ to: 'https://aryzindagi.tv/', label: 'ARY Zindagi' }],
		logo: Assets.ARYZindagi,
		name: 'ARY Zindagi',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house',
	},
	{
		slug: 'ary-zap',
		color: '#FF4F5A',
		description:
			"<p>ARY Zap is a digital platform offering live streaming of ARY network channels. Through effective social media advertising and targeted promotions, we significantly increased app downloads and user engagement, making it a go-to source for live Pakistani TV.</p>",
		shortDescription:
			"ARY Zap is a digital platform offering live streaming of ARY network channels. Through effective social media advertising and targeted promotions, we significantly increased app downloads and user engagement, making it a go-to source for live Pakistani TV.",
		links: [{ to: 'https://aryzap.com/', label: 'ARY Zap' }],
		logo: Assets.ARYZap,
		name: 'ARY Zap',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house',
	},
	{
		slug: 'karachi-kings',
		color: '#003A6C',
		description:
			"<p>Karachi Kings is a franchise cricket team in the Pakistan Super League. Our social media campaigns highlighted key matches, player profiles, and behind-the-scenes content, creating a strong fan base and increasing brand loyalty during the PSL season.</p>",
		shortDescription:
			"Karachi Kings is a franchise cricket team in the Pakistan Super League. Our social media campaigns highlighted key matches, player profiles, and behind-the-scenes content, creating a strong fan base and increasing brand loyalty during the PSL season.",
		links: [{ to: 'https://www.instagram.com/karachikingsary', label: 'Karachi Kings' }],
		logo: Assets.KarachiKings,
		name: 'Karachi Kings',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house',
	},
	{
		slug: 'always',
		color: '#003C71',
		description:
			"<p>Always is a leading brand in feminine hygiene products. By creating informative and empathetic social media content, we helped build brand trust and awareness, encouraging conversations around menstrual health and hygiene.</p>",
		shortDescription:
			"Always is a leading brand in feminine hygiene products. By creating informative and empathetic social media content, we helped build brand trust and awareness, encouraging conversations around menstrual health and hygiene.",
		links: [{ to: 'https://www.instagram.com/always.pakistan/', label: 'Always' }],
		logo: Assets.Always,
		name: 'Always',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'ariel',
		color: '#009B77',
		description:
			"<p>Ariel is a well-known laundry detergent brand. Our social media strategy focused on showcasing Ariel’s effectiveness through creative visuals and user testimonials, which increased brand engagement and consumer loyalty.</p>",
		shortDescription:
			"Ariel is a well-known laundry detergent brand. Our social media strategy focused on showcasing Ariel’s effectiveness through creative visuals and user testimonials, which increased brand engagement and consumer loyalty.",
		links: [{ to: 'https://www.instagram.com/ariel.pakistan', label: 'Ariel' }],
		logo: Assets.Ariel,
		name: 'Ariel',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'head-and-shoulders',
		color: '#004B8D',
		description:
			"<p>Head & Shoulders is a top anti-dandruff shampoo brand. We promoted its unique benefits and scientific credibility through educational posts, influencer collaborations, and interactive content, boosting brand visibility and consumer trust.</p>",
		shortDescription:
			"Head & Shoulders is a top anti-dandruff shampoo brand. We promoted its unique benefits and scientific credibility through educational posts, influencer collaborations, and interactive content, boosting brand visibility and consumer trust.",
		links: [{ to: 'https://www.facebook.com/HeadandShouldersPakistan/', label: 'Head & Shoulders' }],
		logo: Assets.HeadAndShoulders,
		name: 'Head & Shoulders',
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'gillette',
		color: '#003C71',
		description:
			"<p>Gillette, a global leader in men's grooming products, benefited from our targeted social media campaigns that highlighted product features, grooming tips, and customer testimonials, thereby enhancing brand loyalty and market presence.</p>",
		shortDescription:
			"Gillette, a global leader in men's grooming products, benefited from our targeted social media campaigns that highlighted product features, grooming tips, and customer testimonials, thereby enhancing brand loyalty and market presence.",
		links: [{ to: 'https://www.gillettepakistan.com/', label: 'Gillette' }],
		logo: Assets.Gillette,
		name: 'Gillette',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'pantene',
		color: '#E7B000',
		description:
			"<p>Pantene is renowned for its hair care products. We developed visually appealing content showcasing hair transformations and expert tips, which significantly increased engagement and promoted brand credibility.</p>",
		shortDescription:
			"Pantene is renowned for its hair care products. We developed visually appealing content showcasing hair transformations and expert tips, which significantly increased engagement and promoted brand credibility.",
		links: [{ to: 'https://www.instagram.com/pantene_pakistan/', label: 'Pantene' }],
		logo: Assets.Pantene,
		name: 'Pantene',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'rafhan',
		color: '#E0B92A',
		description:
			"<p>Rafhan is a staple food brand in Pakistan, known for its cornflour and dessert mixes. Our engaging recipes and cooking tips on social media platforms elevated brand interaction and boosted consumer interest.</p>",
		shortDescription:
			"Rafhan is a staple food brand in Pakistan, known for its cornflour and dessert mixes. Our engaging recipes and cooking tips on social media platforms elevated brand interaction and boosted consumer interest.",
		links: [{ to: 'https://www.unilever.pk/brands/nutrition/rafhan/', label: 'Rafhan' }],
		logo: Assets.Rafhan,
		name: 'Rafhan',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'hellmanns',
		color: '#F6F6F6',
		description:
			"<p>Hellmann’s is a popular mayonnaise and condiments brand. We crafted appetizing content and recipe ideas, increasing brand engagement and encouraging consumers to explore versatile uses of Hellmann’s products.</p>",
		shortDescription:
			"Hellmann’s is a popular mayonnaise and condiments brand. We crafted appetizing content and recipe ideas, increasing brand engagement and encouraging consumers to explore versatile uses of Hellmann’s products.",
		links: [{ to: 'https://www.facebook.com/hellmannspk/', label: 'Hellmanns' }],
		logo: Assets.Hellmanns,
		name: 'Hellmanns',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'gluco-juniors',
		color: '#F4C542',
		description:
			"<p>Gluco Juniors is a children’s biscuit brand known for its nutritional value. We targeted parents with creative and informative content, enhancing brand perception and driving product trials.</p>",
		shortDescription:
			"Gluco Juniors is a children’s biscuit brand known for its nutritional value. We targeted parents with creative and informative content, enhancing brand perception and driving product trials.",
		links: [{ to: 'https://www.ebm.com.pk/products/gluco', label: 'Gluco Juniors' }],
		logo: Assets.GlucoJuniors,
		name: 'Gluco Juniors',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'pampers',
		color: '#B2B4B9',
		description:
			"<p>Pampers is a leading diaper brand. Our social media strategy focused on parenting tips, product benefits, and user stories, fostering a community of loyal customers and enhancing brand trust.</p>",
		shortDescription:
			"Pampers is a leading diaper brand. Our social media strategy focused on parenting tips, product benefits, and user stories, fostering a community of loyal customers and enhancing brand trust.",
		links: [{ to: 'https://www.facebook.com/Pamperspakistan', label: 'Pampers' }],
		logo: Assets.Pampers,
		name: 'Pampers',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'lemon-max',
		color: '#F7E700',
		description:
			"<p>Lemon Max is a dishwashing liquid brand. By promoting its cleaning efficiency and value through engaging visuals and user reviews, we increased brand awareness and consumer preference.</p>",
		shortDescription:
			"Lemon Max is a dishwashing liquid brand. By promoting its cleaning efficiency and value through engaging visuals and user reviews, we increased brand awareness and consumer preference.",
		links: [{ to: 'https://colgate.com.pk/exports/product/lemon-max-liquid/', label: 'LemonMax' }],
		logo: Assets.LemonMax,
		name: 'Lemon Max',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'colgate',
		color: '#0033A0',
		description:
			"<p>Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.</p>",
		shortDescription:
			"Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.",
		links: [{ to: 'https://www.colgate.com.pk/', label: 'Colgate' }],
		logo: Assets.Colgate,
		name: 'Colgate',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'anne-french',
		color: '#F5C4B4',
		description:
			"<p>Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.</p>",
		shortDescription:
			"Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.",
		links: [{ to: 'https://www.facebook.com/AnneFrenchPK', label: 'Anne French' }],
		logo: Assets.AnneFrench,
		name: 'Anne French',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'effie-awards',
		color: '#F2B90D',
		description:
			"<p>Effie Awards recognizes and rewards effective marketing communications, celebrating the brands that are most effective in meeting their marketing objectives.</p>",
		shortDescription:
			"Effie Awards recognizes and rewards effective marketing communications, celebrating the brands that are most effective in meeting their marketing objectives.",
		links: [{ to: 'https://www.effie.org/', label: 'Effie Awards' }],
		logo: Assets.EffieAwards,
		name: 'Effie Awards',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'colgate',
		color: '#0033A0',
		description:
			"<p>Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.</p>",
		shortDescription:
			"Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.",
		links: [{ to: 'https://www.colgate.com.pk/', label: 'Colgate' }],
		logo: Assets.LemonMax,
		name: 'Colgate',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'digicel',
		color: '#F26A4C',
		description:
			"<p>Digicel is a telecommunications provider offering mobile, broadband, and digital services in various regions including Pakistan.</p>",
		shortDescription:
			"Digicel is a telecommunications provider offering mobile, broadband, and digital services in various regions including Pakistan.",
		links: [{ to: 'https://www.digicelgroup.com/', label: 'Digicel' }],
		logo: Assets.Digicel,
		name: 'Digicel',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'continental-biscuits',
		color: '#ff3e00',
		description:
			"<p>Continental Biscuits is a Pakistani company known for its wide range of biscuit and confectionery products.</p>",
		shortDescription:
			"Continental Biscuits is a Pakistani company known for its wide range of biscuit and confectionery products.",
		links: [{ to: 'https://www.continentalbiscuits.com.pk/', label: 'Continental Biscuits' }],
		logo: Assets.ContinentalBiscuits,
		name: 'Continental Biscuits',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'prince-biscuits',
		color: '#DAA520',
		description:
			"<p>Prince Biscuits is a well-known Pakistani brand offering various types of biscuits and snacks.</p>",
		shortDescription:
			"Prince Biscuits is a well-known Pakistani brand offering various types of biscuits and snacks.",
		links: [{ to: 'https://www.continentalbiscuits.com.pk/prince/', label: 'Prince Biscuits' }],
		logo: Assets.Prince,
		name: 'Prince Biscuits',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'candi-biscuits',
		color: '#FF6347',
		description:
			"<p>Candi Biscuits provides a variety of biscuit products, known for their taste and quality in the Pakistani market.</p>",
		shortDescription:
			"Candi Biscuits provides a variety of biscuit products, known for their taste and quality in the Pakistani market.",
		links: [{ to: 'https://www.continentalbiscuits.com.pk/candi/', label: 'Candi Biscuits' }],
		logo: Assets.Candi,
		name: 'Candi Biscuits',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'gala-biscuits',
		color: '#FF4500',
		description:
			"<p>Gala Biscuits is a popular brand in Pakistan, offering a diverse range of delicious biscuit varieties.</p>",
		shortDescription:
			"Gala Biscuits is a popular brand in Pakistan, offering a diverse range of delicious biscuit varieties.",
		links: [{ to: 'https://www.continentalbiscuits.com.pk/gala/', label: 'Gala Biscuits' }],
		logo: Assets.Gala,
		name: 'Gala Biscuits',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	
	{
		slug: 'wheatable-biscuits',
		color: '#FFD700',
		description:
			"<p>Wheatable Biscuits are known for their nutritious and tasty range of biscuit products, popular in Pakistan.</p>",
		shortDescription:
			"Wheatable Biscuits are known for their nutritious and tasty range of biscuit products, popular in Pakistan.",
		links: [{ to: 'https://www.continentalbiscuits.com.pk/wheatable/', label: 'Wheatable' }],
		logo: Assets.Wheatable,
		name: 'Wheatable Biscuits',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
	{
		slug: 'engro-foundation',
		color: '#009B77',
		description:
			"<p>Engro Foundation is a non-profit organization working to improve lives through sustainable development and social welfare initiatives in Pakistan.</p>",
		shortDescription:
			"Engro Foundation is a non-profit organization working to improve lives through sustainable development and social welfare initiatives in Pakistan.",
		links: [{ to: 'https://www.engrofoundation.com/', label: 'Engro Foundation' }],
		logo: Assets.EngroFoundation,
		name: 'Engro Foundation',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'Client Website',
	},
];

export const getProjects = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Project> => items.filter((it) => slugs.includes(it.slug));

export const title = 'Clients';
