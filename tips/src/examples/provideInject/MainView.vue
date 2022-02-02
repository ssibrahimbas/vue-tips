<template>
<div class="main-view">
  <ChildView></ChildView>
</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ChildView from "@/examples/provideInject/child/ChildView.vue";
import {Provide} from "vue-property-decorator";
import {User} from "@/examples/provideInject/types/user/user.model";

@Options({
  components: {
    ChildView
  }
})
export default class MainView extends Vue {

  // used provide
  @Provide("user") user : User = {
    firstName: "Sami Salih",
    lastName: "İbrahimbaş",
    age: 20
  };

  // not used provide
  user2 : User = {
    firstName: "John",
    lastName: "Doe",
    age: 19
  }

  @Provide("showLoader") showLoader() : void {
    // show
  }

  @Provide("destroyLoader") destroyLoader() : void {
    // destroy
  }

  @Provide("logMessage") logMessage(message : string) : void {
    console.log(message);
  }
}
</script>

<style scoped>

</style>