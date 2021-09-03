import express from 'express';
import {PythonShell} from 'python-shell';

const app = express();
const port = 3000;
app.use(express.json());

let options = {
  pythonOptions: ['-u'],
  args: ['-a value1', '-b value2']
};

app.get('/', (req, res) => {
 PythonShell.run('D:/Josue/Documents/Landivar/DECIMO SEMESTRE/PROYECTOS/PruebasPY/src/example.py', options,
    function (err, result) {
      if (err)
        throw res.send(err);
      console.log('resultado: %j', result);
      res.send('sucess');
    }
  )
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});