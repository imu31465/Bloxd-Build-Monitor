export const id = 685;
export const ids = [685];
export const modules = {
  64295: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      lod3DPixelShaderWGSL: () => ZR
    });
    var yR = GR(41387);
    const tR = "lod3DPixelShader",
      uR = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    yR.b.ShadersStoreWGSL[tR] || (yR.b.ShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);