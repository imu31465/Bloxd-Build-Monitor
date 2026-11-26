export const id = 680;
export const ids = [680];
export const modules = {
  64302: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      passPixelShader: () => hH
    });
    var AH = LH(41138);
    const rH = "passPixelShader",
      SH = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);