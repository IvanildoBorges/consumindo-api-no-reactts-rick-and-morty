import React, { lazy } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazyWithDelay<T extends React.ComponentType<any>>(
    factory: () => Promise<{ default: T }>,
    delay = 1000 // delay em milissegundos
) {
    return lazy(() =>
        Promise.all([
            factory(),
            new Promise((resolve) => setTimeout(resolve, delay)),
        ]).then(([module]) => module)
    );
}
