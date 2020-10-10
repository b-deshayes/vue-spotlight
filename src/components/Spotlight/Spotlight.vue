<template>
  <div ref="spotlight" :class="{'spotlight': true, 'spotlight--active': active}">
    <div class="spotlight__container">
      <input class="spotlight__input" type="text" v-model="search">
      <ul class="spotlight__suggestions">
        <li slot="suggestion" v-for="suggestion in suggestions" :key="suggestion" class="spotlight__suggestion spotlight__suggestion--active">
          <a href="">
            {{ suggestion }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import useSpotlight from "@/composables/Spotlight/spotlight";
import {ref} from "@vue/composition-api";

export default {
  setup() {
    const spotlight = ref(null)
    const { element, active, search, suggestions } = useSpotlight(spotlight);
    return {
      active,
      spotlight: element,
      search,
      suggestions
    }
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
    background: #FFF;
    border-radius: 5px;
    padding: 5px;
    z-index: 3;

    #{ $self }__input {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      z-index:4;
    }

    ul#{ $self }__suggestions {
      list-style: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #FFF;
      padding: 5px;
      margin: -5px 0 0 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      li#{ $self }__suggestion {

        &--active {
          background: rgba(0, 0, 0, .1);
        }

        a {
          display: block;
          padding: 10px;
          text-decoration: none;

          &:hover {
            background: rgba(0, 0, 0, .1);
          }

          mark {
            background: #FFFF00;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
