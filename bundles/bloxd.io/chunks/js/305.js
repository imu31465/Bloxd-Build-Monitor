export const id = 305;
export const ids = [305];
export const modules = {
  41614: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      _TGATextureLoader: () => xq
    });
    var Yq = gq(38653);

    function lq(qq) {
      let Eq = 0;
      return {
        id_length: qq[Eq++],
        colormap_type: qq[Eq++],
        image_type: qq[Eq++],
        colormap_index: qq[Eq++] | qq[Eq++] << 8,
        colormap_length: qq[Eq++] | qq[Eq++] << 8,
        colormap_size: qq[Eq++],
        origin: [qq[Eq++] | qq[Eq++] << 8, qq[Eq++] | qq[Eq++] << 8],
        width: qq[Eq++] | qq[Eq++] << 8,
        height: qq[Eq++] | qq[Eq++] << 8,
        pixel_size: qq[Eq++],
        flags: qq[17]
      }
    }

    function Oq(qq, Eq) {
      if (Eq.length < 19) return void Yq.b.Error("Unable to load TGA file - Not enough data to contain header");
      let gq = 18;
      const Oq = lq(Eq);
      if (Oq.id_length + gq > Eq.length) return void Yq.b.Error("Unable to load TGA file - Not enough data");
      gq += Oq.id_length;
      let xq, Aq = !1,
        cq = !1,
        uq = !1;
      switch (Oq.image_type) {
        case 9:
          Aq = !0;
        case 1:
          cq = !0;
          break;
        case 10:
          Aq = !0;
        case 2:
          break;
        case 11:
          Aq = !0;
        case 3:
          uq = !0
      }
      const Bq = Oq.pixel_size >> 3,
        Wq = Oq.width * Oq.height * Bq;
      let Nq, aq, Vq, dq, jq, Hq, oq;
      if (cq && (Nq = Eq.subarray(gq, gq += Oq.colormap_length * (Oq.colormap_size >> 3))), Aq) {
        let qq, Yq, lq;
        xq = new Uint8Array(Wq);
        let Oq = 0;
        const mq = new Uint8Array(Bq);
        for (; gq < Wq && Oq < Wq;)
          if (qq = Eq[gq++], Yq = 1 + (127 & qq), 128 & qq) {
            for (lq = 0; lq < Bq; ++lq) mq[lq] = Eq[gq++];
            for (lq = 0; lq < Yq; ++lq) xq.set(mq, Oq + lq * Bq);
            Oq += Bq * Yq
          } else {
            for (Yq *= Bq, lq = 0; lq < Yq; ++lq) xq[Oq + lq] = Eq[gq++];
            Oq += Yq
          }
      } else xq = Eq.subarray(gq, gq + (cq ? Oq.width * Oq.height : Wq));
      switch ((48 & Oq.flags) >> 4) {
        default:
        case 2:
          aq = 0, dq = 1, oq = Oq.width, Vq = 0, jq = 1, Hq = Oq.height;
          break;
        case 0:
          aq = 0, dq = 1, oq = Oq.width, Vq = Oq.height - 1, jq = -1, Hq = -1;
          break;
        case 3:
          aq = Oq.width - 1, dq = -1, oq = -1, Vq = 0, jq = 1, Hq = Oq.height;
          break;
        case 1:
          aq = Oq.width - 1, dq = -1, oq = -1, Vq = Oq.height - 1, jq = -1, Hq = -1
      }
      const Pq = "_getImageData" + (uq ? "Grey" : "") + Oq.pixel_size + "bits",
        Qq = mq[Pq](Oq, Nq, xq, Vq, jq, Hq, aq, dq, oq);
      qq.Ba()._uploadDataToTextureDirectly(qq, Qq)
    }
    const mq = {
      GetTGAHeader: lq,
      UploadContent: Oq,
      _getImageData8bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = gq,
          uq = Eq,
          Bq = qq.width,
          Wq = qq.height;
        let Nq, aq, Vq, dq = 0;
        const jq = new Uint8Array(Bq * Wq * 4);
        for (Vq = Yq; Vq !== Oq; Vq += lq)
          for (aq = mq; aq !== Aq; aq += xq, dq++) Nq = cq[dq], jq[4 * (aq + Bq * Vq) + 3] = 255, jq[4 * (aq + Bq * Vq) + 2] = uq[3 * Nq + 0], jq[4 * (aq + Bq * Vq) + 1] = uq[3 * Nq + 1], jq[4 * (aq + Bq * Vq) + 0] = uq[3 * Nq + 2];
        return jq
      },
      _getImageData16bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = gq,
          uq = qq.width,
          Bq = qq.height;
        let Wq, Nq, aq, Vq = 0;
        const dq = new Uint8Array(uq * Bq * 4);
        for (aq = Yq; aq !== Oq; aq += lq)
          for (Nq = mq; Nq !== Aq; Nq += xq, Vq += 2) {
            Wq = cq[Vq + 0] + (cq[Vq + 1] << 8);
            const qq = 255 * ((31744 & Wq) >> 10) / 31 | 0,
              Eq = 255 * ((992 & Wq) >> 5) / 31 | 0,
              gq = 255 * (31 & Wq) / 31 | 0;
            dq[4 * (Nq + uq * aq) + 0] = qq, dq[4 * (Nq + uq * aq) + 1] = Eq, dq[4 * (Nq + uq * aq) + 2] = gq, dq[4 * (Nq + uq * aq) + 3] = 32768 & Wq ? 0 : 255
          }
        return dq
      },
      _getImageData24bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = gq,
          uq = qq.width,
          Bq = qq.height;
        let Wq, Nq, aq = 0;
        const Vq = new Uint8Array(uq * Bq * 4);
        for (Nq = Yq; Nq !== Oq; Nq += lq)
          for (Wq = mq; Wq !== Aq; Wq += xq, aq += 3) Vq[4 * (Wq + uq * Nq) + 3] = 255, Vq[4 * (Wq + uq * Nq) + 2] = cq[aq + 0], Vq[4 * (Wq + uq * Nq) + 1] = cq[aq + 1], Vq[4 * (Wq + uq * Nq) + 0] = cq[aq + 2];
        return Vq
      },
      _getImageData32bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = gq,
          uq = qq.width,
          Bq = qq.height;
        let Wq, Nq, aq = 0;
        const Vq = new Uint8Array(uq * Bq * 4);
        for (Nq = Yq; Nq !== Oq; Nq += lq)
          for (Wq = mq; Wq !== Aq; Wq += xq, aq += 4) Vq[4 * (Wq + uq * Nq) + 2] = cq[aq + 0], Vq[4 * (Wq + uq * Nq) + 1] = cq[aq + 1], Vq[4 * (Wq + uq * Nq) + 0] = cq[aq + 2], Vq[4 * (Wq + uq * Nq) + 3] = cq[aq + 3];
        return Vq
      },
      _getImageDataGrey8bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = gq,
          uq = qq.width,
          Bq = qq.height;
        let Wq, Nq, aq, Vq = 0;
        const dq = new Uint8Array(uq * Bq * 4);
        for (aq = Yq; aq !== Oq; aq += lq)
          for (Nq = mq; Nq !== Aq; Nq += xq, Vq++) Wq = cq[Vq], dq[4 * (Nq + uq * aq) + 0] = Wq, dq[4 * (Nq + uq * aq) + 1] = Wq, dq[4 * (Nq + uq * aq) + 2] = Wq, dq[4 * (Nq + uq * aq) + 3] = 255;
        return dq
      },
      _getImageDataGrey16bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = gq,
          uq = qq.width,
          Bq = qq.height;
        let Wq, Nq, aq = 0;
        const Vq = new Uint8Array(uq * Bq * 4);
        for (Nq = Yq; Nq !== Oq; Nq += lq)
          for (Wq = mq; Wq !== Aq; Wq += xq, aq += 2) Vq[4 * (Wq + uq * Nq) + 0] = cq[aq + 0], Vq[4 * (Wq + uq * Nq) + 1] = cq[aq + 0], Vq[4 * (Wq + uq * Nq) + 2] = cq[aq + 0], Vq[4 * (Wq + uq * Nq) + 3] = cq[aq + 1];
        return Vq
      }
    };
    class xq {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(qq, Eq, gq) {
        const Yq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength),
          mq = lq(Yq);
        gq(mq.width, mq.height, Eq.generateMipMaps, !1, (() => {
          Oq(Eq, Yq)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);