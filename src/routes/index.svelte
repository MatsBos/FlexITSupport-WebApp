<script>
	import { scale, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<h1 class="text-xl">Unlimited Flexible IT Support</h1>

{#if ready}
	<div class="grid place-items-center ">
		
			<img
				in:fly="{{ duration: 1000, y: -100, delay: 100 }}"
				class="w-2/5"
				src="/logo_full/svg/flexit-dark-transparent-top.svg"
				alt="flexit-logo-dark-transparent" />

			<img
			    in:fly="{{ duration: 1000, y: 100, delay: 100 }}"
				class="w-2/5"
				src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
				alt="flexit-logo-dark-transparent" />
	</div>
{/if}

<div class="w-screen h-screen bg-fountain-blue"></div>


