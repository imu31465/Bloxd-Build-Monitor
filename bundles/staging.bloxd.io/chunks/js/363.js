export const id = 363;
export const ids = [363];
export const modules = {
  60668: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      passPixelShaderWGSL: () => fD
    });
    var ID = cD(39003);
    const pD = "passPixelShader",
      iD = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    ID.e.ShadersStoreWGSL[pD] || (ID.e.ShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);