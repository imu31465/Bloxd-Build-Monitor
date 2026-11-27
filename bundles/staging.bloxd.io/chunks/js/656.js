export const id = 656;
export const ids = [656];
export const modules = {
  45598: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneVertex",
      Me = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45499: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneVertexDeclaration",
      Me = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45603: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(40954);
    const be = "fogVertex",
      Me = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45502: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "fogVertexDeclaration",
      Me = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45525: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "logDepthDeclaration",
      Me = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45619: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "logDepthVertex",
      Me = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  63880: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      skyVertexShaderWGSL: () => qe
    });
    var ye = He(40954),
      be = He(45525),
      Me = He(45499),
      Ke = He(45502),
      Ue = He(45598),
      Fe = He(45619),
      Je = He(45603);
    const oe = "skyVertexShader",
      Re = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    ye.d.ShadersStoreWGSL[oe] || (ye.d.ShadersStoreWGSL[oe] = Re);
    const ke = [be.e, Me.e, Ke.e, Ue.c, Fe.e, Je.b];
    for (const fe of ke) ye.d.IncludesShadersStoreWGSL[fe.name] || (ye.d.IncludesShadersStoreWGSL[fe.name] = fe.shader);
    const qe = {
      name: oe,
      shader: Re
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);