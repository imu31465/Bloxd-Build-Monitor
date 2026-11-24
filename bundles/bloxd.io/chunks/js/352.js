export const id = 352;
export const ids = [352];
export const modules = {
  42497: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB
    });
    var QB = zB(39932);
    const nB = "clipPlaneVertex",
      dB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    QB.e.IncludesShadersStoreWGSL[nB] || (QB.e.IncludesShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42391: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(39932);
    const nB = "clipPlaneVertexDeclaration",
      dB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    QB.e.IncludesShadersStoreWGSL[nB] || (QB.e.IncludesShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42499: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(39932);
    const nB = "fogVertex",
      dB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    QB.e.IncludesShadersStoreWGSL[nB] || (QB.e.IncludesShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42400: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(39932);
    const nB = "fogVertexDeclaration",
      dB = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    QB.e.IncludesShadersStoreWGSL[nB] || (QB.e.IncludesShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42425: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB
    });
    var QB = zB(39932);
    const nB = "logDepthDeclaration",
      dB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    QB.e.IncludesShadersStoreWGSL[nB] || (QB.e.IncludesShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42518: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(39932);
    const nB = "logDepthVertex",
      dB = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    QB.e.IncludesShadersStoreWGSL[nB] || (QB.e.IncludesShadersStoreWGSL[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  61497: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      skyVertexShaderWGSL: () => sB
    });
    var QB = zB(39932),
      nB = zB(42425),
      dB = zB(42391),
      IB = zB(42400),
      NB = zB(42497),
      uB = zB(42518),
      UB = zB(42499);
    const aB = "skyVertexShader",
      pB = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    QB.e.ShadersStoreWGSL[aB] || (QB.e.ShadersStoreWGSL[aB] = pB);
    const rB = [nB.d, dB.e, IB.b, NB.d, uB.c, UB.e];
    for (const JB of rB) QB.e.IncludesShadersStoreWGSL[JB.name] || (QB.e.IncludesShadersStoreWGSL[JB.name] = JB.shader);
    const sB = {
      name: aB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);