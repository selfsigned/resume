<script lang="ts">
	export let title: string;
</script>

<div class="card card-bordered w-full p-2 shadow-sm">
	{#if title}
		<h2 class="mb-2 ml-2 font-vcr text-2xl tracking-wide">{title}</h2>
	{/if}
	<div class="ml-2">
		<slot />
	</div>
</div>
