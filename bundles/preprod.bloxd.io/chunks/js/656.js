export const id = 656;
export const ids = [656];
export const modules = {
  45824: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneVertex",
      SH = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45746: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneVertexDeclaration",
      SH = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45831: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(41138);
    const rH = "fogVertex",
      SH = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45748: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "fogVertexDeclaration",
      SH = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45764: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(41138);
    const rH = "logDepthDeclaration",
      SH = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45842: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(41138);
    const rH = "logDepthVertex",
      SH = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  64172: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      skyVertexShaderWGSL: () => YH
    });
    var AH = LH(41138),
      rH = LH(45764),
      SH = LH(45746),
      hH = LH(45748),
      tH = LH(45824),
      zH = LH(45842),
      CH = LH(45831);
    const EH = "skyVertexShader",
      XH = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    AH.c.ShadersStoreWGSL[EH] || (AH.c.ShadersStoreWGSL[EH] = XH);
    const GH = [rH.e, SH.d, hH.d, tH.d, zH.b, CH.b];
    for (const uH of GH) AH.c.IncludesShadersStoreWGSL[uH.name] || (AH.c.IncludesShadersStoreWGSL[uH.name] = uH.shader);
    const YH = {
      name: EH,
      shader: XH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);