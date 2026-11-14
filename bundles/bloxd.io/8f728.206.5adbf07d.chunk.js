export const id = 206;
export const ids = [206];
export const modules = {
  59095: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      DEVTOOLS_SHADERS: () => rB,
      registerDevtoolsShader: () => uc
    });
    var Vc = nc(37923),
      Ic = nc(35679);
    const rB = {
      devtoolsNormal: function(cB) {
        return {
          vertex: `\n\t\t\t${(0,Ic.e)(cB,"position","vec3")}\n\t\t\t${(0,Ic.e)(cB,"normal","vec3")}\n\t\t\t${(0,Ic.Mb)(cB,"worldViewProjection","mat4")}\n\t\t\t${(0,Ic.Mb)(cB,"world","mat4")}\n\t\t\t${(0,Ic.Qb)(cB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Ic.Tb)(cB,`\n\t\t\t\t${(0,Ic.k)(cB)} = ${(0,Ic.Nb)(cB,"worldViewProjection")} * ${(0,Ic.n)(cB,"vec4",(0,Ic.Xb)(cB,"position"),"1.0")};\n\t\t\t\t${(0,Ic.$b)(cB,"vNormal")} = normalize((${(0,Ic.Nb)(cB,"world")} * ${(0,Ic.n)(cB,"vec4",(0,Ic.Xb)(cB,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ic.Qb)(cB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Ic._)(cB,`\n\t\t\t\t\n\t\t\t\t${(0,Ic.G)(cB,"vec3","normalColor",`abs(${(0,Ic.$)(cB,"vNormal")})`)}\n\t\t\t\t${(0,Ic.S)(cB)} = ${(0,Ic.n)(cB,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(cB) {
        return {
          vertex: `\n\t\t\t${(0,Ic.e)(cB,"position","vec3")}\n\t\t\t${(0,Ic.Mb)(cB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Ic.Tb)(cB,`\n\t\t\t\t${(0,Ic.k)(cB)} = ${(0,Ic.Nb)(cB,"worldViewProjection")} * ${(0,Ic.n)(cB,"vec4",(0,Ic.Xb)(cB,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ic._)(cB,`\n\t\t\t\t${(0,Ic.S)(cB)} = ${(0,Ic.n)(cB,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(cB) {
        return {
          vertex: `\n\t\t\t${(0,Ic.e)(cB,"position","vec3")}\n\t\t\t${(0,Ic.Mb)(cB,"worldViewProjection","mat4")}\n\t\t\t${(0,Ic.Mb)(cB,"world","mat4")}\n\t\t\t${(0,Ic.Mb)(cB,"cameraPosition","vec3")}\n\t\t\t${(0,Ic.Qb)(cB,"vDepth","float","mediump")}\n\n\t\t\t${(0,Ic.Tb)(cB,`\n\t\t\t\t${(0,Ic.k)(cB)} = ${(0,Ic.Nb)(cB,"worldViewProjection")} * ${(0,Ic.n)(cB,"vec4",(0,Ic.Xb)(cB,"position"),"1.0")};\n\t\t\t\t${(0,Ic.G)(cB,"vec3","worldPosition",`(${(0,Ic.Nb)(cB,"world")} * ${(0,Ic.n)(cB,"vec4",(0,Ic.Xb)(cB,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Ic.$b)(cB,"vDepth")} = distance(worldPosition, ${(0,Ic.Nb)(cB,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Ic.Qb)(cB,"vDepth","float","mediump")}\n\t\t\t${(0,Ic.Mb)(cB,"maxDepth","float")}\n\t\t\t${(0,Ic.Mb)(cB,"minDepth","float")}\n\n\t\t\t${(0,Ic._)(cB,`\n\t\t\t\t\n\t\t\t\t${(0,Ic.G)(cB,"float","normalizedDepth",`clamp((${(0,Ic.$)(cB,"vDepth")} - ${(0,Ic.Nb)(cB,"minDepth")}) / (${(0,Ic.Nb)(cB,"maxDepth")} - ${(0,Ic.Nb)(cB,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Ic.G)(cB,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Ic.S)(cB)} = ${(0,Ic.n)(cB,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function uc(cB, Bc) {
      const {
        vertex: nc,
        fragment: Ic
      } = rB[cB](Bc), uc = Vc.b.GetShadersStore(Bc);
      uc[`${cB}VertexShader`] = nc, uc[`${cB}FragmentShader`] = Ic
    }
  },
  35679: (cB, Bc, nc) => {
    nc.d(Bc, {
      $: () => bB,
      $b: () => Uc,
      Bb: () => Fc,
      D: () => Oc,
      Db: () => wc,
      G: () => qB,
      Hb: () => hc,
      J: () => Yc,
      Lb: () => Pc,
      M: () => Cc,
      Mb: () => Sc,
      Nb: () => Zc,
      Q: () => rB,
      Qb: () => tB,
      S: () => Nc,
      Tb: () => zB,
      W: () => Dc,
      Xb: () => gB,
      _: () => pc,
      ab: () => Qc,
      c: () => Vc,
      e: () => ec,
      eb: () => Wc,
      g: () => Lc,
      gb: () => Ic,
      k: () => yB,
      kb: () => vB,
      lb: () => kB,
      n: () => Mc,
      nb: () => Hc,
      r: () => Ec,
      rb: () => lc,
      u: () => oc,
      vb: () => aB,
      xb: () => Xc,
      y: () => Tc,
      z: () => fc
    });
    const Vc = {
      GLSL: 0,
      WGSL: 1
    };

    function Ic(cB) {
      return cB === Vc.WGSL
    }

    function rB(cB, Bc, nc) {
      return Ic(cB) ? nc : Bc
    }
    const uc = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function sc(cB, Bc) {
      if (!Ic(cB)) return Bc;
      const nc = uc.get(Bc);
      if (!nc) throw new Error(`No WGSL name for shader type "${Bc}"`);
      return nc
    }

    function Mc(cB, Bc) {
      for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
      return `${sc(cB,Bc)}(${Vc.join(", ")})`
    }

    function Pc(cB, Bc) {
      return Mc(cB, "int", Bc)
    }

    function qB(cB, Bc, nc, Vc, rB) {
      return Ic(cB) ? `var ${nc}: ${sc(cB,Bc)} = ${Vc};` : `${mB(cB,rB)}${Bc} ${nc} = ${Vc};`
    }

    function Oc(cB, Bc, nc) {
      return Ic(cB) ? `var ${nc}: ${sc(cB,Bc)};` : `${Bc} ${nc};`
    }

    function Tc(cB, Bc, nc, Vc) {
      return Ic(cB) ? `const ${nc}: ${sc(cB,Bc)} = ${Vc};` : `const ${Bc} ${nc} = ${Vc};`
    }

    function fc(cB, Bc, nc, Vc, rB) {
      if (Ic(cB)) {
        return `fn ${nc}(${Vc.map((Bc=>`${Bc.name}: ${sc(cB,Bc.type)}`)).join(", ")}) -> ${sc(cB,Bc)} {${rB}}`
      }
      return `${Bc} ${nc}(${Vc.map((cB=>`${cB.type} ${cB.name}`)).join(", ")}) {${rB}}`
    }

    function mB(cB, Bc) {
      return !Bc || Ic(cB) ? "" : `${Bc} `
    }

    function ec(cB, Bc, nc, Vc) {
      return Ic(cB) ? `attribute ${Bc}: ${sc(cB,nc)};` : `attribute ${mB(cB,Vc)}${nc} ${Bc};`
    }

    function tB(cB, Bc, nc, Vc) {
      return Ic(cB) ? `varying ${Bc}: ${sc(cB,nc)};` : `varying ${mB(cB,Vc)}${nc} ${Bc};`
    }

    function Sc(cB, Bc, nc) {
      return Ic(cB) ? `uniform ${Bc}: ${sc(cB,nc)};` : `uniform ${nc} ${Bc};`
    }

    function yB(cB) {
      return Ic(cB) ? "vertexOutputs.position" : "gl_Position"
    }

    function zB(cB, Bc) {
      return Ic(cB) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Bc}}` : `void main() {${Bc}}`
    }

    function pc(cB, Bc) {
      return Ic(cB) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Bc}}` : `void main() {${Bc}}`
    }

    function hc(cB, Bc, nc) {
      if (Ic(cB)) {
        return [`var ${Bc}Sampler: sampler;`, `var ${Bc}: ${"2dArray"===nc?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===nc?"sampler2DArray":"sampler2D"} ${Bc};`
    }

    function aB(cB, Bc, nc) {
      return Ic(cB) ? `textureSample(${Bc}, ${Bc}Sampler, ${nc})` : `texture2D(${Bc}, ${nc})`
    }

    function lc(cB, Bc, nc, Vc, rB) {
      if (Ic(cB)) {
        return `${rB?"textureSampleLevel":"textureSample"}(${Bc}, ${Bc}Sampler, ${nc}, ${Pc(cB,`round(${Vc})`)}${rB?`, ${rB}`:""})`
      }
      const uc = Mc(cB, "vec3", nc, Vc);
      return rB ? `textureLod(${Bc}, ${uc}, ${rB})` : `texture(${Bc}, ${uc})`
    }

    function Yc(cB) {
      return Ic(cB) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Lc(cB) {
      return Ic(cB) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function gB(cB, Bc) {
      return Ic(cB) ? `vertexInputs.${Bc}` : Bc
    }

    function Uc(cB, Bc) {
      return Ic(cB) ? `vertexOutputs.${Bc}` : Bc
    }

    function bB(cB, Bc) {
      return Ic(cB) ? `fragmentInputs.${Bc}` : Bc
    }

    function Zc(cB, Bc) {
      return Ic(cB) ? `uniforms.${Bc}` : Bc
    }

    function Qc(cB, Bc, nc) {
      return Ic(cB) ? `frame.${Bc}` : nc
    }

    function Cc(cB) {
      return Ic(cB) ? "scene.vEyePosition" : "vEyePosition"
    }

    function vB(cB) {
      return Ic(cB) ? "mesh.visibility" : "visibility"
    }

    function Dc(cB) {
      return Ic(cB) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Nc(cB) {
      return Ic(cB) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Ec(cB, Bc) {
      return Ic(cB) ? `dpdx(${Bc})` : `dFdx(${Bc})`
    }

    function oc(cB, Bc) {
      return Ic(cB) ? `dpdy(${Bc})` : `dFdy(${Bc})`
    }

    function Wc(cB, Bc) {
      return Ic(cB) ? `inverseSqrt(${Bc})` : `inversesqrt(${Bc})`
    }

    function wc(cB, Bc, nc, Vc) {
      return Ic(cB) ? `select(${Vc}, ${nc}, ${Bc})` : `((${Bc}) ? (${nc}) : (${Vc}))`
    }

    function kB(cB, Bc, nc) {
      return Ic(cB) ? `((${Bc}) - (${nc}) * floor((${Bc}) / (${nc})))` : `mod(${Bc}, ${nc})`
    }

    function Xc(cB, Bc, nc) {
      return Ic(cB) ? `${Bc} = vec4f(${nc}, ${Bc}.a);` : `${Bc}.rgb = ${nc};`
    }

    function Hc(cB, Bc, nc) {
      return Ic(cB) ? `${Bc} = vec4f(${Bc}.rgb * (${nc}), ${Bc}.a);` : `${Bc}.rgb *= ${nc};`
    }

    function Fc(cB, Bc, nc) {
      return Ic(cB) ? `${Bc} = vec4f(${nc}, ${Bc}.w);` : `${Bc}.xyz = ${nc};`
    }
  },
  37923: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    class Vc {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Vc.ShadersRepository : Vc.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Vc.ShadersStore : Vc.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Vc.IncludesShadersStore : Vc.IncludesShadersStoreWGSL
      }
    }
    Vc.ShadersRepository = "src/Shaders/", Vc.ShadersStore = {}, Vc.IncludesShadersStore = {}, Vc.ShadersRepositoryWGSL = "src/ShadersWGSL/", Vc.ShadersStoreWGSL = {}, Vc.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);