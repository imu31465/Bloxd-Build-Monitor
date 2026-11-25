export const id = 374;
export const ids = [374];
export const modules = {
  61680: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      lodPixelShaderWGSL: () => mt
    });
    var Ot = Vt(40061);
    const qt = "lodPixelShader",
      Dt = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Ot.b.ShadersStoreWGSL[qt] || (Ot.b.ShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);