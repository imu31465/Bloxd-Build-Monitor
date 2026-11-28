export const id = 688;
export const ids = [688];
export const modules = {
  64579: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      lodPixelShaderWGSL: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "lodPixelShader",
      pb = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    eb.e.ShadersStoreWGSL[Hb] || (eb.e.ShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);