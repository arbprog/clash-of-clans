<template>
    <div class="md-body">
        <p>hello home page</p>
        <p>hello</p>
        <div class="cards">
            <div class="card__wrapper" v-for="item in items" :key="item.id">
                <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img" :link="`/${item.alias}`">
                    {{ item.descr }}
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items.json'
import Card from "@/components/UI/Card"
export default {
    components: { Card },
    data() {
        return {
            items: items,
        }
    }
}
</script>