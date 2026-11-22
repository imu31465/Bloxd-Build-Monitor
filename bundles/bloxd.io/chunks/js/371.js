export const id = 371;
export const ids = [371];
export const modules = {
  60851: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      passPixelShader: () => bk
    });
    var Dk = ik(39412);
    const fk = "passPixelShader",
      Sk = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Dk.d.ShadersStore[fk] || (Dk.d.ShadersStore[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);