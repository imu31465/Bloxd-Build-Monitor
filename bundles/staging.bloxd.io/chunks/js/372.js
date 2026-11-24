export const id = 372;
export const ids = [372];
export const modules = {
  61295: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      lod3DPixelShaderWGSL: () => gT
    });
    var WT = mT(39934);
    const zT = "lod3DPixelShader",
      MT = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    WT.d.ShadersStoreWGSL[zT] || (WT.d.ShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);