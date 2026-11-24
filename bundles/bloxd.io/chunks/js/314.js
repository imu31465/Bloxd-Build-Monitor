export const id = 314;
export const ids = [314];
export const modules = {
  41850: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _TGATextureLoader: () => lk
    });
    var Xk = Ik(38674);

    function Tk(kk) {
      let Fk = 0;
      return {
        id_length: kk[Fk++],
        colormap_type: kk[Fk++],
        image_type: kk[Fk++],
        colormap_index: kk[Fk++] | kk[Fk++] << 8,
        colormap_length: kk[Fk++] | kk[Fk++] << 8,
        colormap_size: kk[Fk++],
        origin: [kk[Fk++] | kk[Fk++] << 8, kk[Fk++] | kk[Fk++] << 8],
        width: kk[Fk++] | kk[Fk++] << 8,
        height: kk[Fk++] | kk[Fk++] << 8,
        pixel_size: kk[Fk++],
        flags: kk[17]
      }
    }

    function ik(kk, Fk) {
      if (Fk.length < 19) return void Xk.e.Error("Unable to load TGA file - Not enough data to contain header");
      let Ik = 18;
      const ik = Tk(Fk);
      if (ik.id_length + Ik > Fk.length) return void Xk.e.Error("Unable to load TGA file - Not enough data");
      Ik += ik.id_length;
      let lk, ak = !1,
        qk = !1,
        Lk = !1;
      switch (ik.image_type) {
        case 9:
          ak = !0;
        case 1:
          qk = !0;
          break;
        case 10:
          ak = !0;
        case 2:
          break;
        case 11:
          ak = !0;
        case 3:
          Lk = !0
      }
      const tk = ik.pixel_size >> 3,
        Zk = ik.width * ik.height * tk;
      let jk, ek, wk, Hk, Jk, xk, Pk;
      if (qk && (jk = Fk.subarray(Ik, Ik += ik.colormap_length * (ik.colormap_size >> 3))), ak) {
        let kk, Xk, Tk;
        lk = new Uint8Array(Zk);
        let ik = 0;
        const yk = new Uint8Array(tk);
        for (; Ik < Zk && ik < Zk;)
          if (kk = Fk[Ik++], Xk = 1 + (127 & kk), 128 & kk) {
            for (Tk = 0; Tk < tk; ++Tk) yk[Tk] = Fk[Ik++];
            for (Tk = 0; Tk < Xk; ++Tk) lk.set(yk, ik + Tk * tk);
            ik += tk * Xk
          } else {
            for (Xk *= tk, Tk = 0; Tk < Xk; ++Tk) lk[ik + Tk] = Fk[Ik++];
            ik += Xk
          }
      } else lk = Fk.subarray(Ik, Ik + (qk ? ik.width * ik.height : Zk));
      switch ((48 & ik.flags) >> 4) {
        default:
        case 2:
          ek = 0, Hk = 1, Pk = ik.width, wk = 0, Jk = 1, xk = ik.height;
          break;
        case 0:
          ek = 0, Hk = 1, Pk = ik.width, wk = ik.height - 1, Jk = -1, xk = -1;
          break;
        case 3:
          ek = ik.width - 1, Hk = -1, Pk = -1, wk = 0, Jk = 1, xk = ik.height;
          break;
        case 1:
          ek = ik.width - 1, Hk = -1, Pk = -1, wk = ik.height - 1, Jk = -1, xk = -1
      }
      const Kk = "_getImageData" + (Lk ? "Grey" : "") + ik.pixel_size + "bits",
        Qk = yk[Kk](ik, jk, lk, wk, Jk, xk, ek, Hk, Pk);
      kk.Oe()._uploadDataToTextureDirectly(kk, Qk)
    }
    const yk = {
      GetTGAHeader: Tk,
      UploadContent: ik,
      _getImageData8bits: function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = Ik,
          Lk = Fk,
          tk = kk.width,
          Zk = kk.height;
        let jk, ek, wk, Hk = 0;
        const Jk = new Uint8Array(tk * Zk * 4);
        for (wk = Xk; wk !== ik; wk += Tk)
          for (ek = yk; ek !== ak; ek += lk, Hk++) jk = qk[Hk], Jk[4 * (ek + tk * wk) + 3] = 255, Jk[4 * (ek + tk * wk) + 2] = Lk[3 * jk + 0], Jk[4 * (ek + tk * wk) + 1] = Lk[3 * jk + 1], Jk[4 * (ek + tk * wk) + 0] = Lk[3 * jk + 2];
        return Jk
      },
      _getImageData16bits: function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = Ik,
          Lk = kk.width,
          tk = kk.height;
        let Zk, jk, ek, wk = 0;
        const Hk = new Uint8Array(Lk * tk * 4);
        for (ek = Xk; ek !== ik; ek += Tk)
          for (jk = yk; jk !== ak; jk += lk, wk += 2) {
            Zk = qk[wk + 0] + (qk[wk + 1] << 8);
            const kk = 255 * ((31744 & Zk) >> 10) / 31 | 0,
              Fk = 255 * ((992 & Zk) >> 5) / 31 | 0,
              Ik = 255 * (31 & Zk) / 31 | 0;
            Hk[4 * (jk + Lk * ek) + 0] = kk, Hk[4 * (jk + Lk * ek) + 1] = Fk, Hk[4 * (jk + Lk * ek) + 2] = Ik, Hk[4 * (jk + Lk * ek) + 3] = 32768 & Zk ? 0 : 255
          }
        return Hk
      },
      _getImageData24bits: function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = Ik,
          Lk = kk.width,
          tk = kk.height;
        let Zk, jk, ek = 0;
        const wk = new Uint8Array(Lk * tk * 4);
        for (jk = Xk; jk !== ik; jk += Tk)
          for (Zk = yk; Zk !== ak; Zk += lk, ek += 3) wk[4 * (Zk + Lk * jk) + 3] = 255, wk[4 * (Zk + Lk * jk) + 2] = qk[ek + 0], wk[4 * (Zk + Lk * jk) + 1] = qk[ek + 1], wk[4 * (Zk + Lk * jk) + 0] = qk[ek + 2];
        return wk
      },
      _getImageData32bits: function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = Ik,
          Lk = kk.width,
          tk = kk.height;
        let Zk, jk, ek = 0;
        const wk = new Uint8Array(Lk * tk * 4);
        for (jk = Xk; jk !== ik; jk += Tk)
          for (Zk = yk; Zk !== ak; Zk += lk, ek += 4) wk[4 * (Zk + Lk * jk) + 2] = qk[ek + 0], wk[4 * (Zk + Lk * jk) + 1] = qk[ek + 1], wk[4 * (Zk + Lk * jk) + 0] = qk[ek + 2], wk[4 * (Zk + Lk * jk) + 3] = qk[ek + 3];
        return wk
      },
      _getImageDataGrey8bits: function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = Ik,
          Lk = kk.width,
          tk = kk.height;
        let Zk, jk, ek, wk = 0;
        const Hk = new Uint8Array(Lk * tk * 4);
        for (ek = Xk; ek !== ik; ek += Tk)
          for (jk = yk; jk !== ak; jk += lk, wk++) Zk = qk[wk], Hk[4 * (jk + Lk * ek) + 0] = Zk, Hk[4 * (jk + Lk * ek) + 1] = Zk, Hk[4 * (jk + Lk * ek) + 2] = Zk, Hk[4 * (jk + Lk * ek) + 3] = 255;
        return Hk
      },
      _getImageDataGrey16bits: function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = Ik,
          Lk = kk.width,
          tk = kk.height;
        let Zk, jk, ek = 0;
        const wk = new Uint8Array(Lk * tk * 4);
        for (jk = Xk; jk !== ik; jk += Tk)
          for (Zk = yk; Zk !== ak; Zk += lk, ek += 2) wk[4 * (Zk + Lk * jk) + 0] = qk[ek + 0], wk[4 * (Zk + Lk * jk) + 1] = qk[ek + 0], wk[4 * (Zk + Lk * jk) + 2] = qk[ek + 0], wk[4 * (Zk + Lk * jk) + 3] = qk[ek + 1];
        return wk
      }
    };
    class lk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(kk, Fk, Ik) {
        const Xk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
          yk = Tk(Xk);
        Ik(yk.width, yk.height, Fk.generateMipMaps, !1, (() => {
          ik(Fk, Xk)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);