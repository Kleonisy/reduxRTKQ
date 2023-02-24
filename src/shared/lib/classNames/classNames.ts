type TMods = Record<string, boolean | string>

export function classNames(cls: string, mods: TMods = {}, additional: string[] = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean)
  ].join(' ')
}
