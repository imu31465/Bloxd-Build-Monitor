export const id = 679;
export const ids = [679];
export const modules = {
  64004: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      passPixelShaderWGSL: () => Ke
    });
    var ye = He(40954);
    const be = "passPixelShader",
      Me = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);