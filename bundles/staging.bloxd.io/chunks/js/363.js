export const id = 363;
export const ids = [363];
export const modules = {
  60858: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      lodPixelShaderWGSL: () => gv
    });
    var hv = Pv(39162);
    const Sv = "lodPixelShader",
      ev = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);