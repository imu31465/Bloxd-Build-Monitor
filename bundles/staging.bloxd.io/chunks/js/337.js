export const id = 337;
export const ids = [337];
export const modules = {
  41436: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "clipPlaneVertex",
      Xz = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41344: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "clipPlaneVertexDeclaration",
      Xz = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41444: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "fogVertex",
      Xz = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41351: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "fogVertexDeclaration",
      Xz = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41374: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "logDepthDeclaration",
      Xz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41464: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "logDepthVertex",
      Xz = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  60390: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      skyVertexShaderWGSL: () => bz
    });
    var Fz = sz(39041),
      Wz = sz(41374),
      Xz = sz(41344),
      Oz = sz(41351),
      oz = sz(41436),
      vz = sz(41464),
      Uz = sz(41444);
    const Kz = "skyVertexShader",
      uz = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Fz.e.ShadersStoreWGSL[Kz] || (Fz.e.ShadersStoreWGSL[Kz] = uz);
    const Nz = [Wz.d, Xz.d, Oz.c, oz.d, vz.c, Uz.d];
    for (const wz of Nz) Fz.e.IncludesShadersStoreWGSL[wz.name] || (Fz.e.IncludesShadersStoreWGSL[wz.name] = wz.shader);
    const bz = {
      name: Kz,
      shader: uz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);