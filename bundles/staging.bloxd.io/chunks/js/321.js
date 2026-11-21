export const id = 321;
export const ids = [321];
export const modules = {
  41976: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(39829);
    const Nd = "clipPlaneVertex",
      Wd = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  41902: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(39829);
    const Nd = "clipPlaneVertexDeclaration",
      Wd = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  41981: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(39829);
    const Nd = "fogVertex",
      Wd = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  41907: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(39829);
    const Nd = "fogVertexDeclaration",
      Wd = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  41933: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(39829);
    const Nd = "logDepthDeclaration",
      Wd = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  42005: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(39829);
    const Nd = "logDepthVertex",
      Wd = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    pd.c.IncludesShadersStore[Nd] || (pd.c.IncludesShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  },
  60939: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      skyVertexShader: () => Qd
    });
    var pd = kd(39829),
      Nd = kd(41933),
      Wd = kd(41902),
      Pd = kd(41907),
      Zd = kd(41976),
      gd = kd(42005),
      Cd = kd(41981);
    const Kd = "skyVertexShader",
      od = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    pd.c.ShadersStore[Kd] || (pd.c.ShadersStore[Kd] = od);
    const ld = [Nd.e, Wd.d, Pd.e, Zd.b, gd.c, Cd.b];
    for (const Ld of ld) pd.c.IncludesShadersStore[Ld.name] || (pd.c.IncludesShadersStore[Ld.name] = Ld.shader);
    const Qd = {
      name: Kd,
      shader: od
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);