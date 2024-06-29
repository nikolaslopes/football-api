const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

const baseURL = "https://api.football-data.org/v4";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/competitions", (req, res) => {
	const apiToken = req.headers["x-auth-token"];

	if (!apiToken) {
		return res.status(401).send({ error: "Token não fornecido" });
	}

	axios({
		method: "get",
		url: `${baseURL}/competitions`,
		headers: {
			"X-Auth-Token": apiToken,
		},
	})
		.then((response) => {
			res.send(response.data);
		})
		.catch((err) => {
			res.send(err);
		});
});

app.get("/competitions/:id/matches", (req, res) => {
	const { id } = req.params;

	const apiToken = req.headers["x-auth-token"];

	if (!apiToken) {
		return res.status(401).send({ error: "Token não fornecido" });
	}

	axios({
		method: "get",
		url: `${baseURL}/competitions/${id}/matches`,
		headers: {
			"X-Auth-Token": apiToken,
		},
	})
		.then((response) => {
			res.send(response.data);
		})
		.catch((err) => {
			res.send(err);
		});
});

const PORT = 8080;

module.exports = app.listen(PORT, () => {
	console.log(`🔥 Server started at http://localhost:${PORT}`);
});
