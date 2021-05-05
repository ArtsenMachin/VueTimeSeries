<template>
    <div class='col-12 col-md-8 col-lg-4 col-xl-3 text-center offset-md-2'
    v-bind:class="{'offset-lg-2':carditem.first, 'offset-lg-1 mt-lg-0 mt-4':!carditem.first}">
        <div class='card'>
            <div class='row'>
                <div class='col-12 text-center'>
                    <span class='statusType'>{{carditem.status}}</span>
                </div>
                <div class='col-12 text-center mt-4'>
                    <span class='bigYell'>{{carditem.bigtext}}&nbsp;<i :class="carditem.icon" aria-hidden="true"></i></span>
                </div>
                <div class='col-12 text-center mt-4'>
                    <span class='dashboardText__head'>{{carditem.text}}</span>
                </div>
                <div class='col-12 text-center mt-4'>
                    <router-link v-bind:to="carditem.to"><button class='btn-funct btn'>Перейти</button></router-link>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    props:['carditem']
}
</script>