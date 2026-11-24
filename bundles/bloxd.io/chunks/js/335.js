export const id = 335;
export const ids = [335];
export const modules = {
  42319: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(40062);
    const op = "clipPlaneVertex",
      Ip = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42226: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(40062);
    const op = "clipPlaneVertexDeclaration",
      Ip = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42327: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(40062);
    const op = "fogVertex",
      Ip = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42232: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(40062);
    const op = "fogVertexDeclaration",
      Ip = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42266: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(40062);
    const op = "logDepthDeclaration",
      Ip = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  42346: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(40062);
    const op = "logDepthVertex",
      Ip = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  },
  61421: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      skyVertexShader: () => Wp
    });
    var Op = cp(40062),
      op = cp(42266),
      Ip = cp(42226),
      Sp = cp(42232),
      xp = cp(42319),
      Lp = cp(42346),
      Yp = cp(42327);
    const Dp = "skyVertexShader",
      Ap = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Op.b.ShadersStore[Dp] || (Op.b.ShadersStore[Dp] = Ap);
    const Pp = [op.e, Ip.c, Sp.e, xp.c, Lp.b, Yp.c];
    for (const yp of Pp) Op.b.IncludesShadersStore[yp.name] || (Op.b.IncludesShadersStore[yp.name] = yp.shader);
    const Wp = {
      name: Dp,
      shader: Ap
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);