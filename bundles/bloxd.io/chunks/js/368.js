export const id = 368;
export const ids = [368];
export const modules = {
  61628: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      postprocessVertexShaderWGSL: () => Xu
    });
    var su = ju(40127);
    const Uu = "postprocessVertexShader",
      Zu = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    su.b.ShadersStoreWGSL[Uu] || (su.b.ShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);