const fs = require('fs');
const https = require('https')
var dt;
// const fl = fs.createWriteStream("C://Users//hydro//Downloads//readMp3//downloaded.png");
const fl = fs.createWriteStream("C://Users//hydro//Downloads//readMp3//downloaded.mp3");


https.get("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",(res)=>{
// https.get("https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",(res)=>{    
    res.pipe(fl);
})