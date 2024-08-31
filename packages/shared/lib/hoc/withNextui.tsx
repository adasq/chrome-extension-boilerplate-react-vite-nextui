import type { ComponentType } from 'react';
import { NextUIProvider } from '@nextui-org/react';

export function withNextui<T extends Record<string, unknown>>(Component: ComponentType<T>) {
  return function WithSuspense(props: T) {
    return (
      <NextUIProvider>
        <Component {...props} />
      </NextUIProvider>
    );
  };
}
