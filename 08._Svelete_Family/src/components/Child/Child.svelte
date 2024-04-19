<script>
  export let child;
  export let onShowLove;
  export let onTakeFromTreasureChest;

  import { fridgeMessages } from "../../stores/fridgeMessageStore.js";

  let fridgeMessageInputValue = "";

  function submitFridgeMessage() {
    const newFridgeMessage = {
      creator: child.name,
      message: fridgeMessageInputValue
    };
    // fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);

    // $fridgeMessages = fridgeMessagesStore
    fridgeMessages.update((fridgeMessageStoreValue) => {
      fridgeMessageStoreValue.push(newFridgeMessage);
      return fridgeMessageStoreValue;
    });

    fridgeMessageInputValue = "";

  }

</script>

<div
  class:is-girl={child.isGirl}
  class:is-boy={!child.isGirl}
  class={child.familySHeep || "not-a-sheep"}
>
  <h2>{child.name}</h2>

  <label for="fridgeMessage">Write a Fridge Message</label>
  <input type="text" name="fridgeMessge" placeholder="Fridge Message"
      bind:value={fridgeMessageInputValue}
  >
  <br>
  <button on:click={submitFridgeMessage}>Write Fridge Message</button>
  <br><br>

  <button on:click={() => onShowLove(child.name)}>Show Love 💚</button>

  <button on:click={onTakeFromTreasureChest}>Take from treasure Chest</button>
</div>


<style>
  .is-girl {
    background-color: blue;
  }

  .is-boy {
    background-color: pink;
  }

  .not-a-sheep {
    border: 0.5em solid goldenrod;
  }

  .grey-sheep {
    border: 0.5em solid grey;
  }

  .black-sheep {
    border: 0.5em solid yellow;
  }
</style>