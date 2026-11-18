export const id = 209;
export const ids = [209];
export const modules = {
  59734: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      DEVTOOLS_SHADERS: () => pB,
      registerDevtoolsShader: () => lB
    });
    var VB = dB(38595),
      yB = dB(36033);
    const pB = {
      devtoolsNormal: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,yB.f)(BB,"position","vec3")}\n\t\t\t${(0,yB.f)(BB,"normal","vec3")}\n\t\t\t${(0,yB.Db)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,yB.Db)(BB,"world","mat4")}\n\t\t\t${(0,yB.Jb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yB.Nb)(BB,`\n\t\t\t\t${(0,yB.l)(BB)} = ${(0,yB.Fb)(BB,"worldViewProjection")} * ${(0,yB.o)(BB,"vec4",(0,yB.Qb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,yB.Rb)(BB,"vNormal")} = normalize((${(0,yB.Fb)(BB,"world")} * ${(0,yB.o)(BB,"vec4",(0,yB.Qb)(BB,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,yB.Jb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yB.U)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,yB.F)(BB,"vec3","normalColor",`abs(${(0,yB.Y)(BB,"vNormal")})`)}\n\t\t\t\t${(0,yB.P)(BB)} = ${(0,yB.o)(BB,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,yB.f)(BB,"position","vec3")}\n\t\t\t${(0,yB.Db)(BB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,yB.Nb)(BB,`\n\t\t\t\t${(0,yB.l)(BB)} = ${(0,yB.Fb)(BB,"worldViewProjection")} * ${(0,yB.o)(BB,"vec4",(0,yB.Qb)(BB,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,yB.U)(BB,`\n\t\t\t\t${(0,yB.P)(BB)} = ${(0,yB.o)(BB,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(BB) {
        return {
          vertex: `\n\t\t\t${(0,yB.f)(BB,"position","vec3")}\n\t\t\t${(0,yB.Db)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,yB.Db)(BB,"world","mat4")}\n\t\t\t${(0,yB.Db)(BB,"cameraPosition","vec3")}\n\t\t\t${(0,yB.Jb)(BB,"vDepth","float","mediump")}\n\n\t\t\t${(0,yB.Nb)(BB,`\n\t\t\t\t${(0,yB.l)(BB)} = ${(0,yB.Fb)(BB,"worldViewProjection")} * ${(0,yB.o)(BB,"vec4",(0,yB.Qb)(BB,"position"),"1.0")};\n\t\t\t\t${(0,yB.F)(BB,"vec3","worldPosition",`(${(0,yB.Fb)(BB,"world")} * ${(0,yB.o)(BB,"vec4",(0,yB.Qb)(BB,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,yB.Rb)(BB,"vDepth")} = distance(worldPosition, ${(0,yB.Fb)(BB,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,yB.Jb)(BB,"vDepth","float","mediump")}\n\t\t\t${(0,yB.Db)(BB,"maxDepth","float")}\n\t\t\t${(0,yB.Db)(BB,"minDepth","float")}\n\n\t\t\t${(0,yB.U)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,yB.F)(BB,"float","normalizedDepth",`clamp((${(0,yB.Y)(BB,"vDepth")} - ${(0,yB.Fb)(BB,"minDepth")}) / (${(0,yB.Fb)(BB,"maxDepth")} - ${(0,yB.Fb)(BB,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,yB.F)(BB,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,yB.P)(BB)} = ${(0,yB.o)(BB,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function lB(BB, TB) {
      const {
        vertex: dB,
        fragment: yB
      } = pB[BB](TB), lB = VB.e.GetShadersStore(TB);
      lB[`${BB}VertexShader`] = dB, lB[`${BB}FragmentShader`] = yB
    }
  },
  36033: (BB, TB, dB) => {
    dB.d(TB, {
      Cb: () => gB,
      D: () => kB,
      Db: () => EB,
      F: () => oB,
      Fb: () => FB,
      H: () => sB,
      Jb: () => HB,
      K: () => rB,
      N: () => pB,
      Nb: () => mB,
      P: () => SB,
      Qb: () => zB,
      R: () => cB,
      Rb: () => wB,
      U: () => iB,
      Y: () => UB,
      ab: () => KB,
      b: () => VB,
      db: () => RB,
      f: () => uB,
      fb: () => yB,
      h: () => MB,
      jb: () => IB,
      kb: () => ZB,
      l: () => vB,
      o: () => YB,
      ob: () => WB,
      r: () => PB,
      rb: () => fB,
      sb: () => tB,
      u: () => QB,
      ub: () => XB,
      vb: () => hB,
      w: () => LB,
      xb: () => aB,
      z: () => OB,
      zb: () => NB
    });
    const VB = {
      GLSL: 0,
      WGSL: 1
    };

    function yB(BB) {
      return BB === VB.WGSL
    }

    function pB(BB, TB, dB) {
      return yB(BB) ? dB : TB
    }
    const lB = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function JB(BB, TB) {
      if (!yB(BB)) return TB;
      const dB = lB.get(TB);
      if (!dB) throw new Error(`No WGSL name for shader type "${TB}"`);
      return dB
    }

    function YB(BB, TB) {
      for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
      return `${JB(BB,TB)}(${VB.join(", ")})`
    }

    function gB(BB, TB) {
      return YB(BB, "int", TB)
    }

    function oB(BB, TB, dB, VB, pB) {
      return yB(BB) ? `var ${dB}: ${JB(BB,TB)} = ${VB};` : `${DB(BB,pB)}${TB} ${dB} = ${VB};`
    }

    function kB(BB, TB, dB) {
      return yB(BB) ? `var ${dB}: ${JB(BB,TB)};` : `${TB} ${dB};`
    }

    function LB(BB, TB, dB, VB) {
      return yB(BB) ? `const ${dB}: ${JB(BB,TB)} = ${VB};` : `const ${TB} ${dB} = ${VB};`
    }

    function OB(BB, TB, dB, VB, pB) {
      if (yB(BB)) {
        return `fn ${dB}(${VB.map((TB=>`${TB.name}: ${JB(BB,TB.type)}`)).join(", ")}) -> ${JB(BB,TB)} {${pB}}`
      }
      return `${TB} ${dB}(${VB.map((BB=>`${BB.type} ${BB.name}`)).join(", ")}) {${pB}}`
    }

    function DB(BB, TB) {
      return !TB || yB(BB) ? "" : `${TB} `
    }

    function uB(BB, TB, dB, VB) {
      return yB(BB) ? `attribute ${TB}: ${JB(BB,dB)};` : `attribute ${DB(BB,VB)}${dB} ${TB};`
    }

    function HB(BB, TB, dB, VB) {
      return yB(BB) ? `varying ${TB}: ${JB(BB,dB)};` : `varying ${DB(BB,VB)}${dB} ${TB};`
    }

    function EB(BB, TB, dB) {
      return yB(BB) ? `uniform ${TB}: ${JB(BB,dB)};` : `uniform ${dB} ${TB};`
    }

    function vB(BB) {
      return yB(BB) ? "vertexOutputs.position" : "gl_Position"
    }

    function mB(BB, TB) {
      return yB(BB) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${TB}}` : `void main() {${TB}}`
    }

    function iB(BB, TB) {
      return yB(BB) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${TB}}` : `void main() {${TB}}`
    }

    function NB(BB, TB, dB) {
      if (yB(BB)) {
        return [`var ${TB}Sampler: sampler;`, `var ${TB}: ${"2dArray"===dB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===dB?"sampler2DArray":"sampler2D"} ${TB};`
    }

    function tB(BB, TB, dB) {
      return yB(BB) ? `textureSample(${TB}, ${TB}Sampler, ${dB})` : `texture2D(${TB}, ${dB})`
    }

    function fB(BB, TB, dB, VB, pB) {
      if (yB(BB)) {
        return `${pB?"textureSampleLevel":"textureSample"}(${TB}, ${TB}Sampler, ${dB}, ${gB(BB,`round(${VB})`)}${pB?`, ${pB}`:""})`
      }
      const lB = YB(BB, "vec3", dB, VB);
      return pB ? `textureLod(${TB}, ${lB}, ${pB})` : `texture(${TB}, ${lB})`
    }

    function sB(BB) {
      return yB(BB) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function MB(BB) {
      return yB(BB) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function zB(BB, TB) {
      return yB(BB) ? `vertexInputs.${TB}` : TB
    }

    function wB(BB, TB) {
      return yB(BB) ? `vertexOutputs.${TB}` : TB
    }

    function UB(BB, TB) {
      return yB(BB) ? `fragmentInputs.${TB}` : TB
    }

    function FB(BB, TB) {
      return yB(BB) ? `uniforms.${TB}` : TB
    }

    function KB(BB, TB, dB) {
      return yB(BB) ? `frame.${TB}` : dB
    }

    function rB(BB) {
      return yB(BB) ? "scene.vEyePosition" : "vEyePosition"
    }

    function IB(BB) {
      return yB(BB) ? "mesh.visibility" : "visibility"
    }

    function cB(BB) {
      return yB(BB) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function SB(BB) {
      return yB(BB) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function PB(BB, TB) {
      return yB(BB) ? `dpdx(${TB})` : `dFdx(${TB})`
    }

    function QB(BB, TB) {
      return yB(BB) ? `dpdy(${TB})` : `dFdy(${TB})`
    }

    function RB(BB, TB) {
      return yB(BB) ? `inverseSqrt(${TB})` : `inversesqrt(${TB})`
    }

    function aB(BB, TB, dB, VB) {
      return yB(BB) ? `select(${VB}, ${dB}, ${TB})` : `((${TB}) ? (${dB}) : (${VB}))`
    }

    function ZB(BB, TB, dB) {
      return yB(BB) ? `((${TB}) - (${dB}) * floor((${TB}) / (${dB})))` : `mod(${TB}, ${dB})`
    }

    function XB(BB, TB, dB) {
      return yB(BB) ? `${TB} = vec4f(${dB}, ${TB}.a);` : `${TB}.rgb = ${dB};`
    }

    function WB(BB, TB, dB) {
      return yB(BB) ? `${TB} = vec4f(${TB}.rgb * (${dB}), ${TB}.a);` : `${TB}.rgb *= ${dB};`
    }

    function hB(BB, TB, dB) {
      return yB(BB) ? `${TB} = vec4f(${dB}, ${TB}.w);` : `${TB}.xyz = ${dB};`
    }
  },
  38595: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.ShadersRepository : VB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.ShadersStore : VB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.IncludesShadersStore : VB.IncludesShadersStoreWGSL
      }
    }
    VB.ShadersRepository = "src/Shaders/", VB.ShadersStore = {}, VB.IncludesShadersStore = {}, VB.ShadersRepositoryWGSL = "src/ShadersWGSL/", VB.ShadersStoreWGSL = {}, VB.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);