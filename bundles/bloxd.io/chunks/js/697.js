export const id = 697;
export const ids = [697];
export const modules = {
  64427: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      proceduralVertexShaderWGSL: () => Ke
    });
    var ye = He(40954);
    const be = "proceduralVertexShader",
      Me = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);