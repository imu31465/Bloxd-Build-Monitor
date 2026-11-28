export const id = 666;
export const ids = [666];
export const modules = {
  54837: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(41785);
    const Fd = "clipPlaneVertex",
      Rd = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Wd.e.IncludesShadersStoreWGSL[Fd] || (Wd.e.IncludesShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54731: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(41785);
    const Fd = "clipPlaneVertexDeclaration",
      Rd = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Wd.e.IncludesShadersStoreWGSL[Fd] || (Wd.e.IncludesShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54843: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(41785);
    const Fd = "fogVertex",
      Rd = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Wd.e.IncludesShadersStoreWGSL[Fd] || (Wd.e.IncludesShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54733: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(41785);
    const Fd = "fogVertexDeclaration",
      Rd = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Wd.e.IncludesShadersStoreWGSL[Fd] || (Wd.e.IncludesShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54758: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(41785);
    const Fd = "logDepthDeclaration",
      Rd = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Wd.e.IncludesShadersStoreWGSL[Fd] || (Wd.e.IncludesShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  54856: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(41785);
    const Fd = "logDepthVertex",
      Rd = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Wd.e.IncludesShadersStoreWGSL[Fd] || (Wd.e.IncludesShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  },
  64845: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      skyVertexShaderWGSL: () => Nd
    });
    var Wd = md(41785),
      Fd = md(54758),
      Rd = md(54731),
      Xd = md(54733),
      Kd = md(54837),
      hd = md(54856),
      vd = md(54843);
    const Qd = "skyVertexShader",
      td = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Wd.e.ShadersStoreWGSL[Qd] || (Wd.e.ShadersStoreWGSL[Qd] = td);
    const od = [Fd.d, Rd.c, Xd.d, Kd.b, hd.b, vd.c];
    for (const qd of od) Wd.e.IncludesShadersStoreWGSL[qd.name] || (Wd.e.IncludesShadersStoreWGSL[qd.name] = qd.shader);
    const Nd = {
      name: Qd,
      shader: td
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);