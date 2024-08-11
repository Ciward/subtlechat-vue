<template>
  <div id="list">
<!--小智-->
		<ul v-if="currentList=='小智'">
<!--			<p style="padding: 2px 4px;height: 20px">有什么问题可以跟我说哟！</p>-->
			<li :class="{ active: currentSession?'小智'== currentSession.username:false }"
					v-on:click="changeCurrentSession(robotObj)">
				<img class="avatar" src="https://photo-bucke.oss-cn-beijing.aliyuncs.com/group-chat/2024/03/18/a93319e648db31887290806343c51ed3.jpeg">
				<p class="name">小智(智能回复)</p>
			</li>
		</ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'list',
  data () {
    return {
			user:this.$store.state.currentUser,
			chatObj:{username:'群聊',nickname:'群聊'},//群聊实体对象（为方法复用而构造，对于User对象）
			robotObj:{
				username:'小智',
				nickname:'小智',
			  userProfile:'https://photo-bucke.oss-cn-beijing.aliyuncs.com/group-chat/2024/03/18/a93319e648db31887290806343c51ed3.jpeg'
			}
    }
  },
  computed: mapState([
  //'sessions',//this.sessions映射成this.$store.state.sessions
	'users',
  'currentSession',
	'isDot',
	'currentList'
	]),
  methods:{
  	changeCurrentSession:function (currentSession) {
  		this.$store.commit('changeCurrentSession',currentSession)
  	}
  }
}
</script>

<style lang="scss" scoped>
#list {
	ul{
		margin-left: 0px;
		padding-left: 0px;
		margin-left: 2px;
	}
	li {
		padding-top: 14px;
		padding-bottom: 14px;
		//padding-right: 40px;
		//border-bottom: 1px solid #292C33;
		list-style: none;
		cursor: pointer;
		&:hover {
			background-color: #D8D6D6;
		}
	}
  li.active {/*注意这个是.不是冒号:*/
			background-color: #C8C6C6;
	}
	.avatar {
		border-radius: 2px;
		width: 30px;
		height: 30px;
		vertical-align: middle;
	}
	.name {
		display: inline-block;
		margin-left: 15px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.stateItem {//在线状态的样式
		/*position: absolute;*/
		/*left: 160px;*/
		//margin-left: 100px;
		//margin-right: 10px;
	}
	.userList{
		max-height: 600px;
	}
	.el-scrollbar__wrap.default-scrollbar__wrap {
		overflow-x: auto;
	}
}
</style>
