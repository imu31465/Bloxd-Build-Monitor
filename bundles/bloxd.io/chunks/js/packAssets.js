export const id = 44;
export const ids = [44, 202];
export const modules = {
  34305: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      packDisplayName: () => KS,
      packModelMessage: () => jS,
      packModelSummary: () => CS,
      refusedPackModels: () => GS
    });
    var tS = gS(34308),
      bS = gS(34310);
    const XS = "DRACO",
      xS = 0,
      NS = 1,
      qS = 0,
      uS = 1,
      IS = 32768;

    function fS(SS) {
      const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
      let gS = 0;
      const tS = () => {
          if (gS >= SS.byteLength) throw new RangeError("past the stream");
          return SS[gS++]
        },
        bS = () => {
          if (gS + 4 > SS.byteLength) throw new RangeError("past the stream");
          const tS = HS.getUint32(gS, !0);
          return gS += 4, tS
        },
        fS = () => {
          let SS = 0;
          for (let HS = 0; HS < 35; HS += 7) {
            const gS = tS();
            if (SS += (127 & gS) * 2 ** HS, 0 === (128 & gS)) return SS
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let SS = 0; SS < XS.length; SS++)
          if (tS() !== XS.charCodeAt(SS)) return null;
        const HS = tS(),
          kS = tS(),
          aS = tS(),
          KS = tS(),
          jS = tS() | tS() << 8;
        if (2 !== HS) return null;
        0 !== (jS & IS) && function(SS, HS, gS) {
          const tS = () => {
              HS(gS())
            },
            bS = () => {
              let gS = 1,
                bS = !0;
              for (; gS > 0;) {
                gS--, bS || tS(), bS = !1;
                const XS = SS();
                for (let gS = 0; gS < XS; gS++) tS(), HS(SS());
                gS += SS()
              }
            },
            XS = SS();
          for (let xS = 0; xS < XS; xS++) SS(), bS();
          bS()
        }(fS, (HS => {
          if (gS + HS > SS.byteLength) throw new RangeError("past the stream");
          gS += HS
        }), tS);
        const GS = kS < 2 ? bS : fS;
        if (aS === xS) return {
          faces: 0,
          vertices: bS()
        };
        if (aS !== NS) return null;
        if (KS === qS) {
          return {
            faces: GS(),
            vertices: GS()
          }
        }
        if (KS !== uS) return null;
        tS(), kS < 2 && fS();
        const CS = fS();
        return {
          faces: fS(),
          vertices: CS
        }
      } catch {
        return null
      }
    }

    function kS(SS, HS, gS) {
      var tS, bS;
      if (null === (tS = null === (bS = SS.extensionsUsed) || void 0 === bS ? void 0 : bS.includes("KHR_draco_mesh_compression")) || void 0 === tS || !tS) return null;
      for (const KS of null !== (XS = SS.meshes) && void 0 !== XS ? XS : []) {
        var XS;
        for (const tS of KS.primitives) {
          var xS, NS, qS, uS, IS, kS;
          const bS = null === (xS = tS.extensions) || void 0 === xS ? void 0 : xS.KHR_draco_mesh_compression;
          if ("object" !== typeof bS || null === bS) continue;
          const XS = null === (NS = SS.bufferViews) || void 0 === NS ? void 0 : NS[bS.bufferView];
          if (null === HS || void 0 === XS) return aS;
          const KS = null !== (qS = XS.byteOffset) && void 0 !== qS ? qS : 0,
            jS = fS(HS.subarray(KS, KS + XS.byteLength));
          if (null === jS && !gS) continue;
          const GS = null !== (uS = SS.accessors) && void 0 !== uS ? uS : [],
            CS = null === (IS = GS[tS.attributes.POSITION]) || void 0 === IS ? void 0 : IS.count,
            nS = void 0 === tS.indices ? 0 : null === (kS = GS[tS.indices]) || void 0 === kS ? void 0 : kS.count;
          if (null === jS || void 0 === CS || void 0 === nS || 3 * jS.faces !== nS || jS.vertices > CS) return aS
        }
      }
      return null
    }
    const aS = "has a Draco stream whose counts don't match its accessors";

    function KS(SS) {
      var HS;
      return null !== (HS = SS.name) && void 0 !== HS ? HS : SS.fromFolderName || SS.id
    }

    function jS(SS, HS, gS) {
      return `Texture pack "${SS}": model "${HS}" was not loaded because it ${gS}. The default model is used instead.`
    }

    function GS(SS, HS, gS) {
      let {
        strictDraco: XS = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const xS = {};
      for (const [NS, qS] of Object.entries(HS)) {
        let HS;
        if (qS.startsWith("data:")) try {
          const SS = new Uint8Array((0, bS.n)(qS));
          if (HS = (0, tS.d)(SS), null === HS) {
            const {
              json: gS,
              bin: tS
            } = (0, bS.v)(SS);
            HS = kS(gS, tS, XS)
          }
        } catch {
          HS = "is not a binary glTF 2.0 file"
        } else HS = "loads data from outside the file";
        HS && (xS[NS] = HS, gS && console.warn(jS(SS, NS, HS)))
      }
      return xS
    }

    function CS(SS, HS) {
      const gS = Object.keys(HS);
      if (0 === gS.length) return null;
      if (1 === gS.length) return jS(SS, gS[0], HS[gS[0]]);
      const tS = gS.map((SS => `"${SS}" ${HS[SS]}`)).join("; ");
      return `Texture pack "${SS}": ${gS.length} models were not loaded (${tS}). The default models are used instead.`
    }
  },
  61560: (SS, HS, gS) => {
    gS.d(HS, {
      packAssets: () => CS
    });
    var tS = gS(2256),
      bS = gS(2242),
      XS = gS(34305),
      xS = gS(3376),
      NS = gS(3395);

    function qS(SS, HS, gS, tS) {
      const bS = `${(0,xS.c)(SS,HS)}|sheets${gS}`;
      return tS === NS.b ? bS : `${bS}|layers${tS}`
    }
    var uS = gS(3401),
      IS = gS(3350),
      fS = gS(3338),
      kS = gS(3383);
    var aS = gS(51027);
    const KS = 256;
    let jS = null,
      GS = null;

    function CS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NS.b;
      if ((null === (HS = jS) || void 0 === HS ? void 0 : HS.pack) === SS.pack && jS.maxLayerWidth === gS) return jS.assets;
      const CS = (0, aS.d)(SS.pack, (0, aS.k)(SS));
      if (null === CS || !(0, bS.f)(CS)) return Promise.resolve(null);
      const PS = async function(SS, HS, gS) {
        var aS;
        const jS = null !== (aS = SS.textureOverrides) && void 0 !== aS ? aS : {},
          {
            id: CS,
            version: PS
          } = SS.metaData,
          QS = HS && CS !== tS.q.CUSTOM,
          DS = {};
        QS && (GS = DS);
        let wS, hS, ZS = QS ? await async function(SS, HS, gS, tS) {
          const bS = qS(SS, HS, gS, NS.b),
            XS = qS(SS, HS, gS, tS),
            uS = await (0, xS.f)((SS => SS === bS || SS === XS));
          return null !== uS && (tS === NS.b || uS.blockAtlasWidth <= tS) ? uS : null
        }(CS, PS, KS, gS): null;
        if (null === ZS) {
          const {
            blockMetadata: SS,
            getDefaultTexture: HS,
            textureNameToIndex: XS
          } = await (0, bS.l)(), NS = (0, IS.d)(SS, ((SS, gS) => ({
            url: nS(jS, HS, SS, "block" === gS ? fS.e.BLOCK : fS.e.ITEM)
          }))), uS = await
          function(SS, HS, gS, tS, bS, XS) {
            return (0, kS.e)((xS => xS.WasmTextureWorker.generateRequired(SS, HS, gS, tS, bS, XS)))
          }(SS, XS, NS, CS === tS.d, gS, KS), aS = uS.assets;
          ZS = {
            ...aS,
            averageColors: {}
          }, wS = uS.averageColors(), QS && (hS = wS.then((async SS => {
            null !== SS && GS === DS && await
            function(SS, HS, gS, tS, bS) {
              return (0, xS.j)(qS(SS, HS, tS, bS), gS)
            }(CS, PS, {
              ...aS,
              averageColors: SS
            }, KS, uS.layerCap)
          })))
        }
        return function(SS, HS) {
          var gS, tS;
          let bS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((NS = SS.averageColors, 0 === Object.keys(null !== NS && void 0 !== NS ? NS : {}).length ? null : SS.averageColors)),
            xS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var NS;
          const qS = null !== (gS = HS.textureOverrides) && void 0 !== gS ? gS : {},
            IS = null !== (tS = HS.modelOverrides) && void 0 !== tS ? tS : {},
            fS = 0 === Object.keys(IS).length ? {} : (0, XS.refusedPackModels)((0, XS.packDisplayName)(HS.metaData), IS, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: kS,
              rotatedBlockTextures: aS
            } = SS,
            KS = SS => {
              var HS, gS;
              return null !== (HS = null !== (gS = kS[SS]) && void 0 !== gS ? gS : aS[SS]) && void 0 !== HS ? HS : null
            };
          return {
            terrain: {
              atlasSheets: SS.blockAtlasArr,
              texture: KS
            },
            sheetPixels: [...SS.blockAtlasPixels],
            heldUntil: xS,
            sheetLayout: SS.imagesPerAtlas,
            sheetWidth: SS.blockAtlasWidth,
            armourAtlasUrl: SS.armourAtlas,
            texture: SS => {
              var HS, gS;
              return null !== (HS = null !== (gS = KS(SS)) && void 0 !== gS ? gS : (0, uS.d)(qS, SS)) && void 0 !== HS ? HS : null
            },
            model: SS => void 0 === fS[SS] && IS[SS] || null,
            averageColours: bS
          }
        }(ZS, SS, wS, hS)
      }(CS, null === SS.gameSource, gS), QS = {
        pack: SS.pack,
        maxLayerWidth: gS,
        assets: PS
      };
      return jS = QS, PS.catch((() => {
        jS === QS && (jS = null)
      })), PS
    }

    function nS(SS, HS, tS, bS) {
      const XS = (0, uS.d)(SS, tS);
      if (XS) return XS;
      try {
        return HS(tS, bS).url
      } catch {
        return gS(3450)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);