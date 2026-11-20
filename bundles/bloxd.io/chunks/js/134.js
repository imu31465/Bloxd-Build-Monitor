export const id = 134;
export const ids = [134];
export const modules = {
  6367: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Wb,
      h: () => Cb,
      l: () => lb,
      m: () => Ab
    });
    var Bb = hb(6375);
    const Ob = 6,
      Gb = 3,
      Ub = 1,
      Lb = 2,
      Yb = 4,
      Sb = 8,
      ab = 16,
      Hb = 32,
      wb = 64,
      Zb = 128,
      Xb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function pb(bb) {
      if (!bb) return 0;
      const ub = Xb.indexOf(bb);
      if (ub <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return ub
    }

    function ob(bb) {
      if (0 === bb) return null;
      const ub = Xb[bb];
      if (void 0 === ub) throw new Error(`${bb} is not a shader pack hook function id`);
      return ub
    }

    function Ab(bb) {
      const ub = Bb.b.length;
      return {
        strict: bb >= ub,
        program: Bb.b[bb % ub]
      }
    }

    function lb(bb) {
      return Number(bb.strict) * Bb.b.length + Bb.b.indexOf(bb.program)
    }

    function Kb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function Wb(bb) {
      const ub = {
        variantFlags: new Uint8Array(Ob),
        hooks: new Uint8Array(Ob * Gb),
        moduleCodes: Array(Ob).fill(""),
        reads: Array(2 * Ob).fill("")
      };
      for (const hb of bb) {
        const bb = lb(hb.key),
          Bb = (bb, ub) => null === hb.hooks.surface || hb.reads.fragment.includes(bb) ? 0 : ub;
        ub.variantFlags[bb] = (hb.sceneDepth ? Ub : 0) | (hb.movesVertices ? Lb : 0) | (hb.sunShadow ? Yb : 0) | (hb.airShadow ? Sb : 0) | (hb.discards ? ab : 0) | Bb("localPosition", Hb) | Bb("enchantSpeed", wb) | Bb("enchantTier", Zb), ub.hooks[bb * Gb] = pb(hb.hooks.vertex), ub.hooks[bb * Gb + 1] = pb(hb.hooks.surface), ub.hooks[bb * Gb + 2] = pb(hb.hooks.light), ub.moduleCodes[bb] = hb.moduleCode, ub.reads[2 * bb] = hb.reads.vertex.join(" "), ub.reads[2 * bb + 1] = hb.reads.fragment.join(" ")
      }
      return ub
    }

    function Cb(bb) {
      const {
        hooks: ub,
        moduleCodes: hb,
        reads: Bb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Ob) => {
        const Hb = Ob * Gb;
        return {
          key: Ab(Ob),
          hooks: {
            vertex: ob(ub[Hb]),
            surface: ob(ub[Hb + 1]),
            light: ob(ub[Hb + 2])
          },
          moduleCode: hb[Ob],
          sceneDepth: 0 !== (bb & Ub),
          sunShadow: 0 !== (bb & Yb),
          airShadow: 0 !== (bb & Sb),
          movesVertices: 0 !== (bb & Lb),
          discards: 0 !== (bb & ab),
          reads: {
            vertex: Kb(Bb[2 * Ob]),
            fragment: Kb(Bb[2 * Ob + 1])
          }
        }
      }))
    }
  },
  40318: (bb, ub, hb) => {
    hb.d(ub, {
      D: () => Zb,
      E: () => Xb,
      b: () => Ob,
      d: () => Bb,
      e: () => wb,
      h: () => ab,
      i: () => ob,
      m: () => Gb,
      p: () => Lb,
      t: () => Yb,
      v: () => Ub,
      z: () => pb
    });
    const Bb = 3,
      Ob = 0,
      Gb = 1,
      Ub = 2,
      Lb = {
        uniform: 3,
        Sw: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Yb = 10,
      Sb = "BloxdPackInputs",
      ab = "bloxdPackInputs",
      Hb = [{
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
      wb = 80;

    function Zb() {
      const bb = Hb.map((bb => {
        let {
          name: ub,
          type: hb
        } = bb;
        return `    ${ub}: ${hb},\n`
      })).join("");
      return `struct ${Sb} {\n${bb}}\n@group(${Bb}) @binding(${Ob}) var<uniform> ${ab}: ${Sb};\n`
    }

    function Xb(bb, ub) {
      const hb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, wb),
        [Bb, Ob, Gb, Ub, Lb, Yb] = Hb;
      hb.setFloat32(Bb.offset, ub.seconds, !0), hb.setUint32(Ob.offset, ub.lit ? 1 : 0, !0);
      for (let Sb = 0; Sb < 3; Sb++) hb.setInt32(Gb.offset + 4 * Sb, ub.renderOffset[Sb], !0), hb.setFloat32(Ub.offset + 4 * Sb, ub.Q_[Sb], !0), hb.setFloat32(Lb.offset + 4 * Sb, ub.eyePosition[Sb], !0), hb.setFloat32(Yb.offset + 4 * Sb, ub.shadowDirection[Sb], !0)
    }

    function pb(bb) {
      const ub = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, hb) => {
        let {
          id: Bb,
          rotation: Ob
        } = bb;
        ub[hb] = 65535 & Bb | (3 & Ob) << 16
      })), ub
    }
    const ob = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6375: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      f: () => Ub,
      i: () => Lb,
      k: () => Ob,
      o: () => Gb
    });
    const Bb = ["terrain", "liquid", "model"];

    function Ob() {
      const bb = [];
      for (const ub of [!1, !0])
        for (const hb of Bb) bb.push({
          strict: ub,
          program: hb
        });
      return bb
    }

    function Gb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Ub(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Lb(bb, ub) {
      return "off" !== ub && (null === bb || bb.some((bb => bb.key.strict === ("strict" === ub) && !Ub(bb))))
    }
  },
  40728: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      SHADER_PACK_INPUTS_BINDING: () => Gb.b,
      SHADER_PACK_INPUTS_GROUP: () => Gb.d,
      SHADER_PACK_INPUTS_SIZE: () => Gb.e,
      SHADER_PACK_INPUTS_VAR: () => Gb.h,
      SHADER_PACK_MODES: () => Gb.i,
      SHADER_PACK_PROGRAMS: () => Bb.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Gb.m,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Gb.p,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Gb.t,
      SHADER_PACK_TEXTURES_BINDING: () => Gb.v,
      encodeTextureLayers: () => Gb.z,
      flattenVariants: () => Ob.d,
      isVariantOff: () => Bb.f,
      packRunsIn: () => Bb.i,
      shaderPackInputsWgsl: () => Gb.D,
      shaderPackVariantKeys: () => Bb.k,
      variantKeyId: () => Bb.o,
      writeShaderPackInputs: () => Gb.E
    });
    var Bb = hb(6375),
      Ob = hb(6367),
      Gb = hb(40318)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);