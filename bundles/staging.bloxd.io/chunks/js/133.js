export const id = 133;
export const ids = [133];
export const modules = {
  6311: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => xU,
      f: () => mU,
      h: () => WU,
      j: () => eU
    });
    var tU = gU(6316);
    const pU = 6,
      EU = 3,
      PU = 1,
      TU = 2,
      qU = 4,
      KU = 8,
      cU = 16,
      GU = 32,
      jU = 64,
      uU = 128,
      CU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function hU(UU) {
      if (!UU) return 0;
      const RU = CU.indexOf(UU);
      if (RU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
      return RU
    }

    function QU(UU) {
      if (0 === UU) return null;
      const RU = CU[UU];
      if (void 0 === RU) throw new Error(`${UU} is not a shader pack hook function id`);
      return RU
    }

    function eU(UU) {
      const RU = tU.b.length;
      return {
        strict: UU >= RU,
        program: tU.b[UU % RU]
      }
    }

    function WU(UU) {
      return Number(UU.strict) * tU.b.length + tU.b.indexOf(UU.program)
    }

    function fU(UU) {
      return "" === UU ? [] : UU.split(" ")
    }

    function xU(UU) {
      const RU = {
        variantFlags: new Uint8Array(pU),
        hooks: new Uint8Array(pU * EU),
        moduleCodes: Array(pU).fill(""),
        reads: Array(2 * pU).fill("")
      };
      for (const gU of UU) {
        const UU = WU(gU.key),
          tU = (UU, RU) => null === gU.hooks.surface || gU.reads.fragment.includes(UU) ? 0 : RU;
        RU.variantFlags[UU] = (gU.sceneDepth ? PU : 0) | (gU.movesVertices ? TU : 0) | (gU.sunShadow ? qU : 0) | (gU.airShadow ? KU : 0) | (gU.discards ? cU : 0) | tU("localPosition", GU) | tU("enchantSpeed", jU) | tU("enchantTier", uU), RU.hooks[UU * EU] = hU(gU.hooks.vertex), RU.hooks[UU * EU + 1] = hU(gU.hooks.surface), RU.hooks[UU * EU + 2] = hU(gU.hooks.light), RU.moduleCodes[UU] = gU.moduleCode, RU.reads[2 * UU] = gU.reads.vertex.join(" "), RU.reads[2 * UU + 1] = gU.reads.fragment.join(" ")
      }
      return RU
    }

    function mU(UU) {
      const {
        hooks: RU,
        moduleCodes: gU,
        reads: tU
      } = UU;
      return Array.from(UU.variantFlags, ((UU, pU) => {
        const GU = pU * EU;
        return {
          key: eU(pU),
          hooks: {
            vertex: QU(RU[GU]),
            surface: QU(RU[GU + 1]),
            light: QU(RU[GU + 2])
          },
          moduleCode: gU[pU],
          sceneDepth: 0 !== (UU & PU),
          sunShadow: 0 !== (UU & qU),
          airShadow: 0 !== (UU & KU),
          movesVertices: 0 !== (UU & TU),
          discards: 0 !== (UU & cU),
          reads: {
            vertex: fU(tU[2 * pU]),
            fragment: fU(tU[2 * pU + 1])
          }
        }
      }))
    }
  },
  40270: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => CU,
      c: () => pU,
      d: () => tU,
      h: () => jU,
      i: () => cU,
      m: () => QU,
      n: () => EU,
      o: () => TU,
      r: () => qU,
      s: () => PU,
      v: () => hU,
      x: () => uU
    });
    const tU = 3,
      pU = 0,
      EU = 1,
      PU = 2,
      TU = {
        uniform: 3,
        Wj: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qU = 10,
      KU = "BloxdPackInputs",
      cU = "bloxdPackInputs",
      GU = [{
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
      jU = 80;

    function uU() {
      const UU = GU.map((UU => {
        let {
          name: RU,
          type: gU
        } = UU;
        return `    ${RU}: ${gU},\n`
      })).join("");
      return `struct ${KU} {\n${UU}}\n@group(${tU}) @binding(${pU}) var<uniform> ${cU}: ${KU};\n`
    }

    function CU(UU, RU) {
      const gU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, jU),
        [tU, pU, EU, PU, TU, qU] = GU;
      gU.setFloat32(tU.offset, RU.seconds, !0), gU.setUint32(pU.offset, RU.lit ? 1 : 0, !0);
      for (let KU = 0; KU < 3; KU++) gU.setInt32(EU.offset + 4 * KU, RU.renderOffset[KU], !0), gU.setFloat32(PU.offset + 4 * KU, RU.M_[KU], !0), gU.setFloat32(TU.offset + 4 * KU, RU.eyePosition[KU], !0), gU.setFloat32(qU.offset + 4 * KU, RU.shadowDirection[KU], !0)
    }

    function hU(UU) {
      const RU = new Uint32Array(Math.max(1, UU.length));
      return UU.forEach(((UU, gU) => {
        let {
          id: tU,
          rotation: pU
        } = UU;
        RU[gU] = 65535 & tU | (3 & pU) << 16
      })), RU
    }
    const QU = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6316: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => PU,
      i: () => TU,
      j: () => pU,
      k: () => EU
    });
    const tU = ["terrain", "liquid", "model"];

    function pU() {
      const UU = [];
      for (const RU of [!1, !0])
        for (const gU of tU) UU.push({
          strict: RU,
          program: gU
        });
      return UU
    }

    function EU(UU) {
      return `${UU.strict?"strict":"allow"}.${UU.program}`
    }

    function PU(UU) {
      return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
    }

    function TU(UU, RU) {
      return "off" !== RU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === RU) && !PU(UU))))
    }
  },
  40664: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      SHADER_PACK_INPUTS_BINDING: () => EU.c,
      SHADER_PACK_INPUTS_GROUP: () => EU.d,
      SHADER_PACK_INPUTS_SIZE: () => EU.h,
      SHADER_PACK_INPUTS_VAR: () => EU.i,
      SHADER_PACK_MODES: () => EU.m,
      SHADER_PACK_PROGRAMS: () => tU.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => EU.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => EU.o,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => EU.r,
      SHADER_PACK_TEXTURES_BINDING: () => EU.s,
      encodeTextureLayers: () => EU.v,
      flattenVariants: () => pU.e,
      isVariantOff: () => tU.f,
      packRunsIn: () => tU.i,
      shaderPackInputsWgsl: () => EU.x,
      shaderPackVariantKeys: () => tU.j,
      variantKeyId: () => tU.k,
      writeShaderPackInputs: () => EU.B
    });
    var tU = gU(6316),
      pU = gU(6311),
      EU = gU(40270)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);