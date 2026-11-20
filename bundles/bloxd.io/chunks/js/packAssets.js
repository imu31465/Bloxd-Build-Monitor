export const id = 44;
export const ids = [44, 194];
export const modules = {
  9072: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      packDisplayName: () => ek,
      packModelMessage: () => yk,
      packModelSummary: () => mk,
      refusedPackModels: () => fk
    });
    var Rk = Bk(9077),
      tk = Bk(9079);
    const ak = "DRACO",
      Xk = 0,
      bk = 1,
      wk = 0,
      dk = 1,
      sk = 32768;

    function Vk(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let Bk = 0;
      const Rk = () => {
          if (Bk >= kk.byteLength) throw new RangeError("past the stream");
          return kk[Bk++]
        },
        tk = () => {
          if (Bk + 4 > kk.byteLength) throw new RangeError("past the stream");
          const Rk = Fk.getUint32(Bk, !0);
          return Bk += 4, Rk
        },
        Vk = () => {
          let kk = 0;
          for (let Fk = 0; Fk < 35; Fk += 7) {
            const Bk = Rk();
            if (kk += (127 & Bk) * 2 ** Fk, 0 === (128 & Bk)) return kk
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let kk = 0; kk < ak.length; kk++)
          if (Rk() !== ak.charCodeAt(kk)) return null;
        const Fk = Rk(),
          Jk = Rk(),
          Ak = Rk(),
          ek = Rk(),
          yk = Rk() | Rk() << 8;
        if (2 !== Fk) return null;
        0 !== (yk & sk) && function(kk, Fk, Bk) {
          const Rk = () => {
              Fk(Bk())
            },
            tk = () => {
              let Bk = 1,
                tk = !0;
              for (; Bk > 0;) {
                Bk--, tk || Rk(), tk = !1;
                const ak = kk();
                for (let Bk = 0; Bk < ak; Bk++) Rk(), Fk(kk());
                Bk += kk()
              }
            },
            ak = kk();
          for (let Xk = 0; Xk < ak; Xk++) kk(), tk();
          tk()
        }(Vk, (Fk => {
          if (Bk + Fk > kk.byteLength) throw new RangeError("past the stream");
          Bk += Fk
        }), Rk);
        const fk = Jk < 2 ? tk : Vk;
        if (Ak === Xk) return {
          faces: 0,
          vertices: tk()
        };
        if (Ak !== bk) return null;
        if (ek === wk) {
          return {
            faces: fk(),
            vertices: fk()
          }
        }
        if (ek !== dk) return null;
        Rk(), Jk < 2 && Vk();
        const mk = Vk();
        return {
          faces: Vk(),
          vertices: mk
        }
      } catch {
        return null
      }
    }

    function Jk(kk, Fk, Bk) {
      var Rk, tk;
      if (null === (Rk = null === (tk = kk.extensionsUsed) || void 0 === tk ? void 0 : tk.includes("KHR_draco_mesh_compression")) || void 0 === Rk || !Rk) return null;
      for (const ek of null !== (ak = kk.meshes) && void 0 !== ak ? ak : []) {
        var ak;
        for (const Rk of ek.primitives) {
          var Xk, bk, wk, dk, sk, Jk;
          const tk = null === (Xk = Rk.extensions) || void 0 === Xk ? void 0 : Xk.KHR_draco_mesh_compression;
          if ("object" !== typeof tk || null === tk) continue;
          const ak = null === (bk = kk.bufferViews) || void 0 === bk ? void 0 : bk[tk.bufferView];
          if (null === Fk || void 0 === ak) return Ak;
          const ek = null !== (wk = ak.byteOffset) && void 0 !== wk ? wk : 0,
            yk = Vk(Fk.subarray(ek, ek + ak.byteLength));
          if (null === yk && !Bk) continue;
          const fk = null !== (dk = kk.accessors) && void 0 !== dk ? dk : [],
            mk = null === (sk = fk[Rk.attributes.POSITION]) || void 0 === sk ? void 0 : sk.count,
            Wk = void 0 === Rk.indices ? 0 : null === (Jk = fk[Rk.indices]) || void 0 === Jk ? void 0 : Jk.count;
          if (null === yk || void 0 === mk || void 0 === Wk || 3 * yk.faces !== Wk || yk.vertices > mk) return Ak
        }
      }
      return null
    }
    const Ak = "has a Draco stream whose counts don't match its accessors";

    function ek(kk) {
      var Fk;
      return null !== (Fk = kk.name) && void 0 !== Fk ? Fk : kk.fromFolderName || kk.id
    }

    function yk(kk, Fk, Bk) {
      return `Texture pack "${kk}": model "${Fk}" was not loaded because it ${Bk}. The default model is used instead.`
    }

    function fk(kk, Fk, Bk) {
      let {
        strictDraco: ak = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Xk = {};
      for (const [bk, wk] of Object.entries(Fk)) {
        let Fk;
        if (wk.startsWith("data:")) try {
          const kk = new Uint8Array((0, tk.m)(wk));
          if (Fk = (0, Rk.b)(kk), null === Fk) {
            const {
              json: Bk,
              bin: Rk
            } = (0, tk.u)(kk);
            Fk = Jk(Bk, Rk, ak)
          }
        } catch {
          Fk = "is not a binary glTF 2.0 file"
        } else Fk = "loads data from outside the file";
        Fk && (Xk[bk] = Fk, Bk && console.warn(yk(kk, bk, Fk)))
      }
      return Xk
    }

    function mk(kk, Fk) {
      const Bk = Object.keys(Fk);
      if (0 === Bk.length) return null;
      if (1 === Bk.length) return yk(kk, Bk[0], Fk[Bk[0]]);
      const Rk = Bk.map((kk => `"${kk}" ${Fk[kk]}`)).join("; ");
      return `Texture pack "${kk}": ${Bk.length} models were not loaded (${Rk}). The default models are used instead.`
    }
  },
  61249: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      packAssets: () => mk
    });
    var Rk = Bk(2954),
      tk = Bk(2992),
      ak = Bk(9072),
      Xk = Bk(3015),
      bk = Bk(3065);

    function wk(kk, Fk, Bk, Rk) {
      const tk = `${(0,Xk.c)(kk,Fk)}|sheets${Bk}`;
      return Rk === bk.d ? tk : `${tk}|layers${Rk}`
    }
    var dk = Bk(3068),
      sk = Bk(2972),
      Vk = Bk(2961),
      Jk = Bk(3021);
    var Ak = Bk(42786);
    const ek = 256;
    let yk = null,
      fk = null;

    function mk(kk) {
      var Fk;
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.d;
      if ((null === (Fk = yk) || void 0 === Fk ? void 0 : Fk.pack) === kk.pack && yk.maxLayerWidth === Bk) return yk.assets;
      const mk = (0, Ak.f)(kk.pack, (0, Ak.h)(kk));
      if (null === mk || !(0, tk.c)(mk)) return Promise.resolve(null);
      const vk = async function(kk, Fk, Bk) {
        var Ak;
        const yk = null !== (Ak = kk.textureOverrides) && void 0 !== Ak ? Ak : {},
          {
            id: mk,
            version: vk
          } = kk.metaData,
          ik = Fk && mk !== Rk.p.CUSTOM,
          Yk = {};
        ik && (fk = Yk);
        let Lk, Ok, Ek = ik ? await async function(kk, Fk, Bk, Rk) {
          const tk = wk(kk, Fk, Bk, bk.d),
            ak = wk(kk, Fk, Bk, Rk),
            dk = await (0, Xk.i)((kk => kk === tk || kk === ak));
          return null !== dk && (Rk === bk.d || dk.blockAtlasWidth <= Rk) ? dk : null
        }(mk, vk, ek, Bk): null;
        if (null === Ek) {
          const {
            blockMetadata: kk,
            getDefaultTexture: Fk,
            textureNameToIndex: ak
          } = await (0, tk.h)(), bk = (0, sk.d)(kk, ((kk, Bk) => ({
            url: Wk(yk, Fk, kk, "block" === Bk ? Vk.e.BLOCK : Vk.e.ITEM)
          }))), dk = await
          function(kk, Fk, Bk, Rk, tk, ak) {
            return (0, Jk.b)((Xk => Xk.WasmTextureWorker.generateRequired(kk, Fk, Bk, Rk, tk, ak)))
          }(kk, ak, bk, mk === Rk.c, Bk, ek), Ak = dk.assets;
          Ek = {
            ...Ak,
            averageColors: {}
          }, Lk = dk.averageColors(), ik && (Ok = Lk.then((async kk => {
            null !== kk && fk === Yk && await
            function(kk, Fk, Bk, Rk, tk) {
              return (0, Xk.o)(wk(kk, Fk, Rk, tk), Bk)
            }(mk, vk, {
              ...Ak,
              averageColors: kk
            }, ek, dk.layerCap)
          })))
        }
        return function(kk, Fk) {
          var Bk, Rk;
          let tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((bk = kk.averageColors, 0 === Object.keys(null !== bk && void 0 !== bk ? bk : {}).length ? null : kk.averageColors)),
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var bk;
          const wk = null !== (Bk = Fk.textureOverrides) && void 0 !== Bk ? Bk : {},
            sk = null !== (Rk = Fk.modelOverrides) && void 0 !== Rk ? Rk : {},
            Vk = 0 === Object.keys(sk).length ? {} : (0, ak.refusedPackModels)((0, ak.packDisplayName)(Fk.metaData), sk, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Jk,
              rotatedBlockTextures: Ak
            } = kk,
            ek = kk => {
              var Fk, Bk;
              return null !== (Fk = null !== (Bk = Jk[kk]) && void 0 !== Bk ? Bk : Ak[kk]) && void 0 !== Fk ? Fk : null
            };
          return {
            terrain: {
              atlasSheets: kk.blockAtlasArr,
              texture: ek
            },
            sheetPixels: [...kk.blockAtlasPixels],
            heldUntil: Xk,
            sheetLayout: kk.imagesPerAtlas,
            sheetWidth: kk.blockAtlasWidth,
            armourAtlasUrl: kk.armourAtlas,
            texture: kk => {
              var Fk, Bk;
              return null !== (Fk = null !== (Bk = ek(kk)) && void 0 !== Bk ? Bk : (0, dk.c)(wk, kk)) && void 0 !== Fk ? Fk : null
            },
            model: kk => void 0 === Vk[kk] && sk[kk] || null,
            averageColours: tk
          }
        }(Ek, kk, Lk, Ok)
      }(mk, null === kk.gameSource, Bk), ik = {
        pack: kk.pack,
        maxLayerWidth: Bk,
        assets: vk
      };
      return yk = ik, vk.catch((() => {
        yk === ik && (yk = null)
      })), vk
    }

    function Wk(kk, Fk, Rk, tk) {
      const ak = (0, dk.c)(kk, Rk);
      if (ak) return ak;
      try {
        return Fk(Rk, tk).url
      } catch {
        return Bk(3111)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);