export const id = 320;
export const ids = [320];
export const modules = {
  41128: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "clipPlaneVertex",
      Tb = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41041: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "clipPlaneVertexDeclaration",
      Tb = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41137: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "fogVertex",
      Tb = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41043: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "fogVertexDeclaration",
      Tb = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41068: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "logDepthDeclaration",
      Tb = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  41154: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "logDepthVertex",
      Tb = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Ab.d.IncludesShadersStore[Mb] || (Ab.d.IncludesShadersStore[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  },
  60315: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      skyVertexShader: () => Xb
    });
    var Ab = Ub(38943),
      Mb = Ub(41068),
      Tb = Ub(41041),
      Eb = Ub(41043),
      Yb = Ub(41128),
      Bb = Ub(41154),
      eb = Ub(41137);
    const vb = "skyVertexShader",
      Lb = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ab.d.ShadersStore[vb] || (Ab.d.ShadersStore[vb] = Lb);
    const Pb = [Mb.e, Tb.d, Eb.e, Yb.e, Bb.d, eb.c];
    for (const jb of Pb) Ab.d.IncludesShadersStore[jb.name] || (Ab.d.IncludesShadersStore[jb.name] = jb.shader);
    const Xb = {
      name: vb,
      shader: Lb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);