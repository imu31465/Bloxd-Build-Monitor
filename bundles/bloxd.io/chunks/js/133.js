export const id = 133;
export const ids = [133];
export const modules = {
  6412: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => du,
      h: () => bu,
      l: () => ju,
      o: () => Wu
    });
    var Eu = yu(6418);
    const Ku = 6,
      Qu = 3,
      mu = 1,
      Ju = 2,
      Nu = 4,
      Xu = 8,
      Vu = 16,
      ru = 32,
      Bu = 64,
      xu = 128,
      Su = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function pu(uu) {
      if (!uu) return 0;
      const Ru = Su.indexOf(uu);
      if (Ru <= 0) throw new Error(`"${uu}" is not a shader pack hook function`);
      return Ru
    }

    function Tu(uu) {
      if (0 === uu) return null;
      const Ru = Su[uu];
      if (void 0 === Ru) throw new Error(`${uu} is not a shader pack hook function id`);
      return Ru
    }

    function Wu(uu) {
      const Ru = Eu.c.length;
      return {
        strict: uu >= Ru,
        program: Eu.c[uu % Ru]
      }
    }

    function ju(uu) {
      return Number(uu.strict) * Eu.c.length + Eu.c.indexOf(uu.program)
    }

    function Hu(uu) {
      return "" === uu ? [] : uu.split(" ")
    }

    function du(uu) {
      const Ru = {
        variantFlags: new Uint8Array(Ku),
        hooks: new Uint8Array(Ku * Qu),
        moduleCodes: Array(Ku).fill(""),
        reads: Array(2 * Ku).fill("")
      };
      for (const yu of uu) {
        const uu = ju(yu.key),
          Eu = (uu, Ru) => null === yu.hooks.surface || yu.reads.fragment.includes(uu) ? 0 : Ru;
        Ru.variantFlags[uu] = (yu.sceneDepth ? mu : 0) | (yu.movesVertices ? Ju : 0) | (yu.sunShadow ? Nu : 0) | (yu.airShadow ? Xu : 0) | (yu.discards ? Vu : 0) | Eu("localPosition", ru) | Eu("enchantSpeed", Bu) | Eu("enchantTier", xu), Ru.hooks[uu * Qu] = pu(yu.hooks.vertex), Ru.hooks[uu * Qu + 1] = pu(yu.hooks.surface), Ru.hooks[uu * Qu + 2] = pu(yu.hooks.light), Ru.moduleCodes[uu] = yu.moduleCode, Ru.reads[2 * uu] = yu.reads.vertex.join(" "), Ru.reads[2 * uu + 1] = yu.reads.fragment.join(" ")
      }
      return Ru
    }

    function bu(uu) {
      const {
        hooks: Ru,
        moduleCodes: yu,
        reads: Eu
      } = uu;
      return Array.from(uu.variantFlags, ((uu, Ku) => {
        const ru = Ku * Qu;
        return {
          key: Wu(Ku),
          hooks: {
            vertex: Tu(Ru[ru]),
            surface: Tu(Ru[ru + 1]),
            light: Tu(Ru[ru + 2])
          },
          moduleCode: yu[Ku],
          sceneDepth: 0 !== (uu & mu),
          sunShadow: 0 !== (uu & Nu),
          airShadow: 0 !== (uu & Xu),
          movesVertices: 0 !== (uu & Ju),
          discards: 0 !== (uu & Vu),
          reads: {
            vertex: Hu(Eu[2 * Ku]),
            fragment: Hu(Eu[2 * Ku + 1])
          }
        }
      }))
    }
  },
  40444: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => pu,
      D: () => xu,
      F: () => Su,
      e: () => Ku,
      g: () => Eu,
      k: () => Bu,
      m: () => Vu,
      p: () => Tu,
      s: () => Qu,
      u: () => Ju,
      w: () => Nu,
      y: () => mu
    });
    const Eu = 3,
      Ku = 0,
      Qu = 1,
      mu = 2,
      Ju = {
        uniform: 3,
        WB: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Nu = 10,
      Xu = "BloxdPackInputs",
      Vu = "bloxdPackInputs",
      ru = [{
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
      Bu = 80;

    function xu() {
      const uu = ru.map((uu => {
        let {
          name: Ru,
          type: yu
        } = uu;
        return `    ${Ru}: ${yu},\n`
      })).join("");
      return `struct ${Xu} {\n${uu}}\n@group(${Eu}) @binding(${Ku}) var<uniform> ${Vu}: ${Xu};\n`
    }

    function Su(uu, Ru) {
      const yu = new DataView(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Bu),
        [Eu, Ku, Qu, mu, Ju, Nu] = ru;
      yu.setFloat32(Eu.offset, Ru.seconds, !0), yu.setUint32(Ku.offset, Ru.lit ? 1 : 0, !0);
      for (let Xu = 0; Xu < 3; Xu++) yu.setInt32(Qu.offset + 4 * Xu, Ru.renderOffset[Xu], !0), yu.setFloat32(mu.offset + 4 * Xu, Ru.duu[Xu], !0), yu.setFloat32(Ju.offset + 4 * Xu, Ru.eyePosition[Xu], !0), yu.setFloat32(Nu.offset + 4 * Xu, Ru.shadowDirection[Xu], !0)
    }

    function pu(uu) {
      const Ru = new Uint32Array(Math.max(1, uu.length));
      return uu.forEach(((uu, yu) => {
        let {
          id: Eu,
          rotation: Ku
        } = uu;
        Ru[yu] = 65535 & Eu | (3 & Ku) << 16
      })), Ru
    }
    const Tu = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6418: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      g: () => mu,
      h: () => Ju,
      i: () => Ku,
      j: () => Qu
    });
    const Eu = ["terrain", "liquid", "model"];

    function Ku() {
      const uu = [];
      for (const Ru of [!1, !0])
        for (const yu of Eu) uu.push({
          strict: Ru,
          program: yu
        });
      return uu
    }

    function Qu(uu) {
      return `${uu.strict?"strict":"allow"}.${uu.program}`
    }

    function mu(uu) {
      return !uu.hooks.vertex && !uu.hooks.surface && !uu.hooks.light
    }

    function Ju(uu, Ru) {
      return "off" !== Ru && (null === uu || uu.some((uu => uu.key.strict === ("strict" === Ru) && !mu(uu))))
    }
  },
  40869: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      SHADER_PACK_INPUTS_BINDING: () => Qu.e,
      SHADER_PACK_INPUTS_GROUP: () => Qu.g,
      SHADER_PACK_INPUTS_SIZE: () => Qu.k,
      SHADER_PACK_INPUTS_VAR: () => Qu.m,
      SHADER_PACK_MODES: () => Qu.p,
      SHADER_PACK_PROGRAMS: () => Eu.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Qu.s,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Qu.u,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Qu.w,
      SHADER_PACK_TEXTURES_BINDING: () => Qu.y,
      encodeTextureLayers: () => Qu.B,
      flattenVariants: () => Ku.d,
      isVariantOff: () => Eu.g,
      packRunsIn: () => Eu.h,
      shaderPackInputsWgsl: () => Qu.D,
      shaderPackVariantKeys: () => Eu.i,
      variantKeyId: () => Eu.j,
      writeShaderPackInputs: () => Qu.F
    });
    var Eu = yu(6418),
      Ku = yu(6412),
      Qu = yu(40444)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);