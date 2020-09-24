type InferableFunction = (...args: any[]) => any;

export function skipFirst<T extends InferableFunction>(wrappedFunction: T) {
  let fn: InferableFunction = () => {
    fn = wrappedFunction;
  };

  return (...params: Parameters<T>): ReturnType<T> => fn(...params);
}
