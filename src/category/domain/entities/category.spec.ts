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

    it ("Should test the creation of category with all informations", () =>{
        const sut = makeSut();
        sut.categoryProps.description = "Some description";
        sut.categoryProps.is_active = false;
        let created_at = sut.categoryProps.created_at;

        const category = {
            name: "Movie",
            description: "Some description",
            is_active: false,
            created_at,
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
            is_active: true,
        };

        expect(sut.categoryProps).toMatchObject(categoryStatus);
    });

    it ("Should test date to create category", () => {
        const sut = makeSut();
        const created_at = sut.categoryProps.created_at = new Date();
        const categoryDate = {
            name: "Movie",
            created_at,
        };

        expect(sut.categoryProps).toMatchObject(categoryDate);
    });

    it ("Should test if created_at is an instanceof Date", () => {
        const sut = makeSut();
        const created_at = sut.categoryProps.created_at;
        
        expect(created_at).toBeInstanceOf(Date);
    });
});

describe("Test of getters and setters of category", () => {
    it ("Should test getter of name", () => {
        const sut = makeSut();

        expect(sut.name).toBe("Movie");
    });

    it ("Should test getter of description", () => {
        const sut = makeSut();
        sut.categoryProps.description = "Some description";

        expect(sut.description).toBe("Some description");
    });

    it ("Should test getter of description return null if non value is defined", () => {
        const sut = makeSut();
        
        expect(sut.description).toBeNull();
    }); 

    it ("Should test setter of description", () => {
        const sut = makeSut();
        sut['description'] = "Other description";

        expect(sut.description).toBe("Other description");
    }); 

    it ("Should test setter of description return null if a value is undefined", () => {
        const sut = makeSut();
        sut['description'] = undefined;

        expect(sut.description).toBeNull();
    });

    it ("Should test getter of is_active", () => {
        const sut = makeSut();
        sut.categoryProps.is_active

        expect(sut.is_active).toBeTruthy();
    });

    it ("Should test setter of is_active", () => {
        const sut = makeSut();
        sut['is_active'] = false;

        expect(sut.is_active).toBeFalsy();
    }); 
});

/**
 * 
 * toMatchObject() - compara o objeto de forma parcial
 * toStrictEqual() - garante igualdade
 * 
 */