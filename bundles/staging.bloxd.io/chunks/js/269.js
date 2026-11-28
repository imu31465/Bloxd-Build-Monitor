export const id = 269;
export const ids = [269];
export const modules = {
  64786: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      DEVTOOLS_SHADERS: () => Rd,
      registerDevtoolsShader: () => Xd
    });
    var Wd = md(41785),
      Fd = md(38752);
    const Rd = {
      devtoolsNormal: function(dd) {
        return {
          vertex: `\n\t\t\t${(0,Fd.f)(dd,"position","vec3")}\n\t\t\t${(0,Fd.f)(dd,"normal","vec3")}\n\t\t\t${(0,Fd.nb)(dd,"worldViewProjection","mat4")}\n\t\t\t${(0,Fd.nb)(dd,"world","mat4")}\n\t\t\t${(0,Fd.qb)(dd,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Fd.ub)(dd,`\n\t\t\t\t${(0,Fd.h)(dd)} = ${(0,Fd.ob)(dd,"worldViewProjection")} * ${(0,Fd.l)(dd,"vec4",(0,Fd.wb)(dd,"position"),"1.0")};\n\t\t\t\t${(0,Fd.Ab)(dd,"vNormal")} = normalize((${(0,Fd.ob)(dd,"world")} * ${(0,Fd.l)(dd,"vec4",(0,Fd.wb)(dd,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Fd.qb)(dd,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Fd.L)(dd,`\n\t\t\t\t\n\t\t\t\t${(0,Fd.z)(dd,"vec3","normalColor",`abs(${(0,Fd.O)(dd,"vNormal")})`)}\n\t\t\t\t${(0,Fd.G)(dd)} = ${(0,Fd.l)(dd,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(dd) {
        return {
          vertex: `\n\t\t\t${(0,Fd.f)(dd,"position","vec3")}\n\t\t\t${(0,Fd.nb)(dd,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Fd.ub)(dd,`\n\t\t\t\t${(0,Fd.h)(dd)} = ${(0,Fd.ob)(dd,"worldViewProjection")} * ${(0,Fd.l)(dd,"vec4",(0,Fd.wb)(dd,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Fd.L)(dd,`\n\t\t\t\t${(0,Fd.G)(dd)} = ${(0,Fd.l)(dd,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(dd) {
        return {
          vertex: `\n\t\t\t${(0,Fd.f)(dd,"position","vec3")}\n\t\t\t${(0,Fd.nb)(dd,"worldViewProjection","mat4")}\n\t\t\t${(0,Fd.nb)(dd,"world","mat4")}\n\t\t\t${(0,Fd.nb)(dd,"cameraPosition","vec3")}\n\t\t\t${(0,Fd.qb)(dd,"vDepth","float","mediump")}\n\n\t\t\t${(0,Fd.ub)(dd,`\n\t\t\t\t${(0,Fd.h)(dd)} = ${(0,Fd.ob)(dd,"worldViewProjection")} * ${(0,Fd.l)(dd,"vec4",(0,Fd.wb)(dd,"position"),"1.0")};\n\t\t\t\t${(0,Fd.z)(dd,"vec3","worldPosition",`(${(0,Fd.ob)(dd,"world")} * ${(0,Fd.l)(dd,"vec4",(0,Fd.wb)(dd,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Fd.Ab)(dd,"vDepth")} = distance(worldPosition, ${(0,Fd.ob)(dd,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Fd.qb)(dd,"vDepth","float","mediump")}\n\t\t\t${(0,Fd.nb)(dd,"maxDepth","float")}\n\t\t\t${(0,Fd.nb)(dd,"minDepth","float")}\n\n\t\t\t${(0,Fd.L)(dd,`\n\t\t\t\t\n\t\t\t\t${(0,Fd.z)(dd,"float","normalizedDepth",`clamp((${(0,Fd.O)(dd,"vDepth")} - ${(0,Fd.ob)(dd,"minDepth")}) / (${(0,Fd.ob)(dd,"maxDepth")} - ${(0,Fd.ob)(dd,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Fd.z)(dd,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Fd.G)(dd)} = ${(0,Fd.l)(dd,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Xd(dd, Od) {
      const {
        vertex: md,
        fragment: Fd
      } = Rd[dd](Od), Xd = Wd.e.GetShadersStore(Od);
      Xd[`${dd}VertexShader`] = md, Xd[`${dd}FragmentShader`] = Fd
    }
  },
  38752: (dd, Od, md) => {
    md.d(Od, {
      $: () => Ed,
      A: () => Jd,
      Ab: () => Bd,
      C: () => Vd,
      F: () => Rd,
      G: () => Gd,
      K: () => rd,
      L: () => Yd,
      O: () => Sd,
      Q: () => ud,
      R: () => Pd,
      S: () => Fd,
      W: () => Ad,
      Z: () => cd,
      _: () => Dd,
      bb: () => wd,
      db: () => jd,
      e: () => Wd,
      eb: () => ed,
      f: () => Hd,
      fb: () => zd,
      g: () => Ud,
      h: () => Td,
      jb: () => gd,
      l: () => hd,
      mb: () => vd,
      n: () => nd,
      nb: () => bd,
      o: () => Ld,
      ob: () => sd,
      qb: () => yd,
      s: () => od,
      t: () => Nd,
      ub: () => pd,
      v: () => td,
      wb: () => xd,
      z: () => Qd
    });
    const Wd = {
      GLSL: 0,
      WGSL: 1
    };

    function Fd(dd) {
      return dd === Wd.WGSL
    }

    function Rd(dd, Od, md) {
      return Fd(dd) ? md : Od
    }
    const Xd = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Kd(dd, Od) {
      if (!Fd(dd)) return Od;
      const md = Xd.get(Od);
      if (!md) throw new Error(`No WGSL name for shader type "${Od}"`);
      return md
    }

    function hd(dd, Od) {
      for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
      return `${Kd(dd,Od)}(${Wd.join(", ")})`
    }

    function vd(dd, Od) {
      return hd(dd, "int", Od)
    }

    function Qd(dd, Od, md, Wd, Rd) {
      return Fd(dd) ? `var ${md}: ${Kd(dd,Od)} = ${Wd};` : `${qd(dd,Rd)}${Od} ${md} = ${Wd};`
    }

    function td(dd, Od, md) {
      return Fd(dd) ? `var ${md}: ${Kd(dd,Od)};` : `${Od} ${md};`
    }

    function od(dd, Od, md, Wd) {
      return Fd(dd) ? `const ${md}: ${Kd(dd,Od)} = ${Wd};` : `const ${Od} ${md} = ${Wd};`
    }

    function Nd(dd, Od, md, Wd, Rd) {
      if (Fd(dd)) {
        return `fn ${md}(${Wd.map((Od=>`${Od.name}: ${Kd(dd,Od.type)}`)).join(", ")}) -> ${Kd(dd,Od)} {${Rd}}`
      }
      return `${Od} ${md}(${Wd.map((dd=>`${dd.type} ${dd.name}`)).join(", ")}) {${Rd}}`
    }

    function qd(dd, Od) {
      return !Od || Fd(dd) ? "" : `${Od} `
    }

    function Hd(dd, Od, md, Wd) {
      return Fd(dd) ? `attribute ${Od}: ${Kd(dd,md)};` : `attribute ${qd(dd,Wd)}${md} ${Od};`
    }

    function yd(dd, Od, md, Wd) {
      return Fd(dd) ? `varying ${Od}: ${Kd(dd,md)};` : `varying ${qd(dd,Wd)}${md} ${Od};`
    }

    function bd(dd, Od, md) {
      return Fd(dd) ? `uniform ${Od}: ${Kd(dd,md)};` : `uniform ${md} ${Od};`
    }

    function Td(dd) {
      return Fd(dd) ? "vertexOutputs.position" : "gl_Position"
    }

    function pd(dd, Od) {
      return Fd(dd) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Od}}` : `void main() {${Od}}`
    }

    function Yd(dd, Od) {
      return Fd(dd) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Od}}` : `void main() {${Od}}`
    }

    function gd(dd, Od, md) {
      if (Fd(dd)) {
        return [`var ${Od}Sampler: sampler;`, `var ${Od}: ${"2dArray"===md?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===md?"sampler2DArray":"sampler2D"} ${Od};`
    }

    function wd(dd, Od, md) {
      return Fd(dd) ? `textureSample(${Od}, ${Od}Sampler, ${md})` : `texture2D(${Od}, ${md})`
    }

    function Ed(dd, Od, md, Wd, Rd) {
      if (Fd(dd)) {
        return `${Rd?"textureSampleLevel":"textureSample"}(${Od}, ${Od}Sampler, ${md}, ${vd(dd,`round(${Wd})`)}${Rd?`, ${Rd}`:""})`
      }
      const Xd = hd(dd, "vec3", md, Wd);
      return Rd ? `textureLod(${Od}, ${Xd}, ${Rd})` : `texture(${Od}, ${Xd})`
    }

    function Jd(dd) {
      return Fd(dd) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Ud(dd) {
      return Fd(dd) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function xd(dd, Od) {
      return Fd(dd) ? `vertexInputs.${Od}` : Od
    }

    function Bd(dd, Od) {
      return Fd(dd) ? `vertexOutputs.${Od}` : Od
    }

    function Sd(dd, Od) {
      return Fd(dd) ? `fragmentInputs.${Od}` : Od
    }

    function sd(dd, Od) {
      return Fd(dd) ? `uniforms.${Od}` : Od
    }

    function ud(dd, Od, md) {
      return Fd(dd) ? `frame.${Od}` : md
    }

    function Vd(dd) {
      return Fd(dd) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Ad(dd) {
      return Fd(dd) ? "mesh.visibility" : "visibility"
    }

    function rd(dd) {
      return Fd(dd) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Gd(dd) {
      return Fd(dd) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function nd(dd, Od) {
      return Fd(dd) ? `dpdx(${Od})` : `dFdx(${Od})`
    }

    function Ld(dd, Od) {
      return Fd(dd) ? `dpdy(${Od})` : `dFdy(${Od})`
    }

    function Pd(dd, Od) {
      return Fd(dd) ? `inverseSqrt(${Od})` : `inversesqrt(${Od})`
    }

    function zd(dd, Od, md, Wd) {
      return Fd(dd) ? `select(${Wd}, ${md}, ${Od})` : `((${Od}) ? (${md}) : (${Wd}))`
    }

    function cd(dd, Od, md) {
      return Fd(dd) ? `((${Od}) - (${md}) * floor((${Od}) / (${md})))` : `mod(${Od}, ${md})`
    }

    function jd(dd, Od, md) {
      return Fd(dd) ? `${Od} = vec4f(${md}, ${Od}.a);` : `${Od}.rgb = ${md};`
    }

    function Dd(dd, Od, md) {
      return Fd(dd) ? `${Od} = vec4f(${Od}.rgb * (${md}), ${Od}.a);` : `${Od}.rgb *= ${md};`
    }

    function ed(dd, Od, md) {
      return Fd(dd) ? `${Od} = vec4f(${md}, ${Od}.w);` : `${Od}.xyz = ${md};`
    }
  },
  41785: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.ShadersRepository : Wd.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.ShadersStore : Wd.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.IncludesShadersStore : Wd.IncludesShadersStoreWGSL
      }
    }
    Wd.ShadersRepository = "src/Shaders/", Wd.ShadersStore = {}, Wd.IncludesShadersStore = {}, Wd.ShadersRepositoryWGSL = "src/ShadersWGSL/", Wd.ShadersStoreWGSL = {}, Wd.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);