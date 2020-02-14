const STUDENTS = {
  studentsList: {
    S1: {
      firstName: '髙橋',
      lastName: '愛理',
      firstNameReading: 'タカハシ',
      lastNameReading: 'アイリ',
      defaultArea: '西川口',
      mail_1: 'aaa@yahoo',
      mail_2: 'bbb@yahoo',
      tel_1: '08009090909',
      tel_2: '0900000',
      address: '東京都新宿区',
      payment: [],
      paymentRegister: '振込',
      lessonReservation: [
        '2020年1月31日18時30分〜1h'
      ],
      startDate: 202001,
      remarks: `今年いっぱいで退校`
    },
    S2: {
      firstName: '高橋',
      lastName: '秀実',
      firstNameReading: 'タカハシ',
      lastNameReading: 'ヒデミ',
      defaultArea: '西川口',
      mail_1: 'aaa@yahoo',
      mail_2: 'bbb@yahoo',
      tel_1: '08009090909',
      tel_2: null,
      address: '埼玉県川口市',
      payment: [3,4],
      paymentRegister: 'カード',
      lessonReservation: [
        '2020年1月31日18時30分〜1h',
        '2020年2月31日18時30分〜1h'
      ],
      startDate: 202003,
      remarks: undefined,
    },
    S3: {
      firstName: '水野',
      lastName: '由美',
      firstNameReading: 'ミズノ',
      lastNameReading: 'ユミ',
      defaultArea: '西川口',
      mail_1: 'aaa@yahoo',
      mail_2: undefined,
      tel_1: '08009090909',
      tel_2: undefined,
      address: '埼玉県川口市',
      payment: [],
      paymentRegister: 'カード',
      lessonReservation: [],
      startDate: 202003,
      remarks: undefined,
    },
  },
  register: {
    id: '',
    firstName: '',
    lastName: '',
    firstNameReading: '',
    lastNameReading: '',
    defaultArea: '西川口',
    mail_1: '',
    mail_2: undefined,
    tel_1: '',
    tel_2: undefined,
    address: '',
    payment: [],
    paymentRegister: false,
    lessonReservation: {},
    remarks: undefined,
  },
}

export const state = () => ({
  studentsList: STUDENTS.studentsList,
  register: STUDENTS.register,
})

export const getters = {
  studentsList: (state) => state.studentsList,
  register: (state) => state.register,
}




