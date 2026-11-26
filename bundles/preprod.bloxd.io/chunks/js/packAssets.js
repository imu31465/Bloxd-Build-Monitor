export const id = 52;
export const ids = [52, 220];
export const modules = {
  34956: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      packDisplayName: () => aU,
      packModelMessage: () => tU,
      packModelSummary: () => kU,
      refusedPackModels: () => gU
    });
    var cU = zU(34959),
      yU = zU(34968);
    const QU = "DRACO",
      AU = 0,
      FU = 1,
      oU = 0,
      DU = 1,
      EU = 32768;

    function YU(UU) {
      const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      let zU = 0;
      const cU = () => {
          if (zU >= UU.byteLength) throw new RangeError("past the stream");
          return UU[zU++]
        },
        yU = () => {
          if (zU + 4 > UU.byteLength) throw new RangeError("past the stream");
          const cU = XU.getUint32(zU, !0);
          return zU += 4, cU
        },
        YU = () => {
          let UU = 0;
          for (let XU = 0; XU < 35; XU += 7) {
            const zU = cU();
            if (UU += (127 & zU) * 2 ** XU, 0 === (128 & zU)) return UU
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let UU = 0; UU < QU.length; UU++)
          if (cU() !== QU.charCodeAt(UU)) return null;
        const XU = cU(),
          NU = cU(),
          IU = cU(),
          pU = cU(),
          aU = cU() | cU() << 8;
        if (2 !== XU) return null;
        0 !== (aU & EU) && function(UU, XU, zU) {
          const cU = () => {
              XU(zU())
            },
            yU = () => {
              let zU = 1,
                yU = !0;
              for (; zU > 0;) {
                zU--, yU || cU(), yU = !1;
                const QU = UU();
                for (let zU = 0; zU < QU; zU++) cU(), XU(UU());
                zU += UU()
              }
            },
            QU = UU();
          for (let AU = 0; AU < QU; AU++) UU(), yU();
          yU()
        }(YU, (XU => {
          if (zU + XU > UU.byteLength) throw new RangeError("past the stream");
          zU += XU
        }), cU);
        const tU = NU < 2 ? yU : YU;
        if (IU === AU) return {
          faces: 0,
          vertices: yU(),
          minor: NU
        };
        if (IU !== FU) return null;
        if (pU === oU) {
          return {
            faces: tU(),
            vertices: tU(),
            minor: NU
          }
        }
        if (pU !== DU) return null;
        cU(), NU < 2 && YU();
        const gU = YU();
        return {
          faces: YU(),
          vertices: gU,
          minor: NU
        }
      } catch {
        return null
      }
    }

    function NU(UU, XU, zU) {
      var cU, yU;
      if (null === (cU = null === (yU = UU.extensionsUsed) || void 0 === yU ? void 0 : yU.includes("KHR_draco_mesh_compression")) || void 0 === cU || !cU) return null;
      for (const aU of null !== (QU = UU.meshes) && void 0 !== QU ? QU : []) {
        var QU;
        for (const cU of aU.primitives) {
          var AU, FU, oU, DU, EU, NU;
          const yU = null === (AU = cU.extensions) || void 0 === AU ? void 0 : AU.KHR_draco_mesh_compression;
          if ("object" !== typeof yU || null === yU) continue;
          const QU = null === (FU = UU.bufferViews) || void 0 === FU ? void 0 : FU[yU.bufferView];
          if (null === XU || void 0 === QU) return IU;
          const aU = null !== (oU = QU.byteOffset) && void 0 !== oU ? oU : 0,
            tU = YU(XU.subarray(aU, aU + QU.byteLength));
          if (null === tU && !zU) continue;
          const gU = null !== (DU = UU.accessors) && void 0 !== DU ? DU : [],
            kU = null === (EU = gU[cU.attributes.POSITION]) || void 0 === EU ? void 0 : EU.count,
            GU = void 0 === cU.indices ? 0 : null === (NU = gU[cU.indices]) || void 0 === NU ? void 0 : NU.count;
          if (null === tU || void 0 === kU || void 0 === GU || 3 * tU.faces !== GU || tU.vertices > kU) return IU;
          if (zU && tU.minor < 2) return pU
        }
      }
      return null
    }
    const IU = "has a Draco stream whose counts don't match its accessors",
      pU = "has a Draco stream too old to decode: export it again";

    function aU(UU) {
      var XU;
      return null !== (XU = UU.name) && void 0 !== XU ? XU : UU.fromFolderName || UU.id
    }

    function tU(UU, XU, zU) {
      return `Texture pack "${UU}": model "${XU}" was not loaded because it ${zU}. The default model is used instead.`
    }

    function gU(UU, XU, zU) {
      let {
        strictDraco: QU = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const AU = {};
      for (const [FU, oU] of Object.entries(XU)) {
        let XU;
        if (oU.startsWith("data:")) try {
          const UU = new Uint8Array((0, yU.p)(oU));
          if (XU = (0, cU.d)(UU), null === XU) {
            const {
              json: zU,
              bin: cU
            } = (0, yU.w)(UU);
            XU = NU(zU, cU, QU)
          }
        } catch {
          XU = "is not a binary glTF 2.0 file"
        } else XU = "loads data from outside the file";
        XU && (AU[FU] = XU, zU && console.warn(tU(UU, FU, XU)))
      }
      return AU
    }

    function kU(UU, XU) {
      const zU = Object.keys(XU);
      if (0 === zU.length) return null;
      if (1 === zU.length) return tU(UU, zU[0], XU[zU[0]]);
      const cU = zU.map((UU => `"${UU}" ${XU[UU]}`)).join("; ");
      return `Texture pack "${UU}": ${zU.length} models were not loaded (${cU}). The default models are used instead.`
    }
  },
  64155: (UU, XU, zU) => {
    zU.d(XU, {
      packAssets: () => gU
    });
    var cU = zU(2219),
      yU = zU(2210),
      QU = zU(34956),
      AU = zU(3581),
      FU = zU(3612);

    function oU(UU, XU, zU, cU) {
      const yU = `${(0,AU.e)(UU,XU)}|sheets${zU}`;
      return cU === FU.e ? yU : `${yU}|layers${cU}`
    }
    var DU = zU(3617),
      EU = zU(3548),
      YU = zU(3534),
      NU = zU(3590);
    var IU = zU(53774);
    const pU = 256;
    let aU = null,
      tU = null;

    function gU(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FU.e;
      if ((null === (XU = aU) || void 0 === XU ? void 0 : XU.pack) === UU.pack && aU.maxLayerWidth === zU) return aU.assets;
      const gU = (0, IU.d)(UU.pack, (0, IU.l)(UU));
      if (null === gU || !(0, yU.h)(gU)) return Promise.resolve(null);
      const GU = async function(UU, XU, zU) {
        var IU;
        const aU = null !== (IU = UU.textureOverrides) && void 0 !== IU ? IU : {},
          {
            id: gU,
            version: GU
          } = UU.metaData,
          BU = XU && gU !== cU.p.CUSTOM,
          ZU = {};
        BU && (tU = ZU);
        let RU, PU, WU = BU ? await async function(UU, XU, zU, cU) {
          const yU = oU(UU, XU, zU, FU.e),
            QU = oU(UU, XU, zU, cU),
            DU = await (0, AU.i)((UU => UU === yU || UU === QU));
          return null !== DU && (cU === FU.e || DU.blockAtlasWidth <= cU) ? DU : null
        }(gU, GU, pU, zU): null;
        if (null === WU) {
          const {
            blockMetadata: UU,
            getDefaultTexture: XU,
            textureNameToIndex: QU
          } = await (0, yU.n)(), FU = (0, EU.b)(UU, ((UU, zU) => ({
            url: kU(aU, XU, UU, "block" === zU ? YU.f.BLOCK : YU.f.ITEM)
          }))), DU = await
          function(UU, XU, zU, cU, yU, QU) {
            return (0, NU.e)((AU => AU.WasmTextureWorker.generateRequired(UU, XU, zU, cU, yU, QU)))
          }(UU, QU, FU, gU === cU.b, zU, pU), IU = DU.assets;
          WU = {
            ...IU,
            averageColors: {}
          }, RU = DU.averageColors(), BU && (PU = RU.then((async UU => {
            null !== UU && tU === ZU && await
            function(UU, XU, zU, cU, yU) {
              return (0, AU.n)(oU(UU, XU, cU, yU), zU)
            }(gU, GU, {
              ...IU,
              averageColors: UU
            }, pU, DU.layerCap)
          })))
        }
        return function(UU, XU) {
          var zU, cU;
          let yU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((FU = UU.averageColors, 0 === Object.keys(null !== FU && void 0 !== FU ? FU : {}).length ? null : UU.averageColors)),
            AU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var FU;
          const oU = null !== (zU = XU.textureOverrides) && void 0 !== zU ? zU : {},
            EU = null !== (cU = XU.modelOverrides) && void 0 !== cU ? cU : {},
            YU = 0 === Object.keys(EU).length ? {} : (0, QU.refusedPackModels)((0, QU.packDisplayName)(XU.metaData), EU, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: NU,
              rotatedBlockTextures: IU
            } = UU,
            pU = UU => {
              var XU, zU;
              return null !== (XU = null !== (zU = NU[UU]) && void 0 !== zU ? zU : IU[UU]) && void 0 !== XU ? XU : null
            };
          return {
            terrain: {
              atlasSheets: UU.blockAtlasArr,
              texture: pU
            },
            sheetPixels: [...UU.blockAtlasPixels],
            heldUntil: AU,
            sheetLayout: UU.imagesPerAtlas,
            sheetWidth: UU.blockAtlasWidth,
            armourAtlasUrl: UU.armourAtlas,
            texture: UU => {
              var XU, zU;
              return null !== (XU = null !== (zU = pU(UU)) && void 0 !== zU ? zU : (0, DU.b)(oU, UU)) && void 0 !== XU ? XU : null
            },
            model: UU => void 0 === YU[UU] && EU[UU] || null,
            averageColours: yU
          }
        }(WU, UU, RU, PU)
      }(gU, null === UU.gameSource, zU), BU = {
        pack: UU.pack,
        maxLayerWidth: zU,
        assets: GU
      };
      return aU = BU, GU.catch((() => {
        aU === BU && (aU = null)
      })), GU
    }

    function kU(UU, XU, cU, yU) {
      const QU = (0, DU.b)(UU, cU);
      if (QU) return QU;
      try {
        return XU(cU, yU).url
      } catch {
        return zU(3687)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);