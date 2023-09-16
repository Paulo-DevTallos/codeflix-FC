import { Category } from "./Category"

describe("Category Entity unit test", () => {
    it ("Should test constructor of category", () => {
        const category = new Category({
            name: 'Movie',
            description: 'Qualquer descrição',
            is_active: true,
            created_at: new Date() 
        });

        expect(category.categoryProps.name).toBe("Movie");
    })
})