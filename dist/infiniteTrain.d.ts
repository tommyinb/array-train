export declare function infiniteTrain<TIn, TOut>(input: TIn[], func: (item: TIn, level: number) => Promise<{
    output: TOut[];
    next: TIn[];
}>): Promise<TOut[]>;
