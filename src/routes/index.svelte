<script context="module">
  import { firestore } from "./../firebase";

	export async function preload(page, session) {
    let db = await firestore();
    let fbList = await db.collection('test').get();
    return { list: fbList.docs };
  }
</script>

<script>
  export let list = [];
</script>

{#each list as listItem}
  {listItem.data().say}
  <br />
{:else}No data :({/each}
