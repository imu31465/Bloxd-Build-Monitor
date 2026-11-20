export const id = 133;
export const ids = [133];
export const modules = {
  6215: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => rz,
      g: () => Yz,
      k: () => Bz,
      o: () => Hz
    });
    var Fz = sz(6221);
    const Wz = 6,
      Xz = 3,
      Oz = 1,
      oz = 2,
      vz = 4,
      Uz = 8,
      Kz = 16,
      uz = 32,
      Nz = 64,
      bz = 128,
      wz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Dz(zz) {
      if (!zz) return 0;
      const tz = wz.indexOf(zz);
      if (tz <= 0) throw new Error(`"${zz}" is not a shader pack hook function`);
      return tz
    }

    function gz(zz) {
      if (0 === zz) return null;
      const tz = wz[zz];
      if (void 0 === tz) throw new Error(`${zz} is not a shader pack hook function id`);
      return tz
    }

    function Hz(zz) {
      const tz = Fz.c.length;
      return {
        strict: zz >= tz,
        program: Fz.c[zz % tz]
      }
    }

    function Bz(zz) {
      return Number(zz.strict) * Fz.c.length + Fz.c.indexOf(zz.program)
    }

    function Pz(zz) {
      return "" === zz ? [] : zz.split(" ")
    }

    function rz(zz) {
      const tz = {
        variantFlags: new Uint8Array(Wz),
        hooks: new Uint8Array(Wz * Xz),
        moduleCodes: Array(Wz).fill(""),
        reads: Array(2 * Wz).fill("")
      };
      for (const sz of zz) {
        const zz = Bz(sz.key),
          Fz = (zz, tz) => null === sz.hooks.surface || sz.reads.fragment.includes(zz) ? 0 : tz;
        tz.variantFlags[zz] = (sz.sceneDepth ? Oz : 0) | (sz.movesVertices ? oz : 0) | (sz.sunShadow ? vz : 0) | (sz.airShadow ? Uz : 0) | (sz.discards ? Kz : 0) | Fz("localPosition", uz) | Fz("enchantSpeed", Nz) | Fz("enchantTier", bz), tz.hooks[zz * Xz] = Dz(sz.hooks.vertex), tz.hooks[zz * Xz + 1] = Dz(sz.hooks.surface), tz.hooks[zz * Xz + 2] = Dz(sz.hooks.light), tz.moduleCodes[zz] = sz.moduleCode, tz.reads[2 * zz] = sz.reads.vertex.join(" "), tz.reads[2 * zz + 1] = sz.reads.fragment.join(" ")
      }
      return tz
    }

    function Yz(zz) {
      const {
        hooks: tz,
        moduleCodes: sz,
        reads: Fz
      } = zz;
      return Array.from(zz.variantFlags, ((zz, Wz) => {
        const uz = Wz * Xz;
        return {
          key: Hz(Wz),
          hooks: {
            vertex: gz(tz[uz]),
            surface: gz(tz[uz + 1]),
            light: gz(tz[uz + 2])
          },
          moduleCode: sz[Wz],
          sceneDepth: 0 !== (zz & Oz),
          sunShadow: 0 !== (zz & vz),
          airShadow: 0 !== (zz & Uz),
          movesVertices: 0 !== (zz & oz),
          discards: 0 !== (zz & Kz),
          reads: {
            vertex: Pz(Fz[2 * Wz]),
            fragment: Pz(Fz[2 * Wz + 1])
          }
        }
      }))
    }
  },
  39971: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Oz,
      E: () => Dz,
      F: () => bz,
      J: () => wz,
      e: () => Wz,
      i: () => Fz,
      k: () => Nz,
      m: () => Kz,
      q: () => gz,
      s: () => Xz,
      v: () => oz,
      x: () => vz
    });
    const Fz = 3,
      Wz = 0,
      Xz = 1,
      Oz = 2,
      oz = {
        uniform: 3,
        RN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      vz = 10,
      Uz = "BloxdPackInputs",
      Kz = "bloxdPackInputs",
      uz = [{
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
      Nz = 80;

    function bz() {
      const zz = uz.map((zz => {
        let {
          name: tz,
          type: sz
        } = zz;
        return `    ${tz}: ${sz},\n`
      })).join("");
      return `struct ${Uz} {\n${zz}}\n@group(${Fz}) @binding(${Wz}) var<uniform> ${Kz}: ${Uz};\n`
    }

    function wz(zz, tz) {
      const sz = new DataView(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Nz),
        [Fz, Wz, Xz, Oz, oz, vz] = uz;
      sz.setFloat32(Fz.offset, tz.seconds, !0), sz.setUint32(Wz.offset, tz.lit ? 1 : 0, !0);
      for (let Uz = 0; Uz < 3; Uz++) sz.setInt32(Xz.offset + 4 * Uz, tz.renderOffset[Uz], !0), sz.setFloat32(Oz.offset + 4 * Uz, tz.L_[Uz], !0), sz.setFloat32(oz.offset + 4 * Uz, tz.eyePosition[Uz], !0), sz.setFloat32(vz.offset + 4 * Uz, tz.shadowDirection[Uz], !0)
    }

    function Dz(zz) {
      const tz = new Uint32Array(Math.max(1, zz.length));
      return zz.forEach(((zz, sz) => {
        let {
          id: Fz,
          rotation: Wz
        } = zz;
        tz[sz] = 65535 & Fz | (3 & Wz) << 16
      })), tz
    }
    const gz = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6221: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      g: () => Oz,
      k: () => oz,
      l: () => Wz,
      o: () => Xz
    });
    const Fz = ["terrain", "liquid", "model"];

    function Wz() {
      const zz = [];
      for (const tz of [!1, !0])
        for (const sz of Fz) zz.push({
          strict: tz,
          program: sz
        });
      return zz
    }

    function Xz(zz) {
      return `${zz.strict?"strict":"allow"}.${zz.program}`
    }

    function Oz(zz) {
      return !zz.hooks.vertex && !zz.hooks.surface && !zz.hooks.light
    }

    function oz(zz, tz) {
      return "off" !== tz && (null === zz || zz.some((zz => zz.key.strict === ("strict" === tz) && !Oz(zz))))
    }
  },
  40390: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      SHADER_PACK_INPUTS_BINDING: () => Xz.e,
      SHADER_PACK_INPUTS_GROUP: () => Xz.i,
      SHADER_PACK_INPUTS_SIZE: () => Xz.k,
      SHADER_PACK_INPUTS_VAR: () => Xz.m,
      SHADER_PACK_MODES: () => Xz.q,
      SHADER_PACK_PROGRAMS: () => Fz.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Xz.s,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Xz.v,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Xz.x,
      SHADER_PACK_TEXTURES_BINDING: () => Xz.B,
      encodeTextureLayers: () => Xz.E,
      flattenVariants: () => Wz.c,
      isVariantOff: () => Fz.g,
      packRunsIn: () => Fz.k,
      shaderPackInputsWgsl: () => Xz.F,
      shaderPackVariantKeys: () => Fz.l,
      variantKeyId: () => Fz.o,
      writeShaderPackInputs: () => Xz.J
    });
    var Fz = sz(6221),
      Wz = sz(6215),
      Xz = sz(39971)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);