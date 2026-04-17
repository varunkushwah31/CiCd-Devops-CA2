const r = require("supertest")
const e = require("./index")

test("health",async()=>{
    const res = await r(e).get("/health")
    expect(res.text).toBe("OK")
})