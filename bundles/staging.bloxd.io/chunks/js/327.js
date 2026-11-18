export const id = 327;
export const ids = [327];
export const modules = {
  41073: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "clipPlaneVertex",
      eJ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    FJ.b.IncludesShadersStoreWGSL[UJ] || (FJ.b.IncludesShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40981: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "clipPlaneVertexDeclaration",
      eJ = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    FJ.b.IncludesShadersStoreWGSL[UJ] || (FJ.b.IncludesShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  41077: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "fogVertex",
      eJ = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    FJ.b.IncludesShadersStoreWGSL[UJ] || (FJ.b.IncludesShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40987: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "fogVertexDeclaration",
      eJ = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    FJ.b.IncludesShadersStoreWGSL[UJ] || (FJ.b.IncludesShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  41002: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "logDepthDeclaration",
      eJ = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    FJ.b.IncludesShadersStoreWGSL[UJ] || (FJ.b.IncludesShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  41089: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "logDepthVertex",
      eJ = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    FJ.b.IncludesShadersStoreWGSL[UJ] || (FJ.b.IncludesShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  59463: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      skyVertexShaderWGSL: () => sJ
    });
    var FJ = ZJ(38658),
      UJ = ZJ(41002),
      eJ = ZJ(40981),
      XJ = ZJ(40987),
      AJ = ZJ(41073),
      qJ = ZJ(41089),
      jJ = ZJ(41077);
    const YJ = "skyVertexShader",
      hJ = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    FJ.b.ShadersStoreWGSL[YJ] || (FJ.b.ShadersStoreWGSL[YJ] = hJ);
    const DJ = [UJ.b, eJ.d, XJ.d, AJ.d, qJ.b, jJ.b];
    for (const nJ of DJ) FJ.b.IncludesShadersStoreWGSL[nJ.name] || (FJ.b.IncludesShadersStoreWGSL[nJ.name] = nJ.shader);
    const sJ = {
      name: YJ,
      shader: hJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);