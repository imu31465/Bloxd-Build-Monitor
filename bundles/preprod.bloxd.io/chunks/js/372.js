export const id = 372;
export const ids = [372];
export const modules = {
  61109: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      passPixelShader: () => nC
    });
    var QC = ZC(39674);
    const wC = "passPixelShader",
      bC = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);