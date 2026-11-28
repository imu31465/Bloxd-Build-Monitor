export const id = 666;
export const ids = [666];
export const modules = {
  54607: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "clipPlaneVertex",
      pb = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    eb.e.IncludesShadersStoreWGSL[Hb] || (eb.e.IncludesShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54510: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "clipPlaneVertexDeclaration",
      pb = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    eb.e.IncludesShadersStoreWGSL[Hb] || (eb.e.IncludesShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54613: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "fogVertex",
      pb = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    eb.e.IncludesShadersStoreWGSL[Hb] || (eb.e.IncludesShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54518: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "fogVertexDeclaration",
      pb = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    eb.e.IncludesShadersStoreWGSL[Hb] || (eb.e.IncludesShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54538: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "logDepthDeclaration",
      pb = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    eb.e.IncludesShadersStoreWGSL[Hb] || (eb.e.IncludesShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54630: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "logDepthVertex",
      pb = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    eb.e.IncludesShadersStoreWGSL[Hb] || (eb.e.IncludesShadersStoreWGSL[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  64476: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      skyVertexShaderWGSL: () => tb
    });
    var eb = Mb(41518),
      Hb = Mb(54538),
      pb = Mb(54510),
      Vb = Mb(54518),
      gb = Mb(54607),
      lb = Mb(54630),
      Lb = Mb(54613);
    const Ib = "skyVertexShader",
      Ob = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    eb.e.ShadersStoreWGSL[Ib] || (eb.e.ShadersStoreWGSL[Ib] = Ob);
    const Ub = [Hb.c, pb.e, Vb.e, gb.b, lb.e, Lb.b];
    for (const Cb of Ub) eb.e.IncludesShadersStoreWGSL[Cb.name] || (eb.e.IncludesShadersStoreWGSL[Cb.name] = Cb.shader);
    const tb = {
      name: Ib,
      shader: Ob
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);