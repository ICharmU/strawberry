<script>
  const nProjects = 3; // TODO pass props
  let currProjectIdx = 1; // TODO pass props

  // TODO replace url with name array passed as props
  let prevProjectIdx = ((currProjectIdx - 1) % nProjects + nProjects) % nProjects + 1;
  let nextProjectIdx = ((currProjectIdx + 1) % nProjects + nProjects) % nProjects + 1;
  currProjectIdx++;

  const projectDir = "/projects";

  let prevProjectName = `project${prevProjectIdx}`;
  let currProjectName = `project${currProjectIdx}`;
  let nextProjectName = `project${nextProjectIdx}`;
</script>

<div>
  <h2>
    <a href={`${projectDir}/${prevProjectName}`} rel="external">
      {prevProjectName}
    </a>
  </h2>
  <h2>
    {currProjectName}
  </h2>
  <h2>
    <a href={`${projectDir}/${nextProjectName}`} rel="external">
      {nextProjectName}
    </a>
  </h2>
</div>