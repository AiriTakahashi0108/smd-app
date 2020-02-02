export const state = () => ({
    cleateClient: {
      id: '',
      firstName: '',
      lastName: '',
      firstNameReading: '',
      lastNameReading: '',
      mail: '',
      tel_1: '',
      tel_2: '',
      address: '',
      payment: false,
      paymentRegister: false,
      lessonReservation: {
      },
      remarks: ``
    },
    clientList: [
      {
        id: '000',
        firstName: '髙橋',
        lastName: '愛理',
        firstNameReading: 'タカハシ',
        lastNameReading: 'アイリ',
        mail: 'aaa@yahoo',
        tel_1: '08009090909',
        tel_2: '0900000',
        address: '東京都新宿区',
        payment: true,
        paymentRegister: '振込',
        lessonReservation: [
          '2020年1月31日18時30分〜1h'
        ],
        remarks: ``
      },
      {
        id: '001',
        firstName: '髙橋',
        lastName: '愛理',
        firstNameReading: 'タカハシ',
        lastNameReading: 'アイリ',
        mail: 'aaa@yahoo',
        tel_1: '08009090909',
        tel_2: null,
        address: '埼玉県川口市',
        payment: false,
        paymentRegister: 'カード',
        lessonReservation: [
          '2020年1月31日18時30分〜1h',
          '2020年2月31日18時30分〜1h'
        ],
        remarks: ``
      },
      {
        id: '002',
        firstName: '水野',
        lastName: '愛理',
        firstNameReading: 'タカハシ',
        lastNameReading: 'アイリ',
        mail: 'aaa@yahoo',
        tel_1: '08009090909',
        tel_2: '',
        address: '埼玉県川口市',
        payment: false,
        paymentRegister: 'カード',
        lessonReservation: [

        ],
        remarks: ``
      }
    ]
})
// export const state = () => {
//   return ({
//     cleateClient: {
//       name: '',
//       tel: '',
//       add: ''
//     },
//     clientList: [
//       {
//         id: 000,
//         firstName: '髙橋',
//         readingFirstName: 'タカハシ',
//         lastName: '愛理',
//         leadingLastName: 'アイリ',
//         tel_1: 08009090909,
//         tel_2: null,
//         address: null
//       }
//     ]
//   });
// }
// methods: {
  //   createClients() {
  //     axios.post(
  //       'https://smd-app-1fd0f.firebaseio.com/clients',
  //       {
  //        fields: {
  //          name: {
  //            stringValue: this.cleateClient.name
  //          },
  //          add: {
  //            stringValue: this.cleateClient.add
  //          },
  //          tel: {
  //            number: this.cleateClient.tel
  //          }
  //        }
  //       }
  //     )
  //   }
  // }

