import { Category, CategoryProps } from "./Category"
import { omit } from "lodash";

const makeSut = () => {
    const sut = new Category({ name: "Movie" });
    return sut;
}

describe("Category Entity constructor unit test", () => {
    it ("Should test the creation of a category by name.", () => {
        const sut = makeSut();
        let props = omit(sut.categoryProps, 'created_at');
        const category: CategoryProps = {
            name: "Movie",
            description: null,
            is_active: true,
        };

        expect(props).toStrictEqual(category)
    });

    it ("Should test if created_at is an instanceof Date", () => {
        const sut = makeSut();
        const created_at = sut.categoryProps.created_at;
        
        expect(created_at).toBeInstanceOf(Date);
    });

    it ("Should test the creation of category with all informations", () =>{
        const sut = makeSut();
        sut.categoryProps.description = "Some description";
        sut.categoryProps.is_active = false;
        let created_at = sut.categoryProps.created_at;

        const category = {
            name: "Movie",
            description: "Some description",
            is_active: false,
            created_at
        };

        expect(sut.categoryProps).toStrictEqual(category);
    });

    it ("Should test category description", () =>{
        const sut = makeSut();
        sut.categoryProps.description = "Some description";
        const categoryDescription = {
            name: "Movie",
            description: "Some description",
        };

        expect(sut.categoryProps).toMatchObject(categoryDescription);
    });

    it ("Should test category status", () =>{
        const sut = makeSut();
        sut.categoryProps.is_active = true;
        const categoryStatus = {
            name: "Movie",
            is_active: true
        };

        expect(sut.categoryProps).toMatchObject(categoryStatus);
    });
});

/**
 * 
 * toMatchObject() - compara o objeto de forma parcial
 * toStrictEqual() - garante igualdade
 * 
 */