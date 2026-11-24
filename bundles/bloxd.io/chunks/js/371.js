export const id = 371;
export const ids = [371];
export const modules = {
  61208: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      passPixelShaderWGSL: () => rD
    });
    var pD = wD(39776);
    const sD = "passPixelShader",
      KD = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    pD.e.ShadersStoreWGSL[sD] || (pD.e.ShadersStoreWGSL[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);