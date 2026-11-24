export const id = 335;
export const ids = [335];
export const modules = {
  42168: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(39934);
    const zT = "clipPlaneVertex",
      MT = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    WT.d.IncludesShadersStore[zT] || (WT.d.IncludesShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42080: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(39934);
    const zT = "clipPlaneVertexDeclaration",
      MT = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    WT.d.IncludesShadersStore[zT] || (WT.d.IncludesShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42176: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(39934);
    const zT = "fogVertex",
      MT = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    WT.d.IncludesShadersStore[zT] || (WT.d.IncludesShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42089: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT
    });
    var WT = mT(39934);
    const zT = "fogVertexDeclaration",
      MT = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    WT.d.IncludesShadersStore[zT] || (WT.d.IncludesShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42111: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(39934);
    const zT = "logDepthDeclaration",
      MT = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    WT.d.IncludesShadersStore[zT] || (WT.d.IncludesShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  42189: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT
    });
    var WT = mT(39934);
    const zT = "logDepthVertex",
      MT = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    WT.d.IncludesShadersStore[zT] || (WT.d.IncludesShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  },
  61198: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      skyVertexShader: () => pT
    });
    var WT = mT(39934),
      zT = mT(42111),
      MT = mT(42080),
      gT = mT(42089),
      nT = mT(42168),
      HT = mT(42189),
      kT = mT(42176);
    const jT = "skyVertexShader",
      lT = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    WT.d.ShadersStore[jT] || (WT.d.ShadersStore[jT] = lT);
    const LT = [zT.d, MT.b, gT.e, nT.c, HT.e, kT.d];
    for (const BT of LT) WT.d.IncludesShadersStore[BT.name] || (WT.d.IncludesShadersStore[BT.name] = BT.shader);
    const pT = {
      name: jT,
      shader: lT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);