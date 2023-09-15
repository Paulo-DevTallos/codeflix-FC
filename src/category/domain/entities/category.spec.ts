import { Category } from "./Category"

describe("Category Entity unit test", () => {
    it ("Should test constructor of category", () => {
        const category = new Category("Movie")

        expect(category.name).toBe("Movie");
    })
})