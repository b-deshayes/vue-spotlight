<template>
  <div :class="{'spotlight': true, 'spotlight--active': active}">
    <div class="spotlight__container">
      Test
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const active = ref(false)

    return { active }
  }
}
</script>

<style lang='scss' scoped>
.spotlight {
  $self: &;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  &--active {
    opacity: 1;
    pointer-events: auto;
    transition: .3s;
  }

  #{ $self }__container {
    position: relative;
    width: 350px;
  }
}
</style>
