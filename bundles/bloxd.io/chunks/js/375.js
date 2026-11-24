export const id = 375;
export const ids = [375];
export const modules = {
  61599: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      passPixelShaderWGSL: () => IB
    });
    var QB = zB(39932);
    const nB = "passPixelShader",
      dB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    QB.e.ShadersStoreWGSL[nB] || (QB.e.ShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);