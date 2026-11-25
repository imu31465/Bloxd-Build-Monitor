export const id = 51;
export const ids = [51, 229];
export const modules = {
  35106: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      packDisplayName: () => hM,
      packModelMessage: () => JM,
      packModelSummary: () => yM,
      refusedPackModels: () => dM
    });
    var OM = iM(35113),
      SM = iM(35120);
    const jM = "DRACO",
      aM = 0,
      PM = 1,
      nM = 0,
      QM = 1,
      zM = 32768;

    function LM(MM) {
      const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      let iM = 0;
      const OM = () => {
          if (iM >= MM.byteLength) throw new RangeError("past the stream");
          return MM[iM++]
        },
        SM = () => {
          if (iM + 4 > MM.byteLength) throw new RangeError("past the stream");
          const OM = rM.getUint32(iM, !0);
          return iM += 4, OM
        },
        LM = () => {
          let MM = 0;
          for (let rM = 0; rM < 35; rM += 7) {
            const iM = OM();
            if (MM += (127 & iM) * 2 ** rM, 0 === (128 & iM)) return MM
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let MM = 0; MM < jM.length; MM++)
          if (OM() !== jM.charCodeAt(MM)) return null;
        const rM = OM(),
          mM = OM(),
          HM = OM(),
          hM = OM(),
          JM = OM() | OM() << 8;
        if (2 !== rM) return null;
        0 !== (JM & zM) && function(MM, rM, iM) {
          const OM = () => {
              rM(iM())
            },
            SM = () => {
              let iM = 1,
                SM = !0;
              for (; iM > 0;) {
                iM--, SM || OM(), SM = !1;
                const jM = MM();
                for (let iM = 0; iM < jM; iM++) OM(), rM(MM());
                iM += MM()
              }
            },
            jM = MM();
          for (let aM = 0; aM < jM; aM++) MM(), SM();
          SM()
        }(LM, (rM => {
          if (iM + rM > MM.byteLength) throw new RangeError("past the stream");
          iM += rM
        }), OM);
        const dM = mM < 2 ? SM : LM;
        if (HM === aM) return {
          faces: 0,
          vertices: SM()
        };
        if (HM !== PM) return null;
        if (hM === nM) {
          return {
            faces: dM(),
            vertices: dM()
          }
        }
        if (hM !== QM) return null;
        OM(), mM < 2 && LM();
        const yM = LM();
        return {
          faces: LM(),
          vertices: yM
        }
      } catch {
        return null
      }
    }

    function mM(MM, rM, iM) {
      var OM, SM;
      if (null === (OM = null === (SM = MM.extensionsUsed) || void 0 === SM ? void 0 : SM.includes("KHR_draco_mesh_compression")) || void 0 === OM || !OM) return null;
      for (const hM of null !== (jM = MM.meshes) && void 0 !== jM ? jM : []) {
        var jM;
        for (const OM of hM.primitives) {
          var aM, PM, nM, QM, zM, mM;
          const SM = null === (aM = OM.extensions) || void 0 === aM ? void 0 : aM.KHR_draco_mesh_compression;
          if ("object" !== typeof SM || null === SM) continue;
          const jM = null === (PM = MM.bufferViews) || void 0 === PM ? void 0 : PM[SM.bufferView];
          if (null === rM || void 0 === jM) return HM;
          const hM = null !== (nM = jM.byteOffset) && void 0 !== nM ? nM : 0,
            JM = LM(rM.subarray(hM, hM + jM.byteLength));
          if (null === JM && !iM) continue;
          const dM = null !== (QM = MM.accessors) && void 0 !== QM ? QM : [],
            yM = null === (zM = dM[OM.attributes.POSITION]) || void 0 === zM ? void 0 : zM.count,
            lM = void 0 === OM.indices ? 0 : null === (mM = dM[OM.indices]) || void 0 === mM ? void 0 : mM.count;
          if (null === JM || void 0 === yM || void 0 === lM || 3 * JM.faces !== lM || JM.vertices > yM) return HM
        }
      }
      return null
    }
    const HM = "has a Draco stream whose counts don't match its accessors";

    function hM(MM) {
      var rM;
      return null !== (rM = MM.name) && void 0 !== rM ? rM : MM.fromFolderName || MM.id
    }

    function JM(MM, rM, iM) {
      return `Texture pack "${MM}": model "${rM}" was not loaded because it ${iM}. The default model is used instead.`
    }

    function dM(MM, rM, iM) {
      let {
        strictDraco: jM = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const aM = {};
      for (const [PM, nM] of Object.entries(rM)) {
        let rM;
        if (nM.startsWith("data:")) try {
          const MM = new Uint8Array((0, SM.v)(nM));
          if (rM = (0, OM.c)(MM), null === rM) {
            const {
              json: iM,
              bin: OM
            } = (0, SM.E)(MM);
            rM = mM(iM, OM, jM)
          }
        } catch {
          rM = "is not a binary glTF 2.0 file"
        } else rM = "loads data from outside the file";
        rM && (aM[PM] = rM, iM && console.warn(JM(MM, PM, rM)))
      }
      return aM
    }

    function yM(MM, rM) {
      const iM = Object.keys(rM);
      if (0 === iM.length) return null;
      if (1 === iM.length) return JM(MM, iM[0], rM[iM[0]]);
      const OM = iM.map((MM => `"${MM}" ${rM[MM]}`)).join("; ");
      return `Texture pack "${MM}": ${iM.length} models were not loaded (${OM}). The default models are used instead.`
    }
  },
  64133: (MM, rM, iM) => {
    iM.d(rM, {
      packAssets: () => yM
    });
    var OM = iM(2263),
      SM = iM(2257),
      jM = iM(35106),
      aM = iM(3619),
      PM = iM(3647);

    function nM(MM, rM, iM, OM) {
      const SM = `${(0,aM.b)(MM,rM)}|sheets${iM}`;
      return OM === PM.c ? SM : `${SM}|layers${OM}`
    }
    var QM = iM(3652),
      zM = iM(3586),
      LM = iM(3580),
      mM = iM(3625);
    var HM = iM(53774);
    const hM = 256;
    let JM = null,
      dM = null;

    function yM(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PM.c;
      if ((null === (rM = JM) || void 0 === rM ? void 0 : rM.pack) === MM.pack && JM.maxLayerWidth === iM) return JM.assets;
      const yM = (0, HM.g)(MM.pack, (0, HM.j)(MM));
      if (null === yM || !(0, SM.g)(yM)) return Promise.resolve(null);
      const EM = async function(MM, rM, iM) {
        var HM;
        const JM = null !== (HM = MM.textureOverrides) && void 0 !== HM ? HM : {},
          {
            id: yM,
            version: EM
          } = MM.metaData,
          UM = rM && yM !== OM.o.CUSTOM,
          GM = {};
        UM && (dM = GM);
        let CM, eM, bM = UM ? await async function(MM, rM, iM, OM) {
          const SM = nM(MM, rM, iM, PM.c),
            jM = nM(MM, rM, iM, OM),
            QM = await (0, aM.g)((MM => MM === SM || MM === jM));
          return null !== QM && (OM === PM.c || QM.blockAtlasWidth <= OM) ? QM : null
        }(yM, EM, hM, iM): null;
        if (null === bM) {
          const {
            blockMetadata: MM,
            getDefaultTexture: rM,
            textureNameToIndex: jM
          } = await (0, SM.m)(), PM = (0, zM.b)(MM, ((MM, iM) => ({
            url: lM(JM, rM, MM, "block" === iM ? LM.f.BLOCK : LM.f.ITEM)
          }))), QM = await
          function(MM, rM, iM, OM, SM, jM) {
            return (0, mM.c)((aM => aM.WasmTextureWorker.generateRequired(MM, rM, iM, OM, SM, jM)))
          }(MM, jM, PM, yM === OM.b, iM, hM), HM = QM.assets;
          bM = {
            ...HM,
            averageColors: {}
          }, CM = QM.averageColors(), UM && (eM = CM.then((async MM => {
            null !== MM && dM === GM && await
            function(MM, rM, iM, OM, SM) {
              return (0, aM.i)(nM(MM, rM, OM, SM), iM)
            }(yM, EM, {
              ...HM,
              averageColors: MM
            }, hM, QM.layerCap)
          })))
        }
        return function(MM, rM) {
          var iM, OM;
          let SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((PM = MM.averageColors, 0 === Object.keys(null !== PM && void 0 !== PM ? PM : {}).length ? null : MM.averageColors)),
            aM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var PM;
          const nM = null !== (iM = rM.textureOverrides) && void 0 !== iM ? iM : {},
            zM = null !== (OM = rM.modelOverrides) && void 0 !== OM ? OM : {},
            LM = 0 === Object.keys(zM).length ? {} : (0, jM.refusedPackModels)((0, jM.packDisplayName)(rM.metaData), zM, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: mM,
              rotatedBlockTextures: HM
            } = MM,
            hM = MM => {
              var rM, iM;
              return null !== (rM = null !== (iM = mM[MM]) && void 0 !== iM ? iM : HM[MM]) && void 0 !== rM ? rM : null
            };
          return {
            terrain: {
              atlasSheets: MM.blockAtlasArr,
              texture: hM
            },
            sheetPixels: [...MM.blockAtlasPixels],
            heldUntil: aM,
            sheetLayout: MM.imagesPerAtlas,
            sheetWidth: MM.blockAtlasWidth,
            armourAtlasUrl: MM.armourAtlas,
            texture: MM => {
              var rM, iM;
              return null !== (rM = null !== (iM = hM(MM)) && void 0 !== iM ? iM : (0, QM.c)(nM, MM)) && void 0 !== rM ? rM : null
            },
            model: MM => void 0 === LM[MM] && zM[MM] || null,
            averageColours: SM
          }
        }(bM, MM, CM, eM)
      }(yM, null === MM.gameSource, iM), UM = {
        pack: MM.pack,
        maxLayerWidth: iM,
        assets: EM
      };
      return JM = UM, EM.catch((() => {
        JM === UM && (JM = null)
      })), EM
    }

    function lM(MM, rM, OM, SM) {
      const jM = (0, QM.c)(MM, OM);
      if (jM) return jM;
      try {
        return rM(OM, SM).url
      } catch {
        return iM(3721)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);