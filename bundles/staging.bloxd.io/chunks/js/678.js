export const id = 678;
export const ids = [678];
export const modules = {
  64075: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      lodPixelShaderWGSL: () => aM
    });
    var OM = iM(40964);
    const SM = "lodPixelShader",
      jM = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    OM.e.ShadersStoreWGSL[SM] || (OM.e.ShadersStoreWGSL[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);