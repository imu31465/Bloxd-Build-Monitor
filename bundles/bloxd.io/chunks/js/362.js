export const id = 362;
export const ids = [362];
export const modules = {
  60867: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      lodPixelShaderWGSL: () => Tb
    });
    var kb = sb(39267);
    const Wb = "lodPixelShader",
      ab = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    kb.d.ShadersStoreWGSL[Wb] || (kb.d.ShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);