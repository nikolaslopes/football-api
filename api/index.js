const app = require("../src/index");

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`🔥 Server started at http://localhost:${PORT}`);
});
