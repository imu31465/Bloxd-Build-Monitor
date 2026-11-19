export const id = 44;
export const ids = [44, 194];
export const modules = {
  9113: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      packDisplayName: () => tD,
      packModelMessage: () => ZD,
      packModelSummary: () => vD,
      refusedPackModels: () => oD
    });
    var ID = cD(9116),
      pD = cD(9125);
    const iD = "DRACO",
      fD = 0,
      bD = 1,
      QD = 0,
      wD = 1,
      SD = 32768;

    function BD(DD) {
      const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      let cD = 0;
      const ID = () => {
          if (cD >= DD.byteLength) throw new RangeError("past the stream");
          return DD[cD++]
        },
        pD = () => {
          if (cD + 4 > DD.byteLength) throw new RangeError("past the stream");
          const ID = CD.getUint32(cD, !0);
          return cD += 4, ID
        },
        BD = () => {
          let DD = 0;
          for (let CD = 0; CD < 35; CD += 7) {
            const cD = ID();
            if (DD += (127 & cD) * 2 ** CD, 0 === (128 & cD)) return DD
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let DD = 0; DD < iD.length; DD++)
          if (ID() !== iD.charCodeAt(DD)) return null;
        const CD = ID(),
          yD = ID(),
          MD = ID(),
          tD = ID(),
          ZD = ID() | ID() << 8;
        if (2 !== CD) return null;
        0 !== (ZD & SD) && function(DD, CD, cD) {
          const ID = () => {
              CD(cD())
            },
            pD = () => {
              let cD = 1,
                pD = !0;
              for (; cD > 0;) {
                cD--, pD || ID(), pD = !1;
                const iD = DD();
                for (let cD = 0; cD < iD; cD++) ID(), CD(DD());
                cD += DD()
              }
            },
            iD = DD();
          for (let fD = 0; fD < iD; fD++) DD(), pD();
          pD()
        }(BD, (CD => {
          if (cD + CD > DD.byteLength) throw new RangeError("past the stream");
          cD += CD
        }), ID);
        const oD = yD < 2 ? pD : BD;
        if (MD === fD) return {
          faces: 0,
          vertices: pD()
        };
        if (MD !== bD) return null;
        if (tD === QD) {
          return {
            faces: oD(),
            vertices: oD()
          }
        }
        if (tD !== wD) return null;
        ID(), yD < 2 && BD();
        const vD = BD();
        return {
          faces: BD(),
          vertices: vD
        }
      } catch {
        return null
      }
    }

    function yD(DD, CD, cD) {
      var ID, pD;
      if (null === (ID = null === (pD = DD.extensionsUsed) || void 0 === pD ? void 0 : pD.includes("KHR_draco_mesh_compression")) || void 0 === ID || !ID) return null;
      for (const tD of null !== (iD = DD.meshes) && void 0 !== iD ? iD : []) {
        var iD;
        for (const ID of tD.primitives) {
          var fD, bD, QD, wD, SD, yD;
          const pD = null === (fD = ID.extensions) || void 0 === fD ? void 0 : fD.KHR_draco_mesh_compression;
          if ("object" !== typeof pD || null === pD) continue;
          const iD = null === (bD = DD.bufferViews) || void 0 === bD ? void 0 : bD[pD.bufferView];
          if (null === CD || void 0 === iD) return MD;
          const tD = null !== (QD = iD.byteOffset) && void 0 !== QD ? QD : 0,
            ZD = BD(CD.subarray(tD, tD + iD.byteLength));
          if (null === ZD && !cD) continue;
          const oD = null !== (wD = DD.accessors) && void 0 !== wD ? wD : [],
            vD = null === (SD = oD[ID.attributes.POSITION]) || void 0 === SD ? void 0 : SD.count,
            ND = void 0 === ID.indices ? 0 : null === (yD = oD[ID.indices]) || void 0 === yD ? void 0 : yD.count;
          if (null === ZD || void 0 === vD || void 0 === ND || 3 * ZD.faces !== ND || ZD.vertices > vD) return MD
        }
      }
      return null
    }
    const MD = "has a Draco stream whose counts don't match its accessors";

    function tD(DD) {
      var CD;
      return null !== (CD = DD.name) && void 0 !== CD ? CD : DD.fromFolderName || DD.id
    }

    function ZD(DD, CD, cD) {
      return `Texture pack "${DD}": model "${CD}" was not loaded because it ${cD}. The default model is used instead.`
    }

    function oD(DD, CD, cD) {
      let {
        strictDraco: iD = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const fD = {};
      for (const [bD, QD] of Object.entries(CD)) {
        let CD;
        if (QD.startsWith("data:")) try {
          const DD = new Uint8Array((0, pD.t)(QD));
          if (CD = (0, ID.e)(DD), null === CD) {
            const {
              json: cD,
              bin: ID
            } = (0, pD.x)(DD);
            CD = yD(cD, ID, iD)
          }
        } catch {
          CD = "is not a binary glTF 2.0 file"
        } else CD = "loads data from outside the file";
        CD && (fD[bD] = CD, cD && console.warn(ZD(DD, bD, CD)))
      }
      return fD
    }

    function vD(DD, CD) {
      const cD = Object.keys(CD);
      if (0 === cD.length) return null;
      if (1 === cD.length) return ZD(DD, cD[0], CD[cD[0]]);
      const ID = cD.map((DD => `"${DD}" ${CD[DD]}`)).join("; ");
      return `Texture pack "${DD}": ${cD.length} models were not loaded (${ID}). The default models are used instead.`
    }
  },
  60716: (DD, CD, cD) => {
    cD.d(CD, {
      packAssets: () => vD
    });
    var ID = cD(2952),
      pD = cD(2981),
      iD = cD(9113),
      fD = cD(3016),
      bD = cD(3053);

    function QD(DD, CD, cD, ID) {
      const pD = `${(0,fD.d)(DD,CD)}|sheets${cD}`;
      return ID === bD.e ? pD : `${pD}|layers${ID}`
    }
    var wD = cD(3059),
      SD = cD(2969),
      BD = cD(2956),
      yD = cD(3023);
    var MD = cD(42485);
    const tD = 256;
    let ZD = null,
      oD = null;

    function vD(DD) {
      var CD;
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bD.e;
      if ((null === (CD = ZD) || void 0 === CD ? void 0 : CD.pack) === DD.pack && ZD.maxLayerWidth === cD) return ZD.assets;
      const vD = (0, MD.f)(DD.pack, (0, MD.i)(DD));
      if (null === vD || !(0, pD.f)(vD)) return Promise.resolve(null);
      const gD = async function(DD, CD, cD) {
        var MD;
        const ZD = null !== (MD = DD.textureOverrides) && void 0 !== MD ? MD : {},
          {
            id: vD,
            version: gD
          } = DD.metaData,
          XD = CD && vD !== ID.r.CUSTOM,
          mD = {};
        XD && (oD = mD);
        let nD, OD, PD = XD ? await async function(DD, CD, cD, ID) {
          const pD = QD(DD, CD, cD, bD.e),
            iD = QD(DD, CD, cD, ID),
            wD = await (0, fD.j)((DD => DD === pD || DD === iD));
          return null !== wD && (ID === bD.e || wD.blockAtlasWidth <= ID) ? wD : null
        }(vD, gD, tD, cD): null;
        if (null === PD) {
          const {
            blockMetadata: DD,
            getDefaultTexture: CD,
            textureNameToIndex: iD
          } = await (0, pD.l)(), bD = (0, SD.b)(DD, ((DD, cD) => ({
            url: ND(ZD, CD, DD, "block" === cD ? BD.f.BLOCK : BD.f.ITEM)
          }))), wD = await
          function(DD, CD, cD, ID, pD, iD) {
            return (0, yD.c)((fD => fD.WasmTextureWorker.generateRequired(DD, CD, cD, ID, pD, iD)))
          }(DD, iD, bD, vD === ID.e, cD, tD), MD = wD.assets;
          PD = {
            ...MD,
            averageColors: {}
          }, nD = wD.averageColors(), XD && (OD = nD.then((async DD => {
            null !== DD && oD === mD && await
            function(DD, CD, cD, ID, pD) {
              return (0, fD.p)(QD(DD, CD, ID, pD), cD)
            }(vD, gD, {
              ...MD,
              averageColors: DD
            }, tD, wD.layerCap)
          })))
        }
        return function(DD, CD) {
          var cD, ID;
          let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((bD = DD.averageColors, 0 === Object.keys(null !== bD && void 0 !== bD ? bD : {}).length ? null : DD.averageColors)),
            fD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var bD;
          const QD = null !== (cD = CD.textureOverrides) && void 0 !== cD ? cD : {},
            SD = null !== (ID = CD.modelOverrides) && void 0 !== ID ? ID : {},
            BD = 0 === Object.keys(SD).length ? {} : (0, iD.refusedPackModels)((0, iD.packDisplayName)(CD.metaData), SD, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: yD,
              rotatedBlockTextures: MD
            } = DD,
            tD = DD => {
              var CD, cD;
              return null !== (CD = null !== (cD = yD[DD]) && void 0 !== cD ? cD : MD[DD]) && void 0 !== CD ? CD : null
            };
          return {
            terrain: {
              atlasSheets: DD.blockAtlasArr,
              texture: tD
            },
            sheetPixels: [...DD.blockAtlasPixels],
            heldUntil: fD,
            sheetLayout: DD.imagesPerAtlas,
            sheetWidth: DD.blockAtlasWidth,
            armourAtlasUrl: DD.armourAtlas,
            texture: DD => {
              var CD, cD;
              return null !== (CD = null !== (cD = tD(DD)) && void 0 !== cD ? cD : (0, wD.e)(QD, DD)) && void 0 !== CD ? CD : null
            },
            model: DD => void 0 === BD[DD] && SD[DD] || null,
            averageColours: pD
          }
        }(PD, DD, nD, OD)
      }(vD, null === DD.gameSource, cD), XD = {
        pack: DD.pack,
        maxLayerWidth: cD,
        assets: gD
      };
      return ZD = XD, gD.catch((() => {
        ZD === XD && (ZD = null)
      })), gD
    }

    function ND(DD, CD, ID, pD) {
      const iD = (0, wD.e)(DD, ID);
      if (iD) return iD;
      try {
        return CD(ID, pD).url
      } catch {
        return cD(3104)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);