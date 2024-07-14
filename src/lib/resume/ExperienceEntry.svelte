<script lang="ts">
	export let position: string;
	export let company: string | undefined = undefined;
	export let date: string;
	export let achievements: Array<string> | undefined = undefined;
	export let tags: Array<string> | undefined = undefined;

	export let padding = 4;
</script>

<div class="mb-{padding}">
	<!-- headline -->
	<div class="flex w-full justify-between text-lg">
		<h3 class="font-medium">
			{company ? position + ',' : position}
			{#if company}
				<span class="font-normal">{company}</span>
			{/if}
		</h3>
		<span class="mt-[3px] flex font-mono text-base opacity-80">{date}</span>
	</div>
	<div class="divider mb-2 mt-0 h-0" />
	<!-- tags -->
	<div class="mb-2 flex flex-row flex-wrap gap-2">
		{#if tags}
			{#each tags as tag}
				<div class="rounded-sm bg-base-200 px-2 text-sm font-light shadow-inner">{tag}</div>
			{/each}
		{/if}
	</div>
	<!-- exp lines -->

	<div class="text-md">
		{#if achievements}
			{#each achievements as achievement}
				<div class="mb-1 flex text-sm leading-snug">
					<span class=" mr-1 font-vcr">»</span>
					<p>{achievement}</p>
				</div>
			{/each}
		{/if}
	</div>
</div>
