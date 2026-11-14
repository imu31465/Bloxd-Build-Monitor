export const id = 38;
export const ids = [38, 180];
export const modules = {
  32956: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      packDisplayName: () => QF,
      packModelMessage: () => rW,
      packModelSummary: () => tW,
      refusedPackModels: () => gW
    });
    var CF = SF(32964),
      AF = SF(32968);
    const uF = "DRACO",
      hF = 0,
      bW = 1,
      dF = 0,
      PF = 1,
      RF = 32768;

    function iW(FF) {
      const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
      let SF = 0;
      const CF = () => {
          if (SF >= FF.byteLength) throw new RangeError("past the stream");
          return FF[SF++]
        },
        AF = () => {
          if (SF + 4 > FF.byteLength) throw new RangeError("past the stream");
          const CF = WF.getUint32(SF, !0);
          return SF += 4, CF
        },
        iW = () => {
          let FF = 0;
          for (let WF = 0; WF < 35; WF += 7) {
            const SF = CF();
            if (FF += (127 & SF) * 2 ** WF, 0 === (128 & SF)) return FF
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let FF = 0; FF < uF.length; FF++)
          if (CF() !== uF.charCodeAt(FF)) return null;
        const WF = CF(),
          eF = CF(),
          EF = CF(),
          QF = CF(),
          rW = CF() | CF() << 8;
        if (2 !== WF) return null;
        0 !== (rW & RF) && function(FF, WF, SF) {
          const CF = () => {
              WF(SF())
            },
            AF = () => {
              let SF = 1,
                AF = !0;
              for (; SF > 0;) {
                SF--, AF || CF(), AF = !1;
                const uF = FF();
                for (let SF = 0; SF < uF; SF++) CF(), WF(FF());
                SF += FF()
              }
            },
            uF = FF();
          for (let hF = 0; hF < uF; hF++) FF(), AF();
          AF()
        }(iW, (WF => {
          if (SF + WF > FF.byteLength) throw new RangeError("past the stream");
          SF += WF
        }), CF);
        const gW = eF < 2 ? AF : iW;
        if (EF === hF) return {
          faces: 0,
          vertices: AF()
        };
        if (EF !== bW) return null;
        if (QF === dF) {
          return {
            faces: gW(),
            vertices: gW()
          }
        }
        if (QF !== PF) return null;
        CF(), eF < 2 && iW();
        const tW = iW();
        return {
          faces: iW(),
          vertices: tW
        }
      } catch {
        return null
      }
    }

    function eF(FF, WF, SF) {
      var CF, AF;
      if (null === (CF = null === (AF = FF.extensionsUsed) || void 0 === AF ? void 0 : AF.includes("KHR_draco_mesh_compression")) || void 0 === CF || !CF) return null;
      for (const QF of null !== (uF = FF.meshes) && void 0 !== uF ? uF : []) {
        var uF;
        for (const CF of QF.primitives) {
          var hF, bW, dF, PF, RF, eF;
          const AF = null === (hF = CF.extensions) || void 0 === hF ? void 0 : hF.KHR_draco_mesh_compression;
          if ("object" !== typeof AF || null === AF) continue;
          const uF = null === (bW = FF.bufferViews) || void 0 === bW ? void 0 : bW[AF.bufferView];
          if (null === WF || void 0 === uF) return EF;
          const QF = null !== (dF = uF.byteOffset) && void 0 !== dF ? dF : 0,
            rW = iW(WF.subarray(QF, QF + uF.byteLength));
          if (null === rW && !SF) continue;
          const gW = null !== (PF = FF.accessors) && void 0 !== PF ? PF : [],
            tW = null === (RF = gW[CF.attributes.POSITION]) || void 0 === RF ? void 0 : RF.count,
            TF = void 0 === CF.indices ? 0 : null === (eF = gW[CF.indices]) || void 0 === eF ? void 0 : eF.count;
          if (null === rW || void 0 === tW || void 0 === TF || 3 * rW.faces !== TF || rW.vertices > tW) return EF
        }
      }
      return null
    }
    const EF = "has a Draco stream whose counts don't match its accessors";

    function QF(FF) {
      var WF;
      return null !== (WF = FF.name) && void 0 !== WF ? WF : FF.fromFolderName || FF.id
    }

    function rW(FF, WF, SF) {
      return `Texture pack "${FF}": model "${WF}" was not loaded because it ${SF}. The default model is used instead.`
    }

    function gW(FF, WF, SF) {
      let {
        strictDraco: uF = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const hF = {};
      for (const [bW, dF] of Object.entries(WF)) {
        let WF;
        if (dF.startsWith("data:")) try {
          const FF = new Uint8Array((0, AF.o)(dF));
          if (WF = (0, CF.b)(FF), null === WF) {
            const {
              json: SF,
              bin: CF
            } = (0, AF.t)(FF);
            WF = eF(SF, CF, uF)
          }
        } catch {
          WF = "is not a binary glTF 2.0 file"
        } else WF = "loads data from outside the file";
        WF && (hF[bW] = WF, SF && console.warn(rW(FF, bW, WF)))
      }
      return hF
    }

    function tW(FF, WF) {
      const SF = Object.keys(WF);
      if (0 === SF.length) return null;
      if (1 === SF.length) return rW(FF, SF[0], WF[SF[0]]);
      const CF = SF.map((FF => `"${FF}" ${WF[FF]}`)).join("; ");
      return `Texture pack "${FF}": ${SF.length} models were not loaded (${CF}). The default models are used instead.`
    }
  },
  59230: (FF, WF, SF) => {
    SF.d(WF, {
      packAssets: () => gW
    });
    var CF = SF(2357),
      AF = SF(8240),
      uF = SF(32956),
      hF = SF(2399),
      bW = SF(2453);

    function dF(FF, WF, SF) {
      const CF = (0, hF.e)(FF, WF);
      return SF === bW.b ? CF : `${CF}|layers${SF}`
    }
    var PF = SF(2456),
      RF = SF(2373),
      iW = SF(2364),
      eF = SF(2406);
    var EF = SF(41183);
    let QF = null,
      rW = null;

    function gW(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW.b;
      if ((null === (WF = QF) || void 0 === WF ? void 0 : WF.pack) === FF.pack && QF.maxLayerWidth === SF) return QF.assets;
      const gW = (0, EF.e)(FF.pack, (0, EF.h)(FF));
      if (null === gW || gW.metaData.id === CF.b && tW(gW.textureOverrides) && tW(gW.modelOverrides)) return Promise.resolve(null);
      const aW = async function(FF, WF, SF) {
        var bW;
        const EF = null !== (bW = FF.textureOverrides) && void 0 !== bW ? bW : {},
          {
            id: QF,
            version: gW
          } = FF.metaData,
          aW = WF && QF !== CF.q.CUSTOM,
          kW = {};
        aW && (rW = kW);
        let qW, VF = aW ? await
        function(FF, WF, SF) {
          const CF = (0, hF.e)(FF, WF),
            AF = dF(FF, WF, SF);
          return (0, hF.j)((FF => FF === CF || FF === AF))
        }(QF, gW, SF): null;
        if (null === VF) {
          const FF = (0, RF.b)(AF.blockMetadata, ((FF, WF) => ({
              url: TF(EF, FF, "block" === WF ? iW.c.BLOCK : iW.c.ITEM)
            }))),
            WF = await
          function(FF, WF, SF, CF, AF) {
            return (0, eF.e)((uF => uF.WasmTextureWorker.generateRequired(FF, WF, SF, CF, AF)))
          }(AF.blockMetadata, AF.textureNameToIndex, FF, QF === CF.b, SF), uF = WF.assets;
          VF = {
            ...uF,
            averageColors: {}
          }, qW = WF.averageColors(), aW && qW.then((FF => {
            null !== FF && rW === kW && function(FF, WF, SF, CF) {
              (0, hF.m)(dF(FF, WF, CF), SF)
            }(QF, gW, {
              ...uF,
              averageColors: FF
            }, WF.layerCap)
          }))
        }
        return function(FF, WF) {
          var SF, CF;
          let AF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve(tW(FF.averageColors) ? null : FF.averageColors);
          const hF = null !== (SF = WF.textureOverrides) && void 0 !== SF ? SF : {},
            bW = null !== (CF = WF.modelOverrides) && void 0 !== CF ? CF : {},
            dF = 0 === Object.keys(bW).length ? {} : (0, uF.refusedPackModels)((0, uF.packDisplayName)(WF.metaData), bW, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: RF,
              rotatedBlockTextures: iW
            } = FF,
            eF = FF => {
              var WF, SF;
              return null !== (WF = null !== (SF = RF[FF]) && void 0 !== SF ? SF : iW[FF]) && void 0 !== WF ? WF : null
            };
          return {
            terrain: {
              atlasSheets: FF.blockAtlasArr,
              texture: eF
            },
            sheetPixels: [...FF.blockAtlasPixels],
            sheetWidth: FF.blockAtlasWidth,
            armourAtlasUrl: FF.armourAtlas,
            texture: FF => {
              var WF, SF;
              return null !== (WF = null !== (SF = eF(FF)) && void 0 !== SF ? SF : (0, PF.b)(hF, FF)) && void 0 !== WF ? WF : null
            },
            model: FF => void 0 === dF[FF] && bW[FF] || null,
            averageColours: AF
          }
        }(VF, FF, qW)
      }(gW, null === FF.gameSource, SF), kW = {
        pack: FF.pack,
        maxLayerWidth: SF,
        assets: aW
      };
      return QF = kW, aW.catch((() => {
        QF === kW && (QF = null)
      })), aW
    }

    function tW(FF) {
      return 0 === Object.keys(null !== FF && void 0 !== FF ? FF : {}).length
    }

    function TF(FF, WF, CF) {
      const uF = (0, PF.b)(FF, WF);
      if (uF) return uF;
      try {
        return (0, AF.getDefaultTexture)(WF, CF).url
      } catch {
        return SF(2498)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);