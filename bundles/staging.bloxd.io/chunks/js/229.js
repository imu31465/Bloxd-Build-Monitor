export const id = 229;
export const ids = [229];
export const modules = {
  60608: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      DEVTOOLS_SHADERS: () => Gb,
      registerDevtoolsShader: () => Ub
    });
    var Bb = hb(39308),
      Ob = hb(36814);
    const Gb = {
      devtoolsNormal: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Ob.f)(bb,"position","vec3")}\n\t\t\t${(0,Ob.f)(bb,"normal","vec3")}\n\t\t\t${(0,Ob.Gb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Ob.Gb)(bb,"world","mat4")}\n\t\t\t${(0,Ob.Lb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Ob.Pb)(bb,`\n\t\t\t\t${(0,Ob.j)(bb)} = ${(0,Ob.Ib)(bb,"worldViewProjection")} * ${(0,Ob.k)(bb,"vec4",(0,Ob.Rb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Ob.Sb)(bb,"vNormal")} = normalize((${(0,Ob.Ib)(bb,"world")} * ${(0,Ob.k)(bb,"vec4",(0,Ob.Rb)(bb,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ob.Lb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Ob.U)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Ob.E)(bb,"vec3","normalColor",`abs(${(0,Ob.Y)(bb,"vNormal")})`)}\n\t\t\t\t${(0,Ob.P)(bb)} = ${(0,Ob.k)(bb,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Ob.f)(bb,"position","vec3")}\n\t\t\t${(0,Ob.Gb)(bb,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Ob.Pb)(bb,`\n\t\t\t\t${(0,Ob.j)(bb)} = ${(0,Ob.Ib)(bb,"worldViewProjection")} * ${(0,Ob.k)(bb,"vec4",(0,Ob.Rb)(bb,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ob.U)(bb,`\n\t\t\t\t${(0,Ob.P)(bb)} = ${(0,Ob.k)(bb,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Ob.f)(bb,"position","vec3")}\n\t\t\t${(0,Ob.Gb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Ob.Gb)(bb,"world","mat4")}\n\t\t\t${(0,Ob.Gb)(bb,"cameraPosition","vec3")}\n\t\t\t${(0,Ob.Lb)(bb,"vDepth","float","mediump")}\n\n\t\t\t${(0,Ob.Pb)(bb,`\n\t\t\t\t${(0,Ob.j)(bb)} = ${(0,Ob.Ib)(bb,"worldViewProjection")} * ${(0,Ob.k)(bb,"vec4",(0,Ob.Rb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Ob.E)(bb,"vec3","worldPosition",`(${(0,Ob.Ib)(bb,"world")} * ${(0,Ob.k)(bb,"vec4",(0,Ob.Rb)(bb,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Ob.Sb)(bb,"vDepth")} = distance(worldPosition, ${(0,Ob.Ib)(bb,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ob.Lb)(bb,"vDepth","float","mediump")}\n\t\t\t${(0,Ob.Gb)(bb,"maxDepth","float")}\n\t\t\t${(0,Ob.Gb)(bb,"minDepth","float")}\n\n\t\t\t${(0,Ob.U)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Ob.E)(bb,"float","normalizedDepth",`clamp((${(0,Ob.Y)(bb,"vDepth")} - ${(0,Ob.Ib)(bb,"minDepth")}) / (${(0,Ob.Ib)(bb,"maxDepth")} - ${(0,Ob.Ib)(bb,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Ob.E)(bb,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Ob.P)(bb)} = ${(0,Ob.k)(bb,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Ub(bb, ub) {
      const {
        vertex: hb,
        fragment: Ob
      } = Gb[bb](ub), Ub = Bb.e.GetShadersStore(ub);
      Ub[`${bb}VertexShader`] = hb, Ub[`${bb}FragmentShader`] = Ob
    }
  },
  36814: (bb, ub, hb) => {
    hb.d(ub, {
      Ab: () => mb,
      B: () => Hb,
      Bb: () => Cb,
      Db: () => Sb,
      E: () => ab,
      G: () => jb,
      Gb: () => Ab,
      I: () => vb,
      Ib: () => gb,
      L: () => Gb,
      Lb: () => ob,
      P: () => eb,
      Pb: () => Kb,
      Rb: () => Db,
      Sb: () => xb,
      T: () => Jb,
      U: () => Wb,
      Y: () => zb,
      _: () => ib,
      ab: () => Mb,
      d: () => Bb,
      db: () => Ob,
      f: () => pb,
      h: () => nb,
      hb: () => tb,
      ib: () => Ib,
      j: () => lb,
      jb: () => qb,
      k: () => Yb,
      n: () => Nb,
      nb: () => rb,
      qb: () => db,
      r: () => sb,
      tb: () => Pb,
      u: () => wb,
      x: () => Zb,
      xb: () => Eb
    });
    const Bb = {
      GLSL: 0,
      WGSL: 1
    };

    function Ob(bb) {
      return bb === Bb.WGSL
    }

    function Gb(bb, ub, hb) {
      return Ob(bb) ? hb : ub
    }
    const Ub = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Lb(bb, ub) {
      if (!Ob(bb)) return ub;
      const hb = Ub.get(ub);
      if (!hb) throw new Error(`No WGSL name for shader type "${ub}"`);
      return hb
    }

    function Yb(bb, ub) {
      for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
      return `${Lb(bb,ub)}(${Bb.join(", ")})`
    }

    function Sb(bb, ub) {
      return Yb(bb, "int", ub)
    }

    function ab(bb, ub, hb, Bb, Gb) {
      return Ob(bb) ? `var ${hb}: ${Lb(bb,ub)} = ${Bb};` : `${Xb(bb,Gb)}${ub} ${hb} = ${Bb};`
    }

    function Hb(bb, ub, hb) {
      return Ob(bb) ? `var ${hb}: ${Lb(bb,ub)};` : `${ub} ${hb};`
    }

    function wb(bb, ub, hb, Bb) {
      return Ob(bb) ? `const ${hb}: ${Lb(bb,ub)} = ${Bb};` : `const ${ub} ${hb} = ${Bb};`
    }

    function Zb(bb, ub, hb, Bb, Gb) {
      if (Ob(bb)) {
        return `fn ${hb}(${Bb.map((ub=>`${ub.name}: ${Lb(bb,ub.type)}`)).join(", ")}) -> ${Lb(bb,ub)} {${Gb}}`
      }
      return `${ub} ${hb}(${Bb.map((bb=>`${bb.type} ${bb.name}`)).join(", ")}) {${Gb}}`
    }

    function Xb(bb, ub) {
      return !ub || Ob(bb) ? "" : `${ub} `
    }

    function pb(bb, ub, hb, Bb) {
      return Ob(bb) ? `attribute ${ub}: ${Lb(bb,hb)};` : `attribute ${Xb(bb,Bb)}${hb} ${ub};`
    }

    function ob(bb, ub, hb, Bb) {
      return Ob(bb) ? `varying ${ub}: ${Lb(bb,hb)};` : `varying ${Xb(bb,Bb)}${hb} ${ub};`
    }

    function Ab(bb, ub, hb) {
      return Ob(bb) ? `uniform ${ub}: ${Lb(bb,hb)};` : `uniform ${hb} ${ub};`
    }

    function lb(bb) {
      return Ob(bb) ? "vertexOutputs.position" : "gl_Position"
    }

    function Kb(bb, ub) {
      return Ob(bb) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ub}}` : `void main() {${ub}}`
    }

    function Wb(bb, ub) {
      return Ob(bb) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ub}}` : `void main() {${ub}}`
    }

    function Cb(bb, ub, hb) {
      if (Ob(bb)) {
        return [`var ${ub}Sampler: sampler;`, `var ${ub}: ${"2dArray"===hb?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===hb?"sampler2DArray":"sampler2D"} ${ub};`
    }

    function db(bb, ub, hb) {
      return Ob(bb) ? `textureSample(${ub}, ${ub}Sampler, ${hb})` : `texture2D(${ub}, ${hb})`
    }

    function rb(bb, ub, hb, Bb, Gb) {
      if (Ob(bb)) {
        return `${Gb?"textureSampleLevel":"textureSample"}(${ub}, ${ub}Sampler, ${hb}, ${Sb(bb,`round(${Bb})`)}${Gb?`, ${Gb}`:""})`
      }
      const Ub = Yb(bb, "vec3", hb, Bb);
      return Gb ? `textureLod(${ub}, ${Ub}, ${Gb})` : `texture(${ub}, ${Ub})`
    }

    function jb(bb) {
      return Ob(bb) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function nb(bb) {
      return Ob(bb) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Db(bb, ub) {
      return Ob(bb) ? `vertexInputs.${ub}` : ub
    }

    function xb(bb, ub) {
      return Ob(bb) ? `vertexOutputs.${ub}` : ub
    }

    function zb(bb, ub) {
      return Ob(bb) ? `fragmentInputs.${ub}` : ub
    }

    function gb(bb, ub) {
      return Ob(bb) ? `uniforms.${ub}` : ub
    }

    function ib(bb, ub, hb) {
      return Ob(bb) ? `frame.${ub}` : hb
    }

    function vb(bb) {
      return Ob(bb) ? "scene.vEyePosition" : "vEyePosition"
    }

    function tb(bb) {
      return Ob(bb) ? "mesh.visibility" : "visibility"
    }

    function Jb(bb) {
      return Ob(bb) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function eb(bb) {
      return Ob(bb) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Nb(bb, ub) {
      return Ob(bb) ? `dpdx(${ub})` : `dFdx(${ub})`
    }

    function sb(bb, ub) {
      return Ob(bb) ? `dpdy(${ub})` : `dFdy(${ub})`
    }

    function Mb(bb, ub) {
      return Ob(bb) ? `inverseSqrt(${ub})` : `inversesqrt(${ub})`
    }

    function mb(bb, ub, hb, Bb) {
      return Ob(bb) ? `select(${Bb}, ${hb}, ${ub})` : `((${ub}) ? (${hb}) : (${Bb}))`
    }

    function Ib(bb, ub, hb) {
      return Ob(bb) ? `((${ub}) - (${hb}) * floor((${ub}) / (${hb})))` : `mod(${ub}, ${hb})`
    }

    function Pb(bb, ub, hb) {
      return Ob(bb) ? `${ub} = vec4f(${hb}, ${ub}.a);` : `${ub}.rgb = ${hb};`
    }

    function qb(bb, ub, hb) {
      return Ob(bb) ? `${ub} = vec4f(${ub}.rgb * (${hb}), ${ub}.a);` : `${ub}.rgb *= ${hb};`
    }

    function Eb(bb, ub, hb) {
      return Ob(bb) ? `${ub} = vec4f(${hb}, ${ub}.w);` : `${ub}.xyz = ${hb};`
    }
  },
  39308: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Bb.ShadersRepository : Bb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Bb.ShadersStore : Bb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Bb.IncludesShadersStore : Bb.IncludesShadersStoreWGSL
      }
    }
    Bb.ShadersRepository = "src/Shaders/", Bb.ShadersStore = {}, Bb.IncludesShadersStore = {}, Bb.ShadersRepositoryWGSL = "src/ShadersWGSL/", Bb.ShadersStoreWGSL = {}, Bb.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);