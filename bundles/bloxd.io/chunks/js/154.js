export const id = 154;
export const ids = [154];
export const modules = {
  7176: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => AB,
      g: () => VB,
      h: () => RB,
      l: () => NB
    });
    var YB = GB(7179);
    const DB = 6,
      QB = 3,
      oB = 1,
      jB = 2,
      yB = 4,
      JB = 8,
      MB = 16,
      PB = 32,
      zB = 64,
      lB = 128,
      pB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function qB(BB) {
      if (!BB) return 0;
      const OB = pB.indexOf(BB);
      if (OB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return OB
    }

    function ZB(BB) {
      if (0 === BB) return null;
      const OB = pB[BB];
      if (void 0 === OB) throw new Error(`${BB} is not a shader pack hook function id`);
      return OB
    }

    function NB(BB) {
      const OB = YB.e.length;
      return {
        strict: BB >= OB,
        program: YB.e[BB % OB]
      }
    }

    function RB(BB) {
      return Number(BB.strict) * YB.e.length + YB.e.indexOf(BB.program)
    }

    function WB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function AB(BB) {
      const OB = {
        variantFlags: new Uint8Array(DB),
        hooks: new Uint8Array(DB * QB),
        moduleCodes: Array(DB).fill(""),
        reads: Array(2 * DB).fill("")
      };
      for (const GB of BB) {
        const BB = RB(GB.key),
          YB = (BB, OB) => null === GB.hooks.surface || GB.reads.fragment.includes(BB) ? 0 : OB;
        OB.variantFlags[BB] = (GB.sceneDepth ? oB : 0) | (GB.movesVertices ? jB : 0) | (GB.sunShadow ? yB : 0) | (GB.airShadow ? JB : 0) | (GB.discards ? MB : 0) | YB("localPosition", PB) | YB("enchantSpeed", zB) | YB("enchantTier", lB), OB.hooks[BB * QB] = qB(GB.hooks.vertex), OB.hooks[BB * QB + 1] = qB(GB.hooks.surface), OB.hooks[BB * QB + 2] = qB(GB.hooks.light), OB.moduleCodes[BB] = GB.moduleCode, OB.reads[2 * BB] = GB.reads.vertex.join(" "), OB.reads[2 * BB + 1] = GB.reads.fragment.join(" ")
      }
      return OB
    }

    function VB(BB) {
      const {
        hooks: OB,
        moduleCodes: GB,
        reads: YB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, DB) => {
        const PB = DB * QB;
        return {
          key: NB(DB),
          hooks: {
            vertex: ZB(OB[PB]),
            surface: ZB(OB[PB + 1]),
            light: ZB(OB[PB + 2])
          },
          moduleCode: GB[DB],
          sceneDepth: 0 !== (BB & oB),
          sunShadow: 0 !== (BB & yB),
          airShadow: 0 !== (BB & JB),
          movesVertices: 0 !== (BB & jB),
          discards: 0 !== (BB & MB),
          reads: {
            vertex: WB(YB[2 * DB]),
            fragment: WB(YB[2 * DB + 1])
          }
        }
      }))
    }
  },
  41714: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => YB,
      f: () => zB,
      g: () => MB,
      j: () => ZB,
      k: () => QB,
      n: () => jB,
      o: () => yB,
      p: () => oB,
      t: () => qB,
      w: () => lB,
      z: () => pB
    });
    const YB = 3,
      DB = 0,
      QB = 1,
      oB = 2,
      jB = {
        uniform: 3,
        sz: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      yB = 10,
      JB = "BloxdPackInputs",
      MB = "bloxdPackInputs",
      PB = [{
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

    function lB() {
      const BB = PB.map((BB => {
        let {
          name: OB,
          type: GB
        } = BB;
        return `    ${OB}: ${GB},\n`
      })).join("");
      return `struct ${JB} {\n${BB}}\n@group(${YB}) @binding(${DB}) var<uniform> ${MB}: ${JB};\n`
    }

    function pB(BB, OB) {
      const GB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, zB),
        [YB, DB, QB, oB, jB, yB] = PB;
      GB.setFloat32(YB.offset, OB.seconds, !0), GB.setUint32(DB.offset, OB.lit ? 1 : 0, !0);
      for (let JB = 0; JB < 3; JB++) GB.setInt32(QB.offset + 4 * JB, OB.renderOffset[JB], !0), GB.setFloat32(oB.offset + 4 * JB, OB.nOB[JB], !0), GB.setFloat32(jB.offset + 4 * JB, OB.eyePosition[JB], !0), GB.setFloat32(yB.offset + 4 * JB, OB.shadowDirection[JB], !0)
    }

    function qB(BB) {
      const OB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, GB) => {
        let {
          id: YB,
          rotation: DB
        } = BB;
        OB[GB] = 65535 & YB | (3 & DB) << 16
      })), OB
    }
    const ZB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7179: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => oB,
      k: () => jB,
      o: () => DB,
      r: () => QB
    });
    const YB = ["terrain", "liquid", "model"];

    function DB() {
      const BB = [];
      for (const OB of [!1, !0])
        for (const GB of YB) BB.push({
          strict: OB,
          program: GB
        });
      return BB
    }

    function QB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function oB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function jB(BB, OB) {
      return "off" !== OB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === OB) && !oB(BB))))
    }
  },
  44442: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      SHADER_PACK_INPUTS_BINDING: () => QB.b,
      SHADER_PACK_INPUTS_GROUP: () => QB.e,
      SHADER_PACK_INPUTS_SIZE: () => QB.f,
      SHADER_PACK_INPUTS_VAR: () => QB.g,
      SHADER_PACK_MODES: () => QB.j,
      SHADER_PACK_PROGRAMS: () => YB.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => QB.k,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => QB.n,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => QB.o,
      SHADER_PACK_TEXTURES_BINDING: () => QB.p,
      encodeTextureLayers: () => QB.t,
      flattenVariants: () => DB.d,
      isVariantOff: () => YB.g,
      packRunsIn: () => YB.k,
      shaderPackInputsWgsl: () => QB.w,
      shaderPackVariantKeys: () => YB.o,
      variantKeyId: () => YB.r,
      writeShaderPackInputs: () => QB.z
    });
    var YB = GB(7179),
      DB = GB(7176),
      QB = GB(41714)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);