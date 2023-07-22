import { Quiz } from "@/types/types";

export const questions:Quiz[] = [
     {
          id: 1,
          theme: 'Cozinha',
          question: 'Qual o tempero mais usado no mundo?',
          options: [
               'Coentro', 
               'Katchup',
               'Mostarda',
               'Sal',
               'Paprica'
          ],
          answers: 3
     },
     {
          id: 2,
          theme: 'Invenções',
          question: 'De onde é a invenção do chuveiro elétrico?',
          options: [
               'Brasil', 
               'França',
               'Austrália',
               'Itália',
               'Inglaterra'
          ],
          answers: 0
     }
]