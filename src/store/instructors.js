const INSTRUCTORS = {
  instructorsList: {
    1: {
      firstName: '本山',
      lastName: 'ナオト',
      firstNameReading: 'モトヤマ',
      lastNameReading: 'ナオト',
      defaultArea: '西川口',
      mail: 'aaa@yahoo',
      tel_1: '08009090909',
      tel_2: '0900000',
      address: '東京都新宿区',
      lessonReservation: [
        '2020年1月31日18時30分〜1h'
      ],
      remarks: ``
    },
    2: {
      firstName: '永塚',
      lastName: '鉄',
      firstNameReading: 'ナガツカ',
      lastNameReading: 'テツ',
      defaultArea: '西川口',
      mail: 'aaa@yahoo',
      tel_1: '08009090909',
      tel_2: '0900000',
      address: '東京都新宿区',
      lessonReservation: [
        '2020年1月31日18時30分〜1h'
      ],
      remarks: ``
    },
  },
  register: {
    id: '',
    firstName: '',
    lastName: '',
    firstNameReading: '',
    lastNameReading: '',
    defaultArea: '西川口',
    mail: '',
    tel_1: '',
    tel_2: '',
    address: '',
    lessonReservation: {},
    remarks: ``
  },
}

export const state = () => ({
  instructorsList: INSTRUCTORS.instructorsList,
  register: INSTRUCTORS.register,
})

export const getters = {
  instructorsList: (state) => state.instructorsList,
  register: (state) => state.register,
}
