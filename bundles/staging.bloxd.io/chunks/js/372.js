export const id = 372;
export const ids = [372];
export const modules = {
  61445: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      passPixelShader: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "passPixelShader",
      ik = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Xk.b.ShadersStore[Tk] || (Xk.b.ShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);