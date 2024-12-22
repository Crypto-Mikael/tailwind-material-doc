<div class="p-4 flex flex-col gap-4">
  <header class="flex flex-col gap-2">
  <p class="text-sm leading-6 font-semibold text-primary">Foundations</p>
  <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface">Foundations in Tailwind Material</h1>
  <p class="leading-6 font-semibold text-on-surface-variant">A guide to use Tailwind Material in your project.</p>
  </header>
  <section class="bg-surface-container p-4 rounded-xl flex flex-col">
    <h1>We highly recommend you to watch the videos explaining the material color generation and roles.</h1>
    <a class="underline text-primary" href="https://www.youtube.com/watch?v=vv3lOGZrcdk&list=PLsoLz-E4Os4WWkrvRuQ7BJuVF-WfOyfWT">Material Design 3 Videos</a>
  </section>
  <main class="flex flex-row">
    <div class="flex flex-col gap-4">
      <article id="material-schemes" class="flex flex-col gap-2">
        <h1 class="whitespace-pre-wrap font-bold text-xl">Material Scheme</h1>
        <p class="leading-6 font-semibold text-on-surface-variant">
          Material color schemes start from a source color, a single color from which all other scheme colors are derived.

          The source color is provided in the <strong class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">tailwind.config.ts</strong>
          as the primary-color and injected in the html body as 
          <code class="bg-surface-variant p-1 text-on-surface-variant rounded-lg">--md-sys-color-[keyColor]</code>. Every pallet color has a <strong class="font-extrabold">on-color</strong> that is used for text and icons.
        </p>
      </article>
      <section class="bg-surface-container p-4 rounded-xl">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <p class="text-sm leading-6 font-bold">**Hover over element to check tailwind class**</p>
            <h1 class="font-semibold text-on-surface">Primary Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-primary" class="bg-primary !size-12 rounded-full mr-4"></div>
              <div title="bg-on-primary" class="bg-on-primary !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-primary-container" class="bg-primary-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-on-primary-container" class="bg-on-primary-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-primary-0" class="bg-primary-0">0</div>
              <div title="bg-primary-10" class="bg-primary-10">10</div>
              <div title="bg-primary-20" class="bg-primary-20">20</div>
              <div title="bg-primary-30" class="bg-primary-30">30</div>
              <div title="bg-primary-40 (light mode)" class="bg-primary-40 border-2 border-surface-container">40</div>
              <div title="bg-primary-50" class="bg-primary-50">50</div>
              <div title="bg-primary-60" class="bg-primary-60">60</div>
              <div title="bg-primary-70" class="bg-primary-70">70</div>
              <div title="bg-primary-80 (dark mode)" class="bg-primary-80 border-2 border-surface-container">80</div>
              <div title="bg-primary-90" class="bg-primary-90">90</div>
              <div title="bg-primary-95" class="bg-primary-95">95</div>
              <div title="bg-primary-99" class="bg-primary-99">99</div>
              <div title="bg-primary-100" class="bg-primary-100">100</div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-on-surface">Secondary Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-secondary" class="bg-secondary !size-12 rounded-full mr-4"></div>
              <div title="bg-on-secondary" class="bg-on-secondary !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-secondary-container" class="bg-secondary-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-on-secondary-container" class="bg-on-secondary-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-secondary-0" class="bg-secondary-0">0</div>
              <div title="bg-secondary-10" class="bg-secondary-10">10</div>
              <div title="bg-secondary-20" class="bg-secondary-20">20</div>
              <div title="bg-secondary-30" class="bg-secondary-30">30</div>
              <div title="bg-secondary-40 (light mode)" class="bg-secondary-40 border-2 border-surface-container">40</div>
              <div title="bg-secondary-50" class="bg-secondary-50">50</div>
              <div title="bg-secondary-60" class="bg-secondary-60">60</div>
              <div title="bg-secondary-70" class="bg-secondary-70">70</div>
              <div title="bg-secondary-80 (dark mode)" class="bg-secondary-80 border-2 border-surface-container">80</div>
              <div title="bg-secondary-90" class="bg-secondary-90">90</div>
              <div title="bg-secondary-95" class="bg-secondary-95">95</div>
              <div title="bg-secondary-99" class="bg-secondary-99">99</div>
              <div title="bg-secondary-100" class="bg-secondary-100">100</div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-on-surface">Tertiary Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-tertiary" class="bg-tertiary !size-12 rounded-full mr-4"></div>
              <div title="bg-on-tertiary" class="bg-on-tertiary !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-tertiary-container" class="bg-tertiary-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-on-tertiary-container" class="bg-on-tertiary-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-tertiary-0" class="bg-tertiary-0">0</div>
              <div title="bg-tertiary-10" class="bg-tertiary-10">10</div>
              <div title="bg-tertiary-20" class="bg-tertiary-20">20</div>
              <div title="bg-tertiary-30" class="bg-tertiary-30">30</div>
              <div title="bg-tertiary-40 (light mode)" class="bg-tertiary-40 border-2 border-surface-container">40</div>
              <div title="bg-tertiary-50" class="bg-tertiary-50">50</div>
              <div title="bg-tertiary-60" class="bg-tertiary-60">60</div>
              <div title="bg-tertiary-70" class="bg-tertiary-70">70</div>
              <div title="bg-tertiary-80 (dark mode)" class="bg-tertiary-80 border-2 border-surface-container">80</div>
              <div title="bg-tertiary-90" class="bg-tertiary-90">90</div>
              <div title="bg-tertiary-95" class="bg-tertiary-95">95</div>
              <div title="bg-tertiary-99" class="bg-tertiary-99">99</div>
              <div title="bg-tertiary-100" class="bg-tertiary-100">100</div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-on-surface">Error Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-error" class="bg-error !size-12 rounded-full mr-4"></div>
              <div title="bg-on-error" class="bg-on-error !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-error-container" class="bg-error-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-on-error-container" class="bg-on-error-container !size-12 rounded-full mr-4 border border-outline"></div>
              <div title="bg-error-0" class="bg-error-0">0</div>
              <div title="bg-error-10" class="bg-error-10">10</div>
              <div title="bg-error-20" class="bg-error-20">20</div>
              <div title="bg-error-30" class="bg-error-30">30</div>
              <div title="bg-error-40 (light mode)" class="bg-error-40 border-2 border-surface-container">40</div>
              <div title="bg-error-50" class="bg-error-50">50</div>
              <div title="bg-error-60" class="bg-error-60">60</div>
              <div title="bg-error-70" class="bg-error-70">70</div>
              <div title="bg-error-80 (dark mode)" class="bg-error-80 border-2 border-surface-container">80</div>
              <div title="bg-error-90" class="bg-error-90">90</div>
              <div title="bg-error-95" class="bg-error-95">95</div>
              <div title="bg-error-99" class="bg-error-99">99</div>
              <div title="bg-error-100" class="bg-error-100">100</div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-on-surface">Surface Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-surface" class="bg-surface border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-on-surface" class="bg-on-surface border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-surface-variant" class="bg-surface-variant border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-on-surface-variant" class="bg-on-surface-variant border border-outline !size-12 rounded-full mr-4"></div>
            </div>
          </div>      
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-on-surface">Surface Container Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-surface-container-lowest" class="bg-surface-container-lowest border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-surface-container-low" class="bg-surface-container-low border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-surface-container" class="bg-surface-container border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-surface-container-high" class="bg-surface-container-high border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-surface-container-highest" class="bg-surface-container-highest border border-outline !size-12 rounded-full mr-4"></div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-on-surface">Outline Key Color</h1>
            <div class="inline-flex cursor-pointer [&>*]:h-12 [&>*]:w-10 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-center">
              <div title="bg-outline" class="bg-outline border border-outline !size-12 rounded-full mr-4"></div>
              <div title="bg-outline-variant" class="bg-outline-variant border border-outline !size-12 rounded-full mr-4"></div>
            </div>
          </div>     
        </div>
      </section>
      <article id="experimental" class="flex flex-col gap-2">
        <h1 class="whitespace-pre-wrap font-bold text-xl">Experimental</h1>
        <p class="leading-6 font-semibold text-on-surface-variant">
          As experimental this library has components with only css you can access this components only digit 
          <code>`md-[component]`</code> in future updates we pretend to document the components.
        </p>
        <div class="flex gap-8">
          <button class="md-button-filled w-fit">EXAMPLE</button>
          <button class="md-button w-fit">EXAMPLE</button>
          <button class="md-button-outlined w-fit">EXAMPLE</button>
          <button class="md-button-tonal w-fit">EXAMPLE</button>
          <button class="md-icon-button-filled w-fit">close</button>
        </div>
      </article>
    </div>
    <nav class="sticky top-0 right-0 w-2/12 flex flex-col items-center h-dvh p-8 text-on-surface">
      <div>
        <p class="text-xs font-semibold">On this page</p>
        <p class="text-2xl font-bold pt-1">Foundations</p>
        <div class="flex flex-col gap-2 my-4">
          <a class="text-sm font-normal" href="#material-schemes">Material scheme</a>
          <a class="text-sm font-normal" href="#experimental">Experimental</a>
        </div>
      </div>
    </nav>
  </main>
</div>