export const id = 141;
export const ids = [141];
export const modules = {
  6629: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => EG,
      h: () => oG,
      k: () => rG,
      o: () => JG
    });
    var wG = ZG(6636);
    const SG = 6,
      LG = 3,
      yG = 1,
      kG = 2,
      UG = 4,
      YG = 8,
      VG = 16,
      pG = 32,
      fG = 64,
      QG = 128,
      KG = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function hG(GG) {
      if (!GG) return 0;
      const bG = KG.indexOf(GG);
      if (bG <= 0) throw new Error(`"${GG}" is not a shader pack hook function`);
      return bG
    }

    function dG(GG) {
      if (0 === GG) return null;
      const bG = KG[GG];
      if (void 0 === bG) throw new Error(`${GG} is not a shader pack hook function id`);
      return bG
    }

    function JG(GG) {
      const bG = wG.e.length;
      return {
        strict: GG >= bG,
        program: wG.e[GG % bG]
      }
    }

    function rG(GG) {
      return Number(GG.strict) * wG.e.length + wG.e.indexOf(GG.program)
    }

    function zG(GG) {
      return "" === GG ? [] : GG.split(" ")
    }

    function EG(GG) {
      const bG = {
        variantFlags: new Uint8Array(SG),
        hooks: new Uint8Array(SG * LG),
        moduleCodes: Array(SG).fill(""),
        reads: Array(2 * SG).fill("")
      };
      for (const ZG of GG) {
        const GG = rG(ZG.key),
          wG = (GG, bG) => null === ZG.hooks.surface || ZG.reads.fragment.includes(GG) ? 0 : bG;
        bG.variantFlags[GG] = (ZG.sceneDepth ? yG : 0) | (ZG.movesVertices ? kG : 0) | (ZG.sunShadow ? UG : 0) | (ZG.airShadow ? YG : 0) | (ZG.discards ? VG : 0) | wG("localPosition", pG) | wG("enchantSpeed", fG) | wG("enchantTier", QG), bG.hooks[GG * LG] = hG(ZG.hooks.vertex), bG.hooks[GG * LG + 1] = hG(ZG.hooks.surface), bG.hooks[GG * LG + 2] = hG(ZG.hooks.light), bG.moduleCodes[GG] = ZG.moduleCode, bG.reads[2 * GG] = ZG.reads.vertex.join(" "), bG.reads[2 * GG + 1] = ZG.reads.fragment.join(" ")
      }
      return bG
    }

    function oG(GG) {
      const {
        hooks: bG,
        moduleCodes: ZG,
        reads: wG
      } = GG;
      return Array.from(GG.variantFlags, ((GG, SG) => {
        const pG = SG * LG;
        return {
          key: JG(SG),
          hooks: {
            vertex: dG(bG[pG]),
            surface: dG(bG[pG + 1]),
            light: dG(bG[pG + 2])
          },
          moduleCode: ZG[SG],
          sceneDepth: 0 !== (GG & yG),
          sunShadow: 0 !== (GG & UG),
          airShadow: 0 !== (GG & YG),
          movesVertices: 0 !== (GG & kG),
          discards: 0 !== (GG & VG),
          reads: {
            vertex: zG(wG[2 * SG]),
            fragment: zG(wG[2 * SG + 1])
          }
        }
      }))
    }
  },
  41084: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => KG,
      b: () => SG,
      f: () => wG,
      h: () => fG,
      i: () => VG,
      j: () => dG,
      l: () => LG,
      m: () => kG,
      q: () => UG,
      u: () => yG,
      v: () => hG,
      x: () => QG
    });
    const wG = 3,
      SG = 0,
      LG = 1,
      yG = 2,
      kG = {
        uniform: 3,
        Wf: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      UG = 10,
      YG = "BloxdPackInputs",
      VG = "bloxdPackInputs",
      pG = [{
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
      fG = 80;

    function QG() {
      const GG = pG.map((GG => {
        let {
          name: bG,
          type: ZG
        } = GG;
        return `    ${bG}: ${ZG},\n`
      })).join("");
      return `struct ${YG} {\n${GG}}\n@group(${wG}) @binding(${SG}) var<uniform> ${VG}: ${YG};\n`
    }

    function KG(GG, bG) {
      const ZG = new DataView(GG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, fG),
        [wG, SG, LG, yG, kG, UG] = pG;
      ZG.setFloat32(wG.offset, bG.seconds, !0), ZG.setUint32(SG.offset, bG.lit ? 1 : 0, !0);
      for (let YG = 0; YG < 3; YG++) ZG.setInt32(LG.offset + 4 * YG, bG.renderOffset[YG], !0), ZG.setFloat32(yG.offset + 4 * YG, bG.XGG[YG], !0), ZG.setFloat32(kG.offset + 4 * YG, bG.eyePosition[YG], !0), ZG.setFloat32(UG.offset + 4 * YG, bG.shadowDirection[YG], !0)
    }

    function hG(GG) {
      const bG = new Uint32Array(Math.max(1, GG.length));
      return GG.forEach(((GG, ZG) => {
        let {
          id: wG,
          rotation: SG
        } = GG;
        bG[ZG] = 65535 & wG | (3 & SG) << 16
      })), bG
    }
    const dG = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6636: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      i: () => yG,
      m: () => kG,
      q: () => SG,
      u: () => LG
    });
    const wG = ["terrain", "liquid", "model"];

    function SG() {
      const GG = [];
      for (const bG of [!1, !0])
        for (const ZG of wG) GG.push({
          strict: bG,
          program: ZG
        });
      return GG
    }

    function LG(GG) {
      return `${GG.strict?"strict":"allow"}.${GG.program}`
    }

    function yG(GG) {
      return !GG.hooks.vertex && !GG.hooks.surface && !GG.hooks.light
    }

    function kG(GG, bG) {
      return "off" !== bG && (null === GG || GG.some((GG => GG.key.strict === ("strict" === bG) && !yG(GG))))
    }
  },
  41695: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      SHADER_PACK_INPUTS_BINDING: () => LG.b,
      SHADER_PACK_INPUTS_GROUP: () => LG.f,
      SHADER_PACK_INPUTS_SIZE: () => LG.h,
      SHADER_PACK_INPUTS_VAR: () => LG.i,
      SHADER_PACK_MODES: () => LG.j,
      SHADER_PACK_PROGRAMS: () => wG.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => LG.l,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => LG.m,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => LG.q,
      SHADER_PACK_TEXTURES_BINDING: () => LG.u,
      encodeTextureLayers: () => LG.v,
      flattenVariants: () => SG.e,
      isVariantOff: () => wG.i,
      packRunsIn: () => wG.m,
      shaderPackInputsWgsl: () => LG.x,
      shaderPackVariantKeys: () => wG.q,
      variantKeyId: () => wG.u,
      writeShaderPackInputs: () => LG.A
    });
    var wG = ZG(6636),
      SG = ZG(6629),
      LG = ZG(41084)
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);