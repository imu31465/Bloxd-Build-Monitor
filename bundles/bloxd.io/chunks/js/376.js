export const id = 376;
export const ids = [376];
export const modules = {
  61559: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      passPixelShader: () => Sp
    });
    var Op = cp(40062);
    const op = "passPixelShader",
      Ip = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);