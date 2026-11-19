export const id = 133;
export const ids = [133];
export const modules = {
  6384: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => XD,
      g: () => mD,
      i: () => ND,
      k: () => vD
    });
    var ID = cD(6393);
    const pD = 6,
      iD = 3,
      fD = 1,
      bD = 2,
      QD = 4,
      wD = 8,
      SD = 16,
      BD = 32,
      yD = 64,
      MD = 128,
      tD = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ZD(DD) {
      if (!DD) return 0;
      const CD = tD.indexOf(DD);
      if (CD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
      return CD
    }

    function oD(DD) {
      if (0 === DD) return null;
      const CD = tD[DD];
      if (void 0 === CD) throw new Error(`${DD} is not a shader pack hook function id`);
      return CD
    }

    function vD(DD) {
      const CD = ID.c.length;
      return {
        strict: DD >= CD,
        program: ID.c[DD % CD]
      }
    }

    function ND(DD) {
      return Number(DD.strict) * ID.c.length + ID.c.indexOf(DD.program)
    }

    function gD(DD) {
      return "" === DD ? [] : DD.split(" ")
    }

    function XD(DD) {
      const CD = {
        variantFlags: new Uint8Array(pD),
        hooks: new Uint8Array(pD * iD),
        moduleCodes: Array(pD).fill(""),
        reads: Array(2 * pD).fill("")
      };
      for (const cD of DD) {
        const DD = ND(cD.key),
          ID = (DD, CD) => null === cD.hooks.surface || cD.reads.fragment.includes(DD) ? 0 : CD;
        CD.variantFlags[DD] = (cD.sceneDepth ? fD : 0) | (cD.movesVertices ? bD : 0) | (cD.sunShadow ? QD : 0) | (cD.airShadow ? wD : 0) | (cD.discards ? SD : 0) | ID("localPosition", BD) | ID("enchantSpeed", yD) | ID("enchantTier", MD), CD.hooks[DD * iD] = ZD(cD.hooks.vertex), CD.hooks[DD * iD + 1] = ZD(cD.hooks.surface), CD.hooks[DD * iD + 2] = ZD(cD.hooks.light), CD.moduleCodes[DD] = cD.moduleCode, CD.reads[2 * DD] = cD.reads.vertex.join(" "), CD.reads[2 * DD + 1] = cD.reads.fragment.join(" ")
      }
      return CD
    }

    function mD(DD) {
      const {
        hooks: CD,
        moduleCodes: cD,
        reads: ID
      } = DD;
      return Array.from(DD.variantFlags, ((DD, pD) => {
        const BD = pD * iD;
        return {
          key: vD(pD),
          hooks: {
            vertex: oD(CD[BD]),
            surface: oD(CD[BD + 1]),
            light: oD(CD[BD + 2])
          },
          moduleCode: cD[pD],
          sceneDepth: 0 !== (DD & fD),
          sunShadow: 0 !== (DD & QD),
          airShadow: 0 !== (DD & wD),
          movesVertices: 0 !== (DD & bD),
          discards: 0 !== (DD & SD),
          reads: {
            vertex: gD(ID[2 * pD]),
            fragment: gD(ID[2 * pD + 1])
          }
        }
      }))
    }
  },
  39961: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => fD,
      F: () => ZD,
      G: () => MD,
      J: () => tD,
      e: () => pD,
      h: () => ID,
      l: () => yD,
      p: () => SD,
      r: () => oD,
      u: () => iD,
      v: () => bD,
      z: () => QD
    });
    const ID = 3,
      pD = 0,
      iD = 1,
      fD = 2,
      bD = {
        uniform: 3,
        Ey: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      QD = 10,
      wD = "BloxdPackInputs",
      SD = "bloxdPackInputs",
      BD = [{
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
      yD = 80;

    function MD() {
      const DD = BD.map((DD => {
        let {
          name: CD,
          type: cD
        } = DD;
        return `    ${CD}: ${cD},\n`
      })).join("");
      return `struct ${wD} {\n${DD}}\n@group(${ID}) @binding(${pD}) var<uniform> ${SD}: ${wD};\n`
    }

    function tD(DD, CD) {
      const cD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, yD),
        [ID, pD, iD, fD, bD, QD] = BD;
      cD.setFloat32(ID.offset, CD.seconds, !0), cD.setUint32(pD.offset, CD.lit ? 1 : 0, !0);
      for (let wD = 0; wD < 3; wD++) cD.setInt32(iD.offset + 4 * wD, CD.renderOffset[wD], !0), cD.setFloat32(fD.offset + 4 * wD, CD.i_[wD], !0), cD.setFloat32(bD.offset + 4 * wD, CD.eyePosition[wD], !0), cD.setFloat32(QD.offset + 4 * wD, CD.shadowDirection[wD], !0)
    }

    function ZD(DD) {
      const CD = new Uint32Array(Math.max(1, DD.length));
      return DD.forEach(((DD, cD) => {
        let {
          id: ID,
          rotation: pD
        } = DD;
        CD[cD] = 65535 & ID | (3 & pD) << 16
      })), CD
    }
    const oD = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6393: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      f: () => fD,
      h: () => bD,
      i: () => pD,
      k: () => iD
    });
    const ID = ["terrain", "liquid", "model"];

    function pD() {
      const DD = [];
      for (const CD of [!1, !0])
        for (const cD of ID) DD.push({
          strict: CD,
          program: cD
        });
      return DD
    }

    function iD(DD) {
      return `${DD.strict?"strict":"allow"}.${DD.program}`
    }

    function fD(DD) {
      return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
    }

    function bD(DD, CD) {
      return "off" !== CD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === CD) && !fD(DD))))
    }
  },
  40338: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      SHADER_PACK_INPUTS_BINDING: () => iD.e,
      SHADER_PACK_INPUTS_GROUP: () => iD.h,
      SHADER_PACK_INPUTS_SIZE: () => iD.l,
      SHADER_PACK_INPUTS_VAR: () => iD.p,
      SHADER_PACK_MODES: () => iD.r,
      SHADER_PACK_PROGRAMS: () => ID.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => iD.u,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => iD.v,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => iD.z,
      SHADER_PACK_TEXTURES_BINDING: () => iD.C,
      encodeTextureLayers: () => iD.F,
      flattenVariants: () => pD.d,
      isVariantOff: () => ID.f,
      packRunsIn: () => ID.h,
      shaderPackInputsWgsl: () => iD.G,
      shaderPackVariantKeys: () => ID.i,
      variantKeyId: () => ID.k,
      writeShaderPackInputs: () => iD.J
    });
    var ID = cD(6393),
      pD = cD(6384),
      iD = cD(39961)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);