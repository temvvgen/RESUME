import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	try {
		res.status(200).json({ message: "hello world" });
	} catch (error) {
		res.status(500).json(error);
	}
});

app.listen(3002, () => {
	console.log(`server aslaa`);
});
