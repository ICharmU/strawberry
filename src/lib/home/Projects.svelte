<script>
  const props = $props();
</script>

<div id={props.id}>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="projects">
    <div id="project1">
      <div class="project-subtitle">
        project 1
      </div>
      <div class="project-short-desc">
        project 1 desc
      </div>
    </div>
    <div id="project2">
      <div class="project-subtitle">
        project 2
      </div>
      <div class="project-short-desc">
        project 2 desc
      </div>
    </div>
    <div id="project3">
      <div class="project-subtitle">
        project 3
      </div>
      <div class="project-short-desc">
        project 3 desc
      </div>
    </div>
  </div>
</div>