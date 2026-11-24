export const id = 234;
export const ids = [234];
export const modules = {
  61288: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      DEVTOOLS_SHADERS: () => ik,
      registerDevtoolsShader: () => yk
    });
    var Xk = Ik(39837),
      Tk = Ik(37249);
    const ik = {
      devtoolsNormal: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,Tk.i)(kk,"position","vec3")}\n\t\t\t${(0,Tk.i)(kk,"normal","vec3")}\n\t\t\t${(0,Tk.Kb)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,Tk.Kb)(kk,"world","mat4")}\n\t\t\t${(0,Tk.Qb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Tk.Ub)(kk,`\n\t\t\t\t${(0,Tk.l)(kk)} = ${(0,Tk.Mb)(kk,"worldViewProjection")} * ${(0,Tk.m)(kk,"vec4",(0,Tk.Wb)(kk,"position"),"1.0")};\n\t\t\t\t${(0,Tk.Zb)(kk,"vNormal")} = normalize((${(0,Tk.Mb)(kk,"world")} * ${(0,Tk.m)(kk,"vec4",(0,Tk.Wb)(kk,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Tk.Qb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Tk.T)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,Tk.G)(kk,"vec3","normalColor",`abs(${(0,Tk.X)(kk,"vNormal")})`)}\n\t\t\t\t${(0,Tk.O)(kk)} = ${(0,Tk.m)(kk,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,Tk.i)(kk,"position","vec3")}\n\t\t\t${(0,Tk.Kb)(kk,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Tk.Ub)(kk,`\n\t\t\t\t${(0,Tk.l)(kk)} = ${(0,Tk.Mb)(kk,"worldViewProjection")} * ${(0,Tk.m)(kk,"vec4",(0,Tk.Wb)(kk,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Tk.T)(kk,`\n\t\t\t\t${(0,Tk.O)(kk)} = ${(0,Tk.m)(kk,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(kk) {
        return {
          vertex: `\n\t\t\t${(0,Tk.i)(kk,"position","vec3")}\n\t\t\t${(0,Tk.Kb)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,Tk.Kb)(kk,"world","mat4")}\n\t\t\t${(0,Tk.Kb)(kk,"cameraPosition","vec3")}\n\t\t\t${(0,Tk.Qb)(kk,"vDepth","float","mediump")}\n\n\t\t\t${(0,Tk.Ub)(kk,`\n\t\t\t\t${(0,Tk.l)(kk)} = ${(0,Tk.Mb)(kk,"worldViewProjection")} * ${(0,Tk.m)(kk,"vec4",(0,Tk.Wb)(kk,"position"),"1.0")};\n\t\t\t\t${(0,Tk.G)(kk,"vec3","worldPosition",`(${(0,Tk.Mb)(kk,"world")} * ${(0,Tk.m)(kk,"vec4",(0,Tk.Wb)(kk,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Tk.Zb)(kk,"vDepth")} = distance(worldPosition, ${(0,Tk.Mb)(kk,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Tk.Qb)(kk,"vDepth","float","mediump")}\n\t\t\t${(0,Tk.Kb)(kk,"maxDepth","float")}\n\t\t\t${(0,Tk.Kb)(kk,"minDepth","float")}\n\n\t\t\t${(0,Tk.T)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,Tk.G)(kk,"float","normalizedDepth",`clamp((${(0,Tk.X)(kk,"vDepth")} - ${(0,Tk.Mb)(kk,"minDepth")}) / (${(0,Tk.Mb)(kk,"maxDepth")} - ${(0,Tk.Mb)(kk,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Tk.G)(kk,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Tk.O)(kk)} = ${(0,Tk.m)(kk,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function yk(kk, Fk) {
      const {
        vertex: Ik,
        fragment: Tk
      } = ik[kk](Fk), yk = Xk.b.GetShadersStore(Fk);
      yk[`${kk}VertexShader`] = Ik, yk[`${kk}FragmentShader`] = Tk
    }
  },
  37249: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      $: () => Gk,
      C: () => tk,
      Cb: () => Qk,
      G: () => Lk,
      Gb: () => qk,
      H: () => zk,
      I: () => pk,
      K: () => ik,
      Kb: () => Jk,
      Mb: () => nk,
      O: () => Rk,
      Qb: () => Hk,
      R: () => bk,
      T: () => Kk,
      Ub: () => Pk,
      Wb: () => vk,
      X: () => Ok,
      Zb: () => Ek,
      ab: () => Nk,
      e: () => Xk,
      eb: () => Tk,
      hb: () => uk,
      i: () => wk,
      k: () => Sk,
      l: () => xk,
      lb: () => Wk,
      m: () => ak,
      ob: () => Bk,
      p: () => Uk,
      pb: () => Vk,
      qb: () => sk,
      t: () => Ck,
      tb: () => fk,
      u: () => Zk,
      vb: () => dk,
      y: () => jk,
      yb: () => ck
    });
    const Xk = {
      GLSL: 0,
      WGSL: 1
    };

    function Tk(kk) {
      return kk === Xk.WGSL
    }

    function ik(kk, Fk, Ik) {
      return Tk(kk) ? Ik : Fk
    }
    const yk = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function lk(kk, Fk) {
      if (!Tk(kk)) return Fk;
      const Ik = yk.get(Fk);
      if (!Ik) throw new Error(`No WGSL name for shader type "${Fk}"`);
      return Ik
    }

    function ak(kk, Fk) {
      for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
      return `${lk(kk,Fk)}(${Xk.join(", ")})`
    }

    function qk(kk, Fk) {
      return ak(kk, "int", Fk)
    }

    function Lk(kk, Fk, Ik, Xk, ik) {
      return Tk(kk) ? `var ${Ik}: ${lk(kk,Fk)} = ${Xk};` : `${ek(kk,ik)}${Fk} ${Ik} = ${Xk};`
    }

    function tk(kk, Fk, Ik) {
      return Tk(kk) ? `var ${Ik}: ${lk(kk,Fk)};` : `${Fk} ${Ik};`
    }

    function Zk(kk, Fk, Ik, Xk) {
      return Tk(kk) ? `const ${Ik}: ${lk(kk,Fk)} = ${Xk};` : `const ${Fk} ${Ik} = ${Xk};`
    }

    function jk(kk, Fk, Ik, Xk, ik) {
      if (Tk(kk)) {
        return `fn ${Ik}(${Xk.map((Fk=>`${Fk.name}: ${lk(kk,Fk.type)}`)).join(", ")}) -> ${lk(kk,Fk)} {${ik}}`
      }
      return `${Fk} ${Ik}(${Xk.map((kk=>`${kk.type} ${kk.name}`)).join(", ")}) {${ik}}`
    }

    function ek(kk, Fk) {
      return !Fk || Tk(kk) ? "" : `${Fk} `
    }

    function wk(kk, Fk, Ik, Xk) {
      return Tk(kk) ? `attribute ${Fk}: ${lk(kk,Ik)};` : `attribute ${ek(kk,Xk)}${Ik} ${Fk};`
    }

    function Hk(kk, Fk, Ik, Xk) {
      return Tk(kk) ? `varying ${Fk}: ${lk(kk,Ik)};` : `varying ${ek(kk,Xk)}${Ik} ${Fk};`
    }

    function Jk(kk, Fk, Ik) {
      return Tk(kk) ? `uniform ${Fk}: ${lk(kk,Ik)};` : `uniform ${Ik} ${Fk};`
    }

    function xk(kk) {
      return Tk(kk) ? "vertexOutputs.position" : "gl_Position"
    }

    function Pk(kk, Fk) {
      return Tk(kk) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Fk}}` : `void main() {${Fk}}`
    }

    function Kk(kk, Fk) {
      return Tk(kk) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Fk}}` : `void main() {${Fk}}`
    }

    function Qk(kk, Fk, Ik) {
      if (Tk(kk)) {
        return [`var ${Fk}Sampler: sampler;`, `var ${Fk}: ${"2dArray"===Ik?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Ik?"sampler2DArray":"sampler2D"} ${Fk};`
    }

    function sk(kk, Fk, Ik) {
      return Tk(kk) ? `textureSample(${Fk}, ${Fk}Sampler, ${Ik})` : `texture2D(${Fk}, ${Ik})`
    }

    function Vk(kk, Fk, Ik, Xk, ik) {
      if (Tk(kk)) {
        return `${ik?"textureSampleLevel":"textureSample"}(${Fk}, ${Fk}Sampler, ${Ik}, ${qk(kk,`round(${Xk})`)}${ik?`, ${ik}`:""})`
      }
      const yk = ak(kk, "vec3", Ik, Xk);
      return ik ? `textureLod(${Fk}, ${yk}, ${ik})` : `texture(${Fk}, ${yk})`
    }

    function zk(kk) {
      return Tk(kk) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Sk(kk) {
      return Tk(kk) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function vk(kk, Fk) {
      return Tk(kk) ? `vertexInputs.${Fk}` : Fk
    }

    function Ek(kk, Fk) {
      return Tk(kk) ? `vertexOutputs.${Fk}` : Fk
    }

    function Ok(kk, Fk) {
      return Tk(kk) ? `fragmentInputs.${Fk}` : Fk
    }

    function nk(kk, Fk) {
      return Tk(kk) ? `uniforms.${Fk}` : Fk
    }

    function Gk(kk, Fk, Ik) {
      return Tk(kk) ? `frame.${Fk}` : Ik
    }

    function pk(kk) {
      return Tk(kk) ? "scene.vEyePosition" : "vEyePosition"
    }

    function uk(kk) {
      return Tk(kk) ? "mesh.visibility" : "visibility"
    }

    function bk(kk) {
      return Tk(kk) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Rk(kk) {
      return Tk(kk) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Uk(kk, Fk) {
      return Tk(kk) ? `dpdx(${Fk})` : `dFdx(${Fk})`
    }

    function Ck(kk, Fk) {
      return Tk(kk) ? `dpdy(${Fk})` : `dFdy(${Fk})`
    }

    function Nk(kk, Fk) {
      return Tk(kk) ? `inverseSqrt(${Fk})` : `inversesqrt(${Fk})`
    }

    function ck(kk, Fk, Ik, Xk) {
      return Tk(kk) ? `select(${Xk}, ${Ik}, ${Fk})` : `((${Fk}) ? (${Ik}) : (${Xk}))`
    }

    function Wk(kk, Fk, Ik) {
      return Tk(kk) ? `((${Fk}) - (${Ik}) * floor((${Fk}) / (${Ik})))` : `mod(${Fk}, ${Ik})`
    }

    function fk(kk, Fk, Ik) {
      return Tk(kk) ? `${Fk} = vec4f(${Ik}, ${Fk}.a);` : `${Fk}.rgb = ${Ik};`
    }

    function Bk(kk, Fk, Ik) {
      return Tk(kk) ? `${Fk} = vec4f(${Fk}.rgb * (${Ik}), ${Fk}.a);` : `${Fk}.rgb *= ${Ik};`
    }

    function dk(kk, Fk, Ik) {
      return Tk(kk) ? `${Fk} = vec4f(${Ik}, ${Fk}.w);` : `${Fk}.xyz = ${Ik};`
    }
  },
  39837: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Xk.ShadersRepository : Xk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Xk.ShadersStore : Xk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Xk.IncludesShadersStore : Xk.IncludesShadersStoreWGSL
      }
    }
    Xk.ShadersRepository = "src/Shaders/", Xk.ShadersStore = {}, Xk.IncludesShadersStore = {}, Xk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Xk.ShadersStoreWGSL = {}, Xk.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);