const {promisify} = require('util')
import {PythonShell} from 'python-shell'
let python_shell_run = promisify(PythonShell.run)

export function sentilize(sentence){
  return new Promise(
    (resolve, reject) => {
      let options = {
        scriptPath: 'E:\back\node_react\senti_api\src\vader.py',
        args: ['-s', '\"' + sentence + '\"']
      }

      python_shell_run('vader.py', options)
      .then(results => {
        let sentiment = results[0];
        let response = { sentiment: 'Neutral'}
        if (sentiment === 'neg'){
            response.sentiment = 'Negative'
        }
        else if (sentiment === 'pos'){
            response.sentiment = 'Positive'
        }
        resolve(resp);
      })
      .catch(error => {
        reject(error);
      })
    }
  )
}