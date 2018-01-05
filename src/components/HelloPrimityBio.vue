<template>
  <div>
    <svg class="hidden">
			<symbol id="icon-caret" viewBox="0 0 24 24">
				<title>caret</title>
				<polygon points="15.7,16.6 11.1,12 15.7,7.4 14.3,6 8.3,12 14.3,18"/>
			</symbol>
			<symbol id="icon-menu" viewBox="0 0 24 24">
				<title>menu</title>
				<path d="M23.7,3H0V0h23.7V3z M23.7,7.5H0v3h23.7V7.5z M18.9,15h-14v3h14V15z"/>
			</symbol>
			<symbol id="icon-cross" viewBox="0 0 24 24">
				<title>cross</title>
				<path d="M14.1,12l7.3,7.3l-2.1,2.1L12,14.1l-7.3,7.3l-2.1-2.1L9.9,12L2.6,4.7l2.1-2.1L12,9.9l7.3-7.3l2.1,2.1L14.1,12z"/>
			</symbol>
		</svg>

		<main class="view">
			<!-- Title, Subtitle and Email -->
			<div class="content" :class="{ 'content-opaque': showTabs }" v-show="showTabContent===false">
				<header class="codrops-header">
					<h1 class="codrops-header__title">Let's Talk...</h1>
					<span class="codrops-header__deco">
						<a href="mailto: angelo.anolin@gmail.com">angelo.anolin@gmail.com</a>
					</span>
					<p class="codrops-header__tagline">about me becoming an Engineer with your company</p>
				</header>
			</div>
			
			<!-- Bottom Button -->
			<button class="btn btn--menu" @click="toggleTabs" v-show="!showTabContent">
				<i class="fa fa-bars fa-3x" aria-hidden="true" v-if="!showTabs"></i>
				<i class="fa fa-times fa-3x" aria-hidden="true" v-if="showTabs"></i>
			</button>

			<!-- Tab Items -->
			<transition name="fade" mode="out-in">
				<nav class="tabsnav tabsnav--ibai" v-if="showTabs">
					<div class="tabsnav__item" @click="viewWhyPrimityDetail">
						<div class="tabsnav__bar"></div>
						<h3 class="tabsnav__title">Why Primity Bio?</h3>
					</div>
					<div class="tabsnav__item" @click="viewMyExperiencesDetail">
						<div class="tabsnav__bar"></div>
						<h3 class="tabsnav__title">My Experiences</h3>
					</div>
					<div class="tabsnav__item" @click="viewInClosingDetail">
						<div class="tabsnav__bar"></div>
						<h3 class="tabsnav__title">In Closing</h3>
					</div>
				</nav>
			</transition>

			<!-- Tab Contents -->
			<transition name="bounce">
				<div class="tabscontent" v-if="showTabContent" :class="{ 'allow-pointer-events': showTabContent }">
					<div class="tabscontent__item" v-show="showWhyPrimity" :class="{ 'tabcontent-opaque': showWhyPrimity }">
						<div class="box">
							<h3 class="box__title">WhyPrimity</h3>
							<p class="tabscontent__words">
								Dealing one of the most challenging area in the realm of science and health care is always a noble endeavour. 
								The way you've built your platform allowing for better method of drug testing and discovery in a controlled
								platform can be viewed as cutting-edge technology.
							</p>
							<br />
							<p class="tabscontent__words">
								Behind the technical advancement at work in your approach to bioscience, pharmacy and engineering, the need to reinforce 
								these processes with reliable and superior software solutions becomes a necessity. With possibly million of data
								points being collected, delivering a system that fully analyzes and transforms the same into meaningful information
								becomes integral into the product and services. 
							</p>
							<br />
							<p class="tabscontent__words">
								Allow me to help build, maintain and support software essential to your operations by becoming a Software Engineer with your company.
							</p>
						</div>
					</div>
					<div class="tabscontent__item" v-show="showMyExperiences" :class="{ 'tabcontent-opaque': showMyExperiences }">
						<div class="box">
							<h3 class="box__title">My Experiences</h3>
							<p class="tabscontent__words">
								I've been involved in building and maintaining software for the past couple of years, spanning government and private corporations.
							</p>
							<br />
							<p class="tabscontent__words">
								Currently, I work as a Systems Analyst with the City of Edmonton, where I am tasked in helping build and maintain different
								web applications used both internally and for external facing services. 
							</p>
							<br />
							<p class="tabscontent__words">
								Prior to the city, I was a Senior Systems Developer for a grain trading company where I've lead the conversion and adoption
								of web based solutions to replace some legacy systems for the company. 
							</p>
							<br />
							<p class="tabscontent__words">
								I also have some experience in the health care industry by helping deliver an advanced health information system for two 
								major health institutions in the Middle East.
							</p>
							<br />
							<p class="tabscontent__words">
								Most of the technology stack I worked with centered on corporate software products such as Microsoft .NET and SQL Server / Oracle database backends. 
								Heavy usage of plain old Javascript mixed with good old jQuery and some Telerik platform goodness.
							</p>
							<br />
							<p class="tabscontent__words">
								On my spare time, I have dabbled with different frameworks and languages such as Go, Python and Elixir and front-end frameworks like VueJs, ReactJS, 
								Angular and Elm. This in conjunction with known CSS frameworks like Semantic UI, Bulma, Material Design and the ever-trusted Bootstrap.
							</p>
						</div>
					</div>
					<div class="tabscontent__item" v-show="showInClosing" :class="{ 'tabcontent-opaque': showInClosing }">
						<div class="box">
							<h3 class="box__title">In Closing</h3>
							<p class="tabscontent__words">
								Caring about work that matters; Empowering your people to have a large impact in the present and the future of the company; Indepence and flexibility; 
								these are but few of the things that makes a company stand out and be a dream destination for anybody wanting to make a difference. I have a feeling 
								that Primity Bio has that in their culture.
							</p>
							<br />
							<p class="tabscontent__words">
								Diligence and care in writing software is something I have always practiced. Having that sense of responsibility means that every code I write, every commit 
								I make and every software I deploy means that I am making an elegant experience and bringing solid contributions to the success of Primity Bio.
							</p>
							<br />
							<p class="tabscontent__words">
								We spend more than a third of our lives at work - doing meaningful stuff in a challenging field pushes me to constantly strive to get better. I see the 
								realities of being challenged and delivering awesome stuff at Primity Bio.
							</p>
							<br />
							<p class="tabscontent__words">
								Let's take things to the next level.
							</p>
							<ul>
								<li><a href="mailto: angelo.anolin@gmail.com">angelo.anolin@gmail.com</a></li>
								<li><a href="tel: +1 780-953-8276">+1 780-953-8276</a></li>
							</ul>
						</div>
					</div>
					<button class="btn btn--back" @click="closeTabs" :class="{ 'back-button-opaque': showTabContent }">
						<svg class="icon icon--caret"><use xlink:href="#icon-caret"></use></svg>
					</button>
				</div>
			</transition>

		</main>
  </div>
