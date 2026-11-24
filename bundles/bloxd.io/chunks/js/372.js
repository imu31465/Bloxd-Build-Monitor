export const id = 372;
export const ids = [372];
export const modules = {
  61521: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      passPixelShader: () => xm
    });
    var hm = fm(39960);
    const Am = "passPixelShader",
      am = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    hm.e.ShadersStore[Am] || (hm.e.ShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);