<template>
<div id="app">
	<header>
		<div class="logo-panel" @click="switchChannel('index')">
			<img class="logo" :src="logo" width="40" height="40" />
			<label>省钱招</label>
		</div>
		<div class="channel-panel">
			<span class="btn" :class="{'active': (subtitle=='index' || subtitle=='consultation')}" @click="switchChannel('index')">index</span>
			<span class="btn" :class="{'active': subtitle=='page'}" @click="switchChannel('page')">page</span>
			<span class="btn" :class="{'active': subtitle=='login'}" @click="switchChannel('login')">login</span>
		</div>
		<div class="info-panel">
			<span v-if="username" @click="switchChannel('login')">{{username}}</span>
			<button @click="signOut()" v-if="isLogin">退出</button>
		</div>
	</header>
	<router-view></router-view>
</div>
</template>

<script>
import 'assets/less/base.less'
import 'assets/less/home.less'
import img_logo from 'assets/img/mf-logo.png'
import {
	mapGetters,
	mapState
} from 'vuex'
export default {
	name: 'app',
	data() {
		return {
			logo: img_logo
		}
	},
	methods: {
		switchChannel(type) {
			let path = '/' + type
			this.$router.push({
				path: path
			})
		},
		signOut() {
			this.$store.dispatch('logout');
			this.$router.push({
				path: '/'
			})
		}
	},
	computed: mapGetters(['username', 'isLogin', 'subtitle'])
}
</script>
