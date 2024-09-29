const mongoose=require('mongoose');
const DB='mongodb+srv://neha:nSAlTNTVWme9s1QI@cluster0.mwiyepg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}).catch((err)=> console.log('no connection'));

