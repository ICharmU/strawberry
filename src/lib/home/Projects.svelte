<script lang="ts">
  import { Card, Carousel } from "flowbite-svelte";
  import { resolve } from "$app/paths";
  const props = $props();

  const projects: Record<string, string>[] = [
    {
      title: "Urban Heat Island Effect", 
      desc: `
      As part of a team I verified the urban heat island effect by visually comparing the relationship between temperature and vegetation in
      metropolitan cities in different contents. I created custom univariate and bivariate plots in JavaScript to highlight similarities across regions, but also between
      variables in the same region. 
      `, 
      repo: "https://github.com/ICharmU/dsc_106_final_project", 
      webpage: "https://icharmu.github.io/dsc_106_final_project/", 
      tag: "Earth Engine, .tif, Scrollama, Python, JavaScript"
    },
    {
      title: "Shrub Mapping", 
      desc: `With a partner I developed a reproducible feature extraction pipeline to estimate where
      shrubs are located across California. We processed LIDAR, point cloud and meteorological data 
      to create labels which were used to train a U-Net CNN for further shrub classification. We 
      emphasized feature engineering, deriving features such as wavelets (various decomposition levels), 
      local co-occurrence matrices, 2D projection of ALS data, as well as general land features (e.g. hillshade, aspect).
      `, 
      repo: "https://github.com/ICharmU/shrub", 
      webpage: "https://github.com/ICharmU/shrub/blob/main/materials/flowchart.pdf", 
      tag: "Earth Engine, sklearn, Folium, Pandas, PyTorch, OpenCV"
    },
    {
      title: "Power Outage Analysis", 
      desc: `
      With the prevalence of digital technologies today power grids have great demands. To better understand
      when the demands have been exceed I researched power grids and conducted analyses on power outages
      across the US. I estimated missingness mechanisms and removed correlated features to fit a 
      linear model. 
      `, 
      repo: "https://github.com/ICharmU/power_outage_analysis", 
      webpage: "https://icharmu.github.io/power_outage_analysis/", 
      tag: "SciPy, sklearn, Pandas, Plotly, regex"
    },
    {
      title: "Receipt Parser", 
      desc: `
      To better track my food spending habits for the upcoming year I scraped my school card vendor's 
      transaction portal. This initially seemed to be an easy task as I could repeatedly scrape each list of transactions
      and parse the extracted HTML to reproduce the original table. However, the vendor portal only allowed 25 interactions 
      (assumed to be database queries) per login, which required me to scrape from multiple tabs rather than one. 
      `, 
      repo: "https://github.com/ICharmU/Receipt-Parser", 
      webpage: "https://app.powerbi.com/view?r=eyJrIjoiMzNlZTVmNmUtNDY1Ni00YWI3LWJkNDUtZjdhZmFmNGQ3N2I3IiwidCI6IjhhMTk4ODczLTRmZWMtNGU3Ni04MTgyLWNhNDc5ZWRiYmQ2MCIsImMiOjZ9", 
      tag: "Selenium, BeautifulSoup, regex, Pandas"
    },
    // {
    //   title: "project 5", 
    //   desc: "project 5 desc", 
    //   repo: "", 
    //   webpage: "", 
    //   tag: "E"
    // },
    // {
    //   title: "project 6", 
    //   desc: "project 6 desc", 
    //   repo: "", 
    //   webpage: "", 
    //   tag: "F"
    // },
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

<div id={props.id} class="mt-18 mb-40 relative w-full max-w-5xl mx-auto px-12">
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
                  <h3 class="text-2xl font-bold mb-2 text-blue-400">
                    <a href={project.repo} rel=external target="_blank">{project.repo != "" ? "Repo" : ""}</a>
                    <a href={project.webpage} rel=external target="_blank">{project.webpage != "" ? "Webpage" : ""}</a>
                  </h3>
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