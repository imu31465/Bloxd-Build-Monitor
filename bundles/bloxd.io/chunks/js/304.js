export const id = 304;
export const ids = [304];
export const modules = {
  41274: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _TGATextureLoader: () => bk
    });
    var Rk = Bk(38320);

    function tk(kk) {
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

    function ak(kk, Fk) {
      if (Fk.length < 19) return void Rk.b.Error("Unable to load TGA file - Not enough data to contain header");
      let Bk = 18;
      const ak = tk(Fk);
      if (ak.id_length + Bk > Fk.length) return void Rk.b.Error("Unable to load TGA file - Not enough data");
      Bk += ak.id_length;
      let bk, wk = !1,
        dk = !1,
        sk = !1;
      switch (ak.image_type) {
        case 9:
          wk = !0;
        case 1:
          dk = !0;
          break;
        case 10:
          wk = !0;
        case 2:
          break;
        case 11:
          wk = !0;
        case 3:
          sk = !0
      }
      const Vk = ak.pixel_size >> 3,
        Jk = ak.width * ak.height * Vk;
      let Ak, ek, yk, fk, mk, Wk, vk;
      if (dk && (Ak = Fk.subarray(Bk, Bk += ak.colormap_length * (ak.colormap_size >> 3))), wk) {
        let kk, Rk, tk;
        bk = new Uint8Array(Jk);
        let ak = 0;
        const Xk = new Uint8Array(Vk);
        for (; Bk < Jk && ak < Jk;)
          if (kk = Fk[Bk++], Rk = 1 + (127 & kk), 128 & kk) {
            for (tk = 0; tk < Vk; ++tk) Xk[tk] = Fk[Bk++];
            for (tk = 0; tk < Rk; ++tk) bk.set(Xk, ak + tk * Vk);
            ak += Vk * Rk
          } else {
            for (Rk *= Vk, tk = 0; tk < Rk; ++tk) bk[ak + tk] = Fk[Bk++];
            ak += Rk
          }
      } else bk = Fk.subarray(Bk, Bk + (dk ? ak.width * ak.height : Jk));
      switch ((48 & ak.flags) >> 4) {
        default:
        case 2:
          ek = 0, fk = 1, vk = ak.width, yk = 0, mk = 1, Wk = ak.height;
          break;
        case 0:
          ek = 0, fk = 1, vk = ak.width, yk = ak.height - 1, mk = -1, Wk = -1;
          break;
        case 3:
          ek = ak.width - 1, fk = -1, vk = -1, yk = 0, mk = 1, Wk = ak.height;
          break;
        case 1:
          ek = ak.width - 1, fk = -1, vk = -1, yk = ak.height - 1, mk = -1, Wk = -1
      }
      const ik = "_getImageData" + (sk ? "Grey" : "") + ak.pixel_size + "bits",
        Yk = Xk[ik](ak, Ak, bk, yk, mk, Wk, ek, fk, vk);
      kk.ne()._uploadDataToTextureDirectly(kk, Yk)
    }
    const Xk = {
      GetTGAHeader: tk,
      UploadContent: ak,
      _getImageData8bits: function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = Bk,
          sk = Fk,
          Vk = kk.width,
          Jk = kk.height;
        let Ak, ek, yk, fk = 0;
        const mk = new Uint8Array(Vk * Jk * 4);
        for (yk = Rk; yk !== ak; yk += tk)
          for (ek = Xk; ek !== wk; ek += bk, fk++) Ak = dk[fk], mk[4 * (ek + Vk * yk) + 3] = 255, mk[4 * (ek + Vk * yk) + 2] = sk[3 * Ak + 0], mk[4 * (ek + Vk * yk) + 1] = sk[3 * Ak + 1], mk[4 * (ek + Vk * yk) + 0] = sk[3 * Ak + 2];
        return mk
      },
      _getImageData16bits: function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = Bk,
          sk = kk.width,
          Vk = kk.height;
        let Jk, Ak, ek, yk = 0;
        const fk = new Uint8Array(sk * Vk * 4);
        for (ek = Rk; ek !== ak; ek += tk)
          for (Ak = Xk; Ak !== wk; Ak += bk, yk += 2) {
            Jk = dk[yk + 0] + (dk[yk + 1] << 8);
            const kk = 255 * ((31744 & Jk) >> 10) / 31 | 0,
              Fk = 255 * ((992 & Jk) >> 5) / 31 | 0,
              Bk = 255 * (31 & Jk) / 31 | 0;
            fk[4 * (Ak + sk * ek) + 0] = kk, fk[4 * (Ak + sk * ek) + 1] = Fk, fk[4 * (Ak + sk * ek) + 2] = Bk, fk[4 * (Ak + sk * ek) + 3] = 32768 & Jk ? 0 : 255
          }
        return fk
      },
      _getImageData24bits: function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = Bk,
          sk = kk.width,
          Vk = kk.height;
        let Jk, Ak, ek = 0;
        const yk = new Uint8Array(sk * Vk * 4);
        for (Ak = Rk; Ak !== ak; Ak += tk)
          for (Jk = Xk; Jk !== wk; Jk += bk, ek += 3) yk[4 * (Jk + sk * Ak) + 3] = 255, yk[4 * (Jk + sk * Ak) + 2] = dk[ek + 0], yk[4 * (Jk + sk * Ak) + 1] = dk[ek + 1], yk[4 * (Jk + sk * Ak) + 0] = dk[ek + 2];
        return yk
      },
      _getImageData32bits: function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = Bk,
          sk = kk.width,
          Vk = kk.height;
        let Jk, Ak, ek = 0;
        const yk = new Uint8Array(sk * Vk * 4);
        for (Ak = Rk; Ak !== ak; Ak += tk)
          for (Jk = Xk; Jk !== wk; Jk += bk, ek += 4) yk[4 * (Jk + sk * Ak) + 2] = dk[ek + 0], yk[4 * (Jk + sk * Ak) + 1] = dk[ek + 1], yk[4 * (Jk + sk * Ak) + 0] = dk[ek + 2], yk[4 * (Jk + sk * Ak) + 3] = dk[ek + 3];
        return yk
      },
      _getImageDataGrey8bits: function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = Bk,
          sk = kk.width,
          Vk = kk.height;
        let Jk, Ak, ek, yk = 0;
        const fk = new Uint8Array(sk * Vk * 4);
        for (ek = Rk; ek !== ak; ek += tk)
          for (Ak = Xk; Ak !== wk; Ak += bk, yk++) Jk = dk[yk], fk[4 * (Ak + sk * ek) + 0] = Jk, fk[4 * (Ak + sk * ek) + 1] = Jk, fk[4 * (Ak + sk * ek) + 2] = Jk, fk[4 * (Ak + sk * ek) + 3] = 255;
        return fk
      },
      _getImageDataGrey16bits: function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = Bk,
          sk = kk.width,
          Vk = kk.height;
        let Jk, Ak, ek = 0;
        const yk = new Uint8Array(sk * Vk * 4);
        for (Ak = Rk; Ak !== ak; Ak += tk)
          for (Jk = Xk; Jk !== wk; Jk += bk, ek += 2) yk[4 * (Jk + sk * Ak) + 0] = dk[ek + 0], yk[4 * (Jk + sk * Ak) + 1] = dk[ek + 0], yk[4 * (Jk + sk * Ak) + 2] = dk[ek + 0], yk[4 * (Jk + sk * Ak) + 3] = dk[ek + 1];
        return yk
      }
    };
    class bk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(kk, Fk, Bk) {
        const Rk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
          Xk = tk(Rk);
        Bk(Xk.width, Xk.height, Fk.generateMipMaps, !1, (() => {
          ak(Fk, Rk)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);