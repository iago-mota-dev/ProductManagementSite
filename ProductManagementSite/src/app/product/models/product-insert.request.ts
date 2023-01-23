export class ProductInsertRequest {
    idsupplier: number | null;
    name: string | null;
    value: number | null;
    status: boolean | null;
    quantity: number | null;
    updatedat: Date | null;
    createdat: Date | null;
    deletedat: Date | null;

    constructor(params: Partial<ProductInsertRequest>) {
        this.idsupplier = params.idsupplier || 1;
        this.name = params.name || null;
        this.value = params.value || 1;
        this.status = params.status || false;
        this.quantity = params.quantity || 1;
        this.updatedat = params.updatedat || null;
        this.createdat = new Date();
        this.deletedat = params.deletedat || null;
    }
}
