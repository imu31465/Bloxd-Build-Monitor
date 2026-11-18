export const id = 310;
export const ids = [310];
export const modules = {
  40730: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "clipPlaneVertex",
      eJ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40648: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "clipPlaneVertexDeclaration",
      eJ = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40733: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "fogVertex",
      eJ = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40651: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "fogVertexDeclaration",
      eJ = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40676: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "logDepthDeclaration",
      eJ = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  40744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "logDepthVertex",
      eJ = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    FJ.b.IncludesShadersStore[UJ] || (FJ.b.IncludesShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  },
  59452: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      skyVertexShader: () => sJ
    });
    var FJ = ZJ(38658),
      UJ = ZJ(40676),
      eJ = ZJ(40648),
      XJ = ZJ(40651),
      AJ = ZJ(40730),
      qJ = ZJ(40744),
      jJ = ZJ(40733);
    const YJ = "skyVertexShader",
      hJ = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    FJ.b.ShadersStore[YJ] || (FJ.b.ShadersStore[YJ] = hJ);
    const DJ = [UJ.c, eJ.e, XJ.c, AJ.c, qJ.b, jJ.d];
    for (const nJ of DJ) FJ.b.IncludesShadersStore[nJ.name] || (FJ.b.IncludesShadersStore[nJ.name] = nJ.shader);
    const sJ = {
      name: YJ,
      shader: hJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);