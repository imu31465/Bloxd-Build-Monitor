export const id = 370;
export const ids = [370];
export const modules = {
  61503: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      lodPixelShaderWGSL: () => xS
    });
    var tS = gS(39899);
    const bS = "lodPixelShader",
      XS = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    tS.c.ShadersStoreWGSL[bS] || (tS.c.ShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);