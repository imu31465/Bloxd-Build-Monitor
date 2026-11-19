export const id = 320;
export const ids = [320];
export const modules = {
  41159: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneVertex",
      iD = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41063: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneVertexDeclaration",
      iD = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41166: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39003);
    const pD = "fogVertex",
      iD = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41066: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39003);
    const pD = "fogVertexDeclaration",
      iD = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41093: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39003);
    const pD = "logDepthDeclaration",
      iD = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41181: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "logDepthVertex",
      iD = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  60450: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      skyVertexShader: () => MD
    });
    var ID = cD(39003),
      pD = cD(41093),
      iD = cD(41063),
      fD = cD(41066),
      bD = cD(41159),
      QD = cD(41181),
      wD = cD(41166);
    const SD = "skyVertexShader",
      BD = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    ID.e.ShadersStore[SD] || (ID.e.ShadersStore[SD] = BD);
    const yD = [pD.e, iD.d, fD.e, bD.c, QD.c, wD.e];
    for (const tD of yD) ID.e.IncludesShadersStore[tD.name] || (ID.e.IncludesShadersStore[tD.name] = tD.shader);
    const MD = {
      name: SD,
      shader: BD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);