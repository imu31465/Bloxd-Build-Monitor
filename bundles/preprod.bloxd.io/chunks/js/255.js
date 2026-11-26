export const id = 255;
export const ids = [255];
export const modules = {
  63966: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      DEVTOOLS_SHADERS: () => QU,
      registerDevtoolsShader: () => AU
    });
    var cU = zU(40961),
      yU = zU(37946);
    const QU = {
      devtoolsNormal: function(UU) {
        return {
          vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.c)(UU,"normal","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,yU.tb)(UU,"world","mat4")}\n\t\t\t${(0,yU.Bb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\t\t\t\t${(0,yU.i)(UU)} = ${(0,yU.xb)(UU,"worldViewProjection")} * ${(0,yU.k)(UU,"vec4",(0,yU.Ib)(UU,"position"),"1.0")};\n\t\t\t\t${(0,yU.Lb)(UU,"vNormal")} = normalize((${(0,yU.xb)(UU,"world")} * ${(0,yU.k)(UU,"vec4",(0,yU.Ib)(UU,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,yU.Bb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,yU.C)(UU,"vec3","normalColor",`abs(${(0,yU.R)(UU,"vNormal")})`)}\n\t\t\t\t${(0,yU.M)(UU)} = ${(0,yU.k)(UU,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(UU) {
        return {
          vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\t\t\t\t${(0,yU.i)(UU)} = ${(0,yU.xb)(UU,"worldViewProjection")} * ${(0,yU.k)(UU,"vec4",(0,yU.Ib)(UU,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t${(0,yU.M)(UU)} = ${(0,yU.k)(UU,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(UU) {
        return {
          vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,yU.tb)(UU,"world","mat4")}\n\t\t\t${(0,yU.tb)(UU,"cameraPosition","vec3")}\n\t\t\t${(0,yU.Bb)(UU,"vDepth","float","mediump")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\t\t\t\t${(0,yU.i)(UU)} = ${(0,yU.xb)(UU,"worldViewProjection")} * ${(0,yU.k)(UU,"vec4",(0,yU.Ib)(UU,"position"),"1.0")};\n\t\t\t\t${(0,yU.C)(UU,"vec3","worldPosition",`(${(0,yU.xb)(UU,"world")} * ${(0,yU.k)(UU,"vec4",(0,yU.Ib)(UU,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,yU.Lb)(UU,"vDepth")} = distance(worldPosition, ${(0,yU.xb)(UU,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,yU.Bb)(UU,"vDepth","float","mediump")}\n\t\t\t${(0,yU.tb)(UU,"maxDepth","float")}\n\t\t\t${(0,yU.tb)(UU,"minDepth","float")}\n\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,yU.C)(UU,"float","normalizedDepth",`clamp((${(0,yU.R)(UU,"vDepth")} - ${(0,yU.xb)(UU,"minDepth")}) / (${(0,yU.xb)(UU,"maxDepth")} - ${(0,yU.xb)(UU,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,yU.C)(UU,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,yU.M)(UU)} = ${(0,yU.k)(UU,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function AU(UU, XU) {
      const {
        vertex: zU,
        fragment: yU
      } = QU[UU](XU), AU = cU.b.GetShadersStore(XU);
      AU[`${UU}VertexShader`] = zU, AU[`${UU}FragmentShader`] = yU
    }
  },
  37946: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => PU,
      B: () => YU,
      Bb: () => tU,
      C: () => EU,
      F: () => WU,
      Fb: () => GU,
      H: () => OU,
      Ib: () => LU,
      L: () => QU,
      Lb: () => eU,
      M: () => uU,
      P: () => rU,
      Q: () => BU,
      R: () => CU,
      S: () => qU,
      T: () => HU,
      V: () => yU,
      X: () => SU,
      Y: () => vU,
      _: () => sU,
      b: () => cU,
      c: () => aU,
      db: () => RU,
      e: () => dU,
      eb: () => VU,
      i: () => kU,
      ib: () => nU,
      k: () => oU,
      mb: () => MU,
      nb: () => ZU,
      o: () => fU,
      r: () => iU,
      rb: () => DU,
      tb: () => gU,
      u: () => NU,
      x: () => IU,
      xb: () => wU
    });
    const cU = {
      GLSL: 0,
      WGSL: 1
    };

    function yU(UU) {
      return UU === cU.WGSL
    }

    function QU(UU, XU, zU) {
      return yU(UU) ? zU : XU
    }
    const AU = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function FU(UU, XU) {
      if (!yU(UU)) return XU;
      const zU = AU.get(XU);
      if (!zU) throw new Error(`No WGSL name for shader type "${XU}"`);
      return zU
    }

    function oU(UU, XU) {
      for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
      return `${FU(UU,XU)}(${cU.join(", ")})`
    }

    function DU(UU, XU) {
      return oU(UU, "int", XU)
    }

    function EU(UU, XU, zU, cU, QU) {
      return yU(UU) ? `var ${zU}: ${FU(UU,XU)} = ${cU};` : `${pU(UU,QU)}${XU} ${zU} = ${cU};`
    }

    function YU(UU, XU, zU) {
      return yU(UU) ? `var ${zU}: ${FU(UU,XU)};` : `${XU} ${zU};`
    }

    function NU(UU, XU, zU, cU) {
      return yU(UU) ? `const ${zU}: ${FU(UU,XU)} = ${cU};` : `const ${XU} ${zU} = ${cU};`
    }

    function IU(UU, XU, zU, cU, QU) {
      if (yU(UU)) {
        return `fn ${zU}(${cU.map((XU=>`${XU.name}: ${FU(UU,XU.type)}`)).join(", ")}) -> ${FU(UU,XU)} {${QU}}`
      }
      return `${XU} ${zU}(${cU.map((UU=>`${UU.type} ${UU.name}`)).join(", ")}) {${QU}}`
    }

    function pU(UU, XU) {
      return !XU || yU(UU) ? "" : `${XU} `
    }

    function aU(UU, XU, zU, cU) {
      return yU(UU) ? `attribute ${XU}: ${FU(UU,zU)};` : `attribute ${pU(UU,cU)}${zU} ${XU};`
    }

    function tU(UU, XU, zU, cU) {
      return yU(UU) ? `varying ${XU}: ${FU(UU,zU)};` : `varying ${pU(UU,cU)}${zU} ${XU};`
    }

    function gU(UU, XU, zU) {
      return yU(UU) ? `uniform ${XU}: ${FU(UU,zU)};` : `uniform ${zU} ${XU};`
    }

    function kU(UU) {
      return yU(UU) ? "vertexOutputs.position" : "gl_Position"
    }

    function GU(UU, XU) {
      return yU(UU) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${XU}}` : `void main() {${XU}}`
    }

    function BU(UU, XU) {
      return yU(UU) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${XU}}` : `void main() {${XU}}`
    }

    function ZU(UU, XU, zU) {
      if (yU(UU)) {
        return [`var ${XU}Sampler: sampler;`, `var ${XU}: ${"2dArray"===zU?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===zU?"sampler2DArray":"sampler2D"} ${XU};`
    }

    function RU(UU, XU, zU) {
      return yU(UU) ? `textureSample(${XU}, ${XU}Sampler, ${zU})` : `texture2D(${XU}, ${zU})`
    }

    function PU(UU, XU, zU, cU, QU) {
      if (yU(UU)) {
        return `${QU?"textureSampleLevel":"textureSample"}(${XU}, ${XU}Sampler, ${zU}, ${DU(UU,`round(${cU})`)}${QU?`, ${QU}`:""})`
      }
      const AU = oU(UU, "vec3", zU, cU);
      return QU ? `textureLod(${XU}, ${AU}, ${QU})` : `texture(${XU}, ${AU})`
    }

    function WU(UU) {
      return yU(UU) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function dU(UU) {
      return yU(UU) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function LU(UU, XU) {
      return yU(UU) ? `vertexInputs.${XU}` : XU
    }

    function eU(UU, XU) {
      return yU(UU) ? `vertexOutputs.${XU}` : XU
    }

    function CU(UU, XU) {
      return yU(UU) ? `fragmentInputs.${XU}` : XU
    }

    function wU(UU, XU) {
      return yU(UU) ? `uniforms.${XU}` : XU
    }

    function qU(UU, XU, zU) {
      return yU(UU) ? `frame.${XU}` : zU
    }

    function OU(UU) {
      return yU(UU) ? "scene.vEyePosition" : "vEyePosition"
    }

    function SU(UU) {
      return yU(UU) ? "mesh.visibility" : "visibility"
    }

    function rU(UU) {
      return yU(UU) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function uU(UU) {
      return yU(UU) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function fU(UU, XU) {
      return yU(UU) ? `dpdx(${XU})` : `dFdx(${XU})`
    }

    function iU(UU, XU) {
      return yU(UU) ? `dpdy(${XU})` : `dFdy(${XU})`
    }

    function HU(UU, XU) {
      return yU(UU) ? `inverseSqrt(${XU})` : `inversesqrt(${XU})`
    }

    function MU(UU, XU, zU, cU) {
      return yU(UU) ? `select(${cU}, ${zU}, ${XU})` : `((${XU}) ? (${zU}) : (${cU}))`
    }

    function vU(UU, XU, zU) {
      return yU(UU) ? `((${XU}) - (${zU}) * floor((${XU}) / (${zU})))` : `mod(${XU}, ${zU})`
    }

    function VU(UU, XU, zU) {
      return yU(UU) ? `${XU} = vec4f(${zU}, ${XU}.a);` : `${XU}.rgb = ${zU};`
    }

    function sU(UU, XU, zU) {
      return yU(UU) ? `${XU} = vec4f(${XU}.rgb * (${zU}), ${XU}.a);` : `${XU}.rgb *= ${zU};`
    }

    function nU(UU, XU, zU) {
      return yU(UU) ? `${XU} = vec4f(${zU}, ${XU}.w);` : `${XU}.xyz = ${zU};`
    }
  },
  40961: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
      }
    }
    cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);