export const id = 320;
export const ids = [320];
export const modules = {
  41122: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "clipPlaneVertex",
      Xz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41034: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "clipPlaneVertexDeclaration",
      Xz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41127: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "fogVertex",
      Xz = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41041: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "fogVertexDeclaration",
      Xz = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41072: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "logDepthDeclaration",
      Xz = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41148: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "logDepthVertex",
      Xz = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Fz.e.IncludesShadersStore[Wz] || (Fz.e.IncludesShadersStore[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  60377: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      skyVertexShader: () => bz
    });
    var Fz = sz(39041),
      Wz = sz(41072),
      Xz = sz(41034),
      Oz = sz(41041),
      oz = sz(41122),
      vz = sz(41148),
      Uz = sz(41127);
    const Kz = "skyVertexShader",
      uz = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Fz.e.ShadersStore[Kz] || (Fz.e.ShadersStore[Kz] = uz);
    const Nz = [Wz.c, Xz.c, Oz.b, oz.e, vz.d, Uz.b];
    for (const wz of Nz) Fz.e.IncludesShadersStore[wz.name] || (Fz.e.IncludesShadersStore[wz.name] = wz.shader);
    const bz = {
      name: Kz,
      shader: uz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);