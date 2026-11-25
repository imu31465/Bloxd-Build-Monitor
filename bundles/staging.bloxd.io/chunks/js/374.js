export const id = 374;
export const ids = [374];
export const modules = {
  61676: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      lodPixelShaderWGSL: () => Xu
    });
    var su = ju(40127);
    const Uu = "lodPixelShader",
      Zu = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    su.b.ShadersStoreWGSL[Uu] || (su.b.ShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);