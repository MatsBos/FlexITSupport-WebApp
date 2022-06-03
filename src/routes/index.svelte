<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let y;
	let switched = false;
	let flyIn = false;
	let logoMobile = false;
	let slogan;

	onMount(() => {
		switched = true;
	});

	let prevScroll = 0;
	function onScroll(scrollVal) {
		slogan = document.getElementById('slogan').getBoundingClientRect().top;

		if (scrollVal > 2 && scrollVal < 9) {
			if (prevScroll > scrollVal) {
				switched = false;
				switched = true;
				scrollVal = 0;
			}

			prevScroll = scrollVal;
		}

		if (slogan > 10) {
			logoMobile = true;
		} else {
			logoMobile = false;
		}
	}
</script>

<div class="h-full grid ">
	{#if !switched}
	<div class="place-items-center grid pt-10 z-0">
		<img
			out:fade="{{ duration: 100 }}"
			class="w-2/6"
			src="/logo_full/svg/flexit-dark-transparent-top.svg"
			alt="flexit-logo-dark-transparent" />

		<img
			out:fade="{{ duration: 100 }}"
			id="slogan"
			class="w-2/6"
			src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
			alt="flexit-logo-dark-transparent" />

		<h1
			out:fade="{{ duration: 100 }}"
			class="font-bold flex justify-center pt-10"
			style="font-size: 4vw;">
			Unlimited Flexible IT Support
		</h1>
	</div>
	{:else}
		<div class="place-items-center grid pt-10 z-0 ">
			<img
				in:fly="{{ duration: 1000, y: -100, delay: 200 }}"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-top.svg"
				alt="flexit-logo-dark-transparent" />

			<img
				id="slogan"
				in:fly="{{ duration: 1000, y: 100, delay: 200 }}"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
				alt="flexit-logo-dark-transparent" />

			<h1
				in:fly="{{ duration: 1000, y: 100, delay: 700 }}"
				class="font-bold flex justify-center pt-10"
				style="font-size: 4vw;">
				Unlimited Flexible IT Support
			</h1>
		</div>
	{/if}
</div>
<!-- 
<div class="h-full grid ">
	<div class="place-items-center grid py-10 z-0">
	{#if switched}
		
			<img
				in:fly="{{ duration: 1000, y: -100, delay: 1000 }}"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-top.svg"
				alt="flexit-logo-dark-transparent" />

			<img
				id="slogan"
				in:fly="{{ duration: 1000, y: 100, delay: 1000 }}"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
				alt="flexit-logo-dark-transparent" />
		

		<h1
			in:fly="{{ duration: 1000, y: 100, delay: 1700 }}"
			on:introend="{() => (flyIn = true)}"
			class="font-bold flex justify-center"
			style="font-size: 4vw;">
			Unlimited Flexible IT Support
		</h1>
	{:else if !flyIn}
		
			<img
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-top.svg"
				alt="flexit-logo-dark-transparent" />

			<img
				id="slogan"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
				alt="flexit-logo-dark-transparent" />
	

		<h1 class="font-bold flex justify-center" style="font-size: 4vw;">
			Unlimited Flexible IT Support
		</h1>
	{/if}
</div>
</div> -->

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"
	><path
		fill="#69bac9"
		fill-opacity="1"
		d="M0,160L40,186.7C80,213,160,267,240,250.7C320,235,400,149,480,138.7C560,128,640,192,720,224C800,256,880,256,960,218.7C1040,181,1120,107,1200,80C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
	></path
	></svg>

<div class="w-screen h-screen bg-fountain-blue"></div>

<svelte:window bind:scrollY="{y}" on:scroll="{onScroll(y)}" />
