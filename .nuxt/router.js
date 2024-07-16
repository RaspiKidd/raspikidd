import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ddfd7c08 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _19902003 = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _478a2855 = () => interopDefault(import('../pages/Classes.vue' /* webpackChunkName: "pages/Classes" */))
const _4676a43d = () => interopDefault(import('../pages/ComingSoon.vue' /* webpackChunkName: "pages/ComingSoon" */))
const _5835874f = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _2e02a07a = () => interopDefault(import('../pages/EduBlocksTutorials.vue' /* webpackChunkName: "pages/EduBlocksTutorials" */))
const _5e0fd5d3 = () => interopDefault(import('../pages/GettingStartedMB.vue' /* webpackChunkName: "pages/GettingStartedMB" */))
const _16bd6e66 = () => interopDefault(import('../pages/HireMe.vue' /* webpackChunkName: "pages/HireMe" */))
const _2403fec0 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _37de0f89 = () => interopDefault(import('../pages/MakeCodeTutorials.vue' /* webpackChunkName: "pages/MakeCodeTutorials" */))
const _36f23c0a = () => interopDefault(import('../pages/microbit.vue' /* webpackChunkName: "pages/microbit" */))
const _a97c4654 = () => interopDefault(import('../pages/MicroPythonTutorials.vue' /* webpackChunkName: "pages/MicroPythonTutorials" */))
const _68931b92 = () => interopDefault(import('../pages/RaspberryPi.vue' /* webpackChunkName: "pages/RaspberryPi" */))
const _32814bd2 = () => interopDefault(import('../pages/microbitTutorials/EduBlocksTutorials/CreateFitbitEB.vue' /* webpackChunkName: "pages/microbitTutorials/EduBlocksTutorials/CreateFitbitEB" */))
const _57cc6add = () => interopDefault(import('../pages/microbitTutorials/EduBlocksTutorials/EnviroSensingEB.vue' /* webpackChunkName: "pages/microbitTutorials/EduBlocksTutorials/EnviroSensingEB" */))
const _967a4a2e = () => interopDefault(import('../pages/microbitTutorials/EduBlocksTutorials/RockPaperScissorsEB.vue' /* webpackChunkName: "pages/microbitTutorials/EduBlocksTutorials/RockPaperScissorsEB" */))
const _22c0d8b0 = () => interopDefault(import('../pages/microbitTutorials/EduBlocksTutorials/ThrowGhostEB.vue' /* webpackChunkName: "pages/microbitTutorials/EduBlocksTutorials/ThrowGhostEB" */))
const _56a9f5f6 = () => interopDefault(import('../pages/microbitTutorials/EduBlocksTutorials/TrafficLightsEB.vue' /* webpackChunkName: "pages/microbitTutorials/EduBlocksTutorials/TrafficLightsEB" */))
const _07e4bd07 = () => interopDefault(import('../pages/microbitTutorials/MakeCodeTutorials/CreateFitbitMC.vue' /* webpackChunkName: "pages/microbitTutorials/MakeCodeTutorials/CreateFitbitMC" */))
const _7fbce082 = () => interopDefault(import('../pages/microbitTutorials/MakeCodeTutorials/EnviroSensingMC.vue' /* webpackChunkName: "pages/microbitTutorials/MakeCodeTutorials/EnviroSensingMC" */))
const _6d08b96a = () => interopDefault(import('../pages/microbitTutorials/MakeCodeTutorials/RockPaperScissorsMC.vue' /* webpackChunkName: "pages/microbitTutorials/MakeCodeTutorials/RockPaperScissorsMC" */))
const _18522858 = () => interopDefault(import('../pages/microbitTutorials/MakeCodeTutorials/ThrowGhostMC.vue' /* webpackChunkName: "pages/microbitTutorials/MakeCodeTutorials/ThrowGhostMC" */))
const _3d0029e7 = () => interopDefault(import('../pages/microbitTutorials/MakeCodeTutorials/TrafficLightsMC.vue' /* webpackChunkName: "pages/microbitTutorials/MakeCodeTutorials/TrafficLightsMC" */))
const _768a6b5b = () => interopDefault(import('../pages/microbitTutorials/PythonTutorials/CreateFitbitPY.vue' /* webpackChunkName: "pages/microbitTutorials/PythonTutorials/CreateFitbitPY" */))
const _6848eb71 = () => interopDefault(import('../pages/microbitTutorials/PythonTutorials/EnviroSensingPY.vue' /* webpackChunkName: "pages/microbitTutorials/PythonTutorials/EnviroSensingPY" */))
const _7de0877d = () => interopDefault(import('../pages/microbitTutorials/PythonTutorials/RockPaperScissorsPY.vue' /* webpackChunkName: "pages/microbitTutorials/PythonTutorials/RockPaperScissorsPY" */))
const _7c6b8a28 = () => interopDefault(import('../pages/microbitTutorials/PythonTutorials/ThrowGhostPY.vue' /* webpackChunkName: "pages/microbitTutorials/PythonTutorials/ThrowGhostPY" */))
const _35b0f4ce = () => interopDefault(import('../pages/microbitTutorials/PythonTutorials/TrafficLightsPY.vue' /* webpackChunkName: "pages/microbitTutorials/PythonTutorials/TrafficLightsPY" */))
const _3946fce1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _37905b99 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _ddfd7c08,
    name: "About"
  }, {
    path: "/Blog",
    component: _19902003,
    name: "Blog"
  }, {
    path: "/Classes",
    component: _478a2855,
    name: "Classes"
  }, {
    path: "/ComingSoon",
    component: _4676a43d,
    name: "ComingSoon"
  }, {
    path: "/Contact",
    component: _5835874f,
    name: "Contact"
  }, {
    path: "/EduBlocksTutorials",
    component: _2e02a07a,
    name: "EduBlocksTutorials"
  }, {
    path: "/GettingStartedMB",
    component: _5e0fd5d3,
    name: "GettingStartedMB"
  }, {
    path: "/HireMe",
    component: _16bd6e66,
    name: "HireMe"
  }, {
    path: "/Home",
    component: _2403fec0,
    name: "Home"
  }, {
    path: "/MakeCodeTutorials",
    component: _37de0f89,
    name: "MakeCodeTutorials"
  }, {
    path: "/microbit",
    component: _36f23c0a,
    name: "microbit"
  }, {
    path: "/MicroPythonTutorials",
    component: _a97c4654,
    name: "MicroPythonTutorials"
  }, {
    path: "/RaspberryPi",
    component: _68931b92,
    name: "RaspberryPi"
  }, {
    path: "/microbitTutorials/EduBlocksTutorials/CreateFitbitEB",
    component: _32814bd2,
    name: "microbitTutorials-EduBlocksTutorials-CreateFitbitEB"
  }, {
    path: "/microbitTutorials/EduBlocksTutorials/EnviroSensingEB",
    component: _57cc6add,
    name: "microbitTutorials-EduBlocksTutorials-EnviroSensingEB"
  }, {
    path: "/microbitTutorials/EduBlocksTutorials/RockPaperScissorsEB",
    component: _967a4a2e,
    name: "microbitTutorials-EduBlocksTutorials-RockPaperScissorsEB"
  }, {
    path: "/microbitTutorials/EduBlocksTutorials/ThrowGhostEB",
    component: _22c0d8b0,
    name: "microbitTutorials-EduBlocksTutorials-ThrowGhostEB"
  }, {
    path: "/microbitTutorials/EduBlocksTutorials/TrafficLightsEB",
    component: _56a9f5f6,
    name: "microbitTutorials-EduBlocksTutorials-TrafficLightsEB"
  }, {
    path: "/microbitTutorials/MakeCodeTutorials/CreateFitbitMC",
    component: _07e4bd07,
    name: "microbitTutorials-MakeCodeTutorials-CreateFitbitMC"
  }, {
    path: "/microbitTutorials/MakeCodeTutorials/EnviroSensingMC",
    component: _7fbce082,
    name: "microbitTutorials-MakeCodeTutorials-EnviroSensingMC"
  }, {
    path: "/microbitTutorials/MakeCodeTutorials/RockPaperScissorsMC",
    component: _6d08b96a,
    name: "microbitTutorials-MakeCodeTutorials-RockPaperScissorsMC"
  }, {
    path: "/microbitTutorials/MakeCodeTutorials/ThrowGhostMC",
    component: _18522858,
    name: "microbitTutorials-MakeCodeTutorials-ThrowGhostMC"
  }, {
    path: "/microbitTutorials/MakeCodeTutorials/TrafficLightsMC",
    component: _3d0029e7,
    name: "microbitTutorials-MakeCodeTutorials-TrafficLightsMC"
  }, {
    path: "/microbitTutorials/PythonTutorials/CreateFitbitPY",
    component: _768a6b5b,
    name: "microbitTutorials-PythonTutorials-CreateFitbitPY"
  }, {
    path: "/microbitTutorials/PythonTutorials/EnviroSensingPY",
    component: _6848eb71,
    name: "microbitTutorials-PythonTutorials-EnviroSensingPY"
  }, {
    path: "/microbitTutorials/PythonTutorials/RockPaperScissorsPY",
    component: _7de0877d,
    name: "microbitTutorials-PythonTutorials-RockPaperScissorsPY"
  }, {
    path: "/microbitTutorials/PythonTutorials/ThrowGhostPY",
    component: _7c6b8a28,
    name: "microbitTutorials-PythonTutorials-ThrowGhostPY"
  }, {
    path: "/microbitTutorials/PythonTutorials/TrafficLightsPY",
    component: _35b0f4ce,
    name: "microbitTutorials-PythonTutorials-TrafficLightsPY"
  }, {
    path: "/",
    component: _3946fce1,
    name: "index"
  }, {
    path: "/:slug",
    component: _37905b99,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
