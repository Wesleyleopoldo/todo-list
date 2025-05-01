const { initDb } = require("./resources/db");
const app = require("./app");

initDb()

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})