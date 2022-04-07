<template>
  <div
    :class="`alert alert--${variant}  alert--${size}`"
    role="alert"
    aria-live="polite"
  >
  {{ foo }}
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {foo} from '@/mixins';

export default defineComponent({
  setup() {
    return {foo};
  },
  props: {
    variant: {
      type: String,
      required: false,
      default: 'error',
      validator: (value: string) =>
        ['error', 'info', 'warning'].includes(value),
    },
    size: {
      type: String,
      required: false,
      default: 'large',
      validator: (value: string) => ['large', 'small'].includes(value),
    },
  },
});
</script>

<style lang="scss" scoped>
.alert {
  ::v-deep(p:last-of-type) {
    margin-bottom: 0;
  }
  &--error {
    background-color: red;
  }

  &--info {
    background-color: #e5f6ff;
    border: 2px solid #64a4c9;
    border-radius: 3px;
  }

  &--warning {
    background-color: #f1e5bc;
  }

  &--small {
    padding: 0.5rem 1rem;
  }
  &--large {
    padding: 1.875rem;
  }
}
</style>
