export const id = 356;
export const ids = [356];
export const modules = {
  42659: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneVertex",
      TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42570: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneVertexDeclaration",
      TQ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42662: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogVertex",
      TQ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42579: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogVertexDeclaration",
      TQ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42598: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "logDepthDeclaration",
      TQ = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42676: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "logDepthVertex",
      TQ = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  61600: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      skyVertexShaderWGSL: () => IQ
    });
    var wQ = XQ(40126),
      qQ = XQ(42598),
      TQ = XQ(42570),
      zQ = XQ(42579),
      sQ = XQ(42659),
      FQ = XQ(42676),
      PQ = XQ(42662);
    const gQ = "skyVertexShader",
      JQ = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wQ.b.ShadersStoreWGSL[gQ] || (wQ.b.ShadersStoreWGSL[gQ] = JQ);
    const rQ = [qQ.e, TQ.b, zQ.e, sQ.c, FQ.e, PQ.e];
    for (const jQ of rQ) wQ.b.IncludesShadersStoreWGSL[jQ.name] || (wQ.b.IncludesShadersStoreWGSL[jQ.name] = jQ.shader);
    const IQ = {
      name: gQ,
      shader: JQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);