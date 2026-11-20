export const id = 364;
export const ids = [364];
export const modules = {
  61421: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      passPixelShaderWGSL: () => mq
    });
    var Yq = gq(39617);
    const lq = "passPixelShader",
      Oq = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Yq.d.ShadersStoreWGSL[lq] || (Yq.d.ShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);