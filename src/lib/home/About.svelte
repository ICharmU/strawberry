<script>
  const props = $props();
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    border: 2px solid red;
  }

  .subtitle, .desc {
    text-align: center;
  }
</style>

<div id={props.id}>
  <div class="subtitle">
    <h1>
      {props.name}
    </h1>
  </div>
  <div class="desc">
    <p>
      Agents, Natural Language and Automation are my favorite topics. I enjoy diving into the deep end with new tech stacks.
    </p>
  </div>
</div>
