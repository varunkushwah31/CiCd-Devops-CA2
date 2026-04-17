const r = require("supertest")
const e = require("./index")

// The timeout is passed as the third argument to the test() function
test("health", async () => {
    try {
        const res = await r(e).get("/health")
        expect(res.text).toBe("Everything is OK!!!!")
    } catch (error) {
        // Log the error so you can see what went wrong in your GitHub Actions console
        console.error("Health check test failed:", error)

        // CRITICAL: You must re-throw the error.
        // If you don't, Jest will assume the test passed because the error was "handled".
        throw error
    }
}, 500) // 500ms timeout