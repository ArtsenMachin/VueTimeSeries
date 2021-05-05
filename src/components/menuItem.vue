<template>
    <router-link class='menu_btn col-lg-12 col-8 col-md-6 offset-2 offset-md-3 offset-lg-0 menuElem text-center mt-lg-4 pb-lg-4' 
                v-bind:to="item.to"
                v-bind:class="{active: item.active}">
        <span class='menu_icon'>
            <i v-bind:class="item.icon" aria-hidden="true"></i>
        </span><br>
        <span class='menu_text text-center'>{{item.title}}</span>
    </router-link>
</template>

<script>
export default {
    props:['item']
}
</script>

<style scoped>
.active{
    color:#FFC300 !important;
}
.menuElem{
    border-bottom: 1px solid rgba(34, 34, 34, 0.158);
    width: 100%;
}
</style>
