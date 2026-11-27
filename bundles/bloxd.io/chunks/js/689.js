export const id = 689;
export const ids = [689];
export const modules = {
  64788: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      passPixelShaderWGSL: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "passPixelShader",
      ar = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    Zr.e.ShadersStoreWGSL[Wr] || (Zr.e.ShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);