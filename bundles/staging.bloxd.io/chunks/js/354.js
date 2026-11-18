export const id = 354;
export const ids = [354];
export const modules = {
  60010: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      passPixelShader: () => lB
    });
    var VB = dB(38595);
    const yB = "passPixelShader",
      pB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    VB.e.ShadersStore[yB] || (VB.e.ShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);