export const id = 133;
export const ids = [133];
export const modules = {
  6359: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => sz,
      e: () => rz,
      i: () => Xz,
      m: () => wz
    });
    var Ez = bz(6362);
    const nz = 6,
      iz = 3,
      lz = 1,
      Mz = 2,
      tz = 4,
      Hz = 8,
      Oz = 16,
      pz = 32,
      dz = 64,
      Fz = 128,
      Zz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Rz(zz) {
      if (!zz) return 0;
      const uz = Zz.indexOf(zz);
      if (uz <= 0) throw new Error(`"${zz}" is not a shader pack hook function`);
      return uz
    }

    function Kz(zz) {
      if (0 === zz) return null;
      const uz = Zz[zz];
      if (void 0 === uz) throw new Error(`${zz} is not a shader pack hook function id`);
      return uz
    }

    function wz(zz) {
      const uz = Ez.e.length;
      return {
        strict: zz >= uz,
        program: Ez.e[zz % uz]
      }
    }

    function Xz(zz) {
      return Number(zz.strict) * Ez.e.length + Ez.e.indexOf(zz.program)
    }

    function fz(zz) {
      return "" === zz ? [] : zz.split(" ")
    }

    function sz(zz) {
      const uz = {
        variantFlags: new Uint8Array(nz),
        hooks: new Uint8Array(nz * iz),
        moduleCodes: Array(nz).fill(""),
        reads: Array(2 * nz).fill("")
      };
      for (const bz of zz) {
        const zz = Xz(bz.key),
          Ez = (zz, uz) => null === bz.hooks.surface || bz.reads.fragment.includes(zz) ? 0 : uz;
        uz.variantFlags[zz] = (bz.sceneDepth ? lz : 0) | (bz.movesVertices ? Mz : 0) | (bz.sunShadow ? tz : 0) | (bz.airShadow ? Hz : 0) | (bz.discards ? Oz : 0) | Ez("localPosition", pz) | Ez("enchantSpeed", dz) | Ez("enchantTier", Fz), uz.hooks[zz * iz] = Rz(bz.hooks.vertex), uz.hooks[zz * iz + 1] = Rz(bz.hooks.surface), uz.hooks[zz * iz + 2] = Rz(bz.hooks.light), uz.moduleCodes[zz] = bz.moduleCode, uz.reads[2 * zz] = bz.reads.vertex.join(" "), uz.reads[2 * zz + 1] = bz.reads.fragment.join(" ")
      }
      return uz
    }

    function rz(zz) {
      const {
        hooks: uz,
        moduleCodes: bz,
        reads: Ez
      } = zz;
      return Array.from(zz.variantFlags, ((zz, nz) => {
        const pz = nz * iz;
        return {
          key: wz(nz),
          hooks: {
            vertex: Kz(uz[pz]),
            surface: Kz(uz[pz + 1]),
            light: Kz(uz[pz + 2])
          },
          moduleCode: bz[nz],
          sceneDepth: 0 !== (zz & lz),
          sunShadow: 0 !== (zz & tz),
          airShadow: 0 !== (zz & Hz),
          movesVertices: 0 !== (zz & Mz),
          discards: 0 !== (zz & Oz),
          reads: {
            vertex: fz(Ez[2 * nz]),
            fragment: fz(Ez[2 * nz + 1])
          }
        }
      }))
    }
  },
  40071: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Fz,
      B: () => Zz,
      c: () => nz,
      g: () => Ez,
      h: () => dz,
      j: () => Oz,
      m: () => Kz,
      o: () => iz,
      q: () => Mz,
      t: () => tz,
      w: () => lz,
      y: () => Rz
    });
    const Ez = 3,
      nz = 0,
      iz = 1,
      lz = 2,
      Mz = {
        uniform: 3,
        nF: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      tz = 10,
      Hz = "BloxdPackInputs",
      Oz = "bloxdPackInputs",
      pz = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      dz = 80;

    function Fz() {
      const zz = pz.map((zz => {
        let {
          name: uz,
          type: bz
        } = zz;
        return `    ${uz}: ${bz},\n`
      })).join("");
      return `struct ${Hz} {\n${zz}}\n@group(${Ez}) @binding(${nz}) var<uniform> ${Oz}: ${Hz};\n`
    }

    function Zz(zz, uz) {
      const bz = new DataView(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, dz),
        [Ez, nz, iz, lz, Mz, tz] = pz;
      bz.setFloat32(Ez.offset, uz.seconds, !0), bz.setUint32(nz.offset, uz.lit ? 1 : 0, !0);
      for (let Hz = 0; Hz < 3; Hz++) bz.setInt32(iz.offset + 4 * Hz, uz.renderOffset[Hz], !0), bz.setFloat32(lz.offset + 4 * Hz, uz.k_[Hz], !0), bz.setFloat32(Mz.offset + 4 * Hz, uz.eyePosition[Hz], !0), bz.setFloat32(tz.offset + 4 * Hz, uz.shadowDirection[Hz], !0)
    }

    function Rz(zz) {
      const uz = new Uint32Array(Math.max(1, zz.length));
      return zz.forEach(((zz, bz) => {
        let {
          id: Ez,
          rotation: nz
        } = zz;
        uz[bz] = 65535 & Ez | (3 & nz) << 16
      })), uz
    }
    const Kz = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6362: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      i: () => lz,
      j: () => Mz,
      m: () => nz,
      p: () => iz
    });
    const Ez = ["terrain", "liquid", "model"];

    function nz() {
      const zz = [];
      for (const uz of [!1, !0])
        for (const bz of Ez) zz.push({
          strict: uz,
          program: bz
        });
      return zz
    }

    function iz(zz) {
      return `${zz.strict?"strict":"allow"}.${zz.program}`
    }

    function lz(zz) {
      return !zz.hooks.vertex && !zz.hooks.surface && !zz.hooks.light
    }

    function Mz(zz, uz) {
      return "off" !== uz && (null === zz || zz.some((zz => zz.key.strict === ("strict" === uz) && !lz(zz))))
    }
  },
  40487: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      SHADER_PACK_INPUTS_BINDING: () => iz.c,
      SHADER_PACK_INPUTS_GROUP: () => iz.g,
      SHADER_PACK_INPUTS_SIZE: () => iz.h,
      SHADER_PACK_INPUTS_VAR: () => iz.j,
      SHADER_PACK_MODES: () => iz.m,
      SHADER_PACK_PROGRAMS: () => Ez.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => iz.o,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => iz.q,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => iz.t,
      SHADER_PACK_TEXTURES_BINDING: () => iz.w,
      encodeTextureLayers: () => iz.y,
      flattenVariants: () => nz.c,
      isVariantOff: () => Ez.i,
      packRunsIn: () => Ez.j,
      shaderPackInputsWgsl: () => iz.A,
      shaderPackVariantKeys: () => Ez.m,
      variantKeyId: () => Ez.p,
      writeShaderPackInputs: () => iz.B
    });
    var Ez = bz(6362),
      nz = bz(6359),
      iz = bz(40071)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);