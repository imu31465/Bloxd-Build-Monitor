export const id = 263;
export const ids = [263];
export const modules = {
  63894: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      DEVTOOLS_SHADERS: () => QB,
      registerDevtoolsShader: () => oB
    });
    var YB = GB(40864),
      DB = GB(37910);
    const QB = {
      devtoolsNormal: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,DB.e)(BB,"position","vec3")}\n\t\t\t${(0,DB.e)(BB,"normal","vec3")}\n\t\t\t${(0,DB.xb)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,DB.xb)(BB,"world","mat4")}\n\t\t\t${(0,DB.Eb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,DB.Hb)(BB,`\n\t\t\t\t${(0,DB.g)(BB)} = ${(0,DB.Ab)(BB,"worldViewProjection")} * ${(0,DB.h)(BB,"vec4",(0,DB.Lb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,DB.Nb)(BB,"vNormal")} = normalize((${(0,DB.Ab)(BB,"world")} * ${(0,DB.h)(BB,"vec4",(0,DB.Lb)(BB,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,DB.Eb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,DB.H)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,DB.t)(BB,"vec3","normalColor",`abs(${(0,DB.I)(BB,"vNormal")})`)}\n\t\t\t\t${(0,DB.D)(BB)} = ${(0,DB.h)(BB,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,DB.e)(BB,"position","vec3")}\n\t\t\t${(0,DB.xb)(BB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,DB.Hb)(BB,`\n\t\t\t\t${(0,DB.g)(BB)} = ${(0,DB.Ab)(BB,"worldViewProjection")} * ${(0,DB.h)(BB,"vec4",(0,DB.Lb)(BB,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,DB.H)(BB,`\n\t\t\t\t${(0,DB.D)(BB)} = ${(0,DB.h)(BB,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,DB.e)(BB,"position","vec3")}\n\t\t\t${(0,DB.xb)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,DB.xb)(BB,"world","mat4")}\n\t\t\t${(0,DB.xb)(BB,"cameraPosition","vec3")}\n\t\t\t${(0,DB.Eb)(BB,"vDepth","float","mediump")}\n\n\t\t\t${(0,DB.Hb)(BB,`\n\t\t\t\t${(0,DB.g)(BB)} = ${(0,DB.Ab)(BB,"worldViewProjection")} * ${(0,DB.h)(BB,"vec4",(0,DB.Lb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,DB.t)(BB,"vec3","worldPosition",`(${(0,DB.Ab)(BB,"world")} * ${(0,DB.h)(BB,"vec4",(0,DB.Lb)(BB,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,DB.Nb)(BB,"vDepth")} = distance(worldPosition, ${(0,DB.Ab)(BB,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,DB.Eb)(BB,"vDepth","float","mediump")}\n\t\t\t${(0,DB.xb)(BB,"maxDepth","float")}\n\t\t\t${(0,DB.xb)(BB,"minDepth","float")}\n\n\t\t\t${(0,DB.H)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,DB.t)(BB,"float","normalizedDepth",`clamp((${(0,DB.I)(BB,"vDepth")} - ${(0,DB.Ab)(BB,"minDepth")}) / (${(0,DB.Ab)(BB,"maxDepth")} - ${(0,DB.Ab)(BB,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,DB.t)(BB,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,DB.D)(BB)} = ${(0,DB.h)(BB,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function oB(BB, OB) {
      const {
        vertex: GB,
        fragment: DB
      } = QB[BB](OB), oB = YB.b.GetShadersStore(OB);
      oB[`${BB}VertexShader`] = GB, oB[`${BB}FragmentShader`] = DB
    }
  },
  37910: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => hB,
      A: () => IB,
      Ab: () => uB,
      C: () => QB,
      D: () => LB,
      Eb: () => ZB,
      F: () => iB,
      H: () => AB,
      Hb: () => WB,
      I: () => KB,
      L: () => mB,
      Lb: () => kB,
      Nb: () => dB,
      O: () => XB,
      S: () => DB,
      V: () => FB,
      X: () => EB,
      bb: () => nB,
      c: () => YB,
      cb: () => SB,
      e: () => qB,
      f: () => fB,
      g: () => RB,
      gb: () => cB,
      h: () => yB,
      i: () => gB,
      kb: () => aB,
      l: () => rB,
      m: () => zB,
      nb: () => wB,
      q: () => lB,
      r: () => PB,
      rb: () => VB,
      t: () => MB,
      tb: () => JB,
      w: () => UB,
      xb: () => NB
    });
    const YB = {
      GLSL: 0,
      WGSL: 1
    };

    function DB(BB) {
      return BB === YB.WGSL
    }

    function QB(BB, OB, GB) {
      return DB(BB) ? GB : OB
    }
    const oB = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function jB(BB, OB) {
      if (!DB(BB)) return OB;
      const GB = oB.get(OB);
      if (!GB) throw new Error(`No WGSL name for shader type "${OB}"`);
      return GB
    }

    function yB(BB, OB) {
      for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
      return `${jB(BB,OB)}(${YB.join(", ")})`
    }

    function JB(BB, OB) {
      return yB(BB, "int", OB)
    }

    function MB(BB, OB, GB, YB, QB) {
      return DB(BB) ? `var ${GB}: ${jB(BB,OB)} = ${YB};` : `${pB(BB,QB)}${OB} ${GB} = ${YB};`
    }

    function PB(BB, OB, GB) {
      return DB(BB) ? `var ${GB}: ${jB(BB,OB)};` : `${OB} ${GB};`
    }

    function zB(BB, OB, GB, YB) {
      return DB(BB) ? `const ${GB}: ${jB(BB,OB)} = ${YB};` : `const ${OB} ${GB} = ${YB};`
    }

    function lB(BB, OB, GB, YB, QB) {
      if (DB(BB)) {
        return `fn ${GB}(${YB.map((OB=>`${OB.name}: ${jB(BB,OB.type)}`)).join(", ")}) -> ${jB(BB,OB)} {${QB}}`
      }
      return `${OB} ${GB}(${YB.map((BB=>`${BB.type} ${BB.name}`)).join(", ")}) {${QB}}`
    }

    function pB(BB, OB) {
      return !OB || DB(BB) ? "" : `${OB} `
    }

    function qB(BB, OB, GB, YB) {
      return DB(BB) ? `attribute ${OB}: ${jB(BB,GB)};` : `attribute ${pB(BB,YB)}${GB} ${OB};`
    }

    function ZB(BB, OB, GB, YB) {
      return DB(BB) ? `varying ${OB}: ${jB(BB,GB)};` : `varying ${pB(BB,YB)}${GB} ${OB};`
    }

    function NB(BB, OB, GB) {
      return DB(BB) ? `uniform ${OB}: ${jB(BB,GB)};` : `uniform ${GB} ${OB};`
    }

    function RB(BB) {
      return DB(BB) ? "vertexOutputs.position" : "gl_Position"
    }

    function WB(BB, OB) {
      return DB(BB) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${OB}}` : `void main() {${OB}}`
    }

    function AB(BB, OB) {
      return DB(BB) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${OB}}` : `void main() {${OB}}`
    }

    function VB(BB, OB, GB) {
      if (DB(BB)) {
        return [`var ${OB}Sampler: sampler;`, `var ${OB}: ${"2dArray"===GB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===GB?"sampler2DArray":"sampler2D"} ${OB};`
    }

    function SB(BB, OB, GB) {
      return DB(BB) ? `textureSample(${OB}, ${OB}Sampler, ${GB})` : `texture2D(${OB}, ${GB})`
    }

    function nB(BB, OB, GB, YB, QB) {
      if (DB(BB)) {
        return `${QB?"textureSampleLevel":"textureSample"}(${OB}, ${OB}Sampler, ${GB}, ${JB(BB,`round(${YB})`)}${QB?`, ${QB}`:""})`
      }
      const oB = yB(BB, "vec3", GB, YB);
      return QB ? `textureLod(${OB}, ${oB}, ${QB})` : `texture(${OB}, ${oB})`
    }

    function UB(BB) {
      return DB(BB) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function fB(BB) {
      return DB(BB) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function kB(BB, OB) {
      return DB(BB) ? `vertexInputs.${OB}` : OB
    }

    function dB(BB, OB) {
      return DB(BB) ? `vertexOutputs.${OB}` : OB
    }

    function KB(BB, OB) {
      return DB(BB) ? `fragmentInputs.${OB}` : OB
    }

    function uB(BB, OB) {
      return DB(BB) ? `uniforms.${OB}` : OB
    }

    function mB(BB, OB, GB) {
      return DB(BB) ? `frame.${OB}` : GB
    }

    function IB(BB) {
      return DB(BB) ? "scene.vEyePosition" : "vEyePosition"
    }

    function FB(BB) {
      return DB(BB) ? "mesh.visibility" : "visibility"
    }

    function iB(BB) {
      return DB(BB) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function LB(BB) {
      return DB(BB) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function gB(BB, OB) {
      return DB(BB) ? `dpdx(${OB})` : `dFdx(${OB})`
    }

    function rB(BB, OB) {
      return DB(BB) ? `dpdy(${OB})` : `dFdy(${OB})`
    }

    function XB(BB, OB) {
      return DB(BB) ? `inverseSqrt(${OB})` : `inversesqrt(${OB})`
    }

    function wB(BB, OB, GB, YB) {
      return DB(BB) ? `select(${YB}, ${GB}, ${OB})` : `((${OB}) ? (${GB}) : (${YB}))`
    }

    function EB(BB, OB, GB) {
      return DB(BB) ? `((${OB}) - (${GB}) * floor((${OB}) / (${GB})))` : `mod(${OB}, ${GB})`
    }

    function cB(BB, OB, GB) {
      return DB(BB) ? `${OB} = vec4f(${GB}, ${OB}.a);` : `${OB}.rgb = ${GB};`
    }

    function hB(BB, OB, GB) {
      return DB(BB) ? `${OB} = vec4f(${OB}.rgb * (${GB}), ${OB}.a);` : `${OB}.rgb *= ${GB};`
    }

    function aB(BB, OB, GB) {
      return DB(BB) ? `${OB} = vec4f(${GB}, ${OB}.w);` : `${OB}.xyz = ${GB};`
    }
  },
  40864: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersRepository : YB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersStore : YB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.IncludesShadersStore : YB.IncludesShadersStoreWGSL
      }
    }
    YB.ShadersRepository = "src/Shaders/", YB.ShadersStore = {}, YB.IncludesShadersStore = {}, YB.ShadersRepositoryWGSL = "src/ShadersWGSL/", YB.ShadersStoreWGSL = {}, YB.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);