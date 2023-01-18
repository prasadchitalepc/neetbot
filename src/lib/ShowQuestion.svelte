
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

</script>

<div>
  <div>
    <h2>{currq}</h2>
  </div>
  
</div>

<button on:click={handlePrevClick}>
	PREV {count}
</button>
<button on:click={handleNextClick}>
	NXT{count}
</button>

  