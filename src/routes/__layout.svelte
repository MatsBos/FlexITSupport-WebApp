<script>
	import '../app.css';
	import Body from './index.svelte';
	import { slide, scale, fade } from 'svelte/transition';
	import { clickOutside } from '../lib/click_outside.js';


	$: innerWidth = 0

	let logoMobile;
	let slogan;

	let y;
	function onScroll(scrollVal) {
		slogan = document.getElementById('slogan').getBoundingClientRect().top;

		/*if (scrollVal > 2 && scrollVal < 9) {
			if (prevScroll > scrollVal) {
				loaded = false;
				loaded = true;
				scrollVal = 0;
			}

			prevScroll = scrollVal;
		}*/
		
		if (slogan < 10) {
			logoMobile = true;
		} else {
			logoMobile = false;
		}
	}

	let openedProfileDropdown = false;
	let openedMobileDropdown = false;
</script>

<nav class="bg-gray-800 backdrop-blur top-0 sticky z-10 ">
	<div class="relative w-auto flex items-center justify-center h-16 md:h-24 md:px-6 lg:px-6">
		<div class="md:hidden absolute left-1">
			<!-- Mobile menu button-->
			<button
				on:click="{() => (openedMobileDropdown = !openedMobileDropdown)}"
				type="button"
				class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				aria-controls="mobile-menu"
				aria-expanded="false">
				<span class="sr-only">Open main menu</span>

				<svg
					class="{openedMobileDropdown ? 'hidden' : 'block'}  h-6 w-6 "
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>

				<svg
					class="{!openedMobileDropdown ? 'hidden' : 'block'}  h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
		</div>

		<div class="md:absolute md:left-5">
			{#if !logoMobile && innerWidth < 768}
				<img
					class="hidden h-10 md:h-12 md:block"
					src="/logo_full/svg/flexit-white-transparent.svg"
					alt="Workflow" />
			{:else}
				<img
					in:fade="{{ duration: 400, start: 0.5 }}"
					class="h-10 md:h-12"
					src="/logo_full/svg/flexit-white-transparent.svg"
					alt="Workflow" />
			{/if}
		</div>

		<div class="hidden md:block">
			<div class="flex space-x-4">
				<a href="#" class="nav-btn" aria-current="page">Dashboard</a>

				<a href="#" class="nav-btn">Team</a>

				<a href="#" class="nav-btn">Projects</a>

				<a href="#" class="nav-btn">Calendar</a>
			</div>
		</div>

		<!-- 
				<div class="pr-4 sm:pr-4">
			
						<button
							on:click="{() =>
								openedProfileDropdown
									? (openedProfileDropdown = true)
									: (openedProfileDropdown = true)}"
							type="button"
							class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							id="user-menu-button"
							aria-expanded="true"
							aria-haspopup="true">
							<span class="sr-only">Open user menu</span>
							<img
								class="h-11 w-11 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt="" />
						</button>
				
					{#if openedProfileDropdown}
						<div
							use:clickOutside
							on:outclick="{() => (openedProfileDropdown = false)}"
							in:slide="{{ duration: 200 }}"
							out:slide="{{ duration: 100 }}"
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1">
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">Your Profile</a>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-1">Settings</a>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-2">Sign out</a>
						</div>
					{/if}
				</div> -->
	</div>

	{#if openedMobileDropdown}
		<!-- Mobile menu, show/hide based on menopenedMobileDropdownu state. -->
		<div
			in:slide="{{ duration: 400 }}"
			out:slide="{{ duration: 200 }}"
			class="md:hidden"
			id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a
					href="#"
					class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
					aria-current="page">Dashboard</a>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Team</a>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Projects</a>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Calendar</a>
			</div>
		</div>
	{/if}
</nav>

<Body bind:logoMobile />

<svelte:window bind:scrollY="{y}" bind:innerWidth on:scroll="{onScroll(y)}" />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Radio+Canada&display=swap');

	.nav-btn {
		@apply bg-transparent font-semibold text-lg text-white px-3 py-3 rounded-md;
	}

	.nav-btn:hover {
		animation-name: btn-hover;
		animation-duration: 100ms;
		background-color: #69bac9;
		transform: scale(1.09);
	}

	@keyframes btn-hover {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.09);
			background-color: #69bac9;
		}
	}
</style>
