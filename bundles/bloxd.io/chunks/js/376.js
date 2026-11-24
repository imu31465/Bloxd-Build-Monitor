export const id = 376;
export const ids = [376];
export const modules = {
  61324: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      passPixelShader: () => gT
    });
    var WT = mT(39934);
    const zT = "passPixelShader",
      MT = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);