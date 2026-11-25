export const id = 212;
export const ids = [212];
export const modules = {
  34591: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => AQ,
      d: () => cQ,
      h: () => iQ
    });
    var wQ = XQ(34596);
    const qQ = {
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
      TQ = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      zQ = 1048576,
      sQ = "is not a binary glTF 2.0 file",
      FQ = "loads data from outside the file",
      PQ = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      gQ = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      JQ = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      rQ = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: JQ,
        TEXCOORD_2: JQ,
        TEXCOORD_3: JQ,
        TEXCOORD_4: JQ,
        TEXCOORD_5: JQ
      },
      IQ = new Set(wQ.f.map((QQ => {
        let [WQ] = QQ;
        return WQ
      }))),
      jQ = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      BQ = 5126;

    function yQ(QQ) {
      return QQ.toLocaleString("en-US")
    }

    function VQ(QQ, WQ, XQ) {
      return QQ > WQ ? `has ${yQ(QQ)} ${XQ} (the limit is ${yQ(WQ)})` : null
    }

    function DQ(QQ, WQ) {
      return Number.isInteger(QQ) && QQ >= 0 && QQ < (null !== WQ && void 0 !== WQ ? WQ : 0)
    }

    function pQ(QQ) {
      return Number.isInteger(QQ) && QQ >= 0
    }

    function GQ(QQ, WQ) {
      return void 0 !== QQ && (!Array.isArray(QQ) || QQ.length > WQ)
    }

    function UQ(QQ, WQ) {
      return "object" === typeof QQ && null !== QQ && Object.keys(QQ).length > WQ
    }

    function bQ(QQ) {
      var WQ;
      return `${QQ.normalized?"normalized ":""}${null!==(WQ=wQ.d[QQ.componentType])&&void 0!==WQ?WQ:QQ.componentType} ${QQ.type}`
    }

    function vQ(QQ) {
      const WQ = WQ => {
        var XQ;
        return null !== (XQ = QQ[WQ]) && void 0 !== XQ ? XQ : -1
      };
      return 255 === WQ(0) && 216 === WQ(1) ? "JPEG" : 82 === WQ(0) && 73 === WQ(1) && 87 === WQ(8) && 69 === WQ(9) ? "WebP" : 171 === WQ(0) && 75 === WQ(1) && 84 === WQ(2) && 88 === WQ(3) ? "KTX2" : "non-PNG"
    }

    function dQ(QQ) {
      return QQ.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((WQ, XQ) => QQ[XQ] === WQ)) && 73 === QQ[12] && 72 === QQ[13] && 68 === QQ[14] && 82 === QQ[15]
    }

    function HQ(QQ) {
      return /^[aeiou]/i.test(QQ) ? `an ${QQ}` : `a ${QQ}`
    }

    function aQ(QQ) {
      const WQ = QQ.byteStride;
      return void 0 === WQ || Number.isInteger(WQ) && WQ >= 4 && WQ <= 252 && WQ % 4 === 0
    }

    function lQ(QQ, WQ, XQ) {
      var wQ, qQ;
      const TQ = null === (wQ = QQ.bufferViews) || void 0 === wQ ? void 0 : wQ[XQ];
      if (!TQ || !WQ || 0 !== TQ.buffer) return null;
      const zQ = null !== (qQ = TQ.byteOffset) && void 0 !== qQ ? qQ : 0;
      return !pQ(zQ) || !pQ(TQ.byteLength) || zQ + TQ.byteLength > WQ.byteLength ? null : WQ.subarray(zQ, zQ + TQ.byteLength)
    }

    function hQ(QQ, WQ) {
      var XQ, qQ, TQ;
      const zQ = wQ.k[WQ.type],
        sQ = wQ.b[WQ.componentType];
      if (!zQ || !sQ || !Number.isInteger(WQ.count) || WQ.count < 0) return !1;
      if (void 0 === WQ.bufferView) return !0;
      const FQ = null === (XQ = QQ.bufferViews) || void 0 === XQ ? void 0 : XQ[WQ.bufferView],
        PQ = null !== (qQ = WQ.byteOffset) && void 0 !== qQ ? qQ : 0;
      if (!FQ || !pQ(PQ) || PQ % sQ !== 0) return !1;
      const gQ = zQ * sQ,
        JQ = null !== (TQ = FQ.byteStride) && void 0 !== TQ ? TQ : gQ;
      if (JQ < gQ) return !1;
      return (0 === WQ.count ? 0 : PQ + JQ * (WQ.count - 1) + gQ) <= FQ.byteLength
    }

    function iQ(QQ) {
      return QQ > qQ.fileBytes ? `is ${(QQ/zQ).toFixed(1)} MiB (the limit is ${qQ.fileBytes/zQ} MiB)` : null
    }

    function cQ(QQ, WQ) {
      try {
        return function(QQ, WQ) {
          var XQ, zQ, JQ, yQ, pQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ;
          const oQ = Array.isArray(QQ.extensionsUsed) && QQ.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(QQ, WQ) {
              var XQ, wQ;
              const {
                items: qQ,
                perFile: zQ,
                surfaces: sQ,
                few: FQ,
                bounds: PQ,
                attributeMembers: gQ
              } = TQ;
              if (GQ(QQ.extensionsRequired, FQ) || GQ(QQ.animations, 1 / 0) || GQ(QQ.skins, 1 / 0)) return !0;
              if (null !== (XQ = QQ.animations) && void 0 !== XQ && XQ.length || null !== (wQ = QQ.skins) && void 0 !== wQ && wQ.length) return !1;
              if ([
                  [QQ.buffers, FQ],
                  [QQ.scenes, FQ],
                  [QQ.bufferViews, qQ],
                  [QQ.accessors, qQ],
                  [QQ.nodes, qQ],
                  [QQ.meshes, qQ],
                  [QQ.materials, sQ],
                  [QQ.textures, sQ],
                  [QQ.samplers, sQ],
                  [QQ.images, sQ]
                ].some((QQ => {
                  let [WQ, XQ] = QQ;
                  return GQ(WQ, XQ)
                }))) return !0;
              for (const TQ of null !== (JQ = QQ.accessors) && void 0 !== JQ ? JQ : []) {
                var JQ, rQ, IQ;
                if (Number.isInteger(TQ.count) && (!Number.isSafeInteger(TQ.count) || Object.is(TQ.count, -0)) || GQ(null !== (rQ = TQ.min) && void 0 !== rQ ? rQ : void 0, PQ) || GQ(null !== (IQ = TQ.max) && void 0 !== IQ ? IQ : void 0, PQ)) return !0
              }
              for (const TQ of null !== (jQ = QQ.scenes) && void 0 !== jQ ? jQ : []) {
                var jQ;
                if (GQ(TQ.nodes, qQ)) return !0
              }
              let BQ = 0;
              for (const TQ of null !== (yQ = QQ.nodes) && void 0 !== yQ ? yQ : []) {
                var yQ, VQ, DQ;
                if (GQ(TQ.children, zQ)) return !0;
                BQ += null !== (VQ = null === (DQ = TQ.children) || void 0 === DQ ? void 0 : DQ.length) && void 0 !== VQ ? VQ : 0
              }
              if (BQ > zQ) return !0;
              let pQ = 0;
              for (const TQ of null !== (bQ = QQ.meshes) && void 0 !== bQ ? bQ : []) {
                var bQ;
                if (!Array.isArray(TQ.primitives)) return !0;
                if (pQ += TQ.primitives.length, pQ > zQ) return !0;
                for (const QQ of TQ.primitives) {
                  var vQ;
                  const XQ = WQ ? null === (vQ = QQ.extensions) || void 0 === vQ ? void 0 : vQ.KHR_draco_mesh_compression : void 0;
                  if (UQ(QQ.attributes, gQ) || UQ(null === XQ || void 0 === XQ ? void 0 : XQ.attributes, gQ)) return !0
                }
              }
              return !1
            }(QQ, oQ)) return sQ;
          const eQ = null === (XQ = QQ.asset) || void 0 === XQ ? void 0 : XQ.version;
          if ("string" !== typeof eQ || !/^2\.\d+/.test(eQ)) return `uses glTF version ${null!==eQ&&void 0!==eQ?eQ:"(none)"}`;
          const nQ = null === (zQ = QQ.asset) || void 0 === zQ ? void 0 : zQ.minVersion;
          if (void 0 !== nQ && "2.0" !== nQ) return `uses glTF version ${nQ}`;
          for (const wQ of null !== (xQ = QQ.extensionsRequired) && void 0 !== xQ ? xQ : []) {
            var xQ;
            if (!PQ.has(wQ)) return `requires the glTF extension ${wQ}`
          }
          if (null !== (JQ = QQ.animations) && void 0 !== JQ && JQ.length) return "has animations";
          if (null !== (yQ = QQ.skins) && void 0 !== yQ && yQ.length) return "uses skins";
          const YQ = null !== (pQ = QQ.buffers) && void 0 !== pQ ? pQ : [];
          for (const [wQ, qQ] of YQ.entries()) {
            if (void 0 !== qQ.uri) return FQ;
            if (wQ > 0 || !WQ) return sQ
          }
          for (const [wQ, qQ] of(null !== (NQ = QQ.bufferViews) && void 0 !== NQ ? NQ : []).entries()) {
            var NQ;
            if (!lQ(QQ, WQ, wQ) || !aQ(qQ)) return sQ
          }
          const ZQ = null !== (iQ = QQ.accessors) && void 0 !== iQ ? iQ : [];
          for (const wQ of ZQ) {
            if (void 0 !== wQ.sparse) return "uses sparse accessors";
            const WQ = Number.isInteger(wQ.count) ? VQ(wQ.count, qQ.accessorElements, "elements in an accessor") : null;
            if (WQ) return WQ;
            if (!hQ(QQ, wQ)) return sQ
          }
          const OQ = null !== (cQ = QQ.scenes) && void 0 !== cQ ? cQ : [];
          if (1 !== OQ.length) return `has ${OQ.length} scenes`;
          const KQ = (0, wQ.s)(QQ);
          if (void 0 !== KQ && 0 !== KQ) return sQ;
          const mQ = null !== (AQ = QQ.nodes) && void 0 !== AQ ? AQ : [],
            MQ = null !== (RQ = QQ.meshes) && void 0 !== RQ ? RQ : [],
            QW = null !== (EQ = QQ.materials) && void 0 !== EQ ? EQ : [],
            WW = null !== (CQ = QQ.textures) && void 0 !== CQ ? CQ : [],
            XW = null !== (uQ = QQ.images) && void 0 !== uQ ? uQ : [],
            wW = null !== (LQ = null !== (kQ = null !== (fQ = VQ(mQ.length, qQ.nodes, "nodes")) && void 0 !== fQ ? fQ : VQ(MQ.length, qQ.meshes, "meshes")) && void 0 !== kQ ? kQ : VQ(QW.length, qQ.materials, "materials")) && void 0 !== LQ ? LQ : VQ(XW.length, qQ.images, "images");
          if (wW) return wW;
          const qW = new Set;
          for (const wQ of mQ)
            for (const QQ of null !== (TW = wQ.children) && void 0 !== TW ? TW : []) {
              var TW;
              if (!DQ(QQ, mQ.length) || qW.has(QQ)) return sQ;
              qW.add(QQ)
            }
          const zW = new Set,
            sW = QQ => {
              var WQ;
              return !zW.has(QQ) && (zW.add(QQ), (null !== (WQ = mQ[QQ].children) && void 0 !== WQ ? WQ : []).every(sW))
            };
          for (const wQ of null !== (FW = OQ[0].nodes) && void 0 !== FW ? FW : []) {
            var FW;
            if (!DQ(wQ, mQ.length) || qW.has(wQ) || !sW(wQ)) return sQ
          }
          for (const wQ of mQ) {
            if (void 0 !== wQ.matrix) return "uses node matrices";
            if (void 0 !== wQ.skin) return "uses skins";
            if (void 0 !== wQ.weights) return "uses morph targets";
            if (void 0 !== wQ.mesh && !DQ(wQ.mesh, MQ.length)) return sQ;
            const QQ = [
              [wQ.translation, 3],
              [wQ.rotation, 4],
              [wQ.scale, 3]
            ];
            for (const [WQ, XQ] of QQ)
              if (void 0 !== WQ && (!Array.isArray(WQ) || WQ.length !== XQ || !WQ.every((QQ => Number.isFinite(QQ))))) return sQ
          }
          let PW = -1,
            gW = 0,
            JW = 0,
            rW = null;
          for (const qQ of MQ) {
            if (void 0 !== qQ.weights) return "uses morph targets";
            if (0 === qQ.primitives.length) return sQ;
            for (const XQ of qQ.primitives) {
              var IW, jW;
              const qQ = null !== (IW = XQ.mode) && void 0 !== IW ? IW : 4;
              var BW;
              if (4 !== qQ && 0 !== qQ) return `uses ${null!==(BW=jQ[qQ])&&void 0!==BW?BW:`mode ${qQ}`} primitives`;
              if (void 0 !== XQ.targets) return "uses morph targets";
              if (void 0 !== XQ.material && !DQ(XQ.material, QW.length)) return sQ;
              const TQ = oQ ? null === (jW = XQ.extensions) || void 0 === jW ? void 0 : jW.KHR_draco_mesh_compression : void 0;
              if (TQ) {
                if (4 !== qQ) return "uses Draco-compressed points";
                if (!lQ(QQ, WQ, TQ.bufferView) || "object" !== typeof TQ.attributes) return sQ
              }
              const zQ = XQ.attributes;
              if ("object" !== typeof zQ || null === zQ) return sQ;
              if (void 0 === zQ.POSITION) return "has a primitive with no positions";
              if (!DQ(zQ.POSITION, ZQ.length)) return sQ;
              const FQ = ZQ[zQ.POSITION].count;
              for (const [QQ, WQ] of Object.entries(zQ)) {
                if (!DQ(WQ, ZQ.length)) return sQ;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(QQ)) return "uses skins";
                const XQ = ZQ[WQ],
                  wQ = gQ[QQ];
                if (wQ && (XQ.componentType !== BQ || XQ.normalized || XQ.type !== wQ)) return `stores ${QQ} as ${bQ(XQ)}`;
                const qQ = rQ[QQ];
                if (qQ && (XQ.type !== qQ.type || !qQ.componentTypes.includes(XQ.componentType) || XQ.componentType === BQ === !!XQ.normalized)) return `stores ${QQ} as ${bQ(XQ)}`;
                if (IQ.has(QQ) && XQ.count !== FQ) return "has vertex attributes of different lengths"
              }
              if (TQ) {
                if (void 0 === XQ.indices) return sQ;
                for (const WQ in TQ.attributes)
                  if (IQ.has(WQ) && void 0 === zQ[WQ]) return sQ;
                if (void 0 === TQ.attributes.POSITION) return sQ;
                const QQ = DQ(XQ.indices, ZQ.length) ? ZQ[XQ.indices].count : -1;
                if (0 === QQ) return sQ;
                if (-1 === PW) PW = TQ.bufferView, gW = FQ, JW = QQ;
                else {
                  rW ??= new Map([
                    [PW, [gW, JW]]
                  ]);
                  const WQ = rW.get(TQ.bufferView);
                  if (WQ && (WQ[0] !== FQ || WQ[1] !== QQ)) return sQ;
                  rW.set(TQ.bufferView, null !== WQ && void 0 !== WQ ? WQ : [FQ, QQ])
                }
              }
              let PQ = FQ;
              if (void 0 !== XQ.indices) {
                if (!DQ(XQ.indices, ZQ.length)) return sQ;
                const QQ = ZQ[XQ.indices];
                if ("SCALAR" !== QQ.type) return sQ;
                if (5121 === QQ.componentType) return "uses 8-bit indices";
                var yW;
                if (5123 !== QQ.componentType && 5125 !== QQ.componentType) return `stores indices as ${null!==(yW=wQ.d[QQ.componentType])&&void 0!==yW?yW:QQ.componentType}`;
                if (!TQ && void 0 === QQ.bufferView) return sQ;
                PQ = QQ.count
              }
              if (4 === qQ && PQ % 3 !== 0) return sQ
            }
          }
          let VW = 0,
            DW = 0,
            pW = 0;
          for (let wQ = 0; wQ < mQ.length; wQ++) {
            const QQ = mQ[wQ].mesh;
            if (void 0 !== QQ && zW.has(wQ))
              for (const WQ of MQ[QQ].primitives) pW++, VW += ZQ[WQ.attributes.POSITION].count, void 0 !== WQ.indices && (DW += ZQ[WQ.indices].count)
          }
          const GW = null !== (SQ = null !== (tQ = VQ(VW, qQ.vertices, "vertices")) && void 0 !== tQ ? tQ : VQ(DW, qQ.indices, "indices")) && void 0 !== SQ ? SQ : VQ(pW, qQ.primitives, "primitives");
          if (GW) return GW;
          for (const wQ of QW) {
            var UW, bW;
            if (void 0 !== wQ.emissiveTexture) return "uses an emissive texture";
            const WQ = null !== (UW = wQ.alphaMode) && void 0 !== UW ? UW : "OPAQUE";
            if ("OPAQUE" !== WQ && "MASK" !== WQ && "BLEND" !== WQ) return sQ;
            const XQ = null === (bW = wQ.pbrMetallicRoughness) || void 0 === bW ? void 0 : bW.baseColorTexture;
            if (XQ) {
              var vW, dW, HW, aW, lW;
              const WQ = null !== (vW = QQ.extensionsUsed) && void 0 !== vW && vW.includes("KHR_texture_transform") ? null === (dW = XQ.extensions) || void 0 === dW ? void 0 : dW.KHR_texture_transform : void 0;
              if (0 !== (null !== (HW = XQ.texCoord) && void 0 !== HW ? HW : 0) || 0 !== (null !== (aW = null === WQ || void 0 === WQ ? void 0 : WQ.texCoord) && void 0 !== aW ? aW : 0)) return "uses a second UV set";
              const wQ = WW[XQ.index];
              if (!wQ || !DQ(wQ.source, XW.length) || void 0 !== wQ.sampler && !DQ(wQ.sampler, null === (lW = QQ.samplers) || void 0 === lW ? void 0 : lW.length)) return sQ
            }
          }
          for (const wQ of XW) {
            if (void 0 !== wQ.uri) return FQ;
            if (void 0 === wQ.bufferView) return sQ;
            const XQ = lQ(QQ, WQ, wQ.bufferView);
            if (!XQ) return sQ;
            if ("image/png" !== wQ.mimeType) {
              var hW, iW, cW;
              return `has ${HQ(null!==(hW=null!==(iW={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(cW=wQ.mimeType)&&void 0!==cW?cW:""])&&void 0!==iW?iW:wQ.mimeType)&&void 0!==hW?hW:"untyped")} image`
            }
            if (!dQ(XQ)) return `has ${HQ(vQ(XQ))} image`;
            const TQ = new DataView(XQ.buffer, XQ.byteOffset, XQ.byteLength),
              zQ = TQ.getUint32(16),
              PQ = TQ.getUint32(20);
            if (zQ > qQ.imageSide || PQ > qQ.imageSide) return `has a ${zQ} \xd7 ${PQ} image (the limit is ${qQ.imageSide})`
          }
          return null
        }(QQ, WQ)
      } catch {
        return sQ
      }
    }

    function AQ(QQ) {
      const WQ = iQ(QQ.byteLength);
      if (WQ) return WQ;
      try {
        const {
          json: WQ,
          bin: XQ
        } = (0, wQ.u)(QQ);
        return cQ(WQ, XQ)
      } catch (XQ) {
        if (XQ instanceof wQ.i) return XQ.reason;
        throw XQ
      }
    }
  },
  34596: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => IQ,
      d: () => rQ,
      f: () => BQ,
      h: () => TQ,
      i: () => qQ,
      k: () => jQ,
      l: () => gQ,
      o: () => JQ,
      s: () => zQ,
      u: () => PQ
    });
    var wQ = XQ(34604);
    class qQ extends Error {
      constructor(QQ) {
        super(`GLB refused: it ${QQ}`), this.reason = QQ, this.name = "GlbRefused"
      }
    }
    class TQ extends Error {
      constructor(QQ) {
        super(QQ), this.name = "GlbError"
      }
    }

    function zQ(QQ) {
      return Reflect.get(QQ, "scene")
    }
    const sQ = 5130562,
      FQ = "is not a binary glTF 2.0 file";

    function PQ(QQ) {
      var WQ;
      const XQ = QQ instanceof Uint8Array ? QQ : new Uint8Array(QQ),
        TQ = (0, wQ.f)(XQ);
      if (null === TQ) throw new qQ(FQ);
      const zQ = TQ.json,
        {
          jsonEnd: PQ,
          length: gQ
        } = TQ,
        JQ = new DataView(XQ.buffer, XQ.byteOffset, XQ.byteLength);
      let rQ = -1,
        IQ = 0;
      for (let yQ = PQ; yQ < gQ;) {
        if (yQ + 8 > gQ) throw new qQ(FQ);
        const QQ = JQ.getUint32(yQ, !0),
          WQ = JQ.getUint32(yQ + 4, !0);
        if (yQ + 8 + QQ > gQ || WQ === wQ.b || WQ === sQ && -1 !== rQ) throw new qQ(FQ);
        WQ === sQ && (rQ = yQ + 8, IQ = QQ), yQ += 8 + QQ
      }
      let jQ = null;
      const BQ = null === (WQ = zQ.buffers) || void 0 === WQ ? void 0 : WQ[0];
      if (-1 !== rQ && BQ && void 0 === BQ.uri) {
        if (!(BQ.byteLength >= 0) || BQ.byteLength > IQ) throw new qQ(FQ);
        jQ = new Uint8Array(XQ.buffer, XQ.byteOffset + rQ, BQ.byteLength)
      }
      return {
        json: zQ,
        bin: jQ,
        fileBytes: XQ.byteLength
      }
    }

    function gQ(QQ) {
      const WQ = QQ.slice(QQ.indexOf(",") + 1),
        XQ = Uint8Array.fromBase64;
      if (XQ) return XQ(WQ).buffer;
      const wQ = atob(WQ),
        qQ = new Uint8Array(wQ.length);
      for (let TQ = 0; TQ < wQ.length; TQ++) qQ[TQ] = wQ.charCodeAt(TQ);
      return qQ.buffer
    }
    async function JQ(QQ) {
      if (QQ.startsWith("data:")) return gQ(QQ);
      const WQ = await fetch(QQ);
      if (!WQ.ok) throw new TQ(`fetching ${QQ} failed: ${WQ.status} ${WQ.statusText}`);
      return await WQ.arrayBuffer()
    }
    const rQ = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      IQ = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      jQ = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      BQ = [
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
  34604: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ,
      g: () => zQ
    });
    const wQ = 1179937895,
      qQ = 1313821514;

    function TQ(QQ) {
      const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      if (QQ.byteLength < 20 || WQ.getUint32(0, !0) !== wQ || 2 !== WQ.getUint32(4, !0)) return null;
      const XQ = Math.min(WQ.getUint32(8, !0), QQ.byteLength),
        TQ = WQ.getUint32(12, !0);
      if (WQ.getUint32(16, !0) !== qQ || 20 + TQ > XQ) return null;
      let zQ;
      try {
        zQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, 20 + TQ)))
      } catch {
        return null
      }
      return "object" === typeof zQ && null !== zQ ? {
        json: zQ,
        jsonEnd: 20 + TQ,
        length: XQ
      } : null
    }

    function zQ(QQ) {
      var WQ;
      const XQ = null === (WQ = TQ(QQ)) || void 0 === WQ ? void 0 : WQ.json;
      if (void 0 === XQ || !Array.isArray(XQ.extensionsUsed) || !XQ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const wQ = XQ.meshes;
      return Array.isArray(wQ) && wQ.some((QQ => {
        const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.primitives;
        return Array.isArray(WQ) && WQ.some((QQ => {
          const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.extensions;
          return null != (null === WQ || void 0 === WQ ? void 0 : WQ.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);