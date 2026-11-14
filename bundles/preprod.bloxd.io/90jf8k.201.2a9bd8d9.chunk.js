export const id = 201;
export const ids = [201];
export const modules = {
  58912: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      DEVTOOLS_SHADERS: () => uF,
      registerDevtoolsShader: () => hF
    });
    var CF = SF(37824),
      AF = SF(35551);
    const uF = {
      devtoolsNormal: function(FF) {
        return {
          vertex: `\n\t\t\t${(0,AF.g)(FF,"position","vec3")}\n\t\t\t${(0,AF.g)(FF,"normal","vec3")}\n\t\t\t${(0,AF.nb)(FF,"worldViewProjection","mat4")}\n\t\t\t${(0,AF.nb)(FF,"world","mat4")}\n\t\t\t${(0,AF.tb)(FF,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,AF.vb)(FF,`\n\t\t\t\t${(0,AF.n)(FF)} = ${(0,AF.pb)(FF,"worldViewProjection")} * ${(0,AF.p)(FF,"vec4",(0,AF.zb)(FF,"position"),"1.0")};\n\t\t\t\t${(0,AF.Db)(FF,"vNormal")} = normalize((${(0,AF.pb)(FF,"world")} * ${(0,AF.p)(FF,"vec4",(0,AF.zb)(FF,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,AF.tb)(FF,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,AF.F)(FF,`\n\t\t\t\t\n\t\t\t\t${(0,AF.y)(FF,"vec3","normalColor",`abs(${(0,AF.I)(FF,"vNormal")})`)}\n\t\t\t\t${(0,AF.D)(FF)} = ${(0,AF.p)(FF,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(FF) {
        return {
          vertex: `\n\t\t\t${(0,AF.g)(FF,"position","vec3")}\n\t\t\t${(0,AF.nb)(FF,"worldViewProjection","mat4")}\n\n\t\t\t${(0,AF.vb)(FF,`\n\t\t\t\t${(0,AF.n)(FF)} = ${(0,AF.pb)(FF,"worldViewProjection")} * ${(0,AF.p)(FF,"vec4",(0,AF.zb)(FF,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,AF.F)(FF,`\n\t\t\t\t${(0,AF.D)(FF)} = ${(0,AF.p)(FF,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(FF) {
        return {
          vertex: `\n\t\t\t${(0,AF.g)(FF,"position","vec3")}\n\t\t\t${(0,AF.nb)(FF,"worldViewProjection","mat4")}\n\t\t\t${(0,AF.nb)(FF,"world","mat4")}\n\t\t\t${(0,AF.nb)(FF,"cameraPosition","vec3")}\n\t\t\t${(0,AF.tb)(FF,"vDepth","float","mediump")}\n\n\t\t\t${(0,AF.vb)(FF,`\n\t\t\t\t${(0,AF.n)(FF)} = ${(0,AF.pb)(FF,"worldViewProjection")} * ${(0,AF.p)(FF,"vec4",(0,AF.zb)(FF,"position"),"1.0")};\n\t\t\t\t${(0,AF.y)(FF,"vec3","worldPosition",`(${(0,AF.pb)(FF,"world")} * ${(0,AF.p)(FF,"vec4",(0,AF.zb)(FF,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,AF.Db)(FF,"vDepth")} = distance(worldPosition, ${(0,AF.pb)(FF,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,AF.tb)(FF,"vDepth","float","mediump")}\n\t\t\t${(0,AF.nb)(FF,"maxDepth","float")}\n\t\t\t${(0,AF.nb)(FF,"minDepth","float")}\n\n\t\t\t${(0,AF.F)(FF,`\n\t\t\t\t\n\t\t\t\t${(0,AF.y)(FF,"float","normalizedDepth",`clamp((${(0,AF.I)(FF,"vDepth")} - ${(0,AF.pb)(FF,"minDepth")}) / (${(0,AF.pb)(FF,"maxDepth")} - ${(0,AF.pb)(FF,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,AF.y)(FF,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,AF.D)(FF)} = ${(0,AF.p)(FF,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function hF(FF, WF) {
      const {
        vertex: SF,
        fragment: AF
      } = uF[FF](WF), hF = CF.c.GetShadersStore(WF);
      hF[`${FF}VertexShader`] = SF, hF[`${FF}FragmentShader`] = AF
    }
  },
  35551: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => YF,
      C: () => uF,
      D: () => GF,
      Db: () => OF,
      E: () => cW,
      F: () => kW,
      I: () => xW,
      K: () => oF,
      M: () => fF,
      N: () => AF,
      P: () => MF,
      S: () => sF,
      U: () => HF,
      Y: () => NF,
      ab: () => VF,
      bb: () => nF,
      cb: () => KF,
      d: () => CF,
      fb: () => yW,
      g: () => rW,
      jb: () => qW,
      k: () => LF,
      kb: () => PF,
      n: () => TF,
      nb: () => tW,
      p: () => dF,
      pb: () => ZF,
      r: () => zW,
      s: () => IF,
      t: () => eF,
      tb: () => gW,
      u: () => EF,
      vb: () => aW,
      w: () => iW,
      y: () => RF,
      z: () => DF,
      zb: () => mW
    });
    const CF = {
      GLSL: 0,
      WGSL: 1
    };

    function AF(FF) {
      return FF === CF.WGSL
    }

    function uF(FF, WF, SF) {
      return AF(FF) ? SF : WF
    }
    const hF = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function bW(FF, WF) {
      if (!AF(FF)) return WF;
      const SF = hF.get(WF);
      if (!SF) throw new Error(`No WGSL name for shader type "${WF}"`);
      return SF
    }

    function dF(FF, WF) {
      for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
      return `${bW(FF,WF)}(${CF.join(", ")})`
    }

    function PF(FF, WF) {
      return dF(FF, "int", WF)
    }

    function RF(FF, WF, SF, CF, uF) {
      return AF(FF) ? `var ${SF}: ${bW(FF,WF)} = ${CF};` : `${QF(FF,uF)}${WF} ${SF} = ${CF};`
    }

    function iW(FF, WF, SF) {
      return AF(FF) ? `var ${SF}: ${bW(FF,WF)};` : `${WF} ${SF};`
    }

    function eF(FF, WF, SF, CF) {
      return AF(FF) ? `const ${SF}: ${bW(FF,WF)} = ${CF};` : `const ${WF} ${SF} = ${CF};`
    }

    function EF(FF, WF, SF, CF, uF) {
      if (AF(FF)) {
        return `fn ${SF}(${CF.map((WF=>`${WF.name}: ${bW(FF,WF.type)}`)).join(", ")}) -> ${bW(FF,WF)} {${uF}}`
      }
      return `${WF} ${SF}(${CF.map((FF=>`${FF.type} ${FF.name}`)).join(", ")}) {${uF}}`
    }

    function QF(FF, WF) {
      return !WF || AF(FF) ? "" : `${WF} `
    }

    function rW(FF, WF, SF, CF) {
      return AF(FF) ? `attribute ${WF}: ${bW(FF,SF)};` : `attribute ${QF(FF,CF)}${SF} ${WF};`
    }

    function gW(FF, WF, SF, CF) {
      return AF(FF) ? `varying ${WF}: ${bW(FF,SF)};` : `varying ${QF(FF,CF)}${SF} ${WF};`
    }

    function tW(FF, WF, SF) {
      return AF(FF) ? `uniform ${WF}: ${bW(FF,SF)};` : `uniform ${SF} ${WF};`
    }

    function TF(FF) {
      return AF(FF) ? "vertexOutputs.position" : "gl_Position"
    }

    function aW(FF, WF) {
      return AF(FF) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${WF}}` : `void main() {${WF}}`
    }

    function kW(FF, WF) {
      return AF(FF) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${WF}}` : `void main() {${WF}}`
    }

    function qW(FF, WF, SF) {
      if (AF(FF)) {
        return [`var ${WF}Sampler: sampler;`, `var ${WF}: ${"2dArray"===SF?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===SF?"sampler2DArray":"sampler2D"} ${WF};`
    }

    function VF(FF, WF, SF) {
      return AF(FF) ? `textureSample(${WF}, ${WF}Sampler, ${SF})` : `texture2D(${WF}, ${SF})`
    }

    function NF(FF, WF, SF, CF, uF) {
      if (AF(FF)) {
        return `${uF?"textureSampleLevel":"textureSample"}(${WF}, ${WF}Sampler, ${SF}, ${PF(FF,`round(${CF})`)}${uF?`, ${uF}`:""})`
      }
      const hF = dF(FF, "vec3", SF, CF);
      return uF ? `textureLod(${WF}, ${hF}, ${uF})` : `texture(${WF}, ${hF})`
    }

    function DF(FF) {
      return AF(FF) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function LF(FF) {
      return AF(FF) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function mW(FF, WF) {
      return AF(FF) ? `vertexInputs.${WF}` : WF
    }

    function OF(FF, WF) {
      return AF(FF) ? `vertexOutputs.${WF}` : WF
    }

    function xW(FF, WF) {
      return AF(FF) ? `fragmentInputs.${WF}` : WF
    }

    function ZF(FF, WF) {
      return AF(FF) ? `uniforms.${WF}` : WF
    }

    function oF(FF, WF, SF) {
      return AF(FF) ? `frame.${WF}` : SF
    }

    function YF(FF) {
      return AF(FF) ? "scene.vEyePosition" : "vEyePosition"
    }

    function MF(FF) {
      return AF(FF) ? "mesh.visibility" : "visibility"
    }

    function cW(FF) {
      return AF(FF) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function GF(FF) {
      return AF(FF) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function zW(FF, WF) {
      return AF(FF) ? `dpdx(${WF})` : `dFdx(${WF})`
    }

    function IF(FF, WF) {
      return AF(FF) ? `dpdy(${WF})` : `dFdy(${WF})`
    }

    function fF(FF, WF) {
      return AF(FF) ? `inverseSqrt(${WF})` : `inversesqrt(${WF})`
    }

    function yW(FF, WF, SF, CF) {
      return AF(FF) ? `select(${CF}, ${SF}, ${WF})` : `((${WF}) ? (${SF}) : (${CF}))`
    }

    function sF(FF, WF, SF) {
      return AF(FF) ? `((${WF}) - (${SF}) * floor((${WF}) / (${SF})))` : `mod(${WF}, ${SF})`
    }

    function nF(FF, WF, SF) {
      return AF(FF) ? `${WF} = vec4f(${SF}, ${WF}.a);` : `${WF}.rgb = ${SF};`
    }

    function HF(FF, WF, SF) {
      return AF(FF) ? `${WF} = vec4f(${WF}.rgb * (${SF}), ${WF}.a);` : `${WF}.rgb *= ${SF};`
    }

    function KF(FF, WF, SF) {
      return AF(FF) ? `${WF} = vec4f(${SF}, ${WF}.w);` : `${WF}.xyz = ${SF};`
    }
  },
  37824: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.ShadersRepository : CF.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.ShadersStore : CF.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.IncludesShadersStore : CF.IncludesShadersStoreWGSL
      }
    }
    CF.ShadersRepository = "src/Shaders/", CF.ShadersStore = {}, CF.IncludesShadersStore = {}, CF.ShadersRepositoryWGSL = "src/ShadersWGSL/", CF.ShadersStoreWGSL = {}, CF.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);