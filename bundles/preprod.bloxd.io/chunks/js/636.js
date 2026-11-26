export const id = 636;
export const ids = [636];
export const modules = {
  44713: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(40961);
    const yU = "clipPlaneVertex",
      QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44634: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(40961);
    const yU = "clipPlaneVertexDeclaration",
      QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44721: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(40961);
    const yU = "fogVertex",
      QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44642: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(40961);
    const yU = "fogVertexDeclaration",
      QU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44671: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(40961);
    const yU = "logDepthDeclaration",
      QU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44732: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(40961);
    const yU = "logDepthVertex",
      QU = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  63999: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      skyVertexShader: () => IU
    });
    var cU = zU(40961),
      yU = zU(44671),
      QU = zU(44634),
      AU = zU(44642),
      FU = zU(44713),
      oU = zU(44732),
      DU = zU(44721);
    const EU = "skyVertexShader",
      YU = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    cU.b.ShadersStore[EU] || (cU.b.ShadersStore[EU] = YU);
    const NU = [yU.e, QU.c, AU.c, FU.d, oU.d, DU.d];
    for (const pU of NU) cU.b.IncludesShadersStore[pU.name] || (cU.b.IncludesShadersStore[pU.name] = pU.shader);
    const IU = {
      name: EU,
      shader: YU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);