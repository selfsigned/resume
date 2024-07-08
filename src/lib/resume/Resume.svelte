<script lang="ts">
	import ResumeBodyCard from './BodyCard.svelte';
	import SidebarSection from './SidebarSection.svelte';
	import ExperienceEntry from './ExperienceEntry.svelte';
	import SidebarProgress from './SidebarProgress.svelte';
	import SidebarSkill from './SidebarSkill.svelte';
	import SidebarLink from './SidebarLink.svelte';
	import SidebarCertification from './SidebarCertification.svelte';

	// assets
	import avatarURL from './avatar.webp';
	import IconWeb from '~icons/mdi/web';
	import IconEmail from '~icons/mdi/email';
	import IconPhone from '~icons/mdi/phone';
	import IconLinkedin from '~icons/mdi/linkedin';
	import IconGithub from '~icons/mdi/github-box';

	export let name: string = 'XAVIER PERRIN';
	export let title: string = 'Full Stack Cloud Developer';

	// socials
	export let website: string | undefined = 'selfsigned.dev';
	export let email: string | undefined = 'me@selfsigned.dev';
	export let phone: string | undefined = undefined;
	export let linkedin: string | undefined = 'selfsigned';
	export let github: string | undefined = 'selfsigned';

	// Impl details
	export let forPrint: boolean = false;
</script>

<div
	class="flex h-[29.7cm] w-[21cm] flex-row-reverse font-normal {forPrint ? 'remove-shadows' : ''}"
	{...$$restProps}
>
	<!-- Sidebar -->
	<div class="card card-bordered mx-2 mb-2 mt-2 flex w-5/12 items-center shadow-xl">
		<!-- Avatar -->
		<div class="avatar mb-2 mt-2">
			<div class="w-[6rem] rounded-3xl border border-base-300 shadow-xl">
				<img src={avatarURL} alt="profile" />
			</div>
		</div>

		<SidebarSection title="CONTACT">
			{#if phone}
				<SidebarLink iconComponent={IconPhone} href="tel:{phone}" text={phone} />
			{/if}
			{#if website}
				<SidebarLink
					iconComponent={IconWeb}
					tabOpen={true}
					href="https://{website}"
					text={website}
				/>
			{/if}
			{#if email}
				<SidebarLink iconComponent={IconEmail} href="mailto:{email}" text={email} />
			{/if}
			{#if github}
				<SidebarLink
					iconComponent={IconGithub}
					tabOpen={true}
					href="https://github.com/{github}"
					text="github.com/{github}"
				/>
			{/if}
			{#if linkedin}
				<SidebarLink
					iconComponent={IconLinkedin}
					tabOpen={true}
					href="https://linkedin.com/in/{linkedin}"
					text="linkedin.com/in/{linkedin}"
				/>
			{/if}
		</SidebarSection>

		<SidebarSection title="CERTIFICATIONS">
			<SidebarCertification
				link="https://www.credly.com/badges/0887a59a-bb5c-4872-a99e-534eaff3ebde/public_url"
				title="AWS Certified Developer"
				level="Associate"
				date="12.2023"
			/>
			<SidebarCertification
				link="https://www.credly.com/badges/3017ddeb-6eea-4efd-a67e-18cc3e8feae7/public_url"
				title="AWS Solutions Architect"
				level="Associate"
				date="11.2023"
			/>
		</SidebarSection>

		<SidebarSection title="SKILLS">
			<SidebarSkill
				title="Programming Languages"
				tags={['JavaScript', 'TypeScript', 'Go', 'Python', 'C', 'Dart', 'Bash', 'HTML', 'CSS']}
			/>
			<SidebarSkill
				title="Frameworks"
				tags={['SvelteKit', 'Flutter', 'SST', 'Drizzle ORM', 'Tailwind']}
			/>
			<SidebarSkill
				title="DevOps"
				tags={['AWS', 'Docker', 'Linux', 'Terraform', 'Ansible', 'GitHub Actions', 'Proxmox']}
			/>
			<SidebarSkill
				title="Tooling"
				tags={['Git', 'VS Code', 'VIM', 'ElasticSearch', 'OpenAI API']}
			/>
		</SidebarSection>
		<SidebarSection title="LANGUAGES" titleClass="-mt-2">
			<div class="mr-4">
				<SidebarProgress label="English" subLabel="Fluent (C2)" percentage="95" />
				<SidebarProgress label="French" subLabel="First language" percentage="100" />
			</div>
		</SidebarSection>
		<SidebarSection title="INTERESTS">
			<SidebarSkill tags={['Street Food', 'Post_Punk', 'Entrepreneurship', 'Art', '...']} />
		</SidebarSection>
	</div>

	<!-- Body -->
	<div class="my-2 ml-2 flex w-full flex-col gap-2">
		<!-- Title -->
		<div class="card w-full items-center bg-base-300 p-2 shadow-md {forPrint ? '' : 'glass'}">
			<h1 class="font-vcr text-5xl font-bold tracking-tight">{name}</h1>
			<div class="divider m-2 mx-[38%] h-1" />
			<h2 class="text-lg">{title}</h2>
		</div>
		<ResumeBodyCard title="WORK EXPERIENCE">
			<ExperienceEntry
				position="AWS Cloud Consultant"
				company="Devoteam Revolve"
				date="2023"
				tags={['AWS', 'Cloud', 'DevOps', 'Serverless', 'Lambda', 'IaC']}
				achievements={[
					'Achieved multiple AWS certifications and gained valuable experience in cloud migration and architecture.',
					'Volunteered to work on internal serverless projects to facilitate the onboarding of new employees.',
				]}
			/>
			<ExperienceEntry
				position="DevOps Intern"
				company="Mixdata"
				date="01-06.2019"
				tags={['Observability', 'Backend', 'Java', 'ElasticSearch', 'Azure', 'OVH']}
				achievements={[
					"Enhanced the infrastructure's resiliency while developing new features across front and back-end.",
					'Designed and implemented a monitoring and metrics solution, delivering crucial business and infrastructure insights.',
				]}
			/>
		</ResumeBodyCard>
		<ResumeBodyCard title="EDUCATION">
			<ExperienceEntry
				position="Computer Science"
				company="42 Paris"
				date="2017-2024"
				tags={['Programming', 'Infrastructure', 'Security', 'Systems']}
				achievements={[
					"Pursuing a Bachelor's in IT Development and Master's in IT Architecture.",
					'Developed strong self-learning abilities, mastering new technologies and programming languages through projects and collaboration.',
					'Completed 20+ collaborative projects, enhancing skills in software development, system administration, and computer security.',
					'Mentored new students at the start of their curriculum.',
				]}
			/>
			<ExperienceEntry
				position="LVMH UX Academy"
				company="HEC"
				date="01.2024"
				tags={['UX', 'Prototyping', 'Project Management', 'Front-end', 'Bootcamp']}
				achievements={[
					'Collaborated with a dynamic team of six to innovate and enhance the retail experience for a prestigious brand, utilizing guerilla interviews to inform our approach.',
					'Crafted a prototype pivotal in making a startup-style pitch of our vision to LVMH management.',
				]}
			/>
			<ExperienceEntry
				position="OPTION E"
				company="ESCP"
				date="09-12.2022"
				tags={['Design Thinking', 'Art Thinking', 'Startup', 'Leadership']}
				achievements={[
					"Selectioned to take part in a top business school's Master in Management disruptive entrepreneurship specialization.",
					'Pitched a project developed within a multi-talented team to a jury composed of professors, domain experts and VCs.',
				]}
				padding={2}
			/>
		</ResumeBodyCard>
	</div>
</div>
