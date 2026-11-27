export const id = 648;
export const ids = [648];
export const modules = {
  54222: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(41392);
    const EW = "clipPlaneVertex",
      NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54132: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(41392);
    const EW = "clipPlaneVertexDeclaration",
      NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54229: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(41392);
    const EW = "fogVertex",
      NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54138: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(41392);
    const EW = "fogVertexDeclaration",
      NW = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54166: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "logDepthDeclaration",
      NW = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  54246: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(41392);
    const EW = "logDepthVertex",
      NW = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  },
  64447: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      skyVertexShader: () => lW
    });
    var mW = OW(41392),
      EW = OW(54166),
      NW = OW(54132),
      PW = OW(54138),
      LW = OW(54222),
      cW = OW(54246),
      wW = OW(54229);
    const tW = "skyVertexShader",
      ZW = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    mW.c.ShadersStore[tW] || (mW.c.ShadersStore[tW] = ZW);
    const xW = [EW.b, NW.e, PW.c, LW.e, cW.b, wW.d];
    for (const AW of xW) mW.c.IncludesShadersStore[AW.name] || (mW.c.IncludesShadersStore[AW.name] = AW.shader);
    const lW = {
      name: tW,
      shader: ZW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);