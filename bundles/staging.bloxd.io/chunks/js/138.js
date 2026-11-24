export const id = 138;
export const ids = [138];
export const modules = {
  6614: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Kk,
      d: () => Qk,
      g: () => xk,
      k: () => Jk
    });
    var Xk = Ik(6622);
    const Tk = 6,
      ik = 3,
      yk = 1,
      lk = 2,
      ak = 4,
      qk = 8,
      Lk = 16,
      tk = 32,
      Zk = 64,
      jk = 128,
      ek = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function wk(kk) {
      if (!kk) return 0;
      const Fk = ek.indexOf(kk);
      if (Fk <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return Fk
    }

    function Hk(kk) {
      if (0 === kk) return null;
      const Fk = ek[kk];
      if (void 0 === Fk) throw new Error(`${kk} is not a shader pack hook function id`);
      return Fk
    }

    function Jk(kk) {
      const Fk = Xk.b.length;
      return {
        strict: kk >= Fk,
        program: Xk.b[kk % Fk]
      }
    }

    function xk(kk) {
      return Number(kk.strict) * Xk.b.length + Xk.b.indexOf(kk.program)
    }

    function Pk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function Kk(kk) {
      const Fk = {
        variantFlags: new Uint8Array(Tk),
        hooks: new Uint8Array(Tk * ik),
        moduleCodes: Array(Tk).fill(""),
        reads: Array(2 * Tk).fill("")
      };
      for (const Ik of kk) {
        const kk = xk(Ik.key),
          Xk = (kk, Fk) => null === Ik.hooks.surface || Ik.reads.fragment.includes(kk) ? 0 : Fk;
        Fk.variantFlags[kk] = (Ik.sceneDepth ? yk : 0) | (Ik.movesVertices ? lk : 0) | (Ik.sunShadow ? ak : 0) | (Ik.airShadow ? qk : 0) | (Ik.discards ? Lk : 0) | Xk("localPosition", tk) | Xk("enchantSpeed", Zk) | Xk("enchantTier", jk), Fk.hooks[kk * ik] = wk(Ik.hooks.vertex), Fk.hooks[kk * ik + 1] = wk(Ik.hooks.surface), Fk.hooks[kk * ik + 2] = wk(Ik.hooks.light), Fk.moduleCodes[kk] = Ik.moduleCode, Fk.reads[2 * kk] = Ik.reads.vertex.join(" "), Fk.reads[2 * kk + 1] = Ik.reads.fragment.join(" ")
      }
      return Fk
    }

    function Qk(kk) {
      const {
        hooks: Fk,
        moduleCodes: Ik,
        reads: Xk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, Tk) => {
        const tk = Tk * ik;
        return {
          key: Jk(Tk),
          hooks: {
            vertex: Hk(Fk[tk]),
            surface: Hk(Fk[tk + 1]),
            light: Hk(Fk[tk + 2])
          },
          moduleCode: Ik[Tk],
          sceneDepth: 0 !== (kk & yk),
          sunShadow: 0 !== (kk & ak),
          airShadow: 0 !== (kk & qk),
          movesVertices: 0 !== (kk & lk),
          discards: 0 !== (kk & Lk),
          reads: {
            vertex: Pk(Xk[2 * Tk]),
            fragment: Pk(Xk[2 * Tk + 1])
          }
        }
      }))
    }
  },
  40708: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => jk,
      G: () => ek,
      e: () => Tk,
      h: () => Xk,
      i: () => Zk,
      k: () => Lk,
      l: () => Hk,
      m: () => ik,
      q: () => lk,
      s: () => ak,
      v: () => yk,
      y: () => wk
    });
    const Xk = 3,
      Tk = 0,
      ik = 1,
      yk = 2,
      lk = {
        uniform: 3,
        GZ: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      ak = 10,
      qk = "BloxdPackInputs",
      Lk = "bloxdPackInputs",
      tk = [{
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
      Zk = 80;

    function jk() {
      const kk = tk.map((kk => {
        let {
          name: Fk,
          type: Ik
        } = kk;
        return `    ${Fk}: ${Ik},\n`
      })).join("");
      return `struct ${qk} {\n${kk}}\n@group(${Xk}) @binding(${Tk}) var<uniform> ${Lk}: ${qk};\n`
    }

    function ek(kk, Fk) {
      const Ik = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Zk),
        [Xk, Tk, ik, yk, lk, ak] = tk;
      Ik.setFloat32(Xk.offset, Fk.seconds, !0), Ik.setUint32(Tk.offset, Fk.lit ? 1 : 0, !0);
      for (let qk = 0; qk < 3; qk++) Ik.setInt32(ik.offset + 4 * qk, Fk.renderOffset[qk], !0), Ik.setFloat32(yk.offset + 4 * qk, Fk.Fkk[qk], !0), Ik.setFloat32(lk.offset + 4 * qk, Fk.eyePosition[qk], !0), Ik.setFloat32(ak.offset + 4 * qk, Fk.shadowDirection[qk], !0)
    }

    function wk(kk) {
      const Fk = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, Ik) => {
        let {
          id: Xk,
          rotation: Tk
        } = kk;
        Fk[Ik] = 65535 & Xk | (3 & Tk) << 16
      })), Fk
    }
    const Hk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6622: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      e: () => yk,
      f: () => lk,
      h: () => Tk,
      i: () => ik
    });
    const Xk = ["terrain", "liquid", "model"];

    function Tk() {
      const kk = [];
      for (const Fk of [!1, !0])
        for (const Ik of Xk) kk.push({
          strict: Fk,
          program: Ik
        });
      return kk
    }

    function ik(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function yk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function lk(kk, Fk) {
      return "off" !== Fk && (null === kk || kk.some((kk => kk.key.strict === ("strict" === Fk) && !yk(kk))))
    }
  },
  41273: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      SHADER_PACK_INPUTS_BINDING: () => ik.e,
      SHADER_PACK_INPUTS_GROUP: () => ik.h,
      SHADER_PACK_INPUTS_SIZE: () => ik.i,
      SHADER_PACK_INPUTS_VAR: () => ik.k,
      SHADER_PACK_MODES: () => ik.l,
      SHADER_PACK_PROGRAMS: () => Xk.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => ik.m,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => ik.q,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => ik.s,
      SHADER_PACK_TEXTURES_BINDING: () => ik.v,
      encodeTextureLayers: () => ik.y,
      flattenVariants: () => Tk.b,
      isVariantOff: () => Xk.e,
      packRunsIn: () => Xk.f,
      shaderPackInputsWgsl: () => ik.C,
      shaderPackVariantKeys: () => Xk.h,
      variantKeyId: () => Xk.i,
      writeShaderPackInputs: () => ik.G
    });
    var Xk = Ik(6622),
      Tk = Ik(6614),
      ik = Ik(40708)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);