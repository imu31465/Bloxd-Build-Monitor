export const id = 337;
export const ids = [337];
export const modules = {
  41164: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(38617);
    const zT = "clipPlaneVertex",
      kT = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    iT.c.IncludesShadersStoreWGSL[zT] || (iT.c.IncludesShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41072: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(38617);
    const zT = "clipPlaneVertexDeclaration",
      kT = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    iT.c.IncludesShadersStoreWGSL[zT] || (iT.c.IncludesShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41173: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(38617);
    const zT = "fogVertex",
      kT = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    iT.c.IncludesShadersStoreWGSL[zT] || (iT.c.IncludesShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41076: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(38617);
    const zT = "fogVertexDeclaration",
      kT = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    iT.c.IncludesShadersStoreWGSL[zT] || (iT.c.IncludesShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41093: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(38617);
    const zT = "logDepthDeclaration",
      kT = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    iT.c.IncludesShadersStoreWGSL[zT] || (iT.c.IncludesShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41193: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    var iT = IT(38617);
    const zT = "logDepthVertex",
      kT = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    iT.c.IncludesShadersStoreWGSL[zT] || (iT.c.IncludesShadersStoreWGSL[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  60069: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      skyVertexShaderWGSL: () => xT
    });
    var iT = IT(38617),
      zT = IT(41093),
      kT = IT(41072),
      WT = IT(41076),
      XT = IT(41164),
      BT = IT(41193),
      FT = IT(41173);
    const ST = "skyVertexShader",
      DT = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    iT.c.ShadersStoreWGSL[ST] || (iT.c.ShadersStoreWGSL[ST] = DT);
    const LT = [zT.c, kT.d, WT.d, XT.d, BT.b, FT.d];
    for (const cT of LT) iT.c.IncludesShadersStoreWGSL[cT.name] || (iT.c.IncludesShadersStoreWGSL[cT.name] = cT.shader);
    const xT = {
      name: ST,
      shader: DT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);