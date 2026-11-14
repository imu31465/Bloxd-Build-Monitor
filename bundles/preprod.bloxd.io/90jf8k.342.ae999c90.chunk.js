export const id = 342;
export const ids = [342];
export const modules = {
  59184: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      lodPixelShaderWGSL: () => hF
    });
    var CF = SF(37824);
    const AF = "lodPixelShader",
      uF = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    CF.c.ShadersStoreWGSL[AF] || (CF.c.ShadersStoreWGSL[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);