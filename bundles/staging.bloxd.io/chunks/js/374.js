export const id = 374;
export const ids = [374];
export const modules = {
  61997: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      lodPixelShaderWGSL: () => yG
    });
    var wG = ZG(40237);
    const SG = "lodPixelShader",
      LG = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    wG.e.ShadersStoreWGSL[SG] || (wG.e.ShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);