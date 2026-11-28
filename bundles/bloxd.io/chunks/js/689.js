export const id = 689;
export const ids = [689];
export const modules = {
  64939: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      passPixelShaderWGSL: () => Xd
    });
    var Wd = md(41785);
    const Fd = "passPixelShader",
      Rd = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Wd.e.ShadersStoreWGSL[Fd] || (Wd.e.ShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);