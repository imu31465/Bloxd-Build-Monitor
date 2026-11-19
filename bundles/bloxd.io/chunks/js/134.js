export const id = 134;
export const ids = [134];
export const modules = {
  6200: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => VY,
      f: () => SY,
      i: () => EY,
      m: () => WY
    });
    var FY = DY(6208);
    const AY = 6,
      IY = 3,
      RY = 1,
      OY = 2,
      gY = 4,
      aY = 8,
      vY = 16,
      uY = 32,
      sY = 64,
      iY = 128,
      yY = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function QY(YY) {
      if (!YY) return 0;
      const rY = yY.indexOf(YY);
      if (rY <= 0) throw new Error(`"${YY}" is not a shader pack hook function`);
      return rY
    }

    function oY(YY) {
      if (0 === YY) return null;
      const rY = yY[YY];
      if (void 0 === rY) throw new Error(`${YY} is not a shader pack hook function id`);
      return rY
    }

    function WY(YY) {
      const rY = FY.c.length;
      return {
        strict: YY >= rY,
        program: FY.c[YY % rY]
      }
    }

    function EY(YY) {
      return Number(YY.strict) * FY.c.length + FY.c.indexOf(YY.program)
    }

    function mY(YY) {
      return "" === YY ? [] : YY.split(" ")
    }

    function VY(YY) {
      const rY = {
        variantFlags: new Uint8Array(AY),
        hooks: new Uint8Array(AY * IY),
        moduleCodes: Array(AY).fill(""),
        reads: Array(2 * AY).fill("")
      };
      for (const DY of YY) {
        const YY = EY(DY.key),
          FY = (YY, rY) => null === DY.hooks.surface || DY.reads.fragment.includes(YY) ? 0 : rY;
        rY.variantFlags[YY] = (DY.sceneDepth ? RY : 0) | (DY.movesVertices ? OY : 0) | (DY.sunShadow ? gY : 0) | (DY.airShadow ? aY : 0) | (DY.discards ? vY : 0) | FY("localPosition", uY) | FY("enchantSpeed", sY) | FY("enchantTier", iY), rY.hooks[YY * IY] = QY(DY.hooks.vertex), rY.hooks[YY * IY + 1] = QY(DY.hooks.surface), rY.hooks[YY * IY + 2] = QY(DY.hooks.light), rY.moduleCodes[YY] = DY.moduleCode, rY.reads[2 * YY] = DY.reads.vertex.join(" "), rY.reads[2 * YY + 1] = DY.reads.fragment.join(" ")
      }
      return rY
    }

    function SY(YY) {
      const {
        hooks: rY,
        moduleCodes: DY,
        reads: FY
      } = YY;
      return Array.from(YY.variantFlags, ((YY, AY) => {
        const uY = AY * IY;
        return {
          key: WY(AY),
          hooks: {
            vertex: oY(rY[uY]),
            surface: oY(rY[uY + 1]),
            light: oY(rY[uY + 2])
          },
          moduleCode: DY[AY],
          sceneDepth: 0 !== (YY & RY),
          sunShadow: 0 !== (YY & gY),
          airShadow: 0 !== (YY & aY),
          movesVertices: 0 !== (YY & OY),
          discards: 0 !== (YY & vY),
          reads: {
            vertex: mY(FY[2 * AY]),
            fragment: mY(FY[2 * AY + 1])
          }
        }
      }))
    }
  },
  39986: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => yY,
      c: () => AY,
      e: () => FY,
      f: () => sY,
      i: () => vY,
      m: () => oY,
      o: () => IY,
      p: () => OY,
      q: () => gY,
      r: () => RY,
      t: () => QY,
      x: () => iY
    });
    const FY = 3,
      AY = 0,
      IY = 1,
      RY = 2,
      OY = {
        uniform: 3,
        ls: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      gY = 10,
      aY = "BloxdPackInputs",
      vY = "bloxdPackInputs",
      uY = [{
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
      sY = 80;

    function iY() {
      const YY = uY.map((YY => {
        let {
          name: rY,
          type: DY
        } = YY;
        return `    ${rY}: ${DY},\n`
      })).join("");
      return `struct ${aY} {\n${YY}}\n@group(${FY}) @binding(${AY}) var<uniform> ${vY}: ${aY};\n`
    }

    function yY(YY, rY) {
      const DY = new DataView(YY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, sY),
        [FY, AY, IY, RY, OY, gY] = uY;
      DY.setFloat32(FY.offset, rY.seconds, !0), DY.setUint32(AY.offset, rY.lit ? 1 : 0, !0);
      for (let aY = 0; aY < 3; aY++) DY.setInt32(IY.offset + 4 * aY, rY.renderOffset[aY], !0), DY.setFloat32(RY.offset + 4 * aY, rY.i6[aY], !0), DY.setFloat32(OY.offset + 4 * aY, rY.eyePosition[aY], !0), DY.setFloat32(gY.offset + 4 * aY, rY.shadowDirection[aY], !0)
    }

    function QY(YY) {
      const rY = new Uint32Array(Math.max(1, YY.length));
      return YY.forEach(((YY, DY) => {
        let {
          id: FY,
          rotation: AY
        } = YY;
        rY[DY] = 65535 & FY | (3 & AY) << 16
      })), rY
    }
    const oY = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6208: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      e: () => RY,
      h: () => OY,
      l: () => AY,
      o: () => IY
    });
    const FY = ["terrain", "liquid", "model"];

    function AY() {
      const YY = [];
      for (const rY of [!1, !0])
        for (const DY of FY) YY.push({
          strict: rY,
          program: DY
        });
      return YY
    }

    function IY(YY) {
      return `${YY.strict?"strict":"allow"}.${YY.program}`
    }

    function RY(YY) {
      return !YY.hooks.vertex && !YY.hooks.surface && !YY.hooks.light
    }

    function OY(YY, rY) {
      return "off" !== rY && (null === YY || YY.some((YY => YY.key.strict === ("strict" === rY) && !RY(YY))))
    }
  },
  40263: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      SHADER_PACK_INPUTS_BINDING: () => IY.c,
      SHADER_PACK_INPUTS_GROUP: () => IY.e,
      SHADER_PACK_INPUTS_SIZE: () => IY.f,
      SHADER_PACK_INPUTS_VAR: () => IY.i,
      SHADER_PACK_MODES: () => IY.m,
      SHADER_PACK_PROGRAMS: () => FY.c,
      SHADER_PACK_SCENE_DEPTH_BINDING: () => IY.o,
      SHADER_PACK_SUN_SHADOW_BINDINGS: () => IY.p,
      SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => IY.q,
      SHADER_PACK_TEXTURES_BINDING: () => IY.r,
      encodeTextureLayers: () => IY.t,
      flattenVariants: () => AY.e,
      isVariantOff: () => FY.e,
      packRunsIn: () => FY.h,
      shaderPackInputsWgsl: () => IY.x,
      shaderPackVariantKeys: () => FY.l,
      variantKeyId: () => FY.o,
      writeShaderPackInputs: () => IY.A
    });
    var FY = DY(6208),
      AY = DY(6200),
      IY = DY(39986)
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);