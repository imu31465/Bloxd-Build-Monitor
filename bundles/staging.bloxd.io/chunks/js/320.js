export const id = 320;
export const ids = [320];
export const modules = {
  41064: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneVertex",
      IY = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  40996: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneVertexDeclaration",
      IY = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41066: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(38998);
    const AY = "fogVertex",
      IY = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  40998: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(38998);
    const AY = "fogVertexDeclaration",
      IY = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41019: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(38998);
    const AY = "logDepthDeclaration",
      IY = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41078: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(38998);
    const AY = "logDepthVertex",
      IY = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  60264: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      skyVertexShader: () => iY
    });
    var FY = DY(38998),
      AY = DY(41019),
      IY = DY(40996),
      RY = DY(40998),
      OY = DY(41064),
      gY = DY(41078),
      aY = DY(41066);
    const vY = "skyVertexShader",
      uY = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    FY.b.ShadersStore[vY] || (FY.b.ShadersStore[vY] = uY);
    const sY = [AY.d, IY.e, RY.c, OY.c, gY.c, aY.d];
    for (const yY of sY) FY.b.IncludesShadersStore[yY.name] || (FY.b.IncludesShadersStore[yY.name] = yY.shader);
    const iY = {
      name: vY,
      shader: uY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);