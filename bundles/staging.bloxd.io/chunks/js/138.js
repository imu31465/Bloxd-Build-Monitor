export const id = 138;
export const ids = [138];
export const modules = {
  6479: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Yk,
      g: () => Lk,
      j: () => pk,
      n: () => lk
    });
    var Dk = ik(6484);
    const fk = 6,
      Sk = 3,
      bk = 1,
      rk = 2,
      Pk = 4,
      mk = 8,
      Mk = 16,
      Kk = 32,
      xk = 64,
      nk = 128,
      Uk = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Hk(kk) {
      if (!kk) return 0;
      const ek = Uk.indexOf(kk);
      if (ek <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return ek
    }

    function wk(kk) {
      if (0 === kk) return null;
      const ek = Uk[kk];
      if (void 0 === ek) throw new Error(`${kk} is not a shader pack hook function id`);
      return ek
    }

    function lk(kk) {
      const ek = Dk.c.length;
      return {
        strict: kk >= ek,
        program: Dk.c[kk % ek]
      }
    }

    function pk(kk) {
      return Number(kk.strict) * Dk.c.length + Dk.c.indexOf(kk.program)
    }

    function yk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function Yk(kk) {
      const ek = {
        variantFlags: new Uint8Array(fk),
        hooks: new Uint8Array(fk * Sk),
        moduleCodes: Array(fk).fill(""),
        reads: Array(2 * fk).fill("")
      };
      for (const ik of kk) {
        const kk = pk(ik.key),
          Dk = (kk, ek) => null === ik.hooks.surface || ik.reads.fragment.includes(kk) ? 0 : ek;
        ek.variantFlags[kk] = (ik.sceneDepth ? bk : 0) | (ik.movesVertices ? rk : 0) | (ik.sunShadow ? Pk : 0) | (ik.airShadow ? mk : 0) | (ik.discards ? Mk : 0) | Dk("localPosition", Kk) | Dk("enchantSpeed", xk) | Dk("enchantTier", nk), ek.hooks[kk * Sk] = Hk(ik.hooks.vertex), ek.hooks[kk * Sk + 1] = Hk(ik.hooks.surface), ek.hooks[kk * Sk + 2] = Hk(ik.hooks.light), ek.moduleCodes[kk] = ik.moduleCode, ek.reads[2 * kk] = ik.reads.vertex.join(" "), ek.reads[2 * kk + 1] = ik.reads.fragment.join(" ")
      }
      return ek
    }

    function Lk(kk) {
      const {
        hooks: ek,
        moduleCodes: ik,
        reads: Dk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, fk) => {
        const Kk = fk * Sk;
        return {
          key: lk(fk),
          hooks: {
            vertex: wk(ek[Kk]),
            surface: wk(ek[Kk + 1]),
            light: wk(ek[Kk + 2])
          },
          moduleCode: ik[fk],
          sceneDepth: 0 !== (kk & bk),
          sunShadow: 0 !== (kk & Pk),
          airShadow: 0 !== (kk & mk),
          movesVertices: 0 !== (kk & rk),
          discards: 0 !== (kk & Mk),
          reads: {
            vertex: yk(Dk[2 * fk]),
            fragment: yk(Dk[2 * fk + 1])
          }
        }
      }))
    }
  },
  40283: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => nk,
      C: () => Uk,
      e: () => fk,
      g: () => Dk,
      h: () => xk,
      i: () => Mk,
      j: () => wk,
      n: () => Sk,
      o: () => rk,
      s: () => Pk,
      w: () => bk,
      y: () => Hk
    });
    const Dk = 3,
      fk = 0,
      Sk = 1,
      bk = 2,
      rk = {
        uniform: 3,
        gx: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Pk = 10,
      mk = "BloxdPackInputs",
      Mk = "bloxdPackInputs",
      Kk = [{
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
      xk = 80;

    function nk() {
      const kk = Kk.map((kk => {
        let {
          name: ek,
          type: ik
        } = kk;
        return `    ${ek}: ${ik},\n`
      })).join("");
      return `struct ${mk} {\n${kk}}\n@group(${Dk}) @binding(${fk}) var<uniform> ${Mk}: ${mk};\n`
    }

    function Uk(kk, ek) {
      const ik = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xk),
        [Dk, fk, Sk, bk, rk, Pk] = Kk;
      ik.setFloat32(Dk.offset, ek.seconds, !0), ik.setUint32(fk.offset, ek.lit ? 1 : 0, !0);
      for (let mk = 0; mk < 3; mk++) ik.setInt32(Sk.offset + 4 * mk, ek.renderOffset[mk], !0), ik.setFloat32(bk.offset + 4 * mk, ek.Z5[mk], !0), ik.setFloat32(rk.offset + 4 * mk, ek.eyePosition[mk], !0), ik.setFloat32(Pk.offset + 4 * mk, ek.shadowDirection[mk], !0)
    }

    function Hk(kk) {
      const ek = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, ik) => {
        let {
          id: Dk,
          rotation: fk
        } = kk;
        ek[ik] = 65535 & Dk | (3 & fk) << 16
      })), ek
    }
    const wk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6484: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      f: () => bk,
      j: () => rk,
      k: () => fk,
      m: () => Sk
    });
    const Dk = ["terrain", "liquid", "model"];

    function fk() {
      const kk = [];
      for (const ek of [!1, !0])
        for (const ik of Dk) kk.push({
          strict: ek,
          program: ik
        });
      return kk
    }

    function Sk(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function bk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function rk(kk, ek) {
      return "off" !== ek && (null === kk || kk.some((kk => kk.key.strict === ("strict" === ek) && !bk(kk))))
    }
  },
  40848: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      SHADER_PACK_INPUTS_BINDING: () => Sk.e,
      SHADER_PACK_INPUTS_GROUP: () => Sk.g,
      SHADER_PACK_INPUTS_SIZE: () => Sk.h,
      SHADER_PACK_INPUTS_VAR: () => Sk.i,
      SHADER_PACK_MODES: () => Sk.j,
      SHADER_PACK_PROGRAMS: () => Dk.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Sk.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Sk.o,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Sk.s,
      SHADER_PACK_TEXTURES_BINDING: () => Sk.w,
      encodeTextureLayers: () => Sk.y,
      flattenVariants: () => fk.c,
      isVariantOff: () => Dk.f,
      packRunsIn: () => Dk.j,
      shaderPackInputsWgsl: () => Sk.A,
      shaderPackVariantKeys: () => Dk.k,
      variantKeyId: () => Dk.m,
      writeShaderPackInputs: () => Sk.C
    });
    var Dk = ik(6484),
      fk = ik(6479),
      Sk = ik(40283)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);