<template>
  <div class="indexWrapper">
<!--    ヘッダーいらなそうなので一旦コメントアウト-->
    <!--<ContentsHeader
      :headNaviLink="headNaviLink"
    />-->
    <ContentsContainer>
      <Calendar />
    </ContentsContainer>
  </div>
</template>

<script>
  import ContentsHeader from '@/components/ContentsHeader'
  import ContentsContainer from '@/components/ContentsContainer'
  import Calendar from '@/components/Calendar'


  export default {
    data() {
      return {
        // ヘッダー一旦コメントアウト
        // headNaviLink:[
        //   {
        //     name:'月間カレンダー',
        //     href:'/'
        //   },
        //   {
        //     name:'週間カレンダー',
        //     href:'/'
        //   }
        // ],
      }
    },
    components:{
      // ContentsHeader,
      ContentsContainer,
      Calendar
    }
  }
</script>

<style lang="postcss" scoped>
</style>
