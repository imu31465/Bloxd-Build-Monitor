export const id = 233;
export const ids = [233];
export const modules = {
  35568: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      packDisplayName: () => tr,
      packModelMessage: () => hr,
      packModelSummary: () => Yr,
      refusedPackModels: () => zr
    });
    var Zr = Qr(35576),
      Wr = Qr(35580);
    const ar = "DRACO",
      jr = 0,
      Ir = 1,
      fr = 0,
      Er = 1,
      pr = 32768;

    function xr(rr) {
      const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
      let Qr = 0;
      const Zr = () => {
          if (Qr >= rr.byteLength) throw new RangeError("past the stream");
          return rr[Qr++]
        },
        Wr = () => {
          if (Qr + 4 > rr.byteLength) throw new RangeError("past the stream");
          const Zr = Sr.getUint32(Qr, !0);
          return Qr += 4, Zr
        },
        xr = () => {
          let rr = 0;
          for (let Sr = 0; Sr < 35; Sr += 7) {
            const Qr = Zr();
            if (rr += (127 & Qr) * 2 ** Sr, 0 === (128 & Qr)) return rr
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let rr = 0; rr < ar.length; rr++)
          if (Zr() !== ar.charCodeAt(rr)) return null;
        const Sr = Zr(),
          mr = Zr(),
          Nr = Zr(),
          Ur = Zr(),
          tr = Zr() | Zr() << 8;
        if (2 !== Sr) return null;
        0 !== (tr & pr) && function(rr, Sr, Qr) {
          const Zr = () => {
              Sr(Qr())
            },
            Wr = () => {
              let Qr = 1,
                Wr = !0;
              for (; Qr > 0;) {
                Qr--, Wr || Zr(), Wr = !1;
                const ar = rr();
                for (let Qr = 0; Qr < ar; Qr++) Zr(), Sr(rr());
                Qr += rr()
              }
            },
            ar = rr();
          for (let jr = 0; jr < ar; jr++) rr(), Wr();
          Wr()
        }(xr, (Sr => {
          if (Qr + Sr > rr.byteLength) throw new RangeError("past the stream");
          Qr += Sr
        }), Zr);
        const hr = mr < 2 ? Wr : xr;
        if (Nr === jr) return {
          faces: 0,
          vertices: Wr(),
          minor: mr
        };
        if (Nr !== Ir) return null;
        if (Ur === fr) {
          return {
            faces: hr(),
            vertices: hr(),
            minor: mr
          }
        }
        if (Ur !== Er) return null;
        Zr(), mr < 2 && xr();
        const zr = xr();
        return {
          faces: xr(),
          vertices: zr,
          minor: mr
        }
      } catch {
        return null
      }
    }

    function mr(rr, Sr, Qr) {
      var Zr, Wr;
      if (null === (Zr = null === (Wr = rr.extensionsUsed) || void 0 === Wr ? void 0 : Wr.includes("KHR_draco_mesh_compression")) || void 0 === Zr || !Zr) return null;
      for (const tr of null !== (ar = rr.meshes) && void 0 !== ar ? ar : []) {
        var ar;
        for (const Zr of tr.primitives) {
          var jr, Ir, fr, Er, pr, mr;
          const Wr = null === (jr = Zr.extensions) || void 0 === jr ? void 0 : jr.KHR_draco_mesh_compression;
          if ("object" !== typeof Wr || null === Wr) continue;
          const ar = null === (Ir = rr.bufferViews) || void 0 === Ir ? void 0 : Ir[Wr.bufferView];
          if (null === Sr || void 0 === ar) return Nr;
          const tr = null !== (fr = ar.byteOffset) && void 0 !== fr ? fr : 0,
            hr = xr(Sr.subarray(tr, tr + ar.byteLength));
          if (null === hr && !Qr) continue;
          const zr = null !== (Er = rr.accessors) && void 0 !== Er ? Er : [],
            Yr = null === (pr = zr[Zr.attributes.POSITION]) || void 0 === pr ? void 0 : pr.count,
            nr = void 0 === Zr.indices ? 0 : null === (mr = zr[Zr.indices]) || void 0 === mr ? void 0 : mr.count;
          if (null === hr || void 0 === Yr || void 0 === nr || 3 * hr.faces !== nr || hr.vertices > Yr) return Nr;
          if (Qr && hr.minor < 2) return Ur
        }
      }
      return null
    }
    const Nr = "has a Draco stream whose counts don't match its accessors",
      Ur = "has a Draco stream too old to decode: export it again";

    function tr(rr) {
      var Sr;
      return null !== (Sr = rr.name) && void 0 !== Sr ? Sr : rr.fromFolderName || rr.id
    }

    function hr(rr, Sr, Qr) {
      return `Texture pack "${rr}": model "${Sr}" was not loaded because it ${Qr}. The default model is used instead.`
    }

    function zr(rr, Sr, Qr) {
      let {
        strictDraco: ar = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const jr = {};
      for (const [Ir, fr] of Object.entries(Sr)) {
        let Sr;
        if (fr.startsWith("data:")) try {
          const rr = new Uint8Array((0, Wr.t)(fr));
          if (Sr = (0, Zr.e)(rr), null === Sr) {
            const {
              json: Qr,
              bin: Zr
            } = (0, Wr.z)(rr);
            Sr = mr(Qr, Zr, ar)
          }
        } catch {
          Sr = "is not a binary glTF 2.0 file"
        } else Sr = "loads data from outside the file";
        Sr && (jr[Ir] = Sr, Qr && console.warn(hr(rr, Ir, Sr)))
      }
      return jr
    }

    function Yr(rr, Sr) {
      const Qr = Object.keys(Sr);
      if (0 === Qr.length) return null;
      if (1 === Qr.length) return hr(rr, Qr[0], Sr[Qr[0]]);
      const Zr = Qr.map((rr => `"${rr}" ${Sr[rr]}`)).join("; ");
      return `Texture pack "${rr}": ${Qr.length} models were not loaded (${Zr}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);