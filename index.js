const e = require("express")
const a = e()

a.get("/health", (r, s) => s.send("Everything is OK!!!!"))

if (require.main === module) {
    a.listen(3000, () => console.log("running the code..."))
}

module.exports = a