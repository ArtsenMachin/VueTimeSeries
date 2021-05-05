<template>
<div class='row'>
    <div class='col-12 text-right'>
        <div id="burger" class='mr-4'
            :class="{ 'active' : isOpen }"
            @click.prevent="toggle">
            <slot>
            <button type="button" class="burger-button" title="Menu">
                <span class="hidden">Toggle menu</span>
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
            </slot>
        </div>
    </div>
    <transition name="fade">
        <div class='col-12 text-center' v-if="isOpen">
            <div class='row'>
                <MenuItem
                    v-for="item of items" :key="item.id"
                    v-bind:item="item"/>
            </div>   
        </div>
    </transition>    
</div>      
</template>

<script>
import MenuItem from "@/components/menuItem"
export default {
    props:['items'],
    components: {
        MenuItem
    },
    data() {
        return {
            isOpen: false      
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter, .fade-enter-to{
  opacity: 1;
}

.hidden {
  visibility: hidden;
}

button {
    cursor: pointer;
}

/* remove blue outline */
button:focus {
    outline: 0;
}

.burger-button {
    position: relative;
    width: 32px;
    z-index: 60;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar {
    background-color: #003566;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
}

.burger-bar--3 {
    transform: translateY(6px);
}

#burger.active .burger-button {
    transform: rotate(-180deg);
}

#burger.active .burger-bar--1 {
    transform: rotate(45deg)
}

#burger.active .burger-bar--2 {
    opacity: 0;
}

#burger.active .burger-bar--3 {
    transform: rotate(-45deg)
}
</style>>
