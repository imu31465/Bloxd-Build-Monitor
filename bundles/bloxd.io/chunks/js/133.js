export const id = 133;
export const ids = [133];
export const modules = {
  6309: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Vb,
      c: () => Lb,
      d: () => Cb,
      e: () => eb
    });
    var kb = sb(6312);
    const Wb = 6,
      ab = 3,
      Tb = 1,
      Ub = 2,
      Ib = 4,
      Hb = 8,
      fb = 16,
      Mb = 32,
      Xb = 64,
      nb = 128,
      mb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function lb(bb) {
      if (!bb) return 0;
      const cb = mb.indexOf(bb);
      if (cb <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return cb
    }

    function Qb(bb) {
      if (0 === bb) return null;
      const cb = mb[bb];
      if (void 0 === cb) throw new Error(`${bb} is not a shader pack hook function id`);
      return cb
    }

    function eb(bb) {
      const cb = kb.b.length;
      return {
        strict: bb >= cb,
        program: kb.b[bb % cb]
      }
    }

    function Cb(bb) {
      return Number(bb.strict) * kb.b.length + kb.b.indexOf(bb.program)
    }

    function Nb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function Vb(bb) {
      const cb = {
        variantFlags: new Uint8Array(Wb),
        hooks: new Uint8Array(Wb * ab),
        moduleCodes: Array(Wb).fill(""),
        reads: Array(2 * Wb).fill("")
      };
      for (const sb of bb) {
        const bb = Cb(sb.key),
          kb = (bb, cb) => null === sb.hooks.surface || sb.reads.fragment.includes(bb) ? 0 : cb;
        cb.variantFlags[bb] = (sb.sceneDepth ? Tb : 0) | (sb.movesVertices ? Ub : 0) | (sb.sunShadow ? Ib : 0) | (sb.airShadow ? Hb : 0) | (sb.discards ? fb : 0) | kb("localPosition", Mb) | kb("enchantSpeed", Xb) | kb("enchantTier", nb), cb.hooks[bb * ab] = lb(sb.hooks.vertex), cb.hooks[bb * ab + 1] = lb(sb.hooks.surface), cb.hooks[bb * ab + 2] = lb(sb.hooks.light), cb.moduleCodes[bb] = sb.moduleCode, cb.reads[2 * bb] = sb.reads.vertex.join(" "), cb.reads[2 * bb + 1] = sb.reads.fragment.join(" ")
      }
      return cb
    }

    function Lb(bb) {
      const {
        hooks: cb,
        moduleCodes: sb,
        reads: kb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Wb) => {
        const Mb = Wb * ab;
        return {
          key: eb(Wb),
          hooks: {
            vertex: Qb(cb[Mb]),
            surface: Qb(cb[Mb + 1]),
            light: Qb(cb[Mb + 2])
          },
          moduleCode: sb[Wb],
          sceneDepth: 0 !== (bb & Tb),
          sunShadow: 0 !== (bb & Ib),
          airShadow: 0 !== (bb & Hb),
          movesVertices: 0 !== (bb & Ub),
          discards: 0 !== (bb & fb),
          reads: {
            vertex: Nb(kb[2 * Wb]),
            fragment: Nb(kb[2 * Wb + 1])
          }
        }
      }))
    }
  },
  40308: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => Tb,
      C: () => lb,
      G: () => nb,
      H: () => mb,
      b: () => Wb,
      d: () => kb,
      h: () => Xb,
      i: () => fb,
      l: () => Qb,
      p: () => ab,
      s: () => Ub,
      w: () => Ib
    });
    const kb = 3,
      Wb = 0,
      ab = 1,
      Tb = 2,
      Ub = {
        uniform: 3,
        zX: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Ib = 10,
      Hb = "BloxdPackInputs",
      fb = "bloxdPackInputs",
      Mb = [{
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
      Xb = 80;

    function nb() {
      const bb = Mb.map((bb => {
        let {
          name: cb,
          type: sb
        } = bb;
        return `    ${cb}: ${sb},\n`
      })).join("");
      return `struct ${Hb} {\n${bb}}\n@group(${kb}) @binding(${Wb}) var<uniform> ${fb}: ${Hb};\n`
    }

    function mb(bb, cb) {
      const sb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Xb),
        [kb, Wb, ab, Tb, Ub, Ib] = Mb;
      sb.setFloat32(kb.offset, cb.seconds, !0), sb.setUint32(Wb.offset, cb.lit ? 1 : 0, !0);
      for (let Hb = 0; Hb < 3; Hb++) sb.setInt32(ab.offset + 4 * Hb, cb.renderOffset[Hb], !0), sb.setFloat32(Tb.offset + 4 * Hb, cb.J9[Hb], !0), sb.setFloat32(Ub.offset + 4 * Hb, cb.eyePosition[Hb], !0), sb.setFloat32(Ib.offset + 4 * Hb, cb.shadowDirection[Hb], !0)
    }

    function lb(bb) {
      const cb = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, sb) => {
        let {
          id: kb,
          rotation: Wb
        } = bb;
        cb[sb] = 65535 & kb | (3 & Wb) << 16
      })), cb
    }
    const Qb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6312: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Tb,
      f: () => Ub,
      g: () => Wb,
      k: () => ab
    });
    const kb = ["terrain", "liquid", "model"];

    function Wb() {
      const bb = [];
      for (const cb of [!1, !0])
        for (const sb of kb) bb.push({
          strict: cb,
          program: sb
        });
      return bb
    }

    function ab(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Tb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Ub(bb, cb) {
      return "off" !== cb && (null === bb || bb.some((bb => bb.key.strict === ("strict" === cb) && !Tb(bb))))
    }
  },
  40704: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      SHADER_PACK_INPUTS_BINDING: () => ab.b,
      SHADER_PACK_INPUTS_GROUP: () => ab.d,
      SHADER_PACK_INPUTS_SIZE: () => ab.h,
      SHADER_PACK_INPUTS_VAR: () => ab.i,
      SHADER_PACK_MODES: () => ab.l,
      SHADER_PACK_PROGRAMS: () => kb.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => ab.p,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => ab.s,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => ab.w,
      SHADER_PACK_TEXTURES_BINDING: () => ab.A,
      encodeTextureLayers: () => ab.C,
      flattenVariants: () => Wb.b,
      isVariantOff: () => kb.e,
      packRunsIn: () => kb.f,
      shaderPackInputsWgsl: () => ab.G,
      shaderPackVariantKeys: () => kb.g,
      variantKeyId: () => kb.k,
      writeShaderPackInputs: () => ab.H
    });
    var kb = sb(6312),
      Wb = sb(6309),
      ab = sb(40308)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);