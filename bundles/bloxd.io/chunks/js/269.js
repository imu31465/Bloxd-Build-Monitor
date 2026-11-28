export const id = 269;
export const ids = [269];
export const modules = {
  64428: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      DEVTOOLS_SHADERS: () => pb,
      registerDevtoolsShader: () => Vb
    });
    var eb = Mb(41518),
      Hb = Mb(38419);
    const pb = {
      devtoolsNormal: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Hb.d)(bb,"position","vec3")}\n\t\t\t${(0,Hb.d)(bb,"normal","vec3")}\n\t\t\t${(0,Hb.pb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Hb.pb)(bb,"world","mat4")}\n\t\t\t${(0,Hb.vb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Hb.yb)(bb,`\n\t\t\t\t${(0,Hb.f)(bb)} = ${(0,Hb.sb)(bb,"worldViewProjection")} * ${(0,Hb.j)(bb,"vec4",(0,Hb.zb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Hb.Db)(bb,"vNormal")} = normalize((${(0,Hb.sb)(bb,"world")} * ${(0,Hb.j)(bb,"vec4",(0,Hb.zb)(bb,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Hb.vb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Hb.N)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Hb.u)(bb,"vec3","normalColor",`abs(${(0,Hb.R)(bb,"vNormal")})`)}\n\t\t\t\t${(0,Hb.H)(bb)} = ${(0,Hb.j)(bb,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Hb.d)(bb,"position","vec3")}\n\t\t\t${(0,Hb.pb)(bb,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Hb.yb)(bb,`\n\t\t\t\t${(0,Hb.f)(bb)} = ${(0,Hb.sb)(bb,"worldViewProjection")} * ${(0,Hb.j)(bb,"vec4",(0,Hb.zb)(bb,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Hb.N)(bb,`\n\t\t\t\t${(0,Hb.H)(bb)} = ${(0,Hb.j)(bb,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Hb.d)(bb,"position","vec3")}\n\t\t\t${(0,Hb.pb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Hb.pb)(bb,"world","mat4")}\n\t\t\t${(0,Hb.pb)(bb,"cameraPosition","vec3")}\n\t\t\t${(0,Hb.vb)(bb,"vDepth","float","mediump")}\n\n\t\t\t${(0,Hb.yb)(bb,`\n\t\t\t\t${(0,Hb.f)(bb)} = ${(0,Hb.sb)(bb,"worldViewProjection")} * ${(0,Hb.j)(bb,"vec4",(0,Hb.zb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Hb.u)(bb,"vec3","worldPosition",`(${(0,Hb.sb)(bb,"world")} * ${(0,Hb.j)(bb,"vec4",(0,Hb.zb)(bb,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Hb.Db)(bb,"vDepth")} = distance(worldPosition, ${(0,Hb.sb)(bb,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Hb.vb)(bb,"vDepth","float","mediump")}\n\t\t\t${(0,Hb.pb)(bb,"maxDepth","float")}\n\t\t\t${(0,Hb.pb)(bb,"minDepth","float")}\n\n\t\t\t${(0,Hb.N)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Hb.u)(bb,"float","normalizedDepth",`clamp((${(0,Hb.R)(bb,"vDepth")} - ${(0,Hb.sb)(bb,"minDepth")}) / (${(0,Hb.sb)(bb,"maxDepth")} - ${(0,Hb.sb)(bb,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Hb.u)(bb,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Hb.H)(bb)} = ${(0,Hb.j)(bb,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Vb(bb, wb) {
      const {
        vertex: Mb,
        fragment: Hb
      } = pb[bb](wb), Vb = eb.e.GetShadersStore(wb);
      Vb[`${bb}VertexShader`] = Mb, Vb[`${bb}FragmentShader`] = Hb
    }
  },
  38419: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Zb,
      D: () => pb,
      Db: () => Rb,
      H: () => Wb,
      L: () => Ab,
      N: () => hb,
      R: () => Db,
      U: () => Yb,
      X: () => Nb,
      Y: () => Hb,
      Z: () => fb,
      _: () => Qb,
      ab: () => qb,
      b: () => eb,
      bb: () => xb,
      cb: () => Xb,
      d: () => Eb,
      db: () => Gb,
      e: () => Kb,
      f: () => sb,
      gb: () => ab,
      ib: () => vb,
      j: () => lb,
      kb: () => zb,
      l: () => Jb,
      m: () => Sb,
      n: () => Ub,
      ob: () => Lb,
      pb: () => Bb,
      r: () => tb,
      sb: () => cb,
      t: () => Ob,
      u: () => Ib,
      vb: () => Fb,
      y: () => jb,
      yb: () => mb,
      zb: () => rb
    });
    const eb = {
      GLSL: 0,
      WGSL: 1
    };

    function Hb(bb) {
      return bb === eb.WGSL
    }

    function pb(bb, wb, Mb) {
      return Hb(bb) ? Mb : wb
    }
    const Vb = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function gb(bb, wb) {
      if (!Hb(bb)) return wb;
      const Mb = Vb.get(wb);
      if (!Mb) throw new Error(`No WGSL name for shader type "${wb}"`);
      return Mb
    }

    function lb(bb, wb) {
      for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
      return `${gb(bb,wb)}(${eb.join(", ")})`
    }

    function Lb(bb, wb) {
      return lb(bb, "int", wb)
    }

    function Ib(bb, wb, Mb, eb, pb) {
      return Hb(bb) ? `var ${Mb}: ${gb(bb,wb)} = ${eb};` : `${Cb(bb,pb)}${wb} ${Mb} = ${eb};`
    }

    function Ob(bb, wb, Mb) {
      return Hb(bb) ? `var ${Mb}: ${gb(bb,wb)};` : `${wb} ${Mb};`
    }

    function Ub(bb, wb, Mb, eb) {
      return Hb(bb) ? `const ${Mb}: ${gb(bb,wb)} = ${eb};` : `const ${wb} ${Mb} = ${eb};`
    }

    function tb(bb, wb, Mb, eb, pb) {
      if (Hb(bb)) {
        return `fn ${Mb}(${eb.map((wb=>`${wb.name}: ${gb(bb,wb.type)}`)).join(", ")}) -> ${gb(bb,wb)} {${pb}}`
      }
      return `${wb} ${Mb}(${eb.map((bb=>`${bb.type} ${bb.name}`)).join(", ")}) {${pb}}`
    }

    function Cb(bb, wb) {
      return !wb || Hb(bb) ? "" : `${wb} `
    }

    function Eb(bb, wb, Mb, eb) {
      return Hb(bb) ? `attribute ${wb}: ${gb(bb,Mb)};` : `attribute ${Cb(bb,eb)}${Mb} ${wb};`
    }

    function Fb(bb, wb, Mb, eb) {
      return Hb(bb) ? `varying ${wb}: ${gb(bb,Mb)};` : `varying ${Cb(bb,eb)}${Mb} ${wb};`
    }

    function Bb(bb, wb, Mb) {
      return Hb(bb) ? `uniform ${wb}: ${gb(bb,Mb)};` : `uniform ${Mb} ${wb};`
    }

    function sb(bb) {
      return Hb(bb) ? "vertexOutputs.position" : "gl_Position"
    }

    function mb(bb, wb) {
      return Hb(bb) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${wb}}` : `void main() {${wb}}`
    }

    function hb(bb, wb) {
      return Hb(bb) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${wb}}` : `void main() {${wb}}`
    }

    function zb(bb, wb, Mb) {
      if (Hb(bb)) {
        return [`var ${wb}Sampler: sampler;`, `var ${wb}: ${"2dArray"===Mb?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Mb?"sampler2DArray":"sampler2D"} ${wb};`
    }

    function Xb(bb, wb, Mb) {
      return Hb(bb) ? `textureSample(${wb}, ${wb}Sampler, ${Mb})` : `texture2D(${wb}, ${Mb})`
    }

    function xb(bb, wb, Mb, eb, pb) {
      if (Hb(bb)) {
        return `${pb?"textureSampleLevel":"textureSample"}(${wb}, ${wb}Sampler, ${Mb}, ${Lb(bb,`round(${eb})`)}${pb?`, ${pb}`:""})`
      }
      const Vb = lb(bb, "vec3", Mb, eb);
      return pb ? `textureLod(${wb}, ${Vb}, ${pb})` : `texture(${wb}, ${Vb})`
    }

    function jb(bb) {
      return Hb(bb) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Kb(bb) {
      return Hb(bb) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function rb(bb, wb) {
      return Hb(bb) ? `vertexInputs.${wb}` : wb
    }

    function Rb(bb, wb) {
      return Hb(bb) ? `vertexOutputs.${wb}` : wb
    }

    function Db(bb, wb) {
      return Hb(bb) ? `fragmentInputs.${wb}` : wb
    }

    function cb(bb, wb) {
      return Hb(bb) ? `uniforms.${wb}` : wb
    }

    function Yb(bb, wb, Mb) {
      return Hb(bb) ? `frame.${wb}` : Mb
    }

    function Zb(bb) {
      return Hb(bb) ? "scene.vEyePosition" : "vEyePosition"
    }

    function fb(bb) {
      return Hb(bb) ? "mesh.visibility" : "visibility"
    }

    function Ab(bb) {
      return Hb(bb) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Wb(bb) {
      return Hb(bb) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Jb(bb, wb) {
      return Hb(bb) ? `dpdx(${wb})` : `dFdx(${wb})`
    }

    function Sb(bb, wb) {
      return Hb(bb) ? `dpdy(${wb})` : `dFdy(${wb})`
    }

    function Nb(bb, wb) {
      return Hb(bb) ? `inverseSqrt(${wb})` : `inversesqrt(${wb})`
    }

    function vb(bb, wb, Mb, eb) {
      return Hb(bb) ? `select(${eb}, ${Mb}, ${wb})` : `((${wb}) ? (${Mb}) : (${eb}))`
    }

    function Qb(bb, wb, Mb) {
      return Hb(bb) ? `((${wb}) - (${Mb}) * floor((${wb}) / (${Mb})))` : `mod(${wb}, ${Mb})`
    }

    function Gb(bb, wb, Mb) {
      return Hb(bb) ? `${wb} = vec4f(${Mb}, ${wb}.a);` : `${wb}.rgb = ${Mb};`
    }

    function qb(bb, wb, Mb) {
      return Hb(bb) ? `${wb} = vec4f(${wb}.rgb * (${Mb}), ${wb}.a);` : `${wb}.rgb *= ${Mb};`
    }

    function ab(bb, wb, Mb) {
      return Hb(bb) ? `${wb} = vec4f(${Mb}, ${wb}.w);` : `${wb}.xyz = ${Mb};`
    }
  },
  41518: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? eb.ShadersRepository : eb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? eb.ShadersStore : eb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? eb.IncludesShadersStore : eb.IncludesShadersStoreWGSL
      }
    }
    eb.ShadersRepository = "src/Shaders/", eb.ShadersStore = {}, eb.IncludesShadersStore = {}, eb.ShadersRepositoryWGSL = "src/ShadersWGSL/", eb.ShadersStoreWGSL = {}, eb.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);