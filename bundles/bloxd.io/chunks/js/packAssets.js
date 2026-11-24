export const id = 45;
export const ids = [45, 205];
export const modules = {
  34345: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      packDisplayName: () => BT,
      packModelMessage: () => ZT,
      packModelSummary: () => vT,
      refusedPackModels: () => cT
    });
    var WT = mT(34350),
      zT = mT(34358);
    const MT = "DRACO",
      gT = 0,
      nT = 1,
      HT = 0,
      kT = 1,
      jT = 32768;

    function lT(TT) {
      const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let mT = 0;
      const WT = () => {
          if (mT >= TT.byteLength) throw new RangeError("past the stream");
          return TT[mT++]
        },
        zT = () => {
          if (mT + 4 > TT.byteLength) throw new RangeError("past the stream");
          const WT = UT.getUint32(mT, !0);
          return mT += 4, WT
        },
        lT = () => {
          let TT = 0;
          for (let UT = 0; UT < 35; UT += 7) {
            const mT = WT();
            if (TT += (127 & mT) * 2 ** UT, 0 === (128 & mT)) return TT
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let TT = 0; TT < MT.length; TT++)
          if (WT() !== MT.charCodeAt(TT)) return null;
        const UT = WT(),
          LT = WT(),
          pT = WT(),
          BT = WT(),
          ZT = WT() | WT() << 8;
        if (2 !== UT) return null;
        0 !== (ZT & jT) && function(TT, UT, mT) {
          const WT = () => {
              UT(mT())
            },
            zT = () => {
              let mT = 1,
                zT = !0;
              for (; mT > 0;) {
                mT--, zT || WT(), zT = !1;
                const MT = TT();
                for (let mT = 0; mT < MT; mT++) WT(), UT(TT());
                mT += TT()
              }
            },
            MT = TT();
          for (let gT = 0; gT < MT; gT++) TT(), zT();
          zT()
        }(lT, (UT => {
          if (mT + UT > TT.byteLength) throw new RangeError("past the stream");
          mT += UT
        }), WT);
        const cT = LT < 2 ? zT : lT;
        if (pT === gT) return {
          faces: 0,
          vertices: zT()
        };
        if (pT !== nT) return null;
        if (BT === HT) {
          return {
            faces: cT(),
            vertices: cT()
          }
        }
        if (BT !== kT) return null;
        WT(), LT < 2 && lT();
        const vT = lT();
        return {
          faces: lT(),
          vertices: vT
        }
      } catch {
        return null
      }
    }

    function LT(TT, UT, mT) {
      var WT, zT;
      if (null === (WT = null === (zT = TT.extensionsUsed) || void 0 === zT ? void 0 : zT.includes("KHR_draco_mesh_compression")) || void 0 === WT || !WT) return null;
      for (const BT of null !== (MT = TT.meshes) && void 0 !== MT ? MT : []) {
        var MT;
        for (const WT of BT.primitives) {
          var gT, nT, HT, kT, jT, LT;
          const zT = null === (gT = WT.extensions) || void 0 === gT ? void 0 : gT.KHR_draco_mesh_compression;
          if ("object" !== typeof zT || null === zT) continue;
          const MT = null === (nT = TT.bufferViews) || void 0 === nT ? void 0 : nT[zT.bufferView];
          if (null === UT || void 0 === MT) return pT;
          const BT = null !== (HT = MT.byteOffset) && void 0 !== HT ? HT : 0,
            ZT = lT(UT.subarray(BT, BT + MT.byteLength));
          if (null === ZT && !mT) continue;
          const cT = null !== (kT = TT.accessors) && void 0 !== kT ? kT : [],
            vT = null === (jT = cT[WT.attributes.POSITION]) || void 0 === jT ? void 0 : jT.count,
            fT = void 0 === WT.indices ? 0 : null === (LT = cT[WT.indices]) || void 0 === LT ? void 0 : LT.count;
          if (null === ZT || void 0 === vT || void 0 === fT || 3 * ZT.faces !== fT || ZT.vertices > vT) return pT
        }
      }
      return null
    }
    const pT = "has a Draco stream whose counts don't match its accessors";

    function BT(TT) {
      var UT;
      return null !== (UT = TT.name) && void 0 !== UT ? UT : TT.fromFolderName || TT.id
    }

    function ZT(TT, UT, mT) {
      return `Texture pack "${TT}": model "${UT}" was not loaded because it ${mT}. The default model is used instead.`
    }

    function cT(TT, UT, mT) {
      let {
        strictDraco: MT = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const gT = {};
      for (const [nT, HT] of Object.entries(UT)) {
        let UT;
        if (HT.startsWith("data:")) try {
          const TT = new Uint8Array((0, zT.m)(HT));
          if (UT = (0, WT.c)(TT), null === UT) {
            const {
              json: mT,
              bin: WT
            } = (0, zT.p)(TT);
            UT = LT(mT, WT, MT)
          }
        } catch {
          UT = "is not a binary glTF 2.0 file"
        } else UT = "loads data from outside the file";
        UT && (gT[nT] = UT, mT && console.warn(ZT(TT, nT, UT)))
      }
      return gT
    }

    function vT(TT, UT) {
      const mT = Object.keys(UT);
      if (0 === mT.length) return null;
      if (1 === mT.length) return ZT(TT, mT[0], UT[mT[0]]);
      const WT = mT.map((TT => `"${TT}" ${UT[TT]}`)).join("; ");
      return `Texture pack "${TT}": ${mT.length} models were not loaded (${WT}). The default models are used instead.`
    }
  },
  61354: (TT, UT, mT) => {
    mT.d(UT, {
      packAssets: () => vT
    });
    var WT = mT(2273),
      zT = mT(2257),
      MT = mT(34345),
      gT = mT(3329),
      nT = mT(3357);

    function HT(TT, UT, mT, WT) {
      const zT = `${(0,gT.c)(TT,UT)}|sheets${mT}`;
      return WT === nT.c ? zT : `${zT}|layers${WT}`
    }
    var kT = mT(3359),
      jT = mT(3309),
      lT = mT(3299),
      LT = mT(3334);
    var pT = mT(51139);
    const BT = 256;
    let ZT = null,
      cT = null;

    function vT(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nT.c;
      if ((null === (UT = ZT) || void 0 === UT ? void 0 : UT.pack) === TT.pack && ZT.maxLayerWidth === mT) return ZT.assets;
      const vT = (0, pT.g)(TT.pack, (0, pT.j)(TT));
      if (null === vT || !(0, zT.d)(vT)) return Promise.resolve(null);
      const qT = async function(TT, UT, mT) {
        var pT;
        const ZT = null !== (pT = TT.textureOverrides) && void 0 !== pT ? pT : {},
          {
            id: vT,
            version: qT
          } = TT.metaData,
          iT = UT && vT !== WT.n.CUSTOM,
          bT = {};
        iT && (cT = bT);
        let OT, eT, YT = iT ? await async function(TT, UT, mT, WT) {
          const zT = HT(TT, UT, mT, nT.c),
            MT = HT(TT, UT, mT, WT),
            kT = await (0, gT.g)((TT => TT === zT || TT === MT));
          return null !== kT && (WT === nT.c || kT.blockAtlasWidth <= WT) ? kT : null
        }(vT, qT, BT, mT): null;
        if (null === YT) {
          const {
            blockMetadata: TT,
            getDefaultTexture: UT,
            textureNameToIndex: MT
          } = await (0, zT.j)(), nT = (0, jT.d)(TT, ((TT, mT) => ({
            url: fT(ZT, UT, TT, "block" === mT ? lT.f.BLOCK : lT.f.ITEM)
          }))), kT = await
          function(TT, UT, mT, WT, zT, MT) {
            return (0, LT.d)((gT => gT.WasmTextureWorker.generateRequired(TT, UT, mT, WT, zT, MT)))
          }(TT, MT, nT, vT === WT.e, mT, BT), pT = kT.assets;
          YT = {
            ...pT,
            averageColors: {}
          }, OT = kT.averageColors(), iT && (eT = OT.then((async TT => {
            null !== TT && cT === bT && await
            function(TT, UT, mT, WT, zT) {
              return (0, gT.k)(HT(TT, UT, WT, zT), mT)
            }(vT, qT, {
              ...pT,
              averageColors: TT
            }, BT, kT.layerCap)
          })))
        }
        return function(TT, UT) {
          var mT, WT;
          let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((nT = TT.averageColors, 0 === Object.keys(null !== nT && void 0 !== nT ? nT : {}).length ? null : TT.averageColors)),
            gT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var nT;
          const HT = null !== (mT = UT.textureOverrides) && void 0 !== mT ? mT : {},
            jT = null !== (WT = UT.modelOverrides) && void 0 !== WT ? WT : {},
            lT = 0 === Object.keys(jT).length ? {} : (0, MT.refusedPackModels)((0, MT.packDisplayName)(UT.metaData), jT, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: LT,
              rotatedBlockTextures: pT
            } = TT,
            BT = TT => {
              var UT, mT;
              return null !== (UT = null !== (mT = LT[TT]) && void 0 !== mT ? mT : pT[TT]) && void 0 !== UT ? UT : null
            };
          return {
            terrain: {
              atlasSheets: TT.blockAtlasArr,
              texture: BT
            },
            sheetPixels: [...TT.blockAtlasPixels],
            heldUntil: gT,
            sheetLayout: TT.imagesPerAtlas,
            sheetWidth: TT.blockAtlasWidth,
            armourAtlasUrl: TT.armourAtlas,
            texture: TT => {
              var UT, mT;
              return null !== (UT = null !== (mT = BT(TT)) && void 0 !== mT ? mT : (0, kT.e)(HT, TT)) && void 0 !== UT ? UT : null
            },
            model: TT => void 0 === lT[TT] && jT[TT] || null,
            averageColours: zT
          }
        }(YT, TT, OT, eT)
      }(vT, null === TT.gameSource, mT), iT = {
        pack: TT.pack,
        maxLayerWidth: mT,
        assets: qT
      };
      return ZT = iT, qT.catch((() => {
        ZT === iT && (ZT = null)
      })), qT
    }

    function fT(TT, UT, WT, zT) {
      const MT = (0, kT.e)(TT, WT);
      if (MT) return MT;
      try {
        return UT(WT, zT).url
      } catch {
        return mT(3425)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);