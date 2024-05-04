<template>
    <div class="wrapper">
        <div class="card" style="flex-direction: column;">
            <div v-if="item">
                <img :src="item.img" :alt="item.descr">
                <h1 class="title">{{ item.title }}</h1>
                <p>{{ item.descr }}</p>
            </div>
            <div>
                <router-link to="/" class="btn btnPrimary" style="margin: 40px;">To home page</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items.json'

export default {
    data() {
        return {
            items: items,
            item: null
        }
    },
    created() {
        const alias = this.$route.params.itemAlias;
        const item = items.find(el => el.alias === alias);

        this.item = item;
    }
}
</script>