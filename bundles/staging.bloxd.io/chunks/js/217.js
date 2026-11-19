export const id = 217;
export const ids = [217];
export const modules = {
  60022: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      DEVTOOLS_SHADERS: () => kT,
      registerDevtoolsShader: () => WT
    });
    var iT = IT(38617),
      zT = IT(36047);
    const kT = {
      devtoolsNormal: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,zT.g)(TT,"position","vec3")}\n\t\t\t${(0,zT.g)(TT,"normal","vec3")}\n\t\t\t${(0,zT.vb)(TT,"worldViewProjection","mat4")}\n\t\t\t${(0,zT.vb)(TT,"world","mat4")}\n\t\t\t${(0,zT.Ab)(TT,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,zT.Bb)(TT,`\n\t\t\t\t${(0,zT.j)(TT)} = ${(0,zT.wb)(TT,"worldViewProjection")} * ${(0,zT.l)(TT,"vec4",(0,zT.Fb)(TT,"position"),"1.0")};\n\t\t\t\t${(0,zT.Jb)(TT,"vNormal")} = normalize((${(0,zT.wb)(TT,"world")} * ${(0,zT.l)(TT,"vec4",(0,zT.Fb)(TT,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,zT.Ab)(TT,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,zT.Q)(TT,`\n\t\t\t\t\n\t\t\t\t${(0,zT.D)(TT,"vec3","normalColor",`abs(${(0,zT.R)(TT,"vNormal")})`)}\n\t\t\t\t${(0,zT.K)(TT)} = ${(0,zT.l)(TT,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,zT.g)(TT,"position","vec3")}\n\t\t\t${(0,zT.vb)(TT,"worldViewProjection","mat4")}\n\n\t\t\t${(0,zT.Bb)(TT,`\n\t\t\t\t${(0,zT.j)(TT)} = ${(0,zT.wb)(TT,"worldViewProjection")} * ${(0,zT.l)(TT,"vec4",(0,zT.Fb)(TT,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,zT.Q)(TT,`\n\t\t\t\t${(0,zT.K)(TT)} = ${(0,zT.l)(TT,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,zT.g)(TT,"position","vec3")}\n\t\t\t${(0,zT.vb)(TT,"worldViewProjection","mat4")}\n\t\t\t${(0,zT.vb)(TT,"world","mat4")}\n\t\t\t${(0,zT.vb)(TT,"cameraPosition","vec3")}\n\t\t\t${(0,zT.Ab)(TT,"vDepth","float","mediump")}\n\n\t\t\t${(0,zT.Bb)(TT,`\n\t\t\t\t${(0,zT.j)(TT)} = ${(0,zT.wb)(TT,"worldViewProjection")} * ${(0,zT.l)(TT,"vec4",(0,zT.Fb)(TT,"position"),"1.0")};\n\t\t\t\t${(0,zT.D)(TT,"vec3","worldPosition",`(${(0,zT.wb)(TT,"world")} * ${(0,zT.l)(TT,"vec4",(0,zT.Fb)(TT,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,zT.Jb)(TT,"vDepth")} = distance(worldPosition, ${(0,zT.wb)(TT,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,zT.Ab)(TT,"vDepth","float","mediump")}\n\t\t\t${(0,zT.vb)(TT,"maxDepth","float")}\n\t\t\t${(0,zT.vb)(TT,"minDepth","float")}\n\n\t\t\t${(0,zT.Q)(TT,`\n\t\t\t\t\n\t\t\t\t${(0,zT.D)(TT,"float","normalizedDepth",`clamp((${(0,zT.R)(TT,"vDepth")} - ${(0,zT.wb)(TT,"minDepth")}) / (${(0,zT.wb)(TT,"maxDepth")} - ${(0,zT.wb)(TT,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,zT.D)(TT,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,zT.K)(TT)} = ${(0,zT.l)(TT,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function WT(TT, oT) {
      const {
        vertex: IT,
        fragment: zT
      } = kT[TT](oT), WT = iT.c.GetShadersStore(oT);
      WT[`${TT}VertexShader`] = IT, WT[`${TT}FragmentShader`] = zT
    }
  },
  36047: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => DT,
      Ab: () => MT,
      Bb: () => gT,
      D: () => ST,
      F: () => RT,
      Fb: () => vT,
      G: () => JT,
      I: () => kT,
      Jb: () => ET,
      K: () => YT,
      O: () => aT,
      Q: () => hT,
      R: () => fT,
      U: () => jT,
      V: () => HT,
      Y: () => zT,
      Z: () => UT,
      _: () => qT,
      bb: () => lT,
      d: () => iT,
      eb: () => eT,
      fb: () => mT,
      g: () => KT,
      i: () => uT,
      ib: () => ZT,
      j: () => AT,
      l: () => BT,
      mb: () => sT,
      o: () => QT,
      ob: () => nT,
      qb: () => wT,
      s: () => OT,
      sb: () => FT,
      t: () => LT,
      vb: () => rT,
      w: () => xT,
      wb: () => CT
    });
    const iT = {
      GLSL: 0,
      WGSL: 1
    };

    function zT(TT) {
      return TT === iT.WGSL
    }

    function kT(TT, oT, IT) {
      return zT(TT) ? IT : oT
    }
    const WT = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function XT(TT, oT) {
      if (!zT(TT)) return oT;
      const IT = WT.get(oT);
      if (!IT) throw new Error(`No WGSL name for shader type "${oT}"`);
      return IT
    }

    function BT(TT, oT) {
      for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
      return `${XT(TT,oT)}(${iT.join(", ")})`
    }

    function FT(TT, oT) {
      return BT(TT, "int", oT)
    }

    function ST(TT, oT, IT, iT, kT) {
      return zT(TT) ? `var ${IT}: ${XT(TT,oT)} = ${iT};` : `${cT(TT,kT)}${oT} ${IT} = ${iT};`
    }

    function DT(TT, oT, IT) {
      return zT(TT) ? `var ${IT}: ${XT(TT,oT)};` : `${oT} ${IT};`
    }

    function LT(TT, oT, IT, iT) {
      return zT(TT) ? `const ${IT}: ${XT(TT,oT)} = ${iT};` : `const ${oT} ${IT} = ${iT};`
    }

    function xT(TT, oT, IT, iT, kT) {
      if (zT(TT)) {
        return `fn ${IT}(${iT.map((oT=>`${oT.name}: ${XT(TT,oT.type)}`)).join(", ")}) -> ${XT(TT,oT)} {${kT}}`
      }
      return `${oT} ${IT}(${iT.map((TT=>`${TT.type} ${TT.name}`)).join(", ")}) {${kT}}`
    }

    function cT(TT, oT) {
      return !oT || zT(TT) ? "" : `${oT} `
    }

    function KT(TT, oT, IT, iT) {
      return zT(TT) ? `attribute ${oT}: ${XT(TT,IT)};` : `attribute ${cT(TT,iT)}${IT} ${oT};`
    }

    function MT(TT, oT, IT, iT) {
      return zT(TT) ? `varying ${oT}: ${XT(TT,IT)};` : `varying ${cT(TT,iT)}${IT} ${oT};`
    }

    function rT(TT, oT, IT) {
      return zT(TT) ? `uniform ${oT}: ${XT(TT,IT)};` : `uniform ${IT} ${oT};`
    }

    function AT(TT) {
      return zT(TT) ? "vertexOutputs.position" : "gl_Position"
    }

    function gT(TT, oT) {
      return zT(TT) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${oT}}` : `void main() {${oT}}`
    }

    function hT(TT, oT) {
      return zT(TT) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${oT}}` : `void main() {${oT}}`
    }

    function wT(TT, oT, IT) {
      if (zT(TT)) {
        return [`var ${oT}Sampler: sampler;`, `var ${oT}: ${"2dArray"===IT?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===IT?"sampler2DArray":"sampler2D"} ${oT};`
    }

    function mT(TT, oT, IT) {
      return zT(TT) ? `textureSample(${oT}, ${oT}Sampler, ${IT})` : `texture2D(${oT}, ${IT})`
    }

    function eT(TT, oT, IT, iT, kT) {
      if (zT(TT)) {
        return `${kT?"textureSampleLevel":"textureSample"}(${oT}, ${oT}Sampler, ${IT}, ${FT(TT,`round(${iT})`)}${kT?`, ${kT}`:""})`
      }
      const WT = BT(TT, "vec3", IT, iT);
      return kT ? `textureLod(${oT}, ${WT}, ${kT})` : `texture(${oT}, ${WT})`
    }

    function RT(TT) {
      return zT(TT) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function uT(TT) {
      return zT(TT) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function vT(TT, oT) {
      return zT(TT) ? `vertexInputs.${oT}` : oT
    }

    function ET(TT, oT) {
      return zT(TT) ? `vertexOutputs.${oT}` : oT
    }

    function fT(TT, oT) {
      return zT(TT) ? `fragmentInputs.${oT}` : oT
    }

    function CT(TT, oT) {
      return zT(TT) ? `uniforms.${oT}` : oT
    }

    function jT(TT, oT, IT) {
      return zT(TT) ? `frame.${oT}` : IT
    }

    function JT(TT) {
      return zT(TT) ? "scene.vEyePosition" : "vEyePosition"
    }

    function UT(TT) {
      return zT(TT) ? "mesh.visibility" : "visibility"
    }

    function aT(TT) {
      return zT(TT) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function YT(TT) {
      return zT(TT) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function QT(TT, oT) {
      return zT(TT) ? `dpdx(${oT})` : `dFdx(${oT})`
    }

    function OT(TT, oT) {
      return zT(TT) ? `dpdy(${oT})` : `dFdy(${oT})`
    }

    function HT(TT, oT) {
      return zT(TT) ? `inverseSqrt(${oT})` : `inversesqrt(${oT})`
    }

    function nT(TT, oT, IT, iT) {
      return zT(TT) ? `select(${iT}, ${IT}, ${oT})` : `((${oT}) ? (${IT}) : (${iT}))`
    }

    function qT(TT, oT, IT) {
      return zT(TT) ? `((${oT}) - (${IT}) * floor((${oT}) / (${IT})))` : `mod(${oT}, ${IT})`
    }

    function ZT(TT, oT, IT) {
      return zT(TT) ? `${oT} = vec4f(${IT}, ${oT}.a);` : `${oT}.rgb = ${IT};`
    }

    function lT(TT, oT, IT) {
      return zT(TT) ? `${oT} = vec4f(${oT}.rgb * (${IT}), ${oT}.a);` : `${oT}.rgb *= ${IT};`
    }

    function sT(TT, oT, IT) {
      return zT(TT) ? `${oT} = vec4f(${IT}, ${oT}.w);` : `${oT}.xyz = ${IT};`
    }
  },
  38617: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? iT.ShadersRepository : iT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? iT.ShadersStore : iT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? iT.IncludesShadersStore : iT.IncludesShadersStoreWGSL
      }
    }
    iT.ShadersRepository = "src/Shaders/", iT.ShadersStore = {}, iT.IncludesShadersStore = {}, iT.ShadersRepositoryWGSL = "src/ShadersWGSL/", iT.ShadersStoreWGSL = {}, iT.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);