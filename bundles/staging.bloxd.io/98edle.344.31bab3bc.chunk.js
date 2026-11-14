export const id = 344;
export const ids = [344];
export const modules = {
  58871: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      passPixelShader: () => AW
    });
    var wW = MW(37441);
    const CW = "passPixelShader",
      zR = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    wW.c.ShadersStore[CW] || (wW.c.ShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);