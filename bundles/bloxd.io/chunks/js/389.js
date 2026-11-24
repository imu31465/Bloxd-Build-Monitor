export const id = 389;
export const ids = [389];
export const modules = {
  61949: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      proceduralVertexShaderWGSL: () => xS
    });
    var tS = gS(39899);
    const bS = "proceduralVertexShader",
      XS = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    tS.c.ShadersStoreWGSL[bS] || (tS.c.ShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);