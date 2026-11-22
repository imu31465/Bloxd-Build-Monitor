export const id = 44;
export const ids = [44, 204];
export const modules = {
  33831: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      packDisplayName: () => Uk,
      packModelMessage: () => Hk,
      packModelSummary: () => lk,
      refusedPackModels: () => wk
    });
    var Dk = ik(33838),
      fk = ik(33846);
    const Sk = "DRACO",
      bk = 0,
      rk = 1,
      Pk = 0,
      mk = 1,
      Mk = 32768;

    function Kk(kk) {
      const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let ik = 0;
      const Dk = () => {
          if (ik >= kk.byteLength) throw new RangeError("past the stream");
          return kk[ik++]
        },
        fk = () => {
          if (ik + 4 > kk.byteLength) throw new RangeError("past the stream");
          const Dk = ek.getUint32(ik, !0);
          return ik += 4, Dk
        },
        Kk = () => {
          let kk = 0;
          for (let ek = 0; ek < 35; ek += 7) {
            const ik = Dk();
            if (kk += (127 & ik) * 2 ** ek, 0 === (128 & ik)) return kk
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let kk = 0; kk < Sk.length; kk++)
          if (Dk() !== Sk.charCodeAt(kk)) return null;
        const ek = Dk(),
          xk = Dk(),
          nk = Dk(),
          Uk = Dk(),
          Hk = Dk() | Dk() << 8;
        if (2 !== ek) return null;
        0 !== (Hk & Mk) && function(kk, ek, ik) {
          const Dk = () => {
              ek(ik())
            },
            fk = () => {
              let ik = 1,
                fk = !0;
              for (; ik > 0;) {
                ik--, fk || Dk(), fk = !1;
                const Sk = kk();
                for (let ik = 0; ik < Sk; ik++) Dk(), ek(kk());
                ik += kk()
              }
            },
            Sk = kk();
          for (let bk = 0; bk < Sk; bk++) kk(), fk();
          fk()
        }(Kk, (ek => {
          if (ik + ek > kk.byteLength) throw new RangeError("past the stream");
          ik += ek
        }), Dk);
        const wk = xk < 2 ? fk : Kk;
        if (nk === bk) return {
          faces: 0,
          vertices: fk()
        };
        if (nk !== rk) return null;
        if (Uk === Pk) {
          return {
            faces: wk(),
            vertices: wk()
          }
        }
        if (Uk !== mk) return null;
        Dk(), xk < 2 && Kk();
        const lk = Kk();
        return {
          faces: Kk(),
          vertices: lk
        }
      } catch {
        return null
      }
    }

    function xk(kk, ek, ik) {
      var Dk, fk;
      if (null === (Dk = null === (fk = kk.extensionsUsed) || void 0 === fk ? void 0 : fk.includes("KHR_draco_mesh_compression")) || void 0 === Dk || !Dk) return null;
      for (const Uk of null !== (Sk = kk.meshes) && void 0 !== Sk ? Sk : []) {
        var Sk;
        for (const Dk of Uk.primitives) {
          var bk, rk, Pk, mk, Mk, xk;
          const fk = null === (bk = Dk.extensions) || void 0 === bk ? void 0 : bk.KHR_draco_mesh_compression;
          if ("object" !== typeof fk || null === fk) continue;
          const Sk = null === (rk = kk.bufferViews) || void 0 === rk ? void 0 : rk[fk.bufferView];
          if (null === ek || void 0 === Sk) return nk;
          const Uk = null !== (Pk = Sk.byteOffset) && void 0 !== Pk ? Pk : 0,
            Hk = Kk(ek.subarray(Uk, Uk + Sk.byteLength));
          if (null === Hk && !ik) continue;
          const wk = null !== (mk = kk.accessors) && void 0 !== mk ? mk : [],
            lk = null === (Mk = wk[Dk.attributes.POSITION]) || void 0 === Mk ? void 0 : Mk.count,
            pk = void 0 === Dk.indices ? 0 : null === (xk = wk[Dk.indices]) || void 0 === xk ? void 0 : xk.count;
          if (null === Hk || void 0 === lk || void 0 === pk || 3 * Hk.faces !== pk || Hk.vertices > lk) return nk
        }
      }
      return null
    }
    const nk = "has a Draco stream whose counts don't match its accessors";

    function Uk(kk) {
      var ek;
      return null !== (ek = kk.name) && void 0 !== ek ? ek : kk.fromFolderName || kk.id
    }

    function Hk(kk, ek, ik) {
      return `Texture pack "${kk}": model "${ek}" was not loaded because it ${ik}. The default model is used instead.`
    }

    function wk(kk, ek, ik) {
      let {
        strictDraco: Sk = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const bk = {};
      for (const [rk, Pk] of Object.entries(ek)) {
        let ek;
        if (Pk.startsWith("data:")) try {
          const kk = new Uint8Array((0, fk.q)(Pk));
          if (ek = (0, Dk.d)(kk), null === ek) {
            const {
              json: ik,
              bin: Dk
            } = (0, fk.z)(kk);
            ek = xk(ik, Dk, Sk)
          }
        } catch {
          ek = "is not a binary glTF 2.0 file"
        } else ek = "loads data from outside the file";
        ek && (bk[rk] = ek, ik && console.warn(Hk(kk, rk, ek)))
      }
      return bk
    }

    function lk(kk, ek) {
      const ik = Object.keys(ek);
      if (0 === ik.length) return null;
      if (1 === ik.length) return Hk(kk, ik[0], ek[ik[0]]);
      const Dk = ik.map((kk => `"${kk}" ${ek[kk]}`)).join("; ");
      return `Texture pack "${kk}": ${ik.length} models were not loaded (${Dk}). The default models are used instead.`
    }
  },
  60883: (kk, ek, ik) => {
    ik.d(ek, {
      packAssets: () => lk
    });
    var Dk = ik(2107),
      fk = ik(2095),
      Sk = ik(33831),
      bk = ik(3183),
      rk = ik(3206);

    function Pk(kk, ek, ik, Dk) {
      const fk = `${(0,bk.b)(kk,ek)}|sheets${ik}`;
      return Dk === rk.b ? fk : `${fk}|layers${Dk}`
    }
    var mk = ik(3215),
      Mk = ik(3152),
      Kk = ik(3139),
      xk = ik(3185);
    var nk = ik(50568);
    const Uk = 256;
    let Hk = null,
      wk = null;

    function lk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rk.b;
      if ((null === (ek = Hk) || void 0 === ek ? void 0 : ek.pack) === kk.pack && Hk.maxLayerWidth === ik) return Hk.assets;
      const lk = (0, nk.e)(kk.pack, (0, nk.j)(kk));
      if (null === lk || !(0, fk.h)(lk)) return Promise.resolve(null);
      const yk = async function(kk, ek, ik) {
        var nk;
        const Hk = null !== (nk = kk.textureOverrides) && void 0 !== nk ? nk : {},
          {
            id: lk,
            version: yk
          } = kk.metaData,
          Yk = ek && lk !== Dk.u.CUSTOM,
          Lk = {};
        Yk && (wk = Lk);
        let Ck, Ak, jk = Yk ? await async function(kk, ek, ik, Dk) {
          const fk = Pk(kk, ek, ik, rk.b),
            Sk = Pk(kk, ek, ik, Dk),
            mk = await (0, bk.f)((kk => kk === fk || kk === Sk));
          return null !== mk && (Dk === rk.b || mk.blockAtlasWidth <= Dk) ? mk : null
        }(lk, yk, Uk, ik): null;
        if (null === jk) {
          const {
            blockMetadata: kk,
            getDefaultTexture: ek,
            textureNameToIndex: Sk
          } = await (0, fk.l)(), rk = (0, Mk.e)(kk, ((kk, ik) => ({
            url: pk(Hk, ek, kk, "block" === ik ? Kk.f.BLOCK : Kk.f.ITEM)
          }))), mk = await
          function(kk, ek, ik, Dk, fk, Sk) {
            return (0, xk.b)((bk => bk.WasmTextureWorker.generateRequired(kk, ek, ik, Dk, fk, Sk)))
          }(kk, Sk, rk, lk === Dk.d, ik, Uk), nk = mk.assets;
          jk = {
            ...nk,
            averageColors: {}
          }, Ck = mk.averageColors(), Yk && (Ak = Ck.then((async kk => {
            null !== kk && wk === Lk && await
            function(kk, ek, ik, Dk, fk) {
              return (0, bk.l)(Pk(kk, ek, Dk, fk), ik)
            }(lk, yk, {
              ...nk,
              averageColors: kk
            }, Uk, mk.layerCap)
          })))
        }
        return function(kk, ek) {
          var ik, Dk;
          let fk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((rk = kk.averageColors, 0 === Object.keys(null !== rk && void 0 !== rk ? rk : {}).length ? null : kk.averageColors)),
            bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var rk;
          const Pk = null !== (ik = ek.textureOverrides) && void 0 !== ik ? ik : {},
            Mk = null !== (Dk = ek.modelOverrides) && void 0 !== Dk ? Dk : {},
            Kk = 0 === Object.keys(Mk).length ? {} : (0, Sk.refusedPackModels)((0, Sk.packDisplayName)(ek.metaData), Mk, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: xk,
              rotatedBlockTextures: nk
            } = kk,
            Uk = kk => {
              var ek, ik;
              return null !== (ek = null !== (ik = xk[kk]) && void 0 !== ik ? ik : nk[kk]) && void 0 !== ek ? ek : null
            };
          return {
            terrain: {
              atlasSheets: kk.blockAtlasArr,
              texture: Uk
            },
            sheetPixels: [...kk.blockAtlasPixels],
            heldUntil: bk,
            sheetLayout: kk.imagesPerAtlas,
            sheetWidth: kk.blockAtlasWidth,
            armourAtlasUrl: kk.armourAtlas,
            texture: kk => {
              var ek, ik;
              return null !== (ek = null !== (ik = Uk(kk)) && void 0 !== ik ? ik : (0, mk.c)(Pk, kk)) && void 0 !== ek ? ek : null
            },
            model: kk => void 0 === Kk[kk] && Mk[kk] || null,
            averageColours: fk
          }
        }(jk, kk, Ck, Ak)
      }(lk, null === kk.gameSource, ik), Yk = {
        pack: kk.pack,
        maxLayerWidth: ik,
        assets: yk
      };
      return Hk = Yk, yk.catch((() => {
        Hk === Yk && (Hk = null)
      })), yk
    }

    function pk(kk, ek, Dk, fk) {
      const Sk = (0, mk.c)(kk, Dk);
      if (Sk) return Sk;
      try {
        return ek(Dk, fk).url
      } catch {
        return ik(3281)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);