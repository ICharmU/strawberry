<script lang="ts">
  const props = $props();

  import { onMount } from 'svelte';
  import Particles, { initParticlesEngine } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  import { Heading, P, Button } from 'flowbite-svelte';

  let initialized = $state(false);

  onMount(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      initialized = true;
    });
  });

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab' // connect nearby mesh
        }
      },
      modes: {
        grab: {
          distance: 220,
          links: { opacity: 0.8 }
        }
      }
    },
    particles: {
      color: { 
        value: '#FFFFFF'
      },
      links: {
        color: '#FFFFFF',
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 9,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none" as const,
        outModes: { default: 'bounce' as const }
      },
      number: {
        value: 30,
        density: {
          enable: true,
          width: 800,
          height: 800
        }
      },
      stroke: { width: 1, color: "#000000" },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 3} }
    },
    detectRetina: true
  };
</script>


<style>
  @keyframes bgShift {
    0%, 100% { background-color: #052e20; } /* dark green */
    25%      { background-color: #2e2e05; } /* dark yellow */
    50%      { background-color: #2e051a; } /* dark pink */
    75%      { background-color: #050c2e; } /* dark blue */
  }

  .bg-shift-active {
    background-color: #0400ff; /* Fallback base color for blank renders */
    animation: bgShift 8s ease-in-out infinite;
  }

  .desc {
    text-align: center;
  }
</style>

<div class="bg-shift-active relative w-full min-h-screen overflow-hidden">
  {#if initialized}
    <Particles
      id="tsparticles"
      class="absolute inset-0 z-0 overflow-hidden"
      options={particlesOptions}
    />
  {/if}
</div>

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
