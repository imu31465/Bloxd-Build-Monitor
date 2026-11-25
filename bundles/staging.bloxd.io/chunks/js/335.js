export const id = 335;
export const ids = [335];
export const modules = {
  42290: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(40061);
    const qt = "clipPlaneVertex",
      Dt = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Ot.b.IncludesShadersStore[qt] || (Ot.b.IncludesShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42210: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(40061);
    const qt = "clipPlaneVertexDeclaration",
      Dt = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Ot.b.IncludesShadersStore[qt] || (Ot.b.IncludesShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42294: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(40061);
    const qt = "fogVertex",
      Dt = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Ot.b.IncludesShadersStore[qt] || (Ot.b.IncludesShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42218: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(40061);
    const qt = "fogVertexDeclaration",
      Dt = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Ot.b.IncludesShadersStore[qt] || (Ot.b.IncludesShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42240: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(40061);
    const qt = "logDepthDeclaration",
      Dt = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Ot.b.IncludesShadersStore[qt] || (Ot.b.IncludesShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  42311: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(40061);
    const qt = "logDepthVertex",
      Dt = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Ot.b.IncludesShadersStore[qt] || (Ot.b.IncludesShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  },
  61581: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      skyVertexShader: () => Et
    });
    var Ot = Vt(40061),
      qt = Vt(42240),
      Dt = Vt(42210),
      mt = Vt(42218),
      dt = Vt(42290),
      jt = Vt(42311),
      Ht = Vt(42294);
    const Xt = "skyVertexShader",
      Qt = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ot.b.ShadersStore[Xt] || (Ot.b.ShadersStore[Xt] = Qt);
    const lt = [qt.d, Dt.d, mt.b, dt.c, jt.e, Ht.b];
    for (const ft of lt) Ot.b.IncludesShadersStore[ft.name] || (Ot.b.IncludesShadersStore[ft.name] = ft.shader);
    const Et = {
      name: Xt,
      shader: Qt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);