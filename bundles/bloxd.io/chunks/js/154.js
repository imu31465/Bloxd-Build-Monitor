export const id = 154;
export const ids = [154];
export const modules = {
  7268: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ee,
      e: () => ge,
      g: () => ze,
      k: () => Xe
    });
    var ye = He(7276);
    const be = 6,
      Me = 3,
      Ke = 1,
      Ue = 2,
      Fe = 4,
      Je = 8,
      oe = 16,
      Re = 32,
      ke = 64,
      qe = 128,
      fe = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Te(ee) {
      if (!ee) return 0;
      const ie = fe.indexOf(ee);
      if (ie <= 0) throw new Error(`"${ee}" is not a shader pack hook function`);
      return ie
    }

    function pe(ee) {
      if (0 === ee) return null;
      const ie = fe[ee];
      if (void 0 === ie) throw new Error(`${ee} is not a shader pack hook function id`);
      return ie
    }

    function Xe(ee) {
      const ie = ye.d.length;
      return {
        strict: ee >= ie,
        program: ye.d[ee % ie]
      }
    }

    function ze(ee) {
      return Number(ee.strict) * ye.d.length + ye.d.indexOf(ee.program)
    }

    function Be(ee) {
      return "" === ee ? [] : ee.split(" ")
    }

    function Ee(ee) {
      const ie = {
        variantFlags: new Uint8Array(be),
        hooks: new Uint8Array(be * Me),
        moduleCodes: Array(be).fill(""),
        reads: Array(2 * be).fill("")
      };
      for (const He of ee) {
        const ee = ze(He.key),
          ye = (ee, ie) => null === He.hooks.surface || He.reads.fragment.includes(ee) ? 0 : ie;
        ie.variantFlags[ee] = (He.sceneDepth ? Ke : 0) | (He.movesVertices ? Ue : 0) | (He.sunShadow ? Fe : 0) | (He.airShadow ? Je : 0) | (He.discards ? oe : 0) | ye("localPosition", Re) | ye("enchantSpeed", ke) | ye("enchantTier", qe), ie.hooks[ee * Me] = Te(He.hooks.vertex), ie.hooks[ee * Me + 1] = Te(He.hooks.surface), ie.hooks[ee * Me + 2] = Te(He.hooks.light), ie.moduleCodes[ee] = He.moduleCode, ie.reads[2 * ee] = He.reads.vertex.join(" "), ie.reads[2 * ee + 1] = He.reads.fragment.join(" ")
      }
      return ie
    }

    function ge(ee) {
      const {
        hooks: ie,
        moduleCodes: He,
        reads: ye
      } = ee;
      return Array.from(ee.variantFlags, ((ee, be) => {
        const Re = be * Me;
        return {
          key: Xe(be),
          hooks: {
            vertex: pe(ie[Re]),
            surface: pe(ie[Re + 1]),
            light: pe(ie[Re + 2])
          },
          moduleCode: He[be],
          sceneDepth: 0 !== (ee & Ke),
          sunShadow: 0 !== (ee & Fe),
          airShadow: 0 !== (ee & Je),
          movesVertices: 0 !== (ee & Ue),
          discards: 0 !== (ee & oe),
          reads: {
            vertex: Be(ye[2 * be]),
            fragment: Be(ye[2 * be + 1])
          }
        }
      }))
    }
  },
  41807: (ee, ie, He) => {
    He.d(ie, {
      C: () => fe,
      d: () => be,
      f: () => ye,
      j: () => ke,
      k: () => oe,
      n: () => pe,
      p: () => Me,
      q: () => Ue,
      s: () => Fe,
      u: () => Ke,
      x: () => Te,
      z: () => qe
    });
    const ye = 3,
      be = 0,
      Me = 1,
      Ke = 2,
      Ue = {
        uniform: 3,
        Uq: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Fe = 10,
      Je = "BloxdPackInputs",
      oe = "bloxdPackInputs",
      Re = [{
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
      ke = 80;

    function qe() {
      const ee = Re.map((ee => {
        let {
          name: ie,
          type: He
        } = ee;
        return `    ${ie}: ${He},\n`
      })).join("");
      return `struct ${Je} {\n${ee}}\n@group(${ye}) @binding(${be}) var<uniform> ${oe}: ${Je};\n`
    }

    function fe(ee, ie) {
      const He = new DataView(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ke),
        [ye, be, Me, Ke, Ue, Fe] = Re;
      He.setFloat32(ye.offset, ie.seconds, !0), He.setUint32(be.offset, ie.lit ? 1 : 0, !0);
      for (let Je = 0; Je < 3; Je++) He.setInt32(Me.offset + 4 * Je, ie.renderOffset[Je], !0), He.setFloat32(Ke.offset + 4 * Je, ie.Sie[Je], !0), He.setFloat32(Ue.offset + 4 * Je, ie.eyePosition[Je], !0), He.setFloat32(Fe.offset + 4 * Je, ie.shadowDirection[Je], !0)
    }

    function Te(ee) {
      const ie = new Uint32Array(Math.max(1, ee.length));
      return ee.forEach(((ee, He) => {
        let {
          id: ye,
          rotation: be
        } = ee;
        ie[He] = 65535 & ye | (3 & be) << 16
      })), ie
    }
    const pe = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7276: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      h: () => Ke,
      l: () => Ue,
      m: () => be,
      o: () => Me
    });
    const ye = ["terrain", "liquid", "model"];

    function be() {
      const ee = [];
      for (const ie of [!1, !0])
        for (const He of ye) ee.push({
          strict: ie,
          program: He
        });
      return ee
    }

    function Me(ee) {
      return `${ee.strict?"strict":"allow"}.${ee.program}`
    }

    function Ke(ee) {
      return !ee.hooks.vertex && !ee.hooks.surface && !ee.hooks.light
    }

    function Ue(ee, ie) {
      return "off" !== ie && (null === ee || ee.some((ee => ee.key.strict === ("strict" === ie) && !Ke(ee))))
    }
  },
  44465: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      SHADER_PACK_INPUTS_BINDING: () => Me.d,
      SHADER_PACK_INPUTS_GROUP: () => Me.f,
      SHADER_PACK_INPUTS_SIZE: () => Me.j,
      SHADER_PACK_INPUTS_VAR: () => Me.k,
      SHADER_PACK_MODES: () => Me.n,
      SHADER_PACK_PROGRAMS: () => ye.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Me.p,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Me.q,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Me.s,
      SHADER_PACK_TEXTURES_BINDING: () => Me.u,
      encodeTextureLayers: () => Me.x,
      flattenVariants: () => be.d,
      isVariantOff: () => ye.h,
      packRunsIn: () => ye.l,
      shaderPackInputsWgsl: () => Me.z,
      shaderPackVariantKeys: () => ye.m,
      variantKeyId: () => ye.o,
      writeShaderPackInputs: () => Me.C
    });
    var ye = He(7276),
      be = He(7268),
      Me = He(41807)
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);