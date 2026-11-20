export const id = 362;
export const ids = [362];
export const modules = {
  60810: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      lodPixelShaderWGSL: () => PU
    });
    var tU = gU(39225);
    const pU = "lodPixelShader",
      EU = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    tU.d.ShadersStoreWGSL[pU] || (tU.d.ShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);