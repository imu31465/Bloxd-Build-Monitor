export const id = 300;
export const ids = [300];
export const modules = {
  39482: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneVertex",
      zR = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39394: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneVertexDeclaration",
      zR = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39486: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(37441);
    const CW = "fogVertex",
      zR = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39399: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(37441);
    const CW = "fogVertexDeclaration",
      zR = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39431: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(37441);
    const CW = "logDepthDeclaration",
      zR = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39509: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(37441);
    const CW = "logDepthVertex",
      zR = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    wW.c.IncludesShadersStore[CW] || (wW.c.IncludesShadersStore[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  58641: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      skyVertexShader: () => TW
    });
    var wW = MW(37441),
      CW = MW(39431),
      zR = MW(39394),
      AW = MW(39399),
      bR = MW(39482),
      yR = MW(39509),
      NW = MW(39486);
    const eW = "skyVertexShader",
      BW = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    wW.c.ShadersStore[eW] || (wW.c.ShadersStore[eW] = BW);
    const tR = [CW.e, zR.e, AW.c, bR.c, yR.e, NW.b];
    for (const gR of tR) wW.c.IncludesShadersStore[gR.name] || (wW.c.IncludesShadersStore[gR.name] = gR.shader);
    const TW = {
      name: eW,
      shader: BW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);