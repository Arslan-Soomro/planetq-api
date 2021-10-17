const express = require('express');
const app = express();
const cors = require('cors');
const admin = require('firebase-admin');

//Register This App To Firebase
let serviceAccount = require("D:/Projects/planetq-api/planetq-api-firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://planetq-api-default-rtdb.firebaseio.com"
});

const PORT = process.env.PORT || 5000;

app.use(cors({origin: true}));
app.use(express.json());
app.use('/audios', require('./routes/audios'));

app.get('/', (req, res) => {
    res.send('You Have Reached Planet-Q API, Hit Audios With Get To Fetch All Audios');
})

app.listen(PORT, () => {
    console.log(`Listening On Port ${PORT}...`);
})