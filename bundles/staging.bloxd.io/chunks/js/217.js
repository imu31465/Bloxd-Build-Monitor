export const id = 217;
export const ids = [217];
export const modules = {
  60229: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      DEVTOOLS_SHADERS: () => IY,
      registerDevtoolsShader: () => RY
    });
    var FY = DY(38998),
      AY = DY(36454);
    const IY = {
      devtoolsNormal: function(YY) {
        return {
          vertex: `\n\t\t\t${(0,AY.g)(YY,"position","vec3")}\n\t\t\t${(0,AY.g)(YY,"normal","vec3")}\n\t\t\t${(0,AY.Eb)(YY,"worldViewProjection","mat4")}\n\t\t\t${(0,AY.Eb)(YY,"world","mat4")}\n\t\t\t${(0,AY.Mb)(YY,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,AY.Nb)(YY,`\n\t\t\t\t${(0,AY.k)(YY)} = ${(0,AY.Ib)(YY,"worldViewProjection")} * ${(0,AY.n)(YY,"vec4",(0,AY.Ob)(YY,"position"),"1.0")};\n\t\t\t\t${(0,AY.Pb)(YY,"vNormal")} = normalize((${(0,AY.Ib)(YY,"world")} * ${(0,AY.n)(YY,"vec4",(0,AY.Ob)(YY,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,AY.Mb)(YY,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,AY.R)(YY,`\n\t\t\t\t\n\t\t\t\t${(0,AY.F)(YY,"vec3","normalColor",`abs(${(0,AY.U)(YY,"vNormal")})`)}\n\t\t\t\t${(0,AY.N)(YY)} = ${(0,AY.n)(YY,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(YY) {
        return {
          vertex: `\n\t\t\t${(0,AY.g)(YY,"position","vec3")}\n\t\t\t${(0,AY.Eb)(YY,"worldViewProjection","mat4")}\n\n\t\t\t${(0,AY.Nb)(YY,`\n\t\t\t\t${(0,AY.k)(YY)} = ${(0,AY.Ib)(YY,"worldViewProjection")} * ${(0,AY.n)(YY,"vec4",(0,AY.Ob)(YY,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,AY.R)(YY,`\n\t\t\t\t${(0,AY.N)(YY)} = ${(0,AY.n)(YY,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(YY) {
        return {
          vertex: `\n\t\t\t${(0,AY.g)(YY,"position","vec3")}\n\t\t\t${(0,AY.Eb)(YY,"worldViewProjection","mat4")}\n\t\t\t${(0,AY.Eb)(YY,"world","mat4")}\n\t\t\t${(0,AY.Eb)(YY,"cameraPosition","vec3")}\n\t\t\t${(0,AY.Mb)(YY,"vDepth","float","mediump")}\n\n\t\t\t${(0,AY.Nb)(YY,`\n\t\t\t\t${(0,AY.k)(YY)} = ${(0,AY.Ib)(YY,"worldViewProjection")} * ${(0,AY.n)(YY,"vec4",(0,AY.Ob)(YY,"position"),"1.0")};\n\t\t\t\t${(0,AY.F)(YY,"vec3","worldPosition",`(${(0,AY.Ib)(YY,"world")} * ${(0,AY.n)(YY,"vec4",(0,AY.Ob)(YY,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,AY.Pb)(YY,"vDepth")} = distance(worldPosition, ${(0,AY.Ib)(YY,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,AY.Mb)(YY,"vDepth","float","mediump")}\n\t\t\t${(0,AY.Eb)(YY,"maxDepth","float")}\n\t\t\t${(0,AY.Eb)(YY,"minDepth","float")}\n\n\t\t\t${(0,AY.R)(YY,`\n\t\t\t\t\n\t\t\t\t${(0,AY.F)(YY,"float","normalizedDepth",`clamp((${(0,AY.U)(YY,"vDepth")} - ${(0,AY.Ib)(YY,"minDepth")}) / (${(0,AY.Ib)(YY,"maxDepth")} - ${(0,AY.Ib)(YY,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,AY.F)(YY,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,AY.N)(YY)} = ${(0,AY.n)(YY,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function RY(YY, rY) {
      const {
        vertex: DY,
        fragment: AY
      } = IY[YY](rY), RY = FY.b.GetShadersStore(rY);
      RY[`${YY}VertexShader`] = DY, RY[`${YY}FragmentShader`] = AY
    }
  },
  36454: (YY, rY, DY) => {
    DY.d(rY, {
      Ab: () => aY,
      C: () => uY,
      Eb: () => WY,
      F: () => vY,
      G: () => eY,
      Ib: () => HY,
      K: () => ZY,
      M: () => IY,
      Mb: () => oY,
      N: () => jY,
      Nb: () => mY,
      Ob: () => BY,
      P: () => fY,
      Pb: () => cY,
      R: () => VY,
      U: () => KY,
      Y: () => zY,
      ab: () => JY,
      db: () => AY,
      e: () => FY,
      fb: () => CY,
      g: () => QY,
      hb: () => wY,
      i: () => NY,
      jb: () => XY,
      k: () => EY,
      n: () => gY,
      nb: () => TY,
      ob: () => lY,
      qb: () => bY,
      r: () => hY,
      tb: () => qY,
      ub: () => MY,
      v: () => dY,
      w: () => sY,
      yb: () => SY,
      z: () => iY
    });
    const FY = {
      GLSL: 0,
      WGSL: 1
    };

    function AY(YY) {
      return YY === FY.WGSL
    }

    function IY(YY, rY, DY) {
      return AY(YY) ? DY : rY
    }
    const RY = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function OY(YY, rY) {
      if (!AY(YY)) return rY;
      const DY = RY.get(rY);
      if (!DY) throw new Error(`No WGSL name for shader type "${rY}"`);
      return DY
    }

    function gY(YY, rY) {
      for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
      return `${OY(YY,rY)}(${FY.join(", ")})`
    }

    function aY(YY, rY) {
      return gY(YY, "int", rY)
    }

    function vY(YY, rY, DY, FY, IY) {
      return AY(YY) ? `var ${DY}: ${OY(YY,rY)} = ${FY};` : `${yY(YY,IY)}${rY} ${DY} = ${FY};`
    }

    function uY(YY, rY, DY) {
      return AY(YY) ? `var ${DY}: ${OY(YY,rY)};` : `${rY} ${DY};`
    }

    function sY(YY, rY, DY, FY) {
      return AY(YY) ? `const ${DY}: ${OY(YY,rY)} = ${FY};` : `const ${rY} ${DY} = ${FY};`
    }

    function iY(YY, rY, DY, FY, IY) {
      if (AY(YY)) {
        return `fn ${DY}(${FY.map((rY=>`${rY.name}: ${OY(YY,rY.type)}`)).join(", ")}) -> ${OY(YY,rY)} {${IY}}`
      }
      return `${rY} ${DY}(${FY.map((YY=>`${YY.type} ${YY.name}`)).join(", ")}) {${IY}}`
    }

    function yY(YY, rY) {
      return !rY || AY(YY) ? "" : `${rY} `
    }

    function QY(YY, rY, DY, FY) {
      return AY(YY) ? `attribute ${rY}: ${OY(YY,DY)};` : `attribute ${yY(YY,FY)}${DY} ${rY};`
    }

    function oY(YY, rY, DY, FY) {
      return AY(YY) ? `varying ${rY}: ${OY(YY,DY)};` : `varying ${yY(YY,FY)}${DY} ${rY};`
    }

    function WY(YY, rY, DY) {
      return AY(YY) ? `uniform ${rY}: ${OY(YY,DY)};` : `uniform ${DY} ${rY};`
    }

    function EY(YY) {
      return AY(YY) ? "vertexOutputs.position" : "gl_Position"
    }

    function mY(YY, rY) {
      return AY(YY) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${rY}}` : `void main() {${rY}}`
    }

    function VY(YY, rY) {
      return AY(YY) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${rY}}` : `void main() {${rY}}`
    }

    function SY(YY, rY, DY) {
      if (AY(YY)) {
        return [`var ${rY}Sampler: sampler;`, `var ${rY}: ${"2dArray"===DY?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===DY?"sampler2DArray":"sampler2D"} ${rY};`
    }

    function lY(YY, rY, DY) {
      return AY(YY) ? `textureSample(${rY}, ${rY}Sampler, ${DY})` : `texture2D(${rY}, ${DY})`
    }

    function TY(YY, rY, DY, FY, IY) {
      if (AY(YY)) {
        return `${IY?"textureSampleLevel":"textureSample"}(${rY}, ${rY}Sampler, ${DY}, ${aY(YY,`round(${FY})`)}${IY?`, ${IY}`:""})`
      }
      const RY = gY(YY, "vec3", DY, FY);
      return IY ? `textureLod(${rY}, ${RY}, ${IY})` : `texture(${rY}, ${RY})`
    }

    function eY(YY) {
      return AY(YY) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function NY(YY) {
      return AY(YY) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function BY(YY, rY) {
      return AY(YY) ? `vertexInputs.${rY}` : rY
    }

    function cY(YY, rY) {
      return AY(YY) ? `vertexOutputs.${rY}` : rY
    }

    function KY(YY, rY) {
      return AY(YY) ? `fragmentInputs.${rY}` : rY
    }

    function HY(YY, rY) {
      return AY(YY) ? `uniforms.${rY}` : rY
    }

    function zY(YY, rY, DY) {
      return AY(YY) ? `frame.${rY}` : DY
    }

    function ZY(YY) {
      return AY(YY) ? "scene.vEyePosition" : "vEyePosition"
    }

    function CY(YY) {
      return AY(YY) ? "mesh.visibility" : "visibility"
    }

    function fY(YY) {
      return AY(YY) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function jY(YY) {
      return AY(YY) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function hY(YY, rY) {
      return AY(YY) ? `dpdx(${rY})` : `dFdx(${rY})`
    }

    function dY(YY, rY) {
      return AY(YY) ? `dpdy(${rY})` : `dFdy(${rY})`
    }

    function JY(YY, rY) {
      return AY(YY) ? `inverseSqrt(${rY})` : `inversesqrt(${rY})`
    }

    function MY(YY, rY, DY, FY) {
      return AY(YY) ? `select(${FY}, ${DY}, ${rY})` : `((${rY}) ? (${DY}) : (${FY}))`
    }

    function wY(YY, rY, DY) {
      return AY(YY) ? `((${rY}) - (${DY}) * floor((${rY}) / (${DY})))` : `mod(${rY}, ${DY})`
    }

    function bY(YY, rY, DY) {
      return AY(YY) ? `${rY} = vec4f(${DY}, ${rY}.a);` : `${rY}.rgb = ${DY};`
    }

    function XY(YY, rY, DY) {
      return AY(YY) ? `${rY} = vec4f(${rY}.rgb * (${DY}), ${rY}.a);` : `${rY}.rgb *= ${DY};`
    }

    function qY(YY, rY, DY) {
      return AY(YY) ? `${rY} = vec4f(${DY}, ${rY}.w);` : `${rY}.xyz = ${DY};`
    }
  },
  38998: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.ShadersRepository : FY.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.ShadersStore : FY.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? FY.IncludesShadersStore : FY.IncludesShadersStoreWGSL
      }
    }
    FY.ShadersRepository = "src/Shaders/", FY.ShadersStore = {}, FY.IncludesShadersStore = {}, FY.ShadersRepositoryWGSL = "src/ShadersWGSL/", FY.ShadersStoreWGSL = {}, FY.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);