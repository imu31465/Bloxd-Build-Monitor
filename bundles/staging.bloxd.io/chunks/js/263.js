export const id = 263;
export const ids = [263];
export const modules = {
  63840: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      DEVTOOLS_SHADERS: () => Me,
      registerDevtoolsShader: () => Ke
    });
    var ye = He(40954),
      be = He(38034);
    const Me = {
      devtoolsNormal: function(ee) {
        return {
          vertex: `\n\t\t\t${(0,be.f)(ee,"position","vec3")}\n\t\t\t${(0,be.f)(ee,"normal","vec3")}\n\t\t\t${(0,be.yb)(ee,"worldViewProjection","mat4")}\n\t\t\t${(0,be.yb)(ee,"world","mat4")}\n\t\t\t${(0,be.Cb)(ee,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,be.Eb)(ee,`\n\t\t\t\t${(0,be.m)(ee)} = ${(0,be.zb)(ee,"worldViewProjection")} * ${(0,be.o)(ee,"vec4",(0,be.Fb)(ee,"position"),"1.0")};\n\t\t\t\t${(0,be.Ib)(ee,"vNormal")} = normalize((${(0,be.zb)(ee,"world")} * ${(0,be.o)(ee,"vec4",(0,be.Fb)(ee,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,be.Cb)(ee,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,be.Q)(ee,`\n\t\t\t\t\n\t\t\t\t${(0,be.C)(ee,"vec3","normalColor",`abs(${(0,be.S)(ee,"vNormal")})`)}\n\t\t\t\t${(0,be.L)(ee)} = ${(0,be.o)(ee,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(ee) {
        return {
          vertex: `\n\t\t\t${(0,be.f)(ee,"position","vec3")}\n\t\t\t${(0,be.yb)(ee,"worldViewProjection","mat4")}\n\n\t\t\t${(0,be.Eb)(ee,`\n\t\t\t\t${(0,be.m)(ee)} = ${(0,be.zb)(ee,"worldViewProjection")} * ${(0,be.o)(ee,"vec4",(0,be.Fb)(ee,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,be.Q)(ee,`\n\t\t\t\t${(0,be.L)(ee)} = ${(0,be.o)(ee,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(ee) {
        return {
          vertex: `\n\t\t\t${(0,be.f)(ee,"position","vec3")}\n\t\t\t${(0,be.yb)(ee,"worldViewProjection","mat4")}\n\t\t\t${(0,be.yb)(ee,"world","mat4")}\n\t\t\t${(0,be.yb)(ee,"cameraPosition","vec3")}\n\t\t\t${(0,be.Cb)(ee,"vDepth","float","mediump")}\n\n\t\t\t${(0,be.Eb)(ee,`\n\t\t\t\t${(0,be.m)(ee)} = ${(0,be.zb)(ee,"worldViewProjection")} * ${(0,be.o)(ee,"vec4",(0,be.Fb)(ee,"position"),"1.0")};\n\t\t\t\t${(0,be.C)(ee,"vec3","worldPosition",`(${(0,be.zb)(ee,"world")} * ${(0,be.o)(ee,"vec4",(0,be.Fb)(ee,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,be.Ib)(ee,"vDepth")} = distance(worldPosition, ${(0,be.zb)(ee,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,be.Cb)(ee,"vDepth","float","mediump")}\n\t\t\t${(0,be.yb)(ee,"maxDepth","float")}\n\t\t\t${(0,be.yb)(ee,"minDepth","float")}\n\n\t\t\t${(0,be.Q)(ee,`\n\t\t\t\t\n\t\t\t\t${(0,be.C)(ee,"float","normalizedDepth",`clamp((${(0,be.S)(ee,"vDepth")} - ${(0,be.zb)(ee,"minDepth")}) / (${(0,be.zb)(ee,"maxDepth")} - ${(0,be.zb)(ee,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,be.C)(ee,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,be.L)(ee)} = ${(0,be.o)(ee,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Ke(ee, ie) {
      const {
        vertex: He,
        fragment: be
      } = Me[ee](ie), Ke = ye.d.GetShadersStore(ie);
      Ke[`${ee}VertexShader`] = He, Ke[`${ee}FragmentShader`] = be
    }
  },
  38034: (ee, ie, He) => {
    He.d(ie, {
      C: () => oe,
      Cb: () => pe,
      Eb: () => Be,
      F: () => We,
      Fb: () => Ze,
      I: () => Ye,
      Ib: () => we,
      J: () => Me,
      L: () => ce,
      P: () => ae,
      Q: () => Ee,
      S: () => De,
      V: () => Ae,
      X: () => Ce,
      Z: () => be,
      _: () => Ve,
      b: () => ye,
      bb: () => ue,
      cb: () => le,
      f: () => Te,
      gb: () => de,
      i: () => te,
      ib: () => Oe,
      jb: () => me,
      m: () => ze,
      mb: () => Se,
      o: () => Fe,
      p: () => xe,
      pb: () => ve,
      r: () => Le,
      tb: () => ge,
      u: () => ke,
      v: () => qe,
      xb: () => Je,
      y: () => Re,
      yb: () => Xe,
      zb: () => Pe
    });
    const ye = {
      GLSL: 0,
      WGSL: 1
    };

    function be(ee) {
      return ee === ye.WGSL
    }

    function Me(ee, ie, He) {
      return be(ee) ? He : ie
    }
    const Ke = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Ue(ee, ie) {
      if (!be(ee)) return ie;
      const He = Ke.get(ie);
      if (!He) throw new Error(`No WGSL name for shader type "${ie}"`);
      return He
    }

    function Fe(ee, ie) {
      for (var He = arguments.length, ye = new Array(He > 2 ? He - 2 : 0), be = 2; be < He; be++) ye[be - 2] = arguments[be];
      return `${Ue(ee,ie)}(${ye.join(", ")})`
    }

    function Je(ee, ie) {
      return Fe(ee, "int", ie)
    }

    function oe(ee, ie, He, ye, Me) {
      return be(ee) ? `var ${He}: ${Ue(ee,ie)} = ${ye};` : `${fe(ee,Me)}${ie} ${He} = ${ye};`
    }

    function Re(ee, ie, He) {
      return be(ee) ? `var ${He}: ${Ue(ee,ie)};` : `${ie} ${He};`
    }

    function ke(ee, ie, He, ye) {
      return be(ee) ? `const ${He}: ${Ue(ee,ie)} = ${ye};` : `const ${ie} ${He} = ${ye};`
    }

    function qe(ee, ie, He, ye, Me) {
      if (be(ee)) {
        return `fn ${He}(${ye.map((ie=>`${ie.name}: ${Ue(ee,ie.type)}`)).join(", ")}) -> ${Ue(ee,ie)} {${Me}}`
      }
      return `${ie} ${He}(${ye.map((ee=>`${ee.type} ${ee.name}`)).join(", ")}) {${Me}}`
    }

    function fe(ee, ie) {
      return !ie || be(ee) ? "" : `${ie} `
    }

    function Te(ee, ie, He, ye) {
      return be(ee) ? `attribute ${ie}: ${Ue(ee,He)};` : `attribute ${fe(ee,ye)}${He} ${ie};`
    }

    function pe(ee, ie, He, ye) {
      return be(ee) ? `varying ${ie}: ${Ue(ee,He)};` : `varying ${fe(ee,ye)}${He} ${ie};`
    }

    function Xe(ee, ie, He) {
      return be(ee) ? `uniform ${ie}: ${Ue(ee,He)};` : `uniform ${He} ${ie};`
    }

    function ze(ee) {
      return be(ee) ? "vertexOutputs.position" : "gl_Position"
    }

    function Be(ee, ie) {
      return be(ee) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ie}}` : `void main() {${ie}}`
    }

    function Ee(ee, ie) {
      return be(ee) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ie}}` : `void main() {${ie}}`
    }

    function ge(ee, ie, He) {
      if (be(ee)) {
        return [`var ${ie}Sampler: sampler;`, `var ${ie}: ${"2dArray"===He?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===He?"sampler2DArray":"sampler2D"} ${ie};`
    }

    function Oe(ee, ie, He) {
      return be(ee) ? `textureSample(${ie}, ${ie}Sampler, ${He})` : `texture2D(${ie}, ${He})`
    }

    function de(ee, ie, He, ye, Me) {
      if (be(ee)) {
        return `${Me?"textureSampleLevel":"textureSample"}(${ie}, ${ie}Sampler, ${He}, ${Je(ee,`round(${ye})`)}${Me?`, ${Me}`:""})`
      }
      const Ke = Fe(ee, "vec3", He, ye);
      return Me ? `textureLod(${ie}, ${Ke}, ${Me})` : `texture(${ie}, ${Ke})`
    }

    function We(ee) {
      return be(ee) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function te(ee) {
      return be(ee) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Ze(ee, ie) {
      return be(ee) ? `vertexInputs.${ie}` : ie
    }

    function we(ee, ie) {
      return be(ee) ? `vertexOutputs.${ie}` : ie
    }

    function De(ee, ie) {
      return be(ee) ? `fragmentInputs.${ie}` : ie
    }

    function Pe(ee, ie) {
      return be(ee) ? `uniforms.${ie}` : ie
    }

    function Ae(ee, ie, He) {
      return be(ee) ? `frame.${ie}` : He
    }

    function Ye(ee) {
      return be(ee) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Ve(ee) {
      return be(ee) ? "mesh.visibility" : "visibility"
    }

    function ae(ee) {
      return be(ee) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function ce(ee) {
      return be(ee) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function xe(ee, ie) {
      return be(ee) ? `dpdx(${ie})` : `dFdx(${ie})`
    }

    function Le(ee, ie) {
      return be(ee) ? `dpdy(${ie})` : `dFdy(${ie})`
    }

    function Ce(ee, ie) {
      return be(ee) ? `inverseSqrt(${ie})` : `inversesqrt(${ie})`
    }

    function ve(ee, ie, He, ye) {
      return be(ee) ? `select(${ye}, ${He}, ${ie})` : `((${ie}) ? (${He}) : (${ye}))`
    }

    function ue(ee, ie, He) {
      return be(ee) ? `((${ie}) - (${He}) * floor((${ie}) / (${He})))` : `mod(${ie}, ${He})`
    }

    function me(ee, ie, He) {
      return be(ee) ? `${ie} = vec4f(${He}, ${ie}.a);` : `${ie}.rgb = ${He};`
    }

    function le(ee, ie, He) {
      return be(ee) ? `${ie} = vec4f(${ie}.rgb * (${He}), ${ie}.a);` : `${ie}.rgb *= ${He};`
    }

    function Se(ee, ie, He) {
      return be(ee) ? `${ie} = vec4f(${He}, ${ie}.w);` : `${ie}.xyz = ${He};`
    }
  },
  40954: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersRepository : ye.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersStore : ye.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.IncludesShadersStore : ye.IncludesShadersStoreWGSL
      }
    }
    ye.ShadersRepository = "src/Shaders/", ye.ShadersStore = {}, ye.IncludesShadersStore = {}, ye.ShadersRepositoryWGSL = "src/ShadersWGSL/", ye.ShadersStoreWGSL = {}, ye.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);