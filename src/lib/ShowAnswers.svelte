<script>
export let questions;
import Button, { Label } from '@smui/button';
</script>

<h1>Answers</h1>

{#each questions.q as item, i}
	

  <div>
    <h2 style="background:lightblue">{item}</h2>  
    <h2>{questions.a[i]}</h2>
  </div>

 {/each}

 <a href="/">CLOSE</a>