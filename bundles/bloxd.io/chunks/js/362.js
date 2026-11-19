export const id = 362;
export const ids = [362];
export const modules = {
  60661: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      lodPixelShaderWGSL: () => fD
    });
    var ID = cD(39003);
    const pD = "lodPixelShader",
      iD = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    ID.e.ShadersStoreWGSL[pD] || (ID.e.ShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);