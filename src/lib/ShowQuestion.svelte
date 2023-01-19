
<script>

  export let questions;

	let currq = questions[0];
  let count = 0;
  let qcnt = questions.length;

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
import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>

<div>
  <div>
    <h2>{currq}</h2>
  </div>
  
</div>


<LayoutGrid>
<Cell>
<Button on:click={handlePrevClick}>
	PREV 
</Button>
</Cell>
<Cell>
<Button on:click={handleNextClick}>
	NXT
</Button>
</Cell>
</LayoutGrid>



  