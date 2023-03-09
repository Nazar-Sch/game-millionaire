export interface IQuestion {
    id: number
    question: string
    reward: number
    answers: IAnswer[]
  }
  
  export interface IAnswer {
    text: string
    correct: boolean
  }
  

  export type TClassNames = '' | 'selected' | 'correct' | 'wrong';
