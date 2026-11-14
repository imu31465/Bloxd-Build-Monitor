export const id = 317;
export const ids = [317];
export const modules = {
  39822: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneVertex",
      zR = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39735: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneVertexDeclaration",
      zR = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39828: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(37441);
    const CW = "fogVertex",
      zR = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39743: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(37441);
    const CW = "fogVertexDeclaration",
      zR = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39761: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW
    });
    var wW = MW(37441);
    const CW = "logDepthDeclaration",
      zR = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39836: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW
    });
    var wW = MW(37441);
    const CW = "logDepthVertex",
      zR = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  58653: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      skyVertexShaderWGSL: () => TW
    });
    var wW = MW(37441),
      CW = MW(39761),
      zR = MW(39735),
      AW = MW(39743),
      bR = MW(39822),
      yR = MW(39836),
      NW = MW(39828);
    const eW = "skyVertexShader",
      BW = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wW.c.ShadersStoreWGSL[eW] || (wW.c.ShadersStoreWGSL[eW] = BW);
    const tR = [CW.d, zR.c, AW.c, bR.b, yR.d, NW.b];
    for (const gR of tR) wW.c.IncludesShadersStoreWGSL[gR.name] || (wW.c.IncludesShadersStoreWGSL[gR.name] = gR.shader);
    const TW = {
      name: eW,
      shader: BW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);