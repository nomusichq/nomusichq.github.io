<script>
  import { fade, fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";

  export let segment;

  let isNav = false;

  function toggle() {
    isNav = !isNav;
  }

  // $: isNav &&
  //   setTimeout(() => {
  //     isNav = false;
  //   }, 7000);
</script>

<style>
  main {
    /* position: relative; */
    padding: 2em;
    margin: 60px auto 0;
    box-sizing: border-box;
  }
  div {
    position: absolute;
    /* height: 20px; */
    /* width: 20px; */
    top: 10px;
    right: 10px;
    font-size: 2rem;
    color: #08fbcf;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  .toggle {
    font-size: 2rem;
  }
</style>

{#if isNav}
  <Nav {segment} />
{/if}

{#if isNav}
  <div class="toggle" transition:fly={{ y: -5 }} role="button" on:click={toggle}>✨</div>
{:else}
  <div class="toggle" transition:fly={{ y: 5 }} role="button" on:click={toggle}>⚙</div>
{/if}

<main trainsition:fade>
  <slot />
</main>
