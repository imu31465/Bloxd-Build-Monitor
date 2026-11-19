export const id = 381;
export const ids = [381];
export const modules = {
  61023: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      proceduralVertexShaderWGSL: () => lz
    });
    var Ez = bz(39033);
    const nz = "proceduralVertexShader",
      iz = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Ez.e.ShadersStoreWGSL[nz] || (Ez.e.ShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);