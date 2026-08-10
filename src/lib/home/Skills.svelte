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

<div id={props.id}>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="skills">
    <div id="languages">
      Languages: {languages.join(", ")}
    </div>
    <div id="data-processing">
      Data Processing: {dataProcessing.join(", ")}
    </div>
    <div id="ai-ml">
      AI/ML: {aiml.join(", ")}
    </div>
    <div id="analytics">
      Analytics: {analytics.join(", ")}
    </div>
    <div id="soft">
      Soft Skills: {soft.join(", ")}
    </div>
  </div>
</div>
