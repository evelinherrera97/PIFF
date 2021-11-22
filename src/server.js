const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/piff'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/piff/index.html'));
});

app.listen(process.env.PORT || 8080);