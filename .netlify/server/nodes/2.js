

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c145278d.js","_app/immutable/chunks/index.a4db7de3.js","_app/immutable/chunks/index.d1b907c2.js"];
export const stylesheets = [];
export const fonts = [];
