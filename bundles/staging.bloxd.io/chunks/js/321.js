export const id = 321;
export const ids = [321];
export const modules = {
  41593: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(39474);
    const MT = "clipPlaneVertex",
      KT = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41503: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(39474);
    const MT = "clipPlaneVertexDeclaration",
      KT = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41601: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(39474);
    const MT = "fogVertex",
      KT = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41507: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(39474);
    const MT = "fogVertexDeclaration",
      KT = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41533: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(39474);
    const MT = "logDepthDeclaration",
      KT = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41617: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(39474);
    const MT = "logDepthVertex",
      KT = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  60606: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      skyVertexShader: () => jT
    });
    var lT = cT(39474),
      MT = cT(41533),
      KT = cT(41503),
      OT = cT(41507),
      yT = cT(41593),
      fT = cT(41617),
      xT = cT(41601);
    const IT = "skyVertexShader",
      AT = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    lT.d.ShadersStore[IT] || (lT.d.ShadersStore[IT] = AT);
    const CT = [MT.e, KT.d, OT.e, yT.b, fT.d, xT.d];
    for (const vT of CT) lT.d.IncludesShadersStore[vT.name] || (lT.d.IncludesShadersStore[vT.name] = vT.shader);
    const jT = {
      name: IT,
      shader: AT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);