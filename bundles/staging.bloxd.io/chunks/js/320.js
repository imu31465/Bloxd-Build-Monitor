export const id = 320;
export const ids = [320];
export const modules = {
  41377: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneVertex",
      EU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41294: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneVertexDeclaration",
      EU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41384: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(39225);
    const pU = "fogVertex",
      EU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41296: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(39225);
    const pU = "fogVertexDeclaration",
      EU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41331: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(39225);
    const pU = "logDepthDeclaration",
      EU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41399: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "logDepthVertex",
      EU = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  60589: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      skyVertexShader: () => uU
    });
    var tU = gU(39225),
      pU = gU(41331),
      EU = gU(41294),
      PU = gU(41296),
      TU = gU(41377),
      qU = gU(41399),
      KU = gU(41384);
    const cU = "skyVertexShader",
      GU = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    tU.d.ShadersStore[cU] || (tU.d.ShadersStore[cU] = GU);
    const jU = [pU.d, EU.e, PU.d, TU.d, qU.e, KU.b];
    for (const CU of jU) tU.d.IncludesShadersStore[CU.name] || (tU.d.IncludesShadersStore[CU.name] = CU.shader);
    const uU = {
      name: cU,
      shader: GU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);