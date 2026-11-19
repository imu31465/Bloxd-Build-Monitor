export const id = 134;
export const ids = [134];
export const modules = {
  6141: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => hT,
      g: () => wT,
      j: () => AT,
      n: () => rT
    });
    var iT = IT(6143);
    const zT = 6,
      kT = 3,
      WT = 1,
      XT = 2,
      BT = 4,
      FT = 8,
      ST = 16,
      DT = 32,
      LT = 64,
      xT = 128,
      cT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function KT(TT) {
      if (!TT) return 0;
      const oT = cT.indexOf(TT);
      if (oT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return oT
    }

    function MT(TT) {
      if (0 === TT) return null;
      const oT = cT[TT];
      if (void 0 === oT) throw new Error(`${TT} is not a shader pack hook function id`);
      return oT
    }

    function rT(TT) {
      const oT = iT.d.length;
      return {
        strict: TT >= oT,
        program: iT.d[TT % oT]
      }
    }

    function AT(TT) {
      return Number(TT.strict) * iT.d.length + iT.d.indexOf(TT.program)
    }

    function gT(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function hT(TT) {
      const oT = {
        variantFlags: new Uint8Array(zT),
        hooks: new Uint8Array(zT * kT),
        moduleCodes: Array(zT).fill(""),
        reads: Array(2 * zT).fill("")
      };
      for (const IT of TT) {
        const TT = AT(IT.key),
          iT = (TT, oT) => null === IT.hooks.surface || IT.reads.fragment.includes(TT) ? 0 : oT;
        oT.variantFlags[TT] = (IT.sceneDepth ? WT : 0) | (IT.movesVertices ? XT : 0) | (IT.sunShadow ? BT : 0) | (IT.airShadow ? FT : 0) | (IT.discards ? ST : 0) | iT("localPosition", DT) | iT("enchantSpeed", LT) | iT("enchantTier", xT), oT.hooks[TT * kT] = KT(IT.hooks.vertex), oT.hooks[TT * kT + 1] = KT(IT.hooks.surface), oT.hooks[TT * kT + 2] = KT(IT.hooks.light), oT.moduleCodes[TT] = IT.moduleCode, oT.reads[2 * TT] = IT.reads.vertex.join(" "), oT.reads[2 * TT + 1] = IT.reads.fragment.join(" ")
      }
      return oT
    }

    function wT(TT) {
      const {
        hooks: oT,
        moduleCodes: IT,
        reads: iT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, zT) => {
        const DT = zT * kT;
        return {
          key: rT(zT),
          hooks: {
            vertex: MT(oT[DT]),
            surface: MT(oT[DT + 1]),
            light: MT(oT[DT + 2])
          },
          moduleCode: IT[zT],
          sceneDepth: 0 !== (TT & WT),
          sunShadow: 0 !== (TT & BT),
          airShadow: 0 !== (TT & FT),
          movesVertices: 0 !== (TT & XT),
          discards: 0 !== (TT & ST),
          reads: {
            vertex: gT(iT[2 * zT]),
            fragment: gT(iT[2 * zT + 1])
          }
        }
      }))
    }
  },
  39679: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => xT,
      B: () => cT,
      c: () => zT,
      d: () => iT,
      e: () => LT,
      h: () => ST,
      l: () => MT,
      n: () => kT,
      q: () => XT,
      r: () => BT,
      v: () => WT,
      z: () => KT
    });
    const iT = 3,
      zT = 0,
      kT = 1,
      WT = 2,
      XT = {
        uniform: 3,
        jL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      BT = 10,
      FT = "BloxdPackInputs",
      ST = "bloxdPackInputs",
      DT = [{
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

    function xT() {
      const TT = DT.map((TT => {
        let {
          name: oT,
          type: IT
        } = TT;
        return `    ${oT}: ${IT},\n`
      })).join("");
      return `struct ${FT} {\n${TT}}\n@group(${iT}) @binding(${zT}) var<uniform> ${ST}: ${FT};\n`
    }

    function cT(TT, oT) {
      const IT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LT),
        [iT, zT, kT, WT, XT, BT] = DT;
      IT.setFloat32(iT.offset, oT.seconds, !0), IT.setUint32(zT.offset, oT.lit ? 1 : 0, !0);
      for (let FT = 0; FT < 3; FT++) IT.setInt32(kT.offset + 4 * FT, oT.renderOffset[FT], !0), IT.setFloat32(WT.offset + 4 * FT, oT.f_[FT], !0), IT.setFloat32(XT.offset + 4 * FT, oT.eyePosition[FT], !0), IT.setFloat32(BT.offset + 4 * FT, oT.shadowDirection[FT], !0)
    }

    function KT(TT) {
      const oT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, IT) => {
        let {
          id: iT,
          rotation: zT
        } = TT;
        oT[IT] = 65535 & iT | (3 & zT) << 16
      })), oT
    }
    const MT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6143: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      g: () => WT,
      h: () => XT,
      k: () => zT,
      l: () => kT
    });
    const iT = ["terrain", "liquid", "model"];

    function zT() {
      const TT = [];
      for (const oT of [!1, !0])
        for (const IT of iT) TT.push({
          strict: oT,
          program: IT
        });
      return TT
    }

    function kT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function WT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function XT(TT, oT) {
      return "off" !== oT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === oT) && !WT(TT))))
    }
  },
  39959: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      SHADER_PACK_INPUTS_BINDING: () => kT.c,
      SHADER_PACK_INPUTS_GROUP: () => kT.d,
      SHADER_PACK_INPUTS_SIZE: () => kT.e,
      SHADER_PACK_INPUTS_VAR: () => kT.h,
      SHADER_PACK_MODES: () => kT.l,
      SHADER_PACK_PROGRAMS: () => iT.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => kT.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => kT.q,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => kT.r,
      SHADER_PACK_TEXTURES_BINDING: () => kT.v,
      encodeTextureLayers: () => kT.z,
      flattenVariants: () => zT.c,
      isVariantOff: () => iT.g,
      packRunsIn: () => iT.h,
      shaderPackInputsWgsl: () => kT.A,
      shaderPackVariantKeys: () => iT.k,
      variantKeyId: () => iT.l,
      writeShaderPackInputs: () => kT.B
    });
    var iT = IT(6143),
      zT = IT(6141),
      kT = IT(39679)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);