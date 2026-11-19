export const id = 364;
export const ids = [364];
export const modules = {
  60596: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      passPixelShader: () => lz
    });
    var Ez = bz(39033);
    const nz = "passPixelShader",
      iz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);