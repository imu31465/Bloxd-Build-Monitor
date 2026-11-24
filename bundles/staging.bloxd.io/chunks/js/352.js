export const id = 352;
export const ids = [352];
export const modules = {
  42518: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(39934);
    const zT = "clipPlaneVertex",
      MT = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    WT.d.IncludesShadersStoreWGSL[zT] || (WT.d.IncludesShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42427: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(39934);
    const zT = "clipPlaneVertexDeclaration",
      MT = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    WT.d.IncludesShadersStoreWGSL[zT] || (WT.d.IncludesShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42525: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(39934);
    const zT = "fogVertex",
      MT = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    WT.d.IncludesShadersStoreWGSL[zT] || (WT.d.IncludesShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42429: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(39934);
    const zT = "fogVertexDeclaration",
      MT = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    WT.d.IncludesShadersStoreWGSL[zT] || (WT.d.IncludesShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42448: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(39934);
    const zT = "logDepthDeclaration",
      MT = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    WT.d.IncludesShadersStoreWGSL[zT] || (WT.d.IncludesShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42550: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(39934);
    const zT = "logDepthVertex",
      MT = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    WT.d.IncludesShadersStoreWGSL[zT] || (WT.d.IncludesShadersStoreWGSL[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  61205: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      skyVertexShaderWGSL: () => pT
    });
    var WT = mT(39934),
      zT = mT(42448),
      MT = mT(42427),
      gT = mT(42429),
      nT = mT(42518),
      HT = mT(42550),
      kT = mT(42525);
    const jT = "skyVertexShader",
      lT = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    WT.d.ShadersStoreWGSL[jT] || (WT.d.ShadersStoreWGSL[jT] = lT);
    const LT = [zT.c, MT.d, gT.c, nT.b, HT.d, kT.d];
    for (const BT of LT) WT.d.IncludesShadersStoreWGSL[BT.name] || (WT.d.IncludesShadersStoreWGSL[BT.name] = BT.shader);
    const pT = {
      name: jT,
      shader: lT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);