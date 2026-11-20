export const id = 364;
export const ids = [364];
export const modules = {
  60817: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      passPixelShader: () => PU
    });
    var tU = gU(39225);
    const pU = "passPixelShader",
      EU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    tU.d.ShadersStore[pU] || (tU.d.ShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);