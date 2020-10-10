import {onMounted, onUnmounted, ref} from '@vue/composition-api';

export default function useKeyboardListener(doubleKeyTime = 200) {

    const listener = ref(null)
    const keyPressed = ref(null)

    let lastKey = {}
    onMounted(() => {
        listener.value = window.addEventListener('keydown', (e) => {
            if (e.key === lastKey.key && e.timeStamp - lastKey.timeStamp < doubleKeyTime) {
                e.doubleKey = true
            }

            keyPressed.value = e
            lastKey = e
        });
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', listener);
    })

    return { listener, keyPressed }
}
