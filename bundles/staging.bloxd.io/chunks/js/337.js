export const id = 337;
export const ids = [337];
export const modules = {
  41797: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "clipPlaneVertex",
      ak = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Rk.d.IncludesShadersStoreWGSL[tk] || (Rk.d.IncludesShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41690: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "clipPlaneVertexDeclaration",
      ak = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Rk.d.IncludesShadersStoreWGSL[tk] || (Rk.d.IncludesShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41801: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "fogVertex",
      ak = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Rk.d.IncludesShadersStoreWGSL[tk] || (Rk.d.IncludesShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41696: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "fogVertexDeclaration",
      ak = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Rk.d.IncludesShadersStoreWGSL[tk] || (Rk.d.IncludesShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41719: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "logDepthDeclaration",
      ak = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Rk.d.IncludesShadersStoreWGSL[tk] || (Rk.d.IncludesShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41817: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "logDepthVertex",
      ak = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Rk.d.IncludesShadersStoreWGSL[tk] || (Rk.d.IncludesShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  60975: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      skyVertexShaderWGSL: () => Ak
    });
    var Rk = Bk(39270),
      tk = Bk(41719),
      ak = Bk(41690),
      Xk = Bk(41696),
      bk = Bk(41797),
      wk = Bk(41817),
      dk = Bk(41801);
    const sk = "skyVertexShader",
      Vk = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Rk.d.ShadersStoreWGSL[sk] || (Rk.d.ShadersStoreWGSL[sk] = Vk);
    const Jk = [tk.e, ak.d, Xk.e, bk.e, wk.b, dk.e];
    for (const ek of Jk) Rk.d.IncludesShadersStoreWGSL[ek.name] || (Rk.d.IncludesShadersStoreWGSL[ek.name] = ek.shader);
    const Ak = {
      name: sk,
      shader: Vk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);