export const id = 365;
export const ids = [365];
export const modules = {
  61424: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      passPixelShader: () => mq
    });
    var Yq = gq(39617);
    const lq = "passPixelShader",
      Oq = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);