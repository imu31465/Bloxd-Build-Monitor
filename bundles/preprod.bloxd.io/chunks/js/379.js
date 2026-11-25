export const id = 379;
export const ids = [379];
export const modules = {
  61713: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      passPixelShaderWGSL: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "passPixelShader",
      TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);