<script>
  export let parentName;
  export let myChildren;

  import Child from "../Child/Child.svelte";

  function handleShowLove(childName) {
    console.log(`${parentName} is loved by ${childName} veeeeery much.`);
  }

  let treasureChest = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];

  function handleTakeFromTreasureChest() {
    treasureChest.pop();
    treasureChest = treasureChest;
  }

  // assignment: Create a treasure chest full of items (emoji)
  // each parent has a treasure chest and the children can take one item at a time
  // remember to follow the conventions of handle* and on*
  // display the treausre chest items in the parent component

</script>

<h1>{parentName}</h1>

<p>
{#each treasureChest as treasure}
  {treasure + " "}
{/each}
</p>

{#each myChildren as child}
  <Child child={child} onShowLove={handleShowLove} 
  onTakeFromTreasureChest={handleTakeFromTreasureChest} />
{/each}
  