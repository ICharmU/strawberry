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
  .contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>

<div id={props.id}>
  <div class="subtitle">
    <h2>
      {props.name}
    </h2>
  </div>
  <div class="contact">
    {#each Object.entries(links) as [contact_method, hyperlink] (contact_method)}
      <div>
        <p>
          <a href={hyperlink} target="_blank" rel="noopener noreferrer external">{contact_method}</a>
        </p>
      </div>
    {/each}
    <div>
      <p>{email}</p>
    </div>
  </div>
</div>