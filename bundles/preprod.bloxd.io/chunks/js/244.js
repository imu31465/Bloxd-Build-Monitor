export const id = 244;
export const ids = [244];
export const modules = {
  61549: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      DEVTOOLS_SHADERS: () => TQ,
      registerDevtoolsShader: () => zQ
    });
    var wQ = XQ(40126),
      qQ = XQ(37468);
    const TQ = {
      devtoolsNormal: function(QQ) {
        return {
          vertex: `\n\t\t\t${(0,qQ.d)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.d)(QQ,"normal","vec3")}\n\t\t\t${(0,qQ.Fb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Fb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Nb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Ob)(QQ,`\n\t\t\t\t${(0,qQ.i)(QQ)} = ${(0,qQ.Jb)(QQ,"worldViewProjection")} * ${(0,qQ.l)(QQ,"vec4",(0,qQ.Sb)(QQ,"position"),"1.0")};\n\t\t\t\t${(0,qQ.Tb)(QQ,"vNormal")} = normalize((${(0,qQ.Jb)(QQ,"world")} * ${(0,qQ.l)(QQ,"vec4",(0,qQ.Sb)(QQ,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qQ.Nb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Q)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.A)(QQ,"vec3","normalColor",`abs(${(0,qQ.T)(QQ,"vNormal")})`)}\n\t\t\t\t${(0,qQ.L)(QQ)} = ${(0,qQ.l)(QQ,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(QQ) {
        return {
          vertex: `\n\t\t\t${(0,qQ.d)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.Fb)(QQ,"worldViewProjection","mat4")}\n\n\t\t\t${(0,qQ.Ob)(QQ,`\n\t\t\t\t${(0,qQ.i)(QQ)} = ${(0,qQ.Jb)(QQ,"worldViewProjection")} * ${(0,qQ.l)(QQ,"vec4",(0,qQ.Sb)(QQ,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qQ.Q)(QQ,`\n\t\t\t\t${(0,qQ.L)(QQ)} = ${(0,qQ.l)(QQ,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(QQ) {
        return {
          vertex: `\n\t\t\t${(0,qQ.d)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.Fb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Fb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Fb)(QQ,"cameraPosition","vec3")}\n\t\t\t${(0,qQ.Nb)(QQ,"vDepth","float","mediump")}\n\n\t\t\t${(0,qQ.Ob)(QQ,`\n\t\t\t\t${(0,qQ.i)(QQ)} = ${(0,qQ.Jb)(QQ,"worldViewProjection")} * ${(0,qQ.l)(QQ,"vec4",(0,qQ.Sb)(QQ,"position"),"1.0")};\n\t\t\t\t${(0,qQ.A)(QQ,"vec3","worldPosition",`(${(0,qQ.Jb)(QQ,"world")} * ${(0,qQ.l)(QQ,"vec4",(0,qQ.Sb)(QQ,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,qQ.Tb)(QQ,"vDepth")} = distance(worldPosition, ${(0,qQ.Jb)(QQ,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qQ.Nb)(QQ,"vDepth","float","mediump")}\n\t\t\t${(0,qQ.Fb)(QQ,"maxDepth","float")}\n\t\t\t${(0,qQ.Fb)(QQ,"minDepth","float")}\n\n\t\t\t${(0,qQ.Q)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.A)(QQ,"float","normalizedDepth",`clamp((${(0,qQ.T)(QQ,"vDepth")} - ${(0,qQ.Jb)(QQ,"minDepth")}) / (${(0,qQ.Jb)(QQ,"maxDepth")} - ${(0,qQ.Jb)(QQ,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,qQ.A)(QQ,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,qQ.L)(QQ)} = ${(0,qQ.l)(QQ,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function zQ(QQ, WQ) {
      const {
        vertex: XQ,
        fragment: qQ
      } = TQ[QQ](WQ), zQ = wQ.b.GetShadersStore(WQ);
      zQ[`${QQ}VertexShader`] = XQ, zQ[`${QQ}FragmentShader`] = qQ
    }
  },
  37468: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => qQ,
      A: () => gQ,
      Ab: () => UQ,
      C: () => dQ,
      D: () => AQ,
      Eb: () => PQ,
      Fb: () => VQ,
      H: () => TQ,
      Jb: () => iQ,
      L: () => CQ,
      Nb: () => yQ,
      O: () => EQ,
      Ob: () => pQ,
      Q: () => GQ,
      Sb: () => aQ,
      T: () => hQ,
      Tb: () => lQ,
      X: () => cQ,
      Z: () => kQ,
      b: () => wQ,
      cb: () => RQ,
      d: () => BQ,
      fb: () => SQ,
      h: () => HQ,
      i: () => DQ,
      jb: () => oQ,
      l: () => FQ,
      mb: () => vQ,
      n: () => uQ,
      nb: () => bQ,
      p: () => LQ,
      r: () => rQ,
      rb: () => tQ,
      ub: () => eQ,
      v: () => IQ,
      wb: () => fQ,
      y: () => JQ
    });
    const wQ = {
      GLSL: 0,
      WGSL: 1
    };

    function qQ(QQ) {
      return QQ === wQ.WGSL
    }

    function TQ(QQ, WQ, XQ) {
      return qQ(QQ) ? XQ : WQ
    }
    const zQ = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function sQ(QQ, WQ) {
      if (!qQ(QQ)) return WQ;
      const XQ = zQ.get(WQ);
      if (!XQ) throw new Error(`No WGSL name for shader type "${WQ}"`);
      return XQ
    }

    function FQ(QQ, WQ) {
      for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
      return `${sQ(QQ,WQ)}(${wQ.join(", ")})`
    }

    function PQ(QQ, WQ) {
      return FQ(QQ, "int", WQ)
    }

    function gQ(QQ, WQ, XQ, wQ, TQ) {
      return qQ(QQ) ? `var ${XQ}: ${sQ(QQ,WQ)} = ${wQ};` : `${jQ(QQ,TQ)}${WQ} ${XQ} = ${wQ};`
    }

    function JQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `var ${XQ}: ${sQ(QQ,WQ)};` : `${WQ} ${XQ};`
    }

    function rQ(QQ, WQ, XQ, wQ) {
      return qQ(QQ) ? `const ${XQ}: ${sQ(QQ,WQ)} = ${wQ};` : `const ${WQ} ${XQ} = ${wQ};`
    }

    function IQ(QQ, WQ, XQ, wQ, TQ) {
      if (qQ(QQ)) {
        return `fn ${XQ}(${wQ.map((WQ=>`${WQ.name}: ${sQ(QQ,WQ.type)}`)).join(", ")}) -> ${sQ(QQ,WQ)} {${TQ}}`
      }
      return `${WQ} ${XQ}(${wQ.map((QQ=>`${QQ.type} ${QQ.name}`)).join(", ")}) {${TQ}}`
    }

    function jQ(QQ, WQ) {
      return !WQ || qQ(QQ) ? "" : `${WQ} `
    }

    function BQ(QQ, WQ, XQ, wQ) {
      return qQ(QQ) ? `attribute ${WQ}: ${sQ(QQ,XQ)};` : `attribute ${jQ(QQ,wQ)}${XQ} ${WQ};`
    }

    function yQ(QQ, WQ, XQ, wQ) {
      return qQ(QQ) ? `varying ${WQ}: ${sQ(QQ,XQ)};` : `varying ${jQ(QQ,wQ)}${XQ} ${WQ};`
    }

    function VQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `uniform ${WQ}: ${sQ(QQ,XQ)};` : `uniform ${XQ} ${WQ};`
    }

    function DQ(QQ) {
      return qQ(QQ) ? "vertexOutputs.position" : "gl_Position"
    }

    function pQ(QQ, WQ) {
      return qQ(QQ) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${WQ}}` : `void main() {${WQ}}`
    }

    function GQ(QQ, WQ) {
      return qQ(QQ) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${WQ}}` : `void main() {${WQ}}`
    }

    function UQ(QQ, WQ, XQ) {
      if (qQ(QQ)) {
        return [`var ${WQ}Sampler: sampler;`, `var ${WQ}: ${"2dArray"===XQ?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===XQ?"sampler2DArray":"sampler2D"} ${WQ};`
    }

    function bQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `textureSample(${WQ}, ${WQ}Sampler, ${XQ})` : `texture2D(${WQ}, ${XQ})`
    }

    function vQ(QQ, WQ, XQ, wQ, TQ) {
      if (qQ(QQ)) {
        return `${TQ?"textureSampleLevel":"textureSample"}(${WQ}, ${WQ}Sampler, ${XQ}, ${PQ(QQ,`round(${wQ})`)}${TQ?`, ${TQ}`:""})`
      }
      const zQ = FQ(QQ, "vec3", XQ, wQ);
      return TQ ? `textureLod(${WQ}, ${zQ}, ${TQ})` : `texture(${WQ}, ${zQ})`
    }

    function dQ(QQ) {
      return qQ(QQ) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function HQ(QQ) {
      return qQ(QQ) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function aQ(QQ, WQ) {
      return qQ(QQ) ? `vertexInputs.${WQ}` : WQ
    }

    function lQ(QQ, WQ) {
      return qQ(QQ) ? `vertexOutputs.${WQ}` : WQ
    }

    function hQ(QQ, WQ) {
      return qQ(QQ) ? `fragmentInputs.${WQ}` : WQ
    }

    function iQ(QQ, WQ) {
      return qQ(QQ) ? `uniforms.${WQ}` : WQ
    }

    function cQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `frame.${WQ}` : XQ
    }

    function AQ(QQ) {
      return qQ(QQ) ? "scene.vEyePosition" : "vEyePosition"
    }

    function RQ(QQ) {
      return qQ(QQ) ? "mesh.visibility" : "visibility"
    }

    function EQ(QQ) {
      return qQ(QQ) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function CQ(QQ) {
      return qQ(QQ) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function uQ(QQ, WQ) {
      return qQ(QQ) ? `dpdx(${WQ})` : `dFdx(${WQ})`
    }

    function LQ(QQ, WQ) {
      return qQ(QQ) ? `dpdy(${WQ})` : `dFdy(${WQ})`
    }

    function kQ(QQ, WQ) {
      return qQ(QQ) ? `inverseSqrt(${WQ})` : `inversesqrt(${WQ})`
    }

    function fQ(QQ, WQ, XQ, wQ) {
      return qQ(QQ) ? `select(${wQ}, ${XQ}, ${WQ})` : `((${WQ}) ? (${XQ}) : (${wQ}))`
    }

    function SQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `((${WQ}) - (${XQ}) * floor((${WQ}) / (${XQ})))` : `mod(${WQ}, ${XQ})`
    }

    function tQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `${WQ} = vec4f(${XQ}, ${WQ}.a);` : `${WQ}.rgb = ${XQ};`
    }

    function oQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `${WQ} = vec4f(${WQ}.rgb * (${XQ}), ${WQ}.a);` : `${WQ}.rgb *= ${XQ};`
    }

    function eQ(QQ, WQ, XQ) {
      return qQ(QQ) ? `${WQ} = vec4f(${XQ}, ${WQ}.w);` : `${WQ}.xyz = ${XQ};`
    }
  },
  40126: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
      }
    }
    wQ.ShadersRepository = "src/Shaders/", wQ.ShadersStore = {}, wQ.IncludesShadersStore = {}, wQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", wQ.ShadersStoreWGSL = {}, wQ.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);