export const id = 360;
export const ids = [360];
export const modules = {
  61187: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      lod3DPixelShaderWGSL: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "lod3DPixelShader",
      ak = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";
    Rk.d.ShadersStoreWGSL[tk] || (Rk.d.ShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);