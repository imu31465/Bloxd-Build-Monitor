export const id = 208;
export const ids = [208];
export const modules = {
  59702: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      DEVTOOLS_SHADERS: () => fy,
      registerDevtoolsShader: () => Zy
    });
    var Uy = Wy(38319),
      hy = Wy(35790);
    const fy = {
      devtoolsNormal: function(yb) {
        return {
          vertex: `\n\t\t\t${(0,hy.f)(yb,"position","vec3")}\n\t\t\t${(0,hy.f)(yb,"normal","vec3")}\n\t\t\t${(0,hy.yb)(yb,"worldViewProjection","mat4")}\n\t\t\t${(0,hy.yb)(yb,"world","mat4")}\n\t\t\t${(0,hy.Bb)(yb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,hy.Eb)(yb,`\n\t\t\t\t${(0,hy.h)(yb)} = ${(0,hy.zb)(yb,"worldViewProjection")} * ${(0,hy.j)(yb,"vec4",(0,hy.Fb)(yb,"position"),"1.0")};\n\t\t\t\t${(0,hy.Jb)(yb,"vNormal")} = normalize((${(0,hy.zb)(yb,"world")} * ${(0,hy.j)(yb,"vec4",(0,hy.Fb)(yb,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,hy.Bb)(yb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,hy.Q)(yb,`\n\t\t\t\t\n\t\t\t\t${(0,hy.A)(yb,"vec3","normalColor",`abs(${(0,hy.U)(yb,"vNormal")})`)}\n\t\t\t\t${(0,hy.L)(yb)} = ${(0,hy.j)(yb,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(yb) {
        return {
          vertex: `\n\t\t\t${(0,hy.f)(yb,"position","vec3")}\n\t\t\t${(0,hy.yb)(yb,"worldViewProjection","mat4")}\n\n\t\t\t${(0,hy.Eb)(yb,`\n\t\t\t\t${(0,hy.h)(yb)} = ${(0,hy.zb)(yb,"worldViewProjection")} * ${(0,hy.j)(yb,"vec4",(0,hy.Fb)(yb,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,hy.Q)(yb,`\n\t\t\t\t${(0,hy.L)(yb)} = ${(0,hy.j)(yb,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(yb) {
        return {
          vertex: `\n\t\t\t${(0,hy.f)(yb,"position","vec3")}\n\t\t\t${(0,hy.yb)(yb,"worldViewProjection","mat4")}\n\t\t\t${(0,hy.yb)(yb,"world","mat4")}\n\t\t\t${(0,hy.yb)(yb,"cameraPosition","vec3")}\n\t\t\t${(0,hy.Bb)(yb,"vDepth","float","mediump")}\n\n\t\t\t${(0,hy.Eb)(yb,`\n\t\t\t\t${(0,hy.h)(yb)} = ${(0,hy.zb)(yb,"worldViewProjection")} * ${(0,hy.j)(yb,"vec4",(0,hy.Fb)(yb,"position"),"1.0")};\n\t\t\t\t${(0,hy.A)(yb,"vec3","worldPosition",`(${(0,hy.zb)(yb,"world")} * ${(0,hy.j)(yb,"vec4",(0,hy.Fb)(yb,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,hy.Jb)(yb,"vDepth")} = distance(worldPosition, ${(0,hy.zb)(yb,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,hy.Bb)(yb,"vDepth","float","mediump")}\n\t\t\t${(0,hy.yb)(yb,"maxDepth","float")}\n\t\t\t${(0,hy.yb)(yb,"minDepth","float")}\n\n\t\t\t${(0,hy.Q)(yb,`\n\t\t\t\t\n\t\t\t\t${(0,hy.A)(yb,"float","normalizedDepth",`clamp((${(0,hy.U)(yb,"vDepth")} - ${(0,hy.zb)(yb,"minDepth")}) / (${(0,hy.zb)(yb,"maxDepth")} - ${(0,hy.zb)(yb,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,hy.A)(yb,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,hy.L)(yb)} = ${(0,hy.j)(yb,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Zy(yb, bb) {
      const {
        vertex: Wy,
        fragment: hy
      } = fy[yb](bb), Zy = Uy.e.GetShadersStore(bb);
      Zy[`${yb}VertexShader`] = Wy, Zy[`${yb}FragmentShader`] = hy
    }
  },
  35790: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => hy,
      A: () => By,
      Bb: () => Ey,
      D: () => Gy,
      E: () => Xy,
      Eb: () => Cy,
      Fb: () => Ry,
      H: () => fy,
      Jb: () => vb,
      L: () => rb,
      M: () => uy,
      Q: () => Ty,
      U: () => ib,
      Y: () => Yy,
      _: () => Fy,
      b: () => Uy,
      bb: () => ny,
      eb: () => Ly,
      f: () => Sy,
      g: () => Oy,
      gb: () => jb,
      h: () => mb,
      j: () => Py,
      jb: () => gb,
      lb: () => Jy,
      m: () => Hy,
      ob: () => Qy,
      pb: () => Dy,
      q: () => ab,
      qb: () => py,
      r: () => ey,
      sb: () => Vy,
      u: () => qb,
      ub: () => oy,
      x: () => Ky,
      yb: () => ly,
      zb: () => My
    });
    const Uy = {
      GLSL: 0,
      WGSL: 1
    };

    function hy(yb) {
      return yb === Uy.WGSL
    }

    function fy(yb, bb, Wy) {
      return hy(yb) ? Wy : bb
    }
    const Zy = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function cb(yb, bb) {
      if (!hy(yb)) return bb;
      const Wy = Zy.get(bb);
      if (!Wy) throw new Error(`No WGSL name for shader type "${bb}"`);
      return Wy
    }

    function Py(yb, bb) {
      for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
      return `${cb(yb,bb)}(${Uy.join(", ")})`
    }

    function oy(yb, bb) {
      return Py(yb, "int", bb)
    }

    function By(yb, bb, Wy, Uy, fy) {
      return hy(yb) ? `var ${Wy}: ${cb(yb,bb)} = ${Uy};` : `${sy(yb,fy)}${bb} ${Wy} = ${Uy};`
    }

    function Ky(yb, bb, Wy) {
      return hy(yb) ? `var ${Wy}: ${cb(yb,bb)};` : `${bb} ${Wy};`
    }

    function ey(yb, bb, Wy, Uy) {
      return hy(yb) ? `const ${Wy}: ${cb(yb,bb)} = ${Uy};` : `const ${bb} ${Wy} = ${Uy};`
    }

    function qb(yb, bb, Wy, Uy, fy) {
      if (hy(yb)) {
        return `fn ${Wy}(${Uy.map((bb=>`${bb.name}: ${cb(yb,bb.type)}`)).join(", ")}) -> ${cb(yb,bb)} {${fy}}`
      }
      return `${bb} ${Wy}(${Uy.map((yb=>`${yb.type} ${yb.name}`)).join(", ")}) {${fy}}`
    }

    function sy(yb, bb) {
      return !bb || hy(yb) ? "" : `${bb} `
    }

    function Sy(yb, bb, Wy, Uy) {
      return hy(yb) ? `attribute ${bb}: ${cb(yb,Wy)};` : `attribute ${sy(yb,Uy)}${Wy} ${bb};`
    }

    function Ey(yb, bb, Wy, Uy) {
      return hy(yb) ? `varying ${bb}: ${cb(yb,Wy)};` : `varying ${sy(yb,Uy)}${Wy} ${bb};`
    }

    function ly(yb, bb, Wy) {
      return hy(yb) ? `uniform ${bb}: ${cb(yb,Wy)};` : `uniform ${Wy} ${bb};`
    }

    function mb(yb) {
      return hy(yb) ? "vertexOutputs.position" : "gl_Position"
    }

    function Cy(yb, bb) {
      return hy(yb) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${bb}}` : `void main() {${bb}}`
    }

    function Ty(yb, bb) {
      return hy(yb) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${bb}}` : `void main() {${bb}}`
    }

    function Vy(yb, bb, Wy) {
      if (hy(yb)) {
        return [`var ${bb}Sampler: sampler;`, `var ${bb}: ${"2dArray"===Wy?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===Wy?"sampler2DArray":"sampler2D"} ${bb};`
    }

    function Jy(yb, bb, Wy) {
      return hy(yb) ? `textureSample(${bb}, ${bb}Sampler, ${Wy})` : `texture2D(${bb}, ${Wy})`
    }

    function gb(yb, bb, Wy, Uy, fy) {
      if (hy(yb)) {
        return `${fy?"textureSampleLevel":"textureSample"}(${bb}, ${bb}Sampler, ${Wy}, ${oy(yb,`round(${Uy})`)}${fy?`, ${fy}`:""})`
      }
      const Zy = Py(yb, "vec3", Wy, Uy);
      return fy ? `textureLod(${bb}, ${Zy}, ${fy})` : `texture(${bb}, ${Zy})`
    }

    function Gy(yb) {
      return hy(yb) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Oy(yb) {
      return hy(yb) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Ry(yb, bb) {
      return hy(yb) ? `vertexInputs.${bb}` : bb
    }

    function vb(yb, bb) {
      return hy(yb) ? `vertexOutputs.${bb}` : bb
    }

    function ib(yb, bb) {
      return hy(yb) ? `fragmentInputs.${bb}` : bb
    }

    function My(yb, bb) {
      return hy(yb) ? `uniforms.${bb}` : bb
    }

    function Yy(yb, bb, Wy) {
      return hy(yb) ? `frame.${bb}` : Wy
    }

    function Xy(yb) {
      return hy(yb) ? "scene.vEyePosition" : "vEyePosition"
    }

    function ny(yb) {
      return hy(yb) ? "mesh.visibility" : "visibility"
    }

    function uy(yb) {
      return hy(yb) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function rb(yb) {
      return hy(yb) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Hy(yb, bb) {
      return hy(yb) ? `dpdx(${bb})` : `dFdx(${bb})`
    }

    function ab(yb, bb) {
      return hy(yb) ? `dpdy(${bb})` : `dFdy(${bb})`
    }

    function Fy(yb, bb) {
      return hy(yb) ? `inverseSqrt(${bb})` : `inversesqrt(${bb})`
    }

    function py(yb, bb, Wy, Uy) {
      return hy(yb) ? `select(${Uy}, ${Wy}, ${bb})` : `((${bb}) ? (${Wy}) : (${Uy}))`
    }

    function Ly(yb, bb, Wy) {
      return hy(yb) ? `((${bb}) - (${Wy}) * floor((${bb}) / (${Wy})))` : `mod(${bb}, ${Wy})`
    }

    function Qy(yb, bb, Wy) {
      return hy(yb) ? `${bb} = vec4f(${Wy}, ${bb}.a);` : `${bb}.rgb = ${Wy};`
    }

    function jb(yb, bb, Wy) {
      return hy(yb) ? `${bb} = vec4f(${bb}.rgb * (${Wy}), ${bb}.a);` : `${bb}.rgb *= ${Wy};`
    }

    function Dy(yb, bb, Wy) {
      return hy(yb) ? `${bb} = vec4f(${Wy}, ${bb}.w);` : `${bb}.xyz = ${Wy};`
    }
  },
  38319: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.ShadersRepository : Uy.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.ShadersStore : Uy.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.IncludesShadersStore : Uy.IncludesShadersStoreWGSL
      }
    }
    Uy.ShadersRepository = "src/Shaders/", Uy.ShadersStore = {}, Uy.IncludesShadersStore = {}, Uy.ShadersRepositoryWGSL = "src/ShadersWGSL/", Uy.ShadersStoreWGSL = {}, Uy.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);