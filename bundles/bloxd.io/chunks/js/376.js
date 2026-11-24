export const id = 376;
export const ids = [376];
export const modules = {
  61603: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      passPixelShader: () => IB
    });
    var QB = zB(39932);
    const nB = "passPixelShader",
      dB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    QB.e.ShadersStore[nB] || (QB.e.ShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);