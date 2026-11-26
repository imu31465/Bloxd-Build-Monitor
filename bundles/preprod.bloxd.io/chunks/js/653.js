export const id = 653;
export const ids = [653];
export const modules = {
  45046: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(40961);
    const yU = "clipPlaneVertex",
      QU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44954: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(40961);
    const yU = "clipPlaneVertexDeclaration",
      QU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  45052: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU
    });
    var cU = zU(40961);
    const yU = "fogVertex",
      QU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44962: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(40961);
    const yU = "fogVertexDeclaration",
      QU = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44983: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(40961);
    const yU = "logDepthDeclaration",
      QU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  45072: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(40961);
    const yU = "logDepthVertex",
      QU = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  64006: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      skyVertexShaderWGSL: () => IU
    });
    var cU = zU(40961),
      yU = zU(44983),
      QU = zU(44954),
      AU = zU(44962),
      FU = zU(45046),
      oU = zU(45072),
      DU = zU(45052);
    const EU = "skyVertexShader",
      YU = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    cU.b.ShadersStoreWGSL[EU] || (cU.b.ShadersStoreWGSL[EU] = YU);
    const NU = [yU.c, QU.d, AU.c, FU.e, oU.d, DU.b];
    for (const pU of NU) cU.b.IncludesShadersStoreWGSL[pU.name] || (cU.b.IncludesShadersStoreWGSL[pU.name] = pU.shader);
    const IU = {
      name: EU,
      shader: YU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);