export const id = 141;
export const ids = [141];
export const modules = {
  6706: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => iT,
      h: () => bT,
      i: () => fT,
      m: () => vT
    });
    var WT = mT(6713);
    const zT = 6,
      MT = 3,
      gT = 1,
      nT = 2,
      HT = 4,
      kT = 8,
      jT = 16,
      lT = 32,
      LT = 64,
      pT = 128,
      BT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ZT(TT) {
      if (!TT) return 0;
      const UT = BT.indexOf(TT);
      if (UT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return UT
    }

    function cT(TT) {
      if (0 === TT) return null;
      const UT = BT[TT];
      if (void 0 === UT) throw new Error(`${TT} is not a shader pack hook function id`);
      return UT
    }

    function vT(TT) {
      const UT = WT.e.length;
      return {
        strict: TT >= UT,
        program: WT.e[TT % UT]
      }
    }

    function fT(TT) {
      return Number(TT.strict) * WT.e.length + WT.e.indexOf(TT.program)
    }

    function qT(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function iT(TT) {
      const UT = {
        variantFlags: new Uint8Array(zT),
        hooks: new Uint8Array(zT * MT),
        moduleCodes: Array(zT).fill(""),
        reads: Array(2 * zT).fill("")
      };
      for (const mT of TT) {
        const TT = fT(mT.key),
          WT = (TT, UT) => null === mT.hooks.surface || mT.reads.fragment.includes(TT) ? 0 : UT;
        UT.variantFlags[TT] = (mT.sceneDepth ? gT : 0) | (mT.movesVertices ? nT : 0) | (mT.sunShadow ? HT : 0) | (mT.airShadow ? kT : 0) | (mT.discards ? jT : 0) | WT("localPosition", lT) | WT("enchantSpeed", LT) | WT("enchantTier", pT), UT.hooks[TT * MT] = ZT(mT.hooks.vertex), UT.hooks[TT * MT + 1] = ZT(mT.hooks.surface), UT.hooks[TT * MT + 2] = ZT(mT.hooks.light), UT.moduleCodes[TT] = mT.moduleCode, UT.reads[2 * TT] = mT.reads.vertex.join(" "), UT.reads[2 * TT + 1] = mT.reads.fragment.join(" ")
      }
      return UT
    }

    function bT(TT) {
      const {
        hooks: UT,
        moduleCodes: mT,
        reads: WT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, zT) => {
        const lT = zT * MT;
        return {
          key: vT(zT),
          hooks: {
            vertex: cT(UT[lT]),
            surface: cT(UT[lT + 1]),
            light: cT(UT[lT + 2])
          },
          moduleCode: mT[zT],
          sceneDepth: 0 !== (TT & gT),
          sunShadow: 0 !== (TT & HT),
          airShadow: 0 !== (TT & kT),
          movesVertices: 0 !== (TT & nT),
          discards: 0 !== (TT & jT),
          reads: {
            vertex: qT(WT[2 * zT]),
            fragment: qT(WT[2 * zT + 1])
          }
        }
      }))
    }
  },
  40839: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => HT,
      E: () => gT,
      F: () => ZT,
      H: () => pT,
      K: () => BT,
      e: () => zT,
      i: () => WT,
      m: () => LT,
      p: () => jT,
      r: () => cT,
      u: () => MT,
      x: () => nT
    });
    const WT = 3,
      zT = 0,
      MT = 1,
      gT = 2,
      nT = {
        uniform: 3,
        iL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      HT = 10,
      kT = "BloxdPackInputs",
      jT = "bloxdPackInputs",
      lT = [{
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
      LT = 80;

    function pT() {
      const TT = lT.map((TT => {
        let {
          name: UT,
          type: mT
        } = TT;
        return `    ${UT}: ${mT},\n`
      })).join("");
      return `struct ${kT} {\n${TT}}\n@group(${WT}) @binding(${zT}) var<uniform> ${jT}: ${kT};\n`
    }

    function BT(TT, UT) {
      const mT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LT),
        [WT, zT, MT, gT, nT, HT] = lT;
      mT.setFloat32(WT.offset, UT.seconds, !0), mT.setUint32(zT.offset, UT.lit ? 1 : 0, !0);
      for (let kT = 0; kT < 3; kT++) mT.setInt32(MT.offset + 4 * kT, UT.renderOffset[kT], !0), mT.setFloat32(gT.offset + 4 * kT, UT.zTT[kT], !0), mT.setFloat32(nT.offset + 4 * kT, UT.eyePosition[kT], !0), mT.setFloat32(HT.offset + 4 * kT, UT.shadowDirection[kT], !0)
    }

    function ZT(TT) {
      const UT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, mT) => {
        let {
          id: WT,
          rotation: zT
        } = TT;
        UT[mT] = 65535 & WT | (3 & zT) << 16
      })), UT
    }
    const cT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6713: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      i: () => gT,
      l: () => nT,
      n: () => zT,
      r: () => MT
    });
    const WT = ["terrain", "liquid", "model"];

    function zT() {
      const TT = [];
      for (const UT of [!1, !0])
        for (const mT of WT) TT.push({
          strict: UT,
          program: mT
        });
      return TT
    }

    function MT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function gT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function nT(TT, UT) {
      return "off" !== UT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === UT) && !gT(TT))))
    }
  },
  41429: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      SHADER_PACK_INPUTS_BINDING: () => MT.e,
      SHADER_PACK_INPUTS_GROUP: () => MT.i,
      SHADER_PACK_INPUTS_SIZE: () => MT.m,
      SHADER_PACK_INPUTS_VAR: () => MT.p,
      SHADER_PACK_MODES: () => MT.r,
      SHADER_PACK_PROGRAMS: () => WT.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => MT.u,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => MT.x,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => MT.A,
      SHADER_PACK_TEXTURES_BINDING: () => MT.E,
      encodeTextureLayers: () => MT.F,
      flattenVariants: () => zT.d,
      isVariantOff: () => WT.i,
      packRunsIn: () => WT.l,
      shaderPackInputsWgsl: () => MT.H,
      shaderPackVariantKeys: () => WT.n,
      variantKeyId: () => WT.r,
      writeShaderPackInputs: () => MT.K
    });
    var WT = mT(6713),
      zT = mT(6706),
      MT = mT(40839)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);