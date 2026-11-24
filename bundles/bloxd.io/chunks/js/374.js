export const id = 374;
export const ids = [374];
export const modules = {
  61592: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      lodPixelShaderWGSL: () => IB
    });
    var QB = zB(39932);
    const nB = "lodPixelShader",
      dB = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    QB.e.ShadersStoreWGSL[nB] || (QB.e.ShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);