import express from 'express';
import {PythonShell} from 'python-shell';

const app = express();
const port = 3000;
app.use(express.json());

let options = {
  pythonOptions: ['-u'],
  args: ['2020-08-05 05:10:25-07', '2021-08-05 05:12:25-07', '2']
};

app.get('/', (req, res) => {
  console.log('prueba api');
  
 PythonShell.run('/home/azureuser/virtualenv/infra-data/copiaRobot2.py', options,
    function (err, result) {
      if (err)
        return res.status(500).json({ err });
      
      return res.status(200).json({ result });            
    }
  )
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});