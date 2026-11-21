export const id = 134;
export const ids = [134];
export const modules = {
  6467: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => pQ,
      g: () => cQ,
      k: () => MQ,
      l: () => eQ
    });
    var LQ = wQ(6470);
    const qQ = 6,
      oQ = 3,
      DQ = 1,
      kQ = 2,
      vQ = 4,
      mQ = 8,
      uQ = 16,
      HQ = 32,
      bQ = 64,
      YQ = 128,
      xQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function AQ(QQ) {
      if (!QQ) return 0;
      const FQ = xQ.indexOf(QQ);
      if (FQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
      return FQ
    }

    function tQ(QQ) {
      if (0 === QQ) return null;
      const FQ = xQ[QQ];
      if (void 0 === FQ) throw new Error(`${QQ} is not a shader pack hook function id`);
      return FQ
    }

    function eQ(QQ) {
      const FQ = LQ.d.length;
      return {
        strict: QQ >= FQ,
        program: LQ.d[QQ % FQ]
      }
    }

    function MQ(QQ) {
      return Number(QQ.strict) * LQ.d.length + LQ.d.indexOf(QQ.program)
    }

    function GQ(QQ) {
      return "" === QQ ? [] : QQ.split(" ")
    }

    function pQ(QQ) {
      const FQ = {
        variantFlags: new Uint8Array(qQ),
        hooks: new Uint8Array(qQ * oQ),
        moduleCodes: Array(qQ).fill(""),
        reads: Array(2 * qQ).fill("")
      };
      for (const wQ of QQ) {
        const QQ = MQ(wQ.key),
          LQ = (QQ, FQ) => null === wQ.hooks.surface || wQ.reads.fragment.includes(QQ) ? 0 : FQ;
        FQ.variantFlags[QQ] = (wQ.sceneDepth ? DQ : 0) | (wQ.movesVertices ? kQ : 0) | (wQ.sunShadow ? vQ : 0) | (wQ.airShadow ? mQ : 0) | (wQ.discards ? uQ : 0) | LQ("localPosition", HQ) | LQ("enchantSpeed", bQ) | LQ("enchantTier", YQ), FQ.hooks[QQ * oQ] = AQ(wQ.hooks.vertex), FQ.hooks[QQ * oQ + 1] = AQ(wQ.hooks.surface), FQ.hooks[QQ * oQ + 2] = AQ(wQ.hooks.light), FQ.moduleCodes[QQ] = wQ.moduleCode, FQ.reads[2 * QQ] = wQ.reads.vertex.join(" "), FQ.reads[2 * QQ + 1] = wQ.reads.fragment.join(" ")
      }
      return FQ
    }

    function cQ(QQ) {
      const {
        hooks: FQ,
        moduleCodes: wQ,
        reads: LQ
      } = QQ;
      return Array.from(QQ.variantFlags, ((QQ, qQ) => {
        const HQ = qQ * oQ;
        return {
          key: eQ(qQ),
          hooks: {
            vertex: tQ(FQ[HQ]),
            surface: tQ(FQ[HQ + 1]),
            light: tQ(FQ[HQ + 2])
          },
          moduleCode: wQ[qQ],
          sceneDepth: 0 !== (QQ & DQ),
          sunShadow: 0 !== (QQ & vQ),
          airShadow: 0 !== (QQ & mQ),
          movesVertices: 0 !== (QQ & kQ),
          discards: 0 !== (QQ & uQ),
          reads: {
            vertex: GQ(LQ[2 * qQ]),
            fragment: GQ(LQ[2 * qQ + 1])
          }
        }
      }))
    }
  },
  40307: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => DQ,
      D: () => AQ,
      F: () => YQ,
      J: () => xQ,
      e: () => qQ,
      h: () => LQ,
      i: () => bQ,
      k: () => uQ,
      n: () => tQ,
      q: () => oQ,
      u: () => kQ,
      x: () => vQ
    });
    const LQ = 3,
      qQ = 0,
      oQ = 1,
      DQ = 2,
      kQ = {
        uniform: 3,
        Sb: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      vQ = 10,
      mQ = "BloxdPackInputs",
      uQ = "bloxdPackInputs",
      HQ = [{
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
      bQ = 80;

    function YQ() {
      const QQ = HQ.map((QQ => {
        let {
          name: FQ,
          type: wQ
        } = QQ;
        return `    ${FQ}: ${wQ},\n`
      })).join("");
      return `struct ${mQ} {\n${QQ}}\n@group(${LQ}) @binding(${qQ}) var<uniform> ${uQ}: ${mQ};\n`
    }

    function xQ(QQ, FQ) {
      const wQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, bQ),
        [LQ, qQ, oQ, DQ, kQ, vQ] = HQ;
      wQ.setFloat32(LQ.offset, FQ.seconds, !0), wQ.setUint32(qQ.offset, FQ.lit ? 1 : 0, !0);
      for (let mQ = 0; mQ < 3; mQ++) wQ.setInt32(oQ.offset + 4 * mQ, FQ.renderOffset[mQ], !0), wQ.setFloat32(DQ.offset + 4 * mQ, FQ.MQQ[mQ], !0), wQ.setFloat32(kQ.offset + 4 * mQ, FQ.eyePosition[mQ], !0), wQ.setFloat32(vQ.offset + 4 * mQ, FQ.shadowDirection[mQ], !0)
    }

    function AQ(QQ) {
      const FQ = new Uint32Array(Math.max(1, QQ.length));
      return QQ.forEach(((QQ, wQ) => {
        let {
          id: LQ,
          rotation: qQ
        } = QQ;
        FQ[wQ] = 65535 & LQ | (3 & qQ) << 16
      })), FQ
    }
    const tQ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6470: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => DQ,
      l: () => kQ,
      m: () => qQ,
      o: () => oQ
    });
    const LQ = ["terrain", "liquid", "model"];

    function qQ() {
      const QQ = [];
      for (const FQ of [!1, !0])
        for (const wQ of LQ) QQ.push({
          strict: FQ,
          program: wQ
        });
      return QQ
    }

    function oQ(QQ) {
      return `${QQ.strict?"strict":"allow"}.${QQ.program}`
    }

    function DQ(QQ) {
      return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
    }

    function kQ(QQ, FQ) {
      return "off" !== FQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === FQ) && !DQ(QQ))))
    }
  },
  40664: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      SHADER_PACK_INPUTS_BINDING: () => oQ.e,
      SHADER_PACK_INPUTS_GROUP: () => oQ.h,
      SHADER_PACK_INPUTS_SIZE: () => oQ.i,
      SHADER_PACK_INPUTS_VAR: () => oQ.k,
      SHADER_PACK_MODES: () => oQ.n,
      SHADER_PACK_PROGRAMS: () => LQ.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => oQ.q,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => oQ.u,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => oQ.x,
      SHADER_PACK_TEXTURES_BINDING: () => oQ.A,
      encodeTextureLayers: () => oQ.D,
      flattenVariants: () => qQ.c,
      isVariantOff: () => LQ.h,
      packRunsIn: () => LQ.l,
      shaderPackInputsWgsl: () => oQ.F,
      shaderPackVariantKeys: () => LQ.m,
      variantKeyId: () => LQ.o,
      writeShaderPackInputs: () => oQ.J
    });
    var LQ = wQ(6470),
      qQ = wQ(6467),
      oQ = wQ(40307)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);