export const id = 234;
export const ids = [234];
export const modules = {
  61335: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      DEVTOOLS_SHADERS: () => am,
      registerDevtoolsShader: () => xm
    });
    var hm = fm(39960),
      Am = fm(37260);
    const am = {
      devtoolsNormal: function(mm) {
        return {
          vertex: `\n\t\t\t${(0,Am.e)(mm,"position","vec3")}\n\t\t\t${(0,Am.e)(mm,"normal","vec3")}\n\t\t\t${(0,Am.wb)(mm,"worldViewProjection","mat4")}\n\t\t\t${(0,Am.wb)(mm,"world","mat4")}\n\t\t\t${(0,Am.Bb)(mm,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Am.Fb)(mm,`\n\t\t\t\t${(0,Am.h)(mm)} = ${(0,Am.Ab)(mm,"worldViewProjection")} * ${(0,Am.j)(mm,"vec4",(0,Am.Ib)(mm,"position"),"1.0")};\n\t\t\t\t${(0,Am.Lb)(mm,"vNormal")} = normalize((${(0,Am.Ab)(mm,"world")} * ${(0,Am.j)(mm,"vec4",(0,Am.Ib)(mm,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Am.Bb)(mm,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Am.K)(mm,`\n\t\t\t\t\n\t\t\t\t${(0,Am.u)(mm,"vec3","normalColor",`abs(${(0,Am.O)(mm,"vNormal")})`)}\n\t\t\t\t${(0,Am.F)(mm)} = ${(0,Am.j)(mm,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(mm) {
        return {
          vertex: `\n\t\t\t${(0,Am.e)(mm,"position","vec3")}\n\t\t\t${(0,Am.wb)(mm,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Am.Fb)(mm,`\n\t\t\t\t${(0,Am.h)(mm)} = ${(0,Am.Ab)(mm,"worldViewProjection")} * ${(0,Am.j)(mm,"vec4",(0,Am.Ib)(mm,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Am.K)(mm,`\n\t\t\t\t${(0,Am.F)(mm)} = ${(0,Am.j)(mm,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(mm) {
        return {
          vertex: `\n\t\t\t${(0,Am.e)(mm,"position","vec3")}\n\t\t\t${(0,Am.wb)(mm,"worldViewProjection","mat4")}\n\t\t\t${(0,Am.wb)(mm,"world","mat4")}\n\t\t\t${(0,Am.wb)(mm,"cameraPosition","vec3")}\n\t\t\t${(0,Am.Bb)(mm,"vDepth","float","mediump")}\n\n\t\t\t${(0,Am.Fb)(mm,`\n\t\t\t\t${(0,Am.h)(mm)} = ${(0,Am.Ab)(mm,"worldViewProjection")} * ${(0,Am.j)(mm,"vec4",(0,Am.Ib)(mm,"position"),"1.0")};\n\t\t\t\t${(0,Am.u)(mm,"vec3","worldPosition",`(${(0,Am.Ab)(mm,"world")} * ${(0,Am.j)(mm,"vec4",(0,Am.Ib)(mm,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Am.Lb)(mm,"vDepth")} = distance(worldPosition, ${(0,Am.Ab)(mm,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Am.Bb)(mm,"vDepth","float","mediump")}\n\t\t\t${(0,Am.wb)(mm,"maxDepth","float")}\n\t\t\t${(0,Am.wb)(mm,"minDepth","float")}\n\n\t\t\t${(0,Am.K)(mm,`\n\t\t\t\t\n\t\t\t\t${(0,Am.u)(mm,"float","normalizedDepth",`clamp((${(0,Am.O)(mm,"vDepth")} - ${(0,Am.Ab)(mm,"minDepth")}) / (${(0,Am.Ab)(mm,"maxDepth")} - ${(0,Am.Ab)(mm,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Am.u)(mm,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Am.F)(mm)} = ${(0,Am.j)(mm,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function xm(mm, Tm) {
      const {
        vertex: fm,
        fragment: Am
      } = am[mm](Tm), xm = hm.e.GetShadersStore(Tm);
      xm[`${mm}VertexShader`] = fm, xm[`${mm}FragmentShader`] = Am
    }
  },
  37260: (mm, Tm, fm) => {
    fm.d(Tm, {
      $: () => Jm,
      A: () => Nm,
      Ab: () => Sm,
      B: () => am,
      Bb: () => qm,
      F: () => Pm,
      Fb: () => Im,
      I: () => Xm,
      Ib: () => Zm,
      K: () => Km,
      Lb: () => km,
      O: () => bm,
      Q: () => em,
      S: () => Cm,
      T: () => Am,
      X: () => Gm,
      Y: () => sm,
      _: () => Mm,
      b: () => hm,
      db: () => nm,
      e: () => Ym,
      g: () => zm,
      gb: () => lm,
      h: () => Vm,
      j: () => Dm,
      jb: () => um,
      l: () => Hm,
      n: () => ym,
      nb: () => rm,
      p: () => Em,
      r: () => om,
      rb: () => Qm,
      t: () => pm,
      tb: () => im,
      u: () => Rm,
      w: () => cm,
      wb: () => jm
    });
    const hm = {
      GLSL: 0,
      WGSL: 1
    };

    function Am(mm) {
      return mm === hm.WGSL
    }

    function am(mm, Tm, fm) {
      return Am(mm) ? fm : Tm
    }
    const xm = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function wm(mm, Tm) {
      if (!Am(mm)) return Tm;
      const fm = xm.get(Tm);
      if (!fm) throw new Error(`No WGSL name for shader type "${Tm}"`);
      return fm
    }

    function Dm(mm, Tm) {
      for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
      return `${wm(mm,Tm)}(${hm.join(", ")})`
    }

    function im(mm, Tm) {
      return Dm(mm, "int", Tm)
    }

    function Rm(mm, Tm, fm, hm, am) {
      return Am(mm) ? `var ${fm}: ${wm(mm,Tm)} = ${hm};` : `${Om(mm,am)}${Tm} ${fm} = ${hm};`
    }

    function pm(mm, Tm, fm) {
      return Am(mm) ? `var ${fm}: ${wm(mm,Tm)};` : `${Tm} ${fm};`
    }

    function Em(mm, Tm, fm, hm) {
      return Am(mm) ? `const ${fm}: ${wm(mm,Tm)} = ${hm};` : `const ${Tm} ${fm} = ${hm};`
    }

    function om(mm, Tm, fm, hm, am) {
      if (Am(mm)) {
        return `fn ${fm}(${hm.map((Tm=>`${Tm.name}: ${wm(mm,Tm.type)}`)).join(", ")}) -> ${wm(mm,Tm)} {${am}}`
      }
      return `${Tm} ${fm}(${hm.map((mm=>`${mm.type} ${mm.name}`)).join(", ")}) {${am}}`
    }

    function Om(mm, Tm) {
      return !Tm || Am(mm) ? "" : `${Tm} `
    }

    function Ym(mm, Tm, fm, hm) {
      return Am(mm) ? `attribute ${Tm}: ${wm(mm,fm)};` : `attribute ${Om(mm,hm)}${fm} ${Tm};`
    }

    function qm(mm, Tm, fm, hm) {
      return Am(mm) ? `varying ${Tm}: ${wm(mm,fm)};` : `varying ${Om(mm,hm)}${fm} ${Tm};`
    }

    function jm(mm, Tm, fm) {
      return Am(mm) ? `uniform ${Tm}: ${wm(mm,fm)};` : `uniform ${fm} ${Tm};`
    }

    function Vm(mm) {
      return Am(mm) ? "vertexOutputs.position" : "gl_Position"
    }

    function Im(mm, Tm) {
      return Am(mm) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Tm}}` : `void main() {${Tm}}`
    }

    function Km(mm, Tm) {
      return Am(mm) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Tm}}` : `void main() {${Tm}}`
    }

    function Qm(mm, Tm, fm) {
      if (Am(mm)) {
        return [`var ${Tm}Sampler: sampler;`, `var ${Tm}: ${"2dArray"===fm?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===fm?"sampler2DArray":"sampler2D"} ${Tm};`
    }

    function nm(mm, Tm, fm) {
      return Am(mm) ? `textureSample(${Tm}, ${Tm}Sampler, ${fm})` : `texture2D(${Tm}, ${fm})`
    }

    function Jm(mm, Tm, fm, hm, am) {
      if (Am(mm)) {
        return `${am?"textureSampleLevel":"textureSample"}(${Tm}, ${Tm}Sampler, ${fm}, ${im(mm,`round(${hm})`)}${am?`, ${am}`:""})`
      }
      const xm = Dm(mm, "vec3", fm, hm);
      return am ? `textureLod(${Tm}, ${xm}, ${am})` : `texture(${Tm}, ${xm})`
    }

    function cm(mm) {
      return Am(mm) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function zm(mm) {
      return Am(mm) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Zm(mm, Tm) {
      return Am(mm) ? `vertexInputs.${Tm}` : Tm
    }

    function km(mm, Tm) {
      return Am(mm) ? `vertexOutputs.${Tm}` : Tm
    }

    function bm(mm, Tm) {
      return Am(mm) ? `fragmentInputs.${Tm}` : Tm
    }

    function Sm(mm, Tm) {
      return Am(mm) ? `uniforms.${Tm}` : Tm
    }

    function em(mm, Tm, fm) {
      return Am(mm) ? `frame.${Tm}` : fm
    }

    function Nm(mm) {
      return Am(mm) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Gm(mm) {
      return Am(mm) ? "mesh.visibility" : "visibility"
    }

    function Xm(mm) {
      return Am(mm) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Pm(mm) {
      return Am(mm) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Hm(mm, Tm) {
      return Am(mm) ? `dpdx(${Tm})` : `dFdx(${Tm})`
    }

    function ym(mm, Tm) {
      return Am(mm) ? `dpdy(${Tm})` : `dFdy(${Tm})`
    }

    function Cm(mm, Tm) {
      return Am(mm) ? `inverseSqrt(${Tm})` : `inversesqrt(${Tm})`
    }

    function rm(mm, Tm, fm, hm) {
      return Am(mm) ? `select(${hm}, ${fm}, ${Tm})` : `((${Tm}) ? (${fm}) : (${hm}))`
    }

    function sm(mm, Tm, fm) {
      return Am(mm) ? `((${Tm}) - (${fm}) * floor((${Tm}) / (${fm})))` : `mod(${Tm}, ${fm})`
    }

    function lm(mm, Tm, fm) {
      return Am(mm) ? `${Tm} = vec4f(${fm}, ${Tm}.a);` : `${Tm}.rgb = ${fm};`
    }

    function Mm(mm, Tm, fm) {
      return Am(mm) ? `${Tm} = vec4f(${Tm}.rgb * (${fm}), ${Tm}.a);` : `${Tm}.rgb *= ${fm};`
    }

    function um(mm, Tm, fm) {
      return Am(mm) ? `${Tm} = vec4f(${fm}, ${Tm}.w);` : `${Tm}.xyz = ${fm};`
    }
  },
  39960: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.ShadersRepository : hm.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.ShadersStore : hm.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.IncludesShadersStore : hm.IncludesShadersStoreWGSL
      }
    }
    hm.ShadersRepository = "src/Shaders/", hm.ShadersStore = {}, hm.IncludesShadersStore = {}, hm.ShadersRepositoryWGSL = "src/ShadersWGSL/", hm.ShadersStoreWGSL = {}, hm.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);