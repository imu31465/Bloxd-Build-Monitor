export const id = 337;
export const ids = [337];
export const modules = {
  41580: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(39033);
    const nz = "clipPlaneVertex",
      iz = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41488: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(39033);
    const nz = "clipPlaneVertexDeclaration",
      iz = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41584: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(39033);
    const nz = "fogVertex",
      iz = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41495: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(39033);
    const nz = "fogVertexDeclaration",
      iz = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41518: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(39033);
    const nz = "logDepthDeclaration",
      iz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41606: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(39033);
    const nz = "logDepthVertex",
      iz = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Ez.e.IncludesShadersStoreWGSL[nz] || (Ez.e.IncludesShadersStoreWGSL[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  60387: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      skyVertexShaderWGSL: () => Fz
    });
    var Ez = bz(39033),
      nz = bz(41518),
      iz = bz(41488),
      lz = bz(41495),
      Mz = bz(41580),
      tz = bz(41606),
      Hz = bz(41584);
    const Oz = "skyVertexShader",
      pz = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ez.e.ShadersStoreWGSL[Oz] || (Ez.e.ShadersStoreWGSL[Oz] = pz);
    const dz = [nz.e, iz.e, lz.d, Mz.c, tz.e, Hz.e];
    for (const Zz of dz) Ez.e.IncludesShadersStoreWGSL[Zz.name] || (Ez.e.IncludesShadersStoreWGSL[Zz.name] = Zz.shader);
    const Fz = {
      name: Oz,
      shader: pz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);