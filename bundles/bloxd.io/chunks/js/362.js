export const id = 362;
export const ids = [362];
export const modules = {
  60605: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      lodPixelShaderWGSL: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "lodPixelShader",
      Xz = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);