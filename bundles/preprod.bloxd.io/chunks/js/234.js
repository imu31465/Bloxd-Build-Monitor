export const id = 234;
export const ids = [234];
export const modules = {
  60944: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      DEVTOOLS_SHADERS: () => bC,
      registerDevtoolsShader: () => nC
    });
    var QC = ZC(39674),
      wC = ZC(37050);
    const bC = {
      devtoolsNormal: function(CC) {
        return {
          vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.f)(CC,"normal","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\t\t\t${(0,wC.nb)(CC,"world","mat4")}\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${(0,wC.i)(CC)} = ${(0,wC.ob)(CC,"worldViewProjection")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"position"),"1.0")};\n\t\t\t\t${(0,wC.Ab)(CC,"vNormal")} = normalize((${(0,wC.ob)(CC,"world")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t\n\t\t\t\t${(0,wC.w)(CC,"vec3","normalColor",`abs(${(0,wC.J)(CC,"vNormal")})`)}\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(CC) {
        return {
          vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${(0,wC.i)(CC)} = ${(0,wC.ob)(CC,"worldViewProjection")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(CC) {
        return {
          vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\t\t\t${(0,wC.nb)(CC,"world","mat4")}\n\t\t\t${(0,wC.nb)(CC,"cameraPosition","vec3")}\n\t\t\t${(0,wC.qb)(CC,"vDepth","float","mediump")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${(0,wC.i)(CC)} = ${(0,wC.ob)(CC,"worldViewProjection")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"position"),"1.0")};\n\t\t\t\t${(0,wC.w)(CC,"vec3","worldPosition",`(${(0,wC.ob)(CC,"world")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,wC.Ab)(CC,"vDepth")} = distance(worldPosition, ${(0,wC.ob)(CC,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,wC.qb)(CC,"vDepth","float","mediump")}\n\t\t\t${(0,wC.nb)(CC,"maxDepth","float")}\n\t\t\t${(0,wC.nb)(CC,"minDepth","float")}\n\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t\n\t\t\t\t${(0,wC.w)(CC,"float","normalizedDepth",`clamp((${(0,wC.J)(CC,"vDepth")} - ${(0,wC.ob)(CC,"minDepth")}) / (${(0,wC.ob)(CC,"maxDepth")} - ${(0,wC.ob)(CC,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,wC.w)(CC,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function nC(CC, zC) {
      const {
        vertex: ZC,
        fragment: wC
      } = bC[CC](zC), nC = QC.b.GetShadersStore(zC);
      nC[`${CC}VertexShader`] = ZC, nC[`${CC}FragmentShader`] = wC
    }
  },
  37050: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => mC,
      Ab: () => hC,
      B: () => bC,
      C: () => lC,
      E: () => EC,
      F: () => AC,
      J: () => KC,
      L: () => dC,
      P: () => uC,
      S: () => wC,
      U: () => HC,
      Y: () => sC,
      Z: () => aC,
      _: () => IC,
      ab: () => JC,
      bb: () => TC,
      cb: () => tC,
      e: () => QC,
      f: () => SC,
      fb: () => rC,
      g: () => vC,
      gb: () => xC,
      i: () => GC,
      jb: () => qC,
      l: () => oC,
      m: () => XC,
      nb: () => PC,
      ob: () => YC,
      q: () => cC,
      qb: () => pC,
      r: () => NC,
      sb: () => RC,
      u: () => MC,
      v: () => WC,
      w: () => FC,
      wb: () => eC,
      x: () => iC
    });
    const QC = {
      GLSL: 0,
      WGSL: 1
    };

    function wC(CC) {
      return CC === QC.WGSL
    }

    function bC(CC, zC, ZC) {
      return wC(CC) ? ZC : zC
    }
    const nC = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function fC(CC, zC) {
      if (!wC(CC)) return zC;
      const ZC = nC.get(zC);
      if (!ZC) throw new Error(`No WGSL name for shader type "${zC}"`);
      return ZC
    }

    function oC(CC, zC) {
      for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
      return `${fC(CC,zC)}(${QC.join(", ")})`
    }

    function qC(CC, zC) {
      return oC(CC, "int", zC)
    }

    function FC(CC, zC, ZC, QC, bC) {
      return wC(CC) ? `var ${ZC}: ${fC(CC,zC)} = ${QC};` : `${gC(CC,bC)}${zC} ${ZC} = ${QC};`
    }

    function WC(CC, zC, ZC) {
      return wC(CC) ? `var ${ZC}: ${fC(CC,zC)};` : `${zC} ${ZC};`
    }

    function NC(CC, zC, ZC, QC) {
      return wC(CC) ? `const ${ZC}: ${fC(CC,zC)} = ${QC};` : `const ${zC} ${ZC} = ${QC};`
    }

    function MC(CC, zC, ZC, QC, bC) {
      if (wC(CC)) {
        return `fn ${ZC}(${QC.map((zC=>`${zC.name}: ${fC(CC,zC.type)}`)).join(", ")}) -> ${fC(CC,zC)} {${bC}}`
      }
      return `${zC} ${ZC}(${QC.map((CC=>`${CC.type} ${CC.name}`)).join(", ")}) {${bC}}`
    }

    function gC(CC, zC) {
      return !zC || wC(CC) ? "" : `${zC} `
    }

    function SC(CC, zC, ZC, QC) {
      return wC(CC) ? `attribute ${zC}: ${fC(CC,ZC)};` : `attribute ${gC(CC,QC)}${ZC} ${zC};`
    }

    function pC(CC, zC, ZC, QC) {
      return wC(CC) ? `varying ${zC}: ${fC(CC,ZC)};` : `varying ${gC(CC,QC)}${ZC} ${zC};`
    }

    function PC(CC, zC, ZC) {
      return wC(CC) ? `uniform ${zC}: ${fC(CC,ZC)};` : `uniform ${ZC} ${zC};`
    }

    function GC(CC) {
      return wC(CC) ? "vertexOutputs.position" : "gl_Position"
    }

    function RC(CC, zC) {
      return wC(CC) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${zC}}` : `void main() {${zC}}`
    }

    function AC(CC, zC) {
      return wC(CC) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${zC}}` : `void main() {${zC}}`
    }

    function xC(CC, zC, ZC) {
      if (wC(CC)) {
        return [`var ${zC}Sampler: sampler;`, `var ${zC}: ${"2dArray"===ZC?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===ZC?"sampler2DArray":"sampler2D"} ${zC};`
    }

    function JC(CC, zC, ZC) {
      return wC(CC) ? `textureSample(${zC}, ${zC}Sampler, ${ZC})` : `texture2D(${zC}, ${ZC})`
    }

    function IC(CC, zC, ZC, QC, bC) {
      if (wC(CC)) {
        return `${bC?"textureSampleLevel":"textureSample"}(${zC}, ${zC}Sampler, ${ZC}, ${qC(CC,`round(${QC})`)}${bC?`, ${bC}`:""})`
      }
      const nC = oC(CC, "vec3", ZC, QC);
      return bC ? `textureLod(${zC}, ${nC}, ${bC})` : `texture(${zC}, ${nC})`
    }

    function iC(CC) {
      return wC(CC) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function vC(CC) {
      return wC(CC) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function eC(CC, zC) {
      return wC(CC) ? `vertexInputs.${zC}` : zC
    }

    function hC(CC, zC) {
      return wC(CC) ? `vertexOutputs.${zC}` : zC
    }

    function KC(CC, zC) {
      return wC(CC) ? `fragmentInputs.${zC}` : zC
    }

    function YC(CC, zC) {
      return wC(CC) ? `uniforms.${zC}` : zC
    }

    function dC(CC, zC, ZC) {
      return wC(CC) ? `frame.${zC}` : ZC
    }

    function mC(CC) {
      return wC(CC) ? "scene.vEyePosition" : "vEyePosition"
    }

    function HC(CC) {
      return wC(CC) ? "mesh.visibility" : "visibility"
    }

    function EC(CC) {
      return wC(CC) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function lC(CC) {
      return wC(CC) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function XC(CC, zC) {
      return wC(CC) ? `dpdx(${zC})` : `dFdx(${zC})`
    }

    function cC(CC, zC) {
      return wC(CC) ? `dpdy(${zC})` : `dFdy(${zC})`
    }

    function uC(CC, zC) {
      return wC(CC) ? `inverseSqrt(${zC})` : `inversesqrt(${zC})`
    }

    function rC(CC, zC, ZC, QC) {
      return wC(CC) ? `select(${QC}, ${ZC}, ${zC})` : `((${zC}) ? (${ZC}) : (${QC}))`
    }

    function sC(CC, zC, ZC) {
      return wC(CC) ? `((${zC}) - (${ZC}) * floor((${zC}) / (${ZC})))` : `mod(${zC}, ${ZC})`
    }

    function TC(CC, zC, ZC) {
      return wC(CC) ? `${zC} = vec4f(${ZC}, ${zC}.a);` : `${zC}.rgb = ${ZC};`
    }

    function aC(CC, zC, ZC) {
      return wC(CC) ? `${zC} = vec4f(${zC}.rgb * (${ZC}), ${zC}.a);` : `${zC}.rgb *= ${ZC};`
    }

    function tC(CC, zC, ZC) {
      return wC(CC) ? `${zC} = vec4f(${ZC}, ${zC}.w);` : `${zC}.xyz = ${ZC};`
    }
  },
  39674: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    class QC {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
      }
    }
    QC.ShadersRepository = "src/Shaders/", QC.ShadersStore = {}, QC.IncludesShadersStore = {}, QC.ShadersRepositoryWGSL = "src/ShadersWGSL/", QC.ShadersStoreWGSL = {}, QC.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);