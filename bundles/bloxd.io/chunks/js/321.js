export const id = 321;
export const ids = [321];
export const modules = {
  41464: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "clipPlaneVertex",
      Gb = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41371: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "clipPlaneVertexDeclaration",
      Gb = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41470: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "fogVertex",
      Gb = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41373: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "fogVertexDeclaration",
      Gb = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41404: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "logDepthDeclaration",
      Gb = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  41484: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(39308);
    const Ob = "logDepthVertex",
      Gb = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Bb.e.IncludesShadersStore[Ob] || (Bb.e.IncludesShadersStore[Ob] = Gb);
    const Ub = {
      name: Ob,
      shader: Gb
    }
  },
  60645: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      skyVertexShader: () => Zb
    });
    var Bb = hb(39308),
      Ob = hb(41404),
      Gb = hb(41371),
      Ub = hb(41373),
      Lb = hb(41464),
      Yb = hb(41484),
      Sb = hb(41470);
    const ab = "skyVertexShader",
      Hb = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Bb.e.ShadersStore[ab] || (Bb.e.ShadersStore[ab] = Hb);
    const wb = [Ob.e, Gb.d, Ub.b, Lb.e, Yb.c, Sb.d];
    for (const Xb of wb) Bb.e.IncludesShadersStore[Xb.name] || (Bb.e.IncludesShadersStore[Xb.name] = Xb.shader);
    const Zb = {
      name: ab,
      shader: Hb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);