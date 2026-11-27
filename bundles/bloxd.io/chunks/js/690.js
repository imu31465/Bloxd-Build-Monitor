export const id = 690;
export const ids = [690];
export const modules = {
  64796: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      passPixelShader: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "passPixelShader",
      ar = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Zr.e.ShadersStore[Wr] || (Zr.e.ShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);