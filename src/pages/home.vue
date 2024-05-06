<template>
    <div class="md-body">
        <Carousel :items-to-show="1" :wrap-around="true">
            <slide class="card__wrapper" v-for="item in items" :key="item.id">
                <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img" :link="`/${item.alias}`">
                    {{ item.descr }}
                </Card>
            </slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import items from '@/seeders/items.json'
import Card from "@/components/UI/Card"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    // name: 'WrapAround',
    components: { 
        Card,
        Carousel,
        Slide,
        Navigation 
    },
    data() {
        return {
            items: items,
        }
    }
}
</script>