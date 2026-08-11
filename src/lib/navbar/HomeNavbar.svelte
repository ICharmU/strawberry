<script>
  import { resolve } from '$app/paths';
  const props = $props();
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%; 
  }

  .head-navbar {
    /* display: flex; */
    outline: 2px solid red;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;

  }
</style>

<div id={props.id}>
  {#each props.tabNames as name (name)}
    <div class="head-navbar">
      <h2>
        <a href={resolve(`/#${name.replace(" ", "")}`)}>
          {name}
        </a>
      </h2>
    </div>
  {/each}
</div>

