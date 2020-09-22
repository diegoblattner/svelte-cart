<script lang="ts">
  import type { Routes } from "../../routes";
  import { navigate } from "../../stores/navigation";

  export let href: Routes;
  export let text: string;
  export let className: string | undefined;

  const onClick = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();

    navigate(href);
  };
</script>

<a {href} class={className} on:click={onClick}>{text}</a>
