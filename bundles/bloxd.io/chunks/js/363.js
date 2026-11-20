export const id = 363;
export const ids = [363];
export const modules = {
  60887: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      lodPixelShaderWGSL: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "lodPixelShader",
      Gb = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Bb.e.ShadersStoreWGSL[Ob] || (Bb.e.ShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);