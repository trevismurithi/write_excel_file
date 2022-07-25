const express = require('express')
const bodyParser = require('body-parser');
const writeXlsxFile = require('write-excel-file/node')
const data = require('./helper')
const app  = express()

app.use(bodyParser.json());

const PORT = 3000

app.get('/', (req, res)=> {
    res.send("Hello world")
})

const write = async() => {
    try {
        await writeXlsxFile(data, {
            filePath: './mambaru.xlsx'
        })
        return "success"
    } catch (error) {
        return error
    }
}

app.post('/', (req,res)=>{
    let writeResponse
    (async ()=>{
        writeResponse = await write()
        res.json({ write: writeResponse })
    })()
})

app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
})
