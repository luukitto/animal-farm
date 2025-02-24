export interface PaginatedMeta {
    total: number;
    page: number;
    limit: number;
    pages: number;
}

export interface PaginatedResponse<Animal> {
    items: Animal[];
    meta: PaginatedMeta;
}