export declare function train<TIn, TOut>(input: TIn[], func: (item: TIn) => Promise<TOut>): Promise<TOut[]>;
