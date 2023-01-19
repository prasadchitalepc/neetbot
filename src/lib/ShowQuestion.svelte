
<script>

  export let questions;

	let currq = questions[0];
  let count = 0;
  let qcnt = questions.length;
  let prevdisabled = "disabled";
  let nxtdisabled = "disabled";

  $: if (count == 0) {		
		prevdisabled = "disabled";    
	}
  else
    prevdisabled = "";

$: if (count == qcnt-1) {		
		nxtdisabled = "disabled";    
	}
  else
    nxtdisabled = "";

	function handlePrevClick() {
    if(count > 0)
		  count -= 1;      
      currq = questions[count];
  
	}

  function handleNextClick() {
    if(count < qcnt-1)
		  count += 1;

      currq = questions[count];
	}
import Button, { Label } from '@smui/button';

  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
</script>



<div class="card-container">
    <Card>
      <Content>{currq}</Content>
      <Actions>
        <Button disabled='{prevdisabled}' on:click={handlePrevClick}>
          <Label>PREV</Label>
        </Button>
        <Button disabled='{nxtdisabled}' on:click={handleNextClick}>
          <Label>NEXT</Label>
        </Button>
      </Actions>
    </Card>
  </div>




  