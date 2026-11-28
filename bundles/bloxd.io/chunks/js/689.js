export const id = 689;
export const ids = [689];
export const modules = {
  64582: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      passPixelShaderWGSL: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "passPixelShader",
      pb = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    eb.e.ShadersStoreWGSL[Hb] || (eb.e.ShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);