</template>

<script>
import anime from 'animejs'
// import TabsNav from '@/assets/tabsnav.js'

export default {
	name: 'HelloPrimityBio',
	data () {
		return {
			showTabs: false,
			showTabContent: false,
			showWhyPrimity: false,
			showInClosing: false,
			showMyExperiences: false,
			tnav: null,
			contentItems: null,
			backCtrl: null,
			menuCtrl: null,
			isContentShown: false,
			current: null
		}
	},

	methods: {
		openTabCallback (anim, idx, tab) {
			var a = this
			if (anim.progress > 40 && !a.isContentShown) {
				a.isContentShown = true
				a.current = idx

				var contentItem = a.contentItems[idx]
				var content = contentItem.querySelector('.box')

				// Hide the content elements.
				content.style.opacity = 0

				// Show content item.
				contentItem.style.opacity = 1
				contentItem.classList.add('tabscontent__item--current')

				// Animate content elements in.
				anime.remove(content)
				anime({
					targets: content,
					easing: [0.2, 1, 0.3, 1],
					duration: 600,
					translateY: [400, 0],
					opacity: {
						value: 1,
						duration: 600,
						easing: 'linear'
					}
				})
			}
		},

		closeTabs () {
			var a = this
			a.showTabs = true
			a.showTabContent = false
			a.showWhyPrimity = false
			a.showMyExperiences = false
			a.showInClosing = false
		},

		toggleTabs () {
			var a = this
			a.showTabs = !a.showTabs
		},

		viewWhyPrimityDetail () {
			var a = this
			a.showTabs = false
			a.showTabContent = true
			a.showWhyPrimity = true
		},

		viewMyExperiencesDetail () {
			var a = this
			a.showTabs = false
			a.showTabContent = true
			a.showMyExperiences = true
		},

		viewInClosingDetail () {
			var a = this
			a.showTabs = false
			a.showTabContent = true
			a.showInClosing = true
		}
	},

	mounted () {
		// var a = this
		// var tabNavOptions = {
		// 	movable: 'all',
		// 	layout: 'horizontal',
		// 	animeduration: 600,
		// 	animeeasing: [0.2, 1, 0.3, 1],
		// 	animedelay: 50,
		// 	onOpenBarsUpdate: a.openTabCallback,
		// 	onOpenTab: function () {
		// 		// Show the back button after the tab is open.
		// 		anime({
		// 			targets: a.backCtrl,
		// 			duration: 600,
		// 			easing: 'easeOutExpo',
		// 			scale: [0, 1],
		// 			opacity: {
		// 				value: 1,
		// 				duration: 300,
		// 				easing: 'linear'
		// 			}
		// 		})
		// 	}
		// }

		// var tabsNav = document.querySelector('nav.tabsnav')
		// // console.log(tabsNav)
		// // console.log(TabsNav)

		// a.tnav = new TabsNav(tabsNav, tabNavOptions)

		// console.log(a.tnav)

		// // The content items and the back control.
		// a.contentItems = [].slice.call(document.querySelectorAll('.tabscontent > .tabscontent__item'))
		// a.backCtrl = document.querySelector('.tabscontent > button.btn--back')
		// // menu ctrl for smaller screens (the tabs are not initially shown and toggling this button will show/hide the tabs)
		// a.menuCtrl = document.querySelector('button.btn--menu')
	}
}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

	.content-opaque {
		opacity: 0.2; 
		transform: scale(0.88);
	}

	.tabcontent-opaque {
		opacity: 0.9; 
	}

	.back-button-opaque {
		opacity: 1.0;
	}

	.allow-pointer-events {
		pointer-events: auto;
	}

	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}

</style>


// :class="{ 'tabsnav--hidden tabsnav--hidden-default': hideTabs }"