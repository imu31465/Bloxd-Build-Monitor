export const id = 228;
export const ids = [228];
export const modules = {
  60325: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      DEVTOOLS_SHADERS: () => Xz,
      registerDevtoolsShader: () => Oz
    });
    var Fz = sz(39041),
      Wz = sz(36569);
    const Xz = {
      devtoolsNormal: function(zz) {
        return {
          vertex: `\n\t\t\t${(0,Wz.f)(zz,"position","vec3")}\n\t\t\t${(0,Wz.f)(zz,"normal","vec3")}\n\t\t\t${(0,Wz.zb)(zz,"worldViewProjection","mat4")}\n\t\t\t${(0,Wz.zb)(zz,"world","mat4")}\n\t\t\t${(0,Wz.Bb)(zz,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wz.Db)(zz,`\n\t\t\t\t${(0,Wz.n)(zz)} = ${(0,Wz.Ab)(zz,"worldViewProjection")} * ${(0,Wz.p)(zz,"vec4",(0,Wz.Gb)(zz,"position"),"1.0")};\n\t\t\t\t${(0,Wz.Hb)(zz,"vNormal")} = normalize((${(0,Wz.Ab)(zz,"world")} * ${(0,Wz.p)(zz,"vec4",(0,Wz.Gb)(zz,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wz.Bb)(zz,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wz.P)(zz,`\n\t\t\t\t\n\t\t\t\t${(0,Wz.C)(zz,"vec3","normalColor",`abs(${(0,Wz.T)(zz,"vNormal")})`)}\n\t\t\t\t${(0,Wz.M)(zz)} = ${(0,Wz.p)(zz,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(zz) {
        return {
          vertex: `\n\t\t\t${(0,Wz.f)(zz,"position","vec3")}\n\t\t\t${(0,Wz.zb)(zz,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Wz.Db)(zz,`\n\t\t\t\t${(0,Wz.n)(zz)} = ${(0,Wz.Ab)(zz,"worldViewProjection")} * ${(0,Wz.p)(zz,"vec4",(0,Wz.Gb)(zz,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wz.P)(zz,`\n\t\t\t\t${(0,Wz.M)(zz)} = ${(0,Wz.p)(zz,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(zz) {
        return {
          vertex: `\n\t\t\t${(0,Wz.f)(zz,"position","vec3")}\n\t\t\t${(0,Wz.zb)(zz,"worldViewProjection","mat4")}\n\t\t\t${(0,Wz.zb)(zz,"world","mat4")}\n\t\t\t${(0,Wz.zb)(zz,"cameraPosition","vec3")}\n\t\t\t${(0,Wz.Bb)(zz,"vDepth","float","mediump")}\n\n\t\t\t${(0,Wz.Db)(zz,`\n\t\t\t\t${(0,Wz.n)(zz)} = ${(0,Wz.Ab)(zz,"worldViewProjection")} * ${(0,Wz.p)(zz,"vec4",(0,Wz.Gb)(zz,"position"),"1.0")};\n\t\t\t\t${(0,Wz.C)(zz,"vec3","worldPosition",`(${(0,Wz.Ab)(zz,"world")} * ${(0,Wz.p)(zz,"vec4",(0,Wz.Gb)(zz,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,Wz.Hb)(zz,"vDepth")} = distance(worldPosition, ${(0,Wz.Ab)(zz,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,Wz.Bb)(zz,"vDepth","float","mediump")}\n\t\t\t${(0,Wz.zb)(zz,"maxDepth","float")}\n\t\t\t${(0,Wz.zb)(zz,"minDepth","float")}\n\n\t\t\t${(0,Wz.P)(zz,`\n\t\t\t\t\n\t\t\t\t${(0,Wz.C)(zz,"float","normalizedDepth",`clamp((${(0,Wz.T)(zz,"vDepth")} - ${(0,Wz.Ab)(zz,"minDepth")}) / (${(0,Wz.Ab)(zz,"maxDepth")} - ${(0,Wz.Ab)(zz,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,Wz.C)(zz,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,Wz.M)(zz)} = ${(0,Wz.p)(zz,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Oz(zz, tz) {
      const {
        vertex: sz,
        fragment: Wz
      } = Xz[zz](tz), Oz = Fz.e.GetShadersStore(tz);
      Oz[`${zz}VertexShader`] = sz, Oz[`${zz}FragmentShader`] = Wz
    }
  },
  36569: (zz, tz, sz) => {
    sz.d(tz, {
      $: () => Wz,
      Ab: () => Gz,
      Bb: () => gz,
      C: () => Kz,
      Db: () => Pz,
      E: () => Jz,
      Gb: () => Cz,
      H: () => cz,
      Hb: () => ez,
      K: () => Xz,
      M: () => yz,
      O: () => Az,
      P: () => rz,
      T: () => Zz,
      U: () => Tz,
      X: () => hz,
      db: () => jz,
      e: () => Fz,
      f: () => Dz,
      fb: () => kz,
      gb: () => Lz,
      hb: () => mz,
      j: () => Iz,
      lb: () => xz,
      mb: () => iz,
      n: () => Bz,
      p: () => vz,
      pb: () => lz,
      s: () => Mz,
      sb: () => Qz,
      t: () => dz,
      tb: () => Yz,
      u: () => Nz,
      w: () => bz,
      wb: () => Uz,
      y: () => uz,
      zb: () => Hz
    });
    const Fz = {
      GLSL: 0,
      WGSL: 1
    };

    function Wz(zz) {
      return zz === Fz.WGSL
    }

    function Xz(zz, tz, sz) {
      return Wz(zz) ? sz : tz
    }
    const Oz = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function oz(zz, tz) {
      if (!Wz(zz)) return tz;
      const sz = Oz.get(tz);
      if (!sz) throw new Error(`No WGSL name for shader type "${tz}"`);
      return sz
    }

    function vz(zz, tz) {
      for (var sz = arguments.length, Fz = new Array(sz > 2 ? sz - 2 : 0), Wz = 2; Wz < sz; Wz++) Fz[Wz - 2] = arguments[Wz];
      return `${oz(zz,tz)}(${Fz.join(", ")})`
    }

    function Uz(zz, tz) {
      return vz(zz, "int", tz)
    }

    function Kz(zz, tz, sz, Fz, Xz) {
      return Wz(zz) ? `var ${sz}: ${oz(zz,tz)} = ${Fz};` : `${wz(zz,Xz)}${tz} ${sz} = ${Fz};`
    }

    function uz(zz, tz, sz) {
      return Wz(zz) ? `var ${sz}: ${oz(zz,tz)};` : `${tz} ${sz};`
    }

    function Nz(zz, tz, sz, Fz) {
      return Wz(zz) ? `const ${sz}: ${oz(zz,tz)} = ${Fz};` : `const ${tz} ${sz} = ${Fz};`
    }

    function bz(zz, tz, sz, Fz, Xz) {
      if (Wz(zz)) {
        return `fn ${sz}(${Fz.map((tz=>`${tz.name}: ${oz(zz,tz.type)}`)).join(", ")}) -> ${oz(zz,tz)} {${Xz}}`
      }
      return `${tz} ${sz}(${Fz.map((zz=>`${zz.type} ${zz.name}`)).join(", ")}) {${Xz}}`
    }

    function wz(zz, tz) {
      return !tz || Wz(zz) ? "" : `${tz} `
    }

    function Dz(zz, tz, sz, Fz) {
      return Wz(zz) ? `attribute ${tz}: ${oz(zz,sz)};` : `attribute ${wz(zz,Fz)}${sz} ${tz};`
    }

    function gz(zz, tz, sz, Fz) {
      return Wz(zz) ? `varying ${tz}: ${oz(zz,sz)};` : `varying ${wz(zz,Fz)}${sz} ${tz};`
    }

    function Hz(zz, tz, sz) {
      return Wz(zz) ? `uniform ${tz}: ${oz(zz,sz)};` : `uniform ${sz} ${tz};`
    }

    function Bz(zz) {
      return Wz(zz) ? "vertexOutputs.position" : "gl_Position"
    }

    function Pz(zz, tz) {
      return Wz(zz) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${tz}}` : `void main() {${tz}}`
    }

    function rz(zz, tz) {
      return Wz(zz) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${tz}}` : `void main() {${tz}}`
    }

    function Yz(zz, tz, sz) {
      if (Wz(zz)) {
        return [`var ${tz}Sampler: sampler;`, `var ${tz}: ${"2dArray"===sz?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===sz?"sampler2DArray":"sampler2D"} ${tz};`
    }

    function xz(zz, tz, sz) {
      return Wz(zz) ? `textureSample(${tz}, ${tz}Sampler, ${sz})` : `texture2D(${tz}, ${sz})`
    }

    function mz(zz, tz, sz, Fz, Xz) {
      if (Wz(zz)) {
        return `${Xz?"textureSampleLevel":"textureSample"}(${tz}, ${tz}Sampler, ${sz}, ${Uz(zz,`round(${Fz})`)}${Xz?`, ${Xz}`:""})`
      }
      const Oz = vz(zz, "vec3", sz, Fz);
      return Xz ? `textureLod(${tz}, ${Oz}, ${Xz})` : `texture(${tz}, ${Oz})`
    }

    function Jz(zz) {
      return Wz(zz) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Iz(zz) {
      return Wz(zz) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Cz(zz, tz) {
      return Wz(zz) ? `vertexInputs.${tz}` : tz
    }

    function ez(zz, tz) {
      return Wz(zz) ? `vertexOutputs.${tz}` : tz
    }

    function Zz(zz, tz) {
      return Wz(zz) ? `fragmentInputs.${tz}` : tz
    }

    function Gz(zz, tz) {
      return Wz(zz) ? `uniforms.${tz}` : tz
    }

    function Tz(zz, tz, sz) {
      return Wz(zz) ? `frame.${tz}` : sz
    }

    function cz(zz) {
      return Wz(zz) ? "scene.vEyePosition" : "vEyePosition"
    }

    function jz(zz) {
      return Wz(zz) ? "mesh.visibility" : "visibility"
    }

    function Az(zz) {
      return Wz(zz) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function yz(zz) {
      return Wz(zz) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Mz(zz, tz) {
      return Wz(zz) ? `dpdx(${tz})` : `dFdx(${tz})`
    }

    function dz(zz, tz) {
      return Wz(zz) ? `dpdy(${tz})` : `dFdy(${tz})`
    }

    function hz(zz, tz) {
      return Wz(zz) ? `inverseSqrt(${tz})` : `inversesqrt(${tz})`
    }

    function Qz(zz, tz, sz, Fz) {
      return Wz(zz) ? `select(${Fz}, ${sz}, ${tz})` : `((${tz}) ? (${sz}) : (${Fz}))`
    }

    function kz(zz, tz, sz) {
      return Wz(zz) ? `((${tz}) - (${sz}) * floor((${tz}) / (${sz})))` : `mod(${tz}, ${sz})`
    }

    function iz(zz, tz, sz) {
      return Wz(zz) ? `${tz} = vec4f(${sz}, ${tz}.a);` : `${tz}.rgb = ${sz};`
    }

    function Lz(zz, tz, sz) {
      return Wz(zz) ? `${tz} = vec4f(${tz}.rgb * (${sz}), ${tz}.a);` : `${tz}.rgb *= ${sz};`
    }

    function lz(zz, tz, sz) {
      return Wz(zz) ? `${tz} = vec4f(${sz}, ${tz}.w);` : `${tz}.xyz = ${sz};`
    }
  },
  39041: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.ShadersRepository : Fz.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.ShadersStore : Fz.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.IncludesShadersStore : Fz.IncludesShadersStoreWGSL
      }
    }
    Fz.ShadersRepository = "src/Shaders/", Fz.ShadersStore = {}, Fz.IncludesShadersStore = {}, Fz.ShadersRepositoryWGSL = "src/ShadersWGSL/", Fz.ShadersStoreWGSL = {}, Fz.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);