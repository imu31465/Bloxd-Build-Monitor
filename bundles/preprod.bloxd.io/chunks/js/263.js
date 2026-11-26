export const id = 263;
export const ids = [263];
export const modules = {
  64115: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      DEVTOOLS_SHADERS: () => SH,
      registerDevtoolsShader: () => hH
    });
    var AH = LH(41138),
      rH = LH(38086);
    const SH = {
      devtoolsNormal: function(HH) {
        return {
          vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.d)(HH,"normal","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\t\t\t${(0,rH.yb)(HH,"world","mat4")}\n\t\t\t${(0,rH.Eb)(HH,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${(0,rH.j)(HH)} = ${(0,rH.Cb)(HH,"worldViewProjection")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"position"),"1.0")};\n\t\t\t\t${(0,rH.Mb)(HH,"vNormal")} = normalize((${(0,rH.Cb)(HH,"world")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,rH.Eb)(HH,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t\n\t\t\t\t${(0,rH.C)(HH,"vec3","normalColor",`abs(${(0,rH.U)(HH,"vNormal")})`)}\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(HH) {
        return {
          vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${(0,rH.j)(HH)} = ${(0,rH.Cb)(HH,"worldViewProjection")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(HH) {
        return {
          vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\t\t\t${(0,rH.yb)(HH,"world","mat4")}\n\t\t\t${(0,rH.yb)(HH,"cameraPosition","vec3")}\n\t\t\t${(0,rH.Eb)(HH,"vDepth","float","mediump")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${(0,rH.j)(HH)} = ${(0,rH.Cb)(HH,"worldViewProjection")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"position"),"1.0")};\n\t\t\t\t${(0,rH.C)(HH,"vec3","worldPosition",`(${(0,rH.Cb)(HH,"world")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,rH.Mb)(HH,"vDepth")} = distance(worldPosition, ${(0,rH.Cb)(HH,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,rH.Eb)(HH,"vDepth","float","mediump")}\n\t\t\t${(0,rH.yb)(HH,"maxDepth","float")}\n\t\t\t${(0,rH.yb)(HH,"minDepth","float")}\n\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t\n\t\t\t\t${(0,rH.C)(HH,"float","normalizedDepth",`clamp((${(0,rH.U)(HH,"vDepth")} - ${(0,rH.Cb)(HH,"minDepth")}) / (${(0,rH.Cb)(HH,"maxDepth")} - ${(0,rH.Cb)(HH,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,rH.C)(HH,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function hH(HH, BH) {
      const {
        vertex: LH,
        fragment: rH
      } = SH[HH](BH), hH = AH.c.GetShadersStore(BH);
      hH[`${HH}VertexShader`] = LH, hH[`${HH}FragmentShader`] = rH
    }
  },
  38086: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => rH,
      C: () => EH,
      Cb: () => IH,
      Eb: () => WH,
      G: () => OH,
      Hb: () => vH,
      J: () => lH,
      Lb: () => kH,
      M: () => SH,
      Mb: () => mH,
      P: () => eH,
      R: () => cH,
      T: () => PH,
      U: () => oH,
      V: () => fH,
      Z: () => NH,
      bb: () => KH,
      c: () => AH,
      d: () => QH,
      eb: () => jH,
      fb: () => FH,
      g: () => bH,
      ib: () => VH,
      j: () => xH,
      kb: () => UH,
      l: () => zH,
      nb: () => nH,
      o: () => qH,
      ob: () => DH,
      pb: () => RH,
      q: () => gH,
      rb: () => TH,
      t: () => GH,
      ub: () => CH,
      x: () => YH,
      yb: () => MH,
      z: () => XH
    });
    const AH = {
      GLSL: 0,
      WGSL: 1
    };

    function rH(HH) {
      return HH === AH.WGSL
    }

    function SH(HH, BH, LH) {
      return rH(HH) ? LH : BH
    }
    const hH = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function tH(HH, BH) {
      if (!rH(HH)) return BH;
      const LH = hH.get(BH);
      if (!LH) throw new Error(`No WGSL name for shader type "${BH}"`);
      return LH
    }

    function zH(HH, BH) {
      for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
      return `${tH(HH,BH)}(${AH.join(", ")})`
    }

    function CH(HH, BH) {
      return zH(HH, "int", BH)
    }

    function EH(HH, BH, LH, AH, SH) {
      return rH(HH) ? `var ${LH}: ${tH(HH,BH)} = ${AH};` : `${uH(HH,SH)}${BH} ${LH} = ${AH};`
    }

    function XH(HH, BH, LH) {
      return rH(HH) ? `var ${LH}: ${tH(HH,BH)};` : `${BH} ${LH};`
    }

    function GH(HH, BH, LH, AH) {
      return rH(HH) ? `const ${LH}: ${tH(HH,BH)} = ${AH};` : `const ${BH} ${LH} = ${AH};`
    }

    function YH(HH, BH, LH, AH, SH) {
      if (rH(HH)) {
        return `fn ${LH}(${AH.map((BH=>`${BH.name}: ${tH(HH,BH.type)}`)).join(", ")}) -> ${tH(HH,BH)} {${SH}}`
      }
      return `${BH} ${LH}(${AH.map((HH=>`${HH.type} ${HH.name}`)).join(", ")}) {${SH}}`
    }

    function uH(HH, BH) {
      return !BH || rH(HH) ? "" : `${BH} `
    }

    function QH(HH, BH, LH, AH) {
      return rH(HH) ? `attribute ${BH}: ${tH(HH,LH)};` : `attribute ${uH(HH,AH)}${LH} ${BH};`
    }

    function WH(HH, BH, LH, AH) {
      return rH(HH) ? `varying ${BH}: ${tH(HH,LH)};` : `varying ${uH(HH,AH)}${LH} ${BH};`
    }

    function MH(HH, BH, LH) {
      return rH(HH) ? `uniform ${BH}: ${tH(HH,LH)};` : `uniform ${LH} ${BH};`
    }

    function xH(HH) {
      return rH(HH) ? "vertexOutputs.position" : "gl_Position"
    }

    function vH(HH, BH) {
      return rH(HH) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${BH}}` : `void main() {${BH}}`
    }

    function PH(HH, BH) {
      return rH(HH) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${BH}}` : `void main() {${BH}}`
    }

    function TH(HH, BH, LH) {
      if (rH(HH)) {
        return [`var ${BH}Sampler: sampler;`, `var ${BH}: ${"2dArray"===LH?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===LH?"sampler2DArray":"sampler2D"} ${BH};`
    }

    function UH(HH, BH, LH) {
      return rH(HH) ? `textureSample(${BH}, ${BH}Sampler, ${LH})` : `texture2D(${BH}, ${LH})`
    }

    function VH(HH, BH, LH, AH, SH) {
      if (rH(HH)) {
        return `${SH?"textureSampleLevel":"textureSample"}(${BH}, ${BH}Sampler, ${LH}, ${CH(HH,`round(${AH})`)}${SH?`, ${SH}`:""})`
      }
      const hH = zH(HH, "vec3", LH, AH);
      return SH ? `textureLod(${BH}, ${hH}, ${SH})` : `texture(${BH}, ${hH})`
    }

    function OH(HH) {
      return rH(HH) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function bH(HH) {
      return rH(HH) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function kH(HH, BH) {
      return rH(HH) ? `vertexInputs.${BH}` : BH
    }

    function mH(HH, BH) {
      return rH(HH) ? `vertexOutputs.${BH}` : BH
    }

    function oH(HH, BH) {
      return rH(HH) ? `fragmentInputs.${BH}` : BH
    }

    function IH(HH, BH) {
      return rH(HH) ? `uniforms.${BH}` : BH
    }

    function fH(HH, BH, LH) {
      return rH(HH) ? `frame.${BH}` : LH
    }

    function lH(HH) {
      return rH(HH) ? "scene.vEyePosition" : "vEyePosition"
    }

    function KH(HH) {
      return rH(HH) ? "mesh.visibility" : "visibility"
    }

    function cH(HH) {
      return rH(HH) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function eH(HH) {
      return rH(HH) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function qH(HH, BH) {
      return rH(HH) ? `dpdx(${BH})` : `dFdx(${BH})`
    }

    function gH(HH, BH) {
      return rH(HH) ? `dpdy(${BH})` : `dFdy(${BH})`
    }

    function NH(HH, BH) {
      return rH(HH) ? `inverseSqrt(${BH})` : `inversesqrt(${BH})`
    }

    function RH(HH, BH, LH, AH) {
      return rH(HH) ? `select(${AH}, ${LH}, ${BH})` : `((${BH}) ? (${LH}) : (${AH}))`
    }

    function jH(HH, BH, LH) {
      return rH(HH) ? `((${BH}) - (${LH}) * floor((${BH}) / (${LH})))` : `mod(${BH}, ${LH})`
    }

    function nH(HH, BH, LH) {
      return rH(HH) ? `${BH} = vec4f(${LH}, ${BH}.a);` : `${BH}.rgb = ${LH};`
    }

    function FH(HH, BH, LH) {
      return rH(HH) ? `${BH} = vec4f(${BH}.rgb * (${LH}), ${BH}.a);` : `${BH}.rgb *= ${LH};`
    }

    function DH(HH, BH, LH) {
      return rH(HH) ? `${BH} = vec4f(${LH}, ${BH}.w);` : `${BH}.xyz = ${LH};`
    }
  },
  41138: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersStore : AH.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.IncludesShadersStore : AH.IncludesShadersStoreWGSL
      }
    }
    AH.ShadersRepository = "src/Shaders/", AH.ShadersStore = {}, AH.IncludesShadersStore = {}, AH.ShadersRepositoryWGSL = "src/ShadersWGSL/", AH.ShadersStoreWGSL = {}, AH.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);