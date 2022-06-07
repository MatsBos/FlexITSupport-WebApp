<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<div class="h-full grid ">
		<div class="place-items-center grid pt-10 z-0 ">
			<img
				in:fly="{{ duration: 1000, y: -200, delay: 200 }}"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-top.svg"
				alt="flexit-logo-dark-transparent" />

			<img
				id="slogan"
				in:fly="{{ duration: 1000, y: 200, delay: 200 }}"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
				alt="flexit-logo-dark-transparent" />

			<h1
				in:fly="{{ duration: 1000, y: 200, delay: 600 }}"
				class="font-bold flex justify-center pt-10"
				style="font-size: 4vw;">
				Unlimited Flexible IT Support
			</h1>
		</div>
	</div>
{:else}
	<div class="h-full grid ">
		<div class="place-items-center grid pt-10 z-0 ">
			<img
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-top.svg"
				alt="flexit-logo-dark-transparent" />

			<img
				id="slogan"
				class="w-2/6"
				src="/logo_full/svg/flexit-dark-transparent-bottom.svg"
				alt="flexit-logo-dark-transparent" />

			<h1 class="font-bold flex justify-center pt-10" style="font-size: 4vw;">
				Unlimited Flexible IT Support
			</h1>
		</div>
	</div>
{/if}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"
	><path
		fill="#69bac9"
		fill-opacity="1"
		d="M0,160L40,186.7C80,213,160,267,240,250.7C320,235,400,149,480,138.7C560,128,640,192,720,224C800,256,880,256,960,218.7C1040,181,1120,107,1200,80C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
	></path
	></svg>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-fountain-blue">
	<div
		class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
		<h2 class="text-3xl font-extrabol text-gray-900">
			<span class="block text-4xl">Who are we?</span>
			<div class="py-5"></div>
			<span class="block text-indigo-600 text-2xl"
				>We are a brandnew startup. With three very enthousiastic students who want to learn in
				their free time.</span>
			<span class="block text-indigo-600 text-2xl"
				>We are a brandnew startup. With three very enthousiastic students who want to learn in
				their free time.</span>
			<span class="block text-indigo-600 text-2xl"
				>We are a brandnew startup. With three very enthousiastic students who want to learn in
				their free time.</span>
			<span class="block text-indigo-600 text-2xl"
				>We are a brandnew startup. With three very enthousiastic students who want to learn in
				their free time.</span>
			<span class="block text-indigo-600 text-2xl"
				>We are a brandnew startup. With three very enthousiastic students who want to learn in
				their free time.</span>
		</h2>
	</div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" class="bg-fountain-blue"
	><path
		fill="#ffffff"
		fill-opacity="1"
		d="M0,160L40,186.7C80,213,160,267,240,250.7C320,235,400,149,480,138.7C560,128,640,192,720,224C800,256,880,256,960,218.7C1040,181,1120,107,1200,80C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
	></path
	></svg>

<div class="bg-white flex flex-col">
	<h2 class="text-4xl font-extrabol text-gray-900 flex justify-center py-5">meet the team</h2>

	<div class="flex flex-row gap-10 justify-around p-5 flex-wrap">
		
		<div class="bg-fountain-blue flex flex-row rounded-xl flex-1 card">
			<img class="rounded-xl avatar" src="/avatars/wannes.jpg" alt="" />

			<div class="px-4 py-2 grid">
				<div>Wannes Persyn</div>
				<div>CEO</div>

				<div class="flex items-end">
					<a class="w-9" href="mailto:wannes.persyn@flexitsupport.net"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
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
					<a class="w-9" href="mailto:wannes.persyn@flexitsupport.net"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
					</a>

				</div>
			</div>
		</div>

		<div class="bg-fountain-blue flex flex-row rounded-xl flex-1 card">
			<img class="rounded-xl avatar" src="/avatars/mats.jpg" alt="" />

			<div class="px-4 py-2 grid">
				<div>Mats Bos</div>
				<div>CIO</div>

				<div class="flex items-end">
					<a class="w-9" href="mailto:mats.bos@flexitsupport.net"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
					</a>

				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media only screen and (max-width: 1024px) {
		.avatar {
			width: 100px;
			height: 100px;
			object-fit: cover;
		}

		.card {
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

		.card {
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



</style>
