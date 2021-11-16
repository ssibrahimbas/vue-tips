<template>
  <div class="form-group">
    <input class="form-control" ref="message" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class AutoFocus extends Vue {
  declare $refs: {
    message: HTMLInputElement;
  };

  focusInput(): void {
    this.$refs.message.focus();
  }

  mounted(): void {
    this.focusInput();
  }
}
</script>
