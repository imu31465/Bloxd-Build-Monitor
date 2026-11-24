export const id = 138;
export const ids = [138];
export const modules = {
  6580: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Km,
      e: () => Qm,
      f: () => Vm,
      i: () => jm
    });
    var hm = fm(6586);
    const Am = 6,
      am = 3,
      xm = 1,
      wm = 2,
      Dm = 4,
      im = 8,
      Rm = 16,
      pm = 32,
      Em = 64,
      om = 128,
      Om = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Ym(mm) {
      if (!mm) return 0;
      const Tm = Om.indexOf(mm);
      if (Tm <= 0) throw new Error(`"${mm}" is not a shader pack hook function`);
      return Tm
    }

    function qm(mm) {
      if (0 === mm) return null;
      const Tm = Om[mm];
      if (void 0 === Tm) throw new Error(`${mm} is not a shader pack hook function id`);
      return Tm
    }

    function jm(mm) {
      const Tm = hm.e.length;
      return {
        strict: mm >= Tm,
        program: hm.e[mm % Tm]
      }
    }

    function Vm(mm) {
      return Number(mm.strict) * hm.e.length + hm.e.indexOf(mm.program)
    }

    function Im(mm) {
      return "" === mm ? [] : mm.split(" ")
    }

    function Km(mm) {
      const Tm = {
        variantFlags: new Uint8Array(Am),
        hooks: new Uint8Array(Am * am),
        moduleCodes: Array(Am).fill(""),
        reads: Array(2 * Am).fill("")
      };
      for (const fm of mm) {
        const mm = Vm(fm.key),
          hm = (mm, Tm) => null === fm.hooks.surface || fm.reads.fragment.includes(mm) ? 0 : Tm;
        Tm.variantFlags[mm] = (fm.sceneDepth ? xm : 0) | (fm.movesVertices ? wm : 0) | (fm.sunShadow ? Dm : 0) | (fm.airShadow ? im : 0) | (fm.discards ? Rm : 0) | hm("localPosition", pm) | hm("enchantSpeed", Em) | hm("enchantTier", om), Tm.hooks[mm * am] = Ym(fm.hooks.vertex), Tm.hooks[mm * am + 1] = Ym(fm.hooks.surface), Tm.hooks[mm * am + 2] = Ym(fm.hooks.light), Tm.moduleCodes[mm] = fm.moduleCode, Tm.reads[2 * mm] = fm.reads.vertex.join(" "), Tm.reads[2 * mm + 1] = fm.reads.fragment.join(" ")
      }
      return Tm
    }

    function Qm(mm) {
      const {
        hooks: Tm,
        moduleCodes: fm,
        reads: hm
      } = mm;
      return Array.from(mm.variantFlags, ((mm, Am) => {
        const pm = Am * am;
        return {
          key: jm(Am),
          hooks: {
            vertex: qm(Tm[pm]),
            surface: qm(Tm[pm + 1]),
            light: qm(Tm[pm + 2])
          },
          moduleCode: fm[Am],
          sceneDepth: 0 !== (mm & xm),
          sunShadow: 0 !== (mm & Dm),
          airShadow: 0 !== (mm & im),
          movesVertices: 0 !== (mm & wm),
          discards: 0 !== (mm & Rm),
          reads: {
            vertex: Im(hm[2 * Am]),
            fragment: Im(hm[2 * Am + 1])
          }
        }
      }))
    }
  },
  40776: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      e: () => hm,
      f: () => Em,
      g: () => Rm,
      h: () => qm,
      i: () => am,
      k: () => wm,
      n: () => Dm,
      q: () => xm,
      u: () => Ym,
      v: () => om,
      x: () => Om
    });
    const hm = 3,
      Am = 0,
      am = 1,
      xm = 2,
      wm = {
        uniform: 3,
        lE: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Dm = 10,
      im = "BloxdPackInputs",
      Rm = "bloxdPackInputs",
      pm = [{
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
      Em = 80;

    function om() {
      const mm = pm.map((mm => {
        let {
          name: Tm,
          type: fm
        } = mm;
        return `    ${Tm}: ${fm},\n`
      })).join("");
      return `struct ${im} {\n${mm}}\n@group(${hm}) @binding(${Am}) var<uniform> ${Rm}: ${im};\n`
    }

    function Om(mm, Tm) {
      const fm = new DataView(mm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Em),
        [hm, Am, am, xm, wm, Dm] = pm;
      fm.setFloat32(hm.offset, Tm.seconds, !0), fm.setUint32(Am.offset, Tm.lit ? 1 : 0, !0);
      for (let im = 0; im < 3; im++) fm.setInt32(am.offset + 4 * im, Tm.renderOffset[im], !0), fm.setFloat32(xm.offset + 4 * im, Tm.Q0[im], !0), fm.setFloat32(wm.offset + 4 * im, Tm.eyePosition[im], !0), fm.setFloat32(Dm.offset + 4 * im, Tm.shadowDirection[im], !0)
    }

    function Ym(mm) {
      const Tm = new Uint32Array(Math.max(1, mm.length));
      return mm.forEach(((mm, fm) => {
        let {
          id: hm,
          rotation: Am
        } = mm;
        Tm[fm] = 65535 & hm | (3 & Am) << 16
      })), Tm
    }
    const qm = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6586: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      i: () => xm,
      l: () => wm,
      p: () => Am,
      t: () => am
    });
    const hm = ["terrain", "liquid", "model"];

    function Am() {
      const mm = [];
      for (const Tm of [!1, !0])
        for (const fm of hm) mm.push({
          strict: Tm,
          program: fm
        });
      return mm
    }

    function am(mm) {
      return `${mm.strict?"strict":"allow"}.${mm.program}`
    }

    function xm(mm) {
      return !mm.hooks.vertex && !mm.hooks.surface && !mm.hooks.light
    }

    function wm(mm, Tm) {
      return "off" !== Tm && (null === mm || mm.some((mm => mm.key.strict === ("strict" === Tm) && !xm(mm))))
    }
  },
  41323: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      SHADER_PACK_INPUTS_BINDING: () => am.b,
      SHADER_PACK_INPUTS_GROUP: () => am.e,
      SHADER_PACK_INPUTS_SIZE: () => am.f,
      SHADER_PACK_INPUTS_VAR: () => am.g,
      SHADER_PACK_MODES: () => am.h,
      SHADER_PACK_PROGRAMS: () => hm.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => am.i,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => am.k,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => am.n,
      SHADER_PACK_TEXTURES_BINDING: () => am.q,
      encodeTextureLayers: () => am.u,
      flattenVariants: () => Am.b,
      isVariantOff: () => hm.i,
      packRunsIn: () => hm.l,
      shaderPackInputsWgsl: () => am.v,
      shaderPackVariantKeys: () => hm.p,
      variantKeyId: () => hm.t,
      writeShaderPackInputs: () => am.x
    });
    var hm = fm(6586),
      Am = fm(6580),
      am = fm(40776)
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);