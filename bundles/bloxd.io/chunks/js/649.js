export const id = 649;
export const ids = [649];
export const modules = {
  54543: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "clipPlaneVertex",
      ar = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54463: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "clipPlaneVertexDeclaration",
      ar = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54546: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fogVertex",
      ar = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54468: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fogVertexDeclaration",
      ar = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54498: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "logDepthDeclaration",
      ar = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54563: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "logDepthVertex",
      ar = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  64664: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      skyVertexShader: () => Nr
    });
    var Zr = Qr(41743),
      Wr = Qr(54498),
      ar = Qr(54463),
      jr = Qr(54468),
      Ir = Qr(54543),
      fr = Qr(54563),
      Er = Qr(54546);
    const pr = "skyVertexShader",
      xr = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Zr.e.ShadersStore[pr] || (Zr.e.ShadersStore[pr] = xr);
    const mr = [Wr.c, ar.b, jr.b, Ir.c, fr.c, Er.e];
    for (const Ur of mr) Zr.e.IncludesShadersStore[Ur.name] || (Zr.e.IncludesShadersStore[Ur.name] = Ur.shader);
    const Nr = {
      name: pr,
      shader: xr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);