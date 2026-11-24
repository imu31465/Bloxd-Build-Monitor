export const id = 141;
export const ids = [141];
export const modules = {
  6780: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => dB,
      e: () => CB,
      h: () => UB,
      i: () => yB
    });
    var TB = ZB(6784);
    const JB = 6,
      oB = 3,
      GB = 1,
      vB = 2,
      kB = 4,
      cB = 8,
      nB = 16,
      hB = 32,
      zB = 64,
      FB = 128,
      NB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function gB(BB) {
      if (!BB) return 0;
      const IB = NB.indexOf(BB);
      if (IB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return IB
    }

    function qB(BB) {
      if (0 === BB) return null;
      const IB = NB[BB];
      if (void 0 === IB) throw new Error(`${BB} is not a shader pack hook function id`);
      return IB
    }

    function yB(BB) {
      const IB = TB.e.length;
      return {
        strict: BB >= IB,
        program: TB.e[BB % IB]
      }
    }

    function UB(BB) {
      return Number(BB.strict) * TB.e.length + TB.e.indexOf(BB.program)
    }

    function WB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function dB(BB) {
      const IB = {
        variantFlags: new Uint8Array(JB),
        hooks: new Uint8Array(JB * oB),
        moduleCodes: Array(JB).fill(""),
        reads: Array(2 * JB).fill("")
      };
      for (const ZB of BB) {
        const BB = UB(ZB.key),
          TB = (BB, IB) => null === ZB.hooks.surface || ZB.reads.fragment.includes(BB) ? 0 : IB;
        IB.variantFlags[BB] = (ZB.sceneDepth ? GB : 0) | (ZB.movesVertices ? vB : 0) | (ZB.sunShadow ? kB : 0) | (ZB.airShadow ? cB : 0) | (ZB.discards ? nB : 0) | TB("localPosition", hB) | TB("enchantSpeed", zB) | TB("enchantTier", FB), IB.hooks[BB * oB] = gB(ZB.hooks.vertex), IB.hooks[BB * oB + 1] = gB(ZB.hooks.surface), IB.hooks[BB * oB + 2] = gB(ZB.hooks.light), IB.moduleCodes[BB] = ZB.moduleCode, IB.reads[2 * BB] = ZB.reads.vertex.join(" "), IB.reads[2 * BB + 1] = ZB.reads.fragment.join(" ")
      }
      return IB
    }

    function CB(BB) {
      const {
        hooks: IB,
        moduleCodes: ZB,
        reads: TB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, JB) => {
        const hB = JB * oB;
        return {
          key: yB(JB),
          hooks: {
            vertex: qB(IB[hB]),
            surface: qB(IB[hB + 1]),
            light: qB(IB[hB + 2])
          },
          moduleCode: ZB[JB],
          sceneDepth: 0 !== (BB & GB),
          sunShadow: 0 !== (BB & kB),
          airShadow: 0 !== (BB & cB),
          movesVertices: 0 !== (BB & vB),
          discards: 0 !== (BB & nB),
          reads: {
            vertex: WB(TB[2 * JB]),
            fragment: WB(TB[2 * JB + 1])
          }
        }
      }))
    }
  },
  40741: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => gB,
      B: () => FB,
      D: () => NB,
      e: () => JB,
      f: () => TB,
      i: () => zB,
      m: () => nB,
      p: () => qB,
      q: () => oB,
      s: () => vB,
      u: () => kB,
      w: () => GB
    });
    const TB = 3,
      JB = 0,
      oB = 1,
      GB = 2,
      vB = {
        uniform: 3,
        mz: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      kB = 10,
      cB = "BloxdPackInputs",
      nB = "bloxdPackInputs",
      hB = [{
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
      zB = 80;

    function FB() {
      const BB = hB.map((BB => {
        let {
          name: IB,
          type: ZB
        } = BB;
        return `    ${IB}: ${ZB},\n`
      })).join("");
      return `struct ${cB} {\n${BB}}\n@group(${TB}) @binding(${JB}) var<uniform> ${nB}: ${cB};\n`
    }

    function NB(BB, IB) {
      const ZB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, zB),
        [TB, JB, oB, GB, vB, kB] = hB;
      ZB.setFloat32(TB.offset, IB.seconds, !0), ZB.setUint32(JB.offset, IB.lit ? 1 : 0, !0);
      for (let cB = 0; cB < 3; cB++) ZB.setInt32(oB.offset + 4 * cB, IB.renderOffset[cB], !0), ZB.setFloat32(GB.offset + 4 * cB, IB.WBB[cB], !0), ZB.setFloat32(vB.offset + 4 * cB, IB.eyePosition[cB], !0), ZB.setFloat32(kB.offset + 4 * cB, IB.shadowDirection[cB], !0)
    }

    function gB(BB) {
      const IB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, ZB) => {
        let {
          id: TB,
          rotation: JB
        } = BB;
        IB[ZB] = 65535 & TB | (3 & JB) << 16
      })), IB
    }
    const qB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6784: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      i: () => GB,
      l: () => vB,
      o: () => JB,
      s: () => oB
    });
    const TB = ["terrain", "liquid", "model"];

    function JB() {
      const BB = [];
      for (const IB of [!1, !0])
        for (const ZB of TB) BB.push({
          strict: IB,
          program: ZB
        });
      return BB
    }

    function oB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function GB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function vB(BB, IB) {
      return "off" !== IB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === IB) && !GB(BB))))
    }
  },
  41308: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      SHADER_PACK_INPUTS_BINDING: () => oB.e,
      SHADER_PACK_INPUTS_GROUP: () => oB.f,
      SHADER_PACK_INPUTS_SIZE: () => oB.i,
      SHADER_PACK_INPUTS_VAR: () => oB.m,
      SHADER_PACK_MODES: () => oB.p,
      SHADER_PACK_PROGRAMS: () => TB.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => oB.q,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => oB.s,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => oB.u,
      SHADER_PACK_TEXTURES_BINDING: () => oB.w,
      encodeTextureLayers: () => oB.A,
      flattenVariants: () => JB.c,
      isVariantOff: () => TB.i,
      packRunsIn: () => TB.l,
      shaderPackInputsWgsl: () => oB.B,
      shaderPackVariantKeys: () => TB.o,
      variantKeyId: () => TB.s,
      writeShaderPackInputs: () => oB.D
    });
    var TB = ZB(6784),
      JB = ZB(6780),
      oB = ZB(40741)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);