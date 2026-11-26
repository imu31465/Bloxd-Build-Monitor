export const id = 639;
export const ids = [639];
export const modules = {
  45489: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneVertex",
      SH = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45408: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneVertexDeclaration",
      SH = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45497: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(41138);
    const rH = "fogVertex",
      SH = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45417: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(41138);
    const rH = "fogVertexDeclaration",
      SH = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45440: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "logDepthDeclaration",
      SH = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45514: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(41138);
    const rH = "logDepthVertex",
      SH = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  64158: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      skyVertexShader: () => YH
    });
    var AH = LH(41138),
      rH = LH(45440),
      SH = LH(45408),
      hH = LH(45417),
      tH = LH(45489),
      zH = LH(45514),
      CH = LH(45497);
    const EH = "skyVertexShader",
      XH = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    AH.c.ShadersStore[EH] || (AH.c.ShadersStore[EH] = XH);
    const GH = [rH.d, SH.b, hH.c, tH.e, zH.c, CH.e];
    for (const uH of GH) AH.c.IncludesShadersStore[uH.name] || (AH.c.IncludesShadersStore[uH.name] = uH.shader);
    const YH = {
      name: EH,
      shader: XH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);