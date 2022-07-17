export interface DefineForm {
    [index: number]: {
        type?: string
        label?: string
        prop: string
        rules?: Object
    }
}