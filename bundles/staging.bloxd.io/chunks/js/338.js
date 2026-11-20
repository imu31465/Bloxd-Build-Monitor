export const id = 338;
export const ids = [338];
export const modules = {
  41709: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(39162);
    const Sv = "clipPlaneVertex",
      ev = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41613: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(39162);
    const Sv = "clipPlaneVertexDeclaration",
      ev = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41717: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(39162);
    const Sv = "fogVertex",
      ev = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41618: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(39162);
    const Sv = "fogVertexDeclaration",
      ev = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41647: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(39162);
    const Sv = "logDepthDeclaration",
      ev = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  41726: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(39162);
    const Sv = "logDepthVertex",
      ev = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  },
  60645: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      skyVertexShaderWGSL: () => wv
    });
    var hv = Pv(39162),
      Sv = Pv(41647),
      ev = Pv(41613),
      gv = Pv(41618),
      pv = Pv(41709),
      dv = Pv(41726),
      Nv = Pv(41717);
    const lv = "skyVertexShader",
      Tv = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    hv.d.ShadersStoreWGSL[lv] || (hv.d.ShadersStoreWGSL[lv] = Tv);
    const Wv = [Sv.e, ev.c, gv.d, pv.b, dv.e, Nv.c];
    for (const av of Wv) hv.d.IncludesShadersStoreWGSL[av.name] || (hv.d.IncludesShadersStoreWGSL[av.name] = av.shader);
    const wv = {
      name: lv,
      shader: Tv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);