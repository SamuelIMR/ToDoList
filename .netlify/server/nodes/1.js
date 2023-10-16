

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.423b9f9e.js","_app/immutable/chunks/index.a4db7de3.js","_app/immutable/chunks/singletons.c3fa3d6e.js","_app/immutable/chunks/index.d1b907c2.js"];
export const stylesheets = [];
export const fonts = [];
