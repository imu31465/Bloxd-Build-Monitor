export const id = 141;
export const ids = [141];
export const modules = {
  6780: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => dp,
      g: () => ep,
      i: () => tp,
      m: () => vp
    });
    var Op = cp(6788);
    const op = 6,
      Ip = 3,
      Sp = 1,
      xp = 2,
      Lp = 4,
      Yp = 8,
      Dp = 16,
      Ap = 32,
      Pp = 64,
      Wp = 128,
      yp = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Up(pp) {
      if (!pp) return 0;
      const ip = yp.indexOf(pp);
      if (ip <= 0) throw new Error(`"${pp}" is not a shader pack hook function`);
      return ip
    }

    function wp(pp) {
      if (0 === pp) return null;
      const ip = yp[pp];
      if (void 0 === ip) throw new Error(`${pp} is not a shader pack hook function id`);
      return ip
    }

    function vp(pp) {
      const ip = Op.d.length;
      return {
        strict: pp >= ip,
        program: Op.d[pp % ip]
      }
    }

    function tp(pp) {
      return Number(pp.strict) * Op.d.length + Op.d.indexOf(pp.program)
    }

    function Hp(pp) {
      return "" === pp ? [] : pp.split(" ")
    }

    function dp(pp) {
      const ip = {
        variantFlags: new Uint8Array(op),
        hooks: new Uint8Array(op * Ip),
        moduleCodes: Array(op).fill(""),
        reads: Array(2 * op).fill("")
      };
      for (const cp of pp) {
        const pp = tp(cp.key),
          Op = (pp, ip) => null === cp.hooks.surface || cp.reads.fragment.includes(pp) ? 0 : ip;
        ip.variantFlags[pp] = (cp.sceneDepth ? Sp : 0) | (cp.movesVertices ? xp : 0) | (cp.sunShadow ? Lp : 0) | (cp.airShadow ? Yp : 0) | (cp.discards ? Dp : 0) | Op("localPosition", Ap) | Op("enchantSpeed", Pp) | Op("enchantTier", Wp), ip.hooks[pp * Ip] = Up(cp.hooks.vertex), ip.hooks[pp * Ip + 1] = Up(cp.hooks.surface), ip.hooks[pp * Ip + 2] = Up(cp.hooks.light), ip.moduleCodes[pp] = cp.moduleCode, ip.reads[2 * pp] = cp.reads.vertex.join(" "), ip.reads[2 * pp + 1] = cp.reads.fragment.join(" ")
      }
      return ip
    }

    function ep(pp) {
      const {
        hooks: ip,
        moduleCodes: cp,
        reads: Op
      } = pp;
      return Array.from(pp.variantFlags, ((pp, op) => {
        const Ap = op * Ip;
        return {
          key: vp(op),
          hooks: {
            vertex: wp(ip[Ap]),
            surface: wp(ip[Ap + 1]),
            light: wp(ip[Ap + 2])
          },
          moduleCode: cp[op],
          sceneDepth: 0 !== (pp & Sp),
          sunShadow: 0 !== (pp & Lp),
          airShadow: 0 !== (pp & Yp),
          movesVertices: 0 !== (pp & xp),
          discards: 0 !== (pp & Dp),
          reads: {
            vertex: Hp(Op[2 * op]),
            fragment: Hp(Op[2 * op + 1])
          }
        }
      }))
    }
  },
  40892: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Up,
      C: () => Wp,
      E: () => yp,
      c: () => op,
      g: () => Op,
      h: () => Pp,
      l: () => Dp,
      m: () => wp,
      o: () => Ip,
      r: () => xp,
      t: () => Lp,
      x: () => Sp
    });
    const Op = 3,
      op = 0,
      Ip = 1,
      Sp = 2,
      xp = {
        uniform: 3,
        hP: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Lp = 10,
      Yp = "BloxdPackInputs",
      Dp = "bloxdPackInputs",
      Ap = [{
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
      Pp = 80;

    function Wp() {
      const pp = Ap.map((pp => {
        let {
          name: ip,
          type: cp
        } = pp;
        return `    ${ip}: ${cp},\n`
      })).join("");
      return `struct ${Yp} {\n${pp}}\n@group(${Op}) @binding(${op}) var<uniform> ${Dp}: ${Yp};\n`
    }

    function yp(pp, ip) {
      const cp = new DataView(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pp),
        [Op, op, Ip, Sp, xp, Lp] = Ap;
      cp.setFloat32(Op.offset, ip.seconds, !0), cp.setUint32(op.offset, ip.lit ? 1 : 0, !0);
      for (let Yp = 0; Yp < 3; Yp++) cp.setInt32(Ip.offset + 4 * Yp, ip.renderOffset[Yp], !0), cp.setFloat32(Sp.offset + 4 * Yp, ip.opp[Yp], !0), cp.setFloat32(xp.offset + 4 * Yp, ip.eyePosition[Yp], !0), cp.setFloat32(Lp.offset + 4 * Yp, ip.shadowDirection[Yp], !0)
    }

    function Up(pp) {
      const ip = new Uint32Array(Math.max(1, pp.length));
      return pp.forEach(((pp, cp) => {
        let {
          id: Op,
          rotation: op
        } = pp;
        ip[cp] = 65535 & Op | (3 & op) << 16
      })), ip
    }
    const wp = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6788: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      e: () => Sp,
      f: () => xp,
      h: () => op,
      i: () => Ip
    });
    const Op = ["terrain", "liquid", "model"];

    function op() {
      const pp = [];
      for (const ip of [!1, !0])
        for (const cp of Op) pp.push({
          strict: ip,
          program: cp
        });
      return pp
    }

    function Ip(pp) {
      return `${pp.strict?"strict":"allow"}.${pp.program}`
    }

    function Sp(pp) {
      return !pp.hooks.vertex && !pp.hooks.surface && !pp.hooks.light
    }

    function xp(pp, ip) {
      return "off" !== ip && (null === pp || pp.some((pp => pp.key.strict === ("strict" === ip) && !Sp(pp))))
    }
  },
  41515: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      SHADER_PACK_INPUTS_BINDING: () => Ip.c,
      SHADER_PACK_INPUTS_GROUP: () => Ip.g,
      SHADER_PACK_INPUTS_SIZE: () => Ip.h,
      SHADER_PACK_INPUTS_VAR: () => Ip.l,
      SHADER_PACK_MODES: () => Ip.m,
      SHADER_PACK_PROGRAMS: () => Op.d,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => Ip.o,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => Ip.r,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Ip.t,
      SHADER_PACK_TEXTURES_BINDING: () => Ip.x,
      encodeTextureLayers: () => Ip.A,
      flattenVariants: () => op.c,
      isVariantOff: () => Op.e,
      packRunsIn: () => Op.f,
      shaderPackInputsWgsl: () => Ip.C,
      shaderPackVariantKeys: () => Op.h,
      variantKeyId: () => Op.i,
      writeShaderPackInputs: () => Ip.E
    });
    var Op = cp(6788),
      op = cp(6780),
      Ip = cp(40892)
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);