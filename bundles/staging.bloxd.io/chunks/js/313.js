export const id = 313;
export const ids = [313];
export const modules = {
  41438: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      _TGATextureLoader: () => rk
    });
    var Dk = ik(38272);

    function fk(kk) {
      let ek = 0;
      return {
        id_length: kk[ek++],
        colormap_type: kk[ek++],
        image_type: kk[ek++],
        colormap_index: kk[ek++] | kk[ek++] << 8,
        colormap_length: kk[ek++] | kk[ek++] << 8,
        colormap_size: kk[ek++],
        origin: [kk[ek++] | kk[ek++] << 8, kk[ek++] | kk[ek++] << 8],
        width: kk[ek++] | kk[ek++] << 8,
        height: kk[ek++] | kk[ek++] << 8,
        pixel_size: kk[ek++],
        flags: kk[17]
      }
    }

    function Sk(kk, ek) {
      if (ek.length < 19) return void Dk.b.Error("Unable to load TGA file - Not enough data to contain header");
      let ik = 18;
      const Sk = fk(ek);
      if (Sk.id_length + ik > ek.length) return void Dk.b.Error("Unable to load TGA file - Not enough data");
      ik += Sk.id_length;
      let rk, Pk = !1,
        mk = !1,
        Mk = !1;
      switch (Sk.image_type) {
        case 9:
          Pk = !0;
        case 1:
          mk = !0;
          break;
        case 10:
          Pk = !0;
        case 2:
          break;
        case 11:
          Pk = !0;
        case 3:
          Mk = !0
      }
      const Kk = Sk.pixel_size >> 3,
        xk = Sk.width * Sk.height * Kk;
      let nk, Uk, Hk, wk, lk, pk, yk;
      if (mk && (nk = ek.subarray(ik, ik += Sk.colormap_length * (Sk.colormap_size >> 3))), Pk) {
        let kk, Dk, fk;
        rk = new Uint8Array(xk);
        let Sk = 0;
        const bk = new Uint8Array(Kk);
        for (; ik < xk && Sk < xk;)
          if (kk = ek[ik++], Dk = 1 + (127 & kk), 128 & kk) {
            for (fk = 0; fk < Kk; ++fk) bk[fk] = ek[ik++];
            for (fk = 0; fk < Dk; ++fk) rk.set(bk, Sk + fk * Kk);
            Sk += Kk * Dk
          } else {
            for (Dk *= Kk, fk = 0; fk < Dk; ++fk) rk[Sk + fk] = ek[ik++];
            Sk += Dk
          }
      } else rk = ek.subarray(ik, ik + (mk ? Sk.width * Sk.height : xk));
      switch ((48 & Sk.flags) >> 4) {
        default:
        case 2:
          Uk = 0, wk = 1, yk = Sk.width, Hk = 0, lk = 1, pk = Sk.height;
          break;
        case 0:
          Uk = 0, wk = 1, yk = Sk.width, Hk = Sk.height - 1, lk = -1, pk = -1;
          break;
        case 3:
          Uk = Sk.width - 1, wk = -1, yk = -1, Hk = 0, lk = 1, pk = Sk.height;
          break;
        case 1:
          Uk = Sk.width - 1, wk = -1, yk = -1, Hk = Sk.height - 1, lk = -1, pk = -1
      }
      const Yk = "_getImageData" + (Mk ? "Grey" : "") + Sk.pixel_size + "bits",
        Lk = bk[Yk](Sk, nk, rk, Hk, lk, pk, Uk, wk, yk);
      kk.JU()._uploadDataToTextureDirectly(kk, Lk)
    }
    const bk = {
      GetTGAHeader: fk,
      UploadContent: Sk,
      _getImageData8bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = ik,
          Mk = ek,
          Kk = kk.width,
          xk = kk.height;
        let nk, Uk, Hk, wk = 0;
        const lk = new Uint8Array(Kk * xk * 4);
        for (Hk = Dk; Hk !== Sk; Hk += fk)
          for (Uk = bk; Uk !== Pk; Uk += rk, wk++) nk = mk[wk], lk[4 * (Uk + Kk * Hk) + 3] = 255, lk[4 * (Uk + Kk * Hk) + 2] = Mk[3 * nk + 0], lk[4 * (Uk + Kk * Hk) + 1] = Mk[3 * nk + 1], lk[4 * (Uk + Kk * Hk) + 0] = Mk[3 * nk + 2];
        return lk
      },
      _getImageData16bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = ik,
          Mk = kk.width,
          Kk = kk.height;
        let xk, nk, Uk, Hk = 0;
        const wk = new Uint8Array(Mk * Kk * 4);
        for (Uk = Dk; Uk !== Sk; Uk += fk)
          for (nk = bk; nk !== Pk; nk += rk, Hk += 2) {
            xk = mk[Hk + 0] + (mk[Hk + 1] << 8);
            const kk = 255 * ((31744 & xk) >> 10) / 31 | 0,
              ek = 255 * ((992 & xk) >> 5) / 31 | 0,
              ik = 255 * (31 & xk) / 31 | 0;
            wk[4 * (nk + Mk * Uk) + 0] = kk, wk[4 * (nk + Mk * Uk) + 1] = ek, wk[4 * (nk + Mk * Uk) + 2] = ik, wk[4 * (nk + Mk * Uk) + 3] = 32768 & xk ? 0 : 255
          }
        return wk
      },
      _getImageData24bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = ik,
          Mk = kk.width,
          Kk = kk.height;
        let xk, nk, Uk = 0;
        const Hk = new Uint8Array(Mk * Kk * 4);
        for (nk = Dk; nk !== Sk; nk += fk)
          for (xk = bk; xk !== Pk; xk += rk, Uk += 3) Hk[4 * (xk + Mk * nk) + 3] = 255, Hk[4 * (xk + Mk * nk) + 2] = mk[Uk + 0], Hk[4 * (xk + Mk * nk) + 1] = mk[Uk + 1], Hk[4 * (xk + Mk * nk) + 0] = mk[Uk + 2];
        return Hk
      },
      _getImageData32bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = ik,
          Mk = kk.width,
          Kk = kk.height;
        let xk, nk, Uk = 0;
        const Hk = new Uint8Array(Mk * Kk * 4);
        for (nk = Dk; nk !== Sk; nk += fk)
          for (xk = bk; xk !== Pk; xk += rk, Uk += 4) Hk[4 * (xk + Mk * nk) + 2] = mk[Uk + 0], Hk[4 * (xk + Mk * nk) + 1] = mk[Uk + 1], Hk[4 * (xk + Mk * nk) + 0] = mk[Uk + 2], Hk[4 * (xk + Mk * nk) + 3] = mk[Uk + 3];
        return Hk
      },
      _getImageDataGrey8bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = ik,
          Mk = kk.width,
          Kk = kk.height;
        let xk, nk, Uk, Hk = 0;
        const wk = new Uint8Array(Mk * Kk * 4);
        for (Uk = Dk; Uk !== Sk; Uk += fk)
          for (nk = bk; nk !== Pk; nk += rk, Hk++) xk = mk[Hk], wk[4 * (nk + Mk * Uk) + 0] = xk, wk[4 * (nk + Mk * Uk) + 1] = xk, wk[4 * (nk + Mk * Uk) + 2] = xk, wk[4 * (nk + Mk * Uk) + 3] = 255;
        return wk
      },
      _getImageDataGrey16bits: function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = ik,
          Mk = kk.width,
          Kk = kk.height;
        let xk, nk, Uk = 0;
        const Hk = new Uint8Array(Mk * Kk * 4);
        for (nk = Dk; nk !== Sk; nk += fk)
          for (xk = bk; xk !== Pk; xk += rk, Uk += 2) Hk[4 * (xk + Mk * nk) + 0] = mk[Uk + 0], Hk[4 * (xk + Mk * nk) + 1] = mk[Uk + 0], Hk[4 * (xk + Mk * nk) + 2] = mk[Uk + 0], Hk[4 * (xk + Mk * nk) + 3] = mk[Uk + 1];
        return Hk
      }
    };
    class rk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(kk, ek, ik) {
        const Dk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
          bk = fk(Dk);
        ik(bk.width, bk.height, ek.generateMipMaps, !1, (() => {
          Sk(ek, Dk)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);