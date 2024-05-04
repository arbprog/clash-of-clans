<template>
    <div class="card">
        <div v-if="imgUrl" class="card-img__wrapper">
            <img class="card-img" :src="imgUrl" :alt="title" />
        </div>
        <div class="card-name">{{ name }}</div>
        <div class="card-title">{{ title }}</div>
        <div class="card-body">
            <slot></slot>
            <router-link class="btn btnPrimary" style="display: block; margin-top: 15px; text-decoration: none"
                v-if="link" :to="link">See
                more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
        },
        link: {
            type: String,
        }
    }
}
</script>