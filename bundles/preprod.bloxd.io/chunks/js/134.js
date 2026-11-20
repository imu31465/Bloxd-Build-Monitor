export const id = 134;
export const ids = [134];
export const modules = {
  6517: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Pq,
      f: () => Qq,
      j: () => Hq,
      l: () => jq
    });
    var Yq = gq(6521);
    const lq = 6,
      Oq = 3,
      mq = 1,
      xq = 2,
      Aq = 4,
      cq = 8,
      uq = 16,
      Bq = 32,
      Wq = 64,
      Nq = 128,
      aq = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Vq(qq) {
      if (!qq) return 0;
      const Eq = aq.indexOf(qq);
      if (Eq <= 0) throw new Error(`"${qq}" is not a shader pack hook function`);
      return Eq
    }

    function dq(qq) {
      if (0 === qq) return null;
      const Eq = aq[qq];
      if (void 0 === Eq) throw new Error(`${qq} is not a shader pack hook function id`);
      return Eq
    }

    function jq(qq) {
      const Eq = Yq.b.length;
      return {
        strict: qq >= Eq,
        program: Yq.b[qq % Eq]
      }
    }

    function Hq(qq) {
      return Number(qq.strict) * Yq.b.length + Yq.b.indexOf(qq.program)
    }

    function oq(qq) {
      return "" === qq ? [] : qq.split(" ")
    }

    function Pq(qq) {
      const Eq = {
        variantFlags: new Uint8Array(lq),
        hooks: new Uint8Array(lq * Oq),
        moduleCodes: Array(lq).fill(""),
        reads: Array(2 * lq).fill("")
      };
      for (const gq of qq) {
        const qq = Hq(gq.key),
          Yq = (qq, Eq) => null === gq.hooks.surface || gq.reads.fragment.includes(qq) ? 0 : Eq;
        Eq.variantFlags[qq] = (gq.sceneDepth ? mq : 0) | (gq.movesVertices ? xq : 0) | (gq.sunShadow ? Aq : 0) | (gq.airShadow ? cq : 0) | (gq.discards ? uq : 0) | Yq("localPosition", Bq) | Yq("enchantSpeed", Wq) | Yq("enchantTier", Nq), Eq.hooks[qq * Oq] = Vq(gq.hooks.vertex), Eq.hooks[qq * Oq + 1] = Vq(gq.hooks.surface), Eq.hooks[qq * Oq + 2] = Vq(gq.hooks.light), Eq.moduleCodes[qq] = gq.moduleCode, Eq.reads[2 * qq] = gq.reads.vertex.join(" "), Eq.reads[2 * qq + 1] = gq.reads.fragment.join(" ")
      }
      return Eq
    }

    function Qq(qq) {
      const {
        hooks: Eq,
        moduleCodes: gq,
        reads: Yq
      } = qq;
      return Array.from(qq.variantFlags, ((qq, lq) => {
        const Bq = lq * Oq;
        return {
          key: jq(lq),
          hooks: {
            vertex: dq(Eq[Bq]),
            surface: dq(Eq[Bq + 1]),
            light: dq(Eq[Bq + 2])
          },
          moduleCode: gq[lq],
          sceneDepth: 0 !== (qq & mq),
          sunShadow: 0 !== (qq & Aq),
          airShadow: 0 !== (qq & cq),
          movesVertices: 0 !== (qq & xq),
          discards: 0 !== (qq & uq),
          reads: {
            vertex: oq(Yq[2 * lq]),
            fragment: oq(Yq[2 * lq + 1])
          }
        }
      }))
    }
  },
  40622: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => Nq,
      D: () => aq,
      b: () => lq,
      c: () => Yq,
      e: () => Wq,
      g: () => uq,
      j: () => dq,
      l: () => Oq,
      n: () => xq,
      r: () => Aq,
      v: () => mq,
      x: () => Vq
    });
    const Yq = 3,
      lq = 0,
      Oq = 1,
      mq = 2,
      xq = {
        uniform: 3,
        dW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Aq = 10,
      cq = "BloxdPackInputs",
      uq = "bloxdPackInputs",
      Bq = [{
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
      Wq = 80;

    function Nq() {
      const qq = Bq.map((qq => {
        let {
          name: Eq,
          type: gq
        } = qq;
        return `    ${Eq}: ${gq},\n`
      })).join("");
      return `struct ${cq} {\n${qq}}\n@group(${Yq}) @binding(${lq}) var<uniform> ${uq}: ${cq};\n`
    }

    function aq(qq, Eq) {
      const gq = new DataView(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wq),
        [Yq, lq, Oq, mq, xq, Aq] = Bq;
      gq.setFloat32(Yq.offset, Eq.seconds, !0), gq.setUint32(lq.offset, Eq.lit ? 1 : 0, !0);
      for (let cq = 0; cq < 3; cq++) gq.setInt32(Oq.offset + 4 * cq, Eq.renderOffset[cq], !0), gq.setFloat32(mq.offset + 4 * cq, Eq.vqq[cq], !0), gq.setFloat32(xq.offset + 4 * cq, Eq.eyePosition[cq], !0), gq.setFloat32(Aq.offset + 4 * cq, Eq.shadowDirection[cq], !0)
    }

    function Vq(qq) {
      const Eq = new Uint32Array(Math.max(1, qq.length));
      return qq.forEach(((qq, gq) => {
        let {
          id: Yq,
          rotation: lq
        } = qq;
        Eq[gq] = 65535 & Yq | (3 & lq) << 16
      })), Eq
    }
    const dq = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6521: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      d: () => mq,
      g: () => xq,
      j: () => lq,
      m: () => Oq
    });
    const Yq = ["terrain", "liquid", "model"];

    function lq() {
      const qq = [];
      for (const Eq of [!1, !0])
        for (const gq of Yq) qq.push({
          strict: Eq,
          program: gq
        });
      return qq
    }

    function Oq(qq) {
      return `${qq.strict?"strict":"allow"}.${qq.program}`
    }

    function mq(qq) {
      return !qq.hooks.vertex && !qq.hooks.surface && !qq.hooks.light
    }

    function xq(qq, Eq) {
      return "off" !== Eq && (null === qq || qq.some((qq => qq.key.strict === ("strict" === Eq) && !mq(qq))))
    }
  },
  41004: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      SHADER_PACK_INPUTS_BINDING: () => Oq.b,
      SHADER_PACK_INPUTS_GROUP: () => Oq.c,
      SHADER_PACK_INPUTS_SIZE: () => Oq.e,
      SHADER_PACK_INPUTS_VAR: () => Oq.g,
      SHADER_PACK_MODES: () => Oq.j,
      SHADER_PACK_PROGRAMS: () => Yq.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Oq.l,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Oq.n,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Oq.r,
      SHADER_PACK_TEXTURES_BINDING: () => Oq.v,
      encodeTextureLayers: () => Oq.x,
      flattenVariants: () => lq.b,
      isVariantOff: () => Yq.d,
      packRunsIn: () => Yq.g,
      shaderPackInputsWgsl: () => Oq.B,
      shaderPackVariantKeys: () => Yq.j,
      variantKeyId: () => Yq.m,
      writeShaderPackInputs: () => Oq.D
    });
    var Yq = gq(6521),
      lq = gq(6517),
      Oq = gq(40622)
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);