export const id = 134;
export const ids = [134];
export const modules = {
  6505: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => vd,
      f: () => xd,
      h: () => Id,
      l: () => Rd
    });
    var pd = kd(6514);
    const Nd = 6,
      Wd = 3,
      Pd = 1,
      Zd = 2,
      gd = 4,
      Cd = 8,
      Kd = 16,
      od = 32,
      ld = 64,
      Qd = 128,
      Ld = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Od(dd) {
      if (!dd) return 0;
      const Jd = Ld.indexOf(dd);
      if (Jd <= 0) throw new Error(`"${dd}" is not a shader pack hook function`);
      return Jd
    }

    function ed(dd) {
      if (0 === dd) return null;
      const Jd = Ld[dd];
      if (void 0 === Jd) throw new Error(`${dd} is not a shader pack hook function id`);
      return Jd
    }

    function Rd(dd) {
      const Jd = pd.c.length;
      return {
        strict: dd >= Jd,
        program: pd.c[dd % Jd]
      }
    }

    function Id(dd) {
      return Number(dd.strict) * pd.c.length + pd.c.indexOf(dd.program)
    }

    function Gd(dd) {
      return "" === dd ? [] : dd.split(" ")
    }

    function vd(dd) {
      const Jd = {
        variantFlags: new Uint8Array(Nd),
        hooks: new Uint8Array(Nd * Wd),
        moduleCodes: Array(Nd).fill(""),
        reads: Array(2 * Nd).fill("")
      };
      for (const kd of dd) {
        const dd = Id(kd.key),
          pd = (dd, Jd) => null === kd.hooks.surface || kd.reads.fragment.includes(dd) ? 0 : Jd;
        Jd.variantFlags[dd] = (kd.sceneDepth ? Pd : 0) | (kd.movesVertices ? Zd : 0) | (kd.sunShadow ? gd : 0) | (kd.airShadow ? Cd : 0) | (kd.discards ? Kd : 0) | pd("localPosition", od) | pd("enchantSpeed", ld) | pd("enchantTier", Qd), Jd.hooks[dd * Wd] = Od(kd.hooks.vertex), Jd.hooks[dd * Wd + 1] = Od(kd.hooks.surface), Jd.hooks[dd * Wd + 2] = Od(kd.hooks.light), Jd.moduleCodes[dd] = kd.moduleCode, Jd.reads[2 * dd] = kd.reads.vertex.join(" "), Jd.reads[2 * dd + 1] = kd.reads.fragment.join(" ")
      }
      return Jd
    }

    function xd(dd) {
      const {
        hooks: Jd,
        moduleCodes: kd,
        reads: pd
      } = dd;
      return Array.from(dd.variantFlags, ((dd, Nd) => {
        const od = Nd * Wd;
        return {
          key: Rd(Nd),
          hooks: {
            vertex: ed(Jd[od]),
            surface: ed(Jd[od + 1]),
            light: ed(Jd[od + 2])
          },
          moduleCode: kd[Nd],
          sceneDepth: 0 !== (dd & Pd),
          sunShadow: 0 !== (dd & gd),
          airShadow: 0 !== (dd & Cd),
          movesVertices: 0 !== (dd & Zd),
          discards: 0 !== (dd & Kd),
          reads: {
            vertex: Gd(pd[2 * Nd]),
            fragment: Gd(pd[2 * Nd + 1])
          }
        }
      }))
    }
  },
  40880: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Od,
      E: () => Qd,
      H: () => Ld,
      b: () => Nd,
      f: () => pd,
      j: () => ld,
      m: () => Kd,
      q: () => ed,
      s: () => Wd,
      t: () => Zd,
      w: () => gd,
      x: () => Pd
    });
    const pd = 3,
      Nd = 0,
      Wd = 1,
      Pd = 2,
      Zd = {
        uniform: 3,
        ql: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      gd = 10,
      Cd = "BloxdPackInputs",
      Kd = "bloxdPackInputs",
      od = [{
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
      ld = 80;

    function Qd() {
      const dd = od.map((dd => {
        let {
          name: Jd,
          type: kd
        } = dd;
        return `    ${Jd}: ${kd},\n`
      })).join("");
      return `struct ${Cd} {\n${dd}}\n@group(${pd}) @binding(${Nd}) var<uniform> ${Kd}: ${Cd};\n`
    }

    function Ld(dd, Jd) {
      const kd = new DataView(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ld),
        [pd, Nd, Wd, Pd, Zd, gd] = od;
      kd.setFloat32(pd.offset, Jd.seconds, !0), kd.setUint32(Nd.offset, Jd.lit ? 1 : 0, !0);
      for (let Cd = 0; Cd < 3; Cd++) kd.setInt32(Wd.offset + 4 * Cd, Jd.renderOffset[Cd], !0), kd.setFloat32(Pd.offset + 4 * Cd, Jd.Qdd[Cd], !0), kd.setFloat32(Zd.offset + 4 * Cd, Jd.eyePosition[Cd], !0), kd.setFloat32(gd.offset + 4 * Cd, Jd.shadowDirection[Cd], !0)
    }

    function Od(dd) {
      const Jd = new Uint32Array(Math.max(1, dd.length));
      return dd.forEach(((dd, kd) => {
        let {
          id: pd,
          rotation: Nd
        } = dd;
        Jd[kd] = 65535 & pd | (3 & Nd) << 16
      })), Jd
    }
    const ed = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6514: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Pd,
      i: () => Zd,
      j: () => Nd,
      n: () => Wd
    });
    const pd = ["terrain", "liquid", "model"];

    function Nd() {
      const dd = [];
      for (const Jd of [!1, !0])
        for (const kd of pd) dd.push({
          strict: Jd,
          program: kd
        });
      return dd
    }

    function Wd(dd) {
      return `${dd.strict?"strict":"allow"}.${dd.program}`
    }

    function Pd(dd) {
      return !dd.hooks.vertex && !dd.hooks.surface && !dd.hooks.light
    }

    function Zd(dd, Jd) {
      return "off" !== Jd && (null === dd || dd.some((dd => dd.key.strict === ("strict" === Jd) && !Pd(dd))))
    }
  },
  41242: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      SHADER_PACK_INPUTS_BINDING: () => Wd.b,
      SHADER_PACK_INPUTS_GROUP: () => Wd.f,
      SHADER_PACK_INPUTS_SIZE: () => Wd.j,
      SHADER_PACK_INPUTS_VAR: () => Wd.m,
      SHADER_PACK_MODES: () => Wd.q,
      SHADER_PACK_PROGRAMS: () => pd.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Wd.s,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Wd.t,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Wd.w,
      SHADER_PACK_TEXTURES_BINDING: () => Wd.x,
      encodeTextureLayers: () => Wd.A,
      flattenVariants: () => Nd.d,
      isVariantOff: () => pd.f,
      packRunsIn: () => pd.i,
      shaderPackInputsWgsl: () => Wd.E,
      shaderPackVariantKeys: () => pd.j,
      variantKeyId: () => pd.n,
      writeShaderPackInputs: () => Wd.H
    });
    var pd = kd(6514),
      Nd = kd(6505),
      Wd = kd(40880)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);