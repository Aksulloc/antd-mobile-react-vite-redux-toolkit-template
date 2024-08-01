'use client';

import {
    Children,
    Fragment,
    cloneElement,
    forwardRef,
    isValidElement,
    useMemo,
} from 'react';

function getValidChildren(children: React.ReactNode) {
    return Children.toArray(children).filter((child) =>
        isValidElement(child)
    ) as React.ReactElement[];
}

//const cx = (...classNames: string[]) => classNames.filter(Boolean).join(' ');

export interface StackProps {
    direction: StackDirection;
    align?: any;
    justify?: any;
    gap?: string;
    wrap?: any;
    children?: React.ReactNode;
    separator?: any;
}

export type StackDirection =
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse';

interface Options {
    gap: string;
    direction: StackDirection;
}

export function mapResponsive(prop: any, mapper: (val: any) => any) {
    if (Array.isArray(prop)) {
        return prop.map((item) => (item === null ? null : mapper(item)));
    }
}

export function getSeparatorStyles(options: Options) {
    const { gap, direction } = options;

    const styles: Record<string, any> = {
        column: {
            marginY: gap,
            marginX: 0,
            borderInlineStartWidth: 0,
            borderTopWidth: '1px',
        },
        'column-reverse': {
            marginY: gap,
            marginX: 0,
            borderInlineStartWidth: 0,
            borderTopWidth: '1px',
        },
        row: {
            marginX: gap,
            marginY: 0,
            borderInlineStartWidth: '1px',
            borderTopWidth: 0,
        },
        'row-reverse': {
            marginX: gap,
            marginY: 0,
            borderInlineStartWidth: '1px',
            borderTopWidth: 0,
        },
    };

    return {
        '&': mapResponsive(direction, (value) => styles[value]),
    };
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
    props,
    ref
) {
    const {
        direction = 'column',
        align = 'center',
        justify,
        gap = '0.5rem',
        wrap,
        children,
        separator,
    } = props;

    const separatorStyle = useMemo(
        () => getSeparatorStyles({ gap, direction }),
        [gap, direction]
    );

    const clones = useMemo(() => {
        if (!separator) return children;
        return getValidChildren(children).map((child, index, arr) => {
            const key = typeof child.key !== 'undefined' ? child.key : index;
            const sep = cloneElement(separator, {
                css: [separatorStyle, separator.props.css],
            });
            return (
                <Fragment key={key}>
                    {child}
                    {index === arr.length - 1 ? null : sep}
                </Fragment>
            );
        });
    }, [children, separator, separatorStyle]);

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                alignItems: align,
                justifyContent: justify,
                flexDirection: direction,
                flexWrap: wrap,
                gap: separator ? undefined : gap,
            }}
        >
            {clones}
        </div>
    );
});
