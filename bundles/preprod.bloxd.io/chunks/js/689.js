export const id = 689;
export const ids = [689];
export const modules = {
  64588: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      passPixelShader: () => PW
    });
    var mW = OW(41392);
    const EW = "passPixelShader",
      NW = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);