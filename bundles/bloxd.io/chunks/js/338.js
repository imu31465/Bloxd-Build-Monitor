export const id = 338;
export const ids = [338];
export const modules = {
  42324: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(39829);
    const Nd = "clipPlaneVertex",
      Wd = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    pd.c.IncludesShadersStoreWGSL[Nd] || (pd.c.IncludesShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42237: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(39829);
    const Nd = "clipPlaneVertexDeclaration",
      Wd = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    pd.c.IncludesShadersStoreWGSL[Nd] || (pd.c.IncludesShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42326: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(39829);
    const Nd = "fogVertex",
      Wd = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    pd.c.IncludesShadersStoreWGSL[Nd] || (pd.c.IncludesShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42242: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(39829);
    const Nd = "fogVertexDeclaration",
      Wd = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    pd.c.IncludesShadersStoreWGSL[Nd] || (pd.c.IncludesShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42265: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(39829);
    const Nd = "logDepthDeclaration",
      Wd = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    pd.c.IncludesShadersStoreWGSL[Nd] || (pd.c.IncludesShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42341: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(39829);
    const Nd = "logDepthVertex",
      Wd = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    pd.c.IncludesShadersStoreWGSL[Nd] || (pd.c.IncludesShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  60950: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      skyVertexShaderWGSL: () => Qd
    });
    var pd = kd(39829),
      Nd = kd(42265),
      Wd = kd(42237),
      Pd = kd(42242),
      Zd = kd(42324),
      gd = kd(42341),
      Cd = kd(42326);
    const Kd = "skyVertexShader",
      od = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    pd.c.ShadersStoreWGSL[Kd] || (pd.c.ShadersStoreWGSL[Kd] = od);
    const ld = [Nd.e, Wd.d, Pd.b, Zd.c, gd.b, Cd.e];
    for (const Ld of ld) pd.c.IncludesShadersStoreWGSL[Ld.name] || (pd.c.IncludesShadersStoreWGSL[Ld.name] = Ld.shader);
    const Qd = {
      name: Kd,
      shader: od
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);