<script>
	import { onMount } from "svelte";
  import { HighlightAuto } from "svelte-highlight";
  import dark from "svelte-highlight/styles/atom-one-dark";
  let theme = '';
  const code = `
  <section class="bg-surface-container rounded-2xl p-4 flex flex-col">
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Basic</p>
      <button class="md-button">Basic</button>
      <button disabled class="md-button">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Stroked</p>
      <button class="md-button-outlined">Basic</button>
      <button disabled class="md-button-outlined">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-outlined">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Tonal</p>
      <button class="md-button-tonal">Basic</button>
      <button disabled class="md-button-tonal">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-tonal">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Filled</p>
      <button class="md-button-filled">Basic</button>
      <button disabled class="md-button-filled">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-filled">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Raised</p>
      <button class="md-button-elevated">Basic</button>
      <button disabled class="md-button-elevated">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-elevated">Link</a>
    </div>
  </section>
  `;
  onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') || 'light';
	});
</script>
<svelte:head>
  {@html dark }
</svelte:head>
<div class="p-4 flex flex-col gap-4">
  <header class="flex flex-col gap-2">
    <p class="text-sm leading-6 font-semibold text-primary">Components</p>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface">Common Buttons</h1>
    <p class="leading-6 font-semibold text-on-surface-variant">Utilities for style elements as common buttons.</p>
  </header>

  <section class="bg-surface-container rounded-2xl p-4 flex flex-col">
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Basic</p>
      <button class="md-button">Basic</button>
      <button disabled class="md-button">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Stroked</p>
      <button class="md-button-outlined">Basic</button>
      <button disabled class="md-button-outlined">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-outlined">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Tonal</p>
      <button class="md-button-tonal">Basic</button>
      <button disabled class="md-button-tonal">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-tonal">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Filled</p>
      <button class="md-button-filled">Basic</button>
      <button disabled class="md-button-filled">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-filled">Link</a>
    </div>
    <hr class="text-primary"/>
    <div class="flex items-center gap-4 py-2">
      <p class="font-bold">Raised</p>
      <button class="md-button-elevated">Basic</button>
      <button disabled class="md-button-elevated">Disabled</button>
      <a href="https://www.google.com/" target="_blank" class="md-button-elevated">Link</a>
    </div>
  </section>
</div>
<HighlightAuto class="rounded-3xl p-4" {code} />