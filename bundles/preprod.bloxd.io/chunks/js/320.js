export const id = 320;
export const ids = [320];
export const modules = {
  41226: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(39033);
    const nz = "clipPlaneVertex",
      iz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41141: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(39033);
    const nz = "clipPlaneVertexDeclaration",
      iz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41235: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez = bz(39033);
    const nz = "fogVertex",
      iz = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41147: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(39033);
    const nz = "fogVertexDeclaration",
      iz = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41171: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(39033);
    const nz = "logDepthDeclaration",
      iz = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  41259: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez = bz(39033);
    const nz = "logDepthVertex",
      iz = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
    const lz = {
      name: nz,
      shader: iz
    }
  },
  60380: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      skyVertexShader: () => Fz
    });
    var Ez = bz(39033),
      nz = bz(41171),
      iz = bz(41141),
      lz = bz(41147),
      Mz = bz(41226),
      tz = bz(41259),
      Hz = bz(41235);
    const Oz = "skyVertexShader",
      pz = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ez.e.ShadersStore[Oz] || (Ez.e.ShadersStore[Oz] = pz);
    const dz = [nz.d, iz.c, lz.e, Mz.d, tz.b, Hz.b];
    for (const Zz of dz) Ez.e.IncludesShadersStore[Zz.name] || (Ez.e.IncludesShadersStore[Zz.name] = Zz.shader);
    const Fz = {
      name: Oz,
      shader: pz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);