export class ProductUpdateRequest {
        id: number | null;
        idsupplier: number | null;
        name: string | null;
        value: number | null;
        status: boolean | null;
        quantity: number | null;
        updatedat: Date | null;
        createdat: Date | null;
        deletedat: Date | null;
    
        constructor(params: Partial<ProductUpdateRequest>) {
            this.id = params.id || null;
            this.idsupplier = params.idsupplier || 1;
            this.name = params.name || null;
            this.value = params.value || 1;
            this.status = params.status || false;
            this.quantity = params.quantity || 1;
            this.updatedat = new Date();
            this.createdat = params.createdat || null;
            this.deletedat = params.deletedat || null;
        }

    
}
