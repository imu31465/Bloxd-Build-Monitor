export const id = 141;
export const ids = [141];
export const modules = {
  6836: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => eu,
      f: () => Gu,
      j: () => gu,
      m: () => Du
    });
    var su = ju(6840);
    const Uu = 6,
      Zu = 3,
      Xu = 1,
      lu = 2,
      qu = 4,
      fu = 8,
      Cu = 16,
      bu = 32,
      cu = 64,
      Nu = 128,
      Ou = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Yu(uu) {
      if (!uu) return 0;
      const Eu = Ou.indexOf(uu);
      if (Eu <= 0) throw new Error(`"${uu}" is not a shader pack hook function`);
      return Eu
    }

    function hu(uu) {
      if (0 === uu) return null;
      const Eu = Ou[uu];
      if (void 0 === Eu) throw new Error(`${uu} is not a shader pack hook function id`);
      return Eu
    }

    function Du(uu) {
      const Eu = su.b.length;
      return {
        strict: uu >= Eu,
        program: su.b[uu % Eu]
      }
    }

    function gu(uu) {
      return Number(uu.strict) * su.b.length + su.b.indexOf(uu.program)
    }

    function Mu(uu) {
      return "" === uu ? [] : uu.split(" ")
    }

    function eu(uu) {
      const Eu = {
        variantFlags: new Uint8Array(Uu),
        hooks: new Uint8Array(Uu * Zu),
        moduleCodes: Array(Uu).fill(""),
        reads: Array(2 * Uu).fill("")
      };
      for (const ju of uu) {
        const uu = gu(ju.key),
          su = (uu, Eu) => null === ju.hooks.surface || ju.reads.fragment.includes(uu) ? 0 : Eu;
        Eu.variantFlags[uu] = (ju.sceneDepth ? Xu : 0) | (ju.movesVertices ? lu : 0) | (ju.sunShadow ? qu : 0) | (ju.airShadow ? fu : 0) | (ju.discards ? Cu : 0) | su("localPosition", bu) | su("enchantSpeed", cu) | su("enchantTier", Nu), Eu.hooks[uu * Zu] = Yu(ju.hooks.vertex), Eu.hooks[uu * Zu + 1] = Yu(ju.hooks.surface), Eu.hooks[uu * Zu + 2] = Yu(ju.hooks.light), Eu.moduleCodes[uu] = ju.moduleCode, Eu.reads[2 * uu] = ju.reads.vertex.join(" "), Eu.reads[2 * uu + 1] = ju.reads.fragment.join(" ")
      }
      return Eu
    }

    function Gu(uu) {
      const {
        hooks: Eu,
        moduleCodes: ju,
        reads: su
      } = uu;
      return Array.from(uu.variantFlags, ((uu, Uu) => {
        const bu = Uu * Zu;
        return {
          key: Du(Uu),
          hooks: {
            vertex: hu(Eu[bu]),
            surface: hu(Eu[bu + 1]),
            light: hu(Eu[bu + 2])
          },
          moduleCode: ju[Uu],
          sceneDepth: 0 !== (uu & Xu),
          sunShadow: 0 !== (uu & qu),
          airShadow: 0 !== (uu & fu),
          movesVertices: 0 !== (uu & lu),
          discards: 0 !== (uu & Cu),
          reads: {
            vertex: Mu(su[2 * Uu]),
            fragment: Mu(su[2 * Uu + 1])
          }
        }
      }))
    }
  },
  40952: (uu, Eu, ju) => {
    ju.d(Eu, {
      D: () => Ou,
      b: () => Uu,
      f: () => su,
      g: () => cu,
      i: () => Cu,
      k: () => hu,
      n: () => Zu,
      o: () => lu,
      q: () => qu,
      t: () => Xu,
      w: () => Yu,
      z: () => Nu
    });
    const su = 3,
      Uu = 0,
      Zu = 1,
      Xu = 2,
      lu = {
        uniform: 3,
        ac: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qu = 10,
      fu = "BloxdPackInputs",
      Cu = "bloxdPackInputs",
      bu = [{
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
      cu = 80;

    function Nu() {
      const uu = bu.map((uu => {
        let {
          name: Eu,
          type: ju
        } = uu;
        return `    ${Eu}: ${ju},\n`
      })).join("");
      return `struct ${fu} {\n${uu}}\n@group(${su}) @binding(${Uu}) var<uniform> ${Cu}: ${fu};\n`
    }

    function Ou(uu, Eu) {
      const ju = new DataView(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, cu),
        [su, Uu, Zu, Xu, lu, qu] = bu;
      ju.setFloat32(su.offset, Eu.seconds, !0), ju.setUint32(Uu.offset, Eu.lit ? 1 : 0, !0);
      for (let fu = 0; fu < 3; fu++) ju.setInt32(Zu.offset + 4 * fu, Eu.renderOffset[fu], !0), ju.setFloat32(Xu.offset + 4 * fu, Eu.fuu[fu], !0), ju.setFloat32(lu.offset + 4 * fu, Eu.eyePosition[fu], !0), ju.setFloat32(qu.offset + 4 * fu, Eu.shadowDirection[fu], !0)
    }

    function Yu(uu) {
      const Eu = new Uint32Array(Math.max(1, uu.length));
      return uu.forEach(((uu, ju) => {
        let {
          id: su,
          rotation: Uu
        } = uu;
        Eu[ju] = 65535 & su | (3 & Uu) << 16
      })), Eu
    }
    const hu = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6840: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Xu,
      i: () => lu,
      j: () => Uu,
      l: () => Zu
    });
    const su = ["terrain", "liquid", "model"];

    function Uu() {
      const uu = [];
      for (const Eu of [!1, !0])
        for (const ju of su) uu.push({
          strict: Eu,
          program: ju
        });
      return uu
    }

    function Zu(uu) {
      return `${uu.strict?"strict":"allow"}.${uu.program}`
    }

    function Xu(uu) {
      return !uu.hooks.vertex && !uu.hooks.surface && !uu.hooks.light
    }

    function lu(uu, Eu) {
      return "off" !== Eu && (null === uu || uu.some((uu => uu.key.strict === ("strict" === Eu) && !Xu(uu))))
    }
  },
  41507: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      SHADER_PACK_INPUTS_BINDING: () => Zu.b,
      SHADER_PACK_INPUTS_GROUP: () => Zu.f,
      SHADER_PACK_INPUTS_SIZE: () => Zu.g,
      SHADER_PACK_INPUTS_VAR: () => Zu.i,
      SHADER_PACK_MODES: () => Zu.k,
      SHADER_PACK_PROGRAMS: () => su.b,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Zu.n,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Zu.o,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Zu.q,
      SHADER_PACK_TEXTURES_BINDING: () => Zu.t,
      encodeTextureLayers: () => Zu.w,
      flattenVariants: () => Uu.e,
      isVariantOff: () => su.f,
      packRunsIn: () => su.i,
      shaderPackInputsWgsl: () => Zu.z,
      shaderPackVariantKeys: () => su.j,
      variantKeyId: () => su.l,
      writeShaderPackInputs: () => Zu.D
    });
    var su = ju(6840),
      Uu = ju(6836),
      Zu = ju(40952)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);