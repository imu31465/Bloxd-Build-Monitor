export const id = 352;
export const ids = [352];
export const modules = {
  42609: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(40061);
    const qt = "clipPlaneVertex",
      Dt = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Ot.b.IncludesShadersStoreWGSL[qt] || (Ot.b.IncludesShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42511: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(40061);
    const qt = "clipPlaneVertexDeclaration",
      Dt = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Ot.b.IncludesShadersStoreWGSL[qt] || (Ot.b.IncludesShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42613: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(40061);
    const qt = "fogVertex",
      Dt = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Ot.b.IncludesShadersStoreWGSL[qt] || (Ot.b.IncludesShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42517: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(40061);
    const qt = "fogVertexDeclaration",
      Dt = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Ot.b.IncludesShadersStoreWGSL[qt] || (Ot.b.IncludesShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42531: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(40061);
    const qt = "logDepthDeclaration",
      Dt = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Ot.b.IncludesShadersStoreWGSL[qt] || (Ot.b.IncludesShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42621: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(40061);
    const qt = "logDepthVertex",
      Dt = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Ot.b.IncludesShadersStoreWGSL[qt] || (Ot.b.IncludesShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  61592: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      skyVertexShaderWGSL: () => Et
    });
    var Ot = Vt(40061),
      qt = Vt(42531),
      Dt = Vt(42511),
      mt = Vt(42517),
      dt = Vt(42609),
      jt = Vt(42621),
      Ht = Vt(42613);
    const Xt = "skyVertexShader",
      Qt = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ot.b.ShadersStoreWGSL[Xt] || (Ot.b.ShadersStoreWGSL[Xt] = Qt);
    const lt = [qt.b, Dt.b, mt.b, dt.e, jt.d, Ht.c];
    for (const ft of lt) Ot.b.IncludesShadersStoreWGSL[ft.name] || (Ot.b.IncludesShadersStoreWGSL[ft.name] = ft.shader);
    const Et = {
      name: Xt,
      shader: Qt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);