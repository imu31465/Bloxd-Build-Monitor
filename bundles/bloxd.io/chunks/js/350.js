export const id = 350;
export const ids = [350];
export const modules = {
  59678: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      lod3DPixelShaderWGSL: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "lod3DPixelShader",
      eJ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    FJ.b.ShadersStoreWGSL[UJ] || (FJ.b.ShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);