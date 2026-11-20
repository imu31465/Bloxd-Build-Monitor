export const id = 363;
export const ids = [363];
export const modules = {
  61315: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      passPixelShaderWGSL: () => mu
    });
    var Eu = yu(39403);
    const Ku = "passPixelShader",
      Qu = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Eu.e.ShadersStoreWGSL[Ku] || (Eu.e.ShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);