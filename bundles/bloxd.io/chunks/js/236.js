/*! For license information please see 4udp6d.236.4a2aac0a.chunk.js.LICENSE.txt */
export const id = 236;
export const ids = [236];
export const modules = {
  41009: (RR, JR, GR) => {
    function yR() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function tR(RR) {
      return RR instanceof Uint8Array && (!yR() || !Buffer.isBuffer(RR))
    }

    function uR(RR) {
      return RR instanceof ArrayBuffer
    }

    function ZR(RR) {
      return !!yR() && Buffer.isBuffer(RR)
    }
    var qR = GR(41017).b,
      iR = GR(41023).d,
      fR = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    JR.e = function(RR) {
      if (!tR(RR) && !uR(RR) && !ZR(RR)) throw new TypeError(fR);
      var JR = !1,
        GR = !1;
      tR(RR) ? JR = !0 : uR(RR) && (GR = !0, RR = new Uint8Array(RR));
      var yR, qR, VR, KR = new iR(RR),
        wR = KR.maxCompressedLength();
      if (JR ? (yR = new Uint8Array(wR), VR = KR.compressToBuffer(yR)) : GR ? (yR = new ArrayBuffer(wR), qR = new Uint8Array(yR), VR = KR.compressToBuffer(qR)) : (yR = Buffer.alloc(wR), VR = KR.compressToBuffer(yR)), !yR.slice) {
        var rR = new Uint8Array(Array.prototype.slice.call(yR, 0, VR));
        if (JR) return rR;
        if (GR) return rR.buffer;
        throw new Error("Not implemented")
      }
      return yR.slice(0, VR)
    }
  },
  41023: (RR, JR) => {
    var GR = new Array(15);

    function yR(RR, JR) {
      return 506832829 * RR >>> JR
    }

    function tR(RR, JR) {
      return RR[JR] + (RR[JR + 1] << 8) + (RR[JR + 2] << 16) + (RR[JR + 3] << 24)
    }

    function uR(RR, JR, GR) {
      return RR[JR] === RR[GR] && RR[JR + 1] === RR[GR + 1] && RR[JR + 2] === RR[GR + 2] && RR[JR + 3] === RR[GR + 3]
    }

    function ZR(RR, JR, GR, yR, tR) {
      return GR <= 60 ? (yR[tR] = GR - 1 << 2, tR += 1) : GR < 256 ? (yR[tR] = 240, yR[tR + 1] = GR - 1, tR += 2) : (yR[tR] = 244, yR[tR + 1] = GR - 1 & 255, yR[tR + 2] = GR - 1 >>> 8, tR += 3),
        function(RR, JR, GR, yR, tR) {
          var uR;
          for (uR = 0; uR < tR; uR++) GR[yR + uR] = RR[JR + uR]
        }(RR, JR, yR, tR, GR), tR + GR
    }

    function qR(RR, JR, GR, yR) {
      return yR < 12 && GR < 2048 ? (RR[JR] = 1 + (yR - 4 << 2) + (GR >>> 8 << 5), RR[JR + 1] = 255 & GR, JR + 2) : (RR[JR] = 2 + (yR - 1 << 2), RR[JR + 1] = 255 & GR, RR[JR + 2] = GR >>> 8, JR + 3)
    }

    function iR(RR, JR, GR, yR) {
      for (; yR >= 68;) JR = qR(RR, JR, GR, 64), yR -= 64;
      return yR > 64 && (JR = qR(RR, JR, GR, 60), yR -= 60), qR(RR, JR, GR, yR)
    }

    function fR(RR, JR, qR, fR, VR) {
      for (var KR = 1; 1 << KR <= qR && KR <= 14;) KR += 1;
      var wR = 32 - (KR -= 1);
      "undefined" === typeof GR[KR] && (GR[KR] = new Uint16Array(1 << KR));
      var rR, eR = GR[KR];
      for (rR = 0; rR < eR.length; rR++) eR[rR] = 0;
      var aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR = JR + qR,
        pR = JR,
        gR = JR,
        bR = !0;
      if (qR >= 15)
        for (aR = lR - 15, nR = yR(tR(RR, JR += 1), wR); bR;) {
          AR = 32, UR = JR;
          do {
            if (LR = nR, CR = AR >>> 5, AR += 1, UR = (JR = UR) + CR, JR > aR) {
              bR = !1;
              break
            }
            nR = yR(tR(RR, UR), wR), WR = pR + eR[LR], eR[LR] = JR - pR
          } while (!uR(RR, JR, WR));
          if (!bR) break;
          VR = ZR(RR, gR, JR - gR, fR, VR);
          do {
            for (XR = JR, MR = 4; JR + MR < lR && RR[JR + MR] === RR[WR + MR];) MR += 1;
            if (JR += MR, VR = iR(fR, VR, XR - WR, MR), gR = JR, JR >= aR) {
              bR = !1;
              break
            }
            eR[yR(tR(RR, JR - 1), wR)] = JR - 1 - pR, WR = pR + eR[BR = yR(tR(RR, JR), wR)], eR[BR] = JR - pR
          } while (uR(RR, JR, WR));
          if (!bR) break;
          nR = yR(tR(RR, JR += 1), wR)
        }
      return gR < lR && (VR = ZR(RR, gR, lR - gR, fR, VR)), VR
    }

    function VR(RR) {
      this.array = RR
    }
    VR.prototype.maxCompressedLength = function() {
      var RR = this.array.length;
      return 32 + RR + Math.floor(RR / 6)
    }, VR.prototype.compressToBuffer = function(RR) {
      var JR, GR = this.array,
        yR = GR.length,
        tR = 0,
        uR = 0;
      for (uR = function(RR, JR, GR) {
          do {
            JR[GR] = 127 & RR, (RR >>>= 7) > 0 && (JR[GR] += 128), GR += 1
          } while (RR > 0);
          return GR
        }(yR, RR, uR); tR < yR;) uR = fR(GR, tR, JR = Math.min(yR - tR, 65536), RR, uR), tR += JR;
      return uR
    }, JR.d = VR
  },
  41017: (RR, JR) => {
    var GR = [0, 255, 65535, 16777215, 4294967295];

    function yR(RR, JR, GR, yR, tR) {
      var uR;
      for (uR = 0; uR < tR; uR++) GR[yR + uR] = RR[JR + uR]
    }

    function tR(RR, JR, GR, yR) {
      var tR;
      for (tR = 0; tR < yR; tR++) RR[JR + tR] = RR[JR - GR + tR]
    }

    function uR(RR) {
      this.array = RR, this.pos = 0
    }
    uR.prototype.readUncompressedLength = function() {
      for (var RR, JR, GR = 0, yR = 0; yR < 32 && this.pos < this.array.length;) {
        if (RR = this.array[this.pos], this.pos += 1, (JR = 127 & RR) << yR >>> yR !== JR) return -1;
        if (GR |= JR << yR, RR < 128) return GR;
        yR += 7
      }
      return -1
    }, uR.prototype.uncompressToBuffer = function(RR) {
      for (var JR, uR, ZR, qR, iR = this.array, fR = iR.length, VR = this.pos, KR = 0; VR < iR.length;)
        if (JR = iR[VR], VR += 1, 0 === (3 & JR)) {
          if ((uR = 1 + (JR >>> 2)) > 60) {
            if (VR + 3 >= fR) return !1;
            ZR = uR - 60, uR = 1 + ((uR = iR[VR] + (iR[VR + 1] << 8) + (iR[VR + 2] << 16) + (iR[VR + 3] << 24)) & GR[ZR]), VR += ZR
          }
          if (VR + uR > fR) return !1;
          yR(iR, VR, RR, KR, uR), VR += uR, KR += uR
        } else {
          switch (3 & JR) {
            case 1:
              uR = 4 + (JR >>> 2 & 7), qR = iR[VR] + (JR >>> 5 << 8), VR += 1;
              break;
            case 2:
              if (VR + 1 >= fR) return !1;
              uR = 1 + (JR >>> 2), qR = iR[VR] + (iR[VR + 1] << 8), VR += 2;
              break;
            case 3:
              if (VR + 3 >= fR) return !1;
              uR = 1 + (JR >>> 2), qR = iR[VR] + (iR[VR + 1] << 8) + (iR[VR + 2] << 16) + (iR[VR + 3] << 24), VR += 4
          }
          if (0 === qR || qR > KR) return !1;
          tR(RR, KR, qR, uR), KR += uR
        } return !0
    }, JR.b = uR
  },
  37156: RR => {
    RR.exports = function(RR, JR, GR, yR) {
      var tR = self || window;
      try {
        try {
          var uR;
          try {
            uR = new tR.Blob([RR])
          } catch (fR) {
            (uR = new(tR.BlobBuilder || tR.WebKitBlobBuilder || tR.MozBlobBuilder || tR.MSBlobBuilder)).append(RR), uR = uR.getBlob()
          }
          var ZR = tR.URL || tR.webkitURL,
            qR = ZR.createObjectURL(uR),
            iR = new tR[JR](qR, GR);
          return ZR.revokeObjectURL(qR), iR
        } catch (fR) {
          return new tR[JR]("data:application/javascript,".concat(encodeURIComponent(RR)), GR)
        }
      } catch (fR) {
        if (!yR) throw Error("Inline worker is not supported");
        return new tR[JR](yR, GR)
      }
    }
  },
  41128: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => tR,
      i: () => fR,
      j: () => rR,
      k: () => ZR,
      l: () => eR
    });
    var yR = GR(41130);
    const tR = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      uR = [-1, 1, 2, 3, 4, 5, 6, 8],
      ZR = RR => {
        if (!RR || RR.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const JR = new yR.b(RR),
          GR = qR(JR),
          {
            frequencyIndex: tR,
            sampleRate: ZR
          } = iR(JR),
          fR = JR.readBits(4);
        let VR = null;
        fR >= 1 && fR <= 7 && (VR = uR[fR]);
        let KR = GR,
          wR = !1,
          rR = ZR;
        if (5 === GR || 29 === GR) wR = 29 === GR, rR = iR(JR).sampleRate, KR = qR(JR), 22 === KR && JR.skipBits(4);
        else
          for (; JR.getBitsLeft() > 15;) {
            const RR = JR.pos;
            if (695 === JR.readBits(11)) {
              5 === qR(JR) && JR.readBits(1) && (rR = iR(JR).sampleRate, JR.getBitsLeft() > 11 && 1352 === JR.readBits(11) && (wR = !!JR.readBits(1)));
              break
            }
            JR.pos = RR + 1
          }
        return null !== VR && VR > 1 && (wR = !1), {
          objectType: GR,
          coreObjectType: KR,
          frequencyIndex: tR,
          channelConfiguration: fR,
          outputSampleRate: rR,
          outputNumberOfChannels: wR && 1 === VR ? 2 : VR
        }
      },
      qR = RR => {
        const JR = RR.readBits(5);
        return 31 === JR ? 32 + RR.readBits(6) : JR
      },
      iR = RR => {
        const JR = RR.readBits(4);
        return 15 === JR ? {
          frequencyIndex: JR,
          sampleRate: RR.readBits(24)
        } : {
          frequencyIndex: JR,
          sampleRate: JR < tR.length ? tR[JR] : null
        }
      },
      fR = RR => {
        const JR = 5 === RR.objectType || 29 === RR.objectType,
          GR = 29 === RR.objectType,
          tR = JR ? RR.outputSampleRate / 2 : RR.outputSampleRate,
          ZR = GR ? 1 : RR.outputNumberOfChannels,
          qR = uR.indexOf(ZR);
        if (-1 === qR) throw new TypeError(`Unsupported number of channels: ${RR.outputNumberOfChannels}`);
        let iR = 16;
        RR.objectType >= 32 && (iR += 6), 15 === wR(tR) && (iR += 24), JR && (iR += 9, 15 === wR(RR.outputSampleRate) && (iR += 24));
        const fR = Math.ceil(iR / 8),
          rR = new Uint8Array(fR),
          eR = new yR.b(rR);
        return VR(eR, RR.objectType), KR(eR, tR), eR.writeBits(4, qR), JR && (KR(eR, RR.outputSampleRate), VR(eR, 2)), eR.writeBits(3, 0), rR
      },
      VR = (RR, JR) => {
        JR < 32 ? RR.writeBits(5, JR) : (RR.writeBits(5, 31), RR.writeBits(6, JR - 32))
      },
      KR = (RR, JR) => {
        const GR = wR(JR);
        RR.writeBits(4, GR), 15 === GR && RR.writeBits(24, JR)
      },
      wR = RR => {
        const JR = tR.indexOf(RR);
        return -1 === JR ? 15 : JR
      },
      rR = RR => {
        const JR = new Uint8Array(7),
          GR = new yR.b(JR),
          {
            coreObjectType: tR,
            frequencyIndex: uR,
            channelConfiguration: ZR
          } = RR,
          qR = tR - 1;
        return GR.writeBits(12, 4095), GR.writeBits(1, 0), GR.writeBits(2, 0), GR.writeBits(1, 1), GR.writeBits(2, qR), GR.writeBits(4, uR), GR.writeBits(1, 0), GR.writeBits(3, ZR), GR.writeBits(1, 0), GR.writeBits(1, 0), GR.writeBits(1, 0), GR.writeBits(1, 0), GR.skipBits(13), GR.writeBits(11, 2047), GR.writeBits(2, 0), {
          header: JR,
          bitstream: GR
        }
      },
      eR = (RR, JR) => {
        RR.pos = 30, RR.writeBits(13, JR)
      }
  },
  41130: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      constructor(RR) {
        this.bytes = RR, this.pos = 0
      }
      seekToByte(RR) {
        this.pos = 8 * RR
      }
      readBit() {
        const RR = Math.floor(this.pos / 8),
          JR = this.bytes[RR] ?? 0,
          GR = 7 - (7 & this.pos),
          yR = (JR & 1 << GR) >> GR;
        return this.pos++, yR
      }
      readBits(RR) {
        if (1 === RR) return this.readBit();
        let JR = 0;
        for (let GR = 0; GR < RR; GR++) JR <<= 1, JR |= this.readBit();
        return JR
      }
      writeBits(RR, JR) {
        const GR = this.pos + RR;
        for (let yR = this.pos; yR < GR; yR++) {
          const RR = Math.floor(yR / 8);
          let tR = this.bytes[RR];
          const uR = 7 - (7 & yR);
          tR &= ~(1 << uR), tR |= (JR & 1 << GR - yR - 1) >> GR - yR - 1 << uR, this.bytes[RR] = tR
        }
        this.pos = GR
      }
      copyBits(RR, JR) {
        let GR = 0;
        for (; GR < RR - 7; GR += 8) this.writeBits(8, JR.readBits(8));
        const yR = RR - GR;
        yR > 0 && this.writeBits(yR, JR.readBits(yR))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const RR = this.pos / 8,
          JR = this.bytes[RR] ?? 0;
        return this.pos += 8, JR
      }
      skipBits(RR) {
        this.pos += RR
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const RR = new yR(this.bytes);
        return RR.pos = this.pos, RR
      }
    }
  },
  41140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => hR,
      c: () => iR,
      f: () => RJ,
      j: () => FR,
      n: () => fR,
      q: () => jR,
      u: () => eJ,
      v: () => nR,
      x: () => UR,
      A: () => TR,
      C: () => CR,
      D: () => cR,
      H: () => QR,
      O: () => SR,
      L: () => WR,
      Q: () => gR,
      U: () => eR,
      V: () => pR,
      X: () => mR,
      $: () => wR,
      cb: () => rR,
      eb: () => sR,
      gb: () => KJ,
      hb: () => GJ,
      ib: () => kR,
      jb: () => dR,
      kb: () => YR,
      lb: () => AR,
      ob: () => oR
    });
    var yR = GR(41133),
      tR = GR(41115),
      uR = GR(41147);
    const ZR = [48e3, 44100, 32e3],
      qR = [24e3, 22050, 16e3];
    var iR, fR, VR = GR(41130),
      KR = GR(41149);
    ! function(RR) {
      RR[RR.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", RR[RR.SLICE_DPA = 2] = "SLICE_DPA", RR[RR.SLICE_DPB = 3] = "SLICE_DPB", RR[RR.SLICE_DPC = 4] = "SLICE_DPC", RR[RR.IDR = 5] = "IDR", RR[RR.SEI = 6] = "SEI", RR[RR.SPS = 7] = "SPS", RR[RR.PPS = 8] = "PPS", RR[RR.AUD = 9] = "AUD", RR[RR.SPS_EXT = 13] = "SPS_EXT"
    }(iR || (iR = {})),
    function(RR) {
      RR[RR.RASL_N = 8] = "RASL_N", RR[RR.RASL_R = 9] = "RASL_R", RR[RR.BLA_W_LP = 16] = "BLA_W_LP", RR[RR.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", RR[RR.VPS_NUT = 32] = "VPS_NUT", RR[RR.SPS_NUT = 33] = "SPS_NUT", RR[RR.PPS_NUT = 34] = "PPS_NUT", RR[RR.AUD_NUT = 35] = "AUD_NUT", RR[RR.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", RR[RR.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(fR || (fR = {}));
    const wR = function*(RR) {
        let JR = 0,
          GR = -1;
        for (; JR < RR.length - 2;) {
          const yR = RR.indexOf(0, JR);
          if (-1 === yR || yR >= RR.length - 2) break;
          JR = yR;
          let tR = 0;
          JR + 3 < RR.length && 0 === RR[JR + 1] && 0 === RR[JR + 2] && 1 === RR[JR + 3] ? tR = 4 : 0 === RR[JR + 1] && 1 === RR[JR + 2] && (tR = 3), 0 !== tR ? (-1 !== GR && JR > GR && (yield {
            offset: GR,
            length: JR - GR
          }), GR = JR + tR, JR = GR) : JR++
        } - 1 !== GR && GR < RR.length && (yield {
          offset: GR,
          length: RR.length - GR
        })
      },
      rR = function*(RR, JR) {
        let GR = 0;
        const yR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
        for (; GR + JR <= RR.length;) {
          let RR;
          1 === JR ? RR = yR.getUint8(GR) : 2 === JR ? RR = yR.getUint16(GR, !1) : 3 === JR ? RR = (0, tR.nb)(yR, GR, !1) : ((0, tR.I)(4 === JR), RR = yR.getUint32(GR, !1)), GR += JR, yield {
            offset: GR,
            length: RR
          }, GR += RR
        }
      },
      eR = RR => 31 & RR,
      aR = RR => {
        const JR = [],
          GR = RR.length;
        for (let yR = 0; yR < GR; yR++) yR + 2 < GR && 0 === RR[yR] && 0 === RR[yR + 1] && 3 === RR[yR + 2] ? (JR.push(0, 0), yR += 2) : JR.push(RR[yR]);
        return new Uint8Array(JR)
      },
      LR = new Uint8Array([0, 0, 0, 1]),
      nR = RR => {
        const JR = RR.reduce(((RR, JR) => RR + LR.byteLength + JR.byteLength), 0),
          GR = new Uint8Array(JR);
        let yR = 0;
        for (const tR of RR) GR.set(LR, yR), yR += LR.byteLength, GR.set(tR, yR), yR += tR.byteLength;
        return GR
      },
      UR = (RR, JR) => {
        const GR = RR.reduce(((RR, GR) => RR + JR + GR.byteLength), 0),
          yR = new Uint8Array(GR);
        let uR = 0;
        for (const ZR of RR) {
          const RR = new DataView(yR.buffer, yR.byteOffset, yR.byteLength);
          switch (JR) {
            case 1:
              RR.setUint8(uR, ZR.byteLength);
              break;
            case 2:
              RR.setUint16(uR, ZR.byteLength, !1);
              break;
            case 3:
              (0, tR.Nc)(RR, uR, ZR.byteLength, !1);
              break;
            case 4:
              RR.setUint32(uR, ZR.byteLength, !1)
          }
          uR += JR, yR.set(ZR, uR), uR += ZR.byteLength
        }
        return yR
      },
      WR = RR => {
        try {
          const JR = [],
            GR = [],
            yR = [];
          for (const tR of wR(RR)) {
            const uR = RR.subarray(tR.offset, tR.offset + tR.length),
              ZR = eR(uR[0]);
            ZR === iR.SPS ? JR.push(uR) : ZR === iR.PPS ? GR.push(uR) : ZR === iR.SPS_EXT && yR.push(uR)
          }
          if (0 === JR.length) return null;
          if (0 === GR.length) return null;
          const uR = JR[0],
            ZR = MR(uR);
          (0, tR.I)(null !== ZR);
          const qR = 100 === ZR.profileIdc || 110 === ZR.profileIdc || 122 === ZR.profileIdc || 144 === ZR.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: ZR.profileIdc,
            profileCompatibility: ZR.constraintFlags,
            avcLevelIndication: ZR.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: JR,
            pictureParameterSets: GR,
            chromaFormat: qR ? ZR.chromaFormatIdc : null,
            bitDepthLumaMinus8: qR ? ZR.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: qR ? ZR.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: qR ? yR : null
          }
        } catch (JR) {
          return uR.e._error("Error building AVC Decoder Configuration Record:", JR), null
        }
      },
      AR = RR => {
        const JR = [];
        JR.push(RR.configurationVersion), JR.push(RR.avcProfileIndication), JR.push(RR.profileCompatibility), JR.push(RR.avcLevelIndication), JR.push(252 | 3 & RR.lengthSizeMinusOne), JR.push(224 | 31 & RR.sequenceParameterSets.length);
        for (const GR of RR.sequenceParameterSets) {
          const RR = GR.byteLength;
          JR.push(RR >> 8), JR.push(255 & RR);
          for (let yR = 0; yR < RR; yR++) JR.push(GR[yR])
        }
        JR.push(RR.pictureParameterSets.length);
        for (const GR of RR.pictureParameterSets) {
          const RR = GR.byteLength;
          JR.push(RR >> 8), JR.push(255 & RR);
          for (let yR = 0; yR < RR; yR++) JR.push(GR[yR])
        }
        if ((100 === RR.avcProfileIndication || 110 === RR.avcProfileIndication || 122 === RR.avcProfileIndication || 144 === RR.avcProfileIndication) && null !== RR.chromaFormat) {
          (0, tR.I)(null !== RR.bitDepthLumaMinus8), (0, tR.I)(null !== RR.bitDepthChromaMinus8), (0, tR.I)(null !== RR.sequenceParameterSetExt), JR.push(252 | 3 & RR.chromaFormat), JR.push(248 | 7 & RR.bitDepthLumaMinus8), JR.push(248 | 7 & RR.bitDepthChromaMinus8), JR.push(RR.sequenceParameterSetExt.length);
          for (const GR of RR.sequenceParameterSetExt) {
            const RR = GR.byteLength;
            JR.push(RR >> 8), JR.push(255 & RR);
            for (let yR = 0; yR < RR; yR++) JR.push(GR[yR])
          }
        }
        return new Uint8Array(JR)
      },
      CR = RR => {
        try {
          const JR = (0, tR.ad)(RR);
          let GR = 0;
          const yR = JR.getUint8(GR++),
            uR = JR.getUint8(GR++),
            ZR = JR.getUint8(GR++),
            qR = JR.getUint8(GR++),
            iR = 3 & JR.getUint8(GR++),
            fR = 31 & JR.getUint8(GR++),
            VR = [];
          for (let tR = 0; tR < fR; tR++) {
            const yR = JR.getUint16(GR, !1);
            GR += 2, VR.push(RR.subarray(GR, GR + yR)), GR += yR
          }
          const KR = JR.getUint8(GR++),
            wR = [];
          for (let tR = 0; tR < KR; tR++) {
            const yR = JR.getUint16(GR, !1);
            GR += 2, wR.push(RR.subarray(GR, GR + yR)), GR += yR
          }
          const rR = {
            configurationVersion: yR,
            avcProfileIndication: uR,
            profileCompatibility: ZR,
            avcLevelIndication: qR,
            lengthSizeMinusOne: iR,
            sequenceParameterSets: VR,
            pictureParameterSets: wR,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === uR || 110 === uR || 122 === uR || 144 === uR) && GR + 4 <= RR.length) {
            const yR = 3 & JR.getUint8(GR++),
              tR = 7 & JR.getUint8(GR++),
              uR = 7 & JR.getUint8(GR++),
              ZR = JR.getUint8(GR++);
            rR.chromaFormat = yR, rR.bitDepthLumaMinus8 = tR, rR.bitDepthChromaMinus8 = uR;
            const qR = [];
            for (let iR = 0; iR < ZR; iR++) {
              const yR = JR.getUint16(GR, !1);
              GR += 2, qR.push(RR.subarray(GR, GR + yR)), GR += yR
            }
            rR.sequenceParameterSetExt = qR
          }
          return rR
        } catch (JR) {
          return uR.e._error("Error deserializing AVC Decoder Configuration Record:", JR), null
        }
      },
      XR = {
        1: {
          num: 1,
          den: 1
        },
        2: {
          num: 12,
          den: 11
        },
        3: {
          num: 10,
          den: 11
        },
        4: {
          num: 16,
          den: 11
        },
        5: {
          num: 40,
          den: 33
        },
        6: {
          num: 24,
          den: 11
        },
        7: {
          num: 20,
          den: 11
        },
        8: {
          num: 32,
          den: 11
        },
        9: {
          num: 80,
          den: 33
        },
        10: {
          num: 18,
          den: 11
        },
        11: {
          num: 15,
          den: 11
        },
        12: {
          num: 64,
          den: 33
        },
        13: {
          num: 160,
          den: 99
        },
        14: {
          num: 4,
          den: 3
        },
        15: {
          num: 3,
          den: 2
        },
        16: {
          num: 2,
          den: 1
        }
      },
      MR = RR => {
        try {
          const JR = aR(RR),
            GR = new VR.b(JR);
          GR.skipBits(1), GR.skipBits(2);
          if (7 !== GR.readBits(5)) return null;
          const uR = GR.readAlignedByte(),
            ZR = GR.readAlignedByte(),
            qR = GR.readAlignedByte();
          (0, tR.uc)(GR);
          let iR = 1,
            fR = 0,
            KR = 0,
            wR = 0;
          if (100 === uR || 110 === uR || 122 === uR || 244 === uR || 44 === uR || 83 === uR || 86 === uR || 118 === uR || 128 === uR) {
            iR = (0, tR.uc)(GR), 3 === iR && (wR = GR.readBits(1)), fR = (0, tR.uc)(GR), KR = (0, tR.uc)(GR), GR.skipBits(1);
            if (GR.readBits(1))
              for (let RR = 0; RR < (3 !== iR ? 8 : 12); RR++) {
                if (GR.readBits(1)) {
                  const JR = RR < 6 ? 16 : 64;
                  let yR = 8,
                    uR = 8;
                  for (let RR = 0; RR < JR; RR++) {
                    if (0 !== uR) {
                      uR = (yR + (0, tR.vc)(GR) + 256) % 256
                    }
                    yR = 0 === uR ? yR : uR
                  }
                }
              }
          }(0, tR.uc)(GR);
          const rR = (0, tR.uc)(GR);
          if (0 === rR)(0, tR.uc)(GR);
          else if (1 === rR) {
            GR.skipBits(1), (0, tR.vc)(GR), (0, tR.vc)(GR);
            const RR = (0, tR.uc)(GR);
            for (let JR = 0; JR < RR; JR++)(0, tR.vc)(GR)
          }(0, tR.uc)(GR), GR.skipBits(1);
          const eR = (0, tR.uc)(GR),
            LR = (0, tR.uc)(GR),
            nR = 16 * (eR + 1),
            UR = 16 * (LR + 1);
          let WR = nR,
            AR = UR;
          const CR = GR.readBits(1);
          CR || GR.skipBits(1), GR.skipBits(1);
          if (GR.readBits(1)) {
            const RR = (0, tR.uc)(GR),
              JR = (0, tR.uc)(GR),
              yR = (0, tR.uc)(GR),
              uR = (0, tR.uc)(GR);
            let ZR, qR;
            if (0 === (0 === wR ? iR : 0)) ZR = 1, qR = 2 - CR;
            else {
              ZR = 3 === iR ? 1 : 2, qR = (1 === iR ? 2 : 1) * (2 - CR)
            }
            WR -= ZR * (RR + JR), AR -= qR * (yR + uR)
          }
          let MR = 2,
            lR = 2,
            pR = 2,
            gR = 0,
            bR = {
              num: 1,
              den: 1
            },
            vR = null,
            OR = null,
            xR = null,
            NR = null;
          const DR = GR.pos;
          if (GR.readBits(1)) {
            if (GR.readBits(1)) {
              const RR = GR.readBits(8);
              if (255 === RR) bR = {
                num: GR.readBits(16),
                den: GR.readBits(16)
              };
              else {
                const JR = XR[RR];
                JR && (bR = JR)
              }
            }
            GR.readBits(1) && GR.skipBits(1);
            if (GR.readBits(1)) {
              GR.skipBits(3), gR = GR.readBits(1);
              GR.readBits(1) && (MR = GR.readBits(8), lR = GR.readBits(8), pR = GR.readBits(8))
            }
            GR.readBits(1) && ((0, tR.uc)(GR), (0, tR.uc)(GR));
            GR.readBits(1) && (GR.skipBits(32), GR.skipBits(32), GR.skipBits(1));
            const RR = GR.readBits(1);
            RR && BR(GR);
            const JR = GR.readBits(1);
            JR && BR(GR), (RR || JR) && GR.skipBits(1), GR.skipBits(1), xR = GR.pos, NR = GR.readBits(1), NR && (GR.skipBits(1), (0, tR.uc)(GR), (0, tR.uc)(GR), (0, tR.uc)(GR), (0, tR.uc)(GR), vR = (0, tR.uc)(GR), OR = (0, tR.uc)(GR))
          }
          if (null === vR) {
            (0, tR.I)(null === OR);
            if (44 !== uR && 86 !== uR && 100 !== uR && 110 !== uR && 122 !== uR && 244 !== uR || !(16 & ZR)) {
              const RR = eR + 1,
                JR = (2 - CR) * (LR + 1),
                GR = yR.e.find((RR => RR.level >= qR)) ?? (0, tR.$b)(yR.e),
                uR = Math.min(Math.floor(GR.maxDpbMbs / (RR * JR)), 16);
              vR = uR, OR = uR
            } else vR = 0, OR = 0
          }
          return (0, tR.I)(null !== OR), {
            emulationUnpreventedBytes: JR,
            profileIdc: uR,
            constraintFlags: ZR,
            levelIdc: qR,
            frameMbsOnlyFlag: CR,
            chromaFormatIdc: iR,
            bitDepthLumaMinus8: fR,
            bitDepthChromaMinus8: KR,
            codedWidth: nR,
            codedHeight: UR,
            displayWidth: WR,
            displayHeight: AR,
            pixelAspectRatio: bR,
            colourPrimaries: MR,
            matrixCoefficients: pR,
            transferCharacteristics: lR,
            fullRangeFlag: gR,
            numReorderFrames: vR,
            maxDecFrameBuffering: OR,
            vuiParametersFlagBitOffset: DR,
            bitstreamRestrictionFlagBitOffset: xR,
            bitstreamRestrictionFlag: NR
          }
        } catch (JR) {
          return uR.e._error("Error parsing AVC SPS:", JR), null
        }
      },
      BR = RR => {
        const JR = (0, tR.uc)(RR);
        RR.skipBits(4), RR.skipBits(4);
        for (let GR = 0; GR <= JR; GR++)(0, tR.uc)(RR), (0, tR.uc)(RR), RR.skipBits(1);
        RR.skipBits(5), RR.skipBits(5), RR.skipBits(5), RR.skipBits(5)
      },
      lR = (RR, JR) => {
        if (JR.description) {
          const GR = 3 & (0, tR.cd)(JR.description)[21];
          return rR(RR, GR + 1)
        }
        return wR(RR)
      },
      pR = RR => RR >> 1 & 63,
      gR = RR => {
        try {
          const JR = [],
            GR = [],
            yR = [],
            ZR = [];
          for (const tR of wR(RR)) {
            const uR = RR.subarray(tR.offset, tR.offset + tR.length),
              qR = pR(uR[0]);
            qR === fR.VPS_NUT ? JR.push(uR) : qR === fR.SPS_NUT ? GR.push(uR) : qR === fR.PPS_NUT ? yR.push(uR) : qR !== fR.PREFIX_SEI_NUT && qR !== fR.SUFFIX_SEI_NUT || ZR.push(uR)
          }
          if (0 === GR.length || 0 === yR.length) return null;
          const qR = (RR => {
            try {
              const JR = new VR.b(aR(RR));
              JR.skipBits(16), JR.readBits(4);
              const GR = JR.readBits(3),
                yR = JR.readBits(1),
                {
                  general_profile_space: uR,
                  general_tier_flag: ZR,
                  general_profile_idc: qR,
                  general_profile_compatibility_flags: iR,
                  general_constraint_indicator_flags: fR,
                  general_level_idc: KR
                } = bR(JR, GR);
              (0, tR.uc)(JR);
              const wR = (0, tR.uc)(JR);
              let rR = 0;
              3 === wR && (rR = JR.readBits(1));
              const eR = (0, tR.uc)(JR),
                LR = (0, tR.uc)(JR);
              let nR = eR,
                UR = LR;
              if (JR.readBits(1)) {
                const RR = (0, tR.uc)(JR),
                  GR = (0, tR.uc)(JR),
                  yR = (0, tR.uc)(JR),
                  uR = (0, tR.uc)(JR);
                let ZR = 1,
                  qR = 1;
                const iR = 0 === rR ? wR : 0;
                1 === iR ? (ZR = 2, qR = 2) : 2 === iR && (ZR = 2, qR = 1), nR -= (RR + GR) * ZR, UR -= (yR + uR) * qR
              }
              const WR = (0, tR.uc)(JR),
                AR = (0, tR.uc)(JR);
              (0, tR.uc)(JR);
              const CR = JR.readBits(1);
              let XR = 0;
              for (let RR = CR ? 0 : GR; RR <= GR; RR++)(0, tR.uc)(JR), XR = (0, tR.uc)(JR), (0, tR.uc)(JR);
              (0, tR.uc)(JR), (0, tR.uc)(JR), (0, tR.uc)(JR), (0, tR.uc)(JR), (0, tR.uc)(JR), (0, tR.uc)(JR), JR.readBits(1) && JR.readBits(1) && vR(JR), JR.skipBits(1), JR.skipBits(1), JR.readBits(1) && (JR.skipBits(4), JR.skipBits(4), (0, tR.uc)(JR), (0, tR.uc)(JR), JR.skipBits(1));
              const MR = (0, tR.uc)(JR);
              if (OR(JR, MR), JR.readBits(1)) {
                const RR = (0, tR.uc)(JR);
                for (let GR = 0; GR < RR; GR++)(0, tR.uc)(JR), JR.skipBits(1)
              }
              JR.skipBits(1), JR.skipBits(1);
              let BR = 2,
                lR = 2,
                pR = 2,
                gR = 0,
                xR = 0,
                DR = {
                  num: 1,
                  den: 1
                };
              if (JR.readBits(1)) {
                const RR = NR(JR, GR);
                DR = RR.pixelAspectRatio, BR = RR.colourPrimaries, lR = RR.transferCharacteristics, pR = RR.matrixCoefficients, gR = RR.fullRangeFlag, xR = RR.minSpatialSegmentationIdc
              }
              return {
                displayWidth: nR,
                displayHeight: UR,
                pixelAspectRatio: DR,
                colourPrimaries: BR,
                transferCharacteristics: lR,
                matrixCoefficients: pR,
                fullRangeFlag: gR,
                maxDecFrameBuffering: XR + 1,
                spsMaxSubLayersMinus1: GR,
                spsTemporalIdNestingFlag: yR,
                generalProfileSpace: uR,
                generalTierFlag: ZR,
                generalProfileIdc: qR,
                generalProfileCompatibilityFlags: iR,
                generalConstraintIndicatorFlags: fR,
                generalLevelIdc: KR,
                chromaFormatIdc: wR,
                bitDepthLumaMinus8: WR,
                bitDepthChromaMinus8: AR,
                minSpatialSegmentationIdc: xR
              }
            } catch (JR) {
              return uR.e._error("Error parsing HEVC SPS:", JR), null
            }
          })(GR[0]);
          if (!qR) return null;
          let iR = 0;
          if (yR.length > 0) {
            const RR = yR[0],
              JR = new VR.b(aR(RR));
            JR.skipBits(16), (0, tR.uc)(JR), (0, tR.uc)(JR), JR.skipBits(1), JR.skipBits(1), JR.skipBits(3), JR.skipBits(1), JR.skipBits(1), (0, tR.uc)(JR), (0, tR.uc)(JR), (0, tR.vc)(JR), JR.skipBits(1), JR.skipBits(1), JR.readBits(1) && (0, tR.uc)(JR), (0, tR.vc)(JR), (0, tR.vc)(JR), JR.skipBits(1), JR.skipBits(1), JR.skipBits(1), JR.skipBits(1);
            const GR = JR.readBits(1),
              uR = JR.readBits(1);
            iR = GR || uR ? GR && !uR ? 2 : !GR && uR ? 3 : 0 : 0
          }
          const KR = [...JR.length ? [{
            arrayCompleteness: 1,
            nalUnitType: fR.VPS_NUT,
            nalUnits: JR
          }] : [], ...GR.length ? [{
            arrayCompleteness: 1,
            nalUnitType: fR.SPS_NUT,
            nalUnits: GR
          }] : [], ...yR.length ? [{
            arrayCompleteness: 1,
            nalUnitType: fR.PPS_NUT,
            nalUnits: yR
          }] : [], ...ZR.length ? [{
            arrayCompleteness: 1,
            nalUnitType: pR(ZR[0][0]),
            nalUnits: ZR
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: qR.generalProfileSpace,
            generalTierFlag: qR.generalTierFlag,
            generalProfileIdc: qR.generalProfileIdc,
            generalProfileCompatibilityFlags: qR.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: qR.generalConstraintIndicatorFlags,
            generalLevelIdc: qR.generalLevelIdc,
            minSpatialSegmentationIdc: qR.minSpatialSegmentationIdc,
            parallelismType: iR,
            chromaFormatIdc: qR.chromaFormatIdc,
            bitDepthLumaMinus8: qR.bitDepthLumaMinus8,
            bitDepthChromaMinus8: qR.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: qR.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: qR.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: KR
          }
        } catch (JR) {
          return uR.e._error("Error building HEVC Decoder Configuration Record:", JR), null
        }
      },
      bR = (RR, JR) => {
        const GR = RR.readBits(2),
          yR = RR.readBits(1),
          tR = RR.readBits(5);
        let uR = 0;
        for (let VR = 0; VR < 32; VR++) uR = uR << 1 | RR.readBits(1);
        const ZR = new Uint8Array(6);
        for (let VR = 0; VR < 6; VR++) ZR[VR] = RR.readBits(8);
        const qR = RR.readBits(8),
          iR = [],
          fR = [];
        for (let VR = 0; VR < JR; VR++) iR.push(RR.readBits(1)), fR.push(RR.readBits(1));
        if (JR > 0)
          for (let VR = JR; VR < 8; VR++) RR.skipBits(2);
        for (let VR = 0; VR < JR; VR++) iR[VR] && RR.skipBits(88), fR[VR] && RR.skipBits(8);
        return {
          general_profile_space: GR,
          general_tier_flag: yR,
          general_profile_idc: tR,
          general_profile_compatibility_flags: uR,
          general_constraint_indicator_flags: ZR,
          general_level_idc: qR
        }
      },
      vR = RR => {
        for (let JR = 0; JR < 4; JR++)
          for (let GR = 0; GR < (3 === JR ? 2 : 6); GR++) {
            if (RR.readBits(1)) {
              const GR = Math.min(64, 1 << 4 + (JR << 1));
              JR > 1 && (0, tR.vc)(RR);
              for (let JR = 0; JR < GR; JR++)(0, tR.vc)(RR)
            } else(0, tR.uc)(RR)
          }
      },
      OR = (RR, JR) => {
        const GR = [];
        for (let yR = 0; yR < JR; yR++) GR[yR] = xR(RR, yR, JR, GR)
      },
      xR = (RR, JR, GR, yR) => {
        let uR = 0,
          ZR = 0,
          qR = 0;
        if (0 !== JR && (ZR = RR.readBits(1)), ZR) {
          if (JR === GR) {
            qR = JR - ((0, tR.uc)(RR) + 1)
          } else qR = JR - 1;
          RR.readBits(1), (0, tR.uc)(RR);
          const ZR = yR[qR] ?? 0;
          for (let JR = 0; JR <= ZR; JR++) {
            RR.readBits(1) || RR.readBits(1)
          }
          uR = yR[qR]
        } else {
          const JR = (0, tR.uc)(RR),
            GR = (0, tR.uc)(RR);
          for (let yR = 0; yR < JR; yR++)(0, tR.uc)(RR), RR.readBits(1);
          for (let yR = 0; yR < GR; yR++)(0, tR.uc)(RR), RR.readBits(1);
          uR = JR + GR
        }
        return uR
      },
      NR = (RR, JR) => {
        let GR = 2,
          yR = 2,
          uR = 2,
          ZR = 0,
          qR = 0,
          iR = {
            num: 1,
            den: 1
          };
        if (RR.readBits(1)) {
          const JR = RR.readBits(8);
          if (255 === JR) iR = {
            num: RR.readBits(16),
            den: RR.readBits(16)
          };
          else {
            const RR = XR[JR];
            RR && (iR = RR)
          }
        }
        return RR.readBits(1) && RR.readBits(1), RR.readBits(1) && (RR.readBits(3), ZR = RR.readBits(1), RR.readBits(1) && (GR = RR.readBits(8), yR = RR.readBits(8), uR = RR.readBits(8))), RR.readBits(1) && ((0, tR.uc)(RR), (0, tR.uc)(RR)), RR.readBits(1), RR.readBits(1), RR.readBits(1), RR.readBits(1) && ((0, tR.uc)(RR), (0, tR.uc)(RR), (0, tR.uc)(RR), (0, tR.uc)(RR)), RR.readBits(1) && (RR.readBits(32), RR.readBits(32), RR.readBits(1) && (0, tR.uc)(RR), RR.readBits(1) && DR(RR, !0, JR)), RR.readBits(1) && (RR.readBits(1), RR.readBits(1), RR.readBits(1), qR = (0, tR.uc)(RR), (0, tR.uc)(RR), (0, tR.uc)(RR), (0, tR.uc)(RR), (0, tR.uc)(RR)), {
          pixelAspectRatio: iR,
          colourPrimaries: GR,
          transferCharacteristics: yR,
          matrixCoefficients: uR,
          fullRangeFlag: ZR,
          minSpatialSegmentationIdc: qR
        }
      },
      DR = (RR, JR, GR) => {
        let yR = !1,
          uR = !1,
          ZR = !1;
        JR && (yR = 1 === RR.readBits(1), uR = 1 === RR.readBits(1), (yR || uR) && (ZR = 1 === RR.readBits(1), ZR && (RR.readBits(8), RR.readBits(5), RR.readBits(1), RR.readBits(5)), RR.readBits(4), RR.readBits(4), ZR && RR.readBits(4), RR.readBits(5), RR.readBits(5), RR.readBits(5)));
        for (let qR = 0; qR <= GR; qR++) {
          let JR = !0;
          1 === RR.readBits(1) || (JR = 1 === RR.readBits(1));
          let GR = !1;
          JR ? (0, tR.uc)(RR) : GR = 1 === RR.readBits(1);
          let qR = 1;
          if (!GR) {
            qR = (0, tR.uc)(RR) + 1
          }
          yR && HR(RR, qR, ZR), uR && HR(RR, qR, ZR)
        }
      },
      HR = (RR, JR, GR) => {
        for (let yR = 0; yR < JR; yR++)(0, tR.uc)(RR), (0, tR.uc)(RR), GR && ((0, tR.uc)(RR), (0, tR.uc)(RR)), RR.readBits(1)
      },
      oR = RR => {
        const JR = [];
        JR.push(RR.configurationVersion), JR.push((3 & RR.generalProfileSpace) << 6 | (1 & RR.generalTierFlag) << 5 | 31 & RR.generalProfileIdc), JR.push(RR.generalProfileCompatibilityFlags >>> 24 & 255), JR.push(RR.generalProfileCompatibilityFlags >>> 16 & 255), JR.push(RR.generalProfileCompatibilityFlags >>> 8 & 255), JR.push(255 & RR.generalProfileCompatibilityFlags), JR.push(...RR.generalConstraintIndicatorFlags), JR.push(255 & RR.generalLevelIdc), JR.push(240 | RR.minSpatialSegmentationIdc >> 8 & 15), JR.push(255 & RR.minSpatialSegmentationIdc), JR.push(252 | 3 & RR.parallelismType), JR.push(252 | 3 & RR.chromaFormatIdc), JR.push(248 | 7 & RR.bitDepthLumaMinus8), JR.push(248 | 7 & RR.bitDepthChromaMinus8), JR.push(RR.avgFrameRate >> 8 & 255), JR.push(255 & RR.avgFrameRate), JR.push((3 & RR.constantFrameRate) << 6 | (7 & RR.numTemporalLayers) << 3 | (1 & RR.temporalIdNested) << 2 | 3 & RR.lengthSizeMinusOne), JR.push(255 & RR.arrays.length);
        for (const GR of RR.arrays) {
          JR.push((1 & GR.arrayCompleteness) << 7 | 63 & GR.nalUnitType), JR.push(GR.nalUnits.length >> 8 & 255), JR.push(255 & GR.nalUnits.length);
          for (const RR of GR.nalUnits) {
            JR.push(RR.length >> 8 & 255), JR.push(255 & RR.length);
            for (let GR = 0; GR < RR.length; GR++) JR.push(RR[GR])
          }
        }
        return new Uint8Array(JR)
      },
      cR = RR => {
        try {
          const JR = (0, tR.ad)(RR);
          let GR = 0;
          const yR = JR.getUint8(GR++),
            uR = JR.getUint8(GR++),
            ZR = uR >> 6 & 3,
            qR = uR >> 5 & 1,
            iR = 31 & uR,
            fR = JR.getUint32(GR, !1);
          GR += 4;
          const VR = RR.subarray(GR, GR + 6);
          GR += 6;
          const KR = JR.getUint8(GR++),
            wR = (15 & JR.getUint8(GR++)) << 8 | JR.getUint8(GR++),
            rR = 3 & JR.getUint8(GR++),
            eR = 3 & JR.getUint8(GR++),
            aR = 7 & JR.getUint8(GR++),
            LR = 7 & JR.getUint8(GR++),
            nR = JR.getUint16(GR, !1);
          GR += 2;
          const UR = JR.getUint8(GR++),
            WR = UR >> 6 & 3,
            AR = UR >> 3 & 7,
            CR = UR >> 2 & 1,
            XR = 3 & UR,
            MR = JR.getUint8(GR++),
            BR = [];
          for (let tR = 0; tR < MR; tR++) {
            const yR = JR.getUint8(GR++),
              tR = yR >> 7 & 1,
              uR = 63 & yR,
              ZR = JR.getUint16(GR, !1);
            GR += 2;
            const qR = [];
            for (let iR = 0; iR < ZR; iR++) {
              const yR = JR.getUint16(GR, !1);
              GR += 2, qR.push(RR.subarray(GR, GR + yR)), GR += yR
            }
            BR.push({
              arrayCompleteness: tR,
              nalUnitType: uR,
              nalUnits: qR
            })
          }
          return {
            configurationVersion: yR,
            generalProfileSpace: ZR,
            generalTierFlag: qR,
            generalProfileIdc: iR,
            generalProfileCompatibilityFlags: fR,
            generalConstraintIndicatorFlags: VR,
            generalLevelIdc: KR,
            minSpatialSegmentationIdc: wR,
            parallelismType: rR,
            chromaFormatIdc: eR,
            bitDepthLumaMinus8: aR,
            bitDepthChromaMinus8: LR,
            avgFrameRate: nR,
            constantFrameRate: WR,
            numTemporalLayers: AR,
            temporalIdNested: CR,
            lengthSizeMinusOne: XR,
            arrays: BR
          }
        } catch (JR) {
          return uR.e._error("Error deserializing HEVC Decoder Configuration Record:", JR), null
        }
      };
    var PR;
    ! function(RR) {
      RR[RR.audAllowed = 0] = "audAllowed", RR[RR.beforeFirstVcl = 1] = "beforeFirstVcl", RR[RR.afterFirstVcl = 2] = "afterFirstVcl", RR[RR.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", RR[RR.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(PR || (PR = {}));
    const IR = {
        1: {
          colourPrimaries: 5,
          transferCharacteristics: 6,
          matrixCoefficients: 5
        },
        2: {
          colourPrimaries: 1,
          transferCharacteristics: 1,
          matrixCoefficients: 1
        },
        3: {
          colourPrimaries: 6,
          transferCharacteristics: 6,
          matrixCoefficients: 6
        },
        4: {
          colourPrimaries: 7,
          transferCharacteristics: 7,
          matrixCoefficients: 7
        },
        5: {
          colourPrimaries: 9,
          transferCharacteristics: 14,
          matrixCoefficients: 9
        },
        7: {
          colourPrimaries: 1,
          transferCharacteristics: 13,
          matrixCoefficients: 0
        }
      },
      mR = RR => {
        const JR = new VR.b(RR);
        if (2 !== JR.readBits(2)) return null;
        const GR = JR.readBits(1),
          uR = (JR.readBits(1) << 1) + GR;
        3 === uR && JR.skipBits(1);
        if (1 === JR.readBits(1)) return null;
        if (0 !== JR.readBits(1)) return null;
        JR.skipBits(2);
        if (4817730 !== JR.readBits(24)) return null;
        let ZR = 8;
        if (uR >= 2) {
          ZR = JR.readBits(1) ? 12 : 10
        }
        const qR = JR.readBits(3);
        let iR = 0,
          fR = 0;
        if (7 !== qR) {
          if (fR = JR.readBits(1), 1 === uR || 3 === uR) {
            const RR = JR.readBits(1),
              GR = JR.readBits(1);
            iR = RR || GR ? RR && !GR ? 2 : 1 : 3, JR.skipBits(1)
          } else iR = 1
        } else iR = 3, fR = 1;
        const KR = (JR.readBits(16) + 1) * (JR.readBits(16) + 1);
        let wR = (0, tR.$b)(yR.w).level;
        for (const tR of yR.w)
          if (KR <= tR.maxPictureSize) {
            wR = tR.level;
            break
          } const rR = IR[qR];
        return {
          profile: uR,
          level: wR,
          bitDepth: ZR,
          chromaSubsampling: iR,
          videoFullRangeFlag: fR,
          colourPrimaries: rR?.colourPrimaries ?? 2,
          transferCharacteristics: rR?.transferCharacteristics ?? 2,
          matrixCoefficients: rR?.matrixCoefficients ?? 2
        }
      },
      zR = function*(RR) {
        const JR = new VR.b(RR),
          GR = () => {
            let RR = 0;
            for (let GR = 0; GR < 8; GR++) {
              const yR = JR.readAlignedByte();
              if (RR += (127 & yR) * 2 ** (7 * GR), !(128 & yR)) break;
              if (7 === GR && 128 & yR) return null
            }
            return RR > 2 ** 32 - 1 ? null : RR
          };
        for (; JR.getBitsLeft() >= 8;) {
          JR.skipBits(1);
          const yR = JR.readBits(4),
            uR = JR.readBits(1),
            ZR = JR.readBits(1);
          let qR;
          if (JR.skipBits(1), uR && JR.skipBits(8), ZR) {
            const RR = GR();
            if (null === RR) return;
            qR = RR
          } else qR = Math.floor(JR.getBitsLeft() / 8);
          (0, tR.I)(JR.pos % 8 === 0), yield {
            type: yR,
            data: RR.subarray(JR.pos / 8, JR.pos / 8 + qR)
          }, JR.skipBits(8 * qR)
        }
      },
      SR = RR => {
        for (const {
            type: JR,
            data: GR
          }
          of zR(RR)) {
          if (1 !== JR) continue;
          const RR = new VR.b(GR),
            yR = RR.readBits(3),
            tR = (RR.readBits(1), RR.readBits(1));
          let uR = 0,
            ZR = 0,
            qR = 0;
          if (tR) uR = RR.readBits(5);
          else {
            let JR = 0;
            if (RR.readBits(1)) {
              RR.skipBits(32), RR.skipBits(32);
              if (RR.readBits(1)) {
                let JR = 0;
                for (; JR < 32 && !RR.readBits(1);) JR++;
                JR < 32 && RR.skipBits(JR)
              }
              JR = RR.readBits(1), JR && (qR = RR.readBits(5), RR.skipBits(32), RR.skipBits(5), RR.skipBits(5))
            }
            const GR = RR.readBits(1),
              yR = RR.readBits(5);
            for (let tR = 0; tR <= yR; tR++) {
              RR.skipBits(12);
              const yR = RR.readBits(5);
              if (0 === tR && (uR = yR), yR > 7) {
                const JR = RR.readBits(1);
                0 === tR && (ZR = JR)
              }
              if (JR) {
                if (RR.readBits(1)) {
                  const JR = qR + 1;
                  RR.skipBits(JR), RR.skipBits(JR), RR.skipBits(1)
                }
              }
              if (GR) {
                RR.readBits(1) && RR.skipBits(4)
              }
            }
          }
          const iR = RR.readBits(4),
            fR = RR.readBits(4),
            KR = iR + 1;
          RR.skipBits(KR);
          const wR = fR + 1;
          RR.skipBits(wR);
          let rR = 0;
          if (rR = tR ? 0 : RR.readBits(1), rR && (RR.skipBits(4), RR.skipBits(3)), RR.skipBits(1), RR.skipBits(1), RR.skipBits(1), !tR) {
            RR.skipBits(1), RR.skipBits(1), RR.skipBits(1), RR.skipBits(1);
            const JR = RR.readBits(1);
            JR && (RR.skipBits(1), RR.skipBits(1));
            let GR = 0;
            if (GR = RR.readBits(1) ? 2 : RR.readBits(1), GR > 0) {
              RR.readBits(1) || RR.skipBits(1)
            }
            JR && RR.skipBits(3)
          }
          RR.skipBits(1), RR.skipBits(1), RR.skipBits(1);
          const eR = RR.readBits(1);
          let aR = 8;
          if (2 === yR && eR) {
            aR = RR.readBits(1) ? 12 : 10
          } else yR <= 2 && (aR = eR ? 10 : 8);
          let LR = 0;
          1 !== yR && (LR = RR.readBits(1));
          let nR = 2,
            UR = 2,
            WR = 2;
          RR.readBits(1) && (nR = RR.readBits(8), UR = RR.readBits(8), WR = RR.readBits(8));
          let AR = 0,
            CR = 1,
            XR = 1,
            MR = 0;
          return LR ? AR = RR.readBits(1) : 1 === nR && 13 === UR && 0 === WR ? (AR = 1, CR = 0, XR = 0) : (AR = RR.readBits(1), 0 === yR ? (CR = 1, XR = 1) : 1 === yR ? (CR = 0, XR = 0) : 12 === aR ? (CR = RR.readBits(1), XR = CR ? RR.readBits(1) : 0) : (CR = 1, XR = 0), CR && XR && (MR = RR.readBits(2))), {
            profile: yR,
            level: uR,
            tier: ZR,
            bitDepth: aR,
            monochrome: LR,
            chromaSubsamplingX: CR,
            chromaSubsamplingY: XR,
            chromaSamplePosition: MR,
            videoFullRangeFlag: AR,
            colourPrimaries: nR,
            transferCharacteristics: UR,
            matrixCoefficients: WR
          }
        }
        return null
      },
      jR = RR => 2 !== RR.colourPrimaries || 2 !== RR.transferCharacteristics || 2 !== RR.matrixCoefficients,
      dR = RR => {
        const JR = (0, tR.ad)(RR),
          GR = JR.getUint8(9),
          yR = JR.getUint16(10, !0),
          uR = JR.getUint32(12, !0),
          ZR = JR.getInt16(16, !0),
          qR = JR.getUint8(18);
        let iR = null;
        return qR && (iR = RR.subarray(19, 21 + GR)), {
          outputChannelCount: GR,
          preSkip: yR,
          inputSampleRate: uR,
          outputGain: ZR,
          channelMappingFamily: qR,
          channelMappingTable: iR
        }
      },
      ER = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      YR = RR => {
        const JR = RR[0] >> 3,
          GR = 3 & RR[0];
        let yR;
        return yR = 0 === GR ? 1 : 1 === GR || 2 === GR ? 2 : 63 & RR[1], {
          durationInSamples: ER[JR] * yR
        }
      },
      kR = RR => {
        if (RR.length < 7) throw new Error("Setup header is too short.");
        if (5 !== RR[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...RR.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const JR = RR.length,
          GR = new Uint8Array(JR);
        for (let VR = 0; VR < JR; VR++) GR[VR] = RR[JR - 1 - VR];
        const yR = new VR.b(GR);
        let tR = 0;
        for (; yR.getBitsLeft() > 97;)
          if (1 === yR.readBits(1)) {
            tR = yR.pos;
            break
          } if (0 === tR) throw new Error("Invalid Setup header: framing bit not found.");
        let uR = 0,
          ZR = !1,
          qR = 0;
        for (; yR.getBitsLeft() >= 97;) {
          const RR = yR.pos,
            JR = yR.readBits(8),
            GR = yR.readBits(16),
            tR = yR.readBits(16);
          if (JR > 63 || 0 !== GR || 0 !== tR) {
            yR.pos = RR;
            break
          }
          if (yR.skipBits(1), uR++, uR > 64) break;
          yR.clone().readBits(6) + 1 === uR && (ZR = !0, qR = uR)
        }
        if (!ZR) throw new Error("Invalid Setup header: mode header not found.");
        if (qR > 63) throw new Error(`Unsupported mode count: ${qR}.`);
        const iR = qR;
        yR.pos = 0, yR.skipBits(tR);
        const fR = Array(iR).fill(0);
        for (let VR = iR - 1; VR >= 0; VR--) yR.skipBits(40), fR[VR] = yR.readBits(1);
        return {
          modeBlockflags: fR
        }
      },
      QR = (RR, JR, GR) => {
        switch (RR) {
          case "avc":
            for (const RR of ((RR, JR) => {
                if (JR.description) {
                  const GR = 3 & (0, tR.cd)(JR.description)[4];
                  return rR(RR, GR + 1)
                }
                return wR(RR)
              })(GR, JR)) {
              const JR = GR[RR.offset],
                yR = eR(JR);
              if (yR >= iR.NON_IDR_SLICE && yR <= iR.SLICE_DPC) return "delta";
              if (yR === iR.IDR) return "key";
              if (yR === iR.SEI && !(0, tR.ub)()) {
                const JR = GR.subarray(RR.offset, RR.offset + RR.length),
                  yR = aR(JR);
                let uR = 1;
                do {
                  let RR = 0;
                  for (;;) {
                    const JR = yR[uR++];
                    if (void 0 === JR) break;
                    if (RR += JR, JR < 255) break
                  }
                  let JR = 0;
                  for (;;) {
                    const RR = yR[uR++];
                    if (void 0 === RR) break;
                    if (JR += RR, RR < 255) break
                  }
                  if (RR === 6) {
                    const RR = new VR.b(yR);
                    RR.pos = 8 * uR;
                    const JR = (0, tR.uc)(RR),
                      GR = RR.readBits(1);
                    if (0 === JR && 1 === GR) return "key"
                  }
                  uR += JR
                } while (uR < yR.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const RR of lR(GR, JR)) {
              const JR = pR(GR[RR.offset]);
              if (JR < fR.BLA_W_LP) return "delta";
              if (JR <= fR.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & GR[0]) ? "key" : "delta";
          case "vp9": {
            const RR = new VR.b(GR);
            if (2 !== RR.readBits(2)) return null;
            const JR = RR.readBits(1);
            3 === (RR.readBits(1) << 1) + JR && RR.skipBits(1);
            if (RR.readBits(1)) return null;
            return 0 === RR.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let RR = !1;
            for (const {
                type: JR,
                data: yR
              }
              of zR(GR))
              if (1 === JR) {
                const JR = new VR.b(yR);
                JR.skipBits(4), RR = !!JR.readBits(1)
              } else if (3 === JR || 6 === JR || 7 === JR) {
              if (RR) return "key";
              const JR = new VR.b(yR);
              if (JR.readBits(1)) return null;
              return 0 === JR.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, tR.H)(RR), (0, tR.I)(!1)
        }
      };
    var FR;
    ! function(RR) {
      RR[RR.STREAMINFO = 0] = "STREAMINFO", RR[RR.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", RR[RR.PICTURE = 6] = "PICTURE"
    }(FR || (FR = {}));
    const TR = (RR, JR, GR) => {
        const yR = [RR],
          uR = tR.Vc.encode(KR.e);
        let ZR = new Uint8Array(4 + uR.length),
          qR = new DataView(ZR.buffer);
        qR.setUint32(0, uR.length, !0), ZR.set(uR, 4), yR.push(ZR);
        const iR = [],
          fR = (RR, JR) => {
            const GR = `${RR}=${JR}`,
              uR = tR.Vc.encode(GR);
            ZR = new Uint8Array(4 + uR.length), qR = new DataView(ZR.buffer), qR.setUint32(0, uR.length, !0), ZR.set(uR, 4), yR.push(ZR), iR.push(RR)
          };
        for (const {
            key: KR,
            value: aR
          }
          of(0, tR._b)(JR)) switch (KR) {
          case "title":
            fR("TITLE", aR);
            break;
          case "description":
            fR("DESCRIPTION", aR);
            break;
          case "artist":
            fR("ARTIST", aR);
            break;
          case "album":
            fR("ALBUM", aR);
            break;
          case "albumArtist":
            fR("ALBUMARTIST", aR);
            break;
          case "genre":
            fR("GENRE", aR);
            break;
          case "date":
            fR("DATE", aR.toISOString().slice(0, 10));
            break;
          case "comment":
            fR("COMMENT", aR);
            break;
          case "lyrics":
            fR("LYRICS", aR);
            break;
          case "trackNumber":
            fR("TRACKNUMBER", aR.toString());
            break;
          case "tracksTotal":
            fR("TRACKTOTAL", aR.toString());
            break;
          case "discNumber":
            fR("DISCNUMBER", aR.toString());
            break;
          case "discsTotal":
            fR("DISCTOTAL", aR.toString());
            break;
          case "beatsPerMinute":
            fR("BPM", aR.toString());
            break;
          case "images":
            if (!GR) break;
            for (const RR of aR) {
              const JR = "coverFront" === RR.kind ? 3 : "coverBack" === RR.kind ? 4 : 0,
                GR = new Uint8Array(RR.mimeType.length);
              for (let tR = 0; tR < RR.mimeType.length; tR++) GR[tR] = RR.mimeType.charCodeAt(tR);
              const yR = tR.Vc.encode(RR.description ?? ""),
                uR = new Uint8Array(8 + GR.length + 4 + yR.length + 16 + 4 + RR.data.length),
                ZR = (0, tR.ad)(uR);
              ZR.setUint32(0, JR, !1), ZR.setUint32(4, GR.length, !1), uR.set(GR, 8), ZR.setUint32(8 + GR.length, yR.length, !1), uR.set(yR, 12 + GR.length), ZR.setUint32(28 + GR.length + yR.length, RR.data.length, !1), uR.set(RR.data, 32 + GR.length + yR.length);
              fR("METADATA_BLOCK_PICTURE", (0, tR.O)(uR))
            }
            break;
          case "raw":
            break;
          default:
            (0, tR.H)(KR)
        }
        if (JR.raw)
          for (const tR in JR.raw) {
            const RR = JR.raw[tR] ?? JR.raw[tR.toLowerCase()];
            if ("vendor" !== tR && null != RR && !iR.includes(tR))
              if ("string" === typeof RR) fR(tR, RR);
              else if (Array.isArray(RR)) {
              if (RR.every((RR => "string" === typeof RR)))
                for (const JR of RR) fR(tR, JR)
            }
          }
        const VR = new Uint8Array(4);
        (0, tR.ad)(VR).setUint32(0, iR.length, !0), yR.splice(2, 0, VR);
        const wR = yR.reduce(((RR, JR) => RR + JR.length), 0),
          rR = new Uint8Array(wR);
        let eR = 0;
        for (const tR of yR) rR.set(tR, eR), eR += tR.length;
        return rR
      },
      sR = RR => {
        if (RR.length < 7) return null;
        if (11 !== RR[0] || 119 !== RR[1]) return null;
        const JR = new VR.b(RR);
        JR.skipBits(16), JR.skipBits(16);
        const GR = JR.readBits(2);
        if (3 === GR) return null;
        const yR = JR.readBits(6),
          tR = JR.readBits(5);
        if (tR > 8) return null;
        const uR = JR.readBits(3),
          ZR = JR.readBits(3);
        0 !== (1 & ZR) && 1 !== ZR && JR.skipBits(2), 0 !== (4 & ZR) && JR.skipBits(2), 2 === ZR && JR.skipBits(2);
        return {
          fscod: GR,
          bsid: tR,
          bsmod: uR,
          acmod: ZR,
          lfeon: JR.readBits(1),
          bitRateCode: Math.floor(yR / 2)
        }
      },
      hR = new Uint8Array([5, 4, 65, 67, 45, 51]),
      RJ = new Uint8Array([5, 4, 69, 65, 67, 51]),
      JJ = [1, 2, 3, 6],
      GJ = RR => {
        if (RR.length < 6) return null;
        if (11 !== RR[0] || 119 !== RR[1]) return null;
        const JR = new VR.b(RR);
        JR.skipBits(16);
        const GR = JR.readBits(2);
        if (JR.skipBits(3), 0 !== GR && 2 !== GR) return null;
        const yR = JR.readBits(11),
          tR = JR.readBits(2);
        let uR, iR = 0;
        3 === tR ? (iR = JR.readBits(2), uR = 3) : uR = JR.readBits(2);
        const fR = JR.readBits(3),
          KR = JR.readBits(1),
          wR = JR.readBits(5);
        if (wR < 11 || wR > 16) return null;
        const rR = JJ[uR];
        let eR;
        eR = tR < 3 ? ZR[tR] / 1e3 : qR[iR] / 1e3;
        return {
          dataRate: Math.round((yR + 1) * eR / (16 * rR)),
          substreams: [{
            fscod: tR,
            fscod2: iR,
            bsid: wR,
            bsmod: 0,
            acmod: fR,
            lfeon: KR,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      yJ = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      tJ = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      uJ = [16, 16, 20, 20, 0, 24, 24, 0],
      ZJ = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      qJ = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      iJ = [32e3, 44100, 48e3, 0],
      fJ = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      VJ = [512, 1024, 2048, 4096],
      KJ = RR => {
        const JR = wJ(RR),
          GR = (0, tR.ad)(RR);
        let yR = JR ? 4 * Math.ceil(JR.frameSize / 4) : 0,
          uR = null;
        for (; yR + 4 <= RR.length && 1683496997 === GR.getUint32(yR);) {
          const JR = rJ(RR.subarray(yR));
          if (!JR) break;
          uR ??= JR, yR += JR.frameSize
        }
        if (JR) return {
          frameSize: uR ? yR : JR.frameSize,
          sampleRate: JR.sampleRate,
          numberOfChannels: JR.numberOfChannels,
          sampleCount: JR.sampleCount,
          channelLayout: JR.channelLayout,
          pcmResolution: JR.pcmResolution,
          bitRate: JR.bitRate,
          core: JR,
          hasExtensions: null !== uR
        };
        if (!uR?.asset) return null;
        const {
          asset: ZR
        } = uR;
        return {
          frameSize: yR,
          sampleRate: ZR.sampleRate,
          numberOfChannels: ZR.numberOfChannels,
          sampleCount: ZR.sampleCount,
          channelLayout: ZR.channelLayout,
          pcmResolution: ZR.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      wJ = RR => {
        if (RR.length < 18) return null;
        if (127 !== RR[0] || 254 !== RR[1] || 128 !== RR[2] || 1 !== RR[3]) return null;
        const JR = new VR.b(RR);
        if (JR.skipBits(32), JR.skipBits(1), 31 !== JR.readBits(5)) return null;
        const GR = JR.readBits(1),
          yR = JR.readBits(7) + 1;
        if (yR % 8 !== 0) return null;
        const tR = JR.readBits(14) + 1;
        if (tR < 96) return null;
        const uR = JR.readBits(6);
        if (uR >= ZJ.length) return null;
        const ZR = yJ[JR.readBits(4)];
        if (0 === ZR) return null;
        const qR = tJ[JR.readBits(5)];
        if (0 !== JR.readBits(1)) return null;
        JR.skipBits(4), JR.skipBits(5);
        const iR = JR.readBits(2);
        if (3 === iR) return null;
        JR.skipBits(1), GR && JR.skipBits(16), JR.skipBits(7);
        const fR = uJ[JR.readBits(3)];
        if (0 === fR) return null;
        const KR = 0 !== iR;
        return {
          frameSize: tR,
          sampleRate: ZR,
          numberOfChannels: ZJ[uR] + (KR ? 1 : 0),
          sampleCount: 32 * yR,
          channelLayout: qJ[uR] | (KR ? 8 : 0),
          amode: uR,
          lfePresent: KR,
          bitRate: qR,
          pcmResolution: fR
        }
      },
      rJ = RR => {
        if (RR.length < 10) return null;
        if (100 !== RR[0] || 88 !== RR[1] || 32 !== RR[2] || 37 !== RR[3]) return null;
        const JR = new VR.b(RR);
        JR.skipBits(32), JR.skipBits(8);
        const GR = JR.readBits(2),
          yR = JR.readBits(1),
          uR = 8 + 4 * yR,
          ZR = 16 + 4 * yR;
        JR.skipBits(uR);
        const qR = JR.readBits(ZR) + 1,
          iR = {
            frameSize: qR,
            asset: null
          };
        if (!JR.readBits(1)) return iR;
        const fR = iJ[JR.readBits(2)],
          KR = 512 * (JR.readBits(3) + 1);
        JR.readBits(1) && JR.skipBits(36);
        const wR = JR.readBits(3) + 1,
          rR = JR.readBits(3) + 1,
          eR = [];
        for (let tR = 0; tR < wR; tR++) eR.push(JR.readBits(GR + 1));
        for (const VR of eR) JR.skipBits(8 * (0, tR.pc)(VR));
        if (JR.readBits(1)) {
          JR.skipBits(2);
          const RR = JR.readBits(2) + 1 << 2,
            GR = JR.readBits(2) + 1;
          JR.skipBits(GR * RR)
        }
        for (let tR = 0; tR < rR; tR++) JR.skipBits(ZR);
        JR.skipBits(9), JR.skipBits(3), JR.readBits(1) && JR.skipBits(4), JR.readBits(1) && JR.skipBits(24), JR.readBits(1) && JR.skipBits(8 * (JR.readBits(10) + 1));
        const aR = JR.readBits(5) + 1,
          LR = fJ[JR.readBits(4)],
          nR = JR.readBits(8) + 1;
        let UR = 0;
        if (JR.readBits(1) && (nR > 2 && JR.skipBits(1), nR > 6 && JR.skipBits(1), JR.readBits(1))) {
          const RR = JR.readBits(2) + 1 << 2;
          UR = JR.readBits(RR)
        }
        return 0 === fR || JR.getBitsLeft() < 0 ? iR : {
          frameSize: qR,
          asset: {
            sampleRate: LR,
            numberOfChannels: nR,
            sampleCount: Math.round(KR * LR / fR),
            channelLayout: UR,
            pcmResolution: aR
          }
        }
      },
      eJ = RR => {
        const JR = new Uint8Array(20),
          GR = (0, tR.ad)(JR);
        GR.setUint32(0, RR.sampleRate), GR.setUint32(4, RR.bitRate), GR.setUint32(8, RR.bitRate), JR[12] = RR.pcmResolution;
        const yR = RR.core && !RR.hasExtensions ? 1 : 0,
          uR = new VR.b(JR);
        return uR.seekToByte(13), uR.writeBits(2, Math.max(VJ.indexOf(RR.sampleCount), 0)), uR.writeBits(5, yR), uR.writeBits(1, RR.core?.lfePresent ? 1 : 0), uR.writeBits(6, RR.core?.amode ?? 0), uR.writeBits(14, RR.core ? RR.core.frameSize - 1 : 0), uR.writeBits(1, 0), uR.writeBits(3, 0), uR.writeBits(16, RR.channelLayout), uR.writeBits(1, 0), uR.writeBits(1, 0), uR.writeBits(1, 0), uR.writeBits(5, 0), JR
      }
  },
  41133: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => MR,
      B: () => WR,
      E: () => XR,
      H: () => CR,
      I: () => AR,
      J: () => vR,
      N: () => bR,
      P: () => gR,
      Q: () => pR,
      S: () => PR,
      T: () => IR,
      X: () => oR,
      d: () => iR,
      e: () => VR,
      h: () => qR,
      l: () => BR,
      p: () => ZR,
      t: () => fR,
      v: () => uR,
      w: () => wR
    });
    var yR = GR(41140),
      tR = GR(41115);
    const uR = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      ZR = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      qR = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      iR = [...qR, ...ZR],
      fR = ["webvtt"],
      VR = [{
        maxMacroblocks: 99,
        maxBitrate: 64e3,
        maxDpbMbs: 396,
        level: 10
      }, {
        maxMacroblocks: 396,
        maxBitrate: 192e3,
        maxDpbMbs: 900,
        level: 11
      }, {
        maxMacroblocks: 396,
        maxBitrate: 384e3,
        maxDpbMbs: 2376,
        level: 12
      }, {
        maxMacroblocks: 396,
        maxBitrate: 768e3,
        maxDpbMbs: 2376,
        level: 13
      }, {
        maxMacroblocks: 396,
        maxBitrate: 2e6,
        maxDpbMbs: 2376,
        level: 20
      }, {
        maxMacroblocks: 792,
        maxBitrate: 4e6,
        maxDpbMbs: 4752,
        level: 21
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 4e6,
        maxDpbMbs: 8100,
        level: 22
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 1e7,
        maxDpbMbs: 8100,
        level: 30
      }, {
        maxMacroblocks: 3600,
        maxBitrate: 14e6,
        maxDpbMbs: 18e3,
        level: 31
      }, {
        maxMacroblocks: 5120,
        maxBitrate: 2e7,
        maxDpbMbs: 20480,
        level: 32
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 2e7,
        maxDpbMbs: 32768,
        level: 40
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 5e7,
        maxDpbMbs: 32768,
        level: 41
      }, {
        maxMacroblocks: 8704,
        maxBitrate: 5e7,
        maxDpbMbs: 34816,
        level: 42
      }, {
        maxMacroblocks: 22080,
        maxBitrate: 135e6,
        maxDpbMbs: 110400,
        level: 50
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 51
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 52
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 24e7,
        maxDpbMbs: 696320,
        level: 60
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 48e7,
        maxDpbMbs: 696320,
        level: 61
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 8e8,
        maxDpbMbs: 696320,
        level: 62
      }],
      KR = [{
        maxPictureSize: 36864,
        maxBitrate: 128e3,
        tier: "L",
        level: 30
      }, {
        maxPictureSize: 122880,
        maxBitrate: 15e5,
        tier: "L",
        level: 60
      }, {
        maxPictureSize: 245760,
        maxBitrate: 3e6,
        tier: "L",
        level: 63
      }, {
        maxPictureSize: 552960,
        maxBitrate: 6e6,
        tier: "L",
        level: 90
      }, {
        maxPictureSize: 983040,
        maxBitrate: 1e7,
        tier: "L",
        level: 93
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 12e6,
        tier: "L",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        tier: "H",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 2e7,
        tier: "L",
        level: 123
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 5e7,
        tier: "H",
        level: 123
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 25e6,
        tier: "L",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "L",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "L",
        level: 156
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 156
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "L",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 12e7,
        tier: "L",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "L",
        level: 186
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 186
      }],
      wR = [{
        maxPictureSize: 36864,
        maxBitrate: 2e5,
        level: 10
      }, {
        maxPictureSize: 73728,
        maxBitrate: 8e5,
        level: 11
      }, {
        maxPictureSize: 122880,
        maxBitrate: 18e5,
        level: 20
      }, {
        maxPictureSize: 245760,
        maxBitrate: 36e5,
        level: 21
      }, {
        maxPictureSize: 552960,
        maxBitrate: 72e5,
        level: 30
      }, {
        maxPictureSize: 983040,
        maxBitrate: 12e6,
        level: 31
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 18e6,
        level: 40
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        level: 41
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        level: 50
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 12e7,
        level: 51
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 18e7,
        level: 52
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 18e7,
        level: 60
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        level: 61
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        level: 62
      }],
      rR = [{
        maxPictureSize: 147456,
        maxBitrate: 15e5,
        tier: "M",
        level: 0
      }, {
        maxPictureSize: 278784,
        maxBitrate: 3e6,
        tier: "M",
        level: 1
      }, {
        maxPictureSize: 665856,
        maxBitrate: 6e6,
        tier: "M",
        level: 4
      }, {
        maxPictureSize: 1065024,
        maxBitrate: 1e7,
        tier: "M",
        level: 5
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 12e6,
        tier: "M",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 3e7,
        tier: "H",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 2e7,
        tier: "M",
        level: 9
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 5e7,
        tier: "H",
        level: 9
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 3e7,
        tier: "M",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "M",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "M",
        level: 14
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 14
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 1e8,
        tier: "M",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 19
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 19
      }],
      eR = ".01.01.01.01.00",
      aR = ".0.110.01.01.01.0",
      LR = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      nR = ["dtsc", "dtsh", "dtsl", "dtse"],
      UR = [{
        fourCc: "apco",
        bitrate: 45e6,
        alpha: !1
      }, {
        fourCc: "apcs",
        bitrate: 102e6,
        alpha: !1
      }, {
        fourCc: "apcn",
        bitrate: 147e6,
        alpha: !1
      }, {
        fourCc: "apch",
        bitrate: 22e7,
        alpha: !1
      }, {
        fourCc: "ap4h",
        bitrate: 33e7,
        alpha: !0
      }, {
        fourCc: "ap4x",
        bitrate: 5e8,
        alpha: !0
      }],
      WR = (RR, JR, GR, yR, uR) => {
        if ("avc" === RR) {
          const RR = 100,
            uR = Math.ceil(JR / 16) * Math.ceil(GR / 16),
            ZR = VR.find((RR => uR <= RR.maxMacroblocks && yR <= RR.maxBitrate)) ?? (0, tR.$b)(VR),
            qR = ZR ? ZR.level : 0;
          return `avc1.${RR.toString(16).padStart(2,"0")}${"00"}${qR.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === RR) {
          const RR = "",
            uR = 1,
            ZR = "6",
            qR = JR * GR,
            iR = KR.find((RR => qR <= RR.maxPictureSize && yR <= RR.maxBitrate)) ?? (0, tR.$b)(KR),
            fR = "B0";
          return `hev1.${RR}${uR}.${ZR}.${iR.tier}${iR.level}.${fR}`
        }
        if ("vp8" === RR) return "vp8";
        if ("vp9" === RR) {
          const RR = JR * GR,
            uR = "08";
          return `vp09.${"00"}.${(wR.find((JR=>RR<=JR.maxPictureSize&&yR<=JR.maxBitrate))??(0,tR.$b)(wR)).level.toString().padStart(2,"0")}.${uR}`
        }
        if ("av1" === RR) {
          const RR = 0,
            uR = JR * GR,
            ZR = rR.find((RR => uR <= RR.maxPictureSize && yR <= RR.maxBitrate)) ?? (0, tR.$b)(rR),
            qR = "08";
          return `av01.${RR}.${ZR.level.toString().padStart(2,"0")}${ZR.tier}.${qR}`
        }
        if ("prores" === RR) {
          const RR = 2073600,
            tR = Math.pow(JR * GR / RR, .95),
            ZR = UR.filter((RR => RR.alpha === uR));
          let qR = ZR[0].fourCc,
            iR = 1 / 0;
          for (const {
              fourCc: JR,
              bitrate: GR
            }
            of ZR) {
            const RR = Math.abs(GR * tR - yR);
            RR < iR && (iR = RR, qR = JR)
          }
          return qR
        }
        throw (0, tR.H)(RR), new TypeError(`Unhandled codec '${String(RR)}'.`)
      },
      AR = RR => {
        const JR = RR.split(".");
        return [1, 1, Number(JR[1]), 2, 1, Number(JR[2]), 3, 1, Number(JR[3]), 4, 1, JR[4] ? Number(JR[4]) : 1]
      },
      CR = RR => {
        const JR = RR.split("."),
          GR = Number(JR[1]),
          yR = JR[2],
          tR = (GR << 5) + Number(yR.slice(0, -1)),
          uR = "H" === yR.slice(-1) ? 1 : 0,
          ZR = Number(JR[3]);
        return [129, tR, (uR << 7) + ((8 === ZR ? 0 : 1) << 6) + ((12 === ZR ? 1 : 0) << 5) + ((JR[4] ? Number(JR[4]) : 0) << 4) + ((JR[5] ? Number(JR[5][0]) : 1) << 3) + ((JR[5] ? Number(JR[5][1]) : 1) << 2) + (JR[5] ? Number(JR[5][2]) : 0), 0]
      },
      XR = RR => {
        const {
          codec: JR,
          codecDescription: GR,
          colorSpace: uR,
          avcCodecInfo: ZR,
          hevcCodecInfo: qR,
          vp9CodecInfo: iR,
          av1CodecInfo: fR,
          proresFormat: VR
        } = RR;
        if ("avc" === JR) {
          if ((0, tR.I)(null !== RR.avcType), ZR) {
            const JR = new Uint8Array([ZR.avcProfileIndication, ZR.profileCompatibility, ZR.avcLevelIndication]);
            return `avc${RR.avcType}.${(0,tR.P)(JR)}`
          }
          if (!GR || GR.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${RR.avcType}.${(0,tR.P)(GR.subarray(1,4))}`
        }
        if ("hevc" === JR) {
          let RR, JR, yR, uR, ZR, iR;
          if (qR) RR = qR.generalProfileSpace, JR = qR.generalProfileIdc, yR = (0, tR.wc)(qR.generalProfileCompatibilityFlags), uR = qR.generalTierFlag, ZR = qR.generalLevelIdc, iR = [...qR.generalConstraintIndicatorFlags];
          else {
            if (!GR || GR.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const qR = (0, tR.ad)(GR),
              fR = qR.getUint8(1);
            RR = fR >> 6 & 3, JR = 31 & fR, yR = (0, tR.wc)(qR.getUint32(2)), uR = fR >> 5 & 1, ZR = qR.getUint8(12), iR = [];
            for (let RR = 0; RR < 6; RR++) iR.push(qR.getUint8(6 + RR))
          }
          let fR = "hev1.";
          for (fR += ["", "A", "B", "C"][RR] + JR, fR += ".", fR += yR.toString(16).toUpperCase(), fR += ".", fR += 0 === uR ? "L" : "H", fR += ZR; iR.length > 0 && 0 === iR[iR.length - 1];) iR.pop();
          return iR.length > 0 && (fR += ".", fR += iR.map((RR => RR.toString(16).toUpperCase())).join(".")), fR
        }
        if ("vp8" === JR) return "vp8";
        if ("vp9" === JR) {
          if (!iR) {
            const JR = RR.width * RR.height;
            let GR = (0, tR.$b)(wR).level;
            for (const RR of wR)
              if (JR <= RR.maxPictureSize) {
                GR = RR.level;
                break
              } return `vp09.00.${GR.toString().padStart(2,"0")}.08`
          }
          let JR = `vp09.${iR.profile.toString().padStart(2,"0")}.${iR.level.toString().padStart(2,"0")}.${iR.bitDepth.toString().padStart(2,"0")}.${iR.chromaSubsampling.toString().padStart(2,"0")}`;
          return JR += `.${iR.colourPrimaries.toString().padStart(2,"0")}.${iR.transferCharacteristics.toString().padStart(2,"0")}.${iR.matrixCoefficients.toString().padStart(2,"0")}.${iR.videoFullRangeFlag.toString().padStart(2,"0")}`, JR.endsWith(eR) && (JR = JR.slice(0, -15)), JR
        }
        if ("av1" === JR) {
          if (!fR) {
            const JR = RR.width * RR.height;
            let GR = (0, tR.$b)(wR).level;
            for (const RR of wR)
              if (JR <= RR.maxPictureSize) {
                GR = RR.level;
                break
              } return `av01.0.${GR.toString().padStart(2,"0")}M.08`
          }
          const JR = fR.profile,
            GR = fR.level.toString().padStart(2, "0"),
            ZR = fR.tier ? "H" : "M",
            qR = fR.bitDepth.toString().padStart(2, "0"),
            iR = fR.monochrome ? "1" : "0",
            VR = 100 * fR.chromaSubsamplingX + 10 * fR.chromaSubsamplingY + 1 * (fR.chromaSubsamplingX && fR.chromaSubsamplingY ? fR.chromaSamplePosition : 0);
          let KR, rR, eR, LR;
          (0, yR.q)(fR) ? (KR = fR.colourPrimaries, rR = fR.transferCharacteristics, eR = fR.matrixCoefficients, LR = fR.videoFullRangeFlag) : (KR = uR?.primaries ? tR.e[uR.primaries] : 1, rR = uR?.transfer ? tR.x[uR.transfer] : 1, eR = uR?.matrix ? tR.o[uR.matrix] : 1, LR = uR?.fullRange ? 1 : 0);
          let nR = `av01.${JR}.${GR}${ZR}.${qR}`;
          return nR += `.${iR}.${VR.toString().padStart(3,"0")}`, nR += `.${KR.toString().padStart(2,"0")}`, nR += `.${rR.toString().padStart(2,"0")}`, nR += `.${eR.toString().padStart(2,"0")}`, nR += `.${LR}`, nR.endsWith(aR) && (nR = nR.slice(0, -17)), nR
        }
        if ("prores" === JR) return VR ?? "apch";
        throw null !== JR && (0, tR.H)(JR), new TypeError(`Unhandled codec '${JR}'.`)
      },
      MR = (RR, JR, GR) => {
        if ("aac" === RR) return JR >= 2 && GR <= 24e3 ? "mp4a.40.29" : GR <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === RR) return "mp3";
        if ("opus" === RR) return "opus";
        if ("vorbis" === RR) return "vorbis";
        if ("flac" === RR) return "flac";
        if ("ac3" === RR) return "ac-3";
        if ("eac3" === RR) return "ec-3";
        if ("dts" === RR) return "dtsc";
        if (ZR.includes(RR)) return RR;
        throw new TypeError(`Unhandled codec '${RR}'.`)
      },
      BR = 48e3,
      lR = /^pcm-([usf])(\d+)(be)?$/,
      pR = RR => {
        if ((0, tR.I)(ZR.includes(RR)), "ulaw" === RR) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === RR) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const JR = lR.exec(RR);
        let GR;
        (0, tR.I)(JR), GR = "u" === JR[1] ? "unsigned" : "s" === JR[1] ? "signed" : "float";
        return {
          dataType: GR,
          sampleSize: Number(JR[2]) / 8,
          littleEndian: "be" !== JR[3],
          silentValue: "pcm-u8" === RR ? 128 : 0
        }
      },
      gR = RR => RR.startsWith("avc1") || RR.startsWith("avc3") ? "avc" : RR.startsWith("hev1") || RR.startsWith("hvc1") ? "hevc" : "vp8" === RR ? "vp8" : RR.startsWith("vp09") ? "vp9" : RR.startsWith("av01") ? "av1" : LR.includes(RR) ? "prores" : "mp3" === RR || "mp4a.69" === RR || "mp4a.6B" === RR || "mp4a.6b" === RR || "mp4a.40.34" === RR ? "mp3" : RR.startsWith("mp4a.40.") || "mp4a.67" === RR ? "aac" : "opus" === RR || "Opus" === RR ? "opus" : "vorbis" === RR ? "vorbis" : "flac" === RR ? "flac" : "ac-3" === RR || "ac3" === RR ? "ac3" : "ec-3" === RR || "eac3" === RR ? "eac3" : nR.includes(RR) ? "dts" : "ulaw" === RR ? "ulaw" : "alaw" === RR ? "alaw" : lR.test(RR) ? RR : "webvtt" === RR ? "webvtt" : null,
      bR = RR => "avc" === RR ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === RR ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      vR = RR => "aac" === RR ? {
        aac: {
          format: "aac"
        }
      } : "opus" === RR ? {
        opus: {
          format: "opus"
        }
      } : {},
      OR = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...LR],
      xR = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      NR = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      DR = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      HR = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      oR = (RR, JR) => {
        if (!RR) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof RR) throw new TypeError("Video chunk metadata must be an object.");
        if (!RR.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof RR.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof RR.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!OR.some((JR => RR.decoderConfig.codec.startsWith(JR)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(RR.decoderConfig.codedWidth) || RR.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(RR.decoderConfig.codedHeight) || RR.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== RR.decoderConfig.displayAspectWidth && (!Number.isInteger(RR.decoderConfig.displayAspectWidth) || RR.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== RR.decoderConfig.displayAspectHeight && (!Number.isInteger(RR.decoderConfig.displayAspectHeight) || RR.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== RR.decoderConfig.displayAspectWidth !== (void 0 !== RR.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== RR.decoderConfig.description && !(0, tR.tb)(RR.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== RR.decoderConfig.colorSpace) {
          const {
            colorSpace: JR
          } = RR.decoderConfig;
          if ("object" !== typeof JR) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const GR = Object.keys(tR.e);
          if (null != JR.primaries && !GR.includes(JR.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${GR.join(", ")}.`);
          const yR = Object.keys(tR.x);
          if (null != JR.transfer && !yR.includes(JR.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${yR.join(", ")}.`);
          const uR = Object.keys(tR.o);
          if (null != JR.matrix && !uR.includes(JR.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${uR.join(", ")}.`);
          if (null != JR.fullRange && "boolean" !== typeof JR.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (RR.decoderConfig.codec.startsWith("avc1") || RR.decoderConfig.codec.startsWith("avc3")) {
          if (!xR.test(RR.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (RR.decoderConfig.codec.startsWith("hev1") || RR.decoderConfig.codec.startsWith("hvc1")) {
          if (!NR.test(RR.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (RR.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== RR.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (RR.decoderConfig.codec.startsWith("vp09")) {
          if (!DR.test(RR.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (RR.decoderConfig.codec.startsWith("av01")) {
          if (!HR.test(RR.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (LR.some((JR => RR.decoderConfig.codec.startsWith(JR))) && !LR.some((JR => RR.decoderConfig.codec === JR))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${LR.join(", ")}.`);
        if (null !== JR && gR(RR.decoderConfig.codec) !== JR) throw new TypeError(`Video chunk metadata decoder configuration codec string '${RR.decoderConfig.codec}' does not fit to the track codec '${JR}'.`)
      },
      cR = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      PR = (RR, JR) => {
        if (!RR) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof RR) throw new TypeError("Audio chunk metadata must be an object.");
        if (!RR.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof RR.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof RR.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!cR.some((JR => RR.decoderConfig.codec.startsWith(JR)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(RR.decoderConfig.sampleRate) || RR.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(RR.decoderConfig.numberOfChannels) || RR.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== RR.decoderConfig.description && !(0, tR.tb)(RR.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (RR.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== RR.decoderConfig.codec && "mp4a.6B" !== RR.decoderConfig.codec && "mp4a.6b" !== RR.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(RR.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (RR.decoderConfig.codec.startsWith("mp3") || RR.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== RR.decoderConfig.codec && "mp4a.69" !== RR.decoderConfig.codec && "mp4a.6B" !== RR.decoderConfig.codec && "mp4a.6b" !== RR.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (RR.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== RR.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (RR.decoderConfig.description && RR.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (RR.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== RR.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!RR.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (RR.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== RR.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const JR = 42;
          if (!RR.decoderConfig.description || RR.decoderConfig.description.byteLength < JR) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (RR.decoderConfig.codec.startsWith("ac-3") || RR.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== RR.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (RR.decoderConfig.codec.startsWith("ec-3") || RR.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== RR.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (RR.decoderConfig.codec.startsWith("dts")) {
          if (!nR.includes(RR.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${nR.join(", ")}.`)
        } else if ((RR.decoderConfig.codec.startsWith("pcm") || RR.decoderConfig.codec.startsWith("ulaw") || RR.decoderConfig.codec.startsWith("alaw")) && !ZR.includes(RR.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ZR.join(", ")}).`);
        if (null !== JR && gR(RR.decoderConfig.codec) !== JR) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${RR.decoderConfig.codec}' does not fit to the track codec '${JR}'.`)
      },
      IR = RR => {
        if (!RR) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof RR) throw new TypeError("Subtitle metadata must be an object.");
        if (!RR.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof RR.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof RR.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  41182: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => wR,
      f: () => KR,
      h: () => nR,
      j: () => iR,
      k: () => UR,
      m: () => fR,
      n: () => ZR
    });
    var yR = GR(41133),
      tR = GR(41115),
      uR = GR(41187);
    new Map, new Map;
    const ZR = RR => {
        if (!RR || "object" !== typeof RR) throw new TypeError("Encoding config must be an object.");
        if (!yR.v.includes(RR.codec)) throw new TypeError(`Invalid video codec '${RR.codec}'. Must be one of: ${yR.v.join(", ")}.`);
        const JR = RR.bitrate;
        if (void 0 === RR.quality && void 0 === JR) throw new TypeError("config.quality must be provided.");
        if (void 0 !== RR.quality && void 0 !== JR) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== RR.quality && !(RR.quality instanceof wR)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== JR && !(JR instanceof wR) && (!Number.isInteger(JR) || JR <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== RR.keyFrameInterval && (!Number.isFinite(RR.keyFrameInterval) || RR.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== RR.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(RR.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== RR.transform) {
          if ("object" !== typeof RR.transform || !RR.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== RR.transform.width && (!Number.isInteger(RR.transform.width) || RR.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== RR.transform.height && (!Number.isInteger(RR.transform.height) || RR.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== RR.transform.fit && !["fill", "contain", "cover"].includes(RR.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== RR.transform.width && void 0 !== RR.transform.height && void 0 === RR.transform.fit && !["fill", "contain", "cover"].includes(RR.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== RR.transform.fit && ["fill", "contain", "cover"].includes(RR.sizeChangeBehavior) && RR.transform.fit !== RR.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== RR.transform.rotate && ![0, 90, 180, 270].includes(RR.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== RR.transform.flip && "boolean" !== typeof RR.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== RR.transform.crop && (0, uR.l)(RR.transform.crop, "config.transform."), void 0 !== RR.transform.process && "function" !== typeof RR.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== RR.transform.frameRate && (!Number.isFinite(RR.transform.frameRate) || RR.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== RR.transform.force && "boolean" !== typeof RR.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== RR.onEncodedPacket && "function" !== typeof RR.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== RR.onEncoderConfig && "function" !== typeof RR.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== RR.onEncodedSample && "function" !== typeof RR.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        qR(RR.codec, RR)
      },
      qR = (RR, JR) => {
        if (!JR || "object" !== typeof JR) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== JR.alpha && !["discard", "keep"].includes(JR.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const GR = JR.bitrateMode;
        if (void 0 !== GR && !["constant", "variable"].includes(GR)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== JR.latencyMode && !["quality", "realtime"].includes(JR.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== JR.fullCodecString && "string" !== typeof JR.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== JR.fullCodecString && (0, yR.P)(JR.fullCodecString) !== RR) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${RR}).`);
        if (void 0 !== JR.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(JR.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== JR.scalabilityMode && "string" !== typeof JR.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== JR.contentHint && "string" !== typeof JR.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      iR = RR => {
        const JR = RR.bitrateMode,
          GR = RR.quality._toVideoRateControl(RR.codec, RR.width, RR.height, JR),
          uR = (JR, GR, tR) => ({
            codec: RR.fullCodecString ?? (0, yR.B)(RR.codec, RR.width, RR.height, tR, "keep" === RR.alpha),
            width: RR.width,
            height: RR.height,
            displayWidth: RR.squarePixelWidth,
            displayHeight: RR.squarePixelHeight,
            bitrate: JR,
            bitrateMode: GR,
            alpha: RR.alpha ?? "discard",
            framerate: RR.framerate,
            latencyMode: RR.latencyMode,
            hardwareAcceleration: RR.hardwareAcceleration,
            scalabilityMode: RR.scalabilityMode,
            contentHint: RR.contentHint,
            ...(0, yR.N)(RR.codec)
          }),
          ZR = [];
        return null !== GR.quantizer && ZR.push({
          config: uR(void 0, "quantizer", GR.bitrate),
          quantizer: GR.quantizer
        }), "quantizer" !== GR.bitrateMode && ZR.push({
          config: uR(GR.bitrate, GR.bitrateMode, GR.bitrate),
          quantizer: null
        }), (0, tR.I)(ZR.length > 0), ZR
      },
      fR = RR => {
        if (!RR || "object" !== typeof RR) throw new TypeError("Encoding config must be an object.");
        if (!yR.d.includes(RR.codec)) throw new TypeError(`Invalid audio codec '${RR.codec}'. Must be one of: ${yR.d.join(", ")}.`);
        const JR = RR.bitrate;
        if (void 0 === RR.quality && void 0 === JR && !yR.p.includes(RR.codec) && "flac" !== RR.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== RR.quality && void 0 !== JR) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== RR.quality && !(RR.quality instanceof wR)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== JR && !(JR instanceof wR) && (!Number.isInteger(JR) || JR <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== RR.transform) {
          if ("object" !== typeof RR.transform || !RR.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== RR.transform.numberOfChannels && (!Number.isInteger(RR.transform.numberOfChannels) || RR.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== RR.transform.sampleRate && (!Number.isInteger(RR.transform.sampleRate) || RR.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== RR.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(RR.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== RR.transform.process && "function" !== typeof RR.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== RR.onEncodedPacket && "function" !== typeof RR.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== RR.onEncoderConfig && "function" !== typeof RR.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== RR.onEncodedSample && "function" !== typeof RR.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        VR(RR.codec, RR)
      },
      VR = (RR, JR) => {
        if (!JR || "object" !== typeof JR) throw new TypeError("Encoding options must be an object.");
        const GR = JR.bitrateMode;
        if (void 0 !== GR && !["constant", "variable"].includes(GR)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== JR.fullCodecString && "string" !== typeof JR.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== JR.fullCodecString && (0, yR.P)(JR.fullCodecString) !== RR) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${RR}).`)
      },
      KR = RR => {
        const JR = RR.bitrateMode;
        return {
          codec: RR.fullCodecString ?? (0, yR.A)(RR.codec, RR.numberOfChannels, RR.sampleRate),
          numberOfChannels: RR.numberOfChannels,
          sampleRate: RR.sampleRate,
          bitrate: RR.quality?._toAudioBitrate(RR.codec),
          bitrateMode: RR.quality?._bitrateMode ?? JR,
          ...(0, yR.J)(RR.codec)
        }
      };
    class wR {
      constructor(RR) {
        if ("number" !== typeof RR && "string" !== typeof RR || (RR = {
            quality: RR
          }), !RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (void 0 !== RR.bitrateMode && !["constant", "variable"].includes(RR.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in RR) {
          if ("string" === typeof RR.quality ? !(RR.quality in rR) : "number" !== typeof RR.quality || Number.isNaN(RR.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== RR.preferBitrate && "boolean" !== typeof RR.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in RR || "quantizer" in RR) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof RR.quality ? rR[RR.quality] : RR.quality, this._preferBitrate = RR.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== RR.bitrate && (!Number.isInteger(RR.bitrate) || RR.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== RR.quantizer && (!Number.isInteger(RR.quantizer) || RR.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === RR.bitrate && void 0 === RR.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in RR) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = RR.bitrate, this._quantizer = RR.quantizer
        }
        this._bitrateMode = RR.bitrateMode
      }
      _toVideoRateControl(RR, JR, GR, yR) {
        const uR = eR[RR];
        let ZR, qR = null,
          iR = this._bitrateMode ?? yR ?? "variable";
        if (void 0 !== this._quantizer) {
          if (uR)
            if (this._quantizer < uR.min || this._quantizer > uR.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${RR}'; must be between ${uR.min} and ${uR.max}.`)
            } else qR = this._quantizer, void 0 === this._bitrate && (iR = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${RR}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && uR && !this._preferBitrate && ((0, tR.I)(void 0 !== this._quality), qR = (0, tR.V)(Math.round((0, tR.ac)(uR.worst, uR.best, this._quality)), uR.min, uR.max));
        if (void 0 !== this._bitrate) ZR = this._bitrate;
        else {
          let yR = this._quality;
          void 0 === yR && ((0, tR.I)(null !== qR && uR), yR = (0, tR.V)((qR - uR.worst) / (uR.best - uR.worst), 0, 1)), ZR = LR(RR, JR, GR, aR(yR))
        }
        return {
          quantizer: qR,
          bitrate: ZR,
          bitrateMode: iR
        }
      }
      _toVideoBitrate(RR, JR, GR) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, tR.I)(void 0 !== this._quality), LR(RR, JR, GR, aR(this._quality)))
      }
      _toAudioBitrate(RR) {
        if (yR.p.includes(RR) || "flac" === RR) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const JR = aR(this._quality),
          GR = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [RR];
        if (!GR) throw new Error(`Unhandled codec: ${RR}`);
        let tR = GR * JR;
        if ("aac" === RR) {
          tR = [96e3, 128e3, 16e4, 192e3].reduce(((RR, JR) => Math.abs(JR - tR) < Math.abs(RR - tR) ? JR : RR))
        } else if ("opus" === RR || "vorbis" === RR) tR = Math.max(6e3, tR);
        else if ("mp3" === RR) {
          tR = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((RR, JR) => Math.abs(JR - tR) < Math.abs(RR - tR) ? JR : RR))
        }
        return 1e3 * Math.round(tR / 1e3)
      }
    }
    const rR = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      eR = {
        avc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        hevc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        vp9: {
          min: 0,
          max: 63,
          worst: 52,
          best: 20
        },
        av1: {
          min: 0,
          max: 255,
          worst: 208,
          best: 80
        }
      },
      aR = RR => .3 * Math.exp(2.5538 * RR),
      LR = (RR, JR, GR, yR) => {
        const tR = JR * GR,
          uR = 3e6,
          ZR = uR * Math.pow(tR / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [RR] * yR;
        return 1e3 * Math.ceil(ZR / 1e3)
      },
      nR = (RR, JR) => "avc" === RR ? {
        avc: {
          quantizer: JR
        }
      } : "hevc" === RR ? {
        hevc: {
          quantizer: JR
        }
      } : "vp9" === RR ? {
        vp9: {
          quantizer: JR
        }
      } : "av1" === RR ? {
        av1: {
          quantizer: JR
        }
      } : void(0, tR.I)(!1),
      UR = (RR, JR) => void 0 !== RR ? RR : void 0 !== JR ? JR instanceof wR ? JR : new wR({
        bitrate: JR
      }) : void 0
  },
  41147: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR, tR = GR(41115);
    ! function(RR) {
      RR[RR.Silent = 0] = "Silent", RR[RR.Errors = 1] = "Errors", RR[RR.Warnings = 2] = "Warnings", RR[RR.Info = 3] = "Info"
    }(yR || (yR = {}));
    class uR {
      constructor() {}
      static get level() {
        return uR._level
      }
      static set level(RR) {
        if (RR !== yR.Silent && RR !== yR.Errors && RR !== yR.Warnings && RR !== yR.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        uR._level = RR
      }
      static get _emitter() {
        return uR._emitterInstance ??= new tR.i
      }
      static on(RR, JR, GR) {
        return uR._emitter.on(RR, JR, GR)
      }
      static _error() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        uR._emitter._emit("error", JR), uR._level >= yR.Errors && console.error(...JR)
      }
      static _warn() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        uR._emitter._emit("warn", JR), uR._level >= yR.Warnings && console.warn(...JR)
      }
      static _info() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        uR._emitter._emit("info", JR), uR._level >= yR.Info && console.info(...JR)
      }
    }
    uR._level = yR.Info, uR._emitterInstance = null
  },
  41192: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR,
      c: () => VR,
      f: () => iR,
      j: () => KR,
      m: () => ZR
    });
    GR(41128);
    var yR = GR(41133);
    GR(41115), GR(41158);
    var tR = GR(41179);
    GR(41187), GR(41182);
    GR(41140), GR(41147), "function" === typeof SuppressedError && SuppressedError;
    class uR {
      constructor() {
        this._connectedTrack = null, this._closingPromise = null, this._closed = !1, this._nominalBitrate = null
      }
      _ensureValidAdd() {
        if (!this._connectedTrack) throw new Error("Source is not connected to an output track.");
        if ("canceled" === this._connectedTrack.output.state) throw new Error("Output has been canceled.");
        if ("finalizing" === this._connectedTrack.output.state || "finalized" === this._connectedTrack.output.state) throw new Error("Output has been finalized.");
        if ("pending" === this._connectedTrack.output.state) throw new Error("Output has not started.");
        if (this._closed) throw new Error("Source is closed.")
      }
      async _start() {}
      async _flushAndClose(RR) {}
      close() {
        if (this._closingPromise) return;
        const RR = this._connectedTrack;
        if (!RR) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === RR.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== RR.output.state && "finalized" !== RR.output.state && RR.output._muxer.onTrackClose(RR)
        })()
      }
      async _flushOrWaitForOngoingClose(RR) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(RR), this._closed = !0
        })()
      }
    }
    class ZR extends uR {
      constructor(RR) {
        if (super(), !yR.v.includes(RR)) throw new TypeError(`Invalid video codec '${RR}'. Must be one of: ${yR.v.join(", ")}.`);
        this._codec = RR
      }
    }
    const qR = (RR, JR) => {
      if (RR.metadata.hasOnlyKeyPackets && "key" !== JR.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class iR extends ZR {
      constructor(RR) {
        super(RR)
      }
      add(RR, JR) {
        if (!(RR instanceof tR.c)) throw new TypeError("packet must be an EncodedPacket.");
        if (RR.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== JR && (!JR || "object" !== typeof JR)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), qR(this._connectedTrack, RR), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, RR, JR)
      }
    }
    class fR extends uR {
      constructor(RR) {
        if (super(), !yR.d.includes(RR)) throw new TypeError(`Invalid audio codec '${RR}'. Must be one of: ${yR.d.join(", ")}.`);
        this._codec = RR
      }
    }
    class VR extends fR {
      constructor(RR) {
        super(RR)
      }
      add(RR, JR) {
        if (!(RR instanceof tR.c)) throw new TypeError("packet must be an EncodedPacket.");
        if (RR.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== JR && (!JR || "object" !== typeof JR)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, RR, JR)
      }
    }
    class KR extends uR {
      constructor(RR) {
        if (super(), !yR.t.includes(RR)) throw new TypeError(`Invalid subtitle codec '${RR}'. Must be one of: ${yR.t.join(", ")}.`);
        this._codec = RR
      }
    }
  },
  41119: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      g: () => iR,
      k: () => tR,
      n: () => qR,
      o: () => ZR,
      p: () => fR
    });
    var yR = GR(41115);
    class tR {
      constructor(RR, JR) {
        if (this.data = RR, this.mimeType = JR, !(RR instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof JR) throw new TypeError("mimeType must be a string.")
      }
    }
    class uR {
      constructor(RR, JR, GR, yR) {
        if (this.data = RR, this.mimeType = JR, this.name = GR, this.description = yR, !(RR instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== JR && "string" !== typeof JR) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== GR && "string" !== typeof GR) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== yR && "string" !== typeof yR) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const ZR = RR => {
        if (!RR || "object" !== typeof RR) throw new TypeError("tags must be an object.");
        if (void 0 !== RR.title && "string" !== typeof RR.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== RR.description && "string" !== typeof RR.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== RR.artist && "string" !== typeof RR.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== RR.album && "string" !== typeof RR.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== RR.albumArtist && "string" !== typeof RR.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== RR.trackNumber && (!Number.isInteger(RR.trackNumber) || RR.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== RR.tracksTotal && (!Number.isInteger(RR.tracksTotal) || RR.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== RR.discNumber && (!Number.isInteger(RR.discNumber) || RR.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== RR.discsTotal && (!Number.isInteger(RR.discsTotal) || RR.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== RR.genre && "string" !== typeof RR.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== RR.date && (!(RR.date instanceof Date) || Number.isNaN(RR.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== RR.beatsPerMinute && (!Number.isInteger(RR.beatsPerMinute) || RR.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== RR.lyrics && "string" !== typeof RR.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== RR.images) {
          if (!Array.isArray(RR.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const JR of RR.images) {
            if (!JR || "object" !== typeof JR) throw new TypeError("Each image in tags.images must be an object.");
            if (!(JR.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof JR.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(JR.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== RR.comment && "string" !== typeof RR.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== RR.raw) {
          if (!RR.raw || "object" !== typeof RR.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const JR of Object.values(RR.raw))
            if (null !== JR && "string" !== typeof JR && (!Array.isArray(JR) || !JR.every((RR => "string" === typeof RR))) && !(JR instanceof Uint8Array) && !(JR instanceof tR) && !(JR instanceof uR) && !(0, yR.Ob)(JR)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      qR = RR => void 0 === RR.title && void 0 === RR.description && void 0 === RR.artist && void 0 === RR.album && void 0 === RR.albumArtist && void 0 === RR.trackNumber && void 0 === RR.tracksTotal && void 0 === RR.discNumber && void 0 === RR.discsTotal && void 0 === RR.genre && void 0 === RR.beatsPerMinute && void 0 === RR.date && void 0 === RR.lyrics && (!RR.images || 0 === RR.images.length) && void 0 === RR.comment && (void 0 === RR.raw || 0 === Object.keys(RR.raw).length),
      iR = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      fR = RR => {
        if (!RR || "object" !== typeof RR) throw new TypeError("disposition must be an object.");
        if (void 0 !== RR.default && "boolean" !== typeof RR.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== RR.primary && "boolean" !== typeof RR.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== RR.forced && "boolean" !== typeof RR.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== RR.original && "boolean" !== typeof RR.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== RR.commentary && "boolean" !== typeof RR.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== RR.hearingImpaired && "boolean" !== typeof RR.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== RR.visuallyImpaired && "boolean" !== typeof RR.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  41115: (RR, JR, GR) => {
    function yR(RR) {
      if (!RR) throw new Error("Assertion failed.")
    }
    GR.d(JR, {
      $b: () => LR,
      B: () => FR,
      Bc: () => TR,
      C: () => pJ,
      Cc: () => rR,
      Db: () => yJ,
      E: () => lJ,
      Ec: () => cJ,
      H: () => zR,
      Hb: () => bR,
      I: () => yR,
      Ic: () => dR,
      Kb: () => UR,
      M: () => PR,
      Mc: () => ER,
      Nb: () => MJ,
      Nc: () => jR,
      O: () => AJ,
      Ob: () => SJ,
      P: () => oR,
      Qc: () => gJ,
      Rb: () => LJ,
      S: () => iR,
      Tb: () => nR,
      Tc: () => pR,
      Ub: () => iJ,
      V: () => YR,
      Vc: () => gR,
      W: () => PJ,
      Xb: () => BJ,
      Y: () => nJ,
      Yc: () => mJ,
      _: () => NR,
      _b: () => UJ,
      ac: () => kR,
      ad: () => MR,
      c: () => HR,
      cb: () => aR,
      cc: () => rJ,
      cd: () => XR,
      db: () => uJ,
      dc: () => QR,
      e: () => vR,
      f: () => ZJ,
      gc: () => eR,
      gd: () => CJ,
      hb: () => fR,
      i: () => zJ,
      ib: () => mR,
      id: () => bJ,
      jb: () => hR,
      kc: () => ZR,
      m: () => qR,
      mc: () => XJ,
      md: () => IJ,
      nb: () => SR,
      o: () => xR,
      ob: () => RJ,
      pb: () => WJ,
      pc: () => JJ,
      pd: () => CR,
      s: () => uR,
      sc: () => IR,
      tb: () => DR,
      u: () => tJ,
      ub: () => wJ,
      uc: () => WR,
      vc: () => AR,
      wc: () => cR,
      x: () => OR,
      xb: () => eJ,
      xc: () => KR,
      y: () => lR,
      zb: () => VJ,
      zc: () => sR
    });
    const tR = Math.PI / 180,
      uR = 180 / Math.PI,
      ZR = RR => {
        const JR = (RR % 360 + 360) % 360;
        if (0 === JR || 90 === JR || 180 === JR || 270 === JR) return JR;
        throw new Error(`Invalid rotation ${RR}.`)
      },
      qR = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      iR = (RR, JR, GR) => {
        const [yR, tR, , uR, ZR] = RR, qR = Math.abs(yR) * JR + Math.abs(uR) * GR, iR = Math.abs(tR) * JR + Math.abs(ZR) * GR;
        return eR(eR(wR(-JR / 2, -GR / 2), RR), wR(qR / 2, iR / 2))
      },
      fR = RR => {
        const [JR, GR] = RR, yR = Math.atan2(GR, VR(RR) ? -JR : JR);
        return ZR(TR(yR * uR, 90))
      },
      VR = RR => {
        const [JR, GR, , yR, tR] = RR;
        return JR * tR - GR * yR < 0
      },
      KR = RR => {
        const JR = RR * tR,
          GR = Math.round(Math.cos(JR)),
          yR = Math.round(Math.sin(JR));
        return [GR, yR, 0, -yR, GR, 0, 0, 0, 1]
      },
      wR = (RR, JR) => [1, 0, 0, 0, 1, 0, RR, JR, 1],
      rR = (RR, JR) => [RR, 0, 0, 0, JR, 0, 0, 0, 1],
      eR = (RR, JR) => {
        const GR = new Array(9);
        for (let yR = 0; yR < 3; yR++)
          for (let tR = 0; tR < 3; tR++) GR[3 * yR + tR] = RR[3 * yR] * JR[tR] + RR[3 * yR + 1] * JR[3 + tR] + RR[3 * yR + 2] * JR[6 + tR];
        return GR
      },
      aR = (RR, JR, GR, yR) => ({
        rotation: ZR(RR + (JR ? -GR : GR)),
        flip: JR !== yR
      }),
      LR = RR => RR && RR[RR.length - 1],
      nR = RR => RR >= 0 && RR < 2 ** 32,
      UR = RR => RR >= -(2 ** 31) && RR < 2 ** 31,
      WR = RR => {
        let JR = 0;
        for (; 0 === RR.readBits(1) && JR < 32;) JR++;
        if (JR >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << JR) - 1 + RR.readBits(JR)
      },
      AR = RR => {
        const JR = WR(RR);
        return 0 === (1 & JR) ? -(JR >> 1) : JR + 1 >> 1
      },
      CR = (RR, JR, GR, yR) => {
        for (let tR = JR; tR < GR; tR++) {
          const JR = Math.floor(tR / 8);
          let uR = RR[JR];
          const ZR = 7 - (7 & tR);
          uR &= ~(1 << ZR), uR |= (yR & 1 << GR - tR - 1) >> GR - tR - 1 << ZR, RR[JR] = uR
        }
      },
      XR = RR => RR.constructor === Uint8Array ? RR : ArrayBuffer.isView(RR) ? new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength) : new Uint8Array(RR),
      MR = RR => RR.constructor === DataView ? RR : ArrayBuffer.isView(RR) ? new DataView(RR.buffer, RR.byteOffset, RR.byteLength) : new DataView(RR),
      BR = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const JR = new Uint8Array(3 * RR.length);
          let GR = 0;
          for (let yR = 0; yR < RR.length; yR++) {
            let tR = RR.charCodeAt(yR);
            if (tR < 128) JR[GR++] = tR;
            else if (tR < 2048) JR[GR++] = 192 | tR >> 6, JR[GR++] = 128 | 63 & tR;
            else if (tR < 55296 || tR > 57343) JR[GR++] = 224 | tR >> 12, JR[GR++] = 128 | tR >> 6 & 63, JR[GR++] = 128 | 63 & tR;
            else {
              const uR = yR + 1 < RR.length ? RR.charCodeAt(yR + 1) : 0;
              tR < 56320 && uR >= 56320 && uR <= 57343 ? (tR = 65536 + (tR - 55296 << 10) + (uR - 56320), yR++, JR[GR++] = 240 | tR >> 18, JR[GR++] = 128 | tR >> 12 & 63, JR[GR++] = 128 | tR >> 6 & 63, JR[GR++] = 128 | 63 & tR) : (JR[GR++] = 239, JR[GR++] = 191, JR[GR++] = 189)
            }
          }
          return JR.slice(0, GR)
        }
      },
      lR = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const JR = RR.trim().toLowerCase();
          if ("utf-8" === JR || "utf8" === JR || "unicode-1-1-utf-8" === JR) this.encoding = "utf-8";
          else if ("utf-16le" === JR || "utf-16" === JR) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== JR) throw new RangeError(`The encoding label provided ('${RR}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(RR) {
          const JR = RR ? XR(RR) : new Uint8Array(0),
            GR = [];
          if ("utf-8" === this.encoding) {
            let RR = JR.length >= 3 && 239 === JR[0] && 187 === JR[1] && 191 === JR[2] ? 3 : 0;
            for (; RR < JR.length;) {
              const yR = JR[RR];
              if (yR < 128) {
                GR.push(yR), RR++;
                continue
              }
              let tR, uR;
              if (yR >= 194 && yR < 224) tR = 1, uR = 31 & yR;
              else if (yR >= 224 && yR < 240) tR = 2, uR = 15 & yR;
              else {
                if (!(yR >= 240 && yR < 245)) {
                  GR.push(65533), RR++;
                  continue
                }
                tR = 3, uR = 7 & yR
              }
              let ZR = 224 === yR ? 160 : 240 === yR ? 144 : 128,
                qR = 237 === yR ? 159 : 244 === yR ? 143 : 191,
                iR = 1;
              for (; iR <= tR; iR++) {
                const GR = RR + iR < JR.length ? JR[RR + iR] : 0;
                if (GR < ZR || GR > qR) break;
                uR = uR << 6 | 63 & GR, ZR = 128, qR = 191
              }
              RR += iR, iR <= tR ? GR.push(65533) : uR >= 65536 ? (uR -= 65536, GR.push(55296 | uR >> 10, 56320 | 1023 & uR)) : GR.push(uR)
            }
          } else {
            const RR = "utf-16le" === this.encoding,
              yR = RR ? 255 : 254,
              tR = RR ? 254 : 255;
            let uR = JR.length >= 2 && JR[0] === yR && JR[1] === tR ? 2 : 0;
            for (; uR + 1 < JR.length;) {
              const yR = RR ? JR[uR] | JR[uR + 1] << 8 : JR[uR] << 8 | JR[uR + 1];
              if (uR += 2, yR >= 55296 && yR <= 56319) {
                const tR = uR + 1 < JR.length ? RR ? JR[uR] | JR[uR + 1] << 8 : JR[uR] << 8 | JR[uR + 1] : -1;
                tR >= 56320 && tR <= 57343 ? (GR.push(yR, tR), uR += 2) : GR.push(65533)
              } else yR >= 56320 && yR <= 57343 ? GR.push(65533) : GR.push(yR)
            }
            uR < JR.length && GR.push(65533)
          }
          let yR = "";
          for (let tR = 0; tR < GR.length; tR += 8192) yR += String.fromCharCode(...GR.slice(tR, tR + 8192));
          return yR
        }
      },
      pR = new lR,
      gR = new BR,
      bR = RR => {
        for (let JR = 0; JR < RR.length; JR++) {
          if (RR.charCodeAt(JR) > 255) return !1
        }
        return !0
      },
      vR = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      OR = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      xR = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      NR = RR => !RR || null == RR.primaries && null == RR.transfer && null == RR.matrix && null == RR.fullRange,
      DR = RR => RR instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && RR instanceof SharedArrayBuffer || ArrayBuffer.isView(RR);
    class HR {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let RR;
        const JR = new Promise((JR => {
            let GR = !1;
            RR = () => {
              GR || (JR(), this.pending--, GR = !0)
            }
          })),
          GR = this.currentPromise;
        return this.currentPromise = JR, this.pending++, await GR, RR
      }
    }
    const oR = RR => [...RR].map((RR => RR.toString(16).padStart(2, "0"))).join(""),
      cR = RR => (RR = (RR = (RR = (RR = (RR = RR >> 1 & 1431655765 | (1431655765 & RR) << 1) >> 2 & 858993459 | (858993459 & RR) << 2) >> 4 & 252645135 | (252645135 & RR) << 4) >> 8 & 16711935 | (16711935 & RR) << 8) >> 16 & 65535 | (65535 & RR) << 16) >>> 0,
      PR = (RR, JR, GR) => {
        let yR = 0,
          tR = RR.length - 1,
          uR = -1;
        for (; yR <= tR;) {
          const ZR = yR + (tR - yR + 1) / 2 | 0;
          GR(RR[ZR]) <= JR ? (uR = ZR, yR = ZR + 1) : tR = ZR - 1
        }
        return uR
      },
      IR = () => {
        let RR, JR;
        return {
          promise: new Promise(((GR, yR) => {
            RR = GR, JR = yR
          })),
          resolve: RR,
          reject: JR
        }
      },
      mR = (RR, JR) => {
        for (let GR = RR.length - 1; GR >= 0; GR--)
          if (JR(RR[GR])) return GR;
        return -1
      },
      zR = RR => {
        throw new Error(`Unexpected value: ${RR}`)
      },
      SR = (RR, JR, GR) => {
        const yR = RR.getUint8(JR),
          tR = RR.getUint8(JR + 1),
          uR = RR.getUint8(JR + 2);
        return GR ? yR | tR << 8 | uR << 16 : yR << 16 | tR << 8 | uR
      },
      jR = (RR, JR, GR, yR) => {
        GR >>>= 0, GR &= 16777215, yR ? (RR.setUint8(JR, 255 & GR), RR.setUint8(JR + 1, GR >>> 8 & 255), RR.setUint8(JR + 2, GR >>> 16 & 255)) : (RR.setUint8(JR, GR >>> 16 & 255), RR.setUint8(JR + 1, GR >>> 8 & 255), RR.setUint8(JR + 2, 255 & GR))
      },
      dR = (RR, JR, GR, yR) => {
        (GR = YR(GR, -8388608, 8388607)) < 0 && (GR = GR + 16777216 & 16777215), jR(RR, JR, GR, yR)
      },
      ER = (RR, JR, GR, yR) => {
        yR ? (RR.setUint32(JR + 0, GR, !0), RR.setInt32(JR + 4, Math.floor(GR / 2 ** 32), !0)) : (RR.setInt32(JR + 0, Math.floor(GR / 2 ** 32), !0), RR.setUint32(JR + 4, GR, !0))
      },
      YR = (RR, JR, GR) => Math.max(JR, Math.min(GR, RR)),
      kR = (RR, JR, GR) => RR + (JR - RR) * GR,
      QR = (RR, JR) => RR - Math.floor(RR / JR) * JR,
      FR = "und",
      TR = (RR, JR) => Math.round(RR / JR) * JR,
      sR = (RR, JR) => Math.round(RR * JR) / JR,
      hR = (RR, JR) => Math.floor(RR * JR) / JR,
      RJ = RR => {
        let JR = 0;
        for (; RR;) JR++, RR >>= 1;
        return JR
      },
      JJ = RR => {
        let JR = 0;
        for (; 0 !== RR;) RR &= RR - 1, JR++;
        return JR
      },
      GJ = /^[a-z]{3}$/,
      yJ = RR => GJ.test(RR),
      tJ = 1e6 * (1 + Number.EPSILON),
      uJ = (RR, JR) => {
        const GR = RR < 0 ? -1 : 1;
        let yR = 0,
          tR = 1,
          uR = 1,
          ZR = 0,
          qR = RR = Math.abs(RR);
        for (;;) {
          const RR = Math.floor(qR),
            iR = RR * uR + yR,
            fR = RR * ZR + tR;
          if (fR > JR) return {
            num: GR * uR,
            den: ZR
          };
          if (yR = uR, tR = ZR, uR = iR, ZR = fR, qR = 1 / (qR - RR), !isFinite(qR)) break
        }
        return {
          num: GR * uR,
          den: ZR
        }
      };
    class ZJ {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(RR) {
        return this.currentPromise = this.currentPromise.then(RR)
      }
    }
    let qJ = null;
    const iJ = () => null !== qJ ? qJ : qJ = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let fJ = null;
    const VJ = () => null !== fJ ? fJ : fJ = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let KJ = null;
    const wJ = () => null !== KJ ? KJ : KJ = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const rJ = RR => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${RR} is not available in this environment.` : `${RR} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      eJ = RR => RR instanceof DOMException && "QuotaExceededError" === RR.name && /reclaimed/i.test(RR.message),
      aJ = (async () => {})().constructor,
      LJ = RR => RR instanceof aJ || RR instanceof Promise || "function" === typeof RR?.then,
      nJ = (RR, JR) => -1 !== RR ? RR : JR,
      UJ = function*(RR) {
        for (const JR in RR) {
          const GR = RR[JR];
          void 0 !== GR && (yield {
            key: JR,
            value: GR
          })
        }
      },
      WJ = RR => {
        switch (RR.toLowerCase()) {
          case "image/jpeg":
          case "image/jpg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "image/webp":
            return ".webp";
          case "image/bmp":
            return ".bmp";
          case "image/svg+xml":
            return ".svg";
          case "image/tiff":
            return ".tiff";
          case "image/avif":
            return ".avif";
          case "image/x-icon":
          case "image/vnd.microsoft.icon":
            return ".ico";
          default:
            return null
        }
      },
      AJ = RR => {
        let JR = "";
        for (let GR = 0; GR < RR.length; GR++) JR += String.fromCharCode(RR[GR]);
        return btoa(JR)
      },
      CJ = (RR, JR) => {
        if (RR.length !== JR.length) return !1;
        for (let GR = 0; GR < RR.length; GR++)
          if (RR[GR] !== JR[GR]) return !1;
        return !0
      },
      XJ = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      MJ = RR => "number" === typeof RR && !Number.isNaN(RR),
      BJ = (RR, JR) => {
        if (JR.includes("://")) return JR;
        if (RR.includes("://")) {
          const JR = RR.indexOf("?"); - 1 !== JR && (RR = RR.slice(0, JR))
        }
        let GR;
        if (JR.startsWith("/")) {
          const yR = RR.indexOf("://");
          if (-1 === yR) GR = JR;
          else {
            const tR = RR.indexOf("/", yR + 3);
            GR = -1 === tR ? RR + JR : RR.slice(0, tR) + JR
          }
        } else {
          const yR = RR.lastIndexOf("/");
          GR = -1 === yR ? JR : RR.slice(0, yR + 1) + JR
        }
        let yR = "";
        const tR = GR.indexOf("://");
        if (-1 !== tR) {
          const RR = GR.indexOf("/", tR + 3); - 1 !== RR && (yR = GR.slice(0, RR), GR = GR.slice(RR))
        }
        const uR = GR.split("/"),
          ZR = [];
        for (const qR of uR) ".." === qR ? ZR.pop() : "." !== qR && ZR.push(qR);
        return yR + ZR.join("/")
      },
      lJ = (RR, JR) => {
        let GR = -1,
          yR = 1 / 0;
        for (let tR = 0; tR < RR.length; tR++) {
          const uR = JR(RR[tR]);
          uR < yR && (yR = uR, GR = tR)
        }
        return GR
      },
      pJ = (RR, JR) => {
        let GR = -1,
          yR = -1 / 0;
        for (let tR = 0; tR < RR.length; tR++) {
          const uR = JR(RR[tR]);
          uR > yR && (yR = uR, GR = tR)
        }
        return GR
      },
      gJ = RR => {
        yR(Number.isInteger(RR.num)), yR(Number.isInteger(RR.den)), yR(0 !== RR.den);
        let JR = Math.abs(RR.num),
          GR = Math.abs(RR.den);
        for (; 0 !== GR;) {
          const RR = JR % GR;
          JR = GR, GR = RR
        }
        const tR = JR || 1;
        return {
          num: RR.num / tR,
          den: RR.den / tR
        }
      },
      bJ = (RR, JR) => {
        if ("object" !== typeof RR || !RR) throw new TypeError(`${JR} must be an object.`);
        if (!Number.isInteger(RR.left) || RR.left < 0) throw new TypeError(`${JR}.left must be a non-negative integer.`);
        if (!Number.isInteger(RR.top) || RR.top < 0) throw new TypeError(`${JR}.top must be a non-negative integer.`);
        if (!Number.isInteger(RR.width) || RR.width < 0) throw new TypeError(`${JR}.width must be a non-negative integer.`);
        if (!Number.isInteger(RR.height) || RR.height < 0) throw new TypeError(`${JR}.height must be a non-negative integer.`)
      };
    let vJ, OJ = 1;
    const xJ = new Map,
      NJ = new Map,
      DJ = () => "undefined" === typeof window,
      HJ = () => {
        const RR = new Map,
          JR = new Map;
        self.onmessage = GR => {
          const yR = GR.data;
          switch (yR.type) {
            case "set-timeout": {
              const JR = setTimeout((() => {
                RR.delete(yR.timerId), self.postMessage({
                  type: "fire",
                  timerId: yR.timerId
                })
              }), yR.delay);
              RR.set(yR.timerId, JR)
            }
            break;
            case "set-interval": {
              const RR = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: yR.timerId
                })
              }), yR.delay);
              JR.set(yR.timerId, RR)
            }
            break;
            case "clear-timeout": {
              const JR = RR.get(yR.timerId);
              void 0 !== JR && (clearTimeout(JR), RR.delete(yR.timerId))
            }
            break;
            case "clear-interval": {
              const RR = JR.get(yR.timerId);
              void 0 !== RR && (clearInterval(RR), JR.delete(yR.timerId))
            }
          }
        }
      },
      oJ = () => {
        if (vJ) return vJ;
        const RR = `(${HJ.toString()})();`,
          JR = URL.createObjectURL(new Blob([RR], {
            type: "text/javascript"
          }));
        return vJ = new Worker(JR), URL.revokeObjectURL(JR), vJ.onmessage = RR => {
          const JR = RR.data,
            GR = xJ.get(JR.timerId);
          if (GR) return xJ.delete(JR.timerId), void GR();
          const yR = NJ.get(JR.timerId);
          yR && yR()
        }, vJ
      },
      cJ = (RR, JR) => {
        if (DJ()) return {
          id: setInterval(RR, JR)
        };
        const GR = OJ++;
        return NJ.set(GR, (() => {
          RR()
        })), oJ().postMessage({
          type: "set-interval",
          timerId: GR,
          delay: JR
        }), {
          id: GR
        }
      },
      PJ = RR => {
        DJ() ? clearInterval(RR.id) : (yR("number" === typeof RR.id), NJ.delete(RR.id), oJ().postMessage({
          type: "clear-interval",
          timerId: RR.id
        }))
      },
      IJ = RR => new Promise((JR => setTimeout(JR, RR))),
      mJ = RR => Array.isArray(RR) ? RR : [RR];
    class zJ {
      constructor() {
        this._listeners = new Map
      }
      on(RR, JR, GR) {
        this._listeners.has(RR) || this._listeners.set(RR, new Set);
        const yR = {
          iK: JR,
          once: GR?.once ?? !1
        };
        return this._listeners.get(RR).add(yR), () => {
          this._listeners.get(RR)?.delete(yR)
        }
      }
      _emit() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        const [yR, tR] = JR, uR = this._listeners.get(yR);
        if (uR)
          for (const qR of uR) {
            try {
              qR.iK(tR)
            } catch (ZR) {
              console.error(ZR)
            }
            qR.once && uR.delete(qR)
          }
      }
    }
    const SJ = RR => null !== RR && "object" === typeof RR && Object.getPrototypeOf(RR) === Object.prototype && Object.values(RR).every((RR => "string" === typeof RR))
  },
  41123: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => oG,
      i: () => cG,
      l: () => HG,
      n: () => NG,
      q: () => IG
    });
    var yR = GR(41128),
      tR = GR(41133);
    var uR;
    ! function(RR) {
      RR[RR.FrameCount = 1] = "FrameCount", RR[RR.FileSize = 2] = "FileSize", RR[RR.Toc = 4] = "Toc"
    }(uR || (uR = {}));
    var ZR = GR(41147),
      qR = GR(41115);
    class iR {
      constructor(RR, JR, GR, yR, tR) {
        this.bytes = RR, this.view = JR, this.offset = GR, this.start = yR, this.end = tR, this.bufferPos = yR - GR
      }
      static tempFromBytes(RR) {
        return new iR(RR, (0, qR.ad)(RR), 0, 0, RR.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(RR) {
        this.bufferPos = RR - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(RR) {
        this.bufferPos += RR
      }
      slice(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - RR;
        if (RR < this.start || RR + JR > this.end) throw new RangeError("Slicing outside of original slice.");
        return new iR(this.bytes, this.view, this.offset, RR, RR + JR)
      }
    }
    const fR = (RR, JR) => {
        if (RR.filePos < RR.start || RR.filePos + JR > RR.end) throw new RangeError(`Tried reading [${RR.filePos}, ${RR.filePos+JR}), but slice is [${RR.start}, ${RR.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      VR = (RR, JR) => {
        fR(RR, JR);
        const GR = RR.bytes.subarray(RR.bufferPos, RR.bufferPos + JR);
        return RR.bufferPos += JR, GR
      };
    var KR, wR;
    ! function(RR) {
      RR[RR.Unsynchronisation = 128] = "Unsynchronisation", RR[RR.ExtendedHeader = 64] = "ExtendedHeader", RR[RR.ExperimentalIndicator = 32] = "ExperimentalIndicator", RR[RR.Footer = 16] = "Footer"
    }(KR || (KR = {})),
    function(RR) {
      RR[RR.ISO_8859_1 = 0] = "ISO_8859_1", RR[RR.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", RR[RR.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", RR[RR.UTF_8 = 3] = "UTF_8"
    }(wR || (wR = {}));
    var rR = GR(41119);
    class eR {
      constructor(RR) {
        this.mutex = new qR.c, this.trackTimestampInfo = new WeakMap, this.output = RR
      }
      onTrackClose(RR) {}
      validateTimestamp(RR, JR, GR) {
        let yR = this.trackTimestampInfo.get(RR);
        if (yR) {
          if (GR && (yR.maxTimestampBeforeLastKeyPacket = yR.maxTimestamp), null !== yR.maxTimestampBeforeLastKeyPacket && JR < yR.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${JR}s, but largest timestamp is ${yR.maxTimestampBeforeLastKeyPacket}s.`);
          yR.maxTimestamp = Math.max(yR.maxTimestamp, JR)
        } else {
          if (!GR) throw new Error("First packet must be a key packet.");
          yR = {
            maxTimestamp: JR,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(RR, yR)
        }
      }
    }
    var aR = GR(41140),
      LR = GR(41130);
    var nR = GR(41158),
      UR = GR(41149);
    class WR {
      constructor(RR) {
        this.writer = RR, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(RR) {
        this.helperView.setUint32(0, RR, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(RR) {
        this.helperView.setUint32(0, Math.floor(RR / 2 ** 32), !1), this.helperView.setUint32(4, RR, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(RR) {
        for (let JR = 0; JR < RR.length; JR++) this.helperView.setUint8(JR % 8, RR.charCodeAt(JR)), JR % 8 === 7 && this.writer.write(this.helper);
        RR.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, RR.length % 8))
      }
      writeBox(RR) {
        if (this.offsets.set(RR, this.writer.getPos()), RR.contents && !RR.children) this.writeBoxHeader(RR, RR.size ?? RR.contents.byteLength + 8), this.writer.write(RR.contents);
        else {
          const JR = this.writer.getPos();
          if (this.writeBoxHeader(RR, 0), RR.contents && this.writer.write(RR.contents), RR.children)
            for (const tR of RR.children) tR && this.writeBox(tR);
          const GR = this.writer.getPos(),
            yR = RR.size ?? GR - JR;
          this.writer.seek(JR), this.writeBoxHeader(RR, yR), this.writer.seek(GR)
        }
      }
      writeBoxHeader(RR, JR) {
        this.writeU32(RR.largeSize ? 1 : JR), this.writeAscii(RR.type), RR.largeSize && this.writeU64(JR)
      }
      measureBoxHeader(RR) {
        return 8 + (RR.largeSize ? 8 : 0)
      }
      patchBox(RR) {
        const JR = this.offsets.get(RR);
        (0, qR.I)(void 0 !== JR);
        const GR = this.writer.getPos();
        this.writer.seek(JR), this.writeBox(RR), this.writer.seek(GR)
      }
      measureBox(RR) {
        if (RR.contents && !RR.children) {
          return this.measureBoxHeader(RR) + RR.contents.byteLength
        } {
          let JR = this.measureBoxHeader(RR);
          if (RR.contents && (JR += RR.contents.byteLength), RR.children)
            for (const GR of RR.children) GR && (JR += this.measureBox(GR));
          return JR
        }
      }
    }
    const AR = new Uint8Array(8),
      CR = new DataView(AR.buffer),
      XR = RR => [(RR % 256 + 256) % 256],
      MR = RR => (CR.setUint16(0, RR, !1), [AR[0], AR[1]]),
      BR = RR => (CR.setInt16(0, RR, !1), [AR[0], AR[1]]),
      lR = RR => (CR.setUint32(0, RR, !1), [AR[1], AR[2], AR[3]]),
      pR = RR => (CR.setUint32(0, RR, !1), [AR[0], AR[1], AR[2], AR[3]]),
      gR = RR => (CR.setInt32(0, RR, !1), [AR[0], AR[1], AR[2], AR[3]]),
      bR = RR => (CR.setUint32(0, Math.floor(RR / 2 ** 32), !1), CR.setUint32(4, RR, !1), [AR[0], AR[1], AR[2], AR[3], AR[4], AR[5], AR[6], AR[7]]),
      vR = RR => (CR.setInt32(0, Math.floor(RR / 2 ** 32), !1), CR.setUint32(4, RR, !1), [AR[0], AR[1], AR[2], AR[3], AR[4], AR[5], AR[6], AR[7]]),
      OR = RR => (CR.setInt16(0, 256 * RR, !1), [AR[0], AR[1]]),
      xR = RR => (CR.setInt32(0, 65536 * RR, !1), [AR[0], AR[1], AR[2], AR[3]]),
      NR = RR => (CR.setInt32(0, 2 ** 30 * RR, !1), [AR[0], AR[1], AR[2], AR[3]]),
      DR = (RR, JR) => {
        const GR = [];
        let yR = RR;
        do {
          let RR = 127 & yR;
          yR >>= 7, GR.length > 0 && (RR |= 128), GR.push(RR), void 0 !== JR && JR--
        } while (yR > 0 || JR);
        return GR.reverse()
      },
      HR = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = Array(RR.length).fill(null).map(((JR, GR) => RR.charCodeAt(GR)));
        return JR && GR.push(0), GR
      },
      oR = RR => [xR(RR[0]), xR(RR[1]), NR(RR[2]), xR(RR[3]), xR(RR[4]), NR(RR[5]), xR(RR[6]), xR(RR[7]), NR(RR[8])],
      cR = (RR, JR, GR) => ({
        type: RR,
        contents: JR && new Uint8Array(JR.flat(10)),
        children: GR
      }),
      PR = (RR, JR, GR, yR, tR) => cR(RR, [XR(JR), lR(GR), yR ?? []], tR),
      IR = () => cR("styp", [HR("iso5"), pR(0), HR("iso5"), HR("iso6"), HR("mp41"), HR("cmfc"), HR("dash")]),
      mR = (RR, JR) => {
        const GR = Math.max(0, RR.minWrittenTimestamp);
        let yR = Math.max(0, RR.maxWrittenEndTimestamp - GR);
        return Number.isFinite(yR) || (yR = 0), PR("sidx", 1, 0, [pR(1), pR(VG), bR(wG(GR, VG)), bR(0), MR(0), MR(1), pR(2147483647 & JR), pR(wG(yR, VG)), pR(0)])
      },
      zR = RR => ({
        type: "mdat",
        largeSize: RR
      }),
      SR = RR => cR("moov", void 0, [jR(RR.creationTime, RR.trackDatas), ...RR.trackDatas.map((JR => dR(JR, RR.creationTime))), RR.isFragmented ? OJ(RR.trackDatas) : null, EJ(RR)]),
      jR = (RR, JR) => {
        const GR = Math.max(0, ...JR.map((RR => Math.max(0, wG(rG(RR), VG) + wG(RR.startTimestampOffset ?? 0, VG))))),
          yR = Math.max(0, ...JR.map((RR => RR.track.id))) + 1,
          tR = !(0, qR.Tb)(RR) || !(0, qR.Tb)(GR),
          uR = tR ? bR : pR;
        return PR("mvhd", +tR, 0, [uR(RR), uR(RR), pR(VG), uR(GR), xR(1), OR(1), Array(10).fill(0), oR(qR.m), Array(24).fill(0), pR(yR)])
      },
      dR = (RR, JR) => {
        const GR = KG(RR),
          yR = null !== RR.startTimestampOffset && 0 !== RR.startTimestampOffset;
        return cR("trak", void 0, [ER(RR, JR), yR ? YR(RR) : null, kR(RR, JR), void 0 !== GR.name ? cR("udta", void 0, [cR("name", [...qR.Vc.encode(GR.name)])]) : null])
      },
      ER = (RR, JR) => {
        const GR = Math.max(0, wG(rG(RR), VG) + wG(RR.startTimestampOffset ?? 0, VG)),
          yR = !(0, qR.Tb)(JR) || !(0, qR.Tb)(GR),
          tR = yR ? bR : pR;
        let uR;
        if ("video" === RR.type && RR.track.metadata.transformationMatrix) uR = RR.track.metadata.transformationMatrix;
        else if ("video" === RR.type) {
          const {
            rotation: JR,
            flip: GR
          } = RR.track.metadata, yR = (0, qR.gc)((0, qR.xc)(JR ?? 0), (0, qR.Cc)(GR ? -1 : 1, 1));
          uR = (0, qR.S)(yR, RR.info.width, RR.info.height)
        } else uR = qR.m;
        let ZR = 2;
        !1 !== RR.track.metadata.disposition?.default && (ZR |= 1);
        const iR = "video" === RR.type ? 0 : "audio" === RR.type ? 1 : "subtitle" === RR.type ? 2 : (0, qR.H)(RR);
        return PR("tkhd", +yR, ZR, [tR(JR), tR(JR), pR(RR.track.id), pR(0), tR(GR), Array(8).fill(0), MR(0), MR(iR), OR("audio" === RR.type ? 1 : 0), MR(0), oR(uR), xR("video" === RR.type ? RR.info.width : 0), xR("video" === RR.type ? RR.info.height : 0)])
      },
      YR = RR => {
        const JR = RR.startTimestampOffset;
        if ((0, qR.I)(null !== JR), JR > 0) {
          const GR = wG(JR, VG),
            yR = wG(rG(RR), VG),
            tR = !(0, qR.Tb)(GR) || !(0, qR.Tb)(yR),
            uR = tR ? bR : pR,
            ZR = tR ? vR : gR;
          return cR("edts", void 0, [PR("elst", tR ? 1 : 0, 0, [pR(2), uR(GR), ZR(-1), xR(1), uR(yR), ZR(0), xR(1)])])
        } {
          const GR = wG(-JR, RR.timescale),
            yR = Math.max(0, wG(rG(RR), VG) + wG(JR, VG)),
            tR = !(0, qR.Kb)(GR) || !(0, qR.Tb)(yR),
            uR = tR ? bR : pR,
            ZR = tR ? vR : gR;
          return cR("edts", void 0, [PR("elst", tR ? 1 : 0, 0, [pR(1), uR(yR), ZR(GR), xR(1)])])
        }
      },
      kR = (RR, JR) => cR("mdia", void 0, [QR(RR, JR), sR(!0, FR[RR.type], TR[RR.type]), hR(RR)]),
      QR = (RR, JR) => {
        const GR = wG(rG(RR), RR.timescale),
          yR = !(0, qR.Tb)(JR) || !(0, qR.Tb)(GR),
          tR = yR ? bR : pR;
        return PR("mdhd", +yR, 0, [tR(JR), tR(JR), pR(RR.timescale), tR(GR), MR(ZG(RR.track.metadata.languageCode ?? qR.B)), MR(0)])
      },
      FR = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      TR = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      sR = function(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return PR("hdlr", 0, 0, [RR ? HR("mhlr") : pR(0), HR(JR), HR(yR), pR(0), pR(0), HR(GR, !0)])
      },
      hR = RR => cR("minf", void 0, [RJ[RR.type](), JJ(), tJ(RR)]),
      RJ = {
        video: () => PR("vmhd", 0, 1, [MR(0), MR(0), MR(0), MR(0)]),
        audio: () => PR("smhd", 0, 0, [MR(0), MR(0)]),
        subtitle: () => PR("nmhd", 0, 0)
      },
      JJ = () => cR("dinf", void 0, [GJ()]),
      GJ = () => PR("dref", 0, 0, [pR(1)], [yJ()]),
      yJ = () => PR("url ", 0, 1),
      tJ = RR => {
        const JR = RR.compositionTimeOffsetTable.length > 1 || RR.compositionTimeOffsetTable.some((RR => 0 !== RR.sampleCompositionTimeOffset));
        return cR("stbl", void 0, [uJ(RR), MJ(RR), JR ? bJ(RR) : null, JR ? vJ(RR) : null, lJ(RR), pJ(RR), gJ(RR), BJ(RR)])
      },
      uJ = RR => {
        let JR;
        if ("video" === RR.type) JR = ZJ(RG(RR.track.source._codec, RR.info.decoderConfig.codec), RR);
        else if ("audio" === RR.type) {
          const GR = GG(RR.track.source._codec, RR.info.decoderConfig.codec, RR.muxer.isQuickTime);
          (0, qR.I)(GR), JR = KJ(GR, RR)
        } else "subtitle" === RR.type && (JR = XJ(tG[RR.track.source._codec], RR));
        return (0, qR.I)(JR), PR("stsd", 0, 0, [pR(1)], [JR])
      },
      ZJ = (RR, JR) => cR(RR, [Array(6).fill(0), MR(1), MR(0), MR(0), Array(12).fill(0), MR(JR.info.width), MR(JR.info.height), pR(4718592), pR(4718592), pR(0), MR(1), XR(UR.e.length), HR(UR.e), Array(31 - UR.e.length).fill(0), MR(JR.info.hasAlphaChannel ? 32 : 24), BR(65535)], [JG[JR.track.source._codec]?.(JR) ?? null, iJ(JR), (0, qR._)(JR.info.decoderConfig.colorSpace) ? null : fJ(JR), qJ(JR)]),
      qJ = RR => 0 === RR.avgBitrate && 0 === RR.maxBitrate ? null : cR("btrt", [pR(0), pR(RR.maxBitrate), pR(RR.avgBitrate)]),
      iJ = RR => RR.info.pixelAspectRatio.num === RR.info.pixelAspectRatio.den ? null : cR("pasp", [pR(RR.info.pixelAspectRatio.num), pR(RR.info.pixelAspectRatio.den)]),
      fJ = RR => {
        const JR = RR.info.decoderConfig.colorSpace;
        return cR("colr", [HR(RR.muxer.isQuickTime ? "nclc" : "nclx"), MR(null != JR?.primaries ? qR.e[JR.primaries] : 2), MR(null != JR?.transfer ? qR.x[JR.transfer] : 2), MR(null != JR?.matrix ? qR.o[JR.matrix] : 2), RR.muxer.isQuickTime ? [] : XR((JR?.fullRange ? 1 : 0) << 7)])
      },
      VJ = RR => {
        if (!RR.info.decoderConfig) return null;
        const JR = RR.info.decoderConfig,
          GR = JR.codec.split("."),
          yR = Number(GR[1]),
          tR = Number(GR[2]),
          uR = (Number(GR[3]) << 4) + ((GR[4] ? Number(GR[4]) : 1) << 1) + (GR[8] ? Number(GR[8]) : Number(JR.colorSpace?.fullRange ?? 0)),
          ZR = GR[5] ? Number(GR[5]) : JR.colorSpace?.primaries ? qR.e[JR.colorSpace.primaries] : 1,
          iR = GR[6] ? Number(GR[6]) : JR.colorSpace?.transfer ? qR.x[JR.colorSpace.transfer] : 1,
          fR = GR[7] ? Number(GR[7]) : JR.colorSpace?.matrix ? qR.o[JR.colorSpace.matrix] : 1;
        return PR("vpcC", 1, 0, [XR(yR), XR(tR), XR(uR), XR(ZR), XR(iR), XR(fR), MR(0)])
      },
      KJ = (RR, JR) => {
        let GR, yR = 0,
          uR = 16;
        const ZR = tR.p.includes(JR.track.source._codec);
        if (ZR) {
          const RR = JR.track.source._codec,
            {
              sampleSize: GR
            } = (0, tR.Q)(RR);
          uR = 8 * GR, uR > 16 && (yR = 1)
        }
        if (JR.muxer.isQuickTime && (yR = 1), 0 === yR) GR = [Array(6).fill(0), MR(1), MR(yR), MR(0), pR(0), MR(JR.info.numberOfChannels), MR(uR), MR(0), MR(0), MR(JR.info.sampleRate < 65536 ? JR.info.sampleRate : 0), MR(0)];
        else {
          const RR = ZR ? 0 : -2;
          GR = [Array(6).fill(0), MR(1), MR(yR), MR(0), pR(0), MR(JR.info.numberOfChannels), MR(Math.min(uR, 16)), BR(RR), MR(0), MR(JR.info.sampleRate < 65536 ? JR.info.sampleRate : 0), MR(0), ZR ? [pR(1), pR(uR / 8), pR(JR.info.numberOfChannels * uR / 8)] : [pR(0), pR(0), pR(0)], pR(2)]
        }
        return cR(RR, GR, [yG(JR.track.source._codec, JR.muxer.isQuickTime)?.(JR) ?? null, qJ(JR)])
      },
      wJ = RR => {
        let JR;
        switch (RR.track.source._codec) {
          case "aac":
            JR = 64;
            break;
          case "mp3":
            JR = 107;
            break;
          case "vorbis":
            JR = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${RR.track.source._codec}`)
        }
        let GR = [...XR(JR), ...XR(21), ...lR(0), ...pR(RR.maxBitrate), ...pR(RR.avgBitrate)];
        if (RR.info.decoderConfig.description) {
          const JR = (0, qR.cd)(RR.info.decoderConfig.description);
          GR = [...GR, ...XR(5), ...DR(JR.byteLength), ...JR]
        }
        return GR = [...MR(1), ...XR(0), ...XR(4), ...DR(GR.length), ...GR, ...XR(6), ...XR(1), ...XR(2)], GR = [...XR(3), ...DR(GR.length), ...GR], PR("esds", 0, 0, GR)
      },
      rJ = RR => cR("wave", void 0, [eJ(RR), aJ(RR), cR("\0\0\0\0")]),
      eJ = RR => cR("frma", [HR(GG(RR.track.source._codec, RR.info.decoderConfig.codec, RR.muxer.isQuickTime))]),
      aJ = RR => {
        const {
          littleEndian: JR
        } = (0, tR.Q)(RR.track.source._codec);
        return cR("enda", [MR(+JR)])
      },
      LJ = RR => {
        let JR = RR.info.numberOfChannels,
          GR = 3840,
          yR = RR.info.sampleRate,
          tR = 0,
          uR = 0,
          ZR = new Uint8Array(0);
        const iR = RR.info.decoderConfig?.description;
        if (iR) {
          (0, qR.I)(iR.byteLength >= 18);
          const RR = (0, qR.cd)(iR),
            fR = (0, aR.jb)(RR);
          JR = fR.outputChannelCount, GR = fR.preSkip, yR = fR.inputSampleRate, tR = fR.outputGain, uR = fR.channelMappingFamily, fR.channelMappingTable && (ZR = fR.channelMappingTable)
        }
        return cR("dOps", [XR(0), XR(JR), MR(GR), pR(yR), BR(tR), XR(uR), ...ZR])
      },
      nJ = RR => {
        const JR = RR.info.decoderConfig?.description;
        (0, qR.I)(JR);
        const GR = (0, qR.cd)(JR);
        return PR("dfLa", 0, 0, [...GR.subarray(4)])
      },
      UJ = RR => {
        const {
          littleEndian: JR,
          sampleSize: GR
        } = (0, tR.Q)(RR.track.source._codec);
        return PR("pcmC", 0, 0, [XR(+JR), XR(8 * GR)])
      },
      WJ = RR => {
        (0, qR.I)(RR.info.primingPacket);
        const JR = (0, aR.eb)(RR.info.primingPacket.data);
        if (!JR) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const GR = new Uint8Array(3),
          yR = new LR.b(GR);
        return yR.writeBits(2, JR.fscod), yR.writeBits(5, JR.bsid), yR.writeBits(3, JR.bsmod), yR.writeBits(3, JR.acmod), yR.writeBits(1, JR.lfeon), yR.writeBits(5, JR.bitRateCode), yR.writeBits(5, 0), cR("dac3", [...GR])
      },
      AJ = RR => {
        (0, qR.I)(RR.info.primingPacket);
        const JR = (0, aR.hb)(RR.info.primingPacket.data);
        if (!JR) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let GR = 16;
        for (const ZR of JR.substreams) GR += 23, ZR.numDepSub > 0 ? GR += 9 : GR += 1;
        const yR = Math.ceil(GR / 8),
          tR = new Uint8Array(yR),
          uR = new LR.b(tR);
        uR.writeBits(13, JR.dataRate), uR.writeBits(3, JR.substreams.length - 1);
        for (const ZR of JR.substreams) uR.writeBits(2, ZR.fscod), uR.writeBits(5, ZR.bsid), uR.writeBits(1, 0), uR.writeBits(1, 0), uR.writeBits(3, ZR.bsmod), uR.writeBits(3, ZR.acmod), uR.writeBits(1, ZR.lfeon), uR.writeBits(3, 0), uR.writeBits(4, ZR.numDepSub), ZR.numDepSub > 0 ? uR.writeBits(9, ZR.chanLoc) : uR.writeBits(1, 0);
        return cR("dec3", [...tR])
      },
      CJ = RR => {
        (0, qR.I)(RR.info.primingPacket);
        const JR = (0, aR.gb)(RR.info.primingPacket.data);
        if (!JR) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return cR("ddts", [...(0, aR.u)(JR)])
      },
      XJ = (RR, JR) => cR(RR, [Array(6).fill(0), MR(1)], [uG[JR.track.source._codec](JR), qJ(JR)]),
      MJ = RR => PR("stts", 0, 0, [pR(RR.timeToSampleTable.length), RR.timeToSampleTable.map((RR => [pR(RR.sampleCount), pR(RR.sampleDelta)]))]),
      BJ = RR => {
        if (RR.samples.every((RR => "key" === RR.type))) return null;
        const JR = [...RR.samples.entries()].filter((RR => {
          let [, JR] = RR;
          return "key" === JR.type
        }));
        return PR("stss", 0, 0, [pR(JR.length), JR.map((RR => {
          let [JR] = RR;
          return pR(JR + 1)
        }))])
      },
      lJ = RR => PR("stsc", 0, 0, [pR(RR.compactlyCodedChunkTable.length), RR.compactlyCodedChunkTable.map((RR => [pR(RR.firstChunk), pR(RR.samplesPerChunk), pR(1)]))]),
      pJ = RR => {
        if ("audio" === RR.type && RR.info.requiresPcmTransformation) {
          const {
            sampleSize: JR
          } = (0, tR.Q)(RR.track.source._codec);
          return PR("stsz", 0, 0, [pR(JR * RR.info.numberOfChannels), pR(RR.samples.reduce(((JR, GR) => JR + wG(GR.duration, RR.timescale)), 0))])
        }
        return PR("stsz", 0, 0, [pR(0), pR(RR.samples.length), RR.samples.map((RR => pR(RR.size)))])
      },
      gJ = RR => RR.finalizedChunks.length > 0 && (0, qR.$b)(RR.finalizedChunks).offset >= 2 ** 32 ? PR("co64", 0, 0, [pR(RR.finalizedChunks.length), RR.finalizedChunks.map((RR => bR(RR.offset)))]) : PR("stco", 0, 0, [pR(RR.finalizedChunks.length), RR.finalizedChunks.map((RR => pR(RR.offset)))]),
      bJ = RR => PR("ctts", 1, 0, [pR(RR.compositionTimeOffsetTable.length), RR.compositionTimeOffsetTable.map((RR => [pR(RR.sampleCount), gR(RR.sampleCompositionTimeOffset)]))]),
      vJ = RR => {
        let JR = 1 / 0,
          GR = -1 / 0,
          yR = 1 / 0,
          tR = -1 / 0;
        (0, qR.I)(RR.compositionTimeOffsetTable.length > 0), (0, qR.I)(RR.samples.length > 0);
        for (let ZR = 0; ZR < RR.compositionTimeOffsetTable.length; ZR++) {
          const yR = RR.compositionTimeOffsetTable[ZR];
          JR = Math.min(JR, yR.sampleCompositionTimeOffset), GR = Math.max(GR, yR.sampleCompositionTimeOffset)
        }
        for (let ZR = 0; ZR < RR.samples.length; ZR++) {
          const JR = RR.samples[ZR];
          yR = Math.min(yR, wG(JR.timestamp, RR.timescale)), tR = Math.max(tR, wG(JR.timestamp + JR.duration, RR.timescale))
        }
        const uR = Math.max(-JR, 0);
        return tR >= 2 ** 31 ? null : PR("cslg", 0, 0, [gR(uR), gR(JR), gR(GR), gR(yR), gR(tR)])
      },
      OJ = RR => cR("mvex", void 0, RR.map(xJ)),
      xJ = RR => PR("trex", 0, 0, [pR(RR.track.id), pR(1), pR(0), pR(0), pR(0)]),
      NJ = (RR, JR) => cR("moof", void 0, [DJ(RR), ...JR.map(oJ)]),
      DJ = RR => PR("mfhd", 0, 0, [pR(RR)]),
      HJ = RR => {
        let JR = 0,
          GR = 0;
        const yR = "delta" === RR.type;
        return GR |= +yR, JR |= yR ? 1 : 2, JR << 24 | GR << 16
      },
      oJ = RR => cR("traf", void 0, [cJ(RR), PJ(RR), IJ(RR)]),
      cJ = RR => {
        (0, qR.I)(RR.currentChunk);
        let JR = 0;
        JR |= 8, JR |= 16, JR |= 32, JR |= 131072;
        const GR = RR.currentChunk.samples[1] ?? RR.currentChunk.samples[0],
          yR = {
            duration: GR.timescaleUnitsToNextSample,
            size: GR.size,
            flags: HJ(GR)
          };
        return PR("tfhd", 0, 131128, [pR(RR.track.id), pR(yR.duration), pR(yR.size), pR(yR.flags)])
      },
      PJ = RR => ((0, qR.I)(RR.currentChunk), PR("tfdt", 1, 0, [bR(wG(RR.currentChunk.startTimestamp, RR.timescale))])),
      IJ = RR => {
        (0, qR.I)(RR.currentChunk);
        const JR = RR.currentChunk.samples.map((RR => RR.timescaleUnitsToNextSample)),
          GR = RR.currentChunk.samples.map((RR => RR.size)),
          yR = RR.currentChunk.samples.map(HJ),
          tR = RR.currentChunk.samples.map((JR => wG(JR.timestamp - JR.decodeTimestamp, RR.timescale))),
          uR = new Set(JR),
          ZR = new Set(GR),
          iR = new Set(yR),
          fR = new Set(tR),
          VR = 2 === iR.size && yR[0] !== yR[1],
          KR = uR.size > 1,
          wR = ZR.size > 1,
          rR = !VR && iR.size > 1,
          eR = fR.size > 1 || [...fR].some((RR => 0 !== RR));
        let aR = 0;
        return aR |= 1, aR |= 4 * +VR, aR |= 256 * +KR, aR |= 512 * +wR, aR |= 1024 * +rR, aR |= 2048 * +eR, PR("trun", 1, aR, [pR(RR.currentChunk.samples.length), pR(RR.currentChunk.offset - RR.currentChunk.moofOffset || 0), VR ? pR(yR[0]) : [], RR.currentChunk.samples.map(((RR, uR) => [KR ? pR(JR[uR]) : [], wR ? pR(GR[uR]) : [], rR ? pR(yR[uR]) : [], eR ? gR(tR[uR]) : []]))])
      },
      mJ = RR => PR("tfra", 1, 0, [pR(RR.track.id), pR(63), pR(RR.finalizedChunks.length), RR.finalizedChunks.map((JR => [bR(wG(JR.samples[0].timestamp, RR.timescale)), bR(JR.moofOffset), pR(JR.trafIndex + 1), pR(1), pR(1)]))]),
      zJ = () => PR("mfro", 0, 0, [pR(0)]),
      SJ = () => cR("vtte"),
      jJ = (RR, JR, GR, yR, tR) => cR("vttc", void 0, [null !== tR ? cR("vsid", [gR(tR)]) : null, null !== GR ? cR("iden", [...qR.Vc.encode(GR)]) : null, null !== JR ? cR("ctim", [...qR.Vc.encode((0, nR.g)(JR))]) : null, null !== yR ? cR("sttg", [...qR.Vc.encode(yR)]) : null, cR("payl", [...qR.Vc.encode(RR)])]),
      dJ = RR => cR("vtta", [...qR.Vc.encode(RR)]),
      EJ = RR => {
        const JR = [],
          GR = RR.format._options.metadataFormat ?? "auto",
          yR = RR.output._metadataTags;
        if ("mdir" === GR || "auto" === GR && !RR.isQuickTime) {
          const RR = TJ(yR);
          RR && JR.push(RR)
        } else if ("mdta" === GR) {
          const RR = sJ(yR);
          RR && JR.push(RR)
        } else("udta" === GR || "auto" === GR && RR.isQuickTime) && YJ(JR, RR.output._metadataTags);
        return 0 === JR.length ? null : cR("udta", void 0, JR)
      },
      YJ = (RR, JR) => {
        for (const {
            key: GR,
            value: yR
          }
          of(0, qR._b)(JR)) switch (GR) {
          case "title":
            RR.push(kJ("\xa9nam", yR));
            break;
          case "description":
            RR.push(kJ("\xa9des", yR));
            break;
          case "artist":
            RR.push(kJ("\xa9ART", yR));
            break;
          case "album":
            RR.push(kJ("\xa9alb", yR));
            break;
          case "albumArtist":
            RR.push(kJ("albr", yR));
            break;
          case "genre":
            RR.push(kJ("\xa9gen", yR));
            break;
          case "date":
            RR.push(kJ("\xa9day", yR.toISOString().slice(0, 10)));
            break;
          case "comment":
            RR.push(kJ("\xa9cmt", yR));
            break;
          case "lyrics":
            RR.push(kJ("\xa9lyr", yR));
            break;
          case "raw":
          case "discNumber":
          case "discsTotal":
          case "trackNumber":
          case "tracksTotal":
          case "beatsPerMinute":
          case "images":
            break;
          default:
            (0, qR.H)(GR)
        }
        if (JR.raw)
          for (const GR in JR.raw) {
            const yR = JR.raw[GR];
            null == yR || 4 !== GR.length || RR.some((RR => RR.type === GR)) || ("string" === typeof yR ? RR.push(kJ(GR, yR)) : yR instanceof Uint8Array && RR.push(cR(GR, Array.from(yR))))
          }
      },
      kJ = (RR, JR) => {
        const GR = qR.Vc.encode(JR);
        return cR(RR, [MR(GR.length), MR(ZG("und")), Array.from(GR)])
      },
      QJ = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      FJ = (RR, JR) => {
        const GR = [];
        for (const {
            key: yR,
            value: tR
          }
          of(0, qR._b)(RR)) switch (yR) {
          case "title":
            GR.push({
              key: JR ? "title" : "\xa9nam",
              value: hJ(tR)
            });
            break;
          case "description":
            GR.push({
              key: JR ? "description" : "\xa9des",
              value: hJ(tR)
            });
            break;
          case "artist":
            GR.push({
              key: JR ? "artist" : "\xa9ART",
              value: hJ(tR)
            });
            break;
          case "album":
            GR.push({
              key: JR ? "album" : "\xa9alb",
              value: hJ(tR)
            });
            break;
          case "albumArtist":
            GR.push({
              key: JR ? "album_artist" : "aART",
              value: hJ(tR)
            });
            break;
          case "comment":
            GR.push({
              key: JR ? "comment" : "\xa9cmt",
              value: hJ(tR)
            });
            break;
          case "genre":
            GR.push({
              key: JR ? "genre" : "\xa9gen",
              value: hJ(tR)
            });
            break;
          case "beatsPerMinute":
            JR || GR.push({
              key: "tmpo",
              value: cR("data", [pR(21), pR(0), MR(tR)])
            });
            break;
          case "lyrics":
            GR.push({
              key: JR ? "lyrics" : "\xa9lyr",
              value: hJ(tR)
            });
            break;
          case "date":
            GR.push({
              key: JR ? "date" : "\xa9day",
              value: hJ(tR.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const RR of tR) "coverFront" === RR.kind && GR.push({
              key: "covr",
              value: cR("data", [pR(QJ[RR.mimeType] ?? 0), pR(0), Array.from(RR.data)])
            });
            break;
          case "trackNumber":
            if (JR) {
              const JR = void 0 !== RR.tracksTotal ? `${tR}/${RR.tracksTotal}` : tR.toString();
              GR.push({
                key: "track",
                value: hJ(JR)
              })
            } else GR.push({
              key: "trkn",
              value: cR("data", [pR(0), pR(0), MR(0), MR(tR), MR(RR.tracksTotal ?? 0), MR(0)])
            });
            break;
          case "discNumber":
            JR || GR.push({
              key: "disc",
              value: cR("data", [pR(0), pR(0), MR(0), MR(tR), MR(RR.discsTotal ?? 0), MR(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, qR.H)(yR)
        }
        if (RR.raw)
          for (const yR in RR.raw) {
            const tR = RR.raw[yR];
            null == tR || !JR && 4 !== yR.length || GR.some((RR => RR.key === yR)) || ("string" === typeof tR ? GR.push({
              key: yR,
              value: hJ(tR)
            }) : tR instanceof Uint8Array ? GR.push({
              key: yR,
              value: cR("data", [pR(0), pR(0), Array.from(tR)])
            }) : tR instanceof rR.k && GR.push({
              key: yR,
              value: cR("data", [pR(QJ[tR.mimeType] ?? 0), pR(0), Array.from(tR.data)])
            }))
          }
        return GR
      },
      TJ = RR => {
        const JR = FJ(RR, !1);
        return 0 === JR.length ? null : PR("meta", 0, 0, void 0, [sR(!1, "mdir", "", "appl"), cR("ilst", void 0, JR.map((RR => cR(RR.key, void 0, [RR.value]))))])
      },
      sJ = RR => {
        const JR = FJ(RR, !0);
        return 0 === JR.length ? null : cR("meta", void 0, [sR(!1, "mdta", ""), PR("keys", 0, 0, [pR(JR.length)], JR.map((RR => cR("mdta", [...qR.Vc.encode(RR.key)])))), cR("ilst", void 0, JR.map(((RR, JR) => {
          const GR = String.fromCharCode(...pR(JR + 1));
          return cR(GR, void 0, [RR.value])
        })))])
      },
      hJ = RR => cR("data", [pR(1), pR(0), ...qR.Vc.encode(RR)]),
      RG = (RR, JR) => {
        switch (RR) {
          case "avc":
            return JR.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return JR
        }
      },
      JG = {
        avc: RR => RR.info.decoderConfig && cR("avcC", [...(0, qR.cd)(RR.info.decoderConfig.description)]),
        hevc: RR => RR.info.decoderConfig && cR("hvcC", [...(0, qR.cd)(RR.info.decoderConfig.description)]),
        vp8: VJ,
        vp9: VJ,
        av1: RR => cR("av1C", (0, tR.H)(RR.info.decoderConfig.codec)),
        prores: null
      },
      GG = (RR, JR, GR) => {
        switch (RR) {
          case "aac":
          case "mp3":
          case "vorbis":
            return "mp4a";
          case "opus":
            return "Opus";
          case "flac":
            return "fLaC";
          case "ulaw":
            return "ulaw";
          case "alaw":
            return "alaw";
          case "pcm-u8":
            return "raw ";
          case "pcm-s8":
            return "sowt";
          case "ac3":
            return "ac-3";
          case "eac3":
            return "ec-3";
          case "dts":
            return JR
        }
        if (GR) switch (RR) {
          case "pcm-s16":
            return "sowt";
          case "pcm-s16be":
            return "twos";
          case "pcm-s24":
          case "pcm-s24be":
            return "in24";
          case "pcm-s32":
          case "pcm-s32be":
            return "in32";
          case "pcm-f32":
          case "pcm-f32be":
            return "fl32";
          case "pcm-f64":
          case "pcm-f64be":
            return "fl64"
        } else switch (RR) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
            return "ipcm";
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return "fpcm"
        }
      },
      yG = (RR, JR) => {
        switch (RR) {
          case "aac":
          case "mp3":
          case "vorbis":
            return wJ;
          case "opus":
            return LJ;
          case "flac":
            return nJ;
          case "ac3":
            return WJ;
          case "eac3":
            return AJ;
          case "dts":
            return CJ
        }
        if (JR) switch (RR) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return rJ
        } else switch (RR) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return UJ
        }
        return null
      },
      tG = {
        webvtt: "wvtt"
      },
      uG = {
        webvtt: RR => cR("vttC", [...qR.Vc.encode(RR.info.config.description)])
      },
      ZG = RR => {
        (0, qR.I)(3 === RR.length);
        let JR = 0;
        for (let GR = 0; GR < 3; GR++) JR <<= 5, JR += RR.charCodeAt(GR) - 96;
        return JR
      };
    var qG = GR(41166),
      iG = GR(41170);
    const fG = RR => {
        const JR = RR.filePos,
          GR = VR(RR, 9),
          yR = new LR.b(GR);
        if (4095 !== yR.readBits(12)) return null;
        yR.skipBits(1);
        if (0 !== yR.readBits(2)) return null;
        const tR = yR.readBits(1),
          uR = yR.readBits(2) + 1,
          ZR = yR.readBits(4);
        if (15 === ZR) return null;
        yR.skipBits(1);
        const qR = yR.readBits(3);
        if (0 === qR) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        yR.skipBits(1), yR.skipBits(1), yR.skipBits(1), yR.skipBits(1);
        const iR = yR.readBits(13);
        yR.skipBits(11);
        const fR = yR.readBits(2) + 1;
        if (1 !== fR) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let KR = null;
        return 1 === tR ? RR.filePos -= 2 : KR = yR.readBits(16), {
          objectType: uR,
          samplingFrequencyIndex: ZR,
          channelConfiguration: qR,
          frameLength: iR,
          numberOfAacFrames: fR,
          crcCheck: KR,
          startPos: JR
        }
      },
      VG = 57600,
      KG = RR => {
        const JR = {},
          GR = RR.track;
        return void 0 !== GR.metadata.name && (JR.name = GR.metadata.name), JR
      },
      wG = function(RR, JR) {
        const GR = RR * JR;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(GR) : GR
      },
      rG = RR => {
        if (0 === RR.samples.length) return 0;
        let JR = 1 / 0,
          GR = -1 / 0;
        for (let yR = 0; yR < RR.samples.length; yR++) {
          const tR = RR.samples[yR];
          tR.timestamp < JR && (JR = tR.timestamp), tR.timestamp + tR.duration > GR && (GR = tR.timestamp + tR.duration)
        }
        return JR === 1 / 0 ? 0 : GR - JR
      };
    class eG extends eR {
      constructor(RR, JR) {
        super(RR), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new iG.b, this.auxWriter = new qG.e(this.auxTarget, !1), this.auxBoxWriter = new WR(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, qR.sc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = JR, this.formatOptions = {
          ...JR._options
        }, this.isQuickTime = JR instanceof cG, this.isCmaf = JR instanceof oG, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (JR instanceof oG ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const RR = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((RR => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : RR instanceof iG.b)), this.boxWriter = new WR(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof iG.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const RR = await this.output._getInitTarget(),
            JR = new qG.e(RR, !0);
          JR.start(), this.initWriter = JR, this.initBoxWriter = new WR(JR)
        }
        const JR = this.output.tracks.some((RR => RR.isVideoTrack() && "avc" === RR.source._codec));
        {
          const RR = this.initBoxWriter ?? this.boxWriter;
          if ((0, qR.I)(RR), this.formatOptions.onFtyp && RR.writer.startTrackingWrites(), RR.writeBox((RR => {
              const JR = 512;
              return RR.isQuickTime ? cR("ftyp", [HR("qt  "), pR(JR), HR("qt  ")]) : RR.fragmented ? RR.cmaf ? cR("ftyp", [HR("iso5"), pR(JR), HR("iso5"), HR("iso6"), HR("mp41"), HR("cmfc"), HR("dash")]) : cR("ftyp", [HR("iso5"), pR(JR), HR("iso5"), HR("iso6"), HR("mp41")]) : cR("ftyp", [HR("isom"), pR(JR), HR("isom"), RR.holdsAvc ? HR("avc1") : [], HR("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: JR,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: JR,
              start: GR
            } = RR.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(JR, GR)
          }
          this.ftypSize = RR.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const GR of this.output.tracks)
            if (void 0 === GR.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, qR.I)(this.writer), (0, qR.I)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = zR(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const GR of this.output.tracks) GR.isVideoTrack() && GR.metadata.decoderConfig ? this.getVideoTrackData(GR, GR.metadata.primingPacket ?? null, {
          decoderConfig: GR.metadata.decoderConfig
        }) : GR.isAudioTrack() && GR.metadata.decoderConfig && this.getAudioTrackData(GR, GR.metadata.primingPacket ?? null, {
          decoderConfig: GR.metadata.decoderConfig
        });
        RR()
      }
      allTracksAreKnown() {
        for (const RR of this.output.tracks)
          if (!RR.source._closed && !this.trackDatas.some((JR => JR.track === RR))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const RR = this.trackDatas.map((RR => {
          if ("video" === RR.type) return RR.info.decoderConfig.codec;
          if ("audio" === RR.type) return RR.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [RR.track.source._codec]
        }));
        return (RR => {
          let JR = (RR.hasVideo ? "video/" : RR.hasAudio ? "audio/" : "application/") + (RR.isQuickTime ? "quicktime" : "mp4");
          RR.codecStrings.length > 0 && (JR += `; codecs="${[...new Set(RR.codecStrings)].join(", ")}"`);
          return JR
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((RR => "video" === RR.type)),
          hasAudio: this.trackDatas.some((RR => "audio" === RR.type)),
          codecStrings: RR
        })
      }
      getVideoTrackData(RR, JR, GR) {
        const yR = this.trackDatas.find((JR => JR.track === RR));
        if (yR) return yR;
        (0, tR.X)(GR, RR.source._codec), (0, qR.I)(GR), (0, qR.I)(GR.decoderConfig);
        const uR = {
          ...GR.decoderConfig
        };
        (0, qR.I)(void 0 !== uR.codedWidth), (0, qR.I)(void 0 !== uR.codedHeight);
        let ZR = !1;
        if ("avc" !== RR.source._codec || uR.description) {
          if ("hevc" === RR.source._codec && !uR.description) {
            if (!JR) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const RR = (0, aR.Q)(JR.data);
            if (!RR) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            uR.description = (0, aR.ob)(RR), ZR = !0
          }
        } else {
          if (!JR) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const RR = (0, aR.L)(JR.data);
          if (!RR) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          uR.description = (0, aR.lb)(RR), ZR = !0
        }
        const iR = (0, qR.db)(1 / (RR.metadata.frameRate ?? VG), 1e6).den,
          fR = uR.displayAspectWidth,
          VR = uR.displayAspectHeight,
          KR = void 0 === fR || void 0 === VR ? {
            num: 1,
            den: 1
          } : (0, qR.Qc)({
            num: fR * uR.codedHeight,
            den: VR * uR.codedWidth
          }),
          wR = "ap4h" === uR.codec || "ap4x" === uR.codec,
          rR = {
            muxer: this,
            track: RR,
            type: "video",
            info: {
              width: uR.codedWidth,
              height: uR.codedHeight,
              pixelAspectRatio: KR,
              decoderConfig: uR,
              requiresAnnexBTransformation: ZR,
              hasAlphaChannel: wR
            },
            timescale: iR,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            startTimestampOffset: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: [],
            closed: !1,
            avgBitrate: RR.source._nominalBitrate ?? RR.metadata.averageBitrate ?? 0,
            maxBitrate: RR.source._nominalBitrate ?? RR.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(rR), this.trackDatas.sort(((RR, JR) => RR.track.id - JR.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), rR
      }
      getAudioTrackData(RR, JR, GR) {
        const uR = this.trackDatas.find((JR => JR.track === RR));
        if (uR) return uR;
        (0, tR.S)(GR, RR.source._codec), (0, qR.I)(GR), (0, qR.I)(GR.decoderConfig);
        const ZR = {
          ...GR.decoderConfig
        };
        let fR = !1;
        if ("aac" === RR.source._codec && !ZR.description) {
          if (!JR) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const RR = fG(iR.tempFromBytes(JR.data));
          if (!RR) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const GR = yR.f[RR.samplingFrequencyIndex],
            tR = yR.c[RR.channelConfiguration];
          if (void 0 === GR || void 0 === tR) throw new Error("Invalid ADTS frame header.");
          ZR.description = (0, yR.i)({
            objectType: RR.objectType,
            outputSampleRate: GR,
            outputNumberOfChannels: tR
          }), fR = !0
        }
        if (!JR) {
          if ("ac3" === RR.source._codec || "eac3" === RR.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === RR.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const VR = {
          muxer: this,
          track: RR,
          type: "audio",
          info: {
            numberOfChannels: GR.decoderConfig.numberOfChannels,
            sampleRate: GR.decoderConfig.sampleRate,
            decoderConfig: ZR,
            requiresPcmTransformation: !this.isFragmented && tR.p.includes(RR.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: fR,
            primingPacket: JR
          },
          timescale: ZR.sampleRate,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: RR.source._nominalBitrate ?? RR.metadata.averageBitrate ?? 0,
          maxBitrate: RR.source._nominalBitrate ?? RR.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(VR), this.trackDatas.sort(((RR, JR) => RR.track.id - JR.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), VR
      }
      getSubtitleTrackData(RR, JR) {
        const GR = this.trackDatas.find((JR => JR.track === RR));
        if (GR) return GR;
        (0, tR.T)(JR), (0, qR.I)(JR), (0, qR.I)(JR.config);
        const yR = {
          muxer: this,
          track: RR,
          type: "subtitle",
          info: {
            config: JR.config
          },
          timescale: 1e3,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: RR.source._nominalBitrate ?? RR.metadata.averageBitrate ?? 0,
          maxBitrate: RR.source._nominalBitrate ?? RR.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(yR), this.trackDatas.sort(((RR, JR) => RR.track.id - JR.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), yR
      }
      async addEncodedVideoPacket(RR, JR, GR) {
        const yR = await this.mutex.acquire();
        try {
          const yR = this.getVideoTrackData(RR, JR, GR);
          let tR = JR.data;
          if (yR.info.requiresAnnexBTransformation) {
            const RR = [...(0, aR.$)(tR)].map((RR => tR.subarray(RR.offset, RR.offset + RR.length)));
            if (0 === RR.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            tR = (0, aR.x)(RR, 4)
          }
          this.validateTimestamp(yR.track, JR.timestamp, "key" === JR.type);
          const uR = this.createSampleForTrack(yR, tR, JR.timestamp, JR.duration, JR.type);
          await this.registerSample(yR, uR)
        } finally {
          yR()
        }
      }
      async addEncodedAudioPacket(RR, JR, GR) {
        const yR = await this.mutex.acquire();
        try {
          const yR = this.getAudioTrackData(RR, JR, GR);
          let uR = JR.data;
          if (yR.info.requiresAdtsStripping) {
            const RR = fG(iR.tempFromBytes(uR));
            if (!RR) throw new Error("Expected ADTS frame, didn't get one.");
            const JR = null === RR.crcCheck ? 7 : 9;
            uR = uR.subarray(JR)
          }
          this.validateTimestamp(yR.track, JR.timestamp, "key" === JR.type);
          let ZR = JR.timestamp,
            qR = JR.duration;
          if (yR.info.requiresPcmTransformation) {
            const RR = (0, tR.Q)(yR.info.decoderConfig.codec).sampleSize * yR.info.numberOfChannels;
            if (qR = uR.byteLength / RR / yR.info.sampleRate, null !== yR.info.expectedNextPcmPacketTimestamp) {
              const RR = ZR - yR.info.expectedNextPcmPacketTimestamp;
              if (RR < .01) ZR = yR.info.expectedNextPcmPacketTimestamp;
              else {
                const JR = await this.padWithSilence(yR, yR.info.expectedNextPcmPacketTimestamp, RR);
                ZR = yR.info.expectedNextPcmPacketTimestamp + JR
              }
            }
            yR.info.expectedNextPcmPacketTimestamp = ZR + qR
          }
          const fR = this.createSampleForTrack(yR, uR, ZR, qR, JR.type);
          await this.registerSample(yR, fR)
        } finally {
          yR()
        }
      }
      async padWithSilence(RR, JR, GR) {
        const yR = wG(GR, RR.timescale);
        if (GR = yR / RR.timescale, yR > 0) {
          const {
            sampleSize: uR,
            silentValue: ZR
          } = (0, tR.Q)(RR.info.decoderConfig.codec), qR = yR * RR.info.numberOfChannels, iR = new Uint8Array(uR * qR).fill(ZR), fR = this.createSampleForTrack(RR, new Uint8Array(iR.buffer), JR, GR, "key");
          await this.registerSample(RR, fR)
        }
        return GR
      }
      async addSubtitleCue(RR, JR, GR) {
        const yR = await this.mutex.acquire();
        try {
          const yR = this.getSubtitleTrackData(RR, GR);
          this.validateTimestamp(yR.track, JR.timestamp, !0), "webvtt" === RR.source._codec && (yR.cueQueue.push(JR), await this.processWebVTTCues(yR, JR.timestamp))
        } finally {
          yR()
        }
      }
      async processWebVTTCues(RR, JR) {
        for (; RR.cueQueue.length > 0;) {
          RR.lastCueEndTimestamp ??= Math.min(0, RR.cueQueue[0].timestamp);
          const GR = new Set([]);
          for (const fR of RR.cueQueue)(0, qR.I)(fR.timestamp <= JR), (0, qR.I)(RR.lastCueEndTimestamp <= fR.timestamp + fR.duration), GR.add(Math.max(fR.timestamp, RR.lastCueEndTimestamp)), GR.add(fR.timestamp + fR.duration);
          const yR = [...GR].sort(((RR, JR) => RR - JR)),
            tR = yR[0],
            uR = yR[1] ?? tR;
          if (JR < uR) break;
          if (RR.lastCueEndTimestamp < tR) {
            this.auxWriter.seek(0);
            const JR = SJ();
            this.auxBoxWriter.writeBox(JR);
            const GR = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              yR = this.createSampleForTrack(RR, GR, RR.lastCueEndTimestamp, tR - RR.lastCueEndTimestamp, "key");
            await this.registerSample(RR, yR), RR.lastCueEndTimestamp = tR
          }
          this.auxWriter.seek(0);
          for (let JR = 0; JR < RR.cueQueue.length; JR++) {
            const GR = RR.cueQueue[JR];
            if (GR.timestamp >= uR) break;
            nR.k.lastIndex = 0;
            const yR = nR.k.test(GR.text),
              ZR = GR.timestamp + GR.duration;
            let qR = RR.cueToSourceId.get(GR);
            if (void 0 === qR && uR < ZR && (qR = RR.nextSourceId++, RR.cueToSourceId.set(GR, qR)), GR.notes) {
              const RR = dJ(GR.notes);
              this.auxBoxWriter.writeBox(RR)
            }
            const iR = jJ(GR.text, yR ? tR : null, GR.identifier ?? null, GR.settings ?? null, qR ?? null);
            this.auxBoxWriter.writeBox(iR), ZR === uR && RR.cueQueue.splice(JR--, 1)
          }
          const ZR = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            iR = this.createSampleForTrack(RR, ZR, tR, uR - tR, "key");
          await this.registerSample(RR, iR), RR.lastCueEndTimestamp = uR
        }
      }
      createSampleForTrack(RR, JR, GR, yR, tR) {
        return {
          timestamp: GR,
          decodeTimestamp: GR,
          duration: yR,
          data: JR,
          size: JR.byteLength,
          type: tR,
          timescaleUnitsToNextSample: wG(yR, RR.timescale)
        }
      }
      processTimestamps(RR, JR) {
        if (0 === RR.timestampProcessingQueue.length) return;
        if ("audio" === RR.type && RR.info.requiresPcmTransformation) {
          (0, qR.I)(!this.isFragmented), RR.startTimestampOffset ??= RR.timestampProcessingQueue[0].timestamp;
          let JR = 0;
          for (let GR = 0; GR < RR.timestampProcessingQueue.length; GR++) {
            const yR = RR.timestampProcessingQueue[GR];
            JR += wG(yR.duration, RR.timescale)
          }
          if (0 === RR.timeToSampleTable.length) RR.timeToSampleTable.push({
            sampleCount: JR,
            sampleDelta: 1
          });
          else {
            (0, qR.$b)(RR.timeToSampleTable).sampleCount += JR
          }
          return void(RR.timestampProcessingQueue.length = 0)
        }
        const GR = RR.timestampProcessingQueue.map((RR => RR.timestamp)).sort(((RR, JR) => RR - JR));
        this.isFragmented ? RR.startTimestampOffset ??= Math.min(GR[0], 0) : RR.startTimestampOffset ??= GR[0];
        for (let yR = 0; yR < RR.timestampProcessingQueue.length; yR++) {
          const JR = RR.timestampProcessingQueue[yR];
          JR.decodeTimestamp = GR[yR];
          const tR = wG(JR.timestamp - JR.decodeTimestamp, RR.timescale),
            uR = wG(JR.duration, RR.timescale);
          if (null !== RR.lastTimescaleUnits) {
            (0, qR.I)(RR.lastSample);
            const GR = wG(JR.decodeTimestamp, RR.timescale, !1),
              yR = Math.round(GR - RR.lastTimescaleUnits);
            if ((0, qR.I)(yR >= 0), RR.lastTimescaleUnits += yR, RR.lastSample.timescaleUnitsToNextSample = yR, !this.isFragmented) {
              let JR = (0, qR.$b)(RR.timeToSampleTable);
              if ((0, qR.I)(JR), 1 === JR.sampleCount) {
                JR.sampleDelta = yR;
                const GR = RR.timeToSampleTable[RR.timeToSampleTable.length - 2];
                GR && GR.sampleDelta === yR && (GR.sampleCount++, RR.timeToSampleTable.pop(), JR = GR)
              } else JR.sampleDelta !== yR && (JR.sampleCount--, RR.timeToSampleTable.push(JR = {
                sampleCount: 1,
                sampleDelta: yR
              }));
              JR.sampleDelta === uR ? JR.sampleCount++ : RR.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: uR
              });
              const GR = (0, qR.$b)(RR.compositionTimeOffsetTable);
              (0, qR.I)(GR), GR.sampleCompositionTimeOffset === tR ? GR.sampleCount++ : RR.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: tR
              })
            }
          } else RR.lastTimescaleUnits = wG(JR.decodeTimestamp, RR.timescale, !1), this.isFragmented || (RR.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: uR
          }), RR.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: tR
          }));
          RR.lastSample = JR
        }
        if (RR.timestampProcessingQueue.length = 0, (0, qR.I)(RR.lastSample), (0, qR.I)(null !== RR.lastTimescaleUnits), void 0 !== JR && 0 === RR.lastSample.timescaleUnitsToNextSample) {
          (0, qR.I)("key" === JR.type);
          const GR = wG(JR.timestamp, RR.timescale, !1),
            yR = Math.round(GR - RR.lastTimescaleUnits);
          RR.lastSample.timescaleUnitsToNextSample = yR
        }
      }
      async registerSample(RR, JR) {
        "key" === JR.type && this.processTimestamps(RR, JR), RR.timestampProcessingQueue.push(JR), this.isFragmented ? (RR.sampleQueue.push(JR), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(RR, JR) : await this.addSampleToTrack(RR, JR)
      }
      async addSampleToTrack(RR, JR) {
        if (!this.isFragmented && (RR.samples.push(JR), "reserve" === this.fastStart)) {
          const JR = RR.track.metadata.maximumPacketCount;
          if ((0, qR.I)(void 0 !== JR), RR.samples.length > JR) throw new Error(`Track #${RR.track.id} has already reached the maximum packet count (${JR}). Either add less packets or increase the maximum packet count.`)
        }
        let GR = !1;
        if (RR.currentChunk) {
          RR.currentChunk.startTimestamp = Math.min(RR.currentChunk.startTimestamp, JR.timestamp);
          const yR = JR.timestamp - RR.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const tR = this.trackDatas.every((GR => {
              if (RR === GR) return "key" === JR.type;
              const yR = GR.sampleQueue[0];
              return yR ? "key" === yR.type : GR.closed
            }));
            yR >= this.minimumFragmentDuration && tR && JR.timestamp > this.maxWrittenTimestamp && (GR = !0, await this.finalizeFragment())
          } else GR = yR >= .5
        } else GR = !0;
        GR && (RR.currentChunk && await this.finalizeCurrentChunk(RR), RR.currentChunk = {
          startTimestamp: JR.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, qR.I)(RR.currentChunk), RR.currentChunk.samples.push(JR), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, JR.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, JR.timestamp + JR.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, JR.timestamp))
      }
      async finalizeCurrentChunk(RR) {
        if ((0, qR.I)(!this.isFragmented), (0, qR.I)(this.writer), !RR.currentChunk) return;
        RR.finalizedChunks.push(RR.currentChunk), this.finalizedChunks.push(RR.currentChunk);
        let JR = RR.currentChunk.samples.length;
        if ("audio" === RR.type && RR.info.requiresPcmTransformation && (JR = RR.currentChunk.samples.reduce(((JR, GR) => JR + wG(GR.duration, RR.timescale)), 0)), 0 !== RR.compactlyCodedChunkTable.length && (0, qR.$b)(RR.compactlyCodedChunkTable).samplesPerChunk === JR || RR.compactlyCodedChunkTable.push({
            firstChunk: RR.finalizedChunks.length,
            samplesPerChunk: JR
          }), "in-memory" !== this.fastStart) {
          RR.currentChunk.offset = this.writer.getPos();
          for (const JR of RR.currentChunk.samples)(0, qR.I)(JR.data), this.writer.write(JR.data), JR.data = null;
          await this.writer.flush()
        } else RR.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, qR.I)(this.isFragmented), RR || this.allTracksAreKnown()) RR: for (;;) {
          let JR = null,
            GR = 1 / 0;
          for (const tR of this.trackDatas) {
            if (!RR && 0 === tR.sampleQueue.length && !tR.closed) break RR;
            tR.sampleQueue.length > 0 && tR.sampleQueue[0].timestamp < GR && (JR = tR, GR = tR.sampleQueue[0].timestamp)
          }
          if (!JR) break;
          const yR = JR.sampleQueue.shift();
          await this.addSampleToTrack(JR, yR)
        }
      }
      async finalizeFragment() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, qR.I)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const RR = this.initBoxWriter ?? this.boxWriter;
          (0, qR.I)(RR), this.formatOptions.onMoov && RR.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const JR = SR(this);
          if (RR.writeBox(JR), this.formatOptions.onMoov) {
            const {
              data: JR,
              start: GR
            } = RR.writer.stopTrackingWrites();
            this.formatOptions.onMoov(JR, GR)
          }
          if (this.isCmaf) {
            (0, qR.I)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new WR(this.writer);
            const RR = this.boxWriter.measureBox(IR()),
              JR = this.boxWriter.measureBox(mR(this, 0));
            this.segmentHeaderSize = RR + JR, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, qR.I)(this.writer), (0, qR.I)(this.boxWriter);
        const JR = this.trackDatas.filter((RR => RR.currentChunk));
        if (0 === JR.length) return void(RR && await this.writer.flush());
        const GR = this.nextFragmentNumber++,
          yR = NJ(GR, JR),
          tR = this.writer.getPos(),
          uR = tR + this.boxWriter.measureBox(yR);
        let ZR = uR + 8,
          iR = 1 / 0;
        for (let rR = 0; rR < JR.length; rR++) {
          const RR = JR[rR];
          (0, qR.I)(RR.currentChunk), (0, qR.I)(null !== RR.startTimestampOffset), RR.currentChunk.offset = ZR, RR.currentChunk.moofOffset = tR, RR.currentChunk.trafIndex = rR, RR.currentChunk.startTimestamp -= RR.startTimestampOffset;
          for (const JR of RR.currentChunk.samples) ZR += JR.size, JR.timestamp -= RR.startTimestampOffset, JR.decodeTimestamp -= RR.startTimestampOffset;
          iR = Math.min(iR, RR.currentChunk.startTimestamp)
        }
        const fR = ZR - uR,
          VR = fR >= 2 ** 32;
        if (VR)
          for (const qR of JR) qR.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const KR = NJ(GR, JR);
        if (this.boxWriter.writeBox(KR), this.formatOptions.onMoof) {
          const {
            data: RR,
            start: JR
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(RR, JR, iR)
        }(0, qR.I)(this.writer.getPos() === uR), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const wR = zR(VR);
        wR.size = fR, this.boxWriter.writeBox(wR), this.writer.seek(uR + (VR ? 16 : 8));
        for (const qR of JR)
          for (const RR of qR.currentChunk.samples) this.writer.write(RR.data), RR.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: RR,
            start: JR
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(RR, JR)
        }
        for (const qR of JR) qR.finalizedChunks.push(qR.currentChunk), this.finalizedChunks.push(qR.currentChunk), qR.currentChunk = null;
        RR && await this.writer.flush()
      }
      async registerSampleFastStartReserve(RR, JR) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(RR, JR)) : RR.sampleQueue.push(JR)
      }
      async createFastStartReserveMdat() {
        (0, qR.I)(this.writer), (0, qR.I)(this.boxWriter), this.ensureOneEnabledTrack();
        const RR = SR(this),
          JR = this.boxWriter.measureBox(RR) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, qR.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize + JR), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = zR(!0), this.boxWriter.writeBox(this.mdat);
        for (const GR of this.trackDatas) {
          for (const RR of GR.sampleQueue) await this.addSampleToTrack(GR, RR);
          GR.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, qR.I)("reserve" === this.fastStart);
        let RR = 0;
        for (const JR of this.trackDatas) {
          const GR = JR.track.metadata.maximumPacketCount;
          (0, qR.I)(void 0 !== GR), RR += 8 * Math.ceil(2 / 3 * GR), RR += 4 * GR, RR += 8 * Math.ceil(2 / 3 * GR), RR += 12 * Math.ceil(2 / 3 * GR), RR += 4 * GR, RR += 8 * GR
        }
        return RR
      }
      async onTrackClose(RR) {
        const JR = await this.mutex.acquire(),
          GR = this.trackDatas.find((JR => JR.track === RR));
        GR && (GR.closed = !0, "subtitle" === GR.type && "webvtt" === RR.source._codec && await this.processWebVTTCues(GR, 1 / 0), this.processTimestamps(GR)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), JR()
      }
      ensureOneEnabledTrack() {
        for (const RR of ["video", "audio", "subtitle"]) {
          const JR = this.trackDatas.filter((JR => JR.type === RR));
          if (0 === JR.length) continue;
          if (!JR.some((RR => !1 !== RR.track.metadata.disposition?.default))) {
            const RR = JR[0];
            RR.track.metadata.disposition = {
              ...RR.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, qR.I)(this.isFragmented);
        const RR = await this.mutex.acquire();
        try {
          for (const RR of this.trackDatas) "subtitle" === RR.type && "webvtt" === RR.track.source._codec && await this.processWebVTTCues(RR, 1 / 0), this.processTimestamps(RR);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          RR()
        }
      }
      async finalize() {
        const RR = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const GR of this.trackDatas) GR.closed = !0, "subtitle" === GR.type && "webvtt" === GR.track.source._codec && await this.processWebVTTCues(GR, 1 / 0), this.processTimestamps(GR);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const GR of this.trackDatas) {
            await this.finalizeCurrentChunk(GR);
            const RR = rG(GR);
            if (RR > 0) {
              let JR = 0;
              for (const RR of GR.samples) JR += RR.size;
              GR.avgBitrate = Math.round(8 * JR / RR)
            } else GR.avgBitrate = 0;
            let JR = 0,
              yR = 0,
              tR = 0;
            for (let uR = 0; uR < GR.samples.length; uR++) {
              const RR = GR.samples[uR];
              for (yR += RR.size; RR.decodeTimestamp - GR.samples[JR].decodeTimestamp >= 1;) yR -= GR.samples[JR].size, JR++;
              tR = Math.max(tR, yR)
            }
            if (GR.maxBitrate = 8 * tR, null !== GR.startTimestampOffset)
              for (let uR = 0; uR < GR.samples.length; uR++) {
                const RR = GR.samples[uR];
                RR.timestamp -= GR.startTimestampOffset, RR.decodeTimestamp -= GR.startTimestampOffset
              }
          }
        if ((0, qR.I)(this.writer), (0, qR.I)(this.boxWriter), "in-memory" === this.fastStart) {
          let RR;
          this.mdat = zR(!1);
          for (let GR = 0; GR < 2; GR++) {
            const JR = SR(this),
              GR = this.boxWriter.measureBox(JR);
            RR = this.boxWriter.measureBox(this.mdat);
            let yR = this.writer.getPos() + GR + RR;
            for (const tR of this.finalizedChunks) {
              tR.offset = yR;
              for (const {
                  data: JR
                }
                of tR.samples)(0, qR.I)(JR), yR += JR.byteLength, RR += JR.byteLength
            }
            if (yR < 2 ** 32) break;
            RR >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const JR = SR(this);
          if (this.boxWriter.writeBox(JR), this.formatOptions.onMoov) {
            const {
              data: RR,
              start: JR
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(RR, JR)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = RR, this.boxWriter.writeBox(this.mdat);
          for (const GR of this.finalizedChunks)
            for (const RR of GR.samples)(0, qR.I)(RR.data), this.writer.write(RR.data), RR.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: RR,
              start: JR
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(RR, JR)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const RR = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(IR()), this.boxWriter.writeBox(mR(this, RR))
          } else {
            const RR = this.writer.getPos(),
              GR = (JR = this.trackDatas, cR("mfra", void 0, [...JR.map(mJ), zJ()]));
            this.boxWriter.writeBox(GR);
            const yR = this.writer.getPos() - RR;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(yR)
          }
        else {
          (0, qR.I)(this.mdat);
          const RR = this.boxWriter.offsets.get(this.mdat);
          (0, qR.I)(void 0 !== RR);
          const JR = this.writer.getPos() - RR;
          if (this.mdat.size = JR, this.mdat.largeSize = JR >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: RR,
              start: JR
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(RR, JR)
          }
          const GR = SR(this);
          if ("reserve" === this.fastStart) {
            (0, qR.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(GR);
            const RR = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: RR
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(GR);
          if (this.formatOptions.onMoov) {
            const {
              data: RR,
              start: JR
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(RR, JR)
          }
        }
        var JR;
        RR()
      }
    }
    class aG {
      constructor(RR) {
        this.value = RR
      }
    }
    class LG {
      constructor(RR) {
        this.value = RR
      }
    }
    class nG {
      constructor(RR) {
        this.value = RR
      }
    }
    class UG {
      constructor(RR) {
        this.value = RR
      }
    }
    var WG;
    ! function(RR) {
      RR[RR.EBML = 440786851] = "EBML", RR[RR.EBMLVersion = 17030] = "EBMLVersion", RR[RR.EBMLReadVersion = 17143] = "EBMLReadVersion", RR[RR.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", RR[RR.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", RR[RR.DocType = 17026] = "DocType", RR[RR.DocTypeVersion = 17031] = "DocTypeVersion", RR[RR.DocTypeReadVersion = 17029] = "DocTypeReadVersion", RR[RR.Void = 236] = "Void", RR[RR.Segment = 408125543] = "Segment", RR[RR.SeekHead = 290298740] = "SeekHead", RR[RR.Seek = 19899] = "Seek", RR[RR.SeekID = 21419] = "SeekID", RR[RR.SeekPosition = 21420] = "SeekPosition", RR[RR.Duration = 17545] = "Duration", RR[RR.Info = 357149030] = "Info", RR[RR.TimestampScale = 2807729] = "TimestampScale", RR[RR.MuxingApp = 19840] = "MuxingApp", RR[RR.WritingApp = 22337] = "WritingApp", RR[RR.Tracks = 374648427] = "Tracks", RR[RR.TrackEntry = 174] = "TrackEntry", RR[RR.TrackNumber = 215] = "TrackNumber", RR[RR.TrackUID = 29637] = "TrackUID", RR[RR.TrackType = 131] = "TrackType", RR[RR.FlagEnabled = 185] = "FlagEnabled", RR[RR.FlagDefault = 136] = "FlagDefault", RR[RR.FlagForced = 21930] = "FlagForced", RR[RR.FlagOriginal = 21934] = "FlagOriginal", RR[RR.FlagHearingImpaired = 21931] = "FlagHearingImpaired", RR[RR.FlagVisualImpaired = 21932] = "FlagVisualImpaired", RR[RR.FlagCommentary = 21935] = "FlagCommentary", RR[RR.FlagLacing = 156] = "FlagLacing", RR[RR.Name = 21358] = "Name", RR[RR.Language = 2274716] = "Language", RR[RR.LanguageBCP47 = 2274717] = "LanguageBCP47", RR[RR.CodecID = 134] = "CodecID", RR[RR.CodecPrivate = 25506] = "CodecPrivate", RR[RR.CodecDelay = 22186] = "CodecDelay", RR[RR.SeekPreRoll = 22203] = "SeekPreRoll", RR[RR.DefaultDuration = 2352003] = "DefaultDuration", RR[RR.Video = 224] = "Video", RR[RR.PixelWidth = 176] = "PixelWidth", RR[RR.PixelHeight = 186] = "PixelHeight", RR[RR.DisplayWidth = 21680] = "DisplayWidth", RR[RR.DisplayHeight = 21690] = "DisplayHeight", RR[RR.DisplayUnit = 21682] = "DisplayUnit", RR[RR.AlphaMode = 21440] = "AlphaMode", RR[RR.Audio = 225] = "Audio", RR[RR.SamplingFrequency = 181] = "SamplingFrequency", RR[RR.Channels = 159] = "Channels", RR[RR.BitDepth = 25188] = "BitDepth", RR[RR.SimpleBlock = 163] = "SimpleBlock", RR[RR.BlockGroup = 160] = "BlockGroup", RR[RR.Block = 161] = "Block", RR[RR.BlockAdditions = 30113] = "BlockAdditions", RR[RR.BlockMore = 166] = "BlockMore", RR[RR.BlockAdditional = 165] = "BlockAdditional", RR[RR.BlockAddID = 238] = "BlockAddID", RR[RR.BlockDuration = 155] = "BlockDuration", RR[RR.ReferenceBlock = 251] = "ReferenceBlock", RR[RR.Cluster = 524531317] = "Cluster", RR[RR.Timestamp = 231] = "Timestamp", RR[RR.Cues = 475249515] = "Cues", RR[RR.CuePoint = 187] = "CuePoint", RR[RR.CueTime = 179] = "CueTime", RR[RR.CueTrackPositions = 183] = "CueTrackPositions", RR[RR.CueTrack = 247] = "CueTrack", RR[RR.CueClusterPosition = 241] = "CueClusterPosition", RR[RR.Colour = 21936] = "Colour", RR[RR.MatrixCoefficients = 21937] = "MatrixCoefficients", RR[RR.TransferCharacteristics = 21946] = "TransferCharacteristics", RR[RR.Primaries = 21947] = "Primaries", RR[RR.Range = 21945] = "Range", RR[RR.Projection = 30320] = "Projection", RR[RR.ProjectionType = 30321] = "ProjectionType", RR[RR.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", RR[RR.ProjectionPosePitch = 30324] = "ProjectionPosePitch", RR[RR.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", RR[RR.Attachments = 423732329] = "Attachments", RR[RR.AttachedFile = 24999] = "AttachedFile", RR[RR.FileDescription = 18046] = "FileDescription", RR[RR.FileName = 18030] = "FileName", RR[RR.FileMediaType = 18016] = "FileMediaType", RR[RR.FileData = 18012] = "FileData", RR[RR.FileUID = 18094] = "FileUID", RR[RR.Chapters = 272869232] = "Chapters", RR[RR.Tags = 307544935] = "Tags", RR[RR.Tag = 29555] = "Tag", RR[RR.Targets = 25536] = "Targets", RR[RR.TargetTypeValue = 26826] = "TargetTypeValue", RR[RR.TargetType = 25546] = "TargetType", RR[RR.TagTrackUID = 25541] = "TagTrackUID", RR[RR.TagEditionUID = 25545] = "TagEditionUID", RR[RR.TagChapterUID = 25540] = "TagChapterUID", RR[RR.TagAttachmentUID = 25542] = "TagAttachmentUID", RR[RR.SimpleTag = 26568] = "SimpleTag", RR[RR.TagName = 17827] = "TagName", RR[RR.TagLanguage = 17530] = "TagLanguage", RR[RR.TagString = 17543] = "TagString", RR[RR.TagBinary = 17541] = "TagBinary", RR[RR.ContentEncodings = 28032] = "ContentEncodings", RR[RR.ContentEncoding = 25152] = "ContentEncoding", RR[RR.ContentEncodingOrder = 20529] = "ContentEncodingOrder", RR[RR.ContentEncodingScope = 20530] = "ContentEncodingScope", RR[RR.ContentCompression = 20532] = "ContentCompression", RR[RR.ContentCompAlgo = 16980] = "ContentCompAlgo", RR[RR.ContentCompSettings = 16981] = "ContentCompSettings", RR[RR.ContentEncryption = 20533] = "ContentEncryption"
    }(WG || (WG = {}));
    WG.EBML, WG.Segment, WG.SeekHead, WG.Info, WG.Cluster, WG.Tracks, WG.Cues, WG.Attachments, WG.Chapters, WG.Tags;
    const AG = RR => RR < 256 ? 1 : RR < 65536 ? 2 : RR < 1 << 24 ? 3 : RR < 2 ** 32 ? 4 : RR < 2 ** 40 ? 5 : 6,
      CG = RR => RR < 256n ? 1 : RR < 65536n ? 2 : RR < 1n << 24n ? 3 : RR < 1n << 32n ? 4 : RR < 1n << 40n ? 5 : RR < 1n << 48n ? 6 : RR < 1n << 56n ? 7 : 8,
      XG = RR => RR >= -64 && RR < 64 ? 1 : RR >= -8192 && RR < 8192 ? 2 : RR >= -1048576 && RR < 1 << 20 ? 3 : RR >= -(1 << 27) && RR < 1 << 27 ? 4 : RR >= -(2 ** 34) && RR < 2 ** 34 ? 5 : 6;
    class MG {
      constructor(RR) {
        this.writer = RR, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(RR) {
        this.helperView.setUint8(0, RR), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(RR) {
        this.helperView.setFloat32(0, RR, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(RR) {
        this.helperView.setFloat64(0, RR, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AG(RR),
          GR = 0;
        switch (JR) {
          case 6:
            this.helperView.setUint8(GR++, RR / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(GR++, RR / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(GR++, RR >> 24);
          case 3:
            this.helperView.setUint8(GR++, RR >> 16);
          case 2:
            this.helperView.setUint8(GR++, RR >> 8);
          case 1:
            this.helperView.setUint8(GR++, RR);
            break;
          default:
            throw new Error("Bad unsigned int size " + JR)
        }
        this.writer.write(this.helper.subarray(0, GR))
      }
      writeUnsignedBigInt(RR) {
        let JR = 0;
        for (let GR = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CG(RR)) - 1; GR >= 0; GR--) this.helperView.setUint8(JR++, Number(RR >> BigInt(8 * GR) & 0xffn));
        this.writer.write(this.helper.subarray(0, JR))
      }
      writeSignedInt(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XG(RR);
        RR < 0 && (RR += 2 ** (8 * JR)), this.writeUnsignedInt(RR, JR)
      }
      writeVarInt(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (RR => {
            if (RR < 127) return 1;
            if (RR < 16383) return 2;
            if (RR < 2097151) return 3;
            if (RR < 268435455) return 4;
            if (RR < 2 ** 35 - 1) return 5;
            if (RR < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + RR)
          })(RR),
          GR = 0;
        switch (JR) {
          case 1:
            this.helperView.setUint8(GR++, 128 | RR);
            break;
          case 2:
            this.helperView.setUint8(GR++, 64 | RR >> 8), this.helperView.setUint8(GR++, RR);
            break;
          case 3:
            this.helperView.setUint8(GR++, 32 | RR >> 16), this.helperView.setUint8(GR++, RR >> 8), this.helperView.setUint8(GR++, RR);
            break;
          case 4:
            this.helperView.setUint8(GR++, 16 | RR >> 24), this.helperView.setUint8(GR++, RR >> 16), this.helperView.setUint8(GR++, RR >> 8), this.helperView.setUint8(GR++, RR);
            break;
          case 5:
            this.helperView.setUint8(GR++, 8 | RR / 2 ** 32 & 7), this.helperView.setUint8(GR++, RR >> 24), this.helperView.setUint8(GR++, RR >> 16), this.helperView.setUint8(GR++, RR >> 8), this.helperView.setUint8(GR++, RR);
            break;
          case 6:
            this.helperView.setUint8(GR++, 4 | RR / 2 ** 40 & 3), this.helperView.setUint8(GR++, RR / 2 ** 32 | 0), this.helperView.setUint8(GR++, RR >> 24), this.helperView.setUint8(GR++, RR >> 16), this.helperView.setUint8(GR++, RR >> 8), this.helperView.setUint8(GR++, RR);
            break;
          default:
            throw new Error("Bad EBML varint size " + JR)
        }
        this.writer.write(this.helper.subarray(0, GR))
      }
      writeAsciiString(RR) {
        this.writer.write(new Uint8Array(RR.split("").map((RR => RR.charCodeAt(0)))))
      }
      writeEBML(RR) {
        if (null !== RR)
          if (RR instanceof Uint8Array) this.writer.write(RR);
          else if (Array.isArray(RR))
          for (const JR of RR) this.writeEBML(JR);
        else if (this.offsets.set(RR, this.writer.getPos()), this.writeUnsignedInt(RR.id), Array.isArray(RR.data)) {
          const JR = this.writer.getPos(),
            GR = -1 === RR.size ? 1 : RR.size ?? 4; - 1 === RR.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + GR);
          const yR = this.writer.getPos();
          if (this.dataOffsets.set(RR, yR), this.writeEBML(RR.data), -1 !== RR.size) {
            const RR = this.writer.getPos() - yR,
              tR = this.writer.getPos();
            this.writer.seek(JR), this.writeVarInt(RR, GR), this.writer.seek(tR)
          }
        } else if ("number" === typeof RR.data) {
          const JR = RR.size ?? AG(RR.data);
          this.writeVarInt(JR), this.writeUnsignedInt(RR.data, JR)
        } else if ("bigint" === typeof RR.data) {
          const JR = RR.size ?? CG(RR.data);
          this.writeVarInt(JR), this.writeUnsignedBigInt(RR.data, JR)
        } else if ("string" === typeof RR.data) this.writeVarInt(RR.data.length), this.writeAsciiString(RR.data);
        else if (RR.data instanceof Uint8Array) this.writeVarInt(RR.data.byteLength, RR.size), this.writer.write(RR.data);
        else if (RR.data instanceof aG) this.writeVarInt(4), this.writeFloat32(RR.data.value);
        else if (RR.data instanceof LG) this.writeVarInt(8), this.writeFloat64(RR.data.value);
        else if (RR.data instanceof nG) {
          const JR = RR.size ?? XG(RR.data.value);
          this.writeVarInt(JR), this.writeSignedInt(RR.data.value, JR)
        } else if (RR.data instanceof UG) {
          const JR = qR.Vc.encode(RR.data.value);
          this.writeVarInt(JR.length), this.writer.write(JR)
        } else(0, qR.H)(RR.data)
      }
    }
    const BG = {
      avc: "V_MPEG4/ISO/AVC",
      hevc: "V_MPEGH/ISO/HEVC",
      vp8: "V_VP8",
      vp9: "V_VP9",
      av1: "V_AV1",
      prores: "V_PRORES",
      aac: "A_AAC",
      mp3: "A_MPEG/L3",
      opus: "A_OPUS",
      vorbis: "A_VORBIS",
      flac: "A_FLAC",
      ac3: "A_AC3",
      eac3: "A_EAC3",
      dts: "A_DTS",
      "pcm-u8": "A_PCM/INT/LIT",
      "pcm-s16": "A_PCM/INT/LIT",
      "pcm-s16be": "A_PCM/INT/BIG",
      "pcm-s24": "A_PCM/INT/LIT",
      "pcm-s24be": "A_PCM/INT/BIG",
      "pcm-s32": "A_PCM/INT/LIT",
      "pcm-s32be": "A_PCM/INT/BIG",
      "pcm-f32": "A_PCM/FLOAT/IEEE",
      "pcm-f64": "A_PCM/FLOAT/IEEE",
      webvtt: "S_TEXT/WEBVTT"
    };
    const lG = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class pG extends eR {
      constructor(RR, JR) {
        super(RR), this.trackDatas = [], this.allTracksKnown = (0, qR.sc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = JR
      }
      async start() {
        const RR = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new MG(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const JR of this.output.tracks) JR.isVideoTrack() && JR.metadata.decoderConfig ? this.getVideoTrackData(JR, JR.metadata.primingPacket ?? null, {
          decoderConfig: JR.metadata.decoderConfig
        }) : JR.isAudioTrack() && JR.metadata.decoderConfig && this.getAudioTrackData(JR, JR.metadata.primingPacket ?? null, {
          decoderConfig: JR.metadata.decoderConfig
        });
        RR()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const RR = {
          id: WG.EBML,
          data: [{
            id: WG.EBMLVersion,
            data: 1
          }, {
            id: WG.EBMLReadVersion,
            data: 1
          }, {
            id: WG.EBMLMaxIDLength,
            data: 4
          }, {
            id: WG.EBMLMaxSizeLength,
            data: 8
          }, {
            id: WG.DocType,
            data: this.format instanceof IG ? "webm" : "matroska"
          }, {
            id: WG.DocTypeVersion,
            data: 4
          }, {
            id: WG.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(RR), this.format._options.onEbmlHeader) {
          const {
            data: RR,
            start: JR
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(RR, JR)
        }
      }
      maybeCreateSeekHead(RR) {
        if (this.format._options.appendOnly) return;
        const JR = new Uint8Array([28, 83, 187, 107]),
          GR = new Uint8Array([21, 73, 169, 102]),
          yR = new Uint8Array([22, 84, 174, 107]),
          tR = new Uint8Array([25, 65, 164, 105]),
          uR = new Uint8Array([18, 84, 195, 103]),
          ZR = {
            id: WG.SeekHead,
            data: [{
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: GR
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: RR ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: yR
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: RR ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: tR
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: RR ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: uR
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: RR ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: JR
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: RR ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = ZR
      }
      createSegmentInfo() {
        const RR = {
          id: WG.Duration,
          data: new LG(0)
        };
        this.segmentDuration = RR;
        const JR = {
          id: WG.Info,
          data: [{
            id: WG.TimestampScale,
            data: 1e6
          }, {
            id: WG.MuxingApp,
            data: UR.e
          }, {
            id: WG.WritingApp,
            data: UR.e
          }, this.format._options.appendOnly ? null : RR]
        };
        this.segmentInfo = JR
      }
      createTracks() {
        const RR = {
          id: WG.Tracks,
          data: []
        };
        this.tracksElement = RR;
        for (const JR of this.trackDatas) {
          let GR = BG[JR.track.source._codec];
          (0, qR.I)(GR), "audio" === JR.type && "dts" === JR.track.source._codec && ("dtse" === JR.info.decoderConfig.codec ? GR = "A_DTS/EXPRESS" : "dtsl" === JR.info.decoderConfig.codec && (GR = "A_DTS/LOSSLESS"));
          let yR = 0;
          if ("audio" === JR.type && "opus" === JR.track.source._codec) {
            yR = 8e7;
            const RR = JR.info.decoderConfig.description;
            if (RR) {
              const JR = (0, qR.cd)(RR),
                GR = (0, aR.jb)(JR);
              yR = Math.round(GR.preSkip / tR.l * 1e9)
            }
          }
          RR.data.push({
            id: WG.TrackEntry,
            data: [{
              id: WG.TrackNumber,
              data: JR.track.id
            }, {
              id: WG.TrackUID,
              data: JR.track.id
            }, {
              id: WG.TrackType,
              data: lG[JR.type]
            }, !1 === JR.track.metadata.disposition?.default ? {
              id: WG.FlagDefault,
              data: 0
            } : null, JR.track.metadata.disposition?.forced ? {
              id: WG.FlagForced,
              data: 1
            } : null, JR.track.metadata.disposition?.hearingImpaired ? {
              id: WG.FlagHearingImpaired,
              data: 1
            } : null, JR.track.metadata.disposition?.visuallyImpaired ? {
              id: WG.FlagVisualImpaired,
              data: 1
            } : null, JR.track.metadata.disposition?.original ? {
              id: WG.FlagOriginal,
              data: 1
            } : null, JR.track.metadata.disposition?.commentary ? {
              id: WG.FlagCommentary,
              data: 1
            } : null, {
              id: WG.FlagLacing,
              data: 0
            }, {
              id: WG.Language,
              data: JR.track.metadata.languageCode ?? qR.B
            }, {
              id: WG.CodecID,
              data: GR
            }, JR.codecPrivate ? {
              id: WG.CodecPrivate,
              data: (0, qR.cd)(JR.codecPrivate)
            } : null, yR > 0 ? {
              id: WG.SeekPreRoll,
              data: yR
            } : null, void 0 !== JR.track.metadata.name ? {
              id: WG.Name,
              data: new UG(JR.track.metadata.name)
            } : null, "video" === JR.type ? this.videoSpecificTrackInfo(JR) : null, "audio" === JR.type ? this.audioSpecificTrackInfo(JR) : null, "subtitle" === JR.type ? this.subtitleSpecificTrackInfo(JR) : null]
          })
        }
      }
      videoSpecificTrackInfo(RR) {
        const {
          frameRate: JR,
          transformationMatrix: GR
        } = RR.track.metadata, yR = [JR ? {
          id: WG.DefaultDuration,
          data: 1e9 / JR
        } : null];
        let tR, uR, ZR;
        if (GR) {
          tR = (0, qR.hb)(GR);
          const RR = (0, qR.gc)((0, qR.xc)(-tR), GR);
          uR = Math.sign(RR[0]), ZR = Math.sign(RR[4]), -1 === ZR && (ZR = 1, uR = -uR, tR = (0, qR.kc)(tR + 180))
        } else tR = RR.track.metadata.rotation ?? 0, uR = RR.track.metadata.flip ? -1 : 1, ZR = 1;
        const iR = tR ? (0, qR.kc)(-1 === uR ? tR : -tR) : 0,
          fR = Math.round(Math.acos(uR) * qR.s),
          VR = Math.round(Math.acos(ZR) * qR.s),
          KR = !!RR.info.aspectRatio && RR.info.aspectRatio.num * RR.info.height !== RR.info.aspectRatio.den * RR.info.width,
          wR = RR.info.decoderConfig.colorSpace,
          rR = {
            id: WG.Video,
            data: [{
              id: WG.PixelWidth,
              data: RR.info.width
            }, {
              id: WG.PixelHeight,
              data: RR.info.height
            }, KR ? {
              id: WG.DisplayWidth,
              data: RR.info.aspectRatio.num
            } : null, KR ? {
              id: WG.DisplayHeight,
              data: RR.info.aspectRatio.den
            } : null, KR ? {
              id: WG.DisplayUnit,
              data: 3
            } : null, RR.info.alphaMode ? {
              id: WG.AlphaMode,
              data: 1
            } : null, (0, qR._)(wR) ? null : {
              id: WG.Colour,
              data: [{
                id: WG.MatrixCoefficients,
                data: null != wR?.matrix ? qR.o[wR.matrix] : 2
              }, {
                id: WG.TransferCharacteristics,
                data: null != wR?.transfer ? qR.x[wR.transfer] : 2
              }, {
                id: WG.Primaries,
                data: null != wR?.primaries ? qR.e[wR.primaries] : 2
              }, {
                id: WG.Range,
                data: null != wR?.fullRange ? wR.fullRange ? 2 : 1 : 0
              }]
            }, iR || fR || VR ? {
              id: WG.Projection,
              data: [{
                id: WG.ProjectionType,
                data: 0
              }, fR ? {
                id: WG.ProjectionPoseYaw,
                data: new aG(fR)
              } : null, VR ? {
                id: WG.ProjectionPosePitch,
                data: new aG(VR)
              } : null, iR ? {
                id: WG.ProjectionPoseRoll,
                data: new aG((iR + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return yR.push(rR), yR
      }
      audioSpecificTrackInfo(RR) {
        const JR = tR.p.includes(RR.track.source._codec) ? (0, tR.Q)(RR.track.source._codec) : null;
        return [{
          id: WG.Audio,
          data: [{
            id: WG.SamplingFrequency,
            data: new aG(RR.info.sampleRate)
          }, {
            id: WG.Channels,
            data: RR.info.numberOfChannels
          }, JR ? {
            id: WG.BitDepth,
            data: 8 * JR.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(RR) {
        return []
      }
      maybeCreateTags() {
        const RR = [],
          JR = (JR, GR) => {
            RR.push({
              id: WG.SimpleTag,
              data: [{
                id: WG.TagName,
                data: new UG(JR)
              }, "string" === typeof GR ? {
                id: WG.TagString,
                data: new UG(GR)
              } : {
                id: WG.TagBinary,
                data: GR
              }]
            })
          },
          GR = this.output._metadataTags,
          yR = new Set;
        for (const {
            key: tR,
            value: uR
          }
          of(0, qR._b)(GR)) switch (tR) {
          case "title":
            JR("TITLE", uR), yR.add("TITLE");
            break;
          case "description":
            JR("DESCRIPTION", uR), yR.add("DESCRIPTION");
            break;
          case "artist":
            JR("ARTIST", uR), yR.add("ARTIST");
            break;
          case "album":
            JR("ALBUM", uR), yR.add("ALBUM");
            break;
          case "albumArtist":
            JR("ALBUM_ARTIST", uR), yR.add("ALBUM_ARTIST");
            break;
          case "genre":
            JR("GENRE", uR), yR.add("GENRE");
            break;
          case "beatsPerMinute":
            JR("BPM", uR.toString()), yR.add("BPM");
            break;
          case "comment":
            JR("COMMENT", uR), yR.add("COMMENT");
            break;
          case "lyrics":
            JR("LYRICS", uR), yR.add("LYRICS");
            break;
          case "date":
            JR("DATE", uR.toISOString().slice(0, 10)), yR.add("DATE");
            break;
          case "trackNumber":
            JR("PART_NUMBER", void 0 !== GR.tracksTotal ? `${uR}/${GR.tracksTotal}` : uR.toString()), yR.add("PART_NUMBER");
            break;
          case "discNumber":
            JR("DISC", void 0 !== GR.discsTotal ? `${uR}/${GR.discsTotal}` : uR.toString()), yR.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, qR.H)(tR)
        }
        if (GR.raw)
          for (const tR in GR.raw) {
            const RR = GR.raw[tR];
            null == RR || yR.has(tR) || ("string" === typeof RR || RR instanceof Uint8Array) && JR(tR, RR)
          }
        0 !== RR.length && (this.tagsElement = {
          id: WG.Tags,
          data: [{
            id: WG.Tag,
            data: [{
              id: WG.Targets,
              data: [{
                id: WG.TargetTypeValue,
                data: 50
              }, {
                id: WG.TargetType,
                data: "MOVIE"
              }]
            }, ...RR]
          }]
        })
      }
      maybeCreateAttachments() {
        const RR = this.output._metadataTags,
          JR = [],
          GR = new Set,
          yR = RR.images ?? [];
        for (const tR of yR) {
          let RR, yR = tR.name;
          if (void 0 === yR) {
            yR = ("coverFront" === tR.kind ? "cover" : "coverBack" === tR.kind ? "back" : "image") + ((0, qR.pb)(tR.mimeType) ?? "")
          }
          for (;;) {
            RR = 0n;
            for (let JR = 0; JR < 8; JR++) RR <<= 8n, RR |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== RR && !GR.has(RR)) break
          }
          GR.add(RR), JR.push({
            id: WG.AttachedFile,
            data: [void 0 !== tR.description ? {
              id: WG.FileDescription,
              data: new UG(tR.description)
            } : null, {
              id: WG.FileName,
              data: new UG(yR)
            }, {
              id: WG.FileMediaType,
              data: tR.mimeType
            }, {
              id: WG.FileData,
              data: tR.data
            }, {
              id: WG.FileUID,
              data: RR
            }]
          })
        }
        for (const [tR, uR] of Object.entries(RR.raw ?? {})) {
          if (!(uR instanceof rR.d)) continue;
          /^\d+$/.test(tR) && (yR.find((RR => RR.mimeType === uR.mimeType && (0, qR.gd)(RR.data, uR.data))) || JR.push({
            id: WG.AttachedFile,
            data: [void 0 !== uR.description ? {
              id: WG.FileDescription,
              data: new UG(uR.description)
            } : null, {
              id: WG.FileName,
              data: new UG(uR.name ?? "")
            }, {
              id: WG.FileMediaType,
              data: uR.mimeType ?? ""
            }, {
              id: WG.FileData,
              data: uR.data
            }, {
              id: WG.FileUID,
              data: BigInt(tR)
            }]
          }))
        }
        0 !== JR.length && (this.attachmentsElement = {
          id: WG.Attachments,
          data: JR
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const RR = {
          id: WG.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = RR, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(RR), this.format._options.onSegmentHeader) {
          const {
            data: RR,
            start: JR
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(RR, JR)
        }
      }
      createCues() {
        this.cues = {
          id: WG.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, qR.I)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const RR of this.output.tracks)
          if (!RR.source._closed && !this.trackDatas.some((JR => JR.track === RR))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const RR = this.trackDatas.map((RR => {
          if ("video" === RR.type) return RR.info.decoderConfig.codec;
          if ("audio" === RR.type) return RR.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [RR.track.source._codec]
        }));
        return (RR => {
          let JR = (RR.hasVideo ? "video/" : RR.hasAudio ? "audio/" : "application/") + (RR.isWebM ? "webm" : "x-matroska");
          RR.codecStrings.length > 0 && (JR += `; codecs="${[...new Set(RR.codecStrings.filter(Boolean))].join(", ")}"`);
          return JR
        })({
          isWebM: this.format instanceof IG,
          hasVideo: this.trackDatas.some((RR => "video" === RR.type)),
          hasAudio: this.trackDatas.some((RR => "audio" === RR.type)),
          codecStrings: RR
        })
      }
      getVideoTrackData(RR, JR, GR) {
        const yR = this.trackDatas.find((JR => JR.track === RR));
        if (yR) return yR;
        (0, tR.X)(GR, RR.source._codec), (0, qR.I)(GR), (0, qR.I)(GR.decoderConfig), (0, qR.I)(void 0 !== GR.decoderConfig.codedWidth), (0, qR.I)(void 0 !== GR.decoderConfig.codedHeight);
        const uR = GR.decoderConfig.displayAspectWidth,
          ZR = GR.decoderConfig.displayAspectHeight,
          iR = void 0 === uR || void 0 === ZR ? null : (0, qR.Qc)({
            num: uR,
            den: ZR
          }),
          fR = {
            track: RR,
            type: "video",
            info: {
              width: GR.decoderConfig.codedWidth,
              height: GR.decoderConfig.codedHeight,
              aspectRatio: iR,
              decoderConfig: GR.decoderConfig,
              alphaMode: RR.metadata.canBeTransparent || (JR ? !!JR.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: GR.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === RR.source._codec ? fR.codecPrivate = new Uint8Array((0, tR.I)(fR.info.decoderConfig.codec)) : "av1" === RR.source._codec ? fR.codecPrivate = new Uint8Array((0, tR.H)(fR.info.decoderConfig.codec)) : "prores" === RR.source._codec && (fR.codecPrivate = qR.Vc.encode(GR.decoderConfig.codec)), this.trackDatas.push(fR), this.trackDatas.sort(((RR, JR) => RR.track.id - JR.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), fR
      }
      getAudioTrackData(RR, JR, GR) {
        const uR = this.trackDatas.find((JR => JR.track === RR));
        if (uR) return uR;
        (0, tR.S)(GR, RR.source._codec), (0, qR.I)(GR), (0, qR.I)(GR.decoderConfig);
        const ZR = {
          ...GR.decoderConfig
        };
        let fR = !1;
        if ("aac" === RR.source._codec && !ZR.description) {
          if (!JR) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const RR = fG(iR.tempFromBytes(JR.data));
          if (!RR) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const GR = yR.f[RR.samplingFrequencyIndex],
            tR = yR.c[RR.channelConfiguration];
          if (void 0 === GR || void 0 === tR) throw new Error("Invalid ADTS frame header.");
          ZR.description = (0, yR.i)({
            objectType: RR.objectType,
            outputSampleRate: GR,
            outputNumberOfChannels: tR
          }), fR = !0
        }
        const VR = {
          track: RR,
          type: "audio",
          info: {
            numberOfChannels: GR.decoderConfig.numberOfChannels,
            sampleRate: GR.decoderConfig.sampleRate,
            decoderConfig: ZR,
            requiresAdtsStripping: fR
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: ZR.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(VR), this.trackDatas.sort(((RR, JR) => RR.track.id - JR.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), VR
      }
      getSubtitleTrackData(RR, JR) {
        const GR = this.trackDatas.find((JR => JR.track === RR));
        if (GR) return GR;
        (0, tR.T)(JR), (0, qR.I)(JR), (0, qR.I)(JR.config);
        const yR = {
          track: RR,
          type: "subtitle",
          info: {
            config: JR.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: qR.Vc.encode(JR.config.description),
          closed: !1
        };
        return this.trackDatas.push(yR), this.trackDatas.sort(((RR, JR) => RR.track.id - JR.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), yR
      }
      async addEncodedVideoPacket(RR, JR, GR) {
        const yR = await this.mutex.acquire();
        try {
          const yR = this.getVideoTrackData(RR, JR, GR);
          yR.info.alphaMode ??= !!JR.sideData.alpha;
          let tR = JR.data;
          if ("prores" === RR.source._codec) {
            if (tR.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            tR = tR.subarray(8)
          }
          const uR = "key" === JR.type;
          this.validateTimestamp(yR.track, JR.timestamp, uR);
          let ZR = JR.timestamp,
            iR = JR.duration;
          void 0 !== RR.metadata.frameRate && (ZR = (0, qR.zc)(ZR, RR.metadata.frameRate), iR = (0, qR.zc)(iR, RR.metadata.frameRate));
          const fR = yR.info.alphaMode ? JR.sideData.alpha ?? null : null,
            VR = this.createInternalChunk(tR, ZR, iR, JR.type, fR);
          "vp9" === RR.source._codec && this.fixVP9ColorSpace(yR, VR), yR.chunkQueue.push(VR), await this.interleaveChunks()
        } finally {
          yR()
        }
      }
      async addEncodedAudioPacket(RR, JR, GR) {
        const yR = await this.mutex.acquire();
        try {
          const yR = this.getAudioTrackData(RR, JR, GR);
          let tR = JR.data;
          if (yR.info.requiresAdtsStripping) {
            const RR = fG(iR.tempFromBytes(tR));
            if (!RR) throw new Error("Expected ADTS frame, didn't get one.");
            const JR = null === RR.crcCheck ? 7 : 9;
            tR = tR.subarray(JR)
          }
          const uR = "key" === JR.type;
          this.validateTimestamp(yR.track, JR.timestamp, uR);
          const ZR = this.createInternalChunk(tR, JR.timestamp, JR.duration, JR.type);
          yR.chunkQueue.push(ZR), await this.interleaveChunks()
        } finally {
          yR()
        }
      }
      async addSubtitleCue(RR, JR, GR) {
        const yR = await this.mutex.acquire();
        try {
          const yR = this.getSubtitleTrackData(RR, GR);
          this.validateTimestamp(yR.track, JR.timestamp, !0);
          let tR = JR.text;
          const uR = Math.round(1e3 * JR.timestamp);
          nR.k.lastIndex = 0, tR = tR.replace(nR.k, (RR => {
            const JR = (0, nR.m)(RR.slice(1, -1)) - uR;
            return `<${(0,nR.g)(JR)}>`
          }));
          const ZR = qR.Vc.encode(tR),
            iR = `${JR.settings??""}\n${JR.identifier??""}\n${JR.notes??""}`,
            fR = this.createInternalChunk(ZR, JR.timestamp, JR.duration, "key", iR.trim() ? qR.Vc.encode(iR) : null);
          yR.chunkQueue.push(fR), await this.interleaveChunks()
        } finally {
          yR()
        }
      }
      async interleaveChunks() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (RR || this.allTracksAreKnown()) {
          RR: for (;;) {
            let JR = null,
              GR = 1 / 0;
            for (const tR of this.trackDatas) {
              if (!RR && 0 === tR.chunkQueue.length && !tR.closed) break RR;
              tR.chunkQueue.length > 0 && tR.chunkQueue[0].timestamp < GR && (JR = tR, GR = tR.chunkQueue[0].timestamp)
            }
            if (!JR) break;
            const yR = JR.chunkQueue.shift();
            this.writeBlock(JR, yR)
          }
          RR || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(RR, JR) {
        if ("key" !== JR.type) return;
        if (!RR.info.decoderConfig.colorSpace || !RR.info.decoderConfig.colorSpace.matrix) return;
        const GR = new LR.b(JR.data);
        GR.skipBits(2);
        const yR = GR.readBits(1),
          tR = (GR.readBits(1) << 1) + yR;
        3 === tR && GR.skipBits(1);
        if (GR.readBits(1)) return;
        if (0 !== GR.readBits(1)) return;
        GR.skipBits(2);
        if (4817730 !== GR.readBits(24)) return;
        tR >= 2 && GR.skipBits(1);
        const uR = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [RR.info.decoderConfig.colorSpace.matrix];
        (0, qR.pd)(JR.data, GR.pos, GR.pos + 3, uR)
      }
      createInternalChunk(RR, JR, GR, yR) {
        return {
          data: RR,
          type: yR,
          timestamp: JR,
          duration: GR,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(RR, JR) {
        this.segment || this.createSegment();
        const GR = Math.round(1e3 * JR.timestamp),
          yR = this.trackDatas.every((GR => {
            if (RR === GR) return "key" === JR.type;
            const yR = GR.chunkQueue[0];
            return yR ? "key" === yR.type : GR.closed
          }));
        let tR = !1;
        if (this.currentCluster) {
          (0, qR.I)(null !== this.currentClusterStartMsTimestamp), (0, qR.I)(null !== this.currentClusterMaxMsTimestamp);
          const RR = GR - this.currentClusterStartMsTimestamp;
          tR = yR && GR > this.currentClusterMaxMsTimestamp && RR >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || RR > 32767
        } else tR = !0;
        tR && this.createNewCluster(GR);
        const uR = GR - this.currentClusterStartMsTimestamp;
        if (uR < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const RR = this.format instanceof IG ? "WebM" : "Matroska";
            ZR.e._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${RR}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const iR = new Uint8Array(4),
          fR = new DataView(iR.buffer);
        fR.setUint8(0, 128 | RR.track.id), fR.setInt16(1, uR, !1);
        const VR = Math.round(1e3 * JR.duration);
        if (!!JR.additions || "subtitle" === RR.type) {
          const yR = {
            id: WG.BlockGroup,
            data: [{
              id: WG.Block,
              data: [iR, JR.data]
            }, "delta" === JR.type ? {
              id: WG.ReferenceBlock,
              data: new nG(RR.lastWrittenMsTimestamp - GR)
            } : null, JR.additions ? {
              id: WG.BlockAdditions,
              data: [{
                id: WG.BlockMore,
                data: [{
                  id: WG.BlockAddID,
                  data: 1
                }, {
                  id: WG.BlockAdditional,
                  data: JR.additions
                }]
              }]
            } : null, VR > 0 ? {
              id: WG.BlockDuration,
              data: VR
            } : null]
          };
          this.ebmlWriter.writeEBML(yR)
        } else {
          fR.setUint8(3, Number("key" === JR.type) << 7);
          const RR = {
            id: WG.SimpleBlock,
            data: [iR, JR.data]
          };
          this.ebmlWriter.writeEBML(RR)
        }
        this.startTimestamp = Math.min(this.startTimestamp, GR), this.endTimestamp = Math.max(this.endTimestamp, GR + VR), RR.lastWrittenMsTimestamp = GR, this.trackDatasInCurrentCluster.has(RR) || this.trackDatasInCurrentCluster.set(RR, {
          firstMsTimestamp: GR
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, GR)
      }
      createNewCluster(RR) {
        RR = Math.max(0, RR), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: WG.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: WG.Timestamp,
            data: RR
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = RR, this.currentClusterMaxMsTimestamp = RR, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, qR.I)(this.currentCluster), !this.format._options.appendOnly) {
          const RR = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            JR = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(RR, 5), this.writer.seek(JR)
        }
        if (this.format._options.onCluster) {
          (0, qR.I)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: RR,
            start: JR
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(RR, JR, this.currentClusterStartMsTimestamp / 1e3)
        }
        const RR = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          JR = new Map;
        for (const [yR, {
            firstMsTimestamp: tR
          }] of this.trackDatasInCurrentCluster) JR.has(tR) || JR.set(tR, []), JR.get(tR).push(yR);
        const GR = [...JR.entries()].sort(((RR, JR) => RR[0] - JR[0]));
        for (const [yR, tR] of GR)(0, qR.I)(this.cues), this.cues.data.push({
          id: WG.CuePoint,
          data: [{
            id: WG.CueTime,
            data: Math.max(0, yR)
          }, ...tR.map((JR => ({
            id: WG.CueTrackPositions,
            data: [{
              id: WG.CueTrack,
              data: JR.track.id
            }, {
              id: WG.CueClusterPosition,
              data: RR
            }]
          })))]
        })
      }
      async onTrackClose(RR) {
        const JR = await this.mutex.acquire(),
          GR = this.trackDatas.find((JR => JR.track === RR));
        GR && (GR.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), JR()
      }
      async finalize() {
        const RR = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const JR of this.trackDatas) JR.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, qR.I)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const RR = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(RR, 6);
          const JR = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new LG(JR), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, qR.I)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        RR()
      }
    }
    const gG = new Uint32Array(256);
    for (let mG = 0; mG < 256; mG++) {
      let RR = mG << 24;
      for (let JR = 0; JR < 8; JR++) RR = 2147483648 & RR ? RR << 1 ^ 79764919 : RR << 1;
      gG[mG] = RR >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const bG = new Uint32Array(256);
    for (let mG = 0; mG < 256; mG++) {
      let RR = mG << 24;
      for (let JR = 0; JR < 8; JR++) RR = 2147483648 & RR ? RR << 1 ^ 79764919 : RR << 1;
      bG[mG] = RR >>> 0 & 4294967295
    }
    const vG = RR => {
        let JR = 4294967295;
        for (let GR = 0; GR < RR.length; GR++) {
          const yR = RR[GR];
          JR = (JR << 8 ^ bG[JR >>> 24 ^ yR]) >>> 0
        }
        return JR
      },
      OG = new Uint8Array(16);
    {
      const RR = (0, qR.ad)(OG);
      OG[0] = 0, RR.setUint16(1, 45069, !1), RR.setUint16(3, 1, !1), OG[5] = 193, OG[6] = 0, OG[7] = 0, RR.setUint16(8, 1, !1), RR.setUint16(10, 61440, !1), RR.setUint32(12, vG(OG.subarray(0, 12)), !1)
    }
    var xG;
    GR(41179);
    ! function(RR) {
      RR[RR.PCM = 1] = "PCM", RR[RR.IEEE_FLOAT = 3] = "IEEE_FLOAT", RR[RR.ALAW = 6] = "ALAW", RR[RR.MULAW = 7] = "MULAW", RR[RR.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(xG || (xG = {}));
    GR(41182), GR(41192), GR(41108);
    class NG {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((RR => tR.v.includes(RR)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((RR => tR.d.includes(RR)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((RR => tR.t.includes(RR)))
      }
      _codecUnsupportedHint(RR) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class DG extends NG {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (void 0 !== RR.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(RR.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== RR.minimumFragmentDuration && (!(0, qR.Nb)(RR.minimumFragmentDuration) || RR.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== RR.onFtyp && "function" !== typeof RR.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== RR.onMoov && "function" !== typeof RR.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== RR.onMdat && "function" !== typeof RR.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== RR.onMoof && "function" !== typeof RR.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== RR.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(RR.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = RR
      }
      getSupportedTrackCounts() {
        const RR = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: RR
          },
          audio: {
            min: 0,
            max: RR
          },
          subtitle: {
            min: 0,
            max: RR
          },
          total: {
            min: 0,
            max: RR
          }
        }
      }
      get supportsVideoTransformationMetadata() {
        return !0
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "full"
      }
      _createMuxer(RR) {
        return new eG(RR, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class HG extends DG {
      constructor(RR) {
        super(RR)
      }
      get _name() {
        return "MP4"
      }
      get fileExtension() {
        return ".mp4"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...tR.v, ...tR.h, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...tR.t]
      }
      _codecUnsupportedHint(RR) {
        return (new cG).getSupportedCodecs().includes(RR) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class oG extends DG {
      constructor(RR) {
        super(RR)
      }
      get _name() {
        return "CMAF"
      }
      get fileExtension() {
        return ".m4s"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...tR.v, ...tR.h, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...tR.t]
      }
    }
    class cG extends DG {
      constructor(RR) {
        super(RR)
      }
      get _name() {
        return "MOV"
      }
      get fileExtension() {
        return ".mov"
      }
      get mimeType() {
        return "video/quicktime"
      }
      getSupportedCodecs() {
        return [...tR.v, ...tR.d]
      }
      _codecUnsupportedHint(RR) {
        return (new HG).getSupportedCodecs().includes(RR) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class PG extends NG {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (void 0 !== RR.appendOnly && "boolean" !== typeof RR.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== RR.minimumClusterDuration && (!(0, qR.Nb)(RR.minimumClusterDuration) || RR.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== RR.onEbmlHeader && "function" !== typeof RR.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== RR.onSegmentHeader && "function" !== typeof RR.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== RR.onCluster && "function" !== typeof RR.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = RR
      }
      _createMuxer(RR) {
        return new pG(RR, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const RR = 127;
        return {
          video: {
            min: 0,
            max: RR
          },
          audio: {
            min: 0,
            max: RR
          },
          subtitle: {
            min: 0,
            max: RR
          },
          total: {
            min: 0,
            max: RR
          }
        }
      }
      get fileExtension() {
        return ".mkv"
      }
      get mimeType() {
        return "video/x-matroska"
      }
      getSupportedCodecs() {
        return [...tR.v, ...tR.h, ...tR.p.filter((RR => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(RR))), ...tR.t]
      }
      get supportsVideoTransformationMetadata() {
        return !1
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "prefer-non-negative"
      }
    }
    class IG extends PG {
      constructor(RR) {
        super(RR)
      }
      getSupportedCodecs() {
        return [...tR.v.filter((RR => ["vp8", "vp9", "av1"].includes(RR))), ...tR.d.filter((RR => ["opus", "vorbis"].includes(RR))), ...tR.t]
      }
      get _name() {
        return "WebM"
      }
      get fileExtension() {
        return ".webm"
      }
      get mimeType() {
        return "video/webm"
      }
      _codecUnsupportedHint(RR) {
        return (new PG).getSupportedCodecs().includes(RR) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  41108: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => WR
    });
    var yR = GR(41115),
      tR = GR(41119),
      uR = GR(41123),
      ZR = GR(41192),
      qR = GR(41170),
      iR = GR(41166),
      fR = GR(41147),
      VR = GR(41179),
      KR = GR(41133);
    const wR = ["video", "audio", "subtitle"];
    class rR {
      constructor(RR, JR, GR, yR, tR) {
        this.id = RR, this.output = JR, this.type = GR, this.source = yR, this.metadata = tR
      }
      isVideoTrack() {
        return "video" === this.type
      }
      isAudioTrack() {
        return "audio" === this.type
      }
      isSubtitleTrack() {
        return "subtitle" === this.type
      }
      canBePairedWith(RR) {
        if (!(RR instanceof rR)) throw new TypeError("other must be an OutputTrack.");
        if (this === RR) return !1;
        const JR = (0, yR.Yc)(this.metadata.group),
          GR = (0, yR.Yc)(RR.metadata.group);
        for (const yR of JR) {
          if (this.type !== RR.type && GR.some((RR => yR === RR))) return !0;
          if (GR.some((RR => yR._pairedGroups.has(RR)))) return !0
        }
        return !1
      }
    }
    class eR extends rR {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, "video", GR, yR)
      }
    }
    class aR extends rR {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, "audio", GR, yR)
      }
    }
    class LR extends rR {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, "subtitle", GR, yR)
      }
    }
    class nR {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(RR) {
        if (!(RR instanceof nR)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === RR) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(RR), RR._pairedGroups.add(this)
      }
    }
    const UR = RR => {
      if (!RR || "object" !== typeof RR) throw new TypeError("metadata must be an object.");
      if (void 0 !== RR.languageCode && !(0, yR.Db)(RR.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== RR.name && "string" !== typeof RR.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== RR.disposition && (0, tR.p)(RR.disposition), void 0 !== RR.maximumPacketCount && (!Number.isInteger(RR.maximumPacketCount) || RR.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== RR.bitrate && (!Number.isFinite(RR.bitrate) || RR.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== RR.averageBitrate && (!Number.isFinite(RR.averageBitrate) || RR.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== RR.group && !(RR.group instanceof nR) && (!Array.isArray(RR.group) || RR.group.some((RR => !(RR instanceof nR))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class WR extends yR.i {
      get target() {
        const RR = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(RR);
        const JR = this._getRootTarget();
        if ((0, yR.Rb)(JR)) throw new TypeError(RR);
        return JR
      }
      constructor(RR) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new nR, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new yR.c, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (!(RR.format instanceof uR.n)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(RR.target instanceof qR.k || RR.target instanceof qR.j)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (RR.target instanceof qR.k && this._rememberTarget(RR.target), void 0 !== RR.initTarget && !(RR.initTarget instanceof qR.k) && "function" !== typeof RR.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== RR.onFinalize && "function" !== typeof RR.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = RR.format, this.bK = RR.target, this._onFinalize = RR.onFinalize ?? null, this._initTarget = RR.initTarget ?? null, this._initTarget instanceof qR.k && this._rememberTarget(this._initTarget), this._muxer = RR.format._createMuxer(this)
      }
      _getTargetValidated(RR) {
        (0, yR.I)(this.bK instanceof qR.j);
        const JR = this.bK.getTarget(RR),
          GR = RR => {
            if (!(RR instanceof qR.k)) throw new TypeError("getTarget must return a Target.");
            return RR
          };
        return (0, yR.Rb)(JR) ? JR.then(GR) : GR(JR)
      }
      async _getTarget(RR) {
        (0, yR.I)(this.bK instanceof qR.j);
        const JR = await this._getTargetValidated(RR);
        return this._emit("target", {
          target: JR,
          request: RR,
          isRoot: RR.isRoot
        }), "canceled" === this.state ? await JR._close() : this._rememberTarget(JR), JR
      }
      _rememberTarget(RR) {
        this._unfinalizedTargets.add(RR), RR.on("finalized", (() => this._unfinalizedTargets.delete(RR)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, yR.I)(null !== this._initTarget), this._initTarget instanceof qR.k) return this._initTarget;
        const RR = await this._initTarget();
        return "canceled" === this.state ? await RR._close() : this._rememberTarget(RR), RR
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.bK instanceof qR.k) return this._emit("target", {
          target: this.bK,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.bK, this.bK;
        const RR = {
            path: this.bK.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          JR = this._getTargetValidated(RR),
          GR = JR => ("canceled" === this.state ? JR._close() : this._rememberTarget(JR), this._emit("target", {
            target: JR,
            request: RR,
            isRoot: !0
          }), this._rootTarget = JR, JR);
        return (0, yR.Rb)(JR) ? this._rootTargetPromise = JR.then(GR) : GR(JR)
      }
      _getRootWriter(RR) {
        return this._rootWriterPromise ??= (async () => {
          const JR = await this._getRootTarget(),
            GR = new iR.e(JR, "boolean" === typeof RR ? RR : RR(JR));
          return GR.start(), GR
        })()
      }
      addVideoTrack(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(RR instanceof ZR.m)) throw new TypeError("source must be a VideoSource.");
        if (UR(JR), void 0 !== JR.rotation && ![0, 90, 180, 270].includes(JR.rotation)) throw new TypeError(`Invalid video rotation: ${JR.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== JR.flip && "boolean" !== typeof JR.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== JR.transformationMatrix && (!Array.isArray(JR.transformationMatrix) || 9 !== JR.transformationMatrix.length || !JR.transformationMatrix.every((RR => Number.isFinite(RR))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== JR.frameRate && (!Number.isFinite(JR.frameRate) || JR.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${JR.frameRate}. Must be a positive number.`);
        if (void 0 !== JR.hasOnlyKeyPackets && "boolean" !== typeof JR.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== JR.canBeTransparent && "boolean" !== typeof JR.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== JR.decoderConfig && (0, KR.X)({
            decoderConfig: JR.decoderConfig
          }, RR._codec), void 0 !== JR.primingPacket) {
          if (!(JR.primingPacket instanceof VR.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === JR.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const GR = {
          ...JR
        };
        return GR.group ??= this.defaultTrackGroup, this._addTrack(new eR(this.tracks.length + 1, this, RR, GR))
      }
      addAudioTrack(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(RR instanceof ZR.b)) throw new TypeError("source must be an AudioSource.");
        if (UR(JR), void 0 !== JR.decoderConfig && (0, KR.S)({
            decoderConfig: JR.decoderConfig
          }, RR._codec), void 0 !== JR.primingPacket) {
          if (!(JR.primingPacket instanceof VR.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === JR.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const GR = {
          ...JR
        };
        return GR.group ??= this.defaultTrackGroup, this._addTrack(new aR(this.tracks.length + 1, this, RR, GR))
      }
      addSubtitleTrack(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(RR instanceof ZR.j)) throw new TypeError("source must be a SubtitleSource.");
        UR(JR);
        const GR = {
          ...JR
        };
        return GR.group ??= this.defaultTrackGroup, this._addTrack(new LR(this.tracks.length + 1, this, RR, GR))
      }
      setMetadataTags(RR) {
        if ((0, tR.o)(RR), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = RR
      }
      _addTrack(RR) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (RR.source._connectedTrack) throw new Error("Source is already used for a track.");
        const JR = this.format.getSupportedTrackCounts(),
          GR = this.tracks.reduce(((JR, GR) => JR + (GR.type === RR.type ? 1 : 0)), 0),
          yR = JR[RR.type].max;
        if (GR === yR) throw new Error(0 === yR ? `${this.format._name} does not support ${RR.type} tracks.` : `${this.format._name} does not support more than ${yR} ${RR.type} track` + (1 === yR ? "" : "s") + ".");
        const tR = JR.total.max;
        if (this.tracks.length === tR) throw new Error(`${this.format._name} does not support more than ${tR} tracks` + (1 === tR ? "" : "s") + " in total.");
        if (RR.isVideoTrack()) {
          const JR = this.format.getSupportedVideoCodecs();
          if (0 === JR.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(RR.source._codec));
          if (!JR.includes(RR.source._codec)) throw new Error(`Codec '${RR.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${JR.map((RR=>`'${RR}'`)).join(", ")}.` + this.format._codecUnsupportedHint(RR.source._codec))
        } else if (RR.isAudioTrack()) {
          const JR = this.format.getSupportedAudioCodecs();
          if (0 === JR.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(RR.source._codec));
          if (!JR.includes(RR.source._codec)) throw new Error(`Codec '${RR.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${JR.map((RR=>`'${RR}'`)).join(", ")}.` + this.format._codecUnsupportedHint(RR.source._codec))
        } else if (RR.isSubtitleTrack()) {
          const JR = this.format.getSupportedSubtitleCodecs();
          if (0 === JR.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(RR.source._codec));
          if (!JR.includes(RR.source._codec)) throw new Error(`Codec '${RR.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${JR.map((RR=>`'${RR}'`)).join(", ")}.` + this.format._codecUnsupportedHint(RR.source._codec))
        }
        return this.tracks.push(RR), RR.source._connectedTrack = RR, RR
      }
      hasEnoughTracks() {
        const RR = this.format.getSupportedTrackCounts();
        for (const GR of wR) {
          if (this.tracks.reduce(((RR, JR) => RR + (JR.type === GR ? 1 : 0)), 0) < RR[GR].min) return !1
        }
        const JR = RR.total.min;
        return !(this.tracks.length < JR)
      }
      async start() {
        const RR = this.format.getSupportedTrackCounts();
        for (const GR of wR) {
          const JR = this.tracks.reduce(((RR, JR) => RR + (JR.type === GR ? 1 : 0)), 0),
            yR = RR[GR].min;
          if (JR < yR) throw new Error(yR === RR[GR].max ? `${this.format._name} requires exactly ${yR} ${GR} track${1===yR?"":"s"}.` : `${this.format._name} requires at least ${yR} ${GR} track${1===yR?"":"s"}.`)
        }
        const JR = RR.total.min;
        if (this.tracks.length < JR) throw new Error(JR === RR.total.max ? `${this.format._name} requires exactly ${JR} track` + (1 === JR ? "" : "s") + "." : `${this.format._name} requires at least ${JR} track` + (1 === JR ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (fR.e._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const RR = this._mutex.acquire();
          try {
            await this._muxer.start();
            const RR = this.tracks.map((RR => RR.source._start()));
            await Promise.all(RR)
          } finally {
            (await RR)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const RR = await this._mutex.acquire();
          try {
            const RR = this.tracks.map((RR => RR.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(RR), await Promise.all([...this._unfinalizedTargets].map((RR => RR._close()))), this._unfinalizedTargets.clear()
          } finally {
            RR()
          }
        })() : void("finalized" === this.state && fR.e._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (fR.e._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const RR = await this._mutex.acquire();
          try {
            const RR = this.tracks.map((RR => RR.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(RR), await this._muxer.finalize(), this._rootWriterPromise) {
              const RR = await this._rootWriterPromise;
              RR.finalized || (await RR.flush(), await RR.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (JR) {
            throw this.state = "canceled", JR
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((RR => RR._close().catch((() => {}))))), this._unfinalizedTargets.clear(), RR()
          }
        })()
      }
    }
  },
  41179: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => tR
    });
    var yR = GR(41115);
    const tR = new Uint8Array(0);
    class uR {
      constructor(RR, JR, GR, yR) {
        let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          ZR = arguments.length > 5 ? arguments[5] : void 0,
          qR = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = RR, this.type = JR, this.timestamp = GR, this.duration = yR, this.sequenceNumber = uR, RR === tR && void 0 === ZR) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === ZR && (ZR = RR.byteLength), !(RR instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== JR && "delta" !== JR) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(GR)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(yR) || yR < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(uR)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(ZR) || ZR < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== qR && ("object" !== typeof qR || !qR)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== qR?.alpha && !(qR.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== qR?.alphaByteLength && (!Number.isInteger(qR.alphaByteLength) || qR.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = ZR, this.sideData = qR ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === tR
      }
      get microsecondTimestamp() {
        return Math.trunc(yR.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(yR.u * this.duration)
      }
      toEncodedVideoChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      alphaToEncodedVideoChunk() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: RR,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      toEncodedAudioChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
        if ("undefined" === typeof EncodedAudioChunk) throw new Error("EncodedAudioChunk is not available in this environment.");
        return new EncodedAudioChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      static fromEncodedChunk(RR, JR) {
        if (!(RR instanceof EncodedVideoChunk || RR instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const GR = new Uint8Array(RR.byteLength);
        return RR.copyTo(GR), new uR(GR, RR.type, RR.timestamp / 1e6, (RR.duration ?? 0) / 1e6, void 0, void 0, JR)
      }
      clone(RR) {
        if (void 0 !== RR && ("object" !== typeof RR || null === RR)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== RR?.data && !(RR.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== RR?.type && "key" !== RR.type && "delta" !== RR.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== RR?.timestamp && !Number.isFinite(RR.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== RR?.duration && !Number.isFinite(RR.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== RR?.sequenceNumber && !Number.isFinite(RR.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== RR?.sideData && ("object" !== typeof RR.sideData || null === RR.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new uR(RR?.data ?? this.data, RR?.type ?? this.type, RR?.timestamp ?? this.timestamp, RR?.duration ?? this.duration, RR?.sequenceNumber ?? this.sequenceNumber, this.byteLength, RR?.sideData ?? this.sideData)
      }
    }
  },
  41187: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => xR,
      f: () => rR,
      g: () => mR,
      k: () => PR,
      l: () => CR
    });
    var yR = GR(41115),
      tR = GR(41147),
      uR = function(RR, JR, GR) {
        if (null !== JR && void 0 !== JR) {
          if ("object" !== typeof JR && "function" !== typeof JR) throw new TypeError("Object expected.");
          var yR, tR;
          if (GR) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            yR = JR[Symbol.asyncDispose]
          }
          if (void 0 === yR) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            yR = JR[Symbol.dispose], GR && (tR = yR)
          }
          if ("function" !== typeof yR) throw new TypeError("Object not disposable.");
          tR && (yR = function() {
            try {
              tR.call(this)
            } catch (RR) {
              return Promise.reject(RR)
            }
          }), RR.stack.push({
            value: JR,
            dispose: yR,
            async: GR
          })
        } else GR && RR.stack.push({
          async: !0
        });
        return JR
      },
      ZR = function(RR) {
        return function(JR) {
          function GR(GR) {
            JR.error = JR.hasError ? new RR(GR, JR.error, "An error was suppressed during disposal.") : GR, JR.hasError = !0
          }
          var yR, tR = 0;
          return function RR() {
            for (; yR = JR.stack.pop();) try {
              if (!yR.async && 1 === tR) return tR = 0, JR.stack.push(yR), Promise.resolve().then(RR);
              if (yR.dispose) {
                var uR = yR.dispose.call(yR.value);
                if (yR.async) return tR |= 2, Promise.resolve(uR).then(RR, (function(JR) {
                  return GR(JR), RR()
                }))
              } else tR |= 1
            } catch (ZR) {
              GR(ZR)
            }
            if (1 === tR) return JR.hasError ? Promise.reject(JR.error) : Promise.resolve();
            if (JR.hasError) throw JR.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(RR, JR, GR) {
        var yR = new Error(GR);
        return yR.name = "SuppressedError", yR.error = RR, yR.suppressed = JR, yR
      });
    (0, yR.mc)();
    let qR = -1 / 0,
      iR = -1 / 0,
      fR = null;
    "undefined" !== typeof FinalizationRegistry && (fR = new FinalizationRegistry((RR => {
      const JR = performance.now();
      "video" === RR.type ? (JR - qR >= 1e3 && (tR.e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), qR = JR), "undefined" !== typeof VideoFrame && RR.data instanceof VideoFrame && RR.data.close()) : (JR - iR >= 1e3 && (tR.e._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), iR = JR), "undefined" !== typeof AudioData && RR.data instanceof AudioData && RR.data.close())
    })));
    class VR {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const KR = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      wR = new Set(KR);
    class rR {
      get codedWidth() {
        return this.visibleRect.width
      }
      get codedHeight() {
        return this.visibleRect.height
      }
      get displayWidth() {
        return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
      }
      get displayHeight() {
        return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
      }
      get microsecondTimestamp() {
        return Math.trunc(yR.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(yR.u * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(RR, JR) {
        if (this._closed = !1, RR instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && RR instanceof SharedArrayBuffer || ArrayBuffer.isView(RR)) {
          if (!JR || "object" !== typeof JR) throw new TypeError("init must be an object.");
          if (void 0 === JR.format || !wR.has(JR.format)) throw new TypeError("init.format must be one of: " + KR.join(", "));
          if (!Number.isInteger(JR.codedWidth) || JR.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(JR.codedHeight) || JR.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== JR.rotation && ![0, 90, 180, 270].includes(JR.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== JR.flip && "boolean" !== typeof JR.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(JR.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== JR.duration && (!Number.isFinite(JR.duration) || JR.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== JR.layout) {
            if (!Array.isArray(JR.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const RR of JR.layout) {
              if (!RR || "object" !== typeof RR || Array.isArray(RR)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(RR.offset) || RR.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(RR.stride) || RR.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== JR.visibleRect && (0, yR.id)(JR.visibleRect, "init.visibleRect"), void 0 !== JR.displayWidth && (!Number.isInteger(JR.displayWidth) || JR.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== JR.displayHeight && (!Number.isInteger(JR.displayHeight) || JR.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== JR.displayWidth !== (void 0 !== JR.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = JR.format, this.rotation = JR.rotation ?? 0, this.flip = JR.flip ?? !1, this.timestamp = JR.timestamp, this.duration = JR.duration ?? 0;
          const GR = JR.layout ?? MR(JR.format, JR.codedWidth, JR.codedHeight);
          let tR = JR.colorSpace ?? null;
          null === tR && (tR = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
            primaries: "bt709",
            transfer: "iec61966-2-1",
            matrix: "rgb",
            fullRange: !0
          } : {
            primaries: "bt709",
            transfer: "bt709",
            matrix: "bt709",
            fullRange: !1
          }), this.visibleRect = {
            left: JR.visibleRect?.left ?? 0,
            top: JR.visibleRect?.top ?? 0,
            width: JR.visibleRect?.width ?? JR.codedWidth,
            height: JR.visibleRect?.height ?? JR.codedHeight
          }, void 0 !== JR.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? JR.displayWidth : JR.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? JR.displayHeight : JR.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = JR._doNotCopy ? (0, yR.cd)(RR) : (0, yR.cd)(RR).slice(), this._layout = GR, this.colorSpace = new UR(tR)
        } else if ("undefined" !== typeof VideoFrame && RR instanceof VideoFrame) {
          if (void 0 !== JR?.rotation && ![0, 90, 180, 270].includes(JR.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== JR?.flip && "boolean" !== typeof JR.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== JR?.timestamp && !Number.isFinite(JR?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== JR?.duration && (!Number.isFinite(JR.duration) || JR.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== JR?.visibleRect && (0, yR.id)(JR.visibleRect, "init.visibleRect"), this._data = RR, this._layout = null, this.format = RR.format, this.visibleRect = {
            left: RR.visibleRect?.x ?? 0,
            top: RR.visibleRect?.y ?? 0,
            width: RR.visibleRect?.width ?? RR.codedWidth,
            height: RR.visibleRect?.height ?? RR.codedHeight
          }, this.rotation = JR?.rotation ?? 0, this.flip = JR?.flip ?? !1, this.squarePixelWidth = RR.displayWidth, this.squarePixelHeight = RR.displayHeight, this.timestamp = JR?.timestamp ?? RR.timestamp / 1e6, this.duration = JR?.duration ?? (RR.duration ?? 0) / 1e6, this.colorSpace = new UR(RR.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && RR instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && RR instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && RR instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && RR instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && RR instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && RR instanceof OffscreenCanvas) {
          if (!JR || "object" !== typeof JR) throw new TypeError("init must be an object.");
          if (void 0 !== JR.rotation && ![0, 90, 180, 270].includes(JR.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== JR.flip && "boolean" !== typeof JR.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(JR.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== JR.duration && (!Number.isFinite(JR.duration) || JR.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== JR.visibleRect && (0, yR.id)(JR.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new rR(new VideoFrame(RR, {
            timestamp: Math.trunc(JR.timestamp * yR.u),
            duration: Math.trunc((JR.duration ?? 0) * yR.u) || void 0,
            visibleRect: JR.visibleRect && {
              x: JR.visibleRect.left,
              y: JR.visibleRect.top,
              width: JR.visibleRect.width,
              height: JR.visibleRect.height
            }
          }), JR);
          let GR = 0,
            tR = 0;
          if ("naturalWidth" in RR ? (GR = RR.naturalWidth, tR = RR.naturalHeight) : "videoWidth" in RR ? (GR = RR.videoWidth, tR = RR.videoHeight) : "width" in RR && (GR = Number(RR.width), tR = Number(RR.height)), !GR || !tR) throw new TypeError("Could not determine dimensions.");
          const uR = JR.visibleRect ?? {
              left: 0,
              top: 0,
              width: GR,
              height: tR
            },
            ZR = new OffscreenCanvas(uR.width, uR.height),
            qR = ZR.getContext("2d", {
              alpha: (0, yR.zb)(),
              willReadFrequently: !0
            });
          if (!qR) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          qR.drawImage(RR, -uR.left, -uR.top), this._data = ZR, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: uR.width,
            height: uR.height
          }, this.squarePixelWidth = uR.width, this.squarePixelHeight = uR.height, this.rotation = JR.rotation ?? 0, this.flip = JR.flip ?? !1, this.timestamp = JR.timestamp, this.duration = JR.duration ?? 0, this.colorSpace = new UR({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(RR instanceof VR)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!JR || "object" !== typeof JR) throw new TypeError("init must be an object.");
          if (void 0 !== JR.rotation && ![0, 90, 180, 270].includes(JR.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== JR.flip && "boolean" !== typeof JR.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(JR.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== JR.duration && (!Number.isFinite(JR.duration) || JR.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = RR, RR._referenceCount++, this.format = RR.getFormat(), null !== this.format && !KR.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: RR.getCodedWidth(),
              height: RR.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = RR.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = RR.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = JR.rotation ?? 0, this.flip = JR.flip ?? !1, this.timestamp = JR.timestamp, this.duration = JR.duration ?? 0, this.colorSpace = RR.getColorSpace()
        }
        this.encodeOptions = JR?.encodeOptions ?? {}, this.pixelAspectRatio = (0, yR.Qc)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), fR?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, yR.I)(null !== this._data), this._data instanceof VR ? new rR(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : WR(this._data) ? new rR(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, yR.I)(this._layout), new rR(this._data, {
          format: this.format,
          layout: this._layout,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions,
          _doNotCopy: !0
        })) : new rR(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions
        })
      }
      close() {
        this._closed || (fR?.unregister(this), this._data instanceof VR ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : WR(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (XR(RR), this._closed) throw new Error("VideoSample is closed.");
        if (null == (RR.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (WR(this._data)) return this._data.allocationSize(RR);
        return lR(this, RR).allocationSize
      }
      async copyTo(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, yR.tb)(RR)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (XR(JR), this._closed) throw new Error("VideoSample is closed.");
        if (null == (JR.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, yR.I)(null !== this._data), WR(this._data)) return this._data.copyTo(RR, JR);
        if (JR.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(JR.format)) {
          if (!(this._data instanceof VR)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const GR = this.toVideoFrame(),
              yR = await GR.copyTo(RR, JR);
            return GR.close(), yR
          } {
            const GR = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const yR = uR(GR, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, JR.colorSpace ?? "srgb"), !1);
              if (!(yR instanceof rR)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(yR.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${yR.format}' instead.`);
              return await yR.copyTo(RR, JR)
            } catch (wR) {
              GR.error = wR, GR.hasError = !0
            } finally {
              ZR(GR)
            }
          }
        }
        const GR = lR(this, JR);
        (0, yR.I)(this.format);
        const tR = (0, yR.cd)(RR);
        if (tR.byteLength < GR.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${GR.allocationSize}, Available: ${tR.byteLength}`);
        const qR = BR(this.format);
        let iR;
        if (this._data instanceof VR) {
          let RR = this._data.getDataPlanes();
          if ((0, yR.Rb)(RR) && (RR = await RR), !Array.isArray(RR) || RR.some((RR => !(RR.data instanceof Uint8Array) || !Number.isInteger(RR.stride) || RR.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          iR = RR
        } else if (this._data instanceof Uint8Array)(0, yR.I)(this._layout), (0, yR.I)(this._layout.length === qR.length), iR = this._layout.map(((RR, JR) => {
          const GR = Math.ceil(this.codedHeight / qR[JR].heightDivisor);
          return {
            data: this._data.subarray(RR.offset, RR.offset + RR.stride * GR),
            stride: RR.stride
          }
        }));
        else {
          const RR = this._data.getContext("2d");
          (0, yR.I)(RR);
          const JR = RR.getImageData(0, 0, this.codedWidth, this.codedHeight);
          iR = [{
            data: (0, yR.cd)(JR.data),
            stride: 4 * this.codedWidth
          }]
        }
        const fR = [],
          KR = qR.length;
        for (let yR = 0; yR < KR; yR++) {
          const RR = GR.computedLayouts[yR],
            JR = iR[yR].stride,
            uR = iR[yR].data;
          let ZR = RR.sourceTop * JR;
          ZR += RR.sourceLeftBytes;
          let qR = RR.destinationOffset;
          const VR = RR.sourceWidthBytes,
            KR = {
              offset: qR,
              stride: RR.destinationStride
            };
          for (let GR = 0; GR < RR.sourceHeight; GR++) {
            if (ZR + VR > uR.byteLength) throw new Error("Source buffer OOB read.");
            if (qR + VR > tR.byteLength) throw new Error("Destination buffer OOB write.");
            const GR = uR.subarray(ZR, ZR + VR);
            tR.set(GR, qR), ZR += JR, qR += RR.destinationStride
          }
          fR.push(KR)
        }
        if (void 0 !== JR.format) {
          const RR = this.format.startsWith("RGB") !== JR.format.startsWith("RGB"),
            yR = this.format.includes("X") && JR.format.includes("A");
          if (RR || yR)
            for (let JR = 0; JR < GR.allocationSize; JR += 4) {
              if (RR) {
                const RR = tR[JR],
                  GR = tR[JR + 2];
                tR[JR] = GR, tR[JR + 2] = RR
              }
              yR && (tR[JR + 3] = 255)
            }
        }
        return fR
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, yR.I)(null !== this._data), this._data instanceof VR) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const RR = this._data.getDataPlanes();
          if ((0, yR.Rb)(RR)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const JR = RR.reduce(((RR, JR) => RR + JR.data.byteLength), 0),
            GR = new Uint8Array(JR);
          let tR = 0;
          const uR = [];
          for (const yR of RR) GR.set(yR.data, tR), uR.push(tR), tR += yR.data.byteLength;
          return new VideoFrame(GR, {
            format: this.format,
            layout: RR.map(((RR, JR) => ({
              offset: uR[JR],
              stride: RR.stride
            }))),
            codedWidth: this.codedWidth,
            codedHeight: this.codedHeight,
            timestamp: this.microsecondTimestamp,
            duration: this.microsecondDuration,
            colorSpace: this.colorSpace,
            visibleRect: this.visibleRect,
            displayWidth: this.squarePixelWidth,
            displayHeight: this.squarePixelHeight
          })
        }
        return WR(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, yR.I)(this._layout), new VideoFrame(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          layout: this._layout,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0,
          colorSpace: this.colorSpace,
          visibleRect: this.visibleRect,
          displayWidth: this.squarePixelWidth,
          displayHeight: this.squarePixelHeight
        })) : new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        })
      }
      draw(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        let fR = 0,
          VR = 0,
          KR = this.displayWidth,
          wR = this.displayHeight,
          rR = 0,
          eR = 0,
          aR = this.displayWidth,
          LR = this.displayHeight;
        if (void 0 !== uR ? (fR = JR, VR = GR, KR = yR, wR = tR, rR = uR, eR = ZR, void 0 !== qR ? (aR = qR, LR = iR) : (aR = KR, LR = wR)) : (rR = JR, eR = GR, void 0 !== yR && (aR = yR, LR = tR)), !("undefined" !== typeof CanvasRenderingContext2D && RR instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && RR instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(fR)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(VR)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(KR) || KR < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(wR) || wR < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(rR)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(eR)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(aR) || aR < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(LR) || LR < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: fR,
          sy: VR,
          sWidth: KR,
          sHeight: wR
        } = this._unmapSourceRegion(fR, VR, KR, wR, this.rotation, this.flip));
        const nR = this.toCanvasImageSource();
        RR.save();
        const UR = rR + aR / 2,
          WR = eR + LR / 2;
        RR.translate(UR, WR), this.flip && RR.scale(-1, 1), RR.rotate(this.rotation * Math.PI / 180);
        const AR = this.rotation % 180 === 0 ? 1 : aR / LR;
        RR.scale(1 / AR, AR), RR.drawImage(nR, fR, VR, KR, wR, -aR / 2, -LR / 2, aR, LR), RR.restore()
      }
      drawWithFit(RR, JR) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && RR instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && RR instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!JR || "object" !== typeof JR) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(JR.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== JR.rotation && ![0, 90, 180, 270].includes(JR.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== JR.flip && "boolean" !== typeof JR.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== JR.crop && CR(JR.crop, "options.");
        const GR = RR.canvas.width,
          yR = RR.canvas.height,
          tR = JR.rotation ?? this.rotation,
          uR = JR.flip ?? this.flip,
          [ZR, qR] = tR % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let iR, fR, VR, KR, wR = JR.crop;
        wR && (wR = AR(wR, ZR, qR));
        const {
          sx: rR,
          sy: eR,
          sWidth: aR,
          sHeight: LR
        } = this._unmapSourceRegion(JR.crop?.left ?? 0, JR.crop?.top ?? 0, JR.crop?.width ?? ZR, JR.crop?.height ?? qR, tR, uR);
        if ("fill" === JR.fit) iR = 0, fR = 0, VR = GR, KR = yR;
        else {
          const [RR, tR] = JR.crop ? [JR.crop.width, JR.crop.height] : [ZR, qR], uR = "contain" === JR.fit ? Math.min(GR / RR, yR / tR) : Math.max(GR / RR, yR / tR);
          VR = RR * uR, KR = tR * uR, iR = (GR - VR) / 2, fR = (yR - KR) / 2
        }
        RR.save();
        const nR = tR % 180 === 0 ? 1 : VR / KR;
        RR.translate(GR / 2, yR / 2), uR && RR.scale(-1, 1), RR.rotate(tR * Math.PI / 180), RR.scale(1 / nR, nR), RR.translate(-GR / 2, -yR / 2), RR.drawImage(this.toCanvasImageSource(), rR, eR, aR, LR, iR, fR, VR, KR), RR.restore()
      }
      _unmapSourceRegion(RR, JR, GR, yR, tR, uR) {
        if (uR) {
          RR = (tR % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - RR - GR
        }
        return 90 === tR ? [RR, JR, GR, yR] = [JR, this.squarePixelHeight - RR - GR, yR, GR] : 180 === tR ? [RR, JR] = [this.squarePixelWidth - RR - GR, this.squarePixelHeight - JR - yR] : 270 === tR && ([RR, JR, GR, yR] = [this.squarePixelWidth - JR - yR, RR, yR, GR]), {
          sx: RR,
          sy: JR,
          sWidth: GR,
          sHeight: yR
        }
      }
      _drawWithFitAndMipmapping(RR, JR, GR) {
        const yR = RR.width,
          tR = RR.height,
          [uR, ZR] = GR.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          qR = GR.crop ? GR.crop.width : uR,
          iR = GR.crop ? GR.crop.height : ZR;
        let fR = 0;
        2 * yR < qR && 2 * tR < iR && (fR = Math.floor(Math.log2(Math.min(qR / yR, iR / tR))));
        const VR = yR * 2 ** fR,
          KR = tR * 2 ** fR,
          {
            canvas: wR,
            context: rR,
            isNew: eR
          } = fR > 0 ? nR(VR, KR) : {
            canvas: RR,
            context: JR,
            isNew: GR.targetIsFresh
          };
        rR.imageSmoothingQuality = "high", GR.fillBlack ? (rR.fillStyle = "black", rR.fillRect(0, 0, VR, KR)) : eR || rR.clearRect(0, 0, VR, KR), this.drawWithFit(rR, {
          fit: GR.fit,
          rotation: GR.rotation,
          flip: GR.flip,
          crop: GR.crop
        }), rR.globalCompositeOperation = "copy";
        for (let aR = fR; aR > 1; aR--) {
          const RR = yR * 2 ** aR,
            JR = tR * 2 ** aR;
          rR.drawImage(wR, 0, 0, RR, JR, 0, 0, RR / 2, JR / 2)
        }
        rR.globalCompositeOperation = "source-over", fR > 0 && (JR.imageSmoothingQuality = "high", JR.globalCompositeOperation = "copy", JR.drawImage(wR, 0, 0, 2 * yR, 2 * tR, 0, 0, yR, tR), JR.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, yR.I)(null !== this._data), this._data instanceof VR || this._data instanceof Uint8Array) {
          const RR = this.toVideoFrame();
          return queueMicrotask((() => RR.close())), RR
        }
        return this._data
      }
      async transform(RR) {
        if (!RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (void 0 !== RR.width && (!Number.isInteger(RR.width) || RR.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== RR.height && (!Number.isInteger(RR.height) || RR.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== RR.roundDimensionsTo && (!Number.isInteger(RR.roundDimensionsTo) || RR.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== RR.fit && !["fill", "contain", "cover"].includes(RR.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== RR.width && void 0 !== RR.height && void 0 === RR.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== RR.rotate && ![0, 90, 180, 270].includes(RR.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== RR.flip && "boolean" !== typeof RR.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== RR.crop && CR(RR.crop, "options."), void 0 !== RR.alpha && !["keep", "discard"].includes(RR.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: JR,
          flip: GR
        } = (0, yR.cb)(this.rotation, this.flip, RR.rotate ?? 0, RR.flip ?? !1), [tR, uR] = JR % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let ZR = RR.crop;
        ZR && (ZR = AR(ZR, tR, uR));
        const qR = ZR ? ZR.width : tR,
          iR = ZR ? ZR.height : uR,
          fR = qR / iR;
        let VR, KR;
        void 0 !== RR.width && void 0 === RR.height ? (VR = RR.width, KR = VR / fR) : void 0 === RR.width && void 0 !== RR.height ? (KR = RR.height, VR = KR * fR) : void 0 !== RR.width && void 0 !== RR.height ? (VR = RR.width, KR = RR.height) : (VR = qR, KR = iR), VR = (0, yR.Bc)(VR, RR.roundDimensionsTo ?? 1), KR = (0, yR.Bc)(KR, RR.roundDimensionsTo ?? 1);
        const wR = {
          width: VR,
          height: KR,
          fit: RR.fit ?? "fill",
          rotation: JR,
          flip: GR,
          crop: ZR ?? {
            left: 0,
            top: 0,
            width: tR,
            height: uR
          },
          alpha: RR.alpha ?? "keep"
        };
        for (const rR of eR) {
          let RR = rR(this, wR);
          if ((0, yR.Rb)(RR) && (RR = await RR), null !== RR) return RR
        }
        const {
          canvas: aR,
          context: LR,
          isNew: UR
        } = nR(wR.width, wR.height);
        return this._drawWithFitAndMipmapping(aR, LR, {
          fit: wR.fit,
          rotation: wR.rotation,
          flip: wR.flip,
          crop: wR.crop,
          targetIsFresh: UR,
          fillBlack: "discard" === wR.alpha
        }), new rR(aR, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(RR) {
        if (![0, 90, 180, 270].includes(RR)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = RR
      }
      setFlip(RR) {
        if ("boolean" !== typeof RR) throw new TypeError("newFlip must be a boolean.");
        this.flip = RR
      }
      setTimestamp(RR) {
        if (!Number.isFinite(RR)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = RR
      }
      setDuration(RR) {
        if (!Number.isFinite(RR) || RR < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = RR
      }
      setEncodeOptions(RR) {
        if (!RR || "object" !== typeof RR) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = RR
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const eR = [],
      aR = [];
    let LR = 0;
    const nR = (RR, JR) => {
      for (const yR of aR)
        if (yR.canvas.width === RR && yR.canvas.height === JR) return yR.age = LR++, {
          canvas: yR.canvas,
          context: yR.context,
          isNew: !1
        };
      let GR;
      if ("undefined" !== typeof OffscreenCanvas) GR = new OffscreenCanvas(RR, JR);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        GR = document.createElement("canvas"), GR.width = RR, GR.height = JR
      }
      const tR = GR.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!tR) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return aR.length >= 3 && aR.splice((0, yR.E)(aR, (RR => RR.age)), 1), aR.push({
        canvas: GR,
        context: tR,
        age: LR++
      }), {
        canvas: GR,
        context: tR,
        isNew: !0
      }
    };
    class UR {
      constructor(RR) {
        if (void 0 !== RR) {
          if (!RR || "object" !== typeof RR) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const JR = Object.keys(yR.e);
          if (null != RR.primaries && !JR.includes(RR.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${JR.join(", ")}.`);
          const GR = Object.keys(yR.x);
          if (null != RR.transfer && !GR.includes(RR.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${GR.join(", ")}.`);
          const tR = Object.keys(yR.o);
          if (null != RR.matrix && !tR.includes(RR.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${tR.join(", ")}.`);
          if (null != RR.fullRange && "boolean" !== typeof RR.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = RR?.primaries ?? null, this.transfer = RR?.transfer ?? null, this.matrix = RR?.matrix ?? null, this.fullRange = RR?.fullRange ?? null
      }
      toJSON() {
        return {
          primaries: this.primaries,
          transfer: this.transfer,
          matrix: this.matrix,
          fullRange: this.fullRange
        }
      }
    }
    const WR = RR => "undefined" !== typeof VideoFrame && RR instanceof VideoFrame,
      AR = (RR, JR, GR) => {
        const tR = Math.min(RR.left, JR),
          uR = Math.min(RR.top, GR),
          ZR = Math.min(RR.width, JR - tR),
          qR = Math.min(RR.height, GR - uR);
        return (0, yR.I)(ZR >= 0), (0, yR.I)(qR >= 0), {
          left: tR,
          top: uR,
          width: ZR,
          height: qR
        }
      },
      CR = (RR, JR) => {
        if (!RR || "object" !== typeof RR) throw new TypeError(JR + "crop, when provided, must be an object.");
        if (!Number.isInteger(RR.left) || RR.left < 0) throw new TypeError(JR + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(RR.top) || RR.top < 0) throw new TypeError(JR + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(RR.width) || RR.width < 0) throw new TypeError(JR + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(RR.height) || RR.height < 0) throw new TypeError(JR + "crop.height must be a non-negative integer.")
      },
      XR = RR => {
        if (!RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (void 0 !== RR.colorSpace && !["display-p3", "srgb"].includes(RR.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== RR.format && "string" !== typeof RR.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== RR.layout) {
          if (!Array.isArray(RR.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const JR of RR.layout) {
            if (!JR || "object" !== typeof JR) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(JR.offset) || JR.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(JR.stride) || JR.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== RR.rect) {
          if (!RR.rect || "object" !== typeof RR.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== RR.rect.x && (!Number.isInteger(RR.rect.x) || RR.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== RR.rect.y && (!Number.isInteger(RR.rect.y) || RR.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== RR.rect.width && (!Number.isInteger(RR.rect.width) || RR.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== RR.rect.height && (!Number.isInteger(RR.rect.height) || RR.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      MR = (RR, JR, GR) => {
        const yR = BR(RR),
          tR = [];
        let uR = 0;
        for (const ZR of yR) {
          const RR = Math.ceil(JR / ZR.widthDivisor),
            yR = Math.ceil(GR / ZR.heightDivisor),
            qR = RR * ZR.sampleBytes,
            iR = qR * yR;
          tR.push({
            offset: uR,
            stride: qR
          }), uR += iR
        }
        return tR
      },
      BR = RR => {
        const JR = (RR, JR, GR, yR, tR) => {
          const uR = [{
            sampleBytes: RR,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: JR,
            widthDivisor: GR,
            heightDivisor: yR
          }, {
            sampleBytes: JR,
            widthDivisor: GR,
            heightDivisor: yR
          }];
          return tR && uR.push({
            sampleBytes: RR,
            widthDivisor: 1,
            heightDivisor: 1
          }), uR
        };
        switch (RR) {
          case "I420":
            return JR(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return JR(2, 2, 2, 2, !1);
          case "I420A":
            return JR(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return JR(2, 2, 2, 2, !0);
          case "I422":
            return JR(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return JR(2, 2, 2, 1, !1);
          case "I422A":
            return JR(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return JR(2, 2, 2, 1, !0);
          case "I444":
            return JR(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return JR(2, 2, 1, 1, !1);
          case "I444A":
            return JR(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return JR(2, 2, 1, 1, !0);
          case "NV12":
            return [{
              sampleBytes: 1,
              widthDivisor: 1,
              heightDivisor: 1
            }, {
              sampleBytes: 2,
              widthDivisor: 2,
              heightDivisor: 2
            }];
          case "RGBA":
          case "RGBX":
          case "BGRA":
          case "BGRX":
            return [{
              sampleBytes: 4,
              widthDivisor: 1,
              heightDivisor: 1
            }];
          default:
            (0, yR.H)(RR), (0, yR.I)(!1)
        }
      },
      lR = (RR, JR) => {
        const GR = {
            left: 0,
            top: 0,
            width: RR.codedWidth,
            height: RR.codedHeight
          },
          yR = JR.rect,
          tR = pR(GR, yR, RR.codedWidth, RR.codedHeight, RR.format),
          uR = JR.layout;
        let ZR;
        if (JR.format && JR.format !== RR.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(JR.format)) throw new Error("NotSupportedError: Invalid destination format.");
          ZR = JR.format
        } else ZR = RR.format;
        return bR(tR, ZR, uR)
      },
      pR = (RR, JR, GR, yR, tR) => {
        const uR = {
          ...RR
        };
        if (void 0 !== JR) {
          if (0 === JR.width || 0 === JR.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((JR.x || 0) + (JR.width || 0) > GR) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((JR.y || 0) + (JR.height || 0) > yR) throw new TypeError("visibleRect exceeds codedHeight.");
          uR.x = JR.x || 0, uR.y = JR.y || 0, uR.width = JR.width || 0, uR.height = JR.height || 0
        }
        if (!gR(tR, uR)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return uR
      },
      gR = (RR, JR) => {
        if (null === RR) return !0;
        const GR = BR(RR);
        for (let yR = 0; yR < GR.length; yR++) {
          const RR = GR[yR],
            tR = RR.widthDivisor,
            uR = RR.heightDivisor;
          if ((JR.x || 0) % tR !== 0) return !1;
          if ((JR.y || 0) % uR !== 0) return !1
        }
        return !0
      },
      bR = (RR, JR, GR) => {
        const yR = BR(JR),
          tR = yR.length;
        if (void 0 !== GR && GR.length !== tR) throw new TypeError(`Layout must have ${tR} planes.`);
        let uR = 0;
        const ZR = [],
          qR = [];
        for (let iR = 0; iR < tR; iR++) {
          const JR = yR[iR],
            tR = JR.sampleBytes,
            fR = JR.widthDivisor,
            VR = JR.heightDivisor,
            KR = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (KR.sourceTop = Math.ceil(Math.trunc(RR.y || 0) / VR), KR.sourceHeight = Math.ceil(Math.trunc(RR.height || 0) / VR), KR.sourceLeftBytes = Math.floor(Math.trunc(RR.x || 0) / fR) * tR, KR.sourceWidthBytes = Math.floor(Math.trunc(RR.width || 0) / fR) * tR, void 0 !== GR) {
            const RR = GR[iR];
            if (RR.stride < KR.sourceWidthBytes) throw new TypeError(`Stride for plane ${iR} is too small.`);
            KR.destinationOffset = RR.offset, KR.destinationStride = RR.stride
          } else KR.destinationOffset = uR, KR.destinationStride = KR.sourceWidthBytes;
          const wR = KR.destinationStride * KR.sourceHeight + KR.destinationOffset;
          if (wR > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          qR.push(wR), uR = Math.max(uR, wR);
          for (let RR = 0; RR < iR; RR++) {
            const JR = ZR[RR];
            if (!(qR[iR] <= JR.destinationOffset || qR[RR] <= KR.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          ZR.push(KR)
        }
        return {
          allocationSize: uR,
          computedLayouts: ZR
        }
      },
      vR = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class OR {
      constructor() {
        this._referenceCount = 0
      }
    }
    class xR {
      get microsecondTimestamp() {
        return Math.trunc(yR.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(yR.u * this.duration)
      }
      constructor(RR) {
        if (this._closed = !1, cR(RR)) {
          if (null === RR.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = RR, this.format = RR.format, this.sampleRate = RR.sampleRate, this.numberOfFrames = RR.numberOfFrames, this.numberOfChannels = RR.numberOfChannels, this.timestamp = RR.timestamp / 1e6, this.duration = RR.numberOfFrames / RR.sampleRate
        } else if (RR instanceof OR) {
          if (this._data = RR, RR._referenceCount++, this.format = RR.getFormat(), !vR.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = RR.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = RR.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = RR.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = RR.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!RR || "object" !== typeof RR) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!vR.has(RR.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(RR.sampleRate) || RR.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(RR.numberOfChannels) || 0 === RR.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(RR?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const JR = RR.data.byteLength / (NR(RR.format) * RR.numberOfChannels);
          if (!Number.isInteger(JR)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let GR;
          if (this.format = RR.format, this.sampleRate = RR.sampleRate, this.numberOfFrames = JR, this.numberOfChannels = RR.numberOfChannels, this.timestamp = RR.timestamp, this.duration = JR / RR.sampleRate, RR.data instanceof ArrayBuffer) GR = new Uint8Array(RR.data);
          else {
            if (!ArrayBuffer.isView(RR.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            GR = new Uint8Array(RR.data.buffer, RR.data.byteOffset, RR.data.byteLength)
          }
          const yR = this.numberOfFrames * this.numberOfChannels * NR(this.format);
          if (GR.byteLength < yR) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = GR
        }
        fR?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(RR) {
        if (!RR || "object" !== typeof RR) throw new TypeError("options must be an object.");
        if (!Number.isInteger(RR.planeIndex) || RR.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== RR.format && !vR.has(RR.format)) throw new TypeError("Invalid format.");
        if (void 0 !== RR.frameOffset && (!Number.isInteger(RR.frameOffset) || RR.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== RR.frameCount && (!Number.isInteger(RR.frameCount) || RR.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const JR = RR.format ?? this.format,
          GR = RR.frameOffset ?? 0;
        if (GR >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const yR = void 0 !== RR.frameCount ? RR.frameCount : this.numberOfFrames - GR;
        if (yR > this.numberOfFrames - GR) throw new RangeError("frameCount out of range");
        const tR = NR(JR),
          uR = DR(JR);
        if (uR && RR.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!uR && 0 !== RR.planeIndex) throw new RangeError("planeIndex out of range");
        return (uR ? yR : yR * this.numberOfChannels) * tR
      }
      copyTo(RR, JR) {
        if (!(0, yR.tb)(RR)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!JR || "object" !== typeof JR) throw new TypeError("options must be an object.");
        if (!Number.isInteger(JR.planeIndex) || JR.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== JR.format && !vR.has(JR.format)) throw new TypeError("Invalid format.");
        if (void 0 !== JR.frameOffset && (!Number.isInteger(JR.frameOffset) || JR.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== JR.frameCount && (!Number.isInteger(JR.frameCount) || JR.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: GR,
          frameCount: tR,
          frameOffset: uR
        } = JR;
        let {
          planeIndex: ZR
        } = JR, qR = this.format;
        const iR = GR ?? this.format;
        if (!iR) throw new Error("Destination format not determined");
        const fR = this.numberOfFrames,
          VR = this.numberOfChannels,
          KR = uR ?? 0;
        if (KR >= fR) throw new RangeError("frameOffset out of range");
        const wR = void 0 !== tR ? tR : fR - KR;
        if (wR > fR - KR) throw new RangeError("frameCount out of range");
        const rR = NR(iR),
          eR = DR(iR);
        if (eR && ZR >= VR) throw new RangeError("planeIndex out of range");
        if (!eR && 0 !== ZR) throw new RangeError("planeIndex out of range");
        const aR = (eR ? wR : wR * VR) * rR;
        if (RR.byteLength < aR) throw new RangeError("Destination buffer is too small");
        const LR = (0, yR.ad)(RR),
          nR = oR(iR);
        if (cR(this._data)) {
          if ((0, yR.Ub)() && VR > 2 && iR !== qR) return void IR(this._data, LR, qR, iR, VR, ZR, KR, wR);
          try {
            return void this._data.copyTo(RR, {
              planeIndex: ZR,
              frameOffset: KR,
              frameCount: wR,
              format: iR
            })
          } catch (MR) {
            if ("f32-planar" === iR) throw MR;
            qR = "f32-planar"
          }
        }
        const UR = HR(qR),
          WR = NR(qR),
          AR = DR(qR);
        let CR;
        if (this._data instanceof OR) {
          const RR = RR => {
            const JR = this._data.getDataPlane(RR);
            if (!(JR instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const GR = fR * WR * (AR ? 1 : VR);
            if (JR.byteLength !== GR) throw new TypeError(`Data plane ${RR} has invalid size. Expected exactly ${GR} bytes, got ${JR.byteLength} bytes.`);
            return JR
          };
          if (AR)
            if (eR) CR = RR(ZR), ZR = 0;
            else {
              CR = new Uint8Array(fR * WR * VR);
              for (let JR = 0; JR < VR; JR++) {
                const GR = RR(JR);
                CR.set(GR, JR * fR * WR)
              }
            }
          else CR = RR(0)
        } else if (this._data instanceof Uint8Array) CR = this._data;
        else if ((0, yR.I)("f32-planar" === qR), eR) CR = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: ZR
        })), this._data.copyTo(CR, {
          format: "f32-planar",
          planeIndex: ZR
        }), ZR = 0;
        else {
          CR = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * VR);
          for (let RR = 0; RR < VR; RR++) this._data.copyTo(CR.subarray(RR * fR * WR, (RR + 1) * fR * WR), {
            format: "f32-planar",
            planeIndex: RR
          })
        }
        const XR = (0, yR.ad)(CR);
        for (let yR = 0; yR < wR; yR++)
          if (eR) {
            let RR;
            RR = AR ? (ZR * fR + (yR + KR)) * WR : ((yR + KR) * VR + ZR) * WR;
            nR(LR, yR * rR, UR(XR, RR))
          } else
            for (let RR = 0; RR < VR; RR++) {
              let JR;
              JR = AR ? (RR * fR + (yR + KR)) * WR : ((yR + KR) * VR + RR) * WR;
              nR(LR, (yR * VR + RR) * rR, UR(XR, JR))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof OR) {
          const RR = new xR(this._data);
          return RR.setTimestamp(this.timestamp), RR
        }
        if (cR(this._data)) {
          const RR = new xR(this._data.clone());
          return RR.setTimestamp(this.timestamp), RR
        }
        return new xR({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(RR) || RR < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(JR) || JR < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (RR > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (JR > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (JR < RR) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const GR = JR - RR,
          yR = NR(this.format);
        let tR;
        if (DR(this.format)) {
          const JR = GR * yR;
          if (tR = new Uint8Array(JR * this.numberOfChannels), GR > 0)
            for (let yR = 0; yR < this.numberOfChannels; yR++) this.copyTo(tR.subarray(yR * JR, (yR + 1) * JR), {
              planeIndex: yR,
              format: this.format,
              frameOffset: RR,
              frameCount: GR
            })
        } else tR = new Uint8Array(GR * this.numberOfChannels * yR), GR > 0 && this.copyTo(tR, {
          planeIndex: 0,
          format: this.format,
          frameOffset: RR,
          frameCount: GR
        });
        return new xR({
          data: tR,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + RR / this.sampleRate
        })
      }
      close() {
        this._closed || (fR?.unregister(this), this._data instanceof OR ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : cR(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof OR ? this._createAudioDataFromData() : cR(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (DR(this.format)) {
          const RR = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            JR = new ArrayBuffer(RR * this.numberOfChannels);
          for (let GR = 0; GR < this.numberOfChannels; GR++) this.copyTo(new Uint8Array(JR, GR * RR, RR), {
            planeIndex: GR,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: JR
          })
        } {
          const RR = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(RR, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: RR
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const RR = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          JR = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let GR = 0; GR < this.numberOfChannels; GR++) this.copyTo(JR, {
          planeIndex: GR,
          format: "f32-planar"
        }), RR.copyToChannel(JR, GR);
        return RR
      }
      setTimestamp(RR) {
        if (!Number.isFinite(RR)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = RR
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(RR, JR) {
        if (!(RR instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const GR = RR.numberOfChannels,
          yR = RR.sampleRate,
          tR = RR.length,
          uR = Math.floor(24e4 / GR);
        let ZR = 0,
          qR = tR;
        for (; qR > 0;) {
          const tR = Math.min(uR, qR),
            iR = new Float32Array(GR * tR);
          for (let JR = 0; JR < GR; JR++) RR.copyFromChannel(iR.subarray(JR * tR, (JR + 1) * tR), JR, ZR);
          yield new xR({
            format: "f32-planar",
            sampleRate: yR,
            numberOfFrames: tR,
            numberOfChannels: GR,
            timestamp: JR + ZR / yR,
            data: iR
          }), ZR += tR, qR -= tR
        }
      }
      static fromAudioBuffer(RR, JR) {
        if (!(RR instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const GR = RR.numberOfChannels,
          yR = RR.sampleRate,
          tR = RR.length,
          uR = Math.floor(24e4 / GR);
        let ZR = 0,
          qR = tR;
        const iR = [];
        for (; qR > 0;) {
          const tR = Math.min(uR, qR),
            fR = new Float32Array(GR * tR);
          for (let JR = 0; JR < GR; JR++) RR.copyFromChannel(fR.subarray(JR * tR, (JR + 1) * tR), JR, ZR);
          const VR = new xR({
            format: "f32-planar",
            sampleRate: yR,
            numberOfFrames: tR,
            numberOfChannels: GR,
            timestamp: JR + ZR / yR,
            data: fR
          });
          iR.push(VR), ZR += tR, qR -= tR
        }
        return iR
      }
    }
    const NR = RR => {
        switch (RR) {
          case "u8":
          case "u8-planar":
            return 1;
          case "s16":
          case "s16-planar":
            return 2;
          case "s32":
          case "s32-planar":
          case "f32":
          case "f32-planar":
            return 4;
          default:
            throw new Error("Unknown AudioSampleFormat")
        }
      },
      DR = RR => {
        switch (RR) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      HR = RR => {
        switch (RR) {
          case "u8":
          case "u8-planar":
            return (RR, JR) => (RR.getUint8(JR) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (RR, JR) => RR.getInt16(JR, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (RR, JR) => RR.getInt32(JR, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (RR, JR) => RR.getFloat32(JR, !0)
        }
      },
      oR = RR => {
        switch (RR) {
          case "u8":
          case "u8-planar":
            return (RR, JR, GR) => RR.setUint8(JR, (0, yR.V)(Math.round(128 * GR) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (RR, JR, GR) => RR.setInt16(JR, (0, yR.V)(Math.round(32768 * GR), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (RR, JR, GR) => RR.setInt32(JR, (0, yR.V)(Math.round(2147483648 * GR), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (RR, JR, GR) => RR.setFloat32(JR, GR, !0)
        }
      },
      cR = RR => "undefined" !== typeof AudioData && RR instanceof AudioData,
      PR = RR => {
        switch (RR) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return RR
        }
      },
      IR = (RR, JR, GR, tR, uR, ZR, qR, iR) => {
        const fR = HR(GR),
          VR = oR(tR),
          KR = NR(GR),
          wR = NR(tR),
          rR = DR(GR);
        if (DR(tR))
          if (rR) {
            const tR = new ArrayBuffer(iR * KR),
              uR = (0, yR.ad)(tR);
            RR.copyTo(tR, {
              planeIndex: ZR,
              frameOffset: qR,
              frameCount: iR,
              format: GR
            });
            for (let RR = 0; RR < iR; RR++) {
              VR(JR, RR * wR, fR(uR, RR * KR))
            }
          } else {
            const tR = new ArrayBuffer(iR * uR * KR),
              rR = (0, yR.ad)(tR);
            RR.copyTo(tR, {
              planeIndex: 0,
              frameOffset: qR,
              frameCount: iR,
              format: GR
            });
            for (let RR = 0; RR < iR; RR++) {
              VR(JR, RR * wR, fR(rR, (RR * uR + ZR) * KR))
            }
          }
        else if (rR) {
          const tR = new ArrayBuffer(iR * KR),
            ZR = (0, yR.ad)(tR);
          for (let yR = 0; yR < uR; yR++) {
            RR.copyTo(tR, {
              planeIndex: yR,
              frameOffset: qR,
              frameCount: iR,
              format: GR
            });
            for (let RR = 0; RR < iR; RR++) {
              VR(JR, (RR * uR + yR) * wR, fR(ZR, RR * KR))
            }
          }
        } else {
          const tR = new ArrayBuffer(iR * uR * KR),
            ZR = (0, yR.ad)(tR);
          RR.copyTo(tR, {
            planeIndex: 0,
            frameOffset: qR,
            frameCount: iR,
            format: GR
          });
          for (let RR = 0; RR < iR; RR++)
            for (let GR = 0; GR < uR; GR++) {
              const yR = RR * uR + GR;
              VR(JR, yR * wR, fR(ZR, yR * KR))
            }
        }
      },
      mR = (RR, JR) => {
        const GR = RR.allocationSize({
            format: JR,
            planeIndex: 0
          }),
          yR = new ArrayBuffer(GR);
        return RR.copyTo(yR, {
          format: JR,
          planeIndex: 0
        }), new xR({
          data: yR,
          format: JR,
          numberOfChannels: RR.numberOfChannels,
          sampleRate: RR.sampleRate,
          timestamp: RR.timestamp,
          duration: RR.duration
        })
      }
  },
  41158: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => fR,
      k: () => uR,
      m: () => iR
    });
    const yR = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      tR = /^WEBVTT(.|\n)*?\n{2}/,
      uR = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class ZR {
      constructor(RR) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = RR
      }
      parse(RR) {
        let JR;
        if (RR = RR.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), yR.lastIndex = 0, !this.preambleText) {
          if (!tR.test(RR)) throw new Error("WebVTT preamble incorrect.");
          JR = yR.exec(RR);
          const GR = RR.slice(0, JR?.index ?? RR.length).trimEnd();
          if (!GR) throw new Error("No WebVTT preamble provided.");
          this.preambleText = GR, JR && (RR = RR.slice(JR.index), yR.lastIndex = 0)
        }
        for (; JR = yR.exec(RR);) {
          const GR = RR.slice(0, JR.index),
            tR = JR[1],
            uR = JR.index + JR[0].length,
            ZR = RR.indexOf("\n", uR) + 1,
            qR = RR.slice(uR, ZR).trim();
          let fR = RR.indexOf("\n\n", uR); - 1 === fR && (fR = RR.length);
          const VR = iR(JR[2]),
            KR = iR(JR[3]) - VR,
            wR = RR.slice(ZR, fR).trim();
          RR = RR.slice(fR).trimStart(), yR.lastIndex = 0;
          const rR = {
              timestamp: VR / 1e3,
              duration: KR / 1e3,
              text: wR,
              identifier: tR,
              settings: qR,
              notes: GR
            },
            eR = {};
          this.preambleEmitted || (eR.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(rR, eR)
        }
      }
    }
    const qR = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      iR = RR => {
        const JR = qR.exec(RR);
        if (!JR) throw new Error("Expected match.");
        return 36e5 * Number(JR[1] || "0") + 6e4 * Number(JR[2]) + 1e3 * Number(JR[3]) + Number(JR[4])
      },
      fR = RR => {
        const JR = Math.floor(RR / 36e5),
          GR = Math.floor(RR % 36e5 / 6e4),
          yR = Math.floor(RR % 6e4 / 1e3),
          tR = RR % 1e3;
        return JR.toString().padStart(2, "0") + ":" + GR.toString().padStart(2, "0") + ":" + yR.toString().padStart(2, "0") + "." + tR.toString().padStart(3, "0")
      }
  },
  41170: (RR, JR, GR) => {
    var yR;
    GR.d(JR, {
      b: () => fR,
      f: () => VR,
      j: () => wR,
      k: () => ZR
    });
    var tR = GR(41175),
      uR = GR(41115);
    "undefined" !== typeof(yR || (yR = GR.t(tR, 2))) && (yR || (yR = GR.t(tR, 2)));
    class ZR extends uR.i {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(RR) {
        !1 !== this._monotonicity && (this._monotonicity = RR)
      }
      _dispatchWrite(RR, JR) {
        this.onwrite?.(RR, JR), this._emit("write", {
          start: RR,
          end: JR
        })
      }
      slice(RR) {
        if (!Number.isInteger(RR) || RR < 0) throw new TypeError("offset must be a non-negative integer.");
        return new KR(this, RR)
      }
    }
    const qR = 65536,
      iR = 2 ** 32;
    class fR extends ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !RR || "object" !== typeof RR) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== RR.onFinalize && "function" !== typeof RR.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = RR, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(qR, {
            maxByteLength: iR
          })
        } catch {
          this._buffer = new ArrayBuffer(qR), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(qR);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(RR) {
        let JR = this._buffer.byteLength;
        for (; JR < RR;) JR *= 2;
        if (JR !== this._buffer.byteLength) {
          if (JR > iR) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(JR);
          else {
            const RR = new ArrayBuffer(JR),
              GR = new Uint8Array(RR);
            GR.set(this._bytes, 0), this._buffer = RR, this._bytes = GR
          }
        }
      }
      _start() {}
      _write(RR, JR) {
        this._ensureSize(JR + RR.byteLength), this._bytes.set(RR, JR), this._maxPos = Math.max(this._maxPos, JR + RR.byteLength), this._dispatchWrite(JR, JR + RR.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(RR, JR) {
        return this._bytes.slice(RR, JR)
      }
    }
    class VR extends ZR {
      _start() {}
      _write(RR, JR) {
        this._dispatchWrite(JR, JR + RR.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class KR extends ZR {
      constructor(RR, JR) {
        super(), this._baseTarget = RR, this._offset = JR
      }
      _start() {}
      _write(RR, JR) {
        this._baseTarget._write(RR, this._offset + JR), this._dispatchWrite(JR, JR + RR.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(RR) {
        super._setMonotonicity(RR), this._baseTarget._setMonotonicity(RR)
      }
    }
    class wR {
      constructor(RR, JR) {
        if (this.rootPath = RR, this.getTarget = JR, "string" !== typeof RR) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof JR) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  41149: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = "Mediabunny v1.61.3"
  },
  41166: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(41115);
    class tR {
      constructor(RR, JR) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, RR._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = RR, RR._setMonotonicity(JR), RR._writerAcquired = !0
      }
      start() {
        (0, yR.I)(!this.started), this.target._start(), this.started = !0
      }
      write(RR) {
        (0, yR.I)(this.started && !this.finalized), this.maybeTrackWrites(RR), this.target._write(RR, this.pos), this.pos += RR.byteLength
      }
      seek(RR) {
        this.pos = RR
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, yR.I)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, yR.I)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(RR) {
        if (!this.trackedWrites) return;
        let JR = this.getPos();
        if (JR < this.trackedStart) {
          if (JR + RR.byteLength <= this.trackedStart) return;
          RR = RR.subarray(this.trackedStart - JR), JR = 0
        }
        const GR = JR + RR.byteLength - this.trackedStart;
        let yR = this.trackedWrites.byteLength;
        for (; yR < GR;) yR *= 2;
        if (yR !== this.trackedWrites.byteLength) {
          const RR = new Uint8Array(yR);
          RR.set(this.trackedWrites, 0), this.trackedWrites = RR
        }
        this.trackedWrites.set(RR, JR - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, JR + RR.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const RR = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, RR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);