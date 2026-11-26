export const id = 154;
export const ids = [154];
export const modules = {
  7187: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => PH,
      h: () => TH,
      l: () => xH,
      p: () => MH
    });
    var AH = LH(7189);
    const rH = 6,
      SH = 3,
      hH = 1,
      tH = 2,
      zH = 4,
      CH = 8,
      EH = 16,
      XH = 32,
      GH = 64,
      YH = 128,
      uH = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function QH(HH) {
      if (!HH) return 0;
      const BH = uH.indexOf(HH);
      if (BH <= 0) throw new Error(`"${HH}" is not a shader pack hook function`);
      return BH
    }

    function WH(HH) {
      if (0 === HH) return null;
      const BH = uH[HH];
      if (void 0 === BH) throw new Error(`${HH} is not a shader pack hook function id`);
      return BH
    }

    function MH(HH) {
      const BH = AH.d.length;
      return {
        strict: HH >= BH,
        program: AH.d[HH % BH]
      }
    }

    function xH(HH) {
      return Number(HH.strict) * AH.d.length + AH.d.indexOf(HH.program)
    }

    function vH(HH) {
      return "" === HH ? [] : HH.split(" ")
    }

    function PH(HH) {
      const BH = {
        variantFlags: new Uint8Array(rH),
        hooks: new Uint8Array(rH * SH),
        moduleCodes: Array(rH).fill(""),
        reads: Array(2 * rH).fill("")
      };
      for (const LH of HH) {
        const HH = xH(LH.key),
          AH = (HH, BH) => null === LH.hooks.surface || LH.reads.fragment.includes(HH) ? 0 : BH;
        BH.variantFlags[HH] = (LH.sceneDepth ? hH : 0) | (LH.movesVertices ? tH : 0) | (LH.sunShadow ? zH : 0) | (LH.airShadow ? CH : 0) | (LH.discards ? EH : 0) | AH("localPosition", XH) | AH("enchantSpeed", GH) | AH("enchantTier", YH), BH.hooks[HH * SH] = QH(LH.hooks.vertex), BH.hooks[HH * SH + 1] = QH(LH.hooks.surface), BH.hooks[HH * SH + 2] = QH(LH.hooks.light), BH.moduleCodes[HH] = LH.moduleCode, BH.reads[2 * HH] = LH.reads.vertex.join(" "), BH.reads[2 * HH + 1] = LH.reads.fragment.join(" ")
      }
      return BH
    }

    function TH(HH) {
      const {
        hooks: BH,
        moduleCodes: LH,
        reads: AH
      } = HH;
      return Array.from(HH.variantFlags, ((HH, rH) => {
        const XH = rH * SH;
        return {
          key: MH(rH),
          hooks: {
            vertex: WH(BH[XH]),
            surface: WH(BH[XH + 1]),
            light: WH(BH[XH + 2])
          },
          moduleCode: LH[rH],
          sceneDepth: 0 !== (HH & hH),
          sunShadow: 0 !== (HH & zH),
          airShadow: 0 !== (HH & CH),
          movesVertices: 0 !== (HH & tH),
          discards: 0 !== (HH & EH),
          reads: {
            vertex: vH(AH[2 * rH]),
            fragment: vH(AH[2 * rH + 1])
          }
        }
      }))
    }
  },
  42020: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => hH,
      D: () => QH,
      H: () => YH,
      L: () => uH,
      d: () => rH,
      g: () => AH,
      k: () => GH,
      o: () => EH,
      r: () => WH,
      v: () => SH,
      w: () => tH,
      y: () => zH
    });
    const AH = 3,
      rH = 0,
      SH = 1,
      hH = 2,
      tH = {
        uniform: 3,
        aG: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      zH = 10,
      CH = "BloxdPackInputs",
      EH = "bloxdPackInputs",
      XH = [{
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
      GH = 80;

    function YH() {
      const HH = XH.map((HH => {
        let {
          name: BH,
          type: LH
        } = HH;
        return `    ${BH}: ${LH},\n`
      })).join("");
      return `struct ${CH} {\n${HH}}\n@group(${AH}) @binding(${rH}) var<uniform> ${EH}: ${CH};\n`
    }

    function uH(HH, BH) {
      const LH = new DataView(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, GH),
        [AH, rH, SH, hH, tH, zH] = XH;
      LH.setFloat32(AH.offset, BH.seconds, !0), LH.setUint32(rH.offset, BH.lit ? 1 : 0, !0);
      for (let CH = 0; CH < 3; CH++) LH.setInt32(SH.offset + 4 * CH, BH.renderOffset[CH], !0), LH.setFloat32(hH.offset + 4 * CH, BH.QBH[CH], !0), LH.setFloat32(tH.offset + 4 * CH, BH.eyePosition[CH], !0), LH.setFloat32(zH.offset + 4 * CH, BH.shadowDirection[CH], !0)
    }

    function QH(HH) {
      const BH = new Uint32Array(Math.max(1, HH.length));
      return HH.forEach(((HH, LH) => {
        let {
          id: AH,
          rotation: rH
        } = HH;
        BH[LH] = 65535 & AH | (3 & rH) << 16
      })), BH
    }
    const WH = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7189: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      g: () => hH,
      i: () => tH,
      j: () => rH,
      k: () => SH
    });
    const AH = ["terrain", "liquid", "model"];

    function rH() {
      const HH = [];
      for (const BH of [!1, !0])
        for (const LH of AH) HH.push({
          strict: BH,
          program: LH
        });
      return HH
    }

    function SH(HH) {
      return `${HH.strict?"strict":"allow"}.${HH.program}`
    }

    function hH(HH) {
      return !HH.hooks.vertex && !HH.hooks.surface && !HH.hooks.light
    }

    function tH(HH, BH) {
      return "off" !== BH && (null === HH || HH.some((HH => HH.key.strict === ("strict" === BH) && !hH(HH))))
    }
  },
  44787: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      SHADER_PACK_INPUTS_BINDING: () => SH.d,
      SHADER_PACK_INPUTS_GROUP: () => SH.g,
      SHADER_PACK_INPUTS_SIZE: () => SH.k,
      SHADER_PACK_INPUTS_VAR: () => SH.o,
      SHADER_PACK_MODES: () => SH.r,
      SHADER_PACK_PROGRAMS: () => AH.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => SH.v,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => SH.w,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => SH.y,
      SHADER_PACK_TEXTURES_BINDING: () => SH.A,
      encodeTextureLayers: () => SH.D,
      flattenVariants: () => rH.e,
      isVariantOff: () => AH.g,
      packRunsIn: () => AH.i,
      shaderPackInputsWgsl: () => SH.H,
      shaderPackVariantKeys: () => AH.j,
      variantKeyId: () => AH.k,
      writeShaderPackInputs: () => SH.L
    });
    var AH = LH(7189),
      rH = LH(7187),
      SH = LH(42020)
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);