export const id = 229;
export const ids = [229];
export const modules = {
  60571: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      DEVTOOLS_SHADERS: () => KT,
      registerDevtoolsShader: () => OT
    });
    var lT = cT(39474),
      MT = cT(36996);
    const KT = {
      devtoolsNormal: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,MT.d)(TT,"position","vec3")}\n\t\t\t${(0,MT.d)(TT,"normal","vec3")}\n\t\t\t${(0,MT.Bb)(TT,"worldViewProjection","mat4")}\n\t\t\t${(0,MT.Bb)(TT,"world","mat4")}\n\t\t\t${(0,MT.Eb)(TT,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,MT.Hb)(TT,`\n\t\t\t\t${(0,MT.i)(TT)} = ${(0,MT.Db)(TT,"worldViewProjection")} * ${(0,MT.l)(TT,"vec4",(0,MT.Kb)(TT,"position"),"1.0")};\n\t\t\t\t${(0,MT.Mb)(TT,"vNormal")} = normalize((${(0,MT.Db)(TT,"world")} * ${(0,MT.l)(TT,"vec4",(0,MT.Kb)(TT,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,MT.Eb)(TT,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,MT.R)(TT,`\n\t\t\t\t\n\t\t\t\t${(0,MT.y)(TT,"vec3","normalColor",`abs(${(0,MT.T)(TT,"vNormal")})`)}\n\t\t\t\t${(0,MT.M)(TT)} = ${(0,MT.l)(TT,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,MT.d)(TT,"position","vec3")}\n\t\t\t${(0,MT.Bb)(TT,"worldViewProjection","mat4")}\n\n\t\t\t${(0,MT.Hb)(TT,`\n\t\t\t\t${(0,MT.i)(TT)} = ${(0,MT.Db)(TT,"worldViewProjection")} * ${(0,MT.l)(TT,"vec4",(0,MT.Kb)(TT,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,MT.R)(TT,`\n\t\t\t\t${(0,MT.M)(TT)} = ${(0,MT.l)(TT,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,MT.d)(TT,"position","vec3")}\n\t\t\t${(0,MT.Bb)(TT,"worldViewProjection","mat4")}\n\t\t\t${(0,MT.Bb)(TT,"world","mat4")}\n\t\t\t${(0,MT.Bb)(TT,"cameraPosition","vec3")}\n\t\t\t${(0,MT.Eb)(TT,"vDepth","float","mediump")}\n\n\t\t\t${(0,MT.Hb)(TT,`\n\t\t\t\t${(0,MT.i)(TT)} = ${(0,MT.Db)(TT,"worldViewProjection")} * ${(0,MT.l)(TT,"vec4",(0,MT.Kb)(TT,"position"),"1.0")};\n\t\t\t\t${(0,MT.y)(TT,"vec3","worldPosition",`(${(0,MT.Db)(TT,"world")} * ${(0,MT.l)(TT,"vec4",(0,MT.Kb)(TT,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,MT.Mb)(TT,"vDepth")} = distance(worldPosition, ${(0,MT.Db)(TT,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,MT.Eb)(TT,"vDepth","float","mediump")}\n\t\t\t${(0,MT.Bb)(TT,"maxDepth","float")}\n\t\t\t${(0,MT.Bb)(TT,"minDepth","float")}\n\n\t\t\t${(0,MT.R)(TT,`\n\t\t\t\t\n\t\t\t\t${(0,MT.y)(TT,"float","normalizedDepth",`clamp((${(0,MT.T)(TT,"vDepth")} - ${(0,MT.Db)(TT,"minDepth")}) / (${(0,MT.Db)(TT,"maxDepth")} - ${(0,MT.Db)(TT,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,MT.y)(TT,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,MT.M)(TT)} = ${(0,MT.l)(TT,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function OT(TT, kT) {
      const {
        vertex: cT,
        fragment: MT
      } = KT[TT](kT), OT = lT.d.GetShadersStore(kT);
      OT[`${TT}VertexShader`] = cT, OT[`${TT}FragmentShader`] = MT
    }
  },
  36996: (TT, kT, cT) => {
    cT.d(kT, {
      Ab: () => xT,
      Bb: () => NT,
      C: () => PT,
      Db: () => JT,
      E: () => HT,
      Eb: () => hT,
      Hb: () => ST,
      I: () => KT,
      Kb: () => mT,
      M: () => VT,
      Mb: () => bT,
      P: () => GT,
      R: () => DT,
      T: () => zT,
      U: () => oT,
      Y: () => uT,
      ab: () => MT,
      b: () => lT,
      cb: () => eT,
      d: () => tT,
      fb: () => dT,
      h: () => wT,
      i: () => QT,
      jb: () => RT,
      l: () => fT,
      nb: () => rT,
      p: () => ET,
      qb: () => FT,
      rb: () => LT,
      s: () => ZT,
      ub: () => gT,
      v: () => CT,
      w: () => jT,
      x: () => AT,
      xb: () => XT,
      y: () => IT,
      yb: () => aT
    });
    const lT = {
      GLSL: 0,
      WGSL: 1
    };

    function MT(TT) {
      return TT === lT.WGSL
    }

    function KT(TT, kT, cT) {
      return MT(TT) ? cT : kT
    }
    const OT = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function yT(TT, kT) {
      if (!MT(TT)) return kT;
      const cT = OT.get(kT);
      if (!cT) throw new Error(`No WGSL name for shader type "${kT}"`);
      return cT
    }

    function fT(TT, kT) {
      for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
      return `${yT(TT,kT)}(${lT.join(", ")})`
    }

    function xT(TT, kT) {
      return fT(TT, "int", kT)
    }

    function IT(TT, kT, cT, lT, KT) {
      return MT(TT) ? `var ${cT}: ${yT(TT,kT)} = ${lT};` : `${vT(TT,KT)}${kT} ${cT} = ${lT};`
    }

    function AT(TT, kT, cT) {
      return MT(TT) ? `var ${cT}: ${yT(TT,kT)};` : `${kT} ${cT};`
    }

    function CT(TT, kT, cT, lT) {
      return MT(TT) ? `const ${cT}: ${yT(TT,kT)} = ${lT};` : `const ${kT} ${cT} = ${lT};`
    }

    function jT(TT, kT, cT, lT, KT) {
      if (MT(TT)) {
        return `fn ${cT}(${lT.map((kT=>`${kT.name}: ${yT(TT,kT.type)}`)).join(", ")}) -> ${yT(TT,kT)} {${KT}}`
      }
      return `${kT} ${cT}(${lT.map((TT=>`${TT.type} ${TT.name}`)).join(", ")}) {${KT}}`
    }

    function vT(TT, kT) {
      return !kT || MT(TT) ? "" : `${kT} `
    }

    function tT(TT, kT, cT, lT) {
      return MT(TT) ? `attribute ${kT}: ${yT(TT,cT)};` : `attribute ${vT(TT,lT)}${cT} ${kT};`
    }

    function hT(TT, kT, cT, lT) {
      return MT(TT) ? `varying ${kT}: ${yT(TT,cT)};` : `varying ${vT(TT,lT)}${cT} ${kT};`
    }

    function NT(TT, kT, cT) {
      return MT(TT) ? `uniform ${kT}: ${yT(TT,cT)};` : `uniform ${cT} ${kT};`
    }

    function QT(TT) {
      return MT(TT) ? "vertexOutputs.position" : "gl_Position"
    }

    function ST(TT, kT) {
      return MT(TT) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${kT}}` : `void main() {${kT}}`
    }

    function DT(TT, kT) {
      return MT(TT) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${kT}}` : `void main() {${kT}}`
    }

    function aT(TT, kT, cT) {
      if (MT(TT)) {
        return [`var ${kT}Sampler: sampler;`, `var ${kT}: ${"2dArray"===cT?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===cT?"sampler2DArray":"sampler2D"} ${kT};`
    }

    function FT(TT, kT, cT) {
      return MT(TT) ? `textureSample(${kT}, ${kT}Sampler, ${cT})` : `texture2D(${kT}, ${cT})`
    }

    function rT(TT, kT, cT, lT, KT) {
      if (MT(TT)) {
        return `${KT?"textureSampleLevel":"textureSample"}(${kT}, ${kT}Sampler, ${cT}, ${xT(TT,`round(${lT})`)}${KT?`, ${KT}`:""})`
      }
      const OT = fT(TT, "vec3", cT, lT);
      return KT ? `textureLod(${kT}, ${OT}, ${KT})` : `texture(${kT}, ${OT})`
    }

    function PT(TT) {
      return MT(TT) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function wT(TT) {
      return MT(TT) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function mT(TT, kT) {
      return MT(TT) ? `vertexInputs.${kT}` : kT
    }

    function bT(TT, kT) {
      return MT(TT) ? `vertexOutputs.${kT}` : kT
    }

    function zT(TT, kT) {
      return MT(TT) ? `fragmentInputs.${kT}` : kT
    }

    function JT(TT, kT) {
      return MT(TT) ? `uniforms.${kT}` : kT
    }

    function oT(TT, kT, cT) {
      return MT(TT) ? `frame.${kT}` : cT
    }

    function HT(TT) {
      return MT(TT) ? "scene.vEyePosition" : "vEyePosition"
    }

    function eT(TT) {
      return MT(TT) ? "mesh.visibility" : "visibility"
    }

    function GT(TT) {
      return MT(TT) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function VT(TT) {
      return MT(TT) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function ET(TT, kT) {
      return MT(TT) ? `dpdx(${kT})` : `dFdx(${kT})`
    }

    function ZT(TT, kT) {
      return MT(TT) ? `dpdy(${kT})` : `dFdy(${kT})`
    }

    function uT(TT, kT) {
      return MT(TT) ? `inverseSqrt(${kT})` : `inversesqrt(${kT})`
    }

    function XT(TT, kT, cT, lT) {
      return MT(TT) ? `select(${lT}, ${cT}, ${kT})` : `((${kT}) ? (${cT}) : (${lT}))`
    }

    function dT(TT, kT, cT) {
      return MT(TT) ? `((${kT}) - (${cT}) * floor((${kT}) / (${cT})))` : `mod(${kT}, ${cT})`
    }

    function LT(TT, kT, cT) {
      return MT(TT) ? `${kT} = vec4f(${cT}, ${kT}.a);` : `${kT}.rgb = ${cT};`
    }

    function RT(TT, kT, cT) {
      return MT(TT) ? `${kT} = vec4f(${kT}.rgb * (${cT}), ${kT}.a);` : `${kT}.rgb *= ${cT};`
    }

    function gT(TT, kT, cT) {
      return MT(TT) ? `${kT} = vec4f(${cT}, ${kT}.w);` : `${kT}.xyz = ${cT};`
    }
  },
  39474: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.ShadersRepository : lT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.ShadersStore : lT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.IncludesShadersStore : lT.IncludesShadersStoreWGSL
      }
    }
    lT.ShadersRepository = "src/Shaders/", lT.ShadersStore = {}, lT.IncludesShadersStore = {}, lT.ShadersRepositoryWGSL = "src/ShadersWGSL/", lT.ShadersStoreWGSL = {}, lT.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);