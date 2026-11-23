export const id = 44;
export const ids = [44, 202];
export const modules = {
  34255: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      packDisplayName: () => ek,
      packModelMessage: () => wk,
      packModelSummary: () => Jk,
      refusedPackModels: () => Hk
    });
    var Xk = Ik(34257),
      Tk = Ik(34262);
    const ik = "DRACO",
      yk = 0,
      lk = 1,
      ak = 0,
      qk = 1,
      Lk = 32768;

    function tk(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let Ik = 0;
      const Xk = () => {
          if (Ik >= kk.byteLength) throw new RangeError("past the stream");
          return kk[Ik++]
        },
        Tk = () => {
          if (Ik + 4 > kk.byteLength) throw new RangeError("past the stream");
          const Xk = Fk.getUint32(Ik, !0);
          return Ik += 4, Xk
        },
        tk = () => {
          let kk = 0;
          for (let Fk = 0; Fk < 35; Fk += 7) {
            const Ik = Xk();
            if (kk += (127 & Ik) * 2 ** Fk, 0 === (128 & Ik)) return kk
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let kk = 0; kk < ik.length; kk++)
          if (Xk() !== ik.charCodeAt(kk)) return null;
        const Fk = Xk(),
          Zk = Xk(),
          jk = Xk(),
          ek = Xk(),
          wk = Xk() | Xk() << 8;
        if (2 !== Fk) return null;
        0 !== (wk & Lk) && function(kk, Fk, Ik) {
          const Xk = () => {
              Fk(Ik())
            },
            Tk = () => {
              let Ik = 1,
                Tk = !0;
              for (; Ik > 0;) {
                Ik--, Tk || Xk(), Tk = !1;
                const ik = kk();
                for (let Ik = 0; Ik < ik; Ik++) Xk(), Fk(kk());
                Ik += kk()
              }
            },
            ik = kk();
          for (let yk = 0; yk < ik; yk++) kk(), Tk();
          Tk()
        }(tk, (Fk => {
          if (Ik + Fk > kk.byteLength) throw new RangeError("past the stream");
          Ik += Fk
        }), Xk);
        const Hk = Zk < 2 ? Tk : tk;
        if (jk === yk) return {
          faces: 0,
          vertices: Tk()
        };
        if (jk !== lk) return null;
        if (ek === ak) {
          return {
            faces: Hk(),
            vertices: Hk()
          }
        }
        if (ek !== qk) return null;
        Xk(), Zk < 2 && tk();
        const Jk = tk();
        return {
          faces: tk(),
          vertices: Jk
        }
      } catch {
        return null
      }
    }

    function Zk(kk, Fk, Ik) {
      var Xk, Tk;
      if (null === (Xk = null === (Tk = kk.extensionsUsed) || void 0 === Tk ? void 0 : Tk.includes("KHR_draco_mesh_compression")) || void 0 === Xk || !Xk) return null;
      for (const ek of null !== (ik = kk.meshes) && void 0 !== ik ? ik : []) {
        var ik;
        for (const Xk of ek.primitives) {
          var yk, lk, ak, qk, Lk, Zk;
          const Tk = null === (yk = Xk.extensions) || void 0 === yk ? void 0 : yk.KHR_draco_mesh_compression;
          if ("object" !== typeof Tk || null === Tk) continue;
          const ik = null === (lk = kk.bufferViews) || void 0 === lk ? void 0 : lk[Tk.bufferView];
          if (null === Fk || void 0 === ik) return jk;
          const ek = null !== (ak = ik.byteOffset) && void 0 !== ak ? ak : 0,
            wk = tk(Fk.subarray(ek, ek + ik.byteLength));
          if (null === wk && !Ik) continue;
          const Hk = null !== (qk = kk.accessors) && void 0 !== qk ? qk : [],
            Jk = null === (Lk = Hk[Xk.attributes.POSITION]) || void 0 === Lk ? void 0 : Lk.count,
            xk = void 0 === Xk.indices ? 0 : null === (Zk = Hk[Xk.indices]) || void 0 === Zk ? void 0 : Zk.count;
          if (null === wk || void 0 === Jk || void 0 === xk || 3 * wk.faces !== xk || wk.vertices > Jk) return jk
        }
      }
      return null
    }
    const jk = "has a Draco stream whose counts don't match its accessors";

    function ek(kk) {
      var Fk;
      return null !== (Fk = kk.name) && void 0 !== Fk ? Fk : kk.fromFolderName || kk.id
    }

    function wk(kk, Fk, Ik) {
      return `Texture pack "${kk}": model "${Fk}" was not loaded because it ${Ik}. The default model is used instead.`
    }

    function Hk(kk, Fk, Ik) {
      let {
        strictDraco: ik = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yk = {};
      for (const [lk, ak] of Object.entries(Fk)) {
        let Fk;
        if (ak.startsWith("data:")) try {
          const kk = new Uint8Array((0, Tk.p)(ak));
          if (Fk = (0, Xk.b)(kk), null === Fk) {
            const {
              json: Ik,
              bin: Xk
            } = (0, Tk.v)(kk);
            Fk = Zk(Ik, Xk, ik)
          }
        } catch {
          Fk = "is not a binary glTF 2.0 file"
        } else Fk = "loads data from outside the file";
        Fk && (yk[lk] = Fk, Ik && console.warn(wk(kk, lk, Fk)))
      }
      return yk
    }

    function Jk(kk, Fk) {
      const Ik = Object.keys(Fk);
      if (0 === Ik.length) return null;
      if (1 === Ik.length) return wk(kk, Ik[0], Fk[Ik[0]]);
      const Xk = Ik.map((kk => `"${kk}" ${Fk[kk]}`)).join("; ");
      return `Texture pack "${kk}": ${Ik.length} models were not loaded (${Xk}). The default models are used instead.`
    }
  },
  61481: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      packAssets: () => Jk
    });
    var Xk = Ik(2071),
      Tk = Ik(2059),
      ik = Ik(34255),
      yk = Ik(3151),
      lk = Ik(3170);

    function ak(kk, Fk, Ik, Xk) {
      const Tk = `${(0,yk.c)(kk,Fk)}|sheets${Ik}`;
      return Xk === lk.d ? Tk : `${Tk}|layers${Xk}`
    }
    var qk = Ik(3173),
      Lk = Ik(3124),
      tk = Ik(3110),
      Zk = Ik(3154);
    var jk = Ik(50988);
    const ek = 256;
    let wk = null,
      Hk = null;

    function Jk(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lk.d;
      if ((null === (Fk = wk) || void 0 === Fk ? void 0 : Fk.pack) === kk.pack && wk.maxLayerWidth === Ik) return wk.assets;
      const Jk = (0, jk.f)(kk.pack, (0, jk.h)(kk));
      if (null === Jk || !(0, Tk.h)(Jk)) return Promise.resolve(null);
      const Pk = async function(kk, Fk, Ik) {
        var jk;
        const wk = null !== (jk = kk.textureOverrides) && void 0 !== jk ? jk : {},
          {
            id: Jk,
            version: Pk
          } = kk.metaData,
          Kk = Fk && Jk !== Xk.l.CUSTOM,
          Qk = {};
        Kk && (Hk = Qk);
        let sk, Vk, zk = Kk ? await async function(kk, Fk, Ik, Xk) {
          const Tk = ak(kk, Fk, Ik, lk.d),
            ik = ak(kk, Fk, Ik, Xk),
            qk = await (0, yk.f)((kk => kk === Tk || kk === ik));
          return null !== qk && (Xk === lk.d || qk.blockAtlasWidth <= Xk) ? qk : null
        }(Jk, Pk, ek, Ik): null;
        if (null === zk) {
          const {
            blockMetadata: kk,
            getDefaultTexture: Fk,
            textureNameToIndex: ik
          } = await (0, Tk.o)(), lk = (0, Lk.c)(kk, ((kk, Ik) => ({
            url: xk(wk, Fk, kk, "block" === Ik ? tk.c.BLOCK : tk.c.ITEM)
          }))), qk = await
          function(kk, Fk, Ik, Xk, Tk, ik) {
            return (0, Zk.e)((yk => yk.WasmTextureWorker.generateRequired(kk, Fk, Ik, Xk, Tk, ik)))
          }(kk, ik, lk, Jk === Xk.b, Ik, ek), jk = qk.assets;
          zk = {
            ...jk,
            averageColors: {}
          }, sk = qk.averageColors(), Kk && (Vk = sk.then((async kk => {
            null !== kk && Hk === Qk && await
            function(kk, Fk, Ik, Xk, Tk) {
              return (0, yk.i)(ak(kk, Fk, Xk, Tk), Ik)
            }(Jk, Pk, {
              ...jk,
              averageColors: kk
            }, ek, qk.layerCap)
          })))
        }
        return function(kk, Fk) {
          var Ik, Xk;
          let Tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((lk = kk.averageColors, 0 === Object.keys(null !== lk && void 0 !== lk ? lk : {}).length ? null : kk.averageColors)),
            yk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var lk;
          const ak = null !== (Ik = Fk.textureOverrides) && void 0 !== Ik ? Ik : {},
            Lk = null !== (Xk = Fk.modelOverrides) && void 0 !== Xk ? Xk : {},
            tk = 0 === Object.keys(Lk).length ? {} : (0, ik.refusedPackModels)((0, ik.packDisplayName)(Fk.metaData), Lk, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Zk,
              rotatedBlockTextures: jk
            } = kk,
            ek = kk => {
              var Fk, Ik;
              return null !== (Fk = null !== (Ik = Zk[kk]) && void 0 !== Ik ? Ik : jk[kk]) && void 0 !== Fk ? Fk : null
            };
          return {
            terrain: {
              atlasSheets: kk.blockAtlasArr,
              texture: ek
            },
            sheetPixels: [...kk.blockAtlasPixels],
            heldUntil: yk,
            sheetLayout: kk.imagesPerAtlas,
            sheetWidth: kk.blockAtlasWidth,
            armourAtlasUrl: kk.armourAtlas,
            texture: kk => {
              var Fk, Ik;
              return null !== (Fk = null !== (Ik = ek(kk)) && void 0 !== Ik ? Ik : (0, qk.b)(ak, kk)) && void 0 !== Fk ? Fk : null
            },
            model: kk => void 0 === tk[kk] && Lk[kk] || null,
            averageColours: Tk
          }
        }(zk, kk, sk, Vk)
      }(Jk, null === kk.gameSource, Ik), Kk = {
        pack: kk.pack,
        maxLayerWidth: Ik,
        assets: Pk
      };
      return wk = Kk, Pk.catch((() => {
        wk === Kk && (wk = null)
      })), Pk
    }

    function xk(kk, Fk, Xk, Tk) {
      const ik = (0, qk.b)(kk, Xk);
      if (ik) return ik;
      try {
        return Fk(Xk, Tk).url
      } catch {
        return Ik(3251)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);