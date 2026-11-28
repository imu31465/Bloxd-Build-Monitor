export const id = 649;
export const ids = [649];
export const modules = {
  54451: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(41785);
    const Fd = "clipPlaneVertex",
      Rd = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54365: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(41785);
    const Fd = "clipPlaneVertexDeclaration",
      Rd = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54455: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(41785);
    const Fd = "fogVertex",
      Rd = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54368: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(41785);
    const Fd = "fogVertexDeclaration",
      Rd = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54394: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(41785);
    const Fd = "logDepthDeclaration",
      Rd = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54471: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(41785);
    const Fd = "logDepthVertex",
      Rd = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Wd.e.IncludesShadersStore[Fd] || (Wd.e.IncludesShadersStore[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  64832: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      skyVertexShader: () => Nd
    });
    var Wd = md(41785),
      Fd = md(54394),
      Rd = md(54365),
      Xd = md(54368),
      Kd = md(54451),
      hd = md(54471),
      vd = md(54455);
    const Qd = "skyVertexShader",
      td = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Wd.e.ShadersStore[Qd] || (Wd.e.ShadersStore[Qd] = td);
    const od = [Fd.c, Rd.e, Xd.c, Kd.c, hd.b, vd.e];
    for (const qd of od) Wd.e.IncludesShadersStore[qd.name] || (Wd.e.IncludesShadersStore[qd.name] = qd.shader);
    const Nd = {
      name: Qd,
      shader: td
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);