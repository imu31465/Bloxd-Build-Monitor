export const id = 322;
export const ids = [322];
export const modules = {
  40333: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneVertex",
      rB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40242: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneVertexDeclaration",
      rB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40337: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "fogVertex",
      rB = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40249: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(37923);
    const Ic = "fogVertexDeclaration",
      rB = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40267: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "logDepthDeclaration",
      rB = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40356: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "logDepthVertex",
      rB = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  59158: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      skyVertexShaderWGSL: () => fc
    });
    var Vc = nc(37923),
      Ic = nc(40267),
      rB = nc(40242),
      uc = nc(40249),
      sc = nc(40333),
      Mc = nc(40356),
      Pc = nc(40337);
    const qB = "skyVertexShader",
      Oc = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Vc.b.ShadersStoreWGSL[qB] || (Vc.b.ShadersStoreWGSL[qB] = Oc);
    const Tc = [Ic.e, rB.d, uc.b, sc.e, Mc.e, Pc.e];
    for (const mB of Tc) Vc.b.IncludesShadersStoreWGSL[mB.name] || (Vc.b.IncludesShadersStoreWGSL[mB.name] = mB.shader);
    const fc = {
      name: qB,
      shader: Oc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);