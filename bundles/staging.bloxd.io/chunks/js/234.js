export const id = 234;
export const ids = [234];
export const modules = {
  61336: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      DEVTOOLS_SHADERS: () => XS,
      registerDevtoolsShader: () => xS
    });
    var tS = gS(39899),
      bS = gS(37209);
    const XS = {
      devtoolsNormal: function(SS) {
        return {
          vertex: `\n\t\t\t${(0,bS.g)(SS,"position","vec3")}\n\t\t\t${(0,bS.g)(SS,"normal","vec3")}\n\t\t\t${(0,bS.Cb)(SS,"worldViewProjection","mat4")}\n\t\t\t${(0,bS.Cb)(SS,"world","mat4")}\n\t\t\t${(0,bS.Jb)(SS,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,bS.Mb)(SS,`\n\t\t\t\t${(0,bS.l)(SS)} = ${(0,bS.Gb)(SS,"worldViewProjection")} * ${(0,bS.o)(SS,"vec4",(0,bS.Pb)(SS,"position"),"1.0")};\n\t\t\t\t${(0,bS.Sb)(SS,"vNormal")} = normalize((${(0,bS.Gb)(SS,"world")} * ${(0,bS.o)(SS,"vec4",(0,bS.Pb)(SS,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,bS.Jb)(SS,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,bS.O)(SS,`\n\t\t\t\t\n\t\t\t\t${(0,bS.A)(SS,"vec3","normalColor",`abs(${(0,bS.S)(SS,"vNormal")})`)}\n\t\t\t\t${(0,bS.K)(SS)} = ${(0,bS.o)(SS,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(SS) {
        return {
          vertex: `\n\t\t\t${(0,bS.g)(SS,"position","vec3")}\n\t\t\t${(0,bS.Cb)(SS,"worldViewProjection","mat4")}\n\n\t\t\t${(0,bS.Mb)(SS,`\n\t\t\t\t${(0,bS.l)(SS)} = ${(0,bS.Gb)(SS,"worldViewProjection")} * ${(0,bS.o)(SS,"vec4",(0,bS.Pb)(SS,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,bS.O)(SS,`\n\t\t\t\t${(0,bS.K)(SS)} = ${(0,bS.o)(SS,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(SS) {
        return {
          vertex: `\n\t\t\t${(0,bS.g)(SS,"position","vec3")}\n\t\t\t${(0,bS.Cb)(SS,"worldViewProjection","mat4")}\n\t\t\t${(0,bS.Cb)(SS,"world","mat4")}\n\t\t\t${(0,bS.Cb)(SS,"cameraPosition","vec3")}\n\t\t\t${(0,bS.Jb)(SS,"vDepth","float","mediump")}\n\n\t\t\t${(0,bS.Mb)(SS,`\n\t\t\t\t${(0,bS.l)(SS)} = ${(0,bS.Gb)(SS,"worldViewProjection")} * ${(0,bS.o)(SS,"vec4",(0,bS.Pb)(SS,"position"),"1.0")};\n\t\t\t\t${(0,bS.A)(SS,"vec3","worldPosition",`(${(0,bS.Gb)(SS,"world")} * ${(0,bS.o)(SS,"vec4",(0,bS.Pb)(SS,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,bS.Sb)(SS,"vDepth")} = distance(worldPosition, ${(0,bS.Gb)(SS,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,bS.Jb)(SS,"vDepth","float","mediump")}\n\t\t\t${(0,bS.Cb)(SS,"maxDepth","float")}\n\t\t\t${(0,bS.Cb)(SS,"minDepth","float")}\n\n\t\t\t${(0,bS.O)(SS,`\n\t\t\t\t\n\t\t\t\t${(0,bS.A)(SS,"float","normalizedDepth",`clamp((${(0,bS.S)(SS,"vDepth")} - ${(0,bS.Gb)(SS,"minDepth")}) / (${(0,bS.Gb)(SS,"maxDepth")} - ${(0,bS.Gb)(SS,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,bS.A)(SS,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,bS.K)(SS)} = ${(0,bS.o)(SS,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function xS(SS, HS) {
      const {
        vertex: gS,
        fragment: bS
      } = XS[SS](HS), xS = tS.c.GetShadersStore(HS);
      xS[`${SS}VertexShader`] = gS, xS[`${SS}FragmentShader`] = bS
    }
  },
  37209: (SS, HS, gS) => {
    gS.d(HS, {
      $: () => bS,
      A: () => IS,
      B: () => ZS,
      Cb: () => CS,
      D: () => LS,
      G: () => XS,
      Gb: () => vS,
      Jb: () => GS,
      K: () => yS,
      Mb: () => PS,
      N: () => AS,
      O: () => QS,
      Pb: () => OS,
      S: () => cS,
      Sb: () => dS,
      W: () => ES,
      Y: () => WS,
      cb: () => YS,
      e: () => tS,
      eb: () => US,
      fb: () => sS,
      g: () => jS,
      j: () => JS,
      jb: () => hS,
      l: () => nS,
      lb: () => wS,
      mb: () => pS,
      o: () => qS,
      ob: () => BS,
      p: () => VS,
      q: () => iS,
      qb: () => zS,
      u: () => kS,
      ub: () => DS,
      y: () => aS,
      yb: () => uS,
      z: () => fS
    });
    const tS = {
      GLSL: 0,
      WGSL: 1
    };

    function bS(SS) {
      return SS === tS.WGSL
    }

    function XS(SS, HS, gS) {
      return bS(SS) ? gS : HS
    }
    const xS = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function NS(SS, HS) {
      if (!bS(SS)) return HS;
      const gS = xS.get(HS);
      if (!gS) throw new Error(`No WGSL name for shader type "${HS}"`);
      return gS
    }

    function qS(SS, HS) {
      for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
      return `${NS(SS,HS)}(${tS.join(", ")})`
    }

    function uS(SS, HS) {
      return qS(SS, "int", HS)
    }

    function IS(SS, HS, gS, tS, XS) {
      return bS(SS) ? `var ${gS}: ${NS(SS,HS)} = ${tS};` : `${KS(SS,XS)}${HS} ${gS} = ${tS};`
    }

    function fS(SS, HS, gS) {
      return bS(SS) ? `var ${gS}: ${NS(SS,HS)};` : `${HS} ${gS};`
    }

    function kS(SS, HS, gS, tS) {
      return bS(SS) ? `const ${gS}: ${NS(SS,HS)} = ${tS};` : `const ${HS} ${gS} = ${tS};`
    }

    function aS(SS, HS, gS, tS, XS) {
      if (bS(SS)) {
        return `fn ${gS}(${tS.map((HS=>`${HS.name}: ${NS(SS,HS.type)}`)).join(", ")}) -> ${NS(SS,HS)} {${XS}}`
      }
      return `${HS} ${gS}(${tS.map((SS=>`${SS.type} ${SS.name}`)).join(", ")}) {${XS}}`
    }

    function KS(SS, HS) {
      return !HS || bS(SS) ? "" : `${HS} `
    }

    function jS(SS, HS, gS, tS) {
      return bS(SS) ? `attribute ${HS}: ${NS(SS,gS)};` : `attribute ${KS(SS,tS)}${gS} ${HS};`
    }

    function GS(SS, HS, gS, tS) {
      return bS(SS) ? `varying ${HS}: ${NS(SS,gS)};` : `varying ${KS(SS,tS)}${gS} ${HS};`
    }

    function CS(SS, HS, gS) {
      return bS(SS) ? `uniform ${HS}: ${NS(SS,gS)};` : `uniform ${gS} ${HS};`
    }

    function nS(SS) {
      return bS(SS) ? "vertexOutputs.position" : "gl_Position"
    }

    function PS(SS, HS) {
      return bS(SS) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${HS}}` : `void main() {${HS}}`
    }

    function QS(SS, HS) {
      return bS(SS) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${HS}}` : `void main() {${HS}}`
    }

    function DS(SS, HS, gS) {
      if (bS(SS)) {
        return [`var ${HS}Sampler: sampler;`, `var ${HS}: ${"2dArray"===gS?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===gS?"sampler2DArray":"sampler2D"} ${HS};`
    }

    function wS(SS, HS, gS) {
      return bS(SS) ? `textureSample(${HS}, ${HS}Sampler, ${gS})` : `texture2D(${HS}, ${gS})`
    }

    function hS(SS, HS, gS, tS, XS) {
      if (bS(SS)) {
        return `${XS?"textureSampleLevel":"textureSample"}(${HS}, ${HS}Sampler, ${gS}, ${uS(SS,`round(${tS})`)}${XS?`, ${XS}`:""})`
      }
      const xS = qS(SS, "vec3", gS, tS);
      return XS ? `textureLod(${HS}, ${xS}, ${XS})` : `texture(${HS}, ${xS})`
    }

    function ZS(SS) {
      return bS(SS) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function JS(SS) {
      return bS(SS) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function OS(SS, HS) {
      return bS(SS) ? `vertexInputs.${HS}` : HS
    }

    function dS(SS, HS) {
      return bS(SS) ? `vertexOutputs.${HS}` : HS
    }

    function cS(SS, HS) {
      return bS(SS) ? `fragmentInputs.${HS}` : HS
    }

    function vS(SS, HS) {
      return bS(SS) ? `uniforms.${HS}` : HS
    }

    function ES(SS, HS, gS) {
      return bS(SS) ? `frame.${HS}` : gS
    }

    function LS(SS) {
      return bS(SS) ? "scene.vEyePosition" : "vEyePosition"
    }

    function YS(SS) {
      return bS(SS) ? "mesh.visibility" : "visibility"
    }

    function AS(SS) {
      return bS(SS) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function yS(SS) {
      return bS(SS) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function VS(SS, HS) {
      return bS(SS) ? `dpdx(${HS})` : `dFdx(${HS})`
    }

    function iS(SS, HS) {
      return bS(SS) ? `dpdy(${HS})` : `dFdy(${HS})`
    }

    function WS(SS, HS) {
      return bS(SS) ? `inverseSqrt(${HS})` : `inversesqrt(${HS})`
    }

    function zS(SS, HS, gS, tS) {
      return bS(SS) ? `select(${tS}, ${gS}, ${HS})` : `((${HS}) ? (${gS}) : (${tS}))`
    }

    function US(SS, HS, gS) {
      return bS(SS) ? `((${HS}) - (${gS}) * floor((${HS}) / (${gS})))` : `mod(${HS}, ${gS})`
    }

    function pS(SS, HS, gS) {
      return bS(SS) ? `${HS} = vec4f(${gS}, ${HS}.a);` : `${HS}.rgb = ${gS};`
    }

    function sS(SS, HS, gS) {
      return bS(SS) ? `${HS} = vec4f(${HS}.rgb * (${gS}), ${HS}.a);` : `${HS}.rgb *= ${gS};`
    }

    function BS(SS, HS, gS) {
      return bS(SS) ? `${HS} = vec4f(${gS}, ${HS}.w);` : `${HS}.xyz = ${gS};`
    }
  },
  39899: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tS.ShadersRepository : tS.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tS.ShadersStore : tS.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tS.IncludesShadersStore : tS.IncludesShadersStoreWGSL
      }
    }
    tS.ShadersRepository = "src/Shaders/", tS.ShadersStore = {}, tS.IncludesShadersStore = {}, tS.ShadersRepositoryWGSL = "src/ShadersWGSL/", tS.ShadersStoreWGSL = {}, tS.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);