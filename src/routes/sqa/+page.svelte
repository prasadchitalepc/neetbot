<script>
	import ShowQuestion from '../../lib/ShowQuestion.svelte';
  import ShowAnswers from '../../lib/ShowAnswers.svelte';

  import Button, { Label } from '@smui/button';
import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';

   
 
  var toggle = false;
  let showpara = true;
  let result = "";

  var qlst = {
  q: [
    "Who first observed the response of coleoptiles of canary grass to light?",
    "What did Charles and Francis Darwin observe about the coleoptiles of canary grass?",
    "Who first isolated auxin?",
    "What is the bakanae' disease of rice seedlings caused by?"
  ],
  a: [
    "Charles Darwin and his son Francis Darwin observed the response of coleoptiles of canary grass to light.",
    "They observed that the coleoptiles of canary grass responded to unilateral illumination by growing towards the light source (phototropism).",
    "F.W. Went first isolated auxin from the tips of coleoptiles of oat seedlings.",
    "The bakanae disease of rice seedlings is caused by a fungal pathogen called Gibberella fujikuroi."
  ]
}

function handleShowAnswersClick() {
    toggle = true;
	}


 

</script>

    

{#if toggle}
	<ShowAnswers questions={qlst}/>
  {:else}
<ShowQuestion questions={qlst.q}/>
<br/>
<div class="card-container">
    <Card>
<Button on:click={handleShowAnswersClick}>Show Answers</Button>
    </Card>
  </div>

{/if}


<p>
	Result:
</p>
<pre>
{result}
</pre>

<style>
  
</style>



