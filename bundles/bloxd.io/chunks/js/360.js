export const id = 360;
export const ids = [360];
export const modules = {
  60851: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      lod3DPixelShaderWGSL: () => Tb
    });
    var kb = sb(39267);
    const Wb = "lod3DPixelShader",
      ab = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    kb.d.ShadersStoreWGSL[Wb] || (kb.d.ShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);