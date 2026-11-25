export const id = 259;
export const ids = [259];
export const modules = {
  63918: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      DEVTOOLS_SHADERS: () => jM,
      registerDevtoolsShader: () => aM
    });
    var OM = iM(40964),
      SM = iM(38188);
    const jM = {
      devtoolsNormal: function(MM) {
        return {
          vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.e)(MM,"normal","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\t\t\t${(0,SM.zb)(MM,"world","mat4")}\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${(0,SM.l)(MM)} = ${(0,SM.Db)(MM,"worldViewProjection")} * ${(0,SM.n)(MM,"vec4",(0,SM.Hb)(MM,"position"),"1.0")};\n\t\t\t\t${(0,SM.Kb)(MM,"vNormal")} = normalize((${(0,SM.Db)(MM,"world")} * ${(0,SM.n)(MM,"vec4",(0,SM.Hb)(MM,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t\n\t\t\t\t${(0,SM.B)(MM,"vec3","normalColor",`abs(${(0,SM.U)(MM,"vNormal")})`)}\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(MM) {
        return {
          vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${(0,SM.l)(MM)} = ${(0,SM.Db)(MM,"worldViewProjection")} * ${(0,SM.n)(MM,"vec4",(0,SM.Hb)(MM,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(MM) {
        return {
          vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\t\t\t${(0,SM.zb)(MM,"world","mat4")}\n\t\t\t${(0,SM.zb)(MM,"cameraPosition","vec3")}\n\t\t\t${(0,SM.Fb)(MM,"vDepth","float","mediump")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${(0,SM.l)(MM)} = ${(0,SM.Db)(MM,"worldViewProjection")} * ${(0,SM.n)(MM,"vec4",(0,SM.Hb)(MM,"position"),"1.0")};\n\t\t\t\t${(0,SM.B)(MM,"vec3","worldPosition",`(${(0,SM.Db)(MM,"world")} * ${(0,SM.n)(MM,"vec4",(0,SM.Hb)(MM,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,SM.Kb)(MM,"vDepth")} = distance(worldPosition, ${(0,SM.Db)(MM,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,SM.Fb)(MM,"vDepth","float","mediump")}\n\t\t\t${(0,SM.zb)(MM,"maxDepth","float")}\n\t\t\t${(0,SM.zb)(MM,"minDepth","float")}\n\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t\n\t\t\t\t${(0,SM.B)(MM,"float","normalizedDepth",`clamp((${(0,SM.U)(MM,"vDepth")} - ${(0,SM.Db)(MM,"minDepth")}) / (${(0,SM.Db)(MM,"maxDepth")} - ${(0,SM.Db)(MM,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,SM.B)(MM,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function aM(MM, rM) {
      const {
        vertex: iM,
        fragment: SM
      } = jM[MM](rM), aM = OM.e.GetShadersStore(rM);
      aM[`${MM}VertexShader`] = iM, aM[`${MM}FragmentShader`] = SM
    }
  },
  38188: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => LM,
      B: () => zM,
      Db: () => RM,
      E: () => bM,
      Fb: () => dM,
      G: () => WM,
      Gb: () => EM,
      Hb: () => tM,
      K: () => jM,
      Kb: () => gM,
      M: () => kM,
      Q: () => DM,
      R: () => UM,
      U: () => uM,
      V: () => pM,
      X: () => fM,
      Y: () => SM,
      Z: () => sM,
      b: () => OM,
      bb: () => NM,
      cb: () => xM,
      e: () => JM,
      fb: () => eM,
      gb: () => CM,
      h: () => wM,
      kb: () => AM,
      l: () => lM,
      n: () => nM,
      ob: () => vM,
      q: () => ZM,
      sb: () => YM,
      t: () => oM,
      ub: () => GM,
      v: () => mM,
      w: () => HM,
      wb: () => QM,
      zb: () => yM
    });
    const OM = {
      GLSL: 0,
      WGSL: 1
    };

    function SM(MM) {
      return MM === OM.WGSL
    }

    function jM(MM, rM, iM) {
      return SM(MM) ? iM : rM
    }
    const aM = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function PM(MM, rM) {
      if (!SM(MM)) return rM;
      const iM = aM.get(rM);
      if (!iM) throw new Error(`No WGSL name for shader type "${rM}"`);
      return iM
    }

    function nM(MM, rM) {
      for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
      return `${PM(MM,rM)}(${OM.join(", ")})`
    }

    function QM(MM, rM) {
      return nM(MM, "int", rM)
    }

    function zM(MM, rM, iM, OM, jM) {
      return SM(MM) ? `var ${iM}: ${PM(MM,rM)} = ${OM};` : `${hM(MM,jM)}${rM} ${iM} = ${OM};`
    }

    function LM(MM, rM, iM) {
      return SM(MM) ? `var ${iM}: ${PM(MM,rM)};` : `${rM} ${iM};`
    }

    function mM(MM, rM, iM, OM) {
      return SM(MM) ? `const ${iM}: ${PM(MM,rM)} = ${OM};` : `const ${rM} ${iM} = ${OM};`
    }

    function HM(MM, rM, iM, OM, jM) {
      if (SM(MM)) {
        return `fn ${iM}(${OM.map((rM=>`${rM.name}: ${PM(MM,rM.type)}`)).join(", ")}) -> ${PM(MM,rM)} {${jM}}`
      }
      return `${rM} ${iM}(${OM.map((MM=>`${MM.type} ${MM.name}`)).join(", ")}) {${jM}}`
    }

    function hM(MM, rM) {
      return !rM || SM(MM) ? "" : `${rM} `
    }

    function JM(MM, rM, iM, OM) {
      return SM(MM) ? `attribute ${rM}: ${PM(MM,iM)};` : `attribute ${hM(MM,OM)}${iM} ${rM};`
    }

    function dM(MM, rM, iM, OM) {
      return SM(MM) ? `varying ${rM}: ${PM(MM,iM)};` : `varying ${hM(MM,OM)}${iM} ${rM};`
    }

    function yM(MM, rM, iM) {
      return SM(MM) ? `uniform ${rM}: ${PM(MM,iM)};` : `uniform ${iM} ${rM};`
    }

    function lM(MM) {
      return SM(MM) ? "vertexOutputs.position" : "gl_Position"
    }

    function EM(MM, rM) {
      return SM(MM) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${rM}}` : `void main() {${rM}}`
    }

    function UM(MM, rM) {
      return SM(MM) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${rM}}` : `void main() {${rM}}`
    }

    function GM(MM, rM, iM) {
      if (SM(MM)) {
        return [`var ${rM}Sampler: sampler;`, `var ${rM}: ${"2dArray"===iM?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===iM?"sampler2DArray":"sampler2D"} ${rM};`
    }

    function CM(MM, rM, iM) {
      return SM(MM) ? `textureSample(${rM}, ${rM}Sampler, ${iM})` : `texture2D(${rM}, ${iM})`
    }

    function eM(MM, rM, iM, OM, jM) {
      if (SM(MM)) {
        return `${jM?"textureSampleLevel":"textureSample"}(${rM}, ${rM}Sampler, ${iM}, ${QM(MM,`round(${OM})`)}${jM?`, ${jM}`:""})`
      }
      const aM = nM(MM, "vec3", iM, OM);
      return jM ? `textureLod(${rM}, ${aM}, ${jM})` : `texture(${rM}, ${aM})`
    }

    function bM(MM) {
      return SM(MM) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function wM(MM) {
      return SM(MM) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function tM(MM, rM) {
      return SM(MM) ? `vertexInputs.${rM}` : rM
    }

    function gM(MM, rM) {
      return SM(MM) ? `vertexOutputs.${rM}` : rM
    }

    function uM(MM, rM) {
      return SM(MM) ? `fragmentInputs.${rM}` : rM
    }

    function RM(MM, rM) {
      return SM(MM) ? `uniforms.${rM}` : rM
    }

    function pM(MM, rM, iM) {
      return SM(MM) ? `frame.${rM}` : iM
    }

    function WM(MM) {
      return SM(MM) ? "scene.vEyePosition" : "vEyePosition"
    }

    function sM(MM) {
      return SM(MM) ? "mesh.visibility" : "visibility"
    }

    function DM(MM) {
      return SM(MM) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function kM(MM) {
      return SM(MM) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function ZM(MM, rM) {
      return SM(MM) ? `dpdx(${rM})` : `dFdx(${rM})`
    }

    function oM(MM, rM) {
      return SM(MM) ? `dpdy(${rM})` : `dFdy(${rM})`
    }

    function fM(MM, rM) {
      return SM(MM) ? `inverseSqrt(${rM})` : `inversesqrt(${rM})`
    }

    function YM(MM, rM, iM, OM) {
      return SM(MM) ? `select(${OM}, ${iM}, ${rM})` : `((${rM}) ? (${iM}) : (${OM}))`
    }

    function NM(MM, rM, iM) {
      return SM(MM) ? `((${rM}) - (${iM}) * floor((${rM}) / (${iM})))` : `mod(${rM}, ${iM})`
    }

    function AM(MM, rM, iM) {
      return SM(MM) ? `${rM} = vec4f(${iM}, ${rM}.a);` : `${rM}.rgb = ${iM};`
    }

    function xM(MM, rM, iM) {
      return SM(MM) ? `${rM} = vec4f(${rM}.rgb * (${iM}), ${rM}.a);` : `${rM}.rgb *= ${iM};`
    }

    function vM(MM, rM, iM) {
      return SM(MM) ? `${rM} = vec4f(${iM}, ${rM}.w);` : `${rM}.xyz = ${iM};`
    }
  },
  40964: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
      }
    }
    OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);