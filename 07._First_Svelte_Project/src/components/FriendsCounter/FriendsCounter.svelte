<script>
  export let friendsCounter = 0;

  function alienmateFriend() {
    friendsCounter--;
  }
</script>



<div>Friends Counter</div>
<h1>{friendsCounter}</h1>
<button on:click={alienmateFriend}>Alienmate A Friend</button>