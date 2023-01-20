
<script>



	function handleClearClick() {
  paraValue = "";
	}

  function handleStartClick() {
    
	}

  let paraValue="The brain is the central information processing organ of our body, and acts as the ‘command and control system’. It controls the voluntary movements, balance of the body, functioning of vital involuntary organs (e.g., lungs, heart, kidneys, etc.), thermoregulation, hunger and thirst, circadian (24-hour) rhythms of our body, activities of several endocrine glands and human behaviour. It is also the site for processing of vision, hearing, speech, memory, intelligence, emotions and thoughts. The human brain is well protected by the skull. Inside the skull, the brain is covered by cranial meninges consisting of an outer layer called dura mater, a very thin middle layer called arachnoid and an inner layer (which is in contact with the brain tissue) called pia mater. The brain can be divided into three major parts: (i) forebrain, (ii) midbrain, and (iii) hindbrain (Figure 21.4).";

import Button, { Label } from '@smui/button';

  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
</script>


<h1>Type para here</h1>
<div class="card-container">
    <Card>
      <Content>
      <textarea bind:value={paraValue} rows="15"></textarea></Content>
      <Actions>
        <Button on:click={handleStartClick}>
          <Label>START</Label>
        </Button>
        <Button  on:click={handleClearClick}>
          <Label>CLEAR</Label>
        </Button>
      </Actions>
    </Card>
  </div>

<style>
textarea {
            font-size: 20px;
            width: 100%;
        }
</style>


  