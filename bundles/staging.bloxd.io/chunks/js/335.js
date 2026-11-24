export const id = 335;
export const ids = [335];
export const modules = {
  42135: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(39932);
    const nB = "clipPlaneVertex",
      dB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    QB.e.IncludesShadersStore[nB] || (QB.e.IncludesShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42039: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(39932);
    const nB = "clipPlaneVertexDeclaration",
      dB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    QB.e.IncludesShadersStore[nB] || (QB.e.IncludesShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42139: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB
    });
    var QB = zB(39932);
    const nB = "fogVertex",
      dB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    QB.e.IncludesShadersStore[nB] || (QB.e.IncludesShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42045: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(39932);
    const nB = "fogVertexDeclaration",
      dB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    QB.e.IncludesShadersStore[nB] || (QB.e.IncludesShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42068: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(39932);
    const nB = "logDepthDeclaration",
      dB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    QB.e.IncludesShadersStore[nB] || (QB.e.IncludesShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  42152: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(39932);
    const nB = "logDepthVertex",
      dB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    QB.e.IncludesShadersStore[nB] || (QB.e.IncludesShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  },
  61485: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      skyVertexShader: () => sB
    });
    var QB = zB(39932),
      nB = zB(42068),
      dB = zB(42039),
      IB = zB(42045),
      NB = zB(42135),
      uB = zB(42152),
      UB = zB(42139);
    const aB = "skyVertexShader",
      pB = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    QB.e.ShadersStore[aB] || (QB.e.ShadersStore[aB] = pB);
    const rB = [nB.e, dB.c, IB.b, NB.e, uB.c, UB.d];
    for (const JB of rB) QB.e.IncludesShadersStore[JB.name] || (QB.e.IncludesShadersStore[JB.name] = JB.shader);
    const sB = {
      name: aB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);