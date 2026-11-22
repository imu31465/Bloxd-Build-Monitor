export const id = 232;
export const ids = [232];
export const modules = {
  60682: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      DEVTOOLS_SHADERS: () => Sk,
      registerDevtoolsShader: () => bk
    });
    var Dk = ik(39412),
      fk = ik(36773);
    const Sk = {
      devtoolsNormal: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.e)(kk,"normal","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,fk.Db)(kk,"world","mat4")}\n\t\t\t${(0,fk.Kb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${(0,fk.m)(kk)} = ${(0,fk.Hb)(kk,"worldViewProjection")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"position"),"1.0")};\n\t\t\t\t${(0,fk.Ub)(kk,"vNormal")} = normalize((${(0,fk.Hb)(kk,"world")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,fk.Kb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,fk.F)(kk,"vec3","normalColor",`abs(${(0,fk.T)(kk,"vNormal")})`)}\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${(0,fk.m)(kk)} = ${(0,fk.Hb)(kk,"worldViewProjection")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,fk.Db)(kk,"world","mat4")}\n\t\t\t${(0,fk.Db)(kk,"cameraPosition","vec3")}\n\t\t\t${(0,fk.Kb)(kk,"vDepth","float","mediump")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${(0,fk.m)(kk)} = ${(0,fk.Hb)(kk,"worldViewProjection")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"position"),"1.0")};\n\t\t\t\t${(0,fk.F)(kk,"vec3","worldPosition",`(${(0,fk.Hb)(kk,"world")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,fk.Ub)(kk,"vDepth")} = distance(worldPosition, ${(0,fk.Hb)(kk,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,fk.Kb)(kk,"vDepth","float","mediump")}\n\t\t\t${(0,fk.Db)(kk,"maxDepth","float")}\n\t\t\t${(0,fk.Db)(kk,"minDepth","float")}\n\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,fk.F)(kk,"float","normalizedDepth",`clamp((${(0,fk.T)(kk,"vDepth")} - ${(0,fk.Hb)(kk,"minDepth")}) / (${(0,fk.Hb)(kk,"maxDepth")} - ${(0,fk.Hb)(kk,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,fk.F)(kk,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function bk(kk, ek) {
      const {
        vertex: ik,
        fragment: fk
      } = Sk[kk](ek), bk = Dk.d.GetShadersStore(ek);
      bk[`${kk}VertexShader`] = ik, bk[`${kk}FragmentShader`] = fk
    }
  },
  36773: (kk, ek, ik) => {
    ik.d(ek, {
      $: () => fk,
      A: () => nk,
      Ab: () => mk,
      Db: () => lk,
      E: () => Kk,
      F: () => Mk,
      Hb: () => uk,
      I: () => jk,
      Kb: () => wk,
      L: () => Ik,
      N: () => Sk,
      Nb: () => yk,
      O: () => vk,
      Q: () => Qk,
      Rb: () => dk,
      S: () => Yk,
      T: () => Fk,
      Ub: () => Vk,
      V: () => qk,
      Z: () => ak,
      bb: () => zk,
      d: () => Dk,
      db: () => tk,
      e: () => Hk,
      gb: () => Bk,
      i: () => sk,
      ib: () => Ak,
      lb: () => Ck,
      m: () => pk,
      n: () => Pk,
      pb: () => Xk,
      r: () => Ek,
      rb: () => ck,
      u: () => hk,
      vb: () => Wk,
      w: () => xk,
      wb: () => Lk
    });
    const Dk = {
      GLSL: 0,
      WGSL: 1
    };

    function fk(kk) {
      return kk === Dk.WGSL
    }

    function Sk(kk, ek, ik) {
      return fk(kk) ? ik : ek
    }
    const bk = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function rk(kk, ek) {
      if (!fk(kk)) return ek;
      const ik = bk.get(ek);
      if (!ik) throw new Error(`No WGSL name for shader type "${ek}"`);
      return ik
    }

    function Pk(kk, ek) {
      for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
      return `${rk(kk,ek)}(${Dk.join(", ")})`
    }

    function mk(kk, ek) {
      return Pk(kk, "int", ek)
    }

    function Mk(kk, ek, ik, Dk, Sk) {
      return fk(kk) ? `var ${ik}: ${rk(kk,ek)} = ${Dk};` : `${Uk(kk,Sk)}${ek} ${ik} = ${Dk};`
    }

    function Kk(kk, ek, ik) {
      return fk(kk) ? `var ${ik}: ${rk(kk,ek)};` : `${ek} ${ik};`
    }

    function xk(kk, ek, ik, Dk) {
      return fk(kk) ? `const ${ik}: ${rk(kk,ek)} = ${Dk};` : `const ${ek} ${ik} = ${Dk};`
    }

    function nk(kk, ek, ik, Dk, Sk) {
      if (fk(kk)) {
        return `fn ${ik}(${Dk.map((ek=>`${ek.name}: ${rk(kk,ek.type)}`)).join(", ")}) -> ${rk(kk,ek)} {${Sk}}`
      }
      return `${ek} ${ik}(${Dk.map((kk=>`${kk.type} ${kk.name}`)).join(", ")}) {${Sk}}`
    }

    function Uk(kk, ek) {
      return !ek || fk(kk) ? "" : `${ek} `
    }

    function Hk(kk, ek, ik, Dk) {
      return fk(kk) ? `attribute ${ek}: ${rk(kk,ik)};` : `attribute ${Uk(kk,Dk)}${ik} ${ek};`
    }

    function wk(kk, ek, ik, Dk) {
      return fk(kk) ? `varying ${ek}: ${rk(kk,ik)};` : `varying ${Uk(kk,Dk)}${ik} ${ek};`
    }

    function lk(kk, ek, ik) {
      return fk(kk) ? `uniform ${ek}: ${rk(kk,ik)};` : `uniform ${ik} ${ek};`
    }

    function pk(kk) {
      return fk(kk) ? "vertexOutputs.position" : "gl_Position"
    }

    function yk(kk, ek) {
      return fk(kk) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ek}}` : `void main() {${ek}}`
    }

    function Yk(kk, ek) {
      return fk(kk) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ek}}` : `void main() {${ek}}`
    }

    function Lk(kk, ek, ik) {
      if (fk(kk)) {
        return [`var ${ek}Sampler: sampler;`, `var ${ek}: ${"2dArray"===ik?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===ik?"sampler2DArray":"sampler2D"} ${ek};`
    }

    function Ck(kk, ek, ik) {
      return fk(kk) ? `textureSample(${ek}, ${ek}Sampler, ${ik})` : `texture2D(${ek}, ${ik})`
    }

    function Ak(kk, ek, ik, Dk, Sk) {
      if (fk(kk)) {
        return `${Sk?"textureSampleLevel":"textureSample"}(${ek}, ${ek}Sampler, ${ik}, ${mk(kk,`round(${Dk})`)}${Sk?`, ${Sk}`:""})`
      }
      const bk = Pk(kk, "vec3", ik, Dk);
      return Sk ? `textureLod(${ek}, ${bk}, ${Sk})` : `texture(${ek}, ${bk})`
    }

    function jk(kk) {
      return fk(kk) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function sk(kk) {
      return fk(kk) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function dk(kk, ek) {
      return fk(kk) ? `vertexInputs.${ek}` : ek
    }

    function Vk(kk, ek) {
      return fk(kk) ? `vertexOutputs.${ek}` : ek
    }

    function Fk(kk, ek) {
      return fk(kk) ? `fragmentInputs.${ek}` : ek
    }

    function uk(kk, ek) {
      return fk(kk) ? `uniforms.${ek}` : ek
    }

    function qk(kk, ek, ik) {
      return fk(kk) ? `frame.${ek}` : ik
    }

    function Ik(kk) {
      return fk(kk) ? "scene.vEyePosition" : "vEyePosition"
    }

    function zk(kk) {
      return fk(kk) ? "mesh.visibility" : "visibility"
    }

    function Qk(kk) {
      return fk(kk) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function vk(kk) {
      return fk(kk) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Ek(kk, ek) {
      return fk(kk) ? `dpdx(${ek})` : `dFdx(${ek})`
    }

    function hk(kk, ek) {
      return fk(kk) ? `dpdy(${ek})` : `dFdy(${ek})`
    }

    function ak(kk, ek) {
      return fk(kk) ? `inverseSqrt(${ek})` : `inversesqrt(${ek})`
    }

    function Wk(kk, ek, ik, Dk) {
      return fk(kk) ? `select(${Dk}, ${ik}, ${ek})` : `((${ek}) ? (${ik}) : (${Dk}))`
    }

    function tk(kk, ek, ik) {
      return fk(kk) ? `((${ek}) - (${ik}) * floor((${ek}) / (${ik})))` : `mod(${ek}, ${ik})`
    }

    function Xk(kk, ek, ik) {
      return fk(kk) ? `${ek} = vec4f(${ik}, ${ek}.a);` : `${ek}.rgb = ${ik};`
    }

    function Bk(kk, ek, ik) {
      return fk(kk) ? `${ek} = vec4f(${ek}.rgb * (${ik}), ${ek}.a);` : `${ek}.rgb *= ${ik};`
    }

    function ck(kk, ek, ik) {
      return fk(kk) ? `${ek} = vec4f(${ik}, ${ek}.w);` : `${ek}.xyz = ${ik};`
    }
  },
  39412: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersRepository : Dk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersStore : Dk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.IncludesShadersStore : Dk.IncludesShadersStoreWGSL
      }
    }
    Dk.ShadersRepository = "src/Shaders/", Dk.ShadersStore = {}, Dk.IncludesShadersStore = {}, Dk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Dk.ShadersStoreWGSL = {}, Dk.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);