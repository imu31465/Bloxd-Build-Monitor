export const id = 141;
export const ids = [141];
export const modules = {
  6587: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => gB,
      g: () => tB,
      i: () => GB,
      j: () => kB
    });
    var QB = zB(6592);
    const nB = 6,
      dB = 3,
      IB = 1,
      NB = 2,
      uB = 4,
      UB = 8,
      aB = 16,
      pB = 32,
      rB = 64,
      sB = 128,
      JB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function mB(BB) {
      if (!BB) return 0;
      const jB = JB.indexOf(BB);
      if (jB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return jB
    }

    function yB(BB) {
      if (0 === BB) return null;
      const jB = JB[BB];
      if (void 0 === jB) throw new Error(`${BB} is not a shader pack hook function id`);
      return jB
    }

    function kB(BB) {
      const jB = QB.e.length;
      return {
        strict: BB >= jB,
        program: QB.e[BB % jB]
      }
    }

    function GB(BB) {
      return Number(BB.strict) * QB.e.length + QB.e.indexOf(BB.program)
    }

    function LB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function gB(BB) {
      const jB = {
        variantFlags: new Uint8Array(nB),
        hooks: new Uint8Array(nB * dB),
        moduleCodes: Array(nB).fill(""),
        reads: Array(2 * nB).fill("")
      };
      for (const zB of BB) {
        const BB = GB(zB.key),
          QB = (BB, jB) => null === zB.hooks.surface || zB.reads.fragment.includes(BB) ? 0 : jB;
        jB.variantFlags[BB] = (zB.sceneDepth ? IB : 0) | (zB.movesVertices ? NB : 0) | (zB.sunShadow ? uB : 0) | (zB.airShadow ? UB : 0) | (zB.discards ? aB : 0) | QB("localPosition", pB) | QB("enchantSpeed", rB) | QB("enchantTier", sB), jB.hooks[BB * dB] = mB(zB.hooks.vertex), jB.hooks[BB * dB + 1] = mB(zB.hooks.surface), jB.hooks[BB * dB + 2] = mB(zB.hooks.light), jB.moduleCodes[BB] = zB.moduleCode, jB.reads[2 * BB] = zB.reads.vertex.join(" "), jB.reads[2 * BB + 1] = zB.reads.fragment.join(" ")
      }
      return jB
    }

    function tB(BB) {
      const {
        hooks: jB,
        moduleCodes: zB,
        reads: QB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, nB) => {
        const pB = nB * dB;
        return {
          key: kB(nB),
          hooks: {
            vertex: yB(jB[pB]),
            surface: yB(jB[pB + 1]),
            light: yB(jB[pB + 2])
          },
          moduleCode: zB[nB],
          sceneDepth: 0 !== (BB & IB),
          sunShadow: 0 !== (BB & uB),
          airShadow: 0 !== (BB & UB),
          movesVertices: 0 !== (BB & NB),
          discards: 0 !== (BB & aB),
          reads: {
            vertex: LB(QB[2 * nB]),
            fragment: LB(QB[2 * nB + 1])
          }
        }
      }))
    }
  },
  40789: (BB, jB, zB) => {
    zB.d(jB, {
      C: () => IB,
      E: () => mB,
      I: () => sB,
      J: () => JB,
      d: () => nB,
      h: () => QB,
      k: () => rB,
      o: () => aB,
      r: () => yB,
      u: () => dB,
      v: () => NB,
      y: () => uB
    });
    const QB = 3,
      nB = 0,
      dB = 1,
      IB = 2,
      NB = {
        uniform: 3,
        Vr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      uB = 10,
      UB = "BloxdPackInputs",
      aB = "bloxdPackInputs",
      pB = [{
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
      rB = 80;

    function sB() {
      const BB = pB.map((BB => {
        let {
          name: jB,
          type: zB
        } = BB;
        return `    ${jB}: ${zB},\n`
      })).join("");
      return `struct ${UB} {\n${BB}}\n@group(${QB}) @binding(${nB}) var<uniform> ${aB}: ${UB};\n`
    }

    function JB(BB, jB) {
      const zB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, rB),
        [QB, nB, dB, IB, NB, uB] = pB;
      zB.setFloat32(QB.offset, jB.seconds, !0), zB.setUint32(nB.offset, jB.lit ? 1 : 0, !0);
      for (let UB = 0; UB < 3; UB++) zB.setInt32(dB.offset + 4 * UB, jB.renderOffset[UB], !0), zB.setFloat32(IB.offset + 4 * UB, jB.J7[UB], !0), zB.setFloat32(NB.offset + 4 * UB, jB.eyePosition[UB], !0), zB.setFloat32(uB.offset + 4 * UB, jB.shadowDirection[UB], !0)
    }

    function mB(BB) {
      const jB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, zB) => {
        let {
          id: QB,
          rotation: nB
        } = BB;
        jB[zB] = 65535 & QB | (3 & nB) << 16
      })), jB
    }
    const yB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6592: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      i: () => IB,
      m: () => NB,
      q: () => nB,
      s: () => dB
    });
    const QB = ["terrain", "liquid", "model"];

    function nB() {
      const BB = [];
      for (const jB of [!1, !0])
        for (const zB of QB) BB.push({
          strict: jB,
          program: zB
        });
      return BB
    }

    function dB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function IB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function NB(BB, jB) {
      return "off" !== jB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === jB) && !IB(BB))))
    }
  },
  41369: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      SHADER_PACK_INPUTS_BINDING: () => dB.d,
      SHADER_PACK_INPUTS_GROUP: () => dB.h,
      SHADER_PACK_INPUTS_SIZE: () => dB.k,
      SHADER_PACK_INPUTS_VAR: () => dB.o,
      SHADER_PACK_MODES: () => dB.r,
      SHADER_PACK_PROGRAMS: () => QB.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => dB.u,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => dB.v,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => dB.y,
      SHADER_PACK_TEXTURES_BINDING: () => dB.C,
      encodeTextureLayers: () => dB.E,
      flattenVariants: () => nB.d,
      isVariantOff: () => QB.i,
      packRunsIn: () => QB.m,
      shaderPackInputsWgsl: () => dB.I,
      shaderPackVariantKeys: () => QB.q,
      variantKeyId: () => QB.s,
      writeShaderPackInputs: () => dB.J
    });
    var QB = zB(6592),
      nB = zB(6587),
      dB = zB(40789)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);