export const id = 352;
export const ids = [352];
export const modules = {
  60001: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      passPixelShader: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "passPixelShader",
      fy = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    Uy.e.ShadersStore[hy] || (Uy.e.ShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);