import { Category } from "./Category"
import { omit } from "lodash";

describe("Category Entity constructor unit test", () => {
    it ("Should test strict equality props to create a category", () => {
        const sut = new Category({
            name: "Movie",
            description: "Some description",
            is_active: true
        });
        let created_at = new Date();
        
        expect(sut.categoryProps).toStrictEqual({
            name: "Movie",
            description: "Some description",
            is_active: true,
            created_at,
        });

        expect(sut.categoryProps).not.toStrictEqual({
            name: "Movie",
            description: "Other description",
            is_active: false,
            created_at,
        });
    });
    
    it ("Should test a creation of a category by name", () => {
        const sut = new Category({ name: 'Movie' });
        const props = omit(sut.categoryProps, 'created_at');
        
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true,    
        });
    });

    it ("Should test if created_at is an instanceof Date", () => {
        const sut = new Category({ name: 'Movie' });
        const created_at = sut.categoryProps.created_at;
        
        expect(created_at).toBeInstanceOf(Date);
    });

    it ("Should test if created_at is an instanceof Date", () => {
        const sut = new Category({ name: 'Movie' });
        const created_at = sut.categoryProps.created_at;
        
        expect(created_at).toBeInstanceOf(Date);
    });
});

/**
 * 
 * toMatchObject() - compara o objeto de forma parcial
 * toStrictEqual() - garante igualdade
 * 
 */