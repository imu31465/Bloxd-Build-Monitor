export const id = 347;
export const ids = [347];
export const modules = {
  42194: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(39674);
    const wC = "clipPlaneVertex",
      bC = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  42106: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(39674);
    const wC = "clipPlaneVertexDeclaration",
      bC = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  42202: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(39674);
    const wC = "fogVertex",
      bC = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  42112: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(39674);
    const wC = "fogVertexDeclaration",
      bC = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  42135: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(39674);
    const wC = "logDepthDeclaration",
      bC = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  42214: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(39674);
    const wC = "logDepthVertex",
      bC = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  },
  60999: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      skyVertexShaderWGSL: () => MC
    });
    var QC = ZC(39674),
      wC = ZC(42135),
      bC = ZC(42106),
      nC = ZC(42112),
      fC = ZC(42194),
      oC = ZC(42214),
      qC = ZC(42202);
    const FC = "skyVertexShader",
      WC = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    QC.b.ShadersStoreWGSL[FC] || (QC.b.ShadersStoreWGSL[FC] = WC);
    const NC = [wC.c, bC.b, nC.c, fC.b, oC.b, qC.d];
    for (const gC of NC) QC.b.IncludesShadersStoreWGSL[gC.name] || (QC.b.IncludesShadersStoreWGSL[gC.name] = gC.shader);
    const MC = {
      name: FC,
      shader: WC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);