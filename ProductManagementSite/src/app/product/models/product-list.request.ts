export class ProductListRequest{

    name: string | null;
    value: number | null;
    status: string | null;

    constructor(params: Partial<ProductListRequest>) {
        this.name = params.name || null;
        this.value = params.value || null;
        this.status = params.status || null;


    }
}
