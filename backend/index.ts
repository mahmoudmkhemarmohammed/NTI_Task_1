import express from 'express';
const app: express.Application = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World And Welecome in The Express Course')
})

app.listen(3000, () => {
  console.log(`App is listen on port 3000`);
})