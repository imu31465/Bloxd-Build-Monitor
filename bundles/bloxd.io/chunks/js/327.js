export const id = 327;
export const ids = [327];
export const modules = {
  41078: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(38595);
    const yB = "clipPlaneVertex",
      pB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    VB.e.IncludesShadersStoreWGSL[yB] || (VB.e.IncludesShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40994: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(38595);
    const yB = "clipPlaneVertexDeclaration",
      pB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    VB.e.IncludesShadersStoreWGSL[yB] || (VB.e.IncludesShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  41083: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(38595);
    const yB = "fogVertex",
      pB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    VB.e.IncludesShadersStoreWGSL[yB] || (VB.e.IncludesShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  41001: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(38595);
    const yB = "fogVertexDeclaration",
      pB = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    VB.e.IncludesShadersStoreWGSL[yB] || (VB.e.IncludesShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  41020: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(38595);
    const yB = "logDepthDeclaration",
      pB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    VB.e.IncludesShadersStoreWGSL[yB] || (VB.e.IncludesShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  41097: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(38595);
    const yB = "logDepthVertex",
      pB = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    VB.e.IncludesShadersStoreWGSL[yB] || (VB.e.IncludesShadersStoreWGSL[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  59786: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      skyVertexShaderWGSL: () => OB
    });
    var VB = dB(38595),
      yB = dB(41020),
      pB = dB(40994),
      lB = dB(41001),
      JB = dB(41078),
      YB = dB(41097),
      gB = dB(41083);
    const oB = "skyVertexShader",
      kB = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    VB.e.ShadersStoreWGSL[oB] || (VB.e.ShadersStoreWGSL[oB] = kB);
    const LB = [yB.e, pB.e, lB.d, JB.c, YB.b, gB.d];
    for (const DB of LB) VB.e.IncludesShadersStoreWGSL[DB.name] || (VB.e.IncludesShadersStoreWGSL[DB.name] = DB.shader);
    const OB = {
      name: oB,
      shader: kB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);