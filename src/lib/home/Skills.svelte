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
    "matplotlib/seaborn",
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
    "Data Visualization",
    "EDA",
    "Bootstrap",
    "Feature Extraction",
    "Significance Testing",
    "Causal Inference",
  ];
  const soft: string[] = [
    "Customer Service",
    "Project Management",
    "Communication",
    "Quick Learner",
    "Detail Oriented",
    "Persistent",
  ];
</script>

<style>
  .skill-subtitle {
    text-align: center;
    font-weight: 600;
  }

  .skill-desc {
    text-align: center;
  }
</style>

<div id={props.id}>
  <div class="subtitle">
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
