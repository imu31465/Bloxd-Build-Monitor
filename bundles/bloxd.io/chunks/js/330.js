export const id = 330;
export const ids = [330];
export const modules = {
  41937: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(39776);
    const sD = "clipPlaneVertex",
      KD = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  41856: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(39776);
    const sD = "clipPlaneVertexDeclaration",
      KD = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  41942: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(39776);
    const sD = "fogVertex",
      KD = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  41859: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(39776);
    const sD = "fogVertexDeclaration",
      KD = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  41887: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(39776);
    const sD = "logDepthDeclaration",
      KD = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  41951: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(39776);
    const sD = "logDepthVertex",
      KD = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    pD.e.IncludesShadersStore[sD] || (pD.e.IncludesShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  },
  61089: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      skyVertexShader: () => fD
    });
    var pD = wD(39776),
      sD = wD(41887),
      KD = wD(41856),
      rD = wD(41859),
      LD = wD(41937),
      cD = wD(41951),
      gD = wD(41942);
    const RD = "skyVertexShader",
      AD = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    pD.e.ShadersStore[RD] || (pD.e.ShadersStore[RD] = AD);
    const UD = [sD.e, KD.b, rD.e, LD.c, cD.e, gD.e];
    for (const ID of UD) pD.e.IncludesShadersStore[ID.name] || (pD.e.IncludesShadersStore[ID.name] = ID.shader);
    const fD = {
      name: RD,
      shader: AD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);