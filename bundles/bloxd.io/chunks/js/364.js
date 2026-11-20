export const id = 364;
export const ids = [364];
export const modules = {
  60891: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      passPixelShaderWGSL: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "passPixelShader",
      Gb = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Bb.e.ShadersStoreWGSL[Ob] || (Bb.e.ShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);