<script lang="ts">
  import { Card, Carousel } from "flowbite-svelte";
  import { resolve } from "$app/paths";
  const props = $props();

  const projects: Record<string, string>[] = [
    {title: "project 1", desc: "project 1 desc", tag: "A"},
    {title: "project 2", desc: "project 2 desc", tag: "B"},
    {title: "project 3", desc: "project 3 desc", tag: "C"},
    {title: "project 4", desc: "project 4 desc", tag: "D"},
    {title: "project 5", desc: "project 5 desc", tag: "E"},
    {title: "project 6", desc: "project 6 desc", tag: "F"},
  ]

  const slides: Record<string, string>[][] = [];
  for (let i = 0; i < projects.length; i+=2) {
    slides.push(projects.slice(i,i+2));
  }

  let currentSlide = $state(0);

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }


</script>

<style>
  /* .projects {
    display: flex;
    flex-direction: row;
    justify-content: center;
  } */
</style>

<div id={props.id} class="mt-18 mb-40 relative w-full max-w-5xl mx-auto px-12 ">
  <br><br>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="relative">
    <button
      onclick={prevSlide}
      class="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/90 text-white border border-slate-700 hover:bg-emerald-600 transition-colors shadow-lg"
      aria-label="Previous Slide"
    >
      ‹
    </button>
    <div class="overflow-hidden rounded-2xl w-full">
      <div
        class="flex transition-transform duration-500 ease-out"
        style="transform: translateX(-{currentSlide * 100}%);"
      >
        {#each slides as slidePair (slidePair[0])}
          <div class="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            {#each slidePair as project (project)}
              <div class="bg-slate-900/85 border border-slate-700 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl hover:scale-[1.01] transition-transform flex flex-col justify-between">
                <div>
                  <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
                    {project.tag}
                  </span>
                  <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
                  <p class="text-gray-300 text-sm">{project.desc}</p>
                </div>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>

    <button
      onclick={nextSlide}
      class="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/90 text-white border border-slate-700 hover:bg-emerald-600 transition-colors shadow-lg"
      aria-label="Next Slide"
    >
      ›
    </button>
    <div class="flex justify-center gap-2 mt-6">
      {#each slides as _, i (i)}
        <button
          onclick={() => (currentSlide = i)}
          class="h-2.5 rounded-full transition-all duration-300 {i === currentSlide ? 'w-8 bg-emerald-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'}"
          aria-label="Go to slide {i + 1}"
        ></button>
      {/each}
    </div>
  </div>
</div>