export const id = 364;
export const ids = [364];
export const modules = {
  60316: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      passPixelShader: () => WT
    });
    var iT = IT(38617);
    const zT = "passPixelShader",
      kT = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    iT.c.ShadersStore[zT] || (iT.c.ShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);