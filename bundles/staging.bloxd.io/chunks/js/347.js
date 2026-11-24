export const id = 347;
export const ids = [347];
export const modules = {
  42401: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneVertex",
      am = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42313: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneVertexDeclaration",
      am = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42407: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(39960);
    const Am = "fogVertex",
      am = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42317: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "fogVertexDeclaration",
      am = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42338: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "logDepthDeclaration",
      am = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42416: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "logDepthVertex",
      am = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  61397: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      skyVertexShaderWGSL: () => om
    });
    var hm = fm(39960),
      Am = fm(42338),
      am = fm(42313),
      xm = fm(42317),
      wm = fm(42401),
      Dm = fm(42416),
      im = fm(42407);
    const Rm = "skyVertexShader",
      pm = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    hm.e.ShadersStoreWGSL[Rm] || (hm.e.ShadersStoreWGSL[Rm] = pm);
    const Em = [Am.c, am.b, xm.c, wm.d, Dm.c, im.b];
    for (const Om of Em) hm.e.IncludesShadersStoreWGSL[Om.name] || (hm.e.IncludesShadersStoreWGSL[Om.name] = Om.shader);
    const om = {
      name: Rm,
      shader: pm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);