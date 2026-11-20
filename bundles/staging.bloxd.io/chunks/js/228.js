export const id = 228;
export const ids = [228];
export const modules = {
  60594: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      DEVTOOLS_SHADERS: () => ab,
      registerDevtoolsShader: () => Tb
    });
    var kb = sb(39267),
      Wb = sb(36742);
    const ab = {
      devtoolsNormal: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Wb.f)(bb,"position","vec3")}\n\t\t\t${(0,Wb.f)(bb,"normal","vec3")}\n\t\t\t${(0,Wb.pb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Wb.pb)(bb,"world","mat4")}\n\t\t\t${(0,Wb.wb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wb.yb)(bb,`\n\t\t\t\t${(0,Wb.j)(bb)} = ${(0,Wb.sb)(bb,"worldViewProjection")} * ${(0,Wb.l)(bb,"vec4",(0,Wb.Bb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Wb.Fb)(bb,"vNormal")} = normalize((${(0,Wb.sb)(bb,"world")} * ${(0,Wb.l)(bb,"vec4",(0,Wb.Bb)(bb,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wb.wb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wb.O)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Wb.A)(bb,"vec3","normalColor",`abs(${(0,Wb.S)(bb,"vNormal")})`)}\n\t\t\t\t${(0,Wb.H)(bb)} = ${(0,Wb.l)(bb,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Wb.f)(bb,"position","vec3")}\n\t\t\t${(0,Wb.pb)(bb,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Wb.yb)(bb,`\n\t\t\t\t${(0,Wb.j)(bb)} = ${(0,Wb.sb)(bb,"worldViewProjection")} * ${(0,Wb.l)(bb,"vec4",(0,Wb.Bb)(bb,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wb.O)(bb,`\n\t\t\t\t${(0,Wb.H)(bb)} = ${(0,Wb.l)(bb,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Wb.f)(bb,"position","vec3")}\n\t\t\t${(0,Wb.pb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Wb.pb)(bb,"world","mat4")}\n\t\t\t${(0,Wb.pb)(bb,"cameraPosition","vec3")}\n\t\t\t${(0,Wb.wb)(bb,"vDepth","float","mediump")}\n\n\t\t\t${(0,Wb.yb)(bb,`\n\t\t\t\t${(0,Wb.j)(bb)} = ${(0,Wb.sb)(bb,"worldViewProjection")} * ${(0,Wb.l)(bb,"vec4",(0,Wb.Bb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Wb.A)(bb,"vec3","worldPosition",`(${(0,Wb.sb)(bb,"world")} * ${(0,Wb.l)(bb,"vec4",(0,Wb.Bb)(bb,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Wb.Fb)(bb,"vDepth")} = distance(worldPosition, ${(0,Wb.sb)(bb,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wb.wb)(bb,"vDepth","float","mediump")}\n\t\t\t${(0,Wb.pb)(bb,"maxDepth","float")}\n\t\t\t${(0,Wb.pb)(bb,"minDepth","float")}\n\n\t\t\t${(0,Wb.O)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Wb.A)(bb,"float","normalizedDepth",`clamp((${(0,Wb.S)(bb,"vDepth")} - ${(0,Wb.sb)(bb,"minDepth")}) / (${(0,Wb.sb)(bb,"maxDepth")} - ${(0,Wb.sb)(bb,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Wb.A)(bb,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Wb.H)(bb)} = ${(0,Wb.l)(bb,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Tb(bb, cb) {
      const {
        vertex: sb,
        fragment: Wb
      } = ab[bb](cb), Tb = kb.d.GetShadersStore(cb);
      Tb[`${bb}VertexShader`] = sb, Tb[`${bb}FragmentShader`] = Wb
    }
  },
  36742: (bb, cb, sb) => {
    sb.d(cb, {
      $: () => Eb,
      A: () => fb,
      B: () => hb,
      Bb: () => gb,
      F: () => Db,
      Fb: () => Bb,
      G: () => ab,
      H: () => Ob,
      K: () => ib,
      O: () => Vb,
      S: () => tb,
      W: () => Pb,
      Y: () => Zb,
      Z: () => Wb,
      bb: () => qb,
      e: () => kb,
      f: () => lb,
      fb: () => Ab,
      g: () => Jb,
      hb: () => Yb,
      ib: () => ub,
      j: () => Cb,
      jb: () => db,
      kb: () => wb,
      l: () => Ib,
      lb: () => zb,
      m: () => Gb,
      nb: () => Lb,
      ob: () => Hb,
      pb: () => eb,
      q: () => Kb,
      sb: () => yb,
      t: () => Xb,
      v: () => nb,
      w: () => Mb,
      wb: () => Qb,
      yb: () => Nb
    });
    const kb = {
      GLSL: 0,
      WGSL: 1
    };

    function Wb(bb) {
      return bb === kb.WGSL
    }

    function ab(bb, cb, sb) {
      return Wb(bb) ? sb : cb
    }
    const Tb = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Ub(bb, cb) {
      if (!Wb(bb)) return cb;
      const sb = Tb.get(cb);
      if (!sb) throw new Error(`No WGSL name for shader type "${cb}"`);
      return sb
    }

    function Ib(bb, cb) {
      for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
      return `${Ub(bb,cb)}(${kb.join(", ")})`
    }

    function Hb(bb, cb) {
      return Ib(bb, "int", cb)
    }

    function fb(bb, cb, sb, kb, ab) {
      return Wb(bb) ? `var ${sb}: ${Ub(bb,cb)} = ${kb};` : `${mb(bb,ab)}${cb} ${sb} = ${kb};`
    }

    function Mb(bb, cb, sb) {
      return Wb(bb) ? `var ${sb}: ${Ub(bb,cb)};` : `${cb} ${sb};`
    }

    function Xb(bb, cb, sb, kb) {
      return Wb(bb) ? `const ${sb}: ${Ub(bb,cb)} = ${kb};` : `const ${cb} ${sb} = ${kb};`
    }

    function nb(bb, cb, sb, kb, ab) {
      if (Wb(bb)) {
        return `fn ${sb}(${kb.map((cb=>`${cb.name}: ${Ub(bb,cb.type)}`)).join(", ")}) -> ${Ub(bb,cb)} {${ab}}`
      }
      return `${cb} ${sb}(${kb.map((bb=>`${bb.type} ${bb.name}`)).join(", ")}) {${ab}}`
    }

    function mb(bb, cb) {
      return !cb || Wb(bb) ? "" : `${cb} `
    }

    function lb(bb, cb, sb, kb) {
      return Wb(bb) ? `attribute ${cb}: ${Ub(bb,sb)};` : `attribute ${mb(bb,kb)}${sb} ${cb};`
    }

    function Qb(bb, cb, sb, kb) {
      return Wb(bb) ? `varying ${cb}: ${Ub(bb,sb)};` : `varying ${mb(bb,kb)}${sb} ${cb};`
    }

    function eb(bb, cb, sb) {
      return Wb(bb) ? `uniform ${cb}: ${Ub(bb,sb)};` : `uniform ${sb} ${cb};`
    }

    function Cb(bb) {
      return Wb(bb) ? "vertexOutputs.position" : "gl_Position"
    }

    function Nb(bb, cb) {
      return Wb(bb) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${cb}}` : `void main() {${cb}}`
    }

    function Vb(bb, cb) {
      return Wb(bb) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${cb}}` : `void main() {${cb}}`
    }

    function Lb(bb, cb, sb) {
      if (Wb(bb)) {
        return [`var ${cb}Sampler: sampler;`, `var ${cb}: ${"2dArray"===sb?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===sb?"sampler2DArray":"sampler2D"} ${cb};`
    }

    function ub(bb, cb, sb) {
      return Wb(bb) ? `textureSample(${cb}, ${cb}Sampler, ${sb})` : `texture2D(${cb}, ${sb})`
    }

    function Yb(bb, cb, sb, kb, ab) {
      if (Wb(bb)) {
        return `${ab?"textureSampleLevel":"textureSample"}(${cb}, ${cb}Sampler, ${sb}, ${Hb(bb,`round(${kb})`)}${ab?`, ${ab}`:""})`
      }
      const Tb = Ib(bb, "vec3", sb, kb);
      return ab ? `textureLod(${cb}, ${Tb}, ${ab})` : `texture(${cb}, ${Tb})`
    }

    function hb(bb) {
      return Wb(bb) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Jb(bb) {
      return Wb(bb) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function gb(bb, cb) {
      return Wb(bb) ? `vertexInputs.${cb}` : cb
    }

    function Bb(bb, cb) {
      return Wb(bb) ? `vertexOutputs.${cb}` : cb
    }

    function tb(bb, cb) {
      return Wb(bb) ? `fragmentInputs.${cb}` : cb
    }

    function yb(bb, cb) {
      return Wb(bb) ? `uniforms.${cb}` : cb
    }

    function Pb(bb, cb, sb) {
      return Wb(bb) ? `frame.${cb}` : sb
    }

    function Db(bb) {
      return Wb(bb) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Eb(bb) {
      return Wb(bb) ? "mesh.visibility" : "visibility"
    }

    function ib(bb) {
      return Wb(bb) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Ob(bb) {
      return Wb(bb) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Gb(bb, cb) {
      return Wb(bb) ? `dpdx(${cb})` : `dFdx(${cb})`
    }

    function Kb(bb, cb) {
      return Wb(bb) ? `dpdy(${cb})` : `dFdy(${cb})`
    }

    function Zb(bb, cb) {
      return Wb(bb) ? `inverseSqrt(${cb})` : `inversesqrt(${cb})`
    }

    function zb(bb, cb, sb, kb) {
      return Wb(bb) ? `select(${kb}, ${sb}, ${cb})` : `((${cb}) ? (${sb}) : (${kb}))`
    }

    function qb(bb, cb, sb) {
      return Wb(bb) ? `((${cb}) - (${sb}) * floor((${cb}) / (${sb})))` : `mod(${cb}, ${sb})`
    }

    function db(bb, cb, sb) {
      return Wb(bb) ? `${cb} = vec4f(${sb}, ${cb}.a);` : `${cb}.rgb = ${sb};`
    }

    function Ab(bb, cb, sb) {
      return Wb(bb) ? `${cb} = vec4f(${cb}.rgb * (${sb}), ${cb}.a);` : `${cb}.rgb *= ${sb};`
    }

    function wb(bb, cb, sb) {
      return Wb(bb) ? `${cb} = vec4f(${sb}, ${cb}.w);` : `${cb}.xyz = ${sb};`
    }
  },
  39267: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    class kb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.ShadersRepository : kb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.ShadersStore : kb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.IncludesShadersStore : kb.IncludesShadersStoreWGSL
      }
    }
    kb.ShadersRepository = "src/Shaders/", kb.ShadersStore = {}, kb.IncludesShadersStore = {}, kb.ShadersRepositoryWGSL = "src/ShadersWGSL/", kb.ShadersStoreWGSL = {}, kb.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);