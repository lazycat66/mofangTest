<template>
<div>
	home
	<button @click="fn()">toast</button>
</div>
</template>

<script>
import {
	toast
} from '@/utils/toast'
export default {
	name: 'Home',
	methods: {
		fn() {
			toast('asdsdasd')
		}
	}
}
</script>
