export const id = 364;
export const ids = [364];
export const modules = {
  60953: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      passPixelShaderWGSL: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "passPixelShader",
      oQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    LQ.c.ShadersStoreWGSL[qQ] || (LQ.c.ShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);