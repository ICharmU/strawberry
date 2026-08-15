<script>
  import { resolve } from "$app/paths";
  const props = $props();
</script>

<style>
  .projects {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>

<div id={props.id} class="mt-18">
  <br>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="projects">
    <div class="project" id="project1">
      <div class="project-subtitle">
        <a href={resolve("/projects/project1")}>project 1</a>
      </div>
      <div class="project-short-desc">
        project 1 desc
      </div>
    </div>
    <div class="project" id="project2">
      <div class="project-subtitle">
        <a href={resolve("/projects/project2")}>project 2</a>
      </div>
      <div class="project-short-desc">
        project 2 desc
      </div>
    </div>
    <div class="project" id="project3">
      <div class="project-subtitle">
        <a href={resolve("/projects/project3")}>project 3</a>
      </div>
      <div class="project-short-desc">
        project 3 desc
      </div>
    </div>
  </div>
</div>