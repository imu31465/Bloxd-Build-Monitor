export const id = 393;
export const ids = [393];
export const modules = {
  62105: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      proceduralVertexShaderWGSL: () => mt
    });
    var Ot = Vt(40061);
    const qt = "proceduralVertexShader",
      Dt = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ot.b.ShadersStoreWGSL[qt] || (Ot.b.ShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);