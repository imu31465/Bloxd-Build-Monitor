export const id = 152;
export const ids = [152];
export const modules = {
  7226: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => BU,
      f: () => ZU,
      g: () => kU,
      h: () => gU
    });
    var cU = zU(7233);
    const yU = 6,
      QU = 3,
      AU = 1,
      FU = 2,
      oU = 4,
      DU = 8,
      EU = 16,
      YU = 32,
      NU = 64,
      IU = 128,
      pU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function aU(UU) {
      if (!UU) return 0;
      const XU = pU.indexOf(UU);
      if (XU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
      return XU
    }

    function tU(UU) {
      if (0 === UU) return null;
      const XU = pU[UU];
      if (void 0 === XU) throw new Error(`${UU} is not a shader pack hook function id`);
      return XU
    }

    function gU(UU) {
      const XU = cU.e.length;
      return {
        strict: UU >= XU,
        program: cU.e[UU % XU]
      }
    }

    function kU(UU) {
      return Number(UU.strict) * cU.e.length + cU.e.indexOf(UU.program)
    }

    function GU(UU) {
      return "" === UU ? [] : UU.split(" ")
    }

    function BU(UU) {
      const XU = {
        variantFlags: new Uint8Array(yU),
        hooks: new Uint8Array(yU * QU),
        moduleCodes: Array(yU).fill(""),
        reads: Array(2 * yU).fill("")
      };
      for (const zU of UU) {
        const UU = kU(zU.key),
          cU = (UU, XU) => null === zU.hooks.surface || zU.reads.fragment.includes(UU) ? 0 : XU;
        XU.variantFlags[UU] = (zU.sceneDepth ? AU : 0) | (zU.movesVertices ? FU : 0) | (zU.sunShadow ? oU : 0) | (zU.airShadow ? DU : 0) | (zU.discards ? EU : 0) | cU("localPosition", YU) | cU("enchantSpeed", NU) | cU("enchantTier", IU), XU.hooks[UU * QU] = aU(zU.hooks.vertex), XU.hooks[UU * QU + 1] = aU(zU.hooks.surface), XU.hooks[UU * QU + 2] = aU(zU.hooks.light), XU.moduleCodes[UU] = zU.moduleCode, XU.reads[2 * UU] = zU.reads.vertex.join(" "), XU.reads[2 * UU + 1] = zU.reads.fragment.join(" ")
      }
      return XU
    }

    function ZU(UU) {
      const {
        hooks: XU,
        moduleCodes: zU,
        reads: cU
      } = UU;
      return Array.from(UU.variantFlags, ((UU, yU) => {
        const YU = yU * QU;
        return {
          key: gU(yU),
          hooks: {
            vertex: tU(XU[YU]),
            surface: tU(XU[YU + 1]),
            light: tU(XU[YU + 2])
          },
          moduleCode: zU[yU],
          sceneDepth: 0 !== (UU & AU),
          sunShadow: 0 !== (UU & oU),
          airShadow: 0 !== (UU & DU),
          movesVertices: 0 !== (UU & FU),
          discards: 0 !== (UU & EU),
          reads: {
            vertex: GU(cU[2 * yU]),
            fragment: GU(cU[2 * yU + 1])
          }
        }
      }))
    }
  },
  41770: (UU, XU, zU) => {
    zU.d(XU, {
      D: () => aU,
      E: () => IU,
      I: () => pU,
      d: () => yU,
      h: () => cU,
      l: () => NU,
      m: () => EU,
      o: () => tU,
      r: () => QU,
      u: () => FU,
      y: () => oU,
      z: () => AU
    });
    const cU = 3,
      yU = 0,
      QU = 1,
      AU = 2,
      FU = {
        uniform: 3,
        lN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      oU = 10,
      DU = "BloxdPackInputs",
      EU = "bloxdPackInputs",
      YU = [{
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
      NU = 80;

    function IU() {
      const UU = YU.map((UU => {
        let {
          name: XU,
          type: zU
        } = UU;
        return `    ${XU}: ${zU},\n`
      })).join("");
      return `struct ${DU} {\n${UU}}\n@group(${cU}) @binding(${yU}) var<uniform> ${EU}: ${DU};\n`
    }

    function pU(UU, XU) {
      const zU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NU),
        [cU, yU, QU, AU, FU, oU] = YU;
      zU.setFloat32(cU.offset, XU.seconds, !0), zU.setUint32(yU.offset, XU.lit ? 1 : 0, !0);
      for (let DU = 0; DU < 3; DU++) zU.setInt32(QU.offset + 4 * DU, XU.renderOffset[DU], !0), zU.setFloat32(AU.offset + 4 * DU, XU.hUU[DU], !0), zU.setFloat32(FU.offset + 4 * DU, XU.eyePosition[DU], !0), zU.setFloat32(oU.offset + 4 * DU, XU.shadowDirection[DU], !0)
    }

    function aU(UU) {
      const XU = new Uint32Array(Math.max(1, UU.length));
      return UU.forEach(((UU, zU) => {
        let {
          id: cU,
          rotation: yU
        } = UU;
        XU[zU] = 65535 & cU | (3 & yU) << 16
      })), XU
    }
    const tU = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7233: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      f: () => AU,
      j: () => FU,
      k: () => yU,
      o: () => QU
    });
    const cU = ["terrain", "liquid", "model"];

    function yU() {
      const UU = [];
      for (const XU of [!1, !0])
        for (const zU of cU) UU.push({
          strict: XU,
          program: zU
        });
      return UU
    }

    function QU(UU) {
      return `${UU.strict?"strict":"allow"}.${UU.program}`
    }

    function AU(UU) {
      return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
    }

    function FU(UU, XU) {
      return "off" !== XU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === XU) && !AU(UU))))
    }
  },
  43974: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      SHADER_PACK_INPUTS_BINDING: () => QU.d,
      SHADER_PACK_INPUTS_GROUP: () => QU.h,
      SHADER_PACK_INPUTS_SIZE: () => QU.l,
      SHADER_PACK_INPUTS_VAR: () => QU.m,
      SHADER_PACK_MODES: () => QU.o,
      SHADER_PACK_PROGRAMS: () => cU.e,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => QU.r,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => QU.u,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => QU.y,
      SHADER_PACK_TEXTURES_BINDING: () => QU.z,
      encodeTextureLayers: () => QU.D,
      flattenVariants: () => yU.e,
      isVariantOff: () => cU.f,
      packRunsIn: () => cU.j,
      shaderPackInputsWgsl: () => QU.E,
      shaderPackVariantKeys: () => cU.k,
      variantKeyId: () => cU.o,
      writeShaderPackInputs: () => QU.I
    });
    var cU = zU(7233),
      yU = zU(7226),
      QU = zU(41770)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);