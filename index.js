const {PythonShell} = require('python-shell')

const options = {
  pythonPath: 'python',
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: './'
}

const get = new PythonShell('mail.py', options)
get.on('message',(message) => {
  processMail(message)
})

const processMail = (message) => {
  let emailstring = message
  emailjson = JSON.parse(emailstring)
}
