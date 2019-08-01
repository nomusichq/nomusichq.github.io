<script>
  import { fade, fly } from "svelte/transition";
  export let segment;
</script>

<style>
  nav {
    /* border-bottom: 1px solid #f90086; */
    position: absolute;
    top: 0;
    font-weight: 300;
    user-select: none;
    font-size: 1rem;
    line-height: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
    color: #08fbcf;
    box-shadow: 2px 2px 2px #08fbcf;
  }

  /* .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 1px;
    background-color: #08fbcf;
    display: block;
  } */

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav transition:fly={{ y: -60 }}>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">blog</a>
    </li> -->
  </ul>
</nav>
