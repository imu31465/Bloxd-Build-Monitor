export const id = 339;
export const ids = [339];
export const modules = {
  42299: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneVertex",
      TQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42199: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneVertexDeclaration",
      TQ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42304: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogVertex",
      TQ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42207: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogVertexDeclaration",
      TQ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42237: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "logDepthDeclaration",
      TQ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42319: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "logDepthVertex",
      TQ = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  61587: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      skyVertexShader: () => IQ
    });
    var wQ = XQ(40126),
      qQ = XQ(42237),
      TQ = XQ(42199),
      zQ = XQ(42207),
      sQ = XQ(42299),
      FQ = XQ(42319),
      PQ = XQ(42304);
    const gQ = "skyVertexShader",
      JQ = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wQ.b.ShadersStore[gQ] || (wQ.b.ShadersStore[gQ] = JQ);
    const rQ = [qQ.e, TQ.c, zQ.b, sQ.d, FQ.d, PQ.e];
    for (const jQ of rQ) wQ.b.IncludesShadersStore[jQ.name] || (wQ.b.IncludesShadersStore[jQ.name] = jQ.shader);
    const IQ = {
      name: gQ,
      shader: JQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);