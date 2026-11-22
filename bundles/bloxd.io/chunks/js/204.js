export const id = 204;
export const ids = [204];
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
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);