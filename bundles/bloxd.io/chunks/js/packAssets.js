export const id = 44;
export const ids = [44, 195];
export const modules = {
  9173: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      packDisplayName: () => xQ,
      packModelMessage: () => AQ,
      packModelSummary: () => eQ,
      refusedPackModels: () => tQ
    });
    var LQ = wQ(9181),
      qQ = wQ(9184);
    const oQ = "DRACO",
      DQ = 0,
      kQ = 1,
      vQ = 0,
      mQ = 1,
      uQ = 32768;

    function HQ(QQ) {
      const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      let wQ = 0;
      const LQ = () => {
          if (wQ >= QQ.byteLength) throw new RangeError("past the stream");
          return QQ[wQ++]
        },
        qQ = () => {
          if (wQ + 4 > QQ.byteLength) throw new RangeError("past the stream");
          const LQ = FQ.getUint32(wQ, !0);
          return wQ += 4, LQ
        },
        HQ = () => {
          let QQ = 0;
          for (let FQ = 0; FQ < 35; FQ += 7) {
            const wQ = LQ();
            if (QQ += (127 & wQ) * 2 ** FQ, 0 === (128 & wQ)) return QQ
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let QQ = 0; QQ < oQ.length; QQ++)
          if (LQ() !== oQ.charCodeAt(QQ)) return null;
        const FQ = LQ(),
          bQ = LQ(),
          YQ = LQ(),
          xQ = LQ(),
          AQ = LQ() | LQ() << 8;
        if (2 !== FQ) return null;
        0 !== (AQ & uQ) && function(QQ, FQ, wQ) {
          const LQ = () => {
              FQ(wQ())
            },
            qQ = () => {
              let wQ = 1,
                qQ = !0;
              for (; wQ > 0;) {
                wQ--, qQ || LQ(), qQ = !1;
                const oQ = QQ();
                for (let wQ = 0; wQ < oQ; wQ++) LQ(), FQ(QQ());
                wQ += QQ()
              }
            },
            oQ = QQ();
          for (let DQ = 0; DQ < oQ; DQ++) QQ(), qQ();
          qQ()
        }(HQ, (FQ => {
          if (wQ + FQ > QQ.byteLength) throw new RangeError("past the stream");
          wQ += FQ
        }), LQ);
        const tQ = bQ < 2 ? qQ : HQ;
        if (YQ === DQ) return {
          faces: 0,
          vertices: qQ()
        };
        if (YQ !== kQ) return null;
        if (xQ === vQ) {
          return {
            faces: tQ(),
            vertices: tQ()
          }
        }
        if (xQ !== mQ) return null;
        LQ(), bQ < 2 && HQ();
        const eQ = HQ();
        return {
          faces: HQ(),
          vertices: eQ
        }
      } catch {
        return null
      }
    }

    function bQ(QQ, FQ, wQ) {
      var LQ, qQ;
      if (null === (LQ = null === (qQ = QQ.extensionsUsed) || void 0 === qQ ? void 0 : qQ.includes("KHR_draco_mesh_compression")) || void 0 === LQ || !LQ) return null;
      for (const xQ of null !== (oQ = QQ.meshes) && void 0 !== oQ ? oQ : []) {
        var oQ;
        for (const LQ of xQ.primitives) {
          var DQ, kQ, vQ, mQ, uQ, bQ;
          const qQ = null === (DQ = LQ.extensions) || void 0 === DQ ? void 0 : DQ.KHR_draco_mesh_compression;
          if ("object" !== typeof qQ || null === qQ) continue;
          const oQ = null === (kQ = QQ.bufferViews) || void 0 === kQ ? void 0 : kQ[qQ.bufferView];
          if (null === FQ || void 0 === oQ) return YQ;
          const xQ = null !== (vQ = oQ.byteOffset) && void 0 !== vQ ? vQ : 0,
            AQ = HQ(FQ.subarray(xQ, xQ + oQ.byteLength));
          if (null === AQ && !wQ) continue;
          const tQ = null !== (mQ = QQ.accessors) && void 0 !== mQ ? mQ : [],
            eQ = null === (uQ = tQ[LQ.attributes.POSITION]) || void 0 === uQ ? void 0 : uQ.count,
            MQ = void 0 === LQ.indices ? 0 : null === (bQ = tQ[LQ.indices]) || void 0 === bQ ? void 0 : bQ.count;
          if (null === AQ || void 0 === eQ || void 0 === MQ || 3 * AQ.faces !== MQ || AQ.vertices > eQ) return YQ
        }
      }
      return null
    }
    const YQ = "has a Draco stream whose counts don't match its accessors";

    function xQ(QQ) {
      var FQ;
      return null !== (FQ = QQ.name) && void 0 !== FQ ? FQ : QQ.fromFolderName || QQ.id
    }

    function AQ(QQ, FQ, wQ) {
      return `Texture pack "${QQ}": model "${FQ}" was not loaded because it ${wQ}. The default model is used instead.`
    }

    function tQ(QQ, FQ, wQ) {
      let {
        strictDraco: oQ = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const DQ = {};
      for (const [kQ, vQ] of Object.entries(FQ)) {
        let FQ;
        if (vQ.startsWith("data:")) try {
          const QQ = new Uint8Array((0, qQ.m)(vQ));
          if (FQ = (0, LQ.c)(QQ), null === FQ) {
            const {
              json: wQ,
              bin: LQ
            } = (0, qQ.q)(QQ);
            FQ = bQ(wQ, LQ, oQ)
          }
        } catch {
          FQ = "is not a binary glTF 2.0 file"
        } else FQ = "loads data from outside the file";
        FQ && (DQ[kQ] = FQ, wQ && console.warn(AQ(QQ, kQ, FQ)))
      }
      return DQ
    }

    function eQ(QQ, FQ) {
      const wQ = Object.keys(FQ);
      if (0 === wQ.length) return null;
      if (1 === wQ.length) return AQ(QQ, wQ[0], FQ[wQ[0]]);
      const LQ = wQ.map((QQ => `"${QQ}" ${FQ[QQ]}`)).join("; ");
      return `Texture pack "${QQ}": ${wQ.length} models were not loaded (${LQ}). The default models are used instead.`
    }
  },
  60996: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      packAssets: () => eQ
    });
    var LQ = wQ(3047),
      qQ = wQ(3071),
      oQ = wQ(9173),
      DQ = wQ(3097),
      kQ = wQ(3126);

    function vQ(QQ, FQ, wQ, LQ) {
      const qQ = `${(0,DQ.d)(QQ,FQ)}|sheets${wQ}`;
      return LQ === kQ.e ? qQ : `${qQ}|layers${LQ}`
    }
    var mQ = wQ(3131),
      uQ = wQ(3062),
      HQ = wQ(3053),
      bQ = wQ(3105);
    var YQ = wQ(42741);
    const xQ = 256;
    let AQ = null,
      tQ = null;

    function eQ(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kQ.e;
      if ((null === (FQ = AQ) || void 0 === FQ ? void 0 : FQ.pack) === QQ.pack && AQ.maxLayerWidth === wQ) return AQ.assets;
      const eQ = (0, YQ.e)(QQ.pack, (0, YQ.i)(QQ));
      if (null === eQ || !(0, qQ.e)(eQ)) return Promise.resolve(null);
      const GQ = async function(QQ, FQ, wQ) {
        var YQ;
        const AQ = null !== (YQ = QQ.textureOverrides) && void 0 !== YQ ? YQ : {},
          {
            id: eQ,
            version: GQ
          } = QQ.metaData,
          pQ = FQ && eQ !== LQ.s.CUSTOM,
          cQ = {};
        pQ && (tQ = cQ);
        let CQ, SQ, iQ = pQ ? await async function(QQ, FQ, wQ, LQ) {
          const qQ = vQ(QQ, FQ, wQ, kQ.e),
            oQ = vQ(QQ, FQ, wQ, LQ),
            mQ = await (0, DQ.h)((QQ => QQ === qQ || QQ === oQ));
          return null !== mQ && (LQ === kQ.e || mQ.blockAtlasWidth <= LQ) ? mQ : null
        }(eQ, GQ, xQ, wQ): null;
        if (null === iQ) {
          const {
            blockMetadata: QQ,
            getDefaultTexture: FQ,
            textureNameToIndex: oQ
          } = await (0, qQ.i)(), kQ = (0, uQ.d)(QQ, ((QQ, wQ) => ({
            url: MQ(AQ, FQ, QQ, "block" === wQ ? HQ.d.BLOCK : HQ.d.ITEM)
          }))), mQ = await
          function(QQ, FQ, wQ, LQ, qQ, oQ) {
            return (0, bQ.c)((DQ => DQ.WasmTextureWorker.generateRequired(QQ, FQ, wQ, LQ, qQ, oQ)))
          }(QQ, oQ, kQ, eQ === LQ.d, wQ, xQ), YQ = mQ.assets;
          iQ = {
            ...YQ,
            averageColors: {}
          }, CQ = mQ.averageColors(), pQ && (SQ = CQ.then((async QQ => {
            null !== QQ && tQ === cQ && await
            function(QQ, FQ, wQ, LQ, qQ) {
              return (0, DQ.m)(vQ(QQ, FQ, LQ, qQ), wQ)
            }(eQ, GQ, {
              ...YQ,
              averageColors: QQ
            }, xQ, mQ.layerCap)
          })))
        }
        return function(QQ, FQ) {
          var wQ, LQ;
          let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((kQ = QQ.averageColors, 0 === Object.keys(null !== kQ && void 0 !== kQ ? kQ : {}).length ? null : QQ.averageColors)),
            DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var kQ;
          const vQ = null !== (wQ = FQ.textureOverrides) && void 0 !== wQ ? wQ : {},
            uQ = null !== (LQ = FQ.modelOverrides) && void 0 !== LQ ? LQ : {},
            HQ = 0 === Object.keys(uQ).length ? {} : (0, oQ.refusedPackModels)((0, oQ.packDisplayName)(FQ.metaData), uQ, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: bQ,
              rotatedBlockTextures: YQ
            } = QQ,
            xQ = QQ => {
              var FQ, wQ;
              return null !== (FQ = null !== (wQ = bQ[QQ]) && void 0 !== wQ ? wQ : YQ[QQ]) && void 0 !== FQ ? FQ : null
            };
          return {
            terrain: {
              atlasSheets: QQ.blockAtlasArr,
              texture: xQ
            },
            sheetPixels: [...QQ.blockAtlasPixels],
            heldUntil: DQ,
            sheetLayout: QQ.imagesPerAtlas,
            sheetWidth: QQ.blockAtlasWidth,
            armourAtlasUrl: QQ.armourAtlas,
            texture: QQ => {
              var FQ, wQ;
              return null !== (FQ = null !== (wQ = xQ(QQ)) && void 0 !== wQ ? wQ : (0, mQ.e)(vQ, QQ)) && void 0 !== FQ ? FQ : null
            },
            model: QQ => void 0 === HQ[QQ] && uQ[QQ] || null,
            averageColours: qQ
          }
        }(iQ, QQ, CQ, SQ)
      }(eQ, null === QQ.gameSource, wQ), pQ = {
        pack: QQ.pack,
        maxLayerWidth: wQ,
        assets: GQ
      };
      return AQ = pQ, GQ.catch((() => {
        AQ === pQ && (AQ = null)
      })), GQ
    }

    function MQ(QQ, FQ, LQ, qQ) {
      const oQ = (0, mQ.e)(QQ, LQ);
      if (oQ) return oQ;
      try {
        return FQ(LQ, qQ).url
      } catch {
        return wQ(3171)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);