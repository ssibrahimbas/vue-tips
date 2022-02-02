<template>
<div class="child-view">
  <ChildInChildView></ChildInChildView>
</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Inject} from "vue-property-decorator";
import ChildInChildView from "./child/ChildInChildView.vue";

@Options({
  components: {
    ChildInChildView
  }
})
export default class ChildView extends Vue {
  @Inject("showLoader") showLoader! : () => void;
  @Inject("destroyLoader") destroyLoader!: () => void;

  fetchData() : void {
    this.showLoader();
    setTimeout(() => {
      this.destroyLoader();
    }, 5000)
  }

  created() : void {
    this.fetchData();
  }
}
</script>

<style scoped>

</style>