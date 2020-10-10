import {onMounted, onUnmounted, ref, watch} from "@vue/composition-api";
import useKeyboardListener from "@/composables/Spotlight/key-listener";

export default function useSpotlight(element) {

    const active = ref(true)
    const search = ref('')
    const input = ref(null)
    const suggestions = ref([])
    const { keyPressed } = useKeyboardListener()

    function hide() {
        active.value = false
        search.value = ''
    }

    onMounted(() => {
        input.value = element.value.querySelector('input')
        input.value.addEventListener('blur', hide)
    })

    onUnmounted(() => {
        input.value.removeEventListener('blur', hide)
    })

    watch(keyPressed, (keyboardEvent) => {

        if (keyboardEvent == null) return
        if (!active.value && keyboardEvent.shiftKey && keyboardEvent.doubleKey) {
            active.value = true
            input.value.focus()
        }

        if (active.value && keyboardEvent.key === 'Escape') {
            input.value.blur()
        }
    })

    return {
        element,
        active,
        search,
        input,
        suggestions
    }
}
