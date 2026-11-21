export const id = 365;
export const ids = [365];
export const modules = {
  60956: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      passPixelShader: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "passPixelShader",
      oQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    LQ.c.ShadersStore[qQ] || (LQ.c.ShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);