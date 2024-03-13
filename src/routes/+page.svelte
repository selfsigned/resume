<script lang="ts">
	import Resume from '$lib/resume/Resume.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let forPrint: boolean;
	let theme: string | null;

	onMount(() => {
		forPrint = !!$page.url.searchParams.get('print');
		theme = $page.url.searchParams.get('theme');
	});
</script>

<Resume {forPrint} data-theme={theme} />
