export const id = 363;
export const ids = [363];
export const modules = {
  60564: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      passPixelShaderWGSL: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "passPixelShader",
      Tb = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Ab.d.ShadersStoreWGSL[Mb] || (Ab.d.ShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);