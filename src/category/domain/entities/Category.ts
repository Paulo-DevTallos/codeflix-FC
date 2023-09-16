interface CategoryProps {
    name: string;
    description?: string;
    is_active?: boolean;
    created_at: Date;    
}
export class Category {
    constructor(public readonly categoryProps: CategoryProps) {}

    get name() {
        return this.categoryProps.name;
    }

    get description() {
        return this.categoryProps.description;
    }

    get is_active() {
        return this.categoryProps.is_active;
    }

    get created_at() {
        return this.categoryProps.created_at;
    }
}

// create
const category = new Category({ 
    name: 'Movie',
    description: 'Qualquer descrição',
    is_active: true,
    created_at: new Date() 
})



