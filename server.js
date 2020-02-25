const express = require('express')
const fs = require('fs')
const path  = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))



app.get('/notetaker', (req, res) => {
  res.sendFile(join(__dirname, 'public/notes.html'))
})

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
return app.get('api/notetaker',(req,res) =>{
  fs.readFile('./db/db.json','utf8',(e,data)=>{
    if(e){console.log(e)}
    const getNotes = JSON.parse(data)
    res.json(getNotes)
    console.log(getNotes)
   res.sendStatus(200)
  })
})
}

// A function for saving a note to the db
var saveNote = function(note) {
app.post('/notetaker',(req,res)=>{
  return fs.readFile('db.json','utf8',(e,data)=>{
      if(e){console.log(e)}
      const getNotes = JSON.parse(data)
      getNotes.push(req.body)
      fs.writeFile('db.json',JSON.stringify(getNotes),e=>{
        if(e){console.log(e)}
        res.sendStatus(200)
    })

  })
})
}

// A function for deleting a note from the db
var deleteNote = function(id) {
  return api.delete('/api/notetaker/:id','utf8',(e,data)=>{
    if(e){console.log(e)}

  
  })
}



 app.listen(process.env.PORT ||3000)
