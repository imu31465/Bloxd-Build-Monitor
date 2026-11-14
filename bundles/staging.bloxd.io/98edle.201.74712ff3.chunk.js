export const id = 201;
export const ids = [201];
export const modules = {
  58602: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      DEVTOOLS_SHADERS: () => zR,
      registerDevtoolsShader: () => AW
    });
    var wW = MW(37441),
      CW = MW(35248);
    const zR = {
      devtoolsNormal: function(WW) {
        return {
          vertex: `\n\t\t\t${(0,CW.i)(WW,"position","vec3")}\n\t\t\t${(0,CW.i)(WW,"normal","vec3")}\n\t\t\t${(0,CW.Gb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,CW.Gb)(WW,"world","mat4")}\n\t\t\t${(0,CW.Nb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,CW.Rb)(WW,`\n\t\t\t\t${(0,CW.q)(WW)} = ${(0,CW.Kb)(WW,"worldViewProjection")} * ${(0,CW.s)(WW,"vec4",(0,CW.Sb)(WW,"position"),"1.0")};\n\t\t\t\t${(0,CW.Ub)(WW,"vNormal")} = normalize((${(0,CW.Kb)(WW,"world")} * ${(0,CW.s)(WW,"vec4",(0,CW.Sb)(WW,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,CW.Nb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,CW.W)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,CW.G)(WW,"vec3","normalColor",`abs(${(0,CW.Z)(WW,"vNormal")})`)}\n\t\t\t\t${(0,CW.R)(WW)} = ${(0,CW.s)(WW,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(WW) {
        return {
          vertex: `\n\t\t\t${(0,CW.i)(WW,"position","vec3")}\n\t\t\t${(0,CW.Gb)(WW,"worldViewProjection","mat4")}\n\n\t\t\t${(0,CW.Rb)(WW,`\n\t\t\t\t${(0,CW.q)(WW)} = ${(0,CW.Kb)(WW,"worldViewProjection")} * ${(0,CW.s)(WW,"vec4",(0,CW.Sb)(WW,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,CW.W)(WW,`\n\t\t\t\t${(0,CW.R)(WW)} = ${(0,CW.s)(WW,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(WW) {
        return {
          vertex: `\n\t\t\t${(0,CW.i)(WW,"position","vec3")}\n\t\t\t${(0,CW.Gb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,CW.Gb)(WW,"world","mat4")}\n\t\t\t${(0,CW.Gb)(WW,"cameraPosition","vec3")}\n\t\t\t${(0,CW.Nb)(WW,"vDepth","float","mediump")}\n\n\t\t\t${(0,CW.Rb)(WW,`\n\t\t\t\t${(0,CW.q)(WW)} = ${(0,CW.Kb)(WW,"worldViewProjection")} * ${(0,CW.s)(WW,"vec4",(0,CW.Sb)(WW,"position"),"1.0")};\n\t\t\t\t${(0,CW.G)(WW,"vec3","worldPosition",`(${(0,CW.Kb)(WW,"world")} * ${(0,CW.s)(WW,"vec4",(0,CW.Sb)(WW,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,CW.Ub)(WW,"vDepth")} = distance(worldPosition, ${(0,CW.Kb)(WW,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,CW.Nb)(WW,"vDepth","float","mediump")}\n\t\t\t${(0,CW.Gb)(WW,"maxDepth","float")}\n\t\t\t${(0,CW.Gb)(WW,"minDepth","float")}\n\n\t\t\t${(0,CW.W)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,CW.G)(WW,"float","normalizedDepth",`clamp((${(0,CW.Z)(WW,"vDepth")} - ${(0,CW.Kb)(WW,"minDepth")}) / (${(0,CW.Kb)(WW,"maxDepth")} - ${(0,CW.Kb)(WW,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,CW.G)(WW,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,CW.R)(WW)} = ${(0,CW.s)(WW,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function AW(WW, RW) {
      const {
        vertex: MW,
        fragment: CW
      } = zR[WW](RW), AW = wW.c.GetShadersStore(RW);
      AW[`${WW}VertexShader`] = MW, AW[`${WW}FragmentShader`] = CW
    }
  },
  35248: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => aR,
      A: () => TW,
      D: () => BW,
      Db: () => NW,
      G: () => eW,
      Gb: () => JW,
      H: () => QW,
      K: () => sW,
      Kb: () => kR,
      Nb: () => YW,
      O: () => zR,
      R: () => hW,
      Rb: () => IW,
      Sb: () => cR,
      T: () => pW,
      Ub: () => XW,
      W: () => oW,
      Z: () => jR,
      bb: () => VW,
      e: () => wW,
      eb: () => CW,
      gb: () => dW,
      i: () => iR,
      jb: () => xR,
      lb: () => KW,
      m: () => rR,
      ob: () => fW,
      q: () => PW,
      s: () => yR,
      sb: () => FW,
      t: () => UW,
      tb: () => vR,
      wb: () => uW,
      x: () => EW,
      xb: () => mR,
      z: () => tR,
      zb: () => lW
    });
    const wW = {
      GLSL: 0,
      WGSL: 1
    };

    function CW(WW) {
      return WW === wW.WGSL
    }

    function zR(WW, RW, MW) {
      return CW(WW) ? MW : RW
    }
    const AW = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function bR(WW, RW) {
      if (!CW(WW)) return RW;
      const MW = AW.get(RW);
      if (!MW) throw new Error(`No WGSL name for shader type "${RW}"`);
      return MW
    }

    function yR(WW, RW) {
      for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
      return `${bR(WW,RW)}(${wW.join(", ")})`
    }

    function NW(WW, RW) {
      return yR(WW, "int", RW)
    }

    function eW(WW, RW, MW, wW, zR) {
      return CW(WW) ? `var ${MW}: ${bR(WW,RW)} = ${wW};` : `${gR(WW,zR)}${RW} ${MW} = ${wW};`
    }

    function BW(WW, RW, MW) {
      return CW(WW) ? `var ${MW}: ${bR(WW,RW)};` : `${RW} ${MW};`
    }

    function tR(WW, RW, MW, wW) {
      return CW(WW) ? `const ${MW}: ${bR(WW,RW)} = ${wW};` : `const ${RW} ${MW} = ${wW};`
    }

    function TW(WW, RW, MW, wW, zR) {
      if (CW(WW)) {
        return `fn ${MW}(${wW.map((RW=>`${RW.name}: ${bR(WW,RW.type)}`)).join(", ")}) -> ${bR(WW,RW)} {${zR}}`
      }
      return `${RW} ${MW}(${wW.map((WW=>`${WW.type} ${WW.name}`)).join(", ")}) {${zR}}`
    }

    function gR(WW, RW) {
      return !RW || CW(WW) ? "" : `${RW} `
    }

    function iR(WW, RW, MW, wW) {
      return CW(WW) ? `attribute ${RW}: ${bR(WW,MW)};` : `attribute ${gR(WW,wW)}${MW} ${RW};`
    }

    function YW(WW, RW, MW, wW) {
      return CW(WW) ? `varying ${RW}: ${bR(WW,MW)};` : `varying ${gR(WW,wW)}${MW} ${RW};`
    }

    function JW(WW, RW, MW) {
      return CW(WW) ? `uniform ${RW}: ${bR(WW,MW)};` : `uniform ${MW} ${RW};`
    }

    function PW(WW) {
      return CW(WW) ? "vertexOutputs.position" : "gl_Position"
    }

    function IW(WW, RW) {
      return CW(WW) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${RW}}` : `void main() {${RW}}`
    }

    function oW(WW, RW) {
      return CW(WW) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${RW}}` : `void main() {${RW}}`
    }

    function lW(WW, RW, MW) {
      if (CW(WW)) {
        return [`var ${RW}Sampler: sampler;`, `var ${RW}: ${"2dArray"===MW?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===MW?"sampler2DArray":"sampler2D"} ${RW};`
    }

    function FW(WW, RW, MW) {
      return CW(WW) ? `textureSample(${RW}, ${RW}Sampler, ${MW})` : `texture2D(${RW}, ${MW})`
    }

    function fW(WW, RW, MW, wW, zR) {
      if (CW(WW)) {
        return `${zR?"textureSampleLevel":"textureSample"}(${RW}, ${RW}Sampler, ${MW}, ${NW(WW,`round(${wW})`)}${zR?`, ${zR}`:""})`
      }
      const AW = yR(WW, "vec3", MW, wW);
      return zR ? `textureLod(${RW}, ${AW}, ${zR})` : `texture(${RW}, ${AW})`
    }

    function QW(WW) {
      return CW(WW) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function rR(WW) {
      return CW(WW) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function cR(WW, RW) {
      return CW(WW) ? `vertexInputs.${RW}` : RW
    }

    function XW(WW, RW) {
      return CW(WW) ? `vertexOutputs.${RW}` : RW
    }

    function jR(WW, RW) {
      return CW(WW) ? `fragmentInputs.${RW}` : RW
    }

    function kR(WW, RW) {
      return CW(WW) ? `uniforms.${RW}` : RW
    }

    function aR(WW, RW, MW) {
      return CW(WW) ? `frame.${RW}` : MW
    }

    function sW(WW) {
      return CW(WW) ? "scene.vEyePosition" : "vEyePosition"
    }

    function dW(WW) {
      return CW(WW) ? "mesh.visibility" : "visibility"
    }

    function pW(WW) {
      return CW(WW) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function hW(WW) {
      return CW(WW) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function UW(WW, RW) {
      return CW(WW) ? `dpdx(${RW})` : `dFdx(${RW})`
    }

    function EW(WW, RW) {
      return CW(WW) ? `dpdy(${RW})` : `dFdy(${RW})`
    }

    function VW(WW, RW) {
      return CW(WW) ? `inverseSqrt(${RW})` : `inversesqrt(${RW})`
    }

    function mR(WW, RW, MW, wW) {
      return CW(WW) ? `select(${wW}, ${MW}, ${RW})` : `((${RW}) ? (${MW}) : (${wW}))`
    }

    function xR(WW, RW, MW) {
      return CW(WW) ? `((${RW}) - (${MW}) * floor((${RW}) / (${MW})))` : `mod(${RW}, ${MW})`
    }

    function vR(WW, RW, MW) {
      return CW(WW) ? `${RW} = vec4f(${MW}, ${RW}.a);` : `${RW}.rgb = ${MW};`
    }

    function KW(WW, RW, MW) {
      return CW(WW) ? `${RW} = vec4f(${RW}.rgb * (${MW}), ${RW}.a);` : `${RW}.rgb *= ${MW};`
    }

    function uW(WW, RW, MW) {
      return CW(WW) ? `${RW} = vec4f(${MW}, ${RW}.w);` : `${RW}.xyz = ${MW};`
    }
  },
  37441: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    class wW {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wW.ShadersRepository : wW.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wW.ShadersStore : wW.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wW.IncludesShadersStore : wW.IncludesShadersStoreWGSL
      }
    }
    wW.ShadersRepository = "src/Shaders/", wW.ShadersStore = {}, wW.IncludesShadersStore = {}, wW.ShadersRepositoryWGSL = "src/ShadersWGSL/", wW.ShadersStoreWGSL = {}, wW.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);