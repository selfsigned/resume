<script lang="ts">
	import Resume from '$lib/resume/Resume.svelte';
	import { page } from '$app/stores';

	const forPrint = !!$page.url.searchParams.get('print');
	const theme = $page.url.searchParams.get('theme');
</script>

<Resume {forPrint} data-theme={theme} />
