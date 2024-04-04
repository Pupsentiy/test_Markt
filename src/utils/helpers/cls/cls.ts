type Mods = Record<string, boolean>;
type BaseClasses = Array<string | undefined> | string[];

export const cls = (baseClasses: BaseClasses, mods: Mods = {}): string => {
  return [...Object.keys(mods).filter(key => mods[key]), ...baseClasses.filter(Boolean)].join(' ');
};
