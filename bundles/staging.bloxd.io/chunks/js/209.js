export const id = 209;
export const ids = [209];
export const modules = {
  59412: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      DEVTOOLS_SHADERS: () => eJ,
      registerDevtoolsShader: () => XJ
    });
    var FJ = ZJ(38658),
      UJ = ZJ(36093);
    const eJ = {
      devtoolsNormal: function(JJ) {
        return {
          vertex: `\n\t\t\t${(0,UJ.g)(JJ,"position","vec3")}\n\t\t\t${(0,UJ.g)(JJ,"normal","vec3")}\n\t\t\t${(0,UJ.Gb)(JJ,"worldViewProjection","mat4")}\n\t\t\t${(0,UJ.Gb)(JJ,"world","mat4")}\n\t\t\t${(0,UJ.Ib)(JJ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,UJ.Mb)(JJ,`\n\t\t\t\t${(0,UJ.l)(JJ)} = ${(0,UJ.Hb)(JJ,"worldViewProjection")} * ${(0,UJ.p)(JJ,"vec4",(0,UJ.Nb)(JJ,"position"),"1.0")};\n\t\t\t\t${(0,UJ.Ob)(JJ,"vNormal")} = normalize((${(0,UJ.Hb)(JJ,"world")} * ${(0,UJ.p)(JJ,"vec4",(0,UJ.Nb)(JJ,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,UJ.Ib)(JJ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,UJ.Z)(JJ,`\n\t\t\t\t\n\t\t\t\t${(0,UJ.H)(JJ,"vec3","normalColor",`abs(${(0,UJ.$)(JJ,"vNormal")})`)}\n\t\t\t\t${(0,UJ.T)(JJ)} = ${(0,UJ.p)(JJ,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(JJ) {
        return {
          vertex: `\n\t\t\t${(0,UJ.g)(JJ,"position","vec3")}\n\t\t\t${(0,UJ.Gb)(JJ,"worldViewProjection","mat4")}\n\n\t\t\t${(0,UJ.Mb)(JJ,`\n\t\t\t\t${(0,UJ.l)(JJ)} = ${(0,UJ.Hb)(JJ,"worldViewProjection")} * ${(0,UJ.p)(JJ,"vec4",(0,UJ.Nb)(JJ,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,UJ.Z)(JJ,`\n\t\t\t\t${(0,UJ.T)(JJ)} = ${(0,UJ.p)(JJ,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(JJ) {
        return {
          vertex: `\n\t\t\t${(0,UJ.g)(JJ,"position","vec3")}\n\t\t\t${(0,UJ.Gb)(JJ,"worldViewProjection","mat4")}\n\t\t\t${(0,UJ.Gb)(JJ,"world","mat4")}\n\t\t\t${(0,UJ.Gb)(JJ,"cameraPosition","vec3")}\n\t\t\t${(0,UJ.Ib)(JJ,"vDepth","float","mediump")}\n\n\t\t\t${(0,UJ.Mb)(JJ,`\n\t\t\t\t${(0,UJ.l)(JJ)} = ${(0,UJ.Hb)(JJ,"worldViewProjection")} * ${(0,UJ.p)(JJ,"vec4",(0,UJ.Nb)(JJ,"position"),"1.0")};\n\t\t\t\t${(0,UJ.H)(JJ,"vec3","worldPosition",`(${(0,UJ.Hb)(JJ,"world")} * ${(0,UJ.p)(JJ,"vec4",(0,UJ.Nb)(JJ,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,UJ.Ob)(JJ,"vDepth")} = distance(worldPosition, ${(0,UJ.Hb)(JJ,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,UJ.Ib)(JJ,"vDepth","float","mediump")}\n\t\t\t${(0,UJ.Gb)(JJ,"maxDepth","float")}\n\t\t\t${(0,UJ.Gb)(JJ,"minDepth","float")}\n\n\t\t\t${(0,UJ.Z)(JJ,`\n\t\t\t\t\n\t\t\t\t${(0,UJ.H)(JJ,"float","normalizedDepth",`clamp((${(0,UJ.$)(JJ,"vDepth")} - ${(0,UJ.Hb)(JJ,"minDepth")}) / (${(0,UJ.Hb)(JJ,"maxDepth")} - ${(0,UJ.Hb)(JJ,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,UJ.H)(JJ,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,UJ.T)(JJ)} = ${(0,UJ.p)(JJ,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function XJ(JJ, cJ) {
      const {
        vertex: ZJ,
        fragment: UJ
      } = eJ[JJ](cJ), XJ = FJ.b.GetShadersStore(cJ);
      XJ[`${JJ}VertexShader`] = ZJ, XJ[`${JJ}FragmentShader`] = UJ
    }
  },
  36093: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      $: () => MJ,
      A: () => sJ,
      Bb: () => QJ,
      E: () => hJ,
      Fb: () => jJ,
      Gb: () => xJ,
      H: () => YJ,
      Hb: () => bJ,
      Ib: () => fJ,
      L: () => KJ,
      Mb: () => vJ,
      Nb: () => SJ,
      Ob: () => IJ,
      P: () => WJ,
      Q: () => eJ,
      T: () => PJ,
      X: () => HJ,
      Z: () => mJ,
      ab: () => wJ,
      c: () => FJ,
      cb: () => dJ,
      g: () => GJ,
      gb: () => UJ,
      i: () => yJ,
      ib: () => gJ,
      l: () => rJ,
      mb: () => NJ,
      nb: () => TJ,
      p: () => qJ,
      pb: () => VJ,
      r: () => kJ,
      rb: () => EJ,
      u: () => pJ,
      vb: () => OJ,
      w: () => DJ,
      yb: () => CJ,
      zb: () => zJ
    });
    const FJ = {
      GLSL: 0,
      WGSL: 1
    };

    function UJ(JJ) {
      return JJ === FJ.WGSL
    }

    function eJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? ZJ : cJ
    }
    const XJ = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function AJ(JJ, cJ) {
      if (!UJ(JJ)) return cJ;
      const ZJ = XJ.get(cJ);
      if (!ZJ) throw new Error(`No WGSL name for shader type "${cJ}"`);
      return ZJ
    }

    function qJ(JJ, cJ) {
      for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
      return `${AJ(JJ,cJ)}(${FJ.join(", ")})`
    }

    function jJ(JJ, cJ) {
      return qJ(JJ, "int", cJ)
    }

    function YJ(JJ, cJ, ZJ, FJ, eJ) {
      return UJ(JJ) ? `var ${ZJ}: ${AJ(JJ,cJ)} = ${FJ};` : `${nJ(JJ,eJ)}${cJ} ${ZJ} = ${FJ};`
    }

    function hJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `var ${ZJ}: ${AJ(JJ,cJ)};` : `${cJ} ${ZJ};`
    }

    function DJ(JJ, cJ, ZJ, FJ) {
      return UJ(JJ) ? `const ${ZJ}: ${AJ(JJ,cJ)} = ${FJ};` : `const ${cJ} ${ZJ} = ${FJ};`
    }

    function sJ(JJ, cJ, ZJ, FJ, eJ) {
      if (UJ(JJ)) {
        return `fn ${ZJ}(${FJ.map((cJ=>`${cJ.name}: ${AJ(JJ,cJ.type)}`)).join(", ")}) -> ${AJ(JJ,cJ)} {${eJ}}`
      }
      return `${cJ} ${ZJ}(${FJ.map((JJ=>`${JJ.type} ${JJ.name}`)).join(", ")}) {${eJ}}`
    }

    function nJ(JJ, cJ) {
      return !cJ || UJ(JJ) ? "" : `${cJ} `
    }

    function GJ(JJ, cJ, ZJ, FJ) {
      return UJ(JJ) ? `attribute ${cJ}: ${AJ(JJ,ZJ)};` : `attribute ${nJ(JJ,FJ)}${ZJ} ${cJ};`
    }

    function fJ(JJ, cJ, ZJ, FJ) {
      return UJ(JJ) ? `varying ${cJ}: ${AJ(JJ,ZJ)};` : `varying ${nJ(JJ,FJ)}${ZJ} ${cJ};`
    }

    function xJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `uniform ${cJ}: ${AJ(JJ,ZJ)};` : `uniform ${ZJ} ${cJ};`
    }

    function rJ(JJ) {
      return UJ(JJ) ? "vertexOutputs.position" : "gl_Position"
    }

    function vJ(JJ, cJ) {
      return UJ(JJ) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${cJ}}` : `void main() {${cJ}}`
    }

    function mJ(JJ, cJ) {
      return UJ(JJ) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${cJ}}` : `void main() {${cJ}}`
    }

    function QJ(JJ, cJ, ZJ) {
      if (UJ(JJ)) {
        return [`var ${cJ}Sampler: sampler;`, `var ${cJ}: ${"2dArray"===ZJ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===ZJ?"sampler2DArray":"sampler2D"} ${cJ};`
    }

    function EJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `textureSample(${cJ}, ${cJ}Sampler, ${ZJ})` : `texture2D(${cJ}, ${ZJ})`
    }

    function VJ(JJ, cJ, ZJ, FJ, eJ) {
      if (UJ(JJ)) {
        return `${eJ?"textureSampleLevel":"textureSample"}(${cJ}, ${cJ}Sampler, ${ZJ}, ${jJ(JJ,`round(${FJ})`)}${eJ?`, ${eJ}`:""})`
      }
      const XJ = qJ(JJ, "vec3", ZJ, FJ);
      return eJ ? `textureLod(${cJ}, ${XJ}, ${eJ})` : `texture(${cJ}, ${XJ})`
    }

    function KJ(JJ) {
      return UJ(JJ) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function yJ(JJ) {
      return UJ(JJ) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function SJ(JJ, cJ) {
      return UJ(JJ) ? `vertexInputs.${cJ}` : cJ
    }

    function IJ(JJ, cJ) {
      return UJ(JJ) ? `vertexOutputs.${cJ}` : cJ
    }

    function MJ(JJ, cJ) {
      return UJ(JJ) ? `fragmentInputs.${cJ}` : cJ
    }

    function bJ(JJ, cJ) {
      return UJ(JJ) ? `uniforms.${cJ}` : cJ
    }

    function wJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `frame.${cJ}` : ZJ
    }

    function WJ(JJ) {
      return UJ(JJ) ? "scene.vEyePosition" : "vEyePosition"
    }

    function gJ(JJ) {
      return UJ(JJ) ? "mesh.visibility" : "visibility"
    }

    function HJ(JJ) {
      return UJ(JJ) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function PJ(JJ) {
      return UJ(JJ) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function kJ(JJ, cJ) {
      return UJ(JJ) ? `dpdx(${cJ})` : `dFdx(${cJ})`
    }

    function pJ(JJ, cJ) {
      return UJ(JJ) ? `dpdy(${cJ})` : `dFdy(${cJ})`
    }

    function dJ(JJ, cJ) {
      return UJ(JJ) ? `inverseSqrt(${cJ})` : `inversesqrt(${cJ})`
    }

    function zJ(JJ, cJ, ZJ, FJ) {
      return UJ(JJ) ? `select(${FJ}, ${ZJ}, ${cJ})` : `((${cJ}) ? (${ZJ}) : (${FJ}))`
    }

    function NJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `((${cJ}) - (${ZJ}) * floor((${cJ}) / (${ZJ})))` : `mod(${cJ}, ${ZJ})`
    }

    function OJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `${cJ} = vec4f(${ZJ}, ${cJ}.a);` : `${cJ}.rgb = ${ZJ};`
    }

    function TJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `${cJ} = vec4f(${cJ}.rgb * (${ZJ}), ${cJ}.a);` : `${cJ}.rgb *= ${ZJ};`
    }

    function CJ(JJ, cJ, ZJ) {
      return UJ(JJ) ? `${cJ} = vec4f(${ZJ}, ${cJ}.w);` : `${cJ}.xyz = ${ZJ};`
    }
  },
  38658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.ShadersRepository : FJ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.ShadersStore : FJ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FJ.IncludesShadersStore : FJ.IncludesShadersStoreWGSL
      }
    }
    FJ.ShadersRepository = "src/Shaders/", FJ.ShadersStore = {}, FJ.IncludesShadersStore = {}, FJ.ShadersRepositoryWGSL = "src/ShadersWGSL/", FJ.ShadersStoreWGSL = {}, FJ.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);