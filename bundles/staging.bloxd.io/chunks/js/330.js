export const id = 330;
export const ids = [330];
export const modules = {
  42045: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "clipPlaneVertex",
      ik = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  41953: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "clipPlaneVertexDeclaration",
      ik = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42051: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "fogVertex",
      ik = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  41960: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "fogVertexDeclaration",
      ik = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  41984: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "logDepthDeclaration",
      ik = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  42067: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(39837);
    const Tk = "logDepthVertex",
      ik = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Xk.b.IncludesShadersStore[Tk] || (Xk.b.IncludesShadersStore[Tk] = ik);
    const yk = {
      name: Tk,
      shader: ik
    }
  },
  61333: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      skyVertexShader: () => jk
    });
    var Xk = Ik(39837),
      Tk = Ik(41984),
      ik = Ik(41953),
      yk = Ik(41960),
      lk = Ik(42045),
      ak = Ik(42067),
      qk = Ik(42051);
    const Lk = "skyVertexShader",
      tk = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Xk.b.ShadersStore[Lk] || (Xk.b.ShadersStore[Lk] = tk);
    const Zk = [Tk.e, ik.c, yk.b, lk.d, ak.c, qk.d];
    for (const ek of Zk) Xk.b.IncludesShadersStore[ek.name] || (Xk.b.IncludesShadersStore[ek.name] = ek.shader);
    const jk = {
      name: Lk,
      shader: tk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);