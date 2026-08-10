<script lang="ts">
  const props = $props();
  const ucsd_activities: string[] = [
    "Data Science Student Society",
    "Hackathons",
    "Programming Competitions",
    "Big Little Program",
    "Bouldering",
  ];
  const ucsd_coursework: string[] = [
    "Convex Optimization",
    "Probabilistic Modeling",
    "Image Processing",
    "Data Management",
    "Scalable Systems",
  ];
</script>

<div id={props.id}>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="institutions">
    <div id="lapc">
      <div class="inst-title">
        <div class="inst-name">
          Los Angeles Pierce College
        </div>
        <div class="degree-type">
          Dual Enrollment
        </div>
        <div class="inst-date">
          02/2024-06/2024
        </div>
      </div>
      <div class="inst-desc">
        Coursework: Linear Algebra, Multivariable Calculus
      </div>
    </div>
    <div id="ucsd">
      <div class="inst-title">
        <div class="inst-name">
          University of California, San Diego
        </div>
        <div class="degree-type">
          B.S. Data Science
        </div>
        <div class="inst-date">
          08/2024-Present (expected March 2028)
        </div>
      </div>
      <div class="inst-desc">
        <p>
          Activities: {ucsd_activities.join(", ")}
        </p>
        <p>
          Coursework: {ucsd_coursework.join(", ")}
        </p>
      </div>
    </div>
  </div>
</div>