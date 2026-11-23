export const id = 44;
export const ids = [44, 202];
export const modules = {
  34221: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      packDisplayName: () => gC,
      packModelMessage: () => SC,
      packModelSummary: () => PC,
      refusedPackModels: () => pC
    });
    var QC = ZC(34223),
      wC = ZC(34228);
    const bC = "DRACO",
      nC = 0,
      fC = 1,
      oC = 0,
      qC = 1,
      FC = 32768;

    function WC(CC) {
      const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      let ZC = 0;
      const QC = () => {
          if (ZC >= CC.byteLength) throw new RangeError("past the stream");
          return CC[ZC++]
        },
        wC = () => {
          if (ZC + 4 > CC.byteLength) throw new RangeError("past the stream");
          const QC = zC.getUint32(ZC, !0);
          return ZC += 4, QC
        },
        WC = () => {
          let CC = 0;
          for (let zC = 0; zC < 35; zC += 7) {
            const ZC = QC();
            if (CC += (127 & ZC) * 2 ** zC, 0 === (128 & ZC)) return CC
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let CC = 0; CC < bC.length; CC++)
          if (QC() !== bC.charCodeAt(CC)) return null;
        const zC = QC(),
          NC = QC(),
          MC = QC(),
          gC = QC(),
          SC = QC() | QC() << 8;
        if (2 !== zC) return null;
        0 !== (SC & FC) && function(CC, zC, ZC) {
          const QC = () => {
              zC(ZC())
            },
            wC = () => {
              let ZC = 1,
                wC = !0;
              for (; ZC > 0;) {
                ZC--, wC || QC(), wC = !1;
                const bC = CC();
                for (let ZC = 0; ZC < bC; ZC++) QC(), zC(CC());
                ZC += CC()
              }
            },
            bC = CC();
          for (let nC = 0; nC < bC; nC++) CC(), wC();
          wC()
        }(WC, (zC => {
          if (ZC + zC > CC.byteLength) throw new RangeError("past the stream");
          ZC += zC
        }), QC);
        const pC = NC < 2 ? wC : WC;
        if (MC === nC) return {
          faces: 0,
          vertices: wC()
        };
        if (MC !== fC) return null;
        if (gC === oC) {
          return {
            faces: pC(),
            vertices: pC()
          }
        }
        if (gC !== qC) return null;
        QC(), NC < 2 && WC();
        const PC = WC();
        return {
          faces: WC(),
          vertices: PC
        }
      } catch {
        return null
      }
    }

    function NC(CC, zC, ZC) {
      var QC, wC;
      if (null === (QC = null === (wC = CC.extensionsUsed) || void 0 === wC ? void 0 : wC.includes("KHR_draco_mesh_compression")) || void 0 === QC || !QC) return null;
      for (const gC of null !== (bC = CC.meshes) && void 0 !== bC ? bC : []) {
        var bC;
        for (const QC of gC.primitives) {
          var nC, fC, oC, qC, FC, NC;
          const wC = null === (nC = QC.extensions) || void 0 === nC ? void 0 : nC.KHR_draco_mesh_compression;
          if ("object" !== typeof wC || null === wC) continue;
          const bC = null === (fC = CC.bufferViews) || void 0 === fC ? void 0 : fC[wC.bufferView];
          if (null === zC || void 0 === bC) return MC;
          const gC = null !== (oC = bC.byteOffset) && void 0 !== oC ? oC : 0,
            SC = WC(zC.subarray(gC, gC + bC.byteLength));
          if (null === SC && !ZC) continue;
          const pC = null !== (qC = CC.accessors) && void 0 !== qC ? qC : [],
            PC = null === (FC = pC[QC.attributes.POSITION]) || void 0 === FC ? void 0 : FC.count,
            GC = void 0 === QC.indices ? 0 : null === (NC = pC[QC.indices]) || void 0 === NC ? void 0 : NC.count;
          if (null === SC || void 0 === PC || void 0 === GC || 3 * SC.faces !== GC || SC.vertices > PC) return MC
        }
      }
      return null
    }
    const MC = "has a Draco stream whose counts don't match its accessors";

    function gC(CC) {
      var zC;
      return null !== (zC = CC.name) && void 0 !== zC ? zC : CC.fromFolderName || CC.id
    }

    function SC(CC, zC, ZC) {
      return `Texture pack "${CC}": model "${zC}" was not loaded because it ${ZC}. The default model is used instead.`
    }

    function pC(CC, zC, ZC) {
      let {
        strictDraco: bC = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const nC = {};
      for (const [fC, oC] of Object.entries(zC)) {
        let zC;
        if (oC.startsWith("data:")) try {
          const CC = new Uint8Array((0, wC.s)(oC));
          if (zC = (0, QC.d)(CC), null === zC) {
            const {
              json: ZC,
              bin: QC
            } = (0, wC.x)(CC);
            zC = NC(ZC, QC, bC)
          }
        } catch {
          zC = "is not a binary glTF 2.0 file"
        } else zC = "loads data from outside the file";
        zC && (nC[fC] = zC, ZC && console.warn(SC(CC, fC, zC)))
      }
      return nC
    }

    function PC(CC, zC) {
      const ZC = Object.keys(zC);
      if (0 === ZC.length) return null;
      if (1 === ZC.length) return SC(CC, ZC[0], zC[ZC[0]]);
      const QC = ZC.map((CC => `"${CC}" ${zC[CC]}`)).join("; ");
      return `Texture pack "${CC}": ${ZC.length} models were not loaded (${QC}). The default models are used instead.`
    }
  },
  61135: (CC, zC, ZC) => {
    ZC.d(zC, {
      packAssets: () => PC
    });
    var QC = ZC(2063),
      wC = ZC(2050),
      bC = ZC(34221),
      nC = ZC(3192),
      fC = ZC(3229);

    function oC(CC, zC, ZC, QC) {
      const wC = `${(0,nC.b)(CC,zC)}|sheets${ZC}`;
      return QC === fC.d ? wC : `${wC}|layers${QC}`
    }
    var qC = ZC(3238),
      FC = ZC(3158),
      WC = ZC(3144),
      NC = ZC(3201);
    var MC = ZC(50739);
    const gC = 256;
    let SC = null,
      pC = null;

    function PC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fC.d;
      if ((null === (zC = SC) || void 0 === zC ? void 0 : zC.pack) === CC.pack && SC.maxLayerWidth === ZC) return SC.assets;
      const PC = (0, MC.c)(CC.pack, (0, MC.i)(CC));
      if (null === PC || !(0, wC.i)(PC)) return Promise.resolve(null);
      const RC = async function(CC, zC, ZC) {
        var MC;
        const SC = null !== (MC = CC.textureOverrides) && void 0 !== MC ? MC : {},
          {
            id: PC,
            version: RC
          } = CC.metaData,
          AC = zC && PC !== QC.q.CUSTOM,
          xC = {};
        AC && (pC = xC);
        let JC, IC, iC = AC ? await async function(CC, zC, ZC, QC) {
          const wC = oC(CC, zC, ZC, fC.d),
            bC = oC(CC, zC, ZC, QC),
            qC = await (0, nC.f)((CC => CC === wC || CC === bC));
          return null !== qC && (QC === fC.d || qC.blockAtlasWidth <= QC) ? qC : null
        }(PC, RC, gC, ZC): null;
        if (null === iC) {
          const {
            blockMetadata: CC,
            getDefaultTexture: zC,
            textureNameToIndex: bC
          } = await (0, wC.l)(), fC = (0, FC.c)(CC, ((CC, ZC) => ({
            url: GC(SC, zC, CC, "block" === ZC ? WC.f.BLOCK : WC.f.ITEM)
          }))), qC = await
          function(CC, zC, ZC, QC, wC, bC) {
            return (0, NC.c)((nC => nC.WasmTextureWorker.generateRequired(CC, zC, ZC, QC, wC, bC)))
          }(CC, bC, fC, PC === QC.c, ZC, gC), MC = qC.assets;
          iC = {
            ...MC,
            averageColors: {}
          }, JC = qC.averageColors(), AC && (IC = JC.then((async CC => {
            null !== CC && pC === xC && await
            function(CC, zC, ZC, QC, wC) {
              return (0, nC.k)(oC(CC, zC, QC, wC), ZC)
            }(PC, RC, {
              ...MC,
              averageColors: CC
            }, gC, qC.layerCap)
          })))
        }
        return function(CC, zC) {
          var ZC, QC;
          let wC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((fC = CC.averageColors, 0 === Object.keys(null !== fC && void 0 !== fC ? fC : {}).length ? null : CC.averageColors)),
            nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var fC;
          const oC = null !== (ZC = zC.textureOverrides) && void 0 !== ZC ? ZC : {},
            FC = null !== (QC = zC.modelOverrides) && void 0 !== QC ? QC : {},
            WC = 0 === Object.keys(FC).length ? {} : (0, bC.refusedPackModels)((0, bC.packDisplayName)(zC.metaData), FC, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: NC,
              rotatedBlockTextures: MC
            } = CC,
            gC = CC => {
              var zC, ZC;
              return null !== (zC = null !== (ZC = NC[CC]) && void 0 !== ZC ? ZC : MC[CC]) && void 0 !== zC ? zC : null
            };
          return {
            terrain: {
              atlasSheets: CC.blockAtlasArr,
              texture: gC
            },
            sheetPixels: [...CC.blockAtlasPixels],
            heldUntil: nC,
            sheetLayout: CC.imagesPerAtlas,
            sheetWidth: CC.blockAtlasWidth,
            armourAtlasUrl: CC.armourAtlas,
            texture: CC => {
              var zC, ZC;
              return null !== (zC = null !== (ZC = gC(CC)) && void 0 !== ZC ? ZC : (0, qC.c)(oC, CC)) && void 0 !== zC ? zC : null
            },
            model: CC => void 0 === WC[CC] && FC[CC] || null,
            averageColours: wC
          }
        }(iC, CC, JC, IC)
      }(PC, null === CC.gameSource, ZC), AC = {
        pack: CC.pack,
        maxLayerWidth: ZC,
        assets: RC
      };
      return SC = AC, RC.catch((() => {
        SC === AC && (SC = null)
      })), RC
    }

    function GC(CC, zC, QC, wC) {
      const bC = (0, qC.c)(CC, QC);
      if (bC) return bC;
      try {
        return zC(QC, wC).url
      } catch {
        return ZC(3300)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);