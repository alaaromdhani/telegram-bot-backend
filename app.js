const express = require('express')
const bodyParser = require("body-parser");
const crypto = require('crypto')
const cors = require("cors"); // Import cors middleware
const app = express()
function verifyInitData(initData){
  const BOT_TOKEN = "7754447783:AAFhm_zSMKD3p6wqVtIMRARN3zJjQOpWgGY"
  const initData = new URLSearchParams(telegramInitData)
  const hash = initData.get('hash')
  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest()
  const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex')
  return calculatedHash === hash;
}

const port = 80
app.use(cors({
    origin:'https://telegram-bot-front-five.vercel.app'
}));
app.get('/', (req, res) => {
  res.send({
    response:'ok'
  })
})
app.post('/authenticate',(req,res)=>{
  try{
    const {initData} = req.body
  const test = verifyInitData(initData)
  if(test){
    res.status(200).send({
      success:true,
      message:"client aithenticated successfully"
    })

  }
  else{
    res.status(401).send({
      success:false,
      error:'bad token'
    })
  }
  }catch(e){

    res.status(401).send({
      success:false,
      error:e.getMassage()
    })

  }

})



// Middleware to handle JSON requests
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})