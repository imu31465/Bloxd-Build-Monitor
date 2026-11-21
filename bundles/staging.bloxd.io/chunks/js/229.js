export const id = 229;
export const ids = [229];
export const modules = {
  60660: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      DEVTOOLS_SHADERS: () => oQ,
      registerDevtoolsShader: () => DQ
    });
    var LQ = wQ(39251),
      qQ = wQ(36795);
    const oQ = {
      devtoolsNormal: function(QQ) {
        return {
          vertex: `\n\t\t\t${(0,qQ.h)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.h)(QQ,"normal","vec3")}\n\t\t\t${(0,qQ.Lb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Lb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Sb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Tb)(QQ,`\n\t\t\t\t${(0,qQ.n)(QQ)} = ${(0,qQ.Pb)(QQ,"worldViewProjection")} * ${(0,qQ.q)(QQ,"vec4",(0,qQ.Vb)(QQ,"position"),"1.0")};\n\t\t\t\t${(0,qQ.Yb)(QQ,"vNormal")} = normalize((${(0,qQ.Pb)(QQ,"world")} * ${(0,qQ.q)(QQ,"vec4",(0,qQ.Vb)(QQ,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qQ.Sb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.$)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.I)(QQ,"vec3","normalColor",`abs(${(0,qQ.bb)(QQ,"vNormal")})`)}\n\t\t\t\t${(0,qQ.V)(QQ)} = ${(0,qQ.q)(QQ,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(QQ) {
        return {
          vertex: `\n\t\t\t${(0,qQ.h)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.Lb)(QQ,"worldViewProjection","mat4")}\n\n\t\t\t${(0,qQ.Tb)(QQ,`\n\t\t\t\t${(0,qQ.n)(QQ)} = ${(0,qQ.Pb)(QQ,"worldViewProjection")} * ${(0,qQ.q)(QQ,"vec4",(0,qQ.Vb)(QQ,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qQ.$)(QQ,`\n\t\t\t\t${(0,qQ.V)(QQ)} = ${(0,qQ.q)(QQ,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(QQ) {
        return {
          vertex: `\n\t\t\t${(0,qQ.h)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.Lb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Lb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Lb)(QQ,"cameraPosition","vec3")}\n\t\t\t${(0,qQ.Sb)(QQ,"vDepth","float","mediump")}\n\n\t\t\t${(0,qQ.Tb)(QQ,`\n\t\t\t\t${(0,qQ.n)(QQ)} = ${(0,qQ.Pb)(QQ,"worldViewProjection")} * ${(0,qQ.q)(QQ,"vec4",(0,qQ.Vb)(QQ,"position"),"1.0")};\n\t\t\t\t${(0,qQ.I)(QQ,"vec3","worldPosition",`(${(0,qQ.Pb)(QQ,"world")} * ${(0,qQ.q)(QQ,"vec4",(0,qQ.Vb)(QQ,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,qQ.Yb)(QQ,"vDepth")} = distance(worldPosition, ${(0,qQ.Pb)(QQ,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qQ.Sb)(QQ,"vDepth","float","mediump")}\n\t\t\t${(0,qQ.Lb)(QQ,"maxDepth","float")}\n\t\t\t${(0,qQ.Lb)(QQ,"minDepth","float")}\n\n\t\t\t${(0,qQ.$)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.I)(QQ,"float","normalizedDepth",`clamp((${(0,qQ.bb)(QQ,"vDepth")} - ${(0,qQ.Pb)(QQ,"minDepth")}) / (${(0,qQ.Pb)(QQ,"maxDepth")} - ${(0,qQ.Pb)(QQ,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,qQ.I)(QQ,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,qQ.V)(QQ)} = ${(0,qQ.q)(QQ,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function DQ(QQ, FQ) {
      const {
        vertex: wQ,
        fragment: qQ
      } = oQ[QQ](FQ), DQ = LQ.c.GetShadersStore(FQ);
      DQ[`${QQ}VertexShader`] = wQ, DQ[`${QQ}FragmentShader`] = qQ
    }
  },
  36795: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => pQ,
      B: () => bQ,
      Bb: () => fQ,
      Cb: () => hQ,
      E: () => YQ,
      F: () => HQ,
      Gb: () => aQ,
      I: () => uQ,
      Jb: () => cQ,
      Kb: () => mQ,
      L: () => iQ,
      Lb: () => eQ,
      P: () => UQ,
      Pb: () => rQ,
      Sb: () => tQ,
      T: () => oQ,
      Tb: () => GQ,
      V: () => KQ,
      Vb: () => RQ,
      X: () => TQ,
      Yb: () => OQ,
      bb: () => sQ,
      d: () => LQ,
      db: () => IQ,
      eb: () => jQ,
      h: () => AQ,
      ib: () => qQ,
      k: () => WQ,
      mb: () => NQ,
      n: () => MQ,
      pb: () => XQ,
      q: () => vQ,
      qb: () => VQ,
      t: () => zQ,
      ub: () => SQ,
      x: () => lQ,
      yb: () => CQ
    });
    const LQ = {
      GLSL: 0,
      WGSL: 1
    };

    function qQ(QQ) {
      return QQ === LQ.WGSL
    }

    function oQ(QQ, FQ, wQ) {
      return qQ(QQ) ? wQ : FQ
    }
    const DQ = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function kQ(QQ, FQ) {
      if (!qQ(QQ)) return FQ;
      const wQ = DQ.get(FQ);
      if (!wQ) throw new Error(`No WGSL name for shader type "${FQ}"`);
      return wQ
    }

    function vQ(QQ, FQ) {
      for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
      return `${kQ(QQ,FQ)}(${LQ.join(", ")})`
    }

    function mQ(QQ, FQ) {
      return vQ(QQ, "int", FQ)
    }

    function uQ(QQ, FQ, wQ, LQ, oQ) {
      return qQ(QQ) ? `var ${wQ}: ${kQ(QQ,FQ)} = ${LQ};` : `${xQ(QQ,oQ)}${FQ} ${wQ} = ${LQ};`
    }

    function HQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `var ${wQ}: ${kQ(QQ,FQ)};` : `${FQ} ${wQ};`
    }

    function bQ(QQ, FQ, wQ, LQ) {
      return qQ(QQ) ? `const ${wQ}: ${kQ(QQ,FQ)} = ${LQ};` : `const ${FQ} ${wQ} = ${LQ};`
    }

    function YQ(QQ, FQ, wQ, LQ, oQ) {
      if (qQ(QQ)) {
        return `fn ${wQ}(${LQ.map((FQ=>`${FQ.name}: ${kQ(QQ,FQ.type)}`)).join(", ")}) -> ${kQ(QQ,FQ)} {${oQ}}`
      }
      return `${FQ} ${wQ}(${LQ.map((QQ=>`${QQ.type} ${QQ.name}`)).join(", ")}) {${oQ}}`
    }

    function xQ(QQ, FQ) {
      return !FQ || qQ(QQ) ? "" : `${FQ} `
    }

    function AQ(QQ, FQ, wQ, LQ) {
      return qQ(QQ) ? `attribute ${FQ}: ${kQ(QQ,wQ)};` : `attribute ${xQ(QQ,LQ)}${wQ} ${FQ};`
    }

    function tQ(QQ, FQ, wQ, LQ) {
      return qQ(QQ) ? `varying ${FQ}: ${kQ(QQ,wQ)};` : `varying ${xQ(QQ,LQ)}${wQ} ${FQ};`
    }

    function eQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `uniform ${FQ}: ${kQ(QQ,wQ)};` : `uniform ${wQ} ${FQ};`
    }

    function MQ(QQ) {
      return qQ(QQ) ? "vertexOutputs.position" : "gl_Position"
    }

    function GQ(QQ, FQ) {
      return qQ(QQ) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${FQ}}` : `void main() {${FQ}}`
    }

    function pQ(QQ, FQ) {
      return qQ(QQ) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${FQ}}` : `void main() {${FQ}}`
    }

    function cQ(QQ, FQ, wQ) {
      if (qQ(QQ)) {
        return [`var ${FQ}Sampler: sampler;`, `var ${FQ}: ${"2dArray"===wQ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===wQ?"sampler2DArray":"sampler2D"} ${FQ};`
    }

    function CQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `textureSample(${FQ}, ${FQ}Sampler, ${wQ})` : `texture2D(${FQ}, ${wQ})`
    }

    function SQ(QQ, FQ, wQ, LQ, oQ) {
      if (qQ(QQ)) {
        return `${oQ?"textureSampleLevel":"textureSample"}(${FQ}, ${FQ}Sampler, ${wQ}, ${mQ(QQ,`round(${LQ})`)}${oQ?`, ${oQ}`:""})`
      }
      const DQ = vQ(QQ, "vec3", wQ, LQ);
      return oQ ? `textureLod(${FQ}, ${DQ}, ${oQ})` : `texture(${FQ}, ${DQ})`
    }

    function iQ(QQ) {
      return qQ(QQ) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function WQ(QQ) {
      return qQ(QQ) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function RQ(QQ, FQ) {
      return qQ(QQ) ? `vertexInputs.${FQ}` : FQ
    }

    function OQ(QQ, FQ) {
      return qQ(QQ) ? `vertexOutputs.${FQ}` : FQ
    }

    function sQ(QQ, FQ) {
      return qQ(QQ) ? `fragmentInputs.${FQ}` : FQ
    }

    function rQ(QQ, FQ) {
      return qQ(QQ) ? `uniforms.${FQ}` : FQ
    }

    function IQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `frame.${FQ}` : wQ
    }

    function UQ(QQ) {
      return qQ(QQ) ? "scene.vEyePosition" : "vEyePosition"
    }

    function NQ(QQ) {
      return qQ(QQ) ? "mesh.visibility" : "visibility"
    }

    function TQ(QQ) {
      return qQ(QQ) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function KQ(QQ) {
      return qQ(QQ) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function zQ(QQ, FQ) {
      return qQ(QQ) ? `dpdx(${FQ})` : `dFdx(${FQ})`
    }

    function lQ(QQ, FQ) {
      return qQ(QQ) ? `dpdy(${FQ})` : `dFdy(${FQ})`
    }

    function jQ(QQ, FQ) {
      return qQ(QQ) ? `inverseSqrt(${FQ})` : `inversesqrt(${FQ})`
    }

    function aQ(QQ, FQ, wQ, LQ) {
      return qQ(QQ) ? `select(${LQ}, ${wQ}, ${FQ})` : `((${FQ}) ? (${wQ}) : (${LQ}))`
    }

    function XQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `((${FQ}) - (${wQ}) * floor((${FQ}) / (${wQ})))` : `mod(${FQ}, ${wQ})`
    }

    function fQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `${FQ} = vec4f(${wQ}, ${FQ}.a);` : `${FQ}.rgb = ${wQ};`
    }

    function VQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `${FQ} = vec4f(${FQ}.rgb * (${wQ}), ${FQ}.a);` : `${FQ}.rgb *= ${wQ};`
    }

    function hQ(QQ, FQ, wQ) {
      return qQ(QQ) ? `${FQ} = vec4f(${wQ}, ${FQ}.w);` : `${FQ}.xyz = ${wQ};`
    }
  },
  39251: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersRepository : LQ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersStore : LQ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.IncludesShadersStore : LQ.IncludesShadersStoreWGSL
      }
    }
    LQ.ShadersRepository = "src/Shaders/", LQ.ShadersStore = {}, LQ.IncludesShadersStore = {}, LQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", LQ.ShadersStoreWGSL = {}, LQ.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);