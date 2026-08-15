<script lang="ts">
  const props = $props();
  const sdsc_tools: string[] = [
    "deepagents",
    "FastMCP",
    "LangChain",
    "LangFuse",
    "xarray",
    "Docker",
    "Pixi",
  ];

  const its_tools: string[] = [
    "ServiceNow",
    "Confluence",
    "Duo Admin",
    "Cisco ISE/DNAC",
    "NetMRI",
    "Splunk",
  ];
</script>

<style>
  .jobs {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  /* .job-title, .company, .tools, .description {
    text-align: center;
  } */

  .subtitle {
    font-size: clamp(2rem, 4vw, 6rem);
    text-align: center;
    font-weight: 800;
  }

  .sec {
    width: clamp(200px, 50%, 1080px);
    margin: 0 auto;
  }

  .job-title {
    font-family: 'Fairfax';
    font-size: 3em;
    font-weight: 600;
    text-decoration: underline;
    margin-bottom: 0;
  }

  .company {
    margin-top: -0.5em;
    font-family: 'Fairfax';
    font-size: 2em;
    color: rgb(59, 165, 86);
  }

  .company-date {
    margin-top: -0.5em;
    font-size: 0.75em;
  }

  .tools {
    font-family: 'Fairfax';
    font-size: 1.5em;
    color: rgb(136, 19, 19);
  }

  .description {
    font: 400 1.5em 'Fairfax';
    width: 90%;

  }

</style>

<div id={props.id} class="relative z-50 sec mx:40 flex flex-col mb-20">
  <div class="subtitle justify-items-center">
    <h2 class="fairfax">
      {props.name}
    </h2>
  </div>
  <div class="jobs">
    <div class="job-title">
      <h3>
        Software Engineer Intern
      </h3>
    </div>
    <div class="company">
      <h4>San Diego Supercomputer Center</h4>
      <h4 class="company-date">04/2026-Present</h4>
    </div>
    <div class="tools">
      <p>
        {sdsc_tools.join(", ")}
      </p>
    </div>
    <div class="description">
      <p>
        As part of the WxMap team I support agent, MCP and backend development. 
        I work on aggregating weather forecast data with an agent harness to automatically pull data and develop analyses which guide wildfire prevention measures.
        I have lead system design and containerization efforts, as well as the transition from Conda to Pixi for cross-platform dependency management.
      </p>
    </div>
  </div>
  <div class="jobs">
    <div class="job-title">
      <h3>
        Service Desk Technician
      </h3>
    </div>
    <div class="company">
      <h4>UC San Diego - Information Technology Services</h4>
      <h4 class="company-date">09/2024-06/2025</h4>
    </div>
    <div class="tools">
      <p>
        {its_tools.join(", ")}
      </p>
    </div>
    <div class="description">
      <p>
        I assisted 1200+ students and staff with technology problems via tickets, phone calls, Zoom rooms and walk up appointments.
        Using Cisco ISE and DNAC I performed network troubleshooting for classrooms and on-campus housing.
        I processed DMCA violations using Splunk logs and investigated fraudulent MFA reports with security teams.
        I received additional leadership training and reviewed job applications for new hires.
        As floor coordinator I provided staffing coverage and technical assistance to other student technicians.
      </p>
    </div>
  </div>
</div>
