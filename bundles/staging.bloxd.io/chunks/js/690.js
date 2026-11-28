export const id = 690;
export const ids = [690];
export const modules = {
  64585: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      passPixelShader: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "passPixelShader",
      pb = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    eb.e.ShadersStore[Hb] || (eb.e.ShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);