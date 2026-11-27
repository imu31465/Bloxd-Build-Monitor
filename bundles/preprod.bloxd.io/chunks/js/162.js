export const id = 162;
export const ids = [162];
export const modules = {
  7639: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => MW,
      i: () => KW,
      l: () => kW,
      m: () => UW
    });
    var mW = OW(7646);
    const EW = 6,
      NW = 3,
      PW = 1,
      LW = 2,
      cW = 4,
      wW = 8,
      tW = 16,
      ZW = 32,
      xW = 64,
      lW = 128,
      AW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function bW(WW) {
      if (!WW) return 0;
      const iW = AW.indexOf(WW);
      if (iW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
      return iW
    }

    function jW(WW) {
      if (0 === WW) return null;
      const iW = AW[WW];
      if (void 0 === iW) throw new Error(`${WW} is not a shader pack hook function id`);
      return iW
    }

    function UW(WW) {
      const iW = mW.e.length;
      return {
        strict: WW >= iW,
        program: mW.e[WW % iW]
      }
    }

    function kW(WW) {
      return Number(WW.strict) * mW.e.length + mW.e.indexOf(WW.program)
    }

    function sW(WW) {
      return "" === WW ? [] : WW.split(" ")
    }

    function MW(WW) {
      const iW = {
        variantFlags: new Uint8Array(EW),
        hooks: new Uint8Array(EW * NW),
        moduleCodes: Array(EW).fill(""),
        reads: Array(2 * EW).fill("")
      };
      for (const OW of WW) {
        const WW = kW(OW.key),
          mW = (WW, iW) => null === OW.hooks.surface || OW.reads.fragment.includes(WW) ? 0 : iW;
        iW.variantFlags[WW] = (OW.sceneDepth ? PW : 0) | (OW.movesVertices ? LW : 0) | (OW.sunShadow ? cW : 0) | (OW.airShadow ? wW : 0) | (OW.discards ? tW : 0) | mW("localPosition", ZW) | mW("enchantSpeed", xW) | mW("enchantTier", lW), iW.hooks[WW * NW] = bW(OW.hooks.vertex), iW.hooks[WW * NW + 1] = bW(OW.hooks.surface), iW.hooks[WW * NW + 2] = bW(OW.hooks.light), iW.moduleCodes[WW] = OW.moduleCode, iW.reads[2 * WW] = OW.reads.vertex.join(" "), iW.reads[2 * WW + 1] = OW.reads.fragment.join(" ")
      }
      return iW
    }

    function KW(WW) {
      const {
        hooks: iW,
        moduleCodes: OW,
        reads: mW
      } = WW;
      return Array.from(WW.variantFlags, ((WW, EW) => {
        const ZW = EW * NW;
        return {
          key: UW(EW),
          hooks: {
            vertex: jW(iW[ZW]),
            surface: jW(iW[ZW + 1]),
            light: jW(iW[ZW + 2])
          },
          moduleCode: OW[EW],
          sceneDepth: 0 !== (WW & PW),
          sunShadow: 0 !== (WW & cW),
          airShadow: 0 !== (WW & wW),
          movesVertices: 0 !== (WW & LW),
          discards: 0 !== (WW & tW),
          reads: {
            vertex: sW(mW[2 * EW]),
            fragment: sW(mW[2 * EW + 1])
          }
        }
      }))
    }
  },
  42321: (WW, iW, OW) => {
    OW.d(iW, {
      D: () => AW,
      e: () => EW,
      f: () => mW,
      g: () => xW,
      j: () => tW,
      l: () => jW,
      m: () => NW,
      o: () => LW,
      q: () => cW,
      t: () => PW,
      x: () => bW,
      z: () => lW
    });
    const mW = 3,
      EW = 0,
      NW = 1,
      PW = 2,
      LW = {
        uniform: 3,
        El: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      cW = 10,
      wW = "BloxdPackInputs",
      tW = "bloxdPackInputs",
      ZW = [{
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
      xW = 80;

    function lW() {
      const WW = ZW.map((WW => {
        let {
          name: iW,
          type: OW
        } = WW;
        return `    ${iW}: ${OW},\n`
      })).join("");
      return `struct ${wW} {\n${WW}}\n@group(${mW}) @binding(${EW}) var<uniform> ${tW}: ${wW};\n`
    }

    function AW(WW, iW) {
      const OW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xW),
        [mW, EW, NW, PW, LW, cW] = ZW;
      OW.setFloat32(mW.offset, iW.seconds, !0), OW.setUint32(EW.offset, iW.lit ? 1 : 0, !0);
      for (let wW = 0; wW < 3; wW++) OW.setInt32(NW.offset + 4 * wW, iW.renderOffset[wW], !0), OW.setFloat32(PW.offset + 4 * wW, iW.vWW[wW], !0), OW.setFloat32(LW.offset + 4 * wW, iW.eyePosition[wW], !0), OW.setFloat32(cW.offset + 4 * wW, iW.shadowDirection[wW], !0)
    }

    function bW(WW) {
      const iW = new Uint32Array(Math.max(1, WW.length));
      return WW.forEach(((WW, OW) => {
        let {
          id: mW,
          rotation: EW
        } = WW;
        iW[OW] = 65535 & mW | (3 & EW) << 16
      })), iW
    }
    const jW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7646: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      g: () => PW,
      j: () => LW,
      n: () => EW,
      p: () => NW
    });
    const mW = ["terrain", "liquid", "model"];

    function EW() {
      const WW = [];
      for (const iW of [!1, !0])
        for (const OW of mW) WW.push({
          strict: iW,
          program: OW
        });
      return WW
    }

    function NW(WW) {
      return `${WW.strict?"strict":"allow"}.${WW.program}`
    }

    function PW(WW) {
      return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
    }

    function LW(WW, iW) {
      return "off" !== iW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === iW) && !PW(WW))))
    }
  },
  44886: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      SHADER_PACK_INPUTS_BINDING: () => NW.e,
      SHADER_PACK_INPUTS_GROUP: () => NW.f,
      SHADER_PACK_INPUTS_SIZE: () => NW.g,
      SHADER_PACK_INPUTS_VAR: () => NW.j,
      SHADER_PACK_MODES: () => NW.l,
      SHADER_PACK_PROGRAMS: () => mW.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => NW.m,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => NW.o,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => NW.q,
      SHADER_PACK_TEXTURES_BINDING: () => NW.t,
      encodeTextureLayers: () => NW.x,
      flattenVariants: () => EW.e,
      isVariantOff: () => mW.g,
      packRunsIn: () => mW.j,
      shaderPackInputsWgsl: () => NW.z,
      shaderPackVariantKeys: () => mW.n,
      variantKeyId: () => mW.p,
      writeShaderPackInputs: () => NW.D
    });
    var mW = OW(7646),
      EW = OW(7639),
      NW = OW(42321)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);