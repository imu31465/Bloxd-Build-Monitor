export const id = 229;
export const ids = [229];
export const modules = {
  61144: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      DEVTOOLS_SHADERS: () => Oq,
      registerDevtoolsShader: () => mq
    });
    var Yq = gq(39617),
      lq = gq(37220);
    const Oq = {
      devtoolsNormal: function(qq) {
        return {
          vertex: `\n\t\t\t${(0,lq.g)(qq,"position","vec3")}\n\t\t\t${(0,lq.g)(qq,"normal","vec3")}\n\t\t\t${(0,lq.Bb)(qq,"worldViewProjection","mat4")}\n\t\t\t${(0,lq.Bb)(qq,"world","mat4")}\n\t\t\t${(0,lq.Fb)(qq,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,lq.Gb)(qq,`\n\t\t\t\t${(0,lq.m)(qq)} = ${(0,lq.Eb)(qq,"worldViewProjection")} * ${(0,lq.n)(qq,"vec4",(0,lq.Ib)(qq,"position"),"1.0")};\n\t\t\t\t${(0,lq.Mb)(qq,"vNormal")} = normalize((${(0,lq.Eb)(qq,"world")} * ${(0,lq.n)(qq,"vec4",(0,lq.Ib)(qq,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,lq.Fb)(qq,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,lq.R)(qq,`\n\t\t\t\t\n\t\t\t\t${(0,lq.B)(qq,"vec3","normalColor",`abs(${(0,lq.U)(qq,"vNormal")})`)}\n\t\t\t\t${(0,lq.K)(qq)} = ${(0,lq.n)(qq,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(qq) {
        return {
          vertex: `\n\t\t\t${(0,lq.g)(qq,"position","vec3")}\n\t\t\t${(0,lq.Bb)(qq,"worldViewProjection","mat4")}\n\n\t\t\t${(0,lq.Gb)(qq,`\n\t\t\t\t${(0,lq.m)(qq)} = ${(0,lq.Eb)(qq,"worldViewProjection")} * ${(0,lq.n)(qq,"vec4",(0,lq.Ib)(qq,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,lq.R)(qq,`\n\t\t\t\t${(0,lq.K)(qq)} = ${(0,lq.n)(qq,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(qq) {
        return {
          vertex: `\n\t\t\t${(0,lq.g)(qq,"position","vec3")}\n\t\t\t${(0,lq.Bb)(qq,"worldViewProjection","mat4")}\n\t\t\t${(0,lq.Bb)(qq,"world","mat4")}\n\t\t\t${(0,lq.Bb)(qq,"cameraPosition","vec3")}\n\t\t\t${(0,lq.Fb)(qq,"vDepth","float","mediump")}\n\n\t\t\t${(0,lq.Gb)(qq,`\n\t\t\t\t${(0,lq.m)(qq)} = ${(0,lq.Eb)(qq,"worldViewProjection")} * ${(0,lq.n)(qq,"vec4",(0,lq.Ib)(qq,"position"),"1.0")};\n\t\t\t\t${(0,lq.B)(qq,"vec3","worldPosition",`(${(0,lq.Eb)(qq,"world")} * ${(0,lq.n)(qq,"vec4",(0,lq.Ib)(qq,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,lq.Mb)(qq,"vDepth")} = distance(worldPosition, ${(0,lq.Eb)(qq,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,lq.Fb)(qq,"vDepth","float","mediump")}\n\t\t\t${(0,lq.Bb)(qq,"maxDepth","float")}\n\t\t\t${(0,lq.Bb)(qq,"minDepth","float")}\n\n\t\t\t${(0,lq.R)(qq,`\n\t\t\t\t\n\t\t\t\t${(0,lq.B)(qq,"float","normalizedDepth",`clamp((${(0,lq.U)(qq,"vDepth")} - ${(0,lq.Eb)(qq,"minDepth")}) / (${(0,lq.Eb)(qq,"maxDepth")} - ${(0,lq.Eb)(qq,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,lq.B)(qq,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,lq.K)(qq)} = ${(0,lq.n)(qq,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function mq(qq, Eq) {
      const {
        vertex: gq,
        fragment: lq
      } = Oq[qq](Eq), mq = Yq.d.GetShadersStore(Eq);
      mq[`${qq}VertexShader`] = gq, mq[`${qq}FragmentShader`] = lq
    }
  },
  37220: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => uq,
      Bb: () => jq,
      C: () => rq,
      Eb: () => iq,
      F: () => fq,
      Fb: () => dq,
      Gb: () => oq,
      I: () => Oq,
      Ib: () => hq,
      K: () => zq,
      Mb: () => nq,
      N: () => Tq,
      R: () => Pq,
      U: () => bq,
      V: () => Zq,
      Z: () => Gq,
      ab: () => lq,
      bb: () => Mq,
      cb: () => Jq,
      d: () => Yq,
      g: () => Vq,
      gb: () => Rq,
      k: () => vq,
      kb: () => tq,
      m: () => Hq,
      mb: () => yq,
      n: () => Aq,
      o: () => Sq,
      p: () => pq,
      pb: () => kq,
      q: () => Wq,
      qb: () => Uq,
      t: () => Nq,
      tb: () => Lq,
      wb: () => Qq,
      x: () => Bq,
      xb: () => cq
    });
    const Yq = {
      GLSL: 0,
      WGSL: 1
    };

    function lq(qq) {
      return qq === Yq.WGSL
    }

    function Oq(qq, Eq, gq) {
      return lq(qq) ? gq : Eq
    }
    const mq = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function xq(qq, Eq) {
      if (!lq(qq)) return Eq;
      const gq = mq.get(Eq);
      if (!gq) throw new Error(`No WGSL name for shader type "${Eq}"`);
      return gq
    }

    function Aq(qq, Eq) {
      for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
      return `${xq(qq,Eq)}(${Yq.join(", ")})`
    }

    function cq(qq, Eq) {
      return Aq(qq, "int", Eq)
    }

    function uq(qq, Eq, gq, Yq, Oq) {
      return lq(qq) ? `var ${gq}: ${xq(qq,Eq)} = ${Yq};` : `${aq(qq,Oq)}${Eq} ${gq} = ${Yq};`
    }

    function Bq(qq, Eq, gq) {
      return lq(qq) ? `var ${gq}: ${xq(qq,Eq)};` : `${Eq} ${gq};`
    }

    function Wq(qq, Eq, gq, Yq) {
      return lq(qq) ? `const ${gq}: ${xq(qq,Eq)} = ${Yq};` : `const ${Eq} ${gq} = ${Yq};`
    }

    function Nq(qq, Eq, gq, Yq, Oq) {
      if (lq(qq)) {
        return `fn ${gq}(${Yq.map((Eq=>`${Eq.name}: ${xq(qq,Eq.type)}`)).join(", ")}) -> ${xq(qq,Eq)} {${Oq}}`
      }
      return `${Eq} ${gq}(${Yq.map((qq=>`${qq.type} ${qq.name}`)).join(", ")}) {${Oq}}`
    }

    function aq(qq, Eq) {
      return !Eq || lq(qq) ? "" : `${Eq} `
    }

    function Vq(qq, Eq, gq, Yq) {
      return lq(qq) ? `attribute ${Eq}: ${xq(qq,gq)};` : `attribute ${aq(qq,Yq)}${gq} ${Eq};`
    }

    function dq(qq, Eq, gq, Yq) {
      return lq(qq) ? `varying ${Eq}: ${xq(qq,gq)};` : `varying ${aq(qq,Yq)}${gq} ${Eq};`
    }

    function jq(qq, Eq, gq) {
      return lq(qq) ? `uniform ${Eq}: ${xq(qq,gq)};` : `uniform ${gq} ${Eq};`
    }

    function Hq(qq) {
      return lq(qq) ? "vertexOutputs.position" : "gl_Position"
    }

    function oq(qq, Eq) {
      return lq(qq) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Eq}}` : `void main() {${Eq}}`
    }

    function Pq(qq, Eq) {
      return lq(qq) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Eq}}` : `void main() {${Eq}}`
    }

    function Qq(qq, Eq, gq) {
      if (lq(qq)) {
        return [`var ${Eq}Sampler: sampler;`, `var ${Eq}: ${"2dArray"===gq?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===gq?"sampler2DArray":"sampler2D"} ${Eq};`
    }

    function yq(qq, Eq, gq) {
      return lq(qq) ? `textureSample(${Eq}, ${Eq}Sampler, ${gq})` : `texture2D(${Eq}, ${gq})`
    }

    function tq(qq, Eq, gq, Yq, Oq) {
      if (lq(qq)) {
        return `${Oq?"textureSampleLevel":"textureSample"}(${Eq}, ${Eq}Sampler, ${gq}, ${cq(qq,`round(${Yq})`)}${Oq?`, ${Oq}`:""})`
      }
      const mq = Aq(qq, "vec3", gq, Yq);
      return Oq ? `textureLod(${Eq}, ${mq}, ${Oq})` : `texture(${Eq}, ${mq})`
    }

    function rq(qq) {
      return lq(qq) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function vq(qq) {
      return lq(qq) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function hq(qq, Eq) {
      return lq(qq) ? `vertexInputs.${Eq}` : Eq
    }

    function nq(qq, Eq) {
      return lq(qq) ? `vertexOutputs.${Eq}` : Eq
    }

    function bq(qq, Eq) {
      return lq(qq) ? `fragmentInputs.${Eq}` : Eq
    }

    function iq(qq, Eq) {
      return lq(qq) ? `uniforms.${Eq}` : Eq
    }

    function Zq(qq, Eq, gq) {
      return lq(qq) ? `frame.${Eq}` : gq
    }

    function fq(qq) {
      return lq(qq) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Mq(qq) {
      return lq(qq) ? "mesh.visibility" : "visibility"
    }

    function Tq(qq) {
      return lq(qq) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function zq(qq) {
      return lq(qq) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Sq(qq, Eq) {
      return lq(qq) ? `dpdx(${Eq})` : `dFdx(${Eq})`
    }

    function pq(qq, Eq) {
      return lq(qq) ? `dpdy(${Eq})` : `dFdy(${Eq})`
    }

    function Gq(qq, Eq) {
      return lq(qq) ? `inverseSqrt(${Eq})` : `inversesqrt(${Eq})`
    }

    function Lq(qq, Eq, gq, Yq) {
      return lq(qq) ? `select(${Yq}, ${gq}, ${Eq})` : `((${Eq}) ? (${gq}) : (${Yq}))`
    }

    function Jq(qq, Eq, gq) {
      return lq(qq) ? `((${Eq}) - (${gq}) * floor((${Eq}) / (${gq})))` : `mod(${Eq}, ${gq})`
    }

    function kq(qq, Eq, gq) {
      return lq(qq) ? `${Eq} = vec4f(${gq}, ${Eq}.a);` : `${Eq}.rgb = ${gq};`
    }

    function Rq(qq, Eq, gq) {
      return lq(qq) ? `${Eq} = vec4f(${Eq}.rgb * (${gq}), ${Eq}.a);` : `${Eq}.rgb *= ${gq};`
    }

    function Uq(qq, Eq, gq) {
      return lq(qq) ? `${Eq} = vec4f(${gq}, ${Eq}.w);` : `${Eq}.xyz = ${gq};`
    }
  },
  39617: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
      }
    }
    Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);