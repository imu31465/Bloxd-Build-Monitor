export const id = 45;
export const ids = [45, 205];
export const modules = {
  34310: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      packDisplayName: () => JB,
      packModelMessage: () => mB,
      packModelSummary: () => kB,
      refusedPackModels: () => yB
    });
    var QB = zB(34319),
      nB = zB(34325);
    const dB = "DRACO",
      IB = 0,
      NB = 1,
      uB = 0,
      UB = 1,
      aB = 32768;

    function pB(BB) {
      const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let zB = 0;
      const QB = () => {
          if (zB >= BB.byteLength) throw new RangeError("past the stream");
          return BB[zB++]
        },
        nB = () => {
          if (zB + 4 > BB.byteLength) throw new RangeError("past the stream");
          const QB = jB.getUint32(zB, !0);
          return zB += 4, QB
        },
        pB = () => {
          let BB = 0;
          for (let jB = 0; jB < 35; jB += 7) {
            const zB = QB();
            if (BB += (127 & zB) * 2 ** jB, 0 === (128 & zB)) return BB
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let BB = 0; BB < dB.length; BB++)
          if (QB() !== dB.charCodeAt(BB)) return null;
        const jB = QB(),
          rB = QB(),
          sB = QB(),
          JB = QB(),
          mB = QB() | QB() << 8;
        if (2 !== jB) return null;
        0 !== (mB & aB) && function(BB, jB, zB) {
          const QB = () => {
              jB(zB())
            },
            nB = () => {
              let zB = 1,
                nB = !0;
              for (; zB > 0;) {
                zB--, nB || QB(), nB = !1;
                const dB = BB();
                for (let zB = 0; zB < dB; zB++) QB(), jB(BB());
                zB += BB()
              }
            },
            dB = BB();
          for (let IB = 0; IB < dB; IB++) BB(), nB();
          nB()
        }(pB, (jB => {
          if (zB + jB > BB.byteLength) throw new RangeError("past the stream");
          zB += jB
        }), QB);
        const yB = rB < 2 ? nB : pB;
        if (sB === IB) return {
          faces: 0,
          vertices: nB()
        };
        if (sB !== NB) return null;
        if (JB === uB) {
          return {
            faces: yB(),
            vertices: yB()
          }
        }
        if (JB !== UB) return null;
        QB(), rB < 2 && pB();
        const kB = pB();
        return {
          faces: pB(),
          vertices: kB
        }
      } catch {
        return null
      }
    }

    function rB(BB, jB, zB) {
      var QB, nB;
      if (null === (QB = null === (nB = BB.extensionsUsed) || void 0 === nB ? void 0 : nB.includes("KHR_draco_mesh_compression")) || void 0 === QB || !QB) return null;
      for (const JB of null !== (dB = BB.meshes) && void 0 !== dB ? dB : []) {
        var dB;
        for (const QB of JB.primitives) {
          var IB, NB, uB, UB, aB, rB;
          const nB = null === (IB = QB.extensions) || void 0 === IB ? void 0 : IB.KHR_draco_mesh_compression;
          if ("object" !== typeof nB || null === nB) continue;
          const dB = null === (NB = BB.bufferViews) || void 0 === NB ? void 0 : NB[nB.bufferView];
          if (null === jB || void 0 === dB) return sB;
          const JB = null !== (uB = dB.byteOffset) && void 0 !== uB ? uB : 0,
            mB = pB(jB.subarray(JB, JB + dB.byteLength));
          if (null === mB && !zB) continue;
          const yB = null !== (UB = BB.accessors) && void 0 !== UB ? UB : [],
            kB = null === (aB = yB[QB.attributes.POSITION]) || void 0 === aB ? void 0 : aB.count,
            GB = void 0 === QB.indices ? 0 : null === (rB = yB[QB.indices]) || void 0 === rB ? void 0 : rB.count;
          if (null === mB || void 0 === kB || void 0 === GB || 3 * mB.faces !== GB || mB.vertices > kB) return sB
        }
      }
      return null
    }
    const sB = "has a Draco stream whose counts don't match its accessors";

    function JB(BB) {
      var jB;
      return null !== (jB = BB.name) && void 0 !== jB ? jB : BB.fromFolderName || BB.id
    }

    function mB(BB, jB, zB) {
      return `Texture pack "${BB}": model "${jB}" was not loaded because it ${zB}. The default model is used instead.`
    }

    function yB(BB, jB, zB) {
      let {
        strictDraco: dB = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const IB = {};
      for (const [NB, uB] of Object.entries(jB)) {
        let jB;
        if (uB.startsWith("data:")) try {
          const BB = new Uint8Array((0, nB.t)(uB));
          if (jB = (0, QB.c)(BB), null === jB) {
            const {
              json: zB,
              bin: QB
            } = (0, nB.z)(BB);
            jB = rB(zB, QB, dB)
          }
        } catch {
          jB = "is not a binary glTF 2.0 file"
        } else jB = "loads data from outside the file";
        jB && (IB[NB] = jB, zB && console.warn(mB(BB, NB, jB)))
      }
      return IB
    }

    function kB(BB, jB) {
      const zB = Object.keys(jB);
      if (0 === zB.length) return null;
      if (1 === zB.length) return mB(BB, zB[0], jB[zB[0]]);
      const QB = zB.map((BB => `"${BB}" ${jB[BB]}`)).join("; ");
      return `Texture pack "${BB}": ${zB.length} models were not loaded (${QB}). The default models are used instead.`
    }
  },
  61649: (BB, jB, zB) => {
    zB.d(jB, {
      packAssets: () => kB
    });
    var QB = zB(2206),
      nB = zB(2201),
      dB = zB(34310),
      IB = zB(3313),
      NB = zB(3340);

    function uB(BB, jB, zB, QB) {
      const nB = `${(0,IB.b)(BB,jB)}|sheets${zB}`;
      return QB === NB.e ? nB : `${nB}|layers${QB}`
    }
    var UB = zB(3349),
      aB = zB(3292),
      pB = zB(3282),
      rB = zB(3316);
    var sB = zB(51168);
    const JB = 256;
    let mB = null,
      yB = null;

    function kB(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB.e;
      if ((null === (jB = mB) || void 0 === jB ? void 0 : jB.pack) === BB.pack && mB.maxLayerWidth === zB) return mB.assets;
      const kB = (0, sB.e)(BB.pack, (0, sB.m)(BB));
      if (null === kB || !(0, nB.f)(kB)) return Promise.resolve(null);
      const LB = async function(BB, jB, zB) {
        var sB;
        const mB = null !== (sB = BB.textureOverrides) && void 0 !== sB ? sB : {},
          {
            id: kB,
            version: LB
          } = BB.metaData,
          gB = jB && kB !== QB.o.CUSTOM,
          tB = {};
        gB && (yB = tB);
        let SB, MB, EB = gB ? await async function(BB, jB, zB, QB) {
          const nB = uB(BB, jB, zB, NB.e),
            dB = uB(BB, jB, zB, QB),
            UB = await (0, IB.j)((BB => BB === nB || BB === dB));
          return null !== UB && (QB === NB.e || UB.blockAtlasWidth <= QB) ? UB : null
        }(kB, LB, JB, zB): null;
        if (null === EB) {
          const {
            blockMetadata: BB,
            getDefaultTexture: jB,
            textureNameToIndex: dB
          } = await (0, nB.k)(), NB = (0, aB.b)(BB, ((BB, zB) => ({
            url: GB(mB, jB, BB, "block" === zB ? pB.e.BLOCK : pB.e.ITEM)
          }))), UB = await
          function(BB, jB, zB, QB, nB, dB) {
            return (0, rB.e)((IB => IB.WasmTextureWorker.generateRequired(BB, jB, zB, QB, nB, dB)))
          }(BB, dB, NB, kB === QB.d, zB, JB), sB = UB.assets;
          EB = {
            ...sB,
            averageColors: {}
          }, SB = UB.averageColors(), gB && (MB = SB.then((async BB => {
            null !== BB && yB === tB && await
            function(BB, jB, zB, QB, nB) {
              return (0, IB.o)(uB(BB, jB, QB, nB), zB)
            }(kB, LB, {
              ...sB,
              averageColors: BB
            }, JB, UB.layerCap)
          })))
        }
        return function(BB, jB) {
          var zB, QB;
          let nB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((NB = BB.averageColors, 0 === Object.keys(null !== NB && void 0 !== NB ? NB : {}).length ? null : BB.averageColors)),
            IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var NB;
          const uB = null !== (zB = jB.textureOverrides) && void 0 !== zB ? zB : {},
            aB = null !== (QB = jB.modelOverrides) && void 0 !== QB ? QB : {},
            pB = 0 === Object.keys(aB).length ? {} : (0, dB.refusedPackModels)((0, dB.packDisplayName)(jB.metaData), aB, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: rB,
              rotatedBlockTextures: sB
            } = BB,
            JB = BB => {
              var jB, zB;
              return null !== (jB = null !== (zB = rB[BB]) && void 0 !== zB ? zB : sB[BB]) && void 0 !== jB ? jB : null
            };
          return {
            terrain: {
              atlasSheets: BB.blockAtlasArr,
              texture: JB
            },
            sheetPixels: [...BB.blockAtlasPixels],
            heldUntil: IB,
            sheetLayout: BB.imagesPerAtlas,
            sheetWidth: BB.blockAtlasWidth,
            armourAtlasUrl: BB.armourAtlas,
            texture: BB => {
              var jB, zB;
              return null !== (jB = null !== (zB = JB(BB)) && void 0 !== zB ? zB : (0, UB.b)(uB, BB)) && void 0 !== jB ? jB : null
            },
            model: BB => void 0 === pB[BB] && aB[BB] || null,
            averageColours: nB
          }
        }(EB, BB, SB, MB)
      }(kB, null === BB.gameSource, zB), gB = {
        pack: BB.pack,
        maxLayerWidth: zB,
        assets: LB
      };
      return mB = gB, LB.catch((() => {
        mB === gB && (mB = null)
      })), LB
    }

    function GB(BB, jB, QB, nB) {
      const dB = (0, UB.b)(BB, QB);
      if (dB) return dB;
      try {
        return jB(QB, nB).url
      } catch {
        return zB(3426)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);