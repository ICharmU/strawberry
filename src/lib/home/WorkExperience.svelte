<script lang="ts">
  const props = $props();
  const sdsc_tools: string[] = [
    "deepagents",
    "FastMCP",
    "LangChain",
    "LangFuse",
    "xarray",
    "Docker",
  ];

  const its_tools: string[] = [
    "ServiceNow",
    "Confluence",
    "Duo Admin",
    "Cisco ISE",
    "Cisco DNAC",
    "NetMRI",
    "Splunk",
  ];
</script>


<div id={props.id}>
<!-- Subtitle -->
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
<!-- Values -->
  <div class="jobs">
    <h3 class="job-title">
      Software Engineer Intern
    </h3>
    <h4 class="company">San Diego Supercomputer Center</h4>
    <p class="tools">
    <!-- Join from script instead of enumerating -->
      Tools: {sdsc_tools.join(", ")}
    </p>
    <p class="description">
      As part of the WxMap team I support agent, MCP and backend development. 
      I work on aggregating weather forecast data with an agent harness to automatically pull data and develop analyses which guide wildfire prevention measures.
      I supported the containerization of agent, MCP and UI features. 
    </p>
  </div>
  <div class="jobs">
    <h3 class="job-title">
      Service Desk Technician
    </h3>
    <h4 class="company">UC San Diego - Information Technology Services</h4>
    <p class="tools">
    <!-- Join from script instead of enumerating -->
      Tools: {its_tools.join(", ")}
    </p>
    <p class="description">
      I assisted 1200+ students and staff with technology problems via ticketing systems, phone calls, Zoom rooms and walk up appointments. 
      Using Cisco ISE and DNAC I performed network troubleshooting for classrooms and on-campus housing.
      I processed DMCA violations using Splunk logs and investigated fraudulent MFA reports with security teams.
      I received additional leadership training and reviewed job applications for new hires. 
      As floor coordinator I provided staffing coverage and technical assistance to other student technicians.
    </p>
  </div>
</div>
