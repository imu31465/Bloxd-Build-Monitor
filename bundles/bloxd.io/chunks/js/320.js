export const id = 320;
export const ids = [320];
export const modules = {
  41457: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "clipPlaneVertex",
      ak = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41370: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "clipPlaneVertexDeclaration",
      ak = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41459: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "fogVertex",
      ak = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "fogVertexDeclaration",
      ak = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41395: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "logDepthDeclaration",
      ak = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41479: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "logDepthVertex",
      ak = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  60962: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      skyVertexShader: () => Ak
    });
    var Rk = Bk(39270),
      tk = Bk(41395),
      ak = Bk(41370),
      Xk = Bk(41372),
      bk = Bk(41457),
      wk = Bk(41479),
      dk = Bk(41459);
    const sk = "skyVertexShader",
      Vk = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Rk.d.ShadersStore[sk] || (Rk.d.ShadersStore[sk] = Vk);
    const Jk = [tk.b, ak.e, Xk.c, bk.c, wk.e, dk.c];
    for (const ek of Jk) Rk.d.IncludesShadersStore[ek.name] || (Rk.d.IncludesShadersStore[ek.name] = ek.shader);
    const Ak = {
      name: sk,
      shader: Vk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);