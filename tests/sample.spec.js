const {test,expect} = require('@playwright/test')

test("My 1st test",async function({page})
{
    expect(12).toBe(12)
})

test.skip("My 2nde test", async function({page})
{
    expect(100).toBe(110)
})
test("My 3rd test",async function({page})
{
    expect("Nafisa Tonni").toContain("Nafisa")
})

// npx playwright test ./tests/sample.spec.js --headed

//ru