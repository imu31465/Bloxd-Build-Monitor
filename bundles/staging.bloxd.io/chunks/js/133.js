export const id = 133;
export const ids = [133];
export const modules = {
  6343: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ik,
      e: () => Yk,
      f: () => Wk,
      g: () => mk
    });
    var Rk = Bk(6349);
    const tk = 6,
      ak = 3,
      Xk = 1,
      bk = 2,
      wk = 4,
      dk = 8,
      sk = 16,
      Vk = 32,
      Jk = 64,
      Ak = 128,
      ek = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function yk(kk) {
      if (!kk) return 0;
      const Fk = ek.indexOf(kk);
      if (Fk <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return Fk
    }

    function fk(kk) {
      if (0 === kk) return null;
      const Fk = ek[kk];
      if (void 0 === Fk) throw new Error(`${kk} is not a shader pack hook function id`);
      return Fk
    }

    function mk(kk) {
      const Fk = Rk.d.length;
      return {
        strict: kk >= Fk,
        program: Rk.d[kk % Fk]
      }
    }

    function Wk(kk) {
      return Number(kk.strict) * Rk.d.length + Rk.d.indexOf(kk.program)
    }

    function vk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function ik(kk) {
      const Fk = {
        variantFlags: new Uint8Array(tk),
        hooks: new Uint8Array(tk * ak),
        moduleCodes: Array(tk).fill(""),
        reads: Array(2 * tk).fill("")
      };
      for (const Bk of kk) {
        const kk = Wk(Bk.key),
          Rk = (kk, Fk) => null === Bk.hooks.surface || Bk.reads.fragment.includes(kk) ? 0 : Fk;
        Fk.variantFlags[kk] = (Bk.sceneDepth ? Xk : 0) | (Bk.movesVertices ? bk : 0) | (Bk.sunShadow ? wk : 0) | (Bk.airShadow ? dk : 0) | (Bk.discards ? sk : 0) | Rk("localPosition", Vk) | Rk("enchantSpeed", Jk) | Rk("enchantTier", Ak), Fk.hooks[kk * ak] = yk(Bk.hooks.vertex), Fk.hooks[kk * ak + 1] = yk(Bk.hooks.surface), Fk.hooks[kk * ak + 2] = yk(Bk.hooks.light), Fk.moduleCodes[kk] = Bk.moduleCode, Fk.reads[2 * kk] = Bk.reads.vertex.join(" "), Fk.reads[2 * kk + 1] = Bk.reads.fragment.join(" ")
      }
      return Fk
    }

    function Yk(kk) {
      const {
        hooks: Fk,
        moduleCodes: Bk,
        reads: Rk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, tk) => {
        const Vk = tk * ak;
        return {
          key: mk(tk),
          hooks: {
            vertex: fk(Fk[Vk]),
            surface: fk(Fk[Vk + 1]),
            light: fk(Fk[Vk + 2])
          },
          moduleCode: Bk[tk],
          sceneDepth: 0 !== (kk & Xk),
          sunShadow: 0 !== (kk & wk),
          airShadow: 0 !== (kk & dk),
          movesVertices: 0 !== (kk & bk),
          discards: 0 !== (kk & sk),
          reads: {
            vertex: vk(Rk[2 * tk]),
            fragment: vk(Rk[2 * tk + 1])
          }
        }
      }))
    }
  },
  40292: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      D: () => ek,
      e: () => tk,
      g: () => Rk,
      h: () => Jk,
      j: () => sk,
      m: () => fk,
      p: () => ak,
      r: () => bk,
      s: () => wk,
      u: () => Xk,
      v: () => yk,
      z: () => Ak
    });
    const Rk = 3,
      tk = 0,
      ak = 1,
      Xk = 2,
      bk = {
        uniform: 3,
        jJ: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      wk = 10,
      dk = "BloxdPackInputs",
      sk = "bloxdPackInputs",
      Vk = [{
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
      Jk = 80;

    function Ak() {
      const kk = Vk.map((kk => {
        let {
          name: Fk,
          type: Bk
        } = kk;
        return `    ${Fk}: ${Bk},\n`
      })).join("");
      return `struct ${dk} {\n${kk}}\n@group(${Rk}) @binding(${tk}) var<uniform> ${sk}: ${dk};\n`
    }

    function ek(kk, Fk) {
      const Bk = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Jk),
        [Rk, tk, ak, Xk, bk, wk] = Vk;
      Bk.setFloat32(Rk.offset, Fk.seconds, !0), Bk.setUint32(tk.offset, Fk.lit ? 1 : 0, !0);
      for (let dk = 0; dk < 3; dk++) Bk.setInt32(ak.offset + 4 * dk, Fk.renderOffset[dk], !0), Bk.setFloat32(Xk.offset + 4 * dk, Fk.w6[dk], !0), Bk.setFloat32(bk.offset + 4 * dk, Fk.eyePosition[dk], !0), Bk.setFloat32(wk.offset + 4 * dk, Fk.shadowDirection[dk], !0)
    }

    function yk(kk) {
      const Fk = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, Bk) => {
        let {
          id: Rk,
          rotation: tk
        } = kk;
        Fk[Bk] = 65535 & Rk | (3 & tk) << 16
      })), Fk
    }
    const fk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6349: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      g: () => Xk,
      h: () => bk,
      l: () => tk,
      m: () => ak
    });
    const Rk = ["terrain", "liquid", "model"];

    function tk() {
      const kk = [];
      for (const Fk of [!1, !0])
        for (const Bk of Rk) kk.push({
          strict: Fk,
          program: Bk
        });
      return kk
    }

    function ak(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function Xk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function bk(kk, Fk) {
      return "off" !== Fk && (null === kk || kk.some((kk => kk.key.strict === ("strict" === Fk) && !Xk(kk))))
    }
  },
  40714: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      SHADER_PACK_INPUTS_BINDING: () => ak.e,
      SHADER_PACK_INPUTS_GROUP: () => ak.g,
      SHADER_PACK_INPUTS_SIZE: () => ak.h,
      SHADER_PACK_INPUTS_VAR: () => ak.j,
      SHADER_PACK_MODES: () => ak.m,
      SHADER_PACK_PROGRAMS: () => Rk.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => ak.p,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => ak.r,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => ak.s,
      SHADER_PACK_TEXTURES_BINDING: () => ak.u,
      encodeTextureLayers: () => ak.v,
      flattenVariants: () => tk.b,
      isVariantOff: () => Rk.g,
      packRunsIn: () => Rk.h,
      shaderPackInputsWgsl: () => ak.z,
      shaderPackVariantKeys: () => Rk.l,
      variantKeyId: () => Rk.m,
      writeShaderPackInputs: () => ak.D
    });
    var Rk = Bk(6349),
      tk = Bk(6343),
      ak = Bk(40292)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);