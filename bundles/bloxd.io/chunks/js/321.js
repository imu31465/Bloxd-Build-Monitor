export const id = 321;
export const ids = [321];
export const modules = {
  41798: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(39617);
    const lq = "clipPlaneVertex",
      Oq = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41715: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(39617);
    const lq = "clipPlaneVertexDeclaration",
      Oq = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41801: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "fogVertex",
      Oq = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41722: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(39617);
    const lq = "fogVertexDeclaration",
      Oq = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41747: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(39617);
    const lq = "logDepthDeclaration",
      Oq = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  41811: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(39617);
    const lq = "logDepthVertex",
      Oq = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
    const mq = {
      name: lq,
      shader: Oq
    }
  },
  61180: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      skyVertexShader: () => Nq
    });
    var Yq = gq(39617),
      lq = gq(41747),
      Oq = gq(41715),
      mq = gq(41722),
      xq = gq(41798),
      Aq = gq(41811),
      cq = gq(41801);
    const uq = "skyVertexShader",
      Bq = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Yq.d.ShadersStore[uq] || (Yq.d.ShadersStore[uq] = Bq);
    const Wq = [lq.d, Oq.b, mq.e, xq.b, Aq.b, cq.d];
    for (const aq of Wq) Yq.d.IncludesShadersStore[aq.name] || (Yq.d.IncludesShadersStore[aq.name] = aq.shader);
    const Nq = {
      name: uq,
      shader: Bq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);