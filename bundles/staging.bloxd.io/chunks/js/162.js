export const id = 162;
export const ids = [162];
export const modules = {
  7821: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => hb,
      i: () => zb,
      l: () => sb,
      n: () => Bb
    });
    var eb = Mb(7825);
    const Hb = 6,
      pb = 3,
      Vb = 1,
      gb = 2,
      lb = 4,
      Lb = 8,
      Ib = 16,
      Ob = 32,
      Ub = 64,
      tb = 128,
      Cb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Eb(bb) {
      if (!bb) return 0;
      const wb = Cb.indexOf(bb);
      if (wb <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return wb
    }

    function Fb(bb) {
      if (0 === bb) return null;
      const wb = Cb[bb];
      if (void 0 === wb) throw new Error(`${bb} is not a shader pack hook function id`);
      return wb
    }

    function Bb(bb) {
      const wb = eb.d.length;
      return {
        strict: bb >= wb,
        program: eb.d[bb % wb]
      }
    }

    function sb(bb) {
      return Number(bb.strict) * eb.d.length + eb.d.indexOf(bb.program)
    }

    function mb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function hb(bb) {
      const wb = {
        variantFlags: new Uint8Array(Hb),
        hooks: new Uint8Array(Hb * pb),
        moduleCodes: Array(Hb).fill(""),
        reads: Array(2 * Hb).fill("")
      };
      for (const Mb of bb) {
        const bb = sb(Mb.key),
          eb = (bb, wb) => null === Mb.hooks.surface || Mb.reads.fragment.includes(bb) ? 0 : wb;
        wb.variantFlags[bb] = (Mb.sceneDepth ? Vb : 0) | (Mb.movesVertices ? gb : 0) | (Mb.sunShadow ? lb : 0) | (Mb.airShadow ? Lb : 0) | (Mb.discards ? Ib : 0) | eb("localPosition", Ob) | eb("enchantSpeed", Ub) | eb("enchantTier", tb), wb.hooks[bb * pb] = Eb(Mb.hooks.vertex), wb.hooks[bb * pb + 1] = Eb(Mb.hooks.surface), wb.hooks[bb * pb + 2] = Eb(Mb.hooks.light), wb.moduleCodes[bb] = Mb.moduleCode, wb.reads[2 * bb] = Mb.reads.vertex.join(" "), wb.reads[2 * bb + 1] = Mb.reads.fragment.join(" ")
      }
      return wb
    }

    function zb(bb) {
      const {
        hooks: wb,
        moduleCodes: Mb,
        reads: eb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Hb) => {
        const Ob = Hb * pb;
        return {
          key: Bb(Hb),
          hooks: {
            vertex: Fb(wb[Ob]),
            surface: Fb(wb[Ob + 1]),
            light: Fb(wb[Ob + 2])
          },
          moduleCode: Mb[Hb],
          sceneDepth: 0 !== (bb & Vb),
          sunShadow: 0 !== (bb & lb),
          airShadow: 0 !== (bb & Lb),
          movesVertices: 0 !== (bb & gb),
          discards: 0 !== (bb & Ib),
          reads: {
            vertex: mb(eb[2 * Hb]),
            fragment: mb(eb[2 * Hb + 1])
          }
        }
      }))
    }
  },
  42488: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Eb,
      C: () => tb,
      E: () => Cb,
      c: () => Hb,
      g: () => eb,
      j: () => Ub,
      l: () => Ib,
      p: () => Fb,
      r: () => pb,
      u: () => gb,
      v: () => lb,
      x: () => Vb
    });
    const eb = 3,
      Hb = 0,
      pb = 1,
      Vb = 2,
      gb = {
        uniform: 3,
        GU: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      lb = 10,
      Lb = "BloxdPackInputs",
      Ib = "bloxdPackInputs",
      Ob = [{
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
      Ub = 80;

    function tb() {
      const bb = Ob.map((bb => {
        let {
          name: wb,
          type: Mb
        } = bb;
        return `    ${wb}: ${Mb},\n`
      })).join("");
      return `struct ${Lb} {\n${bb}}\n@group(${eb}) @binding(${Hb}) var<uniform> ${Ib}: ${Lb};\n`
    }

    function Cb(bb, wb) {
      const Mb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Ub),
        [eb, Hb, pb, Vb, gb, lb] = Ob;
      Mb.setFloat32(eb.offset, wb.seconds, !0), Mb.setUint32(Hb.offset, wb.lit ? 1 : 0, !0);
      for (let Lb = 0; Lb < 3; Lb++) Mb.setInt32(pb.offset + 4 * Lb, wb.renderOffset[Lb], !0), Mb.setFloat32(Vb.offset + 4 * Lb, wb.jwb[Lb], !0), Mb.setFloat32(gb.offset + 4 * Lb, wb.eyePosition[Lb], !0), Mb.setFloat32(lb.offset + 4 * Lb, wb.shadowDirection[Lb], !0)
    }

    function Eb(bb) {
      const wb = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, Mb) => {
        let {
          id: eb,
          rotation: Hb
        } = bb;
        wb[Mb] = 65535 & eb | (3 & Hb) << 16
      })), wb
    }
    const Fb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7825: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      f: () => Vb,
      i: () => gb,
      l: () => Hb,
      o: () => pb
    });
    const eb = ["terrain", "liquid", "model"];

    function Hb() {
      const bb = [];
      for (const wb of [!1, !0])
        for (const Mb of eb) bb.push({
          strict: wb,
          program: Mb
        });
      return bb
    }

    function pb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Vb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function gb(bb, wb) {
      return "off" !== wb && (null === bb || bb.some((bb => bb.key.strict === ("strict" === wb) && !Vb(bb))))
    }
  },
  45136: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      SHADER_PACK_INPUTS_BINDING: () => pb.c,
      SHADER_PACK_INPUTS_GROUP: () => pb.g,
      SHADER_PACK_INPUTS_SIZE: () => pb.j,
      SHADER_PACK_INPUTS_VAR: () => pb.l,
      SHADER_PACK_MODES: () => pb.p,
      SHADER_PACK_PROGRAMS: () => eb.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => pb.r,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => pb.u,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => pb.v,
      SHADER_PACK_TEXTURES_BINDING: () => pb.x,
      encodeTextureLayers: () => pb.B,
      flattenVariants: () => Hb.e,
      isVariantOff: () => eb.f,
      packRunsIn: () => eb.i,
      shaderPackInputsWgsl: () => pb.C,
      shaderPackVariantKeys: () => eb.l,
      variantKeyId: () => eb.o,
      writeShaderPackInputs: () => pb.E
    });
    var eb = Mb(7825),
      Hb = Mb(7821),
      pb = Mb(42488)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);