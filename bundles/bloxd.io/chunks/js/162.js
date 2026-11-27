export const id = 162;
export const ids = [162];
export const modules = {
  7595: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => er,
      g: () => Kr,
      i: () => Yr,
      k: () => zr
    });
    var Zr = Qr(7604);
    const Wr = 6,
      ar = 3,
      jr = 1,
      Ir = 2,
      fr = 4,
      Er = 8,
      pr = 16,
      xr = 32,
      mr = 64,
      Nr = 128,
      Ur = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tr(rr) {
      if (!rr) return 0;
      const Sr = Ur.indexOf(rr);
      if (Sr <= 0) throw new Error(`"${rr}" is not a shader pack hook function`);
      return Sr
    }

    function hr(rr) {
      if (0 === rr) return null;
      const Sr = Ur[rr];
      if (void 0 === Sr) throw new Error(`${rr} is not a shader pack hook function id`);
      return Sr
    }

    function zr(rr) {
      const Sr = Zr.e.length;
      return {
        strict: rr >= Sr,
        program: Zr.e[rr % Sr]
      }
    }

    function Yr(rr) {
      return Number(rr.strict) * Zr.e.length + Zr.e.indexOf(rr.program)
    }

    function nr(rr) {
      return "" === rr ? [] : rr.split(" ")
    }

    function er(rr) {
      const Sr = {
        variantFlags: new Uint8Array(Wr),
        hooks: new Uint8Array(Wr * ar),
        moduleCodes: Array(Wr).fill(""),
        reads: Array(2 * Wr).fill("")
      };
      for (const Qr of rr) {
        const rr = Yr(Qr.key),
          Zr = (rr, Sr) => null === Qr.hooks.surface || Qr.reads.fragment.includes(rr) ? 0 : Sr;
        Sr.variantFlags[rr] = (Qr.sceneDepth ? jr : 0) | (Qr.movesVertices ? Ir : 0) | (Qr.sunShadow ? fr : 0) | (Qr.airShadow ? Er : 0) | (Qr.discards ? pr : 0) | Zr("localPosition", xr) | Zr("enchantSpeed", mr) | Zr("enchantTier", Nr), Sr.hooks[rr * ar] = tr(Qr.hooks.vertex), Sr.hooks[rr * ar + 1] = tr(Qr.hooks.surface), Sr.hooks[rr * ar + 2] = tr(Qr.hooks.light), Sr.moduleCodes[rr] = Qr.moduleCode, Sr.reads[2 * rr] = Qr.reads.vertex.join(" "), Sr.reads[2 * rr + 1] = Qr.reads.fragment.join(" ")
      }
      return Sr
    }

    function Kr(rr) {
      const {
        hooks: Sr,
        moduleCodes: Qr,
        reads: Zr
      } = rr;
      return Array.from(rr.variantFlags, ((rr, Wr) => {
        const xr = Wr * ar;
        return {
          key: zr(Wr),
          hooks: {
            vertex: hr(Sr[xr]),
            surface: hr(Sr[xr + 1]),
            light: hr(Sr[xr + 2])
          },
          moduleCode: Qr[Wr],
          sceneDepth: 0 !== (rr & jr),
          sunShadow: 0 !== (rr & fr),
          airShadow: 0 !== (rr & Er),
          movesVertices: 0 !== (rr & Ir),
          discards: 0 !== (rr & pr),
          reads: {
            vertex: nr(Zr[2 * Wr]),
            fragment: nr(Zr[2 * Wr + 1])
          }
        }
      }))
    }
  },
  42673: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => Ur,
      b: () => Wr,
      d: () => Zr,
      h: () => mr,
      i: () => pr,
      k: () => hr,
      m: () => ar,
      n: () => Ir,
      p: () => fr,
      q: () => jr,
      u: () => tr,
      x: () => Nr
    });
    const Zr = 3,
      Wr = 0,
      ar = 1,
      jr = 2,
      Ir = {
        uniform: 3,
        ZN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      fr = 10,
      Er = "BloxdPackInputs",
      pr = "bloxdPackInputs",
      xr = [{
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
      mr = 80;

    function Nr() {
      const rr = xr.map((rr => {
        let {
          name: Sr,
          type: Qr
        } = rr;
        return `    ${Sr}: ${Qr},\n`
      })).join("");
      return `struct ${Er} {\n${rr}}\n@group(${Zr}) @binding(${Wr}) var<uniform> ${pr}: ${Er};\n`
    }

    function Ur(rr, Sr) {
      const Qr = new DataView(rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mr),
        [Zr, Wr, ar, jr, Ir, fr] = xr;
      Qr.setFloat32(Zr.offset, Sr.seconds, !0), Qr.setUint32(Wr.offset, Sr.lit ? 1 : 0, !0);
      for (let Er = 0; Er < 3; Er++) Qr.setInt32(ar.offset + 4 * Er, Sr.renderOffset[Er], !0), Qr.setFloat32(jr.offset + 4 * Er, Sr.crr[Er], !0), Qr.setFloat32(Ir.offset + 4 * Er, Sr.eyePosition[Er], !0), Qr.setFloat32(fr.offset + 4 * Er, Sr.shadowDirection[Er], !0)
    }

    function tr(rr) {
      const Sr = new Uint32Array(Math.max(1, rr.length));
      return rr.forEach(((rr, Qr) => {
        let {
          id: Zr,
          rotation: Wr
        } = rr;
        Sr[Qr] = 65535 & Zr | (3 & Wr) << 16
      })), Sr
    }
    const hr = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7604: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => jr,
      g: () => Ir,
      k: () => Wr,
      n: () => ar
    });
    const Zr = ["terrain", "liquid", "model"];

    function Wr() {
      const rr = [];
      for (const Sr of [!1, !0])
        for (const Qr of Zr) rr.push({
          strict: Sr,
          program: Qr
        });
      return rr
    }

    function ar(rr) {
      return `${rr.strict?"strict":"allow"}.${rr.program}`
    }

    function jr(rr) {
      return !rr.hooks.vertex && !rr.hooks.surface && !rr.hooks.light
    }

    function Ir(rr, Sr) {
      return "off" !== Sr && (null === rr || rr.some((rr => rr.key.strict === ("strict" === Sr) && !jr(rr))))
    }
  },
  45279: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      SHADER_PACK_INPUTS_BINDING: () => ar.b,
      SHADER_PACK_INPUTS_GROUP: () => ar.d,
      SHADER_PACK_INPUTS_SIZE: () => ar.h,
      SHADER_PACK_INPUTS_VAR: () => ar.i,
      SHADER_PACK_MODES: () => ar.k,
      SHADER_PACK_PROGRAMS: () => Zr.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => ar.m,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => ar.n,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => ar.p,
      SHADER_PACK_TEXTURES_BINDING: () => ar.q,
      encodeTextureLayers: () => ar.u,
      flattenVariants: () => Wr.c,
      isVariantOff: () => Zr.f,
      packRunsIn: () => Zr.g,
      shaderPackInputsWgsl: () => ar.x,
      shaderPackVariantKeys: () => Zr.k,
      variantKeyId: () => Zr.n,
      writeShaderPackInputs: () => ar.B
    });
    var Zr = Qr(7604),
      Wr = Qr(7595),
      ar = Qr(42673)
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);