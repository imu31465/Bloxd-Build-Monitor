export const id = 362;
export const ids = [362];
export const modules = {
  61313: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      lodPixelShaderWGSL: () => mu
    });
    var Eu = yu(39403);
    const Ku = "lodPixelShader",
      Qu = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Eu.e.ShadersStoreWGSL[Ku] || (Eu.e.ShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);