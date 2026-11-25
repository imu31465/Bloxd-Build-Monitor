export const id = 240;
export const ids = [240];
export const modules = {
  61826: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      DEVTOOLS_SHADERS: () => LG,
      registerDevtoolsShader: () => yG
    });
    var wG = ZG(40237),
      SG = ZG(37532);
    const LG = {
      devtoolsNormal: function(GG) {
        return {
          vertex: `\n\t\t\t${(0,SG.g)(GG,"position","vec3")}\n\t\t\t${(0,SG.g)(GG,"normal","vec3")}\n\t\t\t${(0,SG.tb)(GG,"worldViewProjection","mat4")}\n\t\t\t${(0,SG.tb)(GG,"world","mat4")}\n\t\t\t${(0,SG.vb)(GG,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SG.yb)(GG,`\n\t\t\t\t${(0,SG.k)(GG)} = ${(0,SG.ub)(GG,"worldViewProjection")} * ${(0,SG.m)(GG,"vec4",(0,SG.Cb)(GG,"position"),"1.0")};\n\t\t\t\t${(0,SG.Gb)(GG,"vNormal")} = normalize((${(0,SG.ub)(GG,"world")} * ${(0,SG.m)(GG,"vec4",(0,SG.Cb)(GG,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,SG.vb)(GG,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SG.N)(GG,`\n\t\t\t\t\n\t\t\t\t${(0,SG.B)(GG,"vec3","normalColor",`abs(${(0,SG.P)(GG,"vNormal")})`)}\n\t\t\t\t${(0,SG.H)(GG)} = ${(0,SG.m)(GG,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(GG) {
        return {
          vertex: `\n\t\t\t${(0,SG.g)(GG,"position","vec3")}\n\t\t\t${(0,SG.tb)(GG,"worldViewProjection","mat4")}\n\n\t\t\t${(0,SG.yb)(GG,`\n\t\t\t\t${(0,SG.k)(GG)} = ${(0,SG.ub)(GG,"worldViewProjection")} * ${(0,SG.m)(GG,"vec4",(0,SG.Cb)(GG,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,SG.N)(GG,`\n\t\t\t\t${(0,SG.H)(GG)} = ${(0,SG.m)(GG,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(GG) {
        return {
          vertex: `\n\t\t\t${(0,SG.g)(GG,"position","vec3")}\n\t\t\t${(0,SG.tb)(GG,"worldViewProjection","mat4")}\n\t\t\t${(0,SG.tb)(GG,"world","mat4")}\n\t\t\t${(0,SG.tb)(GG,"cameraPosition","vec3")}\n\t\t\t${(0,SG.vb)(GG,"vDepth","float","mediump")}\n\n\t\t\t${(0,SG.yb)(GG,`\n\t\t\t\t${(0,SG.k)(GG)} = ${(0,SG.ub)(GG,"worldViewProjection")} * ${(0,SG.m)(GG,"vec4",(0,SG.Cb)(GG,"position"),"1.0")};\n\t\t\t\t${(0,SG.B)(GG,"vec3","worldPosition",`(${(0,SG.ub)(GG,"world")} * ${(0,SG.m)(GG,"vec4",(0,SG.Cb)(GG,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,SG.Gb)(GG,"vDepth")} = distance(worldPosition, ${(0,SG.ub)(GG,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,SG.vb)(GG,"vDepth","float","mediump")}\n\t\t\t${(0,SG.tb)(GG,"maxDepth","float")}\n\t\t\t${(0,SG.tb)(GG,"minDepth","float")}\n\n\t\t\t${(0,SG.N)(GG,`\n\t\t\t\t\n\t\t\t\t${(0,SG.B)(GG,"float","normalizedDepth",`clamp((${(0,SG.P)(GG,"vDepth")} - ${(0,SG.ub)(GG,"minDepth")}) / (${(0,SG.ub)(GG,"maxDepth")} - ${(0,SG.ub)(GG,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,SG.B)(GG,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,SG.H)(GG)} = ${(0,SG.m)(GG,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function yG(GG, bG) {
      const {
        vertex: ZG,
        fragment: SG
      } = LG[GG](bG), yG = wG.e.GetShadersStore(bG);
      yG[`${GG}VertexShader`] = ZG, yG[`${GG}FragmentShader`] = SG
    }
  },
  37532: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => pG,
      B: () => VG,
      C: () => iG,
      Cb: () => WG,
      F: () => aG,
      G: () => LG,
      Gb: () => mG,
      H: () => jG,
      J: () => lG,
      N: () => EG,
      P: () => IG,
      T: () => vG,
      U: () => AG,
      V: () => SG,
      X: () => cG,
      Z: () => qG,
      ab: () => gG,
      c: () => wG,
      db: () => uG,
      g: () => hG,
      hb: () => XG,
      j: () => CG,
      jb: () => nG,
      k: () => rG,
      m: () => UG,
      mb: () => eG,
      nb: () => sG,
      pb: () => oG,
      q: () => PG,
      qb: () => YG,
      s: () => MG,
      tb: () => JG,
      ub: () => FG,
      vb: () => dG,
      w: () => fG,
      yb: () => zG,
      z: () => QG
    });
    const wG = {
      GLSL: 0,
      WGSL: 1
    };

    function SG(GG) {
      return GG === wG.WGSL
    }

    function LG(GG, bG, ZG) {
      return SG(GG) ? ZG : bG
    }
    const yG = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function kG(GG, bG) {
      if (!SG(GG)) return bG;
      const ZG = yG.get(bG);
      if (!ZG) throw new Error(`No WGSL name for shader type "${bG}"`);
      return ZG
    }

    function UG(GG, bG) {
      for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
      return `${kG(GG,bG)}(${wG.join(", ")})`
    }

    function YG(GG, bG) {
      return UG(GG, "int", bG)
    }

    function VG(GG, bG, ZG, wG, LG) {
      return SG(GG) ? `var ${ZG}: ${kG(GG,bG)} = ${wG};` : `${KG(GG,LG)}${bG} ${ZG} = ${wG};`
    }

    function pG(GG, bG, ZG) {
      return SG(GG) ? `var ${ZG}: ${kG(GG,bG)};` : `${bG} ${ZG};`
    }

    function fG(GG, bG, ZG, wG) {
      return SG(GG) ? `const ${ZG}: ${kG(GG,bG)} = ${wG};` : `const ${bG} ${ZG} = ${wG};`
    }

    function QG(GG, bG, ZG, wG, LG) {
      if (SG(GG)) {
        return `fn ${ZG}(${wG.map((bG=>`${bG.name}: ${kG(GG,bG.type)}`)).join(", ")}) -> ${kG(GG,bG)} {${LG}}`
      }
      return `${bG} ${ZG}(${wG.map((GG=>`${GG.type} ${GG.name}`)).join(", ")}) {${LG}}`
    }

    function KG(GG, bG) {
      return !bG || SG(GG) ? "" : `${bG} `
    }

    function hG(GG, bG, ZG, wG) {
      return SG(GG) ? `attribute ${bG}: ${kG(GG,ZG)};` : `attribute ${KG(GG,wG)}${ZG} ${bG};`
    }

    function dG(GG, bG, ZG, wG) {
      return SG(GG) ? `varying ${bG}: ${kG(GG,ZG)};` : `varying ${KG(GG,wG)}${ZG} ${bG};`
    }

    function JG(GG, bG, ZG) {
      return SG(GG) ? `uniform ${bG}: ${kG(GG,ZG)};` : `uniform ${ZG} ${bG};`
    }

    function rG(GG) {
      return SG(GG) ? "vertexOutputs.position" : "gl_Position"
    }

    function zG(GG, bG) {
      return SG(GG) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${bG}}` : `void main() {${bG}}`
    }

    function EG(GG, bG) {
      return SG(GG) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${bG}}` : `void main() {${bG}}`
    }

    function oG(GG, bG, ZG) {
      if (SG(GG)) {
        return [`var ${bG}Sampler: sampler;`, `var ${bG}: ${"2dArray"===ZG?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===ZG?"sampler2DArray":"sampler2D"} ${bG};`
    }

    function XG(GG, bG, ZG) {
      return SG(GG) ? `textureSample(${bG}, ${bG}Sampler, ${ZG})` : `texture2D(${bG}, ${ZG})`
    }

    function uG(GG, bG, ZG, wG, LG) {
      if (SG(GG)) {
        return `${LG?"textureSampleLevel":"textureSample"}(${bG}, ${bG}Sampler, ${ZG}, ${YG(GG,`round(${wG})`)}${LG?`, ${LG}`:""})`
      }
      const yG = UG(GG, "vec3", ZG, wG);
      return LG ? `textureLod(${bG}, ${yG}, ${LG})` : `texture(${bG}, ${yG})`
    }

    function iG(GG) {
      return SG(GG) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function CG(GG) {
      return SG(GG) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function WG(GG, bG) {
      return SG(GG) ? `vertexInputs.${bG}` : bG
    }

    function mG(GG, bG) {
      return SG(GG) ? `vertexOutputs.${bG}` : bG
    }

    function IG(GG, bG) {
      return SG(GG) ? `fragmentInputs.${bG}` : bG
    }

    function FG(GG, bG) {
      return SG(GG) ? `uniforms.${bG}` : bG
    }

    function vG(GG, bG, ZG) {
      return SG(GG) ? `frame.${bG}` : ZG
    }

    function aG(GG) {
      return SG(GG) ? "scene.vEyePosition" : "vEyePosition"
    }

    function cG(GG) {
      return SG(GG) ? "mesh.visibility" : "visibility"
    }

    function lG(GG) {
      return SG(GG) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function jG(GG) {
      return SG(GG) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function PG(GG, bG) {
      return SG(GG) ? `dpdx(${bG})` : `dFdx(${bG})`
    }

    function MG(GG, bG) {
      return SG(GG) ? `dpdy(${bG})` : `dFdy(${bG})`
    }

    function AG(GG, bG) {
      return SG(GG) ? `inverseSqrt(${bG})` : `inversesqrt(${bG})`
    }

    function sG(GG, bG, ZG, wG) {
      return SG(GG) ? `select(${wG}, ${ZG}, ${bG})` : `((${bG}) ? (${ZG}) : (${wG}))`
    }

    function qG(GG, bG, ZG) {
      return SG(GG) ? `((${bG}) - (${ZG}) * floor((${bG}) / (${ZG})))` : `mod(${bG}, ${ZG})`
    }

    function nG(GG, bG, ZG) {
      return SG(GG) ? `${bG} = vec4f(${ZG}, ${bG}.a);` : `${bG}.rgb = ${ZG};`
    }

    function gG(GG, bG, ZG) {
      return SG(GG) ? `${bG} = vec4f(${bG}.rgb * (${ZG}), ${bG}.a);` : `${bG}.rgb *= ${ZG};`
    }

    function eG(GG, bG, ZG) {
      return SG(GG) ? `${bG} = vec4f(${ZG}, ${bG}.w);` : `${bG}.xyz = ${ZG};`
    }
  },
  40237: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersRepository : wG.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersStore : wG.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.IncludesShadersStore : wG.IncludesShadersStoreWGSL
      }
    }
    wG.ShadersRepository = "src/Shaders/", wG.ShadersStore = {}, wG.IncludesShadersStore = {}, wG.ShadersRepositoryWGSL = "src/ShadersWGSL/", wG.ShadersStoreWGSL = {}, wG.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);