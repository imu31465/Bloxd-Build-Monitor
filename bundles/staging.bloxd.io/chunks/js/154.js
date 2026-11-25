export const id = 154;
export const ids = [154];
export const modules = {
  7124: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => UM,
      c: () => GM,
      f: () => lM,
      g: () => yM
    });
    var OM = iM(7131);
    const SM = 6,
      jM = 3,
      aM = 1,
      PM = 2,
      nM = 4,
      QM = 8,
      zM = 16,
      LM = 32,
      mM = 64,
      HM = 128,
      hM = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function JM(MM) {
      if (!MM) return 0;
      const rM = hM.indexOf(MM);
      if (rM <= 0) throw new Error(`"${MM}" is not a shader pack hook function`);
      return rM
    }

    function dM(MM) {
      if (0 === MM) return null;
      const rM = hM[MM];
      if (void 0 === rM) throw new Error(`${MM} is not a shader pack hook function id`);
      return rM
    }

    function yM(MM) {
      const rM = OM.e.length;
      return {
        strict: MM >= rM,
        program: OM.e[MM % rM]
      }
    }

    function lM(MM) {
      return Number(MM.strict) * OM.e.length + OM.e.indexOf(MM.program)
    }

    function EM(MM) {
      return "" === MM ? [] : MM.split(" ")
    }

    function UM(MM) {
      const rM = {
        variantFlags: new Uint8Array(SM),
        hooks: new Uint8Array(SM * jM),
        moduleCodes: Array(SM).fill(""),
        reads: Array(2 * SM).fill("")
      };
      for (const iM of MM) {
        const MM = lM(iM.key),
          OM = (MM, rM) => null === iM.hooks.surface || iM.reads.fragment.includes(MM) ? 0 : rM;
        rM.variantFlags[MM] = (iM.sceneDepth ? aM : 0) | (iM.movesVertices ? PM : 0) | (iM.sunShadow ? nM : 0) | (iM.airShadow ? QM : 0) | (iM.discards ? zM : 0) | OM("localPosition", LM) | OM("enchantSpeed", mM) | OM("enchantTier", HM), rM.hooks[MM * jM] = JM(iM.hooks.vertex), rM.hooks[MM * jM + 1] = JM(iM.hooks.surface), rM.hooks[MM * jM + 2] = JM(iM.hooks.light), rM.moduleCodes[MM] = iM.moduleCode, rM.reads[2 * MM] = iM.reads.vertex.join(" "), rM.reads[2 * MM + 1] = iM.reads.fragment.join(" ")
      }
      return rM
    }

    function GM(MM) {
      const {
        hooks: rM,
        moduleCodes: iM,
        reads: OM
      } = MM;
      return Array.from(MM.variantFlags, ((MM, SM) => {
        const LM = SM * jM;
        return {
          key: yM(SM),
          hooks: {
            vertex: dM(rM[LM]),
            surface: dM(rM[LM + 1]),
            light: dM(rM[LM + 2])
          },
          moduleCode: iM[SM],
          sceneDepth: 0 !== (MM & aM),
          sunShadow: 0 !== (MM & nM),
          airShadow: 0 !== (MM & QM),
          movesVertices: 0 !== (MM & PM),
          discards: 0 !== (MM & zM),
          reads: {
            vertex: EM(OM[2 * SM]),
            fragment: EM(OM[2 * SM + 1])
          }
        }
      }))
    }
  },
  41782: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => OM,
      h: () => mM,
      i: () => zM,
      l: () => dM,
      n: () => jM,
      p: () => PM,
      q: () => nM,
      r: () => aM,
      s: () => JM,
      w: () => HM,
      x: () => hM
    });
    const OM = 3,
      SM = 0,
      jM = 1,
      aM = 2,
      PM = {
        uniform: 3,
        Xm: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      nM = 10,
      QM = "BloxdPackInputs",
      zM = "bloxdPackInputs",
      LM = [{
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
      mM = 80;

    function HM() {
      const MM = LM.map((MM => {
        let {
          name: rM,
          type: iM
        } = MM;
        return `    ${rM}: ${iM},\n`
      })).join("");
      return `struct ${QM} {\n${MM}}\n@group(${OM}) @binding(${SM}) var<uniform> ${zM}: ${QM};\n`
    }

    function hM(MM, rM) {
      const iM = new DataView(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mM),
        [OM, SM, jM, aM, PM, nM] = LM;
      iM.setFloat32(OM.offset, rM.seconds, !0), iM.setUint32(SM.offset, rM.lit ? 1 : 0, !0);
      for (let QM = 0; QM < 3; QM++) iM.setInt32(jM.offset + 4 * QM, rM.renderOffset[QM], !0), iM.setFloat32(aM.offset + 4 * QM, rM.mMM[QM], !0), iM.setFloat32(PM.offset + 4 * QM, rM.eyePosition[QM], !0), iM.setFloat32(nM.offset + 4 * QM, rM.shadowDirection[QM], !0)
    }

    function JM(MM) {
      const rM = new Uint32Array(Math.max(1, MM.length));
      return MM.forEach(((MM, iM) => {
        let {
          id: OM,
          rotation: SM
        } = MM;
        rM[iM] = 65535 & OM | (3 & SM) << 16
      })), rM
    }
    const dM = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7131: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => aM,
      l: () => PM,
      m: () => SM,
      o: () => jM
    });
    const OM = ["terrain", "liquid", "model"];

    function SM() {
      const MM = [];
      for (const rM of [!1, !0])
        for (const iM of OM) MM.push({
          strict: rM,
          program: iM
        });
      return MM
    }

    function jM(MM) {
      return `${MM.strict?"strict":"allow"}.${MM.program}`
    }

    function aM(MM) {
      return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
    }

    function PM(MM, rM) {
      return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
    }
  },
  43945: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      SHADER_PACK_INPUTS_BINDING: () => jM.b,
      SHADER_PACK_INPUTS_GROUP: () => jM.f,
      SHADER_PACK_INPUTS_SIZE: () => jM.h,
      SHADER_PACK_INPUTS_VAR: () => jM.i,
      SHADER_PACK_MODES: () => jM.l,
      SHADER_PACK_PROGRAMS: () => OM.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => jM.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => jM.p,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => jM.q,
      SHADER_PACK_TEXTURES_BINDING: () => jM.r,
      encodeTextureLayers: () => jM.s,
      flattenVariants: () => SM.b,
      isVariantOff: () => OM.h,
      packRunsIn: () => OM.l,
      shaderPackInputsWgsl: () => jM.w,
      shaderPackVariantKeys: () => OM.m,
      variantKeyId: () => OM.o,
      writeShaderPackInputs: () => jM.x
    });
    var OM = iM(7131),
      SM = iM(7124),
      jM = iM(41782)
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);