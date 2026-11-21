export const id = 196;
export const ids = [196];
export const modules = {
  9181: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => UQ,
      e: () => IQ,
      h: () => rQ
    });
    var LQ = wQ(9184);
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
      oQ = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      DQ = 1048576,
      kQ = "is not a binary glTF 2.0 file",
      vQ = "loads data from outside the file",
      mQ = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      uQ = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      HQ = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      bQ = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: HQ,
        TEXCOORD_2: HQ,
        TEXCOORD_3: HQ,
        TEXCOORD_4: HQ,
        TEXCOORD_5: HQ
      },
      YQ = new Set(LQ.f.map((QQ => {
        let [FQ] = QQ;
        return FQ
      }))),
      xQ = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      AQ = 5126;

    function tQ(QQ) {
      return QQ.toLocaleString("en-US")
    }

    function eQ(QQ, FQ, wQ) {
      return QQ > FQ ? `has ${tQ(QQ)} ${wQ} (the limit is ${tQ(FQ)})` : null
    }

    function MQ(QQ, FQ) {
      return Number.isInteger(QQ) && QQ >= 0 && QQ < (null !== FQ && void 0 !== FQ ? FQ : 0)
    }

    function GQ(QQ) {
      return Number.isInteger(QQ) && QQ >= 0
    }

    function pQ(QQ, FQ) {
      return void 0 !== QQ && (!Array.isArray(QQ) || QQ.length > FQ)
    }

    function cQ(QQ, FQ) {
      return "object" === typeof QQ && null !== QQ && Object.keys(QQ).length > FQ
    }

    function CQ(QQ) {
      var FQ;
      return `${QQ.normalized?"normalized ":""}${null!==(FQ=LQ.c[QQ.componentType])&&void 0!==FQ?FQ:QQ.componentType} ${QQ.type}`
    }

    function SQ(QQ) {
      const FQ = FQ => {
        var wQ;
        return null !== (wQ = QQ[FQ]) && void 0 !== wQ ? wQ : -1
      };
      return 255 === FQ(0) && 216 === FQ(1) ? "JPEG" : 82 === FQ(0) && 73 === FQ(1) && 87 === FQ(8) && 69 === FQ(9) ? "WebP" : 171 === FQ(0) && 75 === FQ(1) && 84 === FQ(2) && 88 === FQ(3) ? "KTX2" : "non-PNG"
    }

    function iQ(QQ) {
      return QQ.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((FQ, wQ) => QQ[wQ] === FQ)) && 73 === QQ[12] && 72 === QQ[13] && 68 === QQ[14] && 82 === QQ[15]
    }

    function WQ(QQ) {
      return /^[aeiou]/i.test(QQ) ? `an ${QQ}` : `a ${QQ}`
    }

    function RQ(QQ) {
      const FQ = QQ.byteStride;
      return void 0 === FQ || Number.isInteger(FQ) && FQ >= 4 && FQ <= 252 && FQ % 4 === 0
    }

    function OQ(QQ, FQ, wQ) {
      var LQ, qQ;
      const oQ = null === (LQ = QQ.bufferViews) || void 0 === LQ ? void 0 : LQ[wQ];
      if (!oQ || !FQ || 0 !== oQ.buffer) return null;
      const DQ = null !== (qQ = oQ.byteOffset) && void 0 !== qQ ? qQ : 0;
      return !GQ(DQ) || !GQ(oQ.byteLength) || DQ + oQ.byteLength > FQ.byteLength ? null : FQ.subarray(DQ, DQ + oQ.byteLength)
    }

    function sQ(QQ, FQ) {
      var wQ, qQ, oQ;
      const DQ = LQ.l[FQ.type],
        kQ = LQ.b[FQ.componentType];
      if (!DQ || !kQ || !Number.isInteger(FQ.count) || FQ.count < 0) return !1;
      if (void 0 === FQ.bufferView) return !0;
      const vQ = null === (wQ = QQ.bufferViews) || void 0 === wQ ? void 0 : wQ[FQ.bufferView],
        mQ = null !== (qQ = FQ.byteOffset) && void 0 !== qQ ? qQ : 0;
      if (!vQ || !GQ(mQ) || mQ % kQ !== 0) return !1;
      const uQ = DQ * kQ,
        HQ = null !== (oQ = vQ.byteStride) && void 0 !== oQ ? oQ : uQ;
      if (HQ < uQ) return !1;
      return (0 === FQ.count ? 0 : mQ + HQ * (FQ.count - 1) + uQ) <= vQ.byteLength
    }

    function rQ(QQ) {
      return QQ > qQ.fileBytes ? `is ${(QQ/DQ).toFixed(1)} MiB (the limit is ${qQ.fileBytes/DQ} MiB)` : null
    }

    function IQ(QQ, FQ) {
      try {
        return function(QQ, FQ) {
          var wQ, DQ, HQ, tQ, GQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ;
          const VQ = Array.isArray(QQ.extensionsUsed) && QQ.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(QQ, FQ) {
              var wQ, LQ;
              const {
                items: qQ,
                perFile: DQ,
                surfaces: kQ,
                few: vQ,
                bounds: mQ,
                attributeMembers: uQ
              } = oQ;
              if (pQ(QQ.extensionsRequired, vQ) || pQ(QQ.animations, 1 / 0) || pQ(QQ.skins, 1 / 0)) return !0;
              if (null !== (wQ = QQ.animations) && void 0 !== wQ && wQ.length || null !== (LQ = QQ.skins) && void 0 !== LQ && LQ.length) return !1;
              if ([
                  [QQ.buffers, vQ],
                  [QQ.scenes, vQ],
                  [QQ.bufferViews, qQ],
                  [QQ.accessors, qQ],
                  [QQ.nodes, qQ],
                  [QQ.meshes, qQ],
                  [QQ.materials, kQ],
                  [QQ.textures, kQ],
                  [QQ.samplers, kQ],
                  [QQ.images, kQ]
                ].some((QQ => {
                  let [FQ, wQ] = QQ;
                  return pQ(FQ, wQ)
                }))) return !0;
              for (const oQ of null !== (HQ = QQ.accessors) && void 0 !== HQ ? HQ : []) {
                var HQ, bQ, YQ;
                if (Number.isInteger(oQ.count) && (!Number.isSafeInteger(oQ.count) || Object.is(oQ.count, -0)) || pQ(null !== (bQ = oQ.min) && void 0 !== bQ ? bQ : void 0, mQ) || pQ(null !== (YQ = oQ.max) && void 0 !== YQ ? YQ : void 0, mQ)) return !0
              }
              for (const oQ of null !== (xQ = QQ.scenes) && void 0 !== xQ ? xQ : []) {
                var xQ;
                if (pQ(oQ.nodes, qQ)) return !0
              }
              let AQ = 0;
              for (const oQ of null !== (tQ = QQ.nodes) && void 0 !== tQ ? tQ : []) {
                var tQ, eQ, MQ;
                if (pQ(oQ.children, DQ)) return !0;
                AQ += null !== (eQ = null === (MQ = oQ.children) || void 0 === MQ ? void 0 : MQ.length) && void 0 !== eQ ? eQ : 0
              }
              if (AQ > DQ) return !0;
              let GQ = 0;
              for (const oQ of null !== (CQ = QQ.meshes) && void 0 !== CQ ? CQ : []) {
                var CQ;
                if (!Array.isArray(oQ.primitives)) return !0;
                if (GQ += oQ.primitives.length, GQ > DQ) return !0;
                for (const QQ of oQ.primitives) {
                  var SQ;
                  const wQ = FQ ? null === (SQ = QQ.extensions) || void 0 === SQ ? void 0 : SQ.KHR_draco_mesh_compression : void 0;
                  if (cQ(QQ.attributes, uQ) || cQ(null === wQ || void 0 === wQ ? void 0 : wQ.attributes, uQ)) return !0
                }
              }
              return !1
            }(QQ, VQ)) return kQ;
          const hQ = null === (wQ = QQ.asset) || void 0 === wQ ? void 0 : wQ.version;
          if ("string" !== typeof hQ || !/^2\.\d+/.test(hQ)) return `uses glTF version ${null!==hQ&&void 0!==hQ?hQ:"(none)"}`;
          const JQ = null === (DQ = QQ.asset) || void 0 === DQ ? void 0 : DQ.minVersion;
          if (void 0 !== JQ && "2.0" !== JQ) return `uses glTF version ${JQ}`;
          for (const LQ of null !== (EQ = QQ.extensionsRequired) && void 0 !== EQ ? EQ : []) {
            var EQ;
            if (!mQ.has(LQ)) return `requires the glTF extension ${LQ}`
          }
          if (null !== (HQ = QQ.animations) && void 0 !== HQ && HQ.length) return "has animations";
          if (null !== (tQ = QQ.skins) && void 0 !== tQ && tQ.length) return "uses skins";
          const nQ = null !== (GQ = QQ.buffers) && void 0 !== GQ ? GQ : [];
          for (const [LQ, qQ] of nQ.entries()) {
            if (void 0 !== qQ.uri) return vQ;
            if (LQ > 0 || !FQ) return kQ
          }
          for (const [LQ, qQ] of(null !== (gQ = QQ.bufferViews) && void 0 !== gQ ? gQ : []).entries()) {
            var gQ;
            if (!OQ(QQ, FQ, LQ) || !RQ(qQ)) return kQ
          }
          const PQ = null !== (rQ = QQ.accessors) && void 0 !== rQ ? rQ : [];
          for (const LQ of PQ) {
            if (void 0 !== LQ.sparse) return "uses sparse accessors";
            const FQ = Number.isInteger(LQ.count) ? eQ(LQ.count, qQ.accessorElements, "elements in an accessor") : null;
            if (FQ) return FQ;
            if (!sQ(QQ, LQ)) return kQ
          }
          const ZQ = null !== (IQ = QQ.scenes) && void 0 !== IQ ? IQ : [];
          if (1 !== ZQ.length) return `has ${ZQ.length} scenes`;
          const yQ = (0, LQ.p)(QQ);
          if (void 0 !== yQ && 0 !== yQ) return kQ;
          const BQ = null !== (UQ = QQ.nodes) && void 0 !== UQ ? UQ : [],
            dQ = null !== (NQ = QQ.meshes) && void 0 !== NQ ? NQ : [],
            QF = null !== (TQ = QQ.materials) && void 0 !== TQ ? TQ : [],
            FF = null !== (KQ = QQ.textures) && void 0 !== KQ ? KQ : [],
            wF = null !== (zQ = QQ.images) && void 0 !== zQ ? zQ : [],
            LF = null !== (lQ = null !== (jQ = null !== (aQ = eQ(BQ.length, qQ.nodes, "nodes")) && void 0 !== aQ ? aQ : eQ(dQ.length, qQ.meshes, "meshes")) && void 0 !== jQ ? jQ : eQ(QF.length, qQ.materials, "materials")) && void 0 !== lQ ? lQ : eQ(wF.length, qQ.images, "images");
          if (LF) return LF;
          const qF = new Set;
          for (const LQ of BQ)
            for (const QQ of null !== (oF = LQ.children) && void 0 !== oF ? oF : []) {
              var oF;
              if (!MQ(QQ, BQ.length) || qF.has(QQ)) return kQ;
              qF.add(QQ)
            }
          const DF = new Set,
            kF = QQ => {
              var FQ;
              return !DF.has(QQ) && (DF.add(QQ), (null !== (FQ = BQ[QQ].children) && void 0 !== FQ ? FQ : []).every(kF))
            };
          for (const LQ of null !== (vF = ZQ[0].nodes) && void 0 !== vF ? vF : []) {
            var vF;
            if (!MQ(LQ, BQ.length) || qF.has(LQ) || !kF(LQ)) return kQ
          }
          for (const LQ of BQ) {
            if (void 0 !== LQ.matrix) return "uses node matrices";
            if (void 0 !== LQ.skin) return "uses skins";
            if (void 0 !== LQ.weights) return "uses morph targets";
            if (void 0 !== LQ.mesh && !MQ(LQ.mesh, dQ.length)) return kQ;
            const QQ = [
              [LQ.translation, 3],
              [LQ.rotation, 4],
              [LQ.scale, 3]
            ];
            for (const [FQ, wQ] of QQ)
              if (void 0 !== FQ && (!Array.isArray(FQ) || FQ.length !== wQ || !FQ.every((QQ => Number.isFinite(QQ))))) return kQ
          }
          let mF = -1,
            uF = 0,
            HF = 0,
            bF = null;
          for (const qQ of dQ) {
            if (void 0 !== qQ.weights) return "uses morph targets";
            if (0 === qQ.primitives.length) return kQ;
            for (const wQ of qQ.primitives) {
              var YF, xF;
              const qQ = null !== (YF = wQ.mode) && void 0 !== YF ? YF : 4;
              var AF;
              if (4 !== qQ && 0 !== qQ) return `uses ${null!==(AF=xQ[qQ])&&void 0!==AF?AF:`mode ${qQ}`} primitives`;
              if (void 0 !== wQ.targets) return "uses morph targets";
              if (void 0 !== wQ.material && !MQ(wQ.material, QF.length)) return kQ;
              const oQ = VQ ? null === (xF = wQ.extensions) || void 0 === xF ? void 0 : xF.KHR_draco_mesh_compression : void 0;
              if (oQ) {
                if (4 !== qQ) return "uses Draco-compressed points";
                if (!OQ(QQ, FQ, oQ.bufferView) || "object" !== typeof oQ.attributes) return kQ
              }
              const DQ = wQ.attributes;
              if ("object" !== typeof DQ || null === DQ) return kQ;
              if (void 0 === DQ.POSITION) return "has a primitive with no positions";
              if (!MQ(DQ.POSITION, PQ.length)) return kQ;
              const vQ = PQ[DQ.POSITION].count;
              for (const [QQ, FQ] of Object.entries(DQ)) {
                if (!MQ(FQ, PQ.length)) return kQ;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(QQ)) return "uses skins";
                const wQ = PQ[FQ],
                  LQ = uQ[QQ];
                if (LQ && (wQ.componentType !== AQ || wQ.normalized || wQ.type !== LQ)) return `stores ${QQ} as ${CQ(wQ)}`;
                const qQ = bQ[QQ];
                if (qQ && (wQ.type !== qQ.type || !qQ.componentTypes.includes(wQ.componentType) || wQ.componentType === AQ === !!wQ.normalized)) return `stores ${QQ} as ${CQ(wQ)}`;
                if (YQ.has(QQ) && wQ.count !== vQ) return "has vertex attributes of different lengths"
              }
              if (oQ) {
                if (void 0 === wQ.indices) return kQ;
                for (const FQ in oQ.attributes)
                  if (YQ.has(FQ) && void 0 === DQ[FQ]) return kQ;
                if (void 0 === oQ.attributes.POSITION) return kQ;
                const QQ = MQ(wQ.indices, PQ.length) ? PQ[wQ.indices].count : -1;
                if (0 === QQ) return kQ;
                if (-1 === mF) mF = oQ.bufferView, uF = vQ, HF = QQ;
                else {
                  bF ??= new Map([
                    [mF, [uF, HF]]
                  ]);
                  const FQ = bF.get(oQ.bufferView);
                  if (FQ && (FQ[0] !== vQ || FQ[1] !== QQ)) return kQ;
                  bF.set(oQ.bufferView, null !== FQ && void 0 !== FQ ? FQ : [vQ, QQ])
                }
              }
              let mQ = vQ;
              if (void 0 !== wQ.indices) {
                if (!MQ(wQ.indices, PQ.length)) return kQ;
                const QQ = PQ[wQ.indices];
                if ("SCALAR" !== QQ.type) return kQ;
                if (5121 === QQ.componentType) return "uses 8-bit indices";
                var tF;
                if (5123 !== QQ.componentType && 5125 !== QQ.componentType) return `stores indices as ${null!==(tF=LQ.c[QQ.componentType])&&void 0!==tF?tF:QQ.componentType}`;
                if (!oQ && void 0 === QQ.bufferView) return kQ;
                mQ = QQ.count
              }
              if (4 === qQ && mQ % 3 !== 0) return kQ
            }
          }
          let eF = 0,
            MF = 0,
            GF = 0;
          for (let LQ = 0; LQ < BQ.length; LQ++) {
            const QQ = BQ[LQ].mesh;
            if (void 0 !== QQ && DF.has(LQ))
              for (const FQ of dQ[QQ].primitives) GF++, eF += PQ[FQ.attributes.POSITION].count, void 0 !== FQ.indices && (MF += PQ[FQ.indices].count)
          }
          const pF = null !== (XQ = null !== (fQ = eQ(eF, qQ.vertices, "vertices")) && void 0 !== fQ ? fQ : eQ(MF, qQ.indices, "indices")) && void 0 !== XQ ? XQ : eQ(GF, qQ.primitives, "primitives");
          if (pF) return pF;
          for (const LQ of QF) {
            var cF, CF;
            if (void 0 !== LQ.emissiveTexture) return "uses an emissive texture";
            const FQ = null !== (cF = LQ.alphaMode) && void 0 !== cF ? cF : "OPAQUE";
            if ("OPAQUE" !== FQ && "MASK" !== FQ && "BLEND" !== FQ) return kQ;
            const wQ = null === (CF = LQ.pbrMetallicRoughness) || void 0 === CF ? void 0 : CF.baseColorTexture;
            if (wQ) {
              var SF, iF, WF, RF, OF;
              const FQ = null !== (SF = QQ.extensionsUsed) && void 0 !== SF && SF.includes("KHR_texture_transform") ? null === (iF = wQ.extensions) || void 0 === iF ? void 0 : iF.KHR_texture_transform : void 0;
              if (0 !== (null !== (WF = wQ.texCoord) && void 0 !== WF ? WF : 0) || 0 !== (null !== (RF = null === FQ || void 0 === FQ ? void 0 : FQ.texCoord) && void 0 !== RF ? RF : 0)) return "uses a second UV set";
              const LQ = FF[wQ.index];
              if (!LQ || !MQ(LQ.source, wF.length) || void 0 !== LQ.sampler && !MQ(LQ.sampler, null === (OF = QQ.samplers) || void 0 === OF ? void 0 : OF.length)) return kQ
            }
          }
          for (const LQ of wF) {
            if (void 0 !== LQ.uri) return vQ;
            if (void 0 === LQ.bufferView) return kQ;
            const wQ = OQ(QQ, FQ, LQ.bufferView);
            if (!wQ) return kQ;
            if ("image/png" !== LQ.mimeType) {
              var sF, rF, IF;
              return `has ${WQ(null!==(sF=null!==(rF={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(IF=LQ.mimeType)&&void 0!==IF?IF:""])&&void 0!==rF?rF:LQ.mimeType)&&void 0!==sF?sF:"untyped")} image`
            }
            if (!iQ(wQ)) return `has ${WQ(SQ(wQ))} image`;
            const oQ = new DataView(wQ.buffer, wQ.byteOffset, wQ.byteLength),
              DQ = oQ.getUint32(16),
              mQ = oQ.getUint32(20);
            if (DQ > qQ.imageSide || mQ > qQ.imageSide) return `has a ${DQ} \xd7 ${mQ} image (the limit is ${qQ.imageSide})`
          }
          return null
        }(QQ, FQ)
      } catch {
        return kQ
      }
    }

    function UQ(QQ) {
      const FQ = rQ(QQ.byteLength);
      if (FQ) return FQ;
      try {
        const {
          json: FQ,
          bin: wQ
        } = (0, LQ.q)(QQ);
        return IQ(FQ, wQ)
      } catch (wQ) {
        if (wQ instanceof LQ.j) return wQ.reason;
        throw wQ
      }
    }
  },
  9184: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YQ,
      c: () => bQ,
      f: () => AQ,
      g: () => oQ,
      j: () => qQ,
      l: () => xQ,
      m: () => uQ,
      o: () => HQ,
      p: () => DQ,
      q: () => mQ
    });
    var LQ = wQ(9189);
    class qQ extends Error {
      constructor(QQ) {
        super(`GLB refused: it ${QQ}`), this.reason = QQ, this.name = "GlbRefused"
      }
    }
    class oQ extends Error {
      constructor(QQ) {
        super(QQ), this.name = "GlbError"
      }
    }

    function DQ(QQ) {
      return Reflect.get(QQ, "scene")
    }
    const kQ = 5130562,
      vQ = "is not a binary glTF 2.0 file";

    function mQ(QQ) {
      var FQ;
      const wQ = QQ instanceof Uint8Array ? QQ : new Uint8Array(QQ),
        oQ = (0, LQ.g)(wQ);
      if (null === oQ) throw new qQ(vQ);
      const DQ = oQ.json,
        {
          jsonEnd: mQ,
          length: uQ
        } = oQ,
        HQ = new DataView(wQ.buffer, wQ.byteOffset, wQ.byteLength);
      let bQ = -1,
        YQ = 0;
      for (let tQ = mQ; tQ < uQ;) {
        if (tQ + 8 > uQ) throw new qQ(vQ);
        const QQ = HQ.getUint32(tQ, !0),
          FQ = HQ.getUint32(tQ + 4, !0);
        if (tQ + 8 + QQ > uQ || FQ === LQ.d || FQ === kQ && -1 !== bQ) throw new qQ(vQ);
        FQ === kQ && (bQ = tQ + 8, YQ = QQ), tQ += 8 + QQ
      }
      let xQ = null;
      const AQ = null === (FQ = DQ.buffers) || void 0 === FQ ? void 0 : FQ[0];
      if (-1 !== bQ && AQ && void 0 === AQ.uri) {
        if (!(AQ.byteLength >= 0) || AQ.byteLength > YQ) throw new qQ(vQ);
        xQ = new Uint8Array(wQ.buffer, wQ.byteOffset + bQ, AQ.byteLength)
      }
      return {
        json: DQ,
        bin: xQ,
        fileBytes: wQ.byteLength
      }
    }

    function uQ(QQ) {
      const FQ = QQ.slice(QQ.indexOf(",") + 1),
        wQ = Uint8Array.fromBase64;
      if (wQ) return wQ(FQ).buffer;
      const LQ = atob(FQ),
        qQ = new Uint8Array(LQ.length);
      for (let oQ = 0; oQ < LQ.length; oQ++) qQ[oQ] = LQ.charCodeAt(oQ);
      return qQ.buffer
    }
    async function HQ(QQ) {
      if (QQ.startsWith("data:")) return uQ(QQ);
      const FQ = await fetch(QQ);
      if (!FQ.ok) throw new oQ(`fetching ${QQ} failed: ${FQ.status} ${FQ.statusText}`);
      return await FQ.arrayBuffer()
    }
    const bQ = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      YQ = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      xQ = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      AQ = [
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
  9189: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      g: () => oQ,
      k: () => DQ
    });
    const LQ = 1179937895,
      qQ = 1313821514;

    function oQ(QQ) {
      const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      if (QQ.byteLength < 20 || FQ.getUint32(0, !0) !== LQ || 2 !== FQ.getUint32(4, !0)) return null;
      const wQ = Math.min(FQ.getUint32(8, !0), QQ.byteLength),
        oQ = FQ.getUint32(12, !0);
      if (FQ.getUint32(16, !0) !== qQ || 20 + oQ > wQ) return null;
      let DQ;
      try {
        DQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, 20 + oQ)))
      } catch {
        return null
      }
      return "object" === typeof DQ && null !== DQ ? {
        json: DQ,
        jsonEnd: 20 + oQ,
        length: wQ
      } : null
    }

    function DQ(QQ) {
      var FQ;
      const wQ = null === (FQ = oQ(QQ)) || void 0 === FQ ? void 0 : FQ.json;
      if (void 0 === wQ || !Array.isArray(wQ.extensionsUsed) || !wQ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const LQ = wQ.meshes;
      return Array.isArray(LQ) && LQ.some((QQ => {
        const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.primitives;
        return Array.isArray(FQ) && FQ.some((QQ => {
          const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.extensions;
          return null != (null === FQ || void 0 === FQ ? void 0 : FQ.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);