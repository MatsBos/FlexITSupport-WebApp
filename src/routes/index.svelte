<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let loaded = false;
	$: innerWidth = 800;

	onMount(() => {
		loaded = true;
	});
</script>

<div class="h-full grid landing">
	<div class="landing-back">
		
		{#if innerWidth > 768}
		<img src="/assets/code.png" alt="" />
		
		{:else}
		<img src="/assets/code-long.png" alt="" />
		{/if}
		
	</div>

	<div class="place-items-center grid py-10 md:py-16 lg:py-28 z-0">
		{#if loaded}
			<img in:fly="{{ duration: 1000, y: -200, delay: 200 }}" class="w-2/6" src="/logo_full/svg/flexit-white-transparent-top.svg" alt="flexit-logo-dark-transparent" />

			<img id="slogan" in:fly="{{ duration: 1000, y: 200, delay: 200 }}" class="w-2/6" src="/logo_full/svg/flexit-white-transparent-bottom.svg" alt="flexit-white-transparent-top.svg" />

			<h1 in:fly="{{ duration: 1000, y: 200, delay: 600 }}" class="font-bold flex justify-center pt-10 text-white" style="font-size: 4vw;">Unlimited Flexible IT Support</h1>
		{:else}
			<img class="w-2/6" src="/logo_full/svg/flexit-white-transparent-top.svg" alt="flexit-logo-white-transparent" />

			<img id="slogan" class="w-2/6" src="/logo_full/svg/flexit-white-transparent-bottom.svg" alt="flexit-logo-white-transparent" />

			<h1 class="font-bold flex justify-center pt-10 text-white" style="font-size: 4vw;">Unlimited Flexible IT Support</h1>
		{/if}
	</div>
</div>

<div class="bg-fountain-blue py-10 md:py-16 lg:py-28 px-4 sm:px-6 lg:px-8" style="transform: rotate(-3deg) skew(-3deg);">
	<div class="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between" style="transform: rotate(3deg) skew(3deg);">
		<h2 class="text-3xl font-extrabol text-white">
			<span class="text-4xl flex justify-center">Who are we?</span>
			<div class="py-5"></div>
			<span class="block text-white text-2xl">We are a brandnew startup. With three very enthousiastic students who want to learn in their free time.</span>
			<span class="block text-white text-2xl">We are a brandnew startup. With three very enthousiastic students who want to learn in their free time.</span>
			<span class="block text-white text-2xl">We are a brandnew startup. With three very enthousiastic students who want to learn in their free time.</span>
			<span class="block text-white text-2xl">We are a brandnew startup. With three very enthousiastic students who want to learn in their free time.</span>
		</h2>
	</div>
</div>

<div class="flex flex-col text-white py-10 md:py-16 lg:py-28">
	<h2 class="text-4xl font-extrabol flex justify-center py-5">meet the team</h2>

	<div class="flex flex-row gap-10 justify-around p-5 flex-wrap">
		<div class="bg-fountain-blue flex flex-row rounded-xl flex-1 card">
			<img class="rounded-xl avatar" src="/avatars/wannes.jpg" alt="" />

			<div class="px-4 py-2 grid">
				<div>Wannes Persyn</div>
				<div>CEO</div>

				<div class="flex items-end">
					<a class="w-9" href="mailto:wannes.persyn@flexitsupport.net"
						><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div class="bg-fountain-blue flex flex-row rounded-xl flex-1 card">
			<img class="rounded-xl avatar" src="/avatars/hendrik.jpg" alt="" />

			<div class="px-4 py-2 grid">
				<div>Hendrik de Mulder</div>
				<div>COO</div>

				<div class="flex items-end">
					<a class="w-9" href="mailto:wannes.persyn@flexitsupport.net">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>

		
	</div>
</div>


<svelte:window bind:innerWidth/>

<style>
	.landing {
		position: relative;
	}

	.landing-back {
		position: absolute;
		background-position: center;
		background-repeat: repeat-y;
		background-size: contain;
		left: 0;
		top: 0;
		z-index: -1;
		filter: blur(3px);
		-webkit-filter: blur(3px);
	}

	@media only screen and (max-width: 1024px) {
		.avatar {
			width: 100px;
			height: 100px;
			object-fit: cover;
		}

		.flip-card-front,
		.flip-card-back {
			min-width: 270px;
			max-width: 400px;
		}
	}
	@media only screen and (min-width: 1024px) {
		.avatar {
			width: 150px;
			height: 150px;
			object-fit: cover;
		}

		.flip-card-front,
		.flip-card-back {
			min-width: 400px;
			max-width: 500px;
		}
	}

	.card {
		text-overflow: clip;
		/* Required for text-overflow to do anything */
		white-space: nowrap;
		overflow: hidden;
	}

	.flip-card {
		min-width: 400px;
		max-width: 500px;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.flip-card-front {
		background-color: #bbb;
		color: black;
	}

	/* Style the back side */
	.flip-card-back {
		background-color: dodgerblue;
		color: rgb(17, 15, 15);
		transform: rotateY(180deg);
	}
</style>
