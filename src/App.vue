<template>
<div id="app">
	<el-container>
		<el-header>
            <div class="logo-wrap">
                <span class="image">
                    <img :src="logo" height="43" />
                </span>
                <span class="logo-text">
                    魔方微猎
                </span>
            </div>
        </el-header>
		<el-container>
			<el-aside width="200px">
                <AsidePanel />
            </el-aside>
			<el-main>
                <div class="subTabBar">
                    <SubTabPanel />
                </div>
                <div>
	                <router-view/>
                </div>
			</el-main>
		</el-container>
	</el-container>
</div>
</template>

<script>
import logo from 'assets/img/mf-logo.png'
import AsidePanel from '@/components/AsidePanel'
import SubTabPanel from '@/components/SubTabPanel'
export default {
	name: 'app',
      data() {
        return {
          logo: logo
        }
      },
    components: {
        AsidePanel,
        SubTabPanel
    }
}
</script>

<style>
html, body, div#app, section.el-container{
    height: 100%;
}
body{
    margin: auto;
    padding: 0;
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
}
.el-header,
.el-footer {
	background-color: #28353c;
	color: #fff;
	text-align: left;
}

.el-header > .logo-wrap{
    margin-top: 8px;
    width: 200px;
}
.el-header > .logo-wrap > span{
    display: inline-block;
    vertical-align: middle;
}
.el-header > .logo-wrap > span.logo-text{
    margin-left: 10px;
    font-size: 18px;
}

.el-aside {
	background-color: #fff;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #E9ECF2;
	color: #333;
	text-align: center;
    padding: 0;
}

body>.el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}

.subTabBar{
    /*height: 40px;*/
    background: #fff;
}
</style>
