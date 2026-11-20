export const id = 133;
export const ids = [133];
export const modules = {
  6628: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => DT,
      i: () => aT,
      k: () => QT,
      o: () => NT
    });
    var lT = cT(6633);
    const MT = 6,
      KT = 3,
      OT = 1,
      yT = 2,
      fT = 4,
      xT = 8,
      IT = 16,
      AT = 32,
      CT = 64,
      jT = 128,
      vT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tT(TT) {
      if (!TT) return 0;
      const kT = vT.indexOf(TT);
      if (kT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return kT
    }

    function hT(TT) {
      if (0 === TT) return null;
      const kT = vT[TT];
      if (void 0 === kT) throw new Error(`${TT} is not a shader pack hook function id`);
      return kT
    }

    function NT(TT) {
      const kT = lT.e.length;
      return {
        strict: TT >= kT,
        program: lT.e[TT % kT]
      }
    }

    function QT(TT) {
      return Number(TT.strict) * lT.e.length + lT.e.indexOf(TT.program)
    }

    function ST(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function DT(TT) {
      const kT = {
        variantFlags: new Uint8Array(MT),
        hooks: new Uint8Array(MT * KT),
        moduleCodes: Array(MT).fill(""),
        reads: Array(2 * MT).fill("")
      };
      for (const cT of TT) {
        const TT = QT(cT.key),
          lT = (TT, kT) => null === cT.hooks.surface || cT.reads.fragment.includes(TT) ? 0 : kT;
        kT.variantFlags[TT] = (cT.sceneDepth ? OT : 0) | (cT.movesVertices ? yT : 0) | (cT.sunShadow ? fT : 0) | (cT.airShadow ? xT : 0) | (cT.discards ? IT : 0) | lT("localPosition", AT) | lT("enchantSpeed", CT) | lT("enchantTier", jT), kT.hooks[TT * KT] = tT(cT.hooks.vertex), kT.hooks[TT * KT + 1] = tT(cT.hooks.surface), kT.hooks[TT * KT + 2] = tT(cT.hooks.light), kT.moduleCodes[TT] = cT.moduleCode, kT.reads[2 * TT] = cT.reads.vertex.join(" "), kT.reads[2 * TT + 1] = cT.reads.fragment.join(" ")
      }
      return kT
    }

    function aT(TT) {
      const {
        hooks: kT,
        moduleCodes: cT,
        reads: lT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, MT) => {
        const AT = MT * KT;
        return {
          key: NT(MT),
          hooks: {
            vertex: hT(kT[AT]),
            surface: hT(kT[AT + 1]),
            light: hT(kT[AT + 2])
          },
          moduleCode: cT[MT],
          sceneDepth: 0 !== (TT & OT),
          sunShadow: 0 !== (TT & fT),
          airShadow: 0 !== (TT & xT),
          movesVertices: 0 !== (TT & yT),
          discards: 0 !== (TT & IT),
          reads: {
            vertex: ST(lT[2 * MT]),
            fragment: ST(lT[2 * MT + 1])
          }
        }
      }))
    }
  },
  40512: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => fT,
      D: () => OT,
      G: () => tT,
      K: () => jT,
      L: () => vT,
      e: () => MT,
      h: () => lT,
      l: () => CT,
      p: () => IT,
      r: () => hT,
      u: () => KT,
      x: () => yT
    });
    const lT = 3,
      MT = 0,
      KT = 1,
      OT = 2,
      yT = {
        uniform: 3,
        rC: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      fT = 10,
      xT = "BloxdPackInputs",
      IT = "bloxdPackInputs",
      AT = [{
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
      CT = 80;

    function jT() {
      const TT = AT.map((TT => {
        let {
          name: kT,
          type: cT
        } = TT;
        return `    ${kT}: ${cT},\n`
      })).join("");
      return `struct ${xT} {\n${TT}}\n@group(${lT}) @binding(${MT}) var<uniform> ${IT}: ${xT};\n`
    }

    function vT(TT, kT) {
      const cT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, CT),
        [lT, MT, KT, OT, yT, fT] = AT;
      cT.setFloat32(lT.offset, kT.seconds, !0), cT.setUint32(MT.offset, kT.lit ? 1 : 0, !0);
      for (let xT = 0; xT < 3; xT++) cT.setInt32(KT.offset + 4 * xT, kT.renderOffset[xT], !0), cT.setFloat32(OT.offset + 4 * xT, kT.M_[xT], !0), cT.setFloat32(yT.offset + 4 * xT, kT.eyePosition[xT], !0), cT.setFloat32(fT.offset + 4 * xT, kT.shadowDirection[xT], !0)
    }

    function tT(TT) {
      const kT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, cT) => {
        let {
          id: lT,
          rotation: MT
        } = TT;
        kT[cT] = 65535 & lT | (3 & MT) << 16
      })), kT
    }
    const hT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6633: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => OT,
      j: () => yT,
      k: () => MT,
      o: () => KT
    });
    const lT = ["terrain", "liquid", "model"];

    function MT() {
      const TT = [];
      for (const kT of [!1, !0])
        for (const cT of lT) TT.push({
          strict: kT,
          program: cT
        });
      return TT
    }

    function KT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function OT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function yT(TT, kT) {
      return "off" !== kT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === kT) && !OT(TT))))
    }
  },
  40911: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      SHADER_PACK_INPUTS_BINDING: () => KT.e,
      SHADER_PACK_INPUTS_GROUP: () => KT.h,
      SHADER_PACK_INPUTS_SIZE: () => KT.l,
      SHADER_PACK_INPUTS_VAR: () => KT.p,
      SHADER_PACK_MODES: () => KT.r,
      SHADER_PACK_PROGRAMS: () => lT.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => KT.u,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => KT.x,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => KT.A,
      SHADER_PACK_TEXTURES_BINDING: () => KT.D,
      encodeTextureLayers: () => KT.G,
      flattenVariants: () => MT.e,
      isVariantOff: () => lT.f,
      packRunsIn: () => lT.j,
      shaderPackInputsWgsl: () => KT.K,
      shaderPackVariantKeys: () => lT.k,
      variantKeyId: () => lT.o,
      writeShaderPackInputs: () => KT.L
    });
    var lT = cT(6633),
      MT = cT(6628),
      KT = cT(40512)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);