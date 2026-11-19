export const id = 228;
export const ids = [228];
export const modules = {
  60399: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      DEVTOOLS_SHADERS: () => iD,
      registerDevtoolsShader: () => fD
    });
    var ID = cD(39003),
      pD = cD(36539);
    const iD = {
      devtoolsNormal: function(DD) {
        return {
          vertex: `\n\t\t\t${(0,pD.f)(DD,"position","vec3")}\n\t\t\t${(0,pD.f)(DD,"normal","vec3")}\n\t\t\t${(0,pD.xb)(DD,"worldViewProjection","mat4")}\n\t\t\t${(0,pD.xb)(DD,"world","mat4")}\n\t\t\t${(0,pD.Db)(DD,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,pD.Eb)(DD,`\n\t\t\t\t${(0,pD.m)(DD)} = ${(0,pD.zb)(DD,"worldViewProjection")} * ${(0,pD.q)(DD,"vec4",(0,pD.Hb)(DD,"position"),"1.0")};\n\t\t\t\t${(0,pD.Ib)(DD,"vNormal")} = normalize((${(0,pD.zb)(DD,"world")} * ${(0,pD.q)(DD,"vec4",(0,pD.Hb)(DD,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,pD.Db)(DD,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,pD.Q)(DD,`\n\t\t\t\t\n\t\t\t\t${(0,pD.G)(DD,"vec3","normalColor",`abs(${(0,pD.R)(DD,"vNormal")})`)}\n\t\t\t\t${(0,pD.M)(DD)} = ${(0,pD.q)(DD,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(DD) {
        return {
          vertex: `\n\t\t\t${(0,pD.f)(DD,"position","vec3")}\n\t\t\t${(0,pD.xb)(DD,"worldViewProjection","mat4")}\n\n\t\t\t${(0,pD.Eb)(DD,`\n\t\t\t\t${(0,pD.m)(DD)} = ${(0,pD.zb)(DD,"worldViewProjection")} * ${(0,pD.q)(DD,"vec4",(0,pD.Hb)(DD,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,pD.Q)(DD,`\n\t\t\t\t${(0,pD.M)(DD)} = ${(0,pD.q)(DD,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(DD) {
        return {
          vertex: `\n\t\t\t${(0,pD.f)(DD,"position","vec3")}\n\t\t\t${(0,pD.xb)(DD,"worldViewProjection","mat4")}\n\t\t\t${(0,pD.xb)(DD,"world","mat4")}\n\t\t\t${(0,pD.xb)(DD,"cameraPosition","vec3")}\n\t\t\t${(0,pD.Db)(DD,"vDepth","float","mediump")}\n\n\t\t\t${(0,pD.Eb)(DD,`\n\t\t\t\t${(0,pD.m)(DD)} = ${(0,pD.zb)(DD,"worldViewProjection")} * ${(0,pD.q)(DD,"vec4",(0,pD.Hb)(DD,"position"),"1.0")};\n\t\t\t\t${(0,pD.G)(DD,"vec3","worldPosition",`(${(0,pD.zb)(DD,"world")} * ${(0,pD.q)(DD,"vec4",(0,pD.Hb)(DD,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,pD.Ib)(DD,"vDepth")} = distance(worldPosition, ${(0,pD.zb)(DD,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,pD.Db)(DD,"vDepth","float","mediump")}\n\t\t\t${(0,pD.xb)(DD,"maxDepth","float")}\n\t\t\t${(0,pD.xb)(DD,"minDepth","float")}\n\n\t\t\t${(0,pD.Q)(DD,`\n\t\t\t\t\n\t\t\t\t${(0,pD.G)(DD,"float","normalizedDepth",`clamp((${(0,pD.R)(DD,"vDepth")} - ${(0,pD.zb)(DD,"minDepth")}) / (${(0,pD.zb)(DD,"maxDepth")} - ${(0,pD.zb)(DD,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,pD.G)(DD,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,pD.M)(DD)} = ${(0,pD.q)(DD,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function fD(DD, CD) {
      const {
        vertex: cD,
        fragment: pD
      } = iD[DD](CD), fD = ID.e.GetShadersStore(CD);
      fD[`${DD}VertexShader`] = cD, fD[`${DD}FragmentShader`] = pD
    }
  },
  36539: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => MD,
      C: () => BD,
      Db: () => oD,
      Eb: () => gD,
      G: () => SD,
      Hb: () => UD,
      I: () => PD,
      Ib: () => xD,
      K: () => aD,
      L: () => iD,
      M: () => jD,
      O: () => zD,
      Q: () => XD,
      R: () => qD,
      T: () => KD,
      U: () => TD,
      Y: () => pD,
      Z: () => VD,
      ab: () => RD,
      e: () => ID,
      eb: () => dD,
      f: () => ZD,
      hb: () => OD,
      i: () => HD,
      jb: () => nD,
      kb: () => kD,
      m: () => ND,
      mb: () => YD,
      q: () => QD,
      qb: () => GD,
      r: () => lD,
      tb: () => mD,
      u: () => LD,
      vb: () => wD,
      x: () => yD,
      xb: () => vD,
      zb: () => JD
    });
    const ID = {
      GLSL: 0,
      WGSL: 1
    };

    function pD(DD) {
      return DD === ID.WGSL
    }

    function iD(DD, CD, cD) {
      return pD(DD) ? cD : CD
    }
    const fD = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function bD(DD, CD) {
      if (!pD(DD)) return CD;
      const cD = fD.get(CD);
      if (!cD) throw new Error(`No WGSL name for shader type "${CD}"`);
      return cD
    }

    function QD(DD, CD) {
      for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
      return `${bD(DD,CD)}(${ID.join(", ")})`
    }

    function wD(DD, CD) {
      return QD(DD, "int", CD)
    }

    function SD(DD, CD, cD, ID, iD) {
      return pD(DD) ? `var ${cD}: ${bD(DD,CD)} = ${ID};` : `${tD(DD,iD)}${CD} ${cD} = ${ID};`
    }

    function BD(DD, CD, cD) {
      return pD(DD) ? `var ${cD}: ${bD(DD,CD)};` : `${CD} ${cD};`
    }

    function yD(DD, CD, cD, ID) {
      return pD(DD) ? `const ${cD}: ${bD(DD,CD)} = ${ID};` : `const ${CD} ${cD} = ${ID};`
    }

    function MD(DD, CD, cD, ID, iD) {
      if (pD(DD)) {
        return `fn ${cD}(${ID.map((CD=>`${CD.name}: ${bD(DD,CD.type)}`)).join(", ")}) -> ${bD(DD,CD)} {${iD}}`
      }
      return `${CD} ${cD}(${ID.map((DD=>`${DD.type} ${DD.name}`)).join(", ")}) {${iD}}`
    }

    function tD(DD, CD) {
      return !CD || pD(DD) ? "" : `${CD} `
    }

    function ZD(DD, CD, cD, ID) {
      return pD(DD) ? `attribute ${CD}: ${bD(DD,cD)};` : `attribute ${tD(DD,ID)}${cD} ${CD};`
    }

    function oD(DD, CD, cD, ID) {
      return pD(DD) ? `varying ${CD}: ${bD(DD,cD)};` : `varying ${tD(DD,ID)}${cD} ${CD};`
    }

    function vD(DD, CD, cD) {
      return pD(DD) ? `uniform ${CD}: ${bD(DD,cD)};` : `uniform ${cD} ${CD};`
    }

    function ND(DD) {
      return pD(DD) ? "vertexOutputs.position" : "gl_Position"
    }

    function gD(DD, CD) {
      return pD(DD) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${CD}}` : `void main() {${CD}}`
    }

    function XD(DD, CD) {
      return pD(DD) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${CD}}` : `void main() {${CD}}`
    }

    function mD(DD, CD, cD) {
      if (pD(DD)) {
        return [`var ${CD}Sampler: sampler;`, `var ${CD}: ${"2dArray"===cD?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===cD?"sampler2DArray":"sampler2D"} ${CD};`
    }

    function nD(DD, CD, cD) {
      return pD(DD) ? `textureSample(${CD}, ${CD}Sampler, ${cD})` : `texture2D(${CD}, ${cD})`
    }

    function OD(DD, CD, cD, ID, iD) {
      if (pD(DD)) {
        return `${iD?"textureSampleLevel":"textureSample"}(${CD}, ${CD}Sampler, ${cD}, ${wD(DD,`round(${ID})`)}${iD?`, ${iD}`:""})`
      }
      const fD = QD(DD, "vec3", cD, ID);
      return iD ? `textureLod(${CD}, ${fD}, ${iD})` : `texture(${CD}, ${fD})`
    }

    function PD(DD) {
      return pD(DD) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function HD(DD) {
      return pD(DD) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function UD(DD, CD) {
      return pD(DD) ? `vertexInputs.${CD}` : CD
    }

    function xD(DD, CD) {
      return pD(DD) ? `vertexOutputs.${CD}` : CD
    }

    function qD(DD, CD) {
      return pD(DD) ? `fragmentInputs.${CD}` : CD
    }

    function JD(DD, CD) {
      return pD(DD) ? `uniforms.${CD}` : CD
    }

    function KD(DD, CD, cD) {
      return pD(DD) ? `frame.${CD}` : cD
    }

    function aD(DD) {
      return pD(DD) ? "scene.vEyePosition" : "vEyePosition"
    }

    function VD(DD) {
      return pD(DD) ? "mesh.visibility" : "visibility"
    }

    function zD(DD) {
      return pD(DD) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function jD(DD) {
      return pD(DD) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function lD(DD, CD) {
      return pD(DD) ? `dpdx(${CD})` : `dFdx(${CD})`
    }

    function LD(DD, CD) {
      return pD(DD) ? `dpdy(${CD})` : `dFdy(${CD})`
    }

    function TD(DD, CD) {
      return pD(DD) ? `inverseSqrt(${CD})` : `inversesqrt(${CD})`
    }

    function GD(DD, CD, cD, ID) {
      return pD(DD) ? `select(${ID}, ${cD}, ${CD})` : `((${CD}) ? (${cD}) : (${ID}))`
    }

    function RD(DD, CD, cD) {
      return pD(DD) ? `((${CD}) - (${cD}) * floor((${CD}) / (${cD})))` : `mod(${CD}, ${cD})`
    }

    function kD(DD, CD, cD) {
      return pD(DD) ? `${CD} = vec4f(${cD}, ${CD}.a);` : `${CD}.rgb = ${cD};`
    }

    function dD(DD, CD, cD) {
      return pD(DD) ? `${CD} = vec4f(${CD}.rgb * (${cD}), ${CD}.a);` : `${CD}.rgb *= ${cD};`
    }

    function YD(DD, CD, cD) {
      return pD(DD) ? `${CD} = vec4f(${cD}, ${CD}.w);` : `${CD}.xyz = ${cD};`
    }
  },
  39003: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.ShadersRepository : ID.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.ShadersStore : ID.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.IncludesShadersStore : ID.IncludesShadersStoreWGSL
      }
    }
    ID.ShadersRepository = "src/Shaders/", ID.ShadersStore = {}, ID.IncludesShadersStore = {}, ID.ShadersRepositoryWGSL = "src/ShadersWGSL/", ID.ShadersStoreWGSL = {}, ID.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);