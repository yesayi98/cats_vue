import { createApp } from 'vue'
import  store  from './store/main'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/index.css'
import category from "./pages/category";

const app = createApp(App)

const routes = [
    { path: '/categories/:id', component: category },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
app.use(store)
app.use(router)

app.mount('#app')

