import express from "express"
import multer from "multer"
import cors from "cors"

const port = 3000
const app = express()
const upload = multer()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Multer Upload form data'))

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 20 }])
app.post('/profile', cpUpload, (req, res) => {
    const { name, email, country, bio } = req.body;
    const { avatar, gallery } = req.files;
    // console.log({ name, email, country, bio, avatar, gallery });
    const avatarURI =
        avatar ?
            bufferToURI(avatar[0].buffer, avatar[0].mimetype) : '';
    const galleryURIs =
        gallery ?
            Array.from(gallery).map((img) => bufferToURI(img.buffer, img.mimetype)) : [];
    res.send({ name, email, country, bio, avatarURI, galleryURIs });
})

function bufferToURI(bufferObject, mimetype) {
    //convert the buffer data into a Base64 encoded string
    const base64String = bufferObject.toString('base64');
    //Create a data URI (Uniform Resource Identifier) by combining a MIME type (e.g., 'image/png') and the Base64 string. 
    const dataURI = `data:${mimetype};base64,${base64String}`;
    return dataURI;
}

app.listen(port, () => {
    console.log(`Serer listening on port ${port} at ${'http://localhost:3000'}`)
})