<script lang="ts">
  import { Navbar, NavLi, NavUl } from "flowbite-svelte";
  import { resolve } from '$app/paths';
  const props = $props();
  // const name: string = "test";
</script>

<style>
</style>

<Navbar fluid={true} class="fixed inset-s-0 top-0 z-150 w-full bg-fuchsia-200 text-blue-500 font-bold text-3xl px-0 py-2.5 sm:px-4 dark:bg-fuchsia-700">
  <NavUl classes={{ul: "flex flex-row gap-18 justify-center"}}>
    {#each props.tabNames as name (name)}
      <NavLi href={resolve(`/#${name.replace(" ", "")}`)}>{name}</NavLi>
    {/each}
  </NavUl>
</Navbar>
