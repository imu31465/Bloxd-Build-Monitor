export const id = 229;
export const ids = [229];
export const modules = {
  60893: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      DEVTOOLS_SHADERS: () => Wd,
      registerDevtoolsShader: () => Pd
    });
    var pd = kd(39829),
      Nd = kd(37347);
    const Wd = {
      devtoolsNormal: function(dd) {
        return {
          vertex: `\n\t\t\t${(0,Nd.h)(dd,"position","vec3")}\n\t\t\t${(0,Nd.h)(dd,"normal","vec3")}\n\t\t\t${(0,Nd.Ab)(dd,"worldViewProjection","mat4")}\n\t\t\t${(0,Nd.Ab)(dd,"world","mat4")}\n\t\t\t${(0,Nd.Fb)(dd,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Nd.Ib)(dd,`\n\t\t\t\t${(0,Nd.m)(dd)} = ${(0,Nd.Cb)(dd,"worldViewProjection")} * ${(0,Nd.n)(dd,"vec4",(0,Nd.Jb)(dd,"position"),"1.0")};\n\t\t\t\t${(0,Nd.Nb)(dd,"vNormal")} = normalize((${(0,Nd.Cb)(dd,"world")} * ${(0,Nd.n)(dd,"vec4",(0,Nd.Jb)(dd,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Nd.Fb)(dd,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Nd.K)(dd,`\n\t\t\t\t\n\t\t\t\t${(0,Nd.z)(dd,"vec3","normalColor",`abs(${(0,Nd.M)(dd,"vNormal")})`)}\n\t\t\t\t${(0,Nd.H)(dd)} = ${(0,Nd.n)(dd,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(dd) {
        return {
          vertex: `\n\t\t\t${(0,Nd.h)(dd,"position","vec3")}\n\t\t\t${(0,Nd.Ab)(dd,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Nd.Ib)(dd,`\n\t\t\t\t${(0,Nd.m)(dd)} = ${(0,Nd.Cb)(dd,"worldViewProjection")} * ${(0,Nd.n)(dd,"vec4",(0,Nd.Jb)(dd,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Nd.K)(dd,`\n\t\t\t\t${(0,Nd.H)(dd)} = ${(0,Nd.n)(dd,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(dd) {
        return {
          vertex: `\n\t\t\t${(0,Nd.h)(dd,"position","vec3")}\n\t\t\t${(0,Nd.Ab)(dd,"worldViewProjection","mat4")}\n\t\t\t${(0,Nd.Ab)(dd,"world","mat4")}\n\t\t\t${(0,Nd.Ab)(dd,"cameraPosition","vec3")}\n\t\t\t${(0,Nd.Fb)(dd,"vDepth","float","mediump")}\n\n\t\t\t${(0,Nd.Ib)(dd,`\n\t\t\t\t${(0,Nd.m)(dd)} = ${(0,Nd.Cb)(dd,"worldViewProjection")} * ${(0,Nd.n)(dd,"vec4",(0,Nd.Jb)(dd,"position"),"1.0")};\n\t\t\t\t${(0,Nd.z)(dd,"vec3","worldPosition",`(${(0,Nd.Cb)(dd,"world")} * ${(0,Nd.n)(dd,"vec4",(0,Nd.Jb)(dd,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Nd.Nb)(dd,"vDepth")} = distance(worldPosition, ${(0,Nd.Cb)(dd,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Nd.Fb)(dd,"vDepth","float","mediump")}\n\t\t\t${(0,Nd.Ab)(dd,"maxDepth","float")}\n\t\t\t${(0,Nd.Ab)(dd,"minDepth","float")}\n\n\t\t\t${(0,Nd.K)(dd,`\n\t\t\t\t\n\t\t\t\t${(0,Nd.z)(dd,"float","normalizedDepth",`clamp((${(0,Nd.M)(dd,"vDepth")} - ${(0,Nd.Cb)(dd,"minDepth")}) / (${(0,Nd.Cb)(dd,"maxDepth")} - ${(0,Nd.Cb)(dd,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Nd.z)(dd,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Nd.H)(dd)} = ${(0,Nd.n)(dd,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Pd(dd, Jd) {
      const {
        vertex: kd,
        fragment: Nd
      } = Wd[dd](Jd), Pd = pd.c.GetShadersStore(Jd);
      Pd[`${dd}VertexShader`] = kd, Pd[`${dd}FragmentShader`] = Nd
    }
  },
  37347: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => sd,
      Ab: () => Rd,
      C: () => Sd,
      Cb: () => md,
      F: () => Wd,
      Fb: () => ed,
      H: () => fd,
      I: () => Xd,
      Ib: () => Gd,
      Jb: () => Md,
      K: () => vd,
      M: () => Yd,
      Nb: () => Fd,
      Q: () => bd,
      U: () => yd,
      V: () => Nd,
      Z: () => jd,
      ab: () => Td,
      d: () => pd,
      db: () => cd,
      h: () => Od,
      hb: () => Bd,
      ib: () => qd,
      j: () => ad,
      m: () => Id,
      mb: () => Ed,
      n: () => gd,
      ob: () => hd,
      p: () => nd,
      sb: () => Dd,
      t: () => Ud,
      u: () => ld,
      vb: () => xd,
      w: () => Qd,
      y: () => od,
      yb: () => Cd,
      z: () => Kd
    });
    const pd = {
      GLSL: 0,
      WGSL: 1
    };

    function Nd(dd) {
      return dd === pd.WGSL
    }

    function Wd(dd, Jd, kd) {
      return Nd(dd) ? kd : Jd
    }
    const Pd = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Zd(dd, Jd) {
      if (!Nd(dd)) return Jd;
      const kd = Pd.get(Jd);
      if (!kd) throw new Error(`No WGSL name for shader type "${Jd}"`);
      return kd
    }

    function gd(dd, Jd) {
      for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
      return `${Zd(dd,Jd)}(${pd.join(", ")})`
    }

    function Cd(dd, Jd) {
      return gd(dd, "int", Jd)
    }

    function Kd(dd, Jd, kd, pd, Wd) {
      return Nd(dd) ? `var ${kd}: ${Zd(dd,Jd)} = ${pd};` : `${Ld(dd,Wd)}${Jd} ${kd} = ${pd};`
    }

    function od(dd, Jd, kd) {
      return Nd(dd) ? `var ${kd}: ${Zd(dd,Jd)};` : `${Jd} ${kd};`
    }

    function ld(dd, Jd, kd, pd) {
      return Nd(dd) ? `const ${kd}: ${Zd(dd,Jd)} = ${pd};` : `const ${Jd} ${kd} = ${pd};`
    }

    function Qd(dd, Jd, kd, pd, Wd) {
      if (Nd(dd)) {
        return `fn ${kd}(${pd.map((Jd=>`${Jd.name}: ${Zd(dd,Jd.type)}`)).join(", ")}) -> ${Zd(dd,Jd)} {${Wd}}`
      }
      return `${Jd} ${kd}(${pd.map((dd=>`${dd.type} ${dd.name}`)).join(", ")}) {${Wd}}`
    }

    function Ld(dd, Jd) {
      return !Jd || Nd(dd) ? "" : `${Jd} `
    }

    function Od(dd, Jd, kd, pd) {
      return Nd(dd) ? `attribute ${Jd}: ${Zd(dd,kd)};` : `attribute ${Ld(dd,pd)}${kd} ${Jd};`
    }

    function ed(dd, Jd, kd, pd) {
      return Nd(dd) ? `varying ${Jd}: ${Zd(dd,kd)};` : `varying ${Ld(dd,pd)}${kd} ${Jd};`
    }

    function Rd(dd, Jd, kd) {
      return Nd(dd) ? `uniform ${Jd}: ${Zd(dd,kd)};` : `uniform ${kd} ${Jd};`
    }

    function Id(dd) {
      return Nd(dd) ? "vertexOutputs.position" : "gl_Position"
    }

    function Gd(dd, Jd) {
      return Nd(dd) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Jd}}` : `void main() {${Jd}}`
    }

    function vd(dd, Jd) {
      return Nd(dd) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Jd}}` : `void main() {${Jd}}`
    }

    function xd(dd, Jd, kd) {
      if (Nd(dd)) {
        return [`var ${Jd}Sampler: sampler;`, `var ${Jd}: ${"2dArray"===kd?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===kd?"sampler2DArray":"sampler2D"} ${Jd};`
    }

    function qd(dd, Jd, kd) {
      return Nd(dd) ? `textureSample(${Jd}, ${Jd}Sampler, ${kd})` : `texture2D(${Jd}, ${kd})`
    }

    function Bd(dd, Jd, kd, pd, Wd) {
      if (Nd(dd)) {
        return `${Wd?"textureSampleLevel":"textureSample"}(${Jd}, ${Jd}Sampler, ${kd}, ${Cd(dd,`round(${pd})`)}${Wd?`, ${Wd}`:""})`
      }
      const Pd = gd(dd, "vec3", kd, pd);
      return Wd ? `textureLod(${Jd}, ${Pd}, ${Wd})` : `texture(${Jd}, ${Pd})`
    }

    function sd(dd) {
      return Nd(dd) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function ad(dd) {
      return Nd(dd) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Md(dd, Jd) {
      return Nd(dd) ? `vertexInputs.${Jd}` : Jd
    }

    function Fd(dd, Jd) {
      return Nd(dd) ? `vertexOutputs.${Jd}` : Jd
    }

    function Yd(dd, Jd) {
      return Nd(dd) ? `fragmentInputs.${Jd}` : Jd
    }

    function md(dd, Jd) {
      return Nd(dd) ? `uniforms.${Jd}` : Jd
    }

    function bd(dd, Jd, kd) {
      return Nd(dd) ? `frame.${Jd}` : kd
    }

    function Sd(dd) {
      return Nd(dd) ? "scene.vEyePosition" : "vEyePosition"
    }

    function jd(dd) {
      return Nd(dd) ? "mesh.visibility" : "visibility"
    }

    function Xd(dd) {
      return Nd(dd) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function fd(dd) {
      return Nd(dd) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function nd(dd, Jd) {
      return Nd(dd) ? `dpdx(${Jd})` : `dFdx(${Jd})`
    }

    function Ud(dd, Jd) {
      return Nd(dd) ? `dpdy(${Jd})` : `dFdy(${Jd})`
    }

    function yd(dd, Jd) {
      return Nd(dd) ? `inverseSqrt(${Jd})` : `inversesqrt(${Jd})`
    }

    function Dd(dd, Jd, kd, pd) {
      return Nd(dd) ? `select(${pd}, ${kd}, ${Jd})` : `((${Jd}) ? (${kd}) : (${pd}))`
    }

    function Td(dd, Jd, kd) {
      return Nd(dd) ? `((${Jd}) - (${kd}) * floor((${Jd}) / (${kd})))` : `mod(${Jd}, ${kd})`
    }

    function Ed(dd, Jd, kd) {
      return Nd(dd) ? `${Jd} = vec4f(${kd}, ${Jd}.a);` : `${Jd}.rgb = ${kd};`
    }

    function cd(dd, Jd, kd) {
      return Nd(dd) ? `${Jd} = vec4f(${Jd}.rgb * (${kd}), ${Jd}.a);` : `${Jd}.rgb *= ${kd};`
    }

    function hd(dd, Jd, kd) {
      return Nd(dd) ? `${Jd} = vec4f(${kd}, ${Jd}.w);` : `${Jd}.xyz = ${kd};`
    }
  },
  39829: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.ShadersRepository : pd.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.ShadersStore : pd.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.IncludesShadersStore : pd.IncludesShadersStoreWGSL
      }
    }
    pd.ShadersRepository = "src/Shaders/", pd.ShadersStore = {}, pd.IncludesShadersStore = {}, pd.ShadersRepositoryWGSL = "src/ShadersWGSL/", pd.ShadersStoreWGSL = {}, pd.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);