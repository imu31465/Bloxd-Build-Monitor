export const id = 227;
export const ids = [227];
export const modules = {
  35067: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => lH,
      c: () => fH,
      g: () => IH
    });
    var AH = LH(35071);
    const rH = {
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
      SH = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      hH = 1048576,
      tH = "is not a binary glTF 2.0 file",
      zH = "loads data from outside the file",
      CH = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      EH = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      XH = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      GH = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: XH,
        TEXCOORD_2: XH,
        TEXCOORD_3: XH,
        TEXCOORD_4: XH,
        TEXCOORD_5: XH
      },
      YH = new Set(AH.g.map((HH => {
        let [BH] = HH;
        return BH
      }))),
      uH = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      QH = 5126;

    function WH(HH) {
      return HH.toLocaleString("en-US")
    }

    function MH(HH, BH, LH) {
      return HH > BH ? `has ${WH(HH)} ${LH} (the limit is ${WH(BH)})` : null
    }

    function xH(HH, BH) {
      return Number.isInteger(HH) && HH >= 0 && HH < (null !== BH && void 0 !== BH ? BH : 0)
    }

    function vH(HH) {
      return Number.isInteger(HH) && HH >= 0
    }

    function PH(HH, BH) {
      return void 0 !== HH && (!Array.isArray(HH) || HH.length > BH)
    }

    function TH(HH, BH) {
      return "object" === typeof HH && null !== HH && Object.keys(HH).length > BH
    }

    function UH(HH) {
      var BH;
      return `${HH.normalized?"normalized ":""}${null!==(BH=AH.e[HH.componentType])&&void 0!==BH?BH:HH.componentType} ${HH.type}`
    }

    function VH(HH) {
      const BH = BH => {
        var LH;
        return null !== (LH = HH[BH]) && void 0 !== LH ? LH : -1
      };
      return 255 === BH(0) && 216 === BH(1) ? "JPEG" : 82 === BH(0) && 73 === BH(1) && 87 === BH(8) && 69 === BH(9) ? "WebP" : 171 === BH(0) && 75 === BH(1) && 84 === BH(2) && 88 === BH(3) ? "KTX2" : "non-PNG"
    }

    function OH(HH) {
      return HH.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((BH, LH) => HH[LH] === BH)) && 73 === HH[12] && 72 === HH[13] && 68 === HH[14] && 82 === HH[15]
    }

    function bH(HH) {
      return /^[aeiou]/i.test(HH) ? `an ${HH}` : `a ${HH}`
    }

    function kH(HH) {
      const BH = HH.byteStride;
      return void 0 === BH || Number.isInteger(BH) && BH >= 4 && BH <= 252 && BH % 4 === 0
    }

    function mH(HH, BH, LH) {
      var AH, rH;
      const SH = null === (AH = HH.bufferViews) || void 0 === AH ? void 0 : AH[LH];
      if (!SH || !BH || 0 !== SH.buffer) return null;
      const hH = null !== (rH = SH.byteOffset) && void 0 !== rH ? rH : 0;
      return !vH(hH) || !vH(SH.byteLength) || hH + SH.byteLength > BH.byteLength ? null : BH.subarray(hH, hH + SH.byteLength)
    }

    function oH(HH, BH) {
      var LH, rH, SH;
      const hH = AH.p[BH.type],
        tH = AH.d[BH.componentType];
      if (!hH || !tH || !Number.isInteger(BH.count) || BH.count < 0) return !1;
      if (void 0 === BH.bufferView) return !0;
      const zH = null === (LH = HH.bufferViews) || void 0 === LH ? void 0 : LH[BH.bufferView],
        CH = null !== (rH = BH.byteOffset) && void 0 !== rH ? rH : 0;
      if (!zH || !vH(CH) || CH % tH !== 0) return !1;
      const EH = hH * tH,
        XH = null !== (SH = zH.byteStride) && void 0 !== SH ? SH : EH;
      if (XH < EH) return !1;
      return (0 === BH.count ? 0 : CH + XH * (BH.count - 1) + EH) <= zH.byteLength
    }

    function IH(HH) {
      return HH > rH.fileBytes ? `is ${(HH/hH).toFixed(1)} MiB (the limit is ${rH.fileBytes/hH} MiB)` : null
    }

    function fH(HH, BH) {
      try {
        return function(HH, BH) {
          var LH, hH, XH, WH, vH, IH, fH, lH, KH, cH, eH, qH, gH, NH, RH, jH, nH;
          const FH = Array.isArray(HH.extensionsUsed) && HH.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(HH, BH) {
              var LH, AH;
              const {
                items: rH,
                perFile: hH,
                surfaces: tH,
                few: zH,
                bounds: CH,
                attributeMembers: EH
              } = SH;
              if (PH(HH.extensionsRequired, zH) || PH(HH.animations, 1 / 0) || PH(HH.skins, 1 / 0)) return !0;
              if (null !== (LH = HH.animations) && void 0 !== LH && LH.length || null !== (AH = HH.skins) && void 0 !== AH && AH.length) return !1;
              if ([
                  [HH.buffers, zH],
                  [HH.scenes, zH],
                  [HH.bufferViews, rH],
                  [HH.accessors, rH],
                  [HH.nodes, rH],
                  [HH.meshes, rH],
                  [HH.materials, tH],
                  [HH.textures, tH],
                  [HH.samplers, tH],
                  [HH.images, tH]
                ].some((HH => {
                  let [BH, LH] = HH;
                  return PH(BH, LH)
                }))) return !0;
              for (const SH of null !== (XH = HH.accessors) && void 0 !== XH ? XH : []) {
                var XH, GH, YH;
                if (Number.isInteger(SH.count) && (!Number.isSafeInteger(SH.count) || Object.is(SH.count, -0)) || PH(null !== (GH = SH.min) && void 0 !== GH ? GH : void 0, CH) || PH(null !== (YH = SH.max) && void 0 !== YH ? YH : void 0, CH)) return !0
              }
              for (const SH of null !== (uH = HH.scenes) && void 0 !== uH ? uH : []) {
                var uH;
                if (PH(SH.nodes, rH)) return !0
              }
              let QH = 0;
              for (const SH of null !== (WH = HH.nodes) && void 0 !== WH ? WH : []) {
                var WH, MH, xH;
                if (PH(SH.children, hH)) return !0;
                QH += null !== (MH = null === (xH = SH.children) || void 0 === xH ? void 0 : xH.length) && void 0 !== MH ? MH : 0
              }
              if (QH > hH) return !0;
              let vH = 0;
              for (const SH of null !== (UH = HH.meshes) && void 0 !== UH ? UH : []) {
                var UH;
                if (!Array.isArray(SH.primitives)) return !0;
                if (vH += SH.primitives.length, vH > hH) return !0;
                for (const HH of SH.primitives) {
                  var VH;
                  const LH = BH ? null === (VH = HH.extensions) || void 0 === VH ? void 0 : VH.KHR_draco_mesh_compression : void 0;
                  if (TH(HH.attributes, EH) || TH(null === LH || void 0 === LH ? void 0 : LH.attributes, EH)) return !0
                }
              }
              return !1
            }(HH, FH)) return tH;
          const DH = null === (LH = HH.asset) || void 0 === LH ? void 0 : LH.version;
          if ("string" !== typeof DH || !/^2\.\d+/.test(DH)) return `uses glTF version ${null!==DH&&void 0!==DH?DH:"(none)"}`;
          const wH = null === (hH = HH.asset) || void 0 === hH ? void 0 : hH.minVersion;
          if (void 0 !== wH && "2.0" !== wH) return `uses glTF version ${wH}`;
          for (const AH of null !== (ZH = HH.extensionsRequired) && void 0 !== ZH ? ZH : []) {
            var ZH;
            if (!CH.has(AH)) return `requires the glTF extension ${AH}`
          }
          if (null !== (XH = HH.animations) && void 0 !== XH && XH.length) return "has animations";
          if (null !== (WH = HH.skins) && void 0 !== WH && WH.length) return "uses skins";
          const dH = null !== (vH = HH.buffers) && void 0 !== vH ? vH : [];
          for (const [AH, rH] of dH.entries()) {
            if (void 0 !== rH.uri) return zH;
            if (AH > 0 || !BH) return tH
          }
          for (const [AH, rH] of(null !== (aH = HH.bufferViews) && void 0 !== aH ? aH : []).entries()) {
            var aH;
            if (!mH(HH, BH, AH) || !kH(rH)) return tH
          }
          const sH = null !== (IH = HH.accessors) && void 0 !== IH ? IH : [];
          for (const AH of sH) {
            if (void 0 !== AH.sparse) return "uses sparse accessors";
            const BH = Number.isInteger(AH.count) ? MH(AH.count, rH.accessorElements, "elements in an accessor") : null;
            if (BH) return BH;
            if (!oH(HH, AH)) return tH
          }
          const JH = null !== (fH = HH.scenes) && void 0 !== fH ? fH : [];
          if (1 !== JH.length) return `has ${JH.length} scenes`;
          const iH = (0, AH.v)(HH);
          if (void 0 !== iH && 0 !== iH) return tH;
          const pH = null !== (lH = HH.nodes) && void 0 !== lH ? lH : [],
            yH = null !== (KH = HH.meshes) && void 0 !== KH ? KH : [],
            HB = null !== (cH = HH.materials) && void 0 !== cH ? cH : [],
            BB = null !== (eH = HH.textures) && void 0 !== eH ? eH : [],
            LB = null !== (qH = HH.images) && void 0 !== qH ? qH : [],
            AB = null !== (gH = null !== (NH = null !== (RH = MH(pH.length, rH.nodes, "nodes")) && void 0 !== RH ? RH : MH(yH.length, rH.meshes, "meshes")) && void 0 !== NH ? NH : MH(HB.length, rH.materials, "materials")) && void 0 !== gH ? gH : MH(LB.length, rH.images, "images");
          if (AB) return AB;
          const rB = new Set;
          for (const AH of pH)
            for (const HH of null !== (SB = AH.children) && void 0 !== SB ? SB : []) {
              var SB;
              if (!xH(HH, pH.length) || rB.has(HH)) return tH;
              rB.add(HH)
            }
          const hB = new Set,
            tB = HH => {
              var BH;
              return !hB.has(HH) && (hB.add(HH), (null !== (BH = pH[HH].children) && void 0 !== BH ? BH : []).every(tB))
            };
          for (const AH of null !== (zB = JH[0].nodes) && void 0 !== zB ? zB : []) {
            var zB;
            if (!xH(AH, pH.length) || rB.has(AH) || !tB(AH)) return tH
          }
          for (const AH of pH) {
            if (void 0 !== AH.matrix) return "uses node matrices";
            if (void 0 !== AH.skin) return "uses skins";
            if (void 0 !== AH.weights) return "uses morph targets";
            if (void 0 !== AH.mesh && !xH(AH.mesh, yH.length)) return tH;
            const HH = [
              [AH.translation, 3],
              [AH.rotation, 4],
              [AH.scale, 3]
            ];
            for (const [BH, LH] of HH)
              if (void 0 !== BH && (!Array.isArray(BH) || BH.length !== LH || !BH.every((HH => Number.isFinite(HH))))) return tH
          }
          let CB = -1,
            EB = 0,
            XB = 0,
            GB = null;
          for (const rH of yH) {
            if (void 0 !== rH.weights) return "uses morph targets";
            if (0 === rH.primitives.length) return tH;
            for (const LH of rH.primitives) {
              var YB, uB;
              const rH = null !== (YB = LH.mode) && void 0 !== YB ? YB : 4;
              var QB;
              if (4 !== rH && 0 !== rH) return `uses ${null!==(QB=uH[rH])&&void 0!==QB?QB:`mode ${rH}`} primitives`;
              if (void 0 !== LH.targets) return "uses morph targets";
              if (void 0 !== LH.material && !xH(LH.material, HB.length)) return tH;
              const SH = FH ? null === (uB = LH.extensions) || void 0 === uB ? void 0 : uB.KHR_draco_mesh_compression : void 0;
              if (SH) {
                if (4 !== rH) return "uses Draco-compressed points";
                if (!mH(HH, BH, SH.bufferView) || "object" !== typeof SH.attributes) return tH
              }
              const hH = LH.attributes;
              if ("object" !== typeof hH || null === hH) return tH;
              if (void 0 === hH.POSITION) return "has a primitive with no positions";
              if (!xH(hH.POSITION, sH.length)) return tH;
              const zH = sH[hH.POSITION].count;
              for (const [HH, BH] of Object.entries(hH)) {
                if (!xH(BH, sH.length)) return tH;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(HH)) return "uses skins";
                const LH = sH[BH],
                  AH = EH[HH];
                if (AH && (LH.componentType !== QH || LH.normalized || LH.type !== AH)) return `stores ${HH} as ${UH(LH)}`;
                const rH = GH[HH];
                if (rH && (LH.type !== rH.type || !rH.componentTypes.includes(LH.componentType) || LH.componentType === QH === !!LH.normalized)) return `stores ${HH} as ${UH(LH)}`;
                if (YH.has(HH) && LH.count !== zH) return "has vertex attributes of different lengths"
              }
              if (SH) {
                if (void 0 === LH.indices) return tH;
                for (const BH in SH.attributes)
                  if (YH.has(BH) && void 0 === hH[BH]) return tH;
                if (void 0 === SH.attributes.POSITION) return tH;
                const HH = xH(LH.indices, sH.length) ? sH[LH.indices].count : -1;
                if (0 === HH) return tH;
                if (-1 === CB) CB = SH.bufferView, EB = zH, XB = HH;
                else {
                  GB ??= new Map([
                    [CB, [EB, XB]]
                  ]);
                  const BH = GB.get(SH.bufferView);
                  if (BH && (BH[0] !== zH || BH[1] !== HH)) return tH;
                  GB.set(SH.bufferView, null !== BH && void 0 !== BH ? BH : [zH, HH])
                }
              }
              let CH = zH;
              if (void 0 !== LH.indices) {
                if (!xH(LH.indices, sH.length)) return tH;
                const HH = sH[LH.indices];
                if ("SCALAR" !== HH.type) return tH;
                if (5121 === HH.componentType) return "uses 8-bit indices";
                var WB;
                if (5123 !== HH.componentType && 5125 !== HH.componentType) return `stores indices as ${null!==(WB=AH.e[HH.componentType])&&void 0!==WB?WB:HH.componentType}`;
                if (!SH && void 0 === HH.bufferView) return tH;
                CH = HH.count
              }
              if (4 === rH && CH % 3 !== 0) return tH
            }
          }
          let MB = 0,
            xB = 0,
            vB = 0;
          for (let AH = 0; AH < pH.length; AH++) {
            const HH = pH[AH].mesh;
            if (void 0 !== HH && hB.has(AH))
              for (const BH of yH[HH].primitives) vB++, MB += sH[BH.attributes.POSITION].count, void 0 !== BH.indices && (xB += sH[BH.indices].count)
          }
          const PB = null !== (jH = null !== (nH = MH(MB, rH.vertices, "vertices")) && void 0 !== nH ? nH : MH(xB, rH.indices, "indices")) && void 0 !== jH ? jH : MH(vB, rH.primitives, "primitives");
          if (PB) return PB;
          for (const AH of HB) {
            var TB, UB;
            if (void 0 !== AH.emissiveTexture) return "uses an emissive texture";
            const BH = null !== (TB = AH.alphaMode) && void 0 !== TB ? TB : "OPAQUE";
            if ("OPAQUE" !== BH && "MASK" !== BH && "BLEND" !== BH) return tH;
            const LH = null === (UB = AH.pbrMetallicRoughness) || void 0 === UB ? void 0 : UB.baseColorTexture;
            if (LH) {
              var VB, OB, bB, kB, mB;
              const BH = null !== (VB = HH.extensionsUsed) && void 0 !== VB && VB.includes("KHR_texture_transform") ? null === (OB = LH.extensions) || void 0 === OB ? void 0 : OB.KHR_texture_transform : void 0;
              if (0 !== (null !== (bB = LH.texCoord) && void 0 !== bB ? bB : 0) || 0 !== (null !== (kB = null === BH || void 0 === BH ? void 0 : BH.texCoord) && void 0 !== kB ? kB : 0)) return "uses a second UV set";
              const AH = BB[LH.index];
              if (!AH || !xH(AH.source, LB.length) || void 0 !== AH.sampler && !xH(AH.sampler, null === (mB = HH.samplers) || void 0 === mB ? void 0 : mB.length)) return tH
            }
          }
          for (const AH of LB) {
            if (void 0 !== AH.uri) return zH;
            if (void 0 === AH.bufferView) return tH;
            const LH = mH(HH, BH, AH.bufferView);
            if (!LH) return tH;
            if ("image/png" !== AH.mimeType) {
              var oB, IB, fB;
              return `has ${bH(null!==(oB=null!==(IB={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(fB=AH.mimeType)&&void 0!==fB?fB:""])&&void 0!==IB?IB:AH.mimeType)&&void 0!==oB?oB:"untyped")} image`
            }
            if (!OH(LH)) return `has ${bH(VH(LH))} image`;
            const SH = new DataView(LH.buffer, LH.byteOffset, LH.byteLength),
              hH = SH.getUint32(16),
              CH = SH.getUint32(20);
            if (hH > rH.imageSide || CH > rH.imageSide) return `has a ${hH} \xd7 ${CH} image (the limit is ${rH.imageSide})`
          }
          return null
        }(HH, BH)
      } catch {
        return tH
      }
    }

    function lH(HH) {
      const BH = IH(HH.byteLength);
      if (BH) return BH;
      try {
        const {
          json: BH,
          bin: LH
        } = (0, AH.z)(HH);
        return fH(BH, LH)
      } catch (LH) {
        if (LH instanceof AH.n) return LH.reason;
        throw LH
      }
    }
  },
  35071: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => uH,
      e: () => YH,
      g: () => WH,
      k: () => hH,
      n: () => SH,
      p: () => QH,
      q: () => XH,
      t: () => GH,
      v: () => tH,
      z: () => EH
    });
    const AH = 1179937895,
      rH = 1313821514;
    class SH extends Error {
      constructor(HH) {
        super(`GLB refused: it ${HH}`), this.reason = HH, this.name = "GlbRefused"
      }
    }
    class hH extends Error {
      constructor(HH) {
        super(HH), this.name = "GlbError"
      }
    }

    function tH(HH) {
      return Reflect.get(HH, "scene")
    }
    const zH = 5130562,
      CH = "is not a binary glTF 2.0 file";

    function EH(HH) {
      var BH;
      const LH = HH instanceof Uint8Array ? HH : new Uint8Array(HH),
        hH = function(HH) {
          const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
          if (HH.byteLength < 20 || BH.getUint32(0, !0) !== AH || 2 !== BH.getUint32(4, !0)) return null;
          const LH = Math.min(BH.getUint32(8, !0), HH.byteLength),
            SH = BH.getUint32(12, !0);
          if (BH.getUint32(16, !0) !== rH || 20 + SH > LH) return null;
          let hH;
          try {
            hH = JSON.parse((new TextDecoder).decode(HH.subarray(20, 20 + SH)))
          } catch {
            return null
          }
          return "object" === typeof hH && null !== hH ? {
            json: hH,
            jsonEnd: 20 + SH,
            length: LH
          } : null
        }(LH);
      if (null === hH) throw new SH(CH);
      const tH = hH.json,
        {
          jsonEnd: EH,
          length: XH
        } = hH,
        GH = new DataView(LH.buffer, LH.byteOffset, LH.byteLength);
      let YH = -1,
        uH = 0;
      for (let AH = EH; AH < XH;) {
        if (AH + 8 > XH) throw new SH(CH);
        const HH = GH.getUint32(AH, !0),
          BH = GH.getUint32(AH + 4, !0);
        if (AH + 8 + HH > XH || BH === rH || BH === zH && -1 !== YH) throw new SH(CH);
        BH === zH && (YH = AH + 8, uH = HH), AH += 8 + HH
      }
      let QH = null;
      const WH = null === (BH = tH.buffers) || void 0 === BH ? void 0 : BH[0];
      if (-1 !== YH && WH && void 0 === WH.uri) {
        if (!(WH.byteLength >= 0) || WH.byteLength > uH) throw new SH(CH);
        QH = new Uint8Array(LH.buffer, LH.byteOffset + YH, WH.byteLength)
      }
      return {
        json: tH,
        bin: QH,
        fileBytes: LH.byteLength
      }
    }

    function XH(HH) {
      const BH = HH.slice(HH.indexOf(",") + 1),
        LH = Uint8Array.fromBase64;
      if (LH) return LH(BH).buffer;
      const AH = atob(BH),
        rH = new Uint8Array(AH.length);
      for (let SH = 0; SH < AH.length; SH++) rH[SH] = AH.charCodeAt(SH);
      return rH.buffer
    }
    async function GH(HH) {
      if (HH.startsWith("data:")) return XH(HH);
      const BH = await fetch(HH);
      if (!BH.ok) throw new hH(`fetching ${HH} failed: ${BH.status} ${BH.statusText}`);
      return await BH.arrayBuffer()
    }
    const YH = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      uH = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      QH = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      WH = [
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
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);