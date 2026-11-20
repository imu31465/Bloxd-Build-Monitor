export const id = 364;
export const ids = [364];
export const modules = {
  60616: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      passPixelShader: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "passPixelShader",
      Xz = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);