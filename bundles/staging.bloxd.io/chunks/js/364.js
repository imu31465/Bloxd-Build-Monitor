export const id = 364;
export const ids = [364];
export const modules = {
  60500: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      passPixelShader: () => RY
    });
    var FY = DY(38998);
    const AY = "passPixelShader",
      IY = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
    FY.b.ShadersStore[AY] || (FY.b.ShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);