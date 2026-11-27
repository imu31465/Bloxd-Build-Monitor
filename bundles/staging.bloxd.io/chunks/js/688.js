export const id = 688;
export const ids = [688];
export const modules = {
  64317: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      passPixelShaderWGSL: () => ZR
    });
    var yR = GR(41387);
    const tR = "passPixelShader",
      uR = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    yR.b.ShadersStoreWGSL[tR] || (yR.b.ShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);