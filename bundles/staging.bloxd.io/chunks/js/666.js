export const id = 666;
export const ids = [666];
export const modules = {
  54876: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "clipPlaneVertex",
      ar = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54788: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "clipPlaneVertexDeclaration",
      ar = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54879: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fogVertex",
      ar = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54792: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fogVertexDeclaration",
      ar = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54814: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "logDepthDeclaration",
      ar = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  54895: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "logDepthVertex",
      ar = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Zr.e.IncludesShadersStoreWGSL[Wr] || (Zr.e.IncludesShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  },
  64675: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      skyVertexShaderWGSL: () => Nr
    });
    var Zr = Qr(41743),
      Wr = Qr(54814),
      ar = Qr(54788),
      jr = Qr(54792),
      Ir = Qr(54876),
      fr = Qr(54895),
      Er = Qr(54879);
    const pr = "skyVertexShader",
      xr = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Zr.e.ShadersStoreWGSL[pr] || (Zr.e.ShadersStoreWGSL[pr] = xr);
    const mr = [Wr.e, ar.b, jr.c, Ir.b, fr.b, Er.b];
    for (const Ur of mr) Zr.e.IncludesShadersStoreWGSL[Ur.name] || (Zr.e.IncludesShadersStoreWGSL[Ur.name] = Ur.shader);
    const Nr = {
      name: pr,
      shader: xr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);