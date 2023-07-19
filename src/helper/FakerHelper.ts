import { Client } from '@/types/types';
import { faker, fakerPT_BR } from '@faker-js/faker';

     /*
     function createRandomUser() {
          const sex = faker.person.sexType();
          const firstName = faker.person.firstName(sex);
          const lastName = faker.person.lastName();
          const email = faker.internet.email({ firstName, lastName });
          const state = fakerPT_BR.location.state()
          const city = fakerPT_BR.location.city()
        
          const randomUser = {
               _id: faker.string.uuid(),
            avatar: faker.image.avatar(),
            birthday: faker.date.anytime(),
            email,
            firstName,
            lastName,
            sex,
            state,
            city
          }
          
          return randomUser
        } 
        
        const user = createRandomUser();
        console.log(user);
        console.log(user.birthday.getDay(), user.firstName)
        console.log(user.birthday.getMonth(), user.firstName)
        console.log(user.birthday.getFullYear(),  user.firstName);
        */

        export const clients:Client[] = [];

        for (let index = 0; index < 10; index++) {
          const firstName = fakerPT_BR.person.firstName();
          const lastName = fakerPT_BR.person.lastName();
          const avatar = fakerPT_BR.image.url();
          const titleJob = fakerPT_BR.person.jobTitle();
          const email = fakerPT_BR.internet.email({ firstName, lastName });
          

          clients.push({firstName, lastName, avatar, titleJob, email});
          
        }

        export const photos:string[] =[]

        for (let index = 0; index < 9; index++) {
          const photo = fakerPT_BR.image.url();

          photos.push(photo);
          
        }


        

        