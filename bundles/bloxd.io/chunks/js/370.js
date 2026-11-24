export const id = 370;
export const ids = [370];
export const modules = {
  61435: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      lodPixelShaderWGSL: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "lodPixelShader",
      ik = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Xk.b.ShadersStoreWGSL[Tk] || (Xk.b.ShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);