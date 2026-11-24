export const id = 372;
export const ids = [372];
export const modules = {
  61215: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      passPixelShader: () => rD
    });
    var pD = wD(39776);
    const sD = "passPixelShader",
      KD = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);