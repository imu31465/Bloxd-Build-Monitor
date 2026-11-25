export const id = 380;
export const ids = [380];
export const modules = {
  61717: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      passPixelShader: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "passPixelShader",
      TQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);