<template>
    <div class="container">
        <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link">
                <router-link class="navbar-link footer-navbar-link" :to="link.url">{{ link.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { links } from '@/_config';
export default {
    data() {
        return {
            links: links
        }
    }
}
</script>