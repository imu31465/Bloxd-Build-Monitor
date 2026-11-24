export const id = 240;
export const ids = [240];
export const modules = {
  61439: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      DEVTOOLS_SHADERS: () => dB,
      registerDevtoolsShader: () => IB
    });
    var QB = zB(39932),
      nB = zB(37283);
    const dB = {
      devtoolsNormal: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,nB.g)(BB,"position","vec3")}\n\t\t\t${(0,nB.g)(BB,"normal","vec3")}\n\t\t\t${(0,nB.xb)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,nB.xb)(BB,"world","mat4")}\n\t\t\t${(0,nB.Bb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,nB.Eb)(BB,`\n\t\t\t\t${(0,nB.l)(BB)} = ${(0,nB.Ab)(BB,"worldViewProjection")} * ${(0,nB.m)(BB,"vec4",(0,nB.Gb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,nB.Kb)(BB,"vNormal")} = normalize((${(0,nB.Ab)(BB,"world")} * ${(0,nB.m)(BB,"vec4",(0,nB.Gb)(BB,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,nB.Bb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,nB.S)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,nB.A)(BB,"vec3","normalColor",`abs(${(0,nB.T)(BB,"vNormal")})`)}\n\t\t\t\t${(0,nB.M)(BB)} = ${(0,nB.m)(BB,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,nB.g)(BB,"position","vec3")}\n\t\t\t${(0,nB.xb)(BB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,nB.Eb)(BB,`\n\t\t\t\t${(0,nB.l)(BB)} = ${(0,nB.Ab)(BB,"worldViewProjection")} * ${(0,nB.m)(BB,"vec4",(0,nB.Gb)(BB,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,nB.S)(BB,`\n\t\t\t\t${(0,nB.M)(BB)} = ${(0,nB.m)(BB,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,nB.g)(BB,"position","vec3")}\n\t\t\t${(0,nB.xb)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,nB.xb)(BB,"world","mat4")}\n\t\t\t${(0,nB.xb)(BB,"cameraPosition","vec3")}\n\t\t\t${(0,nB.Bb)(BB,"vDepth","float","mediump")}\n\n\t\t\t${(0,nB.Eb)(BB,`\n\t\t\t\t${(0,nB.l)(BB)} = ${(0,nB.Ab)(BB,"worldViewProjection")} * ${(0,nB.m)(BB,"vec4",(0,nB.Gb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,nB.A)(BB,"vec3","worldPosition",`(${(0,nB.Ab)(BB,"world")} * ${(0,nB.m)(BB,"vec4",(0,nB.Gb)(BB,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,nB.Kb)(BB,"vDepth")} = distance(worldPosition, ${(0,nB.Ab)(BB,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,nB.Bb)(BB,"vDepth","float","mediump")}\n\t\t\t${(0,nB.xb)(BB,"maxDepth","float")}\n\t\t\t${(0,nB.xb)(BB,"minDepth","float")}\n\n\t\t\t${(0,nB.S)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,nB.A)(BB,"float","normalizedDepth",`clamp((${(0,nB.T)(BB,"vDepth")} - ${(0,nB.Ab)(BB,"minDepth")}) / (${(0,nB.Ab)(BB,"maxDepth")} - ${(0,nB.Ab)(BB,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,nB.A)(BB,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,nB.M)(BB)} = ${(0,nB.m)(BB,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function IB(BB, jB) {
      const {
        vertex: zB,
        fragment: nB
      } = dB[BB](jB), IB = QB.e.GetShadersStore(jB);
      IB[`${BB}VertexShader`] = zB, IB[`${BB}FragmentShader`] = nB
    }
  },
  37283: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => aB,
      Ab: () => HB,
      Bb: () => yB,
      E: () => EB,
      Eb: () => LB,
      G: () => FB,
      Gb: () => qB,
      K: () => dB,
      Kb: () => fB,
      M: () => hB,
      O: () => VB,
      S: () => gB,
      T: () => oB,
      W: () => DB,
      Z: () => AB,
      ab: () => nB,
      c: () => QB,
      eb: () => YB,
      g: () => mB,
      h: () => iB,
      hb: () => PB,
      ib: () => eB,
      kb: () => MB,
      l: () => GB,
      m: () => uB,
      mb: () => SB,
      n: () => XB,
      nb: () => WB,
      qb: () => lB,
      r: () => ZB,
      s: () => rB,
      sb: () => TB,
      ub: () => tB,
      w: () => sB,
      wb: () => UB,
      xb: () => kB,
      y: () => pB
    });
    const QB = {
      GLSL: 0,
      WGSL: 1
    };

    function nB(BB) {
      return BB === QB.WGSL
    }

    function dB(BB, jB, zB) {
      return nB(BB) ? zB : jB
    }
    const IB = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function NB(BB, jB) {
      if (!nB(BB)) return jB;
      const zB = IB.get(jB);
      if (!zB) throw new Error(`No WGSL name for shader type "${jB}"`);
      return zB
    }

    function uB(BB, jB) {
      for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
      return `${NB(BB,jB)}(${QB.join(", ")})`
    }

    function UB(BB, jB) {
      return uB(BB, "int", jB)
    }

    function aB(BB, jB, zB, QB, dB) {
      return nB(BB) ? `var ${zB}: ${NB(BB,jB)} = ${QB};` : `${JB(BB,dB)}${jB} ${zB} = ${QB};`
    }

    function pB(BB, jB, zB) {
      return nB(BB) ? `var ${zB}: ${NB(BB,jB)};` : `${jB} ${zB};`
    }

    function rB(BB, jB, zB, QB) {
      return nB(BB) ? `const ${zB}: ${NB(BB,jB)} = ${QB};` : `const ${jB} ${zB} = ${QB};`
    }

    function sB(BB, jB, zB, QB, dB) {
      if (nB(BB)) {
        return `fn ${zB}(${QB.map((jB=>`${jB.name}: ${NB(BB,jB.type)}`)).join(", ")}) -> ${NB(BB,jB)} {${dB}}`
      }
      return `${jB} ${zB}(${QB.map((BB=>`${BB.type} ${BB.name}`)).join(", ")}) {${dB}}`
    }

    function JB(BB, jB) {
      return !jB || nB(BB) ? "" : `${jB} `
    }

    function mB(BB, jB, zB, QB) {
      return nB(BB) ? `attribute ${jB}: ${NB(BB,zB)};` : `attribute ${JB(BB,QB)}${zB} ${jB};`
    }

    function yB(BB, jB, zB, QB) {
      return nB(BB) ? `varying ${jB}: ${NB(BB,zB)};` : `varying ${JB(BB,QB)}${zB} ${jB};`
    }

    function kB(BB, jB, zB) {
      return nB(BB) ? `uniform ${jB}: ${NB(BB,zB)};` : `uniform ${zB} ${jB};`
    }

    function GB(BB) {
      return nB(BB) ? "vertexOutputs.position" : "gl_Position"
    }

    function LB(BB, jB) {
      return nB(BB) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${jB}}` : `void main() {${jB}}`
    }

    function gB(BB, jB) {
      return nB(BB) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${jB}}` : `void main() {${jB}}`
    }

    function tB(BB, jB, zB) {
      if (nB(BB)) {
        return [`var ${jB}Sampler: sampler;`, `var ${jB}: ${"2dArray"===zB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===zB?"sampler2DArray":"sampler2D"} ${jB};`
    }

    function SB(BB, jB, zB) {
      return nB(BB) ? `textureSample(${jB}, ${jB}Sampler, ${zB})` : `texture2D(${jB}, ${zB})`
    }

    function MB(BB, jB, zB, QB, dB) {
      if (nB(BB)) {
        return `${dB?"textureSampleLevel":"textureSample"}(${jB}, ${jB}Sampler, ${zB}, ${UB(BB,`round(${QB})`)}${dB?`, ${dB}`:""})`
      }
      const IB = uB(BB, "vec3", zB, QB);
      return dB ? `textureLod(${jB}, ${IB}, ${dB})` : `texture(${jB}, ${IB})`
    }

    function EB(BB) {
      return nB(BB) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function iB(BB) {
      return nB(BB) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function qB(BB, jB) {
      return nB(BB) ? `vertexInputs.${jB}` : jB
    }

    function fB(BB, jB) {
      return nB(BB) ? `vertexOutputs.${jB}` : jB
    }

    function oB(BB, jB) {
      return nB(BB) ? `fragmentInputs.${jB}` : jB
    }

    function HB(BB, jB) {
      return nB(BB) ? `uniforms.${jB}` : jB
    }

    function DB(BB, jB, zB) {
      return nB(BB) ? `frame.${jB}` : zB
    }

    function FB(BB) {
      return nB(BB) ? "scene.vEyePosition" : "vEyePosition"
    }

    function YB(BB) {
      return nB(BB) ? "mesh.visibility" : "visibility"
    }

    function VB(BB) {
      return nB(BB) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function hB(BB) {
      return nB(BB) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function XB(BB, jB) {
      return nB(BB) ? `dpdx(${jB})` : `dFdx(${jB})`
    }

    function ZB(BB, jB) {
      return nB(BB) ? `dpdy(${jB})` : `dFdy(${jB})`
    }

    function AB(BB, jB) {
      return nB(BB) ? `inverseSqrt(${jB})` : `inversesqrt(${jB})`
    }

    function TB(BB, jB, zB, QB) {
      return nB(BB) ? `select(${QB}, ${zB}, ${jB})` : `((${jB}) ? (${zB}) : (${QB}))`
    }

    function PB(BB, jB, zB) {
      return nB(BB) ? `((${jB}) - (${zB}) * floor((${jB}) / (${zB})))` : `mod(${jB}, ${zB})`
    }

    function WB(BB, jB, zB) {
      return nB(BB) ? `${jB} = vec4f(${zB}, ${jB}.a);` : `${jB}.rgb = ${zB};`
    }

    function eB(BB, jB, zB) {
      return nB(BB) ? `${jB} = vec4f(${jB}.rgb * (${zB}), ${jB}.a);` : `${jB}.rgb *= ${zB};`
    }

    function lB(BB, jB, zB) {
      return nB(BB) ? `${jB} = vec4f(${zB}, ${jB}.w);` : `${jB}.xyz = ${zB};`
    }
  },
  39932: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QB.ShadersRepository : QB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QB.ShadersStore : QB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QB.IncludesShadersStore : QB.IncludesShadersStoreWGSL
      }
    }
    QB.ShadersRepository = "src/Shaders/", QB.ShadersStore = {}, QB.IncludesShadersStore = {}, QB.ShadersRepositoryWGSL = "src/ShadersWGSL/", QB.ShadersStoreWGSL = {}, QB.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);