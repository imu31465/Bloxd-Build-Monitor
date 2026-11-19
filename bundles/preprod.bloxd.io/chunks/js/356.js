export const id = 356;
export const ids = [356];
export const modules = {
  60539: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      postprocessVertexShaderWGSL: () => lz
    });
    var Ez = bz(39033);
    const nz = "postprocessVertexShader",
      iz = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ez.e.ShadersStoreWGSL[nz] || (Ez.e.ShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);