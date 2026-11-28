export const id = 649;
export const ids = [649];
export const modules = {
  54246: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "clipPlaneVertex",
      pb = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54169: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "clipPlaneVertexDeclaration",
      pb = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54254: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "fogVertex",
      pb = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54178: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "fogVertexDeclaration",
      pb = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54200: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "logDepthDeclaration",
      pb = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  54280: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(41518);
    const Hb = "logDepthVertex",
      pb = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    eb.e.IncludesShadersStore[Hb] || (eb.e.IncludesShadersStore[Hb] = pb);
    const Vb = {
      name: Hb,
      shader: pb
    }
  },
  64469: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      skyVertexShader: () => tb
    });
    var eb = Mb(41518),
      Hb = Mb(54200),
      pb = Mb(54169),
      Vb = Mb(54178),
      gb = Mb(54246),
      lb = Mb(54280),
      Lb = Mb(54254);
    const Ib = "skyVertexShader",
      Ob = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    eb.e.ShadersStore[Ib] || (eb.e.ShadersStore[Ib] = Ob);
    const Ub = [Hb.e, pb.b, Vb.b, gb.b, lb.b, Lb.c];
    for (const Cb of Ub) eb.e.IncludesShadersStore[Cb.name] || (eb.e.IncludesShadersStore[Cb.name] = Cb.shader);
    const tb = {
      name: Ib,
      shader: Ob
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);