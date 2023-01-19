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

    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
 
  let prominent = false;
  let dense = false;
  let secondaryColor = false;
  var toggle = false;

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
<div class="flexy">  
<div class="top-app-bar-container flexor">
<TopAppBar
      variant="static"
      {prominent}
      {dense}
      color={secondaryColor ? 'secondary' : 'primary'}
    >
      <Row>
        <Section>
          <IconButton class="material-icons">menu</IconButton>
          <Title>TakeUps</Title>
        </Section>
        
      </Row>
    </TopAppBar>
</div>
</div>

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


<style>
  .top-app-bar-container {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }

  @media (max-width: 480px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style>



