export const id = 240;
export const ids = [240];
export const modules = {
  61319: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      DEVTOOLS_SHADERS: () => oB,
      registerDevtoolsShader: () => GB
    });
    var TB = ZB(39905),
      JB = ZB(37223);
    const oB = {
      devtoolsNormal: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,JB.g)(BB,"position","vec3")}\n\t\t\t${(0,JB.g)(BB,"normal","vec3")}\n\t\t\t${(0,JB.Db)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,JB.Db)(BB,"world","mat4")}\n\t\t\t${(0,JB.Kb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,JB.Ob)(BB,`\n\t\t\t\t${(0,JB.m)(BB)} = ${(0,JB.Hb)(BB,"worldViewProjection")} * ${(0,JB.p)(BB,"vec4",(0,JB.Pb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,JB.Sb)(BB,"vNormal")} = normalize((${(0,JB.Hb)(BB,"world")} * ${(0,JB.p)(BB,"vec4",(0,JB.Pb)(BB,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,JB.Kb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,JB.S)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,JB.C)(BB,"vec3","normalColor",`abs(${(0,JB.W)(BB,"vNormal")})`)}\n\t\t\t\t${(0,JB.L)(BB)} = ${(0,JB.p)(BB,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,JB.g)(BB,"position","vec3")}\n\t\t\t${(0,JB.Db)(BB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,JB.Ob)(BB,`\n\t\t\t\t${(0,JB.m)(BB)} = ${(0,JB.Hb)(BB,"worldViewProjection")} * ${(0,JB.p)(BB,"vec4",(0,JB.Pb)(BB,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,JB.S)(BB,`\n\t\t\t\t${(0,JB.L)(BB)} = ${(0,JB.p)(BB,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,JB.g)(BB,"position","vec3")}\n\t\t\t${(0,JB.Db)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,JB.Db)(BB,"world","mat4")}\n\t\t\t${(0,JB.Db)(BB,"cameraPosition","vec3")}\n\t\t\t${(0,JB.Kb)(BB,"vDepth","float","mediump")}\n\n\t\t\t${(0,JB.Ob)(BB,`\n\t\t\t\t${(0,JB.m)(BB)} = ${(0,JB.Hb)(BB,"worldViewProjection")} * ${(0,JB.p)(BB,"vec4",(0,JB.Pb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,JB.C)(BB,"vec3","worldPosition",`(${(0,JB.Hb)(BB,"world")} * ${(0,JB.p)(BB,"vec4",(0,JB.Pb)(BB,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,JB.Sb)(BB,"vDepth")} = distance(worldPosition, ${(0,JB.Hb)(BB,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,JB.Kb)(BB,"vDepth","float","mediump")}\n\t\t\t${(0,JB.Db)(BB,"maxDepth","float")}\n\t\t\t${(0,JB.Db)(BB,"minDepth","float")}\n\n\t\t\t${(0,JB.S)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,JB.C)(BB,"float","normalizedDepth",`clamp((${(0,JB.W)(BB,"vDepth")} - ${(0,JB.Hb)(BB,"minDepth")}) / (${(0,JB.Hb)(BB,"maxDepth")} - ${(0,JB.Hb)(BB,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,JB.C)(BB,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,JB.L)(BB)} = ${(0,JB.p)(BB,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function GB(BB, IB) {
      const {
        vertex: ZB,
        fragment: JB
      } = oB[BB](IB), GB = TB.c.GetShadersStore(IB);
      GB[`${BB}VertexShader`] = ZB, GB[`${BB}FragmentShader`] = JB
    }
  },
  37223: (BB, IB, ZB) => {
    ZB.d(IB, {
      C: () => nB,
      Cb: () => cB,
      Db: () => yB,
      E: () => wB,
      Hb: () => aB,
      I: () => MB,
      J: () => oB,
      Kb: () => qB,
      L: () => RB,
      Ob: () => WB,
      P: () => PB,
      Pb: () => YB,
      S: () => dB,
      Sb: () => iB,
      W: () => pB,
      X: () => HB,
      _: () => XB,
      ab: () => JB,
      c: () => TB,
      cb: () => jB,
      db: () => eB,
      fb: () => fB,
      g: () => gB,
      jb: () => sB,
      k: () => OB,
      m: () => UB,
      mb: () => QB,
      p: () => kB,
      pb: () => uB,
      rb: () => lB,
      s: () => rB,
      t: () => mB,
      ub: () => LB,
      x: () => zB,
      y: () => FB,
      yb: () => CB,
      z: () => hB
    });
    const TB = {
      GLSL: 0,
      WGSL: 1
    };

    function JB(BB) {
      return BB === TB.WGSL
    }

    function oB(BB, IB, ZB) {
      return JB(BB) ? ZB : IB
    }
    const GB = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function vB(BB, IB) {
      if (!JB(BB)) return IB;
      const ZB = GB.get(IB);
      if (!ZB) throw new Error(`No WGSL name for shader type "${IB}"`);
      return ZB
    }

    function kB(BB, IB) {
      for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
      return `${vB(BB,IB)}(${TB.join(", ")})`
    }

    function cB(BB, IB) {
      return kB(BB, "int", IB)
    }

    function nB(BB, IB, ZB, TB, oB) {
      return JB(BB) ? `var ${ZB}: ${vB(BB,IB)} = ${TB};` : `${NB(BB,oB)}${IB} ${ZB} = ${TB};`
    }

    function hB(BB, IB, ZB) {
      return JB(BB) ? `var ${ZB}: ${vB(BB,IB)};` : `${IB} ${ZB};`
    }

    function zB(BB, IB, ZB, TB) {
      return JB(BB) ? `const ${ZB}: ${vB(BB,IB)} = ${TB};` : `const ${IB} ${ZB} = ${TB};`
    }

    function FB(BB, IB, ZB, TB, oB) {
      if (JB(BB)) {
        return `fn ${ZB}(${TB.map((IB=>`${IB.name}: ${vB(BB,IB.type)}`)).join(", ")}) -> ${vB(BB,IB)} {${oB}}`
      }
      return `${IB} ${ZB}(${TB.map((BB=>`${BB.type} ${BB.name}`)).join(", ")}) {${oB}}`
    }

    function NB(BB, IB) {
      return !IB || JB(BB) ? "" : `${IB} `
    }

    function gB(BB, IB, ZB, TB) {
      return JB(BB) ? `attribute ${IB}: ${vB(BB,ZB)};` : `attribute ${NB(BB,TB)}${ZB} ${IB};`
    }

    function qB(BB, IB, ZB, TB) {
      return JB(BB) ? `varying ${IB}: ${vB(BB,ZB)};` : `varying ${NB(BB,TB)}${ZB} ${IB};`
    }

    function yB(BB, IB, ZB) {
      return JB(BB) ? `uniform ${IB}: ${vB(BB,ZB)};` : `uniform ${ZB} ${IB};`
    }

    function UB(BB) {
      return JB(BB) ? "vertexOutputs.position" : "gl_Position"
    }

    function WB(BB, IB) {
      return JB(BB) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${IB}}` : `void main() {${IB}}`
    }

    function dB(BB, IB) {
      return JB(BB) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${IB}}` : `void main() {${IB}}`
    }

    function CB(BB, IB, ZB) {
      if (JB(BB)) {
        return [`var ${IB}Sampler: sampler;`, `var ${IB}: ${"2dArray"===ZB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===ZB?"sampler2DArray":"sampler2D"} ${IB};`
    }

    function QB(BB, IB, ZB) {
      return JB(BB) ? `textureSample(${IB}, ${IB}Sampler, ${ZB})` : `texture2D(${IB}, ${ZB})`
    }

    function sB(BB, IB, ZB, TB, oB) {
      if (JB(BB)) {
        return `${oB?"textureSampleLevel":"textureSample"}(${IB}, ${IB}Sampler, ${ZB}, ${cB(BB,`round(${TB})`)}${oB?`, ${oB}`:""})`
      }
      const GB = kB(BB, "vec3", ZB, TB);
      return oB ? `textureLod(${IB}, ${GB}, ${oB})` : `texture(${IB}, ${GB})`
    }

    function wB(BB) {
      return JB(BB) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function OB(BB) {
      return JB(BB) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function YB(BB, IB) {
      return JB(BB) ? `vertexInputs.${IB}` : IB
    }

    function iB(BB, IB) {
      return JB(BB) ? `vertexOutputs.${IB}` : IB
    }

    function pB(BB, IB) {
      return JB(BB) ? `fragmentInputs.${IB}` : IB
    }

    function aB(BB, IB) {
      return JB(BB) ? `uniforms.${IB}` : IB
    }

    function HB(BB, IB, ZB) {
      return JB(BB) ? `frame.${IB}` : ZB
    }

    function MB(BB) {
      return JB(BB) ? "scene.vEyePosition" : "vEyePosition"
    }

    function jB(BB) {
      return JB(BB) ? "mesh.visibility" : "visibility"
    }

    function PB(BB) {
      return JB(BB) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function RB(BB) {
      return JB(BB) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function rB(BB, IB) {
      return JB(BB) ? `dpdx(${IB})` : `dFdx(${IB})`
    }

    function mB(BB, IB) {
      return JB(BB) ? `dpdy(${IB})` : `dFdy(${IB})`
    }

    function XB(BB, IB) {
      return JB(BB) ? `inverseSqrt(${IB})` : `inversesqrt(${IB})`
    }

    function LB(BB, IB, ZB, TB) {
      return JB(BB) ? `select(${TB}, ${ZB}, ${IB})` : `((${IB}) ? (${ZB}) : (${TB}))`
    }

    function eB(BB, IB, ZB) {
      return JB(BB) ? `((${IB}) - (${ZB}) * floor((${IB}) / (${ZB})))` : `mod(${IB}, ${ZB})`
    }

    function uB(BB, IB, ZB) {
      return JB(BB) ? `${IB} = vec4f(${ZB}, ${IB}.a);` : `${IB}.rgb = ${ZB};`
    }

    function fB(BB, IB, ZB) {
      return JB(BB) ? `${IB} = vec4f(${IB}.rgb * (${ZB}), ${IB}.a);` : `${IB}.rgb *= ${ZB};`
    }

    function lB(BB, IB, ZB) {
      return JB(BB) ? `${IB} = vec4f(${ZB}, ${IB}.w);` : `${IB}.xyz = ${ZB};`
    }
  },
  39905: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.ShadersRepository : TB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.ShadersStore : TB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.IncludesShadersStore : TB.IncludesShadersStoreWGSL
      }
    }
    TB.ShadersRepository = "src/Shaders/", TB.ShadersStore = {}, TB.IncludesShadersStore = {}, TB.ShadersRepositoryWGSL = "src/ShadersWGSL/", TB.ShadersStoreWGSL = {}, TB.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);