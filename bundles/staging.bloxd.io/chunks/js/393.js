export const id = 393;
export const ids = [393];
export const modules = {
  62091: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      proceduralVertexShaderWGSL: () => Xu
    });
    var su = ju(40127);
    const Uu = "proceduralVertexShader",
      Zu = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    su.b.ShadersStoreWGSL[Uu] || (su.b.ShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);