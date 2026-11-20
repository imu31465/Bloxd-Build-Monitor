export const id = 363;
export const ids = [363];
export const modules = {
  60875: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      passPixelShaderWGSL: () => Tb
    });
    var kb = sb(39267);
    const Wb = "passPixelShader",
      ab = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    kb.d.ShadersStoreWGSL[Wb] || (kb.d.ShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);