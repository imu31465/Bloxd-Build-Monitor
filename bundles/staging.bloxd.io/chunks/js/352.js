export const id = 352;
export const ids = [352];
export const modules = {
  42387: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(39905);
    const JB = "clipPlaneVertex",
      oB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    TB.c.IncludesShadersStoreWGSL[JB] || (TB.c.IncludesShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42294: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(39905);
    const JB = "clipPlaneVertexDeclaration",
      oB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    TB.c.IncludesShadersStoreWGSL[JB] || (TB.c.IncludesShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42390: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(39905);
    const JB = "fogVertex",
      oB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    TB.c.IncludesShadersStoreWGSL[JB] || (TB.c.IncludesShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42297: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(39905);
    const JB = "fogVertexDeclaration",
      oB = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    TB.c.IncludesShadersStoreWGSL[JB] || (TB.c.IncludesShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42322: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(39905);
    const JB = "logDepthDeclaration",
      oB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    TB.c.IncludesShadersStoreWGSL[JB] || (TB.c.IncludesShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42404: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(39905);
    const JB = "logDepthVertex",
      oB = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    TB.c.IncludesShadersStoreWGSL[JB] || (TB.c.IncludesShadersStoreWGSL[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  61374: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      skyVertexShaderWGSL: () => FB
    });
    var TB = ZB(39905),
      JB = ZB(42322),
      oB = ZB(42294),
      GB = ZB(42297),
      vB = ZB(42387),
      kB = ZB(42404),
      cB = ZB(42390);
    const nB = "skyVertexShader",
      hB = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    TB.c.ShadersStoreWGSL[nB] || (TB.c.ShadersStoreWGSL[nB] = hB);
    const zB = [JB.b, oB.c, GB.e, vB.c, kB.c, cB.b];
    for (const NB of zB) TB.c.IncludesShadersStoreWGSL[NB.name] || (TB.c.IncludesShadersStoreWGSL[NB.name] = NB.shader);
    const FB = {
      name: nB,
      shader: hB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);