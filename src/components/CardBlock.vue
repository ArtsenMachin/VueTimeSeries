<template>
    <div class='col-12 col-lg-4 col-xl-3 text-center mt-2 mb-1'
        v-bind:class="{'offset-xl-1':!cardblockitem.first}">
        <div class='card pl-2'
        v-bind:id="cardblockitem.id">
            <div class='row'>
                <div class='col-12 text-left'>
                    <span class='statusType'>{{cardblockitem.status}}</span>
                </div>
                <div class='col-12 text-left mt-2 mb-4'>
                    <span class='dashboardText__head'>{{cardblockitem.text}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['cardblockitem']
}
</script>