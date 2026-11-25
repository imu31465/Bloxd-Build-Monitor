export const id = 679;
export const ids = [679];
export const modules = {
  64081: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      passPixelShaderWGSL: () => aM
    });
    var OM = iM(40964);
    const SM = "passPixelShader",
      jM = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);