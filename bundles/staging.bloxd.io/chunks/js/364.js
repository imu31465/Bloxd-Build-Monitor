export const id = 364;
export const ids = [364];
export const modules = {
  61395: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      postprocessVertexShaderWGSL: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "postprocessVertexShader",
      ik = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Xk.b.ShadersStoreWGSL[Tk] || (Xk.b.ShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);