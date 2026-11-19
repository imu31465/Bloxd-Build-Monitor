export const id = 320;
export const ids = [320];
export const modules = {
  40834: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(38617);
    const zT = "clipPlaneVertex",
      kT = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40744: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(38617);
    const zT = "clipPlaneVertexDeclaration",
      kT = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40842: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(38617);
    const zT = "fogVertex",
      kT = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40747: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(38617);
    const zT = "fogVertexDeclaration",
      kT = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40775: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(38617);
    const zT = "logDepthDeclaration",
      kT = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40858: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(38617);
    const zT = "logDepthVertex",
      kT = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  60056: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      skyVertexShader: () => xT
    });
    var iT = IT(38617),
      zT = IT(40775),
      kT = IT(40744),
      WT = IT(40747),
      XT = IT(40834),
      BT = IT(40858),
      FT = IT(40842);
    const ST = "skyVertexShader",
      DT = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    iT.c.ShadersStore[ST] || (iT.c.ShadersStore[ST] = DT);
    const LT = [zT.c, kT.c, WT.e, XT.e, BT.e, FT.c];
    for (const cT of LT) iT.c.IncludesShadersStore[cT.name] || (iT.c.IncludesShadersStore[cT.name] = cT.shader);
    const xT = {
      name: ST,
      shader: DT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);