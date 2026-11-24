export const id = 138;
export const ids = [138];
export const modules = {
  6670: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => OD,
      e: () => JD,
      f: () => nD,
      h: () => hD
    });
    var pD = wD(6678);
    const sD = 6,
      KD = 3,
      rD = 1,
      LD = 2,
      cD = 4,
      gD = 8,
      RD = 16,
      AD = 32,
      UD = 64,
      fD = 128,
      ID = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function BD(DD) {
      if (!DD) return 0;
      const zD = ID.indexOf(DD);
      if (zD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
      return zD
    }

    function GD(DD) {
      if (0 === DD) return null;
      const zD = ID[DD];
      if (void 0 === zD) throw new Error(`${DD} is not a shader pack hook function id`);
      return zD
    }

    function hD(DD) {
      const zD = pD.c.length;
      return {
        strict: DD >= zD,
        program: pD.c[DD % zD]
      }
    }

    function nD(DD) {
      return Number(DD.strict) * pD.c.length + pD.c.indexOf(DD.program)
    }

    function MD(DD) {
      return "" === DD ? [] : DD.split(" ")
    }

    function OD(DD) {
      const zD = {
        variantFlags: new Uint8Array(sD),
        hooks: new Uint8Array(sD * KD),
        moduleCodes: Array(sD).fill(""),
        reads: Array(2 * sD).fill("")
      };
      for (const wD of DD) {
        const DD = nD(wD.key),
          pD = (DD, zD) => null === wD.hooks.surface || wD.reads.fragment.includes(DD) ? 0 : zD;
        zD.variantFlags[DD] = (wD.sceneDepth ? rD : 0) | (wD.movesVertices ? LD : 0) | (wD.sunShadow ? cD : 0) | (wD.airShadow ? gD : 0) | (wD.discards ? RD : 0) | pD("localPosition", AD) | pD("enchantSpeed", UD) | pD("enchantTier", fD), zD.hooks[DD * KD] = BD(wD.hooks.vertex), zD.hooks[DD * KD + 1] = BD(wD.hooks.surface), zD.hooks[DD * KD + 2] = BD(wD.hooks.light), zD.moduleCodes[DD] = wD.moduleCode, zD.reads[2 * DD] = wD.reads.vertex.join(" "), zD.reads[2 * DD + 1] = wD.reads.fragment.join(" ")
      }
      return zD
    }

    function JD(DD) {
      const {
        hooks: zD,
        moduleCodes: wD,
        reads: pD
      } = DD;
      return Array.from(DD.variantFlags, ((DD, sD) => {
        const AD = sD * KD;
        return {
          key: hD(sD),
          hooks: {
            vertex: GD(zD[AD]),
            surface: GD(zD[AD + 1]),
            light: GD(zD[AD + 2])
          },
          moduleCode: wD[sD],
          sceneDepth: 0 !== (DD & rD),
          sunShadow: 0 !== (DD & cD),
          airShadow: 0 !== (DD & gD),
          movesVertices: 0 !== (DD & LD),
          discards: 0 !== (DD & RD),
          reads: {
            vertex: MD(pD[2 * sD]),
            fragment: MD(pD[2 * sD + 1])
          }
        }
      }))
    }
  },
  40617: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => fD,
      E: () => ID,
      e: () => sD,
      i: () => pD,
      j: () => UD,
      m: () => RD,
      n: () => GD,
      q: () => KD,
      u: () => LD,
      v: () => cD,
      x: () => rD,
      z: () => BD
    });
    const pD = 3,
      sD = 0,
      KD = 1,
      rD = 2,
      LD = {
        uniform: 3,
        dU: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      cD = 10,
      gD = "BloxdPackInputs",
      RD = "bloxdPackInputs",
      AD = [{
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
      UD = 80;

    function fD() {
      const DD = AD.map((DD => {
        let {
          name: zD,
          type: wD
        } = DD;
        return `    ${zD}: ${wD},\n`
      })).join("");
      return `struct ${gD} {\n${DD}}\n@group(${pD}) @binding(${sD}) var<uniform> ${RD}: ${gD};\n`
    }

    function ID(DD, zD) {
      const wD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, UD),
        [pD, sD, KD, rD, LD, cD] = AD;
      wD.setFloat32(pD.offset, zD.seconds, !0), wD.setUint32(sD.offset, zD.lit ? 1 : 0, !0);
      for (let gD = 0; gD < 3; gD++) wD.setInt32(KD.offset + 4 * gD, zD.renderOffset[gD], !0), wD.setFloat32(rD.offset + 4 * gD, zD.gDD[gD], !0), wD.setFloat32(LD.offset + 4 * gD, zD.eyePosition[gD], !0), wD.setFloat32(cD.offset + 4 * gD, zD.shadowDirection[gD], !0)
    }

    function BD(DD) {
      const zD = new Uint32Array(Math.max(1, DD.length));
      return DD.forEach(((DD, wD) => {
        let {
          id: pD,
          rotation: sD
        } = DD;
        zD[wD] = 65535 & pD | (3 & sD) << 16
      })), zD
    }
    const GD = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6678: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => rD,
      f: () => LD,
      h: () => sD,
      l: () => KD
    });
    const pD = ["terrain", "liquid", "model"];

    function sD() {
      const DD = [];
      for (const zD of [!1, !0])
        for (const wD of pD) DD.push({
          strict: zD,
          program: wD
        });
      return DD
    }

    function KD(DD) {
      return `${DD.strict?"strict":"allow"}.${DD.program}`
    }

    function rD(DD) {
      return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
    }

    function LD(DD, zD) {
      return "off" !== zD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === zD) && !rD(DD))))
    }
  },
  41183: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      SHADER_PACK_INPUTS_BINDING: () => KD.e,
      SHADER_PACK_INPUTS_GROUP: () => KD.i,
      SHADER_PACK_INPUTS_SIZE: () => KD.j,
      SHADER_PACK_INPUTS_VAR: () => KD.m,
      SHADER_PACK_MODES: () => KD.n,
      SHADER_PACK_PROGRAMS: () => pD.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => KD.q,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => KD.u,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => KD.v,
      SHADER_PACK_TEXTURES_BINDING: () => KD.x,
      encodeTextureLayers: () => KD.z,
      flattenVariants: () => sD.b,
      isVariantOff: () => pD.d,
      packRunsIn: () => pD.f,
      shaderPackInputsWgsl: () => KD.A,
      shaderPackVariantKeys: () => pD.h,
      variantKeyId: () => pD.l,
      writeShaderPackInputs: () => KD.E
    });
    var pD = wD(6678),
      sD = wD(6670),
      KD = wD(40617)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);