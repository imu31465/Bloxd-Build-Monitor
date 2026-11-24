export const id = 371;
export const ids = [371];
export const modules = {
  61506: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      passPixelShaderWGSL: () => xS
    });
    var tS = gS(39899);
    const bS = "passPixelShader",
      XS = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    tS.c.ShadersStoreWGSL[bS] || (tS.c.ShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);