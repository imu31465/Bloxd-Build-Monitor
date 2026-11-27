export const id = 269;
export const ids = [269];
export const modules = {
  64619: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      DEVTOOLS_SHADERS: () => ar,
      registerDevtoolsShader: () => jr
    });
    var Zr = Qr(41743),
      Wr = Qr(38702);
    const ar = {
      devtoolsNormal: function(rr) {
        return {
          vertex: `\n\t\t\t${(0,Wr.f)(rr,"position","vec3")}\n\t\t\t${(0,Wr.f)(rr,"normal","vec3")}\n\t\t\t${(0,Wr.yb)(rr,"worldViewProjection","mat4")}\n\t\t\t${(0,Wr.yb)(rr,"world","mat4")}\n\t\t\t${(0,Wr.Cb)(rr,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wr.Gb)(rr,`\n\t\t\t\t${(0,Wr.m)(rr)} = ${(0,Wr.zb)(rr,"worldViewProjection")} * ${(0,Wr.p)(rr,"vec4",(0,Wr.Hb)(rr,"position"),"1.0")};\n\t\t\t\t${(0,Wr.Lb)(rr,"vNormal")} = normalize((${(0,Wr.zb)(rr,"world")} * ${(0,Wr.p)(rr,"vec4",(0,Wr.Hb)(rr,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wr.Cb)(rr,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wr.U)(rr,`\n\t\t\t\t\n\t\t\t\t${(0,Wr.E)(rr,"vec3","normalColor",`abs(${(0,Wr.Y)(rr,"vNormal")})`)}\n\t\t\t\t${(0,Wr.P)(rr)} = ${(0,Wr.p)(rr,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(rr) {
        return {
          vertex: `\n\t\t\t${(0,Wr.f)(rr,"position","vec3")}\n\t\t\t${(0,Wr.yb)(rr,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Wr.Gb)(rr,`\n\t\t\t\t${(0,Wr.m)(rr)} = ${(0,Wr.zb)(rr,"worldViewProjection")} * ${(0,Wr.p)(rr,"vec4",(0,Wr.Hb)(rr,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wr.U)(rr,`\n\t\t\t\t${(0,Wr.P)(rr)} = ${(0,Wr.p)(rr,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(rr) {
        return {
          vertex: `\n\t\t\t${(0,Wr.f)(rr,"position","vec3")}\n\t\t\t${(0,Wr.yb)(rr,"worldViewProjection","mat4")}\n\t\t\t${(0,Wr.yb)(rr,"world","mat4")}\n\t\t\t${(0,Wr.yb)(rr,"cameraPosition","vec3")}\n\t\t\t${(0,Wr.Cb)(rr,"vDepth","float","mediump")}\n\n\t\t\t${(0,Wr.Gb)(rr,`\n\t\t\t\t${(0,Wr.m)(rr)} = ${(0,Wr.zb)(rr,"worldViewProjection")} * ${(0,Wr.p)(rr,"vec4",(0,Wr.Hb)(rr,"position"),"1.0")};\n\t\t\t\t${(0,Wr.E)(rr,"vec3","worldPosition",`(${(0,Wr.zb)(rr,"world")} * ${(0,Wr.p)(rr,"vec4",(0,Wr.Hb)(rr,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Wr.Lb)(rr,"vDepth")} = distance(worldPosition, ${(0,Wr.zb)(rr,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wr.Cb)(rr,"vDepth","float","mediump")}\n\t\t\t${(0,Wr.yb)(rr,"maxDepth","float")}\n\t\t\t${(0,Wr.yb)(rr,"minDepth","float")}\n\n\t\t\t${(0,Wr.U)(rr,`\n\t\t\t\t\n\t\t\t\t${(0,Wr.E)(rr,"float","normalizedDepth",`clamp((${(0,Wr.Y)(rr,"vDepth")} - ${(0,Wr.zb)(rr,"minDepth")}) / (${(0,Wr.zb)(rr,"maxDepth")} - ${(0,Wr.zb)(rr,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Wr.E)(rr,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Wr.P)(rr)} = ${(0,Wr.p)(rr,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function jr(rr, Sr) {
      const {
        vertex: Qr,
        fragment: Wr
      } = ar[rr](Sr), jr = Zr.e.GetShadersStore(Sr);
      jr[`${rr}VertexShader`] = Qr, jr[`${rr}FragmentShader`] = Wr
    }
  },
  38702: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      $: () => Pr,
      A: () => Nr,
      C: () => xr,
      Cb: () => hr,
      E: () => pr,
      G: () => Tr,
      Gb: () => nr,
      Hb: () => Or,
      I: () => Hr,
      L: () => ar,
      Lb: () => Lr,
      P: () => gr,
      S: () => Rr,
      U: () => er,
      Y: () => lr,
      d: () => Zr,
      db: () => Gr,
      f: () => tr,
      fb: () => Wr,
      hb: () => qr,
      i: () => vr,
      ib: () => Ar,
      jb: () => ir,
      kb: () => Br,
      m: () => Yr,
      mb: () => yr,
      p: () => fr,
      pb: () => Vr,
      q: () => Cr,
      s: () => Mr,
      tb: () => wr,
      vb: () => kr,
      w: () => mr,
      wb: () => Kr,
      xb: () => Er,
      yb: () => zr,
      zb: () => Xr
    });
    const Zr = {
      GLSL: 0,
      WGSL: 1
    };

    function Wr(rr) {
      return rr === Zr.WGSL
    }

    function ar(rr, Sr, Qr) {
      return Wr(rr) ? Qr : Sr
    }
    const jr = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Ir(rr, Sr) {
      if (!Wr(rr)) return Sr;
      const Qr = jr.get(Sr);
      if (!Qr) throw new Error(`No WGSL name for shader type "${Sr}"`);
      return Qr
    }

    function fr(rr, Sr) {
      for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
      return `${Ir(rr,Sr)}(${Zr.join(", ")})`
    }

    function Er(rr, Sr) {
      return fr(rr, "int", Sr)
    }

    function pr(rr, Sr, Qr, Zr, ar) {
      return Wr(rr) ? `var ${Qr}: ${Ir(rr,Sr)} = ${Zr};` : `${Ur(rr,ar)}${Sr} ${Qr} = ${Zr};`
    }

    function xr(rr, Sr, Qr) {
      return Wr(rr) ? `var ${Qr}: ${Ir(rr,Sr)};` : `${Sr} ${Qr};`
    }

    function mr(rr, Sr, Qr, Zr) {
      return Wr(rr) ? `const ${Qr}: ${Ir(rr,Sr)} = ${Zr};` : `const ${Sr} ${Qr} = ${Zr};`
    }

    function Nr(rr, Sr, Qr, Zr, ar) {
      if (Wr(rr)) {
        return `fn ${Qr}(${Zr.map((Sr=>`${Sr.name}: ${Ir(rr,Sr.type)}`)).join(", ")}) -> ${Ir(rr,Sr)} {${ar}}`
      }
      return `${Sr} ${Qr}(${Zr.map((rr=>`${rr.type} ${rr.name}`)).join(", ")}) {${ar}}`
    }

    function Ur(rr, Sr) {
      return !Sr || Wr(rr) ? "" : `${Sr} `
    }

    function tr(rr, Sr, Qr, Zr) {
      return Wr(rr) ? `attribute ${Sr}: ${Ir(rr,Qr)};` : `attribute ${Ur(rr,Zr)}${Qr} ${Sr};`
    }

    function hr(rr, Sr, Qr, Zr) {
      return Wr(rr) ? `varying ${Sr}: ${Ir(rr,Qr)};` : `varying ${Ur(rr,Zr)}${Qr} ${Sr};`
    }

    function zr(rr, Sr, Qr) {
      return Wr(rr) ? `uniform ${Sr}: ${Ir(rr,Qr)};` : `uniform ${Qr} ${Sr};`
    }

    function Yr(rr) {
      return Wr(rr) ? "vertexOutputs.position" : "gl_Position"
    }

    function nr(rr, Sr) {
      return Wr(rr) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Sr}}` : `void main() {${Sr}}`
    }

    function er(rr, Sr) {
      return Wr(rr) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Sr}}` : `void main() {${Sr}}`
    }

    function Kr(rr, Sr, Qr) {
      if (Wr(rr)) {
        return [`var ${Sr}Sampler: sampler;`, `var ${Sr}: ${"2dArray"===Qr?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Qr?"sampler2DArray":"sampler2D"} ${Sr};`
    }

    function yr(rr, Sr, Qr) {
      return Wr(rr) ? `textureSample(${Sr}, ${Sr}Sampler, ${Qr})` : `texture2D(${Sr}, ${Qr})`
    }

    function Br(rr, Sr, Qr, Zr, ar) {
      if (Wr(rr)) {
        return `${ar?"textureSampleLevel":"textureSample"}(${Sr}, ${Sr}Sampler, ${Qr}, ${Er(rr,`round(${Zr})`)}${ar?`, ${ar}`:""})`
      }
      const jr = fr(rr, "vec3", Qr, Zr);
      return ar ? `textureLod(${Sr}, ${jr}, ${ar})` : `texture(${Sr}, ${jr})`
    }

    function Tr(rr) {
      return Wr(rr) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function vr(rr) {
      return Wr(rr) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Or(rr, Sr) {
      return Wr(rr) ? `vertexInputs.${Sr}` : Sr
    }

    function Lr(rr, Sr) {
      return Wr(rr) ? `vertexOutputs.${Sr}` : Sr
    }

    function lr(rr, Sr) {
      return Wr(rr) ? `fragmentInputs.${Sr}` : Sr
    }

    function Xr(rr, Sr) {
      return Wr(rr) ? `uniforms.${Sr}` : Sr
    }

    function Pr(rr, Sr, Qr) {
      return Wr(rr) ? `frame.${Sr}` : Qr
    }

    function Hr(rr) {
      return Wr(rr) ? "scene.vEyePosition" : "vEyePosition"
    }

    function qr(rr) {
      return Wr(rr) ? "mesh.visibility" : "visibility"
    }

    function Rr(rr) {
      return Wr(rr) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function gr(rr) {
      return Wr(rr) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Cr(rr, Sr) {
      return Wr(rr) ? `dpdx(${Sr})` : `dFdx(${Sr})`
    }

    function Mr(rr, Sr) {
      return Wr(rr) ? `dpdy(${Sr})` : `dFdy(${Sr})`
    }

    function Gr(rr, Sr) {
      return Wr(rr) ? `inverseSqrt(${Sr})` : `inversesqrt(${Sr})`
    }

    function kr(rr, Sr, Qr, Zr) {
      return Wr(rr) ? `select(${Zr}, ${Qr}, ${Sr})` : `((${Sr}) ? (${Qr}) : (${Zr}))`
    }

    function Ar(rr, Sr, Qr) {
      return Wr(rr) ? `((${Sr}) - (${Qr}) * floor((${Sr}) / (${Qr})))` : `mod(${Sr}, ${Qr})`
    }

    function Vr(rr, Sr, Qr) {
      return Wr(rr) ? `${Sr} = vec4f(${Qr}, ${Sr}.a);` : `${Sr}.rgb = ${Qr};`
    }

    function ir(rr, Sr, Qr) {
      return Wr(rr) ? `${Sr} = vec4f(${Sr}.rgb * (${Qr}), ${Sr}.a);` : `${Sr}.rgb *= ${Qr};`
    }

    function wr(rr, Sr, Qr) {
      return Wr(rr) ? `${Sr} = vec4f(${Qr}, ${Sr}.w);` : `${Sr}.xyz = ${Qr};`
    }
  },
  41743: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersRepository : Zr.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersStore : Zr.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.IncludesShadersStore : Zr.IncludesShadersStoreWGSL
      }
    }
    Zr.ShadersRepository = "src/Shaders/", Zr.ShadersStore = {}, Zr.IncludesShadersStore = {}, Zr.ShadersRepositoryWGSL = "src/ShadersWGSL/", Zr.ShadersStoreWGSL = {}, Zr.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);