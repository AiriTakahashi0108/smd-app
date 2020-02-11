const LESSONS = {
  lessonsList: [{
    area: '西川口',
    studio: 'Ast',
    start: 202002111430,
    end: 202002111430,
    instructor: '1',
    student: '2'
  },
  {
    area: '西川口',
    studio: 'Bst',
    start: 202002131430,
    end: 202002131430,
    instructor: '2',
    student: '3'
  }],
  register: {
    area: ['西川口', '朝霞'],
    studio: ['Ast', 'Bst'],
    start: 202002111430,
    end: 202002111430,
    instructor: '',
    student: '',
  },
}

export const state = () => ({
  lessonsList: LESSONS.lessonsList,
  register: LESSONS.register,
})

export const getters = {
  lessonsList: (state) => state.lessonsList,
  register: (state) => state.register,
}
