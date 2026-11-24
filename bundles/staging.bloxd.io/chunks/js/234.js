export const id = 234;
export const ids = [234];
export const modules = {
  61039: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      DEVTOOLS_SHADERS: () => KD,
      registerDevtoolsShader: () => rD
    });
    var pD = wD(39776),
      sD = wD(37186);
    const KD = {
      devtoolsNormal: function(DD) {
        return {
          vertex: `\n\t\t\t${(0,sD.g)(DD,"position","vec3")}\n\t\t\t${(0,sD.g)(DD,"normal","vec3")}\n\t\t\t${(0,sD.Cb)(DD,"worldViewProjection","mat4")}\n\t\t\t${(0,sD.Cb)(DD,"world","mat4")}\n\t\t\t${(0,sD.Jb)(DD,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,sD.Kb)(DD,`\n\t\t\t\t${(0,sD.o)(DD)} = ${(0,sD.Fb)(DD,"worldViewProjection")} * ${(0,sD.q)(DD,"vec4",(0,sD.Nb)(DD,"position"),"1.0")};\n\t\t\t\t${(0,sD.Pb)(DD,"vNormal")} = normalize((${(0,sD.Fb)(DD,"world")} * ${(0,sD.q)(DD,"vec4",(0,sD.Nb)(DD,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,sD.Jb)(DD,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,sD.N)(DD,`\n\t\t\t\t\n\t\t\t\t${(0,sD.E)(DD,"vec3","normalColor",`abs(${(0,sD.R)(DD,"vNormal")})`)}\n\t\t\t\t${(0,sD.I)(DD)} = ${(0,sD.q)(DD,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(DD) {
        return {
          vertex: `\n\t\t\t${(0,sD.g)(DD,"position","vec3")}\n\t\t\t${(0,sD.Cb)(DD,"worldViewProjection","mat4")}\n\n\t\t\t${(0,sD.Kb)(DD,`\n\t\t\t\t${(0,sD.o)(DD)} = ${(0,sD.Fb)(DD,"worldViewProjection")} * ${(0,sD.q)(DD,"vec4",(0,sD.Nb)(DD,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,sD.N)(DD,`\n\t\t\t\t${(0,sD.I)(DD)} = ${(0,sD.q)(DD,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(DD) {
        return {
          vertex: `\n\t\t\t${(0,sD.g)(DD,"position","vec3")}\n\t\t\t${(0,sD.Cb)(DD,"worldViewProjection","mat4")}\n\t\t\t${(0,sD.Cb)(DD,"world","mat4")}\n\t\t\t${(0,sD.Cb)(DD,"cameraPosition","vec3")}\n\t\t\t${(0,sD.Jb)(DD,"vDepth","float","mediump")}\n\n\t\t\t${(0,sD.Kb)(DD,`\n\t\t\t\t${(0,sD.o)(DD)} = ${(0,sD.Fb)(DD,"worldViewProjection")} * ${(0,sD.q)(DD,"vec4",(0,sD.Nb)(DD,"position"),"1.0")};\n\t\t\t\t${(0,sD.E)(DD,"vec3","worldPosition",`(${(0,sD.Fb)(DD,"world")} * ${(0,sD.q)(DD,"vec4",(0,sD.Nb)(DD,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,sD.Pb)(DD,"vDepth")} = distance(worldPosition, ${(0,sD.Fb)(DD,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,sD.Jb)(DD,"vDepth","float","mediump")}\n\t\t\t${(0,sD.Cb)(DD,"maxDepth","float")}\n\t\t\t${(0,sD.Cb)(DD,"minDepth","float")}\n\n\t\t\t${(0,sD.N)(DD,`\n\t\t\t\t\n\t\t\t\t${(0,sD.E)(DD,"float","normalizedDepth",`clamp((${(0,sD.R)(DD,"vDepth")} - ${(0,sD.Fb)(DD,"minDepth")}) / (${(0,sD.Fb)(DD,"maxDepth")} - ${(0,sD.Fb)(DD,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,sD.E)(DD,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,sD.I)(DD)} = ${(0,sD.q)(DD,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function rD(DD, zD) {
      const {
        vertex: wD,
        fragment: sD
      } = KD[DD](zD), rD = pD.e.GetShadersStore(zD);
      rD[`${DD}VertexShader`] = wD, rD[`${DD}FragmentShader`] = sD
    }
  },
  37186: (DD, zD, wD) => {
    wD.d(zD, {
      Ab: () => gD,
      C: () => fD,
      Cb: () => hD,
      D: () => AD,
      E: () => RD,
      F: () => XD,
      Fb: () => TD,
      G: () => jD,
      H: () => KD,
      I: () => iD,
      J: () => SD,
      Jb: () => GD,
      Kb: () => MD,
      N: () => OD,
      Nb: () => PD,
      Pb: () => CD,
      R: () => xD,
      S: () => bD,
      W: () => ND,
      _: () => sD,
      bb: () => dD,
      c: () => pD,
      eb: () => yD,
      g: () => BD,
      gb: () => mD,
      k: () => VD,
      kb: () => QD,
      lb: () => ED,
      nb: () => kD,
      o: () => nD,
      q: () => cD,
      qb: () => eD,
      u: () => lD,
      ub: () => ZD,
      x: () => WD,
      yb: () => JD,
      z: () => UD
    });
    const pD = {
      GLSL: 0,
      WGSL: 1
    };

    function sD(DD) {
      return DD === pD.WGSL
    }

    function KD(DD, zD, wD) {
      return sD(DD) ? wD : zD
    }
    const rD = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function LD(DD, zD) {
      if (!sD(DD)) return zD;
      const wD = rD.get(zD);
      if (!wD) throw new Error(`No WGSL name for shader type "${zD}"`);
      return wD
    }

    function cD(DD, zD) {
      for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
      return `${LD(DD,zD)}(${pD.join(", ")})`
    }

    function gD(DD, zD) {
      return cD(DD, "int", zD)
    }

    function RD(DD, zD, wD, pD, KD) {
      return sD(DD) ? `var ${wD}: ${LD(DD,zD)} = ${pD};` : `${ID(DD,KD)}${zD} ${wD} = ${pD};`
    }

    function AD(DD, zD, wD) {
      return sD(DD) ? `var ${wD}: ${LD(DD,zD)};` : `${zD} ${wD};`
    }

    function UD(DD, zD, wD, pD) {
      return sD(DD) ? `const ${wD}: ${LD(DD,zD)} = ${pD};` : `const ${zD} ${wD} = ${pD};`
    }

    function fD(DD, zD, wD, pD, KD) {
      if (sD(DD)) {
        return `fn ${wD}(${pD.map((zD=>`${zD.name}: ${LD(DD,zD.type)}`)).join(", ")}) -> ${LD(DD,zD)} {${KD}}`
      }
      return `${zD} ${wD}(${pD.map((DD=>`${DD.type} ${DD.name}`)).join(", ")}) {${KD}}`
    }

    function ID(DD, zD) {
      return !zD || sD(DD) ? "" : `${zD} `
    }

    function BD(DD, zD, wD, pD) {
      return sD(DD) ? `attribute ${zD}: ${LD(DD,wD)};` : `attribute ${ID(DD,pD)}${wD} ${zD};`
    }

    function GD(DD, zD, wD, pD) {
      return sD(DD) ? `varying ${zD}: ${LD(DD,wD)};` : `varying ${ID(DD,pD)}${wD} ${zD};`
    }

    function hD(DD, zD, wD) {
      return sD(DD) ? `uniform ${zD}: ${LD(DD,wD)};` : `uniform ${wD} ${zD};`
    }

    function nD(DD) {
      return sD(DD) ? "vertexOutputs.position" : "gl_Position"
    }

    function MD(DD, zD) {
      return sD(DD) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${zD}}` : `void main() {${zD}}`
    }

    function OD(DD, zD) {
      return sD(DD) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${zD}}` : `void main() {${zD}}`
    }

    function JD(DD, zD, wD) {
      if (sD(DD)) {
        return [`var ${zD}Sampler: sampler;`, `var ${zD}: ${"2dArray"===wD?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===wD?"sampler2DArray":"sampler2D"} ${zD};`
    }

    function ED(DD, zD, wD) {
      return sD(DD) ? `textureSample(${zD}, ${zD}Sampler, ${wD})` : `texture2D(${zD}, ${wD})`
    }

    function QD(DD, zD, wD, pD, KD) {
      if (sD(DD)) {
        return `${KD?"textureSampleLevel":"textureSample"}(${zD}, ${zD}Sampler, ${wD}, ${gD(DD,`round(${pD})`)}${KD?`, ${KD}`:""})`
      }
      const rD = cD(DD, "vec3", wD, pD);
      return KD ? `textureLod(${zD}, ${rD}, ${KD})` : `texture(${zD}, ${rD})`
    }

    function XD(DD) {
      return sD(DD) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function VD(DD) {
      return sD(DD) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function PD(DD, zD) {
      return sD(DD) ? `vertexInputs.${zD}` : zD
    }

    function CD(DD, zD) {
      return sD(DD) ? `vertexOutputs.${zD}` : zD
    }

    function xD(DD, zD) {
      return sD(DD) ? `fragmentInputs.${zD}` : zD
    }

    function TD(DD, zD) {
      return sD(DD) ? `uniforms.${zD}` : zD
    }

    function bD(DD, zD, wD) {
      return sD(DD) ? `frame.${zD}` : wD
    }

    function jD(DD) {
      return sD(DD) ? "scene.vEyePosition" : "vEyePosition"
    }

    function dD(DD) {
      return sD(DD) ? "mesh.visibility" : "visibility"
    }

    function SD(DD) {
      return sD(DD) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function iD(DD) {
      return sD(DD) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function lD(DD, zD) {
      return sD(DD) ? `dpdx(${zD})` : `dFdx(${zD})`
    }

    function WD(DD, zD) {
      return sD(DD) ? `dpdy(${zD})` : `dFdy(${zD})`
    }

    function ND(DD, zD) {
      return sD(DD) ? `inverseSqrt(${zD})` : `inversesqrt(${zD})`
    }

    function ZD(DD, zD, wD, pD) {
      return sD(DD) ? `select(${pD}, ${wD}, ${zD})` : `((${zD}) ? (${wD}) : (${pD}))`
    }

    function yD(DD, zD, wD) {
      return sD(DD) ? `((${zD}) - (${wD}) * floor((${zD}) / (${wD})))` : `mod(${zD}, ${wD})`
    }

    function kD(DD, zD, wD) {
      return sD(DD) ? `${zD} = vec4f(${wD}, ${zD}.a);` : `${zD}.rgb = ${wD};`
    }

    function mD(DD, zD, wD) {
      return sD(DD) ? `${zD} = vec4f(${zD}.rgb * (${wD}), ${zD}.a);` : `${zD}.rgb *= ${wD};`
    }

    function eD(DD, zD, wD) {
      return sD(DD) ? `${zD} = vec4f(${wD}, ${zD}.w);` : `${zD}.xyz = ${wD};`
    }
  },
  39776: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersRepository : pD.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersStore : pD.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.IncludesShadersStore : pD.IncludesShadersStoreWGSL
      }
    }
    pD.ShadersRepository = "src/Shaders/", pD.ShadersStore = {}, pD.IncludesShadersStore = {}, pD.ShadersRepositoryWGSL = "src/ShadersWGSL/", pD.ShadersStoreWGSL = {}, pD.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);