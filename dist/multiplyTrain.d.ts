export declare function multiplyTrain<TIn, TOut>(input: TIn[], func: (item: TIn, index: number) => Promise<TOut[]>): Promise<TOut[]>;
