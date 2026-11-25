export const id = 352;
export const ids = [352];
export const modules = {
  42844: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(40237);
    const SG = "clipPlaneVertex",
      LG = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42750: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(40237);
    const SG = "clipPlaneVertexDeclaration",
      LG = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42848: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "fogVertex",
      LG = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42759: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "fogVertexDeclaration",
      LG = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42787: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "logDepthDeclaration",
      LG = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42860: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "logDepthVertex",
      LG = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    wG.e.IncludesShadersStoreWGSL[SG] || (wG.e.IncludesShadersStoreWGSL[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  61873: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      skyVertexShaderWGSL: () => QG
    });
    var wG = ZG(40237),
      SG = ZG(42787),
      LG = ZG(42750),
      yG = ZG(42759),
      kG = ZG(42844),
      UG = ZG(42860),
      YG = ZG(42848);
    const VG = "skyVertexShader",
      pG = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wG.e.ShadersStoreWGSL[VG] || (wG.e.ShadersStoreWGSL[VG] = pG);
    const fG = [SG.e, LG.c, yG.e, kG.d, UG.e, YG.e];
    for (const KG of fG) wG.e.IncludesShadersStoreWGSL[KG.name] || (wG.e.IncludesShadersStoreWGSL[KG.name] = KG.shader);
    const QG = {
      name: VG,
      shader: pG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);