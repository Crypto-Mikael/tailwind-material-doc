<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { onMount } from 'svelte';
	let theme = $state('light');
	onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') || 'light';
	});
	const changeTheme = () => {
		document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
		theme = document.documentElement.getAttribute('data-theme') || 'light';
	}
</script>

<nav class="fixed left-0 w-[88px] h-full bg-surface-container py-5 flex flex-col items-center gap-6">
	<button disabled class="md-icon-button-filled size-14 cursor-pointer focus:shadow-none shadow-none rounded-2xl" title="Not implemented">search</button>
	<ul class="flex flex-col items-center gap-6">
		<li>
			<button class="md-icon-button w-16 h-8 mb-1"><a href="/">Home</a></button>
			<p class="text-on-surface  text-xs font-medium text-center">Home</p>
		</li>
		<li>
			<button class="md-icon-button w-16 h-8 mb-1"><a href="/">Apps</a></button>
			<p class="text-on-surface text-xs font-medium text-center">Get started</p>
		</li>
		<li>
			<button class="md-icon-button w-16 h-8 mb-1"><a href="/">Book</a></button>
			<p class="text-on-surface text-xs font-medium text-center">Foundations</p>
		</li>
	</ul>
	<button onclick={changeTheme} class="md-icon-button-outlined text-3xl size-12 absolute bottom-4">
		{ theme === 'dark' ? 'light_mode' : 'dark_mode' }
		</button>
</nav>
{@render children()}
