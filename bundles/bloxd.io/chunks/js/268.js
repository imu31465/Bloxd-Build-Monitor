export const id = 268;
export const ids = [268];
export const modules = {
  64410: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      DEVTOOLS_SHADERS: () => NW,
      registerDevtoolsShader: () => PW
    });
    var mW = OW(41392),
      EW = OW(38388);
    const NW = {
      devtoolsNormal: function(WW) {
        return {
          vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.g)(WW,"normal","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"world","mat4")}\n\t\t\t${(0,EW.Kb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${(0,EW.l)(WW)} = ${(0,EW.Ib)(WW,"worldViewProjection")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"position"),"1.0")};\n\t\t\t\t${(0,EW.Qb)(WW,"vNormal")} = normalize((${(0,EW.Ib)(WW,"world")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,EW.Kb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,EW.B)(WW,"vec3","normalColor",`abs(${(0,EW.W)(WW,"vNormal")})`)}\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(WW) {
        return {
          vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${(0,EW.l)(WW)} = ${(0,EW.Ib)(WW,"worldViewProjection")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(WW) {
        return {
          vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"world","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"cameraPosition","vec3")}\n\t\t\t${(0,EW.Kb)(WW,"vDepth","float","mediump")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${(0,EW.l)(WW)} = ${(0,EW.Ib)(WW,"worldViewProjection")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"position"),"1.0")};\n\t\t\t\t${(0,EW.B)(WW,"vec3","worldPosition",`(${(0,EW.Ib)(WW,"world")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,EW.Qb)(WW,"vDepth")} = distance(worldPosition, ${(0,EW.Ib)(WW,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,EW.Kb)(WW,"vDepth","float","mediump")}\n\t\t\t${(0,EW.Eb)(WW,"maxDepth","float")}\n\t\t\t${(0,EW.Eb)(WW,"minDepth","float")}\n\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,EW.B)(WW,"float","normalizedDepth",`clamp((${(0,EW.W)(WW,"vDepth")} - ${(0,EW.Ib)(WW,"minDepth")}) / (${(0,EW.Ib)(WW,"maxDepth")} - ${(0,EW.Ib)(WW,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,EW.B)(WW,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function PW(WW, iW) {
      const {
        vertex: OW,
        fragment: EW
      } = NW[WW](iW), PW = mW.c.GetShadersStore(iW);
      PW[`${WW}VertexShader`] = OW, PW[`${WW}FragmentShader`] = EW
    }
  },
  38388: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => tW,
      Db: () => wW,
      Eb: () => UW,
      F: () => yW,
      Ib: () => nW,
      J: () => oW,
      K: () => NW,
      Kb: () => jW,
      O: () => vW,
      Ob: () => sW,
      Pb: () => JW,
      Qb: () => hW,
      R: () => eW,
      V: () => MW,
      W: () => HW,
      X: () => uW,
      Y: () => VW,
      ab: () => EW,
      e: () => mW,
      eb: () => dW,
      g: () => bW,
      h: () => TW,
      hb: () => fW,
      ib: () => XW,
      l: () => kW,
      m: () => cW,
      mb: () => YW,
      o: () => gW,
      pb: () => SW,
      q: () => DW,
      r: () => xW,
      tb: () => CW,
      ub: () => BW,
      v: () => lW,
      y: () => ZW,
      yb: () => pW,
      zb: () => KW
    });
    const mW = {
      GLSL: 0,
      WGSL: 1
    };

    function EW(WW) {
      return WW === mW.WGSL
    }

    function NW(WW, iW, OW) {
      return EW(WW) ? OW : iW
    }
    const PW = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function LW(WW, iW) {
      if (!EW(WW)) return iW;
      const OW = PW.get(iW);
      if (!OW) throw new Error(`No WGSL name for shader type "${iW}"`);
      return OW
    }

    function cW(WW, iW) {
      for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
      return `${LW(WW,iW)}(${mW.join(", ")})`
    }

    function wW(WW, iW) {
      return cW(WW, "int", iW)
    }

    function tW(WW, iW, OW, mW, NW) {
      return EW(WW) ? `var ${OW}: ${LW(WW,iW)} = ${mW};` : `${AW(WW,NW)}${iW} ${OW} = ${mW};`
    }

    function ZW(WW, iW, OW) {
      return EW(WW) ? `var ${OW}: ${LW(WW,iW)};` : `${iW} ${OW};`
    }

    function xW(WW, iW, OW, mW) {
      return EW(WW) ? `const ${OW}: ${LW(WW,iW)} = ${mW};` : `const ${iW} ${OW} = ${mW};`
    }

    function lW(WW, iW, OW, mW, NW) {
      if (EW(WW)) {
        return `fn ${OW}(${mW.map((iW=>`${iW.name}: ${LW(WW,iW.type)}`)).join(", ")}) -> ${LW(WW,iW)} {${NW}}`
      }
      return `${iW} ${OW}(${mW.map((WW=>`${WW.type} ${WW.name}`)).join(", ")}) {${NW}}`
    }

    function AW(WW, iW) {
      return !iW || EW(WW) ? "" : `${iW} `
    }

    function bW(WW, iW, OW, mW) {
      return EW(WW) ? `attribute ${iW}: ${LW(WW,OW)};` : `attribute ${AW(WW,mW)}${OW} ${iW};`
    }

    function jW(WW, iW, OW, mW) {
      return EW(WW) ? `varying ${iW}: ${LW(WW,OW)};` : `varying ${AW(WW,mW)}${OW} ${iW};`
    }

    function UW(WW, iW, OW) {
      return EW(WW) ? `uniform ${iW}: ${LW(WW,OW)};` : `uniform ${OW} ${iW};`
    }

    function kW(WW) {
      return EW(WW) ? "vertexOutputs.position" : "gl_Position"
    }

    function sW(WW, iW) {
      return EW(WW) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${iW}}` : `void main() {${iW}}`
    }

    function MW(WW, iW) {
      return EW(WW) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${iW}}` : `void main() {${iW}}`
    }

    function KW(WW, iW, OW) {
      if (EW(WW)) {
        return [`var ${iW}Sampler: sampler;`, `var ${iW}: ${"2dArray"===OW?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===OW?"sampler2DArray":"sampler2D"} ${iW};`
    }

    function SW(WW, iW, OW) {
      return EW(WW) ? `textureSample(${iW}, ${iW}Sampler, ${OW})` : `texture2D(${iW}, ${OW})`
    }

    function YW(WW, iW, OW, mW, NW) {
      if (EW(WW)) {
        return `${NW?"textureSampleLevel":"textureSample"}(${iW}, ${iW}Sampler, ${OW}, ${wW(WW,`round(${mW})`)}${NW?`, ${NW}`:""})`
      }
      const PW = cW(WW, "vec3", OW, mW);
      return NW ? `textureLod(${iW}, ${PW}, ${NW})` : `texture(${iW}, ${PW})`
    }

    function yW(WW) {
      return EW(WW) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function TW(WW) {
      return EW(WW) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function JW(WW, iW) {
      return EW(WW) ? `vertexInputs.${iW}` : iW
    }

    function hW(WW, iW) {
      return EW(WW) ? `vertexOutputs.${iW}` : iW
    }

    function HW(WW, iW) {
      return EW(WW) ? `fragmentInputs.${iW}` : iW
    }

    function nW(WW, iW) {
      return EW(WW) ? `uniforms.${iW}` : iW
    }

    function uW(WW, iW, OW) {
      return EW(WW) ? `frame.${iW}` : OW
    }

    function oW(WW) {
      return EW(WW) ? "scene.vEyePosition" : "vEyePosition"
    }

    function dW(WW) {
      return EW(WW) ? "mesh.visibility" : "visibility"
    }

    function eW(WW) {
      return EW(WW) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function vW(WW) {
      return EW(WW) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function gW(WW, iW) {
      return EW(WW) ? `dpdx(${iW})` : `dFdx(${iW})`
    }

    function DW(WW, iW) {
      return EW(WW) ? `dpdy(${iW})` : `dFdy(${iW})`
    }

    function VW(WW, iW) {
      return EW(WW) ? `inverseSqrt(${iW})` : `inversesqrt(${iW})`
    }

    function pW(WW, iW, OW, mW) {
      return EW(WW) ? `select(${mW}, ${OW}, ${iW})` : `((${iW}) ? (${OW}) : (${mW}))`
    }

    function fW(WW, iW, OW) {
      return EW(WW) ? `((${iW}) - (${OW}) * floor((${iW}) / (${OW})))` : `mod(${iW}, ${OW})`
    }

    function CW(WW, iW, OW) {
      return EW(WW) ? `${iW} = vec4f(${OW}, ${iW}.a);` : `${iW}.rgb = ${OW};`
    }

    function XW(WW, iW, OW) {
      return EW(WW) ? `${iW} = vec4f(${iW}.rgb * (${OW}), ${iW}.a);` : `${iW}.rgb *= ${OW};`
    }

    function BW(WW, iW, OW) {
      return EW(WW) ? `${iW} = vec4f(${OW}, ${iW}.w);` : `${iW}.xyz = ${OW};`
    }
  },
  41392: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersRepository : mW.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersStore : mW.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.IncludesShadersStore : mW.IncludesShadersStoreWGSL
      }
    }
    mW.ShadersRepository = "src/Shaders/", mW.ShadersStore = {}, mW.IncludesShadersStore = {}, mW.ShadersRepositoryWGSL = "src/ShadersWGSL/", mW.ShadersStoreWGSL = {}, mW.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);