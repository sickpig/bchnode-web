<template>
	<div id="app">
		<header>
			<div class="bchn-logo">
				<img alt="Bitcoin Cash Node Logo" src="./assets/images/bchn-logo-white.svg">
			</div>
			<div id="nav">
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
				<router-link to="/faq">FAQ</router-link>
				<router-link to="/press">Press</router-link>
			</div>
		</header>
		<main>
			<router-view/>
		</main>
		<footer>
			<div id="footer">
				<div class="stacked">
					<router-link to="/about">About</router-link>
					<router-link to="/faq">FAQ</router-link>
					<router-link to="/press">Press</router-link>
				</div>
			</div>
		</footer>
	</div>
</template>

<style lang="scss">
html, body {
    width: 100%;
    height: 100%;
}
body {
	margin:0;
	padding:0;
	background-color: #F8F9FA;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
main {
    flex-grow: 1;
}
header, main, footer {
    flex-shrink: 0;
}
header {
	height: 295px;
	background-color: #343A40;
}
footer {
	height: 100px;
	padding: 20px;
	background-color: #343A40;
	color: #fff;
	.stacked {
		width:100px;
		a {
			text-decoration: none;
			font-weight: bold;
			color: #ffffff;
			text-decoration: none;
			padding: 6px 10px;
			display:block;
			clear:both;
		}
	}
}
#nav {
	padding: 45px 100px 0 0;
	float:right;
	a {
		font-weight: bold;
		color: #ffffff;
		text-decoration: none;
		padding: 0 14px;
		&.router-link-exact-active {
			color: #B4B6B8;
		}
	}
}
.bchn-logo {
	float: left;
	width: 311px;
	height: 103px;
	margin-top:70px;
	margin-left:64px;
	svg, img {
		width:100%;
	}
}
</style>
