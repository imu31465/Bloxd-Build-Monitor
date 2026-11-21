export const id = 321;
export const ids = [321];
export const modules = {
  41428: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneVertex",
      oQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41343: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneVertexDeclaration",
      oQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41431: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogVertex",
      oQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41347: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogVertexDeclaration",
      oQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41368: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "logDepthDeclaration",
      oQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41449: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "logDepthVertex",
      oQ = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    LQ.c.IncludesShadersStore[qQ] || (LQ.c.IncludesShadersStore[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  60695: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      skyVertexShader: () => YQ
    });
    var LQ = wQ(39251),
      qQ = wQ(41368),
      oQ = wQ(41343),
      DQ = wQ(41347),
      kQ = wQ(41428),
      vQ = wQ(41449),
      mQ = wQ(41431);
    const uQ = "skyVertexShader",
      HQ = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    LQ.c.ShadersStore[uQ] || (LQ.c.ShadersStore[uQ] = HQ);
    const bQ = [qQ.c, oQ.c, DQ.e, kQ.e, vQ.c, mQ.b];
    for (const xQ of bQ) LQ.c.IncludesShadersStore[xQ.name] || (LQ.c.IncludesShadersStore[xQ.name] = xQ.shader);
    const YQ = {
      name: uQ,
      shader: HQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);