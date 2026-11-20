export const id = 44;
export const ids = [44, 194];
export const modules = {
  9057: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      packDisplayName: () => CU,
      packModelMessage: () => hU,
      packModelSummary: () => eU,
      refusedPackModels: () => QU
    });
    var tU = gU(9062),
      pU = gU(9067);
    const EU = "DRACO",
      PU = 0,
      TU = 1,
      qU = 0,
      KU = 1,
      cU = 32768;

    function GU(UU) {
      const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      let gU = 0;
      const tU = () => {
          if (gU >= UU.byteLength) throw new RangeError("past the stream");
          return UU[gU++]
        },
        pU = () => {
          if (gU + 4 > UU.byteLength) throw new RangeError("past the stream");
          const tU = RU.getUint32(gU, !0);
          return gU += 4, tU
        },
        GU = () => {
          let UU = 0;
          for (let RU = 0; RU < 35; RU += 7) {
            const gU = tU();
            if (UU += (127 & gU) * 2 ** RU, 0 === (128 & gU)) return UU
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let UU = 0; UU < EU.length; UU++)
          if (tU() !== EU.charCodeAt(UU)) return null;
        const RU = tU(),
          jU = tU(),
          uU = tU(),
          CU = tU(),
          hU = tU() | tU() << 8;
        if (2 !== RU) return null;
        0 !== (hU & cU) && function(UU, RU, gU) {
          const tU = () => {
              RU(gU())
            },
            pU = () => {
              let gU = 1,
                pU = !0;
              for (; gU > 0;) {
                gU--, pU || tU(), pU = !1;
                const EU = UU();
                for (let gU = 0; gU < EU; gU++) tU(), RU(UU());
                gU += UU()
              }
            },
            EU = UU();
          for (let PU = 0; PU < EU; PU++) UU(), pU();
          pU()
        }(GU, (RU => {
          if (gU + RU > UU.byteLength) throw new RangeError("past the stream");
          gU += RU
        }), tU);
        const QU = jU < 2 ? pU : GU;
        if (uU === PU) return {
          faces: 0,
          vertices: pU()
        };
        if (uU !== TU) return null;
        if (CU === qU) {
          return {
            faces: QU(),
            vertices: QU()
          }
        }
        if (CU !== KU) return null;
        tU(), jU < 2 && GU();
        const eU = GU();
        return {
          faces: GU(),
          vertices: eU
        }
      } catch {
        return null
      }
    }

    function jU(UU, RU, gU) {
      var tU, pU;
      if (null === (tU = null === (pU = UU.extensionsUsed) || void 0 === pU ? void 0 : pU.includes("KHR_draco_mesh_compression")) || void 0 === tU || !tU) return null;
      for (const CU of null !== (EU = UU.meshes) && void 0 !== EU ? EU : []) {
        var EU;
        for (const tU of CU.primitives) {
          var PU, TU, qU, KU, cU, jU;
          const pU = null === (PU = tU.extensions) || void 0 === PU ? void 0 : PU.KHR_draco_mesh_compression;
          if ("object" !== typeof pU || null === pU) continue;
          const EU = null === (TU = UU.bufferViews) || void 0 === TU ? void 0 : TU[pU.bufferView];
          if (null === RU || void 0 === EU) return uU;
          const CU = null !== (qU = EU.byteOffset) && void 0 !== qU ? qU : 0,
            hU = GU(RU.subarray(CU, CU + EU.byteLength));
          if (null === hU && !gU) continue;
          const QU = null !== (KU = UU.accessors) && void 0 !== KU ? KU : [],
            eU = null === (cU = QU[tU.attributes.POSITION]) || void 0 === cU ? void 0 : cU.count,
            WU = void 0 === tU.indices ? 0 : null === (jU = QU[tU.indices]) || void 0 === jU ? void 0 : jU.count;
          if (null === hU || void 0 === eU || void 0 === WU || 3 * hU.faces !== WU || hU.vertices > eU) return uU
        }
      }
      return null
    }
    const uU = "has a Draco stream whose counts don't match its accessors";

    function CU(UU) {
      var RU;
      return null !== (RU = UU.name) && void 0 !== RU ? RU : UU.fromFolderName || UU.id
    }

    function hU(UU, RU, gU) {
      return `Texture pack "${UU}": model "${RU}" was not loaded because it ${gU}. The default model is used instead.`
    }

    function QU(UU, RU, gU) {
      let {
        strictDraco: EU = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const PU = {};
      for (const [TU, qU] of Object.entries(RU)) {
        let RU;
        if (qU.startsWith("data:")) try {
          const UU = new Uint8Array((0, pU.p)(qU));
          if (RU = (0, tU.b)(UU), null === RU) {
            const {
              json: gU,
              bin: tU
            } = (0, pU.u)(UU);
            RU = jU(gU, tU, EU)
          }
        } catch {
          RU = "is not a binary glTF 2.0 file"
        } else RU = "loads data from outside the file";
        RU && (PU[TU] = RU, gU && console.warn(hU(UU, TU, RU)))
      }
      return PU
    }

    function eU(UU, RU) {
      const gU = Object.keys(RU);
      if (0 === gU.length) return null;
      if (1 === gU.length) return hU(UU, gU[0], RU[gU[0]]);
      const tU = gU.map((UU => `"${UU}" ${RU[UU]}`)).join("; ");
      return `Texture pack "${UU}": ${gU.length} models were not loaded (${tU}). The default models are used instead.`
    }
  },
  60858: (UU, RU, gU) => {
    gU.d(RU, {
      packAssets: () => eU
    });
    var tU = gU(2850),
      pU = gU(2886),
      EU = gU(9057),
      PU = gU(2909),
      TU = gU(2951);

    function qU(UU, RU, gU, tU) {
      const pU = `${(0,PU.c)(UU,RU)}|sheets${gU}`;
      return tU === TU.c ? pU : `${pU}|layers${tU}`
    }
    var KU = gU(2955),
      cU = gU(2871),
      GU = gU(2858),
      jU = gU(2917);
    var uU = gU(42655);
    const CU = 256;
    let hU = null,
      QU = null;

    function eU(UU) {
      var RU;
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TU.c;
      if ((null === (RU = hU) || void 0 === RU ? void 0 : RU.pack) === UU.pack && hU.maxLayerWidth === gU) return hU.assets;
      const eU = (0, uU.g)(UU.pack, (0, uU.j)(UU));
      if (null === eU || !(0, pU.e)(eU)) return Promise.resolve(null);
      const fU = async function(UU, RU, gU) {
        var uU;
        const hU = null !== (uU = UU.textureOverrides) && void 0 !== uU ? uU : {},
          {
            id: eU,
            version: fU
          } = UU.metaData,
          xU = RU && eU !== tU.s.CUSTOM,
          mU = {};
        xU && (QU = mU);
        let IU, JU, wU = xU ? await async function(UU, RU, gU, tU) {
          const pU = qU(UU, RU, gU, TU.c),
            EU = qU(UU, RU, gU, tU),
            KU = await (0, PU.i)((UU => UU === pU || UU === EU));
          return null !== KU && (tU === TU.c || KU.blockAtlasWidth <= tU) ? KU : null
        }(eU, fU, CU, gU): null;
        if (null === wU) {
          const {
            blockMetadata: UU,
            getDefaultTexture: RU,
            textureNameToIndex: EU
          } = await (0, pU.j)(), TU = (0, cU.d)(UU, ((UU, gU) => ({
            url: WU(hU, RU, UU, "block" === gU ? GU.g.BLOCK : GU.g.ITEM)
          }))), KU = await
          function(UU, RU, gU, tU, pU, EU) {
            return (0, jU.b)((PU => PU.WasmTextureWorker.generateRequired(UU, RU, gU, tU, pU, EU)))
          }(UU, EU, TU, eU === tU.d, gU, CU), uU = KU.assets;
          wU = {
            ...uU,
            averageColors: {}
          }, IU = KU.averageColors(), xU && (JU = IU.then((async UU => {
            null !== UU && QU === mU && await
            function(UU, RU, gU, tU, pU) {
              return (0, PU.p)(qU(UU, RU, tU, pU), gU)
            }(eU, fU, {
              ...uU,
              averageColors: UU
            }, CU, KU.layerCap)
          })))
        }
        return function(UU, RU) {
          var gU, tU;
          let pU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((TU = UU.averageColors, 0 === Object.keys(null !== TU && void 0 !== TU ? TU : {}).length ? null : UU.averageColors)),
            PU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var TU;
          const qU = null !== (gU = RU.textureOverrides) && void 0 !== gU ? gU : {},
            cU = null !== (tU = RU.modelOverrides) && void 0 !== tU ? tU : {},
            GU = 0 === Object.keys(cU).length ? {} : (0, EU.refusedPackModels)((0, EU.packDisplayName)(RU.metaData), cU, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: jU,
              rotatedBlockTextures: uU
            } = UU,
            CU = UU => {
              var RU, gU;
              return null !== (RU = null !== (gU = jU[UU]) && void 0 !== gU ? gU : uU[UU]) && void 0 !== RU ? RU : null
            };
          return {
            terrain: {
              atlasSheets: UU.blockAtlasArr,
              texture: CU
            },
            sheetPixels: [...UU.blockAtlasPixels],
            heldUntil: PU,
            sheetLayout: UU.imagesPerAtlas,
            sheetWidth: UU.blockAtlasWidth,
            armourAtlasUrl: UU.armourAtlas,
            texture: UU => {
              var RU, gU;
              return null !== (RU = null !== (gU = CU(UU)) && void 0 !== gU ? gU : (0, KU.c)(qU, UU)) && void 0 !== RU ? RU : null
            },
            model: UU => void 0 === GU[UU] && cU[UU] || null,
            averageColours: pU
          }
        }(wU, UU, IU, JU)
      }(eU, null === UU.gameSource, gU), xU = {
        pack: UU.pack,
        maxLayerWidth: gU,
        assets: fU
      };
      return hU = xU, fU.catch((() => {
        hU === xU && (hU = null)
      })), fU
    }

    function WU(UU, RU, tU, pU) {
      const EU = (0, KU.c)(UU, tU);
      if (EU) return EU;
      try {
        return RU(tU, pU).url
      } catch {
        return gU(2994)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);