export const id = 310;
export const ids = [310];
export const modules = {
  40728: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(38595);
    const yB = "clipPlaneVertex",
      pB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40633: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(38595);
    const yB = "clipPlaneVertexDeclaration",
      pB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40730: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(38595);
    const yB = "fogVertex",
      pB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40638: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(38595);
    const yB = "fogVertexDeclaration",
      pB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40680: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(38595);
    const yB = "logDepthDeclaration",
      pB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  40753: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(38595);
    const yB = "logDepthVertex",
      pB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    VB.e.IncludesShadersStore[yB] || (VB.e.IncludesShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  },
  59775: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      skyVertexShader: () => OB
    });
    var VB = dB(38595),
      yB = dB(40680),
      pB = dB(40633),
      lB = dB(40638),
      JB = dB(40728),
      YB = dB(40753),
      gB = dB(40730);
    const oB = "skyVertexShader",
      kB = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    VB.e.ShadersStore[oB] || (VB.e.ShadersStore[oB] = kB);
    const LB = [yB.c, pB.c, lB.d, JB.e, YB.c, gB.c];
    for (const DB of LB) VB.e.IncludesShadersStore[DB.name] || (VB.e.IncludesShadersStore[DB.name] = DB.shader);
    const OB = {
      name: oB,
      shader: kB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);