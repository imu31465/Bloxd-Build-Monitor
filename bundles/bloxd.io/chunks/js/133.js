export const id = 133;
export const ids = [133];
export const modules = {
  6271: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => zb,
      h: () => xb,
      l: () => Zb,
      n: () => yb
    });
    var Ab = Ub(6273);
    const Mb = 6,
      Tb = 3,
      Eb = 1,
      Yb = 2,
      Bb = 4,
      eb = 8,
      vb = 16,
      Lb = 32,
      Pb = 64,
      Xb = 128,
      jb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Rb(bb) {
      if (!bb) return 0;
      const ab = jb.indexOf(bb);
      if (ab <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return ab
    }

    function kb(bb) {
      if (0 === bb) return null;
      const ab = jb[bb];
      if (void 0 === ab) throw new Error(`${bb} is not a shader pack hook function id`);
      return ab
    }

    function yb(bb) {
      const ab = Ab.b.length;
      return {
        strict: bb >= ab,
        program: Ab.b[bb % ab]
      }
    }

    function Zb(bb) {
      return Number(bb.strict) * Ab.b.length + Ab.b.indexOf(bb.program)
    }

    function Db(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function zb(bb) {
      const ab = {
        variantFlags: new Uint8Array(Mb),
        hooks: new Uint8Array(Mb * Tb),
        moduleCodes: Array(Mb).fill(""),
        reads: Array(2 * Mb).fill("")
      };
      for (const Ub of bb) {
        const bb = Zb(Ub.key),
          Ab = (bb, ab) => null === Ub.hooks.surface || Ub.reads.fragment.includes(bb) ? 0 : ab;
        ab.variantFlags[bb] = (Ub.sceneDepth ? Eb : 0) | (Ub.movesVertices ? Yb : 0) | (Ub.sunShadow ? Bb : 0) | (Ub.airShadow ? eb : 0) | (Ub.discards ? vb : 0) | Ab("localPosition", Lb) | Ab("enchantSpeed", Pb) | Ab("enchantTier", Xb), ab.hooks[bb * Tb] = Rb(Ub.hooks.vertex), ab.hooks[bb * Tb + 1] = Rb(Ub.hooks.surface), ab.hooks[bb * Tb + 2] = Rb(Ub.hooks.light), ab.moduleCodes[bb] = Ub.moduleCode, ab.reads[2 * bb] = Ub.reads.vertex.join(" "), ab.reads[2 * bb + 1] = Ub.reads.fragment.join(" ")
      }
      return ab
    }

    function xb(bb) {
      const {
        hooks: ab,
        moduleCodes: Ub,
        reads: Ab
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Mb) => {
        const Lb = Mb * Tb;
        return {
          key: yb(Mb),
          hooks: {
            vertex: kb(ab[Lb]),
            surface: kb(ab[Lb + 1]),
            light: kb(ab[Lb + 2])
          },
          moduleCode: Ub[Mb],
          sceneDepth: 0 !== (bb & Eb),
          sunShadow: 0 !== (bb & Bb),
          airShadow: 0 !== (bb & eb),
          movesVertices: 0 !== (bb & Yb),
          discards: 0 !== (bb & vb),
          reads: {
            vertex: Db(Ab[2 * Mb]),
            fragment: Db(Ab[2 * Mb + 1])
          }
        }
      }))
    }
  },
  40003: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Ab,
      i: () => Pb,
      k: () => vb,
      l: () => kb,
      m: () => Tb,
      n: () => Yb,
      q: () => Bb,
      t: () => Eb,
      v: () => Rb,
      x: () => Xb,
      y: () => jb
    });
    const Ab = 3,
      Mb = 0,
      Tb = 1,
      Eb = 2,
      Yb = {
        uniform: 3,
        RP: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Bb = 10,
      eb = "BloxdPackInputs",
      vb = "bloxdPackInputs",
      Lb = [{
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
      Pb = 80;

    function Xb() {
      const bb = Lb.map((bb => {
        let {
          name: ab,
          type: Ub
        } = bb;
        return `    ${ab}: ${Ub},\n`
      })).join("");
      return `struct ${eb} {\n${bb}}\n@group(${Ab}) @binding(${Mb}) var<uniform> ${vb}: ${eb};\n`
    }

    function jb(bb, ab) {
      const Ub = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pb),
        [Ab, Mb, Tb, Eb, Yb, Bb] = Lb;
      Ub.setFloat32(Ab.offset, ab.seconds, !0), Ub.setUint32(Mb.offset, ab.lit ? 1 : 0, !0);
      for (let eb = 0; eb < 3; eb++) Ub.setInt32(Tb.offset + 4 * eb, ab.renderOffset[eb], !0), Ub.setFloat32(Eb.offset + 4 * eb, ab.I6[eb], !0), Ub.setFloat32(Yb.offset + 4 * eb, ab.eyePosition[eb], !0), Ub.setFloat32(Bb.offset + 4 * eb, ab.shadowDirection[eb], !0)
    }

    function Rb(bb) {
      const ab = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, Ub) => {
        let {
          id: Ab,
          rotation: Mb
        } = bb;
        ab[Ub] = 65535 & Ab | (3 & Mb) << 16
      })), ab
    }
    const kb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6273: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      f: () => Eb,
      i: () => Yb,
      l: () => Mb,
      m: () => Tb
    });
    const Ab = ["terrain", "liquid", "model"];

    function Mb() {
      const bb = [];
      for (const ab of [!1, !0])
        for (const Ub of Ab) bb.push({
          strict: ab,
          program: Ub
        });
      return bb
    }

    function Tb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Eb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Yb(bb, ab) {
      return "off" !== ab && (null === bb || bb.some((bb => bb.key.strict === ("strict" === ab) && !Eb(bb))))
    }
  },
  40379: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      SHADER_PACK_INPUTS_BINDING: () => Tb.d,
      SHADER_PACK_INPUTS_GROUP: () => Tb.g,
      SHADER_PACK_INPUTS_SIZE: () => Tb.i,
      SHADER_PACK_INPUTS_VAR: () => Tb.k,
      SHADER_PACK_MODES: () => Tb.l,
      SHADER_PACK_PROGRAMS: () => Ab.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Tb.m,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Tb.n,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Tb.q,
      SHADER_PACK_TEXTURES_BINDING: () => Tb.t,
      encodeTextureLayers: () => Tb.v,
      flattenVariants: () => Mb.d,
      isVariantOff: () => Ab.f,
      packRunsIn: () => Ab.i,
      shaderPackInputsWgsl: () => Tb.x,
      shaderPackVariantKeys: () => Ab.l,
      variantKeyId: () => Ab.m,
      writeShaderPackInputs: () => Tb.y
    });
    var Ab = Ub(6273),
      Mb = Ub(6271),
      Tb = Ub(40003)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);