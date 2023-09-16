import { Category } from "./Category"
import { omit } from "lodash";

describe("Category Entity unit test", () => {
    it ("Should test a creation of a category by name", () => {
        const sut = new Category({ name: 'Movie' });
        const props = omit(sut.categoryProps, 'created_at');
        
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true,    
        });
    });
});

/**
 * 
 * toMatchObject() - compara o objeto de forma parcial
 * toStrictEqual() - garante igualdade
 * 
 */