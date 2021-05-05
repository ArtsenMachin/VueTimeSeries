<template>
    <div class='content_container'>
        <div class='row'>
            <div class='col-12 col-lg-2 col-xl-1 navbar text-center'>
                <Menu v-bind:items="menuItems"/>
            </div>
            <div class='col-12 col-lg-10 col-xl-11 text-center'>
                <div class='row ml-lg-5 ml-1 mr-1 ml-xl-4 mr-xl-2'>
                    <div class='col-12 mt-3 text-left'>
                        <span class='oglavlenie'>{{menuItems[0].title}}</span>
                    </div>
                    <div class='col-12 mt-3'>
                        <div class='row row-flex row-flex-wrap mb-3 text-center'>
                            <AvailCard  v-for="carditem of AvailCardItems" :key="carditem.id"
                                        v-bind:carditem="carditem"/>
                        </div>
                    </div>
                </div>
                <div class='row row-flex row-flex-wrap mt-3 ml-1 ml-xl-4'>
                    <CardBlock  v-for="cardblockitem of CardBlockItems" :key="cardblockitem.id"
                                v-bind:cardblockitem="cardblockitem"/>
                </div>     
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "@/components/Menu"
import AvailCard from "@/components/AvailCard"
import CardBlock from "@/components/CardBlock"
export default {
  name: 'Home',
  components: {
    Menu,
    AvailCard,
    CardBlock
  },
  data(){
      return{
          menuItems:[
              {id: 'menuItems1', icon: 'fa fa-home', title: 'Главная', active: true, to:'/'},
              {id: 'menuItems2', icon: 'fa fa-user-o', title: 'Мой профиль', active: false, to:'/profile'},
              {id: 'menuItems3', icon: 'fa fa-cloud', title: 'Онлайн расчет', active: false, to:'/onseries'},
              {id: 'menuItems4', icon: 'fa fa-cloud-upload', title: 'CSV расчет', active: false, to:'/csvseries'},
              {id: 'menuItems5', icon: 'fa fa-info', title: 'Как это работает?', active: false, to:'/about'}
          ],
          AvailCardItems:[
              {id:'AvailCardItems1', first: true, status:'Бесплатно', bigtext:'Online', icon: 'fa fa-cloud icon', text:'Ручной ввод', to:'/onseries'},
              {id:'AvailCardItems2', first: false, status:'Премиум', bigtext:'CSV', icon: 'fa fa-cloud-upload icon', text:'Загрузка файлов *.csv', to:'/csvseries'}
          ],
          CardBlockItems:[
              {id:'cardblock1', first: true, status:'Быстро!', text:'Благодаря уникальным алгоритмам обработки данных, вы увидите результат быстрее, чем скажите "Дарова карта"(Скорость отображения результата зависит от скорости вашего интернет соеде(и)нения(нужное выбрать))'},
              {id:'cardblock2', first: false, status:'Надёжно!', text:'Наш продукт использует современные технологии защиты информации, вы можете не переживать за сохранность своих личных данных'},
              {id:'cardblock3', first: false, status:'Качественно!', text:'Дизайн данного продукта был разработан в партнёрстве с Artsen Machini - известным итальянским дизайнером, автором приципа "Наплевать, сделаем статикой" и книги "Кто вообще данные в ПДФ догадался дать?'}
          ]
      }
  }
}
</script>