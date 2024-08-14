import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

export const items: Array<Project> = [
	{
		slug: 'ary-digital',
		color: '#D9001D',
		description:
			"<p>ARY Digital is a leading Pakistani television channel offering a diverse range of entertainment programs, including dramas, talk shows, reality shows, and movies. It is known for its high-quality content and broad appeal across various age groups.</p>",
		shortDescription:
			"ARY Digital is a leading Pakistani television channel offering a diverse range of entertainment programs, including dramas, talk shows, reality shows, and movies. It is known for its high-quality content and broad appeal across various age groups.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://arydigital.tv/', label: 'In-house' }],
		logo: Assets.ARYDigital,
		name: 'ARY Digital',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management', 'concept-development'),
		type: 'In-house',
		screenshots: [
			{
				src: 'https://drive.google.com/file/d/1BSoRtH3CXqNuULzeP1Efylr6G9HW06_J/preview'
			},
			{
				src: 'https://drive.google.com/file/d/1mzZYfrTcPumF2DmsUaZHQX_saPOXS90e/preview'
			},
			{
				src: 'https://drive.google.com/file/d/1pIr-98mHzOIYqh-6vJ1sIJNIZnYhaMDR/preview'
			},
			{
				src: 'https://drive.google.com/file/d/1w9EwzTTpTvnLvznP34ectZyWQUuGitSy/preview'
			},
			{
				src: 'https://drive.google.com/file/d/1az0Gq2ucNHUeXVpdOQE68cBCL6Ky9KhI/preview'
			},
			{
				src: 'https://drive.google.com/file/d/1CqtXB_IVJ8TbiNNbTLiQj8p_hp9CXfEv/preview'
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
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://a-sports.tv/', label: 'ASports' }],
		logo: Assets.ASports,
		name: 'ASports',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management', 'concept-development'),
		type: 'In-house',
	},
	{
		slug: 'ary-zindagi',
		color: '#009D8E',
		description:
			"<p>ARY Zindagi is a popular Pakistani entertainment channel known for its diverse range of TV shows, dramas, and reality programs. By managing its social media presence, we increased audience engagement and boosted viewership through strategic content promotion and interactive campaigns.</p>",
		shortDescription:
			"ARY Zindagi is a popular Pakistani entertainment channel known for its diverse range of TV shows, dramas, and reality programs. By managing its social media presence, we increased audience engagement and boosted viewership through strategic content promotion and interactive campaigns.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://aryzindagi.tv/', label: 'ARY Zindagi' }],
		logo: Assets.ARYZindagi,
		name: 'ARY Zindagi',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'In-house',
	},
	{
		slug: 'ary-zap',
		color: '#FF4F5A',
		description:
			"<p>ARY Zap is a digital platform offering live streaming of ARY network channels. Through effective social media advertising and targeted promotions, we significantly increased app downloads and user engagement, making it a go-to source for live Pakistani TV.</p>",
		shortDescription:
			"ARY Zap is a digital platform offering live streaming of ARY network channels. Through effective social media advertising and targeted promotions, we significantly increased app downloads and user engagement, making it a go-to source for live Pakistani TV.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://aryzap.com/', label: 'ARY Zap' }],
		logo: Assets.ARYZap,
		name: 'ARY Zap',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'In-house',
	},
	{
		slug: 'karachi-kings',
		color: '#003A6C',
		description:
			"<p>Karachi Kings is a franchise cricket team in the Pakistan Super League. Our social media campaigns highlighted key matches, player profiles, and behind-the-scenes content, creating a strong fan base and increasing brand loyalty during the PSL season.</p>",
		shortDescription:
			"Karachi Kings is a franchise cricket team in the Pakistan Super League. Our social media campaigns highlighted key matches, player profiles, and behind-the-scenes content, creating a strong fan base and increasing brand loyalty during the PSL season.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.instagram.com/karachikingsary', label: 'Karachi Kings' }],
		logo: Assets.KarachiKings,
		name: 'Karachi Kings',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'In-house',
	},
	{
		slug: 'always',
		color: '#003C71',
		description:
			"<p>Always is a leading brand in feminine hygiene products. By creating informative and empathetic social media content, we helped build brand trust and awareness, encouraging conversations around menstrual health and hygiene.</p>",
		shortDescription:
			"Always is a leading brand in feminine hygiene products. By creating informative and empathetic social media content, we helped build brand trust and awareness, encouraging conversations around menstrual health and hygiene.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.instagram.com/always.pakistan/', label: 'Always' }],
		logo: Assets.Always,
		name: 'Always',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'ariel',
		color: '#009B77',
		description:
			"<p>Ariel is a well-known laundry detergent brand. Our social media strategy focused on showcasing Ariel’s effectiveness through creative visuals and user testimonials, which increased brand engagement and consumer loyalty.</p>",
		shortDescription:
			"Ariel is a well-known laundry detergent brand. Our social media strategy focused on showcasing Ariel’s effectiveness through creative visuals and user testimonials, which increased brand engagement and consumer loyalty.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.instagram.com/ariel.pakistan', label: 'Ariel' }],
		logo: Assets.Ariel,
		name: 'Ariel',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'head-and-shoulders',
		color: '#004B8D',
		description:
			"<p>Head & Shoulders is a top anti-dandruff shampoo brand. We promoted its unique benefits and scientific credibility through educational posts, influencer collaborations, and interactive content, boosting brand visibility and consumer trust.</p>",
		shortDescription:
			"Head & Shoulders is a top anti-dandruff shampoo brand. We promoted its unique benefits and scientific credibility through educational posts, influencer collaborations, and interactive content, boosting brand visibility and consumer trust.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.facebook.com/HeadandShouldersPakistan/', label: 'Head & Shoulders' }],
		logo: Assets.HeadAndShoulders,
		name: 'Head & Shoulders',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'lipton',
		color: '#FFD700',
		description:
			"<p>Lipton is a leading tea brand in Pakistan, offering a wide range of tea blends known for their quality and refreshing taste.</p>",
		shortDescription:
			"Lipton is a leading tea brand in Pakistan, offering a wide range of tea blends known for their quality and refreshing taste.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.instagram.com/lipton_pakistan/?hl=en', label: 'Lipton' }],
		logo: Assets.Lipton,
		name: 'Lipton',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'knorr',
		color: '#007A33',
		description:
			"<p>Knorr is a popular food brand in Pakistan, offering a variety of ready-made sauces, seasonings, soups, and noodles.</p>",
		shortDescription:
			"Knorr is a popular food brand in Pakistan, offering a variety of ready-made sauces, seasonings, soups, and noodles.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.unilever.pk/brands/nutrition/knorr/', label: 'Knorr' }],
		logo: Assets.Knorr,
		name: 'Knorr',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'hbl',
		color: '#007A33',
		description:
			"<p>HBL is one of Pakistan’s largest and oldest banks, offering a range of financial services including banking, loans, and investment products.</p>",
		shortDescription:
			"HBL is one of Pakistan’s largest and oldest banks, offering a range of financial services including banking, loans, and investment products.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.hbl.com/', label: 'HBL' }],
		logo: Assets.HBL,
		name: 'HBL',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'concept-development'),
		type: 'Client Website',
	},
	{
		slug: 'khaadi',
		color: '#004B8D',
		description:
			"<p>Khaadi is a renowned Pakistani fashion brand known for its handwoven textiles and contemporary clothing designs.</p>",
		shortDescription:
			"Khaadi is a renowned Pakistani fashion brand known for its handwoven textiles and contemporary clothing designs.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.khaadi.com/', label: 'Khaadi' }],
		logo: Assets.Khaadi,
		name: 'Khaadi',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'gillette',
		color: '#003C71',
		description:
			"<p>Gillette, a global leader in men's grooming products, benefited from our targeted social media campaigns that highlighted product features, grooming tips, and customer testimonials, thereby enhancing brand loyalty and market presence.</p>",
		shortDescription:
			"Gillette, a global leader in men's grooming products, benefited from our targeted social media campaigns that highlighted product features, grooming tips, and customer testimonials, thereby enhancing brand loyalty and market presence.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.gillettepakistan.com/', label: 'Gillette' }],
		logo: Assets.Gillette,
		name: 'Gillette',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'pantene',
		color: '#E7B000',
		description:
			"<p>Pantene is renowned for its hair care products. We developed visually appealing content showcasing hair transformations and expert tips, which significantly increased engagement and promoted brand credibility.</p>",
		shortDescription:
			"Pantene is renowned for its hair care products. We developed visually appealing content showcasing hair transformations and expert tips, which significantly increased engagement and promoted brand credibility.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.instagram.com/pantene_pakistan/', label: 'Pantene' }],
		logo: Assets.Pantene,
		name: 'Pantene',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'concept-development'),
		type: 'Client Website',
	},
	{
		slug: 'rafhan',
		color: '#E0B92A',
		description:
			"<p>Rafhan is a staple food brand in Pakistan, known for its cornflour and dessert mixes. Our engaging recipes and cooking tips on social media platforms elevated brand interaction and boosted consumer interest.</p>",
		shortDescription:
			"Rafhan is a staple food brand in Pakistan, known for its cornflour and dessert mixes. Our engaging recipes and cooking tips on social media platforms elevated brand interaction and boosted consumer interest.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.unilever.pk/brands/nutrition/rafhan/', label: 'Rafhan' }],
		logo: Assets.Rafhan,
		name: 'Rafhan',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'hellmanns',
		color: '#F6F6F6',
		description:
			"<p>Hellmann’s is a popular mayonnaise and condiments brand. We crafted appetizing content and recipe ideas, increasing brand engagement and encouraging consumers to explore versatile uses of Hellmann’s products.</p>",
		shortDescription:
			"Hellmann’s is a popular mayonnaise and condiments brand. We crafted appetizing content and recipe ideas, increasing brand engagement and encouraging consumers to explore versatile uses of Hellmann’s products.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.facebook.com/hellmannspk/', label: 'Hellmanns' }],
		logo: Assets.Hellmanns,
		name: 'Hellmanns',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'concept-development'),
		type: 'Client Website',
	},
	{
		slug: 'js-bank',
		color: '#004890',
		description:
			"<p>JS Bank is a prominent Pakistani bank offering a range of financial services including personal and corporate banking, loans, and investment products.</p>",
		shortDescription:
			"JS Bank is a prominent Pakistani bank offering a range of financial services including personal and corporate banking, loans, and investment products.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.jsbl.com/', label: 'JS Bank' }],
		logo: Assets.JSB,
		name: 'JS Bank',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'concept-development'),
		type: 'Client Website',
	},
	{
		slug: 'gluco-juniors',
		color: '#F4C542',
		description:
			"<p>Gluco Juniors is a children’s biscuit brand known for its nutritional value. We targeted parents with creative and informative content, enhancing brand perception and driving product trials.</p>",
		shortDescription:
			"Gluco Juniors is a children’s biscuit brand known for its nutritional value. We targeted parents with creative and informative content, enhancing brand perception and driving product trials.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.ebm.com.pk/products/gluco', label: 'Gluco Juniors' }],
		logo: Assets.GlucoJuniors,
		name: 'Gluco Juniors',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'pampers',
		color: '#B2B4B9',
		description:
			"<p>Pampers is a leading diaper brand. Our social media strategy focused on parenting tips, product benefits, and user stories, fostering a community of loyal customers and enhancing brand trust.</p>",
		shortDescription:
			"Pampers is a leading diaper brand. Our social media strategy focused on parenting tips, product benefits, and user stories, fostering a community of loyal customers and enhancing brand trust.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.facebook.com/Pamperspakistan', label: 'Pampers' }],
		logo: Assets.Pampers,
		name: 'Pampers',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'lemon-max',
		color: '#F7E700',
		description:
			"<p>Lemon Max is a dishwashing liquid brand. By promoting its cleaning efficiency and value through engaging visuals and user reviews, we increased brand awareness and consumer preference.</p>",
		shortDescription:
			"Lemon Max is a dishwashing liquid brand. By promoting its cleaning efficiency and value through engaging visuals and user reviews, we increased brand awareness and consumer preference.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://colgate.com.pk/exports/product/lemon-max-liquid/', label: 'LemonMax' }],
		logo: Assets.LemonMax,
		name: 'Lemon Max',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'colgate',
		color: '#0033A0',
		description:
			"<p>Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.</p>",
		shortDescription:
			"Colgate is a leading global brand specializing in oral care products, including toothpaste, toothbrushes, and mouthwashes.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.colgate.com.pk/', label: 'Colgate' }],
		logo: Assets.Colgate,
		name: 'Colgate',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'anne-french',
		color: '#F5C4B4',
		description:
			"<p>Anne French offers a range of skincare products, including hair removal creams and other beauty solutions.</p>",
		shortDescription:
			"Anne French offers a range of skincare products, including hair removal creams and other beauty solutions.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.facebook.com/AnneFrenchPK', label: 'Anne French' }],
		logo: Assets.AnneFrench,
		name: 'Anne French',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	{
		slug: 'effie-awards',
		color: '#F2B90D',
		description:
			"<p>Effie Awards recognizes and rewards effective marketing communications, celebrating the brands that are most effective in meeting their marketing objectives.</p>",
		shortDescription:
			"Effie Awards recognizes and rewards effective marketing communications, celebrating the brands that are most effective in meeting their marketing objectives.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.effie.org/', label: 'Effie Awards' }],
		logo: Assets.EffieAwards,
		name: 'Effie Awards',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},	
	{
		slug: 'digicel',
		color: '#F26A4C',
		description:
			"<p>Digicel is a telecommunications provider offering mobile, broadband, and digital services in various regions including Pakistan.</p>",
		shortDescription:
			"Digicel is a telecommunications provider offering mobile, broadband, and digital services in various regions including Pakistan.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.digicelgroup.com/', label: 'Digicel' }],
		logo: Assets.Digicel,
		name: 'Digicel',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation'),
		type: 'Client Website',
	},
	
	{
		slug: 'continental-biscuits',
		color: '#ff3e00',
		description:
			"<p>Continental Biscuits is a Pakistani company known for its wide range of biscuit and confectionery products.</p>",
		shortDescription:
			"Continental Biscuits is a Pakistani company known for its wide range of biscuit and confectionery products.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.continentalbiscuits.com.pk/', label: 'Continental Biscuits' }],
		logo: Assets.ContinentalBiscuits,
		name: 'Continental Biscuits',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'Client Website',
	},
	
	{
		slug: 'prince-biscuits',
		color: '#DAA520',
		description:
			"<p>Prince Biscuits is a well-known Pakistani brand offering various types of biscuits and snacks.</p>",
		shortDescription:
			"Prince Biscuits is a well-known Pakistani brand offering various types of biscuits and snacks.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.continentalbiscuits.com.pk/prince/', label: 'Prince Biscuits' }],
		logo: Assets.Prince,
		name: 'Prince Biscuits',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'Client Website',
	},
	
	{
		slug: 'candi-biscuits',
		color: '#FF6347',
		description:
			"<p>Candi Biscuits provides a variety of biscuit products, known for their taste and quality in the Pakistani market.</p>",
		shortDescription:
			"Candi Biscuits provides a variety of biscuit products, known for their taste and quality in the Pakistani market.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.continentalbiscuits.com.pk/candi/', label: 'Candi Biscuits' }],
		logo: Assets.Candi,
		name: 'Candi Biscuits',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'Client Website',
	},
	
	{
		slug: 'gala-biscuits',
		color: '#FF4500',
		description:
			"<p>Gala Biscuits is a popular brand in Pakistan, offering a diverse range of delicious biscuit varieties.</p>",
		shortDescription:
			"Gala Biscuits is a popular brand in Pakistan, offering a diverse range of delicious biscuit varieties.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.continentalbiscuits.com.pk/gala/', label: 'Gala Biscuits' }],
		logo: Assets.Gala,
		name: 'Gala Biscuits',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'Client Website',
	},
	
	{
		slug: 'wheatable-biscuits',
		color: '#FFD700',
		description:
			"<p>Wheatable Biscuits are known for their nutritious and tasty range of biscuit products, popular in Pakistan.</p>",
		shortDescription:
			"Wheatable Biscuits are known for their nutritious and tasty range of biscuit products, popular in Pakistan.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.continentalbiscuits.com.pk/wheatable/', label: 'Wheatable' }],
		logo: Assets.Wheatable,
		name: 'Wheatable Biscuits',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'Client Website',
	},
	{
		slug: 'engro-foundation',
		color: '#009B77',
		description:
			"<p>Engro Foundation is a non-profit organization working to improve lives through sustainable development and social welfare initiatives in Pakistan.</p>",
		shortDescription:
			"Engro Foundation is a non-profit organization working to improve lives through sustainable development and social welfare initiatives in Pakistan.",
		// period: { from: new Date(2020, 0, 29), to: new Date(2020, 0, 29) },
		links: [{ to: 'https://www.engrofoundation.com/', label: 'Engro Foundation' }],
		logo: Assets.EngroFoundation,
		name: 'Engro Foundation',
		skills: getSkills('content-strategy', 'digital-campaign-creation', 'copywriting', 'project-management', 'creative-ideation', 'social-media-management'),
		type: 'Client Website',
	},
];

export const getProjects = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Project> => items.filter((it) => slugs.includes(it.slug));

export const title = 'Clients';
