export interface NetStatusObject<T> {
    succ: boolean;
    msg: string;
    code: number;
    data: T;
}