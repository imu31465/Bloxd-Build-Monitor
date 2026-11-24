export const id = 330;
export const ids = [330];
export const modules = {
  42040: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneVertex",
      am = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  41960: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneVertexDeclaration",
      am = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42046: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "fogVertex",
      am = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  41968: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(39960);
    const Am = "fogVertexDeclaration",
      am = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  41991: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(39960);
    const Am = "logDepthDeclaration",
      am = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42064: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(39960);
    const Am = "logDepthVertex",
      am = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  61385: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      skyVertexShader: () => om
    });
    var hm = fm(39960),
      Am = fm(41991),
      am = fm(41960),
      xm = fm(41968),
      wm = fm(42040),
      Dm = fm(42064),
      im = fm(42046);
    const Rm = "skyVertexShader",
      pm = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    hm.e.ShadersStore[Rm] || (hm.e.ShadersStore[Rm] = pm);
    const Em = [Am.e, am.e, xm.b, wm.c, Dm.e, im.c];
    for (const Om of Em) hm.e.IncludesShadersStore[Om.name] || (hm.e.IncludesShadersStore[Om.name] = Om.shader);
    const om = {
      name: Rm,
      shader: pm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);