export const id = 228;
export const ids = [228];
export const modules = {
  60255: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      DEVTOOLS_SHADERS: () => Tb,
      registerDevtoolsShader: () => Eb
    });
    var Ab = Ub(38943),
      Mb = Ub(36495);
    const Tb = {
      devtoolsNormal: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Mb.h)(bb,"position","vec3")}\n\t\t\t${(0,Mb.h)(bb,"normal","vec3")}\n\t\t\t${(0,Mb.Hb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Mb.Hb)(bb,"world","mat4")}\n\t\t\t${(0,Mb.Pb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Mb.Rb)(bb,`\n\t\t\t\t${(0,Mb.m)(bb)} = ${(0,Mb.Lb)(bb,"worldViewProjection")} * ${(0,Mb.p)(bb,"vec4",(0,Mb.Sb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Mb.Ub)(bb,"vNormal")} = normalize((${(0,Mb.Lb)(bb,"world")} * ${(0,Mb.p)(bb,"vec4",(0,Mb.Sb)(bb,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Mb.Pb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Mb.T)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Mb.G)(bb,"vec3","normalColor",`abs(${(0,Mb.W)(bb,"vNormal")})`)}\n\t\t\t\t${(0,Mb.O)(bb)} = ${(0,Mb.p)(bb,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Mb.h)(bb,"position","vec3")}\n\t\t\t${(0,Mb.Hb)(bb,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Mb.Rb)(bb,`\n\t\t\t\t${(0,Mb.m)(bb)} = ${(0,Mb.Lb)(bb,"worldViewProjection")} * ${(0,Mb.p)(bb,"vec4",(0,Mb.Sb)(bb,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Mb.T)(bb,`\n\t\t\t\t${(0,Mb.O)(bb)} = ${(0,Mb.p)(bb,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(bb) {
        return {
          vertex: `\n\t\t\t${(0,Mb.h)(bb,"position","vec3")}\n\t\t\t${(0,Mb.Hb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Mb.Hb)(bb,"world","mat4")}\n\t\t\t${(0,Mb.Hb)(bb,"cameraPosition","vec3")}\n\t\t\t${(0,Mb.Pb)(bb,"vDepth","float","mediump")}\n\n\t\t\t${(0,Mb.Rb)(bb,`\n\t\t\t\t${(0,Mb.m)(bb)} = ${(0,Mb.Lb)(bb,"worldViewProjection")} * ${(0,Mb.p)(bb,"vec4",(0,Mb.Sb)(bb,"position"),"1.0")};\n\t\t\t\t${(0,Mb.G)(bb,"vec3","worldPosition",`(${(0,Mb.Lb)(bb,"world")} * ${(0,Mb.p)(bb,"vec4",(0,Mb.Sb)(bb,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Mb.Ub)(bb,"vDepth")} = distance(worldPosition, ${(0,Mb.Lb)(bb,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Mb.Pb)(bb,"vDepth","float","mediump")}\n\t\t\t${(0,Mb.Hb)(bb,"maxDepth","float")}\n\t\t\t${(0,Mb.Hb)(bb,"minDepth","float")}\n\n\t\t\t${(0,Mb.T)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Mb.G)(bb,"float","normalizedDepth",`clamp((${(0,Mb.W)(bb,"vDepth")} - ${(0,Mb.Lb)(bb,"minDepth")}) / (${(0,Mb.Lb)(bb,"maxDepth")} - ${(0,Mb.Lb)(bb,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Mb.G)(bb,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Mb.O)(bb)} = ${(0,Mb.p)(bb,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Eb(bb, ab) {
      const {
        vertex: Ub,
        fragment: Mb
      } = Tb[bb](ab), Eb = Ab.d.GetShadersStore(ab);
      Eb[`${bb}VertexShader`] = Ub, Eb[`${bb}FragmentShader`] = Mb
    }
  },
  36495: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => Xb,
      Cb: () => xb,
      E: () => Lb,
      G: () => vb,
      Gb: () => eb,
      Hb: () => yb,
      J: () => mb,
      Lb: () => Ib,
      M: () => Fb,
      N: () => Tb,
      O: () => Qb,
      P: () => Gb,
      Pb: () => kb,
      Rb: () => Db,
      Sb: () => Nb,
      T: () => zb,
      Ub: () => Wb,
      W: () => Hb,
      Z: () => db,
      bb: () => rb,
      d: () => Ab,
      eb: () => Mb,
      gb: () => hb,
      h: () => Rb,
      hb: () => ob,
      j: () => pb,
      kb: () => tb,
      m: () => Zb,
      mb: () => fb,
      nb: () => ib,
      p: () => Bb,
      rb: () => lb,
      s: () => qb,
      vb: () => wb,
      w: () => ub,
      z: () => Pb,
      zb: () => Kb
    });
    const Ab = {
      GLSL: 0,
      WGSL: 1
    };

    function Mb(bb) {
      return bb === Ab.WGSL
    }

    function Tb(bb, ab, Ub) {
      return Mb(bb) ? Ub : ab
    }
    const Eb = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Yb(bb, ab) {
      if (!Mb(bb)) return ab;
      const Ub = Eb.get(ab);
      if (!Ub) throw new Error(`No WGSL name for shader type "${ab}"`);
      return Ub
    }

    function Bb(bb, ab) {
      for (var Ub = arguments.length, Ab = new Array(Ub > 2 ? Ub - 2 : 0), Mb = 2; Mb < Ub; Mb++) Ab[Mb - 2] = arguments[Mb];
      return `${Yb(bb,ab)}(${Ab.join(", ")})`
    }

    function eb(bb, ab) {
      return Bb(bb, "int", ab)
    }

    function vb(bb, ab, Ub, Ab, Tb) {
      return Mb(bb) ? `var ${Ub}: ${Yb(bb,ab)} = ${Ab};` : `${jb(bb,Tb)}${ab} ${Ub} = ${Ab};`
    }

    function Lb(bb, ab, Ub) {
      return Mb(bb) ? `var ${Ub}: ${Yb(bb,ab)};` : `${ab} ${Ub};`
    }

    function Pb(bb, ab, Ub, Ab) {
      return Mb(bb) ? `const ${Ub}: ${Yb(bb,ab)} = ${Ab};` : `const ${ab} ${Ub} = ${Ab};`
    }

    function Xb(bb, ab, Ub, Ab, Tb) {
      if (Mb(bb)) {
        return `fn ${Ub}(${Ab.map((ab=>`${ab.name}: ${Yb(bb,ab.type)}`)).join(", ")}) -> ${Yb(bb,ab)} {${Tb}}`
      }
      return `${ab} ${Ub}(${Ab.map((bb=>`${bb.type} ${bb.name}`)).join(", ")}) {${Tb}}`
    }

    function jb(bb, ab) {
      return !ab || Mb(bb) ? "" : `${ab} `
    }

    function Rb(bb, ab, Ub, Ab) {
      return Mb(bb) ? `attribute ${ab}: ${Yb(bb,Ub)};` : `attribute ${jb(bb,Ab)}${Ub} ${ab};`
    }

    function kb(bb, ab, Ub, Ab) {
      return Mb(bb) ? `varying ${ab}: ${Yb(bb,Ub)};` : `varying ${jb(bb,Ab)}${Ub} ${ab};`
    }

    function yb(bb, ab, Ub) {
      return Mb(bb) ? `uniform ${ab}: ${Yb(bb,Ub)};` : `uniform ${Ub} ${ab};`
    }

    function Zb(bb) {
      return Mb(bb) ? "vertexOutputs.position" : "gl_Position"
    }

    function Db(bb, ab) {
      return Mb(bb) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ab}}` : `void main() {${ab}}`
    }

    function zb(bb, ab) {
      return Mb(bb) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ab}}` : `void main() {${ab}}`
    }

    function xb(bb, ab, Ub) {
      if (Mb(bb)) {
        return [`var ${ab}Sampler: sampler;`, `var ${ab}: ${"2dArray"===Ub?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Ub?"sampler2DArray":"sampler2D"} ${ab};`
    }

    function ib(bb, ab, Ub) {
      return Mb(bb) ? `textureSample(${ab}, ${ab}Sampler, ${Ub})` : `texture2D(${ab}, ${Ub})`
    }

    function fb(bb, ab, Ub, Ab, Tb) {
      if (Mb(bb)) {
        return `${Tb?"textureSampleLevel":"textureSample"}(${ab}, ${ab}Sampler, ${Ub}, ${eb(bb,`round(${Ab})`)}${Tb?`, ${Tb}`:""})`
      }
      const Eb = Bb(bb, "vec3", Ub, Ab);
      return Tb ? `textureLod(${ab}, ${Eb}, ${Tb})` : `texture(${ab}, ${Eb})`
    }

    function mb(bb) {
      return Mb(bb) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function pb(bb) {
      return Mb(bb) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Nb(bb, ab) {
      return Mb(bb) ? `vertexInputs.${ab}` : ab
    }

    function Wb(bb, ab) {
      return Mb(bb) ? `vertexOutputs.${ab}` : ab
    }

    function Hb(bb, ab) {
      return Mb(bb) ? `fragmentInputs.${ab}` : ab
    }

    function Ib(bb, ab) {
      return Mb(bb) ? `uniforms.${ab}` : ab
    }

    function db(bb, ab, Ub) {
      return Mb(bb) ? `frame.${ab}` : Ub
    }

    function Fb(bb) {
      return Mb(bb) ? "scene.vEyePosition" : "vEyePosition"
    }

    function hb(bb) {
      return Mb(bb) ? "mesh.visibility" : "visibility"
    }

    function Gb(bb) {
      return Mb(bb) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Qb(bb) {
      return Mb(bb) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function qb(bb, ab) {
      return Mb(bb) ? `dpdx(${ab})` : `dFdx(${ab})`
    }

    function ub(bb, ab) {
      return Mb(bb) ? `dpdy(${ab})` : `dFdy(${ab})`
    }

    function rb(bb, ab) {
      return Mb(bb) ? `inverseSqrt(${ab})` : `inversesqrt(${ab})`
    }

    function Kb(bb, ab, Ub, Ab) {
      return Mb(bb) ? `select(${Ab}, ${Ub}, ${ab})` : `((${ab}) ? (${Ub}) : (${Ab}))`
    }

    function ob(bb, ab, Ub) {
      return Mb(bb) ? `((${ab}) - (${Ub}) * floor((${ab}) / (${Ub})))` : `mod(${ab}, ${Ub})`
    }

    function lb(bb, ab, Ub) {
      return Mb(bb) ? `${ab} = vec4f(${Ub}, ${ab}.a);` : `${ab}.rgb = ${Ub};`
    }

    function tb(bb, ab, Ub) {
      return Mb(bb) ? `${ab} = vec4f(${ab}.rgb * (${Ub}), ${ab}.a);` : `${ab}.rgb *= ${Ub};`
    }

    function wb(bb, ab, Ub) {
      return Mb(bb) ? `${ab} = vec4f(${Ub}, ${ab}.w);` : `${ab}.xyz = ${Ub};`
    }
  },
  38943: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.ShadersRepository : Ab.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.ShadersStore : Ab.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.IncludesShadersStore : Ab.IncludesShadersStoreWGSL
      }
    }
    Ab.ShadersRepository = "src/Shaders/", Ab.ShadersStore = {}, Ab.IncludesShadersStore = {}, Ab.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ab.ShadersStoreWGSL = {}, Ab.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);