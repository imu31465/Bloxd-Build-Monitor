export const id = 337;
export const ids = [337];
export const modules = {
  41766: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(39267);
    const Wb = "clipPlaneVertex",
      ab = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    kb.d.IncludesShadersStoreWGSL[Wb] || (kb.d.IncludesShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41677: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(39267);
    const Wb = "clipPlaneVertexDeclaration",
      ab = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    kb.d.IncludesShadersStoreWGSL[Wb] || (kb.d.IncludesShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41769: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(39267);
    const Wb = "fogVertex",
      ab = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    kb.d.IncludesShadersStoreWGSL[Wb] || (kb.d.IncludesShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41684: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(39267);
    const Wb = "fogVertexDeclaration",
      ab = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    kb.d.IncludesShadersStoreWGSL[Wb] || (kb.d.IncludesShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41705: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(39267);
    const Wb = "logDepthDeclaration",
      ab = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    kb.d.IncludesShadersStoreWGSL[Wb] || (kb.d.IncludesShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  41782: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(39267);
    const Wb = "logDepthVertex",
      ab = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    kb.d.IncludesShadersStoreWGSL[Wb] || (kb.d.IncludesShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  },
  60643: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      skyVertexShaderWGSL: () => nb
    });
    var kb = sb(39267),
      Wb = sb(41705),
      ab = sb(41677),
      Tb = sb(41684),
      Ub = sb(41766),
      Ib = sb(41782),
      Hb = sb(41769);
    const fb = "skyVertexShader",
      Mb = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    kb.d.ShadersStoreWGSL[fb] || (kb.d.ShadersStoreWGSL[fb] = Mb);
    const Xb = [Wb.d, ab.c, Tb.b, Ub.e, Ib.e, Hb.d];
    for (const mb of Xb) kb.d.IncludesShadersStoreWGSL[mb.name] || (kb.d.IncludesShadersStoreWGSL[mb.name] = mb.shader);
    const nb = {
      name: fb,
      shader: Mb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);