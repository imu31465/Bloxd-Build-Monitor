export const id = 639;
export const ids = [639];
export const modules = {
  45234: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneVertex",
      Me = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45143: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneVertexDeclaration",
      Me = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45238: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "fogVertex",
      Me = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45152: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "fogVertexDeclaration",
      Me = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45186: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "logDepthDeclaration",
      Me = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45259: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40954);
    const be = "logDepthVertex",
      Me = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  63872: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      skyVertexShader: () => qe
    });
    var ye = He(40954),
      be = He(45186),
      Me = He(45143),
      Ke = He(45152),
      Ue = He(45234),
      Fe = He(45259),
      Je = He(45238);
    const oe = "skyVertexShader",
      Re = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    ye.d.ShadersStore[oe] || (ye.d.ShadersStore[oe] = Re);
    const ke = [be.e, Me.b, Ke.c, Ue.c, Fe.d, Je.c];
    for (const fe of ke) ye.d.IncludesShadersStore[fe.name] || (ye.d.IncludesShadersStore[fe.name] = fe.shader);
    const qe = {
      name: oe,
      shader: Re
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);