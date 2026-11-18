export const id = 352;
export const ids = [352];
export const modules = {
  59997: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      lodPixelShaderWGSL: () => lB
    });
    var VB = dB(38595);
    const yB = "lodPixelShader",
      pB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    VB.e.ShadersStoreWGSL[yB] || (VB.e.ShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);