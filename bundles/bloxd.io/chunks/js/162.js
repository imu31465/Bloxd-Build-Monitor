export const id = 162;
export const ids = [162];
export const modules = {
  7777: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => AR,
      e: () => CR,
      h: () => UR,
      i: () => nR
    });
    var yR = GR(7786);
    const tR = 6,
      uR = 3,
      ZR = 1,
      qR = 2,
      iR = 4,
      fR = 8,
      VR = 16,
      KR = 32,
      wR = 64,
      rR = 128,
      eR = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function aR(RR) {
      if (!RR) return 0;
      const JR = eR.indexOf(RR);
      if (JR <= 0) throw new Error(`"${RR}" is not a shader pack hook function`);
      return JR
    }

    function LR(RR) {
      if (0 === RR) return null;
      const JR = eR[RR];
      if (void 0 === JR) throw new Error(`${RR} is not a shader pack hook function id`);
      return JR
    }

    function nR(RR) {
      const JR = yR.c.length;
      return {
        strict: RR >= JR,
        program: yR.c[RR % JR]
      }
    }

    function UR(RR) {
      return Number(RR.strict) * yR.c.length + yR.c.indexOf(RR.program)
    }

    function WR(RR) {
      return "" === RR ? [] : RR.split(" ")
    }

    function AR(RR) {
      const JR = {
        variantFlags: new Uint8Array(tR),
        hooks: new Uint8Array(tR * uR),
        moduleCodes: Array(tR).fill(""),
        reads: Array(2 * tR).fill("")
      };
      for (const GR of RR) {
        const RR = UR(GR.key),
          yR = (RR, JR) => null === GR.hooks.surface || GR.reads.fragment.includes(RR) ? 0 : JR;
        JR.variantFlags[RR] = (GR.sceneDepth ? ZR : 0) | (GR.movesVertices ? qR : 0) | (GR.sunShadow ? iR : 0) | (GR.airShadow ? fR : 0) | (GR.discards ? VR : 0) | yR("localPosition", KR) | yR("enchantSpeed", wR) | yR("enchantTier", rR), JR.hooks[RR * uR] = aR(GR.hooks.vertex), JR.hooks[RR * uR + 1] = aR(GR.hooks.surface), JR.hooks[RR * uR + 2] = aR(GR.hooks.light), JR.moduleCodes[RR] = GR.moduleCode, JR.reads[2 * RR] = GR.reads.vertex.join(" "), JR.reads[2 * RR + 1] = GR.reads.fragment.join(" ")
      }
      return JR
    }

    function CR(RR) {
      const {
        hooks: JR,
        moduleCodes: GR,
        reads: yR
      } = RR;
      return Array.from(RR.variantFlags, ((RR, tR) => {
        const KR = tR * uR;
        return {
          key: nR(tR),
          hooks: {
            vertex: LR(JR[KR]),
            surface: LR(JR[KR + 1]),
            light: LR(JR[KR + 2])
          },
          moduleCode: GR[tR],
          sceneDepth: 0 !== (RR & ZR),
          sunShadow: 0 !== (RR & iR),
          airShadow: 0 !== (RR & fR),
          movesVertices: 0 !== (RR & qR),
          discards: 0 !== (RR & VR),
          reads: {
            vertex: WR(yR[2 * tR]),
            fragment: WR(yR[2 * tR + 1])
          }
        }
      }))
    }
  },
  42342: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => rR,
      G: () => eR,
      b: () => tR,
      e: () => yR,
      i: () => wR,
      j: () => VR,
      k: () => LR,
      n: () => uR,
      o: () => qR,
      r: () => iR,
      v: () => ZR,
      y: () => aR
    });
    const yR = 3,
      tR = 0,
      uR = 1,
      ZR = 2,
      qR = {
        uniform: 3,
        Rr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      iR = 10,
      fR = "BloxdPackInputs",
      VR = "bloxdPackInputs",
      KR = [{
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
      wR = 80;

    function rR() {
      const RR = KR.map((RR => {
        let {
          name: JR,
          type: GR
        } = RR;
        return `    ${JR}: ${GR},\n`
      })).join("");
      return `struct ${fR} {\n${RR}}\n@group(${yR}) @binding(${tR}) var<uniform> ${VR}: ${fR};\n`
    }

    function eR(RR, JR) {
      const GR = new DataView(RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, wR),
        [yR, tR, uR, ZR, qR, iR] = KR;
      GR.setFloat32(yR.offset, JR.seconds, !0), GR.setUint32(tR.offset, JR.lit ? 1 : 0, !0);
      for (let fR = 0; fR < 3; fR++) GR.setInt32(uR.offset + 4 * fR, JR.renderOffset[fR], !0), GR.setFloat32(ZR.offset + 4 * fR, JR.AJR[fR], !0), GR.setFloat32(qR.offset + 4 * fR, JR.eyePosition[fR], !0), GR.setFloat32(iR.offset + 4 * fR, JR.shadowDirection[fR], !0)
    }

    function aR(RR) {
      const JR = new Uint32Array(Math.max(1, RR.length));
      return RR.forEach(((RR, GR) => {
        let {
          id: yR,
          rotation: tR
        } = RR;
        JR[GR] = 65535 & yR | (3 & tR) << 16
      })), JR
    }
    const LR = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7786: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      e: () => ZR,
      i: () => qR,
      l: () => tR,
      n: () => uR
    });
    const yR = ["terrain", "liquid", "model"];

    function tR() {
      const RR = [];
      for (const JR of [!1, !0])
        for (const GR of yR) RR.push({
          strict: JR,
          program: GR
        });
      return RR
    }

    function uR(RR) {
      return `${RR.strict?"strict":"allow"}.${RR.program}`
    }

    function ZR(RR) {
      return !RR.hooks.vertex && !RR.hooks.surface && !RR.hooks.light
    }

    function qR(RR, JR) {
      return "off" !== JR && (null === RR || RR.some((RR => RR.key.strict === ("strict" === JR) && !ZR(RR))))
    }
  },
  44983: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      SHADER_PACK_INPUTS_BINDING: () => uR.b,
      SHADER_PACK_INPUTS_GROUP: () => uR.e,
      SHADER_PACK_INPUTS_SIZE: () => uR.i,
      SHADER_PACK_INPUTS_VAR: () => uR.j,
      SHADER_PACK_MODES: () => uR.k,
      SHADER_PACK_PROGRAMS: () => yR.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => uR.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => uR.o,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => uR.r,
      SHADER_PACK_TEXTURES_BINDING: () => uR.v,
      encodeTextureLayers: () => uR.y,
      flattenVariants: () => tR.d,
      isVariantOff: () => yR.e,
      packRunsIn: () => yR.i,
      shaderPackInputsWgsl: () => uR.C,
      shaderPackVariantKeys: () => yR.l,
      variantKeyId: () => yR.n,
      writeShaderPackInputs: () => uR.G
    });
    var yR = GR(7786),
      tR = GR(7777),
      uR = GR(42342)
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);