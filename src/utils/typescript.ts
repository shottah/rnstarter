/**
 * Utility type to extract external Props of a component (respecting defaultProps)
 * See https://github.com/Microsoft/TypeScript/issues/26704
 * Usage: ExtractProps<typeof SomeComponent>
 */
export type ExtractProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<T, React.ComponentProps<T>>;
