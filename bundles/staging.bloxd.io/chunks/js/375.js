export const id = 375;
export const ids = [375];
export const modules = {
  61477: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      passPixelShaderWGSL: () => GB
    });
    var TB = ZB(39905);
    const JB = "passPixelShader",
      oB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    TB.c.ShadersStoreWGSL[JB] || (TB.c.ShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);