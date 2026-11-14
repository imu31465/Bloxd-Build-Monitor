export const id = 38;
export const ids = [38, 180];
export const modules = {
  32642: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      packDisplayName: () => gR,
      packModelMessage: () => iR,
      packModelSummary: () => JW,
      refusedPackModels: () => YW
    });
    var wW = MW(32650),
      CW = MW(32658);
    const zR = "DRACO",
      AW = 0,
      bR = 1,
      yR = 0,
      NW = 1,
      eW = 32768;

    function BW(WW) {
      const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      let MW = 0;
      const wW = () => {
          if (MW >= WW.byteLength) throw new RangeError("past the stream");
          return WW[MW++]
        },
        CW = () => {
          if (MW + 4 > WW.byteLength) throw new RangeError("past the stream");
          const wW = RW.getUint32(MW, !0);
          return MW += 4, wW
        },
        BW = () => {
          let WW = 0;
          for (let RW = 0; RW < 35; RW += 7) {
            const MW = wW();
            if (WW += (127 & MW) * 2 ** RW, 0 === (128 & MW)) return WW
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let WW = 0; WW < zR.length; WW++)
          if (wW() !== zR.charCodeAt(WW)) return null;
        const RW = wW(),
          tR = wW(),
          TW = wW(),
          gR = wW(),
          iR = wW() | wW() << 8;
        if (2 !== RW) return null;
        0 !== (iR & eW) && function(WW, RW, MW) {
          const wW = () => {
              RW(MW())
            },
            CW = () => {
              let MW = 1,
                CW = !0;
              for (; MW > 0;) {
                MW--, CW || wW(), CW = !1;
                const zR = WW();
                for (let MW = 0; MW < zR; MW++) wW(), RW(WW());
                MW += WW()
              }
            },
            zR = WW();
          for (let AW = 0; AW < zR; AW++) WW(), CW();
          CW()
        }(BW, (RW => {
          if (MW + RW > WW.byteLength) throw new RangeError("past the stream");
          MW += RW
        }), wW);
        const YW = tR < 2 ? CW : BW;
        if (TW === AW) return {
          faces: 0,
          vertices: CW()
        };
        if (TW !== bR) return null;
        if (gR === yR) {
          return {
            faces: YW(),
            vertices: YW()
          }
        }
        if (gR !== NW) return null;
        wW(), tR < 2 && BW();
        const JW = BW();
        return {
          faces: BW(),
          vertices: JW
        }
      } catch {
        return null
      }
    }

    function tR(WW, RW, MW) {
      var wW, CW;
      if (null === (wW = null === (CW = WW.extensionsUsed) || void 0 === CW ? void 0 : CW.includes("KHR_draco_mesh_compression")) || void 0 === wW || !wW) return null;
      for (const gR of null !== (zR = WW.meshes) && void 0 !== zR ? zR : []) {
        var zR;
        for (const wW of gR.primitives) {
          var AW, bR, yR, NW, eW, tR;
          const CW = null === (AW = wW.extensions) || void 0 === AW ? void 0 : AW.KHR_draco_mesh_compression;
          if ("object" !== typeof CW || null === CW) continue;
          const zR = null === (bR = WW.bufferViews) || void 0 === bR ? void 0 : bR[CW.bufferView];
          if (null === RW || void 0 === zR) return TW;
          const gR = null !== (yR = zR.byteOffset) && void 0 !== yR ? yR : 0,
            iR = BW(RW.subarray(gR, gR + zR.byteLength));
          if (null === iR && !MW) continue;
          const YW = null !== (NW = WW.accessors) && void 0 !== NW ? NW : [],
            JW = null === (eW = YW[wW.attributes.POSITION]) || void 0 === eW ? void 0 : eW.count,
            PW = void 0 === wW.indices ? 0 : null === (tR = YW[wW.indices]) || void 0 === tR ? void 0 : tR.count;
          if (null === iR || void 0 === JW || void 0 === PW || 3 * iR.faces !== PW || iR.vertices > JW) return TW
        }
      }
      return null
    }
    const TW = "has a Draco stream whose counts don't match its accessors";

    function gR(WW) {
      var RW;
      return null !== (RW = WW.name) && void 0 !== RW ? RW : WW.fromFolderName || WW.id
    }

    function iR(WW, RW, MW) {
      return `Texture pack "${WW}": model "${RW}" was not loaded because it ${MW}. The default model is used instead.`
    }

    function YW(WW, RW, MW) {
      let {
        strictDraco: zR = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const AW = {};
      for (const [bR, yR] of Object.entries(RW)) {
        let RW;
        if (yR.startsWith("data:")) try {
          const WW = new Uint8Array((0, CW.s)(yR));
          if (RW = (0, wW.c)(WW), null === RW) {
            const {
              json: MW,
              bin: wW
            } = (0, CW.x)(WW);
            RW = tR(MW, wW, zR)
          }
        } catch {
          RW = "is not a binary glTF 2.0 file"
        } else RW = "loads data from outside the file";
        RW && (AW[bR] = RW, MW && console.warn(iR(WW, bR, RW)))
      }
      return AW
    }

    function JW(WW, RW) {
      const MW = Object.keys(RW);
      if (0 === MW.length) return null;
      if (1 === MW.length) return iR(WW, MW[0], RW[MW[0]]);
      const wW = MW.map((WW => `"${WW}" ${RW[WW]}`)).join("; ");
      return `Texture pack "${WW}": ${MW.length} models were not loaded (${wW}). The default models are used instead.`
    }
  },
  58896: (WW, RW, MW) => {
    MW.d(RW, {
      packAssets: () => YW
    });
    var wW = MW(2301),
      CW = MW(8177),
      zR = MW(32642),
      AW = MW(2343),
      bR = MW(2385);

    function yR(WW, RW, MW) {
      const wW = (0, AW.c)(WW, RW);
      return MW === bR.c ? wW : `${wW}|layers${MW}`
    }
    var NW = MW(2394),
      eW = MW(2317),
      BW = MW(2309),
      tR = MW(2348);
    var TW = MW(40767);
    let gR = null,
      iR = null;

    function YW(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bR.c;
      if ((null === (RW = gR) || void 0 === RW ? void 0 : RW.pack) === WW.pack && gR.maxLayerWidth === MW) return gR.assets;
      const YW = (0, TW.g)(WW.pack, (0, TW.l)(WW));
      if (null === YW || YW.metaData.id === wW.b && JW(YW.textureOverrides) && JW(YW.modelOverrides)) return Promise.resolve(null);
      const IW = async function(WW, RW, MW) {
        var bR;
        const TW = null !== (bR = WW.textureOverrides) && void 0 !== bR ? bR : {},
          {
            id: gR,
            version: YW
          } = WW.metaData,
          IW = RW && gR !== wW.n.CUSTOM,
          oW = {};
        IW && (iR = oW);
        let lW, FW = IW ? await
        function(WW, RW, MW) {
          const wW = (0, AW.c)(WW, RW),
            CW = yR(WW, RW, MW);
          return (0, AW.j)((WW => WW === wW || WW === CW))
        }(gR, YW, MW): null;
        if (null === FW) {
          const WW = (0, eW.c)(CW.blockMetadata, ((WW, RW) => ({
              url: PW(TW, WW, "block" === RW ? BW.i.BLOCK : BW.i.ITEM)
            }))),
            RW = await
          function(WW, RW, MW, wW, CW) {
            return (0, tR.c)((zR => zR.WasmTextureWorker.generateRequired(WW, RW, MW, wW, CW)))
          }(CW.blockMetadata, CW.textureNameToIndex, WW, gR === wW.b, MW), zR = RW.assets;
          FW = {
            ...zR,
            averageColors: {}
          }, lW = RW.averageColors(), IW && lW.then((WW => {
            null !== WW && iR === oW && function(WW, RW, MW, wW) {
              (0, AW.o)(yR(WW, RW, wW), MW)
            }(gR, YW, {
              ...zR,
              averageColors: WW
            }, RW.layerCap)
          }))
        }
        return function(WW, RW) {
          var MW, wW;
          let CW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve(JW(WW.averageColors) ? null : WW.averageColors);
          const AW = null !== (MW = RW.textureOverrides) && void 0 !== MW ? MW : {},
            bR = null !== (wW = RW.modelOverrides) && void 0 !== wW ? wW : {},
            yR = 0 === Object.keys(bR).length ? {} : (0, zR.refusedPackModels)((0, zR.packDisplayName)(RW.metaData), bR, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: eW,
              rotatedBlockTextures: BW
            } = WW,
            tR = WW => {
              var RW, MW;
              return null !== (RW = null !== (MW = eW[WW]) && void 0 !== MW ? MW : BW[WW]) && void 0 !== RW ? RW : null
            };
          return {
            terrain: {
              atlasSheets: WW.blockAtlasArr,
              texture: tR
            },
            sheetPixels: [...WW.blockAtlasPixels],
            sheetWidth: WW.blockAtlasWidth,
            armourAtlasUrl: WW.armourAtlas,
            texture: WW => {
              var RW, MW;
              return null !== (RW = null !== (MW = tR(WW)) && void 0 !== MW ? MW : (0, NW.e)(AW, WW)) && void 0 !== RW ? RW : null
            },
            model: WW => void 0 === yR[WW] && bR[WW] || null,
            averageColours: CW
          }
        }(FW, WW, lW)
      }(YW, null === WW.gameSource, MW), oW = {
        pack: WW.pack,
        maxLayerWidth: MW,
        assets: IW
      };
      return gR = oW, IW.catch((() => {
        gR === oW && (gR = null)
      })), IW
    }

    function JW(WW) {
      return 0 === Object.keys(null !== WW && void 0 !== WW ? WW : {}).length
    }

    function PW(WW, RW, wW) {
      const zR = (0, NW.e)(WW, RW);
      if (zR) return zR;
      try {
        return (0, CW.getDefaultTexture)(RW, wW).url
      } catch {
        return MW(2424)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);