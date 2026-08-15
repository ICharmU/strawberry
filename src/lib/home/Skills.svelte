<script lang="ts">
  const props = $props();
  // TODO: replace contents with .json in $lib/assets
  const languages: string[] = [
    "Python",
    "SQL",
    "Svelte",
    "JavaScript",
    "bash",
    "regex",
    "git",
    "Docker",
  ];
  const dataProcessing: string[] = [
    "PySpark",
    "Dask",
    "Selenium",
    "BeautifulSoup",
    "Pandas",
    "numpy",
    "mpl",
    "Plotly",
  ];
  const aiml: string[] = [
    "deepagents",
    "Langchain",
    "OpenClaw",
    "scikit-learn",
    "statsmodels",
    "PyTorch",
  ];
  const analytics: string[] = [
    "Power BI", 
    "Data Visualization",
    "EDA",
    "Bootstrap",
    "Feature Extraction",
  ];
  const soft: string[] = [
    "Customer Service",
    "Project Management",
    "Communication",
    "Persistent",
  ];
</script>

<style>
  .skills h3 {
    font-family: 'Fairfax';
    font-size: 2.5em;
  }

  p {
    font-family: 'Fairfax';
    font-size: 1.8em;
  }

  .skills > div:not(:first-child) {
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .skill-subtitle {
    font-weight: 600;
  }


</style>

<div id={props.id} class="mt-32 flex flex-col relative w-full max-w-5xl mx-auto">
  <br><br>
  <div class="subtitle mb-12">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="skills">
    <div id="languages">
      <h3 class="skill-subtitle">Languages</h3>
      <p class="skill-desc">{languages.join(", ")}</p>
    </div>
    <div id="data-processing">
      <h3 class="skill-subtitle">Data Processing</h3>
      <p class="skill-desc">{dataProcessing.join(", ")}</p>
    </div>
    <div id="ai-ml">
      <h3 class="skill-subtitle">AI/ML</h3>
      <p class="skill-desc">{aiml.join(", ")}</p>
    </div>
    <div id="analytics">
      <h3 class="skill-subtitle">Analytics</h3>
      <p class="skill-desc">{analytics.join(", ")}</p>
    </div>
    <div id="soft">
      <h3 class="skill-subtitle">Soft Skills</h3>
      <p class="skill-desc">{soft.join(", ")}</p>
    </div>
  </div>
</div>
