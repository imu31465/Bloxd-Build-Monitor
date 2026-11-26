export const id = 656;
export const ids = [656];
export const modules = {
  45542: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(40864);
    const DB = "clipPlaneVertex",
      QB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45438: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(40864);
    const DB = "clipPlaneVertexDeclaration",
      QB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45551: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(40864);
    const DB = "fogVertex",
      QB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45444: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(40864);
    const DB = "fogVertexDeclaration",
      QB = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45465: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(40864);
    const DB = "logDepthDeclaration",
      QB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  45561: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(40864);
    const DB = "logDepthVertex",
      QB = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    YB.b.IncludesShadersStoreWGSL[DB] || (YB.b.IncludesShadersStoreWGSL[DB] = QB);
    const oB = {
      name: DB,
      shader: QB
    }
  },
  63946: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      skyVertexShaderWGSL: () => lB
    });
    var YB = GB(40864),
      DB = GB(45465),
      QB = GB(45438),
      oB = GB(45444),
      jB = GB(45542),
      yB = GB(45561),
      JB = GB(45551);
    const MB = "skyVertexShader",
      PB = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    YB.b.ShadersStoreWGSL[MB] || (YB.b.ShadersStoreWGSL[MB] = PB);
    const zB = [DB.e, QB.b, oB.e, jB.d, yB.d, JB.d];
    for (const pB of zB) YB.b.IncludesShadersStoreWGSL[pB.name] || (YB.b.IncludesShadersStoreWGSL[pB.name] = pB.shader);
    const lB = {
      name: MB,
      shader: PB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);