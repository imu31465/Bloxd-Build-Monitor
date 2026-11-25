export const id = 143;
export const ids = [143];
export const modules = {
  7007: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => GQ,
      i: () => UQ,
      k: () => DQ,
      n: () => VQ
    });
    var wQ = XQ(7015);
    const qQ = 6,
      TQ = 3,
      zQ = 1,
      sQ = 2,
      FQ = 4,
      PQ = 8,
      gQ = 16,
      JQ = 32,
      rQ = 64,
      IQ = 128,
      jQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function BQ(QQ) {
      if (!QQ) return 0;
      const WQ = jQ.indexOf(QQ);
      if (WQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
      return WQ
    }

    function yQ(QQ) {
      if (0 === QQ) return null;
      const WQ = jQ[QQ];
      if (void 0 === WQ) throw new Error(`${QQ} is not a shader pack hook function id`);
      return WQ
    }

    function VQ(QQ) {
      const WQ = wQ.d.length;
      return {
        strict: QQ >= WQ,
        program: wQ.d[QQ % WQ]
      }
    }

    function DQ(QQ) {
      return Number(QQ.strict) * wQ.d.length + wQ.d.indexOf(QQ.program)
    }

    function pQ(QQ) {
      return "" === QQ ? [] : QQ.split(" ")
    }

    function GQ(QQ) {
      const WQ = {
        variantFlags: new Uint8Array(qQ),
        hooks: new Uint8Array(qQ * TQ),
        moduleCodes: Array(qQ).fill(""),
        reads: Array(2 * qQ).fill("")
      };
      for (const XQ of QQ) {
        const QQ = DQ(XQ.key),
          wQ = (QQ, WQ) => null === XQ.hooks.surface || XQ.reads.fragment.includes(QQ) ? 0 : WQ;
        WQ.variantFlags[QQ] = (XQ.sceneDepth ? zQ : 0) | (XQ.movesVertices ? sQ : 0) | (XQ.sunShadow ? FQ : 0) | (XQ.airShadow ? PQ : 0) | (XQ.discards ? gQ : 0) | wQ("localPosition", JQ) | wQ("enchantSpeed", rQ) | wQ("enchantTier", IQ), WQ.hooks[QQ * TQ] = BQ(XQ.hooks.vertex), WQ.hooks[QQ * TQ + 1] = BQ(XQ.hooks.surface), WQ.hooks[QQ * TQ + 2] = BQ(XQ.hooks.light), WQ.moduleCodes[QQ] = XQ.moduleCode, WQ.reads[2 * QQ] = XQ.reads.vertex.join(" "), WQ.reads[2 * QQ + 1] = XQ.reads.fragment.join(" ")
      }
      return WQ
    }

    function UQ(QQ) {
      const {
        hooks: WQ,
        moduleCodes: XQ,
        reads: wQ
      } = QQ;
      return Array.from(QQ.variantFlags, ((QQ, qQ) => {
        const JQ = qQ * TQ;
        return {
          key: VQ(qQ),
          hooks: {
            vertex: yQ(WQ[JQ]),
            surface: yQ(WQ[JQ + 1]),
            light: yQ(WQ[JQ + 2])
          },
          moduleCode: XQ[qQ],
          sceneDepth: 0 !== (QQ & zQ),
          sunShadow: 0 !== (QQ & FQ),
          airShadow: 0 !== (QQ & PQ),
          movesVertices: 0 !== (QQ & sQ),
          discards: 0 !== (QQ & gQ),
          reads: {
            vertex: pQ(wQ[2 * qQ]),
            fragment: pQ(wQ[2 * qQ + 1])
          }
        }
      }))
    }
  },
  40917: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => jQ,
      b: () => qQ,
      d: () => wQ,
      h: () => rQ,
      i: () => gQ,
      k: () => yQ,
      n: () => TQ,
      p: () => sQ,
      r: () => FQ,
      t: () => zQ,
      w: () => BQ,
      z: () => IQ
    });
    const wQ = 3,
      qQ = 0,
      TQ = 1,
      zQ = 2,
      sQ = {
        uniform: 3,
        Gr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      FQ = 10,
      PQ = "BloxdPackInputs",
      gQ = "bloxdPackInputs",
      JQ = [{
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
      rQ = 80;

    function IQ() {
      const QQ = JQ.map((QQ => {
        let {
          name: WQ,
          type: XQ
        } = QQ;
        return `    ${WQ}: ${XQ},\n`
      })).join("");
      return `struct ${PQ} {\n${QQ}}\n@group(${wQ}) @binding(${qQ}) var<uniform> ${gQ}: ${PQ};\n`
    }

    function jQ(QQ, WQ) {
      const XQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, rQ),
        [wQ, qQ, TQ, zQ, sQ, FQ] = JQ;
      XQ.setFloat32(wQ.offset, WQ.seconds, !0), XQ.setUint32(qQ.offset, WQ.lit ? 1 : 0, !0);
      for (let PQ = 0; PQ < 3; PQ++) XQ.setInt32(TQ.offset + 4 * PQ, WQ.renderOffset[PQ], !0), XQ.setFloat32(zQ.offset + 4 * PQ, WQ.IQQ[PQ], !0), XQ.setFloat32(sQ.offset + 4 * PQ, WQ.eyePosition[PQ], !0), XQ.setFloat32(FQ.offset + 4 * PQ, WQ.shadowDirection[PQ], !0)
    }

    function BQ(QQ) {
      const WQ = new Uint32Array(Math.max(1, QQ.length));
      return QQ.forEach(((QQ, XQ) => {
        let {
          id: wQ,
          rotation: qQ
        } = QQ;
        WQ[XQ] = 65535 & wQ | (3 & qQ) << 16
      })), WQ
    }
    const yQ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7015: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      h: () => zQ,
      i: () => sQ,
      m: () => qQ,
      n: () => TQ
    });
    const wQ = ["terrain", "liquid", "model"];

    function qQ() {
      const QQ = [];
      for (const WQ of [!1, !0])
        for (const XQ of wQ) QQ.push({
          strict: WQ,
          program: XQ
        });
      return QQ
    }

    function TQ(QQ) {
      return `${QQ.strict?"strict":"allow"}.${QQ.program}`
    }

    function zQ(QQ) {
      return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
    }

    function sQ(QQ, WQ) {
      return "off" !== WQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === WQ) && !zQ(QQ))))
    }
  },
  41513: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      SHADER_PACK_INPUTS_BINDING: () => TQ.b,
      SHADER_PACK_INPUTS_GROUP: () => TQ.d,
      SHADER_PACK_INPUTS_SIZE: () => TQ.h,
      SHADER_PACK_INPUTS_VAR: () => TQ.i,
      SHADER_PACK_MODES: () => TQ.k,
      SHADER_PACK_PROGRAMS: () => wQ.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => TQ.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => TQ.p,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => TQ.r,
      SHADER_PACK_TEXTURES_BINDING: () => TQ.t,
      encodeTextureLayers: () => TQ.w,
      flattenVariants: () => qQ.e,
      isVariantOff: () => wQ.h,
      packRunsIn: () => wQ.i,
      shaderPackInputsWgsl: () => TQ.z,
      shaderPackVariantKeys: () => wQ.m,
      variantKeyId: () => wQ.n,
      writeShaderPackInputs: () => TQ.A
    });
    var wQ = XQ(7015),
      qQ = XQ(7007),
      TQ = XQ(40917)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);