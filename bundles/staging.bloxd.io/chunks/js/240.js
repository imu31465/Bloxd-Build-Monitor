export const id = 240;
export const ids = [240];
export const modules = {
  61510: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      DEVTOOLS_SHADERS: () => Zu,
      registerDevtoolsShader: () => Xu
    });
    var su = ju(40127),
      Uu = ju(37582);
    const Zu = {
      devtoolsNormal: function(uu) {
        return {
          vertex: `\n\t\t\t${(0,Uu.g)(uu,"position","vec3")}\n\t\t\t${(0,Uu.g)(uu,"normal","vec3")}\n\t\t\t${(0,Uu.zb)(uu,"worldViewProjection","mat4")}\n\t\t\t${(0,Uu.zb)(uu,"world","mat4")}\n\t\t\t${(0,Uu.Bb)(uu,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Uu.Db)(uu,`\n\t\t\t\t${(0,Uu.n)(uu)} = ${(0,Uu.Ab)(uu,"worldViewProjection")} * ${(0,Uu.r)(uu,"vec4",(0,Uu.Fb)(uu,"position"),"1.0")};\n\t\t\t\t${(0,Uu.Ib)(uu,"vNormal")} = normalize((${(0,Uu.Ab)(uu,"world")} * ${(0,Uu.r)(uu,"vec4",(0,Uu.Fb)(uu,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Uu.Bb)(uu,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Uu.U)(uu,`\n\t\t\t\t\n\t\t\t\t${(0,Uu.I)(uu,"vec3","normalColor",`abs(${(0,Uu.V)(uu,"vNormal")})`)}\n\t\t\t\t${(0,Uu.P)(uu)} = ${(0,Uu.r)(uu,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(uu) {
        return {
          vertex: `\n\t\t\t${(0,Uu.g)(uu,"position","vec3")}\n\t\t\t${(0,Uu.zb)(uu,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Uu.Db)(uu,`\n\t\t\t\t${(0,Uu.n)(uu)} = ${(0,Uu.Ab)(uu,"worldViewProjection")} * ${(0,Uu.r)(uu,"vec4",(0,Uu.Fb)(uu,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Uu.U)(uu,`\n\t\t\t\t${(0,Uu.P)(uu)} = ${(0,Uu.r)(uu,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(uu) {
        return {
          vertex: `\n\t\t\t${(0,Uu.g)(uu,"position","vec3")}\n\t\t\t${(0,Uu.zb)(uu,"worldViewProjection","mat4")}\n\t\t\t${(0,Uu.zb)(uu,"world","mat4")}\n\t\t\t${(0,Uu.zb)(uu,"cameraPosition","vec3")}\n\t\t\t${(0,Uu.Bb)(uu,"vDepth","float","mediump")}\n\n\t\t\t${(0,Uu.Db)(uu,`\n\t\t\t\t${(0,Uu.n)(uu)} = ${(0,Uu.Ab)(uu,"worldViewProjection")} * ${(0,Uu.r)(uu,"vec4",(0,Uu.Fb)(uu,"position"),"1.0")};\n\t\t\t\t${(0,Uu.I)(uu,"vec3","worldPosition",`(${(0,Uu.Ab)(uu,"world")} * ${(0,Uu.r)(uu,"vec4",(0,Uu.Fb)(uu,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Uu.Ib)(uu,"vDepth")} = distance(worldPosition, ${(0,Uu.Ab)(uu,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Uu.Bb)(uu,"vDepth","float","mediump")}\n\t\t\t${(0,Uu.zb)(uu,"maxDepth","float")}\n\t\t\t${(0,Uu.zb)(uu,"minDepth","float")}\n\n\t\t\t${(0,Uu.U)(uu,`\n\t\t\t\t\n\t\t\t\t${(0,Uu.I)(uu,"float","normalizedDepth",`clamp((${(0,Uu.V)(uu,"vDepth")} - ${(0,Uu.Ab)(uu,"minDepth")}) / (${(0,Uu.Ab)(uu,"maxDepth")} - ${(0,Uu.Ab)(uu,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Uu.I)(uu,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Uu.P)(uu)} = ${(0,Uu.r)(uu,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Xu(uu, Eu) {
      const {
        vertex: ju,
        fragment: Uu
      } = Zu[uu](Eu), Xu = su.b.GetShadersStore(Eu);
      Xu[`${uu}VertexShader`] = ju, Xu[`${uu}FragmentShader`] = Uu
    }
  },
  37582: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      Ab: () => ku,
      Bb: () => hu,
      D: () => Nu,
      Db: () => Mu,
      F: () => bu,
      Fb: () => au,
      I: () => Cu,
      Ib: () => Pu,
      J: () => Ju,
      L: () => vu,
      M: () => Zu,
      P: () => ru,
      S: () => Vu,
      U: () => eu,
      V: () => ou,
      Y: () => mu,
      ab: () => Wu,
      bb: () => Uu,
      c: () => su,
      eb: () => Ku,
      g: () => Yu,
      gb: () => Iu,
      k: () => du,
      kb: () => Bu,
      mb: () => wu,
      n: () => gu,
      ob: () => pu,
      r: () => qu,
      sb: () => Fu,
      tb: () => Lu,
      u: () => Qu,
      ub: () => Su,
      vb: () => Gu,
      w: () => iu,
      xb: () => fu,
      zb: () => Du
    });
    const su = {
      GLSL: 0,
      WGSL: 1
    };

    function Uu(uu) {
      return uu === su.WGSL
    }

    function Zu(uu, Eu, ju) {
      return Uu(uu) ? ju : Eu
    }
    const Xu = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function lu(uu, Eu) {
      if (!Uu(uu)) return Eu;
      const ju = Xu.get(Eu);
      if (!ju) throw new Error(`No WGSL name for shader type "${Eu}"`);
      return ju
    }

    function qu(uu, Eu) {
      for (var ju = arguments.length, su = new Array(ju > 2 ? ju - 2 : 0), Uu = 2; Uu < ju; Uu++) su[Uu - 2] = arguments[Uu];
      return `${lu(uu,Eu)}(${su.join(", ")})`
    }

    function fu(uu, Eu) {
      return qu(uu, "int", Eu)
    }

    function Cu(uu, Eu, ju, su, Zu) {
      return Uu(uu) ? `var ${ju}: ${lu(uu,Eu)} = ${su};` : `${Ou(uu,Zu)}${Eu} ${ju} = ${su};`
    }

    function bu(uu, Eu, ju) {
      return Uu(uu) ? `var ${ju}: ${lu(uu,Eu)};` : `${Eu} ${ju};`
    }

    function cu(uu, Eu, ju, su) {
      return Uu(uu) ? `const ${ju}: ${lu(uu,Eu)} = ${su};` : `const ${Eu} ${ju} = ${su};`
    }

    function Nu(uu, Eu, ju, su, Zu) {
      if (Uu(uu)) {
        return `fn ${ju}(${su.map((Eu=>`${Eu.name}: ${lu(uu,Eu.type)}`)).join(", ")}) -> ${lu(uu,Eu)} {${Zu}}`
      }
      return `${Eu} ${ju}(${su.map((uu=>`${uu.type} ${uu.name}`)).join(", ")}) {${Zu}}`
    }

    function Ou(uu, Eu) {
      return !Eu || Uu(uu) ? "" : `${Eu} `
    }

    function Yu(uu, Eu, ju, su) {
      return Uu(uu) ? `attribute ${Eu}: ${lu(uu,ju)};` : `attribute ${Ou(uu,su)}${ju} ${Eu};`
    }

    function hu(uu, Eu, ju, su) {
      return Uu(uu) ? `varying ${Eu}: ${lu(uu,ju)};` : `varying ${Ou(uu,su)}${ju} ${Eu};`
    }

    function Du(uu, Eu, ju) {
      return Uu(uu) ? `uniform ${Eu}: ${lu(uu,ju)};` : `uniform ${ju} ${Eu};`
    }

    function gu(uu) {
      return Uu(uu) ? "vertexOutputs.position" : "gl_Position"
    }

    function Mu(uu, Eu) {
      return Uu(uu) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Eu}}` : `void main() {${Eu}}`
    }

    function eu(uu, Eu) {
      return Uu(uu) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Eu}}` : `void main() {${Eu}}`
    }

    function Gu(uu, Eu, ju) {
      if (Uu(uu)) {
        return [`var ${Eu}Sampler: sampler;`, `var ${Eu}: ${"2dArray"===ju?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===ju?"sampler2DArray":"sampler2D"} ${Eu};`
    }

    function pu(uu, Eu, ju) {
      return Uu(uu) ? `textureSample(${Eu}, ${Eu}Sampler, ${ju})` : `texture2D(${Eu}, ${ju})`
    }

    function wu(uu, Eu, ju, su, Zu) {
      if (Uu(uu)) {
        return `${Zu?"textureSampleLevel":"textureSample"}(${Eu}, ${Eu}Sampler, ${ju}, ${fu(uu,`round(${su})`)}${Zu?`, ${Zu}`:""})`
      }
      const Xu = qu(uu, "vec3", ju, su);
      return Zu ? `textureLod(${Eu}, ${Xu}, ${Zu})` : `texture(${Eu}, ${Xu})`
    }

    function Ju(uu) {
      return Uu(uu) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function du(uu) {
      return Uu(uu) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function au(uu, Eu) {
      return Uu(uu) ? `vertexInputs.${Eu}` : Eu
    }

    function Pu(uu, Eu) {
      return Uu(uu) ? `vertexOutputs.${Eu}` : Eu
    }

    function ou(uu, Eu) {
      return Uu(uu) ? `fragmentInputs.${Eu}` : Eu
    }

    function ku(uu, Eu) {
      return Uu(uu) ? `uniforms.${Eu}` : Eu
    }

    function mu(uu, Eu, ju) {
      return Uu(uu) ? `frame.${Eu}` : ju
    }

    function vu(uu) {
      return Uu(uu) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Ku(uu) {
      return Uu(uu) ? "mesh.visibility" : "visibility"
    }

    function Vu(uu) {
      return Uu(uu) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function ru(uu) {
      return Uu(uu) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Qu(uu, Eu) {
      return Uu(uu) ? `dpdx(${Eu})` : `dFdx(${Eu})`
    }

    function iu(uu, Eu) {
      return Uu(uu) ? `dpdy(${Eu})` : `dFdy(${Eu})`
    }

    function Wu(uu, Eu) {
      return Uu(uu) ? `inverseSqrt(${Eu})` : `inversesqrt(${Eu})`
    }

    function Su(uu, Eu, ju, su) {
      return Uu(uu) ? `select(${su}, ${ju}, ${Eu})` : `((${Eu}) ? (${ju}) : (${su}))`
    }

    function Iu(uu, Eu, ju) {
      return Uu(uu) ? `((${Eu}) - (${ju}) * floor((${Eu}) / (${ju})))` : `mod(${Eu}, ${ju})`
    }

    function Fu(uu, Eu, ju) {
      return Uu(uu) ? `${Eu} = vec4f(${ju}, ${Eu}.a);` : `${Eu}.rgb = ${ju};`
    }

    function Bu(uu, Eu, ju) {
      return Uu(uu) ? `${Eu} = vec4f(${Eu}.rgb * (${ju}), ${Eu}.a);` : `${Eu}.rgb *= ${ju};`
    }

    function Lu(uu, Eu, ju) {
      return Uu(uu) ? `${Eu} = vec4f(${ju}, ${Eu}.w);` : `${Eu}.xyz = ${ju};`
    }
  },
  40127: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.ShadersRepository : su.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.ShadersStore : su.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? su.IncludesShadersStore : su.IncludesShadersStoreWGSL
      }
    }
    su.ShadersRepository = "src/Shaders/", su.ShadersStore = {}, su.IncludesShadersStore = {}, su.ShadersRepositoryWGSL = "src/ShadersWGSL/", su.ShadersStoreWGSL = {}, su.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);