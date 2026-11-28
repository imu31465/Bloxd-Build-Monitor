export const id = 162;
export const ids = [162];
export const modules = {
  7586: (dd, Od, md) => {
    md.d(Od, {
      e: () => Yd,
      f: () => gd,
      g: () => Td,
      j: () => bd
    });
    var Wd = md(7592);
    const Fd = 6,
      Rd = 3,
      Xd = 1,
      Kd = 2,
      hd = 4,
      vd = 8,
      Qd = 16,
      td = 32,
      od = 64,
      Nd = 128,
      qd = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Hd(dd) {
      if (!dd) return 0;
      const Od = qd.indexOf(dd);
      if (Od <= 0) throw new Error(`"${dd}" is not a shader pack hook function`);
      return Od
    }

    function yd(dd) {
      if (0 === dd) return null;
      const Od = qd[dd];
      if (void 0 === Od) throw new Error(`${dd} is not a shader pack hook function id`);
      return Od
    }

    function bd(dd) {
      const Od = Wd.c.length;
      return {
        strict: dd >= Od,
        program: Wd.c[dd % Od]
      }
    }

    function Td(dd) {
      return Number(dd.strict) * Wd.c.length + Wd.c.indexOf(dd.program)
    }

    function pd(dd) {
      return "" === dd ? [] : dd.split(" ")
    }

    function Yd(dd) {
      const Od = {
        variantFlags: new Uint8Array(Fd),
        hooks: new Uint8Array(Fd * Rd),
        moduleCodes: Array(Fd).fill(""),
        reads: Array(2 * Fd).fill("")
      };
      for (const md of dd) {
        const dd = Td(md.key),
          Wd = (dd, Od) => null === md.hooks.surface || md.reads.fragment.includes(dd) ? 0 : Od;
        Od.variantFlags[dd] = (md.sceneDepth ? Xd : 0) | (md.movesVertices ? Kd : 0) | (md.sunShadow ? hd : 0) | (md.airShadow ? vd : 0) | (md.discards ? Qd : 0) | Wd("localPosition", td) | Wd("enchantSpeed", od) | Wd("enchantTier", Nd), Od.hooks[dd * Rd] = Hd(md.hooks.vertex), Od.hooks[dd * Rd + 1] = Hd(md.hooks.surface), Od.hooks[dd * Rd + 2] = Hd(md.hooks.light), Od.moduleCodes[dd] = md.moduleCode, Od.reads[2 * dd] = md.reads.vertex.join(" "), Od.reads[2 * dd + 1] = md.reads.fragment.join(" ")
      }
      return Od
    }

    function gd(dd) {
      const {
        hooks: Od,
        moduleCodes: md,
        reads: Wd
      } = dd;
      return Array.from(dd.variantFlags, ((dd, Fd) => {
        const td = Fd * Rd;
        return {
          key: bd(Fd),
          hooks: {
            vertex: yd(Od[td]),
            surface: yd(Od[td + 1]),
            light: yd(Od[td + 2])
          },
          moduleCode: md[Fd],
          sceneDepth: 0 !== (dd & Xd),
          sunShadow: 0 !== (dd & hd),
          airShadow: 0 !== (dd & vd),
          movesVertices: 0 !== (dd & Kd),
          discards: 0 !== (dd & Qd),
          reads: {
            vertex: pd(Wd[2 * Fd]),
            fragment: pd(Wd[2 * Fd + 1])
          }
        }
      }))
    }
  },
  42770: (dd, Od, md) => {
    md.d(Od, {
      D: () => qd,
      c: () => Fd,
      e: () => Wd,
      i: () => od,
      k: () => Qd,
      l: () => yd,
      n: () => Rd,
      p: () => Kd,
      r: () => hd,
      s: () => Xd,
      w: () => Hd,
      z: () => Nd
    });
    const Wd = 3,
      Fd = 0,
      Rd = 1,
      Xd = 2,
      Kd = {
        uniform: 3,
        QN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      hd = 10,
      vd = "BloxdPackInputs",
      Qd = "bloxdPackInputs",
      td = [{
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
      od = 80;

    function Nd() {
      const dd = td.map((dd => {
        let {
          name: Od,
          type: md
        } = dd;
        return `    ${Od}: ${md},\n`
      })).join("");
      return `struct ${vd} {\n${dd}}\n@group(${Wd}) @binding(${Fd}) var<uniform> ${Qd}: ${vd};\n`
    }

    function qd(dd, Od) {
      const md = new DataView(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, od),
        [Wd, Fd, Rd, Xd, Kd, hd] = td;
      md.setFloat32(Wd.offset, Od.seconds, !0), md.setUint32(Fd.offset, Od.lit ? 1 : 0, !0);
      for (let vd = 0; vd < 3; vd++) md.setInt32(Rd.offset + 4 * vd, Od.renderOffset[vd], !0), md.setFloat32(Xd.offset + 4 * vd, Od.TOd[vd], !0), md.setFloat32(Kd.offset + 4 * vd, Od.eyePosition[vd], !0), md.setFloat32(hd.offset + 4 * vd, Od.shadowDirection[vd], !0)
    }

    function Hd(dd) {
      const Od = new Uint32Array(Math.max(1, dd.length));
      return dd.forEach(((dd, md) => {
        let {
          id: Wd,
          rotation: Fd
        } = dd;
        Od[md] = 65535 & Wd | (3 & Fd) << 16
      })), Od
    }
    const yd = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7592: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      g: () => Xd,
      k: () => Kd,
      m: () => Fd,
      q: () => Rd
    });
    const Wd = ["terrain", "liquid", "model"];

    function Fd() {
      const dd = [];
      for (const Od of [!1, !0])
        for (const md of Wd) dd.push({
          strict: Od,
          program: md
        });
      return dd
    }

    function Rd(dd) {
      return `${dd.strict?"strict":"allow"}.${dd.program}`
    }

    function Xd(dd) {
      return !dd.hooks.vertex && !dd.hooks.surface && !dd.hooks.light
    }

    function Kd(dd, Od) {
      return "off" !== Od && (null === dd || dd.some((dd => dd.key.strict === ("strict" === Od) && !Xd(dd))))
    }
  },
  45318: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      SHADER_PACK_INPUTS_BINDING: () => Rd.c,
      SHADER_PACK_INPUTS_GROUP: () => Rd.e,
      SHADER_PACK_INPUTS_SIZE: () => Rd.i,
      SHADER_PACK_INPUTS_VAR: () => Rd.k,
      SHADER_PACK_MODES: () => Rd.l,
      SHADER_PACK_PROGRAMS: () => Wd.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Rd.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Rd.p,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Rd.r,
      SHADER_PACK_TEXTURES_BINDING: () => Rd.s,
      encodeTextureLayers: () => Rd.w,
      flattenVariants: () => Fd.e,
      isVariantOff: () => Wd.g,
      packRunsIn: () => Wd.k,
      shaderPackInputsWgsl: () => Rd.z,
      shaderPackVariantKeys: () => Wd.m,
      variantKeyId: () => Wd.q,
      writeShaderPackInputs: () => Rd.D
    });
    var Wd = md(7592),
      Fd = md(7586),
      Rd = md(42770)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);