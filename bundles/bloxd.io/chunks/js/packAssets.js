export const id = 52;
export const ids = [52, 226];
export const modules = {
  35061: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      packDisplayName: () => QH,
      packModelMessage: () => WH,
      packModelSummary: () => xH,
      refusedPackModels: () => MH
    });
    var AH = LH(35067),
      rH = LH(35071);
    const SH = "DRACO",
      hH = 0,
      tH = 1,
      zH = 0,
      CH = 1,
      EH = 32768;

    function XH(HH) {
      const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
      let LH = 0;
      const AH = () => {
          if (LH >= HH.byteLength) throw new RangeError("past the stream");
          return HH[LH++]
        },
        rH = () => {
          if (LH + 4 > HH.byteLength) throw new RangeError("past the stream");
          const AH = BH.getUint32(LH, !0);
          return LH += 4, AH
        },
        XH = () => {
          let HH = 0;
          for (let BH = 0; BH < 35; BH += 7) {
            const LH = AH();
            if (HH += (127 & LH) * 2 ** BH, 0 === (128 & LH)) return HH
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let HH = 0; HH < SH.length; HH++)
          if (AH() !== SH.charCodeAt(HH)) return null;
        const BH = AH(),
          GH = AH(),
          YH = AH(),
          uH = AH(),
          QH = AH() | AH() << 8;
        if (2 !== BH) return null;
        0 !== (QH & EH) && function(HH, BH, LH) {
          const AH = () => {
              BH(LH())
            },
            rH = () => {
              let LH = 1,
                rH = !0;
              for (; LH > 0;) {
                LH--, rH || AH(), rH = !1;
                const SH = HH();
                for (let LH = 0; LH < SH; LH++) AH(), BH(HH());
                LH += HH()
              }
            },
            SH = HH();
          for (let hH = 0; hH < SH; hH++) HH(), rH();
          rH()
        }(XH, (BH => {
          if (LH + BH > HH.byteLength) throw new RangeError("past the stream");
          LH += BH
        }), AH);
        const WH = GH < 2 ? rH : XH;
        if (YH === hH) return {
          faces: 0,
          vertices: rH(),
          minor: GH
        };
        if (YH !== tH) return null;
        if (uH === zH) {
          return {
            faces: WH(),
            vertices: WH(),
            minor: GH
          }
        }
        if (uH !== CH) return null;
        AH(), GH < 2 && XH();
        const MH = XH();
        return {
          faces: XH(),
          vertices: MH,
          minor: GH
        }
      } catch {
        return null
      }
    }

    function GH(HH, BH, LH) {
      var AH, rH;
      if (null === (AH = null === (rH = HH.extensionsUsed) || void 0 === rH ? void 0 : rH.includes("KHR_draco_mesh_compression")) || void 0 === AH || !AH) return null;
      for (const QH of null !== (SH = HH.meshes) && void 0 !== SH ? SH : []) {
        var SH;
        for (const AH of QH.primitives) {
          var hH, tH, zH, CH, EH, GH;
          const rH = null === (hH = AH.extensions) || void 0 === hH ? void 0 : hH.KHR_draco_mesh_compression;
          if ("object" !== typeof rH || null === rH) continue;
          const SH = null === (tH = HH.bufferViews) || void 0 === tH ? void 0 : tH[rH.bufferView];
          if (null === BH || void 0 === SH) return YH;
          const QH = null !== (zH = SH.byteOffset) && void 0 !== zH ? zH : 0,
            WH = XH(BH.subarray(QH, QH + SH.byteLength));
          if (null === WH && !LH) continue;
          const MH = null !== (CH = HH.accessors) && void 0 !== CH ? CH : [],
            xH = null === (EH = MH[AH.attributes.POSITION]) || void 0 === EH ? void 0 : EH.count,
            vH = void 0 === AH.indices ? 0 : null === (GH = MH[AH.indices]) || void 0 === GH ? void 0 : GH.count;
          if (null === WH || void 0 === xH || void 0 === vH || 3 * WH.faces !== vH || WH.vertices > xH) return YH;
          if (LH && WH.minor < 2) return uH
        }
      }
      return null
    }
    const YH = "has a Draco stream whose counts don't match its accessors",
      uH = "has a Draco stream too old to decode: export it again";

    function QH(HH) {
      var BH;
      return null !== (BH = HH.name) && void 0 !== BH ? BH : HH.fromFolderName || HH.id
    }

    function WH(HH, BH, LH) {
      return `Texture pack "${HH}": model "${BH}" was not loaded because it ${LH}. The default model is used instead.`
    }

    function MH(HH, BH, LH) {
      let {
        strictDraco: SH = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const hH = {};
      for (const [tH, zH] of Object.entries(BH)) {
        let BH;
        if (zH.startsWith("data:")) try {
          const HH = new Uint8Array((0, rH.q)(zH));
          if (BH = (0, AH.b)(HH), null === BH) {
            const {
              json: LH,
              bin: AH
            } = (0, rH.z)(HH);
            BH = GH(LH, AH, SH)
          }
        } catch {
          BH = "is not a binary glTF 2.0 file"
        } else BH = "loads data from outside the file";
        BH && (hH[tH] = BH, LH && console.warn(WH(HH, tH, BH)))
      }
      return hH
    }

    function xH(HH, BH) {
      const LH = Object.keys(BH);
      if (0 === LH.length) return null;
      if (1 === LH.length) return WH(HH, LH[0], BH[LH[0]]);
      const AH = LH.map((HH => `"${HH}" ${BH[HH]}`)).join("; ");
      return `Texture pack "${HH}": ${LH.length} models were not loaded (${AH}). The default models are used instead.`
    }
  },
  64340: (HH, BH, LH) => {
    LH.d(BH, {
      packAssets: () => MH
    });
    var AH = LH(2227),
      rH = LH(2215),
      SH = LH(35061),
      hH = LH(3569),
      tH = LH(3597);

    function zH(HH, BH, LH, AH) {
      const rH = `${(0,hH.c)(HH,BH)}|sheets${LH}`;
      return AH === tH.d ? rH : `${rH}|layers${AH}`
    }
    var CH = LH(3606),
      EH = LH(3533),
      XH = LH(3519),
      GH = LH(3575);
    var YH = LH(54576);
    const uH = 256;
    let QH = null,
      WH = null;

    function MH(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tH.d;
      if ((null === (BH = QH) || void 0 === BH ? void 0 : BH.pack) === HH.pack && QH.maxLayerWidth === LH) return QH.assets;
      const MH = (0, YH.e)(HH.pack, (0, YH.j)(HH));
      if (null === MH || !(0, rH.d)(MH)) return Promise.resolve(null);
      const vH = async function(HH, BH, LH) {
        var YH;
        const QH = null !== (YH = HH.textureOverrides) && void 0 !== YH ? YH : {},
          {
            id: MH,
            version: vH
          } = HH.metaData,
          PH = BH && MH !== AH.l.CUSTOM,
          TH = {};
        PH && (WH = TH);
        let UH, VH, OH = PH ? await async function(HH, BH, LH, AH) {
          const rH = zH(HH, BH, LH, tH.d),
            SH = zH(HH, BH, LH, AH),
            CH = await (0, hH.h)((HH => HH === rH || HH === SH));
          return null !== CH && (AH === tH.d || CH.blockAtlasWidth <= AH) ? CH : null
        }(MH, vH, uH, LH): null;
        if (null === OH) {
          const {
            blockMetadata: HH,
            getDefaultTexture: BH,
            textureNameToIndex: SH
          } = await (0, rH.i)(), tH = (0, EH.c)(HH, ((HH, LH) => ({
            url: xH(QH, BH, HH, "block" === LH ? XH.g.BLOCK : XH.g.ITEM)
          }))), CH = await
          function(HH, BH, LH, AH, rH, SH) {
            return (0, GH.c)((hH => hH.WasmTextureWorker.generateRequired(HH, BH, LH, AH, rH, SH)))
          }(HH, SH, tH, MH === AH.e, LH, uH), YH = CH.assets;
          OH = {
            ...YH,
            averageColors: {}
          }, UH = CH.averageColors(), PH && (VH = UH.then((async HH => {
            null !== HH && WH === TH && await
            function(HH, BH, LH, AH, rH) {
              return (0, hH.o)(zH(HH, BH, AH, rH), LH)
            }(MH, vH, {
              ...YH,
              averageColors: HH
            }, uH, CH.layerCap)
          })))
        }
        return function(HH, BH) {
          var LH, AH;
          let rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((tH = HH.averageColors, 0 === Object.keys(null !== tH && void 0 !== tH ? tH : {}).length ? null : HH.averageColors)),
            hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var tH;
          const zH = null !== (LH = BH.textureOverrides) && void 0 !== LH ? LH : {},
            EH = null !== (AH = BH.modelOverrides) && void 0 !== AH ? AH : {},
            XH = 0 === Object.keys(EH).length ? {} : (0, SH.refusedPackModels)((0, SH.packDisplayName)(BH.metaData), EH, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: GH,
              rotatedBlockTextures: YH
            } = HH,
            uH = HH => {
              var BH, LH;
              return null !== (BH = null !== (LH = GH[HH]) && void 0 !== LH ? LH : YH[HH]) && void 0 !== BH ? BH : null
            };
          return {
            terrain: {
              atlasSheets: HH.blockAtlasArr,
              texture: uH
            },
            sheetPixels: [...HH.blockAtlasPixels],
            heldUntil: hH,
            sheetLayout: HH.imagesPerAtlas,
            sheetWidth: HH.blockAtlasWidth,
            armourAtlasUrl: HH.armourAtlas,
            texture: HH => {
              var BH, LH;
              return null !== (BH = null !== (LH = uH(HH)) && void 0 !== LH ? LH : (0, CH.c)(zH, HH)) && void 0 !== BH ? BH : null
            },
            model: HH => void 0 === XH[HH] && EH[HH] || null,
            averageColours: rH
          }
        }(OH, HH, UH, VH)
      }(MH, null === HH.gameSource, LH), PH = {
        pack: HH.pack,
        maxLayerWidth: LH,
        assets: vH
      };
      return QH = PH, vH.catch((() => {
        QH === PH && (QH = null)
      })), vH
    }

    function xH(HH, BH, AH, rH) {
      const SH = (0, CH.c)(HH, AH);
      if (SH) return SH;
      try {
        return BH(AH, rH).url
      } catch {
        return LH(3660)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);