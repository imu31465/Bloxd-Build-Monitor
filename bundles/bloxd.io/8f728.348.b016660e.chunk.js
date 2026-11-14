export const id = 348;
export const ids = [348];
export const modules = {
  59357: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      passPixelShaderWGSL: () => uc
    });
    var Vc = nc(37923);
    const Ic = "passPixelShader",
      rB = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Vc.b.ShadersStoreWGSL[Ic] || (Vc.b.ShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);