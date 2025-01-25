<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();
	import { onMount } from 'svelte';
	let theme = $state('light');

	const checkIfUrlIsEqual = (url: string) => {
		if (url === $page.route.id) {
			return 'md-icon-button w-14 h-8 mb-1 !bg-secondary-container !text-on-secondary-container';
		}
		return 'md-icon-button w-14 h-8 mb-1'
	}

	const checkIfUrlIsEqualAndReturnButton = (url: string) => {
		if (url === $page.route.id) {
			return 'md-button-filled whitespace-nowrap h-12 w-56 justify-start';
		}
		return 'md-button whitespace-nowrap h-12 text-on-surface w-56 justify-start'
	}


	onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') || 'light';
	});
	const changeTheme = () => {
		document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
		theme = document.documentElement.getAttribute('data-theme') || 'light';
	}
</script>

<nav class="fixed left-0 w-[88px] h-full bg-surface-container py-5 flex flex-col items-center gap-6 z-50">
	<button disabled class="md-icon-button-filled size-14 cursor-pointer focus:shadow-none shadow-none rounded-2xl" title="Not implemented">search</button>
	<ul class="flex flex-col items-center gap-6">
		<li>
			<a class="flex flex-col items-center justify-center" href="/">
				<button class={checkIfUrlIsEqual('/')}>Home</button>
				<p class="text-on-surface text-xs font-medium text-center">Home</p>
			</a>
		</li>
		<li>
			<a class="flex flex-col items-center justify-center" href="/get-started">
				<button class={checkIfUrlIsEqual('/get-started')}>Apps</button>
				<p class="text-on-surface text-xs font-medium text-center">Get started</p>
			</a>
		</li>
		<li>
			<a class="flex flex-col items-center justify-center" href="/foundations">
				<button class={checkIfUrlIsEqual('/foundations')}>Book</button>
				<p class="text-on-surface text-xs font-medium text-center">Foundations</p>
			</a>
		</li>
		<li class="flex flex-col items-center justify-center">
			<button popovertarget="md-drawer" class={checkIfUrlIsEqual('/components') + ' icon-filled'}>add_circle</button>
			<p class="text-on-surface text-xs font-medium text-center">Components</p>
		</li>
	</ul>
	<button onclick={changeTheme} class="md-icon-button-outlined text-3xl size-12 absolute bottom-4">
		{ theme === 'dark' ? 'light_mode' : 'dark_mode' }
	</button>
</nav>
<aside id="md-drawer" data-trigger="hover" popover="auto" class="md-drawer">
	<a href="/components">
		<button class={checkIfUrlIsEqualAndReturnButton('/components')}>Components overview</button>
	</a>
	<details class="md-summary">
		<summary class="relative"><p>Buttons</p><p class="font-material text-2xl absolute right-3 icon-filled">arrow_drop_down</p></summary>
		<div class="flex flex-col gap-1">
			<a href="/components/common-buttons">
				<button class={checkIfUrlIsEqualAndReturnButton('/components/common-buttons')}>Common buttons</button>
			</a>
			<a href="/components/icon-buttons">
				<button class={checkIfUrlIsEqualAndReturnButton('/components/icon-buttons')}>Icon buttons</button>
			</a>
		</div>
	</details>
</aside>
{@render children()}
