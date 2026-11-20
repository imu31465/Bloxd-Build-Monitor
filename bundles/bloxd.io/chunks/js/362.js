export const id = 362;
export const ids = [362];
export const modules = {
  61199: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      lodPixelShaderWGSL: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "lodPixelShader",
      ak = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Rk.d.ShadersStoreWGSL[tk] || (Rk.d.ShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);