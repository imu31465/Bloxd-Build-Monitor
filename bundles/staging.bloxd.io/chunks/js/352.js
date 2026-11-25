export const id = 352;
export const ids = [352];
export const modules = {
  42664: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(40127);
    const Uu = "clipPlaneVertex",
      Zu = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    su.b.IncludesShadersStoreWGSL[Uu] || (su.b.IncludesShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42582: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(40127);
    const Uu = "clipPlaneVertexDeclaration",
      Zu = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    su.b.IncludesShadersStoreWGSL[Uu] || (su.b.IncludesShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42667: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(40127);
    const Uu = "fogVertex",
      Zu = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    su.b.IncludesShadersStoreWGSL[Uu] || (su.b.IncludesShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42586: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(40127);
    const Uu = "fogVertexDeclaration",
      Zu = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    su.b.IncludesShadersStoreWGSL[Uu] || (su.b.IncludesShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42604: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(40127);
    const Uu = "logDepthDeclaration",
      Zu = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    su.b.IncludesShadersStoreWGSL[Uu] || (su.b.IncludesShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  42689: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu
    });
    var su = ju(40127);
    const Uu = "logDepthVertex",
      Zu = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    su.b.IncludesShadersStoreWGSL[Uu] || (su.b.IncludesShadersStoreWGSL[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  },
  61566: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      skyVertexShaderWGSL: () => Nu
    });
    var su = ju(40127),
      Uu = ju(42604),
      Zu = ju(42582),
      Xu = ju(42586),
      lu = ju(42664),
      qu = ju(42689),
      fu = ju(42667);
    const Cu = "skyVertexShader",
      bu = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    su.b.ShadersStoreWGSL[Cu] || (su.b.ShadersStoreWGSL[Cu] = bu);
    const cu = [Uu.c, Zu.b, Xu.c, lu.c, qu.e, fu.c];
    for (const Ou of cu) su.b.IncludesShadersStoreWGSL[Ou.name] || (su.b.IncludesShadersStoreWGSL[Ou.name] = Ou.shader);
    const Nu = {
      name: Cu,
      shader: bu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);