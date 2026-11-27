export const id = 678;
export const ids = [678];
export const modules = {
  63995: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      lodPixelShaderWGSL: () => Ke
    });
    var ye = He(40954);
    const be = "lodPixelShader",
      Me = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);