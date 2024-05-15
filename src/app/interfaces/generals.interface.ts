export interface EMPLOYEE {
    id: string;
    area: string;
    code_identification: string;
    country_employment: string;
    date_admission: string;
    email?: string;
    first_name: string;
    lastname: string;
    other_names: string;
    second_lastname: string;
    state?: string;
    type_identification: string;
}

export interface RESPONSE_SEARCH_PRODUCT_BY_ID {
    status: boolean;
    employees: {
        current_page: string,
        data: Array<EMPLOYEE>,
    };
}

export interface RESPONSE_PRODUCT_NOT_PAGINATION {
    status: boolean;
    employees: Array<EMPLOYEE>,
}