export const id = 228;
export const ids = [228];
export const modules = {
  60545: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      DEVTOOLS_SHADERS: () => EU,
      registerDevtoolsShader: () => PU
    });
    var tU = gU(39225),
      pU = gU(36678);
    const EU = {
      devtoolsNormal: function(UU) {
        return {
          vertex: `\n\t\t\t${(0,pU.f)(UU,"position","vec3")}\n\t\t\t${(0,pU.f)(UU,"normal","vec3")}\n\t\t\t${(0,pU.Eb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,pU.Eb)(UU,"world","mat4")}\n\t\t\t${(0,pU.Lb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,pU.Pb)(UU,`\n\t\t\t\t${(0,pU.l)(UU)} = ${(0,pU.Hb)(UU,"worldViewProjection")} * ${(0,pU.m)(UU,"vec4",(0,pU.Sb)(UU,"position"),"1.0")};\n\t\t\t\t${(0,pU.Tb)(UU,"vNormal")} = normalize((${(0,pU.Hb)(UU,"world")} * ${(0,pU.m)(UU,"vec4",(0,pU.Sb)(UU,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,pU.Lb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,pU.U)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,pU.G)(UU,"vec3","normalColor",`abs(${(0,pU.V)(UU,"vNormal")})`)}\n\t\t\t\t${(0,pU.P)(UU)} = ${(0,pU.m)(UU,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(UU) {
        return {
          vertex: `\n\t\t\t${(0,pU.f)(UU,"position","vec3")}\n\t\t\t${(0,pU.Eb)(UU,"worldViewProjection","mat4")}\n\n\t\t\t${(0,pU.Pb)(UU,`\n\t\t\t\t${(0,pU.l)(UU)} = ${(0,pU.Hb)(UU,"worldViewProjection")} * ${(0,pU.m)(UU,"vec4",(0,pU.Sb)(UU,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,pU.U)(UU,`\n\t\t\t\t${(0,pU.P)(UU)} = ${(0,pU.m)(UU,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(UU) {
        return {
          vertex: `\n\t\t\t${(0,pU.f)(UU,"position","vec3")}\n\t\t\t${(0,pU.Eb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,pU.Eb)(UU,"world","mat4")}\n\t\t\t${(0,pU.Eb)(UU,"cameraPosition","vec3")}\n\t\t\t${(0,pU.Lb)(UU,"vDepth","float","mediump")}\n\n\t\t\t${(0,pU.Pb)(UU,`\n\t\t\t\t${(0,pU.l)(UU)} = ${(0,pU.Hb)(UU,"worldViewProjection")} * ${(0,pU.m)(UU,"vec4",(0,pU.Sb)(UU,"position"),"1.0")};\n\t\t\t\t${(0,pU.G)(UU,"vec3","worldPosition",`(${(0,pU.Hb)(UU,"world")} * ${(0,pU.m)(UU,"vec4",(0,pU.Sb)(UU,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,pU.Tb)(UU,"vDepth")} = distance(worldPosition, ${(0,pU.Hb)(UU,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,pU.Lb)(UU,"vDepth","float","mediump")}\n\t\t\t${(0,pU.Eb)(UU,"maxDepth","float")}\n\t\t\t${(0,pU.Eb)(UU,"minDepth","float")}\n\n\t\t\t${(0,pU.U)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,pU.G)(UU,"float","normalizedDepth",`clamp((${(0,pU.V)(UU,"vDepth")} - ${(0,pU.Hb)(UU,"minDepth")}) / (${(0,pU.Hb)(UU,"maxDepth")} - ${(0,pU.Hb)(UU,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,pU.G)(UU,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,pU.P)(UU)} = ${(0,pU.m)(UU,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function PU(UU, RU) {
      const {
        vertex: gU,
        fragment: pU
      } = EU[UU](RU), PU = tU.d.GetShadersStore(RU);
      PU[`${UU}VertexShader`] = gU, PU[`${UU}FragmentShader`] = pU
    }
  },
  36678: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => uU,
      Bb: () => mU,
      D: () => GU,
      Db: () => KU,
      Eb: () => eU,
      G: () => cU,
      Hb: () => aU,
      J: () => wU,
      K: () => BU,
      Lb: () => QU,
      N: () => EU,
      P: () => XU,
      Pb: () => fU,
      R: () => rU,
      Sb: () => bU,
      Tb: () => oU,
      U: () => xU,
      V: () => ZU,
      Z: () => YU,
      ab: () => HU,
      bb: () => pU,
      cb: () => VU,
      d: () => tU,
      f: () => hU,
      fb: () => sU,
      i: () => nU,
      jb: () => kU,
      kb: () => JU,
      l: () => WU,
      m: () => qU,
      ob: () => IU,
      q: () => vU,
      qb: () => yU,
      u: () => dU,
      ub: () => FU,
      xb: () => SU,
      y: () => jU
    });
    const tU = {
      GLSL: 0,
      WGSL: 1
    };

    function pU(UU) {
      return UU === tU.WGSL
    }

    function EU(UU, RU, gU) {
      return pU(UU) ? gU : RU
    }
    const PU = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function TU(UU, RU) {
      if (!pU(UU)) return RU;
      const gU = PU.get(RU);
      if (!gU) throw new Error(`No WGSL name for shader type "${RU}"`);
      return gU
    }

    function qU(UU, RU) {
      for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
      return `${TU(UU,RU)}(${tU.join(", ")})`
    }

    function KU(UU, RU) {
      return qU(UU, "int", RU)
    }

    function cU(UU, RU, gU, tU, EU) {
      return pU(UU) ? `var ${gU}: ${TU(UU,RU)} = ${tU};` : `${CU(UU,EU)}${RU} ${gU} = ${tU};`
    }

    function GU(UU, RU, gU) {
      return pU(UU) ? `var ${gU}: ${TU(UU,RU)};` : `${RU} ${gU};`
    }

    function jU(UU, RU, gU, tU) {
      return pU(UU) ? `const ${gU}: ${TU(UU,RU)} = ${tU};` : `const ${RU} ${gU} = ${tU};`
    }

    function uU(UU, RU, gU, tU, EU) {
      if (pU(UU)) {
        return `fn ${gU}(${tU.map((RU=>`${RU.name}: ${TU(UU,RU.type)}`)).join(", ")}) -> ${TU(UU,RU)} {${EU}}`
      }
      return `${RU} ${gU}(${tU.map((UU=>`${UU.type} ${UU.name}`)).join(", ")}) {${EU}}`
    }

    function CU(UU, RU) {
      return !RU || pU(UU) ? "" : `${RU} `
    }

    function hU(UU, RU, gU, tU) {
      return pU(UU) ? `attribute ${RU}: ${TU(UU,gU)};` : `attribute ${CU(UU,tU)}${gU} ${RU};`
    }

    function QU(UU, RU, gU, tU) {
      return pU(UU) ? `varying ${RU}: ${TU(UU,gU)};` : `varying ${CU(UU,tU)}${gU} ${RU};`
    }

    function eU(UU, RU, gU) {
      return pU(UU) ? `uniform ${RU}: ${TU(UU,gU)};` : `uniform ${gU} ${RU};`
    }

    function WU(UU) {
      return pU(UU) ? "vertexOutputs.position" : "gl_Position"
    }

    function fU(UU, RU) {
      return pU(UU) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${RU}}` : `void main() {${RU}}`
    }

    function xU(UU, RU) {
      return pU(UU) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${RU}}` : `void main() {${RU}}`
    }

    function mU(UU, RU, gU) {
      if (pU(UU)) {
        return [`var ${RU}Sampler: sampler;`, `var ${RU}: ${"2dArray"===gU?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===gU?"sampler2DArray":"sampler2D"} ${RU};`
    }

    function IU(UU, RU, gU) {
      return pU(UU) ? `textureSample(${RU}, ${RU}Sampler, ${gU})` : `texture2D(${RU}, ${gU})`
    }

    function JU(UU, RU, gU, tU, EU) {
      if (pU(UU)) {
        return `${EU?"textureSampleLevel":"textureSample"}(${RU}, ${RU}Sampler, ${gU}, ${KU(UU,`round(${tU})`)}${EU?`, ${EU}`:""})`
      }
      const PU = qU(UU, "vec3", gU, tU);
      return EU ? `textureLod(${RU}, ${PU}, ${EU})` : `texture(${RU}, ${PU})`
    }

    function wU(UU) {
      return pU(UU) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function nU(UU) {
      return pU(UU) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function bU(UU, RU) {
      return pU(UU) ? `vertexInputs.${RU}` : RU
    }

    function oU(UU, RU) {
      return pU(UU) ? `vertexOutputs.${RU}` : RU
    }

    function ZU(UU, RU) {
      return pU(UU) ? `fragmentInputs.${RU}` : RU
    }

    function aU(UU, RU) {
      return pU(UU) ? `uniforms.${RU}` : RU
    }

    function YU(UU, RU, gU) {
      return pU(UU) ? `frame.${RU}` : gU
    }

    function BU(UU) {
      return pU(UU) ? "scene.vEyePosition" : "vEyePosition"
    }

    function VU(UU) {
      return pU(UU) ? "mesh.visibility" : "visibility"
    }

    function rU(UU) {
      return pU(UU) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function XU(UU) {
      return pU(UU) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function vU(UU, RU) {
      return pU(UU) ? `dpdx(${RU})` : `dFdx(${RU})`
    }

    function dU(UU, RU) {
      return pU(UU) ? `dpdy(${RU})` : `dFdy(${RU})`
    }

    function HU(UU, RU) {
      return pU(UU) ? `inverseSqrt(${RU})` : `inversesqrt(${RU})`
    }

    function SU(UU, RU, gU, tU) {
      return pU(UU) ? `select(${tU}, ${gU}, ${RU})` : `((${RU}) ? (${gU}) : (${tU}))`
    }

    function sU(UU, RU, gU) {
      return pU(UU) ? `((${RU}) - (${gU}) * floor((${RU}) / (${gU})))` : `mod(${RU}, ${gU})`
    }

    function yU(UU, RU, gU) {
      return pU(UU) ? `${RU} = vec4f(${gU}, ${RU}.a);` : `${RU}.rgb = ${gU};`
    }

    function kU(UU, RU, gU) {
      return pU(UU) ? `${RU} = vec4f(${RU}.rgb * (${gU}), ${RU}.a);` : `${RU}.rgb *= ${gU};`
    }

    function FU(UU, RU, gU) {
      return pU(UU) ? `${RU} = vec4f(${gU}, ${RU}.w);` : `${RU}.xyz = ${gU};`
    }
  },
  39225: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.ShadersRepository : tU.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.ShadersStore : tU.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.IncludesShadersStore : tU.IncludesShadersStoreWGSL
      }
    }
    tU.ShadersRepository = "src/Shaders/", tU.ShadersStore = {}, tU.IncludesShadersStore = {}, tU.ShadersRepositoryWGSL = "src/ShadersWGSL/", tU.ShadersStoreWGSL = {}, tU.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);