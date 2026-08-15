<script>
  import HomeNavbar from "$lib/navbar/HomeNavbar.svelte";
  import About from "$lib/home/About.svelte";
  import Contact from "$lib/home/Contact.svelte";
  import Education from "$lib/home/Education.svelte";
  import Projects from "$lib/home/Projects.svelte";
  import Skills from "$lib/home/Skills.svelte";
	import WorkExperience from "$lib/home/WorkExperience.svelte";

  const tabNames = [
    "About", 
    "Work Experience", 
    "Projects", 
    "Education", 
    "Skills", 
    "Contact"
  ];
</script>

<style>
  /* :global(.subtitle) {
    text-align: center;
    font-weight: 800;
  }

  :global(div) {
    border: 2px solid red;
  }

  section {
    padding-top: 40px;
    padding-bottom: 40px;
  } */
</style>

<div id="About"></div>
<HomeNavbar tabNames={tabNames}/>
<About id={tabNames[0]} name="Sean Harmon"/>
<WorkExperience id={tabNames[1].replace(" ", "")} name="Work Experience"/>
<Projects id={tabNames[2]} name={tabNames[2]}/>
<Education id={tabNames[3]} name={tabNames[3]}/>
<Skills id={tabNames[4]} name={tabNames[4]}/>
<Contact id={tabNames[5]} name={tabNames[5]}/>