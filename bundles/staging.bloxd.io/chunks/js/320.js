export const id = 320;
export const ids = [320];
export const modules = {
  41602: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneVertex",
      Qu = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41515: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneVertexDeclaration",
      Qu = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41605: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogVertex",
      Qu = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41519: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogVertexDeclaration",
      Qu = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41548: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "logDepthDeclaration",
      Qu = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41621: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(39403);
    const Ku = "logDepthVertex",
      Qu = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  61062: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      skyVertexShader: () => xu
    });
    var Eu = yu(39403),
      Ku = yu(41548),
      Qu = yu(41515),
      mu = yu(41519),
      Ju = yu(41602),
      Nu = yu(41621),
      Xu = yu(41605);
    const Vu = "skyVertexShader",
      ru = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Eu.e.ShadersStore[Vu] || (Eu.e.ShadersStore[Vu] = ru);
    const Bu = [Ku.e, Qu.e, mu.e, Ju.c, Nu.b, Xu.d];
    for (const Su of Bu) Eu.e.IncludesShadersStore[Su.name] || (Eu.e.IncludesShadersStore[Su.name] = Su.shader);
    const xu = {
      name: Vu,
      shader: ru
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);