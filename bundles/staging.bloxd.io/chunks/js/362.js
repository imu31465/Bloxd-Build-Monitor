export const id = 362;
export const ids = [362];
export const modules = {
  60561: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      lodPixelShaderWGSL: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "lodPixelShader",
      Tb = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Ab.d.ShadersStoreWGSL[Mb] || (Ab.d.ShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);