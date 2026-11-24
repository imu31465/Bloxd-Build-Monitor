export const id = 138;
export const ids = [138];
export const modules = {
  6826: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => QS,
      i: () => DS,
      m: () => nS,
      p: () => CS
    });
    var tS = gS(6832);
    const bS = 6,
      XS = 3,
      xS = 1,
      NS = 2,
      qS = 4,
      uS = 8,
      IS = 16,
      fS = 32,
      kS = 64,
      aS = 128,
      KS = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function jS(SS) {
      if (!SS) return 0;
      const HS = KS.indexOf(SS);
      if (HS <= 0) throw new Error(`"${SS}" is not a shader pack hook function`);
      return HS
    }

    function GS(SS) {
      if (0 === SS) return null;
      const HS = KS[SS];
      if (void 0 === HS) throw new Error(`${SS} is not a shader pack hook function id`);
      return HS
    }

    function CS(SS) {
      const HS = tS.c.length;
      return {
        strict: SS >= HS,
        program: tS.c[SS % HS]
      }
    }

    function nS(SS) {
      return Number(SS.strict) * tS.c.length + tS.c.indexOf(SS.program)
    }

    function PS(SS) {
      return "" === SS ? [] : SS.split(" ")
    }

    function QS(SS) {
      const HS = {
        variantFlags: new Uint8Array(bS),
        hooks: new Uint8Array(bS * XS),
        moduleCodes: Array(bS).fill(""),
        reads: Array(2 * bS).fill("")
      };
      for (const gS of SS) {
        const SS = nS(gS.key),
          tS = (SS, HS) => null === gS.hooks.surface || gS.reads.fragment.includes(SS) ? 0 : HS;
        HS.variantFlags[SS] = (gS.sceneDepth ? xS : 0) | (gS.movesVertices ? NS : 0) | (gS.sunShadow ? qS : 0) | (gS.airShadow ? uS : 0) | (gS.discards ? IS : 0) | tS("localPosition", fS) | tS("enchantSpeed", kS) | tS("enchantTier", aS), HS.hooks[SS * XS] = jS(gS.hooks.vertex), HS.hooks[SS * XS + 1] = jS(gS.hooks.surface), HS.hooks[SS * XS + 2] = jS(gS.hooks.light), HS.moduleCodes[SS] = gS.moduleCode, HS.reads[2 * SS] = gS.reads.vertex.join(" "), HS.reads[2 * SS + 1] = gS.reads.fragment.join(" ")
      }
      return HS
    }

    function DS(SS) {
      const {
        hooks: HS,
        moduleCodes: gS,
        reads: tS
      } = SS;
      return Array.from(SS.variantFlags, ((SS, bS) => {
        const fS = bS * XS;
        return {
          key: CS(bS),
          hooks: {
            vertex: GS(HS[fS]),
            surface: GS(HS[fS + 1]),
            light: GS(HS[fS + 2])
          },
          moduleCode: gS[bS],
          sceneDepth: 0 !== (SS & xS),
          sunShadow: 0 !== (SS & qS),
          airShadow: 0 !== (SS & uS),
          movesVertices: 0 !== (SS & NS),
          discards: 0 !== (SS & IS),
          reads: {
            vertex: PS(tS[2 * bS]),
            fragment: PS(tS[2 * bS + 1])
          }
        }
      }))
    }
  },
  40735: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => aS,
      C: () => KS,
      c: () => bS,
      g: () => tS,
      h: () => kS,
      i: () => IS,
      k: () => GS,
      o: () => XS,
      s: () => NS,
      t: () => qS,
      u: () => xS,
      y: () => jS
    });
    const tS = 3,
      bS = 0,
      XS = 1,
      xS = 2,
      NS = {
        uniform: 3,
        Lk: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qS = 10,
      uS = "BloxdPackInputs",
      IS = "bloxdPackInputs",
      fS = [{
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
      kS = 80;

    function aS() {
      const SS = fS.map((SS => {
        let {
          name: HS,
          type: gS
        } = SS;
        return `    ${HS}: ${gS},\n`
      })).join("");
      return `struct ${uS} {\n${SS}}\n@group(${tS}) @binding(${bS}) var<uniform> ${IS}: ${uS};\n`
    }

    function KS(SS, HS) {
      const gS = new DataView(SS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, kS),
        [tS, bS, XS, xS, NS, qS] = fS;
      gS.setFloat32(tS.offset, HS.seconds, !0), gS.setUint32(bS.offset, HS.lit ? 1 : 0, !0);
      for (let uS = 0; uS < 3; uS++) gS.setInt32(XS.offset + 4 * uS, HS.renderOffset[uS], !0), gS.setFloat32(xS.offset + 4 * uS, HS.Z6[uS], !0), gS.setFloat32(NS.offset + 4 * uS, HS.eyePosition[uS], !0), gS.setFloat32(qS.offset + 4 * uS, HS.shadowDirection[uS], !0)
    }

    function jS(SS) {
      const HS = new Uint32Array(Math.max(1, SS.length));
      return SS.forEach(((SS, gS) => {
        let {
          id: tS,
          rotation: bS
        } = SS;
        HS[gS] = 65535 & tS | (3 & bS) << 16
      })), HS
    }
    const GS = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6832: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      d: () => xS,
      e: () => NS,
      f: () => bS,
      h: () => XS
    });
    const tS = ["terrain", "liquid", "model"];

    function bS() {
      const SS = [];
      for (const HS of [!1, !0])
        for (const gS of tS) SS.push({
          strict: HS,
          program: gS
        });
      return SS
    }

    function XS(SS) {
      return `${SS.strict?"strict":"allow"}.${SS.program}`
    }

    function xS(SS) {
      return !SS.hooks.vertex && !SS.hooks.surface && !SS.hooks.light
    }

    function NS(SS, HS) {
      return "off" !== HS && (null === SS || SS.some((SS => SS.key.strict === ("strict" === HS) && !xS(SS))))
    }
  },
  41278: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      SHADER_PACK_INPUTS_BINDING: () => XS.c,
      SHADER_PACK_INPUTS_GROUP: () => XS.g,
      SHADER_PACK_INPUTS_SIZE: () => XS.h,
      SHADER_PACK_INPUTS_VAR: () => XS.i,
      SHADER_PACK_MODES: () => XS.k,
      SHADER_PACK_PROGRAMS: () => tS.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => XS.o,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => XS.s,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => XS.t,
      SHADER_PACK_TEXTURES_BINDING: () => XS.u,
      encodeTextureLayers: () => XS.y,
      flattenVariants: () => bS.e,
      isVariantOff: () => tS.d,
      packRunsIn: () => tS.e,
      shaderPackInputsWgsl: () => XS.A,
      shaderPackVariantKeys: () => tS.f,
      variantKeyId: () => tS.h,
      writeShaderPackInputs: () => XS.C
    });
    var tS = gS(6832),
      bS = gS(6826),
      XS = gS(40735)
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);