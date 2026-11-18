export const id = 325;
export const ids = [325];
export const modules = {
  40865: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneVertex",
      fy = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40767: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneVertexDeclaration",
      fy = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40871: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogVertex",
      fy = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40773: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogVertexDeclaration",
      fy = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40799: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "logDepthDeclaration",
      fy = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40888: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "logDepthVertex",
      fy = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  59763: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      skyVertexShaderWGSL: () => qb
    });
    var Uy = Wy(38319),
      hy = Wy(40799),
      fy = Wy(40767),
      Zy = Wy(40773),
      cb = Wy(40865),
      Py = Wy(40888),
      oy = Wy(40871);
    const By = "skyVertexShader",
      Ky = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Uy.e.ShadersStoreWGSL[By] || (Uy.e.ShadersStoreWGSL[By] = Ky);
    const ey = [hy.c, fy.c, Zy.b, cb.c, Py.c, oy.b];
    for (const sy of ey) Uy.e.IncludesShadersStoreWGSL[sy.name] || (Uy.e.IncludesShadersStoreWGSL[sy.name] = sy.shader);
    const qb = {
      name: By,
      shader: Ky
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);