<template>
    <div class="wrapper">
        <div class="card">
            <div v-if="item" class="card-img__wrapper">
                <img class="card-img" :src="item.img" :alt="item.descr" />
            </div>
            <div class="card-name">{{ item.lvl  }} lvl</div>
            <div class="card-title">{{ item.title  }}</div>
            <div class="card-body">
                {{ item.descr }}
                <router-link to="/" class="btn btnPrimary" style="margin-top: 15px;">To home page</router-link>
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