<script>
export let questions;
import Button, { Label } from '@smui/button';
import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';

</script>

<h1>Correct Answers</h1>

{#each questions.q as item, i}
	
<Card>
    <Content><h2 style="background:lightgray;padding:2px">{item}</h2>  
    <h2>{questions.a[i]}</h2></Content>
</Card>
<br>
  

 {/each}

 
 <Button href="/">  <Label>CLOSE</Label> </Button>
 