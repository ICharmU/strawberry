<script lang="ts">
  const props = $props();
  // TODO: replace links/info with .json from $lib/assets/contact.json
  const links: Record<string, string> = {
    GitHub: "https://github.com/ICharmU",
    LinkedIn: "https://www.linkedin.com/in/sean-harmon-367425242/",
  }
  const email = "t2harmon [at] ucsd [dot] edu";
</script>

<style>
  .contact, .contact-desc {
    font-family: 'Fairfax';
    font-size: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .contact > p {
    margin-left: 3em;
    margin-right: 3em;
    font-size: 1.25em;
  }

  .contact a {
    color: rgb(0, 86, 247);
    font-weight: 600;
  }

</style>

<div id={props.id} class="mt-12 mb-18 relative w-full max-w-5xl mx-auto">
  <br><br>
  <div class="subtitle mb-8 bg-[#00000000]">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="bg-[#c97979c0]">
    <div class="contact-desc mt8 mb-12">
      <p>If you're interested in working on a project together, feel free to reach out!</p>
    </div>
    <div class="contact">
      {#each Object.entries(links) as [contact_method, hyperlink] (contact_method)}
        <p class="underline">
          <a href={hyperlink} target="_blank" rel="noopener noreferrer external">{contact_method}</a>
        </p>
      {/each}
    </div>
    <div class="contact">
      <p>{email}</p>
    </div>
  </div>
</div>