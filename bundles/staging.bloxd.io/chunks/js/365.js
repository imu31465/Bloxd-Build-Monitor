export const id = 365;
export const ids = [365];
export const modules = {
  60844: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      passPixelShader: () => OT
    });
    var lT = cT(39474);
    const MT = "passPixelShader",
      KT = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    lT.d.ShadersStore[MT] || (lT.d.ShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);