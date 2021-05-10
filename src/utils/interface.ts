export interface Shape {
    id: number
    shape: string
    dimension: {
        a: number
        b: number
        c?: number
    } | number
    area: string
    createdAt: Date
}