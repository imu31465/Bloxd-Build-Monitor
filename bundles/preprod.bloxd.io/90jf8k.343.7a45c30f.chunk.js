export const id = 343;
export const ids = [343];
export const modules = {
  59188: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      passPixelShaderWGSL: () => hF
    });
    var CF = SF(37824);
    const AF = "passPixelShader",
      uF = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}";
    CF.c.ShadersStoreWGSL[AF] || (CF.c.ShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);