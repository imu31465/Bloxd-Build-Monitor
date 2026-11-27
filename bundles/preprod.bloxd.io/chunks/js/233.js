export const id = 233;
export const ids = [233];
export const modules = {
  35324: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => oW,
      h: () => uW,
      l: () => nW
    });
    var mW = OW(35330);
    const EW = {
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
      NW = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      PW = 1048576,
      LW = "is not a binary glTF 2.0 file",
      cW = "loads data from outside the file",
      wW = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      tW = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      ZW = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      xW = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: ZW,
        TEXCOORD_2: ZW,
        TEXCOORD_3: ZW,
        TEXCOORD_4: ZW,
        TEXCOORD_5: ZW
      },
      lW = new Set(mW.i.map((WW => {
        let [iW] = WW;
        return iW
      }))),
      AW = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      bW = 5126;

    function jW(WW) {
      return WW.toLocaleString("en-US")
    }

    function UW(WW, iW, OW) {
      return WW > iW ? `has ${jW(WW)} ${OW} (the limit is ${jW(iW)})` : null
    }

    function kW(WW, iW) {
      return Number.isInteger(WW) && WW >= 0 && WW < (null !== iW && void 0 !== iW ? iW : 0)
    }

    function sW(WW) {
      return Number.isInteger(WW) && WW >= 0
    }

    function MW(WW, iW) {
      return void 0 !== WW && (!Array.isArray(WW) || WW.length > iW)
    }

    function KW(WW, iW) {
      return "object" === typeof WW && null !== WW && Object.keys(WW).length > iW
    }

    function SW(WW) {
      var iW;
      return `${WW.normalized?"normalized ":""}${null!==(iW=mW.e[WW.componentType])&&void 0!==iW?iW:WW.componentType} ${WW.type}`
    }

    function YW(WW) {
      const iW = iW => {
        var OW;
        return null !== (OW = WW[iW]) && void 0 !== OW ? OW : -1
      };
      return 255 === iW(0) && 216 === iW(1) ? "JPEG" : 82 === iW(0) && 73 === iW(1) && 87 === iW(8) && 69 === iW(9) ? "WebP" : 171 === iW(0) && 75 === iW(1) && 84 === iW(2) && 88 === iW(3) ? "KTX2" : "non-PNG"
    }

    function yW(WW) {
      return WW.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((iW, OW) => WW[OW] === iW)) && 73 === WW[12] && 72 === WW[13] && 68 === WW[14] && 82 === WW[15]
    }

    function TW(WW) {
      return /^[aeiou]/i.test(WW) ? `an ${WW}` : `a ${WW}`
    }

    function JW(WW) {
      const iW = WW.byteStride;
      return void 0 === iW || Number.isInteger(iW) && iW >= 4 && iW <= 252 && iW % 4 === 0
    }

    function hW(WW, iW, OW) {
      var mW, EW;
      const NW = null === (mW = WW.bufferViews) || void 0 === mW ? void 0 : mW[OW];
      if (!NW || !iW || 0 !== NW.buffer) return null;
      const PW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0;
      return !sW(PW) || !sW(NW.byteLength) || PW + NW.byteLength > iW.byteLength ? null : iW.subarray(PW, PW + NW.byteLength)
    }

    function HW(WW, iW) {
      var OW, EW, NW;
      const PW = mW.o[iW.type],
        LW = mW.c[iW.componentType];
      if (!PW || !LW || !Number.isInteger(iW.count) || iW.count < 0) return !1;
      if (void 0 === iW.bufferView) return !0;
      const cW = null === (OW = WW.bufferViews) || void 0 === OW ? void 0 : OW[iW.bufferView],
        wW = null !== (EW = iW.byteOffset) && void 0 !== EW ? EW : 0;
      if (!cW || !sW(wW) || wW % LW !== 0) return !1;
      const tW = PW * LW,
        ZW = null !== (NW = cW.byteStride) && void 0 !== NW ? NW : tW;
      if (ZW < tW) return !1;
      return (0 === iW.count ? 0 : wW + ZW * (iW.count - 1) + tW) <= cW.byteLength
    }

    function nW(WW) {
      return WW > EW.fileBytes ? `is ${(WW/PW).toFixed(1)} MiB (the limit is ${EW.fileBytes/PW} MiB)` : null
    }

    function uW(WW, iW) {
      try {
        return function(WW, iW) {
          var OW, PW, ZW, jW, sW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW, CW;
          const XW = Array.isArray(WW.extensionsUsed) && WW.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(WW, iW) {
              var OW, mW;
              const {
                items: EW,
                perFile: PW,
                surfaces: LW,
                few: cW,
                bounds: wW,
                attributeMembers: tW
              } = NW;
              if (MW(WW.extensionsRequired, cW) || MW(WW.animations, 1 / 0) || MW(WW.skins, 1 / 0)) return !0;
              if (null !== (OW = WW.animations) && void 0 !== OW && OW.length || null !== (mW = WW.skins) && void 0 !== mW && mW.length) return !1;
              if ([
                  [WW.buffers, cW],
                  [WW.scenes, cW],
                  [WW.bufferViews, EW],
                  [WW.accessors, EW],
                  [WW.nodes, EW],
                  [WW.meshes, EW],
                  [WW.materials, LW],
                  [WW.textures, LW],
                  [WW.samplers, LW],
                  [WW.images, LW]
                ].some((WW => {
                  let [iW, OW] = WW;
                  return MW(iW, OW)
                }))) return !0;
              for (const NW of null !== (ZW = WW.accessors) && void 0 !== ZW ? ZW : []) {
                var ZW, xW, lW;
                if (Number.isInteger(NW.count) && (!Number.isSafeInteger(NW.count) || Object.is(NW.count, -0)) || MW(null !== (xW = NW.min) && void 0 !== xW ? xW : void 0, wW) || MW(null !== (lW = NW.max) && void 0 !== lW ? lW : void 0, wW)) return !0
              }
              for (const NW of null !== (AW = WW.scenes) && void 0 !== AW ? AW : []) {
                var AW;
                if (MW(NW.nodes, EW)) return !0
              }
              let bW = 0;
              for (const NW of null !== (jW = WW.nodes) && void 0 !== jW ? jW : []) {
                var jW, UW, kW;
                if (MW(NW.children, PW)) return !0;
                bW += null !== (UW = null === (kW = NW.children) || void 0 === kW ? void 0 : kW.length) && void 0 !== UW ? UW : 0
              }
              if (bW > PW) return !0;
              let sW = 0;
              for (const NW of null !== (SW = WW.meshes) && void 0 !== SW ? SW : []) {
                var SW;
                if (!Array.isArray(NW.primitives)) return !0;
                if (sW += NW.primitives.length, sW > PW) return !0;
                for (const WW of NW.primitives) {
                  var YW;
                  const OW = iW ? null === (YW = WW.extensions) || void 0 === YW ? void 0 : YW.KHR_draco_mesh_compression : void 0;
                  if (KW(WW.attributes, tW) || KW(null === OW || void 0 === OW ? void 0 : OW.attributes, tW)) return !0
                }
              }
              return !1
            }(WW, XW)) return LW;
          const BW = null === (OW = WW.asset) || void 0 === OW ? void 0 : OW.version;
          if ("string" !== typeof BW || !/^2\.\d+/.test(BW)) return `uses glTF version ${null!==BW&&void 0!==BW?BW:"(none)"}`;
          const qW = null === (PW = WW.asset) || void 0 === PW ? void 0 : PW.minVersion;
          if (void 0 !== qW && "2.0" !== qW) return `uses glTF version ${qW}`;
          for (const mW of null !== (RW = WW.extensionsRequired) && void 0 !== RW ? RW : []) {
            var RW;
            if (!wW.has(mW)) return `requires the glTF extension ${mW}`
          }
          if (null !== (ZW = WW.animations) && void 0 !== ZW && ZW.length) return "has animations";
          if (null !== (jW = WW.skins) && void 0 !== jW && jW.length) return "uses skins";
          const GW = null !== (sW = WW.buffers) && void 0 !== sW ? sW : [];
          for (const [mW, EW] of GW.entries()) {
            if (void 0 !== EW.uri) return cW;
            if (mW > 0 || !iW) return LW
          }
          for (const [mW, EW] of(null !== (IW = WW.bufferViews) && void 0 !== IW ? IW : []).entries()) {
            var IW;
            if (!hW(WW, iW, mW) || !JW(EW)) return LW
          }
          const aW = null !== (nW = WW.accessors) && void 0 !== nW ? nW : [];
          for (const mW of aW) {
            if (void 0 !== mW.sparse) return "uses sparse accessors";
            const iW = Number.isInteger(mW.count) ? UW(mW.count, EW.accessorElements, "elements in an accessor") : null;
            if (iW) return iW;
            if (!HW(WW, mW)) return LW
          }
          const rW = null !== (uW = WW.scenes) && void 0 !== uW ? uW : [];
          if (1 !== rW.length) return `has ${rW.length} scenes`;
          const zW = (0, mW.v)(WW);
          if (void 0 !== zW && 0 !== zW) return LW;
          const FW = null !== (oW = WW.nodes) && void 0 !== oW ? oW : [],
            QW = null !== (dW = WW.meshes) && void 0 !== dW ? dW : [],
            Wi = null !== (eW = WW.materials) && void 0 !== eW ? eW : [],
            ii = null !== (vW = WW.textures) && void 0 !== vW ? vW : [],
            Oi = null !== (gW = WW.images) && void 0 !== gW ? gW : [],
            mi = null !== (DW = null !== (VW = null !== (pW = UW(FW.length, EW.nodes, "nodes")) && void 0 !== pW ? pW : UW(QW.length, EW.meshes, "meshes")) && void 0 !== VW ? VW : UW(Wi.length, EW.materials, "materials")) && void 0 !== DW ? DW : UW(Oi.length, EW.images, "images");
          if (mi) return mi;
          const Ei = new Set;
          for (const mW of FW)
            for (const WW of null !== (Ni = mW.children) && void 0 !== Ni ? Ni : []) {
              var Ni;
              if (!kW(WW, FW.length) || Ei.has(WW)) return LW;
              Ei.add(WW)
            }
          const Pi = new Set,
            Li = WW => {
              var iW;
              return !Pi.has(WW) && (Pi.add(WW), (null !== (iW = FW[WW].children) && void 0 !== iW ? iW : []).every(Li))
            };
          for (const mW of null !== (ci = rW[0].nodes) && void 0 !== ci ? ci : []) {
            var ci;
            if (!kW(mW, FW.length) || Ei.has(mW) || !Li(mW)) return LW
          }
          for (const mW of FW) {
            if (void 0 !== mW.matrix) return "uses node matrices";
            if (void 0 !== mW.skin) return "uses skins";
            if (void 0 !== mW.weights) return "uses morph targets";
            if (void 0 !== mW.mesh && !kW(mW.mesh, QW.length)) return LW;
            const WW = [
              [mW.translation, 3],
              [mW.rotation, 4],
              [mW.scale, 3]
            ];
            for (const [iW, OW] of WW)
              if (void 0 !== iW && (!Array.isArray(iW) || iW.length !== OW || !iW.every((WW => Number.isFinite(WW))))) return LW
          }
          let wi = -1,
            ti = 0,
            Zi = 0,
            xi = null;
          for (const EW of QW) {
            if (void 0 !== EW.weights) return "uses morph targets";
            if (0 === EW.primitives.length) return LW;
            for (const OW of EW.primitives) {
              var li, Ai;
              const EW = null !== (li = OW.mode) && void 0 !== li ? li : 4;
              var bi;
              if (4 !== EW && 0 !== EW) return `uses ${null!==(bi=AW[EW])&&void 0!==bi?bi:`mode ${EW}`} primitives`;
              if (void 0 !== OW.targets) return "uses morph targets";
              if (void 0 !== OW.material && !kW(OW.material, Wi.length)) return LW;
              const NW = XW ? null === (Ai = OW.extensions) || void 0 === Ai ? void 0 : Ai.KHR_draco_mesh_compression : void 0;
              if (NW) {
                if (4 !== EW) return "uses Draco-compressed points";
                if (!hW(WW, iW, NW.bufferView) || "object" !== typeof NW.attributes) return LW
              }
              const PW = OW.attributes;
              if ("object" !== typeof PW || null === PW) return LW;
              if (void 0 === PW.POSITION) return "has a primitive with no positions";
              if (!kW(PW.POSITION, aW.length)) return LW;
              const cW = aW[PW.POSITION].count;
              for (const [WW, iW] of Object.entries(PW)) {
                if (!kW(iW, aW.length)) return LW;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(WW)) return "uses skins";
                const OW = aW[iW],
                  mW = tW[WW];
                if (mW && (OW.componentType !== bW || OW.normalized || OW.type !== mW)) return `stores ${WW} as ${SW(OW)}`;
                const EW = xW[WW];
                if (EW && (OW.type !== EW.type || !EW.componentTypes.includes(OW.componentType) || OW.componentType === bW === !!OW.normalized)) return `stores ${WW} as ${SW(OW)}`;
                if (lW.has(WW) && OW.count !== cW) return "has vertex attributes of different lengths"
              }
              if (NW) {
                if (void 0 === OW.indices) return LW;
                for (const iW in NW.attributes)
                  if (lW.has(iW) && void 0 === PW[iW]) return LW;
                if (void 0 === NW.attributes.POSITION) return LW;
                const WW = kW(OW.indices, aW.length) ? aW[OW.indices].count : -1;
                if (0 === WW) return LW;
                if (-1 === wi) wi = NW.bufferView, ti = cW, Zi = WW;
                else {
                  xi ??= new Map([
                    [wi, [ti, Zi]]
                  ]);
                  const iW = xi.get(NW.bufferView);
                  if (iW && (iW[0] !== cW || iW[1] !== WW)) return LW;
                  xi.set(NW.bufferView, null !== iW && void 0 !== iW ? iW : [cW, WW])
                }
              }
              let wW = cW;
              if (void 0 !== OW.indices) {
                if (!kW(OW.indices, aW.length)) return LW;
                const WW = aW[OW.indices];
                if ("SCALAR" !== WW.type) return LW;
                if (5121 === WW.componentType) return "uses 8-bit indices";
                var ji;
                if (5123 !== WW.componentType && 5125 !== WW.componentType) return `stores indices as ${null!==(ji=mW.e[WW.componentType])&&void 0!==ji?ji:WW.componentType}`;
                if (!NW && void 0 === WW.bufferView) return LW;
                wW = WW.count
              }
              if (4 === EW && wW % 3 !== 0) return LW
            }
          }
          let Ui = 0,
            ki = 0,
            si = 0;
          for (let mW = 0; mW < FW.length; mW++) {
            const WW = FW[mW].mesh;
            if (void 0 !== WW && Pi.has(mW))
              for (const iW of QW[WW].primitives) si++, Ui += aW[iW.attributes.POSITION].count, void 0 !== iW.indices && (ki += aW[iW.indices].count)
          }
          const Mi = null !== (fW = null !== (CW = UW(Ui, EW.vertices, "vertices")) && void 0 !== CW ? CW : UW(ki, EW.indices, "indices")) && void 0 !== fW ? fW : UW(si, EW.primitives, "primitives");
          if (Mi) return Mi;
          for (const mW of Wi) {
            var Ki, Si;
            if (void 0 !== mW.emissiveTexture) return "uses an emissive texture";
            const iW = null !== (Ki = mW.alphaMode) && void 0 !== Ki ? Ki : "OPAQUE";
            if ("OPAQUE" !== iW && "MASK" !== iW && "BLEND" !== iW) return LW;
            const OW = null === (Si = mW.pbrMetallicRoughness) || void 0 === Si ? void 0 : Si.baseColorTexture;
            if (OW) {
              var Yi, yi, Ti, Ji, Hi;
              const iW = null !== (Yi = WW.extensionsUsed) && void 0 !== Yi && Yi.includes("KHR_texture_transform") ? null === (yi = OW.extensions) || void 0 === yi ? void 0 : yi.KHR_texture_transform : void 0;
              if (0 !== (null !== (Ti = OW.texCoord) && void 0 !== Ti ? Ti : 0) || 0 !== (null !== (Ji = null === iW || void 0 === iW ? void 0 : iW.texCoord) && void 0 !== Ji ? Ji : 0)) return "uses a second UV set";
              const mW = ii[OW.index];
              if (!mW || !kW(mW.source, Oi.length) || void 0 !== mW.sampler && !kW(mW.sampler, null === (Hi = WW.samplers) || void 0 === Hi ? void 0 : Hi.length)) return LW
            }
          }
          for (const mW of Oi) {
            if (void 0 !== mW.uri) return cW;
            if (void 0 === mW.bufferView) return LW;
            const OW = hW(WW, iW, mW.bufferView);
            if (!OW) return LW;
            if ("image/png" !== mW.mimeType) {
              var ni, ui, oi;
              return `has ${TW(null!==(ni=null!==(ui={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(oi=mW.mimeType)&&void 0!==oi?oi:""])&&void 0!==ui?ui:mW.mimeType)&&void 0!==ni?ni:"untyped")} image`
            }
            if (!yW(OW)) return `has ${TW(YW(OW))} image`;
            const NW = new DataView(OW.buffer, OW.byteOffset, OW.byteLength),
              PW = NW.getUint32(16),
              wW = NW.getUint32(20);
            if (PW > EW.imageSide || wW > EW.imageSide) return `has a ${PW} \xd7 ${wW} image (the limit is ${EW.imageSide})`
          }
          return null
        }(WW, iW)
      } catch {
        return LW
      }
    }

    function oW(WW) {
      const iW = nW(WW.byteLength);
      if (iW) return iW;
      try {
        const {
          json: iW,
          bin: OW
        } = (0, mW.y)(WW);
        return uW(iW, OW)
      } catch (OW) {
        if (OW instanceof mW.n) return OW.reason;
        throw OW
      }
    }
  },
  35330: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW,
      e: () => lW,
      i: () => jW,
      l: () => PW,
      n: () => NW,
      o: () => bW,
      r: () => ZW,
      t: () => xW,
      v: () => LW,
      y: () => tW
    });
    const mW = 1179937895,
      EW = 1313821514;
    class NW extends Error {
      constructor(WW) {
        super(`GLB refused: it ${WW}`), this.reason = WW, this.name = "GlbRefused"
      }
    }
    class PW extends Error {
      constructor(WW) {
        super(WW), this.name = "GlbError"
      }
    }

    function LW(WW) {
      return Reflect.get(WW, "scene")
    }
    const cW = 5130562,
      wW = "is not a binary glTF 2.0 file";

    function tW(WW) {
      var iW;
      const OW = WW instanceof Uint8Array ? WW : new Uint8Array(WW),
        PW = function(WW) {
          const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
          if (WW.byteLength < 20 || iW.getUint32(0, !0) !== mW || 2 !== iW.getUint32(4, !0)) return null;
          const OW = Math.min(iW.getUint32(8, !0), WW.byteLength),
            NW = iW.getUint32(12, !0);
          if (iW.getUint32(16, !0) !== EW || 20 + NW > OW) return null;
          let PW;
          try {
            PW = JSON.parse((new TextDecoder).decode(WW.subarray(20, 20 + NW)))
          } catch {
            return null
          }
          return "object" === typeof PW && null !== PW ? {
            json: PW,
            jsonEnd: 20 + NW,
            length: OW
          } : null
        }(OW);
      if (null === PW) throw new NW(wW);
      const LW = PW.json,
        {
          jsonEnd: tW,
          length: ZW
        } = PW,
        xW = new DataView(OW.buffer, OW.byteOffset, OW.byteLength);
      let lW = -1,
        AW = 0;
      for (let mW = tW; mW < ZW;) {
        if (mW + 8 > ZW) throw new NW(wW);
        const WW = xW.getUint32(mW, !0),
          iW = xW.getUint32(mW + 4, !0);
        if (mW + 8 + WW > ZW || iW === EW || iW === cW && -1 !== lW) throw new NW(wW);
        iW === cW && (lW = mW + 8, AW = WW), mW += 8 + WW
      }
      let bW = null;
      const jW = null === (iW = LW.buffers) || void 0 === iW ? void 0 : iW[0];
      if (-1 !== lW && jW && void 0 === jW.uri) {
        if (!(jW.byteLength >= 0) || jW.byteLength > AW) throw new NW(wW);
        bW = new Uint8Array(OW.buffer, OW.byteOffset + lW, jW.byteLength)
      }
      return {
        json: LW,
        bin: bW,
        fileBytes: OW.byteLength
      }
    }

    function ZW(WW) {
      const iW = WW.slice(WW.indexOf(",") + 1),
        OW = Uint8Array.fromBase64;
      if (OW) return OW(iW).buffer;
      const mW = atob(iW),
        EW = new Uint8Array(mW.length);
      for (let NW = 0; NW < mW.length; NW++) EW[NW] = mW.charCodeAt(NW);
      return EW.buffer
    }
    async function xW(WW) {
      if (WW.startsWith("data:")) return ZW(WW);
      const iW = await fetch(WW);
      if (!iW.ok) throw new PW(`fetching ${WW} failed: ${iW.status} ${iW.statusText}`);
      return await iW.arrayBuffer()
    }
    const lW = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      AW = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      bW = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      jW = [
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
for (const WW in modules) Object.freeze(modules[WW]);