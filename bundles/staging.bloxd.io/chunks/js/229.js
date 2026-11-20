export const id = 229;
export const ids = [229];
export const modules = {
  60592: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      DEVTOOLS_SHADERS: () => ev,
      registerDevtoolsShader: () => gv
    });
    var hv = Pv(39162),
      Sv = Pv(36668);
    const ev = {
      devtoolsNormal: function(vv) {
        return {
          vertex: `\n\t\t\t${(0,Sv.g)(vv,"position","vec3")}\n\t\t\t${(0,Sv.g)(vv,"normal","vec3")}\n\t\t\t${(0,Sv.ub)(vv,"worldViewProjection","mat4")}\n\t\t\t${(0,Sv.ub)(vv,"world","mat4")}\n\t\t\t${(0,Sv.xb)(vv,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Sv.yb)(vv,`\n\t\t\t\t${(0,Sv.l)(vv)} = ${(0,Sv.vb)(vv,"worldViewProjection")} * ${(0,Sv.n)(vv,"vec4",(0,Sv.Bb)(vv,"position"),"1.0")};\n\t\t\t\t${(0,Sv.Fb)(vv,"vNormal")} = normalize((${(0,Sv.vb)(vv,"world")} * ${(0,Sv.n)(vv,"vec4",(0,Sv.Bb)(vv,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Sv.xb)(vv,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Sv.Q)(vv,`\n\t\t\t\t\n\t\t\t\t${(0,Sv.F)(vv,"vec3","normalColor",`abs(${(0,Sv.U)(vv,"vNormal")})`)}\n\t\t\t\t${(0,Sv.N)(vv)} = ${(0,Sv.n)(vv,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(vv) {
        return {
          vertex: `\n\t\t\t${(0,Sv.g)(vv,"position","vec3")}\n\t\t\t${(0,Sv.ub)(vv,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Sv.yb)(vv,`\n\t\t\t\t${(0,Sv.l)(vv)} = ${(0,Sv.vb)(vv,"worldViewProjection")} * ${(0,Sv.n)(vv,"vec4",(0,Sv.Bb)(vv,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Sv.Q)(vv,`\n\t\t\t\t${(0,Sv.N)(vv)} = ${(0,Sv.n)(vv,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(vv) {
        return {
          vertex: `\n\t\t\t${(0,Sv.g)(vv,"position","vec3")}\n\t\t\t${(0,Sv.ub)(vv,"worldViewProjection","mat4")}\n\t\t\t${(0,Sv.ub)(vv,"world","mat4")}\n\t\t\t${(0,Sv.ub)(vv,"cameraPosition","vec3")}\n\t\t\t${(0,Sv.xb)(vv,"vDepth","float","mediump")}\n\n\t\t\t${(0,Sv.yb)(vv,`\n\t\t\t\t${(0,Sv.l)(vv)} = ${(0,Sv.vb)(vv,"worldViewProjection")} * ${(0,Sv.n)(vv,"vec4",(0,Sv.Bb)(vv,"position"),"1.0")};\n\t\t\t\t${(0,Sv.F)(vv,"vec3","worldPosition",`(${(0,Sv.vb)(vv,"world")} * ${(0,Sv.n)(vv,"vec4",(0,Sv.Bb)(vv,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Sv.Fb)(vv,"vDepth")} = distance(worldPosition, ${(0,Sv.vb)(vv,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Sv.xb)(vv,"vDepth","float","mediump")}\n\t\t\t${(0,Sv.ub)(vv,"maxDepth","float")}\n\t\t\t${(0,Sv.ub)(vv,"minDepth","float")}\n\n\t\t\t${(0,Sv.Q)(vv,`\n\t\t\t\t\n\t\t\t\t${(0,Sv.F)(vv,"float","normalizedDepth",`clamp((${(0,Sv.U)(vv,"vDepth")} - ${(0,Sv.vb)(vv,"minDepth")}) / (${(0,Sv.vb)(vv,"maxDepth")} - ${(0,Sv.vb)(vv,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Sv.F)(vv,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Sv.N)(vv)} = ${(0,Sv.n)(vv,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function gv(vv, zv) {
      const {
        vertex: Pv,
        fragment: Sv
      } = ev[vv](zv), gv = hv.d.GetShadersStore(zv);
      gv[`${vv}VertexShader`] = Pv, gv[`${vv}FragmentShader`] = Sv
    }
  },
  36668: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => xv,
      B: () => Tv,
      Bb: () => Ov,
      F: () => lv,
      Fb: () => Dv,
      H: () => Yv,
      J: () => Rv,
      M: () => ev,
      N: () => qv,
      O: () => tv,
      Q: () => mv,
      U: () => Kv,
      V: () => Uv,
      X: () => Zv,
      _: () => Sv,
      ab: () => Lv,
      cb: () => Mv,
      d: () => hv,
      db: () => Fv,
      fb: () => fv,
      g: () => sv,
      i: () => nv,
      ib: () => Hv,
      jb: () => yv,
      l: () => cv,
      mb: () => Av,
      n: () => dv,
      pb: () => jv,
      q: () => Iv,
      qb: () => Nv,
      t: () => Qv,
      u: () => Wv,
      ub: () => iv,
      vb: () => Vv,
      xb: () => Cv,
      y: () => wv,
      yb: () => Gv
    });
    const hv = {
      GLSL: 0,
      WGSL: 1
    };

    function Sv(vv) {
      return vv === hv.WGSL
    }

    function ev(vv, zv, Pv) {
      return Sv(vv) ? Pv : zv
    }
    const gv = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function pv(vv, zv) {
      if (!Sv(vv)) return zv;
      const Pv = gv.get(zv);
      if (!Pv) throw new Error(`No WGSL name for shader type "${zv}"`);
      return Pv
    }

    function dv(vv, zv) {
      for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
      return `${pv(vv,zv)}(${hv.join(", ")})`
    }

    function Nv(vv, zv) {
      return dv(vv, "int", zv)
    }

    function lv(vv, zv, Pv, hv, ev) {
      return Sv(vv) ? `var ${Pv}: ${pv(vv,zv)} = ${hv};` : `${av(vv,ev)}${zv} ${Pv} = ${hv};`
    }

    function Tv(vv, zv, Pv) {
      return Sv(vv) ? `var ${Pv}: ${pv(vv,zv)};` : `${zv} ${Pv};`
    }

    function Wv(vv, zv, Pv, hv) {
      return Sv(vv) ? `const ${Pv}: ${pv(vv,zv)} = ${hv};` : `const ${zv} ${Pv} = ${hv};`
    }

    function wv(vv, zv, Pv, hv, ev) {
      if (Sv(vv)) {
        return `fn ${Pv}(${hv.map((zv=>`${zv.name}: ${pv(vv,zv.type)}`)).join(", ")}) -> ${pv(vv,zv)} {${ev}}`
      }
      return `${zv} ${Pv}(${hv.map((vv=>`${vv.type} ${vv.name}`)).join(", ")}) {${ev}}`
    }

    function av(vv, zv) {
      return !zv || Sv(vv) ? "" : `${zv} `
    }

    function sv(vv, zv, Pv, hv) {
      return Sv(vv) ? `attribute ${zv}: ${pv(vv,Pv)};` : `attribute ${av(vv,hv)}${Pv} ${zv};`
    }

    function Cv(vv, zv, Pv, hv) {
      return Sv(vv) ? `varying ${zv}: ${pv(vv,Pv)};` : `varying ${av(vv,hv)}${Pv} ${zv};`
    }

    function iv(vv, zv, Pv) {
      return Sv(vv) ? `uniform ${zv}: ${pv(vv,Pv)};` : `uniform ${Pv} ${zv};`
    }

    function cv(vv) {
      return Sv(vv) ? "vertexOutputs.position" : "gl_Position"
    }

    function Gv(vv, zv) {
      return Sv(vv) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${zv}}` : `void main() {${zv}}`
    }

    function mv(vv, zv) {
      return Sv(vv) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${zv}}` : `void main() {${zv}}`
    }

    function jv(vv, zv, Pv) {
      if (Sv(vv)) {
        return [`var ${zv}Sampler: sampler;`, `var ${zv}: ${"2dArray"===Pv?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Pv?"sampler2DArray":"sampler2D"} ${zv};`
    }

    function fv(vv, zv, Pv) {
      return Sv(vv) ? `textureSample(${zv}, ${zv}Sampler, ${Pv})` : `texture2D(${zv}, ${Pv})`
    }

    function Fv(vv, zv, Pv, hv, ev) {
      if (Sv(vv)) {
        return `${ev?"textureSampleLevel":"textureSample"}(${zv}, ${zv}Sampler, ${Pv}, ${Nv(vv,`round(${hv})`)}${ev?`, ${ev}`:""})`
      }
      const gv = dv(vv, "vec3", Pv, hv);
      return ev ? `textureLod(${zv}, ${gv}, ${ev})` : `texture(${zv}, ${gv})`
    }

    function Yv(vv) {
      return Sv(vv) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function nv(vv) {
      return Sv(vv) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Ov(vv, zv) {
      return Sv(vv) ? `vertexInputs.${zv}` : zv
    }

    function Dv(vv, zv) {
      return Sv(vv) ? `vertexOutputs.${zv}` : zv
    }

    function Kv(vv, zv) {
      return Sv(vv) ? `fragmentInputs.${zv}` : zv
    }

    function Vv(vv, zv) {
      return Sv(vv) ? `uniforms.${zv}` : zv
    }

    function Uv(vv, zv, Pv) {
      return Sv(vv) ? `frame.${zv}` : Pv
    }

    function Rv(vv) {
      return Sv(vv) ? "scene.vEyePosition" : "vEyePosition"
    }

    function xv(vv) {
      return Sv(vv) ? "mesh.visibility" : "visibility"
    }

    function tv(vv) {
      return Sv(vv) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function qv(vv) {
      return Sv(vv) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Iv(vv, zv) {
      return Sv(vv) ? `dpdx(${zv})` : `dFdx(${zv})`
    }

    function Qv(vv, zv) {
      return Sv(vv) ? `dpdy(${zv})` : `dFdy(${zv})`
    }

    function Zv(vv, zv) {
      return Sv(vv) ? `inverseSqrt(${zv})` : `inversesqrt(${zv})`
    }

    function Av(vv, zv, Pv, hv) {
      return Sv(vv) ? `select(${hv}, ${Pv}, ${zv})` : `((${zv}) ? (${Pv}) : (${hv}))`
    }

    function Lv(vv, zv, Pv) {
      return Sv(vv) ? `((${zv}) - (${Pv}) * floor((${zv}) / (${Pv})))` : `mod(${zv}, ${Pv})`
    }

    function Hv(vv, zv, Pv) {
      return Sv(vv) ? `${zv} = vec4f(${Pv}, ${zv}.a);` : `${zv}.rgb = ${Pv};`
    }

    function Mv(vv, zv, Pv) {
      return Sv(vv) ? `${zv} = vec4f(${zv}.rgb * (${Pv}), ${zv}.a);` : `${zv}.rgb *= ${Pv};`
    }

    function yv(vv, zv, Pv) {
      return Sv(vv) ? `${zv} = vec4f(${Pv}, ${zv}.w);` : `${zv}.xyz = ${Pv};`
    }
  },
  39162: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersRepository : hv.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersStore : hv.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.IncludesShadersStore : hv.IncludesShadersStoreWGSL
      }
    }
    hv.ShadersRepository = "src/Shaders/", hv.ShadersStore = {}, hv.IncludesShadersStore = {}, hv.ShadersRepositoryWGSL = "src/ShadersWGSL/", hv.ShadersStoreWGSL = {}, hv.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);