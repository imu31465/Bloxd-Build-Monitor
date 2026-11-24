export const id = 335;
export const ids = [335];
export const modules = {
  42058: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(39905);
    const JB = "clipPlaneVertex",
      oB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  41968: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(39905);
    const JB = "clipPlaneVertexDeclaration",
      oB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42062: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(39905);
    const JB = "fogVertex",
      oB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  41976: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(39905);
    const JB = "fogVertexDeclaration",
      oB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42003: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(39905);
    const JB = "logDepthDeclaration",
      oB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42086: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(39905);
    const JB = "logDepthVertex",
      oB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  61362: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      skyVertexShader: () => FB
    });
    var TB = ZB(39905),
      JB = ZB(42003),
      oB = ZB(41968),
      GB = ZB(41976),
      vB = ZB(42058),
      kB = ZB(42086),
      cB = ZB(42062);
    const nB = "skyVertexShader",
      hB = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    TB.c.ShadersStore[nB] || (TB.c.ShadersStore[nB] = hB);
    const zB = [JB.b, oB.b, GB.e, vB.b, kB.e, cB.b];
    for (const NB of zB) TB.c.IncludesShadersStore[NB.name] || (TB.c.IncludesShadersStore[NB.name] = NB.shader);
    const FB = {
      name: nB,
      shader: hB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);