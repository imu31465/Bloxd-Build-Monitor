export const id = 347;
export const ids = [347];
export const modules = {
  42388: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "clipPlaneVertex",
      ik = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Xk.b.IncludesShadersStoreWGSL[Tk] || (Xk.b.IncludesShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42300: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "clipPlaneVertexDeclaration",
      ik = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Xk.b.IncludesShadersStoreWGSL[Tk] || (Xk.b.IncludesShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42395: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "fogVertex",
      ik = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Xk.b.IncludesShadersStoreWGSL[Tk] || (Xk.b.IncludesShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42304: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "fogVertexDeclaration",
      ik = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Xk.b.IncludesShadersStoreWGSL[Tk] || (Xk.b.IncludesShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42330: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "logDepthDeclaration",
      ik = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Xk.b.IncludesShadersStoreWGSL[Tk] || (Xk.b.IncludesShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42409: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "logDepthVertex",
      ik = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Xk.b.IncludesShadersStoreWGSL[Tk] || (Xk.b.IncludesShadersStoreWGSL[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  61337: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      skyVertexShaderWGSL: () => jk
    });
    var Xk = Ik(39837),
      Tk = Ik(42330),
      ik = Ik(42300),
      yk = Ik(42304),
      lk = Ik(42388),
      ak = Ik(42409),
      qk = Ik(42395);
    const Lk = "skyVertexShader",
      tk = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Xk.b.ShadersStoreWGSL[Lk] || (Xk.b.ShadersStoreWGSL[Lk] = tk);
    const Zk = [Tk.c, ik.e, yk.d, lk.c, ak.d, qk.d];
    for (const ek of Zk) Xk.b.IncludesShadersStoreWGSL[ek.name] || (Xk.b.IncludesShadersStoreWGSL[ek.name] = ek.shader);
    const jk = {
      name: Lk,
      shader: tk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);