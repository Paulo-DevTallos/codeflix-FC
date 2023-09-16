import { Category } from "./Category"

describe("Category Entity unit test", () => {
    it ("Should test constructor of category", () => {
        const created_at = new Date();
        const category = new Category({
            name: "Movie",
            description: "Some description",
            is_active: true,
            created_at,
        });

        expect(category.categoryProps).toStrictEqual({
            name: "Movie",
            description: "Some description",
            is_active: true,
            created_at,
        });
    });
});

/**
 * 
 * toMatchObject() - compara o objeto de forma parcial
 * toStrictEqual() - garante igualdade
 * 
 */