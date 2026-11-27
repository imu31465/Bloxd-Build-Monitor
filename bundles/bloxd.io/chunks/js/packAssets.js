export const id = 53;
export const ids = [53, 232];
export const modules = {
  35316: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      packDisplayName: () => bW,
      packModelMessage: () => jW,
      packModelSummary: () => kW,
      refusedPackModels: () => UW
    });
    var mW = OW(35324),
      EW = OW(35330);
    const NW = "DRACO",
      PW = 0,
      LW = 1,
      cW = 0,
      wW = 1,
      tW = 32768;

    function ZW(WW) {
      const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      let OW = 0;
      const mW = () => {
          if (OW >= WW.byteLength) throw new RangeError("past the stream");
          return WW[OW++]
        },
        EW = () => {
          if (OW + 4 > WW.byteLength) throw new RangeError("past the stream");
          const mW = iW.getUint32(OW, !0);
          return OW += 4, mW
        },
        ZW = () => {
          let WW = 0;
          for (let iW = 0; iW < 35; iW += 7) {
            const OW = mW();
            if (WW += (127 & OW) * 2 ** iW, 0 === (128 & OW)) return WW
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let WW = 0; WW < NW.length; WW++)
          if (mW() !== NW.charCodeAt(WW)) return null;
        const iW = mW(),
          xW = mW(),
          lW = mW(),
          AW = mW(),
          bW = mW() | mW() << 8;
        if (2 !== iW) return null;
        0 !== (bW & tW) && function(WW, iW, OW) {
          const mW = () => {
              iW(OW())
            },
            EW = () => {
              let OW = 1,
                EW = !0;
              for (; OW > 0;) {
                OW--, EW || mW(), EW = !1;
                const NW = WW();
                for (let OW = 0; OW < NW; OW++) mW(), iW(WW());
                OW += WW()
              }
            },
            NW = WW();
          for (let PW = 0; PW < NW; PW++) WW(), EW();
          EW()
        }(ZW, (iW => {
          if (OW + iW > WW.byteLength) throw new RangeError("past the stream");
          OW += iW
        }), mW);
        const jW = xW < 2 ? EW : ZW;
        if (lW === PW) return {
          faces: 0,
          vertices: EW(),
          minor: xW
        };
        if (lW !== LW) return null;
        if (AW === cW) {
          return {
            faces: jW(),
            vertices: jW(),
            minor: xW
          }
        }
        if (AW !== wW) return null;
        mW(), xW < 2 && ZW();
        const UW = ZW();
        return {
          faces: ZW(),
          vertices: UW,
          minor: xW
        }
      } catch {
        return null
      }
    }

    function xW(WW, iW, OW) {
      var mW, EW;
      if (null === (mW = null === (EW = WW.extensionsUsed) || void 0 === EW ? void 0 : EW.includes("KHR_draco_mesh_compression")) || void 0 === mW || !mW) return null;
      for (const bW of null !== (NW = WW.meshes) && void 0 !== NW ? NW : []) {
        var NW;
        for (const mW of bW.primitives) {
          var PW, LW, cW, wW, tW, xW;
          const EW = null === (PW = mW.extensions) || void 0 === PW ? void 0 : PW.KHR_draco_mesh_compression;
          if ("object" !== typeof EW || null === EW) continue;
          const NW = null === (LW = WW.bufferViews) || void 0 === LW ? void 0 : LW[EW.bufferView];
          if (null === iW || void 0 === NW) return lW;
          const bW = null !== (cW = NW.byteOffset) && void 0 !== cW ? cW : 0,
            jW = ZW(iW.subarray(bW, bW + NW.byteLength));
          if (null === jW && !OW) continue;
          const UW = null !== (wW = WW.accessors) && void 0 !== wW ? wW : [],
            kW = null === (tW = UW[mW.attributes.POSITION]) || void 0 === tW ? void 0 : tW.count,
            sW = void 0 === mW.indices ? 0 : null === (xW = UW[mW.indices]) || void 0 === xW ? void 0 : xW.count;
          if (null === jW || void 0 === kW || void 0 === sW || 3 * jW.faces !== sW || jW.vertices > kW) return lW;
          if (OW && jW.minor < 2) return AW
        }
      }
      return null
    }
    const lW = "has a Draco stream whose counts don't match its accessors",
      AW = "has a Draco stream too old to decode: export it again";

    function bW(WW) {
      var iW;
      return null !== (iW = WW.name) && void 0 !== iW ? iW : WW.fromFolderName || WW.id
    }

    function jW(WW, iW, OW) {
      return `Texture pack "${WW}": model "${iW}" was not loaded because it ${OW}. The default model is used instead.`
    }

    function UW(WW, iW, OW) {
      let {
        strictDraco: NW = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const PW = {};
      for (const [LW, cW] of Object.entries(iW)) {
        let iW;
        if (cW.startsWith("data:")) try {
          const WW = new Uint8Array((0, EW.r)(cW));
          if (iW = (0, mW.d)(WW), null === iW) {
            const {
              json: OW,
              bin: mW
            } = (0, EW.y)(WW);
            iW = xW(OW, mW, NW)
          }
        } catch {
          iW = "is not a binary glTF 2.0 file"
        } else iW = "loads data from outside the file";
        iW && (PW[LW] = iW, OW && console.warn(jW(WW, LW, iW)))
      }
      return PW
    }

    function kW(WW, iW) {
      const OW = Object.keys(iW);
      if (0 === OW.length) return null;
      if (1 === OW.length) return jW(WW, OW[0], iW[OW[0]]);
      const mW = OW.map((WW => `"${WW}" ${iW[WW]}`)).join("; ");
      return `Texture pack "${WW}": ${OW.length} models were not loaded (${mW}). The default models are used instead.`
    }
  },
  64622: (WW, iW, OW) => {
    OW.d(iW, {
      packAssets: () => UW
    });
    var mW = OW(2300),
      EW = OW(2283),
      NW = OW(35316),
      PW = OW(4395),
      LW = OW(4426);

    function cW(WW, iW, OW, mW) {
      const EW = `${(0,PW.e)(WW,iW)}|sheets${OW}`;
      return mW === LW.e ? EW : `${EW}|layers${mW}`
    }
    var wW = OW(4429),
      tW = OW(4366),
      ZW = OW(4356),
      xW = OW(4403);
    var lW = OW(54820);
    const AW = 256;
    let bW = null,
      jW = null;

    function UW(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LW.e;
      if ((null === (iW = bW) || void 0 === iW ? void 0 : iW.pack) === WW.pack && bW.maxLayerWidth === OW) return bW.assets;
      const UW = (0, lW.f)(WW.pack, (0, lW.k)(WW));
      if (null === UW || !(0, EW.d)(UW)) return Promise.resolve(null);
      const sW = async function(WW, iW, OW) {
        var lW;
        const bW = null !== (lW = WW.textureOverrides) && void 0 !== lW ? lW : {},
          {
            id: UW,
            version: sW
          } = WW.metaData,
          MW = iW && UW !== mW.n.CUSTOM,
          KW = {};
        MW && (jW = KW);
        let SW, YW, yW = MW ? await async function(WW, iW, OW, mW) {
          const EW = cW(WW, iW, OW, LW.e),
            NW = cW(WW, iW, OW, mW),
            wW = await (0, PW.k)((WW => WW === EW || WW === NW));
          return null !== wW && (mW === LW.e || wW.blockAtlasWidth <= mW) ? wW : null
        }(UW, sW, AW, OW): null;
        if (null === yW) {
          const {
            blockMetadata: WW,
            getDefaultTexture: iW,
            textureNameToIndex: NW
          } = await (0, EW.k)(), LW = (0, tW.b)(WW, ((WW, OW) => ({
            url: kW(bW, iW, WW, "block" === OW ? ZW.h.BLOCK : ZW.h.ITEM)
          }))), wW = await
          function(WW, iW, OW, mW, EW, NW) {
            return (0, xW.d)((PW => PW.WasmTextureWorker.generateRequired(WW, iW, OW, mW, EW, NW)))
          }(WW, NW, LW, UW === mW.d, OW, AW), lW = wW.assets;
          yW = {
            ...lW,
            averageColors: {}
          }, SW = wW.averageColors(), MW && (YW = SW.then((async WW => {
            null !== WW && jW === KW && await
            function(WW, iW, OW, mW, EW) {
              return (0, PW.p)(cW(WW, iW, mW, EW), OW)
            }(UW, sW, {
              ...lW,
              averageColors: WW
            }, AW, wW.layerCap)
          })))
        }
        return function(WW, iW) {
          var OW, mW;
          let EW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((LW = WW.averageColors, 0 === Object.keys(null !== LW && void 0 !== LW ? LW : {}).length ? null : WW.averageColors)),
            PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var LW;
          const cW = null !== (OW = iW.textureOverrides) && void 0 !== OW ? OW : {},
            tW = null !== (mW = iW.modelOverrides) && void 0 !== mW ? mW : {},
            ZW = 0 === Object.keys(tW).length ? {} : (0, NW.refusedPackModels)((0, NW.packDisplayName)(iW.metaData), tW, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: xW,
              rotatedBlockTextures: lW
            } = WW,
            AW = WW => {
              var iW, OW;
              return null !== (iW = null !== (OW = xW[WW]) && void 0 !== OW ? OW : lW[WW]) && void 0 !== iW ? iW : null
            };
          return {
            terrain: {
              atlasSheets: WW.blockAtlasArr,
              texture: AW
            },
            sheetPixels: [...WW.blockAtlasPixels],
            heldUntil: PW,
            sheetLayout: WW.imagesPerAtlas,
            sheetWidth: WW.blockAtlasWidth,
            armourAtlasUrl: WW.armourAtlas,
            texture: WW => {
              var iW, OW;
              return null !== (iW = null !== (OW = AW(WW)) && void 0 !== OW ? OW : (0, wW.e)(cW, WW)) && void 0 !== iW ? iW : null
            },
            model: WW => void 0 === ZW[WW] && tW[WW] || null,
            averageColours: EW
          }
        }(yW, WW, SW, YW)
      }(UW, null === WW.gameSource, OW), MW = {
        pack: WW.pack,
        maxLayerWidth: OW,
        assets: sW
      };
      return bW = MW, sW.catch((() => {
        bW === MW && (bW = null)
      })), sW
    }

    function kW(WW, iW, mW, EW) {
      const NW = (0, wW.e)(WW, mW);
      if (NW) return NW;
      try {
        return iW(mW, EW).url
      } catch {
        return OW(4475)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);