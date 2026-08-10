<script>
  import { resolve } from '$app/paths';
  const props = $props();
  // console.log(tabNames);
</script>

<style>
  div {
    display: flex;
  }
</style>
<div>
  {#each props.tabNames as name (name)}
    <h2>
      <a href={resolve(`/#${name}`)}>
        {name}
      </a>
    </h2>
  {/each}
</div>