<template>
    <div class='content_container'>
        <div class='row'>
            <div class='col-12 col-lg-2 col-xl-1 navbar text-center'>
                <Menu v-bind:items="menuItems"/>
            </div>
            <div class='col-12 col-lg-10 col-xl-11 text-center'>
                <div class='row ml-lg-5 ml-1 mr-1 ml-xl-4 mr-xl-2'>
                    <div class='col-12 mt-3 text-left'>
                        <span class='oglavlenie'>{{menuItems[1].title}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
  name: 'Profile',
  components: {
    Menu
  },
  data(){
      return{
          menuItems:[
              {id: 'menuItems1', icon: 'fa fa-home', title: 'Главная', active: false, to:'/'},
              {id: 'menuItems2', icon: 'fa fa-user-o', title: 'Мой профиль', active: true, to:'/profile'},
              {id: 'menuItems3', icon: 'fa fa-cloud', title: 'Онлайн расчет', active: false, to:'/onseries'},
              {id: 'menuItems4', icon: 'fa fa-cloud-upload', title: 'CSV расчет', active: false, to:'/csvseries'},
              {id: 'menuItems5', icon: 'fa fa-info', title: 'Как это работает?', active: false, to:'/about'}
          ]
      }
  }
}
</script>