export const id = 337;
export const ids = [337];
export const modules = {
  41733: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneVertex",
      EU = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41652: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneVertexDeclaration",
      EU = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41741: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(39225);
    const pU = "fogVertex",
      EU = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41659: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(39225);
    const pU = "fogVertexDeclaration",
      EU = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41679: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(39225);
    const pU = "logDepthDeclaration",
      EU = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41752: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(39225);
    const pU = "logDepthVertex",
      EU = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  60604: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      skyVertexShaderWGSL: () => uU
    });
    var tU = gU(39225),
      pU = gU(41679),
      EU = gU(41652),
      PU = gU(41659),
      TU = gU(41733),
      qU = gU(41752),
      KU = gU(41741);
    const cU = "skyVertexShader",
      GU = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    tU.d.ShadersStoreWGSL[cU] || (tU.d.ShadersStoreWGSL[cU] = GU);
    const jU = [pU.d, EU.e, PU.b, TU.d, qU.b, KU.c];
    for (const CU of jU) tU.d.IncludesShadersStoreWGSL[CU.name] || (tU.d.IncludesShadersStoreWGSL[CU.name] = CU.shader);
    const uU = {
      name: cU,
      shader: GU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);