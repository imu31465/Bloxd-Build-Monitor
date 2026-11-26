export const id = 52;
export const ids = [52, 226];
export const modules = {
  34861: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      packDisplayName: () => qB,
      packModelMessage: () => ZB,
      packModelSummary: () => RB,
      refusedPackModels: () => NB
    });
    var YB = GB(34869),
      DB = GB(34875);
    const QB = "DRACO",
      oB = 0,
      jB = 1,
      yB = 0,
      JB = 1,
      MB = 32768;

    function PB(BB) {
      const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let GB = 0;
      const YB = () => {
          if (GB >= BB.byteLength) throw new RangeError("past the stream");
          return BB[GB++]
        },
        DB = () => {
          if (GB + 4 > BB.byteLength) throw new RangeError("past the stream");
          const YB = OB.getUint32(GB, !0);
          return GB += 4, YB
        },
        PB = () => {
          let BB = 0;
          for (let OB = 0; OB < 35; OB += 7) {
            const GB = YB();
            if (BB += (127 & GB) * 2 ** OB, 0 === (128 & GB)) return BB
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let BB = 0; BB < QB.length; BB++)
          if (YB() !== QB.charCodeAt(BB)) return null;
        const OB = YB(),
          zB = YB(),
          lB = YB(),
          pB = YB(),
          qB = YB() | YB() << 8;
        if (2 !== OB) return null;
        0 !== (qB & MB) && function(BB, OB, GB) {
          const YB = () => {
              OB(GB())
            },
            DB = () => {
              let GB = 1,
                DB = !0;
              for (; GB > 0;) {
                GB--, DB || YB(), DB = !1;
                const QB = BB();
                for (let GB = 0; GB < QB; GB++) YB(), OB(BB());
                GB += BB()
              }
            },
            QB = BB();
          for (let oB = 0; oB < QB; oB++) BB(), DB();
          DB()
        }(PB, (OB => {
          if (GB + OB > BB.byteLength) throw new RangeError("past the stream");
          GB += OB
        }), YB);
        const ZB = zB < 2 ? DB : PB;
        if (lB === oB) return {
          faces: 0,
          vertices: DB(),
          minor: zB
        };
        if (lB !== jB) return null;
        if (pB === yB) {
          return {
            faces: ZB(),
            vertices: ZB(),
            minor: zB
          }
        }
        if (pB !== JB) return null;
        YB(), zB < 2 && PB();
        const NB = PB();
        return {
          faces: PB(),
          vertices: NB,
          minor: zB
        }
      } catch {
        return null
      }
    }

    function zB(BB, OB, GB) {
      var YB, DB;
      if (null === (YB = null === (DB = BB.extensionsUsed) || void 0 === DB ? void 0 : DB.includes("KHR_draco_mesh_compression")) || void 0 === YB || !YB) return null;
      for (const qB of null !== (QB = BB.meshes) && void 0 !== QB ? QB : []) {
        var QB;
        for (const YB of qB.primitives) {
          var oB, jB, yB, JB, MB, zB;
          const DB = null === (oB = YB.extensions) || void 0 === oB ? void 0 : oB.KHR_draco_mesh_compression;
          if ("object" !== typeof DB || null === DB) continue;
          const QB = null === (jB = BB.bufferViews) || void 0 === jB ? void 0 : jB[DB.bufferView];
          if (null === OB || void 0 === QB) return lB;
          const qB = null !== (yB = QB.byteOffset) && void 0 !== yB ? yB : 0,
            ZB = PB(OB.subarray(qB, qB + QB.byteLength));
          if (null === ZB && !GB) continue;
          const NB = null !== (JB = BB.accessors) && void 0 !== JB ? JB : [],
            RB = null === (MB = NB[YB.attributes.POSITION]) || void 0 === MB ? void 0 : MB.count,
            WB = void 0 === YB.indices ? 0 : null === (zB = NB[YB.indices]) || void 0 === zB ? void 0 : zB.count;
          if (null === ZB || void 0 === RB || void 0 === WB || 3 * ZB.faces !== WB || ZB.vertices > RB) return lB;
          if (GB && ZB.minor < 2) return pB
        }
      }
      return null
    }
    const lB = "has a Draco stream whose counts don't match its accessors",
      pB = "has a Draco stream too old to decode: export it again";

    function qB(BB) {
      var OB;
      return null !== (OB = BB.name) && void 0 !== OB ? OB : BB.fromFolderName || BB.id
    }

    function ZB(BB, OB, GB) {
      return `Texture pack "${BB}": model "${OB}" was not loaded because it ${GB}. The default model is used instead.`
    }

    function NB(BB, OB, GB) {
      let {
        strictDraco: QB = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const oB = {};
      for (const [jB, yB] of Object.entries(OB)) {
        let OB;
        if (yB.startsWith("data:")) try {
          const BB = new Uint8Array((0, DB.k)(yB));
          if (OB = (0, YB.d)(BB), null === OB) {
            const {
              json: GB,
              bin: YB
            } = (0, DB.r)(BB);
            OB = zB(GB, YB, QB)
          }
        } catch {
          OB = "is not a binary glTF 2.0 file"
        } else OB = "loads data from outside the file";
        OB && (oB[jB] = OB, GB && console.warn(ZB(BB, jB, OB)))
      }
      return oB
    }

    function RB(BB, OB) {
      const GB = Object.keys(OB);
      if (0 === GB.length) return null;
      if (1 === GB.length) return ZB(BB, GB[0], OB[GB[0]]);
      const YB = GB.map((BB => `"${BB}" ${OB[BB]}`)).join("; ");
      return `Texture pack "${BB}": ${GB.length} models were not loaded (${YB}). The default models are used instead.`
    }
  },
  64078: (BB, OB, GB) => {
    GB.d(OB, {
      packAssets: () => NB
    });
    var YB = GB(2272),
      DB = GB(2250),
      QB = GB(34861),
      oB = GB(3635),
      jB = GB(3659);

    function yB(BB, OB, GB, YB) {
      const DB = `${(0,oB.e)(BB,OB)}|sheets${GB}`;
      return YB === jB.c ? DB : `${DB}|layers${YB}`
    }
    var JB = GB(3663),
      MB = GB(3608),
      PB = GB(3597),
      zB = GB(3638);
    var lB = GB(54085);
    const pB = 256;
    let qB = null,
      ZB = null;

    function NB(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jB.c;
      if ((null === (OB = qB) || void 0 === OB ? void 0 : OB.pack) === BB.pack && qB.maxLayerWidth === GB) return qB.assets;
      const NB = (0, lB.f)(BB.pack, (0, lB.k)(BB));
      if (null === NB || !(0, DB.g)(NB)) return Promise.resolve(null);
      const WB = async function(BB, OB, GB) {
        var lB;
        const qB = null !== (lB = BB.textureOverrides) && void 0 !== lB ? lB : {},
          {
            id: NB,
            version: WB
          } = BB.metaData,
          AB = OB && NB !== YB.t.CUSTOM,
          VB = {};
        AB && (ZB = VB);
        let SB, nB, UB = AB ? await async function(BB, OB, GB, YB) {
          const DB = yB(BB, OB, GB, jB.c),
            QB = yB(BB, OB, GB, YB),
            JB = await (0, oB.k)((BB => BB === DB || BB === QB));
          return null !== JB && (YB === jB.c || JB.blockAtlasWidth <= YB) ? JB : null
        }(NB, WB, pB, GB): null;
        if (null === UB) {
          const {
            blockMetadata: BB,
            getDefaultTexture: OB,
            textureNameToIndex: QB
          } = await (0, DB.l)(), jB = (0, MB.e)(BB, ((BB, GB) => ({
            url: RB(qB, OB, BB, "block" === GB ? PB.h.BLOCK : PB.h.ITEM)
          }))), JB = await
          function(BB, OB, GB, YB, DB, QB) {
            return (0, zB.d)((oB => oB.WasmTextureWorker.generateRequired(BB, OB, GB, YB, DB, QB)))
          }(BB, QB, jB, NB === YB.e, GB, pB), lB = JB.assets;
          UB = {
            ...lB,
            averageColors: {}
          }, SB = JB.averageColors(), AB && (nB = SB.then((async BB => {
            null !== BB && ZB === VB && await
            function(BB, OB, GB, YB, DB) {
              return (0, oB.s)(yB(BB, OB, YB, DB), GB)
            }(NB, WB, {
              ...lB,
              averageColors: BB
            }, pB, JB.layerCap)
          })))
        }
        return function(BB, OB) {
          var GB, YB;
          let DB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((jB = BB.averageColors, 0 === Object.keys(null !== jB && void 0 !== jB ? jB : {}).length ? null : BB.averageColors)),
            oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var jB;
          const yB = null !== (GB = OB.textureOverrides) && void 0 !== GB ? GB : {},
            MB = null !== (YB = OB.modelOverrides) && void 0 !== YB ? YB : {},
            PB = 0 === Object.keys(MB).length ? {} : (0, QB.refusedPackModels)((0, QB.packDisplayName)(OB.metaData), MB, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: zB,
              rotatedBlockTextures: lB
            } = BB,
            pB = BB => {
              var OB, GB;
              return null !== (OB = null !== (GB = zB[BB]) && void 0 !== GB ? GB : lB[BB]) && void 0 !== OB ? OB : null
            };
          return {
            terrain: {
              atlasSheets: BB.blockAtlasArr,
              texture: pB
            },
            sheetPixels: [...BB.blockAtlasPixels],
            heldUntil: oB,
            sheetLayout: BB.imagesPerAtlas,
            sheetWidth: BB.blockAtlasWidth,
            armourAtlasUrl: BB.armourAtlas,
            texture: BB => {
              var OB, GB;
              return null !== (OB = null !== (GB = pB(BB)) && void 0 !== GB ? GB : (0, JB.d)(yB, BB)) && void 0 !== OB ? OB : null
            },
            model: BB => void 0 === PB[BB] && MB[BB] || null,
            averageColours: DB
          }
        }(UB, BB, SB, nB)
      }(NB, null === BB.gameSource, GB), AB = {
        pack: BB.pack,
        maxLayerWidth: GB,
        assets: WB
      };
      return qB = AB, WB.catch((() => {
        qB === AB && (qB = null)
      })), WB
    }

    function RB(BB, OB, YB, DB) {
      const QB = (0, JB.d)(BB, YB);
      if (QB) return QB;
      try {
        return OB(YB, DB).url
      } catch {
        return GB(3726)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);