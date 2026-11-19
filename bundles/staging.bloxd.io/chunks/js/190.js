export const id = 190;
export const ids = [190];
export const modules = {
  8807: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => ZY,
      h: () => zY,
      j: () => HY
    });
    var FY = DY(8809);
    const AY = {
        fileBytes: 4194304,
        vertices: 65535,
        indices: 196608,
        accessorElements: 196608,
        primitives: 64,
        nodes: 128,
        meshes: 64,
        materials: 8,
        images: 8,
        imageSide: 1024
      },
      IY = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      RY = 1048576,
      OY = "is not a binary glTF 2.0 file",
      gY = "loads data from outside the file",
      aY = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      vY = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      uY = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      sY = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: uY,
        TEXCOORD_2: uY,
        TEXCOORD_3: uY,
        TEXCOORD_4: uY,
        TEXCOORD_5: uY
      },
      iY = new Set(FY.i.map((YY => {
        let [rY] = YY;
        return rY
      }))),
      yY = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      QY = 5126;

    function oY(YY) {
      return YY.toLocaleString("en-US")
    }

    function WY(YY, rY, DY) {
      return YY > rY ? `has ${oY(YY)} ${DY} (the limit is ${oY(rY)})` : null
    }

    function EY(YY, rY) {
      return Number.isInteger(YY) && YY >= 0 && YY < (null !== rY && void 0 !== rY ? rY : 0)
    }

    function mY(YY) {
      return Number.isInteger(YY) && YY >= 0
    }

    function VY(YY, rY) {
      return void 0 !== YY && (!Array.isArray(YY) || YY.length > rY)
    }

    function SY(YY, rY) {
      return "object" === typeof YY && null !== YY && Object.keys(YY).length > rY
    }

    function lY(YY) {
      var rY;
      return `${YY.normalized?"normalized ":""}${null!==(rY=FY.e[YY.componentType])&&void 0!==rY?rY:YY.componentType} ${YY.type}`
    }

    function TY(YY) {
      const rY = rY => {
        var DY;
        return null !== (DY = YY[rY]) && void 0 !== DY ? DY : -1
      };
      return 255 === rY(0) && 216 === rY(1) ? "JPEG" : 82 === rY(0) && 73 === rY(1) && 87 === rY(8) && 69 === rY(9) ? "WebP" : 171 === rY(0) && 75 === rY(1) && 84 === rY(2) && 88 === rY(3) ? "KTX2" : "non-PNG"
    }

    function eY(YY) {
      return YY.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((rY, DY) => YY[DY] === rY)) && 73 === YY[12] && 72 === YY[13] && 68 === YY[14] && 82 === YY[15]
    }

    function NY(YY) {
      return /^[aeiou]/i.test(YY) ? `an ${YY}` : `a ${YY}`
    }

    function BY(YY) {
      const rY = YY.byteStride;
      return void 0 === rY || Number.isInteger(rY) && rY >= 4 && rY <= 252 && rY % 4 === 0
    }

    function cY(YY, rY, DY) {
      var FY, AY;
      const IY = null === (FY = YY.bufferViews) || void 0 === FY ? void 0 : FY[DY];
      if (!IY || !rY || 0 !== IY.buffer) return null;
      const RY = null !== (AY = IY.byteOffset) && void 0 !== AY ? AY : 0;
      return !mY(RY) || !mY(IY.byteLength) || RY + IY.byteLength > rY.byteLength ? null : rY.subarray(RY, RY + IY.byteLength)
    }

    function KY(YY, rY) {
      var DY, AY, IY;
      const RY = FY.t[rY.type],
        OY = FY.d[rY.componentType];
      if (!RY || !OY || !Number.isInteger(rY.count) || rY.count < 0) return !1;
      if (void 0 === rY.bufferView) return !0;
      const gY = null === (DY = YY.bufferViews) || void 0 === DY ? void 0 : DY[rY.bufferView],
        aY = null !== (AY = rY.byteOffset) && void 0 !== AY ? AY : 0;
      if (!gY || !mY(aY) || aY % OY !== 0) return !1;
      const vY = RY * OY,
        uY = null !== (IY = gY.byteStride) && void 0 !== IY ? IY : vY;
      if (uY < vY) return !1;
      return (0 === rY.count ? 0 : aY + uY * (rY.count - 1) + vY) <= gY.byteLength
    }

    function HY(YY) {
      return YY > AY.fileBytes ? `is ${(YY/RY).toFixed(1)} MiB (the limit is ${AY.fileBytes/RY} MiB)` : null
    }

    function zY(YY, rY) {
      try {
        return function(YY, rY) {
          var DY, RY, uY, oY, mY, HY, zY, ZY, CY, fY, jY, hY, dY, JY, MY, wY, bY;
          const XY = Array.isArray(YY.extensionsUsed) && YY.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(YY, rY) {
              var DY, FY;
              const {
                items: AY,
                perFile: RY,
                surfaces: OY,
                few: gY,
                bounds: aY,
                attributeMembers: vY
              } = IY;
              if (VY(YY.extensionsRequired, gY) || VY(YY.animations, 1 / 0) || VY(YY.skins, 1 / 0)) return !0;
              if (null !== (DY = YY.animations) && void 0 !== DY && DY.length || null !== (FY = YY.skins) && void 0 !== FY && FY.length) return !1;
              if ([
                  [YY.buffers, gY],
                  [YY.scenes, gY],
                  [YY.bufferViews, AY],
                  [YY.accessors, AY],
                  [YY.nodes, AY],
                  [YY.meshes, AY],
                  [YY.materials, OY],
                  [YY.textures, OY],
                  [YY.samplers, OY],
                  [YY.images, OY]
                ].some((YY => {
                  let [rY, DY] = YY;
                  return VY(rY, DY)
                }))) return !0;
              for (const IY of null !== (uY = YY.accessors) && void 0 !== uY ? uY : []) {
                var uY, sY, iY;
                if (Number.isInteger(IY.count) && (!Number.isSafeInteger(IY.count) || Object.is(IY.count, -0)) || VY(null !== (sY = IY.min) && void 0 !== sY ? sY : void 0, aY) || VY(null !== (iY = IY.max) && void 0 !== iY ? iY : void 0, aY)) return !0
              }
              for (const IY of null !== (yY = YY.scenes) && void 0 !== yY ? yY : []) {
                var yY;
                if (VY(IY.nodes, AY)) return !0
              }
              let QY = 0;
              for (const IY of null !== (oY = YY.nodes) && void 0 !== oY ? oY : []) {
                var oY, WY, EY;
                if (VY(IY.children, RY)) return !0;
                QY += null !== (WY = null === (EY = IY.children) || void 0 === EY ? void 0 : EY.length) && void 0 !== WY ? WY : 0
              }
              if (QY > RY) return !0;
              let mY = 0;
              for (const IY of null !== (lY = YY.meshes) && void 0 !== lY ? lY : []) {
                var lY;
                if (!Array.isArray(IY.primitives)) return !0;
                if (mY += IY.primitives.length, mY > RY) return !0;
                for (const YY of IY.primitives) {
                  var TY;
                  const DY = rY ? null === (TY = YY.extensions) || void 0 === TY ? void 0 : TY.KHR_draco_mesh_compression : void 0;
                  if (SY(YY.attributes, vY) || SY(null === DY || void 0 === DY ? void 0 : DY.attributes, vY)) return !0
                }
              }
              return !1
            }(YY, XY)) return OY;
          const qY = null === (DY = YY.asset) || void 0 === DY ? void 0 : DY.version;
          if ("string" !== typeof qY || !/^2\.\d+/.test(qY)) return `uses glTF version ${null!==qY&&void 0!==qY?qY:"(none)"}`;
          const pY = null === (RY = YY.asset) || void 0 === RY ? void 0 : RY.minVersion;
          if (void 0 !== pY && "2.0" !== pY) return `uses glTF version ${pY}`;
          for (const FY of null !== (kY = YY.extensionsRequired) && void 0 !== kY ? kY : []) {
            var kY;
            if (!aY.has(FY)) return `requires the glTF extension ${FY}`
          }
          if (null !== (uY = YY.animations) && void 0 !== uY && uY.length) return "has animations";
          if (null !== (oY = YY.skins) && void 0 !== oY && oY.length) return "uses skins";
          const GY = null !== (mY = YY.buffers) && void 0 !== mY ? mY : [];
          for (const [FY, AY] of GY.entries()) {
            if (void 0 !== AY.uri) return gY;
            if (FY > 0 || !rY) return OY
          }
          for (const [FY, AY] of(null !== (xY = YY.bufferViews) && void 0 !== xY ? xY : []).entries()) {
            var xY;
            if (!cY(YY, rY, FY) || !BY(AY)) return OY
          }
          const nY = null !== (HY = YY.accessors) && void 0 !== HY ? HY : [];
          for (const FY of nY) {
            if (void 0 !== FY.sparse) return "uses sparse accessors";
            const rY = Number.isInteger(FY.count) ? WY(FY.count, AY.accessorElements, "elements in an accessor") : null;
            if (rY) return rY;
            if (!KY(YY, FY)) return OY
          }
          const PY = null !== (zY = YY.scenes) && void 0 !== zY ? zY : [];
          if (1 !== PY.length) return `has ${PY.length} scenes`;
          const UY = (0, FY.A)(YY);
          if (void 0 !== UY && 0 !== UY) return OY;
          const LY = null !== (ZY = YY.nodes) && void 0 !== ZY ? ZY : [],
            tY = null !== (CY = YY.meshes) && void 0 !== CY ? CY : [],
            Yr = null !== (fY = YY.materials) && void 0 !== fY ? fY : [],
            rr = null !== (jY = YY.textures) && void 0 !== jY ? jY : [],
            Dr = null !== (hY = YY.images) && void 0 !== hY ? hY : [],
            Fr = null !== (dY = null !== (JY = null !== (MY = WY(LY.length, AY.nodes, "nodes")) && void 0 !== MY ? MY : WY(tY.length, AY.meshes, "meshes")) && void 0 !== JY ? JY : WY(Yr.length, AY.materials, "materials")) && void 0 !== dY ? dY : WY(Dr.length, AY.images, "images");
          if (Fr) return Fr;
          const Ar = new Set;
          for (const FY of LY)
            for (const YY of null !== (Ir = FY.children) && void 0 !== Ir ? Ir : []) {
              var Ir;
              if (!EY(YY, LY.length) || Ar.has(YY)) return OY;
              Ar.add(YY)
            }
          const Rr = new Set,
            Or = YY => {
              var rY;
              return !Rr.has(YY) && (Rr.add(YY), (null !== (rY = LY[YY].children) && void 0 !== rY ? rY : []).every(Or))
            };
          for (const FY of null !== (gr = PY[0].nodes) && void 0 !== gr ? gr : []) {
            var gr;
            if (!EY(FY, LY.length) || Ar.has(FY) || !Or(FY)) return OY
          }
          for (const FY of LY) {
            if (void 0 !== FY.matrix) return "uses node matrices";
            if (void 0 !== FY.skin) return "uses skins";
            if (void 0 !== FY.weights) return "uses morph targets";
            if (void 0 !== FY.mesh && !EY(FY.mesh, tY.length)) return OY;
            const YY = [
              [FY.translation, 3],
              [FY.rotation, 4],
              [FY.scale, 3]
            ];
            for (const [rY, DY] of YY)
              if (void 0 !== rY && (!Array.isArray(rY) || rY.length !== DY || !rY.every((YY => Number.isFinite(YY))))) return OY
          }
          let ar = -1,
            vr = 0,
            ur = 0,
            sr = null;
          for (const AY of tY) {
            if (void 0 !== AY.weights) return "uses morph targets";
            if (0 === AY.primitives.length) return OY;
            for (const DY of AY.primitives) {
              var ir, yr;
              const AY = null !== (ir = DY.mode) && void 0 !== ir ? ir : 4;
              var Qr;
              if (4 !== AY && 0 !== AY) return `uses ${null!==(Qr=yY[AY])&&void 0!==Qr?Qr:`mode ${AY}`} primitives`;
              if (void 0 !== DY.targets) return "uses morph targets";
              if (void 0 !== DY.material && !EY(DY.material, Yr.length)) return OY;
              const IY = XY ? null === (yr = DY.extensions) || void 0 === yr ? void 0 : yr.KHR_draco_mesh_compression : void 0;
              if (IY) {
                if (4 !== AY) return "uses Draco-compressed points";
                if (!cY(YY, rY, IY.bufferView) || "object" !== typeof IY.attributes) return OY
              }
              const RY = DY.attributes;
              if ("object" !== typeof RY || null === RY) return OY;
              if (void 0 === RY.POSITION) return "has a primitive with no positions";
              if (!EY(RY.POSITION, nY.length)) return OY;
              const gY = nY[RY.POSITION].count;
              for (const [YY, rY] of Object.entries(RY)) {
                if (!EY(rY, nY.length)) return OY;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(YY)) return "uses skins";
                const DY = nY[rY],
                  FY = vY[YY];
                if (FY && (DY.componentType !== QY || DY.normalized || DY.type !== FY)) return `stores ${YY} as ${lY(DY)}`;
                const AY = sY[YY];
                if (AY && (DY.type !== AY.type || !AY.componentTypes.includes(DY.componentType) || DY.componentType === QY === !!DY.normalized)) return `stores ${YY} as ${lY(DY)}`;
                if (iY.has(YY) && DY.count !== gY) return "has vertex attributes of different lengths"
              }
              if (IY) {
                if (void 0 === DY.indices) return OY;
                for (const rY in IY.attributes)
                  if (iY.has(rY) && void 0 === RY[rY]) return OY;
                if (void 0 === IY.attributes.POSITION) return OY;
                const YY = EY(DY.indices, nY.length) ? nY[DY.indices].count : -1;
                if (0 === YY) return OY;
                if (-1 === ar) ar = IY.bufferView, vr = gY, ur = YY;
                else {
                  sr ??= new Map([
                    [ar, [vr, ur]]
                  ]);
                  const rY = sr.get(IY.bufferView);
                  if (rY && (rY[0] !== gY || rY[1] !== YY)) return OY;
                  sr.set(IY.bufferView, null !== rY && void 0 !== rY ? rY : [gY, YY])
                }
              }
              let aY = gY;
              if (void 0 !== DY.indices) {
                if (!EY(DY.indices, nY.length)) return OY;
                const YY = nY[DY.indices];
                if ("SCALAR" !== YY.type) return OY;
                if (5121 === YY.componentType) return "uses 8-bit indices";
                var or;
                if (5123 !== YY.componentType && 5125 !== YY.componentType) return `stores indices as ${null!==(or=FY.e[YY.componentType])&&void 0!==or?or:YY.componentType}`;
                if (!IY && void 0 === YY.bufferView) return OY;
                aY = YY.count
              }
              if (4 === AY && aY % 3 !== 0) return OY
            }
          }
          let Wr = 0,
            Er = 0,
            mr = 0;
          for (let FY = 0; FY < LY.length; FY++) {
            const YY = LY[FY].mesh;
            if (void 0 !== YY && Rr.has(FY))
              for (const rY of tY[YY].primitives) mr++, Wr += nY[rY.attributes.POSITION].count, void 0 !== rY.indices && (Er += nY[rY.indices].count)
          }
          const Vr = null !== (wY = null !== (bY = WY(Wr, AY.vertices, "vertices")) && void 0 !== bY ? bY : WY(Er, AY.indices, "indices")) && void 0 !== wY ? wY : WY(mr, AY.primitives, "primitives");
          if (Vr) return Vr;
          for (const FY of Yr) {
            var Sr, lr;
            if (void 0 !== FY.emissiveTexture) return "uses an emissive texture";
            const rY = null !== (Sr = FY.alphaMode) && void 0 !== Sr ? Sr : "OPAQUE";
            if ("OPAQUE" !== rY && "MASK" !== rY && "BLEND" !== rY) return OY;
            const DY = null === (lr = FY.pbrMetallicRoughness) || void 0 === lr ? void 0 : lr.baseColorTexture;
            if (DY) {
              var Tr, er, Nr, Br, cr;
              const rY = null !== (Tr = YY.extensionsUsed) && void 0 !== Tr && Tr.includes("KHR_texture_transform") ? null === (er = DY.extensions) || void 0 === er ? void 0 : er.KHR_texture_transform : void 0;
              if (0 !== (null !== (Nr = DY.texCoord) && void 0 !== Nr ? Nr : 0) || 0 !== (null !== (Br = null === rY || void 0 === rY ? void 0 : rY.texCoord) && void 0 !== Br ? Br : 0)) return "uses a second UV set";
              const FY = rr[DY.index];
              if (!FY || !EY(FY.source, Dr.length) || void 0 !== FY.sampler && !EY(FY.sampler, null === (cr = YY.samplers) || void 0 === cr ? void 0 : cr.length)) return OY
            }
          }
          for (const FY of Dr) {
            if (void 0 !== FY.uri) return gY;
            if (void 0 === FY.bufferView) return OY;
            const DY = cY(YY, rY, FY.bufferView);
            if (!DY) return OY;
            if ("image/png" !== FY.mimeType) {
              var Kr, Hr, zr;
              return `has ${NY(null!==(Kr=null!==(Hr={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(zr=FY.mimeType)&&void 0!==zr?zr:""])&&void 0!==Hr?Hr:FY.mimeType)&&void 0!==Kr?Kr:"untyped")} image`
            }
            if (!eY(DY)) return `has ${NY(TY(DY))} image`;
            const IY = new DataView(DY.buffer, DY.byteOffset, DY.byteLength),
              RY = IY.getUint32(16),
              aY = IY.getUint32(20);
            if (RY > AY.imageSide || aY > AY.imageSide) return `has a ${RY} \xd7 ${aY} image (the limit is ${AY.imageSide})`
          }
          return null
        }(YY, rY)
      } catch {
        return OY
      }
    }

    function ZY(YY) {
      const rY = HY(YY.byteLength);
      if (rY) return rY;
      try {
        const {
          json: rY,
          bin: DY
        } = (0, FY.B)(YY);
        return zY(rY, DY)
      } catch (DY) {
        if (DY instanceof FY.p) return DY.reason;
        throw DY
      }
    }
  },
  8809: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => RY,
      B: () => aY,
      d: () => iY,
      e: () => sY,
      i: () => QY,
      l: () => IY,
      p: () => AY,
      t: () => yY,
      u: () => vY,
      x: () => uY
    });
    var FY = DY(8816);
    class AY extends Error {
      constructor(YY) {
        super(`GLB refused: it ${YY}`), this.reason = YY, this.name = "GlbRefused"
      }
    }
    class IY extends Error {
      constructor(YY) {
        super(YY), this.name = "GlbError"
      }
    }

    function RY(YY) {
      return Reflect.get(YY, "scene")
    }
    const OY = 5130562,
      gY = "is not a binary glTF 2.0 file";

    function aY(YY) {
      var rY;
      const DY = YY instanceof Uint8Array ? YY : new Uint8Array(YY),
        IY = (0, FY.h)(DY);
      if (null === IY) throw new AY(gY);
      const RY = IY.json,
        {
          jsonEnd: aY,
          length: vY
        } = IY,
        uY = new DataView(DY.buffer, DY.byteOffset, DY.byteLength);
      let sY = -1,
        iY = 0;
      for (let oY = aY; oY < vY;) {
        if (oY + 8 > vY) throw new AY(gY);
        const YY = uY.getUint32(oY, !0),
          rY = uY.getUint32(oY + 4, !0);
        if (oY + 8 + YY > vY || rY === FY.d || rY === OY && -1 !== sY) throw new AY(gY);
        rY === OY && (sY = oY + 8, iY = YY), oY += 8 + YY
      }
      let yY = null;
      const QY = null === (rY = RY.buffers) || void 0 === rY ? void 0 : rY[0];
      if (-1 !== sY && QY && void 0 === QY.uri) {
        if (!(QY.byteLength >= 0) || QY.byteLength > iY) throw new AY(gY);
        yY = new Uint8Array(DY.buffer, DY.byteOffset + sY, QY.byteLength)
      }
      return {
        json: RY,
        bin: yY,
        fileBytes: DY.byteLength
      }
    }

    function vY(YY) {
      const rY = YY.slice(YY.indexOf(",") + 1),
        DY = Uint8Array.fromBase64;
      if (DY) return DY(rY).buffer;
      const FY = atob(rY),
        AY = new Uint8Array(FY.length);
      for (let IY = 0; IY < FY.length; IY++) AY[IY] = FY.charCodeAt(IY);
      return AY.buffer
    }
    async function uY(YY) {
      if (YY.startsWith("data:")) return vY(YY);
      const rY = await fetch(YY);
      if (!rY.ok) throw new IY(`fetching ${YY} failed: ${rY.status} ${rY.statusText}`);
      return await rY.arrayBuffer()
    }
    const sY = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      iY = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      yY = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      QY = [
        ["POSITION", "position"],
        ["NORMAL", "normal"],
        ["TANGENT", "tangent"],
        ["TEXCOORD_0", "uv"],
        ["TEXCOORD_1", "uv2"],
        ["TEXCOORD_2", "uv3"],
        ["TEXCOORD_3", "uv4"],
        ["TEXCOORD_4", "uv5"],
        ["TEXCOORD_5", "uv6"],
        ["COLOR_0", "color"]
      ]
  },
  8816: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      h: () => IY,
      i: () => RY
    });
    const FY = 1179937895,
      AY = 1313821514;

    function IY(YY) {
      const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
      if (YY.byteLength < 20 || rY.getUint32(0, !0) !== FY || 2 !== rY.getUint32(4, !0)) return null;
      const DY = Math.min(rY.getUint32(8, !0), YY.byteLength),
        IY = rY.getUint32(12, !0);
      if (rY.getUint32(16, !0) !== AY || 20 + IY > DY) return null;
      let RY;
      try {
        RY = JSON.parse((new TextDecoder).decode(YY.subarray(20, 20 + IY)))
      } catch {
        return null
      }
      return "object" === typeof RY && null !== RY ? {
        json: RY,
        jsonEnd: 20 + IY,
        length: DY
      } : null
    }

    function RY(YY) {
      var rY;
      const DY = null === (rY = IY(YY)) || void 0 === rY ? void 0 : rY.json;
      if (void 0 === DY || !Array.isArray(DY.extensionsUsed) || !DY.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const FY = DY.meshes;
      return Array.isArray(FY) && FY.some((YY => {
        const rY = null === YY || void 0 === YY ? void 0 : YY.primitives;
        return Array.isArray(rY) && rY.some((YY => {
          const rY = null === YY || void 0 === YY ? void 0 : YY.extensions;
          return null != (null === rY || void 0 === rY ? void 0 : rY.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);