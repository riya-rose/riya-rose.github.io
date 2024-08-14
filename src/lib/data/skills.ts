import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Content Creation', slug: 'content-creation' }),
	defineSkillCategory({ name: 'Digital Marketing', slug: 'digital-marketing' }),
	defineSkillCategory({ name: 'Project Leadership', slug: 'project-leadership' }),
	defineSkillCategory({ name: 'Creative Thinking', slug: 'creative-thinking' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'content-strategy',
		color: '#2D3E50',
		description:
			'Developing comprehensive content plans to achieve client goals..',
		logo: Assets.ContentStrategy,
		name: 'Content Strategy',
		category: 'content-creation'
	}),
	defineSkill({
		slug: 'copywriting',
		color: '#5D5C61',
		description:
			'Crafting compelling, engaging content for various marketing channels keeping in line the individual voice of each client.',
		logo: Assets.Copywriting,
		name: 'Copywriting',
		category: 'content-creation'
	}),
	defineSkill({
		slug: 'concept-development',
		color: '#8E44AD',
		description:
			'Generating innovative ideas for digital and television campaigns, products, or services.',
		logo: Assets.ConceptDevelopment,
		name: 'Concept Development',
		category: 'content-creation'
	}),
	defineSkill({
		slug: 'social-media-management',
		color: '#1DA1F2',
		description:
			'Managing and executing social media presence and campaigns.',
		logo: Assets.SocialMediaManagement,
		name: 'Social Media Management',
		category: 'digital-marketing'
	}),
	defineSkill({
		slug: 'digital-campaign-creation',
		color: '#FF5733',
		description:
			'Designing and implementing targeted online marketing campaigns.',
		logo: Assets.DigitalCampaignCreation,
		name: 'Digital Campaign Creation',
		category: 'digital-marketing'
	}),
	defineSkill({
		slug: 'project-management',
		color: '#27AE60',
		description:
			'Overseeing projects from planning to execution, ensuring timely delivery.',
		logo: Assets.ProjectManagement,
		name: 'Project Management',
		category: 'project-leadership'
	}),
	defineSkill({
		slug: 'creative-ideation',
		color: '#F39C12',
		description:
			'Generating fresh, innovative ideas to solve marketing challenges.',
		logo: Assets.CreativeIdeation,
		name: 'Creative Ideation',
		category: 'creative-thinking'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
