import express, {  Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import { db } from "../config/firebaseConfig";
import { doc, setDoc,getDoc } from "firebase/firestore";
import { isValidForm, } from "../services/validators";

const router = express.Router();

// Initialize middlewares
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// Serve index.html
router.get("/form", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.post("/submit", async (req: Request, res: Response) => {
    const { name, email, message, address } = req.body;
    

    const result = isValidForm(req)
    if (result === true){
        const docRef = doc(db, "forms", email);
        const docSnap = await getDoc(docRef);    
    if (docSnap.exists()) {
        // If the already submitted with the same email
        res.status(400).send({message: "Form already submitted for this email"});
        return;
    }
    try {

        await setDoc(doc(db, "forms", email), {
            name,
            email,
            message,
            address,
            timestamp: new Date().toISOString()
        });

        res.send({"success": "Submission successful"});
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send('Error submitting form');
    }}
    else{
        res.status(400).send({message:result});
    }
});

export default router;
