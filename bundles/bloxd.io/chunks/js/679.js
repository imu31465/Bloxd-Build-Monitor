export const id = 679;
export const ids = [679];
export const modules = {
  64046: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      passPixelShaderWGSL: () => oB
    });
    var YB = GB(40864);
    const DB = "passPixelShader",
      QB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    YB.b.ShadersStoreWGSL[DB] || (YB.b.ShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);