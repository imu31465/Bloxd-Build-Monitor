export const id = 138;
export const ids = [138];
export const modules = {
  6639: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => AC,
      f: () => xC,
      g: () => GC,
      h: () => PC
    });
    var QC = ZC(6646);
    const wC = 6,
      bC = 3,
      nC = 1,
      fC = 2,
      oC = 4,
      qC = 8,
      FC = 16,
      WC = 32,
      NC = 64,
      MC = 128,
      gC = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function SC(CC) {
      if (!CC) return 0;
      const zC = gC.indexOf(CC);
      if (zC <= 0) throw new Error(`"${CC}" is not a shader pack hook function`);
      return zC
    }

    function pC(CC) {
      if (0 === CC) return null;
      const zC = gC[CC];
      if (void 0 === zC) throw new Error(`${CC} is not a shader pack hook function id`);
      return zC
    }

    function PC(CC) {
      const zC = QC.e.length;
      return {
        strict: CC >= zC,
        program: QC.e[CC % zC]
      }
    }

    function GC(CC) {
      return Number(CC.strict) * QC.e.length + QC.e.indexOf(CC.program)
    }

    function RC(CC) {
      return "" === CC ? [] : CC.split(" ")
    }

    function AC(CC) {
      const zC = {
        variantFlags: new Uint8Array(wC),
        hooks: new Uint8Array(wC * bC),
        moduleCodes: Array(wC).fill(""),
        reads: Array(2 * wC).fill("")
      };
      for (const ZC of CC) {
        const CC = GC(ZC.key),
          QC = (CC, zC) => null === ZC.hooks.surface || ZC.reads.fragment.includes(CC) ? 0 : zC;
        zC.variantFlags[CC] = (ZC.sceneDepth ? nC : 0) | (ZC.movesVertices ? fC : 0) | (ZC.sunShadow ? oC : 0) | (ZC.airShadow ? qC : 0) | (ZC.discards ? FC : 0) | QC("localPosition", WC) | QC("enchantSpeed", NC) | QC("enchantTier", MC), zC.hooks[CC * bC] = SC(ZC.hooks.vertex), zC.hooks[CC * bC + 1] = SC(ZC.hooks.surface), zC.hooks[CC * bC + 2] = SC(ZC.hooks.light), zC.moduleCodes[CC] = ZC.moduleCode, zC.reads[2 * CC] = ZC.reads.vertex.join(" "), zC.reads[2 * CC + 1] = ZC.reads.fragment.join(" ")
      }
      return zC
    }

    function xC(CC) {
      const {
        hooks: zC,
        moduleCodes: ZC,
        reads: QC
      } = CC;
      return Array.from(CC.variantFlags, ((CC, wC) => {
        const WC = wC * bC;
        return {
          key: PC(wC),
          hooks: {
            vertex: pC(zC[WC]),
            surface: pC(zC[WC + 1]),
            light: pC(zC[WC + 2])
          },
          moduleCode: ZC[wC],
          sceneDepth: 0 !== (CC & nC),
          sunShadow: 0 !== (CC & oC),
          airShadow: 0 !== (CC & qC),
          movesVertices: 0 !== (CC & fC),
          discards: 0 !== (CC & FC),
          reads: {
            vertex: RC(QC[2 * wC]),
            fragment: RC(QC[2 * wC + 1])
          }
        }
      }))
    }
  },
  40534: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => nC,
      D: () => SC,
      E: () => MC,
      F: () => gC,
      d: () => wC,
      g: () => QC,
      k: () => NC,
      n: () => FC,
      r: () => pC,
      u: () => bC,
      w: () => fC,
      x: () => oC
    });
    const QC = 3,
      wC = 0,
      bC = 1,
      nC = 2,
      fC = {
        uniform: 3,
        lN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      oC = 10,
      qC = "BloxdPackInputs",
      FC = "bloxdPackInputs",
      WC = [{
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
      NC = 80;

    function MC() {
      const CC = WC.map((CC => {
        let {
          name: zC,
          type: ZC
        } = CC;
        return `    ${zC}: ${ZC},\n`
      })).join("");
      return `struct ${qC} {\n${CC}}\n@group(${QC}) @binding(${wC}) var<uniform> ${FC}: ${qC};\n`
    }

    function gC(CC, zC) {
      const ZC = new DataView(CC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NC),
        [QC, wC, bC, nC, fC, oC] = WC;
      ZC.setFloat32(QC.offset, zC.seconds, !0), ZC.setUint32(wC.offset, zC.lit ? 1 : 0, !0);
      for (let qC = 0; qC < 3; qC++) ZC.setInt32(bC.offset + 4 * qC, zC.renderOffset[qC], !0), ZC.setFloat32(nC.offset + 4 * qC, zC.B3[qC], !0), ZC.setFloat32(fC.offset + 4 * qC, zC.eyePosition[qC], !0), ZC.setFloat32(oC.offset + 4 * qC, zC.shadowDirection[qC], !0)
    }

    function SC(CC) {
      const zC = new Uint32Array(Math.max(1, CC.length));
      return CC.forEach(((CC, ZC) => {
        let {
          id: QC,
          rotation: wC
        } = CC;
        zC[ZC] = 65535 & QC | (3 & wC) << 16
      })), zC
    }
    const pC = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6646: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => nC,
      m: () => fC,
      n: () => wC,
      r: () => bC
    });
    const QC = ["terrain", "liquid", "model"];

    function wC() {
      const CC = [];
      for (const zC of [!1, !0])
        for (const ZC of QC) CC.push({
          strict: zC,
          program: ZC
        });
      return CC
    }

    function bC(CC) {
      return `${CC.strict?"strict":"allow"}.${CC.program}`
    }

    function nC(CC) {
      return !CC.hooks.vertex && !CC.hooks.surface && !CC.hooks.light
    }

    function fC(CC, zC) {
      return "off" !== zC && (null === CC || CC.some((CC => CC.key.strict === ("strict" === zC) && !nC(CC))))
    }
  },
  41090: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      SHADER_PACK_INPUTS_BINDING: () => bC.d,
      SHADER_PACK_INPUTS_GROUP: () => bC.g,
      SHADER_PACK_INPUTS_SIZE: () => bC.k,
      SHADER_PACK_INPUTS_VAR: () => bC.n,
      SHADER_PACK_MODES: () => bC.r,
      SHADER_PACK_PROGRAMS: () => QC.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => bC.u,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => bC.w,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => bC.x,
      SHADER_PACK_TEXTURES_BINDING: () => bC.A,
      encodeTextureLayers: () => bC.D,
      flattenVariants: () => wC.b,
      isVariantOff: () => QC.i,
      packRunsIn: () => QC.m,
      shaderPackInputsWgsl: () => bC.E,
      shaderPackVariantKeys: () => QC.n,
      variantKeyId: () => QC.r,
      writeShaderPackInputs: () => bC.F
    });
    var QC = ZC(6646),
      wC = ZC(6639),
      bC = ZC(40534)
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);