export const id = 338;
export const ids = [338];
export const modules = {
  41764: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneVertex",
      oQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41682: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneVertexDeclaration",
      oQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41768: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogVertex",
      oQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41685: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogVertexDeclaration",
      oQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41702: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "logDepthDeclaration",
      oQ = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41792: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "logDepthVertex",
      oQ = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  60704: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      skyVertexShaderWGSL: () => YQ
    });
    var LQ = wQ(39251),
      qQ = wQ(41702),
      oQ = wQ(41682),
      DQ = wQ(41685),
      kQ = wQ(41764),
      vQ = wQ(41792),
      mQ = wQ(41768);
    const uQ = "skyVertexShader",
      HQ = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    LQ.c.ShadersStoreWGSL[uQ] || (LQ.c.ShadersStoreWGSL[uQ] = HQ);
    const bQ = [qQ.c, oQ.d, DQ.e, kQ.e, vQ.e, mQ.c];
    for (const xQ of bQ) LQ.c.IncludesShadersStoreWGSL[xQ.name] || (LQ.c.IncludesShadersStoreWGSL[xQ.name] = xQ.shader);
    const YQ = {
      name: uQ,
      shader: HQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);