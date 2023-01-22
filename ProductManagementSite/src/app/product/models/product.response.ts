export class ProductResponse {

    id: number | null;
    idsupplier: number | null;
    name: string | null;
    value: number | null;
    status: boolean | null;
    quantity: number | null;
    updatedat: Date | null;
    createdat: Date | null;
    deletedat: Date | null;

    constructor(params: Partial<ProductResponse>) {
        this.id = params.id || null;
        this.idsupplier = params.idsupplier || null;
        this.name = params.name || null;
        this.value = params.value || null;
        this.status = params.status || null;
        this.quantity = params.quantity || null;
        this.updatedat = params.updatedat || null;
        this.createdat = params.createdat || null;
        this.deletedat = params.deletedat || null;
    }
}
