export const id = 371;
export const ids = [371];
export const modules = {
  61516: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      passPixelShaderWGSL: () => xm
    });
    var hm = fm(39960);
    const Am = "passPixelShader",
      am = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    hm.e.ShadersStoreWGSL[Am] || (hm.e.ShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);