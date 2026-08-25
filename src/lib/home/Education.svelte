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
    background-color: #c97979c0;
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
    color: #03629C;
  }

  #ucsd .inst-name {
    color: #FFCD00;
  }

  #lapc .inst-name {
    color: rgb(224, 21, 21);
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
    color: rgb(33, 81, 102);
  }

  .backname {
    line-height: 0;
    padding: 1px;
  }

  #ucsd .backname {
    background: #182B49;
  }

  #lapc .backname {
    background: rgb(100,100,100);
  }
</style>

<div id={props.id} class="flex flex-col relative w-full max-w-5xl mx-auto sec">
  <br><br>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="institutions">
    <div id="ucsd">
      <div class="inst-title">
        <div class="degree-type">
          <span class="backname">B.S. Data Science</span>
        </div>
        <div class="inst-name">
          <span class="backname">University of California, San Diego</span>
        </div>
        <div class="inst-date">
          08/2024-Present (expected June 2028)
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
          <span class="backname">Dual Enrollment</span>
        </div>
        <div class="inst-name">
          <span class="backname">Los Angeles Pierce College</span>
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