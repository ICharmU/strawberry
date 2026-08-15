<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { resolve } from '$app/paths';
  const props = $props();
  // const name: string = "test";
</script>

<style>
</style>

<Navbar fluid={true} class="sticky inset-s-0 top-0 z-50 w-full bg-white px-0 py-2.5 sm:px-4 dark:bg-gray-80 ">
  <NavUl classes={{ul: "flex gap-12 justify-center"}}>
    {#each props.tabNames as name (name)}
      <NavLi href={resolve(`/#${name.replace(" ", "")}`)}>{name}</NavLi>
    {/each}
  </NavUl>
</Navbar>
