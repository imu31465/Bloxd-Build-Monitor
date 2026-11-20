export const id = 194;
export const ids = [194];
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
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);