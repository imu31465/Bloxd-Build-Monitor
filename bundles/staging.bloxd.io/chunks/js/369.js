export const id = 369;
export const ids = [369];
export const modules = {
  60840: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      lodPixelShaderWGSL: () => bk
    });
    var Dk = ik(39412);
    const fk = "lodPixelShader",
      Sk = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Dk.d.ShadersStoreWGSL[fk] || (Dk.d.ShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);