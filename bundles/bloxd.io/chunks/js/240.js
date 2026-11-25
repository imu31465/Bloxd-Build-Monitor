export const id = 240;
export const ids = [240];
export const modules = {
  61535: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      DEVTOOLS_SHADERS: () => Dt,
      registerDevtoolsShader: () => mt
    });
    var Ot = Vt(40061),
      qt = Vt(37435);
    const Dt = {
      devtoolsNormal: function(tt) {
        return {
          vertex: `\n\t\t\t${(0,qt.d)(tt,"position","vec3")}\n\t\t\t${(0,qt.d)(tt,"normal","vec3")}\n\t\t\t${(0,qt.rb)(tt,"worldViewProjection","mat4")}\n\t\t\t${(0,qt.rb)(tt,"world","mat4")}\n\t\t\t${(0,qt.wb)(tt,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qt.zb)(tt,`\n\t\t\t\t${(0,qt.k)(tt)} = ${(0,qt.vb)(tt,"worldViewProjection")} * ${(0,qt.l)(tt,"vec4",(0,qt.Ab)(tt,"position"),"1.0")};\n\t\t\t\t${(0,qt.Eb)(tt,"vNormal")} = normalize((${(0,qt.vb)(tt,"world")} * ${(0,qt.l)(tt,"vec4",(0,qt.Ab)(tt,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qt.wb)(tt,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qt.R)(tt,`\n\t\t\t\t\n\t\t\t\t${(0,qt.y)(tt,"vec3","normalColor",`abs(${(0,qt.T)(tt,"vNormal")})`)}\n\t\t\t\t${(0,qt.K)(tt)} = ${(0,qt.l)(tt,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(tt) {
        return {
          vertex: `\n\t\t\t${(0,qt.d)(tt,"position","vec3")}\n\t\t\t${(0,qt.rb)(tt,"worldViewProjection","mat4")}\n\n\t\t\t${(0,qt.zb)(tt,`\n\t\t\t\t${(0,qt.k)(tt)} = ${(0,qt.vb)(tt,"worldViewProjection")} * ${(0,qt.l)(tt,"vec4",(0,qt.Ab)(tt,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qt.R)(tt,`\n\t\t\t\t${(0,qt.K)(tt)} = ${(0,qt.l)(tt,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(tt) {
        return {
          vertex: `\n\t\t\t${(0,qt.d)(tt,"position","vec3")}\n\t\t\t${(0,qt.rb)(tt,"worldViewProjection","mat4")}\n\t\t\t${(0,qt.rb)(tt,"world","mat4")}\n\t\t\t${(0,qt.rb)(tt,"cameraPosition","vec3")}\n\t\t\t${(0,qt.wb)(tt,"vDepth","float","mediump")}\n\n\t\t\t${(0,qt.zb)(tt,`\n\t\t\t\t${(0,qt.k)(tt)} = ${(0,qt.vb)(tt,"worldViewProjection")} * ${(0,qt.l)(tt,"vec4",(0,qt.Ab)(tt,"position"),"1.0")};\n\t\t\t\t${(0,qt.y)(tt,"vec3","worldPosition",`(${(0,qt.vb)(tt,"world")} * ${(0,qt.l)(tt,"vec4",(0,qt.Ab)(tt,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,qt.Eb)(tt,"vDepth")} = distance(worldPosition, ${(0,qt.vb)(tt,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,qt.wb)(tt,"vDepth","float","mediump")}\n\t\t\t${(0,qt.rb)(tt,"maxDepth","float")}\n\t\t\t${(0,qt.rb)(tt,"minDepth","float")}\n\n\t\t\t${(0,qt.R)(tt,`\n\t\t\t\t\n\t\t\t\t${(0,qt.y)(tt,"float","normalizedDepth",`clamp((${(0,qt.T)(tt,"vDepth")} - ${(0,qt.vb)(tt,"minDepth")}) / (${(0,qt.vb)(tt,"maxDepth")} - ${(0,qt.vb)(tt,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,qt.y)(tt,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,qt.K)(tt)} = ${(0,qt.l)(tt,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function mt(tt, et) {
      const {
        vertex: Vt,
        fragment: qt
      } = Dt[tt](et), mt = Ot.b.GetShadersStore(et);
      mt[`${tt}VertexShader`] = Vt, mt[`${tt}FragmentShader`] = qt
    }
  },
  37435: (tt, et, Vt) => {
    Vt.d(et, {
      $: () => At,
      Ab: () => Wt,
      C: () => ht,
      Eb: () => St,
      F: () => Pt,
      J: () => Dt,
      K: () => Ft,
      O: () => Lt,
      R: () => Jt,
      T: () => ct,
      U: () => It,
      V: () => zt,
      Y: () => qt,
      Z: () => Zt,
      _: () => rt,
      c: () => Ot,
      d: () => wt,
      db: () => Kt,
      eb: () => ut,
      gb: () => Ut,
      h: () => vt,
      ib: () => it,
      k: () => Mt,
      kb: () => ot,
      l: () => jt,
      mb: () => Ct,
      n: () => kt,
      nb: () => Ht,
      q: () => Gt,
      rb: () => Nt,
      t: () => lt,
      u: () => Et,
      vb: () => Rt,
      wb: () => yt,
      x: () => Qt,
      y: () => Xt,
      zb: () => bt
    });
    const Ot = {
      GLSL: 0,
      WGSL: 1
    };

    function qt(tt) {
      return tt === Ot.WGSL
    }

    function Dt(tt, et, Vt) {
      return qt(tt) ? Vt : et
    }
    const mt = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function dt(tt, et) {
      if (!qt(tt)) return et;
      const Vt = mt.get(et);
      if (!Vt) throw new Error(`No WGSL name for shader type "${et}"`);
      return Vt
    }

    function jt(tt, et) {
      for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
      return `${dt(tt,et)}(${Ot.join(", ")})`
    }

    function Ht(tt, et) {
      return jt(tt, "int", et)
    }

    function Xt(tt, et, Vt, Ot, Dt) {
      return qt(tt) ? `var ${Vt}: ${dt(tt,et)} = ${Ot};` : `${ft(tt,Dt)}${et} ${Vt} = ${Ot};`
    }

    function Qt(tt, et, Vt) {
      return qt(tt) ? `var ${Vt}: ${dt(tt,et)};` : `${et} ${Vt};`
    }

    function lt(tt, et, Vt, Ot) {
      return qt(tt) ? `const ${Vt}: ${dt(tt,et)} = ${Ot};` : `const ${et} ${Vt} = ${Ot};`
    }

    function Et(tt, et, Vt, Ot, Dt) {
      if (qt(tt)) {
        return `fn ${Vt}(${Ot.map((et=>`${et.name}: ${dt(tt,et.type)}`)).join(", ")}) -> ${dt(tt,et)} {${Dt}}`
      }
      return `${et} ${Vt}(${Ot.map((tt=>`${tt.type} ${tt.name}`)).join(", ")}) {${Dt}}`
    }

    function ft(tt, et) {
      return !et || qt(tt) ? "" : `${et} `
    }

    function wt(tt, et, Vt, Ot) {
      return qt(tt) ? `attribute ${et}: ${dt(tt,Vt)};` : `attribute ${ft(tt,Ot)}${Vt} ${et};`
    }

    function yt(tt, et, Vt, Ot) {
      return qt(tt) ? `varying ${et}: ${dt(tt,Vt)};` : `varying ${ft(tt,Ot)}${Vt} ${et};`
    }

    function Nt(tt, et, Vt) {
      return qt(tt) ? `uniform ${et}: ${dt(tt,Vt)};` : `uniform ${Vt} ${et};`
    }

    function Mt(tt) {
      return qt(tt) ? "vertexOutputs.position" : "gl_Position"
    }

    function bt(tt, et) {
      return qt(tt) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${et}}` : `void main() {${et}}`
    }

    function Jt(tt, et) {
      return qt(tt) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${et}}` : `void main() {${et}}`
    }

    function Ct(tt, et, Vt) {
      if (qt(tt)) {
        return [`var ${et}Sampler: sampler;`, `var ${et}: ${"2dArray"===Vt?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Vt?"sampler2DArray":"sampler2D"} ${et};`
    }

    function ut(tt, et, Vt) {
      return qt(tt) ? `textureSample(${et}, ${et}Sampler, ${Vt})` : `texture2D(${et}, ${Vt})`
    }

    function Kt(tt, et, Vt, Ot, Dt) {
      if (qt(tt)) {
        return `${Dt?"textureSampleLevel":"textureSample"}(${et}, ${et}Sampler, ${Vt}, ${Ht(tt,`round(${Ot})`)}${Dt?`, ${Dt}`:""})`
      }
      const mt = jt(tt, "vec3", Vt, Ot);
      return Dt ? `textureLod(${et}, ${mt}, ${Dt})` : `texture(${et}, ${mt})`
    }

    function ht(tt) {
      return qt(tt) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function vt(tt) {
      return qt(tt) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Wt(tt, et) {
      return qt(tt) ? `vertexInputs.${et}` : et
    }

    function St(tt, et) {
      return qt(tt) ? `vertexOutputs.${et}` : et
    }

    function ct(tt, et) {
      return qt(tt) ? `fragmentInputs.${et}` : et
    }

    function Rt(tt, et) {
      return qt(tt) ? `uniforms.${et}` : et
    }

    function It(tt, et, Vt) {
      return qt(tt) ? `frame.${et}` : Vt
    }

    function Pt(tt) {
      return qt(tt) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Zt(tt) {
      return qt(tt) ? "mesh.visibility" : "visibility"
    }

    function Lt(tt) {
      return qt(tt) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Ft(tt) {
      return qt(tt) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function kt(tt, et) {
      return qt(tt) ? `dpdx(${et})` : `dFdx(${et})`
    }

    function Gt(tt, et) {
      return qt(tt) ? `dpdy(${et})` : `dFdy(${et})`
    }

    function zt(tt, et) {
      return qt(tt) ? `inverseSqrt(${et})` : `inversesqrt(${et})`
    }

    function ot(tt, et, Vt, Ot) {
      return qt(tt) ? `select(${Ot}, ${Vt}, ${et})` : `((${et}) ? (${Vt}) : (${Ot}))`
    }

    function rt(tt, et, Vt) {
      return qt(tt) ? `((${et}) - (${Vt}) * floor((${et}) / (${Vt})))` : `mod(${et}, ${Vt})`
    }

    function Ut(tt, et, Vt) {
      return qt(tt) ? `${et} = vec4f(${Vt}, ${et}.a);` : `${et}.rgb = ${Vt};`
    }

    function At(tt, et, Vt) {
      return qt(tt) ? `${et} = vec4f(${et}.rgb * (${Vt}), ${et}.a);` : `${et}.rgb *= ${Vt};`
    }

    function it(tt, et, Vt) {
      return qt(tt) ? `${et} = vec4f(${Vt}, ${et}.w);` : `${et}.xyz = ${Vt};`
    }
  },
  40061: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.ShadersRepository : Ot.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.ShadersStore : Ot.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.IncludesShadersStore : Ot.IncludesShadersStoreWGSL
      }
    }
    Ot.ShadersRepository = "src/Shaders/", Ot.ShadersStore = {}, Ot.IncludesShadersStore = {}, Ot.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ot.ShadersStoreWGSL = {}, Ot.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);