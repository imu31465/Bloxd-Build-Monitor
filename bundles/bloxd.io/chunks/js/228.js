export const id = 228;
export const ids = [228];
export const modules = {
  61014: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      DEVTOOLS_SHADERS: () => Qu,
      registerDevtoolsShader: () => mu
    });
    var Eu = yu(39403),
      Ku = yu(36906);
    const Qu = {
      devtoolsNormal: function(uu) {
        return {
          vertex: `\n\t\t\t${(0,Ku.d)(uu,"position","vec3")}\n\t\t\t${(0,Ku.d)(uu,"normal","vec3")}\n\t\t\t${(0,Ku.Bb)(uu,"worldViewProjection","mat4")}\n\t\t\t${(0,Ku.Bb)(uu,"world","mat4")}\n\t\t\t${(0,Ku.Eb)(uu,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Ku.Fb)(uu,`\n\t\t\t\t${(0,Ku.i)(uu)} = ${(0,Ku.Db)(uu,"worldViewProjection")} * ${(0,Ku.k)(uu,"vec4",(0,Ku.Jb)(uu,"position"),"1.0")};\n\t\t\t\t${(0,Ku.Nb)(uu,"vNormal")} = normalize((${(0,Ku.Db)(uu,"world")} * ${(0,Ku.k)(uu,"vec4",(0,Ku.Jb)(uu,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ku.Eb)(uu,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Ku.Q)(uu,`\n\t\t\t\t\n\t\t\t\t${(0,Ku.D)(uu,"vec3","normalColor",`abs(${(0,Ku.T)(uu,"vNormal")})`)}\n\t\t\t\t${(0,Ku.O)(uu)} = ${(0,Ku.k)(uu,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(uu) {
        return {
          vertex: `\n\t\t\t${(0,Ku.d)(uu,"position","vec3")}\n\t\t\t${(0,Ku.Bb)(uu,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Ku.Fb)(uu,`\n\t\t\t\t${(0,Ku.i)(uu)} = ${(0,Ku.Db)(uu,"worldViewProjection")} * ${(0,Ku.k)(uu,"vec4",(0,Ku.Jb)(uu,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ku.Q)(uu,`\n\t\t\t\t${(0,Ku.O)(uu)} = ${(0,Ku.k)(uu,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(uu) {
        return {
          vertex: `\n\t\t\t${(0,Ku.d)(uu,"position","vec3")}\n\t\t\t${(0,Ku.Bb)(uu,"worldViewProjection","mat4")}\n\t\t\t${(0,Ku.Bb)(uu,"world","mat4")}\n\t\t\t${(0,Ku.Bb)(uu,"cameraPosition","vec3")}\n\t\t\t${(0,Ku.Eb)(uu,"vDepth","float","mediump")}\n\n\t\t\t${(0,Ku.Fb)(uu,`\n\t\t\t\t${(0,Ku.i)(uu)} = ${(0,Ku.Db)(uu,"worldViewProjection")} * ${(0,Ku.k)(uu,"vec4",(0,Ku.Jb)(uu,"position"),"1.0")};\n\t\t\t\t${(0,Ku.D)(uu,"vec3","worldPosition",`(${(0,Ku.Db)(uu,"world")} * ${(0,Ku.k)(uu,"vec4",(0,Ku.Jb)(uu,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Ku.Nb)(uu,"vDepth")} = distance(worldPosition, ${(0,Ku.Db)(uu,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ku.Eb)(uu,"vDepth","float","mediump")}\n\t\t\t${(0,Ku.Bb)(uu,"maxDepth","float")}\n\t\t\t${(0,Ku.Bb)(uu,"minDepth","float")}\n\n\t\t\t${(0,Ku.Q)(uu,`\n\t\t\t\t\n\t\t\t\t${(0,Ku.D)(uu,"float","normalizedDepth",`clamp((${(0,Ku.T)(uu,"vDepth")} - ${(0,Ku.Db)(uu,"minDepth")}) / (${(0,Ku.Db)(uu,"maxDepth")} - ${(0,Ku.Db)(uu,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Ku.D)(uu,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Ku.O)(uu)} = ${(0,Ku.k)(uu,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function mu(uu, Ru) {
      const {
        vertex: yu,
        fragment: Ku
      } = Qu[uu](Ru), mu = Eu.e.GetShadersStore(Ru);
      mu[`${uu}VertexShader`] = yu, mu[`${uu}FragmentShader`] = Ku
    }
  },
  36906: (uu, Ru, yu) => {
    yu.d(Ru, {
      Bb: () => Wu,
      D: () => Vu,
      Db: () => Gu,
      E: () => eu,
      Eb: () => Tu,
      Fb: () => Hu,
      I: () => nu,
      Jb: () => Du,
      M: () => Qu,
      Nb: () => Mu,
      O: () => lu,
      P: () => tu,
      Q: () => du,
      T: () => Iu,
      V: () => Uu,
      X: () => Lu,
      _: () => Ku,
      c: () => Eu,
      cb: () => su,
      d: () => pu,
      eb: () => Fu,
      f: () => Au,
      hb: () => Zu,
      i: () => ju,
      jb: () => ku,
      k: () => Nu,
      nb: () => Cu,
      o: () => gu,
      pb: () => wu,
      q: () => cu,
      r: () => Bu,
      sb: () => hu,
      v: () => xu,
      vb: () => zu,
      xb: () => bu,
      z: () => ru,
      zb: () => Xu
    });
    const Eu = {
      GLSL: 0,
      WGSL: 1
    };

    function Ku(uu) {
      return uu === Eu.WGSL
    }

    function Qu(uu, Ru, yu) {
      return Ku(uu) ? yu : Ru
    }
    const mu = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Ju(uu, Ru) {
      if (!Ku(uu)) return Ru;
      const yu = mu.get(Ru);
      if (!yu) throw new Error(`No WGSL name for shader type "${Ru}"`);
      return yu
    }

    function Nu(uu, Ru) {
      for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
      return `${Ju(uu,Ru)}(${Eu.join(", ")})`
    }

    function Xu(uu, Ru) {
      return Nu(uu, "int", Ru)
    }

    function Vu(uu, Ru, yu, Eu, Qu) {
      return Ku(uu) ? `var ${yu}: ${Ju(uu,Ru)} = ${Eu};` : `${Su(uu,Qu)}${Ru} ${yu} = ${Eu};`
    }

    function ru(uu, Ru, yu) {
      return Ku(uu) ? `var ${yu}: ${Ju(uu,Ru)};` : `${Ru} ${yu};`
    }

    function Bu(uu, Ru, yu, Eu) {
      return Ku(uu) ? `const ${yu}: ${Ju(uu,Ru)} = ${Eu};` : `const ${Ru} ${yu} = ${Eu};`
    }

    function xu(uu, Ru, yu, Eu, Qu) {
      if (Ku(uu)) {
        return `fn ${yu}(${Eu.map((Ru=>`${Ru.name}: ${Ju(uu,Ru.type)}`)).join(", ")}) -> ${Ju(uu,Ru)} {${Qu}}`
      }
      return `${Ru} ${yu}(${Eu.map((uu=>`${uu.type} ${uu.name}`)).join(", ")}) {${Qu}}`
    }

    function Su(uu, Ru) {
      return !Ru || Ku(uu) ? "" : `${Ru} `
    }

    function pu(uu, Ru, yu, Eu) {
      return Ku(uu) ? `attribute ${Ru}: ${Ju(uu,yu)};` : `attribute ${Su(uu,Eu)}${yu} ${Ru};`
    }

    function Tu(uu, Ru, yu, Eu) {
      return Ku(uu) ? `varying ${Ru}: ${Ju(uu,yu)};` : `varying ${Su(uu,Eu)}${yu} ${Ru};`
    }

    function Wu(uu, Ru, yu) {
      return Ku(uu) ? `uniform ${Ru}: ${Ju(uu,yu)};` : `uniform ${yu} ${Ru};`
    }

    function ju(uu) {
      return Ku(uu) ? "vertexOutputs.position" : "gl_Position"
    }

    function Hu(uu, Ru) {
      return Ku(uu) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Ru}}` : `void main() {${Ru}}`
    }

    function du(uu, Ru) {
      return Ku(uu) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Ru}}` : `void main() {${Ru}}`
    }

    function bu(uu, Ru, yu) {
      if (Ku(uu)) {
        return [`var ${Ru}Sampler: sampler;`, `var ${Ru}: ${"2dArray"===yu?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===yu?"sampler2DArray":"sampler2D"} ${Ru};`
    }

    function Cu(uu, Ru, yu) {
      return Ku(uu) ? `textureSample(${Ru}, ${Ru}Sampler, ${yu})` : `texture2D(${Ru}, ${yu})`
    }

    function ku(uu, Ru, yu, Eu, Qu) {
      if (Ku(uu)) {
        return `${Qu?"textureSampleLevel":"textureSample"}(${Ru}, ${Ru}Sampler, ${yu}, ${Xu(uu,`round(${Eu})`)}${Qu?`, ${Qu}`:""})`
      }
      const mu = Nu(uu, "vec3", yu, Eu);
      return Qu ? `textureLod(${Ru}, ${mu}, ${Qu})` : `texture(${Ru}, ${mu})`
    }

    function eu(uu) {
      return Ku(uu) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Au(uu) {
      return Ku(uu) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Du(uu, Ru) {
      return Ku(uu) ? `vertexInputs.${Ru}` : Ru
    }

    function Mu(uu, Ru) {
      return Ku(uu) ? `vertexOutputs.${Ru}` : Ru
    }

    function Iu(uu, Ru) {
      return Ku(uu) ? `fragmentInputs.${Ru}` : Ru
    }

    function Gu(uu, Ru) {
      return Ku(uu) ? `uniforms.${Ru}` : Ru
    }

    function Uu(uu, Ru, yu) {
      return Ku(uu) ? `frame.${Ru}` : yu
    }

    function nu(uu) {
      return Ku(uu) ? "scene.vEyePosition" : "vEyePosition"
    }

    function su(uu) {
      return Ku(uu) ? "mesh.visibility" : "visibility"
    }

    function tu(uu) {
      return Ku(uu) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function lu(uu) {
      return Ku(uu) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function gu(uu, Ru) {
      return Ku(uu) ? `dpdx(${Ru})` : `dFdx(${Ru})`
    }

    function cu(uu, Ru) {
      return Ku(uu) ? `dpdy(${Ru})` : `dFdy(${Ru})`
    }

    function Lu(uu, Ru) {
      return Ku(uu) ? `inverseSqrt(${Ru})` : `inversesqrt(${Ru})`
    }

    function zu(uu, Ru, yu, Eu) {
      return Ku(uu) ? `select(${Eu}, ${yu}, ${Ru})` : `((${Ru}) ? (${yu}) : (${Eu}))`
    }

    function Fu(uu, Ru, yu) {
      return Ku(uu) ? `((${Ru}) - (${yu}) * floor((${Ru}) / (${yu})))` : `mod(${Ru}, ${yu})`
    }

    function wu(uu, Ru, yu) {
      return Ku(uu) ? `${Ru} = vec4f(${yu}, ${Ru}.a);` : `${Ru}.rgb = ${yu};`
    }

    function Zu(uu, Ru, yu) {
      return Ku(uu) ? `${Ru} = vec4f(${Ru}.rgb * (${yu}), ${Ru}.a);` : `${Ru}.rgb *= ${yu};`
    }

    function hu(uu, Ru, yu) {
      return Ku(uu) ? `${Ru} = vec4f(${yu}, ${Ru}.w);` : `${Ru}.xyz = ${yu};`
    }
  },
  39403: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.ShadersRepository : Eu.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.ShadersStore : Eu.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Eu.IncludesShadersStore : Eu.IncludesShadersStoreWGSL
      }
    }
    Eu.ShadersRepository = "src/Shaders/", Eu.ShadersStore = {}, Eu.IncludesShadersStore = {}, Eu.ShadersRepositoryWGSL = "src/ShadersWGSL/", Eu.ShadersStoreWGSL = {}, Eu.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);