# Setup

- To start the project you have to fill a `.env` file following the `.env.example` template and it should be running just fine
- If you don't have any data in the database, you can just add it by with the prisma CLI (you can run it by using `yarn prisma studio` in the terminal)
- To migrate the tables in the `schema.prisma` run: 
```
yarn prisma migrate dev
```
 and name it whatever you want

___

That's it, folks! 😃😃😃