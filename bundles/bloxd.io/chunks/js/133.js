export const id = 133;
export const ids = [133];
export const modules = {
  6359: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => mv,
      f: () => jv,
      h: () => cv,
      k: () => iv
    });
    var hv = Pv(6363);
    const Sv = 6,
      ev = 3,
      gv = 1,
      pv = 2,
      dv = 4,
      Nv = 8,
      lv = 16,
      Tv = 32,
      Wv = 64,
      wv = 128,
      av = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function sv(vv) {
      if (!vv) return 0;
      const zv = av.indexOf(vv);
      if (zv <= 0) throw new Error(`"${vv}" is not a shader pack hook function`);
      return zv
    }

    function Cv(vv) {
      if (0 === vv) return null;
      const zv = av[vv];
      if (void 0 === zv) throw new Error(`${vv} is not a shader pack hook function id`);
      return zv
    }

    function iv(vv) {
      const zv = hv.d.length;
      return {
        strict: vv >= zv,
        program: hv.d[vv % zv]
      }
    }

    function cv(vv) {
      return Number(vv.strict) * hv.d.length + hv.d.indexOf(vv.program)
    }

    function Gv(vv) {
      return "" === vv ? [] : vv.split(" ")
    }

    function mv(vv) {
      const zv = {
        variantFlags: new Uint8Array(Sv),
        hooks: new Uint8Array(Sv * ev),
        moduleCodes: Array(Sv).fill(""),
        reads: Array(2 * Sv).fill("")
      };
      for (const Pv of vv) {
        const vv = cv(Pv.key),
          hv = (vv, zv) => null === Pv.hooks.surface || Pv.reads.fragment.includes(vv) ? 0 : zv;
        zv.variantFlags[vv] = (Pv.sceneDepth ? gv : 0) | (Pv.movesVertices ? pv : 0) | (Pv.sunShadow ? dv : 0) | (Pv.airShadow ? Nv : 0) | (Pv.discards ? lv : 0) | hv("localPosition", Tv) | hv("enchantSpeed", Wv) | hv("enchantTier", wv), zv.hooks[vv * ev] = sv(Pv.hooks.vertex), zv.hooks[vv * ev + 1] = sv(Pv.hooks.surface), zv.hooks[vv * ev + 2] = sv(Pv.hooks.light), zv.moduleCodes[vv] = Pv.moduleCode, zv.reads[2 * vv] = Pv.reads.vertex.join(" "), zv.reads[2 * vv + 1] = Pv.reads.fragment.join(" ")
      }
      return zv
    }

    function jv(vv) {
      const {
        hooks: zv,
        moduleCodes: Pv,
        reads: hv
      } = vv;
      return Array.from(vv.variantFlags, ((vv, Sv) => {
        const Tv = Sv * ev;
        return {
          key: iv(Sv),
          hooks: {
            vertex: Cv(zv[Tv]),
            surface: Cv(zv[Tv + 1]),
            light: Cv(zv[Tv + 2])
          },
          moduleCode: Pv[Sv],
          sceneDepth: 0 !== (vv & gv),
          sunShadow: 0 !== (vv & dv),
          airShadow: 0 !== (vv & Nv),
          movesVertices: 0 !== (vv & pv),
          discards: 0 !== (vv & lv),
          reads: {
            vertex: Gv(hv[2 * Sv]),
            fragment: Gv(hv[2 * Sv + 1])
          }
        }
      }))
    }
  },
  40176: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => av,
      b: () => Sv,
      d: () => hv,
      g: () => Wv,
      j: () => lv,
      k: () => Cv,
      n: () => ev,
      p: () => pv,
      r: () => dv,
      s: () => gv,
      v: () => sv,
      z: () => wv
    });
    const hv = 3,
      Sv = 0,
      ev = 1,
      gv = 2,
      pv = {
        uniform: 3,
        fW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      dv = 10,
      Nv = "BloxdPackInputs",
      lv = "bloxdPackInputs",
      Tv = [{
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
      Wv = 80;

    function wv() {
      const vv = Tv.map((vv => {
        let {
          name: zv,
          type: Pv
        } = vv;
        return `    ${zv}: ${Pv},\n`
      })).join("");
      return `struct ${Nv} {\n${vv}}\n@group(${hv}) @binding(${Sv}) var<uniform> ${lv}: ${Nv};\n`
    }

    function av(vv, zv) {
      const Pv = new DataView(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wv),
        [hv, Sv, ev, gv, pv, dv] = Tv;
      Pv.setFloat32(hv.offset, zv.seconds, !0), Pv.setUint32(Sv.offset, zv.lit ? 1 : 0, !0);
      for (let Nv = 0; Nv < 3; Nv++) Pv.setInt32(ev.offset + 4 * Nv, zv.renderOffset[Nv], !0), Pv.setFloat32(gv.offset + 4 * Nv, zv.y_[Nv], !0), Pv.setFloat32(pv.offset + 4 * Nv, zv.eyePosition[Nv], !0), Pv.setFloat32(dv.offset + 4 * Nv, zv.shadowDirection[Nv], !0)
    }

    function sv(vv) {
      const zv = new Uint32Array(Math.max(1, vv.length));
      return vv.forEach(((vv, Pv) => {
        let {
          id: hv,
          rotation: Sv
        } = vv;
        zv[Pv] = 65535 & hv | (3 & Sv) << 16
      })), zv
    }
    const Cv = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6363: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      h: () => gv,
      j: () => pv,
      k: () => Sv,
      l: () => ev
    });
    const hv = ["terrain", "liquid", "model"];

    function Sv() {
      const vv = [];
      for (const zv of [!1, !0])
        for (const Pv of hv) vv.push({
          strict: zv,
          program: Pv
        });
      return vv
    }

    function ev(vv) {
      return `${vv.strict?"strict":"allow"}.${vv.program}`
    }

    function gv(vv) {
      return !vv.hooks.vertex && !vv.hooks.surface && !vv.hooks.light
    }

    function pv(vv, zv) {
      return "off" !== zv && (null === vv || vv.some((vv => vv.key.strict === ("strict" === zv) && !gv(vv))))
    }
  },
  40567: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      SHADER_PACK_INPUTS_BINDING: () => ev.b,
      SHADER_PACK_INPUTS_GROUP: () => ev.d,
      SHADER_PACK_INPUTS_SIZE: () => ev.g,
      SHADER_PACK_INPUTS_VAR: () => ev.j,
      SHADER_PACK_MODES: () => ev.k,
      SHADER_PACK_PROGRAMS: () => hv.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => ev.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => ev.p,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => ev.r,
      SHADER_PACK_TEXTURES_BINDING: () => ev.s,
      encodeTextureLayers: () => ev.v,
      flattenVariants: () => Sv.c,
      isVariantOff: () => hv.h,
      packRunsIn: () => hv.j,
      shaderPackInputsWgsl: () => ev.z,
      shaderPackVariantKeys: () => hv.k,
      variantKeyId: () => hv.l,
      writeShaderPackInputs: () => ev.C
    });
    var hv = Pv(6363),
      Sv = Pv(6359),
      ev = Pv(40176)
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);