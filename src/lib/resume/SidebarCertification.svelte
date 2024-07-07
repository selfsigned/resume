<script lang="ts">
	import IconLevel from '~icons/mdi/school';
	import IconDate from '~icons/mdi/calendar';

	export let title: string;
	export let link: string;
	export let level: string | undefined = undefined;
	export let date: string | undefined = undefined;
</script>

<div class="mb-2">
	<a href={link} class="hover:underline">
		<h4 class="font-mono font-medium">{title}</h4>
		<div class="flex w-52 justify-between font-extralight">
			{#if level}
				<div class="flex">
					<IconLevel class="mr-1 mt-[1px]" />
					<p class="font-light">{level}</p>
				</div>
			{/if}

			{#if date}
				<div class="flex">
					<IconDate class="mr-1 mt-[1px]" />
					<p>{date}</p>
				</div>
			{/if}
		</div>
	</a>
</div>
