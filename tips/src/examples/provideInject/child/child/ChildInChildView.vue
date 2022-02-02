<template>
<div class="child-in-child-view">
  <h3>Hello, <b>{{user.firstName}}</b></h3>
</div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {User} from "@/examples/provideInject/types/user/user.model";
import {Inject} from "vue-property-decorator";

@Options({})
export default class ChildInChildView extends Vue {
  @Inject("user") user! : User;
  @Inject("logMessage") logMessage! : (message: string) => void;

  created() : void {
    this.logMessage("One user coming -> " + this.user.firstName);
  }
}
</script>

<style scoped>

</style>