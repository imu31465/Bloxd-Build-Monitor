export const id = 665;
export const ids = [665];
export const modules = {
  54555: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(41392);
    const EW = "clipPlaneVertex",
      NW = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54450: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "clipPlaneVertexDeclaration",
      NW = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54558: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(41392);
    const EW = "fogVertex",
      NW = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54459: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "fogVertexDeclaration",
      NW = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54478: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(41392);
    const EW = "logDepthDeclaration",
      NW = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54572: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "logDepthVertex",
      NW = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  64460: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      skyVertexShaderWGSL: () => lW
    });
    var mW = OW(41392),
      EW = OW(54478),
      NW = OW(54450),
      PW = OW(54459),
      LW = OW(54555),
      cW = OW(54572),
      wW = OW(54558);
    const tW = "skyVertexShader",
      ZW = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    mW.c.ShadersStoreWGSL[tW] || (mW.c.ShadersStoreWGSL[tW] = ZW);
    const xW = [EW.c, NW.b, PW.b, LW.d, cW.b, wW.c];
    for (const AW of xW) mW.c.IncludesShadersStoreWGSL[AW.name] || (mW.c.IncludesShadersStoreWGSL[AW.name] = AW.shader);
    const lW = {
      name: tW,
      shader: ZW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);