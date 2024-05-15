

export const URLS = {
    main_employee: 'http://localhost/PRUEBAS_TRABAJO/apiGlobalTecnologiasAcademic/public/employee'
}

export const REGEXS_CODES = {
    // id: /^[*a-zA-ZÀ-ú0-9#,._@: ]{3,10}$/,
    name: /^[*A-Z ]{1,20}$/,
    // description: /^[*a-zA-ZÀ-ú0-9#,._@: ]{10,200}$/
}

export const ROUTES = {
    manageEmployee: 'manage-employee',
    employees: 'employees',
}

export const COLORS = {
    yellow_1: '#F5DF66',
    gray_1: '#EAECF2',
}

export const RANDOMS = {
    confirm: 'Confirmar',
}

export const MESSAGES = {
    deletingEmployee: 'Está seguro de que desea eliminar el empleado?',
    successSaveEmployee: 'El empleado se guardó de manera exitosa',
}

export const OPTIONS_AREA = [
    {
        value: 'Administración',
        key: 'administracion',
    },
    {
        value: 'Financiera',
        key: 'financiera',
    },
    {
        value: 'Compras',
        key: 'compras',
    },
    {
        value: 'Infraestructura',
        key: 'infraestructura',
    },
    {
        value: 'Operación',
        key: 'operacion',
    },
    {
        value: 'Talento humano',
        key: 'talento_humano',
    },
    {
        value: 'Servicios varios',
        key: 'servicios_varios',
    },
];

export const OPTIONS_COUNTRY_EMPLOYEERS = [
    {
        value: 'Colombia',
        key: 'COL',
    },
    {
        value: 'Estados unidos',
        key: 'EEUU',
    },
];

export const OPTIONS_TYPE_IDENTIFICATION = [
    {
        value: 'Cédula de ciudadanía',
        key: 'cedula_ciudadania',
    },
    {
        value: 'Cedula de extranjería',
        key: 'cedula_extranjeria',
    },
    {
        value: 'Pasaporte',
        key: 'pasaporte',
    },
    {
        value: 'Permiso especial',
        key: 'permiso_especial',
    },
];

export const OPTIONS_FILTER = [
    {
        value: 'lastname',
        key: 'lastname',
    },
    {
        value: 'second_lastname',
        key: 'second_lastname',
    },
    {
        value: 'first_name',
        key: 'first_name',
    },
    {
        value: 'other_names',
        key: 'other_names',
    },
    {
        value: 'country_employment',
        key: 'country_employment',
    },
    {
        value: 'code_identification',
        key: 'code_identification',
    },
    {
        value: 'email',
        key: 'email',
    },
    {
        value: 'area',
        key: 'area',
    },
];