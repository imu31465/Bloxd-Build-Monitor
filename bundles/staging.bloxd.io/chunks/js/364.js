export const id = 364;
export const ids = [364];
export const modules = {
  61174: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      passPixelShaderWGSL: () => Pd
    });
    var pd = kd(39829);
    const Nd = "passPixelShader",
      Wd = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    pd.c.ShadersStoreWGSL[Nd] || (pd.c.ShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);