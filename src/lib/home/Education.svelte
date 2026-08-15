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

<style>
  .institutions {
    display: flex;
    flex-direction: column;
  }

  #ucsd, #lapc {
    margin-top: 3em;
    margin-bottom: 1em;
  }

  .inst-title {
    margin-top: -0.5em;
    font-family: 'Fairfax';
    font-size: 2em;
  }

  .degree-type {
    font-weight: 600;
  }

  #ucsd .degree-type {
    color: rgb(10, 96, 194);
  }

  #ucsd .inst-name {
    color: rgb(197, 185, 8);
  }

  #lapc .inst-name {
    color: rgb(230, 18, 18)
  }

  .inst-name {
    margin-top: -0.5em;
  }

  .inst-date {
    margin-top: -0.5em;
    font-size: 0.75em;
  }

  .inst-desc {
    font: 400 1.5em 'Fairfax';
    width: 90%;
  }
  
  .inst-desc > h4 {
    color: rgb(6, 51, 71);
  }

</style>

<div id={props.id} class="flex flex-col relative w-full max-w-5xl mx-auto">
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="institutions">
    <div id="ucsd">
      <div class="inst-title">
        <div class="degree-type">
          B.S. Data Science
        </div>
        <div class="inst-name">
          University of California, San Diego
        </div>
        <div class="inst-date">
          08/2024-Present (expected March 2028)
        </div>
      </div>
      <div class="inst-desc mt-4">
        <h4 class="underline">Activities</h4>
        <p>
          {ucsd_activities.join(", ")}
        </p>
        <h4 class="underline mt-7">Coursework</h4>
        <p>
          {ucsd_coursework.join(", ")}
        </p>
      </div>
    </div>
    <div id="lapc">
      <div class="inst-title">
        <div class="degree-type">
          Dual Enrollment
        </div>
        <div class="inst-name">
          Los Angeles Pierce College
        </div>
        <div class="inst-date">
          02/2024-06/2024
        </div>
      </div>
      <div class="inst-desc">
        <h4 class="underline">Coursework</h4>
        <p>Linear Algebra, Multivariable Calculus</p>
      </div>
    </div>
  </div>
</div>