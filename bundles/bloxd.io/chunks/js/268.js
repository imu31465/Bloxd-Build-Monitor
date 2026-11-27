export const id = 268;
export const ids = [268];
export const modules = {
  64149: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      DEVTOOLS_SHADERS: () => uR,
      registerDevtoolsShader: () => ZR
    });
    var yR = GR(41387),
      tR = GR(38358);
    const uR = {
      devtoolsNormal: function(RR) {
        return {
          vertex: `\n\t\t\t${(0,tR.g)(RR,"position","vec3")}\n\t\t\t${(0,tR.g)(RR,"normal","vec3")}\n\t\t\t${(0,tR.Ib)(RR,"worldViewProjection","mat4")}\n\t\t\t${(0,tR.Ib)(RR,"world","mat4")}\n\t\t\t${(0,tR.Lb)(RR,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,tR.Mb)(RR,`\n\t\t\t\t${(0,tR.l)(RR)} = ${(0,tR.Jb)(RR,"worldViewProjection")} * ${(0,tR.n)(RR,"vec4",(0,tR.Nb)(RR,"position"),"1.0")};\n\t\t\t\t${(0,tR.Pb)(RR,"vNormal")} = normalize((${(0,tR.Jb)(RR,"world")} * ${(0,tR.n)(RR,"vec4",(0,tR.Nb)(RR,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,tR.Lb)(RR,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,tR.T)(RR,`\n\t\t\t\t\n\t\t\t\t${(0,tR.G)(RR,"vec3","normalColor",`abs(${(0,tR.V)(RR,"vNormal")})`)}\n\t\t\t\t${(0,tR.Q)(RR)} = ${(0,tR.n)(RR,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(RR) {
        return {
          vertex: `\n\t\t\t${(0,tR.g)(RR,"position","vec3")}\n\t\t\t${(0,tR.Ib)(RR,"worldViewProjection","mat4")}\n\n\t\t\t${(0,tR.Mb)(RR,`\n\t\t\t\t${(0,tR.l)(RR)} = ${(0,tR.Jb)(RR,"worldViewProjection")} * ${(0,tR.n)(RR,"vec4",(0,tR.Nb)(RR,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,tR.T)(RR,`\n\t\t\t\t${(0,tR.Q)(RR)} = ${(0,tR.n)(RR,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(RR) {
        return {
          vertex: `\n\t\t\t${(0,tR.g)(RR,"position","vec3")}\n\t\t\t${(0,tR.Ib)(RR,"worldViewProjection","mat4")}\n\t\t\t${(0,tR.Ib)(RR,"world","mat4")}\n\t\t\t${(0,tR.Ib)(RR,"cameraPosition","vec3")}\n\t\t\t${(0,tR.Lb)(RR,"vDepth","float","mediump")}\n\n\t\t\t${(0,tR.Mb)(RR,`\n\t\t\t\t${(0,tR.l)(RR)} = ${(0,tR.Jb)(RR,"worldViewProjection")} * ${(0,tR.n)(RR,"vec4",(0,tR.Nb)(RR,"position"),"1.0")};\n\t\t\t\t${(0,tR.G)(RR,"vec3","worldPosition",`(${(0,tR.Jb)(RR,"world")} * ${(0,tR.n)(RR,"vec4",(0,tR.Nb)(RR,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,tR.Pb)(RR,"vDepth")} = distance(worldPosition, ${(0,tR.Jb)(RR,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,tR.Lb)(RR,"vDepth","float","mediump")}\n\t\t\t${(0,tR.Ib)(RR,"maxDepth","float")}\n\t\t\t${(0,tR.Ib)(RR,"minDepth","float")}\n\n\t\t\t${(0,tR.T)(RR,`\n\t\t\t\t\n\t\t\t\t${(0,tR.G)(RR,"float","normalizedDepth",`clamp((${(0,tR.V)(RR,"vDepth")} - ${(0,tR.Jb)(RR,"minDepth")}) / (${(0,tR.Jb)(RR,"maxDepth")} - ${(0,tR.Jb)(RR,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,tR.G)(RR,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,tR.Q)(RR)} = ${(0,tR.n)(RR,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function ZR(RR, JR) {
      const {
        vertex: GR,
        fragment: tR
      } = uR[RR](JR), ZR = yR.b.GetShadersStore(JR);
      ZR[`${RR}VertexShader`] = GR, ZR[`${RR}FragmentShader`] = tR
    }
  },
  38358: (RR, JR, GR) => {
    GR.d(JR, {
      Ab: () => IR,
      C: () => KR,
      Eb: () => CR,
      Fb: () => fR,
      G: () => VR,
      I: () => BR,
      Ib: () => nR,
      Jb: () => vR,
      L: () => xR,
      Lb: () => LR,
      M: () => uR,
      Mb: () => WR,
      Nb: () => pR,
      Pb: () => gR,
      Q: () => HR,
      R: () => DR,
      T: () => AR,
      V: () => bR,
      Z: () => OR,
      ab: () => PR,
      c: () => yR,
      db: () => tR,
      g: () => aR,
      hb: () => NR,
      j: () => lR,
      kb: () => mR,
      l: () => UR,
      n: () => iR,
      ob: () => SR,
      qb: () => MR,
      r: () => oR,
      sb: () => XR,
      t: () => cR,
      v: () => wR,
      vb: () => zR,
      xb: () => jR,
      y: () => rR
    });
    const yR = {
      GLSL: 0,
      WGSL: 1
    };

    function tR(RR) {
      return RR === yR.WGSL
    }

    function uR(RR, JR, GR) {
      return tR(RR) ? GR : JR
    }
    const ZR = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function qR(RR, JR) {
      if (!tR(RR)) return JR;
      const GR = ZR.get(JR);
      if (!GR) throw new Error(`No WGSL name for shader type "${JR}"`);
      return GR
    }

    function iR(RR, JR) {
      for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
      return `${qR(RR,JR)}(${yR.join(", ")})`
    }

    function fR(RR, JR) {
      return iR(RR, "int", JR)
    }

    function VR(RR, JR, GR, yR, uR) {
      return tR(RR) ? `var ${GR}: ${qR(RR,JR)} = ${yR};` : `${eR(RR,uR)}${JR} ${GR} = ${yR};`
    }

    function KR(RR, JR, GR) {
      return tR(RR) ? `var ${GR}: ${qR(RR,JR)};` : `${JR} ${GR};`
    }

    function wR(RR, JR, GR, yR) {
      return tR(RR) ? `const ${GR}: ${qR(RR,JR)} = ${yR};` : `const ${JR} ${GR} = ${yR};`
    }

    function rR(RR, JR, GR, yR, uR) {
      if (tR(RR)) {
        return `fn ${GR}(${yR.map((JR=>`${JR.name}: ${qR(RR,JR.type)}`)).join(", ")}) -> ${qR(RR,JR)} {${uR}}`
      }
      return `${JR} ${GR}(${yR.map((RR=>`${RR.type} ${RR.name}`)).join(", ")}) {${uR}}`
    }

    function eR(RR, JR) {
      return !JR || tR(RR) ? "" : `${JR} `
    }

    function aR(RR, JR, GR, yR) {
      return tR(RR) ? `attribute ${JR}: ${qR(RR,GR)};` : `attribute ${eR(RR,yR)}${GR} ${JR};`
    }

    function LR(RR, JR, GR, yR) {
      return tR(RR) ? `varying ${JR}: ${qR(RR,GR)};` : `varying ${eR(RR,yR)}${GR} ${JR};`
    }

    function nR(RR, JR, GR) {
      return tR(RR) ? `uniform ${JR}: ${qR(RR,GR)};` : `uniform ${GR} ${JR};`
    }

    function UR(RR) {
      return tR(RR) ? "vertexOutputs.position" : "gl_Position"
    }

    function WR(RR, JR) {
      return tR(RR) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${JR}}` : `void main() {${JR}}`
    }

    function AR(RR, JR) {
      return tR(RR) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${JR}}` : `void main() {${JR}}`
    }

    function CR(RR, JR, GR) {
      if (tR(RR)) {
        return [`var ${JR}Sampler: sampler;`, `var ${JR}: ${"2dArray"===GR?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===GR?"sampler2DArray":"sampler2D"} ${JR};`
    }

    function XR(RR, JR, GR) {
      return tR(RR) ? `textureSample(${JR}, ${JR}Sampler, ${GR})` : `texture2D(${JR}, ${GR})`
    }

    function MR(RR, JR, GR, yR, uR) {
      if (tR(RR)) {
        return `${uR?"textureSampleLevel":"textureSample"}(${JR}, ${JR}Sampler, ${GR}, ${fR(RR,`round(${yR})`)}${uR?`, ${uR}`:""})`
      }
      const ZR = iR(RR, "vec3", GR, yR);
      return uR ? `textureLod(${JR}, ${ZR}, ${uR})` : `texture(${JR}, ${ZR})`
    }

    function BR(RR) {
      return tR(RR) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function lR(RR) {
      return tR(RR) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function pR(RR, JR) {
      return tR(RR) ? `vertexInputs.${JR}` : JR
    }

    function gR(RR, JR) {
      return tR(RR) ? `vertexOutputs.${JR}` : JR
    }

    function bR(RR, JR) {
      return tR(RR) ? `fragmentInputs.${JR}` : JR
    }

    function vR(RR, JR) {
      return tR(RR) ? `uniforms.${JR}` : JR
    }

    function OR(RR, JR, GR) {
      return tR(RR) ? `frame.${JR}` : GR
    }

    function xR(RR) {
      return tR(RR) ? "scene.vEyePosition" : "vEyePosition"
    }

    function NR(RR) {
      return tR(RR) ? "mesh.visibility" : "visibility"
    }

    function DR(RR) {
      return tR(RR) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function HR(RR) {
      return tR(RR) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function oR(RR, JR) {
      return tR(RR) ? `dpdx(${JR})` : `dFdx(${JR})`
    }

    function cR(RR, JR) {
      return tR(RR) ? `dpdy(${JR})` : `dFdy(${JR})`
    }

    function PR(RR, JR) {
      return tR(RR) ? `inverseSqrt(${JR})` : `inversesqrt(${JR})`
    }

    function IR(RR, JR, GR, yR) {
      return tR(RR) ? `select(${yR}, ${GR}, ${JR})` : `((${JR}) ? (${GR}) : (${yR}))`
    }

    function mR(RR, JR, GR) {
      return tR(RR) ? `((${JR}) - (${GR}) * floor((${JR}) / (${GR})))` : `mod(${JR}, ${GR})`
    }

    function zR(RR, JR, GR) {
      return tR(RR) ? `${JR} = vec4f(${GR}, ${JR}.a);` : `${JR}.rgb = ${GR};`
    }

    function SR(RR, JR, GR) {
      return tR(RR) ? `${JR} = vec4f(${JR}.rgb * (${GR}), ${JR}.a);` : `${JR}.rgb *= ${GR};`
    }

    function jR(RR, JR, GR) {
      return tR(RR) ? `${JR} = vec4f(${GR}, ${JR}.w);` : `${JR}.xyz = ${GR};`
    }
  },
  41387: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersRepository : yR.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersStore : yR.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.IncludesShadersStore : yR.IncludesShadersStoreWGSL
      }
    }
    yR.ShadersRepository = "src/Shaders/", yR.ShadersStore = {}, yR.IncludesShadersStore = {}, yR.ShadersRepositoryWGSL = "src/ShadersWGSL/", yR.ShadersStoreWGSL = {}, yR.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);