<div class="p-4 flex flex-col gap-8">
  <header class="flex flex-col gap-2">
    <p class="text-sm leading-6 font-semibold text-primary">Installation</p>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface">Get started with Tailwind Material</h1>
    <p class="leading-6 font-semibold text-on-surface-variant">Tailwind Material works with all frameworks only being imported in the <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</code></p>
  </header>
  <main class="relative flex flex-col gap-8">
    <div class="absolute left-[0.95rem] line h-full w-[2px] bg-surface-container"></div>
    <section>
      <div class="relative pl-8">
        <span class="absolute left-1 size-6 flex items-center justify-center bg-surface-container rounded-md p-2">1</span>
        <div class="pl-4 pb-4">
          <p class="font-extrabold">Install Tailwind CSS</p>
          <p class="text-on-surface-variant">Install tailwindcss via npm, and create your <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</code> file.</p>
        </div>
      </div>
      <pre lang="bash" class="bg-surface-container rounded-3xl pb-0 z-20">

      <code>npm install -D tailwindcss</code>
      <code>npx tailwindcss init</code>
      </pre>
    </section>
    <section>
      <div class="relative pl-8">
        <span class="absolute left-1 size-6 flex items-center justify-center bg-surface-container rounded-md p-2">2</span>
        <div class="pl-4 pb-4">
          <p class="font-extrabold">Import the library</p>
          <p class="text-on-surface-variant">Import the library in <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</code> file in the plugins array and pass the color pallet.</p>
        </div>
      </div>
      <pre lang="ts" class="bg-surface-container rounded-3xl pb-0 z-20">{`
      import material from 'tailwind-material';

      module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {},
        },
        plugins: [material({ primary: '#FF5722' })],
      }
  `}</pre>
    </section>
    <section>
      <div class="relative pl-8">
        <span class="absolute left-1 size-6 flex items-center justify-center bg-surface-container rounded-md p-2">3</span>
        <div class="pl-4 pb-4">
          <p class="font-extrabold">Set the data-theme in the html body</p>
          <p class="text-on-surface-variant">Set the data-theme attribute in <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">index.html</code> file with code or by hand.</p>
        </div>
      </div>
      <div class="flex gap-4 flex-col flex-auto">
        <pre lang="html" class="bg-surface-container rounded-3xl pb-0 z-20 grow justify-center pr-8">
      {`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <link rel="icon" href="./favicon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" /> <!-- Optional for google icons -->
          </head>
          <body></body>
          <script>
            // Check if the user prefers dark mode spaghetti code tho...
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.setAttribute('data-theme', 'dark');
            } else {
              document.documentElement.setAttribute('data-theme', 'light');
            }	
          </script>
        </html>`}
          </pre>
        <p class="self-center">Or</p>
        <pre lang="html" class="bg-surface-container rounded-3xl pb-0 z-20 grow justify-center">
      {`<!doctype html>
        <html lang="en" data-theme="light"> <!-- This is the important one  -->
          <head>
            <meta charset="utf-8" />
            <link rel="icon" href="./favicon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" /> <!-- Optional for google icons -->
          </head>
          <body></body>
        </html>`}
        </pre>
      </div>
    </section>
  </main>
</div>