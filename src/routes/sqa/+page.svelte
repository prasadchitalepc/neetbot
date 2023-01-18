<script>
	import ShowQuestion from '../../lib/ShowQuestion.svelte';
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
</script>
<h1> Questions </h1>
<{#each qlst.q as item, i}
	<li>{i + 1}: {item} </li>
{/each}
<ShowQuestion/>

