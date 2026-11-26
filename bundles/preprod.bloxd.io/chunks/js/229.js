/*! For license information please see cwj32u.229.477f7df9.chunk.js.LICENSE.txt */
export const id = 229;
export const ids = [229];
export const modules = {
  40708: (HH, BH, LH) => {
    function AH() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function rH(HH) {
      return HH instanceof Uint8Array && (!AH() || !Buffer.isBuffer(HH))
    }

    function SH(HH) {
      return HH instanceof ArrayBuffer
    }

    function hH(HH) {
      return !!AH() && Buffer.isBuffer(HH)
    }
    var tH = LH(40712).d,
      zH = LH(40716).d,
      CH = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    BH.c = function(HH) {
      if (!rH(HH) && !SH(HH) && !hH(HH)) throw new TypeError(CH);
      var BH = !1,
        LH = !1;
      rH(HH) ? BH = !0 : SH(HH) && (LH = !0, HH = new Uint8Array(HH));
      var AH, tH, EH, XH = new zH(HH),
        GH = XH.maxCompressedLength();
      if (BH ? (AH = new Uint8Array(GH), EH = XH.compressToBuffer(AH)) : LH ? (AH = new ArrayBuffer(GH), tH = new Uint8Array(AH), EH = XH.compressToBuffer(tH)) : (AH = Buffer.alloc(GH), EH = XH.compressToBuffer(AH)), !AH.slice) {
        var YH = new Uint8Array(Array.prototype.slice.call(AH, 0, EH));
        if (BH) return YH;
        if (LH) return YH.buffer;
        throw new Error("Not implemented")
      }
      return AH.slice(0, EH)
    }
  },
  40716: (HH, BH) => {
    var LH = new Array(15);

    function AH(HH, BH) {
      return 506832829 * HH >>> BH
    }

    function rH(HH, BH) {
      return HH[BH] + (HH[BH + 1] << 8) + (HH[BH + 2] << 16) + (HH[BH + 3] << 24)
    }

    function SH(HH, BH, LH) {
      return HH[BH] === HH[LH] && HH[BH + 1] === HH[LH + 1] && HH[BH + 2] === HH[LH + 2] && HH[BH + 3] === HH[LH + 3]
    }

    function hH(HH, BH, LH, AH, rH) {
      return LH <= 60 ? (AH[rH] = LH - 1 << 2, rH += 1) : LH < 256 ? (AH[rH] = 240, AH[rH + 1] = LH - 1, rH += 2) : (AH[rH] = 244, AH[rH + 1] = LH - 1 & 255, AH[rH + 2] = LH - 1 >>> 8, rH += 3),
        function(HH, BH, LH, AH, rH) {
          var SH;
          for (SH = 0; SH < rH; SH++) LH[AH + SH] = HH[BH + SH]
        }(HH, BH, AH, rH, LH), rH + LH
    }

    function tH(HH, BH, LH, AH) {
      return AH < 12 && LH < 2048 ? (HH[BH] = 1 + (AH - 4 << 2) + (LH >>> 8 << 5), HH[BH + 1] = 255 & LH, BH + 2) : (HH[BH] = 2 + (AH - 1 << 2), HH[BH + 1] = 255 & LH, HH[BH + 2] = LH >>> 8, BH + 3)
    }

    function zH(HH, BH, LH, AH) {
      for (; AH >= 68;) BH = tH(HH, BH, LH, 64), AH -= 64;
      return AH > 64 && (BH = tH(HH, BH, LH, 60), AH -= 60), tH(HH, BH, LH, AH)
    }

    function CH(HH, BH, tH, CH, EH) {
      for (var XH = 1; 1 << XH <= tH && XH <= 14;) XH += 1;
      var GH = 32 - (XH -= 1);
      "undefined" === typeof LH[XH] && (LH[XH] = new Uint16Array(1 << XH));
      var YH, uH = LH[XH];
      for (YH = 0; YH < uH.length; YH++) uH[YH] = 0;
      var QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH = BH + tH,
        kH = BH,
        mH = BH,
        oH = !0;
      if (tH >= 15)
        for (QH = bH - 15, MH = AH(rH(HH, BH += 1), GH); oH;) {
          PH = 32, xH = BH;
          do {
            if (WH = MH, TH = PH >>> 5, PH += 1, xH = (BH = xH) + TH, BH > QH) {
              oH = !1;
              break
            }
            MH = AH(rH(HH, xH), GH), vH = kH + uH[WH], uH[WH] = BH - kH
          } while (!SH(HH, BH, vH));
          if (!oH) break;
          EH = hH(HH, mH, BH - mH, CH, EH);
          do {
            for (UH = BH, VH = 4; BH + VH < bH && HH[BH + VH] === HH[vH + VH];) VH += 1;
            if (BH += VH, EH = zH(CH, EH, UH - vH, VH), mH = BH, BH >= QH) {
              oH = !1;
              break
            }
            uH[AH(rH(HH, BH - 1), GH)] = BH - 1 - kH, vH = kH + uH[OH = AH(rH(HH, BH), GH)], uH[OH] = BH - kH
          } while (SH(HH, BH, vH));
          if (!oH) break;
          MH = AH(rH(HH, BH += 1), GH)
        }
      return mH < bH && (EH = hH(HH, mH, bH - mH, CH, EH)), EH
    }

    function EH(HH) {
      this.array = HH
    }
    EH.prototype.maxCompressedLength = function() {
      var HH = this.array.length;
      return 32 + HH + Math.floor(HH / 6)
    }, EH.prototype.compressToBuffer = function(HH) {
      var BH, LH = this.array,
        AH = LH.length,
        rH = 0,
        SH = 0;
      for (SH = function(HH, BH, LH) {
          do {
            BH[LH] = 127 & HH, (HH >>>= 7) > 0 && (BH[LH] += 128), LH += 1
          } while (HH > 0);
          return LH
        }(AH, HH, SH); rH < AH;) SH = CH(LH, rH, BH = Math.min(AH - rH, 65536), HH, SH), rH += BH;
      return SH
    }, BH.d = EH
  },
  40712: (HH, BH) => {
    var LH = [0, 255, 65535, 16777215, 4294967295];

    function AH(HH, BH, LH, AH, rH) {
      var SH;
      for (SH = 0; SH < rH; SH++) LH[AH + SH] = HH[BH + SH]
    }

    function rH(HH, BH, LH, AH) {
      var rH;
      for (rH = 0; rH < AH; rH++) HH[BH + rH] = HH[BH - LH + rH]
    }

    function SH(HH) {
      this.array = HH, this.pos = 0
    }
    SH.prototype.readUncompressedLength = function() {
      for (var HH, BH, LH = 0, AH = 0; AH < 32 && this.pos < this.array.length;) {
        if (HH = this.array[this.pos], this.pos += 1, (BH = 127 & HH) << AH >>> AH !== BH) return -1;
        if (LH |= BH << AH, HH < 128) return LH;
        AH += 7
      }
      return -1
    }, SH.prototype.uncompressToBuffer = function(HH) {
      for (var BH, SH, hH, tH, zH = this.array, CH = zH.length, EH = this.pos, XH = 0; EH < zH.length;)
        if (BH = zH[EH], EH += 1, 0 === (3 & BH)) {
          if ((SH = 1 + (BH >>> 2)) > 60) {
            if (EH + 3 >= CH) return !1;
            hH = SH - 60, SH = 1 + ((SH = zH[EH] + (zH[EH + 1] << 8) + (zH[EH + 2] << 16) + (zH[EH + 3] << 24)) & LH[hH]), EH += hH
          }
          if (EH + SH > CH) return !1;
          AH(zH, EH, HH, XH, SH), EH += SH, XH += SH
        } else {
          switch (3 & BH) {
            case 1:
              SH = 4 + (BH >>> 2 & 7), tH = zH[EH] + (BH >>> 5 << 8), EH += 1;
              break;
            case 2:
              if (EH + 1 >= CH) return !1;
              SH = 1 + (BH >>> 2), tH = zH[EH] + (zH[EH + 1] << 8), EH += 2;
              break;
            case 3:
              if (EH + 3 >= CH) return !1;
              SH = 1 + (BH >>> 2), tH = zH[EH] + (zH[EH + 1] << 8) + (zH[EH + 2] << 16) + (zH[EH + 3] << 24), EH += 4
          }
          if (0 === tH || tH > XH) return !1;
          rH(HH, XH, tH, SH), XH += SH
        } return !0
    }, BH.d = SH
  },
  37014: HH => {
    HH.exports = function(HH, BH, LH, AH) {
      var rH = self || window;
      try {
        try {
          var SH;
          try {
            SH = new rH.Blob([HH])
          } catch (CH) {
            (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
          }
          var hH = rH.URL || rH.webkitURL,
            tH = hH.createObjectURL(SH),
            zH = new rH[BH](tH, LH);
          return hH.revokeObjectURL(tH), zH
        } catch (CH) {
          return new rH[BH]("data:application/javascript,".concat(encodeURIComponent(HH)), LH)
        }
      } catch (CH) {
        if (!AH) throw Error("Inline worker is not supported");
        return new rH[BH](AH, LH)
      }
    }
  },
  40838: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      h: () => rH,
      j: () => CH,
      n: () => YH,
      o: () => hH,
      q: () => uH
    });
    var AH = LH(40847);
    const rH = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      SH = [-1, 1, 2, 3, 4, 5, 6, 8],
      hH = HH => {
        if (!HH || HH.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const BH = new AH.e(HH),
          LH = tH(BH),
          {
            frequencyIndex: rH,
            sampleRate: hH
          } = zH(BH),
          CH = BH.readBits(4);
        let EH = null;
        CH >= 1 && CH <= 7 && (EH = SH[CH]);
        let XH = LH,
          GH = !1,
          YH = hH;
        if (5 === LH || 29 === LH) GH = 29 === LH, YH = zH(BH).sampleRate, XH = tH(BH), 22 === XH && BH.skipBits(4);
        else
          for (; BH.getBitsLeft() > 15;) {
            const HH = BH.pos;
            if (695 === BH.readBits(11)) {
              5 === tH(BH) && BH.readBits(1) && (YH = zH(BH).sampleRate, BH.getBitsLeft() > 11 && 1352 === BH.readBits(11) && (GH = !!BH.readBits(1)));
              break
            }
            BH.pos = HH + 1
          }
        return null !== EH && EH > 1 && (GH = !1), {
          objectType: LH,
          coreObjectType: XH,
          frequencyIndex: rH,
          channelConfiguration: CH,
          outputSampleRate: YH,
          outputNumberOfChannels: GH && 1 === EH ? 2 : EH
        }
      },
      tH = HH => {
        const BH = HH.readBits(5);
        return 31 === BH ? 32 + HH.readBits(6) : BH
      },
      zH = HH => {
        const BH = HH.readBits(4);
        return 15 === BH ? {
          frequencyIndex: BH,
          sampleRate: HH.readBits(24)
        } : {
          frequencyIndex: BH,
          sampleRate: BH < rH.length ? rH[BH] : null
        }
      },
      CH = HH => {
        const BH = 5 === HH.objectType || 29 === HH.objectType,
          LH = 29 === HH.objectType,
          rH = BH ? HH.outputSampleRate / 2 : HH.outputSampleRate,
          hH = LH ? 1 : HH.outputNumberOfChannels,
          tH = SH.indexOf(hH);
        if (-1 === tH) throw new TypeError(`Unsupported number of channels: ${HH.outputNumberOfChannels}`);
        let zH = 16;
        HH.objectType >= 32 && (zH += 6), 15 === GH(rH) && (zH += 24), BH && (zH += 9, 15 === GH(HH.outputSampleRate) && (zH += 24));
        const CH = Math.ceil(zH / 8),
          YH = new Uint8Array(CH),
          uH = new AH.e(YH);
        return EH(uH, HH.objectType), XH(uH, rH), uH.writeBits(4, tH), BH && (XH(uH, HH.outputSampleRate), EH(uH, 2)), uH.writeBits(3, 0), YH
      },
      EH = (HH, BH) => {
        BH < 32 ? HH.writeBits(5, BH) : (HH.writeBits(5, 31), HH.writeBits(6, BH - 32))
      },
      XH = (HH, BH) => {
        const LH = GH(BH);
        HH.writeBits(4, LH), 15 === LH && HH.writeBits(24, BH)
      },
      GH = HH => {
        const BH = rH.indexOf(HH);
        return -1 === BH ? 15 : BH
      },
      YH = HH => {
        const BH = new Uint8Array(7),
          LH = new AH.e(BH),
          {
            coreObjectType: rH,
            frequencyIndex: SH,
            channelConfiguration: hH
          } = HH,
          tH = rH - 1;
        return LH.writeBits(12, 4095), LH.writeBits(1, 0), LH.writeBits(2, 0), LH.writeBits(1, 1), LH.writeBits(2, tH), LH.writeBits(4, SH), LH.writeBits(1, 0), LH.writeBits(3, hH), LH.writeBits(1, 0), LH.writeBits(1, 0), LH.writeBits(1, 0), LH.writeBits(1, 0), LH.skipBits(13), LH.writeBits(11, 2047), LH.writeBits(2, 0), {
          header: BH,
          bitstream: LH
        }
      },
      uH = (HH, BH) => {
        HH.pos = 30, HH.writeBits(13, BH)
      }
  },
  40847: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      constructor(HH) {
        this.bytes = HH, this.pos = 0
      }
      seekToByte(HH) {
        this.pos = 8 * HH
      }
      readBit() {
        const HH = Math.floor(this.pos / 8),
          BH = this.bytes[HH] ?? 0,
          LH = 7 - (7 & this.pos),
          AH = (BH & 1 << LH) >> LH;
        return this.pos++, AH
      }
      readBits(HH) {
        if (1 === HH) return this.readBit();
        let BH = 0;
        for (let LH = 0; LH < HH; LH++) BH <<= 1, BH |= this.readBit();
        return BH
      }
      writeBits(HH, BH) {
        const LH = this.pos + HH;
        for (let AH = this.pos; AH < LH; AH++) {
          const HH = Math.floor(AH / 8);
          let rH = this.bytes[HH];
          const SH = 7 - (7 & AH);
          rH &= ~(1 << SH), rH |= (BH & 1 << LH - AH - 1) >> LH - AH - 1 << SH, this.bytes[HH] = rH
        }
        this.pos = LH
      }
      copyBits(HH, BH) {
        let LH = 0;
        for (; LH < HH - 7; LH += 8) this.writeBits(8, BH.readBits(8));
        const AH = HH - LH;
        AH > 0 && this.writeBits(AH, BH.readBits(AH))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const HH = this.pos / 8,
          BH = this.bytes[HH] ?? 0;
        return this.pos += 8, BH
      }
      skipBits(HH) {
        this.pos += HH
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const HH = new AH(this.bytes);
        return HH.pos = this.pos, HH
      }
    }
  },
  40858: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => yH,
      d: () => zH,
      f: () => HB,
      i: () => JH,
      l: () => CH,
      p: () => DH,
      q: () => uB,
      s: () => MH,
      t: () => xH,
      x: () => iH,
      z: () => TH,
      A: () => gH,
      B: () => sH,
      F: () => FH,
      D: () => vH,
      G: () => mH,
      J: () => uH,
      L: () => kH,
      O: () => jH,
      Q: () => GH,
      S: () => YH,
      W: () => pH,
      X: () => XB,
      _: () => LB,
      bb: () => aH,
      db: () => wH,
      fb: () => dH,
      jb: () => PH,
      nb: () => qH
    });
    var AH = LH(40849),
      rH = LH(40820),
      SH = LH(40866);
    const hH = [48e3, 44100, 32e3],
      tH = [24e3, 22050, 16e3];
    var zH, CH, EH = LH(40847),
      XH = LH(40872);
    ! function(HH) {
      HH[HH.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", HH[HH.SLICE_DPA = 2] = "SLICE_DPA", HH[HH.SLICE_DPB = 3] = "SLICE_DPB", HH[HH.SLICE_DPC = 4] = "SLICE_DPC", HH[HH.IDR = 5] = "IDR", HH[HH.SEI = 6] = "SEI", HH[HH.SPS = 7] = "SPS", HH[HH.PPS = 8] = "PPS", HH[HH.AUD = 9] = "AUD", HH[HH.SPS_EXT = 13] = "SPS_EXT"
    }(zH || (zH = {})),
    function(HH) {
      HH[HH.RASL_N = 8] = "RASL_N", HH[HH.RASL_R = 9] = "RASL_R", HH[HH.BLA_W_LP = 16] = "BLA_W_LP", HH[HH.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", HH[HH.VPS_NUT = 32] = "VPS_NUT", HH[HH.SPS_NUT = 33] = "SPS_NUT", HH[HH.PPS_NUT = 34] = "PPS_NUT", HH[HH.AUD_NUT = 35] = "AUD_NUT", HH[HH.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", HH[HH.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(CH || (CH = {}));
    const GH = function*(HH) {
        let BH = 0,
          LH = -1;
        for (; BH < HH.length - 2;) {
          const AH = HH.indexOf(0, BH);
          if (-1 === AH || AH >= HH.length - 2) break;
          BH = AH;
          let rH = 0;
          BH + 3 < HH.length && 0 === HH[BH + 1] && 0 === HH[BH + 2] && 1 === HH[BH + 3] ? rH = 4 : 0 === HH[BH + 1] && 1 === HH[BH + 2] && (rH = 3), 0 !== rH ? (-1 !== LH && BH > LH && (yield {
            offset: LH,
            length: BH - LH
          }), LH = BH + rH, BH = LH) : BH++
        } - 1 !== LH && LH < HH.length && (yield {
          offset: LH,
          length: HH.length - LH
        })
      },
      YH = function*(HH, BH) {
        let LH = 0;
        const AH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
        for (; LH + BH <= HH.length;) {
          let HH;
          1 === BH ? HH = AH.getUint8(LH) : 2 === BH ? HH = AH.getUint16(LH, !1) : 3 === BH ? HH = (0, rH.pb)(AH, LH, !1) : ((0, rH.J)(4 === BH), HH = AH.getUint32(LH, !1)), LH += BH, yield {
            offset: LH,
            length: HH
          }, LH += HH
        }
      },
      uH = HH => 31 & HH,
      QH = HH => {
        const BH = [],
          LH = HH.length;
        for (let AH = 0; AH < LH; AH++) AH + 2 < LH && 0 === HH[AH] && 0 === HH[AH + 1] && 3 === HH[AH + 2] ? (BH.push(0, 0), AH += 2) : BH.push(HH[AH]);
        return new Uint8Array(BH)
      },
      WH = new Uint8Array([0, 0, 0, 1]),
      MH = HH => {
        const BH = HH.reduce(((HH, BH) => HH + WH.byteLength + BH.byteLength), 0),
          LH = new Uint8Array(BH);
        let AH = 0;
        for (const rH of HH) LH.set(WH, AH), AH += WH.byteLength, LH.set(rH, AH), AH += rH.byteLength;
        return LH
      },
      xH = (HH, BH) => {
        const LH = HH.reduce(((HH, LH) => HH + BH + LH.byteLength), 0),
          AH = new Uint8Array(LH);
        let SH = 0;
        for (const hH of HH) {
          const HH = new DataView(AH.buffer, AH.byteOffset, AH.byteLength);
          switch (BH) {
            case 1:
              HH.setUint8(SH, hH.byteLength);
              break;
            case 2:
              HH.setUint16(SH, hH.byteLength, !1);
              break;
            case 3:
              (0, rH.Qc)(HH, SH, hH.byteLength, !1);
              break;
            case 4:
              HH.setUint32(SH, hH.byteLength, !1)
          }
          SH += BH, AH.set(hH, SH), SH += hH.byteLength
        }
        return AH
      },
      vH = HH => {
        try {
          const BH = [],
            LH = [],
            AH = [];
          for (const rH of GH(HH)) {
            const SH = HH.subarray(rH.offset, rH.offset + rH.length),
              hH = uH(SH[0]);
            hH === zH.SPS ? BH.push(SH) : hH === zH.PPS ? LH.push(SH) : hH === zH.SPS_EXT && AH.push(SH)
          }
          if (0 === BH.length) return null;
          if (0 === LH.length) return null;
          const SH = BH[0],
            hH = VH(SH);
          (0, rH.J)(null !== hH);
          const tH = 100 === hH.profileIdc || 110 === hH.profileIdc || 122 === hH.profileIdc || 144 === hH.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: hH.profileIdc,
            profileCompatibility: hH.constraintFlags,
            avcLevelIndication: hH.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: BH,
            pictureParameterSets: LH,
            chromaFormat: tH ? hH.chromaFormatIdc : null,
            bitDepthLumaMinus8: tH ? hH.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: tH ? hH.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: tH ? AH : null
          }
        } catch (BH) {
          return SH.c._error("Error building AVC Decoder Configuration Record:", BH), null
        }
      },
      PH = HH => {
        const BH = [];
        BH.push(HH.configurationVersion), BH.push(HH.avcProfileIndication), BH.push(HH.profileCompatibility), BH.push(HH.avcLevelIndication), BH.push(252 | 3 & HH.lengthSizeMinusOne), BH.push(224 | 31 & HH.sequenceParameterSets.length);
        for (const LH of HH.sequenceParameterSets) {
          const HH = LH.byteLength;
          BH.push(HH >> 8), BH.push(255 & HH);
          for (let AH = 0; AH < HH; AH++) BH.push(LH[AH])
        }
        BH.push(HH.pictureParameterSets.length);
        for (const LH of HH.pictureParameterSets) {
          const HH = LH.byteLength;
          BH.push(HH >> 8), BH.push(255 & HH);
          for (let AH = 0; AH < HH; AH++) BH.push(LH[AH])
        }
        if ((100 === HH.avcProfileIndication || 110 === HH.avcProfileIndication || 122 === HH.avcProfileIndication || 144 === HH.avcProfileIndication) && null !== HH.chromaFormat) {
          (0, rH.J)(null !== HH.bitDepthLumaMinus8), (0, rH.J)(null !== HH.bitDepthChromaMinus8), (0, rH.J)(null !== HH.sequenceParameterSetExt), BH.push(252 | 3 & HH.chromaFormat), BH.push(248 | 7 & HH.bitDepthLumaMinus8), BH.push(248 | 7 & HH.bitDepthChromaMinus8), BH.push(HH.sequenceParameterSetExt.length);
          for (const LH of HH.sequenceParameterSetExt) {
            const HH = LH.byteLength;
            BH.push(HH >> 8), BH.push(255 & HH);
            for (let AH = 0; AH < HH; AH++) BH.push(LH[AH])
          }
        }
        return new Uint8Array(BH)
      },
      TH = HH => {
        try {
          const BH = (0, rH.ed)(HH);
          let LH = 0;
          const AH = BH.getUint8(LH++),
            SH = BH.getUint8(LH++),
            hH = BH.getUint8(LH++),
            tH = BH.getUint8(LH++),
            zH = 3 & BH.getUint8(LH++),
            CH = 31 & BH.getUint8(LH++),
            EH = [];
          for (let rH = 0; rH < CH; rH++) {
            const AH = BH.getUint16(LH, !1);
            LH += 2, EH.push(HH.subarray(LH, LH + AH)), LH += AH
          }
          const XH = BH.getUint8(LH++),
            GH = [];
          for (let rH = 0; rH < XH; rH++) {
            const AH = BH.getUint16(LH, !1);
            LH += 2, GH.push(HH.subarray(LH, LH + AH)), LH += AH
          }
          const YH = {
            configurationVersion: AH,
            avcProfileIndication: SH,
            profileCompatibility: hH,
            avcLevelIndication: tH,
            lengthSizeMinusOne: zH,
            sequenceParameterSets: EH,
            pictureParameterSets: GH,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === SH || 110 === SH || 122 === SH || 144 === SH) && LH + 4 <= HH.length) {
            const AH = 3 & BH.getUint8(LH++),
              rH = 7 & BH.getUint8(LH++),
              SH = 7 & BH.getUint8(LH++),
              hH = BH.getUint8(LH++);
            YH.chromaFormat = AH, YH.bitDepthLumaMinus8 = rH, YH.bitDepthChromaMinus8 = SH;
            const tH = [];
            for (let zH = 0; zH < hH; zH++) {
              const AH = BH.getUint16(LH, !1);
              LH += 2, tH.push(HH.subarray(LH, LH + AH)), LH += AH
            }
            YH.sequenceParameterSetExt = tH
          }
          return YH
        } catch (BH) {
          return SH.c._error("Error deserializing AVC Decoder Configuration Record:", BH), null
        }
      },
      UH = {
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
      VH = HH => {
        try {
          const BH = QH(HH),
            LH = new EH.e(BH);
          LH.skipBits(1), LH.skipBits(2);
          if (7 !== LH.readBits(5)) return null;
          const SH = LH.readAlignedByte(),
            hH = LH.readAlignedByte(),
            tH = LH.readAlignedByte();
          (0, rH.qc)(LH);
          let zH = 1,
            CH = 0,
            XH = 0,
            GH = 0;
          if (100 === SH || 110 === SH || 122 === SH || 244 === SH || 44 === SH || 83 === SH || 86 === SH || 118 === SH || 128 === SH) {
            zH = (0, rH.qc)(LH), 3 === zH && (GH = LH.readBits(1)), CH = (0, rH.qc)(LH), XH = (0, rH.qc)(LH), LH.skipBits(1);
            if (LH.readBits(1))
              for (let HH = 0; HH < (3 !== zH ? 8 : 12); HH++) {
                if (LH.readBits(1)) {
                  const BH = HH < 6 ? 16 : 64;
                  let AH = 8,
                    SH = 8;
                  for (let HH = 0; HH < BH; HH++) {
                    if (0 !== SH) {
                      SH = (AH + (0, rH.uc)(LH) + 256) % 256
                    }
                    AH = 0 === SH ? AH : SH
                  }
                }
              }
          }(0, rH.qc)(LH);
          const YH = (0, rH.qc)(LH);
          if (0 === YH)(0, rH.qc)(LH);
          else if (1 === YH) {
            LH.skipBits(1), (0, rH.uc)(LH), (0, rH.uc)(LH);
            const HH = (0, rH.qc)(LH);
            for (let BH = 0; BH < HH; BH++)(0, rH.uc)(LH)
          }(0, rH.qc)(LH), LH.skipBits(1);
          const uH = (0, rH.qc)(LH),
            WH = (0, rH.qc)(LH),
            MH = 16 * (uH + 1),
            xH = 16 * (WH + 1);
          let vH = MH,
            PH = xH;
          const TH = LH.readBits(1);
          TH || LH.skipBits(1), LH.skipBits(1);
          if (LH.readBits(1)) {
            const HH = (0, rH.qc)(LH),
              BH = (0, rH.qc)(LH),
              AH = (0, rH.qc)(LH),
              SH = (0, rH.qc)(LH);
            let hH, tH;
            if (0 === (0 === GH ? zH : 0)) hH = 1, tH = 2 - TH;
            else {
              hH = 3 === zH ? 1 : 2, tH = (1 === zH ? 2 : 1) * (2 - TH)
            }
            vH -= hH * (HH + BH), PH -= tH * (AH + SH)
          }
          let VH = 2,
            bH = 2,
            kH = 2,
            mH = 0,
            oH = {
              num: 1,
              den: 1
            },
            IH = null,
            fH = null,
            lH = null,
            KH = null;
          const cH = LH.pos;
          if (LH.readBits(1)) {
            if (LH.readBits(1)) {
              const HH = LH.readBits(8);
              if (255 === HH) oH = {
                num: LH.readBits(16),
                den: LH.readBits(16)
              };
              else {
                const BH = UH[HH];
                BH && (oH = BH)
              }
            }
            LH.readBits(1) && LH.skipBits(1);
            if (LH.readBits(1)) {
              LH.skipBits(3), mH = LH.readBits(1);
              LH.readBits(1) && (VH = LH.readBits(8), bH = LH.readBits(8), kH = LH.readBits(8))
            }
            LH.readBits(1) && ((0, rH.qc)(LH), (0, rH.qc)(LH));
            LH.readBits(1) && (LH.skipBits(32), LH.skipBits(32), LH.skipBits(1));
            const HH = LH.readBits(1);
            HH && OH(LH);
            const BH = LH.readBits(1);
            BH && OH(LH), (HH || BH) && LH.skipBits(1), LH.skipBits(1), lH = LH.pos, KH = LH.readBits(1), KH && (LH.skipBits(1), (0, rH.qc)(LH), (0, rH.qc)(LH), (0, rH.qc)(LH), (0, rH.qc)(LH), IH = (0, rH.qc)(LH), fH = (0, rH.qc)(LH))
          }
          if (null === IH) {
            (0, rH.J)(null === fH);
            if (44 !== SH && 86 !== SH && 100 !== SH && 110 !== SH && 122 !== SH && 244 !== SH || !(16 & hH)) {
              const HH = uH + 1,
                BH = (2 - TH) * (WH + 1),
                LH = AH.d.find((HH => HH.level >= tH)) ?? (0, rH.Xb)(AH.d),
                SH = Math.min(Math.floor(LH.maxDpbMbs / (HH * BH)), 16);
              IH = SH, fH = SH
            } else IH = 0, fH = 0
          }
          return (0, rH.J)(null !== fH), {
            emulationUnpreventedBytes: BH,
            profileIdc: SH,
            constraintFlags: hH,
            levelIdc: tH,
            frameMbsOnlyFlag: TH,
            chromaFormatIdc: zH,
            bitDepthLumaMinus8: CH,
            bitDepthChromaMinus8: XH,
            codedWidth: MH,
            codedHeight: xH,
            displayWidth: vH,
            displayHeight: PH,
            pixelAspectRatio: oH,
            colourPrimaries: VH,
            matrixCoefficients: kH,
            transferCharacteristics: bH,
            fullRangeFlag: mH,
            numReorderFrames: IH,
            maxDecFrameBuffering: fH,
            vuiParametersFlagBitOffset: cH,
            bitstreamRestrictionFlagBitOffset: lH,
            bitstreamRestrictionFlag: KH
          }
        } catch (BH) {
          return SH.c._error("Error parsing AVC SPS:", BH), null
        }
      },
      OH = HH => {
        const BH = (0, rH.qc)(HH);
        HH.skipBits(4), HH.skipBits(4);
        for (let LH = 0; LH <= BH; LH++)(0, rH.qc)(HH), (0, rH.qc)(HH), HH.skipBits(1);
        HH.skipBits(5), HH.skipBits(5), HH.skipBits(5), HH.skipBits(5)
      },
      bH = (HH, BH) => {
        if (BH.description) {
          const LH = 3 & (0, rH.id)(BH.description)[21];
          return YH(HH, LH + 1)
        }
        return GH(HH)
      },
      kH = HH => HH >> 1 & 63,
      mH = HH => {
        try {
          const BH = [],
            LH = [],
            AH = [],
            hH = [];
          for (const rH of GH(HH)) {
            const SH = HH.subarray(rH.offset, rH.offset + rH.length),
              tH = kH(SH[0]);
            tH === CH.VPS_NUT ? BH.push(SH) : tH === CH.SPS_NUT ? LH.push(SH) : tH === CH.PPS_NUT ? AH.push(SH) : tH !== CH.PREFIX_SEI_NUT && tH !== CH.SUFFIX_SEI_NUT || hH.push(SH)
          }
          if (0 === LH.length || 0 === AH.length) return null;
          const tH = (HH => {
            try {
              const BH = new EH.e(QH(HH));
              BH.skipBits(16), BH.readBits(4);
              const LH = BH.readBits(3),
                AH = BH.readBits(1),
                {
                  general_profile_space: SH,
                  general_tier_flag: hH,
                  general_profile_idc: tH,
                  general_profile_compatibility_flags: zH,
                  general_constraint_indicator_flags: CH,
                  general_level_idc: XH
                } = oH(BH, LH);
              (0, rH.qc)(BH);
              const GH = (0, rH.qc)(BH);
              let YH = 0;
              3 === GH && (YH = BH.readBits(1));
              const uH = (0, rH.qc)(BH),
                WH = (0, rH.qc)(BH);
              let MH = uH,
                xH = WH;
              if (BH.readBits(1)) {
                const HH = (0, rH.qc)(BH),
                  LH = (0, rH.qc)(BH),
                  AH = (0, rH.qc)(BH),
                  SH = (0, rH.qc)(BH);
                let hH = 1,
                  tH = 1;
                const zH = 0 === YH ? GH : 0;
                1 === zH ? (hH = 2, tH = 2) : 2 === zH && (hH = 2, tH = 1), MH -= (HH + LH) * hH, xH -= (AH + SH) * tH
              }
              const vH = (0, rH.qc)(BH),
                PH = (0, rH.qc)(BH);
              (0, rH.qc)(BH);
              const TH = BH.readBits(1);
              let UH = 0;
              for (let HH = TH ? 0 : LH; HH <= LH; HH++)(0, rH.qc)(BH), UH = (0, rH.qc)(BH), (0, rH.qc)(BH);
              (0, rH.qc)(BH), (0, rH.qc)(BH), (0, rH.qc)(BH), (0, rH.qc)(BH), (0, rH.qc)(BH), (0, rH.qc)(BH), BH.readBits(1) && BH.readBits(1) && IH(BH), BH.skipBits(1), BH.skipBits(1), BH.readBits(1) && (BH.skipBits(4), BH.skipBits(4), (0, rH.qc)(BH), (0, rH.qc)(BH), BH.skipBits(1));
              const VH = (0, rH.qc)(BH);
              if (fH(BH, VH), BH.readBits(1)) {
                const HH = (0, rH.qc)(BH);
                for (let LH = 0; LH < HH; LH++)(0, rH.qc)(BH), BH.skipBits(1)
              }
              BH.skipBits(1), BH.skipBits(1);
              let OH = 2,
                bH = 2,
                kH = 2,
                mH = 0,
                lH = 0,
                cH = {
                  num: 1,
                  den: 1
                };
              if (BH.readBits(1)) {
                const HH = KH(BH, LH);
                cH = HH.pixelAspectRatio, OH = HH.colourPrimaries, bH = HH.transferCharacteristics, kH = HH.matrixCoefficients, mH = HH.fullRangeFlag, lH = HH.minSpatialSegmentationIdc
              }
              return {
                displayWidth: MH,
                displayHeight: xH,
                pixelAspectRatio: cH,
                colourPrimaries: OH,
                transferCharacteristics: bH,
                matrixCoefficients: kH,
                fullRangeFlag: mH,
                maxDecFrameBuffering: UH + 1,
                spsMaxSubLayersMinus1: LH,
                spsTemporalIdNestingFlag: AH,
                generalProfileSpace: SH,
                generalTierFlag: hH,
                generalProfileIdc: tH,
                generalProfileCompatibilityFlags: zH,
                generalConstraintIndicatorFlags: CH,
                generalLevelIdc: XH,
                chromaFormatIdc: GH,
                bitDepthLumaMinus8: vH,
                bitDepthChromaMinus8: PH,
                minSpatialSegmentationIdc: lH
              }
            } catch (BH) {
              return SH.c._error("Error parsing HEVC SPS:", BH), null
            }
          })(LH[0]);
          if (!tH) return null;
          let zH = 0;
          if (AH.length > 0) {
            const HH = AH[0],
              BH = new EH.e(QH(HH));
            BH.skipBits(16), (0, rH.qc)(BH), (0, rH.qc)(BH), BH.skipBits(1), BH.skipBits(1), BH.skipBits(3), BH.skipBits(1), BH.skipBits(1), (0, rH.qc)(BH), (0, rH.qc)(BH), (0, rH.uc)(BH), BH.skipBits(1), BH.skipBits(1), BH.readBits(1) && (0, rH.qc)(BH), (0, rH.uc)(BH), (0, rH.uc)(BH), BH.skipBits(1), BH.skipBits(1), BH.skipBits(1), BH.skipBits(1);
            const LH = BH.readBits(1),
              SH = BH.readBits(1);
            zH = LH || SH ? LH && !SH ? 2 : !LH && SH ? 3 : 0 : 0
          }
          const XH = [...BH.length ? [{
            arrayCompleteness: 1,
            nalUnitType: CH.VPS_NUT,
            nalUnits: BH
          }] : [], ...LH.length ? [{
            arrayCompleteness: 1,
            nalUnitType: CH.SPS_NUT,
            nalUnits: LH
          }] : [], ...AH.length ? [{
            arrayCompleteness: 1,
            nalUnitType: CH.PPS_NUT,
            nalUnits: AH
          }] : [], ...hH.length ? [{
            arrayCompleteness: 1,
            nalUnitType: kH(hH[0][0]),
            nalUnits: hH
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: tH.generalProfileSpace,
            generalTierFlag: tH.generalTierFlag,
            generalProfileIdc: tH.generalProfileIdc,
            generalProfileCompatibilityFlags: tH.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: tH.generalConstraintIndicatorFlags,
            generalLevelIdc: tH.generalLevelIdc,
            minSpatialSegmentationIdc: tH.minSpatialSegmentationIdc,
            parallelismType: zH,
            chromaFormatIdc: tH.chromaFormatIdc,
            bitDepthLumaMinus8: tH.bitDepthLumaMinus8,
            bitDepthChromaMinus8: tH.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: tH.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: tH.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: XH
          }
        } catch (BH) {
          return SH.c._error("Error building HEVC Decoder Configuration Record:", BH), null
        }
      },
      oH = (HH, BH) => {
        const LH = HH.readBits(2),
          AH = HH.readBits(1),
          rH = HH.readBits(5);
        let SH = 0;
        for (let EH = 0; EH < 32; EH++) SH = SH << 1 | HH.readBits(1);
        const hH = new Uint8Array(6);
        for (let EH = 0; EH < 6; EH++) hH[EH] = HH.readBits(8);
        const tH = HH.readBits(8),
          zH = [],
          CH = [];
        for (let EH = 0; EH < BH; EH++) zH.push(HH.readBits(1)), CH.push(HH.readBits(1));
        if (BH > 0)
          for (let EH = BH; EH < 8; EH++) HH.skipBits(2);
        for (let EH = 0; EH < BH; EH++) zH[EH] && HH.skipBits(88), CH[EH] && HH.skipBits(8);
        return {
          general_profile_space: LH,
          general_tier_flag: AH,
          general_profile_idc: rH,
          general_profile_compatibility_flags: SH,
          general_constraint_indicator_flags: hH,
          general_level_idc: tH
        }
      },
      IH = HH => {
        for (let BH = 0; BH < 4; BH++)
          for (let LH = 0; LH < (3 === BH ? 2 : 6); LH++) {
            if (HH.readBits(1)) {
              const LH = Math.min(64, 1 << 4 + (BH << 1));
              BH > 1 && (0, rH.uc)(HH);
              for (let BH = 0; BH < LH; BH++)(0, rH.uc)(HH)
            } else(0, rH.qc)(HH)
          }
      },
      fH = (HH, BH) => {
        const LH = [];
        for (let AH = 0; AH < BH; AH++) LH[AH] = lH(HH, AH, BH, LH)
      },
      lH = (HH, BH, LH, AH) => {
        let SH = 0,
          hH = 0,
          tH = 0;
        if (0 !== BH && (hH = HH.readBits(1)), hH) {
          if (BH === LH) {
            tH = BH - ((0, rH.qc)(HH) + 1)
          } else tH = BH - 1;
          HH.readBits(1), (0, rH.qc)(HH);
          const hH = AH[tH] ?? 0;
          for (let BH = 0; BH <= hH; BH++) {
            HH.readBits(1) || HH.readBits(1)
          }
          SH = AH[tH]
        } else {
          const BH = (0, rH.qc)(HH),
            LH = (0, rH.qc)(HH);
          for (let AH = 0; AH < BH; AH++)(0, rH.qc)(HH), HH.readBits(1);
          for (let AH = 0; AH < LH; AH++)(0, rH.qc)(HH), HH.readBits(1);
          SH = BH + LH
        }
        return SH
      },
      KH = (HH, BH) => {
        let LH = 2,
          AH = 2,
          SH = 2,
          hH = 0,
          tH = 0,
          zH = {
            num: 1,
            den: 1
          };
        if (HH.readBits(1)) {
          const BH = HH.readBits(8);
          if (255 === BH) zH = {
            num: HH.readBits(16),
            den: HH.readBits(16)
          };
          else {
            const HH = UH[BH];
            HH && (zH = HH)
          }
        }
        return HH.readBits(1) && HH.readBits(1), HH.readBits(1) && (HH.readBits(3), hH = HH.readBits(1), HH.readBits(1) && (LH = HH.readBits(8), AH = HH.readBits(8), SH = HH.readBits(8))), HH.readBits(1) && ((0, rH.qc)(HH), (0, rH.qc)(HH)), HH.readBits(1), HH.readBits(1), HH.readBits(1), HH.readBits(1) && ((0, rH.qc)(HH), (0, rH.qc)(HH), (0, rH.qc)(HH), (0, rH.qc)(HH)), HH.readBits(1) && (HH.readBits(32), HH.readBits(32), HH.readBits(1) && (0, rH.qc)(HH), HH.readBits(1) && cH(HH, !0, BH)), HH.readBits(1) && (HH.readBits(1), HH.readBits(1), HH.readBits(1), tH = (0, rH.qc)(HH), (0, rH.qc)(HH), (0, rH.qc)(HH), (0, rH.qc)(HH), (0, rH.qc)(HH)), {
          pixelAspectRatio: zH,
          colourPrimaries: LH,
          transferCharacteristics: AH,
          matrixCoefficients: SH,
          fullRangeFlag: hH,
          minSpatialSegmentationIdc: tH
        }
      },
      cH = (HH, BH, LH) => {
        let AH = !1,
          SH = !1,
          hH = !1;
        BH && (AH = 1 === HH.readBits(1), SH = 1 === HH.readBits(1), (AH || SH) && (hH = 1 === HH.readBits(1), hH && (HH.readBits(8), HH.readBits(5), HH.readBits(1), HH.readBits(5)), HH.readBits(4), HH.readBits(4), hH && HH.readBits(4), HH.readBits(5), HH.readBits(5), HH.readBits(5)));
        for (let tH = 0; tH <= LH; tH++) {
          let BH = !0;
          1 === HH.readBits(1) || (BH = 1 === HH.readBits(1));
          let LH = !1;
          BH ? (0, rH.qc)(HH) : LH = 1 === HH.readBits(1);
          let tH = 1;
          if (!LH) {
            tH = (0, rH.qc)(HH) + 1
          }
          AH && eH(HH, tH, hH), SH && eH(HH, tH, hH)
        }
      },
      eH = (HH, BH, LH) => {
        for (let AH = 0; AH < BH; AH++)(0, rH.qc)(HH), (0, rH.qc)(HH), LH && ((0, rH.qc)(HH), (0, rH.qc)(HH)), HH.readBits(1)
      },
      qH = HH => {
        const BH = [];
        BH.push(HH.configurationVersion), BH.push((3 & HH.generalProfileSpace) << 6 | (1 & HH.generalTierFlag) << 5 | 31 & HH.generalProfileIdc), BH.push(HH.generalProfileCompatibilityFlags >>> 24 & 255), BH.push(HH.generalProfileCompatibilityFlags >>> 16 & 255), BH.push(HH.generalProfileCompatibilityFlags >>> 8 & 255), BH.push(255 & HH.generalProfileCompatibilityFlags), BH.push(...HH.generalConstraintIndicatorFlags), BH.push(255 & HH.generalLevelIdc), BH.push(240 | HH.minSpatialSegmentationIdc >> 8 & 15), BH.push(255 & HH.minSpatialSegmentationIdc), BH.push(252 | 3 & HH.parallelismType), BH.push(252 | 3 & HH.chromaFormatIdc), BH.push(248 | 7 & HH.bitDepthLumaMinus8), BH.push(248 | 7 & HH.bitDepthChromaMinus8), BH.push(HH.avgFrameRate >> 8 & 255), BH.push(255 & HH.avgFrameRate), BH.push((3 & HH.constantFrameRate) << 6 | (7 & HH.numTemporalLayers) << 3 | (1 & HH.temporalIdNested) << 2 | 3 & HH.lengthSizeMinusOne), BH.push(255 & HH.arrays.length);
        for (const LH of HH.arrays) {
          BH.push((1 & LH.arrayCompleteness) << 7 | 63 & LH.nalUnitType), BH.push(LH.nalUnits.length >> 8 & 255), BH.push(255 & LH.nalUnits.length);
          for (const HH of LH.nalUnits) {
            BH.push(HH.length >> 8 & 255), BH.push(255 & HH.length);
            for (let LH = 0; LH < HH.length; LH++) BH.push(HH[LH])
          }
        }
        return new Uint8Array(BH)
      },
      gH = HH => {
        try {
          const BH = (0, rH.ed)(HH);
          let LH = 0;
          const AH = BH.getUint8(LH++),
            SH = BH.getUint8(LH++),
            hH = SH >> 6 & 3,
            tH = SH >> 5 & 1,
            zH = 31 & SH,
            CH = BH.getUint32(LH, !1);
          LH += 4;
          const EH = HH.subarray(LH, LH + 6);
          LH += 6;
          const XH = BH.getUint8(LH++),
            GH = (15 & BH.getUint8(LH++)) << 8 | BH.getUint8(LH++),
            YH = 3 & BH.getUint8(LH++),
            uH = 3 & BH.getUint8(LH++),
            QH = 7 & BH.getUint8(LH++),
            WH = 7 & BH.getUint8(LH++),
            MH = BH.getUint16(LH, !1);
          LH += 2;
          const xH = BH.getUint8(LH++),
            vH = xH >> 6 & 3,
            PH = xH >> 3 & 7,
            TH = xH >> 2 & 1,
            UH = 3 & xH,
            VH = BH.getUint8(LH++),
            OH = [];
          for (let rH = 0; rH < VH; rH++) {
            const AH = BH.getUint8(LH++),
              rH = AH >> 7 & 1,
              SH = 63 & AH,
              hH = BH.getUint16(LH, !1);
            LH += 2;
            const tH = [];
            for (let zH = 0; zH < hH; zH++) {
              const AH = BH.getUint16(LH, !1);
              LH += 2, tH.push(HH.subarray(LH, LH + AH)), LH += AH
            }
            OH.push({
              arrayCompleteness: rH,
              nalUnitType: SH,
              nalUnits: tH
            })
          }
          return {
            configurationVersion: AH,
            generalProfileSpace: hH,
            generalTierFlag: tH,
            generalProfileIdc: zH,
            generalProfileCompatibilityFlags: CH,
            generalConstraintIndicatorFlags: EH,
            generalLevelIdc: XH,
            minSpatialSegmentationIdc: GH,
            parallelismType: YH,
            chromaFormatIdc: uH,
            bitDepthLumaMinus8: QH,
            bitDepthChromaMinus8: WH,
            avgFrameRate: MH,
            constantFrameRate: vH,
            numTemporalLayers: PH,
            temporalIdNested: TH,
            lengthSizeMinusOne: UH,
            arrays: OH
          }
        } catch (BH) {
          return SH.c._error("Error deserializing HEVC Decoder Configuration Record:", BH), null
        }
      };
    var NH;
    ! function(HH) {
      HH[HH.audAllowed = 0] = "audAllowed", HH[HH.beforeFirstVcl = 1] = "beforeFirstVcl", HH[HH.afterFirstVcl = 2] = "afterFirstVcl", HH[HH.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", HH[HH.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(NH || (NH = {}));
    const RH = {
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
      jH = HH => {
        const BH = new EH.e(HH);
        if (2 !== BH.readBits(2)) return null;
        const LH = BH.readBits(1),
          SH = (BH.readBits(1) << 1) + LH;
        3 === SH && BH.skipBits(1);
        if (1 === BH.readBits(1)) return null;
        if (0 !== BH.readBits(1)) return null;
        BH.skipBits(2);
        if (4817730 !== BH.readBits(24)) return null;
        let hH = 8;
        if (SH >= 2) {
          hH = BH.readBits(1) ? 12 : 10
        }
        const tH = BH.readBits(3);
        let zH = 0,
          CH = 0;
        if (7 !== tH) {
          if (CH = BH.readBits(1), 1 === SH || 3 === SH) {
            const HH = BH.readBits(1),
              LH = BH.readBits(1);
            zH = HH || LH ? HH && !LH ? 2 : 1 : 3, BH.skipBits(1)
          } else zH = 1
        } else zH = 3, CH = 1;
        const XH = (BH.readBits(16) + 1) * (BH.readBits(16) + 1);
        let GH = (0, rH.Xb)(AH.t).level;
        for (const rH of AH.t)
          if (XH <= rH.maxPictureSize) {
            GH = rH.level;
            break
          } const YH = RH[tH];
        return {
          profile: SH,
          level: GH,
          bitDepth: hH,
          chromaSubsampling: zH,
          videoFullRangeFlag: CH,
          colourPrimaries: YH?.colourPrimaries ?? 2,
          transferCharacteristics: YH?.transferCharacteristics ?? 2,
          matrixCoefficients: YH?.matrixCoefficients ?? 2
        }
      },
      nH = function*(HH) {
        const BH = new EH.e(HH),
          LH = () => {
            let HH = 0;
            for (let LH = 0; LH < 8; LH++) {
              const AH = BH.readAlignedByte();
              if (HH += (127 & AH) * 2 ** (7 * LH), !(128 & AH)) break;
              if (7 === LH && 128 & AH) return null
            }
            return HH > 2 ** 32 - 1 ? null : HH
          };
        for (; BH.getBitsLeft() >= 8;) {
          BH.skipBits(1);
          const AH = BH.readBits(4),
            SH = BH.readBits(1),
            hH = BH.readBits(1);
          let tH;
          if (BH.skipBits(1), SH && BH.skipBits(8), hH) {
            const HH = LH();
            if (null === HH) return;
            tH = HH
          } else tH = Math.floor(BH.getBitsLeft() / 8);
          (0, rH.J)(BH.pos % 8 === 0), yield {
            type: AH,
            data: HH.subarray(BH.pos / 8, BH.pos / 8 + tH)
          }, BH.skipBits(8 * tH)
        }
      },
      FH = HH => {
        for (const {
            type: BH,
            data: LH
          }
          of nH(HH)) {
          if (1 !== BH) continue;
          const HH = new EH.e(LH),
            AH = HH.readBits(3),
            rH = (HH.readBits(1), HH.readBits(1));
          let SH = 0,
            hH = 0,
            tH = 0;
          if (rH) SH = HH.readBits(5);
          else {
            let BH = 0;
            if (HH.readBits(1)) {
              HH.skipBits(32), HH.skipBits(32);
              if (HH.readBits(1)) {
                let BH = 0;
                for (; BH < 32 && !HH.readBits(1);) BH++;
                BH < 32 && HH.skipBits(BH)
              }
              BH = HH.readBits(1), BH && (tH = HH.readBits(5), HH.skipBits(32), HH.skipBits(5), HH.skipBits(5))
            }
            const LH = HH.readBits(1),
              AH = HH.readBits(5);
            for (let rH = 0; rH <= AH; rH++) {
              HH.skipBits(12);
              const AH = HH.readBits(5);
              if (0 === rH && (SH = AH), AH > 7) {
                const BH = HH.readBits(1);
                0 === rH && (hH = BH)
              }
              if (BH) {
                if (HH.readBits(1)) {
                  const BH = tH + 1;
                  HH.skipBits(BH), HH.skipBits(BH), HH.skipBits(1)
                }
              }
              if (LH) {
                HH.readBits(1) && HH.skipBits(4)
              }
            }
          }
          const zH = HH.readBits(4),
            CH = HH.readBits(4),
            XH = zH + 1;
          HH.skipBits(XH);
          const GH = CH + 1;
          HH.skipBits(GH);
          let YH = 0;
          if (YH = rH ? 0 : HH.readBits(1), YH && (HH.skipBits(4), HH.skipBits(3)), HH.skipBits(1), HH.skipBits(1), HH.skipBits(1), !rH) {
            HH.skipBits(1), HH.skipBits(1), HH.skipBits(1), HH.skipBits(1);
            const BH = HH.readBits(1);
            BH && (HH.skipBits(1), HH.skipBits(1));
            let LH = 0;
            if (LH = HH.readBits(1) ? 2 : HH.readBits(1), LH > 0) {
              HH.readBits(1) || HH.skipBits(1)
            }
            BH && HH.skipBits(3)
          }
          HH.skipBits(1), HH.skipBits(1), HH.skipBits(1);
          const uH = HH.readBits(1);
          let QH = 8;
          if (2 === AH && uH) {
            QH = HH.readBits(1) ? 12 : 10
          } else AH <= 2 && (QH = uH ? 10 : 8);
          let WH = 0;
          1 !== AH && (WH = HH.readBits(1));
          let MH = 2,
            xH = 2,
            vH = 2;
          HH.readBits(1) && (MH = HH.readBits(8), xH = HH.readBits(8), vH = HH.readBits(8));
          let PH = 0,
            TH = 1,
            UH = 1,
            VH = 0;
          return WH ? PH = HH.readBits(1) : 1 === MH && 13 === xH && 0 === vH ? (PH = 1, TH = 0, UH = 0) : (PH = HH.readBits(1), 0 === AH ? (TH = 1, UH = 1) : 1 === AH ? (TH = 0, UH = 0) : 12 === QH ? (TH = HH.readBits(1), UH = TH ? HH.readBits(1) : 0) : (TH = 1, UH = 0), TH && UH && (VH = HH.readBits(2))), {
            profile: AH,
            level: SH,
            tier: hH,
            bitDepth: QH,
            monochrome: WH,
            chromaSubsamplingX: TH,
            chromaSubsamplingY: UH,
            chromaSamplePosition: VH,
            videoFullRangeFlag: PH,
            colourPrimaries: MH,
            transferCharacteristics: xH,
            matrixCoefficients: vH
          }
        }
        return null
      },
      DH = HH => 2 !== HH.colourPrimaries || 2 !== HH.transferCharacteristics || 2 !== HH.matrixCoefficients,
      wH = HH => {
        const BH = (0, rH.ed)(HH),
          LH = BH.getUint8(9),
          AH = BH.getUint16(10, !0),
          SH = BH.getUint32(12, !0),
          hH = BH.getInt16(16, !0),
          tH = BH.getUint8(18);
        let zH = null;
        return tH && (zH = HH.subarray(19, 21 + LH)), {
          outputChannelCount: LH,
          preSkip: AH,
          inputSampleRate: SH,
          outputGain: hH,
          channelMappingFamily: tH,
          channelMappingTable: zH
        }
      },
      ZH = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      dH = HH => {
        const BH = HH[0] >> 3,
          LH = 3 & HH[0];
        let AH;
        return AH = 0 === LH ? 1 : 1 === LH || 2 === LH ? 2 : 63 & HH[1], {
          durationInSamples: ZH[BH] * AH
        }
      },
      aH = HH => {
        if (HH.length < 7) throw new Error("Setup header is too short.");
        if (5 !== HH[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...HH.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const BH = HH.length,
          LH = new Uint8Array(BH);
        for (let EH = 0; EH < BH; EH++) LH[EH] = HH[BH - 1 - EH];
        const AH = new EH.e(LH);
        let rH = 0;
        for (; AH.getBitsLeft() > 97;)
          if (1 === AH.readBits(1)) {
            rH = AH.pos;
            break
          } if (0 === rH) throw new Error("Invalid Setup header: framing bit not found.");
        let SH = 0,
          hH = !1,
          tH = 0;
        for (; AH.getBitsLeft() >= 97;) {
          const HH = AH.pos,
            BH = AH.readBits(8),
            LH = AH.readBits(16),
            rH = AH.readBits(16);
          if (BH > 63 || 0 !== LH || 0 !== rH) {
            AH.pos = HH;
            break
          }
          if (AH.skipBits(1), SH++, SH > 64) break;
          AH.clone().readBits(6) + 1 === SH && (hH = !0, tH = SH)
        }
        if (!hH) throw new Error("Invalid Setup header: mode header not found.");
        if (tH > 63) throw new Error(`Unsupported mode count: ${tH}.`);
        const zH = tH;
        AH.pos = 0, AH.skipBits(rH);
        const CH = Array(zH).fill(0);
        for (let EH = zH - 1; EH >= 0; EH--) AH.skipBits(40), CH[EH] = AH.readBits(1);
        return {
          modeBlockflags: CH
        }
      },
      sH = (HH, BH, LH) => {
        switch (HH) {
          case "avc":
            for (const HH of ((HH, BH) => {
                if (BH.description) {
                  const LH = 3 & (0, rH.id)(BH.description)[4];
                  return YH(HH, LH + 1)
                }
                return GH(HH)
              })(LH, BH)) {
              const BH = LH[HH.offset],
                AH = uH(BH);
              if (AH >= zH.NON_IDR_SLICE && AH <= zH.SLICE_DPC) return "delta";
              if (AH === zH.IDR) return "key";
              if (AH === zH.SEI && !(0, rH.vb)()) {
                const BH = LH.subarray(HH.offset, HH.offset + HH.length),
                  AH = QH(BH);
                let SH = 1;
                do {
                  let HH = 0;
                  for (;;) {
                    const BH = AH[SH++];
                    if (void 0 === BH) break;
                    if (HH += BH, BH < 255) break
                  }
                  let BH = 0;
                  for (;;) {
                    const HH = AH[SH++];
                    if (void 0 === HH) break;
                    if (BH += HH, HH < 255) break
                  }
                  if (HH === 6) {
                    const HH = new EH.e(AH);
                    HH.pos = 8 * SH;
                    const BH = (0, rH.qc)(HH),
                      LH = HH.readBits(1);
                    if (0 === BH && 1 === LH) return "key"
                  }
                  SH += BH
                } while (SH < AH.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const HH of bH(LH, BH)) {
              const BH = kH(LH[HH.offset]);
              if (BH < CH.BLA_W_LP) return "delta";
              if (BH <= CH.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & LH[0]) ? "key" : "delta";
          case "vp9": {
            const HH = new EH.e(LH);
            if (2 !== HH.readBits(2)) return null;
            const BH = HH.readBits(1);
            3 === (HH.readBits(1) << 1) + BH && HH.skipBits(1);
            if (HH.readBits(1)) return null;
            return 0 === HH.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let HH = !1;
            for (const {
                type: BH,
                data: AH
              }
              of nH(LH))
              if (1 === BH) {
                const BH = new EH.e(AH);
                BH.skipBits(4), HH = !!BH.readBits(1)
              } else if (3 === BH || 6 === BH || 7 === BH) {
              if (HH) return "key";
              const BH = new EH.e(AH);
              if (BH.readBits(1)) return null;
              return 0 === BH.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, rH.G)(HH), (0, rH.J)(!1)
        }
      };
    var JH;
    ! function(HH) {
      HH[HH.STREAMINFO = 0] = "STREAMINFO", HH[HH.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", HH[HH.PICTURE = 6] = "PICTURE"
    }(JH || (JH = {}));
    const iH = (HH, BH, LH) => {
        const AH = [HH],
          SH = rH.$c.encode(XH.e);
        let hH = new Uint8Array(4 + SH.length),
          tH = new DataView(hH.buffer);
        tH.setUint32(0, SH.length, !0), hH.set(SH, 4), AH.push(hH);
        const zH = [],
          CH = (HH, BH) => {
            const LH = `${HH}=${BH}`,
              SH = rH.$c.encode(LH);
            hH = new Uint8Array(4 + SH.length), tH = new DataView(hH.buffer), tH.setUint32(0, SH.length, !0), hH.set(SH, 4), AH.push(hH), zH.push(HH)
          };
        for (const {
            key: XH,
            value: QH
          }
          of(0, rH.Vb)(BH)) switch (XH) {
          case "title":
            CH("TITLE", QH);
            break;
          case "description":
            CH("DESCRIPTION", QH);
            break;
          case "artist":
            CH("ARTIST", QH);
            break;
          case "album":
            CH("ALBUM", QH);
            break;
          case "albumArtist":
            CH("ALBUMARTIST", QH);
            break;
          case "genre":
            CH("GENRE", QH);
            break;
          case "date":
            CH("DATE", QH.toISOString().slice(0, 10));
            break;
          case "comment":
            CH("COMMENT", QH);
            break;
          case "lyrics":
            CH("LYRICS", QH);
            break;
          case "trackNumber":
            CH("TRACKNUMBER", QH.toString());
            break;
          case "tracksTotal":
            CH("TRACKTOTAL", QH.toString());
            break;
          case "discNumber":
            CH("DISCNUMBER", QH.toString());
            break;
          case "discsTotal":
            CH("DISCTOTAL", QH.toString());
            break;
          case "beatsPerMinute":
            CH("BPM", QH.toString());
            break;
          case "images":
            if (!LH) break;
            for (const HH of QH) {
              const BH = "coverFront" === HH.kind ? 3 : "coverBack" === HH.kind ? 4 : 0,
                LH = new Uint8Array(HH.mimeType.length);
              for (let rH = 0; rH < HH.mimeType.length; rH++) LH[rH] = HH.mimeType.charCodeAt(rH);
              const AH = rH.$c.encode(HH.description ?? ""),
                SH = new Uint8Array(8 + LH.length + 4 + AH.length + 16 + 4 + HH.data.length),
                hH = (0, rH.ed)(SH);
              hH.setUint32(0, BH, !1), hH.setUint32(4, LH.length, !1), SH.set(LH, 8), hH.setUint32(8 + LH.length, AH.length, !1), SH.set(AH, 12 + LH.length), hH.setUint32(28 + LH.length + AH.length, HH.data.length, !1), SH.set(HH.data, 32 + LH.length + AH.length);
              CH("METADATA_BLOCK_PICTURE", (0, rH.R)(SH))
            }
            break;
          case "raw":
            break;
          default:
            (0, rH.G)(XH)
        }
        if (BH.raw)
          for (const rH in BH.raw) {
            const HH = BH.raw[rH] ?? BH.raw[rH.toLowerCase()];
            if ("vendor" !== rH && null != HH && !zH.includes(rH))
              if ("string" === typeof HH) CH(rH, HH);
              else if (Array.isArray(HH)) {
              if (HH.every((HH => "string" === typeof HH)))
                for (const BH of HH) CH(rH, BH)
            }
          }
        const EH = new Uint8Array(4);
        (0, rH.ed)(EH).setUint32(0, zH.length, !0), AH.splice(2, 0, EH);
        const GH = AH.reduce(((HH, BH) => HH + BH.length), 0),
          YH = new Uint8Array(GH);
        let uH = 0;
        for (const rH of AH) YH.set(rH, uH), uH += rH.length;
        return YH
      },
      pH = HH => {
        if (HH.length < 7) return null;
        if (11 !== HH[0] || 119 !== HH[1]) return null;
        const BH = new EH.e(HH);
        BH.skipBits(16), BH.skipBits(16);
        const LH = BH.readBits(2);
        if (3 === LH) return null;
        const AH = BH.readBits(6),
          rH = BH.readBits(5);
        if (rH > 8) return null;
        const SH = BH.readBits(3),
          hH = BH.readBits(3);
        0 !== (1 & hH) && 1 !== hH && BH.skipBits(2), 0 !== (4 & hH) && BH.skipBits(2), 2 === hH && BH.skipBits(2);
        return {
          fscod: LH,
          bsid: rH,
          bsmod: SH,
          acmod: hH,
          lfeon: BH.readBits(1),
          bitRateCode: Math.floor(AH / 2)
        }
      },
      yH = new Uint8Array([5, 4, 65, 67, 45, 51]),
      HB = new Uint8Array([5, 4, 69, 65, 67, 51]),
      BB = [1, 2, 3, 6],
      LB = HH => {
        if (HH.length < 6) return null;
        if (11 !== HH[0] || 119 !== HH[1]) return null;
        const BH = new EH.e(HH);
        BH.skipBits(16);
        const LH = BH.readBits(2);
        if (BH.skipBits(3), 0 !== LH && 2 !== LH) return null;
        const AH = BH.readBits(11),
          rH = BH.readBits(2);
        let SH, zH = 0;
        3 === rH ? (zH = BH.readBits(2), SH = 3) : SH = BH.readBits(2);
        const CH = BH.readBits(3),
          XH = BH.readBits(1),
          GH = BH.readBits(5);
        if (GH < 11 || GH > 16) return null;
        const YH = BB[SH];
        let uH;
        uH = rH < 3 ? hH[rH] / 1e3 : tH[zH] / 1e3;
        return {
          dataRate: Math.round((AH + 1) * uH / (16 * YH)),
          substreams: [{
            fscod: rH,
            fscod2: zH,
            bsid: GH,
            bsmod: 0,
            acmod: CH,
            lfeon: XH,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      AB = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      rB = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      SB = [16, 16, 20, 20, 0, 24, 24, 0],
      hB = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      tB = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      zB = [32e3, 44100, 48e3, 0],
      CB = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      EB = [512, 1024, 2048, 4096],
      XB = HH => {
        const BH = GB(HH),
          LH = (0, rH.ed)(HH);
        let AH = BH ? 4 * Math.ceil(BH.frameSize / 4) : 0,
          SH = null;
        for (; AH + 4 <= HH.length && 1683496997 === LH.getUint32(AH);) {
          const BH = YB(HH.subarray(AH));
          if (!BH) break;
          SH ??= BH, AH += BH.frameSize
        }
        if (BH) return {
          frameSize: SH ? AH : BH.frameSize,
          sampleRate: BH.sampleRate,
          numberOfChannels: BH.numberOfChannels,
          sampleCount: BH.sampleCount,
          channelLayout: BH.channelLayout,
          pcmResolution: BH.pcmResolution,
          bitRate: BH.bitRate,
          core: BH,
          hasExtensions: null !== SH
        };
        if (!SH?.asset) return null;
        const {
          asset: hH
        } = SH;
        return {
          frameSize: AH,
          sampleRate: hH.sampleRate,
          numberOfChannels: hH.numberOfChannels,
          sampleCount: hH.sampleCount,
          channelLayout: hH.channelLayout,
          pcmResolution: hH.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      GB = HH => {
        if (HH.length < 18) return null;
        if (127 !== HH[0] || 254 !== HH[1] || 128 !== HH[2] || 1 !== HH[3]) return null;
        const BH = new EH.e(HH);
        if (BH.skipBits(32), BH.skipBits(1), 31 !== BH.readBits(5)) return null;
        const LH = BH.readBits(1),
          AH = BH.readBits(7) + 1;
        if (AH % 8 !== 0) return null;
        const rH = BH.readBits(14) + 1;
        if (rH < 96) return null;
        const SH = BH.readBits(6);
        if (SH >= hB.length) return null;
        const hH = AB[BH.readBits(4)];
        if (0 === hH) return null;
        const tH = rB[BH.readBits(5)];
        if (0 !== BH.readBits(1)) return null;
        BH.skipBits(4), BH.skipBits(5);
        const zH = BH.readBits(2);
        if (3 === zH) return null;
        BH.skipBits(1), LH && BH.skipBits(16), BH.skipBits(7);
        const CH = SB[BH.readBits(3)];
        if (0 === CH) return null;
        const XH = 0 !== zH;
        return {
          frameSize: rH,
          sampleRate: hH,
          numberOfChannels: hB[SH] + (XH ? 1 : 0),
          sampleCount: 32 * AH,
          channelLayout: tB[SH] | (XH ? 8 : 0),
          amode: SH,
          lfePresent: XH,
          bitRate: tH,
          pcmResolution: CH
        }
      },
      YB = HH => {
        if (HH.length < 10) return null;
        if (100 !== HH[0] || 88 !== HH[1] || 32 !== HH[2] || 37 !== HH[3]) return null;
        const BH = new EH.e(HH);
        BH.skipBits(32), BH.skipBits(8);
        const LH = BH.readBits(2),
          AH = BH.readBits(1),
          SH = 8 + 4 * AH,
          hH = 16 + 4 * AH;
        BH.skipBits(SH);
        const tH = BH.readBits(hH) + 1,
          zH = {
            frameSize: tH,
            asset: null
          };
        if (!BH.readBits(1)) return zH;
        const CH = zB[BH.readBits(2)],
          XH = 512 * (BH.readBits(3) + 1);
        BH.readBits(1) && BH.skipBits(36);
        const GH = BH.readBits(3) + 1,
          YH = BH.readBits(3) + 1,
          uH = [];
        for (let rH = 0; rH < GH; rH++) uH.push(BH.readBits(LH + 1));
        for (const EH of uH) BH.skipBits(8 * (0, rH.kc)(EH));
        if (BH.readBits(1)) {
          BH.skipBits(2);
          const HH = BH.readBits(2) + 1 << 2,
            LH = BH.readBits(2) + 1;
          BH.skipBits(LH * HH)
        }
        for (let rH = 0; rH < YH; rH++) BH.skipBits(hH);
        BH.skipBits(9), BH.skipBits(3), BH.readBits(1) && BH.skipBits(4), BH.readBits(1) && BH.skipBits(24), BH.readBits(1) && BH.skipBits(8 * (BH.readBits(10) + 1));
        const QH = BH.readBits(5) + 1,
          WH = CB[BH.readBits(4)],
          MH = BH.readBits(8) + 1;
        let xH = 0;
        if (BH.readBits(1) && (MH > 2 && BH.skipBits(1), MH > 6 && BH.skipBits(1), BH.readBits(1))) {
          const HH = BH.readBits(2) + 1 << 2;
          xH = BH.readBits(HH)
        }
        return 0 === CH || BH.getBitsLeft() < 0 ? zH : {
          frameSize: tH,
          asset: {
            sampleRate: WH,
            numberOfChannels: MH,
            sampleCount: Math.round(XH * WH / CH),
            channelLayout: xH,
            pcmResolution: QH
          }
        }
      },
      uB = HH => {
        const BH = new Uint8Array(20),
          LH = (0, rH.ed)(BH);
        LH.setUint32(0, HH.sampleRate), LH.setUint32(4, HH.bitRate), LH.setUint32(8, HH.bitRate), BH[12] = HH.pcmResolution;
        const AH = HH.core && !HH.hasExtensions ? 1 : 0,
          SH = new EH.e(BH);
        return SH.seekToByte(13), SH.writeBits(2, Math.max(EB.indexOf(HH.sampleCount), 0)), SH.writeBits(5, AH), SH.writeBits(1, HH.core?.lfePresent ? 1 : 0), SH.writeBits(6, HH.core?.amode ?? 0), SH.writeBits(14, HH.core ? HH.core.frameSize - 1 : 0), SH.writeBits(1, 0), SH.writeBits(3, 0), SH.writeBits(16, HH.channelLayout), SH.writeBits(1, 0), SH.writeBits(1, 0), SH.writeBits(1, 0), SH.writeBits(5, 0), BH
      }
  },
  40849: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => UH,
      E: () => TH,
      I: () => PH,
      L: () => IH,
      O: () => oH,
      P: () => mH,
      S: () => kH,
      U: () => NH,
      W: () => RH,
      X: () => qH,
      c: () => zH,
      d: () => EH,
      f: () => tH,
      h: () => OH,
      k: () => hH,
      n: () => CH,
      r: () => SH,
      t: () => GH,
      v: () => VH,
      y: () => vH
    });
    var AH = LH(40858),
      rH = LH(40820);
    const SH = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      hH = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      tH = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      zH = [...tH, ...hH],
      CH = ["webvtt"],
      EH = [{
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
      XH = [{
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
      GH = [{
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
      YH = [{
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
      uH = ".01.01.01.01.00",
      QH = ".0.110.01.01.01.0",
      WH = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      MH = ["dtsc", "dtsh", "dtsl", "dtse"],
      xH = [{
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
      vH = (HH, BH, LH, AH, SH) => {
        if ("avc" === HH) {
          const HH = 100,
            SH = Math.ceil(BH / 16) * Math.ceil(LH / 16),
            hH = EH.find((HH => SH <= HH.maxMacroblocks && AH <= HH.maxBitrate)) ?? (0, rH.Xb)(EH),
            tH = hH ? hH.level : 0;
          return `avc1.${HH.toString(16).padStart(2,"0")}${"00"}${tH.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === HH) {
          const HH = "",
            SH = 1,
            hH = "6",
            tH = BH * LH,
            zH = XH.find((HH => tH <= HH.maxPictureSize && AH <= HH.maxBitrate)) ?? (0, rH.Xb)(XH),
            CH = "B0";
          return `hev1.${HH}${SH}.${hH}.${zH.tier}${zH.level}.${CH}`
        }
        if ("vp8" === HH) return "vp8";
        if ("vp9" === HH) {
          const HH = BH * LH,
            SH = "08";
          return `vp09.${"00"}.${(GH.find((BH=>HH<=BH.maxPictureSize&&AH<=BH.maxBitrate))??(0,rH.Xb)(GH)).level.toString().padStart(2,"0")}.${SH}`
        }
        if ("av1" === HH) {
          const HH = 0,
            SH = BH * LH,
            hH = YH.find((HH => SH <= HH.maxPictureSize && AH <= HH.maxBitrate)) ?? (0, rH.Xb)(YH),
            tH = "08";
          return `av01.${HH}.${hH.level.toString().padStart(2,"0")}${hH.tier}.${tH}`
        }
        if ("prores" === HH) {
          const HH = 2073600,
            rH = Math.pow(BH * LH / HH, .95),
            hH = xH.filter((HH => HH.alpha === SH));
          let tH = hH[0].fourCc,
            zH = 1 / 0;
          for (const {
              fourCc: BH,
              bitrate: LH
            }
            of hH) {
            const HH = Math.abs(LH * rH - AH);
            HH < zH && (zH = HH, tH = BH)
          }
          return tH
        }
        throw (0, rH.G)(HH), new TypeError(`Unhandled codec '${String(HH)}'.`)
      },
      PH = HH => {
        const BH = HH.split(".");
        return [1, 1, Number(BH[1]), 2, 1, Number(BH[2]), 3, 1, Number(BH[3]), 4, 1, BH[4] ? Number(BH[4]) : 1]
      },
      TH = HH => {
        const BH = HH.split("."),
          LH = Number(BH[1]),
          AH = BH[2],
          rH = (LH << 5) + Number(AH.slice(0, -1)),
          SH = "H" === AH.slice(-1) ? 1 : 0,
          hH = Number(BH[3]);
        return [129, rH, (SH << 7) + ((8 === hH ? 0 : 1) << 6) + ((12 === hH ? 1 : 0) << 5) + ((BH[4] ? Number(BH[4]) : 0) << 4) + ((BH[5] ? Number(BH[5][0]) : 1) << 3) + ((BH[5] ? Number(BH[5][1]) : 1) << 2) + (BH[5] ? Number(BH[5][2]) : 0), 0]
      },
      UH = HH => {
        const {
          codec: BH,
          codecDescription: LH,
          colorSpace: SH,
          avcCodecInfo: hH,
          hevcCodecInfo: tH,
          vp9CodecInfo: zH,
          av1CodecInfo: CH,
          proresFormat: EH
        } = HH;
        if ("avc" === BH) {
          if ((0, rH.J)(null !== HH.avcType), hH) {
            const BH = new Uint8Array([hH.avcProfileIndication, hH.profileCompatibility, hH.avcLevelIndication]);
            return `avc${HH.avcType}.${(0,rH.T)(BH)}`
          }
          if (!LH || LH.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${HH.avcType}.${(0,rH.T)(LH.subarray(1,4))}`
        }
        if ("hevc" === BH) {
          let HH, BH, AH, SH, hH, zH;
          if (tH) HH = tH.generalProfileSpace, BH = tH.generalProfileIdc, AH = (0, rH.vc)(tH.generalProfileCompatibilityFlags), SH = tH.generalTierFlag, hH = tH.generalLevelIdc, zH = [...tH.generalConstraintIndicatorFlags];
          else {
            if (!LH || LH.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const tH = (0, rH.ed)(LH),
              CH = tH.getUint8(1);
            HH = CH >> 6 & 3, BH = 31 & CH, AH = (0, rH.vc)(tH.getUint32(2)), SH = CH >> 5 & 1, hH = tH.getUint8(12), zH = [];
            for (let HH = 0; HH < 6; HH++) zH.push(tH.getUint8(6 + HH))
          }
          let CH = "hev1.";
          for (CH += ["", "A", "B", "C"][HH] + BH, CH += ".", CH += AH.toString(16).toUpperCase(), CH += ".", CH += 0 === SH ? "L" : "H", CH += hH; zH.length > 0 && 0 === zH[zH.length - 1];) zH.pop();
          return zH.length > 0 && (CH += ".", CH += zH.map((HH => HH.toString(16).toUpperCase())).join(".")), CH
        }
        if ("vp8" === BH) return "vp8";
        if ("vp9" === BH) {
          if (!zH) {
            const BH = HH.width * HH.height;
            let LH = (0, rH.Xb)(GH).level;
            for (const HH of GH)
              if (BH <= HH.maxPictureSize) {
                LH = HH.level;
                break
              } return `vp09.00.${LH.toString().padStart(2,"0")}.08`
          }
          let BH = `vp09.${zH.profile.toString().padStart(2,"0")}.${zH.level.toString().padStart(2,"0")}.${zH.bitDepth.toString().padStart(2,"0")}.${zH.chromaSubsampling.toString().padStart(2,"0")}`;
          return BH += `.${zH.colourPrimaries.toString().padStart(2,"0")}.${zH.transferCharacteristics.toString().padStart(2,"0")}.${zH.matrixCoefficients.toString().padStart(2,"0")}.${zH.videoFullRangeFlag.toString().padStart(2,"0")}`, BH.endsWith(uH) && (BH = BH.slice(0, -15)), BH
        }
        if ("av1" === BH) {
          if (!CH) {
            const BH = HH.width * HH.height;
            let LH = (0, rH.Xb)(GH).level;
            for (const HH of GH)
              if (BH <= HH.maxPictureSize) {
                LH = HH.level;
                break
              } return `av01.0.${LH.toString().padStart(2,"0")}M.08`
          }
          const BH = CH.profile,
            LH = CH.level.toString().padStart(2, "0"),
            hH = CH.tier ? "H" : "M",
            tH = CH.bitDepth.toString().padStart(2, "0"),
            zH = CH.monochrome ? "1" : "0",
            EH = 100 * CH.chromaSubsamplingX + 10 * CH.chromaSubsamplingY + 1 * (CH.chromaSubsamplingX && CH.chromaSubsamplingY ? CH.chromaSamplePosition : 0);
          let XH, YH, uH, WH;
          (0, AH.p)(CH) ? (XH = CH.colourPrimaries, YH = CH.transferCharacteristics, uH = CH.matrixCoefficients, WH = CH.videoFullRangeFlag) : (XH = SH?.primaries ? rH.g[SH.primaries] : 1, YH = SH?.transfer ? rH.v[SH.transfer] : 1, uH = SH?.matrix ? rH.p[SH.matrix] : 1, WH = SH?.fullRange ? 1 : 0);
          let MH = `av01.${BH}.${LH}${hH}.${tH}`;
          return MH += `.${zH}.${EH.toString().padStart(3,"0")}`, MH += `.${XH.toString().padStart(2,"0")}`, MH += `.${YH.toString().padStart(2,"0")}`, MH += `.${uH.toString().padStart(2,"0")}`, MH += `.${WH}`, MH.endsWith(QH) && (MH = MH.slice(0, -17)), MH
        }
        if ("prores" === BH) return EH ?? "apch";
        throw null !== BH && (0, rH.G)(BH), new TypeError(`Unhandled codec '${BH}'.`)
      },
      VH = (HH, BH, LH) => {
        if ("aac" === HH) return BH >= 2 && LH <= 24e3 ? "mp4a.40.29" : LH <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === HH) return "mp3";
        if ("opus" === HH) return "opus";
        if ("vorbis" === HH) return "vorbis";
        if ("flac" === HH) return "flac";
        if ("ac3" === HH) return "ac-3";
        if ("eac3" === HH) return "ec-3";
        if ("dts" === HH) return "dtsc";
        if (hH.includes(HH)) return HH;
        throw new TypeError(`Unhandled codec '${HH}'.`)
      },
      OH = 48e3,
      bH = /^pcm-([usf])(\d+)(be)?$/,
      kH = HH => {
        if ((0, rH.J)(hH.includes(HH)), "ulaw" === HH) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === HH) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const BH = bH.exec(HH);
        let LH;
        (0, rH.J)(BH), LH = "u" === BH[1] ? "unsigned" : "s" === BH[1] ? "signed" : "float";
        return {
          dataType: LH,
          sampleSize: Number(BH[2]) / 8,
          littleEndian: "be" !== BH[3],
          silentValue: "pcm-u8" === HH ? 128 : 0
        }
      },
      mH = HH => HH.startsWith("avc1") || HH.startsWith("avc3") ? "avc" : HH.startsWith("hev1") || HH.startsWith("hvc1") ? "hevc" : "vp8" === HH ? "vp8" : HH.startsWith("vp09") ? "vp9" : HH.startsWith("av01") ? "av1" : WH.includes(HH) ? "prores" : "mp3" === HH || "mp4a.69" === HH || "mp4a.6B" === HH || "mp4a.6b" === HH || "mp4a.40.34" === HH ? "mp3" : HH.startsWith("mp4a.40.") || "mp4a.67" === HH ? "aac" : "opus" === HH || "Opus" === HH ? "opus" : "vorbis" === HH ? "vorbis" : "flac" === HH ? "flac" : "ac-3" === HH || "ac3" === HH ? "ac3" : "ec-3" === HH || "eac3" === HH ? "eac3" : MH.includes(HH) ? "dts" : "ulaw" === HH ? "ulaw" : "alaw" === HH ? "alaw" : bH.test(HH) ? HH : "webvtt" === HH ? "webvtt" : null,
      oH = HH => "avc" === HH ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === HH ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      IH = HH => "aac" === HH ? {
        aac: {
          format: "aac"
        }
      } : "opus" === HH ? {
        opus: {
          format: "opus"
        }
      } : {},
      fH = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...WH],
      lH = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      KH = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      cH = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      eH = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      qH = (HH, BH) => {
        if (!HH) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof HH) throw new TypeError("Video chunk metadata must be an object.");
        if (!HH.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof HH.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof HH.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!fH.some((BH => HH.decoderConfig.codec.startsWith(BH)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(HH.decoderConfig.codedWidth) || HH.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(HH.decoderConfig.codedHeight) || HH.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== HH.decoderConfig.displayAspectWidth && (!Number.isInteger(HH.decoderConfig.displayAspectWidth) || HH.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== HH.decoderConfig.displayAspectHeight && (!Number.isInteger(HH.decoderConfig.displayAspectHeight) || HH.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== HH.decoderConfig.displayAspectWidth !== (void 0 !== HH.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== HH.decoderConfig.description && !(0, rH.ub)(HH.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== HH.decoderConfig.colorSpace) {
          const {
            colorSpace: BH
          } = HH.decoderConfig;
          if ("object" !== typeof BH) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const LH = Object.keys(rH.g);
          if (null != BH.primaries && !LH.includes(BH.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${LH.join(", ")}.`);
          const AH = Object.keys(rH.v);
          if (null != BH.transfer && !AH.includes(BH.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${AH.join(", ")}.`);
          const SH = Object.keys(rH.p);
          if (null != BH.matrix && !SH.includes(BH.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${SH.join(", ")}.`);
          if (null != BH.fullRange && "boolean" !== typeof BH.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (HH.decoderConfig.codec.startsWith("avc1") || HH.decoderConfig.codec.startsWith("avc3")) {
          if (!lH.test(HH.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (HH.decoderConfig.codec.startsWith("hev1") || HH.decoderConfig.codec.startsWith("hvc1")) {
          if (!KH.test(HH.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (HH.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== HH.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (HH.decoderConfig.codec.startsWith("vp09")) {
          if (!cH.test(HH.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (HH.decoderConfig.codec.startsWith("av01")) {
          if (!eH.test(HH.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (WH.some((BH => HH.decoderConfig.codec.startsWith(BH))) && !WH.some((BH => HH.decoderConfig.codec === BH))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${WH.join(", ")}.`);
        if (null !== BH && mH(HH.decoderConfig.codec) !== BH) throw new TypeError(`Video chunk metadata decoder configuration codec string '${HH.decoderConfig.codec}' does not fit to the track codec '${BH}'.`)
      },
      gH = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      NH = (HH, BH) => {
        if (!HH) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof HH) throw new TypeError("Audio chunk metadata must be an object.");
        if (!HH.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof HH.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof HH.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!gH.some((BH => HH.decoderConfig.codec.startsWith(BH)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(HH.decoderConfig.sampleRate) || HH.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(HH.decoderConfig.numberOfChannels) || HH.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== HH.decoderConfig.description && !(0, rH.ub)(HH.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (HH.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== HH.decoderConfig.codec && "mp4a.6B" !== HH.decoderConfig.codec && "mp4a.6b" !== HH.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(HH.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (HH.decoderConfig.codec.startsWith("mp3") || HH.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== HH.decoderConfig.codec && "mp4a.69" !== HH.decoderConfig.codec && "mp4a.6B" !== HH.decoderConfig.codec && "mp4a.6b" !== HH.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (HH.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== HH.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (HH.decoderConfig.description && HH.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (HH.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== HH.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!HH.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (HH.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== HH.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const BH = 42;
          if (!HH.decoderConfig.description || HH.decoderConfig.description.byteLength < BH) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (HH.decoderConfig.codec.startsWith("ac-3") || HH.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== HH.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (HH.decoderConfig.codec.startsWith("ec-3") || HH.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== HH.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (HH.decoderConfig.codec.startsWith("dts")) {
          if (!MH.includes(HH.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${MH.join(", ")}.`)
        } else if ((HH.decoderConfig.codec.startsWith("pcm") || HH.decoderConfig.codec.startsWith("ulaw") || HH.decoderConfig.codec.startsWith("alaw")) && !hH.includes(HH.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${hH.join(", ")}).`);
        if (null !== BH && mH(HH.decoderConfig.codec) !== BH) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${HH.decoderConfig.codec}' does not fit to the track codec '${BH}'.`)
      },
      RH = HH => {
        if (!HH) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof HH) throw new TypeError("Subtitle metadata must be an object.");
        if (!HH.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof HH.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof HH.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  40902: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      f: () => XH,
      j: () => MH,
      l: () => zH,
      o: () => xH,
      r: () => CH,
      t: () => hH
    });
    var AH = LH(40849),
      rH = LH(40820),
      SH = LH(40907);
    new Map, new Map;
    const hH = HH => {
        if (!HH || "object" !== typeof HH) throw new TypeError("Encoding config must be an object.");
        if (!AH.r.includes(HH.codec)) throw new TypeError(`Invalid video codec '${HH.codec}'. Must be one of: ${AH.r.join(", ")}.`);
        const BH = HH.bitrate;
        if (void 0 === HH.quality && void 0 === BH) throw new TypeError("config.quality must be provided.");
        if (void 0 !== HH.quality && void 0 !== BH) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== HH.quality && !(HH.quality instanceof GH)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== BH && !(BH instanceof GH) && (!Number.isInteger(BH) || BH <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== HH.keyFrameInterval && (!Number.isFinite(HH.keyFrameInterval) || HH.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== HH.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(HH.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== HH.transform) {
          if ("object" !== typeof HH.transform || !HH.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== HH.transform.width && (!Number.isInteger(HH.transform.width) || HH.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== HH.transform.height && (!Number.isInteger(HH.transform.height) || HH.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== HH.transform.fit && !["fill", "contain", "cover"].includes(HH.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== HH.transform.width && void 0 !== HH.transform.height && void 0 === HH.transform.fit && !["fill", "contain", "cover"].includes(HH.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== HH.transform.fit && ["fill", "contain", "cover"].includes(HH.sizeChangeBehavior) && HH.transform.fit !== HH.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== HH.transform.rotate && ![0, 90, 180, 270].includes(HH.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== HH.transform.flip && "boolean" !== typeof HH.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== HH.transform.crop && (0, SH.i)(HH.transform.crop, "config.transform."), void 0 !== HH.transform.process && "function" !== typeof HH.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== HH.transform.frameRate && (!Number.isFinite(HH.transform.frameRate) || HH.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== HH.transform.force && "boolean" !== typeof HH.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== HH.onEncodedPacket && "function" !== typeof HH.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== HH.onEncoderConfig && "function" !== typeof HH.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== HH.onEncodedSample && "function" !== typeof HH.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        tH(HH.codec, HH)
      },
      tH = (HH, BH) => {
        if (!BH || "object" !== typeof BH) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== BH.alpha && !["discard", "keep"].includes(BH.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const LH = BH.bitrateMode;
        if (void 0 !== LH && !["constant", "variable"].includes(LH)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== BH.latencyMode && !["quality", "realtime"].includes(BH.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== BH.fullCodecString && "string" !== typeof BH.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== BH.fullCodecString && (0, AH.P)(BH.fullCodecString) !== HH) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${HH}).`);
        if (void 0 !== BH.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(BH.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== BH.scalabilityMode && "string" !== typeof BH.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== BH.contentHint && "string" !== typeof BH.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      zH = HH => {
        const BH = HH.bitrateMode,
          LH = HH.quality._toVideoRateControl(HH.codec, HH.width, HH.height, BH),
          SH = (BH, LH, rH) => ({
            codec: HH.fullCodecString ?? (0, AH.y)(HH.codec, HH.width, HH.height, rH, "keep" === HH.alpha),
            width: HH.width,
            height: HH.height,
            displayWidth: HH.squarePixelWidth,
            displayHeight: HH.squarePixelHeight,
            bitrate: BH,
            bitrateMode: LH,
            alpha: HH.alpha ?? "discard",
            framerate: HH.framerate,
            latencyMode: HH.latencyMode,
            hardwareAcceleration: HH.hardwareAcceleration,
            scalabilityMode: HH.scalabilityMode,
            contentHint: HH.contentHint,
            ...(0, AH.O)(HH.codec)
          }),
          hH = [];
        return null !== LH.quantizer && hH.push({
          config: SH(void 0, "quantizer", LH.bitrate),
          quantizer: LH.quantizer
        }), "quantizer" !== LH.bitrateMode && hH.push({
          config: SH(LH.bitrate, LH.bitrateMode, LH.bitrate),
          quantizer: null
        }), (0, rH.J)(hH.length > 0), hH
      },
      CH = HH => {
        if (!HH || "object" !== typeof HH) throw new TypeError("Encoding config must be an object.");
        if (!AH.c.includes(HH.codec)) throw new TypeError(`Invalid audio codec '${HH.codec}'. Must be one of: ${AH.c.join(", ")}.`);
        const BH = HH.bitrate;
        if (void 0 === HH.quality && void 0 === BH && !AH.k.includes(HH.codec) && "flac" !== HH.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== HH.quality && void 0 !== BH) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== HH.quality && !(HH.quality instanceof GH)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== BH && !(BH instanceof GH) && (!Number.isInteger(BH) || BH <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== HH.transform) {
          if ("object" !== typeof HH.transform || !HH.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== HH.transform.numberOfChannels && (!Number.isInteger(HH.transform.numberOfChannels) || HH.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== HH.transform.sampleRate && (!Number.isInteger(HH.transform.sampleRate) || HH.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== HH.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(HH.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== HH.transform.process && "function" !== typeof HH.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== HH.onEncodedPacket && "function" !== typeof HH.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== HH.onEncoderConfig && "function" !== typeof HH.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== HH.onEncodedSample && "function" !== typeof HH.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        EH(HH.codec, HH)
      },
      EH = (HH, BH) => {
        if (!BH || "object" !== typeof BH) throw new TypeError("Encoding options must be an object.");
        const LH = BH.bitrateMode;
        if (void 0 !== LH && !["constant", "variable"].includes(LH)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== BH.fullCodecString && "string" !== typeof BH.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== BH.fullCodecString && (0, AH.P)(BH.fullCodecString) !== HH) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${HH}).`)
      },
      XH = HH => {
        const BH = HH.bitrateMode;
        return {
          codec: HH.fullCodecString ?? (0, AH.v)(HH.codec, HH.numberOfChannels, HH.sampleRate),
          numberOfChannels: HH.numberOfChannels,
          sampleRate: HH.sampleRate,
          bitrate: HH.quality?._toAudioBitrate(HH.codec),
          bitrateMode: HH.quality?._bitrateMode ?? BH,
          ...(0, AH.L)(HH.codec)
        }
      };
    class GH {
      constructor(HH) {
        if ("number" !== typeof HH && "string" !== typeof HH || (HH = {
            quality: HH
          }), !HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (void 0 !== HH.bitrateMode && !["constant", "variable"].includes(HH.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in HH) {
          if ("string" === typeof HH.quality ? !(HH.quality in YH) : "number" !== typeof HH.quality || Number.isNaN(HH.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== HH.preferBitrate && "boolean" !== typeof HH.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in HH || "quantizer" in HH) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof HH.quality ? YH[HH.quality] : HH.quality, this._preferBitrate = HH.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== HH.bitrate && (!Number.isInteger(HH.bitrate) || HH.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== HH.quantizer && (!Number.isInteger(HH.quantizer) || HH.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === HH.bitrate && void 0 === HH.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in HH) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = HH.bitrate, this._quantizer = HH.quantizer
        }
        this._bitrateMode = HH.bitrateMode
      }
      _toVideoRateControl(HH, BH, LH, AH) {
        const SH = uH[HH];
        let hH, tH = null,
          zH = this._bitrateMode ?? AH ?? "variable";
        if (void 0 !== this._quantizer) {
          if (SH)
            if (this._quantizer < SH.min || this._quantizer > SH.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${HH}'; must be between ${SH.min} and ${SH.max}.`)
            } else tH = this._quantizer, void 0 === this._bitrate && (zH = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${HH}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && SH && !this._preferBitrate && ((0, rH.J)(void 0 !== this._quality), tH = (0, rH._)(Math.round((0, rH._b)(SH.worst, SH.best, this._quality)), SH.min, SH.max));
        if (void 0 !== this._bitrate) hH = this._bitrate;
        else {
          let AH = this._quality;
          void 0 === AH && ((0, rH.J)(null !== tH && SH), AH = (0, rH._)((tH - SH.worst) / (SH.best - SH.worst), 0, 1)), hH = WH(HH, BH, LH, QH(AH))
        }
        return {
          quantizer: tH,
          bitrate: hH,
          bitrateMode: zH
        }
      }
      _toVideoBitrate(HH, BH, LH) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, rH.J)(void 0 !== this._quality), WH(HH, BH, LH, QH(this._quality)))
      }
      _toAudioBitrate(HH) {
        if (AH.k.includes(HH) || "flac" === HH) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const BH = QH(this._quality),
          LH = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [HH];
        if (!LH) throw new Error(`Unhandled codec: ${HH}`);
        let rH = LH * BH;
        if ("aac" === HH) {
          rH = [96e3, 128e3, 16e4, 192e3].reduce(((HH, BH) => Math.abs(BH - rH) < Math.abs(HH - rH) ? BH : HH))
        } else if ("opus" === HH || "vorbis" === HH) rH = Math.max(6e3, rH);
        else if ("mp3" === HH) {
          rH = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((HH, BH) => Math.abs(BH - rH) < Math.abs(HH - rH) ? BH : HH))
        }
        return 1e3 * Math.round(rH / 1e3)
      }
    }
    const YH = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      uH = {
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
      QH = HH => .3 * Math.exp(2.5538 * HH),
      WH = (HH, BH, LH, AH) => {
        const rH = BH * LH,
          SH = 3e6,
          hH = SH * Math.pow(rH / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [HH] * AH;
        return 1e3 * Math.ceil(hH / 1e3)
      },
      MH = (HH, BH) => "avc" === HH ? {
        avc: {
          quantizer: BH
        }
      } : "hevc" === HH ? {
        hevc: {
          quantizer: BH
        }
      } : "vp9" === HH ? {
        vp9: {
          quantizer: BH
        }
      } : "av1" === HH ? {
        av1: {
          quantizer: BH
        }
      } : void(0, rH.J)(!1),
      xH = (HH, BH) => void 0 !== HH ? HH : void 0 !== BH ? BH instanceof GH ? BH : new GH({
        bitrate: BH
      }) : void 0
  },
  40866: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH, rH = LH(40820);
    ! function(HH) {
      HH[HH.Silent = 0] = "Silent", HH[HH.Errors = 1] = "Errors", HH[HH.Warnings = 2] = "Warnings", HH[HH.Info = 3] = "Info"
    }(AH || (AH = {}));
    class SH {
      constructor() {}
      static get level() {
        return SH._level
      }
      static set level(HH) {
        if (HH !== AH.Silent && HH !== AH.Errors && HH !== AH.Warnings && HH !== AH.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        SH._level = HH
      }
      static get _emitter() {
        return SH._emitterInstance ??= new rH.l
      }
      static on(HH, BH, LH) {
        return SH._emitter.on(HH, BH, LH)
      }
      static _error() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        SH._emitter._emit("error", BH), SH._level >= AH.Errors && console.error(...BH)
      }
      static _warn() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        SH._emitter._emit("warn", BH), SH._level >= AH.Warnings && console.warn(...BH)
      }
      static _info() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        SH._emitter._emit("info", BH), SH._level >= AH.Info && console.info(...BH)
      }
    }
    SH._level = AH.Info, SH._emitterInstance = null
  },
  40916: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      h: () => EH,
      j: () => zH,
      n: () => XH,
      p: () => hH
    });
    LH(40838);
    var AH = LH(40849);
    LH(40820), LH(40879);
    var rH = LH(40900);
    LH(40907), LH(40902);
    LH(40858), LH(40866), "function" === typeof SuppressedError && SuppressedError;
    class SH {
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
      async _flushAndClose(HH) {}
      close() {
        if (this._closingPromise) return;
        const HH = this._connectedTrack;
        if (!HH) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === HH.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== HH.output.state && "finalized" !== HH.output.state && HH.output._muxer.onTrackClose(HH)
        })()
      }
      async _flushOrWaitForOngoingClose(HH) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(HH), this._closed = !0
        })()
      }
    }
    class hH extends SH {
      constructor(HH) {
        if (super(), !AH.r.includes(HH)) throw new TypeError(`Invalid video codec '${HH}'. Must be one of: ${AH.r.join(", ")}.`);
        this._codec = HH
      }
    }
    const tH = (HH, BH) => {
      if (HH.metadata.hasOnlyKeyPackets && "key" !== BH.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class zH extends hH {
      constructor(HH) {
        super(HH)
      }
      add(HH, BH) {
        if (!(HH instanceof rH.b)) throw new TypeError("packet must be an EncodedPacket.");
        if (HH.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== BH && (!BH || "object" !== typeof BH)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), tH(this._connectedTrack, HH), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, HH, BH)
      }
    }
    class CH extends SH {
      constructor(HH) {
        if (super(), !AH.c.includes(HH)) throw new TypeError(`Invalid audio codec '${HH}'. Must be one of: ${AH.c.join(", ")}.`);
        this._codec = HH
      }
    }
    class EH extends CH {
      constructor(HH) {
        super(HH)
      }
      add(HH, BH) {
        if (!(HH instanceof rH.b)) throw new TypeError("packet must be an EncodedPacket.");
        if (HH.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== BH && (!BH || "object" !== typeof BH)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, HH, BH)
      }
    }
    class XH extends SH {
      constructor(HH) {
        if (super(), !AH.n.includes(HH)) throw new TypeError(`Invalid subtitle codec '${HH}'. Must be one of: ${AH.n.join(", ")}.`);
        this._codec = HH
      }
    }
  },
  40825: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      g: () => zH,
      h: () => rH,
      k: () => tH,
      l: () => hH,
      o: () => CH
    });
    var AH = LH(40820);
    class rH {
      constructor(HH, BH) {
        if (this.data = HH, this.mimeType = BH, !(HH instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof BH) throw new TypeError("mimeType must be a string.")
      }
    }
    class SH {
      constructor(HH, BH, LH, AH) {
        if (this.data = HH, this.mimeType = BH, this.name = LH, this.description = AH, !(HH instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== BH && "string" !== typeof BH) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== LH && "string" !== typeof LH) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== AH && "string" !== typeof AH) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const hH = HH => {
        if (!HH || "object" !== typeof HH) throw new TypeError("tags must be an object.");
        if (void 0 !== HH.title && "string" !== typeof HH.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== HH.description && "string" !== typeof HH.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== HH.artist && "string" !== typeof HH.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== HH.album && "string" !== typeof HH.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== HH.albumArtist && "string" !== typeof HH.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== HH.trackNumber && (!Number.isInteger(HH.trackNumber) || HH.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== HH.tracksTotal && (!Number.isInteger(HH.tracksTotal) || HH.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== HH.discNumber && (!Number.isInteger(HH.discNumber) || HH.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== HH.discsTotal && (!Number.isInteger(HH.discsTotal) || HH.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== HH.genre && "string" !== typeof HH.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== HH.date && (!(HH.date instanceof Date) || Number.isNaN(HH.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== HH.beatsPerMinute && (!Number.isInteger(HH.beatsPerMinute) || HH.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== HH.lyrics && "string" !== typeof HH.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== HH.images) {
          if (!Array.isArray(HH.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const BH of HH.images) {
            if (!BH || "object" !== typeof BH) throw new TypeError("Each image in tags.images must be an object.");
            if (!(BH.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof BH.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(BH.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== HH.comment && "string" !== typeof HH.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== HH.raw) {
          if (!HH.raw || "object" !== typeof HH.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const BH of Object.values(HH.raw))
            if (null !== BH && "string" !== typeof BH && (!Array.isArray(BH) || !BH.every((HH => "string" === typeof HH))) && !(BH instanceof Uint8Array) && !(BH instanceof rH) && !(BH instanceof SH) && !(0, AH.Nb)(BH)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      tH = HH => void 0 === HH.title && void 0 === HH.description && void 0 === HH.artist && void 0 === HH.album && void 0 === HH.albumArtist && void 0 === HH.trackNumber && void 0 === HH.tracksTotal && void 0 === HH.discNumber && void 0 === HH.discsTotal && void 0 === HH.genre && void 0 === HH.beatsPerMinute && void 0 === HH.date && void 0 === HH.lyrics && (!HH.images || 0 === HH.images.length) && void 0 === HH.comment && (void 0 === HH.raw || 0 === Object.keys(HH.raw).length),
      zH = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      CH = HH => {
        if (!HH || "object" !== typeof HH) throw new TypeError("disposition must be an object.");
        if (void 0 !== HH.default && "boolean" !== typeof HH.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== HH.primary && "boolean" !== typeof HH.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== HH.forced && "boolean" !== typeof HH.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== HH.original && "boolean" !== typeof HH.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== HH.commentary && "boolean" !== typeof HH.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== HH.hearingImpaired && "boolean" !== typeof HH.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== HH.visuallyImpaired && "boolean" !== typeof HH.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  40820: (HH, BH, LH) => {
    function AH(HH) {
      if (!HH) throw new Error("Assertion failed.")
    }
    LH.d(BH, {
      $: () => NB,
      $b: () => YB,
      $c: () => mH,
      Ac: () => pH,
      B: () => kB,
      Bb: () => AB,
      C: () => bB,
      Dc: () => iH,
      Ec: () => YH,
      Fb: () => oH,
      Fc: () => gB,
      G: () => nH,
      Gb: () => xH,
      J: () => AH,
      Jc: () => wH,
      Kb: () => VB,
      Mc: () => ZH,
      N: () => NH,
      Nb: () => FB,
      Ob: () => WB,
      Pb: () => MH,
      Qc: () => DH,
      R: () => PB,
      Rb: () => zB,
      Sb: () => OB,
      T: () => qH,
      Uc: () => mB,
      Vb: () => xB,
      X: () => zH,
      Xb: () => WH,
      Yc: () => kH,
      _: () => dH,
      _b: () => aH,
      ac: () => sH,
      bc: () => uH,
      d: () => eH,
      db: () => MB,
      dd: () => jB,
      eb: () => KH,
      ed: () => VH,
      fc: () => hH,
      g: () => IH,
      gb: () => QH,
      h: () => hB,
      hc: () => UB,
      ib: () => SB,
      id: () => UH,
      jb: () => CH,
      kc: () => BB,
      l: () => nB,
      ld: () => TB,
      m: () => tH,
      mc: () => RH,
      nb: () => jH,
      nd: () => oB,
      ob: () => yH,
      p: () => lH,
      pb: () => FH,
      qb: () => HB,
      qc: () => vH,
      qd: () => RB,
      t: () => SH,
      tb: () => vB,
      u: () => rB,
      ub: () => cH,
      uc: () => PH,
      ud: () => TH,
      v: () => fH,
      vb: () => GB,
      vc: () => gH,
      w: () => bH,
      wb: () => uB,
      wc: () => XH,
      x: () => JH,
      zb: () => EB
    });
    const rH = Math.PI / 180,
      SH = 180 / Math.PI,
      hH = HH => {
        const BH = (HH % 360 + 360) % 360;
        if (0 === BH || 90 === BH || 180 === BH || 270 === BH) return BH;
        throw new Error(`Invalid rotation ${HH}.`)
      },
      tH = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      zH = (HH, BH, LH) => {
        const [AH, rH, , SH, hH] = HH, tH = Math.abs(AH) * BH + Math.abs(SH) * LH, zH = Math.abs(rH) * BH + Math.abs(hH) * LH;
        return uH(uH(GH(-BH / 2, -LH / 2), HH), GH(tH / 2, zH / 2))
      },
      CH = HH => {
        const [BH, LH] = HH, AH = Math.atan2(LH, EH(HH) ? -BH : BH);
        return hH(iH(AH * SH, 90))
      },
      EH = HH => {
        const [BH, LH, , AH, rH] = HH;
        return BH * rH - LH * AH < 0
      },
      XH = HH => {
        const BH = HH * rH,
          LH = Math.round(Math.cos(BH)),
          AH = Math.round(Math.sin(BH));
        return [LH, AH, 0, -AH, LH, 0, 0, 0, 1]
      },
      GH = (HH, BH) => [1, 0, 0, 0, 1, 0, HH, BH, 1],
      YH = (HH, BH) => [HH, 0, 0, 0, BH, 0, 0, 0, 1],
      uH = (HH, BH) => {
        const LH = new Array(9);
        for (let AH = 0; AH < 3; AH++)
          for (let rH = 0; rH < 3; rH++) LH[3 * AH + rH] = HH[3 * AH] * BH[rH] + HH[3 * AH + 1] * BH[3 + rH] + HH[3 * AH + 2] * BH[6 + rH];
        return LH
      },
      QH = (HH, BH, LH, AH) => ({
        rotation: hH(HH + (BH ? -LH : LH)),
        flip: BH !== AH
      }),
      WH = HH => HH && HH[HH.length - 1],
      MH = HH => HH >= 0 && HH < 2 ** 32,
      xH = HH => HH >= -(2 ** 31) && HH < 2 ** 31,
      vH = HH => {
        let BH = 0;
        for (; 0 === HH.readBits(1) && BH < 32;) BH++;
        if (BH >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << BH) - 1 + HH.readBits(BH)
      },
      PH = HH => {
        const BH = vH(HH);
        return 0 === (1 & BH) ? -(BH >> 1) : BH + 1 >> 1
      },
      TH = (HH, BH, LH, AH) => {
        for (let rH = BH; rH < LH; rH++) {
          const BH = Math.floor(rH / 8);
          let SH = HH[BH];
          const hH = 7 - (7 & rH);
          SH &= ~(1 << hH), SH |= (AH & 1 << LH - rH - 1) >> LH - rH - 1 << hH, HH[BH] = SH
        }
      },
      UH = HH => HH.constructor === Uint8Array ? HH : ArrayBuffer.isView(HH) ? new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength) : new Uint8Array(HH),
      VH = HH => HH.constructor === DataView ? HH : ArrayBuffer.isView(HH) ? new DataView(HH.buffer, HH.byteOffset, HH.byteLength) : new DataView(HH),
      OH = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const BH = new Uint8Array(3 * HH.length);
          let LH = 0;
          for (let AH = 0; AH < HH.length; AH++) {
            let rH = HH.charCodeAt(AH);
            if (rH < 128) BH[LH++] = rH;
            else if (rH < 2048) BH[LH++] = 192 | rH >> 6, BH[LH++] = 128 | 63 & rH;
            else if (rH < 55296 || rH > 57343) BH[LH++] = 224 | rH >> 12, BH[LH++] = 128 | rH >> 6 & 63, BH[LH++] = 128 | 63 & rH;
            else {
              const SH = AH + 1 < HH.length ? HH.charCodeAt(AH + 1) : 0;
              rH < 56320 && SH >= 56320 && SH <= 57343 ? (rH = 65536 + (rH - 55296 << 10) + (SH - 56320), AH++, BH[LH++] = 240 | rH >> 18, BH[LH++] = 128 | rH >> 12 & 63, BH[LH++] = 128 | rH >> 6 & 63, BH[LH++] = 128 | 63 & rH) : (BH[LH++] = 239, BH[LH++] = 191, BH[LH++] = 189)
            }
          }
          return BH.slice(0, LH)
        }
      },
      bH = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const BH = HH.trim().toLowerCase();
          if ("utf-8" === BH || "utf8" === BH || "unicode-1-1-utf-8" === BH) this.encoding = "utf-8";
          else if ("utf-16le" === BH || "utf-16" === BH) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== BH) throw new RangeError(`The encoding label provided ('${HH}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(HH) {
          const BH = HH ? UH(HH) : new Uint8Array(0),
            LH = [];
          if ("utf-8" === this.encoding) {
            let HH = BH.length >= 3 && 239 === BH[0] && 187 === BH[1] && 191 === BH[2] ? 3 : 0;
            for (; HH < BH.length;) {
              const AH = BH[HH];
              if (AH < 128) {
                LH.push(AH), HH++;
                continue
              }
              let rH, SH;
              if (AH >= 194 && AH < 224) rH = 1, SH = 31 & AH;
              else if (AH >= 224 && AH < 240) rH = 2, SH = 15 & AH;
              else {
                if (!(AH >= 240 && AH < 245)) {
                  LH.push(65533), HH++;
                  continue
                }
                rH = 3, SH = 7 & AH
              }
              let hH = 224 === AH ? 160 : 240 === AH ? 144 : 128,
                tH = 237 === AH ? 159 : 244 === AH ? 143 : 191,
                zH = 1;
              for (; zH <= rH; zH++) {
                const LH = HH + zH < BH.length ? BH[HH + zH] : 0;
                if (LH < hH || LH > tH) break;
                SH = SH << 6 | 63 & LH, hH = 128, tH = 191
              }
              HH += zH, zH <= rH ? LH.push(65533) : SH >= 65536 ? (SH -= 65536, LH.push(55296 | SH >> 10, 56320 | 1023 & SH)) : LH.push(SH)
            }
          } else {
            const HH = "utf-16le" === this.encoding,
              AH = HH ? 255 : 254,
              rH = HH ? 254 : 255;
            let SH = BH.length >= 2 && BH[0] === AH && BH[1] === rH ? 2 : 0;
            for (; SH + 1 < BH.length;) {
              const AH = HH ? BH[SH] | BH[SH + 1] << 8 : BH[SH] << 8 | BH[SH + 1];
              if (SH += 2, AH >= 55296 && AH <= 56319) {
                const rH = SH + 1 < BH.length ? HH ? BH[SH] | BH[SH + 1] << 8 : BH[SH] << 8 | BH[SH + 1] : -1;
                rH >= 56320 && rH <= 57343 ? (LH.push(AH, rH), SH += 2) : LH.push(65533)
              } else AH >= 56320 && AH <= 57343 ? LH.push(65533) : LH.push(AH)
            }
            SH < BH.length && LH.push(65533)
          }
          let AH = "";
          for (let rH = 0; rH < LH.length; rH += 8192) AH += String.fromCharCode(...LH.slice(rH, rH + 8192));
          return AH
        }
      },
      kH = new bH,
      mH = new OH,
      oH = HH => {
        for (let BH = 0; BH < HH.length; BH++) {
          if (HH.charCodeAt(BH) > 255) return !1
        }
        return !0
      },
      IH = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      fH = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      lH = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      KH = HH => !HH || null == HH.primaries && null == HH.transfer && null == HH.matrix && null == HH.fullRange,
      cH = HH => HH instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && HH instanceof SharedArrayBuffer || ArrayBuffer.isView(HH);
    class eH {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let HH;
        const BH = new Promise((BH => {
            let LH = !1;
            HH = () => {
              LH || (BH(), this.pending--, LH = !0)
            }
          })),
          LH = this.currentPromise;
        return this.currentPromise = BH, this.pending++, await LH, HH
      }
    }
    const qH = HH => [...HH].map((HH => HH.toString(16).padStart(2, "0"))).join(""),
      gH = HH => (HH = (HH = (HH = (HH = (HH = HH >> 1 & 1431655765 | (1431655765 & HH) << 1) >> 2 & 858993459 | (858993459 & HH) << 2) >> 4 & 252645135 | (252645135 & HH) << 4) >> 8 & 16711935 | (16711935 & HH) << 8) >> 16 & 65535 | (65535 & HH) << 16) >>> 0,
      NH = (HH, BH, LH) => {
        let AH = 0,
          rH = HH.length - 1,
          SH = -1;
        for (; AH <= rH;) {
          const hH = AH + (rH - AH + 1) / 2 | 0;
          LH(HH[hH]) <= BH ? (SH = hH, AH = hH + 1) : rH = hH - 1
        }
        return SH
      },
      RH = () => {
        let HH, BH;
        return {
          promise: new Promise(((LH, AH) => {
            HH = LH, BH = AH
          })),
          resolve: HH,
          reject: BH
        }
      },
      jH = (HH, BH) => {
        for (let LH = HH.length - 1; LH >= 0; LH--)
          if (BH(HH[LH])) return LH;
        return -1
      },
      nH = HH => {
        throw new Error(`Unexpected value: ${HH}`)
      },
      FH = (HH, BH, LH) => {
        const AH = HH.getUint8(BH),
          rH = HH.getUint8(BH + 1),
          SH = HH.getUint8(BH + 2);
        return LH ? AH | rH << 8 | SH << 16 : AH << 16 | rH << 8 | SH
      },
      DH = (HH, BH, LH, AH) => {
        LH >>>= 0, LH &= 16777215, AH ? (HH.setUint8(BH, 255 & LH), HH.setUint8(BH + 1, LH >>> 8 & 255), HH.setUint8(BH + 2, LH >>> 16 & 255)) : (HH.setUint8(BH, LH >>> 16 & 255), HH.setUint8(BH + 1, LH >>> 8 & 255), HH.setUint8(BH + 2, 255 & LH))
      },
      wH = (HH, BH, LH, AH) => {
        (LH = dH(LH, -8388608, 8388607)) < 0 && (LH = LH + 16777216 & 16777215), DH(HH, BH, LH, AH)
      },
      ZH = (HH, BH, LH, AH) => {
        AH ? (HH.setUint32(BH + 0, LH, !0), HH.setInt32(BH + 4, Math.floor(LH / 2 ** 32), !0)) : (HH.setInt32(BH + 0, Math.floor(LH / 2 ** 32), !0), HH.setUint32(BH + 4, LH, !0))
      },
      dH = (HH, BH, LH) => Math.max(BH, Math.min(LH, HH)),
      aH = (HH, BH, LH) => HH + (BH - HH) * LH,
      sH = (HH, BH) => HH - Math.floor(HH / BH) * BH,
      JH = "und",
      iH = (HH, BH) => Math.round(HH / BH) * BH,
      pH = (HH, BH) => Math.round(HH * BH) / BH,
      yH = (HH, BH) => Math.floor(HH * BH) / BH,
      HB = HH => {
        let BH = 0;
        for (; HH;) BH++, HH >>= 1;
        return BH
      },
      BB = HH => {
        let BH = 0;
        for (; 0 !== HH;) HH &= HH - 1, BH++;
        return BH
      },
      LB = /^[a-z]{3}$/,
      AB = HH => LB.test(HH),
      rB = 1e6 * (1 + Number.EPSILON),
      SB = (HH, BH) => {
        const LH = HH < 0 ? -1 : 1;
        let AH = 0,
          rH = 1,
          SH = 1,
          hH = 0,
          tH = HH = Math.abs(HH);
        for (;;) {
          const HH = Math.floor(tH),
            zH = HH * SH + AH,
            CH = HH * hH + rH;
          if (CH > BH) return {
            num: LH * SH,
            den: hH
          };
          if (AH = SH, rH = hH, SH = zH, hH = CH, tH = 1 / (tH - HH), !isFinite(tH)) break
        }
        return {
          num: LH * SH,
          den: hH
        }
      };
    class hB {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(HH) {
        return this.currentPromise = this.currentPromise.then(HH)
      }
    }
    let tB = null;
    const zB = () => null !== tB ? tB : tB = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let CB = null;
    const EB = () => null !== CB ? CB : CB = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let XB = null;
    const GB = () => null !== XB ? XB : XB = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const YB = HH => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${HH} is not available in this environment.` : `${HH} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      uB = HH => HH instanceof DOMException && "QuotaExceededError" === HH.name && /reclaimed/i.test(HH.message),
      QB = (async () => {})().constructor,
      WB = HH => HH instanceof QB || HH instanceof Promise || "function" === typeof HH?.then,
      MB = (HH, BH) => -1 !== HH ? HH : BH,
      xB = function*(HH) {
        for (const BH in HH) {
          const LH = HH[BH];
          void 0 !== LH && (yield {
            key: BH,
            value: LH
          })
        }
      },
      vB = HH => {
        switch (HH.toLowerCase()) {
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
      PB = HH => {
        let BH = "";
        for (let LH = 0; LH < HH.length; LH++) BH += String.fromCharCode(HH[LH]);
        return btoa(BH)
      },
      TB = (HH, BH) => {
        if (HH.length !== BH.length) return !1;
        for (let LH = 0; LH < HH.length; LH++)
          if (HH[LH] !== BH[LH]) return !1;
        return !0
      },
      UB = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      VB = HH => "number" === typeof HH && !Number.isNaN(HH),
      OB = (HH, BH) => {
        if (BH.includes("://")) return BH;
        if (HH.includes("://")) {
          const BH = HH.indexOf("?"); - 1 !== BH && (HH = HH.slice(0, BH))
        }
        let LH;
        if (BH.startsWith("/")) {
          const AH = HH.indexOf("://");
          if (-1 === AH) LH = BH;
          else {
            const rH = HH.indexOf("/", AH + 3);
            LH = -1 === rH ? HH + BH : HH.slice(0, rH) + BH
          }
        } else {
          const AH = HH.lastIndexOf("/");
          LH = -1 === AH ? BH : HH.slice(0, AH + 1) + BH
        }
        let AH = "";
        const rH = LH.indexOf("://");
        if (-1 !== rH) {
          const HH = LH.indexOf("/", rH + 3); - 1 !== HH && (AH = LH.slice(0, HH), LH = LH.slice(HH))
        }
        const SH = LH.split("/"),
          hH = [];
        for (const tH of SH) ".." === tH ? hH.pop() : "." !== tH && hH.push(tH);
        return AH + hH.join("/")
      },
      bB = (HH, BH) => {
        let LH = -1,
          AH = 1 / 0;
        for (let rH = 0; rH < HH.length; rH++) {
          const SH = BH(HH[rH]);
          SH < AH && (AH = SH, LH = rH)
        }
        return LH
      },
      kB = (HH, BH) => {
        let LH = -1,
          AH = -1 / 0;
        for (let rH = 0; rH < HH.length; rH++) {
          const SH = BH(HH[rH]);
          SH > AH && (AH = SH, LH = rH)
        }
        return LH
      },
      mB = HH => {
        AH(Number.isInteger(HH.num)), AH(Number.isInteger(HH.den)), AH(0 !== HH.den);
        let BH = Math.abs(HH.num),
          LH = Math.abs(HH.den);
        for (; 0 !== LH;) {
          const HH = BH % LH;
          BH = LH, LH = HH
        }
        const rH = BH || 1;
        return {
          num: HH.num / rH,
          den: HH.den / rH
        }
      },
      oB = (HH, BH) => {
        if ("object" !== typeof HH || !HH) throw new TypeError(`${BH} must be an object.`);
        if (!Number.isInteger(HH.left) || HH.left < 0) throw new TypeError(`${BH}.left must be a non-negative integer.`);
        if (!Number.isInteger(HH.top) || HH.top < 0) throw new TypeError(`${BH}.top must be a non-negative integer.`);
        if (!Number.isInteger(HH.width) || HH.width < 0) throw new TypeError(`${BH}.width must be a non-negative integer.`);
        if (!Number.isInteger(HH.height) || HH.height < 0) throw new TypeError(`${BH}.height must be a non-negative integer.`)
      };
    let IB, fB = 1;
    const lB = new Map,
      KB = new Map,
      cB = () => "undefined" === typeof window,
      eB = () => {
        const HH = new Map,
          BH = new Map;
        self.onmessage = LH => {
          const AH = LH.data;
          switch (AH.type) {
            case "set-timeout": {
              const BH = setTimeout((() => {
                HH.delete(AH.timerId), self.postMessage({
                  type: "fire",
                  timerId: AH.timerId
                })
              }), AH.delay);
              HH.set(AH.timerId, BH)
            }
            break;
            case "set-interval": {
              const HH = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: AH.timerId
                })
              }), AH.delay);
              BH.set(AH.timerId, HH)
            }
            break;
            case "clear-timeout": {
              const BH = HH.get(AH.timerId);
              void 0 !== BH && (clearTimeout(BH), HH.delete(AH.timerId))
            }
            break;
            case "clear-interval": {
              const HH = BH.get(AH.timerId);
              void 0 !== HH && (clearInterval(HH), BH.delete(AH.timerId))
            }
          }
        }
      },
      qB = () => {
        if (IB) return IB;
        const HH = `(${eB.toString()})();`,
          BH = URL.createObjectURL(new Blob([HH], {
            type: "text/javascript"
          }));
        return IB = new Worker(BH), URL.revokeObjectURL(BH), IB.onmessage = HH => {
          const BH = HH.data,
            LH = lB.get(BH.timerId);
          if (LH) return lB.delete(BH.timerId), void LH();
          const AH = KB.get(BH.timerId);
          AH && AH()
        }, IB
      },
      gB = (HH, BH) => {
        if (cB()) return {
          id: setInterval(HH, BH)
        };
        const LH = fB++;
        return KB.set(LH, (() => {
          HH()
        })), qB().postMessage({
          type: "set-interval",
          timerId: LH,
          delay: BH
        }), {
          id: LH
        }
      },
      NB = HH => {
        cB() ? clearInterval(HH.id) : (AH("number" === typeof HH.id), KB.delete(HH.id), qB().postMessage({
          type: "clear-interval",
          timerId: HH.id
        }))
      },
      RB = HH => new Promise((BH => setTimeout(BH, HH))),
      jB = HH => Array.isArray(HH) ? HH : [HH];
    class nB {
      constructor() {
        this._listeners = new Map
      }
      on(HH, BH, LH) {
        this._listeners.has(HH) || this._listeners.set(HH, new Set);
        const AH = {
          EX: BH,
          once: LH?.once ?? !1
        };
        return this._listeners.get(HH).add(AH), () => {
          this._listeners.get(HH)?.delete(AH)
        }
      }
      _emit() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        const [AH, rH] = BH, SH = this._listeners.get(AH);
        if (SH)
          for (const tH of SH) {
            try {
              tH.EX(rH)
            } catch (hH) {
              console.error(hH)
            }
            tH.once && SH.delete(tH)
          }
      }
    }
    const FB = HH => null !== HH && "object" === typeof HH && Object.getPrototypeOf(HH) === Object.prototype && Object.values(HH).every((HH => "string" === typeof HH))
  },
  40832: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => qL,
      d: () => gL,
      e: () => eL,
      i: () => KL,
      k: () => RL
    });
    var AH = LH(40838),
      rH = LH(40849);
    var SH;
    ! function(HH) {
      HH[HH.FrameCount = 1] = "FrameCount", HH[HH.FileSize = 2] = "FileSize", HH[HH.Toc = 4] = "Toc"
    }(SH || (SH = {}));
    var hH = LH(40866),
      tH = LH(40820);
    class zH {
      constructor(HH, BH, LH, AH, rH) {
        this.bytes = HH, this.view = BH, this.offset = LH, this.start = AH, this.end = rH, this.bufferPos = AH - LH
      }
      static tempFromBytes(HH) {
        return new zH(HH, (0, tH.ed)(HH), 0, 0, HH.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(HH) {
        this.bufferPos = HH - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(HH) {
        this.bufferPos += HH
      }
      slice(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - HH;
        if (HH < this.start || HH + BH > this.end) throw new RangeError("Slicing outside of original slice.");
        return new zH(this.bytes, this.view, this.offset, HH, HH + BH)
      }
    }
    const CH = (HH, BH) => {
        if (HH.filePos < HH.start || HH.filePos + BH > HH.end) throw new RangeError(`Tried reading [${HH.filePos}, ${HH.filePos+BH}), but slice is [${HH.start}, ${HH.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      EH = (HH, BH) => {
        CH(HH, BH);
        const LH = HH.bytes.subarray(HH.bufferPos, HH.bufferPos + BH);
        return HH.bufferPos += BH, LH
      };
    var XH, GH;
    ! function(HH) {
      HH[HH.Unsynchronisation = 128] = "Unsynchronisation", HH[HH.ExtendedHeader = 64] = "ExtendedHeader", HH[HH.ExperimentalIndicator = 32] = "ExperimentalIndicator", HH[HH.Footer = 16] = "Footer"
    }(XH || (XH = {})),
    function(HH) {
      HH[HH.ISO_8859_1 = 0] = "ISO_8859_1", HH[HH.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", HH[HH.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", HH[HH.UTF_8 = 3] = "UTF_8"
    }(GH || (GH = {}));
    var YH = LH(40825);
    class uH {
      constructor(HH) {
        this.mutex = new tH.d, this.trackTimestampInfo = new WeakMap, this.output = HH
      }
      onTrackClose(HH) {}
      validateTimestamp(HH, BH, LH) {
        let AH = this.trackTimestampInfo.get(HH);
        if (AH) {
          if (LH && (AH.maxTimestampBeforeLastKeyPacket = AH.maxTimestamp), null !== AH.maxTimestampBeforeLastKeyPacket && BH < AH.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${BH}s, but largest timestamp is ${AH.maxTimestampBeforeLastKeyPacket}s.`);
          AH.maxTimestamp = Math.max(AH.maxTimestamp, BH)
        } else {
          if (!LH) throw new Error("First packet must be a key packet.");
          AH = {
            maxTimestamp: BH,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(HH, AH)
        }
      }
    }
    var QH = LH(40858),
      WH = LH(40847);
    var MH = LH(40879),
      xH = LH(40872);
    class vH {
      constructor(HH) {
        this.writer = HH, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(HH) {
        this.helperView.setUint32(0, HH, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(HH) {
        this.helperView.setUint32(0, Math.floor(HH / 2 ** 32), !1), this.helperView.setUint32(4, HH, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(HH) {
        for (let BH = 0; BH < HH.length; BH++) this.helperView.setUint8(BH % 8, HH.charCodeAt(BH)), BH % 8 === 7 && this.writer.write(this.helper);
        HH.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, HH.length % 8))
      }
      writeBox(HH) {
        if (this.offsets.set(HH, this.writer.getPos()), HH.contents && !HH.children) this.writeBoxHeader(HH, HH.size ?? HH.contents.byteLength + 8), this.writer.write(HH.contents);
        else {
          const BH = this.writer.getPos();
          if (this.writeBoxHeader(HH, 0), HH.contents && this.writer.write(HH.contents), HH.children)
            for (const rH of HH.children) rH && this.writeBox(rH);
          const LH = this.writer.getPos(),
            AH = HH.size ?? LH - BH;
          this.writer.seek(BH), this.writeBoxHeader(HH, AH), this.writer.seek(LH)
        }
      }
      writeBoxHeader(HH, BH) {
        this.writeU32(HH.largeSize ? 1 : BH), this.writeAscii(HH.type), HH.largeSize && this.writeU64(BH)
      }
      measureBoxHeader(HH) {
        return 8 + (HH.largeSize ? 8 : 0)
      }
      patchBox(HH) {
        const BH = this.offsets.get(HH);
        (0, tH.J)(void 0 !== BH);
        const LH = this.writer.getPos();
        this.writer.seek(BH), this.writeBox(HH), this.writer.seek(LH)
      }
      measureBox(HH) {
        if (HH.contents && !HH.children) {
          return this.measureBoxHeader(HH) + HH.contents.byteLength
        } {
          let BH = this.measureBoxHeader(HH);
          if (HH.contents && (BH += HH.contents.byteLength), HH.children)
            for (const LH of HH.children) LH && (BH += this.measureBox(LH));
          return BH
        }
      }
    }
    const PH = new Uint8Array(8),
      TH = new DataView(PH.buffer),
      UH = HH => [(HH % 256 + 256) % 256],
      VH = HH => (TH.setUint16(0, HH, !1), [PH[0], PH[1]]),
      OH = HH => (TH.setInt16(0, HH, !1), [PH[0], PH[1]]),
      bH = HH => (TH.setUint32(0, HH, !1), [PH[1], PH[2], PH[3]]),
      kH = HH => (TH.setUint32(0, HH, !1), [PH[0], PH[1], PH[2], PH[3]]),
      mH = HH => (TH.setInt32(0, HH, !1), [PH[0], PH[1], PH[2], PH[3]]),
      oH = HH => (TH.setUint32(0, Math.floor(HH / 2 ** 32), !1), TH.setUint32(4, HH, !1), [PH[0], PH[1], PH[2], PH[3], PH[4], PH[5], PH[6], PH[7]]),
      IH = HH => (TH.setInt32(0, Math.floor(HH / 2 ** 32), !1), TH.setUint32(4, HH, !1), [PH[0], PH[1], PH[2], PH[3], PH[4], PH[5], PH[6], PH[7]]),
      fH = HH => (TH.setInt16(0, 256 * HH, !1), [PH[0], PH[1]]),
      lH = HH => (TH.setInt32(0, 65536 * HH, !1), [PH[0], PH[1], PH[2], PH[3]]),
      KH = HH => (TH.setInt32(0, 2 ** 30 * HH, !1), [PH[0], PH[1], PH[2], PH[3]]),
      cH = (HH, BH) => {
        const LH = [];
        let AH = HH;
        do {
          let HH = 127 & AH;
          AH >>= 7, LH.length > 0 && (HH |= 128), LH.push(HH), void 0 !== BH && BH--
        } while (AH > 0 || BH);
        return LH.reverse()
      },
      eH = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = Array(HH.length).fill(null).map(((BH, LH) => HH.charCodeAt(LH)));
        return BH && LH.push(0), LH
      },
      qH = HH => [lH(HH[0]), lH(HH[1]), KH(HH[2]), lH(HH[3]), lH(HH[4]), KH(HH[5]), lH(HH[6]), lH(HH[7]), KH(HH[8])],
      gH = (HH, BH, LH) => ({
        type: HH,
        contents: BH && new Uint8Array(BH.flat(10)),
        children: LH
      }),
      NH = (HH, BH, LH, AH, rH) => gH(HH, [UH(BH), bH(LH), AH ?? []], rH),
      RH = () => gH("styp", [eH("iso5"), kH(0), eH("iso5"), eH("iso6"), eH("mp41"), eH("cmfc"), eH("dash")]),
      jH = (HH, BH) => {
        const LH = Math.max(0, HH.minWrittenTimestamp);
        let AH = Math.max(0, HH.maxWrittenEndTimestamp - LH);
        return Number.isFinite(AH) || (AH = 0), NH("sidx", 1, 0, [kH(1), kH(EL), oH(GL(LH, EL)), oH(0), VH(0), VH(1), kH(2147483647 & BH), kH(GL(AH, EL)), kH(0)])
      },
      nH = HH => ({
        type: "mdat",
        largeSize: HH
      }),
      FH = HH => gH("moov", void 0, [DH(HH.creationTime, HH.trackDatas), ...HH.trackDatas.map((BH => wH(BH, HH.creationTime))), HH.isFragmented ? fB(HH.trackDatas) : null, ZB(HH)]),
      DH = (HH, BH) => {
        const LH = Math.max(0, ...BH.map((HH => Math.max(0, GL(YL(HH), EL) + GL(HH.startTimestampOffset ?? 0, EL))))),
          AH = Math.max(0, ...BH.map((HH => HH.track.id))) + 1,
          rH = !(0, tH.Pb)(HH) || !(0, tH.Pb)(LH),
          SH = rH ? oH : kH;
        return NH("mvhd", +rH, 0, [SH(HH), SH(HH), kH(EL), SH(LH), lH(1), fH(1), Array(10).fill(0), qH(tH.m), Array(24).fill(0), kH(AH)])
      },
      wH = (HH, BH) => {
        const LH = XL(HH),
          AH = null !== HH.startTimestampOffset && 0 !== HH.startTimestampOffset;
        return gH("trak", void 0, [ZH(HH, BH), AH ? dH(HH) : null, aH(HH, BH), void 0 !== LH.name ? gH("udta", void 0, [gH("name", [...tH.$c.encode(LH.name)])]) : null])
      },
      ZH = (HH, BH) => {
        const LH = Math.max(0, GL(YL(HH), EL) + GL(HH.startTimestampOffset ?? 0, EL)),
          AH = !(0, tH.Pb)(BH) || !(0, tH.Pb)(LH),
          rH = AH ? oH : kH;
        let SH;
        if ("video" === HH.type && HH.track.metadata.transformationMatrix) SH = HH.track.metadata.transformationMatrix;
        else if ("video" === HH.type) {
          const {
            rotation: BH,
            flip: LH
          } = HH.track.metadata, AH = (0, tH.bc)((0, tH.wc)(BH ?? 0), (0, tH.Ec)(LH ? -1 : 1, 1));
          SH = (0, tH.X)(AH, HH.info.width, HH.info.height)
        } else SH = tH.m;
        let hH = 2;
        !1 !== HH.track.metadata.disposition?.default && (hH |= 1);
        const zH = "video" === HH.type ? 0 : "audio" === HH.type ? 1 : "subtitle" === HH.type ? 2 : (0, tH.G)(HH);
        return NH("tkhd", +AH, hH, [rH(BH), rH(BH), kH(HH.track.id), kH(0), rH(LH), Array(8).fill(0), VH(0), VH(zH), fH("audio" === HH.type ? 1 : 0), VH(0), qH(SH), lH("video" === HH.type ? HH.info.width : 0), lH("video" === HH.type ? HH.info.height : 0)])
      },
      dH = HH => {
        const BH = HH.startTimestampOffset;
        if ((0, tH.J)(null !== BH), BH > 0) {
          const LH = GL(BH, EL),
            AH = GL(YL(HH), EL),
            rH = !(0, tH.Pb)(LH) || !(0, tH.Pb)(AH),
            SH = rH ? oH : kH,
            hH = rH ? IH : mH;
          return gH("edts", void 0, [NH("elst", rH ? 1 : 0, 0, [kH(2), SH(LH), hH(-1), lH(1), SH(AH), hH(0), lH(1)])])
        } {
          const LH = GL(-BH, HH.timescale),
            AH = Math.max(0, GL(YL(HH), EL) + GL(BH, EL)),
            rH = !(0, tH.Gb)(LH) || !(0, tH.Pb)(AH),
            SH = rH ? oH : kH,
            hH = rH ? IH : mH;
          return gH("edts", void 0, [NH("elst", rH ? 1 : 0, 0, [kH(1), SH(AH), hH(LH), lH(1)])])
        }
      },
      aH = (HH, BH) => gH("mdia", void 0, [sH(HH, BH), pH(!0, JH[HH.type], iH[HH.type]), yH(HH)]),
      sH = (HH, BH) => {
        const LH = GL(YL(HH), HH.timescale),
          AH = !(0, tH.Pb)(BH) || !(0, tH.Pb)(LH),
          rH = AH ? oH : kH;
        return NH("mdhd", +AH, 0, [rH(BH), rH(BH), kH(HH.timescale), rH(LH), VH(hL(HH.track.metadata.languageCode ?? tH.x)), VH(0)])
      },
      JH = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      iH = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      pH = function(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return NH("hdlr", 0, 0, [HH ? eH("mhlr") : kH(0), eH(BH), eH(AH), kH(0), kH(0), eH(LH, !0)])
      },
      yH = HH => gH("minf", void 0, [HB[HH.type](), BB(), rB(HH)]),
      HB = {
        video: () => NH("vmhd", 0, 1, [VH(0), VH(0), VH(0), VH(0)]),
        audio: () => NH("smhd", 0, 0, [VH(0), VH(0)]),
        subtitle: () => NH("nmhd", 0, 0)
      },
      BB = () => gH("dinf", void 0, [LB()]),
      LB = () => NH("dref", 0, 0, [kH(1)], [AB()]),
      AB = () => NH("url ", 0, 1),
      rB = HH => {
        const BH = HH.compositionTimeOffsetTable.length > 1 || HH.compositionTimeOffsetTable.some((HH => 0 !== HH.sampleCompositionTimeOffset));
        return gH("stbl", void 0, [SB(HH), VB(HH), BH ? oB(HH) : null, BH ? IB(HH) : null, bB(HH), kB(HH), mB(HH), OB(HH)])
      },
      SB = HH => {
        let BH;
        if ("video" === HH.type) BH = hB(HL(HH.track.source._codec, HH.info.decoderConfig.codec), HH);
        else if ("audio" === HH.type) {
          const LH = LL(HH.track.source._codec, HH.info.decoderConfig.codec, HH.muxer.isQuickTime);
          (0, tH.J)(LH), BH = XB(LH, HH)
        } else "subtitle" === HH.type && (BH = UB(rL[HH.track.source._codec], HH));
        return (0, tH.J)(BH), NH("stsd", 0, 0, [kH(1)], [BH])
      },
      hB = (HH, BH) => gH(HH, [Array(6).fill(0), VH(1), VH(0), VH(0), Array(12).fill(0), VH(BH.info.width), VH(BH.info.height), kH(4718592), kH(4718592), kH(0), VH(1), UH(xH.e.length), eH(xH.e), Array(31 - xH.e.length).fill(0), VH(BH.info.hasAlphaChannel ? 32 : 24), OH(65535)], [BL[BH.track.source._codec]?.(BH) ?? null, zB(BH), (0, tH.eb)(BH.info.decoderConfig.colorSpace) ? null : CB(BH), tB(BH)]),
      tB = HH => 0 === HH.avgBitrate && 0 === HH.maxBitrate ? null : gH("btrt", [kH(0), kH(HH.maxBitrate), kH(HH.avgBitrate)]),
      zB = HH => HH.info.pixelAspectRatio.num === HH.info.pixelAspectRatio.den ? null : gH("pasp", [kH(HH.info.pixelAspectRatio.num), kH(HH.info.pixelAspectRatio.den)]),
      CB = HH => {
        const BH = HH.info.decoderConfig.colorSpace;
        return gH("colr", [eH(HH.muxer.isQuickTime ? "nclc" : "nclx"), VH(null != BH?.primaries ? tH.g[BH.primaries] : 2), VH(null != BH?.transfer ? tH.v[BH.transfer] : 2), VH(null != BH?.matrix ? tH.p[BH.matrix] : 2), HH.muxer.isQuickTime ? [] : UH((BH?.fullRange ? 1 : 0) << 7)])
      },
      EB = HH => {
        if (!HH.info.decoderConfig) return null;
        const BH = HH.info.decoderConfig,
          LH = BH.codec.split("."),
          AH = Number(LH[1]),
          rH = Number(LH[2]),
          SH = (Number(LH[3]) << 4) + ((LH[4] ? Number(LH[4]) : 1) << 1) + (LH[8] ? Number(LH[8]) : Number(BH.colorSpace?.fullRange ?? 0)),
          hH = LH[5] ? Number(LH[5]) : BH.colorSpace?.primaries ? tH.g[BH.colorSpace.primaries] : 1,
          zH = LH[6] ? Number(LH[6]) : BH.colorSpace?.transfer ? tH.v[BH.colorSpace.transfer] : 1,
          CH = LH[7] ? Number(LH[7]) : BH.colorSpace?.matrix ? tH.p[BH.colorSpace.matrix] : 1;
        return NH("vpcC", 1, 0, [UH(AH), UH(rH), UH(SH), UH(hH), UH(zH), UH(CH), VH(0)])
      },
      XB = (HH, BH) => {
        let LH, AH = 0,
          SH = 16;
        const hH = rH.k.includes(BH.track.source._codec);
        if (hH) {
          const HH = BH.track.source._codec,
            {
              sampleSize: LH
            } = (0, rH.S)(HH);
          SH = 8 * LH, SH > 16 && (AH = 1)
        }
        if (BH.muxer.isQuickTime && (AH = 1), 0 === AH) LH = [Array(6).fill(0), VH(1), VH(AH), VH(0), kH(0), VH(BH.info.numberOfChannels), VH(SH), VH(0), VH(0), VH(BH.info.sampleRate < 65536 ? BH.info.sampleRate : 0), VH(0)];
        else {
          const HH = hH ? 0 : -2;
          LH = [Array(6).fill(0), VH(1), VH(AH), VH(0), kH(0), VH(BH.info.numberOfChannels), VH(Math.min(SH, 16)), OH(HH), VH(0), VH(BH.info.sampleRate < 65536 ? BH.info.sampleRate : 0), VH(0), hH ? [kH(1), kH(SH / 8), kH(BH.info.numberOfChannels * SH / 8)] : [kH(0), kH(0), kH(0)], kH(2)]
        }
        return gH(HH, LH, [AL(BH.track.source._codec, BH.muxer.isQuickTime)?.(BH) ?? null, tB(BH)])
      },
      GB = HH => {
        let BH;
        switch (HH.track.source._codec) {
          case "aac":
            BH = 64;
            break;
          case "mp3":
            BH = 107;
            break;
          case "vorbis":
            BH = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${HH.track.source._codec}`)
        }
        let LH = [...UH(BH), ...UH(21), ...bH(0), ...kH(HH.maxBitrate), ...kH(HH.avgBitrate)];
        if (HH.info.decoderConfig.description) {
          const BH = (0, tH.id)(HH.info.decoderConfig.description);
          LH = [...LH, ...UH(5), ...cH(BH.byteLength), ...BH]
        }
        return LH = [...VH(1), ...UH(0), ...UH(4), ...cH(LH.length), ...LH, ...UH(6), ...UH(1), ...UH(2)], LH = [...UH(3), ...cH(LH.length), ...LH], NH("esds", 0, 0, LH)
      },
      YB = HH => gH("wave", void 0, [uB(HH), QB(HH), gH("\0\0\0\0")]),
      uB = HH => gH("frma", [eH(LL(HH.track.source._codec, HH.info.decoderConfig.codec, HH.muxer.isQuickTime))]),
      QB = HH => {
        const {
          littleEndian: BH
        } = (0, rH.S)(HH.track.source._codec);
        return gH("enda", [VH(+BH)])
      },
      WB = HH => {
        let BH = HH.info.numberOfChannels,
          LH = 3840,
          AH = HH.info.sampleRate,
          rH = 0,
          SH = 0,
          hH = new Uint8Array(0);
        const zH = HH.info.decoderConfig?.description;
        if (zH) {
          (0, tH.J)(zH.byteLength >= 18);
          const HH = (0, tH.id)(zH),
            CH = (0, QH.db)(HH);
          BH = CH.outputChannelCount, LH = CH.preSkip, AH = CH.inputSampleRate, rH = CH.outputGain, SH = CH.channelMappingFamily, CH.channelMappingTable && (hH = CH.channelMappingTable)
        }
        return gH("dOps", [UH(0), UH(BH), VH(LH), kH(AH), OH(rH), UH(SH), ...hH])
      },
      MB = HH => {
        const BH = HH.info.decoderConfig?.description;
        (0, tH.J)(BH);
        const LH = (0, tH.id)(BH);
        return NH("dfLa", 0, 0, [...LH.subarray(4)])
      },
      xB = HH => {
        const {
          littleEndian: BH,
          sampleSize: LH
        } = (0, rH.S)(HH.track.source._codec);
        return NH("pcmC", 0, 0, [UH(+BH), UH(8 * LH)])
      },
      vB = HH => {
        (0, tH.J)(HH.info.primingPacket);
        const BH = (0, QH.W)(HH.info.primingPacket.data);
        if (!BH) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const LH = new Uint8Array(3),
          AH = new WH.e(LH);
        return AH.writeBits(2, BH.fscod), AH.writeBits(5, BH.bsid), AH.writeBits(3, BH.bsmod), AH.writeBits(3, BH.acmod), AH.writeBits(1, BH.lfeon), AH.writeBits(5, BH.bitRateCode), AH.writeBits(5, 0), gH("dac3", [...LH])
      },
      PB = HH => {
        (0, tH.J)(HH.info.primingPacket);
        const BH = (0, QH._)(HH.info.primingPacket.data);
        if (!BH) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let LH = 16;
        for (const hH of BH.substreams) LH += 23, hH.numDepSub > 0 ? LH += 9 : LH += 1;
        const AH = Math.ceil(LH / 8),
          rH = new Uint8Array(AH),
          SH = new WH.e(rH);
        SH.writeBits(13, BH.dataRate), SH.writeBits(3, BH.substreams.length - 1);
        for (const hH of BH.substreams) SH.writeBits(2, hH.fscod), SH.writeBits(5, hH.bsid), SH.writeBits(1, 0), SH.writeBits(1, 0), SH.writeBits(3, hH.bsmod), SH.writeBits(3, hH.acmod), SH.writeBits(1, hH.lfeon), SH.writeBits(3, 0), SH.writeBits(4, hH.numDepSub), hH.numDepSub > 0 ? SH.writeBits(9, hH.chanLoc) : SH.writeBits(1, 0);
        return gH("dec3", [...rH])
      },
      TB = HH => {
        (0, tH.J)(HH.info.primingPacket);
        const BH = (0, QH.X)(HH.info.primingPacket.data);
        if (!BH) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return gH("ddts", [...(0, QH.q)(BH)])
      },
      UB = (HH, BH) => gH(HH, [Array(6).fill(0), VH(1)], [SL[BH.track.source._codec](BH), tB(BH)]),
      VB = HH => NH("stts", 0, 0, [kH(HH.timeToSampleTable.length), HH.timeToSampleTable.map((HH => [kH(HH.sampleCount), kH(HH.sampleDelta)]))]),
      OB = HH => {
        if (HH.samples.every((HH => "key" === HH.type))) return null;
        const BH = [...HH.samples.entries()].filter((HH => {
          let [, BH] = HH;
          return "key" === BH.type
        }));
        return NH("stss", 0, 0, [kH(BH.length), BH.map((HH => {
          let [BH] = HH;
          return kH(BH + 1)
        }))])
      },
      bB = HH => NH("stsc", 0, 0, [kH(HH.compactlyCodedChunkTable.length), HH.compactlyCodedChunkTable.map((HH => [kH(HH.firstChunk), kH(HH.samplesPerChunk), kH(1)]))]),
      kB = HH => {
        if ("audio" === HH.type && HH.info.requiresPcmTransformation) {
          const {
            sampleSize: BH
          } = (0, rH.S)(HH.track.source._codec);
          return NH("stsz", 0, 0, [kH(BH * HH.info.numberOfChannels), kH(HH.samples.reduce(((BH, LH) => BH + GL(LH.duration, HH.timescale)), 0))])
        }
        return NH("stsz", 0, 0, [kH(0), kH(HH.samples.length), HH.samples.map((HH => kH(HH.size)))])
      },
      mB = HH => HH.finalizedChunks.length > 0 && (0, tH.Xb)(HH.finalizedChunks).offset >= 2 ** 32 ? NH("co64", 0, 0, [kH(HH.finalizedChunks.length), HH.finalizedChunks.map((HH => oH(HH.offset)))]) : NH("stco", 0, 0, [kH(HH.finalizedChunks.length), HH.finalizedChunks.map((HH => kH(HH.offset)))]),
      oB = HH => NH("ctts", 1, 0, [kH(HH.compositionTimeOffsetTable.length), HH.compositionTimeOffsetTable.map((HH => [kH(HH.sampleCount), mH(HH.sampleCompositionTimeOffset)]))]),
      IB = HH => {
        let BH = 1 / 0,
          LH = -1 / 0,
          AH = 1 / 0,
          rH = -1 / 0;
        (0, tH.J)(HH.compositionTimeOffsetTable.length > 0), (0, tH.J)(HH.samples.length > 0);
        for (let hH = 0; hH < HH.compositionTimeOffsetTable.length; hH++) {
          const AH = HH.compositionTimeOffsetTable[hH];
          BH = Math.min(BH, AH.sampleCompositionTimeOffset), LH = Math.max(LH, AH.sampleCompositionTimeOffset)
        }
        for (let hH = 0; hH < HH.samples.length; hH++) {
          const BH = HH.samples[hH];
          AH = Math.min(AH, GL(BH.timestamp, HH.timescale)), rH = Math.max(rH, GL(BH.timestamp + BH.duration, HH.timescale))
        }
        const SH = Math.max(-BH, 0);
        return rH >= 2 ** 31 ? null : NH("cslg", 0, 0, [mH(SH), mH(BH), mH(LH), mH(AH), mH(rH)])
      },
      fB = HH => gH("mvex", void 0, HH.map(lB)),
      lB = HH => NH("trex", 0, 0, [kH(HH.track.id), kH(1), kH(0), kH(0), kH(0)]),
      KB = (HH, BH) => gH("moof", void 0, [cB(HH), ...BH.map(qB)]),
      cB = HH => NH("mfhd", 0, 0, [kH(HH)]),
      eB = HH => {
        let BH = 0,
          LH = 0;
        const AH = "delta" === HH.type;
        return LH |= +AH, BH |= AH ? 1 : 2, BH << 24 | LH << 16
      },
      qB = HH => gH("traf", void 0, [gB(HH), NB(HH), RB(HH)]),
      gB = HH => {
        (0, tH.J)(HH.currentChunk);
        let BH = 0;
        BH |= 8, BH |= 16, BH |= 32, BH |= 131072;
        const LH = HH.currentChunk.samples[1] ?? HH.currentChunk.samples[0],
          AH = {
            duration: LH.timescaleUnitsToNextSample,
            size: LH.size,
            flags: eB(LH)
          };
        return NH("tfhd", 0, 131128, [kH(HH.track.id), kH(AH.duration), kH(AH.size), kH(AH.flags)])
      },
      NB = HH => ((0, tH.J)(HH.currentChunk), NH("tfdt", 1, 0, [oH(GL(HH.currentChunk.startTimestamp, HH.timescale))])),
      RB = HH => {
        (0, tH.J)(HH.currentChunk);
        const BH = HH.currentChunk.samples.map((HH => HH.timescaleUnitsToNextSample)),
          LH = HH.currentChunk.samples.map((HH => HH.size)),
          AH = HH.currentChunk.samples.map(eB),
          rH = HH.currentChunk.samples.map((BH => GL(BH.timestamp - BH.decodeTimestamp, HH.timescale))),
          SH = new Set(BH),
          hH = new Set(LH),
          zH = new Set(AH),
          CH = new Set(rH),
          EH = 2 === zH.size && AH[0] !== AH[1],
          XH = SH.size > 1,
          GH = hH.size > 1,
          YH = !EH && zH.size > 1,
          uH = CH.size > 1 || [...CH].some((HH => 0 !== HH));
        let QH = 0;
        return QH |= 1, QH |= 4 * +EH, QH |= 256 * +XH, QH |= 512 * +GH, QH |= 1024 * +YH, QH |= 2048 * +uH, NH("trun", 1, QH, [kH(HH.currentChunk.samples.length), kH(HH.currentChunk.offset - HH.currentChunk.moofOffset || 0), EH ? kH(AH[0]) : [], HH.currentChunk.samples.map(((HH, SH) => [XH ? kH(BH[SH]) : [], GH ? kH(LH[SH]) : [], YH ? kH(AH[SH]) : [], uH ? mH(rH[SH]) : []]))])
      },
      jB = HH => NH("tfra", 1, 0, [kH(HH.track.id), kH(63), kH(HH.finalizedChunks.length), HH.finalizedChunks.map((BH => [oH(GL(BH.samples[0].timestamp, HH.timescale)), oH(BH.moofOffset), kH(BH.trafIndex + 1), kH(1), kH(1)]))]),
      nB = () => NH("mfro", 0, 0, [kH(0)]),
      FB = () => gH("vtte"),
      DB = (HH, BH, LH, AH, rH) => gH("vttc", void 0, [null !== rH ? gH("vsid", [mH(rH)]) : null, null !== LH ? gH("iden", [...tH.$c.encode(LH)]) : null, null !== BH ? gH("ctim", [...tH.$c.encode((0, MH.f)(BH))]) : null, null !== AH ? gH("sttg", [...tH.$c.encode(AH)]) : null, gH("payl", [...tH.$c.encode(HH)])]),
      wB = HH => gH("vtta", [...tH.$c.encode(HH)]),
      ZB = HH => {
        const BH = [],
          LH = HH.format._options.metadataFormat ?? "auto",
          AH = HH.output._metadataTags;
        if ("mdir" === LH || "auto" === LH && !HH.isQuickTime) {
          const HH = iB(AH);
          HH && BH.push(HH)
        } else if ("mdta" === LH) {
          const HH = pB(AH);
          HH && BH.push(HH)
        } else("udta" === LH || "auto" === LH && HH.isQuickTime) && dB(BH, HH.output._metadataTags);
        return 0 === BH.length ? null : gH("udta", void 0, BH)
      },
      dB = (HH, BH) => {
        for (const {
            key: LH,
            value: AH
          }
          of(0, tH.Vb)(BH)) switch (LH) {
          case "title":
            HH.push(aB("\xa9nam", AH));
            break;
          case "description":
            HH.push(aB("\xa9des", AH));
            break;
          case "artist":
            HH.push(aB("\xa9ART", AH));
            break;
          case "album":
            HH.push(aB("\xa9alb", AH));
            break;
          case "albumArtist":
            HH.push(aB("albr", AH));
            break;
          case "genre":
            HH.push(aB("\xa9gen", AH));
            break;
          case "date":
            HH.push(aB("\xa9day", AH.toISOString().slice(0, 10)));
            break;
          case "comment":
            HH.push(aB("\xa9cmt", AH));
            break;
          case "lyrics":
            HH.push(aB("\xa9lyr", AH));
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
            (0, tH.G)(LH)
        }
        if (BH.raw)
          for (const LH in BH.raw) {
            const AH = BH.raw[LH];
            null == AH || 4 !== LH.length || HH.some((HH => HH.type === LH)) || ("string" === typeof AH ? HH.push(aB(LH, AH)) : AH instanceof Uint8Array && HH.push(gH(LH, Array.from(AH))))
          }
      },
      aB = (HH, BH) => {
        const LH = tH.$c.encode(BH);
        return gH(HH, [VH(LH.length), VH(hL("und")), Array.from(LH)])
      },
      sB = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      JB = (HH, BH) => {
        const LH = [];
        for (const {
            key: AH,
            value: rH
          }
          of(0, tH.Vb)(HH)) switch (AH) {
          case "title":
            LH.push({
              key: BH ? "title" : "\xa9nam",
              value: yB(rH)
            });
            break;
          case "description":
            LH.push({
              key: BH ? "description" : "\xa9des",
              value: yB(rH)
            });
            break;
          case "artist":
            LH.push({
              key: BH ? "artist" : "\xa9ART",
              value: yB(rH)
            });
            break;
          case "album":
            LH.push({
              key: BH ? "album" : "\xa9alb",
              value: yB(rH)
            });
            break;
          case "albumArtist":
            LH.push({
              key: BH ? "album_artist" : "aART",
              value: yB(rH)
            });
            break;
          case "comment":
            LH.push({
              key: BH ? "comment" : "\xa9cmt",
              value: yB(rH)
            });
            break;
          case "genre":
            LH.push({
              key: BH ? "genre" : "\xa9gen",
              value: yB(rH)
            });
            break;
          case "beatsPerMinute":
            BH || LH.push({
              key: "tmpo",
              value: gH("data", [kH(21), kH(0), VH(rH)])
            });
            break;
          case "lyrics":
            LH.push({
              key: BH ? "lyrics" : "\xa9lyr",
              value: yB(rH)
            });
            break;
          case "date":
            LH.push({
              key: BH ? "date" : "\xa9day",
              value: yB(rH.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const HH of rH) "coverFront" === HH.kind && LH.push({
              key: "covr",
              value: gH("data", [kH(sB[HH.mimeType] ?? 0), kH(0), Array.from(HH.data)])
            });
            break;
          case "trackNumber":
            if (BH) {
              const BH = void 0 !== HH.tracksTotal ? `${rH}/${HH.tracksTotal}` : rH.toString();
              LH.push({
                key: "track",
                value: yB(BH)
              })
            } else LH.push({
              key: "trkn",
              value: gH("data", [kH(0), kH(0), VH(0), VH(rH), VH(HH.tracksTotal ?? 0), VH(0)])
            });
            break;
          case "discNumber":
            BH || LH.push({
              key: "disc",
              value: gH("data", [kH(0), kH(0), VH(0), VH(rH), VH(HH.discsTotal ?? 0), VH(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, tH.G)(AH)
        }
        if (HH.raw)
          for (const AH in HH.raw) {
            const rH = HH.raw[AH];
            null == rH || !BH && 4 !== AH.length || LH.some((HH => HH.key === AH)) || ("string" === typeof rH ? LH.push({
              key: AH,
              value: yB(rH)
            }) : rH instanceof Uint8Array ? LH.push({
              key: AH,
              value: gH("data", [kH(0), kH(0), Array.from(rH)])
            }) : rH instanceof YH.h && LH.push({
              key: AH,
              value: gH("data", [kH(sB[rH.mimeType] ?? 0), kH(0), Array.from(rH.data)])
            }))
          }
        return LH
      },
      iB = HH => {
        const BH = JB(HH, !1);
        return 0 === BH.length ? null : NH("meta", 0, 0, void 0, [pH(!1, "mdir", "", "appl"), gH("ilst", void 0, BH.map((HH => gH(HH.key, void 0, [HH.value]))))])
      },
      pB = HH => {
        const BH = JB(HH, !0);
        return 0 === BH.length ? null : gH("meta", void 0, [pH(!1, "mdta", ""), NH("keys", 0, 0, [kH(BH.length)], BH.map((HH => gH("mdta", [...tH.$c.encode(HH.key)])))), gH("ilst", void 0, BH.map(((HH, BH) => {
          const LH = String.fromCharCode(...kH(BH + 1));
          return gH(LH, void 0, [HH.value])
        })))])
      },
      yB = HH => gH("data", [kH(1), kH(0), ...tH.$c.encode(HH)]),
      HL = (HH, BH) => {
        switch (HH) {
          case "avc":
            return BH.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return BH
        }
      },
      BL = {
        avc: HH => HH.info.decoderConfig && gH("avcC", [...(0, tH.id)(HH.info.decoderConfig.description)]),
        hevc: HH => HH.info.decoderConfig && gH("hvcC", [...(0, tH.id)(HH.info.decoderConfig.description)]),
        vp8: EB,
        vp9: EB,
        av1: HH => gH("av1C", (0, rH.E)(HH.info.decoderConfig.codec)),
        prores: null
      },
      LL = (HH, BH, LH) => {
        switch (HH) {
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
            return BH
        }
        if (LH) switch (HH) {
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
        } else switch (HH) {
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
      AL = (HH, BH) => {
        switch (HH) {
          case "aac":
          case "mp3":
          case "vorbis":
            return GB;
          case "opus":
            return WB;
          case "flac":
            return MB;
          case "ac3":
            return vB;
          case "eac3":
            return PB;
          case "dts":
            return TB
        }
        if (BH) switch (HH) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return YB
        } else switch (HH) {
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
            return xB
        }
        return null
      },
      rL = {
        webvtt: "wvtt"
      },
      SL = {
        webvtt: HH => gH("vttC", [...tH.$c.encode(HH.info.config.description)])
      },
      hL = HH => {
        (0, tH.J)(3 === HH.length);
        let BH = 0;
        for (let LH = 0; LH < 3; LH++) BH <<= 5, BH += HH.charCodeAt(LH) - 96;
        return BH
      };
    var tL = LH(40881),
      zL = LH(40888);
    const CL = HH => {
        const BH = HH.filePos,
          LH = EH(HH, 9),
          AH = new WH.e(LH);
        if (4095 !== AH.readBits(12)) return null;
        AH.skipBits(1);
        if (0 !== AH.readBits(2)) return null;
        const rH = AH.readBits(1),
          SH = AH.readBits(2) + 1,
          hH = AH.readBits(4);
        if (15 === hH) return null;
        AH.skipBits(1);
        const tH = AH.readBits(3);
        if (0 === tH) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        AH.skipBits(1), AH.skipBits(1), AH.skipBits(1), AH.skipBits(1);
        const zH = AH.readBits(13);
        AH.skipBits(11);
        const CH = AH.readBits(2) + 1;
        if (1 !== CH) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let XH = null;
        return 1 === rH ? HH.filePos -= 2 : XH = AH.readBits(16), {
          objectType: SH,
          samplingFrequencyIndex: hH,
          channelConfiguration: tH,
          frameLength: zH,
          numberOfAacFrames: CH,
          crcCheck: XH,
          startPos: BH
        }
      },
      EL = 57600,
      XL = HH => {
        const BH = {},
          LH = HH.track;
        return void 0 !== LH.metadata.name && (BH.name = LH.metadata.name), BH
      },
      GL = function(HH, BH) {
        const LH = HH * BH;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(LH) : LH
      },
      YL = HH => {
        if (0 === HH.samples.length) return 0;
        let BH = 1 / 0,
          LH = -1 / 0;
        for (let AH = 0; AH < HH.samples.length; AH++) {
          const rH = HH.samples[AH];
          rH.timestamp < BH && (BH = rH.timestamp), rH.timestamp + rH.duration > LH && (LH = rH.timestamp + rH.duration)
        }
        return BH === 1 / 0 ? 0 : LH - BH
      };
    class uL extends uH {
      constructor(HH, BH) {
        super(HH), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new zL.d, this.auxWriter = new tL.e(this.auxTarget, !1), this.auxBoxWriter = new vH(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, tH.mc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = BH, this.formatOptions = {
          ...BH._options
        }, this.isQuickTime = BH instanceof gL, this.isCmaf = BH instanceof qL, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (BH instanceof qL ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const HH = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((HH => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : HH instanceof zL.d)), this.boxWriter = new vH(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof zL.d && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const HH = await this.output._getInitTarget(),
            BH = new tL.e(HH, !0);
          BH.start(), this.initWriter = BH, this.initBoxWriter = new vH(BH)
        }
        const BH = this.output.tracks.some((HH => HH.isVideoTrack() && "avc" === HH.source._codec));
        {
          const HH = this.initBoxWriter ?? this.boxWriter;
          if ((0, tH.J)(HH), this.formatOptions.onFtyp && HH.writer.startTrackingWrites(), HH.writeBox((HH => {
              const BH = 512;
              return HH.isQuickTime ? gH("ftyp", [eH("qt  "), kH(BH), eH("qt  ")]) : HH.fragmented ? HH.cmaf ? gH("ftyp", [eH("iso5"), kH(BH), eH("iso5"), eH("iso6"), eH("mp41"), eH("cmfc"), eH("dash")]) : gH("ftyp", [eH("iso5"), kH(BH), eH("iso5"), eH("iso6"), eH("mp41")]) : gH("ftyp", [eH("isom"), kH(BH), eH("isom"), HH.holdsAvc ? eH("avc1") : [], eH("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: BH,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: BH,
              start: LH
            } = HH.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(BH, LH)
          }
          this.ftypSize = HH.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const LH of this.output.tracks)
            if (void 0 === LH.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, tH.J)(this.writer), (0, tH.J)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = nH(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const LH of this.output.tracks) LH.isVideoTrack() && LH.metadata.decoderConfig ? this.getVideoTrackData(LH, LH.metadata.primingPacket ?? null, {
          decoderConfig: LH.metadata.decoderConfig
        }) : LH.isAudioTrack() && LH.metadata.decoderConfig && this.getAudioTrackData(LH, LH.metadata.primingPacket ?? null, {
          decoderConfig: LH.metadata.decoderConfig
        });
        HH()
      }
      allTracksAreKnown() {
        for (const HH of this.output.tracks)
          if (!HH.source._closed && !this.trackDatas.some((BH => BH.track === HH))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const HH = this.trackDatas.map((HH => {
          if ("video" === HH.type) return HH.info.decoderConfig.codec;
          if ("audio" === HH.type) return HH.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [HH.track.source._codec]
        }));
        return (HH => {
          let BH = (HH.hasVideo ? "video/" : HH.hasAudio ? "audio/" : "application/") + (HH.isQuickTime ? "quicktime" : "mp4");
          HH.codecStrings.length > 0 && (BH += `; codecs="${[...new Set(HH.codecStrings)].join(", ")}"`);
          return BH
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((HH => "video" === HH.type)),
          hasAudio: this.trackDatas.some((HH => "audio" === HH.type)),
          codecStrings: HH
        })
      }
      getVideoTrackData(HH, BH, LH) {
        const AH = this.trackDatas.find((BH => BH.track === HH));
        if (AH) return AH;
        (0, rH.X)(LH, HH.source._codec), (0, tH.J)(LH), (0, tH.J)(LH.decoderConfig);
        const SH = {
          ...LH.decoderConfig
        };
        (0, tH.J)(void 0 !== SH.codedWidth), (0, tH.J)(void 0 !== SH.codedHeight);
        let hH = !1;
        if ("avc" !== HH.source._codec || SH.description) {
          if ("hevc" === HH.source._codec && !SH.description) {
            if (!BH) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const HH = (0, QH.G)(BH.data);
            if (!HH) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            SH.description = (0, QH.nb)(HH), hH = !0
          }
        } else {
          if (!BH) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const HH = (0, QH.D)(BH.data);
          if (!HH) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          SH.description = (0, QH.jb)(HH), hH = !0
        }
        const zH = (0, tH.ib)(1 / (HH.metadata.frameRate ?? EL), 1e6).den,
          CH = SH.displayAspectWidth,
          EH = SH.displayAspectHeight,
          XH = void 0 === CH || void 0 === EH ? {
            num: 1,
            den: 1
          } : (0, tH.Uc)({
            num: CH * SH.codedHeight,
            den: EH * SH.codedWidth
          }),
          GH = "ap4h" === SH.codec || "ap4x" === SH.codec,
          YH = {
            muxer: this,
            track: HH,
            type: "video",
            info: {
              width: SH.codedWidth,
              height: SH.codedHeight,
              pixelAspectRatio: XH,
              decoderConfig: SH,
              requiresAnnexBTransformation: hH,
              hasAlphaChannel: GH
            },
            timescale: zH,
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
            avgBitrate: HH.source._nominalBitrate ?? HH.metadata.averageBitrate ?? 0,
            maxBitrate: HH.source._nominalBitrate ?? HH.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(YH), this.trackDatas.sort(((HH, BH) => HH.track.id - BH.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), YH
      }
      getAudioTrackData(HH, BH, LH) {
        const SH = this.trackDatas.find((BH => BH.track === HH));
        if (SH) return SH;
        (0, rH.U)(LH, HH.source._codec), (0, tH.J)(LH), (0, tH.J)(LH.decoderConfig);
        const hH = {
          ...LH.decoderConfig
        };
        let CH = !1;
        if ("aac" === HH.source._codec && !hH.description) {
          if (!BH) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const HH = CL(zH.tempFromBytes(BH.data));
          if (!HH) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const LH = AH.h[HH.samplingFrequencyIndex],
            rH = AH.e[HH.channelConfiguration];
          if (void 0 === LH || void 0 === rH) throw new Error("Invalid ADTS frame header.");
          hH.description = (0, AH.j)({
            objectType: HH.objectType,
            outputSampleRate: LH,
            outputNumberOfChannels: rH
          }), CH = !0
        }
        if (!BH) {
          if ("ac3" === HH.source._codec || "eac3" === HH.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === HH.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const EH = {
          muxer: this,
          track: HH,
          type: "audio",
          info: {
            numberOfChannels: LH.decoderConfig.numberOfChannels,
            sampleRate: LH.decoderConfig.sampleRate,
            decoderConfig: hH,
            requiresPcmTransformation: !this.isFragmented && rH.k.includes(HH.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: CH,
            primingPacket: BH
          },
          timescale: hH.sampleRate,
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
          avgBitrate: HH.source._nominalBitrate ?? HH.metadata.averageBitrate ?? 0,
          maxBitrate: HH.source._nominalBitrate ?? HH.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(EH), this.trackDatas.sort(((HH, BH) => HH.track.id - BH.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), EH
      }
      getSubtitleTrackData(HH, BH) {
        const LH = this.trackDatas.find((BH => BH.track === HH));
        if (LH) return LH;
        (0, rH.W)(BH), (0, tH.J)(BH), (0, tH.J)(BH.config);
        const AH = {
          muxer: this,
          track: HH,
          type: "subtitle",
          info: {
            config: BH.config
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
          avgBitrate: HH.source._nominalBitrate ?? HH.metadata.averageBitrate ?? 0,
          maxBitrate: HH.source._nominalBitrate ?? HH.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(AH), this.trackDatas.sort(((HH, BH) => HH.track.id - BH.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), AH
      }
      async addEncodedVideoPacket(HH, BH, LH) {
        const AH = await this.mutex.acquire();
        try {
          const AH = this.getVideoTrackData(HH, BH, LH);
          let rH = BH.data;
          if (AH.info.requiresAnnexBTransformation) {
            const HH = [...(0, QH.Q)(rH)].map((HH => rH.subarray(HH.offset, HH.offset + HH.length)));
            if (0 === HH.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            rH = (0, QH.t)(HH, 4)
          }
          this.validateTimestamp(AH.track, BH.timestamp, "key" === BH.type);
          const SH = this.createSampleForTrack(AH, rH, BH.timestamp, BH.duration, BH.type);
          await this.registerSample(AH, SH)
        } finally {
          AH()
        }
      }
      async addEncodedAudioPacket(HH, BH, LH) {
        const AH = await this.mutex.acquire();
        try {
          const AH = this.getAudioTrackData(HH, BH, LH);
          let SH = BH.data;
          if (AH.info.requiresAdtsStripping) {
            const HH = CL(zH.tempFromBytes(SH));
            if (!HH) throw new Error("Expected ADTS frame, didn't get one.");
            const BH = null === HH.crcCheck ? 7 : 9;
            SH = SH.subarray(BH)
          }
          this.validateTimestamp(AH.track, BH.timestamp, "key" === BH.type);
          let hH = BH.timestamp,
            tH = BH.duration;
          if (AH.info.requiresPcmTransformation) {
            const HH = (0, rH.S)(AH.info.decoderConfig.codec).sampleSize * AH.info.numberOfChannels;
            if (tH = SH.byteLength / HH / AH.info.sampleRate, null !== AH.info.expectedNextPcmPacketTimestamp) {
              const HH = hH - AH.info.expectedNextPcmPacketTimestamp;
              if (HH < .01) hH = AH.info.expectedNextPcmPacketTimestamp;
              else {
                const BH = await this.padWithSilence(AH, AH.info.expectedNextPcmPacketTimestamp, HH);
                hH = AH.info.expectedNextPcmPacketTimestamp + BH
              }
            }
            AH.info.expectedNextPcmPacketTimestamp = hH + tH
          }
          const CH = this.createSampleForTrack(AH, SH, hH, tH, BH.type);
          await this.registerSample(AH, CH)
        } finally {
          AH()
        }
      }
      async padWithSilence(HH, BH, LH) {
        const AH = GL(LH, HH.timescale);
        if (LH = AH / HH.timescale, AH > 0) {
          const {
            sampleSize: SH,
            silentValue: hH
          } = (0, rH.S)(HH.info.decoderConfig.codec), tH = AH * HH.info.numberOfChannels, zH = new Uint8Array(SH * tH).fill(hH), CH = this.createSampleForTrack(HH, new Uint8Array(zH.buffer), BH, LH, "key");
          await this.registerSample(HH, CH)
        }
        return LH
      }
      async addSubtitleCue(HH, BH, LH) {
        const AH = await this.mutex.acquire();
        try {
          const AH = this.getSubtitleTrackData(HH, LH);
          this.validateTimestamp(AH.track, BH.timestamp, !0), "webvtt" === HH.source._codec && (AH.cueQueue.push(BH), await this.processWebVTTCues(AH, BH.timestamp))
        } finally {
          AH()
        }
      }
      async processWebVTTCues(HH, BH) {
        for (; HH.cueQueue.length > 0;) {
          HH.lastCueEndTimestamp ??= Math.min(0, HH.cueQueue[0].timestamp);
          const LH = new Set([]);
          for (const CH of HH.cueQueue)(0, tH.J)(CH.timestamp <= BH), (0, tH.J)(HH.lastCueEndTimestamp <= CH.timestamp + CH.duration), LH.add(Math.max(CH.timestamp, HH.lastCueEndTimestamp)), LH.add(CH.timestamp + CH.duration);
          const AH = [...LH].sort(((HH, BH) => HH - BH)),
            rH = AH[0],
            SH = AH[1] ?? rH;
          if (BH < SH) break;
          if (HH.lastCueEndTimestamp < rH) {
            this.auxWriter.seek(0);
            const BH = FB();
            this.auxBoxWriter.writeBox(BH);
            const LH = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              AH = this.createSampleForTrack(HH, LH, HH.lastCueEndTimestamp, rH - HH.lastCueEndTimestamp, "key");
            await this.registerSample(HH, AH), HH.lastCueEndTimestamp = rH
          }
          this.auxWriter.seek(0);
          for (let BH = 0; BH < HH.cueQueue.length; BH++) {
            const LH = HH.cueQueue[BH];
            if (LH.timestamp >= SH) break;
            MH.i.lastIndex = 0;
            const AH = MH.i.test(LH.text),
              hH = LH.timestamp + LH.duration;
            let tH = HH.cueToSourceId.get(LH);
            if (void 0 === tH && SH < hH && (tH = HH.nextSourceId++, HH.cueToSourceId.set(LH, tH)), LH.notes) {
              const HH = wB(LH.notes);
              this.auxBoxWriter.writeBox(HH)
            }
            const zH = DB(LH.text, AH ? rH : null, LH.identifier ?? null, LH.settings ?? null, tH ?? null);
            this.auxBoxWriter.writeBox(zH), hH === SH && HH.cueQueue.splice(BH--, 1)
          }
          const hH = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            zH = this.createSampleForTrack(HH, hH, rH, SH - rH, "key");
          await this.registerSample(HH, zH), HH.lastCueEndTimestamp = SH
        }
      }
      createSampleForTrack(HH, BH, LH, AH, rH) {
        return {
          timestamp: LH,
          decodeTimestamp: LH,
          duration: AH,
          data: BH,
          size: BH.byteLength,
          type: rH,
          timescaleUnitsToNextSample: GL(AH, HH.timescale)
        }
      }
      processTimestamps(HH, BH) {
        if (0 === HH.timestampProcessingQueue.length) return;
        if ("audio" === HH.type && HH.info.requiresPcmTransformation) {
          (0, tH.J)(!this.isFragmented), HH.startTimestampOffset ??= HH.timestampProcessingQueue[0].timestamp;
          let BH = 0;
          for (let LH = 0; LH < HH.timestampProcessingQueue.length; LH++) {
            const AH = HH.timestampProcessingQueue[LH];
            BH += GL(AH.duration, HH.timescale)
          }
          if (0 === HH.timeToSampleTable.length) HH.timeToSampleTable.push({
            sampleCount: BH,
            sampleDelta: 1
          });
          else {
            (0, tH.Xb)(HH.timeToSampleTable).sampleCount += BH
          }
          return void(HH.timestampProcessingQueue.length = 0)
        }
        const LH = HH.timestampProcessingQueue.map((HH => HH.timestamp)).sort(((HH, BH) => HH - BH));
        this.isFragmented ? HH.startTimestampOffset ??= Math.min(LH[0], 0) : HH.startTimestampOffset ??= LH[0];
        for (let AH = 0; AH < HH.timestampProcessingQueue.length; AH++) {
          const BH = HH.timestampProcessingQueue[AH];
          BH.decodeTimestamp = LH[AH];
          const rH = GL(BH.timestamp - BH.decodeTimestamp, HH.timescale),
            SH = GL(BH.duration, HH.timescale);
          if (null !== HH.lastTimescaleUnits) {
            (0, tH.J)(HH.lastSample);
            const LH = GL(BH.decodeTimestamp, HH.timescale, !1),
              AH = Math.round(LH - HH.lastTimescaleUnits);
            if ((0, tH.J)(AH >= 0), HH.lastTimescaleUnits += AH, HH.lastSample.timescaleUnitsToNextSample = AH, !this.isFragmented) {
              let BH = (0, tH.Xb)(HH.timeToSampleTable);
              if ((0, tH.J)(BH), 1 === BH.sampleCount) {
                BH.sampleDelta = AH;
                const LH = HH.timeToSampleTable[HH.timeToSampleTable.length - 2];
                LH && LH.sampleDelta === AH && (LH.sampleCount++, HH.timeToSampleTable.pop(), BH = LH)
              } else BH.sampleDelta !== AH && (BH.sampleCount--, HH.timeToSampleTable.push(BH = {
                sampleCount: 1,
                sampleDelta: AH
              }));
              BH.sampleDelta === SH ? BH.sampleCount++ : HH.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: SH
              });
              const LH = (0, tH.Xb)(HH.compositionTimeOffsetTable);
              (0, tH.J)(LH), LH.sampleCompositionTimeOffset === rH ? LH.sampleCount++ : HH.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: rH
              })
            }
          } else HH.lastTimescaleUnits = GL(BH.decodeTimestamp, HH.timescale, !1), this.isFragmented || (HH.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: SH
          }), HH.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: rH
          }));
          HH.lastSample = BH
        }
        if (HH.timestampProcessingQueue.length = 0, (0, tH.J)(HH.lastSample), (0, tH.J)(null !== HH.lastTimescaleUnits), void 0 !== BH && 0 === HH.lastSample.timescaleUnitsToNextSample) {
          (0, tH.J)("key" === BH.type);
          const LH = GL(BH.timestamp, HH.timescale, !1),
            AH = Math.round(LH - HH.lastTimescaleUnits);
          HH.lastSample.timescaleUnitsToNextSample = AH
        }
      }
      async registerSample(HH, BH) {
        "key" === BH.type && this.processTimestamps(HH, BH), HH.timestampProcessingQueue.push(BH), this.isFragmented ? (HH.sampleQueue.push(BH), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(HH, BH) : await this.addSampleToTrack(HH, BH)
      }
      async addSampleToTrack(HH, BH) {
        if (!this.isFragmented && (HH.samples.push(BH), "reserve" === this.fastStart)) {
          const BH = HH.track.metadata.maximumPacketCount;
          if ((0, tH.J)(void 0 !== BH), HH.samples.length > BH) throw new Error(`Track #${HH.track.id} has already reached the maximum packet count (${BH}). Either add less packets or increase the maximum packet count.`)
        }
        let LH = !1;
        if (HH.currentChunk) {
          HH.currentChunk.startTimestamp = Math.min(HH.currentChunk.startTimestamp, BH.timestamp);
          const AH = BH.timestamp - HH.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const rH = this.trackDatas.every((LH => {
              if (HH === LH) return "key" === BH.type;
              const AH = LH.sampleQueue[0];
              return AH ? "key" === AH.type : LH.closed
            }));
            AH >= this.minimumFragmentDuration && rH && BH.timestamp > this.maxWrittenTimestamp && (LH = !0, await this.finalizeFragment())
          } else LH = AH >= .5
        } else LH = !0;
        LH && (HH.currentChunk && await this.finalizeCurrentChunk(HH), HH.currentChunk = {
          startTimestamp: BH.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, tH.J)(HH.currentChunk), HH.currentChunk.samples.push(BH), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, BH.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, BH.timestamp + BH.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, BH.timestamp))
      }
      async finalizeCurrentChunk(HH) {
        if ((0, tH.J)(!this.isFragmented), (0, tH.J)(this.writer), !HH.currentChunk) return;
        HH.finalizedChunks.push(HH.currentChunk), this.finalizedChunks.push(HH.currentChunk);
        let BH = HH.currentChunk.samples.length;
        if ("audio" === HH.type && HH.info.requiresPcmTransformation && (BH = HH.currentChunk.samples.reduce(((BH, LH) => BH + GL(LH.duration, HH.timescale)), 0)), 0 !== HH.compactlyCodedChunkTable.length && (0, tH.Xb)(HH.compactlyCodedChunkTable).samplesPerChunk === BH || HH.compactlyCodedChunkTable.push({
            firstChunk: HH.finalizedChunks.length,
            samplesPerChunk: BH
          }), "in-memory" !== this.fastStart) {
          HH.currentChunk.offset = this.writer.getPos();
          for (const BH of HH.currentChunk.samples)(0, tH.J)(BH.data), this.writer.write(BH.data), BH.data = null;
          await this.writer.flush()
        } else HH.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, tH.J)(this.isFragmented), HH || this.allTracksAreKnown()) HH: for (;;) {
          let BH = null,
            LH = 1 / 0;
          for (const rH of this.trackDatas) {
            if (!HH && 0 === rH.sampleQueue.length && !rH.closed) break HH;
            rH.sampleQueue.length > 0 && rH.sampleQueue[0].timestamp < LH && (BH = rH, LH = rH.sampleQueue[0].timestamp)
          }
          if (!BH) break;
          const AH = BH.sampleQueue.shift();
          await this.addSampleToTrack(BH, AH)
        }
      }
      async finalizeFragment() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, tH.J)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const HH = this.initBoxWriter ?? this.boxWriter;
          (0, tH.J)(HH), this.formatOptions.onMoov && HH.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const BH = FH(this);
          if (HH.writeBox(BH), this.formatOptions.onMoov) {
            const {
              data: BH,
              start: LH
            } = HH.writer.stopTrackingWrites();
            this.formatOptions.onMoov(BH, LH)
          }
          if (this.isCmaf) {
            (0, tH.J)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new vH(this.writer);
            const HH = this.boxWriter.measureBox(RH()),
              BH = this.boxWriter.measureBox(jH(this, 0));
            this.segmentHeaderSize = HH + BH, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, tH.J)(this.writer), (0, tH.J)(this.boxWriter);
        const BH = this.trackDatas.filter((HH => HH.currentChunk));
        if (0 === BH.length) return void(HH && await this.writer.flush());
        const LH = this.nextFragmentNumber++,
          AH = KB(LH, BH),
          rH = this.writer.getPos(),
          SH = rH + this.boxWriter.measureBox(AH);
        let hH = SH + 8,
          zH = 1 / 0;
        for (let YH = 0; YH < BH.length; YH++) {
          const HH = BH[YH];
          (0, tH.J)(HH.currentChunk), (0, tH.J)(null !== HH.startTimestampOffset), HH.currentChunk.offset = hH, HH.currentChunk.moofOffset = rH, HH.currentChunk.trafIndex = YH, HH.currentChunk.startTimestamp -= HH.startTimestampOffset;
          for (const BH of HH.currentChunk.samples) hH += BH.size, BH.timestamp -= HH.startTimestampOffset, BH.decodeTimestamp -= HH.startTimestampOffset;
          zH = Math.min(zH, HH.currentChunk.startTimestamp)
        }
        const CH = hH - SH,
          EH = CH >= 2 ** 32;
        if (EH)
          for (const tH of BH) tH.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const XH = KB(LH, BH);
        if (this.boxWriter.writeBox(XH), this.formatOptions.onMoof) {
          const {
            data: HH,
            start: BH
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(HH, BH, zH)
        }(0, tH.J)(this.writer.getPos() === SH), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const GH = nH(EH);
        GH.size = CH, this.boxWriter.writeBox(GH), this.writer.seek(SH + (EH ? 16 : 8));
        for (const tH of BH)
          for (const HH of tH.currentChunk.samples) this.writer.write(HH.data), HH.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: HH,
            start: BH
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(HH, BH)
        }
        for (const tH of BH) tH.finalizedChunks.push(tH.currentChunk), this.finalizedChunks.push(tH.currentChunk), tH.currentChunk = null;
        HH && await this.writer.flush()
      }
      async registerSampleFastStartReserve(HH, BH) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(HH, BH)) : HH.sampleQueue.push(BH)
      }
      async createFastStartReserveMdat() {
        (0, tH.J)(this.writer), (0, tH.J)(this.boxWriter), this.ensureOneEnabledTrack();
        const HH = FH(this),
          BH = this.boxWriter.measureBox(HH) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, tH.J)(null !== this.ftypSize), this.writer.seek(this.ftypSize + BH), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = nH(!0), this.boxWriter.writeBox(this.mdat);
        for (const LH of this.trackDatas) {
          for (const HH of LH.sampleQueue) await this.addSampleToTrack(LH, HH);
          LH.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, tH.J)("reserve" === this.fastStart);
        let HH = 0;
        for (const BH of this.trackDatas) {
          const LH = BH.track.metadata.maximumPacketCount;
          (0, tH.J)(void 0 !== LH), HH += 8 * Math.ceil(2 / 3 * LH), HH += 4 * LH, HH += 8 * Math.ceil(2 / 3 * LH), HH += 12 * Math.ceil(2 / 3 * LH), HH += 4 * LH, HH += 8 * LH
        }
        return HH
      }
      async onTrackClose(HH) {
        const BH = await this.mutex.acquire(),
          LH = this.trackDatas.find((BH => BH.track === HH));
        LH && (LH.closed = !0, "subtitle" === LH.type && "webvtt" === HH.source._codec && await this.processWebVTTCues(LH, 1 / 0), this.processTimestamps(LH)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), BH()
      }
      ensureOneEnabledTrack() {
        for (const HH of ["video", "audio", "subtitle"]) {
          const BH = this.trackDatas.filter((BH => BH.type === HH));
          if (0 === BH.length) continue;
          if (!BH.some((HH => !1 !== HH.track.metadata.disposition?.default))) {
            const HH = BH[0];
            HH.track.metadata.disposition = {
              ...HH.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, tH.J)(this.isFragmented);
        const HH = await this.mutex.acquire();
        try {
          for (const HH of this.trackDatas) "subtitle" === HH.type && "webvtt" === HH.track.source._codec && await this.processWebVTTCues(HH, 1 / 0), this.processTimestamps(HH);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          HH()
        }
      }
      async finalize() {
        const HH = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const LH of this.trackDatas) LH.closed = !0, "subtitle" === LH.type && "webvtt" === LH.track.source._codec && await this.processWebVTTCues(LH, 1 / 0), this.processTimestamps(LH);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const LH of this.trackDatas) {
            await this.finalizeCurrentChunk(LH);
            const HH = YL(LH);
            if (HH > 0) {
              let BH = 0;
              for (const HH of LH.samples) BH += HH.size;
              LH.avgBitrate = Math.round(8 * BH / HH)
            } else LH.avgBitrate = 0;
            let BH = 0,
              AH = 0,
              rH = 0;
            for (let SH = 0; SH < LH.samples.length; SH++) {
              const HH = LH.samples[SH];
              for (AH += HH.size; HH.decodeTimestamp - LH.samples[BH].decodeTimestamp >= 1;) AH -= LH.samples[BH].size, BH++;
              rH = Math.max(rH, AH)
            }
            if (LH.maxBitrate = 8 * rH, null !== LH.startTimestampOffset)
              for (let SH = 0; SH < LH.samples.length; SH++) {
                const HH = LH.samples[SH];
                HH.timestamp -= LH.startTimestampOffset, HH.decodeTimestamp -= LH.startTimestampOffset
              }
          }
        if ((0, tH.J)(this.writer), (0, tH.J)(this.boxWriter), "in-memory" === this.fastStart) {
          let HH;
          this.mdat = nH(!1);
          for (let LH = 0; LH < 2; LH++) {
            const BH = FH(this),
              LH = this.boxWriter.measureBox(BH);
            HH = this.boxWriter.measureBox(this.mdat);
            let AH = this.writer.getPos() + LH + HH;
            for (const rH of this.finalizedChunks) {
              rH.offset = AH;
              for (const {
                  data: BH
                }
                of rH.samples)(0, tH.J)(BH), AH += BH.byteLength, HH += BH.byteLength
            }
            if (AH < 2 ** 32) break;
            HH >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const BH = FH(this);
          if (this.boxWriter.writeBox(BH), this.formatOptions.onMoov) {
            const {
              data: HH,
              start: BH
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(HH, BH)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = HH, this.boxWriter.writeBox(this.mdat);
          for (const LH of this.finalizedChunks)
            for (const HH of LH.samples)(0, tH.J)(HH.data), this.writer.write(HH.data), HH.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: HH,
              start: BH
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(HH, BH)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const HH = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(RH()), this.boxWriter.writeBox(jH(this, HH))
          } else {
            const HH = this.writer.getPos(),
              LH = (BH = this.trackDatas, gH("mfra", void 0, [...BH.map(jB), nB()]));
            this.boxWriter.writeBox(LH);
            const AH = this.writer.getPos() - HH;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(AH)
          }
        else {
          (0, tH.J)(this.mdat);
          const HH = this.boxWriter.offsets.get(this.mdat);
          (0, tH.J)(void 0 !== HH);
          const BH = this.writer.getPos() - HH;
          if (this.mdat.size = BH, this.mdat.largeSize = BH >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: HH,
              start: BH
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(HH, BH)
          }
          const LH = FH(this);
          if ("reserve" === this.fastStart) {
            (0, tH.J)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(LH);
            const HH = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: HH
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(LH);
          if (this.formatOptions.onMoov) {
            const {
              data: HH,
              start: BH
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(HH, BH)
          }
        }
        var BH;
        HH()
      }
    }
    class QL {
      constructor(HH) {
        this.value = HH
      }
    }
    class WL {
      constructor(HH) {
        this.value = HH
      }
    }
    class ML {
      constructor(HH) {
        this.value = HH
      }
    }
    class xL {
      constructor(HH) {
        this.value = HH
      }
    }
    var vL;
    ! function(HH) {
      HH[HH.EBML = 440786851] = "EBML", HH[HH.EBMLVersion = 17030] = "EBMLVersion", HH[HH.EBMLReadVersion = 17143] = "EBMLReadVersion", HH[HH.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", HH[HH.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", HH[HH.DocType = 17026] = "DocType", HH[HH.DocTypeVersion = 17031] = "DocTypeVersion", HH[HH.DocTypeReadVersion = 17029] = "DocTypeReadVersion", HH[HH.Void = 236] = "Void", HH[HH.Segment = 408125543] = "Segment", HH[HH.SeekHead = 290298740] = "SeekHead", HH[HH.Seek = 19899] = "Seek", HH[HH.SeekID = 21419] = "SeekID", HH[HH.SeekPosition = 21420] = "SeekPosition", HH[HH.Duration = 17545] = "Duration", HH[HH.Info = 357149030] = "Info", HH[HH.TimestampScale = 2807729] = "TimestampScale", HH[HH.MuxingApp = 19840] = "MuxingApp", HH[HH.WritingApp = 22337] = "WritingApp", HH[HH.Tracks = 374648427] = "Tracks", HH[HH.TrackEntry = 174] = "TrackEntry", HH[HH.TrackNumber = 215] = "TrackNumber", HH[HH.TrackUID = 29637] = "TrackUID", HH[HH.TrackType = 131] = "TrackType", HH[HH.FlagEnabled = 185] = "FlagEnabled", HH[HH.FlagDefault = 136] = "FlagDefault", HH[HH.FlagForced = 21930] = "FlagForced", HH[HH.FlagOriginal = 21934] = "FlagOriginal", HH[HH.FlagHearingImpaired = 21931] = "FlagHearingImpaired", HH[HH.FlagVisualImpaired = 21932] = "FlagVisualImpaired", HH[HH.FlagCommentary = 21935] = "FlagCommentary", HH[HH.FlagLacing = 156] = "FlagLacing", HH[HH.Name = 21358] = "Name", HH[HH.Language = 2274716] = "Language", HH[HH.LanguageBCP47 = 2274717] = "LanguageBCP47", HH[HH.CodecID = 134] = "CodecID", HH[HH.CodecPrivate = 25506] = "CodecPrivate", HH[HH.CodecDelay = 22186] = "CodecDelay", HH[HH.SeekPreRoll = 22203] = "SeekPreRoll", HH[HH.DefaultDuration = 2352003] = "DefaultDuration", HH[HH.Video = 224] = "Video", HH[HH.PixelWidth = 176] = "PixelWidth", HH[HH.PixelHeight = 186] = "PixelHeight", HH[HH.DisplayWidth = 21680] = "DisplayWidth", HH[HH.DisplayHeight = 21690] = "DisplayHeight", HH[HH.DisplayUnit = 21682] = "DisplayUnit", HH[HH.AlphaMode = 21440] = "AlphaMode", HH[HH.Audio = 225] = "Audio", HH[HH.SamplingFrequency = 181] = "SamplingFrequency", HH[HH.Channels = 159] = "Channels", HH[HH.BitDepth = 25188] = "BitDepth", HH[HH.SimpleBlock = 163] = "SimpleBlock", HH[HH.BlockGroup = 160] = "BlockGroup", HH[HH.Block = 161] = "Block", HH[HH.BlockAdditions = 30113] = "BlockAdditions", HH[HH.BlockMore = 166] = "BlockMore", HH[HH.BlockAdditional = 165] = "BlockAdditional", HH[HH.BlockAddID = 238] = "BlockAddID", HH[HH.BlockDuration = 155] = "BlockDuration", HH[HH.ReferenceBlock = 251] = "ReferenceBlock", HH[HH.Cluster = 524531317] = "Cluster", HH[HH.Timestamp = 231] = "Timestamp", HH[HH.Cues = 475249515] = "Cues", HH[HH.CuePoint = 187] = "CuePoint", HH[HH.CueTime = 179] = "CueTime", HH[HH.CueTrackPositions = 183] = "CueTrackPositions", HH[HH.CueTrack = 247] = "CueTrack", HH[HH.CueClusterPosition = 241] = "CueClusterPosition", HH[HH.Colour = 21936] = "Colour", HH[HH.MatrixCoefficients = 21937] = "MatrixCoefficients", HH[HH.TransferCharacteristics = 21946] = "TransferCharacteristics", HH[HH.Primaries = 21947] = "Primaries", HH[HH.Range = 21945] = "Range", HH[HH.Projection = 30320] = "Projection", HH[HH.ProjectionType = 30321] = "ProjectionType", HH[HH.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", HH[HH.ProjectionPosePitch = 30324] = "ProjectionPosePitch", HH[HH.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", HH[HH.Attachments = 423732329] = "Attachments", HH[HH.AttachedFile = 24999] = "AttachedFile", HH[HH.FileDescription = 18046] = "FileDescription", HH[HH.FileName = 18030] = "FileName", HH[HH.FileMediaType = 18016] = "FileMediaType", HH[HH.FileData = 18012] = "FileData", HH[HH.FileUID = 18094] = "FileUID", HH[HH.Chapters = 272869232] = "Chapters", HH[HH.Tags = 307544935] = "Tags", HH[HH.Tag = 29555] = "Tag", HH[HH.Targets = 25536] = "Targets", HH[HH.TargetTypeValue = 26826] = "TargetTypeValue", HH[HH.TargetType = 25546] = "TargetType", HH[HH.TagTrackUID = 25541] = "TagTrackUID", HH[HH.TagEditionUID = 25545] = "TagEditionUID", HH[HH.TagChapterUID = 25540] = "TagChapterUID", HH[HH.TagAttachmentUID = 25542] = "TagAttachmentUID", HH[HH.SimpleTag = 26568] = "SimpleTag", HH[HH.TagName = 17827] = "TagName", HH[HH.TagLanguage = 17530] = "TagLanguage", HH[HH.TagString = 17543] = "TagString", HH[HH.TagBinary = 17541] = "TagBinary", HH[HH.ContentEncodings = 28032] = "ContentEncodings", HH[HH.ContentEncoding = 25152] = "ContentEncoding", HH[HH.ContentEncodingOrder = 20529] = "ContentEncodingOrder", HH[HH.ContentEncodingScope = 20530] = "ContentEncodingScope", HH[HH.ContentCompression = 20532] = "ContentCompression", HH[HH.ContentCompAlgo = 16980] = "ContentCompAlgo", HH[HH.ContentCompSettings = 16981] = "ContentCompSettings", HH[HH.ContentEncryption = 20533] = "ContentEncryption"
    }(vL || (vL = {}));
    vL.EBML, vL.Segment, vL.SeekHead, vL.Info, vL.Cluster, vL.Tracks, vL.Cues, vL.Attachments, vL.Chapters, vL.Tags;
    const PL = HH => HH < 256 ? 1 : HH < 65536 ? 2 : HH < 1 << 24 ? 3 : HH < 2 ** 32 ? 4 : HH < 2 ** 40 ? 5 : 6,
      TL = HH => HH < 256n ? 1 : HH < 65536n ? 2 : HH < 1n << 24n ? 3 : HH < 1n << 32n ? 4 : HH < 1n << 40n ? 5 : HH < 1n << 48n ? 6 : HH < 1n << 56n ? 7 : 8,
      UL = HH => HH >= -64 && HH < 64 ? 1 : HH >= -8192 && HH < 8192 ? 2 : HH >= -1048576 && HH < 1 << 20 ? 3 : HH >= -(1 << 27) && HH < 1 << 27 ? 4 : HH >= -(2 ** 34) && HH < 2 ** 34 ? 5 : 6;
    class VL {
      constructor(HH) {
        this.writer = HH, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(HH) {
        this.helperView.setUint8(0, HH), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(HH) {
        this.helperView.setFloat32(0, HH, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(HH) {
        this.helperView.setFloat64(0, HH, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PL(HH),
          LH = 0;
        switch (BH) {
          case 6:
            this.helperView.setUint8(LH++, HH / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(LH++, HH / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(LH++, HH >> 24);
          case 3:
            this.helperView.setUint8(LH++, HH >> 16);
          case 2:
            this.helperView.setUint8(LH++, HH >> 8);
          case 1:
            this.helperView.setUint8(LH++, HH);
            break;
          default:
            throw new Error("Bad unsigned int size " + BH)
        }
        this.writer.write(this.helper.subarray(0, LH))
      }
      writeUnsignedBigInt(HH) {
        let BH = 0;
        for (let LH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TL(HH)) - 1; LH >= 0; LH--) this.helperView.setUint8(BH++, Number(HH >> BigInt(8 * LH) & 0xffn));
        this.writer.write(this.helper.subarray(0, BH))
      }
      writeSignedInt(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UL(HH);
        HH < 0 && (HH += 2 ** (8 * BH)), this.writeUnsignedInt(HH, BH)
      }
      writeVarInt(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (HH => {
            if (HH < 127) return 1;
            if (HH < 16383) return 2;
            if (HH < 2097151) return 3;
            if (HH < 268435455) return 4;
            if (HH < 2 ** 35 - 1) return 5;
            if (HH < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + HH)
          })(HH),
          LH = 0;
        switch (BH) {
          case 1:
            this.helperView.setUint8(LH++, 128 | HH);
            break;
          case 2:
            this.helperView.setUint8(LH++, 64 | HH >> 8), this.helperView.setUint8(LH++, HH);
            break;
          case 3:
            this.helperView.setUint8(LH++, 32 | HH >> 16), this.helperView.setUint8(LH++, HH >> 8), this.helperView.setUint8(LH++, HH);
            break;
          case 4:
            this.helperView.setUint8(LH++, 16 | HH >> 24), this.helperView.setUint8(LH++, HH >> 16), this.helperView.setUint8(LH++, HH >> 8), this.helperView.setUint8(LH++, HH);
            break;
          case 5:
            this.helperView.setUint8(LH++, 8 | HH / 2 ** 32 & 7), this.helperView.setUint8(LH++, HH >> 24), this.helperView.setUint8(LH++, HH >> 16), this.helperView.setUint8(LH++, HH >> 8), this.helperView.setUint8(LH++, HH);
            break;
          case 6:
            this.helperView.setUint8(LH++, 4 | HH / 2 ** 40 & 3), this.helperView.setUint8(LH++, HH / 2 ** 32 | 0), this.helperView.setUint8(LH++, HH >> 24), this.helperView.setUint8(LH++, HH >> 16), this.helperView.setUint8(LH++, HH >> 8), this.helperView.setUint8(LH++, HH);
            break;
          default:
            throw new Error("Bad EBML varint size " + BH)
        }
        this.writer.write(this.helper.subarray(0, LH))
      }
      writeAsciiString(HH) {
        this.writer.write(new Uint8Array(HH.split("").map((HH => HH.charCodeAt(0)))))
      }
      writeEBML(HH) {
        if (null !== HH)
          if (HH instanceof Uint8Array) this.writer.write(HH);
          else if (Array.isArray(HH))
          for (const BH of HH) this.writeEBML(BH);
        else if (this.offsets.set(HH, this.writer.getPos()), this.writeUnsignedInt(HH.id), Array.isArray(HH.data)) {
          const BH = this.writer.getPos(),
            LH = -1 === HH.size ? 1 : HH.size ?? 4; - 1 === HH.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + LH);
          const AH = this.writer.getPos();
          if (this.dataOffsets.set(HH, AH), this.writeEBML(HH.data), -1 !== HH.size) {
            const HH = this.writer.getPos() - AH,
              rH = this.writer.getPos();
            this.writer.seek(BH), this.writeVarInt(HH, LH), this.writer.seek(rH)
          }
        } else if ("number" === typeof HH.data) {
          const BH = HH.size ?? PL(HH.data);
          this.writeVarInt(BH), this.writeUnsignedInt(HH.data, BH)
        } else if ("bigint" === typeof HH.data) {
          const BH = HH.size ?? TL(HH.data);
          this.writeVarInt(BH), this.writeUnsignedBigInt(HH.data, BH)
        } else if ("string" === typeof HH.data) this.writeVarInt(HH.data.length), this.writeAsciiString(HH.data);
        else if (HH.data instanceof Uint8Array) this.writeVarInt(HH.data.byteLength, HH.size), this.writer.write(HH.data);
        else if (HH.data instanceof QL) this.writeVarInt(4), this.writeFloat32(HH.data.value);
        else if (HH.data instanceof WL) this.writeVarInt(8), this.writeFloat64(HH.data.value);
        else if (HH.data instanceof ML) {
          const BH = HH.size ?? UL(HH.data.value);
          this.writeVarInt(BH), this.writeSignedInt(HH.data.value, BH)
        } else if (HH.data instanceof xL) {
          const BH = tH.$c.encode(HH.data.value);
          this.writeVarInt(BH.length), this.writer.write(BH)
        } else(0, tH.G)(HH.data)
      }
    }
    const OL = {
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
    const bL = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class kL extends uH {
      constructor(HH, BH) {
        super(HH), this.trackDatas = [], this.allTracksKnown = (0, tH.mc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = BH
      }
      async start() {
        const HH = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new VL(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const BH of this.output.tracks) BH.isVideoTrack() && BH.metadata.decoderConfig ? this.getVideoTrackData(BH, BH.metadata.primingPacket ?? null, {
          decoderConfig: BH.metadata.decoderConfig
        }) : BH.isAudioTrack() && BH.metadata.decoderConfig && this.getAudioTrackData(BH, BH.metadata.primingPacket ?? null, {
          decoderConfig: BH.metadata.decoderConfig
        });
        HH()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const HH = {
          id: vL.EBML,
          data: [{
            id: vL.EBMLVersion,
            data: 1
          }, {
            id: vL.EBMLReadVersion,
            data: 1
          }, {
            id: vL.EBMLMaxIDLength,
            data: 4
          }, {
            id: vL.EBMLMaxSizeLength,
            data: 8
          }, {
            id: vL.DocType,
            data: this.format instanceof RL ? "webm" : "matroska"
          }, {
            id: vL.DocTypeVersion,
            data: 4
          }, {
            id: vL.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(HH), this.format._options.onEbmlHeader) {
          const {
            data: HH,
            start: BH
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(HH, BH)
        }
      }
      maybeCreateSeekHead(HH) {
        if (this.format._options.appendOnly) return;
        const BH = new Uint8Array([28, 83, 187, 107]),
          LH = new Uint8Array([21, 73, 169, 102]),
          AH = new Uint8Array([22, 84, 174, 107]),
          rH = new Uint8Array([25, 65, 164, 105]),
          SH = new Uint8Array([18, 84, 195, 103]),
          hH = {
            id: vL.SeekHead,
            data: [{
              id: vL.Seek,
              data: [{
                id: vL.SeekID,
                data: LH
              }, {
                id: vL.SeekPosition,
                size: 5,
                data: HH ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: vL.Seek,
              data: [{
                id: vL.SeekID,
                data: AH
              }, {
                id: vL.SeekPosition,
                size: 5,
                data: HH ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: vL.Seek,
              data: [{
                id: vL.SeekID,
                data: rH
              }, {
                id: vL.SeekPosition,
                size: 5,
                data: HH ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: vL.Seek,
              data: [{
                id: vL.SeekID,
                data: SH
              }, {
                id: vL.SeekPosition,
                size: 5,
                data: HH ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: vL.Seek,
              data: [{
                id: vL.SeekID,
                data: BH
              }, {
                id: vL.SeekPosition,
                size: 5,
                data: HH ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = hH
      }
      createSegmentInfo() {
        const HH = {
          id: vL.Duration,
          data: new WL(0)
        };
        this.segmentDuration = HH;
        const BH = {
          id: vL.Info,
          data: [{
            id: vL.TimestampScale,
            data: 1e6
          }, {
            id: vL.MuxingApp,
            data: xH.e
          }, {
            id: vL.WritingApp,
            data: xH.e
          }, this.format._options.appendOnly ? null : HH]
        };
        this.segmentInfo = BH
      }
      createTracks() {
        const HH = {
          id: vL.Tracks,
          data: []
        };
        this.tracksElement = HH;
        for (const BH of this.trackDatas) {
          let LH = OL[BH.track.source._codec];
          (0, tH.J)(LH), "audio" === BH.type && "dts" === BH.track.source._codec && ("dtse" === BH.info.decoderConfig.codec ? LH = "A_DTS/EXPRESS" : "dtsl" === BH.info.decoderConfig.codec && (LH = "A_DTS/LOSSLESS"));
          let AH = 0;
          if ("audio" === BH.type && "opus" === BH.track.source._codec) {
            AH = 8e7;
            const HH = BH.info.decoderConfig.description;
            if (HH) {
              const BH = (0, tH.id)(HH),
                LH = (0, QH.db)(BH);
              AH = Math.round(LH.preSkip / rH.h * 1e9)
            }
          }
          HH.data.push({
            id: vL.TrackEntry,
            data: [{
              id: vL.TrackNumber,
              data: BH.track.id
            }, {
              id: vL.TrackUID,
              data: BH.track.id
            }, {
              id: vL.TrackType,
              data: bL[BH.type]
            }, !1 === BH.track.metadata.disposition?.default ? {
              id: vL.FlagDefault,
              data: 0
            } : null, BH.track.metadata.disposition?.forced ? {
              id: vL.FlagForced,
              data: 1
            } : null, BH.track.metadata.disposition?.hearingImpaired ? {
              id: vL.FlagHearingImpaired,
              data: 1
            } : null, BH.track.metadata.disposition?.visuallyImpaired ? {
              id: vL.FlagVisualImpaired,
              data: 1
            } : null, BH.track.metadata.disposition?.original ? {
              id: vL.FlagOriginal,
              data: 1
            } : null, BH.track.metadata.disposition?.commentary ? {
              id: vL.FlagCommentary,
              data: 1
            } : null, {
              id: vL.FlagLacing,
              data: 0
            }, {
              id: vL.Language,
              data: BH.track.metadata.languageCode ?? tH.x
            }, {
              id: vL.CodecID,
              data: LH
            }, BH.codecPrivate ? {
              id: vL.CodecPrivate,
              data: (0, tH.id)(BH.codecPrivate)
            } : null, AH > 0 ? {
              id: vL.SeekPreRoll,
              data: AH
            } : null, void 0 !== BH.track.metadata.name ? {
              id: vL.Name,
              data: new xL(BH.track.metadata.name)
            } : null, "video" === BH.type ? this.videoSpecificTrackInfo(BH) : null, "audio" === BH.type ? this.audioSpecificTrackInfo(BH) : null, "subtitle" === BH.type ? this.subtitleSpecificTrackInfo(BH) : null]
          })
        }
      }
      videoSpecificTrackInfo(HH) {
        const {
          frameRate: BH,
          transformationMatrix: LH
        } = HH.track.metadata, AH = [BH ? {
          id: vL.DefaultDuration,
          data: 1e9 / BH
        } : null];
        let rH, SH, hH;
        if (LH) {
          rH = (0, tH.jb)(LH);
          const HH = (0, tH.bc)((0, tH.wc)(-rH), LH);
          SH = Math.sign(HH[0]), hH = Math.sign(HH[4]), -1 === hH && (hH = 1, SH = -SH, rH = (0, tH.fc)(rH + 180))
        } else rH = HH.track.metadata.rotation ?? 0, SH = HH.track.metadata.flip ? -1 : 1, hH = 1;
        const zH = rH ? (0, tH.fc)(-1 === SH ? rH : -rH) : 0,
          CH = Math.round(Math.acos(SH) * tH.t),
          EH = Math.round(Math.acos(hH) * tH.t),
          XH = !!HH.info.aspectRatio && HH.info.aspectRatio.num * HH.info.height !== HH.info.aspectRatio.den * HH.info.width,
          GH = HH.info.decoderConfig.colorSpace,
          YH = {
            id: vL.Video,
            data: [{
              id: vL.PixelWidth,
              data: HH.info.width
            }, {
              id: vL.PixelHeight,
              data: HH.info.height
            }, XH ? {
              id: vL.DisplayWidth,
              data: HH.info.aspectRatio.num
            } : null, XH ? {
              id: vL.DisplayHeight,
              data: HH.info.aspectRatio.den
            } : null, XH ? {
              id: vL.DisplayUnit,
              data: 3
            } : null, HH.info.alphaMode ? {
              id: vL.AlphaMode,
              data: 1
            } : null, (0, tH.eb)(GH) ? null : {
              id: vL.Colour,
              data: [{
                id: vL.MatrixCoefficients,
                data: null != GH?.matrix ? tH.p[GH.matrix] : 2
              }, {
                id: vL.TransferCharacteristics,
                data: null != GH?.transfer ? tH.v[GH.transfer] : 2
              }, {
                id: vL.Primaries,
                data: null != GH?.primaries ? tH.g[GH.primaries] : 2
              }, {
                id: vL.Range,
                data: null != GH?.fullRange ? GH.fullRange ? 2 : 1 : 0
              }]
            }, zH || CH || EH ? {
              id: vL.Projection,
              data: [{
                id: vL.ProjectionType,
                data: 0
              }, CH ? {
                id: vL.ProjectionPoseYaw,
                data: new QL(CH)
              } : null, EH ? {
                id: vL.ProjectionPosePitch,
                data: new QL(EH)
              } : null, zH ? {
                id: vL.ProjectionPoseRoll,
                data: new QL((zH + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return AH.push(YH), AH
      }
      audioSpecificTrackInfo(HH) {
        const BH = rH.k.includes(HH.track.source._codec) ? (0, rH.S)(HH.track.source._codec) : null;
        return [{
          id: vL.Audio,
          data: [{
            id: vL.SamplingFrequency,
            data: new QL(HH.info.sampleRate)
          }, {
            id: vL.Channels,
            data: HH.info.numberOfChannels
          }, BH ? {
            id: vL.BitDepth,
            data: 8 * BH.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(HH) {
        return []
      }
      maybeCreateTags() {
        const HH = [],
          BH = (BH, LH) => {
            HH.push({
              id: vL.SimpleTag,
              data: [{
                id: vL.TagName,
                data: new xL(BH)
              }, "string" === typeof LH ? {
                id: vL.TagString,
                data: new xL(LH)
              } : {
                id: vL.TagBinary,
                data: LH
              }]
            })
          },
          LH = this.output._metadataTags,
          AH = new Set;
        for (const {
            key: rH,
            value: SH
          }
          of(0, tH.Vb)(LH)) switch (rH) {
          case "title":
            BH("TITLE", SH), AH.add("TITLE");
            break;
          case "description":
            BH("DESCRIPTION", SH), AH.add("DESCRIPTION");
            break;
          case "artist":
            BH("ARTIST", SH), AH.add("ARTIST");
            break;
          case "album":
            BH("ALBUM", SH), AH.add("ALBUM");
            break;
          case "albumArtist":
            BH("ALBUM_ARTIST", SH), AH.add("ALBUM_ARTIST");
            break;
          case "genre":
            BH("GENRE", SH), AH.add("GENRE");
            break;
          case "beatsPerMinute":
            BH("BPM", SH.toString()), AH.add("BPM");
            break;
          case "comment":
            BH("COMMENT", SH), AH.add("COMMENT");
            break;
          case "lyrics":
            BH("LYRICS", SH), AH.add("LYRICS");
            break;
          case "date":
            BH("DATE", SH.toISOString().slice(0, 10)), AH.add("DATE");
            break;
          case "trackNumber":
            BH("PART_NUMBER", void 0 !== LH.tracksTotal ? `${SH}/${LH.tracksTotal}` : SH.toString()), AH.add("PART_NUMBER");
            break;
          case "discNumber":
            BH("DISC", void 0 !== LH.discsTotal ? `${SH}/${LH.discsTotal}` : SH.toString()), AH.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, tH.G)(rH)
        }
        if (LH.raw)
          for (const rH in LH.raw) {
            const HH = LH.raw[rH];
            null == HH || AH.has(rH) || ("string" === typeof HH || HH instanceof Uint8Array) && BH(rH, HH)
          }
        0 !== HH.length && (this.tagsElement = {
          id: vL.Tags,
          data: [{
            id: vL.Tag,
            data: [{
              id: vL.Targets,
              data: [{
                id: vL.TargetTypeValue,
                data: 50
              }, {
                id: vL.TargetType,
                data: "MOVIE"
              }]
            }, ...HH]
          }]
        })
      }
      maybeCreateAttachments() {
        const HH = this.output._metadataTags,
          BH = [],
          LH = new Set,
          AH = HH.images ?? [];
        for (const rH of AH) {
          let HH, AH = rH.name;
          if (void 0 === AH) {
            AH = ("coverFront" === rH.kind ? "cover" : "coverBack" === rH.kind ? "back" : "image") + ((0, tH.tb)(rH.mimeType) ?? "")
          }
          for (;;) {
            HH = 0n;
            for (let BH = 0; BH < 8; BH++) HH <<= 8n, HH |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== HH && !LH.has(HH)) break
          }
          LH.add(HH), BH.push({
            id: vL.AttachedFile,
            data: [void 0 !== rH.description ? {
              id: vL.FileDescription,
              data: new xL(rH.description)
            } : null, {
              id: vL.FileName,
              data: new xL(AH)
            }, {
              id: vL.FileMediaType,
              data: rH.mimeType
            }, {
              id: vL.FileData,
              data: rH.data
            }, {
              id: vL.FileUID,
              data: HH
            }]
          })
        }
        for (const [rH, SH] of Object.entries(HH.raw ?? {})) {
          if (!(SH instanceof YH.e)) continue;
          /^\d+$/.test(rH) && (AH.find((HH => HH.mimeType === SH.mimeType && (0, tH.ld)(HH.data, SH.data))) || BH.push({
            id: vL.AttachedFile,
            data: [void 0 !== SH.description ? {
              id: vL.FileDescription,
              data: new xL(SH.description)
            } : null, {
              id: vL.FileName,
              data: new xL(SH.name ?? "")
            }, {
              id: vL.FileMediaType,
              data: SH.mimeType ?? ""
            }, {
              id: vL.FileData,
              data: SH.data
            }, {
              id: vL.FileUID,
              data: BigInt(rH)
            }]
          }))
        }
        0 !== BH.length && (this.attachmentsElement = {
          id: vL.Attachments,
          data: BH
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const HH = {
          id: vL.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = HH, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(HH), this.format._options.onSegmentHeader) {
          const {
            data: HH,
            start: BH
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(HH, BH)
        }
      }
      createCues() {
        this.cues = {
          id: vL.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, tH.J)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const HH of this.output.tracks)
          if (!HH.source._closed && !this.trackDatas.some((BH => BH.track === HH))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const HH = this.trackDatas.map((HH => {
          if ("video" === HH.type) return HH.info.decoderConfig.codec;
          if ("audio" === HH.type) return HH.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [HH.track.source._codec]
        }));
        return (HH => {
          let BH = (HH.hasVideo ? "video/" : HH.hasAudio ? "audio/" : "application/") + (HH.isWebM ? "webm" : "x-matroska");
          HH.codecStrings.length > 0 && (BH += `; codecs="${[...new Set(HH.codecStrings.filter(Boolean))].join(", ")}"`);
          return BH
        })({
          isWebM: this.format instanceof RL,
          hasVideo: this.trackDatas.some((HH => "video" === HH.type)),
          hasAudio: this.trackDatas.some((HH => "audio" === HH.type)),
          codecStrings: HH
        })
      }
      getVideoTrackData(HH, BH, LH) {
        const AH = this.trackDatas.find((BH => BH.track === HH));
        if (AH) return AH;
        (0, rH.X)(LH, HH.source._codec), (0, tH.J)(LH), (0, tH.J)(LH.decoderConfig), (0, tH.J)(void 0 !== LH.decoderConfig.codedWidth), (0, tH.J)(void 0 !== LH.decoderConfig.codedHeight);
        const SH = LH.decoderConfig.displayAspectWidth,
          hH = LH.decoderConfig.displayAspectHeight,
          zH = void 0 === SH || void 0 === hH ? null : (0, tH.Uc)({
            num: SH,
            den: hH
          }),
          CH = {
            track: HH,
            type: "video",
            info: {
              width: LH.decoderConfig.codedWidth,
              height: LH.decoderConfig.codedHeight,
              aspectRatio: zH,
              decoderConfig: LH.decoderConfig,
              alphaMode: HH.metadata.canBeTransparent || (BH ? !!BH.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: LH.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === HH.source._codec ? CH.codecPrivate = new Uint8Array((0, rH.I)(CH.info.decoderConfig.codec)) : "av1" === HH.source._codec ? CH.codecPrivate = new Uint8Array((0, rH.E)(CH.info.decoderConfig.codec)) : "prores" === HH.source._codec && (CH.codecPrivate = tH.$c.encode(LH.decoderConfig.codec)), this.trackDatas.push(CH), this.trackDatas.sort(((HH, BH) => HH.track.id - BH.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), CH
      }
      getAudioTrackData(HH, BH, LH) {
        const SH = this.trackDatas.find((BH => BH.track === HH));
        if (SH) return SH;
        (0, rH.U)(LH, HH.source._codec), (0, tH.J)(LH), (0, tH.J)(LH.decoderConfig);
        const hH = {
          ...LH.decoderConfig
        };
        let CH = !1;
        if ("aac" === HH.source._codec && !hH.description) {
          if (!BH) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const HH = CL(zH.tempFromBytes(BH.data));
          if (!HH) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const LH = AH.h[HH.samplingFrequencyIndex],
            rH = AH.e[HH.channelConfiguration];
          if (void 0 === LH || void 0 === rH) throw new Error("Invalid ADTS frame header.");
          hH.description = (0, AH.j)({
            objectType: HH.objectType,
            outputSampleRate: LH,
            outputNumberOfChannels: rH
          }), CH = !0
        }
        const EH = {
          track: HH,
          type: "audio",
          info: {
            numberOfChannels: LH.decoderConfig.numberOfChannels,
            sampleRate: LH.decoderConfig.sampleRate,
            decoderConfig: hH,
            requiresAdtsStripping: CH
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: hH.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(EH), this.trackDatas.sort(((HH, BH) => HH.track.id - BH.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), EH
      }
      getSubtitleTrackData(HH, BH) {
        const LH = this.trackDatas.find((BH => BH.track === HH));
        if (LH) return LH;
        (0, rH.W)(BH), (0, tH.J)(BH), (0, tH.J)(BH.config);
        const AH = {
          track: HH,
          type: "subtitle",
          info: {
            config: BH.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: tH.$c.encode(BH.config.description),
          closed: !1
        };
        return this.trackDatas.push(AH), this.trackDatas.sort(((HH, BH) => HH.track.id - BH.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), AH
      }
      async addEncodedVideoPacket(HH, BH, LH) {
        const AH = await this.mutex.acquire();
        try {
          const AH = this.getVideoTrackData(HH, BH, LH);
          AH.info.alphaMode ??= !!BH.sideData.alpha;
          let rH = BH.data;
          if ("prores" === HH.source._codec) {
            if (rH.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            rH = rH.subarray(8)
          }
          const SH = "key" === BH.type;
          this.validateTimestamp(AH.track, BH.timestamp, SH);
          let hH = BH.timestamp,
            zH = BH.duration;
          void 0 !== HH.metadata.frameRate && (hH = (0, tH.Ac)(hH, HH.metadata.frameRate), zH = (0, tH.Ac)(zH, HH.metadata.frameRate));
          const CH = AH.info.alphaMode ? BH.sideData.alpha ?? null : null,
            EH = this.createInternalChunk(rH, hH, zH, BH.type, CH);
          "vp9" === HH.source._codec && this.fixVP9ColorSpace(AH, EH), AH.chunkQueue.push(EH), await this.interleaveChunks()
        } finally {
          AH()
        }
      }
      async addEncodedAudioPacket(HH, BH, LH) {
        const AH = await this.mutex.acquire();
        try {
          const AH = this.getAudioTrackData(HH, BH, LH);
          let rH = BH.data;
          if (AH.info.requiresAdtsStripping) {
            const HH = CL(zH.tempFromBytes(rH));
            if (!HH) throw new Error("Expected ADTS frame, didn't get one.");
            const BH = null === HH.crcCheck ? 7 : 9;
            rH = rH.subarray(BH)
          }
          const SH = "key" === BH.type;
          this.validateTimestamp(AH.track, BH.timestamp, SH);
          const hH = this.createInternalChunk(rH, BH.timestamp, BH.duration, BH.type);
          AH.chunkQueue.push(hH), await this.interleaveChunks()
        } finally {
          AH()
        }
      }
      async addSubtitleCue(HH, BH, LH) {
        const AH = await this.mutex.acquire();
        try {
          const AH = this.getSubtitleTrackData(HH, LH);
          this.validateTimestamp(AH.track, BH.timestamp, !0);
          let rH = BH.text;
          const SH = Math.round(1e3 * BH.timestamp);
          MH.i.lastIndex = 0, rH = rH.replace(MH.i, (HH => {
            const BH = (0, MH.j)(HH.slice(1, -1)) - SH;
            return `<${(0,MH.f)(BH)}>`
          }));
          const hH = tH.$c.encode(rH),
            zH = `${BH.settings??""}\n${BH.identifier??""}\n${BH.notes??""}`,
            CH = this.createInternalChunk(hH, BH.timestamp, BH.duration, "key", zH.trim() ? tH.$c.encode(zH) : null);
          AH.chunkQueue.push(CH), await this.interleaveChunks()
        } finally {
          AH()
        }
      }
      async interleaveChunks() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (HH || this.allTracksAreKnown()) {
          HH: for (;;) {
            let BH = null,
              LH = 1 / 0;
            for (const rH of this.trackDatas) {
              if (!HH && 0 === rH.chunkQueue.length && !rH.closed) break HH;
              rH.chunkQueue.length > 0 && rH.chunkQueue[0].timestamp < LH && (BH = rH, LH = rH.chunkQueue[0].timestamp)
            }
            if (!BH) break;
            const AH = BH.chunkQueue.shift();
            this.writeBlock(BH, AH)
          }
          HH || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(HH, BH) {
        if ("key" !== BH.type) return;
        if (!HH.info.decoderConfig.colorSpace || !HH.info.decoderConfig.colorSpace.matrix) return;
        const LH = new WH.e(BH.data);
        LH.skipBits(2);
        const AH = LH.readBits(1),
          rH = (LH.readBits(1) << 1) + AH;
        3 === rH && LH.skipBits(1);
        if (LH.readBits(1)) return;
        if (0 !== LH.readBits(1)) return;
        LH.skipBits(2);
        if (4817730 !== LH.readBits(24)) return;
        rH >= 2 && LH.skipBits(1);
        const SH = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [HH.info.decoderConfig.colorSpace.matrix];
        (0, tH.ud)(BH.data, LH.pos, LH.pos + 3, SH)
      }
      createInternalChunk(HH, BH, LH, AH) {
        return {
          data: HH,
          type: AH,
          timestamp: BH,
          duration: LH,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(HH, BH) {
        this.segment || this.createSegment();
        const LH = Math.round(1e3 * BH.timestamp),
          AH = this.trackDatas.every((LH => {
            if (HH === LH) return "key" === BH.type;
            const AH = LH.chunkQueue[0];
            return AH ? "key" === AH.type : LH.closed
          }));
        let rH = !1;
        if (this.currentCluster) {
          (0, tH.J)(null !== this.currentClusterStartMsTimestamp), (0, tH.J)(null !== this.currentClusterMaxMsTimestamp);
          const HH = LH - this.currentClusterStartMsTimestamp;
          rH = AH && LH > this.currentClusterMaxMsTimestamp && HH >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || HH > 32767
        } else rH = !0;
        rH && this.createNewCluster(LH);
        const SH = LH - this.currentClusterStartMsTimestamp;
        if (SH < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const HH = this.format instanceof RL ? "WebM" : "Matroska";
            hH.c._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${HH}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const zH = new Uint8Array(4),
          CH = new DataView(zH.buffer);
        CH.setUint8(0, 128 | HH.track.id), CH.setInt16(1, SH, !1);
        const EH = Math.round(1e3 * BH.duration);
        if (!!BH.additions || "subtitle" === HH.type) {
          const AH = {
            id: vL.BlockGroup,
            data: [{
              id: vL.Block,
              data: [zH, BH.data]
            }, "delta" === BH.type ? {
              id: vL.ReferenceBlock,
              data: new ML(HH.lastWrittenMsTimestamp - LH)
            } : null, BH.additions ? {
              id: vL.BlockAdditions,
              data: [{
                id: vL.BlockMore,
                data: [{
                  id: vL.BlockAddID,
                  data: 1
                }, {
                  id: vL.BlockAdditional,
                  data: BH.additions
                }]
              }]
            } : null, EH > 0 ? {
              id: vL.BlockDuration,
              data: EH
            } : null]
          };
          this.ebmlWriter.writeEBML(AH)
        } else {
          CH.setUint8(3, Number("key" === BH.type) << 7);
          const HH = {
            id: vL.SimpleBlock,
            data: [zH, BH.data]
          };
          this.ebmlWriter.writeEBML(HH)
        }
        this.startTimestamp = Math.min(this.startTimestamp, LH), this.endTimestamp = Math.max(this.endTimestamp, LH + EH), HH.lastWrittenMsTimestamp = LH, this.trackDatasInCurrentCluster.has(HH) || this.trackDatasInCurrentCluster.set(HH, {
          firstMsTimestamp: LH
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, LH)
      }
      createNewCluster(HH) {
        HH = Math.max(0, HH), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: vL.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: vL.Timestamp,
            data: HH
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = HH, this.currentClusterMaxMsTimestamp = HH, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, tH.J)(this.currentCluster), !this.format._options.appendOnly) {
          const HH = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            BH = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(HH, 5), this.writer.seek(BH)
        }
        if (this.format._options.onCluster) {
          (0, tH.J)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: HH,
            start: BH
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(HH, BH, this.currentClusterStartMsTimestamp / 1e3)
        }
        const HH = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          BH = new Map;
        for (const [AH, {
            firstMsTimestamp: rH
          }] of this.trackDatasInCurrentCluster) BH.has(rH) || BH.set(rH, []), BH.get(rH).push(AH);
        const LH = [...BH.entries()].sort(((HH, BH) => HH[0] - BH[0]));
        for (const [AH, rH] of LH)(0, tH.J)(this.cues), this.cues.data.push({
          id: vL.CuePoint,
          data: [{
            id: vL.CueTime,
            data: Math.max(0, AH)
          }, ...rH.map((BH => ({
            id: vL.CueTrackPositions,
            data: [{
              id: vL.CueTrack,
              data: BH.track.id
            }, {
              id: vL.CueClusterPosition,
              data: HH
            }]
          })))]
        })
      }
      async onTrackClose(HH) {
        const BH = await this.mutex.acquire(),
          LH = this.trackDatas.find((BH => BH.track === HH));
        LH && (LH.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), BH()
      }
      async finalize() {
        const HH = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const BH of this.trackDatas) BH.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, tH.J)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const HH = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(HH, 6);
          const BH = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new WL(BH), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, tH.J)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        HH()
      }
    }
    const mL = new Uint32Array(256);
    for (let jL = 0; jL < 256; jL++) {
      let HH = jL << 24;
      for (let BH = 0; BH < 8; BH++) HH = 2147483648 & HH ? HH << 1 ^ 79764919 : HH << 1;
      mL[jL] = HH >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const oL = new Uint32Array(256);
    for (let jL = 0; jL < 256; jL++) {
      let HH = jL << 24;
      for (let BH = 0; BH < 8; BH++) HH = 2147483648 & HH ? HH << 1 ^ 79764919 : HH << 1;
      oL[jL] = HH >>> 0 & 4294967295
    }
    const IL = HH => {
        let BH = 4294967295;
        for (let LH = 0; LH < HH.length; LH++) {
          const AH = HH[LH];
          BH = (BH << 8 ^ oL[BH >>> 24 ^ AH]) >>> 0
        }
        return BH
      },
      fL = new Uint8Array(16);
    {
      const HH = (0, tH.ed)(fL);
      fL[0] = 0, HH.setUint16(1, 45069, !1), HH.setUint16(3, 1, !1), fL[5] = 193, fL[6] = 0, fL[7] = 0, HH.setUint16(8, 1, !1), HH.setUint16(10, 61440, !1), HH.setUint32(12, IL(fL.subarray(0, 12)), !1)
    }
    var lL;
    LH(40900);
    ! function(HH) {
      HH[HH.PCM = 1] = "PCM", HH[HH.IEEE_FLOAT = 3] = "IEEE_FLOAT", HH[HH.ALAW = 6] = "ALAW", HH[HH.MULAW = 7] = "MULAW", HH[HH.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(lL || (lL = {}));
    LH(40902), LH(40916), LH(40818);
    class KL {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((HH => rH.r.includes(HH)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((HH => rH.c.includes(HH)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((HH => rH.n.includes(HH)))
      }
      _codecUnsupportedHint(HH) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class cL extends KL {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (void 0 !== HH.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(HH.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== HH.minimumFragmentDuration && (!(0, tH.Kb)(HH.minimumFragmentDuration) || HH.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== HH.onFtyp && "function" !== typeof HH.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== HH.onMoov && "function" !== typeof HH.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== HH.onMdat && "function" !== typeof HH.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== HH.onMoof && "function" !== typeof HH.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== HH.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(HH.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = HH
      }
      getSupportedTrackCounts() {
        const HH = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: HH
          },
          audio: {
            min: 0,
            max: HH
          },
          subtitle: {
            min: 0,
            max: HH
          },
          total: {
            min: 0,
            max: HH
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
      _createMuxer(HH) {
        return new uL(HH, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class eL extends cL {
      constructor(HH) {
        super(HH)
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
        return [...rH.r, ...rH.f, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...rH.n]
      }
      _codecUnsupportedHint(HH) {
        return (new gL).getSupportedCodecs().includes(HH) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class qL extends cL {
      constructor(HH) {
        super(HH)
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
        return [...rH.r, ...rH.f, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...rH.n]
      }
    }
    class gL extends cL {
      constructor(HH) {
        super(HH)
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
        return [...rH.r, ...rH.c]
      }
      _codecUnsupportedHint(HH) {
        return (new eL).getSupportedCodecs().includes(HH) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class NL extends KL {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (void 0 !== HH.appendOnly && "boolean" !== typeof HH.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== HH.minimumClusterDuration && (!(0, tH.Kb)(HH.minimumClusterDuration) || HH.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== HH.onEbmlHeader && "function" !== typeof HH.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== HH.onSegmentHeader && "function" !== typeof HH.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== HH.onCluster && "function" !== typeof HH.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = HH
      }
      _createMuxer(HH) {
        return new kL(HH, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const HH = 127;
        return {
          video: {
            min: 0,
            max: HH
          },
          audio: {
            min: 0,
            max: HH
          },
          subtitle: {
            min: 0,
            max: HH
          },
          total: {
            min: 0,
            max: HH
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
        return [...rH.r, ...rH.f, ...rH.k.filter((HH => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(HH))), ...rH.n]
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
    class RL extends NL {
      constructor(HH) {
        super(HH)
      }
      getSupportedCodecs() {
        return [...rH.r.filter((HH => ["vp8", "vp9", "av1"].includes(HH))), ...rH.c.filter((HH => ["opus", "vorbis"].includes(HH))), ...rH.n]
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
      _codecUnsupportedHint(HH) {
        return (new NL).getSupportedCodecs().includes(HH) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  40818: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => vH
    });
    var AH = LH(40820),
      rH = LH(40825),
      SH = LH(40832),
      hH = LH(40916),
      tH = LH(40888),
      zH = LH(40881),
      CH = LH(40866),
      EH = LH(40900),
      XH = LH(40849);
    const GH = ["video", "audio", "subtitle"];
    class YH {
      constructor(HH, BH, LH, AH, rH) {
        this.id = HH, this.output = BH, this.type = LH, this.source = AH, this.metadata = rH
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
      canBePairedWith(HH) {
        if (!(HH instanceof YH)) throw new TypeError("other must be an OutputTrack.");
        if (this === HH) return !1;
        const BH = (0, AH.dd)(this.metadata.group),
          LH = (0, AH.dd)(HH.metadata.group);
        for (const AH of BH) {
          if (this.type !== HH.type && LH.some((HH => AH === HH))) return !0;
          if (LH.some((HH => AH._pairedGroups.has(HH)))) return !0
        }
        return !1
      }
    }
    class uH extends YH {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, "video", LH, AH)
      }
    }
    class QH extends YH {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, "audio", LH, AH)
      }
    }
    class WH extends YH {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, "subtitle", LH, AH)
      }
    }
    class MH {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(HH) {
        if (!(HH instanceof MH)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === HH) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(HH), HH._pairedGroups.add(this)
      }
    }
    const xH = HH => {
      if (!HH || "object" !== typeof HH) throw new TypeError("metadata must be an object.");
      if (void 0 !== HH.languageCode && !(0, AH.Bb)(HH.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== HH.name && "string" !== typeof HH.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== HH.disposition && (0, rH.o)(HH.disposition), void 0 !== HH.maximumPacketCount && (!Number.isInteger(HH.maximumPacketCount) || HH.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== HH.bitrate && (!Number.isFinite(HH.bitrate) || HH.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== HH.averageBitrate && (!Number.isFinite(HH.averageBitrate) || HH.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== HH.group && !(HH.group instanceof MH) && (!Array.isArray(HH.group) || HH.group.some((HH => !(HH instanceof MH))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class vH extends AH.l {
      get target() {
        const HH = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(HH);
        const BH = this._getRootTarget();
        if ((0, AH.Ob)(BH)) throw new TypeError(HH);
        return BH
      }
      constructor(HH) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new MH, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new AH.d, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (!(HH.format instanceof SH.i)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(HH.target instanceof tH.m || HH.target instanceof tH.i)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (HH.target instanceof tH.m && this._rememberTarget(HH.target), void 0 !== HH.initTarget && !(HH.initTarget instanceof tH.m) && "function" !== typeof HH.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== HH.onFinalize && "function" !== typeof HH.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = HH.format, this.fX = HH.target, this._onFinalize = HH.onFinalize ?? null, this._initTarget = HH.initTarget ?? null, this._initTarget instanceof tH.m && this._rememberTarget(this._initTarget), this._muxer = HH.format._createMuxer(this)
      }
      _getTargetValidated(HH) {
        (0, AH.J)(this.fX instanceof tH.i);
        const BH = this.fX.getTarget(HH),
          LH = HH => {
            if (!(HH instanceof tH.m)) throw new TypeError("getTarget must return a Target.");
            return HH
          };
        return (0, AH.Ob)(BH) ? BH.then(LH) : LH(BH)
      }
      async _getTarget(HH) {
        (0, AH.J)(this.fX instanceof tH.i);
        const BH = await this._getTargetValidated(HH);
        return this._emit("target", {
          target: BH,
          request: HH,
          isRoot: HH.isRoot
        }), "canceled" === this.state ? await BH._close() : this._rememberTarget(BH), BH
      }
      _rememberTarget(HH) {
        this._unfinalizedTargets.add(HH), HH.on("finalized", (() => this._unfinalizedTargets.delete(HH)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, AH.J)(null !== this._initTarget), this._initTarget instanceof tH.m) return this._initTarget;
        const HH = await this._initTarget();
        return "canceled" === this.state ? await HH._close() : this._rememberTarget(HH), HH
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.fX instanceof tH.m) return this._emit("target", {
          target: this.fX,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.fX, this.fX;
        const HH = {
            path: this.fX.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          BH = this._getTargetValidated(HH),
          LH = BH => ("canceled" === this.state ? BH._close() : this._rememberTarget(BH), this._emit("target", {
            target: BH,
            request: HH,
            isRoot: !0
          }), this._rootTarget = BH, BH);
        return (0, AH.Ob)(BH) ? this._rootTargetPromise = BH.then(LH) : LH(BH)
      }
      _getRootWriter(HH) {
        return this._rootWriterPromise ??= (async () => {
          const BH = await this._getRootTarget(),
            LH = new zH.e(BH, "boolean" === typeof HH ? HH : HH(BH));
          return LH.start(), LH
        })()
      }
      addVideoTrack(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(HH instanceof hH.p)) throw new TypeError("source must be a VideoSource.");
        if (xH(BH), void 0 !== BH.rotation && ![0, 90, 180, 270].includes(BH.rotation)) throw new TypeError(`Invalid video rotation: ${BH.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== BH.flip && "boolean" !== typeof BH.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== BH.transformationMatrix && (!Array.isArray(BH.transformationMatrix) || 9 !== BH.transformationMatrix.length || !BH.transformationMatrix.every((HH => Number.isFinite(HH))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== BH.frameRate && (!Number.isFinite(BH.frameRate) || BH.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${BH.frameRate}. Must be a positive number.`);
        if (void 0 !== BH.hasOnlyKeyPackets && "boolean" !== typeof BH.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== BH.canBeTransparent && "boolean" !== typeof BH.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== BH.decoderConfig && (0, XH.X)({
            decoderConfig: BH.decoderConfig
          }, HH._codec), void 0 !== BH.primingPacket) {
          if (!(BH.primingPacket instanceof EH.b)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === BH.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const LH = {
          ...BH
        };
        return LH.group ??= this.defaultTrackGroup, this._addTrack(new uH(this.tracks.length + 1, this, HH, LH))
      }
      addAudioTrack(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(HH instanceof hH.e)) throw new TypeError("source must be an AudioSource.");
        if (xH(BH), void 0 !== BH.decoderConfig && (0, XH.U)({
            decoderConfig: BH.decoderConfig
          }, HH._codec), void 0 !== BH.primingPacket) {
          if (!(BH.primingPacket instanceof EH.b)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === BH.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const LH = {
          ...BH
        };
        return LH.group ??= this.defaultTrackGroup, this._addTrack(new QH(this.tracks.length + 1, this, HH, LH))
      }
      addSubtitleTrack(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(HH instanceof hH.n)) throw new TypeError("source must be a SubtitleSource.");
        xH(BH);
        const LH = {
          ...BH
        };
        return LH.group ??= this.defaultTrackGroup, this._addTrack(new WH(this.tracks.length + 1, this, HH, LH))
      }
      setMetadataTags(HH) {
        if ((0, rH.l)(HH), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = HH
      }
      _addTrack(HH) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (HH.source._connectedTrack) throw new Error("Source is already used for a track.");
        const BH = this.format.getSupportedTrackCounts(),
          LH = this.tracks.reduce(((BH, LH) => BH + (LH.type === HH.type ? 1 : 0)), 0),
          AH = BH[HH.type].max;
        if (LH === AH) throw new Error(0 === AH ? `${this.format._name} does not support ${HH.type} tracks.` : `${this.format._name} does not support more than ${AH} ${HH.type} track` + (1 === AH ? "" : "s") + ".");
        const rH = BH.total.max;
        if (this.tracks.length === rH) throw new Error(`${this.format._name} does not support more than ${rH} tracks` + (1 === rH ? "" : "s") + " in total.");
        if (HH.isVideoTrack()) {
          const BH = this.format.getSupportedVideoCodecs();
          if (0 === BH.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(HH.source._codec));
          if (!BH.includes(HH.source._codec)) throw new Error(`Codec '${HH.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${BH.map((HH=>`'${HH}'`)).join(", ")}.` + this.format._codecUnsupportedHint(HH.source._codec))
        } else if (HH.isAudioTrack()) {
          const BH = this.format.getSupportedAudioCodecs();
          if (0 === BH.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(HH.source._codec));
          if (!BH.includes(HH.source._codec)) throw new Error(`Codec '${HH.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${BH.map((HH=>`'${HH}'`)).join(", ")}.` + this.format._codecUnsupportedHint(HH.source._codec))
        } else if (HH.isSubtitleTrack()) {
          const BH = this.format.getSupportedSubtitleCodecs();
          if (0 === BH.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(HH.source._codec));
          if (!BH.includes(HH.source._codec)) throw new Error(`Codec '${HH.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${BH.map((HH=>`'${HH}'`)).join(", ")}.` + this.format._codecUnsupportedHint(HH.source._codec))
        }
        return this.tracks.push(HH), HH.source._connectedTrack = HH, HH
      }
      hasEnoughTracks() {
        const HH = this.format.getSupportedTrackCounts();
        for (const LH of GH) {
          if (this.tracks.reduce(((HH, BH) => HH + (BH.type === LH ? 1 : 0)), 0) < HH[LH].min) return !1
        }
        const BH = HH.total.min;
        return !(this.tracks.length < BH)
      }
      async start() {
        const HH = this.format.getSupportedTrackCounts();
        for (const LH of GH) {
          const BH = this.tracks.reduce(((HH, BH) => HH + (BH.type === LH ? 1 : 0)), 0),
            AH = HH[LH].min;
          if (BH < AH) throw new Error(AH === HH[LH].max ? `${this.format._name} requires exactly ${AH} ${LH} track${1===AH?"":"s"}.` : `${this.format._name} requires at least ${AH} ${LH} track${1===AH?"":"s"}.`)
        }
        const BH = HH.total.min;
        if (this.tracks.length < BH) throw new Error(BH === HH.total.max ? `${this.format._name} requires exactly ${BH} track` + (1 === BH ? "" : "s") + "." : `${this.format._name} requires at least ${BH} track` + (1 === BH ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (CH.c._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const HH = this._mutex.acquire();
          try {
            await this._muxer.start();
            const HH = this.tracks.map((HH => HH.source._start()));
            await Promise.all(HH)
          } finally {
            (await HH)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const HH = await this._mutex.acquire();
          try {
            const HH = this.tracks.map((HH => HH.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(HH), await Promise.all([...this._unfinalizedTargets].map((HH => HH._close()))), this._unfinalizedTargets.clear()
          } finally {
            HH()
          }
        })() : void("finalized" === this.state && CH.c._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (CH.c._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const HH = await this._mutex.acquire();
          try {
            const HH = this.tracks.map((HH => HH.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(HH), await this._muxer.finalize(), this._rootWriterPromise) {
              const HH = await this._rootWriterPromise;
              HH.finalized || (await HH.flush(), await HH.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (BH) {
            throw this.state = "canceled", BH
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((HH => HH._close().catch((() => {}))))), this._unfinalizedTargets.clear(), HH()
          }
        })()
      }
    }
  },
  40900: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      c: () => rH
    });
    var AH = LH(40820);
    const rH = new Uint8Array(0);
    class SH {
      constructor(HH, BH, LH, AH) {
        let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          hH = arguments.length > 5 ? arguments[5] : void 0,
          tH = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = HH, this.type = BH, this.timestamp = LH, this.duration = AH, this.sequenceNumber = SH, HH === rH && void 0 === hH) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === hH && (hH = HH.byteLength), !(HH instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== BH && "delta" !== BH) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(LH)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(AH) || AH < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(SH)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(hH) || hH < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== tH && ("object" !== typeof tH || !tH)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== tH?.alpha && !(tH.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== tH?.alphaByteLength && (!Number.isInteger(tH.alphaByteLength) || tH.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = hH, this.sideData = tH ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === rH
      }
      get microsecondTimestamp() {
        return Math.trunc(AH.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(AH.u * this.duration)
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
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: HH,
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
      static fromEncodedChunk(HH, BH) {
        if (!(HH instanceof EncodedVideoChunk || HH instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const LH = new Uint8Array(HH.byteLength);
        return HH.copyTo(LH), new SH(LH, HH.type, HH.timestamp / 1e6, (HH.duration ?? 0) / 1e6, void 0, void 0, BH)
      }
      clone(HH) {
        if (void 0 !== HH && ("object" !== typeof HH || null === HH)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== HH?.data && !(HH.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== HH?.type && "key" !== HH.type && "delta" !== HH.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== HH?.timestamp && !Number.isFinite(HH.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== HH?.duration && !Number.isFinite(HH.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== HH?.sequenceNumber && !Number.isFinite(HH.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== HH?.sideData && ("object" !== typeof HH.sideData || null === HH.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new SH(HH?.data ?? this.data, HH?.type ?? this.type, HH?.timestamp ?? this.timestamp, HH?.duration ?? this.duration, HH?.sequenceNumber ?? this.sequenceNumber, this.byteLength, HH?.sideData ?? this.sideData)
      }
    }
  },
  40907: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => lH,
      e: () => YH,
      f: () => jH,
      g: () => NH,
      i: () => TH
    });
    var AH = LH(40820),
      rH = LH(40866),
      SH = function(HH, BH, LH) {
        if (null !== BH && void 0 !== BH) {
          if ("object" !== typeof BH && "function" !== typeof BH) throw new TypeError("Object expected.");
          var AH, rH;
          if (LH) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            AH = BH[Symbol.asyncDispose]
          }
          if (void 0 === AH) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            AH = BH[Symbol.dispose], LH && (rH = AH)
          }
          if ("function" !== typeof AH) throw new TypeError("Object not disposable.");
          rH && (AH = function() {
            try {
              rH.call(this)
            } catch (HH) {
              return Promise.reject(HH)
            }
          }), HH.stack.push({
            value: BH,
            dispose: AH,
            async: LH
          })
        } else LH && HH.stack.push({
          async: !0
        });
        return BH
      },
      hH = function(HH) {
        return function(BH) {
          function LH(LH) {
            BH.error = BH.hasError ? new HH(LH, BH.error, "An error was suppressed during disposal.") : LH, BH.hasError = !0
          }
          var AH, rH = 0;
          return function HH() {
            for (; AH = BH.stack.pop();) try {
              if (!AH.async && 1 === rH) return rH = 0, BH.stack.push(AH), Promise.resolve().then(HH);
              if (AH.dispose) {
                var SH = AH.dispose.call(AH.value);
                if (AH.async) return rH |= 2, Promise.resolve(SH).then(HH, (function(BH) {
                  return LH(BH), HH()
                }))
              } else rH |= 1
            } catch (hH) {
              LH(hH)
            }
            if (1 === rH) return BH.hasError ? Promise.reject(BH.error) : Promise.resolve();
            if (BH.hasError) throw BH.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(HH, BH, LH) {
        var AH = new Error(LH);
        return AH.name = "SuppressedError", AH.error = HH, AH.suppressed = BH, AH
      });
    (0, AH.hc)();
    let tH = -1 / 0,
      zH = -1 / 0,
      CH = null;
    "undefined" !== typeof FinalizationRegistry && (CH = new FinalizationRegistry((HH => {
      const BH = performance.now();
      "video" === HH.type ? (BH - tH >= 1e3 && (rH.c._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), tH = BH), "undefined" !== typeof VideoFrame && HH.data instanceof VideoFrame && HH.data.close()) : (BH - zH >= 1e3 && (rH.c._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), zH = BH), "undefined" !== typeof AudioData && HH.data instanceof AudioData && HH.data.close())
    })));
    class EH {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const XH = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      GH = new Set(XH);
    class YH {
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
        return Math.trunc(AH.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(AH.u * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(HH, BH) {
        if (this._closed = !1, HH instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && HH instanceof SharedArrayBuffer || ArrayBuffer.isView(HH)) {
          if (!BH || "object" !== typeof BH) throw new TypeError("init must be an object.");
          if (void 0 === BH.format || !GH.has(BH.format)) throw new TypeError("init.format must be one of: " + XH.join(", "));
          if (!Number.isInteger(BH.codedWidth) || BH.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(BH.codedHeight) || BH.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== BH.rotation && ![0, 90, 180, 270].includes(BH.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== BH.flip && "boolean" !== typeof BH.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(BH.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== BH.duration && (!Number.isFinite(BH.duration) || BH.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== BH.layout) {
            if (!Array.isArray(BH.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const HH of BH.layout) {
              if (!HH || "object" !== typeof HH || Array.isArray(HH)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(HH.offset) || HH.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(HH.stride) || HH.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== BH.visibleRect && (0, AH.nd)(BH.visibleRect, "init.visibleRect"), void 0 !== BH.displayWidth && (!Number.isInteger(BH.displayWidth) || BH.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== BH.displayHeight && (!Number.isInteger(BH.displayHeight) || BH.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== BH.displayWidth !== (void 0 !== BH.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = BH.format, this.rotation = BH.rotation ?? 0, this.flip = BH.flip ?? !1, this.timestamp = BH.timestamp, this.duration = BH.duration ?? 0;
          const LH = BH.layout ?? VH(BH.format, BH.codedWidth, BH.codedHeight);
          let rH = BH.colorSpace ?? null;
          null === rH && (rH = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: BH.visibleRect?.left ?? 0,
            top: BH.visibleRect?.top ?? 0,
            width: BH.visibleRect?.width ?? BH.codedWidth,
            height: BH.visibleRect?.height ?? BH.codedHeight
          }, void 0 !== BH.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? BH.displayWidth : BH.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? BH.displayHeight : BH.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = BH._doNotCopy ? (0, AH.id)(HH) : (0, AH.id)(HH).slice(), this._layout = LH, this.colorSpace = new xH(rH)
        } else if ("undefined" !== typeof VideoFrame && HH instanceof VideoFrame) {
          if (void 0 !== BH?.rotation && ![0, 90, 180, 270].includes(BH.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== BH?.flip && "boolean" !== typeof BH.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== BH?.timestamp && !Number.isFinite(BH?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== BH?.duration && (!Number.isFinite(BH.duration) || BH.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== BH?.visibleRect && (0, AH.nd)(BH.visibleRect, "init.visibleRect"), this._data = HH, this._layout = null, this.format = HH.format, this.visibleRect = {
            left: HH.visibleRect?.x ?? 0,
            top: HH.visibleRect?.y ?? 0,
            width: HH.visibleRect?.width ?? HH.codedWidth,
            height: HH.visibleRect?.height ?? HH.codedHeight
          }, this.rotation = BH?.rotation ?? 0, this.flip = BH?.flip ?? !1, this.squarePixelWidth = HH.displayWidth, this.squarePixelHeight = HH.displayHeight, this.timestamp = BH?.timestamp ?? HH.timestamp / 1e6, this.duration = BH?.duration ?? (HH.duration ?? 0) / 1e6, this.colorSpace = new xH(HH.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && HH instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && HH instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && HH instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && HH instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && HH instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && HH instanceof OffscreenCanvas) {
          if (!BH || "object" !== typeof BH) throw new TypeError("init must be an object.");
          if (void 0 !== BH.rotation && ![0, 90, 180, 270].includes(BH.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== BH.flip && "boolean" !== typeof BH.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(BH.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== BH.duration && (!Number.isFinite(BH.duration) || BH.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== BH.visibleRect && (0, AH.nd)(BH.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new YH(new VideoFrame(HH, {
            timestamp: Math.trunc(BH.timestamp * AH.u),
            duration: Math.trunc((BH.duration ?? 0) * AH.u) || void 0,
            visibleRect: BH.visibleRect && {
              x: BH.visibleRect.left,
              y: BH.visibleRect.top,
              width: BH.visibleRect.width,
              height: BH.visibleRect.height
            }
          }), BH);
          let LH = 0,
            rH = 0;
          if ("naturalWidth" in HH ? (LH = HH.naturalWidth, rH = HH.naturalHeight) : "videoWidth" in HH ? (LH = HH.videoWidth, rH = HH.videoHeight) : "width" in HH && (LH = Number(HH.width), rH = Number(HH.height)), !LH || !rH) throw new TypeError("Could not determine dimensions.");
          const SH = BH.visibleRect ?? {
              left: 0,
              top: 0,
              width: LH,
              height: rH
            },
            hH = new OffscreenCanvas(SH.width, SH.height),
            tH = hH.getContext("2d", {
              alpha: (0, AH.zb)(),
              willReadFrequently: !0
            });
          if (!tH) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          tH.drawImage(HH, -SH.left, -SH.top), this._data = hH, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: SH.width,
            height: SH.height
          }, this.squarePixelWidth = SH.width, this.squarePixelHeight = SH.height, this.rotation = BH.rotation ?? 0, this.flip = BH.flip ?? !1, this.timestamp = BH.timestamp, this.duration = BH.duration ?? 0, this.colorSpace = new xH({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(HH instanceof EH)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!BH || "object" !== typeof BH) throw new TypeError("init must be an object.");
          if (void 0 !== BH.rotation && ![0, 90, 180, 270].includes(BH.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== BH.flip && "boolean" !== typeof BH.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(BH.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== BH.duration && (!Number.isFinite(BH.duration) || BH.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = HH, HH._referenceCount++, this.format = HH.getFormat(), null !== this.format && !XH.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: HH.getCodedWidth(),
              height: HH.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = HH.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = HH.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = BH.rotation ?? 0, this.flip = BH.flip ?? !1, this.timestamp = BH.timestamp, this.duration = BH.duration ?? 0, this.colorSpace = HH.getColorSpace()
        }
        this.encodeOptions = BH?.encodeOptions ?? {}, this.pixelAspectRatio = (0, AH.Uc)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), CH?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, AH.J)(null !== this._data), this._data instanceof EH ? new YH(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : vH(this._data) ? new YH(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, AH.J)(this._layout), new YH(this._data, {
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
        })) : new YH(this._data, {
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
        this._closed || (CH?.unregister(this), this._data instanceof EH ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : vH(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (UH(HH), this._closed) throw new Error("VideoSample is closed.");
        if (null == (HH.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (vH(this._data)) return this._data.allocationSize(HH);
        return bH(this, HH).allocationSize
      }
      async copyTo(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, AH.ub)(HH)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (UH(BH), this._closed) throw new Error("VideoSample is closed.");
        if (null == (BH.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, AH.J)(null !== this._data), vH(this._data)) return this._data.copyTo(HH, BH);
        if (BH.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(BH.format)) {
          if (!(this._data instanceof EH)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const LH = this.toVideoFrame(),
              AH = await LH.copyTo(HH, BH);
            return LH.close(), AH
          } {
            const LH = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const AH = SH(LH, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, BH.colorSpace ?? "srgb"), !1);
              if (!(AH instanceof YH)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(AH.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${AH.format}' instead.`);
              return await AH.copyTo(HH, BH)
            } catch (GH) {
              LH.error = GH, LH.hasError = !0
            } finally {
              hH(LH)
            }
          }
        }
        const LH = bH(this, BH);
        (0, AH.J)(this.format);
        const rH = (0, AH.id)(HH);
        if (rH.byteLength < LH.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${LH.allocationSize}, Available: ${rH.byteLength}`);
        const tH = OH(this.format);
        let zH;
        if (this._data instanceof EH) {
          let HH = this._data.getDataPlanes();
          if ((0, AH.Ob)(HH) && (HH = await HH), !Array.isArray(HH) || HH.some((HH => !(HH.data instanceof Uint8Array) || !Number.isInteger(HH.stride) || HH.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          zH = HH
        } else if (this._data instanceof Uint8Array)(0, AH.J)(this._layout), (0, AH.J)(this._layout.length === tH.length), zH = this._layout.map(((HH, BH) => {
          const LH = Math.ceil(this.codedHeight / tH[BH].heightDivisor);
          return {
            data: this._data.subarray(HH.offset, HH.offset + HH.stride * LH),
            stride: HH.stride
          }
        }));
        else {
          const HH = this._data.getContext("2d");
          (0, AH.J)(HH);
          const BH = HH.getImageData(0, 0, this.codedWidth, this.codedHeight);
          zH = [{
            data: (0, AH.id)(BH.data),
            stride: 4 * this.codedWidth
          }]
        }
        const CH = [],
          XH = tH.length;
        for (let AH = 0; AH < XH; AH++) {
          const HH = LH.computedLayouts[AH],
            BH = zH[AH].stride,
            SH = zH[AH].data;
          let hH = HH.sourceTop * BH;
          hH += HH.sourceLeftBytes;
          let tH = HH.destinationOffset;
          const EH = HH.sourceWidthBytes,
            XH = {
              offset: tH,
              stride: HH.destinationStride
            };
          for (let LH = 0; LH < HH.sourceHeight; LH++) {
            if (hH + EH > SH.byteLength) throw new Error("Source buffer OOB read.");
            if (tH + EH > rH.byteLength) throw new Error("Destination buffer OOB write.");
            const LH = SH.subarray(hH, hH + EH);
            rH.set(LH, tH), hH += BH, tH += HH.destinationStride
          }
          CH.push(XH)
        }
        if (void 0 !== BH.format) {
          const HH = this.format.startsWith("RGB") !== BH.format.startsWith("RGB"),
            AH = this.format.includes("X") && BH.format.includes("A");
          if (HH || AH)
            for (let BH = 0; BH < LH.allocationSize; BH += 4) {
              if (HH) {
                const HH = rH[BH],
                  LH = rH[BH + 2];
                rH[BH] = LH, rH[BH + 2] = HH
              }
              AH && (rH[BH + 3] = 255)
            }
        }
        return CH
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, AH.J)(null !== this._data), this._data instanceof EH) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const HH = this._data.getDataPlanes();
          if ((0, AH.Ob)(HH)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const BH = HH.reduce(((HH, BH) => HH + BH.data.byteLength), 0),
            LH = new Uint8Array(BH);
          let rH = 0;
          const SH = [];
          for (const AH of HH) LH.set(AH.data, rH), SH.push(rH), rH += AH.data.byteLength;
          return new VideoFrame(LH, {
            format: this.format,
            layout: HH.map(((HH, BH) => ({
              offset: SH[BH],
              stride: HH.stride
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
        return vH(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, AH.J)(this._layout), new VideoFrame(this._data, {
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
      draw(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        let CH = 0,
          EH = 0,
          XH = this.displayWidth,
          GH = this.displayHeight,
          YH = 0,
          uH = 0,
          QH = this.displayWidth,
          WH = this.displayHeight;
        if (void 0 !== SH ? (CH = BH, EH = LH, XH = AH, GH = rH, YH = SH, uH = hH, void 0 !== tH ? (QH = tH, WH = zH) : (QH = XH, WH = GH)) : (YH = BH, uH = LH, void 0 !== AH && (QH = AH, WH = rH)), !("undefined" !== typeof CanvasRenderingContext2D && HH instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && HH instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(CH)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(EH)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(XH) || XH < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(GH) || GH < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(YH)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(uH)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(QH) || QH < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(WH) || WH < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: CH,
          sy: EH,
          sWidth: XH,
          sHeight: GH
        } = this._unmapSourceRegion(CH, EH, XH, GH, this.rotation, this.flip));
        const MH = this.toCanvasImageSource();
        HH.save();
        const xH = YH + QH / 2,
          vH = uH + WH / 2;
        HH.translate(xH, vH), this.flip && HH.scale(-1, 1), HH.rotate(this.rotation * Math.PI / 180);
        const PH = this.rotation % 180 === 0 ? 1 : QH / WH;
        HH.scale(1 / PH, PH), HH.drawImage(MH, CH, EH, XH, GH, -QH / 2, -WH / 2, QH, WH), HH.restore()
      }
      drawWithFit(HH, BH) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && HH instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && HH instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!BH || "object" !== typeof BH) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(BH.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== BH.rotation && ![0, 90, 180, 270].includes(BH.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== BH.flip && "boolean" !== typeof BH.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== BH.crop && TH(BH.crop, "options.");
        const LH = HH.canvas.width,
          AH = HH.canvas.height,
          rH = BH.rotation ?? this.rotation,
          SH = BH.flip ?? this.flip,
          [hH, tH] = rH % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let zH, CH, EH, XH, GH = BH.crop;
        GH && (GH = PH(GH, hH, tH));
        const {
          sx: YH,
          sy: uH,
          sWidth: QH,
          sHeight: WH
        } = this._unmapSourceRegion(BH.crop?.left ?? 0, BH.crop?.top ?? 0, BH.crop?.width ?? hH, BH.crop?.height ?? tH, rH, SH);
        if ("fill" === BH.fit) zH = 0, CH = 0, EH = LH, XH = AH;
        else {
          const [HH, rH] = BH.crop ? [BH.crop.width, BH.crop.height] : [hH, tH], SH = "contain" === BH.fit ? Math.min(LH / HH, AH / rH) : Math.max(LH / HH, AH / rH);
          EH = HH * SH, XH = rH * SH, zH = (LH - EH) / 2, CH = (AH - XH) / 2
        }
        HH.save();
        const MH = rH % 180 === 0 ? 1 : EH / XH;
        HH.translate(LH / 2, AH / 2), SH && HH.scale(-1, 1), HH.rotate(rH * Math.PI / 180), HH.scale(1 / MH, MH), HH.translate(-LH / 2, -AH / 2), HH.drawImage(this.toCanvasImageSource(), YH, uH, QH, WH, zH, CH, EH, XH), HH.restore()
      }
      _unmapSourceRegion(HH, BH, LH, AH, rH, SH) {
        if (SH) {
          HH = (rH % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - HH - LH
        }
        return 90 === rH ? [HH, BH, LH, AH] = [BH, this.squarePixelHeight - HH - LH, AH, LH] : 180 === rH ? [HH, BH] = [this.squarePixelWidth - HH - LH, this.squarePixelHeight - BH - AH] : 270 === rH && ([HH, BH, LH, AH] = [this.squarePixelWidth - BH - AH, HH, AH, LH]), {
          sx: HH,
          sy: BH,
          sWidth: LH,
          sHeight: AH
        }
      }
      _drawWithFitAndMipmapping(HH, BH, LH) {
        const AH = HH.width,
          rH = HH.height,
          [SH, hH] = LH.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          tH = LH.crop ? LH.crop.width : SH,
          zH = LH.crop ? LH.crop.height : hH;
        let CH = 0;
        2 * AH < tH && 2 * rH < zH && (CH = Math.floor(Math.log2(Math.min(tH / AH, zH / rH))));
        const EH = AH * 2 ** CH,
          XH = rH * 2 ** CH,
          {
            canvas: GH,
            context: YH,
            isNew: uH
          } = CH > 0 ? MH(EH, XH) : {
            canvas: HH,
            context: BH,
            isNew: LH.targetIsFresh
          };
        YH.imageSmoothingQuality = "high", LH.fillBlack ? (YH.fillStyle = "black", YH.fillRect(0, 0, EH, XH)) : uH || YH.clearRect(0, 0, EH, XH), this.drawWithFit(YH, {
          fit: LH.fit,
          rotation: LH.rotation,
          flip: LH.flip,
          crop: LH.crop
        }), YH.globalCompositeOperation = "copy";
        for (let QH = CH; QH > 1; QH--) {
          const HH = AH * 2 ** QH,
            BH = rH * 2 ** QH;
          YH.drawImage(GH, 0, 0, HH, BH, 0, 0, HH / 2, BH / 2)
        }
        YH.globalCompositeOperation = "source-over", CH > 0 && (BH.imageSmoothingQuality = "high", BH.globalCompositeOperation = "copy", BH.drawImage(GH, 0, 0, 2 * AH, 2 * rH, 0, 0, AH, rH), BH.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, AH.J)(null !== this._data), this._data instanceof EH || this._data instanceof Uint8Array) {
          const HH = this.toVideoFrame();
          return queueMicrotask((() => HH.close())), HH
        }
        return this._data
      }
      async transform(HH) {
        if (!HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (void 0 !== HH.width && (!Number.isInteger(HH.width) || HH.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== HH.height && (!Number.isInteger(HH.height) || HH.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== HH.roundDimensionsTo && (!Number.isInteger(HH.roundDimensionsTo) || HH.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== HH.fit && !["fill", "contain", "cover"].includes(HH.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== HH.width && void 0 !== HH.height && void 0 === HH.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== HH.rotate && ![0, 90, 180, 270].includes(HH.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== HH.flip && "boolean" !== typeof HH.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== HH.crop && TH(HH.crop, "options."), void 0 !== HH.alpha && !["keep", "discard"].includes(HH.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: BH,
          flip: LH
        } = (0, AH.gb)(this.rotation, this.flip, HH.rotate ?? 0, HH.flip ?? !1), [rH, SH] = BH % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let hH = HH.crop;
        hH && (hH = PH(hH, rH, SH));
        const tH = hH ? hH.width : rH,
          zH = hH ? hH.height : SH,
          CH = tH / zH;
        let EH, XH;
        void 0 !== HH.width && void 0 === HH.height ? (EH = HH.width, XH = EH / CH) : void 0 === HH.width && void 0 !== HH.height ? (XH = HH.height, EH = XH * CH) : void 0 !== HH.width && void 0 !== HH.height ? (EH = HH.width, XH = HH.height) : (EH = tH, XH = zH), EH = (0, AH.Dc)(EH, HH.roundDimensionsTo ?? 1), XH = (0, AH.Dc)(XH, HH.roundDimensionsTo ?? 1);
        const GH = {
          width: EH,
          height: XH,
          fit: HH.fit ?? "fill",
          rotation: BH,
          flip: LH,
          crop: hH ?? {
            left: 0,
            top: 0,
            width: rH,
            height: SH
          },
          alpha: HH.alpha ?? "keep"
        };
        for (const YH of uH) {
          let HH = YH(this, GH);
          if ((0, AH.Ob)(HH) && (HH = await HH), null !== HH) return HH
        }
        const {
          canvas: QH,
          context: WH,
          isNew: xH
        } = MH(GH.width, GH.height);
        return this._drawWithFitAndMipmapping(QH, WH, {
          fit: GH.fit,
          rotation: GH.rotation,
          flip: GH.flip,
          crop: GH.crop,
          targetIsFresh: xH,
          fillBlack: "discard" === GH.alpha
        }), new YH(QH, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(HH) {
        if (![0, 90, 180, 270].includes(HH)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = HH
      }
      setFlip(HH) {
        if ("boolean" !== typeof HH) throw new TypeError("newFlip must be a boolean.");
        this.flip = HH
      }
      setTimestamp(HH) {
        if (!Number.isFinite(HH)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = HH
      }
      setDuration(HH) {
        if (!Number.isFinite(HH) || HH < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = HH
      }
      setEncodeOptions(HH) {
        if (!HH || "object" !== typeof HH) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = HH
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const uH = [],
      QH = [];
    let WH = 0;
    const MH = (HH, BH) => {
      for (const AH of QH)
        if (AH.canvas.width === HH && AH.canvas.height === BH) return AH.age = WH++, {
          canvas: AH.canvas,
          context: AH.context,
          isNew: !1
        };
      let LH;
      if ("undefined" !== typeof OffscreenCanvas) LH = new OffscreenCanvas(HH, BH);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        LH = document.createElement("canvas"), LH.width = HH, LH.height = BH
      }
      const rH = LH.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!rH) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return QH.length >= 3 && QH.splice((0, AH.C)(QH, (HH => HH.age)), 1), QH.push({
        canvas: LH,
        context: rH,
        age: WH++
      }), {
        canvas: LH,
        context: rH,
        isNew: !0
      }
    };
    class xH {
      constructor(HH) {
        if (void 0 !== HH) {
          if (!HH || "object" !== typeof HH) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const BH = Object.keys(AH.g);
          if (null != HH.primaries && !BH.includes(HH.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${BH.join(", ")}.`);
          const LH = Object.keys(AH.v);
          if (null != HH.transfer && !LH.includes(HH.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${LH.join(", ")}.`);
          const rH = Object.keys(AH.p);
          if (null != HH.matrix && !rH.includes(HH.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${rH.join(", ")}.`);
          if (null != HH.fullRange && "boolean" !== typeof HH.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = HH?.primaries ?? null, this.transfer = HH?.transfer ?? null, this.matrix = HH?.matrix ?? null, this.fullRange = HH?.fullRange ?? null
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
    const vH = HH => "undefined" !== typeof VideoFrame && HH instanceof VideoFrame,
      PH = (HH, BH, LH) => {
        const rH = Math.min(HH.left, BH),
          SH = Math.min(HH.top, LH),
          hH = Math.min(HH.width, BH - rH),
          tH = Math.min(HH.height, LH - SH);
        return (0, AH.J)(hH >= 0), (0, AH.J)(tH >= 0), {
          left: rH,
          top: SH,
          width: hH,
          height: tH
        }
      },
      TH = (HH, BH) => {
        if (!HH || "object" !== typeof HH) throw new TypeError(BH + "crop, when provided, must be an object.");
        if (!Number.isInteger(HH.left) || HH.left < 0) throw new TypeError(BH + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(HH.top) || HH.top < 0) throw new TypeError(BH + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(HH.width) || HH.width < 0) throw new TypeError(BH + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(HH.height) || HH.height < 0) throw new TypeError(BH + "crop.height must be a non-negative integer.")
      },
      UH = HH => {
        if (!HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (void 0 !== HH.colorSpace && !["display-p3", "srgb"].includes(HH.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== HH.format && "string" !== typeof HH.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== HH.layout) {
          if (!Array.isArray(HH.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const BH of HH.layout) {
            if (!BH || "object" !== typeof BH) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(BH.offset) || BH.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(BH.stride) || BH.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== HH.rect) {
          if (!HH.rect || "object" !== typeof HH.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== HH.rect.x && (!Number.isInteger(HH.rect.x) || HH.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== HH.rect.y && (!Number.isInteger(HH.rect.y) || HH.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== HH.rect.width && (!Number.isInteger(HH.rect.width) || HH.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== HH.rect.height && (!Number.isInteger(HH.rect.height) || HH.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      VH = (HH, BH, LH) => {
        const AH = OH(HH),
          rH = [];
        let SH = 0;
        for (const hH of AH) {
          const HH = Math.ceil(BH / hH.widthDivisor),
            AH = Math.ceil(LH / hH.heightDivisor),
            tH = HH * hH.sampleBytes,
            zH = tH * AH;
          rH.push({
            offset: SH,
            stride: tH
          }), SH += zH
        }
        return rH
      },
      OH = HH => {
        const BH = (HH, BH, LH, AH, rH) => {
          const SH = [{
            sampleBytes: HH,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: BH,
            widthDivisor: LH,
            heightDivisor: AH
          }, {
            sampleBytes: BH,
            widthDivisor: LH,
            heightDivisor: AH
          }];
          return rH && SH.push({
            sampleBytes: HH,
            widthDivisor: 1,
            heightDivisor: 1
          }), SH
        };
        switch (HH) {
          case "I420":
            return BH(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return BH(2, 2, 2, 2, !1);
          case "I420A":
            return BH(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return BH(2, 2, 2, 2, !0);
          case "I422":
            return BH(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return BH(2, 2, 2, 1, !1);
          case "I422A":
            return BH(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return BH(2, 2, 2, 1, !0);
          case "I444":
            return BH(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return BH(2, 2, 1, 1, !1);
          case "I444A":
            return BH(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return BH(2, 2, 1, 1, !0);
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
            (0, AH.G)(HH), (0, AH.J)(!1)
        }
      },
      bH = (HH, BH) => {
        const LH = {
            left: 0,
            top: 0,
            width: HH.codedWidth,
            height: HH.codedHeight
          },
          AH = BH.rect,
          rH = kH(LH, AH, HH.codedWidth, HH.codedHeight, HH.format),
          SH = BH.layout;
        let hH;
        if (BH.format && BH.format !== HH.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(BH.format)) throw new Error("NotSupportedError: Invalid destination format.");
          hH = BH.format
        } else hH = HH.format;
        return oH(rH, hH, SH)
      },
      kH = (HH, BH, LH, AH, rH) => {
        const SH = {
          ...HH
        };
        if (void 0 !== BH) {
          if (0 === BH.width || 0 === BH.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((BH.x || 0) + (BH.width || 0) > LH) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((BH.y || 0) + (BH.height || 0) > AH) throw new TypeError("visibleRect exceeds codedHeight.");
          SH.x = BH.x || 0, SH.y = BH.y || 0, SH.width = BH.width || 0, SH.height = BH.height || 0
        }
        if (!mH(rH, SH)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return SH
      },
      mH = (HH, BH) => {
        if (null === HH) return !0;
        const LH = OH(HH);
        for (let AH = 0; AH < LH.length; AH++) {
          const HH = LH[AH],
            rH = HH.widthDivisor,
            SH = HH.heightDivisor;
          if ((BH.x || 0) % rH !== 0) return !1;
          if ((BH.y || 0) % SH !== 0) return !1
        }
        return !0
      },
      oH = (HH, BH, LH) => {
        const AH = OH(BH),
          rH = AH.length;
        if (void 0 !== LH && LH.length !== rH) throw new TypeError(`Layout must have ${rH} planes.`);
        let SH = 0;
        const hH = [],
          tH = [];
        for (let zH = 0; zH < rH; zH++) {
          const BH = AH[zH],
            rH = BH.sampleBytes,
            CH = BH.widthDivisor,
            EH = BH.heightDivisor,
            XH = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (XH.sourceTop = Math.ceil(Math.trunc(HH.y || 0) / EH), XH.sourceHeight = Math.ceil(Math.trunc(HH.height || 0) / EH), XH.sourceLeftBytes = Math.floor(Math.trunc(HH.x || 0) / CH) * rH, XH.sourceWidthBytes = Math.floor(Math.trunc(HH.width || 0) / CH) * rH, void 0 !== LH) {
            const HH = LH[zH];
            if (HH.stride < XH.sourceWidthBytes) throw new TypeError(`Stride for plane ${zH} is too small.`);
            XH.destinationOffset = HH.offset, XH.destinationStride = HH.stride
          } else XH.destinationOffset = SH, XH.destinationStride = XH.sourceWidthBytes;
          const GH = XH.destinationStride * XH.sourceHeight + XH.destinationOffset;
          if (GH > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          tH.push(GH), SH = Math.max(SH, GH);
          for (let HH = 0; HH < zH; HH++) {
            const BH = hH[HH];
            if (!(tH[zH] <= BH.destinationOffset || tH[HH] <= XH.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          hH.push(XH)
        }
        return {
          allocationSize: SH,
          computedLayouts: hH
        }
      },
      IH = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class fH {
      constructor() {
        this._referenceCount = 0
      }
    }
    class lH {
      get microsecondTimestamp() {
        return Math.trunc(AH.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(AH.u * this.duration)
      }
      constructor(HH) {
        if (this._closed = !1, gH(HH)) {
          if (null === HH.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = HH, this.format = HH.format, this.sampleRate = HH.sampleRate, this.numberOfFrames = HH.numberOfFrames, this.numberOfChannels = HH.numberOfChannels, this.timestamp = HH.timestamp / 1e6, this.duration = HH.numberOfFrames / HH.sampleRate
        } else if (HH instanceof fH) {
          if (this._data = HH, HH._referenceCount++, this.format = HH.getFormat(), !IH.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = HH.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = HH.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = HH.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = HH.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!HH || "object" !== typeof HH) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!IH.has(HH.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(HH.sampleRate) || HH.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(HH.numberOfChannels) || 0 === HH.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(HH?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const BH = HH.data.byteLength / (KH(HH.format) * HH.numberOfChannels);
          if (!Number.isInteger(BH)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let LH;
          if (this.format = HH.format, this.sampleRate = HH.sampleRate, this.numberOfFrames = BH, this.numberOfChannels = HH.numberOfChannels, this.timestamp = HH.timestamp, this.duration = BH / HH.sampleRate, HH.data instanceof ArrayBuffer) LH = new Uint8Array(HH.data);
          else {
            if (!ArrayBuffer.isView(HH.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            LH = new Uint8Array(HH.data.buffer, HH.data.byteOffset, HH.data.byteLength)
          }
          const AH = this.numberOfFrames * this.numberOfChannels * KH(this.format);
          if (LH.byteLength < AH) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = LH
        }
        CH?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(HH) {
        if (!HH || "object" !== typeof HH) throw new TypeError("options must be an object.");
        if (!Number.isInteger(HH.planeIndex) || HH.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== HH.format && !IH.has(HH.format)) throw new TypeError("Invalid format.");
        if (void 0 !== HH.frameOffset && (!Number.isInteger(HH.frameOffset) || HH.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== HH.frameCount && (!Number.isInteger(HH.frameCount) || HH.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const BH = HH.format ?? this.format,
          LH = HH.frameOffset ?? 0;
        if (LH >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const AH = void 0 !== HH.frameCount ? HH.frameCount : this.numberOfFrames - LH;
        if (AH > this.numberOfFrames - LH) throw new RangeError("frameCount out of range");
        const rH = KH(BH),
          SH = cH(BH);
        if (SH && HH.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!SH && 0 !== HH.planeIndex) throw new RangeError("planeIndex out of range");
        return (SH ? AH : AH * this.numberOfChannels) * rH
      }
      copyTo(HH, BH) {
        if (!(0, AH.ub)(HH)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!BH || "object" !== typeof BH) throw new TypeError("options must be an object.");
        if (!Number.isInteger(BH.planeIndex) || BH.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== BH.format && !IH.has(BH.format)) throw new TypeError("Invalid format.");
        if (void 0 !== BH.frameOffset && (!Number.isInteger(BH.frameOffset) || BH.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== BH.frameCount && (!Number.isInteger(BH.frameCount) || BH.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: LH,
          frameCount: rH,
          frameOffset: SH
        } = BH;
        let {
          planeIndex: hH
        } = BH, tH = this.format;
        const zH = LH ?? this.format;
        if (!zH) throw new Error("Destination format not determined");
        const CH = this.numberOfFrames,
          EH = this.numberOfChannels,
          XH = SH ?? 0;
        if (XH >= CH) throw new RangeError("frameOffset out of range");
        const GH = void 0 !== rH ? rH : CH - XH;
        if (GH > CH - XH) throw new RangeError("frameCount out of range");
        const YH = KH(zH),
          uH = cH(zH);
        if (uH && hH >= EH) throw new RangeError("planeIndex out of range");
        if (!uH && 0 !== hH) throw new RangeError("planeIndex out of range");
        const QH = (uH ? GH : GH * EH) * YH;
        if (HH.byteLength < QH) throw new RangeError("Destination buffer is too small");
        const WH = (0, AH.ed)(HH),
          MH = qH(zH);
        if (gH(this._data)) {
          if ((0, AH.Rb)() && EH > 2 && zH !== tH) return void RH(this._data, WH, tH, zH, EH, hH, XH, GH);
          try {
            return void this._data.copyTo(HH, {
              planeIndex: hH,
              frameOffset: XH,
              frameCount: GH,
              format: zH
            })
          } catch (VH) {
            if ("f32-planar" === zH) throw VH;
            tH = "f32-planar"
          }
        }
        const xH = eH(tH),
          vH = KH(tH),
          PH = cH(tH);
        let TH;
        if (this._data instanceof fH) {
          const HH = HH => {
            const BH = this._data.getDataPlane(HH);
            if (!(BH instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const LH = CH * vH * (PH ? 1 : EH);
            if (BH.byteLength !== LH) throw new TypeError(`Data plane ${HH} has invalid size. Expected exactly ${LH} bytes, got ${BH.byteLength} bytes.`);
            return BH
          };
          if (PH)
            if (uH) TH = HH(hH), hH = 0;
            else {
              TH = new Uint8Array(CH * vH * EH);
              for (let BH = 0; BH < EH; BH++) {
                const LH = HH(BH);
                TH.set(LH, BH * CH * vH)
              }
            }
          else TH = HH(0)
        } else if (this._data instanceof Uint8Array) TH = this._data;
        else if ((0, AH.J)("f32-planar" === tH), uH) TH = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: hH
        })), this._data.copyTo(TH, {
          format: "f32-planar",
          planeIndex: hH
        }), hH = 0;
        else {
          TH = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * EH);
          for (let HH = 0; HH < EH; HH++) this._data.copyTo(TH.subarray(HH * CH * vH, (HH + 1) * CH * vH), {
            format: "f32-planar",
            planeIndex: HH
          })
        }
        const UH = (0, AH.ed)(TH);
        for (let AH = 0; AH < GH; AH++)
          if (uH) {
            let HH;
            HH = PH ? (hH * CH + (AH + XH)) * vH : ((AH + XH) * EH + hH) * vH;
            MH(WH, AH * YH, xH(UH, HH))
          } else
            for (let HH = 0; HH < EH; HH++) {
              let BH;
              BH = PH ? (HH * CH + (AH + XH)) * vH : ((AH + XH) * EH + HH) * vH;
              MH(WH, (AH * EH + HH) * YH, xH(UH, BH))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof fH) {
          const HH = new lH(this._data);
          return HH.setTimestamp(this.timestamp), HH
        }
        if (gH(this._data)) {
          const HH = new lH(this._data.clone());
          return HH.setTimestamp(this.timestamp), HH
        }
        return new lH({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(HH) || HH < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(BH) || BH < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (HH > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (BH > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (BH < HH) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const LH = BH - HH,
          AH = KH(this.format);
        let rH;
        if (cH(this.format)) {
          const BH = LH * AH;
          if (rH = new Uint8Array(BH * this.numberOfChannels), LH > 0)
            for (let AH = 0; AH < this.numberOfChannels; AH++) this.copyTo(rH.subarray(AH * BH, (AH + 1) * BH), {
              planeIndex: AH,
              format: this.format,
              frameOffset: HH,
              frameCount: LH
            })
        } else rH = new Uint8Array(LH * this.numberOfChannels * AH), LH > 0 && this.copyTo(rH, {
          planeIndex: 0,
          format: this.format,
          frameOffset: HH,
          frameCount: LH
        });
        return new lH({
          data: rH,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + HH / this.sampleRate
        })
      }
      close() {
        this._closed || (CH?.unregister(this), this._data instanceof fH ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : gH(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof fH ? this._createAudioDataFromData() : gH(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (cH(this.format)) {
          const HH = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            BH = new ArrayBuffer(HH * this.numberOfChannels);
          for (let LH = 0; LH < this.numberOfChannels; LH++) this.copyTo(new Uint8Array(BH, LH * HH, HH), {
            planeIndex: LH,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: BH
          })
        } {
          const HH = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(HH, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: HH
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const HH = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          BH = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let LH = 0; LH < this.numberOfChannels; LH++) this.copyTo(BH, {
          planeIndex: LH,
          format: "f32-planar"
        }), HH.copyToChannel(BH, LH);
        return HH
      }
      setTimestamp(HH) {
        if (!Number.isFinite(HH)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = HH
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(HH, BH) {
        if (!(HH instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const LH = HH.numberOfChannels,
          AH = HH.sampleRate,
          rH = HH.length,
          SH = Math.floor(24e4 / LH);
        let hH = 0,
          tH = rH;
        for (; tH > 0;) {
          const rH = Math.min(SH, tH),
            zH = new Float32Array(LH * rH);
          for (let BH = 0; BH < LH; BH++) HH.copyFromChannel(zH.subarray(BH * rH, (BH + 1) * rH), BH, hH);
          yield new lH({
            format: "f32-planar",
            sampleRate: AH,
            numberOfFrames: rH,
            numberOfChannels: LH,
            timestamp: BH + hH / AH,
            data: zH
          }), hH += rH, tH -= rH
        }
      }
      static fromAudioBuffer(HH, BH) {
        if (!(HH instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const LH = HH.numberOfChannels,
          AH = HH.sampleRate,
          rH = HH.length,
          SH = Math.floor(24e4 / LH);
        let hH = 0,
          tH = rH;
        const zH = [];
        for (; tH > 0;) {
          const rH = Math.min(SH, tH),
            CH = new Float32Array(LH * rH);
          for (let BH = 0; BH < LH; BH++) HH.copyFromChannel(CH.subarray(BH * rH, (BH + 1) * rH), BH, hH);
          const EH = new lH({
            format: "f32-planar",
            sampleRate: AH,
            numberOfFrames: rH,
            numberOfChannels: LH,
            timestamp: BH + hH / AH,
            data: CH
          });
          zH.push(EH), hH += rH, tH -= rH
        }
        return zH
      }
    }
    const KH = HH => {
        switch (HH) {
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
      cH = HH => {
        switch (HH) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      eH = HH => {
        switch (HH) {
          case "u8":
          case "u8-planar":
            return (HH, BH) => (HH.getUint8(BH) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (HH, BH) => HH.getInt16(BH, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (HH, BH) => HH.getInt32(BH, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (HH, BH) => HH.getFloat32(BH, !0)
        }
      },
      qH = HH => {
        switch (HH) {
          case "u8":
          case "u8-planar":
            return (HH, BH, LH) => HH.setUint8(BH, (0, AH._)(Math.round(128 * LH) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (HH, BH, LH) => HH.setInt16(BH, (0, AH._)(Math.round(32768 * LH), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (HH, BH, LH) => HH.setInt32(BH, (0, AH._)(Math.round(2147483648 * LH), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (HH, BH, LH) => HH.setFloat32(BH, LH, !0)
        }
      },
      gH = HH => "undefined" !== typeof AudioData && HH instanceof AudioData,
      NH = HH => {
        switch (HH) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return HH
        }
      },
      RH = (HH, BH, LH, rH, SH, hH, tH, zH) => {
        const CH = eH(LH),
          EH = qH(rH),
          XH = KH(LH),
          GH = KH(rH),
          YH = cH(LH);
        if (cH(rH))
          if (YH) {
            const rH = new ArrayBuffer(zH * XH),
              SH = (0, AH.ed)(rH);
            HH.copyTo(rH, {
              planeIndex: hH,
              frameOffset: tH,
              frameCount: zH,
              format: LH
            });
            for (let HH = 0; HH < zH; HH++) {
              EH(BH, HH * GH, CH(SH, HH * XH))
            }
          } else {
            const rH = new ArrayBuffer(zH * SH * XH),
              YH = (0, AH.ed)(rH);
            HH.copyTo(rH, {
              planeIndex: 0,
              frameOffset: tH,
              frameCount: zH,
              format: LH
            });
            for (let HH = 0; HH < zH; HH++) {
              EH(BH, HH * GH, CH(YH, (HH * SH + hH) * XH))
            }
          }
        else if (YH) {
          const rH = new ArrayBuffer(zH * XH),
            hH = (0, AH.ed)(rH);
          for (let AH = 0; AH < SH; AH++) {
            HH.copyTo(rH, {
              planeIndex: AH,
              frameOffset: tH,
              frameCount: zH,
              format: LH
            });
            for (let HH = 0; HH < zH; HH++) {
              EH(BH, (HH * SH + AH) * GH, CH(hH, HH * XH))
            }
          }
        } else {
          const rH = new ArrayBuffer(zH * SH * XH),
            hH = (0, AH.ed)(rH);
          HH.copyTo(rH, {
            planeIndex: 0,
            frameOffset: tH,
            frameCount: zH,
            format: LH
          });
          for (let HH = 0; HH < zH; HH++)
            for (let LH = 0; LH < SH; LH++) {
              const AH = HH * SH + LH;
              EH(BH, AH * GH, CH(hH, AH * XH))
            }
        }
      },
      jH = (HH, BH) => {
        const LH = HH.allocationSize({
            format: BH,
            planeIndex: 0
          }),
          AH = new ArrayBuffer(LH);
        return HH.copyTo(AH, {
          format: BH,
          planeIndex: 0
        }), new lH({
          data: AH,
          format: BH,
          numberOfChannels: HH.numberOfChannels,
          sampleRate: HH.sampleRate,
          timestamp: HH.timestamp,
          duration: HH.duration
        })
      }
  },
  40879: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      f: () => CH,
      i: () => SH,
      j: () => zH
    });
    const AH = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      rH = /^WEBVTT(.|\n)*?\n{2}/,
      SH = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class hH {
      constructor(HH) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = HH
      }
      parse(HH) {
        let BH;
        if (HH = HH.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), AH.lastIndex = 0, !this.preambleText) {
          if (!rH.test(HH)) throw new Error("WebVTT preamble incorrect.");
          BH = AH.exec(HH);
          const LH = HH.slice(0, BH?.index ?? HH.length).trimEnd();
          if (!LH) throw new Error("No WebVTT preamble provided.");
          this.preambleText = LH, BH && (HH = HH.slice(BH.index), AH.lastIndex = 0)
        }
        for (; BH = AH.exec(HH);) {
          const LH = HH.slice(0, BH.index),
            rH = BH[1],
            SH = BH.index + BH[0].length,
            hH = HH.indexOf("\n", SH) + 1,
            tH = HH.slice(SH, hH).trim();
          let CH = HH.indexOf("\n\n", SH); - 1 === CH && (CH = HH.length);
          const EH = zH(BH[2]),
            XH = zH(BH[3]) - EH,
            GH = HH.slice(hH, CH).trim();
          HH = HH.slice(CH).trimStart(), AH.lastIndex = 0;
          const YH = {
              timestamp: EH / 1e3,
              duration: XH / 1e3,
              text: GH,
              identifier: rH,
              settings: tH,
              notes: LH
            },
            uH = {};
          this.preambleEmitted || (uH.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(YH, uH)
        }
      }
    }
    const tH = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      zH = HH => {
        const BH = tH.exec(HH);
        if (!BH) throw new Error("Expected match.");
        return 36e5 * Number(BH[1] || "0") + 6e4 * Number(BH[2]) + 1e3 * Number(BH[3]) + Number(BH[4])
      },
      CH = HH => {
        const BH = Math.floor(HH / 36e5),
          LH = Math.floor(HH % 36e5 / 6e4),
          AH = Math.floor(HH % 6e4 / 1e3),
          rH = HH % 1e3;
        return BH.toString().padStart(2, "0") + ":" + LH.toString().padStart(2, "0") + ":" + AH.toString().padStart(2, "0") + "." + rH.toString().padStart(3, "0")
      }
  },
  40888: (HH, BH, LH) => {
    var AH;
    LH.d(BH, {
      d: () => CH,
      g: () => EH,
      i: () => GH,
      m: () => hH
    });
    var rH = LH(40891),
      SH = LH(40820);
    "undefined" !== typeof(AH || (AH = LH.t(rH, 2))) && (AH || (AH = LH.t(rH, 2)));
    class hH extends SH.l {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(HH) {
        !1 !== this._monotonicity && (this._monotonicity = HH)
      }
      _dispatchWrite(HH, BH) {
        this.onwrite?.(HH, BH), this._emit("write", {
          start: HH,
          end: BH
        })
      }
      slice(HH) {
        if (!Number.isInteger(HH) || HH < 0) throw new TypeError("offset must be a non-negative integer.");
        return new XH(this, HH)
      }
    }
    const tH = 65536,
      zH = 2 ** 32;
    class CH extends hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !HH || "object" !== typeof HH) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== HH.onFinalize && "function" !== typeof HH.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = HH, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(tH, {
            maxByteLength: zH
          })
        } catch {
          this._buffer = new ArrayBuffer(tH), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(tH);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(HH) {
        let BH = this._buffer.byteLength;
        for (; BH < HH;) BH *= 2;
        if (BH !== this._buffer.byteLength) {
          if (BH > zH) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(BH);
          else {
            const HH = new ArrayBuffer(BH),
              LH = new Uint8Array(HH);
            LH.set(this._bytes, 0), this._buffer = HH, this._bytes = LH
          }
        }
      }
      _start() {}
      _write(HH, BH) {
        this._ensureSize(BH + HH.byteLength), this._bytes.set(HH, BH), this._maxPos = Math.max(this._maxPos, BH + HH.byteLength), this._dispatchWrite(BH, BH + HH.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(HH, BH) {
        return this._bytes.slice(HH, BH)
      }
    }
    class EH extends hH {
      _start() {}
      _write(HH, BH) {
        this._dispatchWrite(BH, BH + HH.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class XH extends hH {
      constructor(HH, BH) {
        super(), this._baseTarget = HH, this._offset = BH
      }
      _start() {}
      _write(HH, BH) {
        this._baseTarget._write(HH, this._offset + BH), this._dispatchWrite(BH, BH + HH.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(HH) {
        super._setMonotonicity(HH), this._baseTarget._setMonotonicity(HH)
      }
    }
    class GH {
      constructor(HH, BH) {
        if (this.rootPath = HH, this.getTarget = BH, "string" !== typeof HH) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof BH) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  40872: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    const AH = "Mediabunny v1.61.3"
  },
  40881: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(40820);
    class rH {
      constructor(HH, BH) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, HH._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = HH, HH._setMonotonicity(BH), HH._writerAcquired = !0
      }
      start() {
        (0, AH.J)(!this.started), this.target._start(), this.started = !0
      }
      write(HH) {
        (0, AH.J)(this.started && !this.finalized), this.maybeTrackWrites(HH), this.target._write(HH, this.pos), this.pos += HH.byteLength
      }
      seek(HH) {
        this.pos = HH
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, AH.J)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, AH.J)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(HH) {
        if (!this.trackedWrites) return;
        let BH = this.getPos();
        if (BH < this.trackedStart) {
          if (BH + HH.byteLength <= this.trackedStart) return;
          HH = HH.subarray(this.trackedStart - BH), BH = 0
        }
        const LH = BH + HH.byteLength - this.trackedStart;
        let AH = this.trackedWrites.byteLength;
        for (; AH < LH;) AH *= 2;
        if (AH !== this.trackedWrites.byteLength) {
          const HH = new Uint8Array(AH);
          HH.set(this.trackedWrites, 0), this.trackedWrites = HH
        }
        this.trackedWrites.set(HH, BH - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, BH + HH.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const HH = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, HH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);