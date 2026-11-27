export const id = 689;
export const ids = [689];
export const modules = {
  64320: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      passPixelShader: () => ZR
    });
    var yR = GR(41387);
    const tR = "passPixelShader",
      uR = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    yR.b.ShadersStore[tR] || (yR.b.ShadersStore[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);