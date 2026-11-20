export const id = 337;
export const ids = [337];
export const modules = {
  41938: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneVertex",
      Qu = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41848: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneVertexDeclaration",
      Qu = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41946: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogVertex",
      Qu = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41855: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogVertexDeclaration",
      Qu = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41877: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "logDepthDeclaration",
      Qu = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41967: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(39403);
    const Ku = "logDepthVertex",
      Qu = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  61075: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      skyVertexShaderWGSL: () => xu
    });
    var Eu = yu(39403),
      Ku = yu(41877),
      Qu = yu(41848),
      mu = yu(41855),
      Ju = yu(41938),
      Nu = yu(41967),
      Xu = yu(41946);
    const Vu = "skyVertexShader",
      ru = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Eu.e.ShadersStoreWGSL[Vu] || (Eu.e.ShadersStoreWGSL[Vu] = ru);
    const Bu = [Ku.e, Qu.b, mu.b, Ju.c, Nu.c, Xu.e];
    for (const Su of Bu) Eu.e.IncludesShadersStoreWGSL[Su.name] || (Eu.e.IncludesShadersStoreWGSL[Su.name] = Su.shader);
    const xu = {
      name: Vu,
      shader: ru
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);