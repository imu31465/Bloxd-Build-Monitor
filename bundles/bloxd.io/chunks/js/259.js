export const id = 259;
export const ids = [259];
export const modules = {
  64307: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      DEVTOOLS_SHADERS: () => UV,
      registerDevtoolsShader: () => yV
    });
    var JV = xV(41108),
      YV = xV(38399);
    const UV = {
      devtoolsNormal: function(VV) {
        return {
          vertex: `\n\t\t\t${(0,YV.f)(VV,"position","vec3")}\n\t\t\t${(0,YV.f)(VV,"normal","vec3")}\n\t\t\t${(0,YV.Db)(VV,"worldViewProjection","mat4")}\n\t\t\t${(0,YV.Db)(VV,"world","mat4")}\n\t\t\t${(0,YV.Ib)(VV,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,YV.Jb)(VV,`\n\t\t\t\t${(0,YV.m)(VV)} = ${(0,YV.Gb)(VV,"worldViewProjection")} * ${(0,YV.p)(VV,"vec4",(0,YV.Kb)(VV,"position"),"1.0")};\n\t\t\t\t${(0,YV.Nb)(VV,"vNormal")} = normalize((${(0,YV.Gb)(VV,"world")} * ${(0,YV.p)(VV,"vec4",(0,YV.Kb)(VV,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,YV.Ib)(VV,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,YV.V)(VV,`\n\t\t\t\t\n\t\t\t\t${(0,YV.F)(VV,"vec3","normalColor",`abs(${(0,YV.X)(VV,"vNormal")})`)}\n\t\t\t\t${(0,YV.S)(VV)} = ${(0,YV.p)(VV,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(VV) {
        return {
          vertex: `\n\t\t\t${(0,YV.f)(VV,"position","vec3")}\n\t\t\t${(0,YV.Db)(VV,"worldViewProjection","mat4")}\n\n\t\t\t${(0,YV.Jb)(VV,`\n\t\t\t\t${(0,YV.m)(VV)} = ${(0,YV.Gb)(VV,"worldViewProjection")} * ${(0,YV.p)(VV,"vec4",(0,YV.Kb)(VV,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,YV.V)(VV,`\n\t\t\t\t${(0,YV.S)(VV)} = ${(0,YV.p)(VV,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(VV) {
        return {
          vertex: `\n\t\t\t${(0,YV.f)(VV,"position","vec3")}\n\t\t\t${(0,YV.Db)(VV,"worldViewProjection","mat4")}\n\t\t\t${(0,YV.Db)(VV,"world","mat4")}\n\t\t\t${(0,YV.Db)(VV,"cameraPosition","vec3")}\n\t\t\t${(0,YV.Ib)(VV,"vDepth","float","mediump")}\n\n\t\t\t${(0,YV.Jb)(VV,`\n\t\t\t\t${(0,YV.m)(VV)} = ${(0,YV.Gb)(VV,"worldViewProjection")} * ${(0,YV.p)(VV,"vec4",(0,YV.Kb)(VV,"position"),"1.0")};\n\t\t\t\t${(0,YV.F)(VV,"vec3","worldPosition",`(${(0,YV.Gb)(VV,"world")} * ${(0,YV.p)(VV,"vec4",(0,YV.Kb)(VV,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,YV.Nb)(VV,"vDepth")} = distance(worldPosition, ${(0,YV.Gb)(VV,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,YV.Ib)(VV,"vDepth","float","mediump")}\n\t\t\t${(0,YV.Db)(VV,"maxDepth","float")}\n\t\t\t${(0,YV.Db)(VV,"minDepth","float")}\n\n\t\t\t${(0,YV.V)(VV,`\n\t\t\t\t\n\t\t\t\t${(0,YV.F)(VV,"float","normalizedDepth",`clamp((${(0,YV.X)(VV,"vDepth")} - ${(0,YV.Gb)(VV,"minDepth")}) / (${(0,YV.Gb)(VV,"maxDepth")} - ${(0,YV.Gb)(VV,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,YV.F)(VV,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,YV.S)(VV)} = ${(0,YV.p)(VV,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function yV(VV, eV) {
      const {
        vertex: xV,
        fragment: YV
      } = UV[VV](eV), yV = JV.d.GetShadersStore(eV);
      yV[`${VV}VertexShader`] = xV, yV[`${VV}FragmentShader`] = YV
    }
  },
  38399: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => oV,
      Ab: () => nV,
      C: () => ZV,
      Db: () => BV,
      F: () => wV,
      Gb: () => GV,
      Ib: () => EV,
      J: () => AV,
      Jb: () => qV,
      Kb: () => XV,
      N: () => RV,
      Nb: () => MV,
      P: () => UV,
      S: () => iV,
      T: () => DV,
      V: () => tV,
      X: () => zV,
      Z: () => WV,
      d: () => JV,
      db: () => YV,
      f: () => bV,
      fb: () => gV,
      i: () => NV,
      ib: () => hV,
      jb: () => LV,
      kb: () => PV,
      m: () => jV,
      ob: () => TV,
      p: () => QV,
      pb: () => lV,
      rb: () => fV,
      sb: () => cV,
      t: () => CV,
      v: () => aV,
      w: () => vV,
      wb: () => FV,
      z: () => rV
    });
    const JV = {
      GLSL: 0,
      WGSL: 1
    };

    function YV(VV) {
      return VV === JV.WGSL
    }

    function UV(VV, eV, xV) {
      return YV(VV) ? xV : eV
    }
    const yV = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function pV(VV, eV) {
      if (!YV(VV)) return eV;
      const xV = yV.get(eV);
      if (!xV) throw new Error(`No WGSL name for shader type "${eV}"`);
      return xV
    }

    function QV(VV, eV) {
      for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
      return `${pV(VV,eV)}(${JV.join(", ")})`
    }

    function nV(VV, eV) {
      return QV(VV, "int", eV)
    }

    function wV(VV, eV, xV, JV, UV) {
      return YV(VV) ? `var ${xV}: ${pV(VV,eV)} = ${JV};` : `${kV(VV,UV)}${eV} ${xV} = ${JV};`
    }

    function ZV(VV, eV, xV) {
      return YV(VV) ? `var ${xV}: ${pV(VV,eV)};` : `${eV} ${xV};`
    }

    function vV(VV, eV, xV, JV) {
      return YV(VV) ? `const ${xV}: ${pV(VV,eV)} = ${JV};` : `const ${eV} ${xV} = ${JV};`
    }

    function rV(VV, eV, xV, JV, UV) {
      if (YV(VV)) {
        return `fn ${xV}(${JV.map((eV=>`${eV.name}: ${pV(VV,eV.type)}`)).join(", ")}) -> ${pV(VV,eV)} {${UV}}`
      }
      return `${eV} ${xV}(${JV.map((VV=>`${VV.type} ${VV.name}`)).join(", ")}) {${UV}}`
    }

    function kV(VV, eV) {
      return !eV || YV(VV) ? "" : `${eV} `
    }

    function bV(VV, eV, xV, JV) {
      return YV(VV) ? `attribute ${eV}: ${pV(VV,xV)};` : `attribute ${kV(VV,JV)}${xV} ${eV};`
    }

    function EV(VV, eV, xV, JV) {
      return YV(VV) ? `varying ${eV}: ${pV(VV,xV)};` : `varying ${kV(VV,JV)}${xV} ${eV};`
    }

    function BV(VV, eV, xV) {
      return YV(VV) ? `uniform ${eV}: ${pV(VV,xV)};` : `uniform ${xV} ${eV};`
    }

    function jV(VV) {
      return YV(VV) ? "vertexOutputs.position" : "gl_Position"
    }

    function qV(VV, eV) {
      return YV(VV) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${eV}}` : `void main() {${eV}}`
    }

    function tV(VV, eV) {
      return YV(VV) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${eV}}` : `void main() {${eV}}`
    }

    function FV(VV, eV, xV) {
      if (YV(VV)) {
        return [`var ${eV}Sampler: sampler;`, `var ${eV}: ${"2dArray"===xV?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===xV?"sampler2DArray":"sampler2D"} ${eV};`
    }

    function TV(VV, eV, xV) {
      return YV(VV) ? `textureSample(${eV}, ${eV}Sampler, ${xV})` : `texture2D(${eV}, ${xV})`
    }

    function PV(VV, eV, xV, JV, UV) {
      if (YV(VV)) {
        return `${UV?"textureSampleLevel":"textureSample"}(${eV}, ${eV}Sampler, ${xV}, ${nV(VV,`round(${JV})`)}${UV?`, ${UV}`:""})`
      }
      const yV = QV(VV, "vec3", xV, JV);
      return UV ? `textureLod(${eV}, ${yV}, ${UV})` : `texture(${eV}, ${yV})`
    }

    function AV(VV) {
      return YV(VV) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function NV(VV) {
      return YV(VV) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function XV(VV, eV) {
      return YV(VV) ? `vertexInputs.${eV}` : eV
    }

    function MV(VV, eV) {
      return YV(VV) ? `vertexOutputs.${eV}` : eV
    }

    function zV(VV, eV) {
      return YV(VV) ? `fragmentInputs.${eV}` : eV
    }

    function GV(VV, eV) {
      return YV(VV) ? `uniforms.${eV}` : eV
    }

    function WV(VV, eV, xV) {
      return YV(VV) ? `frame.${eV}` : xV
    }

    function RV(VV) {
      return YV(VV) ? "scene.vEyePosition" : "vEyePosition"
    }

    function gV(VV) {
      return YV(VV) ? "mesh.visibility" : "visibility"
    }

    function DV(VV) {
      return YV(VV) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function iV(VV) {
      return YV(VV) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function CV(VV, eV) {
      return YV(VV) ? `dpdx(${eV})` : `dFdx(${eV})`
    }

    function aV(VV, eV) {
      return YV(VV) ? `dpdy(${eV})` : `dFdy(${eV})`
    }

    function oV(VV, eV) {
      return YV(VV) ? `inverseSqrt(${eV})` : `inversesqrt(${eV})`
    }

    function cV(VV, eV, xV, JV) {
      return YV(VV) ? `select(${JV}, ${xV}, ${eV})` : `((${eV}) ? (${xV}) : (${JV}))`
    }

    function hV(VV, eV, xV) {
      return YV(VV) ? `((${eV}) - (${xV}) * floor((${eV}) / (${xV})))` : `mod(${eV}, ${xV})`
    }

    function lV(VV, eV, xV) {
      return YV(VV) ? `${eV} = vec4f(${xV}, ${eV}.a);` : `${eV}.rgb = ${xV};`
    }

    function LV(VV, eV, xV) {
      return YV(VV) ? `${eV} = vec4f(${eV}.rgb * (${xV}), ${eV}.a);` : `${eV}.rgb *= ${xV};`
    }

    function fV(VV, eV, xV) {
      return YV(VV) ? `${eV} = vec4f(${xV}, ${eV}.w);` : `${eV}.xyz = ${xV};`
    }
  },
  41108: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersRepository : JV.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersStore : JV.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.IncludesShadersStore : JV.IncludesShadersStoreWGSL
      }
    }
    JV.ShadersRepository = "src/Shaders/", JV.ShadersStore = {}, JV.IncludesShadersStore = {}, JV.ShadersRepositoryWGSL = "src/ShadersWGSL/", JV.ShadersStoreWGSL = {}, JV.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);