import { v4 as uuidv4 } from "uuid";

export interface CategoryProps {
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;    
}
export class Category {
    public readonly id: string;
    constructor(public readonly categoryProps: CategoryProps, id?: string) {
        /** tratando logica das props opcionais */
        this.id = id || uuidv4(); 
        this.description = this.categoryProps.description;
        this.is_active = this.categoryProps.is_active;
        this.categoryProps.created_at = this.categoryProps.created_at ?? new Date();
    }

    get name() {
        return this.categoryProps.name;
    }

    get description() {
        return this.categoryProps.description;
    }

    private set description(value: string) {
        this.categoryProps.description = value ?? null;
    }

    get is_active() {
        return this.categoryProps.is_active;
    }

    private set is_active(value: boolean) {
        this.categoryProps.is_active = value ?? true;
    }

    get created_at() {
        return this.categoryProps.created_at;
    }
}
