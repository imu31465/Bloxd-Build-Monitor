export const id = 45;
export const ids = [45, 205];
export const modules = {
  34256: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      packDisplayName: () => NB,
      packModelMessage: () => gB,
      packModelSummary: () => yB,
      refusedPackModels: () => qB
    });
    var TB = ZB(34261),
      JB = ZB(34269);
    const oB = "DRACO",
      GB = 0,
      vB = 1,
      kB = 0,
      cB = 1,
      nB = 32768;

    function hB(BB) {
      const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let ZB = 0;
      const TB = () => {
          if (ZB >= BB.byteLength) throw new RangeError("past the stream");
          return BB[ZB++]
        },
        JB = () => {
          if (ZB + 4 > BB.byteLength) throw new RangeError("past the stream");
          const TB = IB.getUint32(ZB, !0);
          return ZB += 4, TB
        },
        hB = () => {
          let BB = 0;
          for (let IB = 0; IB < 35; IB += 7) {
            const ZB = TB();
            if (BB += (127 & ZB) * 2 ** IB, 0 === (128 & ZB)) return BB
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let BB = 0; BB < oB.length; BB++)
          if (TB() !== oB.charCodeAt(BB)) return null;
        const IB = TB(),
          zB = TB(),
          FB = TB(),
          NB = TB(),
          gB = TB() | TB() << 8;
        if (2 !== IB) return null;
        0 !== (gB & nB) && function(BB, IB, ZB) {
          const TB = () => {
              IB(ZB())
            },
            JB = () => {
              let ZB = 1,
                JB = !0;
              for (; ZB > 0;) {
                ZB--, JB || TB(), JB = !1;
                const oB = BB();
                for (let ZB = 0; ZB < oB; ZB++) TB(), IB(BB());
                ZB += BB()
              }
            },
            oB = BB();
          for (let GB = 0; GB < oB; GB++) BB(), JB();
          JB()
        }(hB, (IB => {
          if (ZB + IB > BB.byteLength) throw new RangeError("past the stream");
          ZB += IB
        }), TB);
        const qB = zB < 2 ? JB : hB;
        if (FB === GB) return {
          faces: 0,
          vertices: JB()
        };
        if (FB !== vB) return null;
        if (NB === kB) {
          return {
            faces: qB(),
            vertices: qB()
          }
        }
        if (NB !== cB) return null;
        TB(), zB < 2 && hB();
        const yB = hB();
        return {
          faces: hB(),
          vertices: yB
        }
      } catch {
        return null
      }
    }

    function zB(BB, IB, ZB) {
      var TB, JB;
      if (null === (TB = null === (JB = BB.extensionsUsed) || void 0 === JB ? void 0 : JB.includes("KHR_draco_mesh_compression")) || void 0 === TB || !TB) return null;
      for (const NB of null !== (oB = BB.meshes) && void 0 !== oB ? oB : []) {
        var oB;
        for (const TB of NB.primitives) {
          var GB, vB, kB, cB, nB, zB;
          const JB = null === (GB = TB.extensions) || void 0 === GB ? void 0 : GB.KHR_draco_mesh_compression;
          if ("object" !== typeof JB || null === JB) continue;
          const oB = null === (vB = BB.bufferViews) || void 0 === vB ? void 0 : vB[JB.bufferView];
          if (null === IB || void 0 === oB) return FB;
          const NB = null !== (kB = oB.byteOffset) && void 0 !== kB ? kB : 0,
            gB = hB(IB.subarray(NB, NB + oB.byteLength));
          if (null === gB && !ZB) continue;
          const qB = null !== (cB = BB.accessors) && void 0 !== cB ? cB : [],
            yB = null === (nB = qB[TB.attributes.POSITION]) || void 0 === nB ? void 0 : nB.count,
            UB = void 0 === TB.indices ? 0 : null === (zB = qB[TB.indices]) || void 0 === zB ? void 0 : zB.count;
          if (null === gB || void 0 === yB || void 0 === UB || 3 * gB.faces !== UB || gB.vertices > yB) return FB
        }
      }
      return null
    }
    const FB = "has a Draco stream whose counts don't match its accessors";

    function NB(BB) {
      var IB;
      return null !== (IB = BB.name) && void 0 !== IB ? IB : BB.fromFolderName || BB.id
    }

    function gB(BB, IB, ZB) {
      return `Texture pack "${BB}": model "${IB}" was not loaded because it ${ZB}. The default model is used instead.`
    }

    function qB(BB, IB, ZB) {
      let {
        strictDraco: oB = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const GB = {};
      for (const [vB, kB] of Object.entries(IB)) {
        let IB;
        if (kB.startsWith("data:")) try {
          const BB = new Uint8Array((0, JB.u)(kB));
          if (IB = (0, TB.b)(BB), null === IB) {
            const {
              json: ZB,
              bin: TB
            } = (0, JB.C)(BB);
            IB = zB(ZB, TB, oB)
          }
        } catch {
          IB = "is not a binary glTF 2.0 file"
        } else IB = "loads data from outside the file";
        IB && (GB[vB] = IB, ZB && console.warn(gB(BB, vB, IB)))
      }
      return GB
    }

    function yB(BB, IB) {
      const ZB = Object.keys(IB);
      if (0 === ZB.length) return null;
      if (1 === ZB.length) return gB(BB, ZB[0], IB[ZB[0]]);
      const TB = ZB.map((BB => `"${BB}" ${IB[BB]}`)).join("; ");
      return `Texture pack "${BB}": ${ZB.length} models were not loaded (${TB}). The default models are used instead.`
    }
  },
  61517: (BB, IB, ZB) => {
    ZB.d(IB, {
      packAssets: () => yB
    });
    var TB = ZB(2236),
      JB = ZB(2224),
      oB = ZB(34256),
      GB = ZB(3376),
      vB = ZB(3409);

    function kB(BB, IB, ZB, TB) {
      const JB = `${(0,GB.b)(BB,IB)}|sheets${ZB}`;
      return TB === vB.d ? JB : `${JB}|layers${TB}`
    }
    var cB = ZB(3412),
      nB = ZB(3353),
      hB = ZB(3340),
      zB = ZB(3383);
    var FB = ZB(51082);
    const NB = 256;
    let gB = null,
      qB = null;

    function yB(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vB.d;
      if ((null === (IB = gB) || void 0 === IB ? void 0 : IB.pack) === BB.pack && gB.maxLayerWidth === ZB) return gB.assets;
      const yB = (0, FB.d)(BB.pack, (0, FB.i)(BB));
      if (null === yB || !(0, JB.g)(yB)) return Promise.resolve(null);
      const WB = async function(BB, IB, ZB) {
        var FB;
        const gB = null !== (FB = BB.textureOverrides) && void 0 !== FB ? FB : {},
          {
            id: yB,
            version: WB
          } = BB.metaData,
          dB = IB && yB !== TB.q.CUSTOM,
          CB = {};
        dB && (qB = CB);
        let QB, sB, wB = dB ? await async function(BB, IB, ZB, TB) {
          const JB = kB(BB, IB, ZB, vB.d),
            oB = kB(BB, IB, ZB, TB),
            cB = await (0, GB.g)((BB => BB === JB || BB === oB));
          return null !== cB && (TB === vB.d || cB.blockAtlasWidth <= TB) ? cB : null
        }(yB, WB, NB, ZB): null;
        if (null === wB) {
          const {
            blockMetadata: BB,
            getDefaultTexture: IB,
            textureNameToIndex: oB
          } = await (0, JB.o)(), vB = (0, nB.c)(BB, ((BB, ZB) => ({
            url: UB(gB, IB, BB, "block" === ZB ? hB.d.BLOCK : hB.d.ITEM)
          }))), cB = await
          function(BB, IB, ZB, TB, JB, oB) {
            return (0, zB.c)((GB => GB.WasmTextureWorker.generateRequired(BB, IB, ZB, TB, JB, oB)))
          }(BB, oB, vB, yB === TB.e, ZB, NB), FB = cB.assets;
          wB = {
            ...FB,
            averageColors: {}
          }, QB = cB.averageColors(), dB && (sB = QB.then((async BB => {
            null !== BB && qB === CB && await
            function(BB, IB, ZB, TB, JB) {
              return (0, GB.m)(kB(BB, IB, TB, JB), ZB)
            }(yB, WB, {
              ...FB,
              averageColors: BB
            }, NB, cB.layerCap)
          })))
        }
        return function(BB, IB) {
          var ZB, TB;
          let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((vB = BB.averageColors, 0 === Object.keys(null !== vB && void 0 !== vB ? vB : {}).length ? null : BB.averageColors)),
            GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var vB;
          const kB = null !== (ZB = IB.textureOverrides) && void 0 !== ZB ? ZB : {},
            nB = null !== (TB = IB.modelOverrides) && void 0 !== TB ? TB : {},
            hB = 0 === Object.keys(nB).length ? {} : (0, oB.refusedPackModels)((0, oB.packDisplayName)(IB.metaData), nB, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: zB,
              rotatedBlockTextures: FB
            } = BB,
            NB = BB => {
              var IB, ZB;
              return null !== (IB = null !== (ZB = zB[BB]) && void 0 !== ZB ? ZB : FB[BB]) && void 0 !== IB ? IB : null
            };
          return {
            terrain: {
              atlasSheets: BB.blockAtlasArr,
              texture: NB
            },
            sheetPixels: [...BB.blockAtlasPixels],
            heldUntil: GB,
            sheetLayout: BB.imagesPerAtlas,
            sheetWidth: BB.blockAtlasWidth,
            armourAtlasUrl: BB.armourAtlas,
            texture: BB => {
              var IB, ZB;
              return null !== (IB = null !== (ZB = NB(BB)) && void 0 !== ZB ? ZB : (0, cB.b)(kB, BB)) && void 0 !== IB ? IB : null
            },
            model: BB => void 0 === hB[BB] && nB[BB] || null,
            averageColours: JB
          }
        }(wB, BB, QB, sB)
      }(yB, null === BB.gameSource, ZB), dB = {
        pack: BB.pack,
        maxLayerWidth: ZB,
        assets: WB
      };
      return gB = dB, WB.catch((() => {
        gB === dB && (gB = null)
      })), WB
    }

    function UB(BB, IB, TB, JB) {
      const oB = (0, cB.b)(BB, TB);
      if (oB) return oB;
      try {
        return IB(TB, JB).url
      } catch {
        return ZB(3492)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);