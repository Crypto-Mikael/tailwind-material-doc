<script>
  function copyFunction() {
    const copyText = document.getElementById("myInput").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
  }

</script>

<div class="p-4 flex flex-col gap-8">
  <article class="flex flex-col gap-2">
    <p class="text-sm leading-6 font-semibold text-primary">Installation</p>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface">Get started with Tailwind Material</h1>
    <p class="text-sm leading-6 font-semibold text-on-surface-variant">Tailwind Material works with all frameworks only being imported in the <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</code></p>
  </article>
  <main class="relative flex flex-col gap-4">
    <div class="absolute left-[0.95rem] line h-full w-[2px] bg-surface-container-high"></div>
    <section>
      <div class="relative pl-8">
        <span class="absolute left-1 size-6 flex items-center justify-center bg-surface-container-high rounded-md p-2">1</span>
        <div class="pl-4 pb-4">
          <p class="font-extrabold">Install Tailwind CSS</p>
          <p class="text-on-surface-variant">Install tailwindcss via npm, and create your <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</code> file.</p>
        </div>
      </div>
      <pre data-language="bash" class="bg-surface-container-high rounded-3xl pt-4 pb-0 z-20">
      <code>npm install -D tailwindcss</code>
      <code>npx tailwindcss init</code>
      </pre>
    </section>
    <section>
      <div class="relative pl-8">
        <span class="absolute left-1 size-6 flex items-center justify-center bg-surface-container-high rounded-md p-2">1</span>
        <div class="pl-4 pb-4">
          <p class="font-extrabold">Install Tailwind CSS</p>
          <p class="text-on-surface-variant">Install tailwindcss via npm, and create your <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</code> file.</p>
        </div>
      </div>
      <pre data-language="bash" class="bg-surface-container-high rounded-3xl pt-4 pb-0 z-20">
      <code>npm install -D tailwindcss</code>
      <code>npx tailwindcss init</code>
      </pre>
    </section>
  </main>
</div>