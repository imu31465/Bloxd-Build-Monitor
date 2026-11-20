export const id = 228;
export const ids = [228];
export const modules = {
  60932: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      DEVTOOLS_SHADERS: () => ak,
      registerDevtoolsShader: () => Xk
    });
    var Rk = Bk(39270),
      tk = Bk(36836);
    const ak = {
      devtoolsNormal: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,tk.i)(kk,"position","vec3")}\n\t\t\t${(0,tk.i)(kk,"normal","vec3")}\n\t\t\t${(0,tk.Gb)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,tk.Gb)(kk,"world","mat4")}\n\t\t\t${(0,tk.Jb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,tk.Kb)(kk,`\n\t\t\t\t${(0,tk.o)(kk)} = ${(0,tk.Hb)(kk,"worldViewProjection")} * ${(0,tk.p)(kk,"vec4",(0,tk.Ob)(kk,"position"),"1.0")};\n\t\t\t\t${(0,tk.Qb)(kk,"vNormal")} = normalize((${(0,tk.Hb)(kk,"world")} * ${(0,tk.p)(kk,"vec4",(0,tk.Ob)(kk,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,tk.Jb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,tk._)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,tk.I)(kk,"vec3","normalColor",`abs(${(0,tk.$)(kk,"vNormal")})`)}\n\t\t\t\t${(0,tk.U)(kk)} = ${(0,tk.p)(kk,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,tk.i)(kk,"position","vec3")}\n\t\t\t${(0,tk.Gb)(kk,"worldViewProjection","mat4")}\n\n\t\t\t${(0,tk.Kb)(kk,`\n\t\t\t\t${(0,tk.o)(kk)} = ${(0,tk.Hb)(kk,"worldViewProjection")} * ${(0,tk.p)(kk,"vec4",(0,tk.Ob)(kk,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,tk._)(kk,`\n\t\t\t\t${(0,tk.U)(kk)} = ${(0,tk.p)(kk,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,tk.i)(kk,"position","vec3")}\n\t\t\t${(0,tk.Gb)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,tk.Gb)(kk,"world","mat4")}\n\t\t\t${(0,tk.Gb)(kk,"cameraPosition","vec3")}\n\t\t\t${(0,tk.Jb)(kk,"vDepth","float","mediump")}\n\n\t\t\t${(0,tk.Kb)(kk,`\n\t\t\t\t${(0,tk.o)(kk)} = ${(0,tk.Hb)(kk,"worldViewProjection")} * ${(0,tk.p)(kk,"vec4",(0,tk.Ob)(kk,"position"),"1.0")};\n\t\t\t\t${(0,tk.I)(kk,"vec3","worldPosition",`(${(0,tk.Hb)(kk,"world")} * ${(0,tk.p)(kk,"vec4",(0,tk.Ob)(kk,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,tk.Qb)(kk,"vDepth")} = distance(worldPosition, ${(0,tk.Hb)(kk,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,tk.Jb)(kk,"vDepth","float","mediump")}\n\t\t\t${(0,tk.Gb)(kk,"maxDepth","float")}\n\t\t\t${(0,tk.Gb)(kk,"minDepth","float")}\n\n\t\t\t${(0,tk._)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,tk.I)(kk,"float","normalizedDepth",`clamp((${(0,tk.$)(kk,"vDepth")} - ${(0,tk.Hb)(kk,"minDepth")}) / (${(0,tk.Hb)(kk,"maxDepth")} - ${(0,tk.Hb)(kk,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,tk.I)(kk,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,tk.U)(kk)} = ${(0,tk.p)(kk,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Xk(kk, Fk) {
      const {
        vertex: Bk,
        fragment: tk
      } = ak[kk](Fk), Xk = Rk.d.GetShadersStore(Fk);
      Xk[`${kk}VertexShader`] = Bk, Xk[`${kk}FragmentShader`] = tk
    }
  },
  36836: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      $: () => uk,
      A: () => Ak,
      Db: () => dk,
      E: () => Vk,
      Gb: () => mk,
      Hb: () => Mk,
      I: () => sk,
      Jb: () => fk,
      Kb: () => vk,
      M: () => Ek,
      Ob: () => Nk,
      Q: () => Uk,
      Qb: () => Hk,
      T: () => ak,
      U: () => Tk,
      Y: () => Gk,
      _: () => ik,
      ab: () => gk,
      bb: () => zk,
      e: () => Rk,
      fb: () => tk,
      gb: () => ck,
      i: () => yk,
      ib: () => hk,
      jb: () => Ck,
      kb: () => Ok,
      l: () => Sk,
      lb: () => Lk,
      o: () => Wk,
      p: () => wk,
      pb: () => qk,
      r: () => rk,
      rb: () => Zk,
      v: () => Dk,
      vb: () => Pk,
      x: () => Jk,
      zb: () => Yk
    });
    const Rk = {
      GLSL: 0,
      WGSL: 1
    };

    function tk(kk) {
      return kk === Rk.WGSL
    }

    function ak(kk, Fk, Bk) {
      return tk(kk) ? Bk : Fk
    }
    const Xk = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function bk(kk, Fk) {
      if (!tk(kk)) return Fk;
      const Bk = Xk.get(Fk);
      if (!Bk) throw new Error(`No WGSL name for shader type "${Fk}"`);
      return Bk
    }

    function wk(kk, Fk) {
      for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
      return `${bk(kk,Fk)}(${Rk.join(", ")})`
    }

    function dk(kk, Fk) {
      return wk(kk, "int", Fk)
    }

    function sk(kk, Fk, Bk, Rk, ak) {
      return tk(kk) ? `var ${Bk}: ${bk(kk,Fk)} = ${Rk};` : `${ek(kk,ak)}${Fk} ${Bk} = ${Rk};`
    }

    function Vk(kk, Fk, Bk) {
      return tk(kk) ? `var ${Bk}: ${bk(kk,Fk)};` : `${Fk} ${Bk};`
    }

    function Jk(kk, Fk, Bk, Rk) {
      return tk(kk) ? `const ${Bk}: ${bk(kk,Fk)} = ${Rk};` : `const ${Fk} ${Bk} = ${Rk};`
    }

    function Ak(kk, Fk, Bk, Rk, ak) {
      if (tk(kk)) {
        return `fn ${Bk}(${Rk.map((Fk=>`${Fk.name}: ${bk(kk,Fk.type)}`)).join(", ")}) -> ${bk(kk,Fk)} {${ak}}`
      }
      return `${Fk} ${Bk}(${Rk.map((kk=>`${kk.type} ${kk.name}`)).join(", ")}) {${ak}}`
    }

    function ek(kk, Fk) {
      return !Fk || tk(kk) ? "" : `${Fk} `
    }

    function yk(kk, Fk, Bk, Rk) {
      return tk(kk) ? `attribute ${Fk}: ${bk(kk,Bk)};` : `attribute ${ek(kk,Rk)}${Bk} ${Fk};`
    }

    function fk(kk, Fk, Bk, Rk) {
      return tk(kk) ? `varying ${Fk}: ${bk(kk,Bk)};` : `varying ${ek(kk,Rk)}${Bk} ${Fk};`
    }

    function mk(kk, Fk, Bk) {
      return tk(kk) ? `uniform ${Fk}: ${bk(kk,Bk)};` : `uniform ${Bk} ${Fk};`
    }

    function Wk(kk) {
      return tk(kk) ? "vertexOutputs.position" : "gl_Position"
    }

    function vk(kk, Fk) {
      return tk(kk) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Fk}}` : `void main() {${Fk}}`
    }

    function ik(kk, Fk) {
      return tk(kk) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Fk}}` : `void main() {${Fk}}`
    }

    function Yk(kk, Fk, Bk) {
      if (tk(kk)) {
        return [`var ${Fk}Sampler: sampler;`, `var ${Fk}: ${"2dArray"===Bk?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Bk?"sampler2DArray":"sampler2D"} ${Fk};`
    }

    function Lk(kk, Fk, Bk) {
      return tk(kk) ? `textureSample(${Fk}, ${Fk}Sampler, ${Bk})` : `texture2D(${Fk}, ${Bk})`
    }

    function Ok(kk, Fk, Bk, Rk, ak) {
      if (tk(kk)) {
        return `${ak?"textureSampleLevel":"textureSample"}(${Fk}, ${Fk}Sampler, ${Bk}, ${dk(kk,`round(${Rk})`)}${ak?`, ${ak}`:""})`
      }
      const Xk = wk(kk, "vec3", Bk, Rk);
      return ak ? `textureLod(${Fk}, ${Xk}, ${ak})` : `texture(${Fk}, ${Xk})`
    }

    function Ek(kk) {
      return tk(kk) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Sk(kk) {
      return tk(kk) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Nk(kk, Fk) {
      return tk(kk) ? `vertexInputs.${Fk}` : Fk
    }

    function Hk(kk, Fk) {
      return tk(kk) ? `vertexOutputs.${Fk}` : Fk
    }

    function uk(kk, Fk) {
      return tk(kk) ? `fragmentInputs.${Fk}` : Fk
    }

    function Mk(kk, Fk) {
      return tk(kk) ? `uniforms.${Fk}` : Fk
    }

    function gk(kk, Fk, Bk) {
      return tk(kk) ? `frame.${Fk}` : Bk
    }

    function Uk(kk) {
      return tk(kk) ? "scene.vEyePosition" : "vEyePosition"
    }

    function ck(kk) {
      return tk(kk) ? "mesh.visibility" : "visibility"
    }

    function Gk(kk) {
      return tk(kk) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Tk(kk) {
      return tk(kk) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function rk(kk, Fk) {
      return tk(kk) ? `dpdx(${Fk})` : `dFdx(${Fk})`
    }

    function Dk(kk, Fk) {
      return tk(kk) ? `dpdy(${Fk})` : `dFdy(${Fk})`
    }

    function zk(kk, Fk) {
      return tk(kk) ? `inverseSqrt(${Fk})` : `inversesqrt(${Fk})`
    }

    function Pk(kk, Fk, Bk, Rk) {
      return tk(kk) ? `select(${Rk}, ${Bk}, ${Fk})` : `((${Fk}) ? (${Bk}) : (${Rk}))`
    }

    function hk(kk, Fk, Bk) {
      return tk(kk) ? `((${Fk}) - (${Bk}) * floor((${Fk}) / (${Bk})))` : `mod(${Fk}, ${Bk})`
    }

    function qk(kk, Fk, Bk) {
      return tk(kk) ? `${Fk} = vec4f(${Bk}, ${Fk}.a);` : `${Fk}.rgb = ${Bk};`
    }

    function Ck(kk, Fk, Bk) {
      return tk(kk) ? `${Fk} = vec4f(${Fk}.rgb * (${Bk}), ${Fk}.a);` : `${Fk}.rgb *= ${Bk};`
    }

    function Zk(kk, Fk, Bk) {
      return tk(kk) ? `${Fk} = vec4f(${Bk}, ${Fk}.w);` : `${Fk}.xyz = ${Bk};`
    }
  },
  39270: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.ShadersRepository : Rk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.ShadersStore : Rk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.IncludesShadersStore : Rk.IncludesShadersStoreWGSL
      }
    }
    Rk.ShadersRepository = "src/Shaders/", Rk.ShadersStore = {}, Rk.IncludesShadersStore = {}, Rk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Rk.ShadersStoreWGSL = {}, Rk.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);