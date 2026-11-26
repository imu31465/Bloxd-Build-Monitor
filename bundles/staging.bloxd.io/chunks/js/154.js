export const id = 154;
export const ids = [154];
export const modules = {
  7193: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => tV,
      e: () => FV,
      g: () => jV,
      j: () => BV
    });
    var JV = xV(7201);
    const YV = 6,
      UV = 3,
      yV = 1,
      pV = 2,
      QV = 4,
      nV = 8,
      wV = 16,
      ZV = 32,
      vV = 64,
      rV = 128,
      kV = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function bV(VV) {
      if (!VV) return 0;
      const eV = kV.indexOf(VV);
      if (eV <= 0) throw new Error(`"${VV}" is not a shader pack hook function`);
      return eV
    }

    function EV(VV) {
      if (0 === VV) return null;
      const eV = kV[VV];
      if (void 0 === eV) throw new Error(`${VV} is not a shader pack hook function id`);
      return eV
    }

    function BV(VV) {
      const eV = JV.c.length;
      return {
        strict: VV >= eV,
        program: JV.c[VV % eV]
      }
    }

    function jV(VV) {
      return Number(VV.strict) * JV.c.length + JV.c.indexOf(VV.program)
    }

    function qV(VV) {
      return "" === VV ? [] : VV.split(" ")
    }

    function tV(VV) {
      const eV = {
        variantFlags: new Uint8Array(YV),
        hooks: new Uint8Array(YV * UV),
        moduleCodes: Array(YV).fill(""),
        reads: Array(2 * YV).fill("")
      };
      for (const xV of VV) {
        const VV = jV(xV.key),
          JV = (VV, eV) => null === xV.hooks.surface || xV.reads.fragment.includes(VV) ? 0 : eV;
        eV.variantFlags[VV] = (xV.sceneDepth ? yV : 0) | (xV.movesVertices ? pV : 0) | (xV.sunShadow ? QV : 0) | (xV.airShadow ? nV : 0) | (xV.discards ? wV : 0) | JV("localPosition", ZV) | JV("enchantSpeed", vV) | JV("enchantTier", rV), eV.hooks[VV * UV] = bV(xV.hooks.vertex), eV.hooks[VV * UV + 1] = bV(xV.hooks.surface), eV.hooks[VV * UV + 2] = bV(xV.hooks.light), eV.moduleCodes[VV] = xV.moduleCode, eV.reads[2 * VV] = xV.reads.vertex.join(" "), eV.reads[2 * VV + 1] = xV.reads.fragment.join(" ")
      }
      return eV
    }

    function FV(VV) {
      const {
        hooks: eV,
        moduleCodes: xV,
        reads: JV
      } = VV;
      return Array.from(VV.variantFlags, ((VV, YV) => {
        const ZV = YV * UV;
        return {
          key: BV(YV),
          hooks: {
            vertex: EV(eV[ZV]),
            surface: EV(eV[ZV + 1]),
            light: EV(eV[ZV + 2])
          },
          moduleCode: xV[YV],
          sceneDepth: 0 !== (VV & yV),
          sunShadow: 0 !== (VV & QV),
          airShadow: 0 !== (VV & nV),
          movesVertices: 0 !== (VV & pV),
          discards: 0 !== (VV & wV),
          reads: {
            vertex: qV(JV[2 * YV]),
            fragment: qV(JV[2 * YV + 1])
          }
        }
      }))
    }
  },
  41983: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => rV,
      E: () => kV,
      d: () => YV,
      e: () => JV,
      g: () => vV,
      j: () => wV,
      n: () => EV,
      o: () => UV,
      r: () => pV,
      u: () => QV,
      y: () => yV,
      z: () => bV
    });
    const JV = 3,
      YV = 0,
      UV = 1,
      yV = 2,
      pV = {
        uniform: 3,
        Ur: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      QV = 10,
      nV = "BloxdPackInputs",
      wV = "bloxdPackInputs",
      ZV = [{
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
      vV = 80;

    function rV() {
      const VV = ZV.map((VV => {
        let {
          name: eV,
          type: xV
        } = VV;
        return `    ${eV}: ${xV},\n`
      })).join("");
      return `struct ${nV} {\n${VV}}\n@group(${JV}) @binding(${YV}) var<uniform> ${wV}: ${nV};\n`
    }

    function kV(VV, eV) {
      const xV = new DataView(VV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, vV),
        [JV, YV, UV, yV, pV, QV] = ZV;
      xV.setFloat32(JV.offset, eV.seconds, !0), xV.setUint32(YV.offset, eV.lit ? 1 : 0, !0);
      for (let nV = 0; nV < 3; nV++) xV.setInt32(UV.offset + 4 * nV, eV.renderOffset[nV], !0), xV.setFloat32(yV.offset + 4 * nV, eV.ReV[nV], !0), xV.setFloat32(pV.offset + 4 * nV, eV.eyePosition[nV], !0), xV.setFloat32(QV.offset + 4 * nV, eV.shadowDirection[nV], !0)
    }

    function bV(VV) {
      const eV = new Uint32Array(Math.max(1, VV.length));
      return VV.forEach(((VV, xV) => {
        let {
          id: JV,
          rotation: YV
        } = VV;
        eV[xV] = 65535 & JV | (3 & YV) << 16
      })), eV
    }
    const EV = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7201: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      g: () => yV,
      h: () => pV,
      l: () => YV,
      p: () => UV
    });
    const JV = ["terrain", "liquid", "model"];

    function YV() {
      const VV = [];
      for (const eV of [!1, !0])
        for (const xV of JV) VV.push({
          strict: eV,
          program: xV
        });
      return VV
    }

    function UV(VV) {
      return `${VV.strict?"strict":"allow"}.${VV.program}`
    }

    function yV(VV) {
      return !VV.hooks.vertex && !VV.hooks.surface && !VV.hooks.light
    }

    function pV(VV, eV) {
      return "off" !== eV && (null === VV || VV.some((VV => VV.key.strict === ("strict" === eV) && !yV(VV))))
    }
  },
  44201: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      SHADER_PACK_INPUTS_BINDING: () => UV.d,
      SHADER_PACK_INPUTS_GROUP: () => UV.e,
      SHADER_PACK_INPUTS_SIZE: () => UV.g,
      SHADER_PACK_INPUTS_VAR: () => UV.j,
      SHADER_PACK_MODES: () => UV.n,
      SHADER_PACK_PROGRAMS: () => JV.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => UV.o,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => UV.r,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => UV.u,
      SHADER_PACK_TEXTURES_BINDING: () => UV.y,
      encodeTextureLayers: () => UV.z,
      flattenVariants: () => YV.b,
      isVariantOff: () => JV.g,
      packRunsIn: () => JV.h,
      shaderPackInputsWgsl: () => UV.B,
      shaderPackVariantKeys: () => JV.l,
      variantKeyId: () => JV.p,
      writeShaderPackInputs: () => UV.E
    });
    var JV = xV(7201),
      YV = xV(7193),
      UV = xV(41983)
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);