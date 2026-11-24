export const id = 141;
export const ids = [141];
export const modules = {
  6839: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Jt,
      i: () => Ct,
      j: () => Mt,
      n: () => Nt
    });
    var Ot = Vt(6848);
    const qt = 6,
      Dt = 3,
      mt = 1,
      dt = 2,
      jt = 4,
      Ht = 8,
      Xt = 16,
      Qt = 32,
      lt = 64,
      Et = 128,
      ft = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function wt(tt) {
      if (!tt) return 0;
      const et = ft.indexOf(tt);
      if (et <= 0) throw new Error(`"${tt}" is not a shader pack hook function`);
      return et
    }

    function yt(tt) {
      if (0 === tt) return null;
      const et = ft[tt];
      if (void 0 === et) throw new Error(`${tt} is not a shader pack hook function id`);
      return et
    }

    function Nt(tt) {
      const et = Ot.b.length;
      return {
        strict: tt >= et,
        program: Ot.b[tt % et]
      }
    }

    function Mt(tt) {
      return Number(tt.strict) * Ot.b.length + Ot.b.indexOf(tt.program)
    }

    function bt(tt) {
      return "" === tt ? [] : tt.split(" ")
    }

    function Jt(tt) {
      const et = {
        variantFlags: new Uint8Array(qt),
        hooks: new Uint8Array(qt * Dt),
        moduleCodes: Array(qt).fill(""),
        reads: Array(2 * qt).fill("")
      };
      for (const Vt of tt) {
        const tt = Mt(Vt.key),
          Ot = (tt, et) => null === Vt.hooks.surface || Vt.reads.fragment.includes(tt) ? 0 : et;
        et.variantFlags[tt] = (Vt.sceneDepth ? mt : 0) | (Vt.movesVertices ? dt : 0) | (Vt.sunShadow ? jt : 0) | (Vt.airShadow ? Ht : 0) | (Vt.discards ? Xt : 0) | Ot("localPosition", Qt) | Ot("enchantSpeed", lt) | Ot("enchantTier", Et), et.hooks[tt * Dt] = wt(Vt.hooks.vertex), et.hooks[tt * Dt + 1] = wt(Vt.hooks.surface), et.hooks[tt * Dt + 2] = wt(Vt.hooks.light), et.moduleCodes[tt] = Vt.moduleCode, et.reads[2 * tt] = Vt.reads.vertex.join(" "), et.reads[2 * tt + 1] = Vt.reads.fragment.join(" ")
      }
      return et
    }

    function Ct(tt) {
      const {
        hooks: et,
        moduleCodes: Vt,
        reads: Ot
      } = tt;
      return Array.from(tt.variantFlags, ((tt, qt) => {
        const Qt = qt * Dt;
        return {
          key: Nt(qt),
          hooks: {
            vertex: yt(et[Qt]),
            surface: yt(et[Qt + 1]),
            light: yt(et[Qt + 2])
          },
          moduleCode: Vt[qt],
          sceneDepth: 0 !== (tt & mt),
          sunShadow: 0 !== (tt & jt),
          airShadow: 0 !== (tt & Ht),
          movesVertices: 0 !== (tt & dt),
          discards: 0 !== (tt & Xt),
          reads: {
            vertex: bt(Ot[2 * qt]),
            fragment: bt(Ot[2 * qt + 1])
          }
        }
      }))
    }
  },
  40892: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => Et,
      E: () => ft,
      e: () => qt,
      f: () => Ot,
      i: () => lt,
      k: () => Xt,
      n: () => yt,
      q: () => Dt,
      s: () => dt,
      t: () => jt,
      v: () => mt,
      w: () => wt
    });
    const Ot = 3,
      qt = 0,
      Dt = 1,
      mt = 2,
      dt = {
        uniform: 3,
        hl: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      jt = 10,
      Ht = "BloxdPackInputs",
      Xt = "bloxdPackInputs",
      Qt = [{
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
      lt = 80;

    function Et() {
      const tt = Qt.map((tt => {
        let {
          name: et,
          type: Vt
        } = tt;
        return `    ${et}: ${Vt},\n`
      })).join("");
      return `struct ${Ht} {\n${tt}}\n@group(${Ot}) @binding(${qt}) var<uniform> ${Xt}: ${Ht};\n`
    }

    function ft(tt, et) {
      const Vt = new DataView(tt, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, lt),
        [Ot, qt, Dt, mt, dt, jt] = Qt;
      Vt.setFloat32(Ot.offset, et.seconds, !0), Vt.setUint32(qt.offset, et.lit ? 1 : 0, !0);
      for (let Ht = 0; Ht < 3; Ht++) Vt.setInt32(Dt.offset + 4 * Ht, et.renderOffset[Ht], !0), Vt.setFloat32(mt.offset + 4 * Ht, et.jtt[Ht], !0), Vt.setFloat32(dt.offset + 4 * Ht, et.eyePosition[Ht], !0), Vt.setFloat32(jt.offset + 4 * Ht, et.shadowDirection[Ht], !0)
    }

    function wt(tt) {
      const et = new Uint32Array(Math.max(1, tt.length));
      return tt.forEach(((tt, Vt) => {
        let {
          id: Ot,
          rotation: qt
        } = tt;
        et[Vt] = 65535 & Ot | (3 & qt) << 16
      })), et
    }
    const yt = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6848: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      f: () => mt,
      i: () => dt,
      j: () => qt,
      m: () => Dt
    });
    const Ot = ["terrain", "liquid", "model"];

    function qt() {
      const tt = [];
      for (const et of [!1, !0])
        for (const Vt of Ot) tt.push({
          strict: et,
          program: Vt
        });
      return tt
    }

    function Dt(tt) {
      return `${tt.strict?"strict":"allow"}.${tt.program}`
    }

    function mt(tt) {
      return !tt.hooks.vertex && !tt.hooks.surface && !tt.hooks.light
    }

    function dt(tt, et) {
      return "off" !== et && (null === tt || tt.some((tt => tt.key.strict === ("strict" === et) && !mt(tt))))
    }
  },
  41503: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      SHADER_PACK_INPUTS_BINDING: () => Dt.e,
      SHADER_PACK_INPUTS_GROUP: () => Dt.f,
      SHADER_PACK_INPUTS_SIZE: () => Dt.i,
      SHADER_PACK_INPUTS_VAR: () => Dt.k,
      SHADER_PACK_MODES: () => Dt.n,
      SHADER_PACK_PROGRAMS: () => Ot.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Dt.q,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Dt.s,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Dt.t,
      SHADER_PACK_TEXTURES_BINDING: () => Dt.v,
      encodeTextureLayers: () => Dt.w,
      flattenVariants: () => qt.e,
      isVariantOff: () => Ot.f,
      packRunsIn: () => Ot.i,
      shaderPackInputsWgsl: () => Dt.A,
      shaderPackVariantKeys: () => Ot.j,
      variantKeyId: () => Ot.m,
      writeShaderPackInputs: () => Dt.E
    });
    var Ot = Vt(6848),
      qt = Vt(6839),
      Dt = Vt(40892)
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);