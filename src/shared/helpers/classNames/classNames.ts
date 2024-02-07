type Mods = Record<string, boolean>

// Custom classNames() for init css classes in components.
// May be changed by default react method.
export function classNames (
    cls: unknown,
    mods: Mods = {},
    additional?: Array<string | undefined>): string {
    return [
        cls,
        ...(additional === undefined ? [] : additional.filter(Boolean)),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}
