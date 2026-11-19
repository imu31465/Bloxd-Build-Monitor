export const id = 228;
export const ids = [228];
export const modules = {
  60339: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      DEVTOOLS_SHADERS: () => iz,
      registerDevtoolsShader: () => lz
    });
    var Ez = bz(39033),
      nz = bz(36619);
    const iz = {
      devtoolsNormal: function(zz) {
        return {
          vertex: `\n\t\t\t${(0,nz.g)(zz,"position","vec3")}\n\t\t\t${(0,nz.g)(zz,"normal","vec3")}\n\t\t\t${(0,nz.rb)(zz,"worldViewProjection","mat4")}\n\t\t\t${(0,nz.rb)(zz,"world","mat4")}\n\t\t\t${(0,nz.zb)(zz,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,nz.Db)(zz,`\n\t\t\t\t${(0,nz.k)(zz)} = ${(0,nz.vb)(zz,"worldViewProjection")} * ${(0,nz.l)(zz,"vec4",(0,nz.Fb)(zz,"position"),"1.0")};\n\t\t\t\t${(0,nz.Ib)(zz,"vNormal")} = normalize((${(0,nz.vb)(zz,"world")} * ${(0,nz.l)(zz,"vec4",(0,nz.Fb)(zz,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,nz.zb)(zz,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,nz.L)(zz,`\n\t\t\t\t\n\t\t\t\t${(0,nz.y)(zz,"vec3","normalColor",`abs(${(0,nz.M)(zz,"vNormal")})`)}\n\t\t\t\t${(0,nz.J)(zz)} = ${(0,nz.l)(zz,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(zz) {
        return {
          vertex: `\n\t\t\t${(0,nz.g)(zz,"position","vec3")}\n\t\t\t${(0,nz.rb)(zz,"worldViewProjection","mat4")}\n\n\t\t\t${(0,nz.Db)(zz,`\n\t\t\t\t${(0,nz.k)(zz)} = ${(0,nz.vb)(zz,"worldViewProjection")} * ${(0,nz.l)(zz,"vec4",(0,nz.Fb)(zz,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,nz.L)(zz,`\n\t\t\t\t${(0,nz.J)(zz)} = ${(0,nz.l)(zz,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(zz) {
        return {
          vertex: `\n\t\t\t${(0,nz.g)(zz,"position","vec3")}\n\t\t\t${(0,nz.rb)(zz,"worldViewProjection","mat4")}\n\t\t\t${(0,nz.rb)(zz,"world","mat4")}\n\t\t\t${(0,nz.rb)(zz,"cameraPosition","vec3")}\n\t\t\t${(0,nz.zb)(zz,"vDepth","float","mediump")}\n\n\t\t\t${(0,nz.Db)(zz,`\n\t\t\t\t${(0,nz.k)(zz)} = ${(0,nz.vb)(zz,"worldViewProjection")} * ${(0,nz.l)(zz,"vec4",(0,nz.Fb)(zz,"position"),"1.0")};\n\t\t\t\t${(0,nz.y)(zz,"vec3","worldPosition",`(${(0,nz.vb)(zz,"world")} * ${(0,nz.l)(zz,"vec4",(0,nz.Fb)(zz,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,nz.Ib)(zz,"vDepth")} = distance(worldPosition, ${(0,nz.vb)(zz,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,nz.zb)(zz,"vDepth","float","mediump")}\n\t\t\t${(0,nz.rb)(zz,"maxDepth","float")}\n\t\t\t${(0,nz.rb)(zz,"minDepth","float")}\n\n\t\t\t${(0,nz.L)(zz,`\n\t\t\t\t\n\t\t\t\t${(0,nz.y)(zz,"float","normalizedDepth",`clamp((${(0,nz.M)(zz,"vDepth")} - ${(0,nz.vb)(zz,"minDepth")}) / (${(0,nz.vb)(zz,"maxDepth")} - ${(0,nz.vb)(zz,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,nz.y)(zz,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,nz.J)(zz)} = ${(0,nz.l)(zz,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function lz(zz, uz) {
      const {
        vertex: bz,
        fragment: nz
      } = iz[zz](uz), lz = Ez.e.GetShadersStore(uz);
      lz[`${zz}VertexShader`] = bz, lz[`${zz}FragmentShader`] = nz
    }
  },
  36619: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => vz,
      D: () => Gz,
      Db: () => fz,
      Fb: () => Jz,
      G: () => iz,
      Ib: () => Az,
      J: () => mz,
      K: () => Vz,
      L: () => sz,
      M: () => Tz,
      N: () => Pz,
      P: () => Uz,
      R: () => nz,
      S: () => az,
      U: () => gz,
      Y: () => yz,
      ab: () => Nz,
      c: () => Ez,
      eb: () => oz,
      g: () => Rz,
      hb: () => Sz,
      i: () => xz,
      ib: () => Dz,
      k: () => Xz,
      l: () => tz,
      m: () => qz,
      mb: () => cz,
      n: () => hz,
      ob: () => rz,
      pb: () => Hz,
      r: () => dz,
      rb: () => wz,
      t: () => Fz,
      u: () => pz,
      vb: () => Lz,
      y: () => Oz,
      zb: () => Kz
    });
    const Ez = {
      GLSL: 0,
      WGSL: 1
    };

    function nz(zz) {
      return zz === Ez.WGSL
    }

    function iz(zz, uz, bz) {
      return nz(zz) ? bz : uz
    }
    const lz = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function Mz(zz, uz) {
      if (!nz(zz)) return uz;
      const bz = lz.get(uz);
      if (!bz) throw new Error(`No WGSL name for shader type "${uz}"`);
      return bz
    }

    function tz(zz, uz) {
      for (var bz = arguments.length, Ez = new Array(bz > 2 ? bz - 2 : 0), nz = 2; nz < bz; nz++) Ez[nz - 2] = arguments[nz];
      return `${Mz(zz,uz)}(${Ez.join(", ")})`
    }

    function Hz(zz, uz) {
      return tz(zz, "int", uz)
    }

    function Oz(zz, uz, bz, Ez, iz) {
      return nz(zz) ? `var ${bz}: ${Mz(zz,uz)} = ${Ez};` : `${Zz(zz,iz)}${uz} ${bz} = ${Ez};`
    }

    function pz(zz, uz, bz) {
      return nz(zz) ? `var ${bz}: ${Mz(zz,uz)};` : `${uz} ${bz};`
    }

    function dz(zz, uz, bz, Ez) {
      return nz(zz) ? `const ${bz}: ${Mz(zz,uz)} = ${Ez};` : `const ${uz} ${bz} = ${Ez};`
    }

    function Fz(zz, uz, bz, Ez, iz) {
      if (nz(zz)) {
        return `fn ${bz}(${Ez.map((uz=>`${uz.name}: ${Mz(zz,uz.type)}`)).join(", ")}) -> ${Mz(zz,uz)} {${iz}}`
      }
      return `${uz} ${bz}(${Ez.map((zz=>`${zz.type} ${zz.name}`)).join(", ")}) {${iz}}`
    }

    function Zz(zz, uz) {
      return !uz || nz(zz) ? "" : `${uz} `
    }

    function Rz(zz, uz, bz, Ez) {
      return nz(zz) ? `attribute ${uz}: ${Mz(zz,bz)};` : `attribute ${Zz(zz,Ez)}${bz} ${uz};`
    }

    function Kz(zz, uz, bz, Ez) {
      return nz(zz) ? `varying ${uz}: ${Mz(zz,bz)};` : `varying ${Zz(zz,Ez)}${bz} ${uz};`
    }

    function wz(zz, uz, bz) {
      return nz(zz) ? `uniform ${uz}: ${Mz(zz,bz)};` : `uniform ${bz} ${uz};`
    }

    function Xz(zz) {
      return nz(zz) ? "vertexOutputs.position" : "gl_Position"
    }

    function fz(zz, uz) {
      return nz(zz) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${uz}}` : `void main() {${uz}}`
    }

    function sz(zz, uz) {
      return nz(zz) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${uz}}` : `void main() {${uz}}`
    }

    function rz(zz, uz, bz) {
      if (nz(zz)) {
        return [`var ${uz}Sampler: sampler;`, `var ${uz}: ${"2dArray"===bz?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===bz?"sampler2DArray":"sampler2D"} ${uz};`
    }

    function oz(zz, uz, bz) {
      return nz(zz) ? `textureSample(${uz}, ${uz}Sampler, ${bz})` : `texture2D(${uz}, ${bz})`
    }

    function Nz(zz, uz, bz, Ez, iz) {
      if (nz(zz)) {
        return `${iz?"textureSampleLevel":"textureSample"}(${uz}, ${uz}Sampler, ${bz}, ${Hz(zz,`round(${Ez})`)}${iz?`, ${iz}`:""})`
      }
      const lz = tz(zz, "vec3", bz, Ez);
      return iz ? `textureLod(${uz}, ${lz}, ${iz})` : `texture(${uz}, ${lz})`
    }

    function vz(zz) {
      return nz(zz) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function xz(zz) {
      return nz(zz) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function Jz(zz, uz) {
      return nz(zz) ? `vertexInputs.${uz}` : uz
    }

    function Az(zz, uz) {
      return nz(zz) ? `vertexOutputs.${uz}` : uz
    }

    function Tz(zz, uz) {
      return nz(zz) ? `fragmentInputs.${uz}` : uz
    }

    function Lz(zz, uz) {
      return nz(zz) ? `uniforms.${uz}` : uz
    }

    function Pz(zz, uz, bz) {
      return nz(zz) ? `frame.${uz}` : bz
    }

    function Gz(zz) {
      return nz(zz) ? "scene.vEyePosition" : "vEyePosition"
    }

    function az(zz) {
      return nz(zz) ? "mesh.visibility" : "visibility"
    }

    function Vz(zz) {
      return nz(zz) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function mz(zz) {
      return nz(zz) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function qz(zz, uz) {
      return nz(zz) ? `dpdx(${uz})` : `dFdx(${uz})`
    }

    function hz(zz, uz) {
      return nz(zz) ? `dpdy(${uz})` : `dFdy(${uz})`
    }

    function Uz(zz, uz) {
      return nz(zz) ? `inverseSqrt(${uz})` : `inversesqrt(${uz})`
    }

    function cz(zz, uz, bz, Ez) {
      return nz(zz) ? `select(${Ez}, ${bz}, ${uz})` : `((${uz}) ? (${bz}) : (${Ez}))`
    }

    function gz(zz, uz, bz) {
      return nz(zz) ? `((${uz}) - (${bz}) * floor((${uz}) / (${bz})))` : `mod(${uz}, ${bz})`
    }

    function Sz(zz, uz, bz) {
      return nz(zz) ? `${uz} = vec4f(${bz}, ${uz}.a);` : `${uz}.rgb = ${bz};`
    }

    function yz(zz, uz, bz) {
      return nz(zz) ? `${uz} = vec4f(${uz}.rgb * (${bz}), ${uz}.a);` : `${uz}.rgb *= ${bz};`
    }

    function Dz(zz, uz, bz) {
      return nz(zz) ? `${uz} = vec4f(${bz}, ${uz}.w);` : `${uz}.xyz = ${bz};`
    }
  },
  39033: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersRepository : Ez.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersStore : Ez.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.IncludesShadersStore : Ez.IncludesShadersStoreWGSL
      }
    }
    Ez.ShadersRepository = "src/Shaders/", Ez.ShadersStore = {}, Ez.IncludesShadersStore = {}, Ez.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ez.ShadersStoreWGSL = {}, Ez.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);