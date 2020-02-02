<template>
  <div class="indexWrapper">
    <ContentsHeader
      :headNaviLink="headNaviLink"
    />
    <ContentsContainer>
      <v-calendar
        is-expanded
        :from-date="new Date()"
        :attributes="attributes"
      />
    </ContentsContainer>
  </div>
</template>

<script>
  import ContentsHeader from '@/components/ContentsHeader'
  import ContentsContainer from '@/components/ContentsHeader'

  export default {
    data() {
      return {
        attributes: [
          {
            dot: {
              color: 'red',
              class: 'my-dot-class',
            },
            dates: [
              new Date(2018, 0, 1), // Jan 1st
              new Date(2018, 0, 10), // Jan 10th
              new Date(2018, 0, 22), // Jan 22nd
            ],
          },
          {
            dot: 'green',
            dates: [
              new Date(2018, 0, 4), // Jan 4th
              new Date(2018, 0, 10), // Jan 10th
              new Date(2018, 0, 15), // Jan 15th
            ],
          },
          {
            dot: 'purple',
            dates: [
              new Date(2018, 0, 12), // Jan 12th
              new Date(2018, 0, 26), // Jan 26th
              new Date(2018, 0, 15), // Jan 15th
            ],
          },
        ],
        attributes: [
          {
            dot: {
              color: 'red',
              class: 'my-dot-class',
            },
            dates: [
              new Date(2018, 0, 1), // Jan 1st
              new Date(2018, 0, 10), // Jan 10th
              new Date(2018, 0, 22), // Jan 22nd
            ],
          },
          {
            dot: 'green',
            dates: [
              new Date(2018, 0, 4), // Jan 4th
              new Date(2018, 0, 10), // Jan 10th
              new Date(2018, 0, 15), // Jan 15th
            ],
          },
          {
            dot: 'purple',
            dates: [
              new Date(2018, 0, 12), // Jan 12th
              new Date(2018, 0, 26), // Jan 26th
              new Date(2018, 0, 15), // Jan 15th
            ],
          },
        ],
        headNaviLink:[
          {
            name:'月間カレンダー',
            href:'/'
          },
          {
            name:'週間カレンダー',
            href:'/'
          }
        ]
      }
    },
    components:{
      ContentsHeader,
      ContentsContainer
    }
  }
</script>

<style lang="postcss" scoped>
</style>
