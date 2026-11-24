export const id = 240;
export const ids = [240];
export const modules = {
  61157: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      DEVTOOLS_SHADERS: () => MT,
      registerDevtoolsShader: () => gT
    });
    var WT = mT(39934),
      zT = mT(37288);
    const MT = {
      devtoolsNormal: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,zT.f)(TT,"position","vec3")}\n\t\t\t${(0,zT.f)(TT,"normal","vec3")}\n\t\t\t${(0,zT.yb)(TT,"worldViewProjection","mat4")}\n\t\t\t${(0,zT.yb)(TT,"world","mat4")}\n\t\t\t${(0,zT.Ab)(TT,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,zT.Bb)(TT,`\n\t\t\t\t${(0,zT.h)(TT)} = ${(0,zT.zb)(TT,"worldViewProjection")} * ${(0,zT.k)(TT,"vec4",(0,zT.Eb)(TT,"position"),"1.0")};\n\t\t\t\t${(0,zT.Ib)(TT,"vNormal")} = normalize((${(0,zT.zb)(TT,"world")} * ${(0,zT.k)(TT,"vec4",(0,zT.Eb)(TT,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,zT.Ab)(TT,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,zT.O)(TT,`\n\t\t\t\t\n\t\t\t\t${(0,zT.w)(TT,"vec3","normalColor",`abs(${(0,zT.R)(TT,"vNormal")})`)}\n\t\t\t\t${(0,zT.G)(TT)} = ${(0,zT.k)(TT,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,zT.f)(TT,"position","vec3")}\n\t\t\t${(0,zT.yb)(TT,"worldViewProjection","mat4")}\n\n\t\t\t${(0,zT.Bb)(TT,`\n\t\t\t\t${(0,zT.h)(TT)} = ${(0,zT.zb)(TT,"worldViewProjection")} * ${(0,zT.k)(TT,"vec4",(0,zT.Eb)(TT,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,zT.O)(TT,`\n\t\t\t\t${(0,zT.G)(TT)} = ${(0,zT.k)(TT,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(TT) {
        return {
          vertex: `\n\t\t\t${(0,zT.f)(TT,"position","vec3")}\n\t\t\t${(0,zT.yb)(TT,"worldViewProjection","mat4")}\n\t\t\t${(0,zT.yb)(TT,"world","mat4")}\n\t\t\t${(0,zT.yb)(TT,"cameraPosition","vec3")}\n\t\t\t${(0,zT.Ab)(TT,"vDepth","float","mediump")}\n\n\t\t\t${(0,zT.Bb)(TT,`\n\t\t\t\t${(0,zT.h)(TT)} = ${(0,zT.zb)(TT,"worldViewProjection")} * ${(0,zT.k)(TT,"vec4",(0,zT.Eb)(TT,"position"),"1.0")};\n\t\t\t\t${(0,zT.w)(TT,"vec3","worldPosition",`(${(0,zT.zb)(TT,"world")} * ${(0,zT.k)(TT,"vec4",(0,zT.Eb)(TT,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,zT.Ib)(TT,"vDepth")} = distance(worldPosition, ${(0,zT.zb)(TT,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,zT.Ab)(TT,"vDepth","float","mediump")}\n\t\t\t${(0,zT.yb)(TT,"maxDepth","float")}\n\t\t\t${(0,zT.yb)(TT,"minDepth","float")}\n\n\t\t\t${(0,zT.O)(TT,`\n\t\t\t\t\n\t\t\t\t${(0,zT.w)(TT,"float","normalizedDepth",`clamp((${(0,zT.R)(TT,"vDepth")} - ${(0,zT.zb)(TT,"minDepth")}) / (${(0,zT.zb)(TT,"maxDepth")} - ${(0,zT.zb)(TT,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,zT.w)(TT,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,zT.G)(TT)} = ${(0,zT.k)(TT,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function gT(TT, UT) {
      const {
        vertex: mT,
        fragment: zT
      } = MT[TT](UT), gT = WT.d.GetShadersStore(UT);
      gT[`${TT}VertexShader`] = mT, gT[`${TT}FragmentShader`] = zT
    }
  },
  37288: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => zT,
      Ab: () => cT,
      B: () => yT,
      Bb: () => qT,
      D: () => MT,
      Eb: () => xT,
      G: () => QT,
      Ib: () => dT,
      K: () => IT,
      O: () => iT,
      R: () => wT,
      U: () => aT,
      Y: () => PT,
      cb: () => XT,
      db: () => uT,
      e: () => WT,
      eb: () => rT,
      f: () => ZT,
      fb: () => eT,
      g: () => JT,
      h: () => fT,
      ib: () => OT,
      k: () => HT,
      kb: () => CT,
      lb: () => KT,
      m: () => sT,
      o: () => FT,
      pb: () => VT,
      q: () => LT,
      r: () => pT,
      tb: () => bT,
      v: () => lT,
      w: () => jT,
      wb: () => kT,
      yb: () => vT,
      z: () => YT,
      zb: () => tT
    });
    const WT = {
      GLSL: 0,
      WGSL: 1
    };

    function zT(TT) {
      return TT === WT.WGSL
    }

    function MT(TT, UT, mT) {
      return zT(TT) ? mT : UT
    }
    const gT = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function nT(TT, UT) {
      if (!zT(TT)) return UT;
      const mT = gT.get(UT);
      if (!mT) throw new Error(`No WGSL name for shader type "${UT}"`);
      return mT
    }

    function HT(TT, UT) {
      for (var mT = arguments.length, WT = new Array(mT > 2 ? mT - 2 : 0), zT = 2; zT < mT; zT++) WT[zT - 2] = arguments[zT];
      return `${nT(TT,UT)}(${WT.join(", ")})`
    }

    function kT(TT, UT) {
      return HT(TT, "int", UT)
    }

    function jT(TT, UT, mT, WT, MT) {
      return zT(TT) ? `var ${mT}: ${nT(TT,UT)} = ${WT};` : `${BT(TT,MT)}${UT} ${mT} = ${WT};`
    }

    function lT(TT, UT, mT) {
      return zT(TT) ? `var ${mT}: ${nT(TT,UT)};` : `${UT} ${mT};`
    }

    function LT(TT, UT, mT, WT) {
      return zT(TT) ? `const ${mT}: ${nT(TT,UT)} = ${WT};` : `const ${UT} ${mT} = ${WT};`
    }

    function pT(TT, UT, mT, WT, MT) {
      if (zT(TT)) {
        return `fn ${mT}(${WT.map((UT=>`${UT.name}: ${nT(TT,UT.type)}`)).join(", ")}) -> ${nT(TT,UT)} {${MT}}`
      }
      return `${UT} ${mT}(${WT.map((TT=>`${TT.type} ${TT.name}`)).join(", ")}) {${MT}}`
    }

    function BT(TT, UT) {
      return !UT || zT(TT) ? "" : `${UT} `
    }

    function ZT(TT, UT, mT, WT) {
      return zT(TT) ? `attribute ${UT}: ${nT(TT,mT)};` : `attribute ${BT(TT,WT)}${mT} ${UT};`
    }

    function cT(TT, UT, mT, WT) {
      return zT(TT) ? `varying ${UT}: ${nT(TT,mT)};` : `varying ${BT(TT,WT)}${mT} ${UT};`
    }

    function vT(TT, UT, mT) {
      return zT(TT) ? `uniform ${UT}: ${nT(TT,mT)};` : `uniform ${mT} ${UT};`
    }

    function fT(TT) {
      return zT(TT) ? "vertexOutputs.position" : "gl_Position"
    }

    function qT(TT, UT) {
      return zT(TT) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${UT}}` : `void main() {${UT}}`
    }

    function iT(TT, UT) {
      return zT(TT) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${UT}}` : `void main() {${UT}}`
    }

    function bT(TT, UT, mT) {
      if (zT(TT)) {
        return [`var ${UT}Sampler: sampler;`, `var ${UT}: ${"2dArray"===mT?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===mT?"sampler2DArray":"sampler2D"} ${UT};`
    }

    function OT(TT, UT, mT) {
      return zT(TT) ? `textureSample(${UT}, ${UT}Sampler, ${mT})` : `texture2D(${UT}, ${mT})`
    }

    function eT(TT, UT, mT, WT, MT) {
      if (zT(TT)) {
        return `${MT?"textureSampleLevel":"textureSample"}(${UT}, ${UT}Sampler, ${mT}, ${kT(TT,`round(${WT})`)}${MT?`, ${MT}`:""})`
      }
      const gT = HT(TT, "vec3", mT, WT);
      return MT ? `textureLod(${UT}, ${gT}, ${MT})` : `texture(${UT}, ${gT})`
    }

    function YT(TT) {
      return zT(TT) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function JT(TT) {
      return zT(TT) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function xT(TT, UT) {
      return zT(TT) ? `vertexInputs.${UT}` : UT
    }

    function dT(TT, UT) {
      return zT(TT) ? `vertexOutputs.${UT}` : UT
    }

    function wT(TT, UT) {
      return zT(TT) ? `fragmentInputs.${UT}` : UT
    }

    function tT(TT, UT) {
      return zT(TT) ? `uniforms.${UT}` : UT
    }

    function aT(TT, UT, mT) {
      return zT(TT) ? `frame.${UT}` : mT
    }

    function yT(TT) {
      return zT(TT) ? "scene.vEyePosition" : "vEyePosition"
    }

    function XT(TT) {
      return zT(TT) ? "mesh.visibility" : "visibility"
    }

    function IT(TT) {
      return zT(TT) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function QT(TT) {
      return zT(TT) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function sT(TT, UT) {
      return zT(TT) ? `dpdx(${UT})` : `dFdx(${UT})`
    }

    function FT(TT, UT) {
      return zT(TT) ? `dpdy(${UT})` : `dFdy(${UT})`
    }

    function PT(TT, UT) {
      return zT(TT) ? `inverseSqrt(${UT})` : `inversesqrt(${UT})`
    }

    function VT(TT, UT, mT, WT) {
      return zT(TT) ? `select(${WT}, ${mT}, ${UT})` : `((${UT}) ? (${mT}) : (${WT}))`
    }

    function uT(TT, UT, mT) {
      return zT(TT) ? `((${UT}) - (${mT}) * floor((${UT}) / (${mT})))` : `mod(${UT}, ${mT})`
    }

    function CT(TT, UT, mT) {
      return zT(TT) ? `${UT} = vec4f(${mT}, ${UT}.a);` : `${UT}.rgb = ${mT};`
    }

    function rT(TT, UT, mT) {
      return zT(TT) ? `${UT} = vec4f(${UT}.rgb * (${mT}), ${UT}.a);` : `${UT}.rgb *= ${mT};`
    }

    function KT(TT, UT, mT) {
      return zT(TT) ? `${UT} = vec4f(${mT}, ${UT}.w);` : `${UT}.xyz = ${mT};`
    }
  },
  39934: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.ShadersRepository : WT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.ShadersStore : WT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.IncludesShadersStore : WT.IncludesShadersStoreWGSL
      }
    }
    WT.ShadersRepository = "src/Shaders/", WT.ShadersStore = {}, WT.IncludesShadersStore = {}, WT.ShadersRepositoryWGSL = "src/ShadersWGSL/", WT.ShadersStoreWGSL = {}, WT.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);