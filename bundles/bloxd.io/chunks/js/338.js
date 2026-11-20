export const id = 338;
export const ids = [338];
export const modules = {
  42134: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "clipPlaneVertex",
      Oq = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  42041: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(39617);
    const lq = "clipPlaneVertexDeclaration",
      Oq = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  42137: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "fogVertex",
      Oq = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  42048: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "fogVertexDeclaration",
      Oq = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  42074: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "logDepthDeclaration",
      Oq = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  42157: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "logDepthVertex",
      Oq = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  61190: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      skyVertexShaderWGSL: () => Nq
    });
    var Yq = gq(39617),
      lq = gq(42074),
      Oq = gq(42041),
      mq = gq(42048),
      xq = gq(42134),
      Aq = gq(42157),
      cq = gq(42137);
    const uq = "skyVertexShader",
      Bq = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Yq.d.ShadersStoreWGSL[uq] || (Yq.d.ShadersStoreWGSL[uq] = Bq);
    const Wq = [lq.d, Oq.e, mq.d, xq.d, Aq.d, cq.d];
    for (const aq of Wq) Yq.d.IncludesShadersStoreWGSL[aq.name] || (Yq.d.IncludesShadersStoreWGSL[aq.name] = aq.shader);
    const Nq = {
      name: uq,
      shader: Bq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);