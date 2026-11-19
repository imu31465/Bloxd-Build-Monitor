export const id = 44;
export const ids = [44, 189];
export const modules = {
  8799: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      packDisplayName: () => cT,
      packModelMessage: () => KT,
      packModelSummary: () => rT,
      refusedPackModels: () => MT
    });
    var iT = IT(8801),
      zT = IT(8805);
    const kT = "DRACO",
      WT = 0,
      XT = 1,
      BT = 0,
      FT = 1,
      ST = 32768;

    function DT(TT) {
      const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let IT = 0;
      const iT = () => {
          if (IT >= TT.byteLength) throw new RangeError("past the stream");
          return TT[IT++]
        },
        zT = () => {
          if (IT + 4 > TT.byteLength) throw new RangeError("past the stream");
          const iT = oT.getUint32(IT, !0);
          return IT += 4, iT
        },
        DT = () => {
          let TT = 0;
          for (let oT = 0; oT < 35; oT += 7) {
            const IT = iT();
            if (TT += (127 & IT) * 2 ** oT, 0 === (128 & IT)) return TT
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let TT = 0; TT < kT.length; TT++)
          if (iT() !== kT.charCodeAt(TT)) return null;
        const oT = iT(),
          LT = iT(),
          xT = iT(),
          cT = iT(),
          KT = iT() | iT() << 8;
        if (2 !== oT) return null;
        0 !== (KT & ST) && function(TT, oT, IT) {
          const iT = () => {
              oT(IT())
            },
            zT = () => {
              let IT = 1,
                zT = !0;
              for (; IT > 0;) {
                IT--, zT || iT(), zT = !1;
                const kT = TT();
                for (let IT = 0; IT < kT; IT++) iT(), oT(TT());
                IT += TT()
              }
            },
            kT = TT();
          for (let WT = 0; WT < kT; WT++) TT(), zT();
          zT()
        }(DT, (oT => {
          if (IT + oT > TT.byteLength) throw new RangeError("past the stream");
          IT += oT
        }), iT);
        const MT = LT < 2 ? zT : DT;
        if (xT === WT) return {
          faces: 0,
          vertices: zT()
        };
        if (xT !== XT) return null;
        if (cT === BT) {
          return {
            faces: MT(),
            vertices: MT()
          }
        }
        if (cT !== FT) return null;
        iT(), LT < 2 && DT();
        const rT = DT();
        return {
          faces: DT(),
          vertices: rT
        }
      } catch {
        return null
      }
    }

    function LT(TT, oT, IT) {
      var iT, zT;
      if (null === (iT = null === (zT = TT.extensionsUsed) || void 0 === zT ? void 0 : zT.includes("KHR_draco_mesh_compression")) || void 0 === iT || !iT) return null;
      for (const cT of null !== (kT = TT.meshes) && void 0 !== kT ? kT : []) {
        var kT;
        for (const iT of cT.primitives) {
          var WT, XT, BT, FT, ST, LT;
          const zT = null === (WT = iT.extensions) || void 0 === WT ? void 0 : WT.KHR_draco_mesh_compression;
          if ("object" !== typeof zT || null === zT) continue;
          const kT = null === (XT = TT.bufferViews) || void 0 === XT ? void 0 : XT[zT.bufferView];
          if (null === oT || void 0 === kT) return xT;
          const cT = null !== (BT = kT.byteOffset) && void 0 !== BT ? BT : 0,
            KT = DT(oT.subarray(cT, cT + kT.byteLength));
          if (null === KT && !IT) continue;
          const MT = null !== (FT = TT.accessors) && void 0 !== FT ? FT : [],
            rT = null === (ST = MT[iT.attributes.POSITION]) || void 0 === ST ? void 0 : ST.count,
            AT = void 0 === iT.indices ? 0 : null === (LT = MT[iT.indices]) || void 0 === LT ? void 0 : LT.count;
          if (null === KT || void 0 === rT || void 0 === AT || 3 * KT.faces !== AT || KT.vertices > rT) return xT
        }
      }
      return null
    }
    const xT = "has a Draco stream whose counts don't match its accessors";

    function cT(TT) {
      var oT;
      return null !== (oT = TT.name) && void 0 !== oT ? oT : TT.fromFolderName || TT.id
    }

    function KT(TT, oT, IT) {
      return `Texture pack "${TT}": model "${oT}" was not loaded because it ${IT}. The default model is used instead.`
    }

    function MT(TT, oT, IT) {
      let {
        strictDraco: kT = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const WT = {};
      for (const [XT, BT] of Object.entries(oT)) {
        let oT;
        if (BT.startsWith("data:")) try {
          const TT = new Uint8Array((0, zT.w)(BT));
          if (oT = (0, iT.d)(TT), null === oT) {
            const {
              json: IT,
              bin: iT
            } = (0, zT.B)(TT);
            oT = LT(IT, iT, kT)
          }
        } catch {
          oT = "is not a binary glTF 2.0 file"
        } else oT = "loads data from outside the file";
        oT && (WT[XT] = oT, IT && console.warn(KT(TT, XT, oT)))
      }
      return WT
    }

    function rT(TT, oT) {
      const IT = Object.keys(oT);
      if (0 === IT.length) return null;
      if (1 === IT.length) return KT(TT, IT[0], oT[IT[0]]);
      const iT = IT.map((TT => `"${TT}" ${oT[TT]}`)).join("; ");
      return `Texture pack "${TT}": ${IT.length} models were not loaded (${iT}). The default models are used instead.`
    }
  },
  60359: (TT, oT, IT) => {
    IT.d(oT, {
      packAssets: () => rT
    });
    var iT = IT(2715),
      zT = IT(2750),
      kT = IT(8799),
      WT = IT(2774),
      XT = IT(2814);

    function BT(TT, oT, IT, iT) {
      const zT = `${(0,WT.c)(TT,oT)}|sheets${IT}`;
      return iT === XT.e ? zT : `${zT}|layers${iT}`
    }
    var FT = IT(2818),
      ST = IT(2729),
      DT = IT(2719),
      LT = IT(2777);
    var xT = IT(42138);
    const cT = 256;
    let KT = null,
      MT = null;

    function rT(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XT.e;
      if ((null === (oT = KT) || void 0 === oT ? void 0 : oT.pack) === TT.pack && KT.maxLayerWidth === IT) return KT.assets;
      const rT = (0, xT.e)(TT.pack, (0, xT.i)(TT));
      if (null === rT || !(0, zT.e)(rT)) return Promise.resolve(null);
      const gT = async function(TT, oT, IT) {
        var xT;
        const KT = null !== (xT = TT.textureOverrides) && void 0 !== xT ? xT : {},
          {
            id: rT,
            version: gT
          } = TT.metaData,
          hT = oT && rT !== iT.n.CUSTOM,
          wT = {};
        hT && (MT = wT);
        let mT, eT, RT = hT ? await async function(TT, oT, IT, iT) {
          const zT = BT(TT, oT, IT, XT.e),
            kT = BT(TT, oT, IT, iT),
            FT = await (0, WT.h)((TT => TT === zT || TT === kT));
          return null !== FT && (iT === XT.e || FT.blockAtlasWidth <= iT) ? FT : null
        }(rT, gT, cT, IT): null;
        if (null === RT) {
          const {
            blockMetadata: TT,
            getDefaultTexture: oT,
            textureNameToIndex: kT
          } = await (0, zT.j)(), XT = (0, ST.c)(TT, ((TT, IT) => ({
            url: AT(KT, oT, TT, "block" === IT ? DT.g.BLOCK : DT.g.ITEM)
          }))), FT = await
          function(TT, oT, IT, iT, zT, kT) {
            return (0, LT.e)((WT => WT.WasmTextureWorker.generateRequired(TT, oT, IT, iT, zT, kT)))
          }(TT, kT, XT, rT === iT.d, IT, cT), xT = FT.assets;
          RT = {
            ...xT,
            averageColors: {}
          }, mT = FT.averageColors(), hT && (eT = mT.then((async TT => {
            null !== TT && MT === wT && await
            function(TT, oT, IT, iT, zT) {
              return (0, WT.m)(BT(TT, oT, iT, zT), IT)
            }(rT, gT, {
              ...xT,
              averageColors: TT
            }, cT, FT.layerCap)
          })))
        }
        return function(TT, oT) {
          var IT, iT;
          let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((XT = TT.averageColors, 0 === Object.keys(null !== XT && void 0 !== XT ? XT : {}).length ? null : TT.averageColors)),
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var XT;
          const BT = null !== (IT = oT.textureOverrides) && void 0 !== IT ? IT : {},
            ST = null !== (iT = oT.modelOverrides) && void 0 !== iT ? iT : {},
            DT = 0 === Object.keys(ST).length ? {} : (0, kT.refusedPackModels)((0, kT.packDisplayName)(oT.metaData), ST, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: LT,
              rotatedBlockTextures: xT
            } = TT,
            cT = TT => {
              var oT, IT;
              return null !== (oT = null !== (IT = LT[TT]) && void 0 !== IT ? IT : xT[TT]) && void 0 !== oT ? oT : null
            };
          return {
            terrain: {
              atlasSheets: TT.blockAtlasArr,
              texture: cT
            },
            sheetPixels: [...TT.blockAtlasPixels],
            heldUntil: WT,
            sheetLayout: TT.imagesPerAtlas,
            sheetWidth: TT.blockAtlasWidth,
            armourAtlasUrl: TT.armourAtlas,
            texture: TT => {
              var oT, IT;
              return null !== (oT = null !== (IT = cT(TT)) && void 0 !== IT ? IT : (0, FT.b)(BT, TT)) && void 0 !== oT ? oT : null
            },
            model: TT => void 0 === DT[TT] && ST[TT] || null,
            averageColours: zT
          }
        }(RT, TT, mT, eT)
      }(rT, null === TT.gameSource, IT), hT = {
        pack: TT.pack,
        maxLayerWidth: IT,
        assets: gT
      };
      return KT = hT, gT.catch((() => {
        KT === hT && (KT = null)
      })), gT
    }

    function AT(TT, oT, iT, zT) {
      const kT = (0, FT.b)(TT, iT);
      if (kT) return kT;
      try {
        return oT(iT, zT).url
      } catch {
        return IT(2861)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);