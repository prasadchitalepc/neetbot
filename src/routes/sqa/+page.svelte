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

  var qlst = [
  {
    answerText: "a1",
    question: "q1",
    distractors: "",
    questionType: 0
  }
]



function handleShowAnswersClick() {
    toggle = true;
	}

 
 async function Postdata () {		
	 const response = await	 fetch('api/sqa', {
  method: 'POST',
  body: JSON.stringify({
    a:"name",
    b:"body",

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  });

  qlst = await response.json();
  qlst = qlst;
  console.log(qlst);
  
	}

</script>

    

{#if toggle}
	<ShowAnswers questions={qlst}/>
  {:else}
<ShowQuestion questions={qlst}/>
<br/>
<div class="card-container">
    <Card>
<Button on:click={handleShowAnswersClick}>Show Answers</Button>
    </Card>
  </div>

{/if}
<button type="button" on:click={Postdata}>
	Post it.
</button>

<p>
	Result:
</p>
<pre>
{result}
</pre>

<style>
  
</style>



