export const id = 680;
export const ids = [680];
export const modules = {
  64476: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      passPixelShader: () => yV
    });
    var JV = xV(41108);
    const YV = "passPixelShader",
      UV = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    JV.d.ShadersStore[YV] || (JV.d.ShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);