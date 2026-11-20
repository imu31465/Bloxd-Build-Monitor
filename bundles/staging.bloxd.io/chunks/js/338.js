export const id = 338;
export const ids = [338];
export const modules = {
  41798: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "clipPlaneVertex",
      Gb = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Bb.e.IncludesShadersStoreWGSL[Ob] || (Bb.e.IncludesShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41703: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "clipPlaneVertexDeclaration",
      Gb = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Bb.e.IncludesShadersStoreWGSL[Ob] || (Bb.e.IncludesShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41803: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "fogVertex",
      Gb = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Bb.e.IncludesShadersStoreWGSL[Ob] || (Bb.e.IncludesShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41711: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "fogVertexDeclaration",
      Gb = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Bb.e.IncludesShadersStoreWGSL[Ob] || (Bb.e.IncludesShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41734: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "logDepthDeclaration",
      Gb = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Bb.e.IncludesShadersStoreWGSL[Ob] || (Bb.e.IncludesShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41819: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "logDepthVertex",
      Gb = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Bb.e.IncludesShadersStoreWGSL[Ob] || (Bb.e.IncludesShadersStoreWGSL[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  60655: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      skyVertexShaderWGSL: () => Zb
    });
    var Bb = hb(39308),
      Ob = hb(41734),
      Gb = hb(41703),
      Ub = hb(41711),
      Lb = hb(41798),
      Yb = hb(41819),
      Sb = hb(41803);
    const ab = "skyVertexShader",
      Hb = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Bb.e.ShadersStoreWGSL[ab] || (Bb.e.ShadersStoreWGSL[ab] = Hb);
    const wb = [Ob.c, Gb.c, Ub.e, Lb.c, Yb.c, Sb.d];
    for (const Xb of wb) Bb.e.IncludesShadersStoreWGSL[Xb.name] || (Bb.e.IncludesShadersStoreWGSL[Xb.name] = Xb.shader);
    const Zb = {
      name: ab,
      shader: Hb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);