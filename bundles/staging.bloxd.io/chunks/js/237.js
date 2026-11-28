/*! For license information please see welxxc.237.f5b4587c.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237];
export const modules = {
  41138: (bb, wb, Mb) => {
    function eb() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function Hb(bb) {
      return bb instanceof Uint8Array && (!eb() || !Buffer.isBuffer(bb))
    }

    function pb(bb) {
      return bb instanceof ArrayBuffer
    }

    function Vb(bb) {
      return !!eb() && Buffer.isBuffer(bb)
    }
    var gb = Mb(41147).b,
      lb = Mb(41149).d,
      Lb = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    wb.d = function(bb) {
      if (!Hb(bb) && !pb(bb) && !Vb(bb)) throw new TypeError(Lb);
      var wb = !1,
        Mb = !1;
      Hb(bb) ? wb = !0 : pb(bb) && (Mb = !0, bb = new Uint8Array(bb));
      var eb, gb, Ib, Ob = new lb(bb),
        Ub = Ob.maxCompressedLength();
      if (wb ? (eb = new Uint8Array(Ub), Ib = Ob.compressToBuffer(eb)) : Mb ? (eb = new ArrayBuffer(Ub), gb = new Uint8Array(eb), Ib = Ob.compressToBuffer(gb)) : (eb = Buffer.alloc(Ub), Ib = Ob.compressToBuffer(eb)), !eb.slice) {
        var tb = new Uint8Array(Array.prototype.slice.call(eb, 0, Ib));
        if (wb) return tb;
        if (Mb) return tb.buffer;
        throw new Error("Not implemented")
      }
      return eb.slice(0, Ib)
    }
  },
  41149: (bb, wb) => {
    var Mb = new Array(15);

    function eb(bb, wb) {
      return 506832829 * bb >>> wb
    }

    function Hb(bb, wb) {
      return bb[wb] + (bb[wb + 1] << 8) + (bb[wb + 2] << 16) + (bb[wb + 3] << 24)
    }

    function pb(bb, wb, Mb) {
      return bb[wb] === bb[Mb] && bb[wb + 1] === bb[Mb + 1] && bb[wb + 2] === bb[Mb + 2] && bb[wb + 3] === bb[Mb + 3]
    }

    function Vb(bb, wb, Mb, eb, Hb) {
      return Mb <= 60 ? (eb[Hb] = Mb - 1 << 2, Hb += 1) : Mb < 256 ? (eb[Hb] = 240, eb[Hb + 1] = Mb - 1, Hb += 2) : (eb[Hb] = 244, eb[Hb + 1] = Mb - 1 & 255, eb[Hb + 2] = Mb - 1 >>> 8, Hb += 3),
        function(bb, wb, Mb, eb, Hb) {
          var pb;
          for (pb = 0; pb < Hb; pb++) Mb[eb + pb] = bb[wb + pb]
        }(bb, wb, eb, Hb, Mb), Hb + Mb
    }

    function gb(bb, wb, Mb, eb) {
      return eb < 12 && Mb < 2048 ? (bb[wb] = 1 + (eb - 4 << 2) + (Mb >>> 8 << 5), bb[wb + 1] = 255 & Mb, wb + 2) : (bb[wb] = 2 + (eb - 1 << 2), bb[wb + 1] = 255 & Mb, bb[wb + 2] = Mb >>> 8, wb + 3)
    }

    function lb(bb, wb, Mb, eb) {
      for (; eb >= 68;) wb = gb(bb, wb, Mb, 64), eb -= 64;
      return eb > 64 && (wb = gb(bb, wb, Mb, 60), eb -= 60), gb(bb, wb, Mb, eb)
    }

    function Lb(bb, wb, gb, Lb, Ib) {
      for (var Ob = 1; 1 << Ob <= gb && Ob <= 14;) Ob += 1;
      var Ub = 32 - (Ob -= 1);
      "undefined" === typeof Mb[Ob] && (Mb[Ob] = new Uint16Array(1 << Ob));
      var tb, Cb = Mb[Ob];
      for (tb = 0; tb < Cb.length; tb++) Cb[tb] = 0;
      var Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb = wb + gb,
        rb = wb,
        Rb = wb,
        Db = !0;
      if (gb >= 15)
        for (Eb = Kb - 15, Bb = eb(Hb(bb, wb += 1), Ub); Db;) {
          hb = 32, sb = wb;
          do {
            if (Fb = Bb, zb = hb >>> 5, hb += 1, sb = (wb = sb) + zb, wb > Eb) {
              Db = !1;
              break
            }
            Bb = eb(Hb(bb, sb), Ub), mb = rb + Cb[Fb], Cb[Fb] = wb - rb
          } while (!pb(bb, wb, mb));
          if (!Db) break;
          Ib = Vb(bb, Rb, wb - Rb, Lb, Ib);
          do {
            for (Xb = wb, xb = 4; wb + xb < Kb && bb[wb + xb] === bb[mb + xb];) xb += 1;
            if (wb += xb, Ib = lb(Lb, Ib, Xb - mb, xb), Rb = wb, wb >= Eb) {
              Db = !1;
              break
            }
            Cb[eb(Hb(bb, wb - 1), Ub)] = wb - 1 - rb, mb = rb + Cb[jb = eb(Hb(bb, wb), Ub)], Cb[jb] = wb - rb
          } while (pb(bb, wb, mb));
          if (!Db) break;
          Bb = eb(Hb(bb, wb += 1), Ub)
        }
      return Rb < Kb && (Ib = Vb(bb, Rb, Kb - Rb, Lb, Ib)), Ib
    }

    function Ib(bb) {
      this.array = bb
    }
    Ib.prototype.maxCompressedLength = function() {
      var bb = this.array.length;
      return 32 + bb + Math.floor(bb / 6)
    }, Ib.prototype.compressToBuffer = function(bb) {
      var wb, Mb = this.array,
        eb = Mb.length,
        Hb = 0,
        pb = 0;
      for (pb = function(bb, wb, Mb) {
          do {
            wb[Mb] = 127 & bb, (bb >>>= 7) > 0 && (wb[Mb] += 128), Mb += 1
          } while (bb > 0);
          return Mb
        }(eb, bb, pb); Hb < eb;) pb = Lb(Mb, Hb, wb = Math.min(eb - Hb, 65536), bb, pb), Hb += wb;
      return pb
    }, wb.d = Ib
  },
  41147: (bb, wb) => {
    var Mb = [0, 255, 65535, 16777215, 4294967295];

    function eb(bb, wb, Mb, eb, Hb) {
      var pb;
      for (pb = 0; pb < Hb; pb++) Mb[eb + pb] = bb[wb + pb]
    }

    function Hb(bb, wb, Mb, eb) {
      var Hb;
      for (Hb = 0; Hb < eb; Hb++) bb[wb + Hb] = bb[wb - Mb + Hb]
    }

    function pb(bb) {
      this.array = bb, this.pos = 0
    }
    pb.prototype.readUncompressedLength = function() {
      for (var bb, wb, Mb = 0, eb = 0; eb < 32 && this.pos < this.array.length;) {
        if (bb = this.array[this.pos], this.pos += 1, (wb = 127 & bb) << eb >>> eb !== wb) return -1;
        if (Mb |= wb << eb, bb < 128) return Mb;
        eb += 7
      }
      return -1
    }, pb.prototype.uncompressToBuffer = function(bb) {
      for (var wb, pb, Vb, gb, lb = this.array, Lb = lb.length, Ib = this.pos, Ob = 0; Ib < lb.length;)
        if (wb = lb[Ib], Ib += 1, 0 === (3 & wb)) {
          if ((pb = 1 + (wb >>> 2)) > 60) {
            if (Ib + 3 >= Lb) return !1;
            Vb = pb - 60, pb = 1 + ((pb = lb[Ib] + (lb[Ib + 1] << 8) + (lb[Ib + 2] << 16) + (lb[Ib + 3] << 24)) & Mb[Vb]), Ib += Vb
          }
          if (Ib + pb > Lb) return !1;
          eb(lb, Ib, bb, Ob, pb), Ib += pb, Ob += pb
        } else {
          switch (3 & wb) {
            case 1:
              pb = 4 + (wb >>> 2 & 7), gb = lb[Ib] + (wb >>> 5 << 8), Ib += 1;
              break;
            case 2:
              if (Ib + 1 >= Lb) return !1;
              pb = 1 + (wb >>> 2), gb = lb[Ib] + (lb[Ib + 1] << 8), Ib += 2;
              break;
            case 3:
              if (Ib + 3 >= Lb) return !1;
              pb = 1 + (wb >>> 2), gb = lb[Ib] + (lb[Ib + 1] << 8) + (lb[Ib + 2] << 16) + (lb[Ib + 3] << 24), Ib += 4
          }
          if (0 === gb || gb > Ob) return !1;
          Hb(bb, Ob, gb, pb), Ob += pb
        } return !0
    }, wb.b = pb
  },
  37394: bb => {
    bb.exports = function(bb, wb, Mb, eb) {
      var Hb = self || window;
      try {
        try {
          var pb;
          try {
            pb = new Hb.Blob([bb])
          } catch (Lb) {
            (pb = new(Hb.BlobBuilder || Hb.WebKitBlobBuilder || Hb.MozBlobBuilder || Hb.MSBlobBuilder)).append(bb), pb = pb.getBlob()
          }
          var Vb = Hb.URL || Hb.webkitURL,
            gb = Vb.createObjectURL(pb),
            lb = new Hb[wb](gb, Mb);
          return Vb.revokeObjectURL(gb), lb
        } catch (Lb) {
          return new Hb[wb]("data:application/javascript,".concat(encodeURIComponent(bb)), Mb)
        }
      } catch (Lb) {
        if (!eb) throw Error("Inline worker is not supported");
        return new Hb[wb](eb, Mb)
      }
    }
  },
  41264: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      g: () => Hb,
      h: () => Lb,
      l: () => tb,
      o: () => Vb,
      s: () => Cb
    });
    var eb = Mb(41273);
    const Hb = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      pb = [-1, 1, 2, 3, 4, 5, 6, 8],
      Vb = bb => {
        if (!bb || bb.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const wb = new eb.e(bb),
          Mb = gb(wb),
          {
            frequencyIndex: Hb,
            sampleRate: Vb
          } = lb(wb),
          Lb = wb.readBits(4);
        let Ib = null;
        Lb >= 1 && Lb <= 7 && (Ib = pb[Lb]);
        let Ob = Mb,
          Ub = !1,
          tb = Vb;
        if (5 === Mb || 29 === Mb) Ub = 29 === Mb, tb = lb(wb).sampleRate, Ob = gb(wb), 22 === Ob && wb.skipBits(4);
        else
          for (; wb.getBitsLeft() > 15;) {
            const bb = wb.pos;
            if (695 === wb.readBits(11)) {
              5 === gb(wb) && wb.readBits(1) && (tb = lb(wb).sampleRate, wb.getBitsLeft() > 11 && 1352 === wb.readBits(11) && (Ub = !!wb.readBits(1)));
              break
            }
            wb.pos = bb + 1
          }
        return null !== Ib && Ib > 1 && (Ub = !1), {
          objectType: Mb,
          coreObjectType: Ob,
          frequencyIndex: Hb,
          channelConfiguration: Lb,
          outputSampleRate: tb,
          outputNumberOfChannels: Ub && 1 === Ib ? 2 : Ib
        }
      },
      gb = bb => {
        const wb = bb.readBits(5);
        return 31 === wb ? 32 + bb.readBits(6) : wb
      },
      lb = bb => {
        const wb = bb.readBits(4);
        return 15 === wb ? {
          frequencyIndex: wb,
          sampleRate: bb.readBits(24)
        } : {
          frequencyIndex: wb,
          sampleRate: wb < Hb.length ? Hb[wb] : null
        }
      },
      Lb = bb => {
        const wb = 5 === bb.objectType || 29 === bb.objectType,
          Mb = 29 === bb.objectType,
          Hb = wb ? bb.outputSampleRate / 2 : bb.outputSampleRate,
          Vb = Mb ? 1 : bb.outputNumberOfChannels,
          gb = pb.indexOf(Vb);
        if (-1 === gb) throw new TypeError(`Unsupported number of channels: ${bb.outputNumberOfChannels}`);
        let lb = 16;
        bb.objectType >= 32 && (lb += 6), 15 === Ub(Hb) && (lb += 24), wb && (lb += 9, 15 === Ub(bb.outputSampleRate) && (lb += 24));
        const Lb = Math.ceil(lb / 8),
          tb = new Uint8Array(Lb),
          Cb = new eb.e(tb);
        return Ib(Cb, bb.objectType), Ob(Cb, Hb), Cb.writeBits(4, gb), wb && (Ob(Cb, bb.outputSampleRate), Ib(Cb, 2)), Cb.writeBits(3, 0), tb
      },
      Ib = (bb, wb) => {
        wb < 32 ? bb.writeBits(5, wb) : (bb.writeBits(5, 31), bb.writeBits(6, wb - 32))
      },
      Ob = (bb, wb) => {
        const Mb = Ub(wb);
        bb.writeBits(4, Mb), 15 === Mb && bb.writeBits(24, wb)
      },
      Ub = bb => {
        const wb = Hb.indexOf(bb);
        return -1 === wb ? 15 : wb
      },
      tb = bb => {
        const wb = new Uint8Array(7),
          Mb = new eb.e(wb),
          {
            coreObjectType: Hb,
            frequencyIndex: pb,
            channelConfiguration: Vb
          } = bb,
          gb = Hb - 1;
        return Mb.writeBits(12, 4095), Mb.writeBits(1, 0), Mb.writeBits(2, 0), Mb.writeBits(1, 1), Mb.writeBits(2, gb), Mb.writeBits(4, pb), Mb.writeBits(1, 0), Mb.writeBits(3, Vb), Mb.writeBits(1, 0), Mb.writeBits(1, 0), Mb.writeBits(1, 0), Mb.writeBits(1, 0), Mb.skipBits(13), Mb.writeBits(11, 2047), Mb.writeBits(2, 0), {
          header: wb,
          bitstream: Mb
        }
      },
      Cb = (bb, wb) => {
        bb.pos = 30, bb.writeBits(13, wb)
      }
  },
  41273: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      constructor(bb) {
        this.bytes = bb, this.pos = 0
      }
      seekToByte(bb) {
        this.pos = 8 * bb
      }
      readBit() {
        const bb = Math.floor(this.pos / 8),
          wb = this.bytes[bb] ?? 0,
          Mb = 7 - (7 & this.pos),
          eb = (wb & 1 << Mb) >> Mb;
        return this.pos++, eb
      }
      readBits(bb) {
        if (1 === bb) return this.readBit();
        let wb = 0;
        for (let Mb = 0; Mb < bb; Mb++) wb <<= 1, wb |= this.readBit();
        return wb
      }
      writeBits(bb, wb) {
        const Mb = this.pos + bb;
        for (let eb = this.pos; eb < Mb; eb++) {
          const bb = Math.floor(eb / 8);
          let Hb = this.bytes[bb];
          const pb = 7 - (7 & eb);
          Hb &= ~(1 << pb), Hb |= (wb & 1 << Mb - eb - 1) >> Mb - eb - 1 << pb, this.bytes[bb] = Hb
        }
        this.pos = Mb
      }
      copyBits(bb, wb) {
        let Mb = 0;
        for (; Mb < bb - 7; Mb += 8) this.writeBits(8, wb.readBits(8));
        const eb = bb - Mb;
        eb > 0 && this.writeBits(eb, wb.readBits(eb))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const bb = this.pos / 8,
          wb = this.bytes[bb] ?? 0;
        return this.pos += 8, wb
      }
      skipBits(bb) {
        this.pos += bb
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const bb = new eb(this.bytes);
        return bb.pos = this.pos, bb
      }
    }
  },
  41284: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => kb,
      h: () => lb,
      j: () => bw,
      m: () => yb,
      n: () => Lb,
      p: () => ab,
      s: () => Cw,
      w: () => Bb,
      x: () => sb,
      A: () => ob,
      D: () => zb,
      H: () => Sb,
      I: () => nb,
      Q: () => qb,
      M: () => mb,
      S: () => Rb,
      V: () => Cb,
      W: () => rb,
      _: () => Qb,
      bb: () => Ub,
      eb: () => tb,
      gb: () => Tb,
      jb: () => Ow,
      nb: () => Mw,
      pb: () => Pb,
      sb: () => ib,
      tb: () => db,
      xb: () => hb,
      yb: () => Jb
    });
    var eb = Mb(41281),
      Hb = Mb(41244),
      pb = Mb(41287);
    const Vb = [48e3, 44100, 32e3],
      gb = [24e3, 22050, 16e3];
    var lb, Lb, Ib = Mb(41273),
      Ob = Mb(41296);
    ! function(bb) {
      bb[bb.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", bb[bb.SLICE_DPA = 2] = "SLICE_DPA", bb[bb.SLICE_DPB = 3] = "SLICE_DPB", bb[bb.SLICE_DPC = 4] = "SLICE_DPC", bb[bb.IDR = 5] = "IDR", bb[bb.SEI = 6] = "SEI", bb[bb.SPS = 7] = "SPS", bb[bb.PPS = 8] = "PPS", bb[bb.AUD = 9] = "AUD", bb[bb.SPS_EXT = 13] = "SPS_EXT"
    }(lb || (lb = {})),
    function(bb) {
      bb[bb.RASL_N = 8] = "RASL_N", bb[bb.RASL_R = 9] = "RASL_R", bb[bb.BLA_W_LP = 16] = "BLA_W_LP", bb[bb.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", bb[bb.VPS_NUT = 32] = "VPS_NUT", bb[bb.SPS_NUT = 33] = "SPS_NUT", bb[bb.PPS_NUT = 34] = "PPS_NUT", bb[bb.AUD_NUT = 35] = "AUD_NUT", bb[bb.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", bb[bb.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(Lb || (Lb = {}));
    const Ub = function*(bb) {
        let wb = 0,
          Mb = -1;
        for (; wb < bb.length - 2;) {
          const eb = bb.indexOf(0, wb);
          if (-1 === eb || eb >= bb.length - 2) break;
          wb = eb;
          let Hb = 0;
          wb + 3 < bb.length && 0 === bb[wb + 1] && 0 === bb[wb + 2] && 1 === bb[wb + 3] ? Hb = 4 : 0 === bb[wb + 1] && 1 === bb[wb + 2] && (Hb = 3), 0 !== Hb ? (-1 !== Mb && wb > Mb && (yield {
            offset: Mb,
            length: wb - Mb
          }), Mb = wb + Hb, wb = Mb) : wb++
        } - 1 !== Mb && Mb < bb.length && (yield {
          offset: Mb,
          length: bb.length - Mb
        })
      },
      tb = function*(bb, wb) {
        let Mb = 0;
        const eb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
        for (; Mb + wb <= bb.length;) {
          let bb;
          1 === wb ? bb = eb.getUint8(Mb) : 2 === wb ? bb = eb.getUint16(Mb, !1) : 3 === wb ? bb = (0, Hb.pb)(eb, Mb, !1) : ((0, Hb.L)(4 === wb), bb = eb.getUint32(Mb, !1)), Mb += wb, yield {
            offset: Mb,
            length: bb
          }, Mb += bb
        }
      },
      Cb = bb => 31 & bb,
      Eb = bb => {
        const wb = [],
          Mb = bb.length;
        for (let eb = 0; eb < Mb; eb++) eb + 2 < Mb && 0 === bb[eb] && 0 === bb[eb + 1] && 3 === bb[eb + 2] ? (wb.push(0, 0), eb += 2) : wb.push(bb[eb]);
        return new Uint8Array(wb)
      },
      Fb = new Uint8Array([0, 0, 0, 1]),
      Bb = bb => {
        const wb = bb.reduce(((bb, wb) => bb + Fb.byteLength + wb.byteLength), 0),
          Mb = new Uint8Array(wb);
        let eb = 0;
        for (const Hb of bb) Mb.set(Fb, eb), eb += Fb.byteLength, Mb.set(Hb, eb), eb += Hb.byteLength;
        return Mb
      },
      sb = (bb, wb) => {
        const Mb = bb.reduce(((bb, Mb) => bb + wb + Mb.byteLength), 0),
          eb = new Uint8Array(Mb);
        let pb = 0;
        for (const Vb of bb) {
          const bb = new DataView(eb.buffer, eb.byteOffset, eb.byteLength);
          switch (wb) {
            case 1:
              bb.setUint8(pb, Vb.byteLength);
              break;
            case 2:
              bb.setUint16(pb, Vb.byteLength, !1);
              break;
            case 3:
              (0, Hb.dd)(bb, pb, Vb.byteLength, !1);
              break;
            case 4:
              bb.setUint32(pb, Vb.byteLength, !1)
          }
          pb += wb, eb.set(Vb, pb), pb += Vb.byteLength
        }
        return eb
      },
      mb = bb => {
        try {
          const wb = [],
            Mb = [],
            eb = [];
          for (const Hb of Ub(bb)) {
            const pb = bb.subarray(Hb.offset, Hb.offset + Hb.length),
              Vb = Cb(pb[0]);
            Vb === lb.SPS ? wb.push(pb) : Vb === lb.PPS ? Mb.push(pb) : Vb === lb.SPS_EXT && eb.push(pb)
          }
          if (0 === wb.length) return null;
          if (0 === Mb.length) return null;
          const pb = wb[0],
            Vb = xb(pb);
          (0, Hb.L)(null !== Vb);
          const gb = 100 === Vb.profileIdc || 110 === Vb.profileIdc || 122 === Vb.profileIdc || 144 === Vb.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: Vb.profileIdc,
            profileCompatibility: Vb.constraintFlags,
            avcLevelIndication: Vb.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: wb,
            pictureParameterSets: Mb,
            chromaFormat: gb ? Vb.chromaFormatIdc : null,
            bitDepthLumaMinus8: gb ? Vb.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: gb ? Vb.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: gb ? eb : null
          }
        } catch (wb) {
          return pb.e._error("Error building AVC Decoder Configuration Record:", wb), null
        }
      },
      hb = bb => {
        const wb = [];
        wb.push(bb.configurationVersion), wb.push(bb.avcProfileIndication), wb.push(bb.profileCompatibility), wb.push(bb.avcLevelIndication), wb.push(252 | 3 & bb.lengthSizeMinusOne), wb.push(224 | 31 & bb.sequenceParameterSets.length);
        for (const Mb of bb.sequenceParameterSets) {
          const bb = Mb.byteLength;
          wb.push(bb >> 8), wb.push(255 & bb);
          for (let eb = 0; eb < bb; eb++) wb.push(Mb[eb])
        }
        wb.push(bb.pictureParameterSets.length);
        for (const Mb of bb.pictureParameterSets) {
          const bb = Mb.byteLength;
          wb.push(bb >> 8), wb.push(255 & bb);
          for (let eb = 0; eb < bb; eb++) wb.push(Mb[eb])
        }
        if ((100 === bb.avcProfileIndication || 110 === bb.avcProfileIndication || 122 === bb.avcProfileIndication || 144 === bb.avcProfileIndication) && null !== bb.chromaFormat) {
          (0, Hb.L)(null !== bb.bitDepthLumaMinus8), (0, Hb.L)(null !== bb.bitDepthChromaMinus8), (0, Hb.L)(null !== bb.sequenceParameterSetExt), wb.push(252 | 3 & bb.chromaFormat), wb.push(248 | 7 & bb.bitDepthLumaMinus8), wb.push(248 | 7 & bb.bitDepthChromaMinus8), wb.push(bb.sequenceParameterSetExt.length);
          for (const Mb of bb.sequenceParameterSetExt) {
            const bb = Mb.byteLength;
            wb.push(bb >> 8), wb.push(255 & bb);
            for (let eb = 0; eb < bb; eb++) wb.push(Mb[eb])
          }
        }
        return new Uint8Array(wb)
      },
      zb = bb => {
        try {
          const wb = (0, Hb.kd)(bb);
          let Mb = 0;
          const eb = wb.getUint8(Mb++),
            pb = wb.getUint8(Mb++),
            Vb = wb.getUint8(Mb++),
            gb = wb.getUint8(Mb++),
            lb = 3 & wb.getUint8(Mb++),
            Lb = 31 & wb.getUint8(Mb++),
            Ib = [];
          for (let Hb = 0; Hb < Lb; Hb++) {
            const eb = wb.getUint16(Mb, !1);
            Mb += 2, Ib.push(bb.subarray(Mb, Mb + eb)), Mb += eb
          }
          const Ob = wb.getUint8(Mb++),
            Ub = [];
          for (let Hb = 0; Hb < Ob; Hb++) {
            const eb = wb.getUint16(Mb, !1);
            Mb += 2, Ub.push(bb.subarray(Mb, Mb + eb)), Mb += eb
          }
          const tb = {
            configurationVersion: eb,
            avcProfileIndication: pb,
            profileCompatibility: Vb,
            avcLevelIndication: gb,
            lengthSizeMinusOne: lb,
            sequenceParameterSets: Ib,
            pictureParameterSets: Ub,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === pb || 110 === pb || 122 === pb || 144 === pb) && Mb + 4 <= bb.length) {
            const eb = 3 & wb.getUint8(Mb++),
              Hb = 7 & wb.getUint8(Mb++),
              pb = 7 & wb.getUint8(Mb++),
              Vb = wb.getUint8(Mb++);
            tb.chromaFormat = eb, tb.bitDepthLumaMinus8 = Hb, tb.bitDepthChromaMinus8 = pb;
            const gb = [];
            for (let lb = 0; lb < Vb; lb++) {
              const eb = wb.getUint16(Mb, !1);
              Mb += 2, gb.push(bb.subarray(Mb, Mb + eb)), Mb += eb
            }
            tb.sequenceParameterSetExt = gb
          }
          return tb
        } catch (wb) {
          return pb.e._error("Error deserializing AVC Decoder Configuration Record:", wb), null
        }
      },
      Xb = {
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
      xb = bb => {
        try {
          const wb = Eb(bb),
            Mb = new Ib.e(wb);
          Mb.skipBits(1), Mb.skipBits(2);
          if (7 !== Mb.readBits(5)) return null;
          const pb = Mb.readAlignedByte(),
            Vb = Mb.readAlignedByte(),
            gb = Mb.readAlignedByte();
          (0, Hb.yc)(Mb);
          let lb = 1,
            Lb = 0,
            Ob = 0,
            Ub = 0;
          if (100 === pb || 110 === pb || 122 === pb || 244 === pb || 44 === pb || 83 === pb || 86 === pb || 118 === pb || 128 === pb) {
            lb = (0, Hb.yc)(Mb), 3 === lb && (Ub = Mb.readBits(1)), Lb = (0, Hb.yc)(Mb), Ob = (0, Hb.yc)(Mb), Mb.skipBits(1);
            if (Mb.readBits(1))
              for (let bb = 0; bb < (3 !== lb ? 8 : 12); bb++) {
                if (Mb.readBits(1)) {
                  const wb = bb < 6 ? 16 : 64;
                  let eb = 8,
                    pb = 8;
                  for (let bb = 0; bb < wb; bb++) {
                    if (0 !== pb) {
                      pb = (eb + (0, Hb.Cc)(Mb) + 256) % 256
                    }
                    eb = 0 === pb ? eb : pb
                  }
                }
              }
          }(0, Hb.yc)(Mb);
          const tb = (0, Hb.yc)(Mb);
          if (0 === tb)(0, Hb.yc)(Mb);
          else if (1 === tb) {
            Mb.skipBits(1), (0, Hb.Cc)(Mb), (0, Hb.Cc)(Mb);
            const bb = (0, Hb.yc)(Mb);
            for (let wb = 0; wb < bb; wb++)(0, Hb.Cc)(Mb)
          }(0, Hb.yc)(Mb), Mb.skipBits(1);
          const Cb = (0, Hb.yc)(Mb),
            Fb = (0, Hb.yc)(Mb),
            Bb = 16 * (Cb + 1),
            sb = 16 * (Fb + 1);
          let mb = Bb,
            hb = sb;
          const zb = Mb.readBits(1);
          zb || Mb.skipBits(1), Mb.skipBits(1);
          if (Mb.readBits(1)) {
            const bb = (0, Hb.yc)(Mb),
              wb = (0, Hb.yc)(Mb),
              eb = (0, Hb.yc)(Mb),
              pb = (0, Hb.yc)(Mb);
            let Vb, gb;
            if (0 === (0 === Ub ? lb : 0)) Vb = 1, gb = 2 - zb;
            else {
              Vb = 3 === lb ? 1 : 2, gb = (1 === lb ? 2 : 1) * (2 - zb)
            }
            mb -= Vb * (bb + wb), hb -= gb * (eb + pb)
          }
          let xb = 2,
            Kb = 2,
            rb = 2,
            Rb = 0,
            Db = {
              num: 1,
              den: 1
            },
            cb = null,
            Yb = null,
            Zb = null,
            fb = null;
          const Ab = Mb.pos;
          if (Mb.readBits(1)) {
            if (Mb.readBits(1)) {
              const bb = Mb.readBits(8);
              if (255 === bb) Db = {
                num: Mb.readBits(16),
                den: Mb.readBits(16)
              };
              else {
                const wb = Xb[bb];
                wb && (Db = wb)
              }
            }
            Mb.readBits(1) && Mb.skipBits(1);
            if (Mb.readBits(1)) {
              Mb.skipBits(3), Rb = Mb.readBits(1);
              Mb.readBits(1) && (xb = Mb.readBits(8), Kb = Mb.readBits(8), rb = Mb.readBits(8))
            }
            Mb.readBits(1) && ((0, Hb.yc)(Mb), (0, Hb.yc)(Mb));
            Mb.readBits(1) && (Mb.skipBits(32), Mb.skipBits(32), Mb.skipBits(1));
            const bb = Mb.readBits(1);
            bb && jb(Mb);
            const wb = Mb.readBits(1);
            wb && jb(Mb), (bb || wb) && Mb.skipBits(1), Mb.skipBits(1), Zb = Mb.pos, fb = Mb.readBits(1), fb && (Mb.skipBits(1), (0, Hb.yc)(Mb), (0, Hb.yc)(Mb), (0, Hb.yc)(Mb), (0, Hb.yc)(Mb), cb = (0, Hb.yc)(Mb), Yb = (0, Hb.yc)(Mb))
          }
          if (null === cb) {
            (0, Hb.L)(null === Yb);
            if (44 !== pb && 86 !== pb && 100 !== pb && 110 !== pb && 122 !== pb && 244 !== pb || !(16 & Vb)) {
              const bb = Cb + 1,
                wb = (2 - zb) * (Fb + 1),
                Mb = eb.e.find((bb => bb.level >= gb)) ?? (0, Hb.ac)(eb.e),
                pb = Math.min(Math.floor(Mb.maxDpbMbs / (bb * wb)), 16);
              cb = pb, Yb = pb
            } else cb = 0, Yb = 0
          }
          return (0, Hb.L)(null !== Yb), {
            emulationUnpreventedBytes: wb,
            profileIdc: pb,
            constraintFlags: Vb,
            levelIdc: gb,
            frameMbsOnlyFlag: zb,
            chromaFormatIdc: lb,
            bitDepthLumaMinus8: Lb,
            bitDepthChromaMinus8: Ob,
            codedWidth: Bb,
            codedHeight: sb,
            displayWidth: mb,
            displayHeight: hb,
            pixelAspectRatio: Db,
            colourPrimaries: xb,
            matrixCoefficients: rb,
            transferCharacteristics: Kb,
            fullRangeFlag: Rb,
            numReorderFrames: cb,
            maxDecFrameBuffering: Yb,
            vuiParametersFlagBitOffset: Ab,
            bitstreamRestrictionFlagBitOffset: Zb,
            bitstreamRestrictionFlag: fb
          }
        } catch (wb) {
          return pb.e._error("Error parsing AVC SPS:", wb), null
        }
      },
      jb = bb => {
        const wb = (0, Hb.yc)(bb);
        bb.skipBits(4), bb.skipBits(4);
        for (let Mb = 0; Mb <= wb; Mb++)(0, Hb.yc)(bb), (0, Hb.yc)(bb), bb.skipBits(1);
        bb.skipBits(5), bb.skipBits(5), bb.skipBits(5), bb.skipBits(5)
      },
      Kb = (bb, wb) => {
        if (wb.description) {
          const Mb = 3 & (0, Hb.od)(wb.description)[21];
          return tb(bb, Mb + 1)
        }
        return Ub(bb)
      },
      rb = bb => bb >> 1 & 63,
      Rb = bb => {
        try {
          const wb = [],
            Mb = [],
            eb = [],
            Vb = [];
          for (const Hb of Ub(bb)) {
            const pb = bb.subarray(Hb.offset, Hb.offset + Hb.length),
              gb = rb(pb[0]);
            gb === Lb.VPS_NUT ? wb.push(pb) : gb === Lb.SPS_NUT ? Mb.push(pb) : gb === Lb.PPS_NUT ? eb.push(pb) : gb !== Lb.PREFIX_SEI_NUT && gb !== Lb.SUFFIX_SEI_NUT || Vb.push(pb)
          }
          if (0 === Mb.length || 0 === eb.length) return null;
          const gb = (bb => {
            try {
              const wb = new Ib.e(Eb(bb));
              wb.skipBits(16), wb.readBits(4);
              const Mb = wb.readBits(3),
                eb = wb.readBits(1),
                {
                  general_profile_space: pb,
                  general_tier_flag: Vb,
                  general_profile_idc: gb,
                  general_profile_compatibility_flags: lb,
                  general_constraint_indicator_flags: Lb,
                  general_level_idc: Ob
                } = Db(wb, Mb);
              (0, Hb.yc)(wb);
              const Ub = (0, Hb.yc)(wb);
              let tb = 0;
              3 === Ub && (tb = wb.readBits(1));
              const Cb = (0, Hb.yc)(wb),
                Fb = (0, Hb.yc)(wb);
              let Bb = Cb,
                sb = Fb;
              if (wb.readBits(1)) {
                const bb = (0, Hb.yc)(wb),
                  Mb = (0, Hb.yc)(wb),
                  eb = (0, Hb.yc)(wb),
                  pb = (0, Hb.yc)(wb);
                let Vb = 1,
                  gb = 1;
                const lb = 0 === tb ? Ub : 0;
                1 === lb ? (Vb = 2, gb = 2) : 2 === lb && (Vb = 2, gb = 1), Bb -= (bb + Mb) * Vb, sb -= (eb + pb) * gb
              }
              const mb = (0, Hb.yc)(wb),
                hb = (0, Hb.yc)(wb);
              (0, Hb.yc)(wb);
              const zb = wb.readBits(1);
              let Xb = 0;
              for (let bb = zb ? 0 : Mb; bb <= Mb; bb++)(0, Hb.yc)(wb), Xb = (0, Hb.yc)(wb), (0, Hb.yc)(wb);
              (0, Hb.yc)(wb), (0, Hb.yc)(wb), (0, Hb.yc)(wb), (0, Hb.yc)(wb), (0, Hb.yc)(wb), (0, Hb.yc)(wb), wb.readBits(1) && wb.readBits(1) && cb(wb), wb.skipBits(1), wb.skipBits(1), wb.readBits(1) && (wb.skipBits(4), wb.skipBits(4), (0, Hb.yc)(wb), (0, Hb.yc)(wb), wb.skipBits(1));
              const xb = (0, Hb.yc)(wb);
              if (Yb(wb, xb), wb.readBits(1)) {
                const bb = (0, Hb.yc)(wb);
                for (let Mb = 0; Mb < bb; Mb++)(0, Hb.yc)(wb), wb.skipBits(1)
              }
              wb.skipBits(1), wb.skipBits(1);
              let jb = 2,
                Kb = 2,
                rb = 2,
                Rb = 0,
                Zb = 0,
                Ab = {
                  num: 1,
                  den: 1
                };
              if (wb.readBits(1)) {
                const bb = fb(wb, Mb);
                Ab = bb.pixelAspectRatio, jb = bb.colourPrimaries, Kb = bb.transferCharacteristics, rb = bb.matrixCoefficients, Rb = bb.fullRangeFlag, Zb = bb.minSpatialSegmentationIdc
              }
              return {
                displayWidth: Bb,
                displayHeight: sb,
                pixelAspectRatio: Ab,
                colourPrimaries: jb,
                transferCharacteristics: Kb,
                matrixCoefficients: rb,
                fullRangeFlag: Rb,
                maxDecFrameBuffering: Xb + 1,
                spsMaxSubLayersMinus1: Mb,
                spsTemporalIdNestingFlag: eb,
                generalProfileSpace: pb,
                generalTierFlag: Vb,
                generalProfileIdc: gb,
                generalProfileCompatibilityFlags: lb,
                generalConstraintIndicatorFlags: Lb,
                generalLevelIdc: Ob,
                chromaFormatIdc: Ub,
                bitDepthLumaMinus8: mb,
                bitDepthChromaMinus8: hb,
                minSpatialSegmentationIdc: Zb
              }
            } catch (wb) {
              return pb.e._error("Error parsing HEVC SPS:", wb), null
            }
          })(Mb[0]);
          if (!gb) return null;
          let lb = 0;
          if (eb.length > 0) {
            const bb = eb[0],
              wb = new Ib.e(Eb(bb));
            wb.skipBits(16), (0, Hb.yc)(wb), (0, Hb.yc)(wb), wb.skipBits(1), wb.skipBits(1), wb.skipBits(3), wb.skipBits(1), wb.skipBits(1), (0, Hb.yc)(wb), (0, Hb.yc)(wb), (0, Hb.Cc)(wb), wb.skipBits(1), wb.skipBits(1), wb.readBits(1) && (0, Hb.yc)(wb), (0, Hb.Cc)(wb), (0, Hb.Cc)(wb), wb.skipBits(1), wb.skipBits(1), wb.skipBits(1), wb.skipBits(1);
            const Mb = wb.readBits(1),
              pb = wb.readBits(1);
            lb = Mb || pb ? Mb && !pb ? 2 : !Mb && pb ? 3 : 0 : 0
          }
          const Ob = [...wb.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Lb.VPS_NUT,
            nalUnits: wb
          }] : [], ...Mb.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Lb.SPS_NUT,
            nalUnits: Mb
          }] : [], ...eb.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Lb.PPS_NUT,
            nalUnits: eb
          }] : [], ...Vb.length ? [{
            arrayCompleteness: 1,
            nalUnitType: rb(Vb[0][0]),
            nalUnits: Vb
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: gb.generalProfileSpace,
            generalTierFlag: gb.generalTierFlag,
            generalProfileIdc: gb.generalProfileIdc,
            generalProfileCompatibilityFlags: gb.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: gb.generalConstraintIndicatorFlags,
            generalLevelIdc: gb.generalLevelIdc,
            minSpatialSegmentationIdc: gb.minSpatialSegmentationIdc,
            parallelismType: lb,
            chromaFormatIdc: gb.chromaFormatIdc,
            bitDepthLumaMinus8: gb.bitDepthLumaMinus8,
            bitDepthChromaMinus8: gb.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: gb.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: gb.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: Ob
          }
        } catch (wb) {
          return pb.e._error("Error building HEVC Decoder Configuration Record:", wb), null
        }
      },
      Db = (bb, wb) => {
        const Mb = bb.readBits(2),
          eb = bb.readBits(1),
          Hb = bb.readBits(5);
        let pb = 0;
        for (let Ib = 0; Ib < 32; Ib++) pb = pb << 1 | bb.readBits(1);
        const Vb = new Uint8Array(6);
        for (let Ib = 0; Ib < 6; Ib++) Vb[Ib] = bb.readBits(8);
        const gb = bb.readBits(8),
          lb = [],
          Lb = [];
        for (let Ib = 0; Ib < wb; Ib++) lb.push(bb.readBits(1)), Lb.push(bb.readBits(1));
        if (wb > 0)
          for (let Ib = wb; Ib < 8; Ib++) bb.skipBits(2);
        for (let Ib = 0; Ib < wb; Ib++) lb[Ib] && bb.skipBits(88), Lb[Ib] && bb.skipBits(8);
        return {
          general_profile_space: Mb,
          general_tier_flag: eb,
          general_profile_idc: Hb,
          general_profile_compatibility_flags: pb,
          general_constraint_indicator_flags: Vb,
          general_level_idc: gb
        }
      },
      cb = bb => {
        for (let wb = 0; wb < 4; wb++)
          for (let Mb = 0; Mb < (3 === wb ? 2 : 6); Mb++) {
            if (bb.readBits(1)) {
              const Mb = Math.min(64, 1 << 4 + (wb << 1));
              wb > 1 && (0, Hb.Cc)(bb);
              for (let wb = 0; wb < Mb; wb++)(0, Hb.Cc)(bb)
            } else(0, Hb.yc)(bb)
          }
      },
      Yb = (bb, wb) => {
        const Mb = [];
        for (let eb = 0; eb < wb; eb++) Mb[eb] = Zb(bb, eb, wb, Mb)
      },
      Zb = (bb, wb, Mb, eb) => {
        let pb = 0,
          Vb = 0,
          gb = 0;
        if (0 !== wb && (Vb = bb.readBits(1)), Vb) {
          if (wb === Mb) {
            gb = wb - ((0, Hb.yc)(bb) + 1)
          } else gb = wb - 1;
          bb.readBits(1), (0, Hb.yc)(bb);
          const Vb = eb[gb] ?? 0;
          for (let wb = 0; wb <= Vb; wb++) {
            bb.readBits(1) || bb.readBits(1)
          }
          pb = eb[gb]
        } else {
          const wb = (0, Hb.yc)(bb),
            Mb = (0, Hb.yc)(bb);
          for (let eb = 0; eb < wb; eb++)(0, Hb.yc)(bb), bb.readBits(1);
          for (let eb = 0; eb < Mb; eb++)(0, Hb.yc)(bb), bb.readBits(1);
          pb = wb + Mb
        }
        return pb
      },
      fb = (bb, wb) => {
        let Mb = 2,
          eb = 2,
          pb = 2,
          Vb = 0,
          gb = 0,
          lb = {
            num: 1,
            den: 1
          };
        if (bb.readBits(1)) {
          const wb = bb.readBits(8);
          if (255 === wb) lb = {
            num: bb.readBits(16),
            den: bb.readBits(16)
          };
          else {
            const bb = Xb[wb];
            bb && (lb = bb)
          }
        }
        return bb.readBits(1) && bb.readBits(1), bb.readBits(1) && (bb.readBits(3), Vb = bb.readBits(1), bb.readBits(1) && (Mb = bb.readBits(8), eb = bb.readBits(8), pb = bb.readBits(8))), bb.readBits(1) && ((0, Hb.yc)(bb), (0, Hb.yc)(bb)), bb.readBits(1), bb.readBits(1), bb.readBits(1), bb.readBits(1) && ((0, Hb.yc)(bb), (0, Hb.yc)(bb), (0, Hb.yc)(bb), (0, Hb.yc)(bb)), bb.readBits(1) && (bb.readBits(32), bb.readBits(32), bb.readBits(1) && (0, Hb.yc)(bb), bb.readBits(1) && Ab(bb, !0, wb)), bb.readBits(1) && (bb.readBits(1), bb.readBits(1), bb.readBits(1), gb = (0, Hb.yc)(bb), (0, Hb.yc)(bb), (0, Hb.yc)(bb), (0, Hb.yc)(bb), (0, Hb.yc)(bb)), {
          pixelAspectRatio: lb,
          colourPrimaries: Mb,
          transferCharacteristics: eb,
          matrixCoefficients: pb,
          fullRangeFlag: Vb,
          minSpatialSegmentationIdc: gb
        }
      },
      Ab = (bb, wb, Mb) => {
        let eb = !1,
          pb = !1,
          Vb = !1;
        wb && (eb = 1 === bb.readBits(1), pb = 1 === bb.readBits(1), (eb || pb) && (Vb = 1 === bb.readBits(1), Vb && (bb.readBits(8), bb.readBits(5), bb.readBits(1), bb.readBits(5)), bb.readBits(4), bb.readBits(4), Vb && bb.readBits(4), bb.readBits(5), bb.readBits(5), bb.readBits(5)));
        for (let gb = 0; gb <= Mb; gb++) {
          let wb = !0;
          1 === bb.readBits(1) || (wb = 1 === bb.readBits(1));
          let Mb = !1;
          wb ? (0, Hb.yc)(bb) : Mb = 1 === bb.readBits(1);
          let gb = 1;
          if (!Mb) {
            gb = (0, Hb.yc)(bb) + 1
          }
          eb && Wb(bb, gb, Vb), pb && Wb(bb, gb, Vb)
        }
      },
      Wb = (bb, wb, Mb) => {
        for (let eb = 0; eb < wb; eb++)(0, Hb.yc)(bb), (0, Hb.yc)(bb), Mb && ((0, Hb.yc)(bb), (0, Hb.yc)(bb)), bb.readBits(1)
      },
      Jb = bb => {
        const wb = [];
        wb.push(bb.configurationVersion), wb.push((3 & bb.generalProfileSpace) << 6 | (1 & bb.generalTierFlag) << 5 | 31 & bb.generalProfileIdc), wb.push(bb.generalProfileCompatibilityFlags >>> 24 & 255), wb.push(bb.generalProfileCompatibilityFlags >>> 16 & 255), wb.push(bb.generalProfileCompatibilityFlags >>> 8 & 255), wb.push(255 & bb.generalProfileCompatibilityFlags), wb.push(...bb.generalConstraintIndicatorFlags), wb.push(255 & bb.generalLevelIdc), wb.push(240 | bb.minSpatialSegmentationIdc >> 8 & 15), wb.push(255 & bb.minSpatialSegmentationIdc), wb.push(252 | 3 & bb.parallelismType), wb.push(252 | 3 & bb.chromaFormatIdc), wb.push(248 | 7 & bb.bitDepthLumaMinus8), wb.push(248 | 7 & bb.bitDepthChromaMinus8), wb.push(bb.avgFrameRate >> 8 & 255), wb.push(255 & bb.avgFrameRate), wb.push((3 & bb.constantFrameRate) << 6 | (7 & bb.numTemporalLayers) << 3 | (1 & bb.temporalIdNested) << 2 | 3 & bb.lengthSizeMinusOne), wb.push(255 & bb.arrays.length);
        for (const Mb of bb.arrays) {
          wb.push((1 & Mb.arrayCompleteness) << 7 | 63 & Mb.nalUnitType), wb.push(Mb.nalUnits.length >> 8 & 255), wb.push(255 & Mb.nalUnits.length);
          for (const bb of Mb.nalUnits) {
            wb.push(bb.length >> 8 & 255), wb.push(255 & bb.length);
            for (let Mb = 0; Mb < bb.length; Mb++) wb.push(bb[Mb])
          }
        }
        return new Uint8Array(wb)
      },
      Sb = bb => {
        try {
          const wb = (0, Hb.kd)(bb);
          let Mb = 0;
          const eb = wb.getUint8(Mb++),
            pb = wb.getUint8(Mb++),
            Vb = pb >> 6 & 3,
            gb = pb >> 5 & 1,
            lb = 31 & pb,
            Lb = wb.getUint32(Mb, !1);
          Mb += 4;
          const Ib = bb.subarray(Mb, Mb + 6);
          Mb += 6;
          const Ob = wb.getUint8(Mb++),
            Ub = (15 & wb.getUint8(Mb++)) << 8 | wb.getUint8(Mb++),
            tb = 3 & wb.getUint8(Mb++),
            Cb = 3 & wb.getUint8(Mb++),
            Eb = 7 & wb.getUint8(Mb++),
            Fb = 7 & wb.getUint8(Mb++),
            Bb = wb.getUint16(Mb, !1);
          Mb += 2;
          const sb = wb.getUint8(Mb++),
            mb = sb >> 6 & 3,
            hb = sb >> 3 & 7,
            zb = sb >> 2 & 1,
            Xb = 3 & sb,
            xb = wb.getUint8(Mb++),
            jb = [];
          for (let Hb = 0; Hb < xb; Hb++) {
            const eb = wb.getUint8(Mb++),
              Hb = eb >> 7 & 1,
              pb = 63 & eb,
              Vb = wb.getUint16(Mb, !1);
            Mb += 2;
            const gb = [];
            for (let lb = 0; lb < Vb; lb++) {
              const eb = wb.getUint16(Mb, !1);
              Mb += 2, gb.push(bb.subarray(Mb, Mb + eb)), Mb += eb
            }
            jb.push({
              arrayCompleteness: Hb,
              nalUnitType: pb,
              nalUnits: gb
            })
          }
          return {
            configurationVersion: eb,
            generalProfileSpace: Vb,
            generalTierFlag: gb,
            generalProfileIdc: lb,
            generalProfileCompatibilityFlags: Lb,
            generalConstraintIndicatorFlags: Ib,
            generalLevelIdc: Ob,
            minSpatialSegmentationIdc: Ub,
            parallelismType: tb,
            chromaFormatIdc: Cb,
            bitDepthLumaMinus8: Eb,
            bitDepthChromaMinus8: Fb,
            avgFrameRate: Bb,
            constantFrameRate: mb,
            numTemporalLayers: hb,
            temporalIdNested: zb,
            lengthSizeMinusOne: Xb,
            arrays: jb
          }
        } catch (wb) {
          return pb.e._error("Error deserializing HEVC Decoder Configuration Record:", wb), null
        }
      };
    var Nb;
    ! function(bb) {
      bb[bb.audAllowed = 0] = "audAllowed", bb[bb.beforeFirstVcl = 1] = "beforeFirstVcl", bb[bb.afterFirstVcl = 2] = "afterFirstVcl", bb[bb.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", bb[bb.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(Nb || (Nb = {}));
    const vb = {
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
      Qb = bb => {
        const wb = new Ib.e(bb);
        if (2 !== wb.readBits(2)) return null;
        const Mb = wb.readBits(1),
          pb = (wb.readBits(1) << 1) + Mb;
        3 === pb && wb.skipBits(1);
        if (1 === wb.readBits(1)) return null;
        if (0 !== wb.readBits(1)) return null;
        wb.skipBits(2);
        if (4817730 !== wb.readBits(24)) return null;
        let Vb = 8;
        if (pb >= 2) {
          Vb = wb.readBits(1) ? 12 : 10
        }
        const gb = wb.readBits(3);
        let lb = 0,
          Lb = 0;
        if (7 !== gb) {
          if (Lb = wb.readBits(1), 1 === pb || 3 === pb) {
            const bb = wb.readBits(1),
              Mb = wb.readBits(1);
            lb = bb || Mb ? bb && !Mb ? 2 : 1 : 3, wb.skipBits(1)
          } else lb = 1
        } else lb = 3, Lb = 1;
        const Ob = (wb.readBits(16) + 1) * (wb.readBits(16) + 1);
        let Ub = (0, Hb.ac)(eb.q).level;
        for (const Hb of eb.q)
          if (Ob <= Hb.maxPictureSize) {
            Ub = Hb.level;
            break
          } const tb = vb[gb];
        return {
          profile: pb,
          level: Ub,
          bitDepth: Vb,
          chromaSubsampling: lb,
          videoFullRangeFlag: Lb,
          colourPrimaries: tb?.colourPrimaries ?? 2,
          transferCharacteristics: tb?.transferCharacteristics ?? 2,
          matrixCoefficients: tb?.matrixCoefficients ?? 2
        }
      },
      Gb = function*(bb) {
        const wb = new Ib.e(bb),
          Mb = () => {
            let bb = 0;
            for (let Mb = 0; Mb < 8; Mb++) {
              const eb = wb.readAlignedByte();
              if (bb += (127 & eb) * 2 ** (7 * Mb), !(128 & eb)) break;
              if (7 === Mb && 128 & eb) return null
            }
            return bb > 2 ** 32 - 1 ? null : bb
          };
        for (; wb.getBitsLeft() >= 8;) {
          wb.skipBits(1);
          const eb = wb.readBits(4),
            pb = wb.readBits(1),
            Vb = wb.readBits(1);
          let gb;
          if (wb.skipBits(1), pb && wb.skipBits(8), Vb) {
            const bb = Mb();
            if (null === bb) return;
            gb = bb
          } else gb = Math.floor(wb.getBitsLeft() / 8);
          (0, Hb.L)(wb.pos % 8 === 0), yield {
            type: eb,
            data: bb.subarray(wb.pos / 8, wb.pos / 8 + gb)
          }, wb.skipBits(8 * gb)
        }
      },
      qb = bb => {
        for (const {
            type: wb,
            data: Mb
          }
          of Gb(bb)) {
          if (1 !== wb) continue;
          const bb = new Ib.e(Mb),
            eb = bb.readBits(3),
            Hb = (bb.readBits(1), bb.readBits(1));
          let pb = 0,
            Vb = 0,
            gb = 0;
          if (Hb) pb = bb.readBits(5);
          else {
            let wb = 0;
            if (bb.readBits(1)) {
              bb.skipBits(32), bb.skipBits(32);
              if (bb.readBits(1)) {
                let wb = 0;
                for (; wb < 32 && !bb.readBits(1);) wb++;
                wb < 32 && bb.skipBits(wb)
              }
              wb = bb.readBits(1), wb && (gb = bb.readBits(5), bb.skipBits(32), bb.skipBits(5), bb.skipBits(5))
            }
            const Mb = bb.readBits(1),
              eb = bb.readBits(5);
            for (let Hb = 0; Hb <= eb; Hb++) {
              bb.skipBits(12);
              const eb = bb.readBits(5);
              if (0 === Hb && (pb = eb), eb > 7) {
                const wb = bb.readBits(1);
                0 === Hb && (Vb = wb)
              }
              if (wb) {
                if (bb.readBits(1)) {
                  const wb = gb + 1;
                  bb.skipBits(wb), bb.skipBits(wb), bb.skipBits(1)
                }
              }
              if (Mb) {
                bb.readBits(1) && bb.skipBits(4)
              }
            }
          }
          const lb = bb.readBits(4),
            Lb = bb.readBits(4),
            Ob = lb + 1;
          bb.skipBits(Ob);
          const Ub = Lb + 1;
          bb.skipBits(Ub);
          let tb = 0;
          if (tb = Hb ? 0 : bb.readBits(1), tb && (bb.skipBits(4), bb.skipBits(3)), bb.skipBits(1), bb.skipBits(1), bb.skipBits(1), !Hb) {
            bb.skipBits(1), bb.skipBits(1), bb.skipBits(1), bb.skipBits(1);
            const wb = bb.readBits(1);
            wb && (bb.skipBits(1), bb.skipBits(1));
            let Mb = 0;
            if (Mb = bb.readBits(1) ? 2 : bb.readBits(1), Mb > 0) {
              bb.readBits(1) || bb.skipBits(1)
            }
            wb && bb.skipBits(3)
          }
          bb.skipBits(1), bb.skipBits(1), bb.skipBits(1);
          const Cb = bb.readBits(1);
          let Eb = 8;
          if (2 === eb && Cb) {
            Eb = bb.readBits(1) ? 12 : 10
          } else eb <= 2 && (Eb = Cb ? 10 : 8);
          let Fb = 0;
          1 !== eb && (Fb = bb.readBits(1));
          let Bb = 2,
            sb = 2,
            mb = 2;
          bb.readBits(1) && (Bb = bb.readBits(8), sb = bb.readBits(8), mb = bb.readBits(8));
          let hb = 0,
            zb = 1,
            Xb = 1,
            xb = 0;
          return Fb ? hb = bb.readBits(1) : 1 === Bb && 13 === sb && 0 === mb ? (hb = 1, zb = 0, Xb = 0) : (hb = bb.readBits(1), 0 === eb ? (zb = 1, Xb = 1) : 1 === eb ? (zb = 0, Xb = 0) : 12 === Eb ? (zb = bb.readBits(1), Xb = zb ? bb.readBits(1) : 0) : (zb = 1, Xb = 0), zb && Xb && (xb = bb.readBits(2))), {
            profile: eb,
            level: pb,
            tier: Vb,
            bitDepth: Eb,
            monochrome: Fb,
            chromaSubsamplingX: zb,
            chromaSubsamplingY: Xb,
            chromaSamplePosition: xb,
            videoFullRangeFlag: hb,
            colourPrimaries: Bb,
            transferCharacteristics: sb,
            matrixCoefficients: mb
          }
        }
        return null
      },
      ab = bb => 2 !== bb.colourPrimaries || 2 !== bb.transferCharacteristics || 2 !== bb.matrixCoefficients,
      ib = bb => {
        const wb = (0, Hb.kd)(bb),
          Mb = wb.getUint8(9),
          eb = wb.getUint16(10, !0),
          pb = wb.getUint32(12, !0),
          Vb = wb.getInt16(16, !0),
          gb = wb.getUint8(18);
        let lb = null;
        return gb && (lb = bb.subarray(19, 21 + Mb)), {
          outputChannelCount: Mb,
          preSkip: eb,
          inputSampleRate: pb,
          outputGain: Vb,
          channelMappingFamily: gb,
          channelMappingTable: lb
        }
      },
      ub = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      db = bb => {
        const wb = bb[0] >> 3,
          Mb = 3 & bb[0];
        let eb;
        return eb = 0 === Mb ? 1 : 1 === Mb || 2 === Mb ? 2 : 63 & bb[1], {
          durationInSamples: ub[wb] * eb
        }
      },
      Pb = bb => {
        if (bb.length < 7) throw new Error("Setup header is too short.");
        if (5 !== bb[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...bb.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const wb = bb.length,
          Mb = new Uint8Array(wb);
        for (let Ib = 0; Ib < wb; Ib++) Mb[Ib] = bb[wb - 1 - Ib];
        const eb = new Ib.e(Mb);
        let Hb = 0;
        for (; eb.getBitsLeft() > 97;)
          if (1 === eb.readBits(1)) {
            Hb = eb.pos;
            break
          } if (0 === Hb) throw new Error("Invalid Setup header: framing bit not found.");
        let pb = 0,
          Vb = !1,
          gb = 0;
        for (; eb.getBitsLeft() >= 97;) {
          const bb = eb.pos,
            wb = eb.readBits(8),
            Mb = eb.readBits(16),
            Hb = eb.readBits(16);
          if (wb > 63 || 0 !== Mb || 0 !== Hb) {
            eb.pos = bb;
            break
          }
          if (eb.skipBits(1), pb++, pb > 64) break;
          eb.clone().readBits(6) + 1 === pb && (Vb = !0, gb = pb)
        }
        if (!Vb) throw new Error("Invalid Setup header: mode header not found.");
        if (gb > 63) throw new Error(`Unsupported mode count: ${gb}.`);
        const lb = gb;
        eb.pos = 0, eb.skipBits(Hb);
        const Lb = Array(lb).fill(0);
        for (let Ib = lb - 1; Ib >= 0; Ib--) eb.skipBits(40), Lb[Ib] = eb.readBits(1);
        return {
          modeBlockflags: Lb
        }
      },
      nb = (bb, wb, Mb) => {
        switch (bb) {
          case "avc":
            for (const bb of ((bb, wb) => {
                if (wb.description) {
                  const Mb = 3 & (0, Hb.od)(wb.description)[4];
                  return tb(bb, Mb + 1)
                }
                return Ub(bb)
              })(Mb, wb)) {
              const wb = Mb[bb.offset],
                eb = Cb(wb);
              if (eb >= lb.NON_IDR_SLICE && eb <= lb.SLICE_DPC) return "delta";
              if (eb === lb.IDR) return "key";
              if (eb === lb.SEI && !(0, Hb.wb)()) {
                const wb = Mb.subarray(bb.offset, bb.offset + bb.length),
                  eb = Eb(wb);
                let pb = 1;
                do {
                  let bb = 0;
                  for (;;) {
                    const wb = eb[pb++];
                    if (void 0 === wb) break;
                    if (bb += wb, wb < 255) break
                  }
                  let wb = 0;
                  for (;;) {
                    const bb = eb[pb++];
                    if (void 0 === bb) break;
                    if (wb += bb, bb < 255) break
                  }
                  if (bb === 6) {
                    const bb = new Ib.e(eb);
                    bb.pos = 8 * pb;
                    const wb = (0, Hb.yc)(bb),
                      Mb = bb.readBits(1);
                    if (0 === wb && 1 === Mb) return "key"
                  }
                  pb += wb
                } while (pb < eb.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const bb of Kb(Mb, wb)) {
              const wb = rb(Mb[bb.offset]);
              if (wb < Lb.BLA_W_LP) return "delta";
              if (wb <= Lb.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & Mb[0]) ? "key" : "delta";
          case "vp9": {
            const bb = new Ib.e(Mb);
            if (2 !== bb.readBits(2)) return null;
            const wb = bb.readBits(1);
            3 === (bb.readBits(1) << 1) + wb && bb.skipBits(1);
            if (bb.readBits(1)) return null;
            return 0 === bb.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let bb = !1;
            for (const {
                type: wb,
                data: eb
              }
              of Gb(Mb))
              if (1 === wb) {
                const wb = new Ib.e(eb);
                wb.skipBits(4), bb = !!wb.readBits(1)
              } else if (3 === wb || 6 === wb || 7 === wb) {
              if (bb) return "key";
              const wb = new Ib.e(eb);
              if (wb.readBits(1)) return null;
              return 0 === wb.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, Hb.H)(bb), (0, Hb.L)(!1)
        }
      };
    var yb;
    ! function(bb) {
      bb[bb.STREAMINFO = 0] = "STREAMINFO", bb[bb.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", bb[bb.PICTURE = 6] = "PICTURE"
    }(yb || (yb = {}));
    const ob = (bb, wb, Mb) => {
        const eb = [bb],
          pb = Hb.id.encode(Ob.b);
        let Vb = new Uint8Array(4 + pb.length),
          gb = new DataView(Vb.buffer);
        gb.setUint32(0, pb.length, !0), Vb.set(pb, 4), eb.push(Vb);
        const lb = [],
          Lb = (bb, wb) => {
            const Mb = `${bb}=${wb}`,
              pb = Hb.id.encode(Mb);
            Vb = new Uint8Array(4 + pb.length), gb = new DataView(Vb.buffer), gb.setUint32(0, pb.length, !0), Vb.set(pb, 4), eb.push(Vb), lb.push(bb)
          };
        for (const {
            key: Ob,
            value: Eb
          }
          of(0, Hb._b)(wb)) switch (Ob) {
          case "title":
            Lb("TITLE", Eb);
            break;
          case "description":
            Lb("DESCRIPTION", Eb);
            break;
          case "artist":
            Lb("ARTIST", Eb);
            break;
          case "album":
            Lb("ALBUM", Eb);
            break;
          case "albumArtist":
            Lb("ALBUMARTIST", Eb);
            break;
          case "genre":
            Lb("GENRE", Eb);
            break;
          case "date":
            Lb("DATE", Eb.toISOString().slice(0, 10));
            break;
          case "comment":
            Lb("COMMENT", Eb);
            break;
          case "lyrics":
            Lb("LYRICS", Eb);
            break;
          case "trackNumber":
            Lb("TRACKNUMBER", Eb.toString());
            break;
          case "tracksTotal":
            Lb("TRACKTOTAL", Eb.toString());
            break;
          case "discNumber":
            Lb("DISCNUMBER", Eb.toString());
            break;
          case "discsTotal":
            Lb("DISCTOTAL", Eb.toString());
            break;
          case "beatsPerMinute":
            Lb("BPM", Eb.toString());
            break;
          case "images":
            if (!Mb) break;
            for (const bb of Eb) {
              const wb = "coverFront" === bb.kind ? 3 : "coverBack" === bb.kind ? 4 : 0,
                Mb = new Uint8Array(bb.mimeType.length);
              for (let Hb = 0; Hb < bb.mimeType.length; Hb++) Mb[Hb] = bb.mimeType.charCodeAt(Hb);
              const eb = Hb.id.encode(bb.description ?? ""),
                pb = new Uint8Array(8 + Mb.length + 4 + eb.length + 16 + 4 + bb.data.length),
                Vb = (0, Hb.kd)(pb);
              Vb.setUint32(0, wb, !1), Vb.setUint32(4, Mb.length, !1), pb.set(Mb, 8), Vb.setUint32(8 + Mb.length, eb.length, !1), pb.set(eb, 12 + Mb.length), Vb.setUint32(28 + Mb.length + eb.length, bb.data.length, !1), pb.set(bb.data, 32 + Mb.length + eb.length);
              Lb("METADATA_BLOCK_PICTURE", (0, Hb.R)(pb))
            }
            break;
          case "raw":
            break;
          default:
            (0, Hb.H)(Ob)
        }
        if (wb.raw)
          for (const Hb in wb.raw) {
            const bb = wb.raw[Hb] ?? wb.raw[Hb.toLowerCase()];
            if ("vendor" !== Hb && null != bb && !lb.includes(Hb))
              if ("string" === typeof bb) Lb(Hb, bb);
              else if (Array.isArray(bb)) {
              if (bb.every((bb => "string" === typeof bb)))
                for (const wb of bb) Lb(Hb, wb)
            }
          }
        const Ib = new Uint8Array(4);
        (0, Hb.kd)(Ib).setUint32(0, lb.length, !0), eb.splice(2, 0, Ib);
        const Ub = eb.reduce(((bb, wb) => bb + wb.length), 0),
          tb = new Uint8Array(Ub);
        let Cb = 0;
        for (const Hb of eb) tb.set(Hb, Cb), Cb += Hb.length;
        return tb
      },
      Tb = bb => {
        if (bb.length < 7) return null;
        if (11 !== bb[0] || 119 !== bb[1]) return null;
        const wb = new Ib.e(bb);
        wb.skipBits(16), wb.skipBits(16);
        const Mb = wb.readBits(2);
        if (3 === Mb) return null;
        const eb = wb.readBits(6),
          Hb = wb.readBits(5);
        if (Hb > 8) return null;
        const pb = wb.readBits(3),
          Vb = wb.readBits(3);
        0 !== (1 & Vb) && 1 !== Vb && wb.skipBits(2), 0 !== (4 & Vb) && wb.skipBits(2), 2 === Vb && wb.skipBits(2);
        return {
          fscod: Mb,
          bsid: Hb,
          bsmod: pb,
          acmod: Vb,
          lfeon: wb.readBits(1),
          bitRateCode: Math.floor(eb / 2)
        }
      },
      kb = new Uint8Array([5, 4, 65, 67, 45, 51]),
      bw = new Uint8Array([5, 4, 69, 65, 67, 51]),
      ww = [1, 2, 3, 6],
      Mw = bb => {
        if (bb.length < 6) return null;
        if (11 !== bb[0] || 119 !== bb[1]) return null;
        const wb = new Ib.e(bb);
        wb.skipBits(16);
        const Mb = wb.readBits(2);
        if (wb.skipBits(3), 0 !== Mb && 2 !== Mb) return null;
        const eb = wb.readBits(11),
          Hb = wb.readBits(2);
        let pb, lb = 0;
        3 === Hb ? (lb = wb.readBits(2), pb = 3) : pb = wb.readBits(2);
        const Lb = wb.readBits(3),
          Ob = wb.readBits(1),
          Ub = wb.readBits(5);
        if (Ub < 11 || Ub > 16) return null;
        const tb = ww[pb];
        let Cb;
        Cb = Hb < 3 ? Vb[Hb] / 1e3 : gb[lb] / 1e3;
        return {
          dataRate: Math.round((eb + 1) * Cb / (16 * tb)),
          substreams: [{
            fscod: Hb,
            fscod2: lb,
            bsid: Ub,
            bsmod: 0,
            acmod: Lb,
            lfeon: Ob,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      ew = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      Hw = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      pw = [16, 16, 20, 20, 0, 24, 24, 0],
      Vw = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      gw = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      lw = [32e3, 44100, 48e3, 0],
      Lw = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      Iw = [512, 1024, 2048, 4096],
      Ow = bb => {
        const wb = Uw(bb),
          Mb = (0, Hb.kd)(bb);
        let eb = wb ? 4 * Math.ceil(wb.frameSize / 4) : 0,
          pb = null;
        for (; eb + 4 <= bb.length && 1683496997 === Mb.getUint32(eb);) {
          const wb = tw(bb.subarray(eb));
          if (!wb) break;
          pb ??= wb, eb += wb.frameSize
        }
        if (wb) return {
          frameSize: pb ? eb : wb.frameSize,
          sampleRate: wb.sampleRate,
          numberOfChannels: wb.numberOfChannels,
          sampleCount: wb.sampleCount,
          channelLayout: wb.channelLayout,
          pcmResolution: wb.pcmResolution,
          bitRate: wb.bitRate,
          core: wb,
          hasExtensions: null !== pb
        };
        if (!pb?.asset) return null;
        const {
          asset: Vb
        } = pb;
        return {
          frameSize: eb,
          sampleRate: Vb.sampleRate,
          numberOfChannels: Vb.numberOfChannels,
          sampleCount: Vb.sampleCount,
          channelLayout: Vb.channelLayout,
          pcmResolution: Vb.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      Uw = bb => {
        if (bb.length < 18) return null;
        if (127 !== bb[0] || 254 !== bb[1] || 128 !== bb[2] || 1 !== bb[3]) return null;
        const wb = new Ib.e(bb);
        if (wb.skipBits(32), wb.skipBits(1), 31 !== wb.readBits(5)) return null;
        const Mb = wb.readBits(1),
          eb = wb.readBits(7) + 1;
        if (eb % 8 !== 0) return null;
        const Hb = wb.readBits(14) + 1;
        if (Hb < 96) return null;
        const pb = wb.readBits(6);
        if (pb >= Vw.length) return null;
        const Vb = ew[wb.readBits(4)];
        if (0 === Vb) return null;
        const gb = Hw[wb.readBits(5)];
        if (0 !== wb.readBits(1)) return null;
        wb.skipBits(4), wb.skipBits(5);
        const lb = wb.readBits(2);
        if (3 === lb) return null;
        wb.skipBits(1), Mb && wb.skipBits(16), wb.skipBits(7);
        const Lb = pw[wb.readBits(3)];
        if (0 === Lb) return null;
        const Ob = 0 !== lb;
        return {
          frameSize: Hb,
          sampleRate: Vb,
          numberOfChannels: Vw[pb] + (Ob ? 1 : 0),
          sampleCount: 32 * eb,
          channelLayout: gw[pb] | (Ob ? 8 : 0),
          amode: pb,
          lfePresent: Ob,
          bitRate: gb,
          pcmResolution: Lb
        }
      },
      tw = bb => {
        if (bb.length < 10) return null;
        if (100 !== bb[0] || 88 !== bb[1] || 32 !== bb[2] || 37 !== bb[3]) return null;
        const wb = new Ib.e(bb);
        wb.skipBits(32), wb.skipBits(8);
        const Mb = wb.readBits(2),
          eb = wb.readBits(1),
          pb = 8 + 4 * eb,
          Vb = 16 + 4 * eb;
        wb.skipBits(pb);
        const gb = wb.readBits(Vb) + 1,
          lb = {
            frameSize: gb,
            asset: null
          };
        if (!wb.readBits(1)) return lb;
        const Lb = lw[wb.readBits(2)],
          Ob = 512 * (wb.readBits(3) + 1);
        wb.readBits(1) && wb.skipBits(36);
        const Ub = wb.readBits(3) + 1,
          tb = wb.readBits(3) + 1,
          Cb = [];
        for (let Hb = 0; Hb < Ub; Hb++) Cb.push(wb.readBits(Mb + 1));
        for (const Ib of Cb) wb.skipBits(8 * (0, Hb.uc)(Ib));
        if (wb.readBits(1)) {
          wb.skipBits(2);
          const bb = wb.readBits(2) + 1 << 2,
            Mb = wb.readBits(2) + 1;
          wb.skipBits(Mb * bb)
        }
        for (let Hb = 0; Hb < tb; Hb++) wb.skipBits(Vb);
        wb.skipBits(9), wb.skipBits(3), wb.readBits(1) && wb.skipBits(4), wb.readBits(1) && wb.skipBits(24), wb.readBits(1) && wb.skipBits(8 * (wb.readBits(10) + 1));
        const Eb = wb.readBits(5) + 1,
          Fb = Lw[wb.readBits(4)],
          Bb = wb.readBits(8) + 1;
        let sb = 0;
        if (wb.readBits(1) && (Bb > 2 && wb.skipBits(1), Bb > 6 && wb.skipBits(1), wb.readBits(1))) {
          const bb = wb.readBits(2) + 1 << 2;
          sb = wb.readBits(bb)
        }
        return 0 === Lb || wb.getBitsLeft() < 0 ? lb : {
          frameSize: gb,
          asset: {
            sampleRate: Fb,
            numberOfChannels: Bb,
            sampleCount: Math.round(Ob * Fb / Lb),
            channelLayout: sb,
            pcmResolution: Eb
          }
        }
      },
      Cw = bb => {
        const wb = new Uint8Array(20),
          Mb = (0, Hb.kd)(wb);
        Mb.setUint32(0, bb.sampleRate), Mb.setUint32(4, bb.bitRate), Mb.setUint32(8, bb.bitRate), wb[12] = bb.pcmResolution;
        const eb = bb.core && !bb.hasExtensions ? 1 : 0,
          pb = new Ib.e(wb);
        return pb.seekToByte(13), pb.writeBits(2, Math.max(Iw.indexOf(bb.sampleCount), 0)), pb.writeBits(5, eb), pb.writeBits(1, bb.core?.lfePresent ? 1 : 0), pb.writeBits(6, bb.core?.amode ?? 0), pb.writeBits(14, bb.core ? bb.core.frameSize - 1 : 0), pb.writeBits(1, 0), pb.writeBits(3, 0), pb.writeBits(16, bb.channelLayout), pb.writeBits(1, 0), pb.writeBits(1, 0), pb.writeBits(1, 0), pb.writeBits(5, 0), wb
      }
  },
  41281: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => hb,
      G: () => cb,
      K: () => Db,
      L: () => Rb,
      N: () => rb,
      P: () => Nb,
      R: () => vb,
      T: () => Jb,
      b: () => lb,
      e: () => Ib,
      h: () => gb,
      i: () => jb,
      l: () => Vb,
      n: () => Lb,
      o: () => pb,
      q: () => Ub,
      s: () => xb,
      t: () => mb,
      v: () => Xb,
      z: () => zb
    });
    var eb = Mb(41284),
      Hb = Mb(41244);
    const pb = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      Vb = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      gb = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      lb = [...gb, ...Vb],
      Lb = ["webvtt"],
      Ib = [{
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
      Ob = [{
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
      Ub = [{
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
      tb = [{
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
      Cb = ".01.01.01.01.00",
      Eb = ".0.110.01.01.01.0",
      Fb = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      Bb = ["dtsc", "dtsh", "dtsl", "dtse"],
      sb = [{
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
      mb = (bb, wb, Mb, eb, pb) => {
        if ("avc" === bb) {
          const bb = 100,
            pb = Math.ceil(wb / 16) * Math.ceil(Mb / 16),
            Vb = Ib.find((bb => pb <= bb.maxMacroblocks && eb <= bb.maxBitrate)) ?? (0, Hb.ac)(Ib),
            gb = Vb ? Vb.level : 0;
          return `avc1.${bb.toString(16).padStart(2,"0")}${"00"}${gb.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === bb) {
          const bb = "",
            pb = 1,
            Vb = "6",
            gb = wb * Mb,
            lb = Ob.find((bb => gb <= bb.maxPictureSize && eb <= bb.maxBitrate)) ?? (0, Hb.ac)(Ob),
            Lb = "B0";
          return `hev1.${bb}${pb}.${Vb}.${lb.tier}${lb.level}.${Lb}`
        }
        if ("vp8" === bb) return "vp8";
        if ("vp9" === bb) {
          const bb = wb * Mb,
            pb = "08";
          return `vp09.${"00"}.${(Ub.find((wb=>bb<=wb.maxPictureSize&&eb<=wb.maxBitrate))??(0,Hb.ac)(Ub)).level.toString().padStart(2,"0")}.${pb}`
        }
        if ("av1" === bb) {
          const bb = 0,
            pb = wb * Mb,
            Vb = tb.find((bb => pb <= bb.maxPictureSize && eb <= bb.maxBitrate)) ?? (0, Hb.ac)(tb),
            gb = "08";
          return `av01.${bb}.${Vb.level.toString().padStart(2,"0")}${Vb.tier}.${gb}`
        }
        if ("prores" === bb) {
          const bb = 2073600,
            Hb = Math.pow(wb * Mb / bb, .95),
            Vb = sb.filter((bb => bb.alpha === pb));
          let gb = Vb[0].fourCc,
            lb = 1 / 0;
          for (const {
              fourCc: wb,
              bitrate: Mb
            }
            of Vb) {
            const bb = Math.abs(Mb * Hb - eb);
            bb < lb && (lb = bb, gb = wb)
          }
          return gb
        }
        throw (0, Hb.H)(bb), new TypeError(`Unhandled codec '${String(bb)}'.`)
      },
      hb = bb => {
        const wb = bb.split(".");
        return [1, 1, Number(wb[1]), 2, 1, Number(wb[2]), 3, 1, Number(wb[3]), 4, 1, wb[4] ? Number(wb[4]) : 1]
      },
      zb = bb => {
        const wb = bb.split("."),
          Mb = Number(wb[1]),
          eb = wb[2],
          Hb = (Mb << 5) + Number(eb.slice(0, -1)),
          pb = "H" === eb.slice(-1) ? 1 : 0,
          Vb = Number(wb[3]);
        return [129, Hb, (pb << 7) + ((8 === Vb ? 0 : 1) << 6) + ((12 === Vb ? 1 : 0) << 5) + ((wb[4] ? Number(wb[4]) : 0) << 4) + ((wb[5] ? Number(wb[5][0]) : 1) << 3) + ((wb[5] ? Number(wb[5][1]) : 1) << 2) + (wb[5] ? Number(wb[5][2]) : 0), 0]
      },
      Xb = bb => {
        const {
          codec: wb,
          codecDescription: Mb,
          colorSpace: pb,
          avcCodecInfo: Vb,
          hevcCodecInfo: gb,
          vp9CodecInfo: lb,
          av1CodecInfo: Lb,
          proresFormat: Ib
        } = bb;
        if ("avc" === wb) {
          if ((0, Hb.L)(null !== bb.avcType), Vb) {
            const wb = new Uint8Array([Vb.avcProfileIndication, Vb.profileCompatibility, Vb.avcLevelIndication]);
            return `avc${bb.avcType}.${(0,Hb.S)(wb)}`
          }
          if (!Mb || Mb.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${bb.avcType}.${(0,Hb.S)(Mb.subarray(1,4))}`
        }
        if ("hevc" === wb) {
          let bb, wb, eb, pb, Vb, lb;
          if (gb) bb = gb.generalProfileSpace, wb = gb.generalProfileIdc, eb = (0, Hb.Gc)(gb.generalProfileCompatibilityFlags), pb = gb.generalTierFlag, Vb = gb.generalLevelIdc, lb = [...gb.generalConstraintIndicatorFlags];
          else {
            if (!Mb || Mb.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const gb = (0, Hb.kd)(Mb),
              Lb = gb.getUint8(1);
            bb = Lb >> 6 & 3, wb = 31 & Lb, eb = (0, Hb.Gc)(gb.getUint32(2)), pb = Lb >> 5 & 1, Vb = gb.getUint8(12), lb = [];
            for (let bb = 0; bb < 6; bb++) lb.push(gb.getUint8(6 + bb))
          }
          let Lb = "hev1.";
          for (Lb += ["", "A", "B", "C"][bb] + wb, Lb += ".", Lb += eb.toString(16).toUpperCase(), Lb += ".", Lb += 0 === pb ? "L" : "H", Lb += Vb; lb.length > 0 && 0 === lb[lb.length - 1];) lb.pop();
          return lb.length > 0 && (Lb += ".", Lb += lb.map((bb => bb.toString(16).toUpperCase())).join(".")), Lb
        }
        if ("vp8" === wb) return "vp8";
        if ("vp9" === wb) {
          if (!lb) {
            const wb = bb.width * bb.height;
            let Mb = (0, Hb.ac)(Ub).level;
            for (const bb of Ub)
              if (wb <= bb.maxPictureSize) {
                Mb = bb.level;
                break
              } return `vp09.00.${Mb.toString().padStart(2,"0")}.08`
          }
          let wb = `vp09.${lb.profile.toString().padStart(2,"0")}.${lb.level.toString().padStart(2,"0")}.${lb.bitDepth.toString().padStart(2,"0")}.${lb.chromaSubsampling.toString().padStart(2,"0")}`;
          return wb += `.${lb.colourPrimaries.toString().padStart(2,"0")}.${lb.transferCharacteristics.toString().padStart(2,"0")}.${lb.matrixCoefficients.toString().padStart(2,"0")}.${lb.videoFullRangeFlag.toString().padStart(2,"0")}`, wb.endsWith(Cb) && (wb = wb.slice(0, -15)), wb
        }
        if ("av1" === wb) {
          if (!Lb) {
            const wb = bb.width * bb.height;
            let Mb = (0, Hb.ac)(Ub).level;
            for (const bb of Ub)
              if (wb <= bb.maxPictureSize) {
                Mb = bb.level;
                break
              } return `av01.0.${Mb.toString().padStart(2,"0")}M.08`
          }
          const wb = Lb.profile,
            Mb = Lb.level.toString().padStart(2, "0"),
            Vb = Lb.tier ? "H" : "M",
            gb = Lb.bitDepth.toString().padStart(2, "0"),
            lb = Lb.monochrome ? "1" : "0",
            Ib = 100 * Lb.chromaSubsamplingX + 10 * Lb.chromaSubsamplingY + 1 * (Lb.chromaSubsamplingX && Lb.chromaSubsamplingY ? Lb.chromaSamplePosition : 0);
          let Ob, tb, Cb, Fb;
          (0, eb.p)(Lb) ? (Ob = Lb.colourPrimaries, tb = Lb.transferCharacteristics, Cb = Lb.matrixCoefficients, Fb = Lb.videoFullRangeFlag) : (Ob = pb?.primaries ? Hb.e[pb.primaries] : 1, tb = pb?.transfer ? Hb.s[pb.transfer] : 1, Cb = pb?.matrix ? Hb.m[pb.matrix] : 1, Fb = pb?.fullRange ? 1 : 0);
          let Bb = `av01.${wb}.${Mb}${Vb}.${gb}`;
          return Bb += `.${lb}.${Ib.toString().padStart(3,"0")}`, Bb += `.${Ob.toString().padStart(2,"0")}`, Bb += `.${tb.toString().padStart(2,"0")}`, Bb += `.${Cb.toString().padStart(2,"0")}`, Bb += `.${Fb}`, Bb.endsWith(Eb) && (Bb = Bb.slice(0, -17)), Bb
        }
        if ("prores" === wb) return Ib ?? "apch";
        throw null !== wb && (0, Hb.H)(wb), new TypeError(`Unhandled codec '${wb}'.`)
      },
      xb = (bb, wb, Mb) => {
        if ("aac" === bb) return wb >= 2 && Mb <= 24e3 ? "mp4a.40.29" : Mb <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === bb) return "mp3";
        if ("opus" === bb) return "opus";
        if ("vorbis" === bb) return "vorbis";
        if ("flac" === bb) return "flac";
        if ("ac3" === bb) return "ac-3";
        if ("eac3" === bb) return "ec-3";
        if ("dts" === bb) return "dtsc";
        if (Vb.includes(bb)) return bb;
        throw new TypeError(`Unhandled codec '${bb}'.`)
      },
      jb = 48e3,
      Kb = /^pcm-([usf])(\d+)(be)?$/,
      rb = bb => {
        if ((0, Hb.L)(Vb.includes(bb)), "ulaw" === bb) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === bb) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const wb = Kb.exec(bb);
        let Mb;
        (0, Hb.L)(wb), Mb = "u" === wb[1] ? "unsigned" : "s" === wb[1] ? "signed" : "float";
        return {
          dataType: Mb,
          sampleSize: Number(wb[2]) / 8,
          littleEndian: "be" !== wb[3],
          silentValue: "pcm-u8" === bb ? 128 : 0
        }
      },
      Rb = bb => bb.startsWith("avc1") || bb.startsWith("avc3") ? "avc" : bb.startsWith("hev1") || bb.startsWith("hvc1") ? "hevc" : "vp8" === bb ? "vp8" : bb.startsWith("vp09") ? "vp9" : bb.startsWith("av01") ? "av1" : Fb.includes(bb) ? "prores" : "mp3" === bb || "mp4a.69" === bb || "mp4a.6B" === bb || "mp4a.6b" === bb || "mp4a.40.34" === bb ? "mp3" : bb.startsWith("mp4a.40.") || "mp4a.67" === bb ? "aac" : "opus" === bb || "Opus" === bb ? "opus" : "vorbis" === bb ? "vorbis" : "flac" === bb ? "flac" : "ac-3" === bb || "ac3" === bb ? "ac3" : "ec-3" === bb || "eac3" === bb ? "eac3" : Bb.includes(bb) ? "dts" : "ulaw" === bb ? "ulaw" : "alaw" === bb ? "alaw" : Kb.test(bb) ? bb : "webvtt" === bb ? "webvtt" : null,
      Db = bb => "avc" === bb ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === bb ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      cb = bb => "aac" === bb ? {
        aac: {
          format: "aac"
        }
      } : "opus" === bb ? {
        opus: {
          format: "opus"
        }
      } : {},
      Yb = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...Fb],
      Zb = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      fb = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      Ab = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      Wb = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      Jb = (bb, wb) => {
        if (!bb) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof bb) throw new TypeError("Video chunk metadata must be an object.");
        if (!bb.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof bb.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof bb.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!Yb.some((wb => bb.decoderConfig.codec.startsWith(wb)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(bb.decoderConfig.codedWidth) || bb.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(bb.decoderConfig.codedHeight) || bb.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== bb.decoderConfig.displayAspectWidth && (!Number.isInteger(bb.decoderConfig.displayAspectWidth) || bb.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== bb.decoderConfig.displayAspectHeight && (!Number.isInteger(bb.decoderConfig.displayAspectHeight) || bb.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== bb.decoderConfig.displayAspectWidth !== (void 0 !== bb.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== bb.decoderConfig.description && !(0, Hb.sb)(bb.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== bb.decoderConfig.colorSpace) {
          const {
            colorSpace: wb
          } = bb.decoderConfig;
          if ("object" !== typeof wb) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const Mb = Object.keys(Hb.e);
          if (null != wb.primaries && !Mb.includes(wb.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${Mb.join(", ")}.`);
          const eb = Object.keys(Hb.s);
          if (null != wb.transfer && !eb.includes(wb.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${eb.join(", ")}.`);
          const pb = Object.keys(Hb.m);
          if (null != wb.matrix && !pb.includes(wb.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${pb.join(", ")}.`);
          if (null != wb.fullRange && "boolean" !== typeof wb.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (bb.decoderConfig.codec.startsWith("avc1") || bb.decoderConfig.codec.startsWith("avc3")) {
          if (!Zb.test(bb.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (bb.decoderConfig.codec.startsWith("hev1") || bb.decoderConfig.codec.startsWith("hvc1")) {
          if (!fb.test(bb.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (bb.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== bb.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (bb.decoderConfig.codec.startsWith("vp09")) {
          if (!Ab.test(bb.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (bb.decoderConfig.codec.startsWith("av01")) {
          if (!Wb.test(bb.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (Fb.some((wb => bb.decoderConfig.codec.startsWith(wb))) && !Fb.some((wb => bb.decoderConfig.codec === wb))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Fb.join(", ")}.`);
        if (null !== wb && Rb(bb.decoderConfig.codec) !== wb) throw new TypeError(`Video chunk metadata decoder configuration codec string '${bb.decoderConfig.codec}' does not fit to the track codec '${wb}'.`)
      },
      Sb = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      Nb = (bb, wb) => {
        if (!bb) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof bb) throw new TypeError("Audio chunk metadata must be an object.");
        if (!bb.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof bb.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof bb.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!Sb.some((wb => bb.decoderConfig.codec.startsWith(wb)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(bb.decoderConfig.sampleRate) || bb.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(bb.decoderConfig.numberOfChannels) || bb.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== bb.decoderConfig.description && !(0, Hb.sb)(bb.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (bb.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== bb.decoderConfig.codec && "mp4a.6B" !== bb.decoderConfig.codec && "mp4a.6b" !== bb.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(bb.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (bb.decoderConfig.codec.startsWith("mp3") || bb.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== bb.decoderConfig.codec && "mp4a.69" !== bb.decoderConfig.codec && "mp4a.6B" !== bb.decoderConfig.codec && "mp4a.6b" !== bb.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (bb.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== bb.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (bb.decoderConfig.description && bb.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (bb.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== bb.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!bb.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (bb.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== bb.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const wb = 42;
          if (!bb.decoderConfig.description || bb.decoderConfig.description.byteLength < wb) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (bb.decoderConfig.codec.startsWith("ac-3") || bb.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== bb.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (bb.decoderConfig.codec.startsWith("ec-3") || bb.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== bb.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (bb.decoderConfig.codec.startsWith("dts")) {
          if (!Bb.includes(bb.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Bb.join(", ")}.`)
        } else if ((bb.decoderConfig.codec.startsWith("pcm") || bb.decoderConfig.codec.startsWith("ulaw") || bb.decoderConfig.codec.startsWith("alaw")) && !Vb.includes(bb.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Vb.join(", ")}).`);
        if (null !== wb && Rb(bb.decoderConfig.codec) !== wb) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${bb.decoderConfig.codec}' does not fit to the track codec '${wb}'.`)
      },
      vb = bb => {
        if (!bb) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof bb) throw new TypeError("Subtitle metadata must be an object.");
        if (!bb.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof bb.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof bb.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  41334: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ub,
      e: () => Ob,
      f: () => Bb,
      j: () => lb,
      n: () => sb,
      p: () => Lb,
      t: () => Vb
    });
    var eb = Mb(41281),
      Hb = Mb(41244),
      pb = Mb(41340);
    new Map, new Map;
    const Vb = bb => {
        if (!bb || "object" !== typeof bb) throw new TypeError("Encoding config must be an object.");
        if (!eb.o.includes(bb.codec)) throw new TypeError(`Invalid video codec '${bb.codec}'. Must be one of: ${eb.o.join(", ")}.`);
        const wb = bb.bitrate;
        if (void 0 === bb.quality && void 0 === wb) throw new TypeError("config.quality must be provided.");
        if (void 0 !== bb.quality && void 0 !== wb) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== bb.quality && !(bb.quality instanceof Ub)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== wb && !(wb instanceof Ub) && (!Number.isInteger(wb) || wb <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== bb.keyFrameInterval && (!Number.isFinite(bb.keyFrameInterval) || bb.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== bb.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(bb.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== bb.transform) {
          if ("object" !== typeof bb.transform || !bb.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== bb.transform.width && (!Number.isInteger(bb.transform.width) || bb.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== bb.transform.height && (!Number.isInteger(bb.transform.height) || bb.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== bb.transform.fit && !["fill", "contain", "cover"].includes(bb.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== bb.transform.width && void 0 !== bb.transform.height && void 0 === bb.transform.fit && !["fill", "contain", "cover"].includes(bb.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== bb.transform.fit && ["fill", "contain", "cover"].includes(bb.sizeChangeBehavior) && bb.transform.fit !== bb.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== bb.transform.rotate && ![0, 90, 180, 270].includes(bb.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== bb.transform.flip && "boolean" !== typeof bb.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== bb.transform.crop && (0, pb.n)(bb.transform.crop, "config.transform."), void 0 !== bb.transform.process && "function" !== typeof bb.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== bb.transform.frameRate && (!Number.isFinite(bb.transform.frameRate) || bb.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== bb.transform.force && "boolean" !== typeof bb.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== bb.onEncodedPacket && "function" !== typeof bb.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== bb.onEncoderConfig && "function" !== typeof bb.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== bb.onEncodedSample && "function" !== typeof bb.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        gb(bb.codec, bb)
      },
      gb = (bb, wb) => {
        if (!wb || "object" !== typeof wb) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== wb.alpha && !["discard", "keep"].includes(wb.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const Mb = wb.bitrateMode;
        if (void 0 !== Mb && !["constant", "variable"].includes(Mb)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== wb.latencyMode && !["quality", "realtime"].includes(wb.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== wb.fullCodecString && "string" !== typeof wb.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== wb.fullCodecString && (0, eb.L)(wb.fullCodecString) !== bb) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${bb}).`);
        if (void 0 !== wb.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(wb.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== wb.scalabilityMode && "string" !== typeof wb.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== wb.contentHint && "string" !== typeof wb.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      lb = bb => {
        const wb = bb.bitrateMode,
          Mb = bb.quality._toVideoRateControl(bb.codec, bb.width, bb.height, wb),
          pb = (wb, Mb, Hb) => ({
            codec: bb.fullCodecString ?? (0, eb.t)(bb.codec, bb.width, bb.height, Hb, "keep" === bb.alpha),
            width: bb.width,
            height: bb.height,
            displayWidth: bb.squarePixelWidth,
            displayHeight: bb.squarePixelHeight,
            bitrate: wb,
            bitrateMode: Mb,
            alpha: bb.alpha ?? "discard",
            framerate: bb.framerate,
            latencyMode: bb.latencyMode,
            hardwareAcceleration: bb.hardwareAcceleration,
            scalabilityMode: bb.scalabilityMode,
            contentHint: bb.contentHint,
            ...(0, eb.K)(bb.codec)
          }),
          Vb = [];
        return null !== Mb.quantizer && Vb.push({
          config: pb(void 0, "quantizer", Mb.bitrate),
          quantizer: Mb.quantizer
        }), "quantizer" !== Mb.bitrateMode && Vb.push({
          config: pb(Mb.bitrate, Mb.bitrateMode, Mb.bitrate),
          quantizer: null
        }), (0, Hb.L)(Vb.length > 0), Vb
      },
      Lb = bb => {
        if (!bb || "object" !== typeof bb) throw new TypeError("Encoding config must be an object.");
        if (!eb.b.includes(bb.codec)) throw new TypeError(`Invalid audio codec '${bb.codec}'. Must be one of: ${eb.b.join(", ")}.`);
        const wb = bb.bitrate;
        if (void 0 === bb.quality && void 0 === wb && !eb.l.includes(bb.codec) && "flac" !== bb.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== bb.quality && void 0 !== wb) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== bb.quality && !(bb.quality instanceof Ub)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== wb && !(wb instanceof Ub) && (!Number.isInteger(wb) || wb <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== bb.transform) {
          if ("object" !== typeof bb.transform || !bb.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== bb.transform.numberOfChannels && (!Number.isInteger(bb.transform.numberOfChannels) || bb.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== bb.transform.sampleRate && (!Number.isInteger(bb.transform.sampleRate) || bb.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== bb.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(bb.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== bb.transform.process && "function" !== typeof bb.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== bb.onEncodedPacket && "function" !== typeof bb.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== bb.onEncoderConfig && "function" !== typeof bb.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== bb.onEncodedSample && "function" !== typeof bb.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        Ib(bb.codec, bb)
      },
      Ib = (bb, wb) => {
        if (!wb || "object" !== typeof wb) throw new TypeError("Encoding options must be an object.");
        const Mb = wb.bitrateMode;
        if (void 0 !== Mb && !["constant", "variable"].includes(Mb)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== wb.fullCodecString && "string" !== typeof wb.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== wb.fullCodecString && (0, eb.L)(wb.fullCodecString) !== bb) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${bb}).`)
      },
      Ob = bb => {
        const wb = bb.bitrateMode;
        return {
          codec: bb.fullCodecString ?? (0, eb.s)(bb.codec, bb.numberOfChannels, bb.sampleRate),
          numberOfChannels: bb.numberOfChannels,
          sampleRate: bb.sampleRate,
          bitrate: bb.quality?._toAudioBitrate(bb.codec),
          bitrateMode: bb.quality?._bitrateMode ?? wb,
          ...(0, eb.G)(bb.codec)
        }
      };
    class Ub {
      constructor(bb) {
        if ("number" !== typeof bb && "string" !== typeof bb || (bb = {
            quality: bb
          }), !bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (void 0 !== bb.bitrateMode && !["constant", "variable"].includes(bb.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in bb) {
          if ("string" === typeof bb.quality ? !(bb.quality in tb) : "number" !== typeof bb.quality || Number.isNaN(bb.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== bb.preferBitrate && "boolean" !== typeof bb.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in bb || "quantizer" in bb) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof bb.quality ? tb[bb.quality] : bb.quality, this._preferBitrate = bb.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== bb.bitrate && (!Number.isInteger(bb.bitrate) || bb.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== bb.quantizer && (!Number.isInteger(bb.quantizer) || bb.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === bb.bitrate && void 0 === bb.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in bb) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = bb.bitrate, this._quantizer = bb.quantizer
        }
        this._bitrateMode = bb.bitrateMode
      }
      _toVideoRateControl(bb, wb, Mb, eb) {
        const pb = Cb[bb];
        let Vb, gb = null,
          lb = this._bitrateMode ?? eb ?? "variable";
        if (void 0 !== this._quantizer) {
          if (pb)
            if (this._quantizer < pb.min || this._quantizer > pb.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${bb}'; must be between ${pb.min} and ${pb.max}.`)
            } else gb = this._quantizer, void 0 === this._bitrate && (lb = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${bb}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && pb && !this._preferBitrate && ((0, Hb.L)(void 0 !== this._quality), gb = (0, Hb.Z)(Math.round((0, Hb.dc)(pb.worst, pb.best, this._quality)), pb.min, pb.max));
        if (void 0 !== this._bitrate) Vb = this._bitrate;
        else {
          let eb = this._quality;
          void 0 === eb && ((0, Hb.L)(null !== gb && pb), eb = (0, Hb.Z)((gb - pb.worst) / (pb.best - pb.worst), 0, 1)), Vb = Fb(bb, wb, Mb, Eb(eb))
        }
        return {
          quantizer: gb,
          bitrate: Vb,
          bitrateMode: lb
        }
      }
      _toVideoBitrate(bb, wb, Mb) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, Hb.L)(void 0 !== this._quality), Fb(bb, wb, Mb, Eb(this._quality)))
      }
      _toAudioBitrate(bb) {
        if (eb.l.includes(bb) || "flac" === bb) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const wb = Eb(this._quality),
          Mb = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [bb];
        if (!Mb) throw new Error(`Unhandled codec: ${bb}`);
        let Hb = Mb * wb;
        if ("aac" === bb) {
          Hb = [96e3, 128e3, 16e4, 192e3].reduce(((bb, wb) => Math.abs(wb - Hb) < Math.abs(bb - Hb) ? wb : bb))
        } else if ("opus" === bb || "vorbis" === bb) Hb = Math.max(6e3, Hb);
        else if ("mp3" === bb) {
          Hb = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((bb, wb) => Math.abs(wb - Hb) < Math.abs(bb - Hb) ? wb : bb))
        }
        return 1e3 * Math.round(Hb / 1e3)
      }
    }
    const tb = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      Cb = {
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
      Eb = bb => .3 * Math.exp(2.5538 * bb),
      Fb = (bb, wb, Mb, eb) => {
        const Hb = wb * Mb,
          pb = 3e6,
          Vb = pb * Math.pow(Hb / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [bb] * eb;
        return 1e3 * Math.ceil(Vb / 1e3)
      },
      Bb = (bb, wb) => "avc" === bb ? {
        avc: {
          quantizer: wb
        }
      } : "hevc" === bb ? {
        hevc: {
          quantizer: wb
        }
      } : "vp9" === bb ? {
        vp9: {
          quantizer: wb
        }
      } : "av1" === bb ? {
        av1: {
          quantizer: wb
        }
      } : void(0, Hb.L)(!1),
      sb = (bb, wb) => void 0 !== bb ? bb : void 0 !== wb ? wb instanceof Ub ? wb : new Ub({
        bitrate: wb
      }) : void 0
  },
  41287: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb, Hb = Mb(41244);
    ! function(bb) {
      bb[bb.Silent = 0] = "Silent", bb[bb.Errors = 1] = "Errors", bb[bb.Warnings = 2] = "Warnings", bb[bb.Info = 3] = "Info"
    }(eb || (eb = {}));
    class pb {
      constructor() {}
      static get level() {
        return pb._level
      }
      static set level(bb) {
        if (bb !== eb.Silent && bb !== eb.Errors && bb !== eb.Warnings && bb !== eb.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        pb._level = bb
      }
      static get _emitter() {
        return pb._emitterInstance ??= new Hb.h
      }
      static on(bb, wb, Mb) {
        return pb._emitter.on(bb, wb, Mb)
      }
      static _error() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        pb._emitter._emit("error", wb), pb._level >= eb.Errors && console.error(...wb)
      }
      static _warn() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        pb._emitter._emit("warn", wb), pb._level >= eb.Warnings && console.warn(...wb)
      }
      static _info() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        pb._emitter._emit("info", wb), pb._level >= eb.Info && console.info(...wb)
      }
    }
    pb._level = eb.Info, pb._emitterInstance = null
  },
  41348: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      g: () => Ib,
      i: () => lb,
      l: () => Ob,
      n: () => Vb
    });
    Mb(41264);
    var eb = Mb(41281);
    Mb(41244), Mb(41303);
    var Hb = Mb(41327);
    Mb(41340), Mb(41334);
    Mb(41284), Mb(41287), "function" === typeof SuppressedError && SuppressedError;
    class pb {
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
      async _flushAndClose(bb) {}
      close() {
        if (this._closingPromise) return;
        const bb = this._connectedTrack;
        if (!bb) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === bb.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== bb.output.state && "finalized" !== bb.output.state && bb.output._muxer.onTrackClose(bb)
        })()
      }
      async _flushOrWaitForOngoingClose(bb) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(bb), this._closed = !0
        })()
      }
    }
    class Vb extends pb {
      constructor(bb) {
        if (super(), !eb.o.includes(bb)) throw new TypeError(`Invalid video codec '${bb}'. Must be one of: ${eb.o.join(", ")}.`);
        this._codec = bb
      }
    }
    const gb = (bb, wb) => {
      if (bb.metadata.hasOnlyKeyPackets && "key" !== wb.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class lb extends Vb {
      constructor(bb) {
        super(bb)
      }
      add(bb, wb) {
        if (!(bb instanceof Hb.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (bb.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== wb && (!wb || "object" !== typeof wb)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), gb(this._connectedTrack, bb), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, bb, wb)
      }
    }
    class Lb extends pb {
      constructor(bb) {
        if (super(), !eb.b.includes(bb)) throw new TypeError(`Invalid audio codec '${bb}'. Must be one of: ${eb.b.join(", ")}.`);
        this._codec = bb
      }
    }
    class Ib extends Lb {
      constructor(bb) {
        super(bb)
      }
      add(bb, wb) {
        if (!(bb instanceof Hb.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (bb.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== wb && (!wb || "object" !== typeof wb)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, bb, wb)
      }
    }
    class Ob extends pb {
      constructor(bb) {
        if (super(), !eb.n.includes(bb)) throw new TypeError(`Invalid subtitle codec '${bb}'. Must be one of: ${eb.n.join(", ")}.`);
        this._codec = bb
      }
    }
  },
  41252: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      d: () => lb,
      f: () => Hb,
      j: () => gb,
      k: () => Vb,
      o: () => Lb
    });
    var eb = Mb(41244);
    class Hb {
      constructor(bb, wb) {
        if (this.data = bb, this.mimeType = wb, !(bb instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof wb) throw new TypeError("mimeType must be a string.")
      }
    }
    class pb {
      constructor(bb, wb, Mb, eb) {
        if (this.data = bb, this.mimeType = wb, this.name = Mb, this.description = eb, !(bb instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== wb && "string" !== typeof wb) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== Mb && "string" !== typeof Mb) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== eb && "string" !== typeof eb) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const Vb = bb => {
        if (!bb || "object" !== typeof bb) throw new TypeError("tags must be an object.");
        if (void 0 !== bb.title && "string" !== typeof bb.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== bb.description && "string" !== typeof bb.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== bb.artist && "string" !== typeof bb.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== bb.album && "string" !== typeof bb.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== bb.albumArtist && "string" !== typeof bb.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== bb.trackNumber && (!Number.isInteger(bb.trackNumber) || bb.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== bb.tracksTotal && (!Number.isInteger(bb.tracksTotal) || bb.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== bb.discNumber && (!Number.isInteger(bb.discNumber) || bb.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== bb.discsTotal && (!Number.isInteger(bb.discsTotal) || bb.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== bb.genre && "string" !== typeof bb.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== bb.date && (!(bb.date instanceof Date) || Number.isNaN(bb.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== bb.beatsPerMinute && (!Number.isInteger(bb.beatsPerMinute) || bb.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== bb.lyrics && "string" !== typeof bb.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== bb.images) {
          if (!Array.isArray(bb.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const wb of bb.images) {
            if (!wb || "object" !== typeof wb) throw new TypeError("Each image in tags.images must be an object.");
            if (!(wb.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof wb.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(wb.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== bb.comment && "string" !== typeof bb.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== bb.raw) {
          if (!bb.raw || "object" !== typeof bb.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const wb of Object.values(bb.raw))
            if (null !== wb && "string" !== typeof wb && (!Array.isArray(wb) || !wb.every((bb => "string" === typeof bb))) && !(wb instanceof Uint8Array) && !(wb instanceof Hb) && !(wb instanceof pb) && !(0, eb.Qb)(wb)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      gb = bb => void 0 === bb.title && void 0 === bb.description && void 0 === bb.artist && void 0 === bb.album && void 0 === bb.albumArtist && void 0 === bb.trackNumber && void 0 === bb.tracksTotal && void 0 === bb.discNumber && void 0 === bb.discsTotal && void 0 === bb.genre && void 0 === bb.beatsPerMinute && void 0 === bb.date && void 0 === bb.lyrics && (!bb.images || 0 === bb.images.length) && void 0 === bb.comment && (void 0 === bb.raw || 0 === Object.keys(bb.raw).length),
      lb = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      Lb = bb => {
        if (!bb || "object" !== typeof bb) throw new TypeError("disposition must be an object.");
        if (void 0 !== bb.default && "boolean" !== typeof bb.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== bb.primary && "boolean" !== typeof bb.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== bb.forced && "boolean" !== typeof bb.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== bb.original && "boolean" !== typeof bb.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== bb.commentary && "boolean" !== typeof bb.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== bb.hearingImpaired && "boolean" !== typeof bb.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== bb.visuallyImpaired && "boolean" !== typeof bb.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  41244: (bb, wb, Mb) => {
    function eb(bb) {
      if (!bb) throw new Error("Assertion failed.")
    }
    Mb.d(wb, {
      $c: () => ub,
      B: () => rw,
      Cb: () => Iw,
      Cc: () => hb,
      D: () => Kw,
      Gb: () => ew,
      Gc: () => Sb,
      H: () => Gb,
      Kb: () => Db,
      Kc: () => Ob,
      L: () => eb,
      Mc: () => Tb,
      Nb: () => sb,
      Ob: () => xw,
      P: () => Nb,
      Pc: () => ob,
      Qb: () => aw,
      R: () => hw,
      S: () => Jb,
      Tc: () => tb,
      Ub: () => Fw,
      Vc: () => Nw,
      W: () => lb,
      Wb: () => Bb,
      Xc: () => ib,
      Yb: () => lw,
      Z: () => db,
      Zb: () => jw,
      _b: () => sw,
      ac: () => Fb,
      bb: () => vw,
      d: () => Wb,
      dc: () => Pb,
      dd: () => ab,
      e: () => cb,
      eb: () => Bw,
      f: () => Vw,
      fb: () => fb,
      fc: () => tw,
      fd: () => Rw,
      gd: () => rb,
      h: () => qw,
      hb: () => Eb,
      hc: () => nb,
      ib: () => pw,
      id: () => Rb,
      jd: () => Gw,
      kb: () => Lb,
      kd: () => xb,
      l: () => gb,
      lc: () => Cb,
      m: () => Zb,
      nb: () => Qb,
      nc: () => Vb,
      ob: () => kb,
      od: () => Xb,
      pb: () => qb,
      q: () => pb,
      qb: () => bw,
      qc: () => Xw,
      r: () => Hw,
      rb: () => mw,
      rd: () => zw,
      s: () => Yb,
      sb: () => Ab,
      sd: () => Dw,
      uc: () => ww,
      v: () => Kb,
      vc: () => vb,
      vd: () => Qw,
      wb: () => Uw,
      yb: () => Cw,
      yc: () => mb,
      z: () => yb,
      zd: () => zb
    });
    const Hb = Math.PI / 180,
      pb = 180 / Math.PI,
      Vb = bb => {
        const wb = (bb % 360 + 360) % 360;
        if (0 === wb || 90 === wb || 180 === wb || 270 === wb) return wb;
        throw new Error(`Invalid rotation ${bb}.`)
      },
      gb = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      lb = (bb, wb, Mb) => {
        const [eb, Hb, , pb, Vb] = bb, gb = Math.abs(eb) * wb + Math.abs(pb) * Mb, lb = Math.abs(Hb) * wb + Math.abs(Vb) * Mb;
        return Cb(Cb(Ub(-wb / 2, -Mb / 2), bb), Ub(gb / 2, lb / 2))
      },
      Lb = bb => {
        const [wb, Mb] = bb, eb = Math.atan2(Mb, Ib(bb) ? -wb : wb);
        return Vb(ob(eb * pb, 90))
      },
      Ib = bb => {
        const [wb, Mb, , eb, Hb] = bb;
        return wb * Hb - Mb * eb < 0
      },
      Ob = bb => {
        const wb = bb * Hb,
          Mb = Math.round(Math.cos(wb)),
          eb = Math.round(Math.sin(wb));
        return [Mb, eb, 0, -eb, Mb, 0, 0, 0, 1]
      },
      Ub = (bb, wb) => [1, 0, 0, 0, 1, 0, bb, wb, 1],
      tb = (bb, wb) => [bb, 0, 0, 0, wb, 0, 0, 0, 1],
      Cb = (bb, wb) => {
        const Mb = new Array(9);
        for (let eb = 0; eb < 3; eb++)
          for (let Hb = 0; Hb < 3; Hb++) Mb[3 * eb + Hb] = bb[3 * eb] * wb[Hb] + bb[3 * eb + 1] * wb[3 + Hb] + bb[3 * eb + 2] * wb[6 + Hb];
        return Mb
      },
      Eb = (bb, wb, Mb, eb) => ({
        rotation: Vb(bb + (wb ? -Mb : Mb)),
        flip: wb !== eb
      }),
      Fb = bb => bb && bb[bb.length - 1],
      Bb = bb => bb >= 0 && bb < 2 ** 32,
      sb = bb => bb >= -(2 ** 31) && bb < 2 ** 31,
      mb = bb => {
        let wb = 0;
        for (; 0 === bb.readBits(1) && wb < 32;) wb++;
        if (wb >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << wb) - 1 + bb.readBits(wb)
      },
      hb = bb => {
        const wb = mb(bb);
        return 0 === (1 & wb) ? -(wb >> 1) : wb + 1 >> 1
      },
      zb = (bb, wb, Mb, eb) => {
        for (let Hb = wb; Hb < Mb; Hb++) {
          const wb = Math.floor(Hb / 8);
          let pb = bb[wb];
          const Vb = 7 - (7 & Hb);
          pb &= ~(1 << Vb), pb |= (eb & 1 << Mb - Hb - 1) >> Mb - Hb - 1 << Vb, bb[wb] = pb
        }
      },
      Xb = bb => bb.constructor === Uint8Array ? bb : ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb),
      xb = bb => bb.constructor === DataView ? bb : ArrayBuffer.isView(bb) ? new DataView(bb.buffer, bb.byteOffset, bb.byteLength) : new DataView(bb),
      jb = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const wb = new Uint8Array(3 * bb.length);
          let Mb = 0;
          for (let eb = 0; eb < bb.length; eb++) {
            let Hb = bb.charCodeAt(eb);
            if (Hb < 128) wb[Mb++] = Hb;
            else if (Hb < 2048) wb[Mb++] = 192 | Hb >> 6, wb[Mb++] = 128 | 63 & Hb;
            else if (Hb < 55296 || Hb > 57343) wb[Mb++] = 224 | Hb >> 12, wb[Mb++] = 128 | Hb >> 6 & 63, wb[Mb++] = 128 | 63 & Hb;
            else {
              const pb = eb + 1 < bb.length ? bb.charCodeAt(eb + 1) : 0;
              Hb < 56320 && pb >= 56320 && pb <= 57343 ? (Hb = 65536 + (Hb - 55296 << 10) + (pb - 56320), eb++, wb[Mb++] = 240 | Hb >> 18, wb[Mb++] = 128 | Hb >> 12 & 63, wb[Mb++] = 128 | Hb >> 6 & 63, wb[Mb++] = 128 | 63 & Hb) : (wb[Mb++] = 239, wb[Mb++] = 191, wb[Mb++] = 189)
            }
          }
          return wb.slice(0, Mb)
        }
      },
      Kb = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const wb = bb.trim().toLowerCase();
          if ("utf-8" === wb || "utf8" === wb || "unicode-1-1-utf-8" === wb) this.encoding = "utf-8";
          else if ("utf-16le" === wb || "utf-16" === wb) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== wb) throw new RangeError(`The encoding label provided ('${bb}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(bb) {
          const wb = bb ? Xb(bb) : new Uint8Array(0),
            Mb = [];
          if ("utf-8" === this.encoding) {
            let bb = wb.length >= 3 && 239 === wb[0] && 187 === wb[1] && 191 === wb[2] ? 3 : 0;
            for (; bb < wb.length;) {
              const eb = wb[bb];
              if (eb < 128) {
                Mb.push(eb), bb++;
                continue
              }
              let Hb, pb;
              if (eb >= 194 && eb < 224) Hb = 1, pb = 31 & eb;
              else if (eb >= 224 && eb < 240) Hb = 2, pb = 15 & eb;
              else {
                if (!(eb >= 240 && eb < 245)) {
                  Mb.push(65533), bb++;
                  continue
                }
                Hb = 3, pb = 7 & eb
              }
              let Vb = 224 === eb ? 160 : 240 === eb ? 144 : 128,
                gb = 237 === eb ? 159 : 244 === eb ? 143 : 191,
                lb = 1;
              for (; lb <= Hb; lb++) {
                const Mb = bb + lb < wb.length ? wb[bb + lb] : 0;
                if (Mb < Vb || Mb > gb) break;
                pb = pb << 6 | 63 & Mb, Vb = 128, gb = 191
              }
              bb += lb, lb <= Hb ? Mb.push(65533) : pb >= 65536 ? (pb -= 65536, Mb.push(55296 | pb >> 10, 56320 | 1023 & pb)) : Mb.push(pb)
            }
          } else {
            const bb = "utf-16le" === this.encoding,
              eb = bb ? 255 : 254,
              Hb = bb ? 254 : 255;
            let pb = wb.length >= 2 && wb[0] === eb && wb[1] === Hb ? 2 : 0;
            for (; pb + 1 < wb.length;) {
              const eb = bb ? wb[pb] | wb[pb + 1] << 8 : wb[pb] << 8 | wb[pb + 1];
              if (pb += 2, eb >= 55296 && eb <= 56319) {
                const Hb = pb + 1 < wb.length ? bb ? wb[pb] | wb[pb + 1] << 8 : wb[pb] << 8 | wb[pb + 1] : -1;
                Hb >= 56320 && Hb <= 57343 ? (Mb.push(eb, Hb), pb += 2) : Mb.push(65533)
              } else eb >= 56320 && eb <= 57343 ? Mb.push(65533) : Mb.push(eb)
            }
            pb < wb.length && Mb.push(65533)
          }
          let eb = "";
          for (let Hb = 0; Hb < Mb.length; Hb += 8192) eb += String.fromCharCode(...Mb.slice(Hb, Hb + 8192));
          return eb
        }
      },
      rb = new Kb,
      Rb = new jb,
      Db = bb => {
        for (let wb = 0; wb < bb.length; wb++) {
          if (bb.charCodeAt(wb) > 255) return !1
        }
        return !0
      },
      cb = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      Yb = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      Zb = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      fb = bb => !bb || null == bb.primaries && null == bb.transfer && null == bb.matrix && null == bb.fullRange,
      Ab = bb => bb instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && bb instanceof SharedArrayBuffer || ArrayBuffer.isView(bb);
    class Wb {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let bb;
        const wb = new Promise((wb => {
            let Mb = !1;
            bb = () => {
              Mb || (wb(), this.pending--, Mb = !0)
            }
          })),
          Mb = this.currentPromise;
        return this.currentPromise = wb, this.pending++, await Mb, bb
      }
    }
    const Jb = bb => [...bb].map((bb => bb.toString(16).padStart(2, "0"))).join(""),
      Sb = bb => (bb = (bb = (bb = (bb = (bb = bb >> 1 & 1431655765 | (1431655765 & bb) << 1) >> 2 & 858993459 | (858993459 & bb) << 2) >> 4 & 252645135 | (252645135 & bb) << 4) >> 8 & 16711935 | (16711935 & bb) << 8) >> 16 & 65535 | (65535 & bb) << 16) >>> 0,
      Nb = (bb, wb, Mb) => {
        let eb = 0,
          Hb = bb.length - 1,
          pb = -1;
        for (; eb <= Hb;) {
          const Vb = eb + (Hb - eb + 1) / 2 | 0;
          Mb(bb[Vb]) <= wb ? (pb = Vb, eb = Vb + 1) : Hb = Vb - 1
        }
        return pb
      },
      vb = () => {
        let bb, wb;
        return {
          promise: new Promise(((Mb, eb) => {
            bb = Mb, wb = eb
          })),
          resolve: bb,
          reject: wb
        }
      },
      Qb = (bb, wb) => {
        for (let Mb = bb.length - 1; Mb >= 0; Mb--)
          if (wb(bb[Mb])) return Mb;
        return -1
      },
      Gb = bb => {
        throw new Error(`Unexpected value: ${bb}`)
      },
      qb = (bb, wb, Mb) => {
        const eb = bb.getUint8(wb),
          Hb = bb.getUint8(wb + 1),
          pb = bb.getUint8(wb + 2);
        return Mb ? eb | Hb << 8 | pb << 16 : eb << 16 | Hb << 8 | pb
      },
      ab = (bb, wb, Mb, eb) => {
        Mb >>>= 0, Mb &= 16777215, eb ? (bb.setUint8(wb, 255 & Mb), bb.setUint8(wb + 1, Mb >>> 8 & 255), bb.setUint8(wb + 2, Mb >>> 16 & 255)) : (bb.setUint8(wb, Mb >>> 16 & 255), bb.setUint8(wb + 1, Mb >>> 8 & 255), bb.setUint8(wb + 2, 255 & Mb))
      },
      ib = (bb, wb, Mb, eb) => {
        (Mb = db(Mb, -8388608, 8388607)) < 0 && (Mb = Mb + 16777216 & 16777215), ab(bb, wb, Mb, eb)
      },
      ub = (bb, wb, Mb, eb) => {
        eb ? (bb.setUint32(wb + 0, Mb, !0), bb.setInt32(wb + 4, Math.floor(Mb / 2 ** 32), !0)) : (bb.setInt32(wb + 0, Math.floor(Mb / 2 ** 32), !0), bb.setUint32(wb + 4, Mb, !0))
      },
      db = (bb, wb, Mb) => Math.max(wb, Math.min(Mb, bb)),
      Pb = (bb, wb, Mb) => bb + (wb - bb) * Mb,
      nb = (bb, wb) => bb - Math.floor(bb / wb) * wb,
      yb = "und",
      ob = (bb, wb) => Math.round(bb / wb) * wb,
      Tb = (bb, wb) => Math.round(bb * wb) / wb,
      kb = (bb, wb) => Math.floor(bb * wb) / wb,
      bw = bb => {
        let wb = 0;
        for (; bb;) wb++, bb >>= 1;
        return wb
      },
      ww = bb => {
        let wb = 0;
        for (; 0 !== bb;) bb &= bb - 1, wb++;
        return wb
      },
      Mw = /^[a-z]{3}$/,
      ew = bb => Mw.test(bb),
      Hw = 1e6 * (1 + Number.EPSILON),
      pw = (bb, wb) => {
        const Mb = bb < 0 ? -1 : 1;
        let eb = 0,
          Hb = 1,
          pb = 1,
          Vb = 0,
          gb = bb = Math.abs(bb);
        for (;;) {
          const bb = Math.floor(gb),
            lb = bb * pb + eb,
            Lb = bb * Vb + Hb;
          if (Lb > wb) return {
            num: Mb * pb,
            den: Vb
          };
          if (eb = pb, Hb = Vb, pb = lb, Vb = Lb, gb = 1 / (gb - bb), !isFinite(gb)) break
        }
        return {
          num: Mb * pb,
          den: Vb
        }
      };
    class Vw {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(bb) {
        return this.currentPromise = this.currentPromise.then(bb)
      }
    }
    let gw = null;
    const lw = () => null !== gw ? gw : gw = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let Lw = null;
    const Iw = () => null !== Lw ? Lw : Lw = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let Ow = null;
    const Uw = () => null !== Ow ? Ow : Ow = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const tw = bb => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${bb} is not available in this environment.` : `${bb} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      Cw = bb => bb instanceof DOMException && "QuotaExceededError" === bb.name && /reclaimed/i.test(bb.message),
      Ew = (async () => {})().constructor,
      Fw = bb => bb instanceof Ew || bb instanceof Promise || "function" === typeof bb?.then,
      Bw = (bb, wb) => -1 !== bb ? bb : wb,
      sw = function*(bb) {
        for (const wb in bb) {
          const Mb = bb[wb];
          void 0 !== Mb && (yield {
            key: wb,
            value: Mb
          })
        }
      },
      mw = bb => {
        switch (bb.toLowerCase()) {
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
      hw = bb => {
        let wb = "";
        for (let Mb = 0; Mb < bb.length; Mb++) wb += String.fromCharCode(bb[Mb]);
        return btoa(wb)
      },
      zw = (bb, wb) => {
        if (bb.length !== wb.length) return !1;
        for (let Mb = 0; Mb < bb.length; Mb++)
          if (bb[Mb] !== wb[Mb]) return !1;
        return !0
      },
      Xw = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      xw = bb => "number" === typeof bb && !Number.isNaN(bb),
      jw = (bb, wb) => {
        if (wb.includes("://")) return wb;
        if (bb.includes("://")) {
          const wb = bb.indexOf("?"); - 1 !== wb && (bb = bb.slice(0, wb))
        }
        let Mb;
        if (wb.startsWith("/")) {
          const eb = bb.indexOf("://");
          if (-1 === eb) Mb = wb;
          else {
            const Hb = bb.indexOf("/", eb + 3);
            Mb = -1 === Hb ? bb + wb : bb.slice(0, Hb) + wb
          }
        } else {
          const eb = bb.lastIndexOf("/");
          Mb = -1 === eb ? wb : bb.slice(0, eb + 1) + wb
        }
        let eb = "";
        const Hb = Mb.indexOf("://");
        if (-1 !== Hb) {
          const bb = Mb.indexOf("/", Hb + 3); - 1 !== bb && (eb = Mb.slice(0, bb), Mb = Mb.slice(bb))
        }
        const pb = Mb.split("/"),
          Vb = [];
        for (const gb of pb) ".." === gb ? Vb.pop() : "." !== gb && Vb.push(gb);
        return eb + Vb.join("/")
      },
      Kw = (bb, wb) => {
        let Mb = -1,
          eb = 1 / 0;
        for (let Hb = 0; Hb < bb.length; Hb++) {
          const pb = wb(bb[Hb]);
          pb < eb && (eb = pb, Mb = Hb)
        }
        return Mb
      },
      rw = (bb, wb) => {
        let Mb = -1,
          eb = -1 / 0;
        for (let Hb = 0; Hb < bb.length; Hb++) {
          const pb = wb(bb[Hb]);
          pb > eb && (eb = pb, Mb = Hb)
        }
        return Mb
      },
      Rw = bb => {
        eb(Number.isInteger(bb.num)), eb(Number.isInteger(bb.den)), eb(0 !== bb.den);
        let wb = Math.abs(bb.num),
          Mb = Math.abs(bb.den);
        for (; 0 !== Mb;) {
          const bb = wb % Mb;
          wb = Mb, Mb = bb
        }
        const Hb = wb || 1;
        return {
          num: bb.num / Hb,
          den: bb.den / Hb
        }
      },
      Dw = (bb, wb) => {
        if ("object" !== typeof bb || !bb) throw new TypeError(`${wb} must be an object.`);
        if (!Number.isInteger(bb.left) || bb.left < 0) throw new TypeError(`${wb}.left must be a non-negative integer.`);
        if (!Number.isInteger(bb.top) || bb.top < 0) throw new TypeError(`${wb}.top must be a non-negative integer.`);
        if (!Number.isInteger(bb.width) || bb.width < 0) throw new TypeError(`${wb}.width must be a non-negative integer.`);
        if (!Number.isInteger(bb.height) || bb.height < 0) throw new TypeError(`${wb}.height must be a non-negative integer.`)
      };
    let Yw, Zw = 1;
    const fw = new Map,
      Aw = new Map,
      Ww = () => "undefined" === typeof window,
      Jw = () => {
        const bb = new Map,
          wb = new Map;
        self.onmessage = Mb => {
          const eb = Mb.data;
          switch (eb.type) {
            case "set-timeout": {
              const wb = setTimeout((() => {
                bb.delete(eb.timerId), self.postMessage({
                  type: "fire",
                  timerId: eb.timerId
                })
              }), eb.delay);
              bb.set(eb.timerId, wb)
            }
            break;
            case "set-interval": {
              const bb = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: eb.timerId
                })
              }), eb.delay);
              wb.set(eb.timerId, bb)
            }
            break;
            case "clear-timeout": {
              const wb = bb.get(eb.timerId);
              void 0 !== wb && (clearTimeout(wb), bb.delete(eb.timerId))
            }
            break;
            case "clear-interval": {
              const bb = wb.get(eb.timerId);
              void 0 !== bb && (clearInterval(bb), wb.delete(eb.timerId))
            }
          }
        }
      },
      Sw = () => {
        if (Yw) return Yw;
        const bb = `(${Jw.toString()})();`,
          wb = URL.createObjectURL(new Blob([bb], {
            type: "text/javascript"
          }));
        return Yw = new Worker(wb), URL.revokeObjectURL(wb), Yw.onmessage = bb => {
          const wb = bb.data,
            Mb = fw.get(wb.timerId);
          if (Mb) return fw.delete(wb.timerId), void Mb();
          const eb = Aw.get(wb.timerId);
          eb && eb()
        }, Yw
      },
      Nw = (bb, wb) => {
        if (Ww()) return {
          id: setInterval(bb, wb)
        };
        const Mb = Zw++;
        return Aw.set(Mb, (() => {
          bb()
        })), Sw().postMessage({
          type: "set-interval",
          timerId: Mb,
          delay: wb
        }), {
          id: Mb
        }
      },
      vw = bb => {
        Ww() ? clearInterval(bb.id) : (eb("number" === typeof bb.id), Aw.delete(bb.id), Sw().postMessage({
          type: "clear-interval",
          timerId: bb.id
        }))
      },
      Qw = bb => new Promise((wb => setTimeout(wb, bb))),
      Gw = bb => Array.isArray(bb) ? bb : [bb];
    class qw {
      constructor() {
        this._listeners = new Map
      }
      on(bb, wb, Mb) {
        this._listeners.has(bb) || this._listeners.set(bb, new Set);
        const eb = {
          kI: wb,
          once: Mb?.once ?? !1
        };
        return this._listeners.get(bb).add(eb), () => {
          this._listeners.get(bb)?.delete(eb)
        }
      }
      _emit() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        const [eb, Hb] = wb, pb = this._listeners.get(eb);
        if (pb)
          for (const gb of pb) {
            try {
              gb.kI(Hb)
            } catch (Vb) {
              console.error(Vb)
            }
            gb.once && pb.delete(gb)
          }
      }
    }
    const aw = bb => null !== bb && "object" === typeof bb && Object.getPrototypeOf(bb) === Object.prototype && Object.values(bb).every((bb => "string" === typeof bb))
  },
  41258: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => SM,
      f: () => NM,
      g: () => JM,
      i: () => AM,
      m: () => QM
    });
    var eb = Mb(41264),
      Hb = Mb(41281);
    var pb;
    ! function(bb) {
      bb[bb.FrameCount = 1] = "FrameCount", bb[bb.FileSize = 2] = "FileSize", bb[bb.Toc = 4] = "Toc"
    }(pb || (pb = {}));
    var Vb = Mb(41287),
      gb = Mb(41244);
    class lb {
      constructor(bb, wb, Mb, eb, Hb) {
        this.bytes = bb, this.view = wb, this.offset = Mb, this.start = eb, this.end = Hb, this.bufferPos = eb - Mb
      }
      static tempFromBytes(bb) {
        return new lb(bb, (0, gb.kd)(bb), 0, 0, bb.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(bb) {
        this.bufferPos = bb - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(bb) {
        this.bufferPos += bb
      }
      slice(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - bb;
        if (bb < this.start || bb + wb > this.end) throw new RangeError("Slicing outside of original slice.");
        return new lb(this.bytes, this.view, this.offset, bb, bb + wb)
      }
    }
    const Lb = (bb, wb) => {
        if (bb.filePos < bb.start || bb.filePos + wb > bb.end) throw new RangeError(`Tried reading [${bb.filePos}, ${bb.filePos+wb}), but slice is [${bb.start}, ${bb.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      Ib = (bb, wb) => {
        Lb(bb, wb);
        const Mb = bb.bytes.subarray(bb.bufferPos, bb.bufferPos + wb);
        return bb.bufferPos += wb, Mb
      };
    var Ob, Ub;
    ! function(bb) {
      bb[bb.Unsynchronisation = 128] = "Unsynchronisation", bb[bb.ExtendedHeader = 64] = "ExtendedHeader", bb[bb.ExperimentalIndicator = 32] = "ExperimentalIndicator", bb[bb.Footer = 16] = "Footer"
    }(Ob || (Ob = {})),
    function(bb) {
      bb[bb.ISO_8859_1 = 0] = "ISO_8859_1", bb[bb.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", bb[bb.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", bb[bb.UTF_8 = 3] = "UTF_8"
    }(Ub || (Ub = {}));
    var tb = Mb(41252);
    class Cb {
      constructor(bb) {
        this.mutex = new gb.d, this.trackTimestampInfo = new WeakMap, this.output = bb
      }
      onTrackClose(bb) {}
      validateTimestamp(bb, wb, Mb) {
        let eb = this.trackTimestampInfo.get(bb);
        if (eb) {
          if (Mb && (eb.maxTimestampBeforeLastKeyPacket = eb.maxTimestamp), null !== eb.maxTimestampBeforeLastKeyPacket && wb < eb.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${wb}s, but largest timestamp is ${eb.maxTimestampBeforeLastKeyPacket}s.`);
          eb.maxTimestamp = Math.max(eb.maxTimestamp, wb)
        } else {
          if (!Mb) throw new Error("First packet must be a key packet.");
          eb = {
            maxTimestamp: wb,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(bb, eb)
        }
      }
    }
    var Eb = Mb(41284),
      Fb = Mb(41273);
    var Bb = Mb(41303),
      sb = Mb(41296);
    class mb {
      constructor(bb) {
        this.writer = bb, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(bb) {
        this.helperView.setUint32(0, bb, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(bb) {
        this.helperView.setUint32(0, Math.floor(bb / 2 ** 32), !1), this.helperView.setUint32(4, bb, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(bb) {
        for (let wb = 0; wb < bb.length; wb++) this.helperView.setUint8(wb % 8, bb.charCodeAt(wb)), wb % 8 === 7 && this.writer.write(this.helper);
        bb.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, bb.length % 8))
      }
      writeBox(bb) {
        if (this.offsets.set(bb, this.writer.getPos()), bb.contents && !bb.children) this.writeBoxHeader(bb, bb.size ?? bb.contents.byteLength + 8), this.writer.write(bb.contents);
        else {
          const wb = this.writer.getPos();
          if (this.writeBoxHeader(bb, 0), bb.contents && this.writer.write(bb.contents), bb.children)
            for (const Hb of bb.children) Hb && this.writeBox(Hb);
          const Mb = this.writer.getPos(),
            eb = bb.size ?? Mb - wb;
          this.writer.seek(wb), this.writeBoxHeader(bb, eb), this.writer.seek(Mb)
        }
      }
      writeBoxHeader(bb, wb) {
        this.writeU32(bb.largeSize ? 1 : wb), this.writeAscii(bb.type), bb.largeSize && this.writeU64(wb)
      }
      measureBoxHeader(bb) {
        return 8 + (bb.largeSize ? 8 : 0)
      }
      patchBox(bb) {
        const wb = this.offsets.get(bb);
        (0, gb.L)(void 0 !== wb);
        const Mb = this.writer.getPos();
        this.writer.seek(wb), this.writeBox(bb), this.writer.seek(Mb)
      }
      measureBox(bb) {
        if (bb.contents && !bb.children) {
          return this.measureBoxHeader(bb) + bb.contents.byteLength
        } {
          let wb = this.measureBoxHeader(bb);
          if (bb.contents && (wb += bb.contents.byteLength), bb.children)
            for (const Mb of bb.children) Mb && (wb += this.measureBox(Mb));
          return wb
        }
      }
    }
    const hb = new Uint8Array(8),
      zb = new DataView(hb.buffer),
      Xb = bb => [(bb % 256 + 256) % 256],
      xb = bb => (zb.setUint16(0, bb, !1), [hb[0], hb[1]]),
      jb = bb => (zb.setInt16(0, bb, !1), [hb[0], hb[1]]),
      Kb = bb => (zb.setUint32(0, bb, !1), [hb[1], hb[2], hb[3]]),
      rb = bb => (zb.setUint32(0, bb, !1), [hb[0], hb[1], hb[2], hb[3]]),
      Rb = bb => (zb.setInt32(0, bb, !1), [hb[0], hb[1], hb[2], hb[3]]),
      Db = bb => (zb.setUint32(0, Math.floor(bb / 2 ** 32), !1), zb.setUint32(4, bb, !1), [hb[0], hb[1], hb[2], hb[3], hb[4], hb[5], hb[6], hb[7]]),
      cb = bb => (zb.setInt32(0, Math.floor(bb / 2 ** 32), !1), zb.setUint32(4, bb, !1), [hb[0], hb[1], hb[2], hb[3], hb[4], hb[5], hb[6], hb[7]]),
      Yb = bb => (zb.setInt16(0, 256 * bb, !1), [hb[0], hb[1]]),
      Zb = bb => (zb.setInt32(0, 65536 * bb, !1), [hb[0], hb[1], hb[2], hb[3]]),
      fb = bb => (zb.setInt32(0, 2 ** 30 * bb, !1), [hb[0], hb[1], hb[2], hb[3]]),
      Ab = (bb, wb) => {
        const Mb = [];
        let eb = bb;
        do {
          let bb = 127 & eb;
          eb >>= 7, Mb.length > 0 && (bb |= 128), Mb.push(bb), void 0 !== wb && wb--
        } while (eb > 0 || wb);
        return Mb.reverse()
      },
      Wb = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = Array(bb.length).fill(null).map(((wb, Mb) => bb.charCodeAt(Mb)));
        return wb && Mb.push(0), Mb
      },
      Jb = bb => [Zb(bb[0]), Zb(bb[1]), fb(bb[2]), Zb(bb[3]), Zb(bb[4]), fb(bb[5]), Zb(bb[6]), Zb(bb[7]), fb(bb[8])],
      Sb = (bb, wb, Mb) => ({
        type: bb,
        contents: wb && new Uint8Array(wb.flat(10)),
        children: Mb
      }),
      Nb = (bb, wb, Mb, eb, Hb) => Sb(bb, [Xb(wb), Kb(Mb), eb ?? []], Hb),
      vb = () => Sb("styp", [Wb("iso5"), rb(0), Wb("iso5"), Wb("iso6"), Wb("mp41"), Wb("cmfc"), Wb("dash")]),
      Qb = (bb, wb) => {
        const Mb = Math.max(0, bb.minWrittenTimestamp);
        let eb = Math.max(0, bb.maxWrittenEndTimestamp - Mb);
        return Number.isFinite(eb) || (eb = 0), Nb("sidx", 1, 0, [rb(1), rb(OM), Db(tM(Mb, OM)), Db(0), xb(0), xb(1), rb(2147483647 & wb), rb(tM(eb, OM)), rb(0)])
      },
      Gb = bb => ({
        type: "mdat",
        largeSize: bb
      }),
      qb = bb => Sb("moov", void 0, [ab(bb.creationTime, bb.trackDatas), ...bb.trackDatas.map((wb => ib(wb, bb.creationTime))), bb.isFragmented ? Zw(bb.trackDatas) : null, dw(bb)]),
      ab = (bb, wb) => {
        const Mb = Math.max(0, ...wb.map((bb => Math.max(0, tM(CM(bb), OM) + tM(bb.startTimestampOffset ?? 0, OM))))),
          eb = Math.max(0, ...wb.map((bb => bb.track.id))) + 1,
          Hb = !(0, gb.Wb)(bb) || !(0, gb.Wb)(Mb),
          pb = Hb ? Db : rb;
        return Nb("mvhd", +Hb, 0, [pb(bb), pb(bb), rb(OM), pb(Mb), Zb(1), Yb(1), Array(10).fill(0), Jb(gb.l), Array(24).fill(0), rb(eb)])
      },
      ib = (bb, wb) => {
        const Mb = UM(bb),
          eb = null !== bb.startTimestampOffset && 0 !== bb.startTimestampOffset;
        return Sb("trak", void 0, [ub(bb, wb), eb ? db(bb) : null, Pb(bb, wb), void 0 !== Mb.name ? Sb("udta", void 0, [Sb("name", [...gb.id.encode(Mb.name)])]) : null])
      },
      ub = (bb, wb) => {
        const Mb = Math.max(0, tM(CM(bb), OM) + tM(bb.startTimestampOffset ?? 0, OM)),
          eb = !(0, gb.Wb)(wb) || !(0, gb.Wb)(Mb),
          Hb = eb ? Db : rb;
        let pb;
        if ("video" === bb.type && bb.track.metadata.transformationMatrix) pb = bb.track.metadata.transformationMatrix;
        else if ("video" === bb.type) {
          const {
            rotation: wb,
            flip: Mb
          } = bb.track.metadata, eb = (0, gb.lc)((0, gb.Kc)(wb ?? 0), (0, gb.Tc)(Mb ? -1 : 1, 1));
          pb = (0, gb.W)(eb, bb.info.width, bb.info.height)
        } else pb = gb.l;
        let Vb = 2;
        !1 !== bb.track.metadata.disposition?.default && (Vb |= 1);
        const lb = "video" === bb.type ? 0 : "audio" === bb.type ? 1 : "subtitle" === bb.type ? 2 : (0, gb.H)(bb);
        return Nb("tkhd", +eb, Vb, [Hb(wb), Hb(wb), rb(bb.track.id), rb(0), Hb(Mb), Array(8).fill(0), xb(0), xb(lb), Yb("audio" === bb.type ? 1 : 0), xb(0), Jb(pb), Zb("video" === bb.type ? bb.info.width : 0), Zb("video" === bb.type ? bb.info.height : 0)])
      },
      db = bb => {
        const wb = bb.startTimestampOffset;
        if ((0, gb.L)(null !== wb), wb > 0) {
          const Mb = tM(wb, OM),
            eb = tM(CM(bb), OM),
            Hb = !(0, gb.Wb)(Mb) || !(0, gb.Wb)(eb),
            pb = Hb ? Db : rb,
            Vb = Hb ? cb : Rb;
          return Sb("edts", void 0, [Nb("elst", Hb ? 1 : 0, 0, [rb(2), pb(Mb), Vb(-1), Zb(1), pb(eb), Vb(0), Zb(1)])])
        } {
          const Mb = tM(-wb, bb.timescale),
            eb = Math.max(0, tM(CM(bb), OM) + tM(wb, OM)),
            Hb = !(0, gb.Nb)(Mb) || !(0, gb.Wb)(eb),
            pb = Hb ? Db : rb,
            Vb = Hb ? cb : Rb;
          return Sb("edts", void 0, [Nb("elst", Hb ? 1 : 0, 0, [rb(1), pb(eb), Vb(Mb), Zb(1)])])
        }
      },
      Pb = (bb, wb) => Sb("mdia", void 0, [nb(bb, wb), Tb(!0, yb[bb.type], ob[bb.type]), kb(bb)]),
      nb = (bb, wb) => {
        const Mb = tM(CM(bb), bb.timescale),
          eb = !(0, gb.Wb)(wb) || !(0, gb.Wb)(Mb),
          Hb = eb ? Db : rb;
        return Nb("mdhd", +eb, 0, [Hb(wb), Hb(wb), rb(bb.timescale), Hb(Mb), xb(gM(bb.track.metadata.languageCode ?? gb.z)), xb(0)])
      },
      yb = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      ob = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      Tb = function(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return Nb("hdlr", 0, 0, [bb ? Wb("mhlr") : rb(0), Wb(wb), Wb(eb), rb(0), rb(0), Wb(Mb, !0)])
      },
      kb = bb => Sb("minf", void 0, [bw[bb.type](), ww(), Hw(bb)]),
      bw = {
        video: () => Nb("vmhd", 0, 1, [xb(0), xb(0), xb(0), xb(0)]),
        audio: () => Nb("smhd", 0, 0, [xb(0), xb(0)]),
        subtitle: () => Nb("nmhd", 0, 0)
      },
      ww = () => Sb("dinf", void 0, [Mw()]),
      Mw = () => Nb("dref", 0, 0, [rb(1)], [ew()]),
      ew = () => Nb("url ", 0, 1),
      Hw = bb => {
        const wb = bb.compositionTimeOffsetTable.length > 1 || bb.compositionTimeOffsetTable.some((bb => 0 !== bb.sampleCompositionTimeOffset));
        return Sb("stbl", void 0, [pw(bb), xw(bb), wb ? Dw(bb) : null, wb ? Yw(bb) : null, Kw(bb), rw(bb), Rw(bb), jw(bb)])
      },
      pw = bb => {
        let wb;
        if ("video" === bb.type) wb = Vw(wM(bb.track.source._codec, bb.info.decoderConfig.codec), bb);
        else if ("audio" === bb.type) {
          const Mb = eM(bb.track.source._codec, bb.info.decoderConfig.codec, bb.muxer.isQuickTime);
          (0, gb.L)(Mb), wb = Ow(Mb, bb)
        } else "subtitle" === bb.type && (wb = Xw(pM[bb.track.source._codec], bb));
        return (0, gb.L)(wb), Nb("stsd", 0, 0, [rb(1)], [wb])
      },
      Vw = (bb, wb) => Sb(bb, [Array(6).fill(0), xb(1), xb(0), xb(0), Array(12).fill(0), xb(wb.info.width), xb(wb.info.height), rb(4718592), rb(4718592), rb(0), xb(1), Xb(sb.b.length), Wb(sb.b), Array(31 - sb.b.length).fill(0), xb(wb.info.hasAlphaChannel ? 32 : 24), jb(65535)], [MM[wb.track.source._codec]?.(wb) ?? null, lw(wb), (0, gb.fb)(wb.info.decoderConfig.colorSpace) ? null : Lw(wb), gw(wb)]),
      gw = bb => 0 === bb.avgBitrate && 0 === bb.maxBitrate ? null : Sb("btrt", [rb(0), rb(bb.maxBitrate), rb(bb.avgBitrate)]),
      lw = bb => bb.info.pixelAspectRatio.num === bb.info.pixelAspectRatio.den ? null : Sb("pasp", [rb(bb.info.pixelAspectRatio.num), rb(bb.info.pixelAspectRatio.den)]),
      Lw = bb => {
        const wb = bb.info.decoderConfig.colorSpace;
        return Sb("colr", [Wb(bb.muxer.isQuickTime ? "nclc" : "nclx"), xb(null != wb?.primaries ? gb.e[wb.primaries] : 2), xb(null != wb?.transfer ? gb.s[wb.transfer] : 2), xb(null != wb?.matrix ? gb.m[wb.matrix] : 2), bb.muxer.isQuickTime ? [] : Xb((wb?.fullRange ? 1 : 0) << 7)])
      },
      Iw = bb => {
        if (!bb.info.decoderConfig) return null;
        const wb = bb.info.decoderConfig,
          Mb = wb.codec.split("."),
          eb = Number(Mb[1]),
          Hb = Number(Mb[2]),
          pb = (Number(Mb[3]) << 4) + ((Mb[4] ? Number(Mb[4]) : 1) << 1) + (Mb[8] ? Number(Mb[8]) : Number(wb.colorSpace?.fullRange ?? 0)),
          Vb = Mb[5] ? Number(Mb[5]) : wb.colorSpace?.primaries ? gb.e[wb.colorSpace.primaries] : 1,
          lb = Mb[6] ? Number(Mb[6]) : wb.colorSpace?.transfer ? gb.s[wb.colorSpace.transfer] : 1,
          Lb = Mb[7] ? Number(Mb[7]) : wb.colorSpace?.matrix ? gb.m[wb.colorSpace.matrix] : 1;
        return Nb("vpcC", 1, 0, [Xb(eb), Xb(Hb), Xb(pb), Xb(Vb), Xb(lb), Xb(Lb), xb(0)])
      },
      Ow = (bb, wb) => {
        let Mb, eb = 0,
          pb = 16;
        const Vb = Hb.l.includes(wb.track.source._codec);
        if (Vb) {
          const bb = wb.track.source._codec,
            {
              sampleSize: Mb
            } = (0, Hb.N)(bb);
          pb = 8 * Mb, pb > 16 && (eb = 1)
        }
        if (wb.muxer.isQuickTime && (eb = 1), 0 === eb) Mb = [Array(6).fill(0), xb(1), xb(eb), xb(0), rb(0), xb(wb.info.numberOfChannels), xb(pb), xb(0), xb(0), xb(wb.info.sampleRate < 65536 ? wb.info.sampleRate : 0), xb(0)];
        else {
          const bb = Vb ? 0 : -2;
          Mb = [Array(6).fill(0), xb(1), xb(eb), xb(0), rb(0), xb(wb.info.numberOfChannels), xb(Math.min(pb, 16)), jb(bb), xb(0), xb(wb.info.sampleRate < 65536 ? wb.info.sampleRate : 0), xb(0), Vb ? [rb(1), rb(pb / 8), rb(wb.info.numberOfChannels * pb / 8)] : [rb(0), rb(0), rb(0)], rb(2)]
        }
        return Sb(bb, Mb, [HM(wb.track.source._codec, wb.muxer.isQuickTime)?.(wb) ?? null, gw(wb)])
      },
      Uw = bb => {
        let wb;
        switch (bb.track.source._codec) {
          case "aac":
            wb = 64;
            break;
          case "mp3":
            wb = 107;
            break;
          case "vorbis":
            wb = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${bb.track.source._codec}`)
        }
        let Mb = [...Xb(wb), ...Xb(21), ...Kb(0), ...rb(bb.maxBitrate), ...rb(bb.avgBitrate)];
        if (bb.info.decoderConfig.description) {
          const wb = (0, gb.od)(bb.info.decoderConfig.description);
          Mb = [...Mb, ...Xb(5), ...Ab(wb.byteLength), ...wb]
        }
        return Mb = [...xb(1), ...Xb(0), ...Xb(4), ...Ab(Mb.length), ...Mb, ...Xb(6), ...Xb(1), ...Xb(2)], Mb = [...Xb(3), ...Ab(Mb.length), ...Mb], Nb("esds", 0, 0, Mb)
      },
      tw = bb => Sb("wave", void 0, [Cw(bb), Ew(bb), Sb("\0\0\0\0")]),
      Cw = bb => Sb("frma", [Wb(eM(bb.track.source._codec, bb.info.decoderConfig.codec, bb.muxer.isQuickTime))]),
      Ew = bb => {
        const {
          littleEndian: wb
        } = (0, Hb.N)(bb.track.source._codec);
        return Sb("enda", [xb(+wb)])
      },
      Fw = bb => {
        let wb = bb.info.numberOfChannels,
          Mb = 3840,
          eb = bb.info.sampleRate,
          Hb = 0,
          pb = 0,
          Vb = new Uint8Array(0);
        const lb = bb.info.decoderConfig?.description;
        if (lb) {
          (0, gb.L)(lb.byteLength >= 18);
          const bb = (0, gb.od)(lb),
            Lb = (0, Eb.sb)(bb);
          wb = Lb.outputChannelCount, Mb = Lb.preSkip, eb = Lb.inputSampleRate, Hb = Lb.outputGain, pb = Lb.channelMappingFamily, Lb.channelMappingTable && (Vb = Lb.channelMappingTable)
        }
        return Sb("dOps", [Xb(0), Xb(wb), xb(Mb), rb(eb), jb(Hb), Xb(pb), ...Vb])
      },
      Bw = bb => {
        const wb = bb.info.decoderConfig?.description;
        (0, gb.L)(wb);
        const Mb = (0, gb.od)(wb);
        return Nb("dfLa", 0, 0, [...Mb.subarray(4)])
      },
      sw = bb => {
        const {
          littleEndian: wb,
          sampleSize: Mb
        } = (0, Hb.N)(bb.track.source._codec);
        return Nb("pcmC", 0, 0, [Xb(+wb), Xb(8 * Mb)])
      },
      mw = bb => {
        (0, gb.L)(bb.info.primingPacket);
        const wb = (0, Eb.gb)(bb.info.primingPacket.data);
        if (!wb) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const Mb = new Uint8Array(3),
          eb = new Fb.e(Mb);
        return eb.writeBits(2, wb.fscod), eb.writeBits(5, wb.bsid), eb.writeBits(3, wb.bsmod), eb.writeBits(3, wb.acmod), eb.writeBits(1, wb.lfeon), eb.writeBits(5, wb.bitRateCode), eb.writeBits(5, 0), Sb("dac3", [...Mb])
      },
      hw = bb => {
        (0, gb.L)(bb.info.primingPacket);
        const wb = (0, Eb.nb)(bb.info.primingPacket.data);
        if (!wb) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let Mb = 16;
        for (const Vb of wb.substreams) Mb += 23, Vb.numDepSub > 0 ? Mb += 9 : Mb += 1;
        const eb = Math.ceil(Mb / 8),
          Hb = new Uint8Array(eb),
          pb = new Fb.e(Hb);
        pb.writeBits(13, wb.dataRate), pb.writeBits(3, wb.substreams.length - 1);
        for (const Vb of wb.substreams) pb.writeBits(2, Vb.fscod), pb.writeBits(5, Vb.bsid), pb.writeBits(1, 0), pb.writeBits(1, 0), pb.writeBits(3, Vb.bsmod), pb.writeBits(3, Vb.acmod), pb.writeBits(1, Vb.lfeon), pb.writeBits(3, 0), pb.writeBits(4, Vb.numDepSub), Vb.numDepSub > 0 ? pb.writeBits(9, Vb.chanLoc) : pb.writeBits(1, 0);
        return Sb("dec3", [...Hb])
      },
      zw = bb => {
        (0, gb.L)(bb.info.primingPacket);
        const wb = (0, Eb.jb)(bb.info.primingPacket.data);
        if (!wb) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return Sb("ddts", [...(0, Eb.s)(wb)])
      },
      Xw = (bb, wb) => Sb(bb, [Array(6).fill(0), xb(1)], [VM[wb.track.source._codec](wb), gw(wb)]),
      xw = bb => Nb("stts", 0, 0, [rb(bb.timeToSampleTable.length), bb.timeToSampleTable.map((bb => [rb(bb.sampleCount), rb(bb.sampleDelta)]))]),
      jw = bb => {
        if (bb.samples.every((bb => "key" === bb.type))) return null;
        const wb = [...bb.samples.entries()].filter((bb => {
          let [, wb] = bb;
          return "key" === wb.type
        }));
        return Nb("stss", 0, 0, [rb(wb.length), wb.map((bb => {
          let [wb] = bb;
          return rb(wb + 1)
        }))])
      },
      Kw = bb => Nb("stsc", 0, 0, [rb(bb.compactlyCodedChunkTable.length), bb.compactlyCodedChunkTable.map((bb => [rb(bb.firstChunk), rb(bb.samplesPerChunk), rb(1)]))]),
      rw = bb => {
        if ("audio" === bb.type && bb.info.requiresPcmTransformation) {
          const {
            sampleSize: wb
          } = (0, Hb.N)(bb.track.source._codec);
          return Nb("stsz", 0, 0, [rb(wb * bb.info.numberOfChannels), rb(bb.samples.reduce(((wb, Mb) => wb + tM(Mb.duration, bb.timescale)), 0))])
        }
        return Nb("stsz", 0, 0, [rb(0), rb(bb.samples.length), bb.samples.map((bb => rb(bb.size)))])
      },
      Rw = bb => bb.finalizedChunks.length > 0 && (0, gb.ac)(bb.finalizedChunks).offset >= 2 ** 32 ? Nb("co64", 0, 0, [rb(bb.finalizedChunks.length), bb.finalizedChunks.map((bb => Db(bb.offset)))]) : Nb("stco", 0, 0, [rb(bb.finalizedChunks.length), bb.finalizedChunks.map((bb => rb(bb.offset)))]),
      Dw = bb => Nb("ctts", 1, 0, [rb(bb.compositionTimeOffsetTable.length), bb.compositionTimeOffsetTable.map((bb => [rb(bb.sampleCount), Rb(bb.sampleCompositionTimeOffset)]))]),
      Yw = bb => {
        let wb = 1 / 0,
          Mb = -1 / 0,
          eb = 1 / 0,
          Hb = -1 / 0;
        (0, gb.L)(bb.compositionTimeOffsetTable.length > 0), (0, gb.L)(bb.samples.length > 0);
        for (let Vb = 0; Vb < bb.compositionTimeOffsetTable.length; Vb++) {
          const eb = bb.compositionTimeOffsetTable[Vb];
          wb = Math.min(wb, eb.sampleCompositionTimeOffset), Mb = Math.max(Mb, eb.sampleCompositionTimeOffset)
        }
        for (let Vb = 0; Vb < bb.samples.length; Vb++) {
          const wb = bb.samples[Vb];
          eb = Math.min(eb, tM(wb.timestamp, bb.timescale)), Hb = Math.max(Hb, tM(wb.timestamp + wb.duration, bb.timescale))
        }
        const pb = Math.max(-wb, 0);
        return Hb >= 2 ** 31 ? null : Nb("cslg", 0, 0, [Rb(pb), Rb(wb), Rb(Mb), Rb(eb), Rb(Hb)])
      },
      Zw = bb => Sb("mvex", void 0, bb.map(fw)),
      fw = bb => Nb("trex", 0, 0, [rb(bb.track.id), rb(1), rb(0), rb(0), rb(0)]),
      Aw = (bb, wb) => Sb("moof", void 0, [Ww(bb), ...wb.map(Sw)]),
      Ww = bb => Nb("mfhd", 0, 0, [rb(bb)]),
      Jw = bb => {
        let wb = 0,
          Mb = 0;
        const eb = "delta" === bb.type;
        return Mb |= +eb, wb |= eb ? 1 : 2, wb << 24 | Mb << 16
      },
      Sw = bb => Sb("traf", void 0, [Nw(bb), vw(bb), Qw(bb)]),
      Nw = bb => {
        (0, gb.L)(bb.currentChunk);
        let wb = 0;
        wb |= 8, wb |= 16, wb |= 32, wb |= 131072;
        const Mb = bb.currentChunk.samples[1] ?? bb.currentChunk.samples[0],
          eb = {
            duration: Mb.timescaleUnitsToNextSample,
            size: Mb.size,
            flags: Jw(Mb)
          };
        return Nb("tfhd", 0, 131128, [rb(bb.track.id), rb(eb.duration), rb(eb.size), rb(eb.flags)])
      },
      vw = bb => ((0, gb.L)(bb.currentChunk), Nb("tfdt", 1, 0, [Db(tM(bb.currentChunk.startTimestamp, bb.timescale))])),
      Qw = bb => {
        (0, gb.L)(bb.currentChunk);
        const wb = bb.currentChunk.samples.map((bb => bb.timescaleUnitsToNextSample)),
          Mb = bb.currentChunk.samples.map((bb => bb.size)),
          eb = bb.currentChunk.samples.map(Jw),
          Hb = bb.currentChunk.samples.map((wb => tM(wb.timestamp - wb.decodeTimestamp, bb.timescale))),
          pb = new Set(wb),
          Vb = new Set(Mb),
          lb = new Set(eb),
          Lb = new Set(Hb),
          Ib = 2 === lb.size && eb[0] !== eb[1],
          Ob = pb.size > 1,
          Ub = Vb.size > 1,
          tb = !Ib && lb.size > 1,
          Cb = Lb.size > 1 || [...Lb].some((bb => 0 !== bb));
        let Eb = 0;
        return Eb |= 1, Eb |= 4 * +Ib, Eb |= 256 * +Ob, Eb |= 512 * +Ub, Eb |= 1024 * +tb, Eb |= 2048 * +Cb, Nb("trun", 1, Eb, [rb(bb.currentChunk.samples.length), rb(bb.currentChunk.offset - bb.currentChunk.moofOffset || 0), Ib ? rb(eb[0]) : [], bb.currentChunk.samples.map(((bb, pb) => [Ob ? rb(wb[pb]) : [], Ub ? rb(Mb[pb]) : [], tb ? rb(eb[pb]) : [], Cb ? Rb(Hb[pb]) : []]))])
      },
      Gw = bb => Nb("tfra", 1, 0, [rb(bb.track.id), rb(63), rb(bb.finalizedChunks.length), bb.finalizedChunks.map((wb => [Db(tM(wb.samples[0].timestamp, bb.timescale)), Db(wb.moofOffset), rb(wb.trafIndex + 1), rb(1), rb(1)]))]),
      qw = () => Nb("mfro", 0, 0, [rb(0)]),
      aw = () => Sb("vtte"),
      iw = (bb, wb, Mb, eb, Hb) => Sb("vttc", void 0, [null !== Hb ? Sb("vsid", [Rb(Hb)]) : null, null !== Mb ? Sb("iden", [...gb.id.encode(Mb)]) : null, null !== wb ? Sb("ctim", [...gb.id.encode((0, Bb.h)(wb))]) : null, null !== eb ? Sb("sttg", [...gb.id.encode(eb)]) : null, Sb("payl", [...gb.id.encode(bb)])]),
      uw = bb => Sb("vtta", [...gb.id.encode(bb)]),
      dw = bb => {
        const wb = [],
          Mb = bb.format._options.metadataFormat ?? "auto",
          eb = bb.output._metadataTags;
        if ("mdir" === Mb || "auto" === Mb && !bb.isQuickTime) {
          const bb = Tw(eb);
          bb && wb.push(bb)
        } else if ("mdta" === Mb) {
          const bb = kw(eb);
          bb && wb.push(bb)
        } else("udta" === Mb || "auto" === Mb && bb.isQuickTime) && Pw(wb, bb.output._metadataTags);
        return 0 === wb.length ? null : Sb("udta", void 0, wb)
      },
      Pw = (bb, wb) => {
        for (const {
            key: Mb,
            value: eb
          }
          of(0, gb._b)(wb)) switch (Mb) {
          case "title":
            bb.push(nw("\xa9nam", eb));
            break;
          case "description":
            bb.push(nw("\xa9des", eb));
            break;
          case "artist":
            bb.push(nw("\xa9ART", eb));
            break;
          case "album":
            bb.push(nw("\xa9alb", eb));
            break;
          case "albumArtist":
            bb.push(nw("albr", eb));
            break;
          case "genre":
            bb.push(nw("\xa9gen", eb));
            break;
          case "date":
            bb.push(nw("\xa9day", eb.toISOString().slice(0, 10)));
            break;
          case "comment":
            bb.push(nw("\xa9cmt", eb));
            break;
          case "lyrics":
            bb.push(nw("\xa9lyr", eb));
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
            (0, gb.H)(Mb)
        }
        if (wb.raw)
          for (const Mb in wb.raw) {
            const eb = wb.raw[Mb];
            null == eb || 4 !== Mb.length || bb.some((bb => bb.type === Mb)) || ("string" === typeof eb ? bb.push(nw(Mb, eb)) : eb instanceof Uint8Array && bb.push(Sb(Mb, Array.from(eb))))
          }
      },
      nw = (bb, wb) => {
        const Mb = gb.id.encode(wb);
        return Sb(bb, [xb(Mb.length), xb(gM("und")), Array.from(Mb)])
      },
      yw = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      ow = (bb, wb) => {
        const Mb = [];
        for (const {
            key: eb,
            value: Hb
          }
          of(0, gb._b)(bb)) switch (eb) {
          case "title":
            Mb.push({
              key: wb ? "title" : "\xa9nam",
              value: bM(Hb)
            });
            break;
          case "description":
            Mb.push({
              key: wb ? "description" : "\xa9des",
              value: bM(Hb)
            });
            break;
          case "artist":
            Mb.push({
              key: wb ? "artist" : "\xa9ART",
              value: bM(Hb)
            });
            break;
          case "album":
            Mb.push({
              key: wb ? "album" : "\xa9alb",
              value: bM(Hb)
            });
            break;
          case "albumArtist":
            Mb.push({
              key: wb ? "album_artist" : "aART",
              value: bM(Hb)
            });
            break;
          case "comment":
            Mb.push({
              key: wb ? "comment" : "\xa9cmt",
              value: bM(Hb)
            });
            break;
          case "genre":
            Mb.push({
              key: wb ? "genre" : "\xa9gen",
              value: bM(Hb)
            });
            break;
          case "beatsPerMinute":
            wb || Mb.push({
              key: "tmpo",
              value: Sb("data", [rb(21), rb(0), xb(Hb)])
            });
            break;
          case "lyrics":
            Mb.push({
              key: wb ? "lyrics" : "\xa9lyr",
              value: bM(Hb)
            });
            break;
          case "date":
            Mb.push({
              key: wb ? "date" : "\xa9day",
              value: bM(Hb.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const bb of Hb) "coverFront" === bb.kind && Mb.push({
              key: "covr",
              value: Sb("data", [rb(yw[bb.mimeType] ?? 0), rb(0), Array.from(bb.data)])
            });
            break;
          case "trackNumber":
            if (wb) {
              const wb = void 0 !== bb.tracksTotal ? `${Hb}/${bb.tracksTotal}` : Hb.toString();
              Mb.push({
                key: "track",
                value: bM(wb)
              })
            } else Mb.push({
              key: "trkn",
              value: Sb("data", [rb(0), rb(0), xb(0), xb(Hb), xb(bb.tracksTotal ?? 0), xb(0)])
            });
            break;
          case "discNumber":
            wb || Mb.push({
              key: "disc",
              value: Sb("data", [rb(0), rb(0), xb(0), xb(Hb), xb(bb.discsTotal ?? 0), xb(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, gb.H)(eb)
        }
        if (bb.raw)
          for (const eb in bb.raw) {
            const Hb = bb.raw[eb];
            null == Hb || !wb && 4 !== eb.length || Mb.some((bb => bb.key === eb)) || ("string" === typeof Hb ? Mb.push({
              key: eb,
              value: bM(Hb)
            }) : Hb instanceof Uint8Array ? Mb.push({
              key: eb,
              value: Sb("data", [rb(0), rb(0), Array.from(Hb)])
            }) : Hb instanceof tb.f && Mb.push({
              key: eb,
              value: Sb("data", [rb(yw[Hb.mimeType] ?? 0), rb(0), Array.from(Hb.data)])
            }))
          }
        return Mb
      },
      Tw = bb => {
        const wb = ow(bb, !1);
        return 0 === wb.length ? null : Nb("meta", 0, 0, void 0, [Tb(!1, "mdir", "", "appl"), Sb("ilst", void 0, wb.map((bb => Sb(bb.key, void 0, [bb.value]))))])
      },
      kw = bb => {
        const wb = ow(bb, !0);
        return 0 === wb.length ? null : Sb("meta", void 0, [Tb(!1, "mdta", ""), Nb("keys", 0, 0, [rb(wb.length)], wb.map((bb => Sb("mdta", [...gb.id.encode(bb.key)])))), Sb("ilst", void 0, wb.map(((bb, wb) => {
          const Mb = String.fromCharCode(...rb(wb + 1));
          return Sb(Mb, void 0, [bb.value])
        })))])
      },
      bM = bb => Sb("data", [rb(1), rb(0), ...gb.id.encode(bb)]),
      wM = (bb, wb) => {
        switch (bb) {
          case "avc":
            return wb.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return wb
        }
      },
      MM = {
        avc: bb => bb.info.decoderConfig && Sb("avcC", [...(0, gb.od)(bb.info.decoderConfig.description)]),
        hevc: bb => bb.info.decoderConfig && Sb("hvcC", [...(0, gb.od)(bb.info.decoderConfig.description)]),
        vp8: Iw,
        vp9: Iw,
        av1: bb => Sb("av1C", (0, Hb.z)(bb.info.decoderConfig.codec)),
        prores: null
      },
      eM = (bb, wb, Mb) => {
        switch (bb) {
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
            return wb
        }
        if (Mb) switch (bb) {
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
        } else switch (bb) {
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
      HM = (bb, wb) => {
        switch (bb) {
          case "aac":
          case "mp3":
          case "vorbis":
            return Uw;
          case "opus":
            return Fw;
          case "flac":
            return Bw;
          case "ac3":
            return mw;
          case "eac3":
            return hw;
          case "dts":
            return zw
        }
        if (wb) switch (bb) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return tw
        } else switch (bb) {
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
            return sw
        }
        return null
      },
      pM = {
        webvtt: "wvtt"
      },
      VM = {
        webvtt: bb => Sb("vttC", [...gb.id.encode(bb.info.config.description)])
      },
      gM = bb => {
        (0, gb.L)(3 === bb.length);
        let wb = 0;
        for (let Mb = 0; Mb < 3; Mb++) wb <<= 5, wb += bb.charCodeAt(Mb) - 96;
        return wb
      };
    var lM = Mb(41312),
      LM = Mb(41316);
    const IM = bb => {
        const wb = bb.filePos,
          Mb = Ib(bb, 9),
          eb = new Fb.e(Mb);
        if (4095 !== eb.readBits(12)) return null;
        eb.skipBits(1);
        if (0 !== eb.readBits(2)) return null;
        const Hb = eb.readBits(1),
          pb = eb.readBits(2) + 1,
          Vb = eb.readBits(4);
        if (15 === Vb) return null;
        eb.skipBits(1);
        const gb = eb.readBits(3);
        if (0 === gb) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        eb.skipBits(1), eb.skipBits(1), eb.skipBits(1), eb.skipBits(1);
        const lb = eb.readBits(13);
        eb.skipBits(11);
        const Lb = eb.readBits(2) + 1;
        if (1 !== Lb) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let Ob = null;
        return 1 === Hb ? bb.filePos -= 2 : Ob = eb.readBits(16), {
          objectType: pb,
          samplingFrequencyIndex: Vb,
          channelConfiguration: gb,
          frameLength: lb,
          numberOfAacFrames: Lb,
          crcCheck: Ob,
          startPos: wb
        }
      },
      OM = 57600,
      UM = bb => {
        const wb = {},
          Mb = bb.track;
        return void 0 !== Mb.metadata.name && (wb.name = Mb.metadata.name), wb
      },
      tM = function(bb, wb) {
        const Mb = bb * wb;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(Mb) : Mb
      },
      CM = bb => {
        if (0 === bb.samples.length) return 0;
        let wb = 1 / 0,
          Mb = -1 / 0;
        for (let eb = 0; eb < bb.samples.length; eb++) {
          const Hb = bb.samples[eb];
          Hb.timestamp < wb && (wb = Hb.timestamp), Hb.timestamp + Hb.duration > Mb && (Mb = Hb.timestamp + Hb.duration)
        }
        return wb === 1 / 0 ? 0 : Mb - wb
      };
    class EM extends Cb {
      constructor(bb, wb) {
        super(bb), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new LM.b, this.auxWriter = new lM.b(this.auxTarget, !1), this.auxBoxWriter = new mb(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, gb.vc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = wb, this.formatOptions = {
          ...wb._options
        }, this.isQuickTime = wb instanceof NM, this.isCmaf = wb instanceof SM, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (wb instanceof SM ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const bb = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((bb => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : bb instanceof LM.b)), this.boxWriter = new mb(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof LM.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const bb = await this.output._getInitTarget(),
            wb = new lM.b(bb, !0);
          wb.start(), this.initWriter = wb, this.initBoxWriter = new mb(wb)
        }
        const wb = this.output.tracks.some((bb => bb.isVideoTrack() && "avc" === bb.source._codec));
        {
          const bb = this.initBoxWriter ?? this.boxWriter;
          if ((0, gb.L)(bb), this.formatOptions.onFtyp && bb.writer.startTrackingWrites(), bb.writeBox((bb => {
              const wb = 512;
              return bb.isQuickTime ? Sb("ftyp", [Wb("qt  "), rb(wb), Wb("qt  ")]) : bb.fragmented ? bb.cmaf ? Sb("ftyp", [Wb("iso5"), rb(wb), Wb("iso5"), Wb("iso6"), Wb("mp41"), Wb("cmfc"), Wb("dash")]) : Sb("ftyp", [Wb("iso5"), rb(wb), Wb("iso5"), Wb("iso6"), Wb("mp41")]) : Sb("ftyp", [Wb("isom"), rb(wb), Wb("isom"), bb.holdsAvc ? Wb("avc1") : [], Wb("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: wb,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: wb,
              start: Mb
            } = bb.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(wb, Mb)
          }
          this.ftypSize = bb.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const Mb of this.output.tracks)
            if (void 0 === Mb.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, gb.L)(this.writer), (0, gb.L)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = Gb(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const Mb of this.output.tracks) Mb.isVideoTrack() && Mb.metadata.decoderConfig ? this.getVideoTrackData(Mb, Mb.metadata.primingPacket ?? null, {
          decoderConfig: Mb.metadata.decoderConfig
        }) : Mb.isAudioTrack() && Mb.metadata.decoderConfig && this.getAudioTrackData(Mb, Mb.metadata.primingPacket ?? null, {
          decoderConfig: Mb.metadata.decoderConfig
        });
        bb()
      }
      allTracksAreKnown() {
        for (const bb of this.output.tracks)
          if (!bb.source._closed && !this.trackDatas.some((wb => wb.track === bb))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const bb = this.trackDatas.map((bb => {
          if ("video" === bb.type) return bb.info.decoderConfig.codec;
          if ("audio" === bb.type) return bb.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [bb.track.source._codec]
        }));
        return (bb => {
          let wb = (bb.hasVideo ? "video/" : bb.hasAudio ? "audio/" : "application/") + (bb.isQuickTime ? "quicktime" : "mp4");
          bb.codecStrings.length > 0 && (wb += `; codecs="${[...new Set(bb.codecStrings)].join(", ")}"`);
          return wb
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((bb => "video" === bb.type)),
          hasAudio: this.trackDatas.some((bb => "audio" === bb.type)),
          codecStrings: bb
        })
      }
      getVideoTrackData(bb, wb, Mb) {
        const eb = this.trackDatas.find((wb => wb.track === bb));
        if (eb) return eb;
        (0, Hb.T)(Mb, bb.source._codec), (0, gb.L)(Mb), (0, gb.L)(Mb.decoderConfig);
        const pb = {
          ...Mb.decoderConfig
        };
        (0, gb.L)(void 0 !== pb.codedWidth), (0, gb.L)(void 0 !== pb.codedHeight);
        let Vb = !1;
        if ("avc" !== bb.source._codec || pb.description) {
          if ("hevc" === bb.source._codec && !pb.description) {
            if (!wb) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const bb = (0, Eb.S)(wb.data);
            if (!bb) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            pb.description = (0, Eb.yb)(bb), Vb = !0
          }
        } else {
          if (!wb) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const bb = (0, Eb.M)(wb.data);
          if (!bb) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          pb.description = (0, Eb.xb)(bb), Vb = !0
        }
        const lb = (0, gb.ib)(1 / (bb.metadata.frameRate ?? OM), 1e6).den,
          Lb = pb.displayAspectWidth,
          Ib = pb.displayAspectHeight,
          Ob = void 0 === Lb || void 0 === Ib ? {
            num: 1,
            den: 1
          } : (0, gb.fd)({
            num: Lb * pb.codedHeight,
            den: Ib * pb.codedWidth
          }),
          Ub = "ap4h" === pb.codec || "ap4x" === pb.codec,
          tb = {
            muxer: this,
            track: bb,
            type: "video",
            info: {
              width: pb.codedWidth,
              height: pb.codedHeight,
              pixelAspectRatio: Ob,
              decoderConfig: pb,
              requiresAnnexBTransformation: Vb,
              hasAlphaChannel: Ub
            },
            timescale: lb,
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
            avgBitrate: bb.source._nominalBitrate ?? bb.metadata.averageBitrate ?? 0,
            maxBitrate: bb.source._nominalBitrate ?? bb.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(tb), this.trackDatas.sort(((bb, wb) => bb.track.id - wb.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), tb
      }
      getAudioTrackData(bb, wb, Mb) {
        const pb = this.trackDatas.find((wb => wb.track === bb));
        if (pb) return pb;
        (0, Hb.P)(Mb, bb.source._codec), (0, gb.L)(Mb), (0, gb.L)(Mb.decoderConfig);
        const Vb = {
          ...Mb.decoderConfig
        };
        let Lb = !1;
        if ("aac" === bb.source._codec && !Vb.description) {
          if (!wb) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const bb = IM(lb.tempFromBytes(wb.data));
          if (!bb) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const Mb = eb.g[bb.samplingFrequencyIndex],
            Hb = eb.e[bb.channelConfiguration];
          if (void 0 === Mb || void 0 === Hb) throw new Error("Invalid ADTS frame header.");
          Vb.description = (0, eb.h)({
            objectType: bb.objectType,
            outputSampleRate: Mb,
            outputNumberOfChannels: Hb
          }), Lb = !0
        }
        if (!wb) {
          if ("ac3" === bb.source._codec || "eac3" === bb.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === bb.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const Ib = {
          muxer: this,
          track: bb,
          type: "audio",
          info: {
            numberOfChannels: Mb.decoderConfig.numberOfChannels,
            sampleRate: Mb.decoderConfig.sampleRate,
            decoderConfig: Vb,
            requiresPcmTransformation: !this.isFragmented && Hb.l.includes(bb.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: Lb,
            primingPacket: wb
          },
          timescale: Vb.sampleRate,
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
          avgBitrate: bb.source._nominalBitrate ?? bb.metadata.averageBitrate ?? 0,
          maxBitrate: bb.source._nominalBitrate ?? bb.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(Ib), this.trackDatas.sort(((bb, wb) => bb.track.id - wb.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Ib
      }
      getSubtitleTrackData(bb, wb) {
        const Mb = this.trackDatas.find((wb => wb.track === bb));
        if (Mb) return Mb;
        (0, Hb.R)(wb), (0, gb.L)(wb), (0, gb.L)(wb.config);
        const eb = {
          muxer: this,
          track: bb,
          type: "subtitle",
          info: {
            config: wb.config
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
          avgBitrate: bb.source._nominalBitrate ?? bb.metadata.averageBitrate ?? 0,
          maxBitrate: bb.source._nominalBitrate ?? bb.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(eb), this.trackDatas.sort(((bb, wb) => bb.track.id - wb.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), eb
      }
      async addEncodedVideoPacket(bb, wb, Mb) {
        const eb = await this.mutex.acquire();
        try {
          const eb = this.getVideoTrackData(bb, wb, Mb);
          let Hb = wb.data;
          if (eb.info.requiresAnnexBTransformation) {
            const bb = [...(0, Eb.bb)(Hb)].map((bb => Hb.subarray(bb.offset, bb.offset + bb.length)));
            if (0 === bb.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            Hb = (0, Eb.x)(bb, 4)
          }
          this.validateTimestamp(eb.track, wb.timestamp, "key" === wb.type);
          const pb = this.createSampleForTrack(eb, Hb, wb.timestamp, wb.duration, wb.type);
          await this.registerSample(eb, pb)
        } finally {
          eb()
        }
      }
      async addEncodedAudioPacket(bb, wb, Mb) {
        const eb = await this.mutex.acquire();
        try {
          const eb = this.getAudioTrackData(bb, wb, Mb);
          let pb = wb.data;
          if (eb.info.requiresAdtsStripping) {
            const bb = IM(lb.tempFromBytes(pb));
            if (!bb) throw new Error("Expected ADTS frame, didn't get one.");
            const wb = null === bb.crcCheck ? 7 : 9;
            pb = pb.subarray(wb)
          }
          this.validateTimestamp(eb.track, wb.timestamp, "key" === wb.type);
          let Vb = wb.timestamp,
            gb = wb.duration;
          if (eb.info.requiresPcmTransformation) {
            const bb = (0, Hb.N)(eb.info.decoderConfig.codec).sampleSize * eb.info.numberOfChannels;
            if (gb = pb.byteLength / bb / eb.info.sampleRate, null !== eb.info.expectedNextPcmPacketTimestamp) {
              const bb = Vb - eb.info.expectedNextPcmPacketTimestamp;
              if (bb < .01) Vb = eb.info.expectedNextPcmPacketTimestamp;
              else {
                const wb = await this.padWithSilence(eb, eb.info.expectedNextPcmPacketTimestamp, bb);
                Vb = eb.info.expectedNextPcmPacketTimestamp + wb
              }
            }
            eb.info.expectedNextPcmPacketTimestamp = Vb + gb
          }
          const Lb = this.createSampleForTrack(eb, pb, Vb, gb, wb.type);
          await this.registerSample(eb, Lb)
        } finally {
          eb()
        }
      }
      async padWithSilence(bb, wb, Mb) {
        const eb = tM(Mb, bb.timescale);
        if (Mb = eb / bb.timescale, eb > 0) {
          const {
            sampleSize: pb,
            silentValue: Vb
          } = (0, Hb.N)(bb.info.decoderConfig.codec), gb = eb * bb.info.numberOfChannels, lb = new Uint8Array(pb * gb).fill(Vb), Lb = this.createSampleForTrack(bb, new Uint8Array(lb.buffer), wb, Mb, "key");
          await this.registerSample(bb, Lb)
        }
        return Mb
      }
      async addSubtitleCue(bb, wb, Mb) {
        const eb = await this.mutex.acquire();
        try {
          const eb = this.getSubtitleTrackData(bb, Mb);
          this.validateTimestamp(eb.track, wb.timestamp, !0), "webvtt" === bb.source._codec && (eb.cueQueue.push(wb), await this.processWebVTTCues(eb, wb.timestamp))
        } finally {
          eb()
        }
      }
      async processWebVTTCues(bb, wb) {
        for (; bb.cueQueue.length > 0;) {
          bb.lastCueEndTimestamp ??= Math.min(0, bb.cueQueue[0].timestamp);
          const Mb = new Set([]);
          for (const Lb of bb.cueQueue)(0, gb.L)(Lb.timestamp <= wb), (0, gb.L)(bb.lastCueEndTimestamp <= Lb.timestamp + Lb.duration), Mb.add(Math.max(Lb.timestamp, bb.lastCueEndTimestamp)), Mb.add(Lb.timestamp + Lb.duration);
          const eb = [...Mb].sort(((bb, wb) => bb - wb)),
            Hb = eb[0],
            pb = eb[1] ?? Hb;
          if (wb < pb) break;
          if (bb.lastCueEndTimestamp < Hb) {
            this.auxWriter.seek(0);
            const wb = aw();
            this.auxBoxWriter.writeBox(wb);
            const Mb = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              eb = this.createSampleForTrack(bb, Mb, bb.lastCueEndTimestamp, Hb - bb.lastCueEndTimestamp, "key");
            await this.registerSample(bb, eb), bb.lastCueEndTimestamp = Hb
          }
          this.auxWriter.seek(0);
          for (let wb = 0; wb < bb.cueQueue.length; wb++) {
            const Mb = bb.cueQueue[wb];
            if (Mb.timestamp >= pb) break;
            Bb.i.lastIndex = 0;
            const eb = Bb.i.test(Mb.text),
              Vb = Mb.timestamp + Mb.duration;
            let gb = bb.cueToSourceId.get(Mb);
            if (void 0 === gb && pb < Vb && (gb = bb.nextSourceId++, bb.cueToSourceId.set(Mb, gb)), Mb.notes) {
              const bb = uw(Mb.notes);
              this.auxBoxWriter.writeBox(bb)
            }
            const lb = iw(Mb.text, eb ? Hb : null, Mb.identifier ?? null, Mb.settings ?? null, gb ?? null);
            this.auxBoxWriter.writeBox(lb), Vb === pb && bb.cueQueue.splice(wb--, 1)
          }
          const Vb = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            lb = this.createSampleForTrack(bb, Vb, Hb, pb - Hb, "key");
          await this.registerSample(bb, lb), bb.lastCueEndTimestamp = pb
        }
      }
      createSampleForTrack(bb, wb, Mb, eb, Hb) {
        return {
          timestamp: Mb,
          decodeTimestamp: Mb,
          duration: eb,
          data: wb,
          size: wb.byteLength,
          type: Hb,
          timescaleUnitsToNextSample: tM(eb, bb.timescale)
        }
      }
      processTimestamps(bb, wb) {
        if (0 === bb.timestampProcessingQueue.length) return;
        if ("audio" === bb.type && bb.info.requiresPcmTransformation) {
          (0, gb.L)(!this.isFragmented), bb.startTimestampOffset ??= bb.timestampProcessingQueue[0].timestamp;
          let wb = 0;
          for (let Mb = 0; Mb < bb.timestampProcessingQueue.length; Mb++) {
            const eb = bb.timestampProcessingQueue[Mb];
            wb += tM(eb.duration, bb.timescale)
          }
          if (0 === bb.timeToSampleTable.length) bb.timeToSampleTable.push({
            sampleCount: wb,
            sampleDelta: 1
          });
          else {
            (0, gb.ac)(bb.timeToSampleTable).sampleCount += wb
          }
          return void(bb.timestampProcessingQueue.length = 0)
        }
        const Mb = bb.timestampProcessingQueue.map((bb => bb.timestamp)).sort(((bb, wb) => bb - wb));
        this.isFragmented ? bb.startTimestampOffset ??= Math.min(Mb[0], 0) : bb.startTimestampOffset ??= Mb[0];
        for (let eb = 0; eb < bb.timestampProcessingQueue.length; eb++) {
          const wb = bb.timestampProcessingQueue[eb];
          wb.decodeTimestamp = Mb[eb];
          const Hb = tM(wb.timestamp - wb.decodeTimestamp, bb.timescale),
            pb = tM(wb.duration, bb.timescale);
          if (null !== bb.lastTimescaleUnits) {
            (0, gb.L)(bb.lastSample);
            const Mb = tM(wb.decodeTimestamp, bb.timescale, !1),
              eb = Math.round(Mb - bb.lastTimescaleUnits);
            if ((0, gb.L)(eb >= 0), bb.lastTimescaleUnits += eb, bb.lastSample.timescaleUnitsToNextSample = eb, !this.isFragmented) {
              let wb = (0, gb.ac)(bb.timeToSampleTable);
              if ((0, gb.L)(wb), 1 === wb.sampleCount) {
                wb.sampleDelta = eb;
                const Mb = bb.timeToSampleTable[bb.timeToSampleTable.length - 2];
                Mb && Mb.sampleDelta === eb && (Mb.sampleCount++, bb.timeToSampleTable.pop(), wb = Mb)
              } else wb.sampleDelta !== eb && (wb.sampleCount--, bb.timeToSampleTable.push(wb = {
                sampleCount: 1,
                sampleDelta: eb
              }));
              wb.sampleDelta === pb ? wb.sampleCount++ : bb.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: pb
              });
              const Mb = (0, gb.ac)(bb.compositionTimeOffsetTable);
              (0, gb.L)(Mb), Mb.sampleCompositionTimeOffset === Hb ? Mb.sampleCount++ : bb.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: Hb
              })
            }
          } else bb.lastTimescaleUnits = tM(wb.decodeTimestamp, bb.timescale, !1), this.isFragmented || (bb.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: pb
          }), bb.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: Hb
          }));
          bb.lastSample = wb
        }
        if (bb.timestampProcessingQueue.length = 0, (0, gb.L)(bb.lastSample), (0, gb.L)(null !== bb.lastTimescaleUnits), void 0 !== wb && 0 === bb.lastSample.timescaleUnitsToNextSample) {
          (0, gb.L)("key" === wb.type);
          const Mb = tM(wb.timestamp, bb.timescale, !1),
            eb = Math.round(Mb - bb.lastTimescaleUnits);
          bb.lastSample.timescaleUnitsToNextSample = eb
        }
      }
      async registerSample(bb, wb) {
        "key" === wb.type && this.processTimestamps(bb, wb), bb.timestampProcessingQueue.push(wb), this.isFragmented ? (bb.sampleQueue.push(wb), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(bb, wb) : await this.addSampleToTrack(bb, wb)
      }
      async addSampleToTrack(bb, wb) {
        if (!this.isFragmented && (bb.samples.push(wb), "reserve" === this.fastStart)) {
          const wb = bb.track.metadata.maximumPacketCount;
          if ((0, gb.L)(void 0 !== wb), bb.samples.length > wb) throw new Error(`Track #${bb.track.id} has already reached the maximum packet count (${wb}). Either add less packets or increase the maximum packet count.`)
        }
        let Mb = !1;
        if (bb.currentChunk) {
          bb.currentChunk.startTimestamp = Math.min(bb.currentChunk.startTimestamp, wb.timestamp);
          const eb = wb.timestamp - bb.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const Hb = this.trackDatas.every((Mb => {
              if (bb === Mb) return "key" === wb.type;
              const eb = Mb.sampleQueue[0];
              return eb ? "key" === eb.type : Mb.closed
            }));
            eb >= this.minimumFragmentDuration && Hb && wb.timestamp > this.maxWrittenTimestamp && (Mb = !0, await this.finalizeFragment())
          } else Mb = eb >= .5
        } else Mb = !0;
        Mb && (bb.currentChunk && await this.finalizeCurrentChunk(bb), bb.currentChunk = {
          startTimestamp: wb.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, gb.L)(bb.currentChunk), bb.currentChunk.samples.push(wb), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, wb.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, wb.timestamp + wb.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, wb.timestamp))
      }
      async finalizeCurrentChunk(bb) {
        if ((0, gb.L)(!this.isFragmented), (0, gb.L)(this.writer), !bb.currentChunk) return;
        bb.finalizedChunks.push(bb.currentChunk), this.finalizedChunks.push(bb.currentChunk);
        let wb = bb.currentChunk.samples.length;
        if ("audio" === bb.type && bb.info.requiresPcmTransformation && (wb = bb.currentChunk.samples.reduce(((wb, Mb) => wb + tM(Mb.duration, bb.timescale)), 0)), 0 !== bb.compactlyCodedChunkTable.length && (0, gb.ac)(bb.compactlyCodedChunkTable).samplesPerChunk === wb || bb.compactlyCodedChunkTable.push({
            firstChunk: bb.finalizedChunks.length,
            samplesPerChunk: wb
          }), "in-memory" !== this.fastStart) {
          bb.currentChunk.offset = this.writer.getPos();
          for (const wb of bb.currentChunk.samples)(0, gb.L)(wb.data), this.writer.write(wb.data), wb.data = null;
          await this.writer.flush()
        } else bb.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, gb.L)(this.isFragmented), bb || this.allTracksAreKnown()) bb: for (;;) {
          let wb = null,
            Mb = 1 / 0;
          for (const Hb of this.trackDatas) {
            if (!bb && 0 === Hb.sampleQueue.length && !Hb.closed) break bb;
            Hb.sampleQueue.length > 0 && Hb.sampleQueue[0].timestamp < Mb && (wb = Hb, Mb = Hb.sampleQueue[0].timestamp)
          }
          if (!wb) break;
          const eb = wb.sampleQueue.shift();
          await this.addSampleToTrack(wb, eb)
        }
      }
      async finalizeFragment() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, gb.L)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const bb = this.initBoxWriter ?? this.boxWriter;
          (0, gb.L)(bb), this.formatOptions.onMoov && bb.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const wb = qb(this);
          if (bb.writeBox(wb), this.formatOptions.onMoov) {
            const {
              data: wb,
              start: Mb
            } = bb.writer.stopTrackingWrites();
            this.formatOptions.onMoov(wb, Mb)
          }
          if (this.isCmaf) {
            (0, gb.L)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new mb(this.writer);
            const bb = this.boxWriter.measureBox(vb()),
              wb = this.boxWriter.measureBox(Qb(this, 0));
            this.segmentHeaderSize = bb + wb, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, gb.L)(this.writer), (0, gb.L)(this.boxWriter);
        const wb = this.trackDatas.filter((bb => bb.currentChunk));
        if (0 === wb.length) return void(bb && await this.writer.flush());
        const Mb = this.nextFragmentNumber++,
          eb = Aw(Mb, wb),
          Hb = this.writer.getPos(),
          pb = Hb + this.boxWriter.measureBox(eb);
        let Vb = pb + 8,
          lb = 1 / 0;
        for (let tb = 0; tb < wb.length; tb++) {
          const bb = wb[tb];
          (0, gb.L)(bb.currentChunk), (0, gb.L)(null !== bb.startTimestampOffset), bb.currentChunk.offset = Vb, bb.currentChunk.moofOffset = Hb, bb.currentChunk.trafIndex = tb, bb.currentChunk.startTimestamp -= bb.startTimestampOffset;
          for (const wb of bb.currentChunk.samples) Vb += wb.size, wb.timestamp -= bb.startTimestampOffset, wb.decodeTimestamp -= bb.startTimestampOffset;
          lb = Math.min(lb, bb.currentChunk.startTimestamp)
        }
        const Lb = Vb - pb,
          Ib = Lb >= 2 ** 32;
        if (Ib)
          for (const gb of wb) gb.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const Ob = Aw(Mb, wb);
        if (this.boxWriter.writeBox(Ob), this.formatOptions.onMoof) {
          const {
            data: bb,
            start: wb
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(bb, wb, lb)
        }(0, gb.L)(this.writer.getPos() === pb), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const Ub = Gb(Ib);
        Ub.size = Lb, this.boxWriter.writeBox(Ub), this.writer.seek(pb + (Ib ? 16 : 8));
        for (const gb of wb)
          for (const bb of gb.currentChunk.samples) this.writer.write(bb.data), bb.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: bb,
            start: wb
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(bb, wb)
        }
        for (const gb of wb) gb.finalizedChunks.push(gb.currentChunk), this.finalizedChunks.push(gb.currentChunk), gb.currentChunk = null;
        bb && await this.writer.flush()
      }
      async registerSampleFastStartReserve(bb, wb) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(bb, wb)) : bb.sampleQueue.push(wb)
      }
      async createFastStartReserveMdat() {
        (0, gb.L)(this.writer), (0, gb.L)(this.boxWriter), this.ensureOneEnabledTrack();
        const bb = qb(this),
          wb = this.boxWriter.measureBox(bb) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, gb.L)(null !== this.ftypSize), this.writer.seek(this.ftypSize + wb), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = Gb(!0), this.boxWriter.writeBox(this.mdat);
        for (const Mb of this.trackDatas) {
          for (const bb of Mb.sampleQueue) await this.addSampleToTrack(Mb, bb);
          Mb.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, gb.L)("reserve" === this.fastStart);
        let bb = 0;
        for (const wb of this.trackDatas) {
          const Mb = wb.track.metadata.maximumPacketCount;
          (0, gb.L)(void 0 !== Mb), bb += 8 * Math.ceil(2 / 3 * Mb), bb += 4 * Mb, bb += 8 * Math.ceil(2 / 3 * Mb), bb += 12 * Math.ceil(2 / 3 * Mb), bb += 4 * Mb, bb += 8 * Mb
        }
        return bb
      }
      async onTrackClose(bb) {
        const wb = await this.mutex.acquire(),
          Mb = this.trackDatas.find((wb => wb.track === bb));
        Mb && (Mb.closed = !0, "subtitle" === Mb.type && "webvtt" === bb.source._codec && await this.processWebVTTCues(Mb, 1 / 0), this.processTimestamps(Mb)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), wb()
      }
      ensureOneEnabledTrack() {
        for (const bb of ["video", "audio", "subtitle"]) {
          const wb = this.trackDatas.filter((wb => wb.type === bb));
          if (0 === wb.length) continue;
          if (!wb.some((bb => !1 !== bb.track.metadata.disposition?.default))) {
            const bb = wb[0];
            bb.track.metadata.disposition = {
              ...bb.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, gb.L)(this.isFragmented);
        const bb = await this.mutex.acquire();
        try {
          for (const bb of this.trackDatas) "subtitle" === bb.type && "webvtt" === bb.track.source._codec && await this.processWebVTTCues(bb, 1 / 0), this.processTimestamps(bb);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          bb()
        }
      }
      async finalize() {
        const bb = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const Mb of this.trackDatas) Mb.closed = !0, "subtitle" === Mb.type && "webvtt" === Mb.track.source._codec && await this.processWebVTTCues(Mb, 1 / 0), this.processTimestamps(Mb);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const Mb of this.trackDatas) {
            await this.finalizeCurrentChunk(Mb);
            const bb = CM(Mb);
            if (bb > 0) {
              let wb = 0;
              for (const bb of Mb.samples) wb += bb.size;
              Mb.avgBitrate = Math.round(8 * wb / bb)
            } else Mb.avgBitrate = 0;
            let wb = 0,
              eb = 0,
              Hb = 0;
            for (let pb = 0; pb < Mb.samples.length; pb++) {
              const bb = Mb.samples[pb];
              for (eb += bb.size; bb.decodeTimestamp - Mb.samples[wb].decodeTimestamp >= 1;) eb -= Mb.samples[wb].size, wb++;
              Hb = Math.max(Hb, eb)
            }
            if (Mb.maxBitrate = 8 * Hb, null !== Mb.startTimestampOffset)
              for (let pb = 0; pb < Mb.samples.length; pb++) {
                const bb = Mb.samples[pb];
                bb.timestamp -= Mb.startTimestampOffset, bb.decodeTimestamp -= Mb.startTimestampOffset
              }
          }
        if ((0, gb.L)(this.writer), (0, gb.L)(this.boxWriter), "in-memory" === this.fastStart) {
          let bb;
          this.mdat = Gb(!1);
          for (let Mb = 0; Mb < 2; Mb++) {
            const wb = qb(this),
              Mb = this.boxWriter.measureBox(wb);
            bb = this.boxWriter.measureBox(this.mdat);
            let eb = this.writer.getPos() + Mb + bb;
            for (const Hb of this.finalizedChunks) {
              Hb.offset = eb;
              for (const {
                  data: wb
                }
                of Hb.samples)(0, gb.L)(wb), eb += wb.byteLength, bb += wb.byteLength
            }
            if (eb < 2 ** 32) break;
            bb >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const wb = qb(this);
          if (this.boxWriter.writeBox(wb), this.formatOptions.onMoov) {
            const {
              data: bb,
              start: wb
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(bb, wb)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = bb, this.boxWriter.writeBox(this.mdat);
          for (const Mb of this.finalizedChunks)
            for (const bb of Mb.samples)(0, gb.L)(bb.data), this.writer.write(bb.data), bb.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: bb,
              start: wb
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(bb, wb)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const bb = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(vb()), this.boxWriter.writeBox(Qb(this, bb))
          } else {
            const bb = this.writer.getPos(),
              Mb = (wb = this.trackDatas, Sb("mfra", void 0, [...wb.map(Gw), qw()]));
            this.boxWriter.writeBox(Mb);
            const eb = this.writer.getPos() - bb;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(eb)
          }
        else {
          (0, gb.L)(this.mdat);
          const bb = this.boxWriter.offsets.get(this.mdat);
          (0, gb.L)(void 0 !== bb);
          const wb = this.writer.getPos() - bb;
          if (this.mdat.size = wb, this.mdat.largeSize = wb >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: bb,
              start: wb
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(bb, wb)
          }
          const Mb = qb(this);
          if ("reserve" === this.fastStart) {
            (0, gb.L)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(Mb);
            const bb = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: bb
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(Mb);
          if (this.formatOptions.onMoov) {
            const {
              data: bb,
              start: wb
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(bb, wb)
          }
        }
        var wb;
        bb()
      }
    }
    class FM {
      constructor(bb) {
        this.value = bb
      }
    }
    class BM {
      constructor(bb) {
        this.value = bb
      }
    }
    class sM {
      constructor(bb) {
        this.value = bb
      }
    }
    class mM {
      constructor(bb) {
        this.value = bb
      }
    }
    var hM;
    ! function(bb) {
      bb[bb.EBML = 440786851] = "EBML", bb[bb.EBMLVersion = 17030] = "EBMLVersion", bb[bb.EBMLReadVersion = 17143] = "EBMLReadVersion", bb[bb.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", bb[bb.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", bb[bb.DocType = 17026] = "DocType", bb[bb.DocTypeVersion = 17031] = "DocTypeVersion", bb[bb.DocTypeReadVersion = 17029] = "DocTypeReadVersion", bb[bb.Void = 236] = "Void", bb[bb.Segment = 408125543] = "Segment", bb[bb.SeekHead = 290298740] = "SeekHead", bb[bb.Seek = 19899] = "Seek", bb[bb.SeekID = 21419] = "SeekID", bb[bb.SeekPosition = 21420] = "SeekPosition", bb[bb.Duration = 17545] = "Duration", bb[bb.Info = 357149030] = "Info", bb[bb.TimestampScale = 2807729] = "TimestampScale", bb[bb.MuxingApp = 19840] = "MuxingApp", bb[bb.WritingApp = 22337] = "WritingApp", bb[bb.Tracks = 374648427] = "Tracks", bb[bb.TrackEntry = 174] = "TrackEntry", bb[bb.TrackNumber = 215] = "TrackNumber", bb[bb.TrackUID = 29637] = "TrackUID", bb[bb.TrackType = 131] = "TrackType", bb[bb.FlagEnabled = 185] = "FlagEnabled", bb[bb.FlagDefault = 136] = "FlagDefault", bb[bb.FlagForced = 21930] = "FlagForced", bb[bb.FlagOriginal = 21934] = "FlagOriginal", bb[bb.FlagHearingImpaired = 21931] = "FlagHearingImpaired", bb[bb.FlagVisualImpaired = 21932] = "FlagVisualImpaired", bb[bb.FlagCommentary = 21935] = "FlagCommentary", bb[bb.FlagLacing = 156] = "FlagLacing", bb[bb.Name = 21358] = "Name", bb[bb.Language = 2274716] = "Language", bb[bb.LanguageBCP47 = 2274717] = "LanguageBCP47", bb[bb.CodecID = 134] = "CodecID", bb[bb.CodecPrivate = 25506] = "CodecPrivate", bb[bb.CodecDelay = 22186] = "CodecDelay", bb[bb.SeekPreRoll = 22203] = "SeekPreRoll", bb[bb.DefaultDuration = 2352003] = "DefaultDuration", bb[bb.Video = 224] = "Video", bb[bb.PixelWidth = 176] = "PixelWidth", bb[bb.PixelHeight = 186] = "PixelHeight", bb[bb.DisplayWidth = 21680] = "DisplayWidth", bb[bb.DisplayHeight = 21690] = "DisplayHeight", bb[bb.DisplayUnit = 21682] = "DisplayUnit", bb[bb.AlphaMode = 21440] = "AlphaMode", bb[bb.Audio = 225] = "Audio", bb[bb.SamplingFrequency = 181] = "SamplingFrequency", bb[bb.Channels = 159] = "Channels", bb[bb.BitDepth = 25188] = "BitDepth", bb[bb.SimpleBlock = 163] = "SimpleBlock", bb[bb.BlockGroup = 160] = "BlockGroup", bb[bb.Block = 161] = "Block", bb[bb.BlockAdditions = 30113] = "BlockAdditions", bb[bb.BlockMore = 166] = "BlockMore", bb[bb.BlockAdditional = 165] = "BlockAdditional", bb[bb.BlockAddID = 238] = "BlockAddID", bb[bb.BlockDuration = 155] = "BlockDuration", bb[bb.ReferenceBlock = 251] = "ReferenceBlock", bb[bb.Cluster = 524531317] = "Cluster", bb[bb.Timestamp = 231] = "Timestamp", bb[bb.Cues = 475249515] = "Cues", bb[bb.CuePoint = 187] = "CuePoint", bb[bb.CueTime = 179] = "CueTime", bb[bb.CueTrackPositions = 183] = "CueTrackPositions", bb[bb.CueTrack = 247] = "CueTrack", bb[bb.CueClusterPosition = 241] = "CueClusterPosition", bb[bb.Colour = 21936] = "Colour", bb[bb.MatrixCoefficients = 21937] = "MatrixCoefficients", bb[bb.TransferCharacteristics = 21946] = "TransferCharacteristics", bb[bb.Primaries = 21947] = "Primaries", bb[bb.Range = 21945] = "Range", bb[bb.Projection = 30320] = "Projection", bb[bb.ProjectionType = 30321] = "ProjectionType", bb[bb.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", bb[bb.ProjectionPosePitch = 30324] = "ProjectionPosePitch", bb[bb.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", bb[bb.Attachments = 423732329] = "Attachments", bb[bb.AttachedFile = 24999] = "AttachedFile", bb[bb.FileDescription = 18046] = "FileDescription", bb[bb.FileName = 18030] = "FileName", bb[bb.FileMediaType = 18016] = "FileMediaType", bb[bb.FileData = 18012] = "FileData", bb[bb.FileUID = 18094] = "FileUID", bb[bb.Chapters = 272869232] = "Chapters", bb[bb.Tags = 307544935] = "Tags", bb[bb.Tag = 29555] = "Tag", bb[bb.Targets = 25536] = "Targets", bb[bb.TargetTypeValue = 26826] = "TargetTypeValue", bb[bb.TargetType = 25546] = "TargetType", bb[bb.TagTrackUID = 25541] = "TagTrackUID", bb[bb.TagEditionUID = 25545] = "TagEditionUID", bb[bb.TagChapterUID = 25540] = "TagChapterUID", bb[bb.TagAttachmentUID = 25542] = "TagAttachmentUID", bb[bb.SimpleTag = 26568] = "SimpleTag", bb[bb.TagName = 17827] = "TagName", bb[bb.TagLanguage = 17530] = "TagLanguage", bb[bb.TagString = 17543] = "TagString", bb[bb.TagBinary = 17541] = "TagBinary", bb[bb.ContentEncodings = 28032] = "ContentEncodings", bb[bb.ContentEncoding = 25152] = "ContentEncoding", bb[bb.ContentEncodingOrder = 20529] = "ContentEncodingOrder", bb[bb.ContentEncodingScope = 20530] = "ContentEncodingScope", bb[bb.ContentCompression = 20532] = "ContentCompression", bb[bb.ContentCompAlgo = 16980] = "ContentCompAlgo", bb[bb.ContentCompSettings = 16981] = "ContentCompSettings", bb[bb.ContentEncryption = 20533] = "ContentEncryption"
    }(hM || (hM = {}));
    hM.EBML, hM.Segment, hM.SeekHead, hM.Info, hM.Cluster, hM.Tracks, hM.Cues, hM.Attachments, hM.Chapters, hM.Tags;
    const zM = bb => bb < 256 ? 1 : bb < 65536 ? 2 : bb < 1 << 24 ? 3 : bb < 2 ** 32 ? 4 : bb < 2 ** 40 ? 5 : 6,
      XM = bb => bb < 256n ? 1 : bb < 65536n ? 2 : bb < 1n << 24n ? 3 : bb < 1n << 32n ? 4 : bb < 1n << 40n ? 5 : bb < 1n << 48n ? 6 : bb < 1n << 56n ? 7 : 8,
      xM = bb => bb >= -64 && bb < 64 ? 1 : bb >= -8192 && bb < 8192 ? 2 : bb >= -1048576 && bb < 1 << 20 ? 3 : bb >= -(1 << 27) && bb < 1 << 27 ? 4 : bb >= -(2 ** 34) && bb < 2 ** 34 ? 5 : 6;
    class jM {
      constructor(bb) {
        this.writer = bb, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(bb) {
        this.helperView.setUint8(0, bb), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(bb) {
        this.helperView.setFloat32(0, bb, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(bb) {
        this.helperView.setFloat64(0, bb, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zM(bb),
          Mb = 0;
        switch (wb) {
          case 6:
            this.helperView.setUint8(Mb++, bb / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(Mb++, bb / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(Mb++, bb >> 24);
          case 3:
            this.helperView.setUint8(Mb++, bb >> 16);
          case 2:
            this.helperView.setUint8(Mb++, bb >> 8);
          case 1:
            this.helperView.setUint8(Mb++, bb);
            break;
          default:
            throw new Error("Bad unsigned int size " + wb)
        }
        this.writer.write(this.helper.subarray(0, Mb))
      }
      writeUnsignedBigInt(bb) {
        let wb = 0;
        for (let Mb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XM(bb)) - 1; Mb >= 0; Mb--) this.helperView.setUint8(wb++, Number(bb >> BigInt(8 * Mb) & 0xffn));
        this.writer.write(this.helper.subarray(0, wb))
      }
      writeSignedInt(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xM(bb);
        bb < 0 && (bb += 2 ** (8 * wb)), this.writeUnsignedInt(bb, wb)
      }
      writeVarInt(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (bb => {
            if (bb < 127) return 1;
            if (bb < 16383) return 2;
            if (bb < 2097151) return 3;
            if (bb < 268435455) return 4;
            if (bb < 2 ** 35 - 1) return 5;
            if (bb < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + bb)
          })(bb),
          Mb = 0;
        switch (wb) {
          case 1:
            this.helperView.setUint8(Mb++, 128 | bb);
            break;
          case 2:
            this.helperView.setUint8(Mb++, 64 | bb >> 8), this.helperView.setUint8(Mb++, bb);
            break;
          case 3:
            this.helperView.setUint8(Mb++, 32 | bb >> 16), this.helperView.setUint8(Mb++, bb >> 8), this.helperView.setUint8(Mb++, bb);
            break;
          case 4:
            this.helperView.setUint8(Mb++, 16 | bb >> 24), this.helperView.setUint8(Mb++, bb >> 16), this.helperView.setUint8(Mb++, bb >> 8), this.helperView.setUint8(Mb++, bb);
            break;
          case 5:
            this.helperView.setUint8(Mb++, 8 | bb / 2 ** 32 & 7), this.helperView.setUint8(Mb++, bb >> 24), this.helperView.setUint8(Mb++, bb >> 16), this.helperView.setUint8(Mb++, bb >> 8), this.helperView.setUint8(Mb++, bb);
            break;
          case 6:
            this.helperView.setUint8(Mb++, 4 | bb / 2 ** 40 & 3), this.helperView.setUint8(Mb++, bb / 2 ** 32 | 0), this.helperView.setUint8(Mb++, bb >> 24), this.helperView.setUint8(Mb++, bb >> 16), this.helperView.setUint8(Mb++, bb >> 8), this.helperView.setUint8(Mb++, bb);
            break;
          default:
            throw new Error("Bad EBML varint size " + wb)
        }
        this.writer.write(this.helper.subarray(0, Mb))
      }
      writeAsciiString(bb) {
        this.writer.write(new Uint8Array(bb.split("").map((bb => bb.charCodeAt(0)))))
      }
      writeEBML(bb) {
        if (null !== bb)
          if (bb instanceof Uint8Array) this.writer.write(bb);
          else if (Array.isArray(bb))
          for (const wb of bb) this.writeEBML(wb);
        else if (this.offsets.set(bb, this.writer.getPos()), this.writeUnsignedInt(bb.id), Array.isArray(bb.data)) {
          const wb = this.writer.getPos(),
            Mb = -1 === bb.size ? 1 : bb.size ?? 4; - 1 === bb.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + Mb);
          const eb = this.writer.getPos();
          if (this.dataOffsets.set(bb, eb), this.writeEBML(bb.data), -1 !== bb.size) {
            const bb = this.writer.getPos() - eb,
              Hb = this.writer.getPos();
            this.writer.seek(wb), this.writeVarInt(bb, Mb), this.writer.seek(Hb)
          }
        } else if ("number" === typeof bb.data) {
          const wb = bb.size ?? zM(bb.data);
          this.writeVarInt(wb), this.writeUnsignedInt(bb.data, wb)
        } else if ("bigint" === typeof bb.data) {
          const wb = bb.size ?? XM(bb.data);
          this.writeVarInt(wb), this.writeUnsignedBigInt(bb.data, wb)
        } else if ("string" === typeof bb.data) this.writeVarInt(bb.data.length), this.writeAsciiString(bb.data);
        else if (bb.data instanceof Uint8Array) this.writeVarInt(bb.data.byteLength, bb.size), this.writer.write(bb.data);
        else if (bb.data instanceof FM) this.writeVarInt(4), this.writeFloat32(bb.data.value);
        else if (bb.data instanceof BM) this.writeVarInt(8), this.writeFloat64(bb.data.value);
        else if (bb.data instanceof sM) {
          const wb = bb.size ?? xM(bb.data.value);
          this.writeVarInt(wb), this.writeSignedInt(bb.data.value, wb)
        } else if (bb.data instanceof mM) {
          const wb = gb.id.encode(bb.data.value);
          this.writeVarInt(wb.length), this.writer.write(wb)
        } else(0, gb.H)(bb.data)
      }
    }
    const KM = {
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
    const rM = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class RM extends Cb {
      constructor(bb, wb) {
        super(bb), this.trackDatas = [], this.allTracksKnown = (0, gb.vc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = wb
      }
      async start() {
        const bb = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new jM(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const wb of this.output.tracks) wb.isVideoTrack() && wb.metadata.decoderConfig ? this.getVideoTrackData(wb, wb.metadata.primingPacket ?? null, {
          decoderConfig: wb.metadata.decoderConfig
        }) : wb.isAudioTrack() && wb.metadata.decoderConfig && this.getAudioTrackData(wb, wb.metadata.primingPacket ?? null, {
          decoderConfig: wb.metadata.decoderConfig
        });
        bb()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const bb = {
          id: hM.EBML,
          data: [{
            id: hM.EBMLVersion,
            data: 1
          }, {
            id: hM.EBMLReadVersion,
            data: 1
          }, {
            id: hM.EBMLMaxIDLength,
            data: 4
          }, {
            id: hM.EBMLMaxSizeLength,
            data: 8
          }, {
            id: hM.DocType,
            data: this.format instanceof QM ? "webm" : "matroska"
          }, {
            id: hM.DocTypeVersion,
            data: 4
          }, {
            id: hM.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(bb), this.format._options.onEbmlHeader) {
          const {
            data: bb,
            start: wb
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(bb, wb)
        }
      }
      maybeCreateSeekHead(bb) {
        if (this.format._options.appendOnly) return;
        const wb = new Uint8Array([28, 83, 187, 107]),
          Mb = new Uint8Array([21, 73, 169, 102]),
          eb = new Uint8Array([22, 84, 174, 107]),
          Hb = new Uint8Array([25, 65, 164, 105]),
          pb = new Uint8Array([18, 84, 195, 103]),
          Vb = {
            id: hM.SeekHead,
            data: [{
              id: hM.Seek,
              data: [{
                id: hM.SeekID,
                data: Mb
              }, {
                id: hM.SeekPosition,
                size: 5,
                data: bb ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: hM.Seek,
              data: [{
                id: hM.SeekID,
                data: eb
              }, {
                id: hM.SeekPosition,
                size: 5,
                data: bb ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: hM.Seek,
              data: [{
                id: hM.SeekID,
                data: Hb
              }, {
                id: hM.SeekPosition,
                size: 5,
                data: bb ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: hM.Seek,
              data: [{
                id: hM.SeekID,
                data: pb
              }, {
                id: hM.SeekPosition,
                size: 5,
                data: bb ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: hM.Seek,
              data: [{
                id: hM.SeekID,
                data: wb
              }, {
                id: hM.SeekPosition,
                size: 5,
                data: bb ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = Vb
      }
      createSegmentInfo() {
        const bb = {
          id: hM.Duration,
          data: new BM(0)
        };
        this.segmentDuration = bb;
        const wb = {
          id: hM.Info,
          data: [{
            id: hM.TimestampScale,
            data: 1e6
          }, {
            id: hM.MuxingApp,
            data: sb.b
          }, {
            id: hM.WritingApp,
            data: sb.b
          }, this.format._options.appendOnly ? null : bb]
        };
        this.segmentInfo = wb
      }
      createTracks() {
        const bb = {
          id: hM.Tracks,
          data: []
        };
        this.tracksElement = bb;
        for (const wb of this.trackDatas) {
          let Mb = KM[wb.track.source._codec];
          (0, gb.L)(Mb), "audio" === wb.type && "dts" === wb.track.source._codec && ("dtse" === wb.info.decoderConfig.codec ? Mb = "A_DTS/EXPRESS" : "dtsl" === wb.info.decoderConfig.codec && (Mb = "A_DTS/LOSSLESS"));
          let eb = 0;
          if ("audio" === wb.type && "opus" === wb.track.source._codec) {
            eb = 8e7;
            const bb = wb.info.decoderConfig.description;
            if (bb) {
              const wb = (0, gb.od)(bb),
                Mb = (0, Eb.sb)(wb);
              eb = Math.round(Mb.preSkip / Hb.i * 1e9)
            }
          }
          bb.data.push({
            id: hM.TrackEntry,
            data: [{
              id: hM.TrackNumber,
              data: wb.track.id
            }, {
              id: hM.TrackUID,
              data: wb.track.id
            }, {
              id: hM.TrackType,
              data: rM[wb.type]
            }, !1 === wb.track.metadata.disposition?.default ? {
              id: hM.FlagDefault,
              data: 0
            } : null, wb.track.metadata.disposition?.forced ? {
              id: hM.FlagForced,
              data: 1
            } : null, wb.track.metadata.disposition?.hearingImpaired ? {
              id: hM.FlagHearingImpaired,
              data: 1
            } : null, wb.track.metadata.disposition?.visuallyImpaired ? {
              id: hM.FlagVisualImpaired,
              data: 1
            } : null, wb.track.metadata.disposition?.original ? {
              id: hM.FlagOriginal,
              data: 1
            } : null, wb.track.metadata.disposition?.commentary ? {
              id: hM.FlagCommentary,
              data: 1
            } : null, {
              id: hM.FlagLacing,
              data: 0
            }, {
              id: hM.Language,
              data: wb.track.metadata.languageCode ?? gb.z
            }, {
              id: hM.CodecID,
              data: Mb
            }, wb.codecPrivate ? {
              id: hM.CodecPrivate,
              data: (0, gb.od)(wb.codecPrivate)
            } : null, eb > 0 ? {
              id: hM.SeekPreRoll,
              data: eb
            } : null, void 0 !== wb.track.metadata.name ? {
              id: hM.Name,
              data: new mM(wb.track.metadata.name)
            } : null, "video" === wb.type ? this.videoSpecificTrackInfo(wb) : null, "audio" === wb.type ? this.audioSpecificTrackInfo(wb) : null, "subtitle" === wb.type ? this.subtitleSpecificTrackInfo(wb) : null]
          })
        }
      }
      videoSpecificTrackInfo(bb) {
        const {
          frameRate: wb,
          transformationMatrix: Mb
        } = bb.track.metadata, eb = [wb ? {
          id: hM.DefaultDuration,
          data: 1e9 / wb
        } : null];
        let Hb, pb, Vb;
        if (Mb) {
          Hb = (0, gb.kb)(Mb);
          const bb = (0, gb.lc)((0, gb.Kc)(-Hb), Mb);
          pb = Math.sign(bb[0]), Vb = Math.sign(bb[4]), -1 === Vb && (Vb = 1, pb = -pb, Hb = (0, gb.nc)(Hb + 180))
        } else Hb = bb.track.metadata.rotation ?? 0, pb = bb.track.metadata.flip ? -1 : 1, Vb = 1;
        const lb = Hb ? (0, gb.nc)(-1 === pb ? Hb : -Hb) : 0,
          Lb = Math.round(Math.acos(pb) * gb.q),
          Ib = Math.round(Math.acos(Vb) * gb.q),
          Ob = !!bb.info.aspectRatio && bb.info.aspectRatio.num * bb.info.height !== bb.info.aspectRatio.den * bb.info.width,
          Ub = bb.info.decoderConfig.colorSpace,
          tb = {
            id: hM.Video,
            data: [{
              id: hM.PixelWidth,
              data: bb.info.width
            }, {
              id: hM.PixelHeight,
              data: bb.info.height
            }, Ob ? {
              id: hM.DisplayWidth,
              data: bb.info.aspectRatio.num
            } : null, Ob ? {
              id: hM.DisplayHeight,
              data: bb.info.aspectRatio.den
            } : null, Ob ? {
              id: hM.DisplayUnit,
              data: 3
            } : null, bb.info.alphaMode ? {
              id: hM.AlphaMode,
              data: 1
            } : null, (0, gb.fb)(Ub) ? null : {
              id: hM.Colour,
              data: [{
                id: hM.MatrixCoefficients,
                data: null != Ub?.matrix ? gb.m[Ub.matrix] : 2
              }, {
                id: hM.TransferCharacteristics,
                data: null != Ub?.transfer ? gb.s[Ub.transfer] : 2
              }, {
                id: hM.Primaries,
                data: null != Ub?.primaries ? gb.e[Ub.primaries] : 2
              }, {
                id: hM.Range,
                data: null != Ub?.fullRange ? Ub.fullRange ? 2 : 1 : 0
              }]
            }, lb || Lb || Ib ? {
              id: hM.Projection,
              data: [{
                id: hM.ProjectionType,
                data: 0
              }, Lb ? {
                id: hM.ProjectionPoseYaw,
                data: new FM(Lb)
              } : null, Ib ? {
                id: hM.ProjectionPosePitch,
                data: new FM(Ib)
              } : null, lb ? {
                id: hM.ProjectionPoseRoll,
                data: new FM((lb + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return eb.push(tb), eb
      }
      audioSpecificTrackInfo(bb) {
        const wb = Hb.l.includes(bb.track.source._codec) ? (0, Hb.N)(bb.track.source._codec) : null;
        return [{
          id: hM.Audio,
          data: [{
            id: hM.SamplingFrequency,
            data: new FM(bb.info.sampleRate)
          }, {
            id: hM.Channels,
            data: bb.info.numberOfChannels
          }, wb ? {
            id: hM.BitDepth,
            data: 8 * wb.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(bb) {
        return []
      }
      maybeCreateTags() {
        const bb = [],
          wb = (wb, Mb) => {
            bb.push({
              id: hM.SimpleTag,
              data: [{
                id: hM.TagName,
                data: new mM(wb)
              }, "string" === typeof Mb ? {
                id: hM.TagString,
                data: new mM(Mb)
              } : {
                id: hM.TagBinary,
                data: Mb
              }]
            })
          },
          Mb = this.output._metadataTags,
          eb = new Set;
        for (const {
            key: Hb,
            value: pb
          }
          of(0, gb._b)(Mb)) switch (Hb) {
          case "title":
            wb("TITLE", pb), eb.add("TITLE");
            break;
          case "description":
            wb("DESCRIPTION", pb), eb.add("DESCRIPTION");
            break;
          case "artist":
            wb("ARTIST", pb), eb.add("ARTIST");
            break;
          case "album":
            wb("ALBUM", pb), eb.add("ALBUM");
            break;
          case "albumArtist":
            wb("ALBUM_ARTIST", pb), eb.add("ALBUM_ARTIST");
            break;
          case "genre":
            wb("GENRE", pb), eb.add("GENRE");
            break;
          case "beatsPerMinute":
            wb("BPM", pb.toString()), eb.add("BPM");
            break;
          case "comment":
            wb("COMMENT", pb), eb.add("COMMENT");
            break;
          case "lyrics":
            wb("LYRICS", pb), eb.add("LYRICS");
            break;
          case "date":
            wb("DATE", pb.toISOString().slice(0, 10)), eb.add("DATE");
            break;
          case "trackNumber":
            wb("PART_NUMBER", void 0 !== Mb.tracksTotal ? `${pb}/${Mb.tracksTotal}` : pb.toString()), eb.add("PART_NUMBER");
            break;
          case "discNumber":
            wb("DISC", void 0 !== Mb.discsTotal ? `${pb}/${Mb.discsTotal}` : pb.toString()), eb.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, gb.H)(Hb)
        }
        if (Mb.raw)
          for (const Hb in Mb.raw) {
            const bb = Mb.raw[Hb];
            null == bb || eb.has(Hb) || ("string" === typeof bb || bb instanceof Uint8Array) && wb(Hb, bb)
          }
        0 !== bb.length && (this.tagsElement = {
          id: hM.Tags,
          data: [{
            id: hM.Tag,
            data: [{
              id: hM.Targets,
              data: [{
                id: hM.TargetTypeValue,
                data: 50
              }, {
                id: hM.TargetType,
                data: "MOVIE"
              }]
            }, ...bb]
          }]
        })
      }
      maybeCreateAttachments() {
        const bb = this.output._metadataTags,
          wb = [],
          Mb = new Set,
          eb = bb.images ?? [];
        for (const Hb of eb) {
          let bb, eb = Hb.name;
          if (void 0 === eb) {
            eb = ("coverFront" === Hb.kind ? "cover" : "coverBack" === Hb.kind ? "back" : "image") + ((0, gb.rb)(Hb.mimeType) ?? "")
          }
          for (;;) {
            bb = 0n;
            for (let wb = 0; wb < 8; wb++) bb <<= 8n, bb |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== bb && !Mb.has(bb)) break
          }
          Mb.add(bb), wb.push({
            id: hM.AttachedFile,
            data: [void 0 !== Hb.description ? {
              id: hM.FileDescription,
              data: new mM(Hb.description)
            } : null, {
              id: hM.FileName,
              data: new mM(eb)
            }, {
              id: hM.FileMediaType,
              data: Hb.mimeType
            }, {
              id: hM.FileData,
              data: Hb.data
            }, {
              id: hM.FileUID,
              data: bb
            }]
          })
        }
        for (const [Hb, pb] of Object.entries(bb.raw ?? {})) {
          if (!(pb instanceof tb.c)) continue;
          /^\d+$/.test(Hb) && (eb.find((bb => bb.mimeType === pb.mimeType && (0, gb.rd)(bb.data, pb.data))) || wb.push({
            id: hM.AttachedFile,
            data: [void 0 !== pb.description ? {
              id: hM.FileDescription,
              data: new mM(pb.description)
            } : null, {
              id: hM.FileName,
              data: new mM(pb.name ?? "")
            }, {
              id: hM.FileMediaType,
              data: pb.mimeType ?? ""
            }, {
              id: hM.FileData,
              data: pb.data
            }, {
              id: hM.FileUID,
              data: BigInt(Hb)
            }]
          }))
        }
        0 !== wb.length && (this.attachmentsElement = {
          id: hM.Attachments,
          data: wb
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const bb = {
          id: hM.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = bb, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(bb), this.format._options.onSegmentHeader) {
          const {
            data: bb,
            start: wb
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(bb, wb)
        }
      }
      createCues() {
        this.cues = {
          id: hM.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, gb.L)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const bb of this.output.tracks)
          if (!bb.source._closed && !this.trackDatas.some((wb => wb.track === bb))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const bb = this.trackDatas.map((bb => {
          if ("video" === bb.type) return bb.info.decoderConfig.codec;
          if ("audio" === bb.type) return bb.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [bb.track.source._codec]
        }));
        return (bb => {
          let wb = (bb.hasVideo ? "video/" : bb.hasAudio ? "audio/" : "application/") + (bb.isWebM ? "webm" : "x-matroska");
          bb.codecStrings.length > 0 && (wb += `; codecs="${[...new Set(bb.codecStrings.filter(Boolean))].join(", ")}"`);
          return wb
        })({
          isWebM: this.format instanceof QM,
          hasVideo: this.trackDatas.some((bb => "video" === bb.type)),
          hasAudio: this.trackDatas.some((bb => "audio" === bb.type)),
          codecStrings: bb
        })
      }
      getVideoTrackData(bb, wb, Mb) {
        const eb = this.trackDatas.find((wb => wb.track === bb));
        if (eb) return eb;
        (0, Hb.T)(Mb, bb.source._codec), (0, gb.L)(Mb), (0, gb.L)(Mb.decoderConfig), (0, gb.L)(void 0 !== Mb.decoderConfig.codedWidth), (0, gb.L)(void 0 !== Mb.decoderConfig.codedHeight);
        const pb = Mb.decoderConfig.displayAspectWidth,
          Vb = Mb.decoderConfig.displayAspectHeight,
          lb = void 0 === pb || void 0 === Vb ? null : (0, gb.fd)({
            num: pb,
            den: Vb
          }),
          Lb = {
            track: bb,
            type: "video",
            info: {
              width: Mb.decoderConfig.codedWidth,
              height: Mb.decoderConfig.codedHeight,
              aspectRatio: lb,
              decoderConfig: Mb.decoderConfig,
              alphaMode: bb.metadata.canBeTransparent || (wb ? !!wb.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: Mb.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === bb.source._codec ? Lb.codecPrivate = new Uint8Array((0, Hb.C)(Lb.info.decoderConfig.codec)) : "av1" === bb.source._codec ? Lb.codecPrivate = new Uint8Array((0, Hb.z)(Lb.info.decoderConfig.codec)) : "prores" === bb.source._codec && (Lb.codecPrivate = gb.id.encode(Mb.decoderConfig.codec)), this.trackDatas.push(Lb), this.trackDatas.sort(((bb, wb) => bb.track.id - wb.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Lb
      }
      getAudioTrackData(bb, wb, Mb) {
        const pb = this.trackDatas.find((wb => wb.track === bb));
        if (pb) return pb;
        (0, Hb.P)(Mb, bb.source._codec), (0, gb.L)(Mb), (0, gb.L)(Mb.decoderConfig);
        const Vb = {
          ...Mb.decoderConfig
        };
        let Lb = !1;
        if ("aac" === bb.source._codec && !Vb.description) {
          if (!wb) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const bb = IM(lb.tempFromBytes(wb.data));
          if (!bb) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const Mb = eb.g[bb.samplingFrequencyIndex],
            Hb = eb.e[bb.channelConfiguration];
          if (void 0 === Mb || void 0 === Hb) throw new Error("Invalid ADTS frame header.");
          Vb.description = (0, eb.h)({
            objectType: bb.objectType,
            outputSampleRate: Mb,
            outputNumberOfChannels: Hb
          }), Lb = !0
        }
        const Ib = {
          track: bb,
          type: "audio",
          info: {
            numberOfChannels: Mb.decoderConfig.numberOfChannels,
            sampleRate: Mb.decoderConfig.sampleRate,
            decoderConfig: Vb,
            requiresAdtsStripping: Lb
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: Vb.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(Ib), this.trackDatas.sort(((bb, wb) => bb.track.id - wb.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Ib
      }
      getSubtitleTrackData(bb, wb) {
        const Mb = this.trackDatas.find((wb => wb.track === bb));
        if (Mb) return Mb;
        (0, Hb.R)(wb), (0, gb.L)(wb), (0, gb.L)(wb.config);
        const eb = {
          track: bb,
          type: "subtitle",
          info: {
            config: wb.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: gb.id.encode(wb.config.description),
          closed: !1
        };
        return this.trackDatas.push(eb), this.trackDatas.sort(((bb, wb) => bb.track.id - wb.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), eb
      }
      async addEncodedVideoPacket(bb, wb, Mb) {
        const eb = await this.mutex.acquire();
        try {
          const eb = this.getVideoTrackData(bb, wb, Mb);
          eb.info.alphaMode ??= !!wb.sideData.alpha;
          let Hb = wb.data;
          if ("prores" === bb.source._codec) {
            if (Hb.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            Hb = Hb.subarray(8)
          }
          const pb = "key" === wb.type;
          this.validateTimestamp(eb.track, wb.timestamp, pb);
          let Vb = wb.timestamp,
            lb = wb.duration;
          void 0 !== bb.metadata.frameRate && (Vb = (0, gb.Mc)(Vb, bb.metadata.frameRate), lb = (0, gb.Mc)(lb, bb.metadata.frameRate));
          const Lb = eb.info.alphaMode ? wb.sideData.alpha ?? null : null,
            Ib = this.createInternalChunk(Hb, Vb, lb, wb.type, Lb);
          "vp9" === bb.source._codec && this.fixVP9ColorSpace(eb, Ib), eb.chunkQueue.push(Ib), await this.interleaveChunks()
        } finally {
          eb()
        }
      }
      async addEncodedAudioPacket(bb, wb, Mb) {
        const eb = await this.mutex.acquire();
        try {
          const eb = this.getAudioTrackData(bb, wb, Mb);
          let Hb = wb.data;
          if (eb.info.requiresAdtsStripping) {
            const bb = IM(lb.tempFromBytes(Hb));
            if (!bb) throw new Error("Expected ADTS frame, didn't get one.");
            const wb = null === bb.crcCheck ? 7 : 9;
            Hb = Hb.subarray(wb)
          }
          const pb = "key" === wb.type;
          this.validateTimestamp(eb.track, wb.timestamp, pb);
          const Vb = this.createInternalChunk(Hb, wb.timestamp, wb.duration, wb.type);
          eb.chunkQueue.push(Vb), await this.interleaveChunks()
        } finally {
          eb()
        }
      }
      async addSubtitleCue(bb, wb, Mb) {
        const eb = await this.mutex.acquire();
        try {
          const eb = this.getSubtitleTrackData(bb, Mb);
          this.validateTimestamp(eb.track, wb.timestamp, !0);
          let Hb = wb.text;
          const pb = Math.round(1e3 * wb.timestamp);
          Bb.i.lastIndex = 0, Hb = Hb.replace(Bb.i, (bb => {
            const wb = (0, Bb.l)(bb.slice(1, -1)) - pb;
            return `<${(0,Bb.h)(wb)}>`
          }));
          const Vb = gb.id.encode(Hb),
            lb = `${wb.settings??""}\n${wb.identifier??""}\n${wb.notes??""}`,
            Lb = this.createInternalChunk(Vb, wb.timestamp, wb.duration, "key", lb.trim() ? gb.id.encode(lb) : null);
          eb.chunkQueue.push(Lb), await this.interleaveChunks()
        } finally {
          eb()
        }
      }
      async interleaveChunks() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (bb || this.allTracksAreKnown()) {
          bb: for (;;) {
            let wb = null,
              Mb = 1 / 0;
            for (const Hb of this.trackDatas) {
              if (!bb && 0 === Hb.chunkQueue.length && !Hb.closed) break bb;
              Hb.chunkQueue.length > 0 && Hb.chunkQueue[0].timestamp < Mb && (wb = Hb, Mb = Hb.chunkQueue[0].timestamp)
            }
            if (!wb) break;
            const eb = wb.chunkQueue.shift();
            this.writeBlock(wb, eb)
          }
          bb || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(bb, wb) {
        if ("key" !== wb.type) return;
        if (!bb.info.decoderConfig.colorSpace || !bb.info.decoderConfig.colorSpace.matrix) return;
        const Mb = new Fb.e(wb.data);
        Mb.skipBits(2);
        const eb = Mb.readBits(1),
          Hb = (Mb.readBits(1) << 1) + eb;
        3 === Hb && Mb.skipBits(1);
        if (Mb.readBits(1)) return;
        if (0 !== Mb.readBits(1)) return;
        Mb.skipBits(2);
        if (4817730 !== Mb.readBits(24)) return;
        Hb >= 2 && Mb.skipBits(1);
        const pb = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [bb.info.decoderConfig.colorSpace.matrix];
        (0, gb.zd)(wb.data, Mb.pos, Mb.pos + 3, pb)
      }
      createInternalChunk(bb, wb, Mb, eb) {
        return {
          data: bb,
          type: eb,
          timestamp: wb,
          duration: Mb,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(bb, wb) {
        this.segment || this.createSegment();
        const Mb = Math.round(1e3 * wb.timestamp),
          eb = this.trackDatas.every((Mb => {
            if (bb === Mb) return "key" === wb.type;
            const eb = Mb.chunkQueue[0];
            return eb ? "key" === eb.type : Mb.closed
          }));
        let Hb = !1;
        if (this.currentCluster) {
          (0, gb.L)(null !== this.currentClusterStartMsTimestamp), (0, gb.L)(null !== this.currentClusterMaxMsTimestamp);
          const bb = Mb - this.currentClusterStartMsTimestamp;
          Hb = eb && Mb > this.currentClusterMaxMsTimestamp && bb >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || bb > 32767
        } else Hb = !0;
        Hb && this.createNewCluster(Mb);
        const pb = Mb - this.currentClusterStartMsTimestamp;
        if (pb < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const bb = this.format instanceof QM ? "WebM" : "Matroska";
            Vb.e._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${bb}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const lb = new Uint8Array(4),
          Lb = new DataView(lb.buffer);
        Lb.setUint8(0, 128 | bb.track.id), Lb.setInt16(1, pb, !1);
        const Ib = Math.round(1e3 * wb.duration);
        if (!!wb.additions || "subtitle" === bb.type) {
          const eb = {
            id: hM.BlockGroup,
            data: [{
              id: hM.Block,
              data: [lb, wb.data]
            }, "delta" === wb.type ? {
              id: hM.ReferenceBlock,
              data: new sM(bb.lastWrittenMsTimestamp - Mb)
            } : null, wb.additions ? {
              id: hM.BlockAdditions,
              data: [{
                id: hM.BlockMore,
                data: [{
                  id: hM.BlockAddID,
                  data: 1
                }, {
                  id: hM.BlockAdditional,
                  data: wb.additions
                }]
              }]
            } : null, Ib > 0 ? {
              id: hM.BlockDuration,
              data: Ib
            } : null]
          };
          this.ebmlWriter.writeEBML(eb)
        } else {
          Lb.setUint8(3, Number("key" === wb.type) << 7);
          const bb = {
            id: hM.SimpleBlock,
            data: [lb, wb.data]
          };
          this.ebmlWriter.writeEBML(bb)
        }
        this.startTimestamp = Math.min(this.startTimestamp, Mb), this.endTimestamp = Math.max(this.endTimestamp, Mb + Ib), bb.lastWrittenMsTimestamp = Mb, this.trackDatasInCurrentCluster.has(bb) || this.trackDatasInCurrentCluster.set(bb, {
          firstMsTimestamp: Mb
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, Mb)
      }
      createNewCluster(bb) {
        bb = Math.max(0, bb), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: hM.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: hM.Timestamp,
            data: bb
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = bb, this.currentClusterMaxMsTimestamp = bb, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, gb.L)(this.currentCluster), !this.format._options.appendOnly) {
          const bb = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            wb = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(bb, 5), this.writer.seek(wb)
        }
        if (this.format._options.onCluster) {
          (0, gb.L)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: bb,
            start: wb
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(bb, wb, this.currentClusterStartMsTimestamp / 1e3)
        }
        const bb = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          wb = new Map;
        for (const [eb, {
            firstMsTimestamp: Hb
          }] of this.trackDatasInCurrentCluster) wb.has(Hb) || wb.set(Hb, []), wb.get(Hb).push(eb);
        const Mb = [...wb.entries()].sort(((bb, wb) => bb[0] - wb[0]));
        for (const [eb, Hb] of Mb)(0, gb.L)(this.cues), this.cues.data.push({
          id: hM.CuePoint,
          data: [{
            id: hM.CueTime,
            data: Math.max(0, eb)
          }, ...Hb.map((wb => ({
            id: hM.CueTrackPositions,
            data: [{
              id: hM.CueTrack,
              data: wb.track.id
            }, {
              id: hM.CueClusterPosition,
              data: bb
            }]
          })))]
        })
      }
      async onTrackClose(bb) {
        const wb = await this.mutex.acquire(),
          Mb = this.trackDatas.find((wb => wb.track === bb));
        Mb && (Mb.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), wb()
      }
      async finalize() {
        const bb = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const wb of this.trackDatas) wb.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, gb.L)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const bb = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(bb, 6);
          const wb = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new BM(wb), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, gb.L)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        bb()
      }
    }
    const DM = new Uint32Array(256);
    for (let GM = 0; GM < 256; GM++) {
      let bb = GM << 24;
      for (let wb = 0; wb < 8; wb++) bb = 2147483648 & bb ? bb << 1 ^ 79764919 : bb << 1;
      DM[GM] = bb >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const cM = new Uint32Array(256);
    for (let GM = 0; GM < 256; GM++) {
      let bb = GM << 24;
      for (let wb = 0; wb < 8; wb++) bb = 2147483648 & bb ? bb << 1 ^ 79764919 : bb << 1;
      cM[GM] = bb >>> 0 & 4294967295
    }
    const YM = bb => {
        let wb = 4294967295;
        for (let Mb = 0; Mb < bb.length; Mb++) {
          const eb = bb[Mb];
          wb = (wb << 8 ^ cM[wb >>> 24 ^ eb]) >>> 0
        }
        return wb
      },
      ZM = new Uint8Array(16);
    {
      const bb = (0, gb.kd)(ZM);
      ZM[0] = 0, bb.setUint16(1, 45069, !1), bb.setUint16(3, 1, !1), ZM[5] = 193, ZM[6] = 0, ZM[7] = 0, bb.setUint16(8, 1, !1), bb.setUint16(10, 61440, !1), bb.setUint32(12, YM(ZM.subarray(0, 12)), !1)
    }
    var fM;
    Mb(41327);
    ! function(bb) {
      bb[bb.PCM = 1] = "PCM", bb[bb.IEEE_FLOAT = 3] = "IEEE_FLOAT", bb[bb.ALAW = 6] = "ALAW", bb[bb.MULAW = 7] = "MULAW", bb[bb.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(fM || (fM = {}));
    Mb(41334), Mb(41348), Mb(41237);
    class AM {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((bb => Hb.o.includes(bb)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((bb => Hb.b.includes(bb)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((bb => Hb.n.includes(bb)))
      }
      _codecUnsupportedHint(bb) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class WM extends AM {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (void 0 !== bb.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(bb.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== bb.minimumFragmentDuration && (!(0, gb.Ob)(bb.minimumFragmentDuration) || bb.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== bb.onFtyp && "function" !== typeof bb.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== bb.onMoov && "function" !== typeof bb.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== bb.onMdat && "function" !== typeof bb.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== bb.onMoof && "function" !== typeof bb.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== bb.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(bb.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = bb
      }
      getSupportedTrackCounts() {
        const bb = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: bb
          },
          audio: {
            min: 0,
            max: bb
          },
          subtitle: {
            min: 0,
            max: bb
          },
          total: {
            min: 0,
            max: bb
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
      _createMuxer(bb) {
        return new EM(bb, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class JM extends WM {
      constructor(bb) {
        super(bb)
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
        return [...Hb.o, ...Hb.h, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...Hb.n]
      }
      _codecUnsupportedHint(bb) {
        return (new NM).getSupportedCodecs().includes(bb) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class SM extends WM {
      constructor(bb) {
        super(bb)
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
        return [...Hb.o, ...Hb.h, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...Hb.n]
      }
    }
    class NM extends WM {
      constructor(bb) {
        super(bb)
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
        return [...Hb.o, ...Hb.b]
      }
      _codecUnsupportedHint(bb) {
        return (new JM).getSupportedCodecs().includes(bb) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class vM extends AM {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (void 0 !== bb.appendOnly && "boolean" !== typeof bb.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== bb.minimumClusterDuration && (!(0, gb.Ob)(bb.minimumClusterDuration) || bb.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== bb.onEbmlHeader && "function" !== typeof bb.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== bb.onSegmentHeader && "function" !== typeof bb.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== bb.onCluster && "function" !== typeof bb.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = bb
      }
      _createMuxer(bb) {
        return new RM(bb, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const bb = 127;
        return {
          video: {
            min: 0,
            max: bb
          },
          audio: {
            min: 0,
            max: bb
          },
          subtitle: {
            min: 0,
            max: bb
          },
          total: {
            min: 0,
            max: bb
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
        return [...Hb.o, ...Hb.h, ...Hb.l.filter((bb => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(bb))), ...Hb.n]
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
    class QM extends vM {
      constructor(bb) {
        super(bb)
      }
      getSupportedCodecs() {
        return [...Hb.o.filter((bb => ["vp8", "vp9", "av1"].includes(bb))), ...Hb.b.filter((bb => ["opus", "vorbis"].includes(bb))), ...Hb.n]
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
      _codecUnsupportedHint(bb) {
        return (new vM).getSupportedCodecs().includes(bb) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  41237: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => mb
    });
    var eb = Mb(41244),
      Hb = Mb(41252),
      pb = Mb(41258),
      Vb = Mb(41348),
      gb = Mb(41316),
      lb = Mb(41312),
      Lb = Mb(41287),
      Ib = Mb(41327),
      Ob = Mb(41281);
    const Ub = ["video", "audio", "subtitle"];
    class tb {
      constructor(bb, wb, Mb, eb, Hb) {
        this.id = bb, this.output = wb, this.type = Mb, this.source = eb, this.metadata = Hb
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
      canBePairedWith(bb) {
        if (!(bb instanceof tb)) throw new TypeError("other must be an OutputTrack.");
        if (this === bb) return !1;
        const wb = (0, eb.jd)(this.metadata.group),
          Mb = (0, eb.jd)(bb.metadata.group);
        for (const eb of wb) {
          if (this.type !== bb.type && Mb.some((bb => eb === bb))) return !0;
          if (Mb.some((bb => eb._pairedGroups.has(bb)))) return !0
        }
        return !1
      }
    }
    class Cb extends tb {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, "video", Mb, eb)
      }
    }
    class Eb extends tb {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, "audio", Mb, eb)
      }
    }
    class Fb extends tb {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, "subtitle", Mb, eb)
      }
    }
    class Bb {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(bb) {
        if (!(bb instanceof Bb)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === bb) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(bb), bb._pairedGroups.add(this)
      }
    }
    const sb = bb => {
      if (!bb || "object" !== typeof bb) throw new TypeError("metadata must be an object.");
      if (void 0 !== bb.languageCode && !(0, eb.Gb)(bb.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== bb.name && "string" !== typeof bb.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== bb.disposition && (0, Hb.o)(bb.disposition), void 0 !== bb.maximumPacketCount && (!Number.isInteger(bb.maximumPacketCount) || bb.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== bb.bitrate && (!Number.isFinite(bb.bitrate) || bb.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== bb.averageBitrate && (!Number.isFinite(bb.averageBitrate) || bb.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== bb.group && !(bb.group instanceof Bb) && (!Array.isArray(bb.group) || bb.group.some((bb => !(bb instanceof Bb))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class mb extends eb.h {
      get target() {
        const bb = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(bb);
        const wb = this._getRootTarget();
        if ((0, eb.Ub)(wb)) throw new TypeError(bb);
        return wb
      }
      constructor(bb) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new Bb, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new eb.d, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (!(bb.format instanceof pb.i)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(bb.target instanceof gb.g || bb.target instanceof gb.f)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (bb.target instanceof gb.g && this._rememberTarget(bb.target), void 0 !== bb.initTarget && !(bb.initTarget instanceof gb.g) && "function" !== typeof bb.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== bb.onFinalize && "function" !== typeof bb.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = bb.format, this.mO = bb.target, this._onFinalize = bb.onFinalize ?? null, this._initTarget = bb.initTarget ?? null, this._initTarget instanceof gb.g && this._rememberTarget(this._initTarget), this._muxer = bb.format._createMuxer(this)
      }
      _getTargetValidated(bb) {
        (0, eb.L)(this.mO instanceof gb.f);
        const wb = this.mO.getTarget(bb),
          Mb = bb => {
            if (!(bb instanceof gb.g)) throw new TypeError("getTarget must return a Target.");
            return bb
          };
        return (0, eb.Ub)(wb) ? wb.then(Mb) : Mb(wb)
      }
      async _getTarget(bb) {
        (0, eb.L)(this.mO instanceof gb.f);
        const wb = await this._getTargetValidated(bb);
        return this._emit("target", {
          target: wb,
          request: bb,
          isRoot: bb.isRoot
        }), "canceled" === this.state ? await wb._close() : this._rememberTarget(wb), wb
      }
      _rememberTarget(bb) {
        this._unfinalizedTargets.add(bb), bb.on("finalized", (() => this._unfinalizedTargets.delete(bb)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, eb.L)(null !== this._initTarget), this._initTarget instanceof gb.g) return this._initTarget;
        const bb = await this._initTarget();
        return "canceled" === this.state ? await bb._close() : this._rememberTarget(bb), bb
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.mO instanceof gb.g) return this._emit("target", {
          target: this.mO,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.mO, this.mO;
        const bb = {
            path: this.mO.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          wb = this._getTargetValidated(bb),
          Mb = wb => ("canceled" === this.state ? wb._close() : this._rememberTarget(wb), this._emit("target", {
            target: wb,
            request: bb,
            isRoot: !0
          }), this._rootTarget = wb, wb);
        return (0, eb.Ub)(wb) ? this._rootTargetPromise = wb.then(Mb) : Mb(wb)
      }
      _getRootWriter(bb) {
        return this._rootWriterPromise ??= (async () => {
          const wb = await this._getRootTarget(),
            Mb = new lb.b(wb, "boolean" === typeof bb ? bb : bb(wb));
          return Mb.start(), Mb
        })()
      }
      addVideoTrack(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(bb instanceof Vb.n)) throw new TypeError("source must be a VideoSource.");
        if (sb(wb), void 0 !== wb.rotation && ![0, 90, 180, 270].includes(wb.rotation)) throw new TypeError(`Invalid video rotation: ${wb.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== wb.flip && "boolean" !== typeof wb.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== wb.transformationMatrix && (!Array.isArray(wb.transformationMatrix) || 9 !== wb.transformationMatrix.length || !wb.transformationMatrix.every((bb => Number.isFinite(bb))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== wb.frameRate && (!Number.isFinite(wb.frameRate) || wb.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${wb.frameRate}. Must be a positive number.`);
        if (void 0 !== wb.hasOnlyKeyPackets && "boolean" !== typeof wb.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== wb.canBeTransparent && "boolean" !== typeof wb.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== wb.decoderConfig && (0, Ob.T)({
            decoderConfig: wb.decoderConfig
          }, bb._codec), void 0 !== wb.primingPacket) {
          if (!(wb.primingPacket instanceof Ib.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === wb.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const Mb = {
          ...wb
        };
        return Mb.group ??= this.defaultTrackGroup, this._addTrack(new Cb(this.tracks.length + 1, this, bb, Mb))
      }
      addAudioTrack(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(bb instanceof Vb.e)) throw new TypeError("source must be an AudioSource.");
        if (sb(wb), void 0 !== wb.decoderConfig && (0, Ob.P)({
            decoderConfig: wb.decoderConfig
          }, bb._codec), void 0 !== wb.primingPacket) {
          if (!(wb.primingPacket instanceof Ib.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === wb.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const Mb = {
          ...wb
        };
        return Mb.group ??= this.defaultTrackGroup, this._addTrack(new Eb(this.tracks.length + 1, this, bb, Mb))
      }
      addSubtitleTrack(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(bb instanceof Vb.l)) throw new TypeError("source must be a SubtitleSource.");
        sb(wb);
        const Mb = {
          ...wb
        };
        return Mb.group ??= this.defaultTrackGroup, this._addTrack(new Fb(this.tracks.length + 1, this, bb, Mb))
      }
      setMetadataTags(bb) {
        if ((0, Hb.k)(bb), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = bb
      }
      _addTrack(bb) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (bb.source._connectedTrack) throw new Error("Source is already used for a track.");
        const wb = this.format.getSupportedTrackCounts(),
          Mb = this.tracks.reduce(((wb, Mb) => wb + (Mb.type === bb.type ? 1 : 0)), 0),
          eb = wb[bb.type].max;
        if (Mb === eb) throw new Error(0 === eb ? `${this.format._name} does not support ${bb.type} tracks.` : `${this.format._name} does not support more than ${eb} ${bb.type} track` + (1 === eb ? "" : "s") + ".");
        const Hb = wb.total.max;
        if (this.tracks.length === Hb) throw new Error(`${this.format._name} does not support more than ${Hb} tracks` + (1 === Hb ? "" : "s") + " in total.");
        if (bb.isVideoTrack()) {
          const wb = this.format.getSupportedVideoCodecs();
          if (0 === wb.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(bb.source._codec));
          if (!wb.includes(bb.source._codec)) throw new Error(`Codec '${bb.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${wb.map((bb=>`'${bb}'`)).join(", ")}.` + this.format._codecUnsupportedHint(bb.source._codec))
        } else if (bb.isAudioTrack()) {
          const wb = this.format.getSupportedAudioCodecs();
          if (0 === wb.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(bb.source._codec));
          if (!wb.includes(bb.source._codec)) throw new Error(`Codec '${bb.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${wb.map((bb=>`'${bb}'`)).join(", ")}.` + this.format._codecUnsupportedHint(bb.source._codec))
        } else if (bb.isSubtitleTrack()) {
          const wb = this.format.getSupportedSubtitleCodecs();
          if (0 === wb.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(bb.source._codec));
          if (!wb.includes(bb.source._codec)) throw new Error(`Codec '${bb.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${wb.map((bb=>`'${bb}'`)).join(", ")}.` + this.format._codecUnsupportedHint(bb.source._codec))
        }
        return this.tracks.push(bb), bb.source._connectedTrack = bb, bb
      }
      hasEnoughTracks() {
        const bb = this.format.getSupportedTrackCounts();
        for (const Mb of Ub) {
          if (this.tracks.reduce(((bb, wb) => bb + (wb.type === Mb ? 1 : 0)), 0) < bb[Mb].min) return !1
        }
        const wb = bb.total.min;
        return !(this.tracks.length < wb)
      }
      async start() {
        const bb = this.format.getSupportedTrackCounts();
        for (const Mb of Ub) {
          const wb = this.tracks.reduce(((bb, wb) => bb + (wb.type === Mb ? 1 : 0)), 0),
            eb = bb[Mb].min;
          if (wb < eb) throw new Error(eb === bb[Mb].max ? `${this.format._name} requires exactly ${eb} ${Mb} track${1===eb?"":"s"}.` : `${this.format._name} requires at least ${eb} ${Mb} track${1===eb?"":"s"}.`)
        }
        const wb = bb.total.min;
        if (this.tracks.length < wb) throw new Error(wb === bb.total.max ? `${this.format._name} requires exactly ${wb} track` + (1 === wb ? "" : "s") + "." : `${this.format._name} requires at least ${wb} track` + (1 === wb ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (Lb.e._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const bb = this._mutex.acquire();
          try {
            await this._muxer.start();
            const bb = this.tracks.map((bb => bb.source._start()));
            await Promise.all(bb)
          } finally {
            (await bb)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const bb = await this._mutex.acquire();
          try {
            const bb = this.tracks.map((bb => bb.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(bb), await Promise.all([...this._unfinalizedTargets].map((bb => bb._close()))), this._unfinalizedTargets.clear()
          } finally {
            bb()
          }
        })() : void("finalized" === this.state && Lb.e._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (Lb.e._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const bb = await this._mutex.acquire();
          try {
            const bb = this.tracks.map((bb => bb.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(bb), await this._muxer.finalize(), this._rootWriterPromise) {
              const bb = await this._rootWriterPromise;
              bb.finalized || (await bb.flush(), await bb.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (wb) {
            throw this.state = "canceled", wb
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((bb => bb._close().catch((() => {}))))), this._unfinalizedTargets.clear(), bb()
          }
        })()
      }
    }
  },
  41327: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      f: () => Hb
    });
    var eb = Mb(41244);
    const Hb = new Uint8Array(0);
    class pb {
      constructor(bb, wb, Mb, eb) {
        let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Vb = arguments.length > 5 ? arguments[5] : void 0,
          gb = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = bb, this.type = wb, this.timestamp = Mb, this.duration = eb, this.sequenceNumber = pb, bb === Hb && void 0 === Vb) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === Vb && (Vb = bb.byteLength), !(bb instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== wb && "delta" !== wb) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(Mb)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(eb) || eb < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(pb)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(Vb) || Vb < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== gb && ("object" !== typeof gb || !gb)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== gb?.alpha && !(gb.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== gb?.alphaByteLength && (!Number.isInteger(gb.alphaByteLength) || gb.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = Vb, this.sideData = gb ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === Hb
      }
      get microsecondTimestamp() {
        return Math.trunc(eb.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(eb.r * this.duration)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: bb,
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
      static fromEncodedChunk(bb, wb) {
        if (!(bb instanceof EncodedVideoChunk || bb instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const Mb = new Uint8Array(bb.byteLength);
        return bb.copyTo(Mb), new pb(Mb, bb.type, bb.timestamp / 1e6, (bb.duration ?? 0) / 1e6, void 0, void 0, wb)
      }
      clone(bb) {
        if (void 0 !== bb && ("object" !== typeof bb || null === bb)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== bb?.data && !(bb.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== bb?.type && "key" !== bb.type && "delta" !== bb.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== bb?.timestamp && !Number.isFinite(bb.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== bb?.duration && !Number.isFinite(bb.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== bb?.sequenceNumber && !Number.isFinite(bb.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== bb?.sideData && ("object" !== typeof bb.sideData || null === bb.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new pb(bb?.data ?? this.data, bb?.type ?? this.type, bb?.timestamp ?? this.timestamp, bb?.duration ?? this.duration, bb?.sequenceNumber ?? this.sequenceNumber, this.byteLength, bb?.sideData ?? this.sideData)
      }
    }
  },
  41340: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Zb,
      f: () => tb,
      h: () => Qb,
      k: () => Nb,
      n: () => zb
    });
    var eb = Mb(41244),
      Hb = Mb(41287),
      pb = function(bb, wb, Mb) {
        if (null !== wb && void 0 !== wb) {
          if ("object" !== typeof wb && "function" !== typeof wb) throw new TypeError("Object expected.");
          var eb, Hb;
          if (Mb) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            eb = wb[Symbol.asyncDispose]
          }
          if (void 0 === eb) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            eb = wb[Symbol.dispose], Mb && (Hb = eb)
          }
          if ("function" !== typeof eb) throw new TypeError("Object not disposable.");
          Hb && (eb = function() {
            try {
              Hb.call(this)
            } catch (bb) {
              return Promise.reject(bb)
            }
          }), bb.stack.push({
            value: wb,
            dispose: eb,
            async: Mb
          })
        } else Mb && bb.stack.push({
          async: !0
        });
        return wb
      },
      Vb = function(bb) {
        return function(wb) {
          function Mb(Mb) {
            wb.error = wb.hasError ? new bb(Mb, wb.error, "An error was suppressed during disposal.") : Mb, wb.hasError = !0
          }
          var eb, Hb = 0;
          return function bb() {
            for (; eb = wb.stack.pop();) try {
              if (!eb.async && 1 === Hb) return Hb = 0, wb.stack.push(eb), Promise.resolve().then(bb);
              if (eb.dispose) {
                var pb = eb.dispose.call(eb.value);
                if (eb.async) return Hb |= 2, Promise.resolve(pb).then(bb, (function(wb) {
                  return Mb(wb), bb()
                }))
              } else Hb |= 1
            } catch (Vb) {
              Mb(Vb)
            }
            if (1 === Hb) return wb.hasError ? Promise.reject(wb.error) : Promise.resolve();
            if (wb.hasError) throw wb.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(bb, wb, Mb) {
        var eb = new Error(Mb);
        return eb.name = "SuppressedError", eb.error = bb, eb.suppressed = wb, eb
      });
    (0, eb.qc)();
    let gb = -1 / 0,
      lb = -1 / 0,
      Lb = null;
    "undefined" !== typeof FinalizationRegistry && (Lb = new FinalizationRegistry((bb => {
      const wb = performance.now();
      "video" === bb.type ? (wb - gb >= 1e3 && (Hb.e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), gb = wb), "undefined" !== typeof VideoFrame && bb.data instanceof VideoFrame && bb.data.close()) : (wb - lb >= 1e3 && (Hb.e._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), lb = wb), "undefined" !== typeof AudioData && bb.data instanceof AudioData && bb.data.close())
    })));
    class Ib {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const Ob = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      Ub = new Set(Ob);
    class tb {
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
        return Math.trunc(eb.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(eb.r * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(bb, wb) {
        if (this._closed = !1, bb instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && bb instanceof SharedArrayBuffer || ArrayBuffer.isView(bb)) {
          if (!wb || "object" !== typeof wb) throw new TypeError("init must be an object.");
          if (void 0 === wb.format || !Ub.has(wb.format)) throw new TypeError("init.format must be one of: " + Ob.join(", "));
          if (!Number.isInteger(wb.codedWidth) || wb.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(wb.codedHeight) || wb.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== wb.rotation && ![0, 90, 180, 270].includes(wb.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== wb.flip && "boolean" !== typeof wb.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(wb.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== wb.duration && (!Number.isFinite(wb.duration) || wb.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== wb.layout) {
            if (!Array.isArray(wb.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const bb of wb.layout) {
              if (!bb || "object" !== typeof bb || Array.isArray(bb)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(bb.offset) || bb.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(bb.stride) || bb.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== wb.visibleRect && (0, eb.sd)(wb.visibleRect, "init.visibleRect"), void 0 !== wb.displayWidth && (!Number.isInteger(wb.displayWidth) || wb.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== wb.displayHeight && (!Number.isInteger(wb.displayHeight) || wb.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== wb.displayWidth !== (void 0 !== wb.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = wb.format, this.rotation = wb.rotation ?? 0, this.flip = wb.flip ?? !1, this.timestamp = wb.timestamp, this.duration = wb.duration ?? 0;
          const Mb = wb.layout ?? xb(wb.format, wb.codedWidth, wb.codedHeight);
          let Hb = wb.colorSpace ?? null;
          null === Hb && (Hb = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: wb.visibleRect?.left ?? 0,
            top: wb.visibleRect?.top ?? 0,
            width: wb.visibleRect?.width ?? wb.codedWidth,
            height: wb.visibleRect?.height ?? wb.codedHeight
          }, void 0 !== wb.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? wb.displayWidth : wb.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? wb.displayHeight : wb.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = wb._doNotCopy ? (0, eb.od)(bb) : (0, eb.od)(bb).slice(), this._layout = Mb, this.colorSpace = new sb(Hb)
        } else if ("undefined" !== typeof VideoFrame && bb instanceof VideoFrame) {
          if (void 0 !== wb?.rotation && ![0, 90, 180, 270].includes(wb.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== wb?.flip && "boolean" !== typeof wb.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== wb?.timestamp && !Number.isFinite(wb?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== wb?.duration && (!Number.isFinite(wb.duration) || wb.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== wb?.visibleRect && (0, eb.sd)(wb.visibleRect, "init.visibleRect"), this._data = bb, this._layout = null, this.format = bb.format, this.visibleRect = {
            left: bb.visibleRect?.x ?? 0,
            top: bb.visibleRect?.y ?? 0,
            width: bb.visibleRect?.width ?? bb.codedWidth,
            height: bb.visibleRect?.height ?? bb.codedHeight
          }, this.rotation = wb?.rotation ?? 0, this.flip = wb?.flip ?? !1, this.squarePixelWidth = bb.displayWidth, this.squarePixelHeight = bb.displayHeight, this.timestamp = wb?.timestamp ?? bb.timestamp / 1e6, this.duration = wb?.duration ?? (bb.duration ?? 0) / 1e6, this.colorSpace = new sb(bb.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && bb instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && bb instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && bb instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && bb instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && bb instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && bb instanceof OffscreenCanvas) {
          if (!wb || "object" !== typeof wb) throw new TypeError("init must be an object.");
          if (void 0 !== wb.rotation && ![0, 90, 180, 270].includes(wb.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== wb.flip && "boolean" !== typeof wb.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(wb.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== wb.duration && (!Number.isFinite(wb.duration) || wb.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== wb.visibleRect && (0, eb.sd)(wb.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new tb(new VideoFrame(bb, {
            timestamp: Math.trunc(wb.timestamp * eb.r),
            duration: Math.trunc((wb.duration ?? 0) * eb.r) || void 0,
            visibleRect: wb.visibleRect && {
              x: wb.visibleRect.left,
              y: wb.visibleRect.top,
              width: wb.visibleRect.width,
              height: wb.visibleRect.height
            }
          }), wb);
          let Mb = 0,
            Hb = 0;
          if ("naturalWidth" in bb ? (Mb = bb.naturalWidth, Hb = bb.naturalHeight) : "videoWidth" in bb ? (Mb = bb.videoWidth, Hb = bb.videoHeight) : "width" in bb && (Mb = Number(bb.width), Hb = Number(bb.height)), !Mb || !Hb) throw new TypeError("Could not determine dimensions.");
          const pb = wb.visibleRect ?? {
              left: 0,
              top: 0,
              width: Mb,
              height: Hb
            },
            Vb = new OffscreenCanvas(pb.width, pb.height),
            gb = Vb.getContext("2d", {
              alpha: (0, eb.Cb)(),
              willReadFrequently: !0
            });
          if (!gb) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          gb.drawImage(bb, -pb.left, -pb.top), this._data = Vb, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: pb.width,
            height: pb.height
          }, this.squarePixelWidth = pb.width, this.squarePixelHeight = pb.height, this.rotation = wb.rotation ?? 0, this.flip = wb.flip ?? !1, this.timestamp = wb.timestamp, this.duration = wb.duration ?? 0, this.colorSpace = new sb({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(bb instanceof Ib)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!wb || "object" !== typeof wb) throw new TypeError("init must be an object.");
          if (void 0 !== wb.rotation && ![0, 90, 180, 270].includes(wb.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== wb.flip && "boolean" !== typeof wb.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(wb.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== wb.duration && (!Number.isFinite(wb.duration) || wb.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = bb, bb._referenceCount++, this.format = bb.getFormat(), null !== this.format && !Ob.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: bb.getCodedWidth(),
              height: bb.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = bb.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = bb.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = wb.rotation ?? 0, this.flip = wb.flip ?? !1, this.timestamp = wb.timestamp, this.duration = wb.duration ?? 0, this.colorSpace = bb.getColorSpace()
        }
        this.encodeOptions = wb?.encodeOptions ?? {}, this.pixelAspectRatio = (0, eb.fd)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), Lb?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, eb.L)(null !== this._data), this._data instanceof Ib ? new tb(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : mb(this._data) ? new tb(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, eb.L)(this._layout), new tb(this._data, {
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
        })) : new tb(this._data, {
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
        this._closed || (Lb?.unregister(this), this._data instanceof Ib ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : mb(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (Xb(bb), this._closed) throw new Error("VideoSample is closed.");
        if (null == (bb.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (mb(this._data)) return this._data.allocationSize(bb);
        return Kb(this, bb).allocationSize
      }
      async copyTo(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, eb.sb)(bb)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (Xb(wb), this._closed) throw new Error("VideoSample is closed.");
        if (null == (wb.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, eb.L)(null !== this._data), mb(this._data)) return this._data.copyTo(bb, wb);
        if (wb.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(wb.format)) {
          if (!(this._data instanceof Ib)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const Mb = this.toVideoFrame(),
              eb = await Mb.copyTo(bb, wb);
            return Mb.close(), eb
          } {
            const Mb = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const eb = pb(Mb, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, wb.colorSpace ?? "srgb"), !1);
              if (!(eb instanceof tb)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(eb.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${eb.format}' instead.`);
              return await eb.copyTo(bb, wb)
            } catch (Ub) {
              Mb.error = Ub, Mb.hasError = !0
            } finally {
              Vb(Mb)
            }
          }
        }
        const Mb = Kb(this, wb);
        (0, eb.L)(this.format);
        const Hb = (0, eb.od)(bb);
        if (Hb.byteLength < Mb.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${Mb.allocationSize}, Available: ${Hb.byteLength}`);
        const gb = jb(this.format);
        let lb;
        if (this._data instanceof Ib) {
          let bb = this._data.getDataPlanes();
          if ((0, eb.Ub)(bb) && (bb = await bb), !Array.isArray(bb) || bb.some((bb => !(bb.data instanceof Uint8Array) || !Number.isInteger(bb.stride) || bb.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          lb = bb
        } else if (this._data instanceof Uint8Array)(0, eb.L)(this._layout), (0, eb.L)(this._layout.length === gb.length), lb = this._layout.map(((bb, wb) => {
          const Mb = Math.ceil(this.codedHeight / gb[wb].heightDivisor);
          return {
            data: this._data.subarray(bb.offset, bb.offset + bb.stride * Mb),
            stride: bb.stride
          }
        }));
        else {
          const bb = this._data.getContext("2d");
          (0, eb.L)(bb);
          const wb = bb.getImageData(0, 0, this.codedWidth, this.codedHeight);
          lb = [{
            data: (0, eb.od)(wb.data),
            stride: 4 * this.codedWidth
          }]
        }
        const Lb = [],
          Ob = gb.length;
        for (let eb = 0; eb < Ob; eb++) {
          const bb = Mb.computedLayouts[eb],
            wb = lb[eb].stride,
            pb = lb[eb].data;
          let Vb = bb.sourceTop * wb;
          Vb += bb.sourceLeftBytes;
          let gb = bb.destinationOffset;
          const Ib = bb.sourceWidthBytes,
            Ob = {
              offset: gb,
              stride: bb.destinationStride
            };
          for (let Mb = 0; Mb < bb.sourceHeight; Mb++) {
            if (Vb + Ib > pb.byteLength) throw new Error("Source buffer OOB read.");
            if (gb + Ib > Hb.byteLength) throw new Error("Destination buffer OOB write.");
            const Mb = pb.subarray(Vb, Vb + Ib);
            Hb.set(Mb, gb), Vb += wb, gb += bb.destinationStride
          }
          Lb.push(Ob)
        }
        if (void 0 !== wb.format) {
          const bb = this.format.startsWith("RGB") !== wb.format.startsWith("RGB"),
            eb = this.format.includes("X") && wb.format.includes("A");
          if (bb || eb)
            for (let wb = 0; wb < Mb.allocationSize; wb += 4) {
              if (bb) {
                const bb = Hb[wb],
                  Mb = Hb[wb + 2];
                Hb[wb] = Mb, Hb[wb + 2] = bb
              }
              eb && (Hb[wb + 3] = 255)
            }
        }
        return Lb
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, eb.L)(null !== this._data), this._data instanceof Ib) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const bb = this._data.getDataPlanes();
          if ((0, eb.Ub)(bb)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const wb = bb.reduce(((bb, wb) => bb + wb.data.byteLength), 0),
            Mb = new Uint8Array(wb);
          let Hb = 0;
          const pb = [];
          for (const eb of bb) Mb.set(eb.data, Hb), pb.push(Hb), Hb += eb.data.byteLength;
          return new VideoFrame(Mb, {
            format: this.format,
            layout: bb.map(((bb, wb) => ({
              offset: pb[wb],
              stride: bb.stride
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
        return mb(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, eb.L)(this._layout), new VideoFrame(this._data, {
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
      draw(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        let Lb = 0,
          Ib = 0,
          Ob = this.displayWidth,
          Ub = this.displayHeight,
          tb = 0,
          Cb = 0,
          Eb = this.displayWidth,
          Fb = this.displayHeight;
        if (void 0 !== pb ? (Lb = wb, Ib = Mb, Ob = eb, Ub = Hb, tb = pb, Cb = Vb, void 0 !== gb ? (Eb = gb, Fb = lb) : (Eb = Ob, Fb = Ub)) : (tb = wb, Cb = Mb, void 0 !== eb && (Eb = eb, Fb = Hb)), !("undefined" !== typeof CanvasRenderingContext2D && bb instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && bb instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(Lb)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(Ib)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(Ob) || Ob < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(Ub) || Ub < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(tb)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(Cb)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(Eb) || Eb < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(Fb) || Fb < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: Lb,
          sy: Ib,
          sWidth: Ob,
          sHeight: Ub
        } = this._unmapSourceRegion(Lb, Ib, Ob, Ub, this.rotation, this.flip));
        const Bb = this.toCanvasImageSource();
        bb.save();
        const sb = tb + Eb / 2,
          mb = Cb + Fb / 2;
        bb.translate(sb, mb), this.flip && bb.scale(-1, 1), bb.rotate(this.rotation * Math.PI / 180);
        const hb = this.rotation % 180 === 0 ? 1 : Eb / Fb;
        bb.scale(1 / hb, hb), bb.drawImage(Bb, Lb, Ib, Ob, Ub, -Eb / 2, -Fb / 2, Eb, Fb), bb.restore()
      }
      drawWithFit(bb, wb) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && bb instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && bb instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!wb || "object" !== typeof wb) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(wb.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== wb.rotation && ![0, 90, 180, 270].includes(wb.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== wb.flip && "boolean" !== typeof wb.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== wb.crop && zb(wb.crop, "options.");
        const Mb = bb.canvas.width,
          eb = bb.canvas.height,
          Hb = wb.rotation ?? this.rotation,
          pb = wb.flip ?? this.flip,
          [Vb, gb] = Hb % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let lb, Lb, Ib, Ob, Ub = wb.crop;
        Ub && (Ub = hb(Ub, Vb, gb));
        const {
          sx: tb,
          sy: Cb,
          sWidth: Eb,
          sHeight: Fb
        } = this._unmapSourceRegion(wb.crop?.left ?? 0, wb.crop?.top ?? 0, wb.crop?.width ?? Vb, wb.crop?.height ?? gb, Hb, pb);
        if ("fill" === wb.fit) lb = 0, Lb = 0, Ib = Mb, Ob = eb;
        else {
          const [bb, Hb] = wb.crop ? [wb.crop.width, wb.crop.height] : [Vb, gb], pb = "contain" === wb.fit ? Math.min(Mb / bb, eb / Hb) : Math.max(Mb / bb, eb / Hb);
          Ib = bb * pb, Ob = Hb * pb, lb = (Mb - Ib) / 2, Lb = (eb - Ob) / 2
        }
        bb.save();
        const Bb = Hb % 180 === 0 ? 1 : Ib / Ob;
        bb.translate(Mb / 2, eb / 2), pb && bb.scale(-1, 1), bb.rotate(Hb * Math.PI / 180), bb.scale(1 / Bb, Bb), bb.translate(-Mb / 2, -eb / 2), bb.drawImage(this.toCanvasImageSource(), tb, Cb, Eb, Fb, lb, Lb, Ib, Ob), bb.restore()
      }
      _unmapSourceRegion(bb, wb, Mb, eb, Hb, pb) {
        if (pb) {
          bb = (Hb % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - bb - Mb
        }
        return 90 === Hb ? [bb, wb, Mb, eb] = [wb, this.squarePixelHeight - bb - Mb, eb, Mb] : 180 === Hb ? [bb, wb] = [this.squarePixelWidth - bb - Mb, this.squarePixelHeight - wb - eb] : 270 === Hb && ([bb, wb, Mb, eb] = [this.squarePixelWidth - wb - eb, bb, eb, Mb]), {
          sx: bb,
          sy: wb,
          sWidth: Mb,
          sHeight: eb
        }
      }
      _drawWithFitAndMipmapping(bb, wb, Mb) {
        const eb = bb.width,
          Hb = bb.height,
          [pb, Vb] = Mb.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          gb = Mb.crop ? Mb.crop.width : pb,
          lb = Mb.crop ? Mb.crop.height : Vb;
        let Lb = 0;
        2 * eb < gb && 2 * Hb < lb && (Lb = Math.floor(Math.log2(Math.min(gb / eb, lb / Hb))));
        const Ib = eb * 2 ** Lb,
          Ob = Hb * 2 ** Lb,
          {
            canvas: Ub,
            context: tb,
            isNew: Cb
          } = Lb > 0 ? Bb(Ib, Ob) : {
            canvas: bb,
            context: wb,
            isNew: Mb.targetIsFresh
          };
        tb.imageSmoothingQuality = "high", Mb.fillBlack ? (tb.fillStyle = "black", tb.fillRect(0, 0, Ib, Ob)) : Cb || tb.clearRect(0, 0, Ib, Ob), this.drawWithFit(tb, {
          fit: Mb.fit,
          rotation: Mb.rotation,
          flip: Mb.flip,
          crop: Mb.crop
        }), tb.globalCompositeOperation = "copy";
        for (let Eb = Lb; Eb > 1; Eb--) {
          const bb = eb * 2 ** Eb,
            wb = Hb * 2 ** Eb;
          tb.drawImage(Ub, 0, 0, bb, wb, 0, 0, bb / 2, wb / 2)
        }
        tb.globalCompositeOperation = "source-over", Lb > 0 && (wb.imageSmoothingQuality = "high", wb.globalCompositeOperation = "copy", wb.drawImage(Ub, 0, 0, 2 * eb, 2 * Hb, 0, 0, eb, Hb), wb.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, eb.L)(null !== this._data), this._data instanceof Ib || this._data instanceof Uint8Array) {
          const bb = this.toVideoFrame();
          return queueMicrotask((() => bb.close())), bb
        }
        return this._data
      }
      async transform(bb) {
        if (!bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (void 0 !== bb.width && (!Number.isInteger(bb.width) || bb.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== bb.height && (!Number.isInteger(bb.height) || bb.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== bb.roundDimensionsTo && (!Number.isInteger(bb.roundDimensionsTo) || bb.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== bb.fit && !["fill", "contain", "cover"].includes(bb.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== bb.width && void 0 !== bb.height && void 0 === bb.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== bb.rotate && ![0, 90, 180, 270].includes(bb.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== bb.flip && "boolean" !== typeof bb.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== bb.crop && zb(bb.crop, "options."), void 0 !== bb.alpha && !["keep", "discard"].includes(bb.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: wb,
          flip: Mb
        } = (0, eb.hb)(this.rotation, this.flip, bb.rotate ?? 0, bb.flip ?? !1), [Hb, pb] = wb % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let Vb = bb.crop;
        Vb && (Vb = hb(Vb, Hb, pb));
        const gb = Vb ? Vb.width : Hb,
          lb = Vb ? Vb.height : pb,
          Lb = gb / lb;
        let Ib, Ob;
        void 0 !== bb.width && void 0 === bb.height ? (Ib = bb.width, Ob = Ib / Lb) : void 0 === bb.width && void 0 !== bb.height ? (Ob = bb.height, Ib = Ob * Lb) : void 0 !== bb.width && void 0 !== bb.height ? (Ib = bb.width, Ob = bb.height) : (Ib = gb, Ob = lb), Ib = (0, eb.Pc)(Ib, bb.roundDimensionsTo ?? 1), Ob = (0, eb.Pc)(Ob, bb.roundDimensionsTo ?? 1);
        const Ub = {
          width: Ib,
          height: Ob,
          fit: bb.fit ?? "fill",
          rotation: wb,
          flip: Mb,
          crop: Vb ?? {
            left: 0,
            top: 0,
            width: Hb,
            height: pb
          },
          alpha: bb.alpha ?? "keep"
        };
        for (const tb of Cb) {
          let bb = tb(this, Ub);
          if ((0, eb.Ub)(bb) && (bb = await bb), null !== bb) return bb
        }
        const {
          canvas: Eb,
          context: Fb,
          isNew: sb
        } = Bb(Ub.width, Ub.height);
        return this._drawWithFitAndMipmapping(Eb, Fb, {
          fit: Ub.fit,
          rotation: Ub.rotation,
          flip: Ub.flip,
          crop: Ub.crop,
          targetIsFresh: sb,
          fillBlack: "discard" === Ub.alpha
        }), new tb(Eb, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(bb) {
        if (![0, 90, 180, 270].includes(bb)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = bb
      }
      setFlip(bb) {
        if ("boolean" !== typeof bb) throw new TypeError("newFlip must be a boolean.");
        this.flip = bb
      }
      setTimestamp(bb) {
        if (!Number.isFinite(bb)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = bb
      }
      setDuration(bb) {
        if (!Number.isFinite(bb) || bb < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = bb
      }
      setEncodeOptions(bb) {
        if (!bb || "object" !== typeof bb) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = bb
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const Cb = [],
      Eb = [];
    let Fb = 0;
    const Bb = (bb, wb) => {
      for (const eb of Eb)
        if (eb.canvas.width === bb && eb.canvas.height === wb) return eb.age = Fb++, {
          canvas: eb.canvas,
          context: eb.context,
          isNew: !1
        };
      let Mb;
      if ("undefined" !== typeof OffscreenCanvas) Mb = new OffscreenCanvas(bb, wb);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        Mb = document.createElement("canvas"), Mb.width = bb, Mb.height = wb
      }
      const Hb = Mb.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!Hb) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return Eb.length >= 3 && Eb.splice((0, eb.D)(Eb, (bb => bb.age)), 1), Eb.push({
        canvas: Mb,
        context: Hb,
        age: Fb++
      }), {
        canvas: Mb,
        context: Hb,
        isNew: !0
      }
    };
    class sb {
      constructor(bb) {
        if (void 0 !== bb) {
          if (!bb || "object" !== typeof bb) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const wb = Object.keys(eb.e);
          if (null != bb.primaries && !wb.includes(bb.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${wb.join(", ")}.`);
          const Mb = Object.keys(eb.s);
          if (null != bb.transfer && !Mb.includes(bb.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${Mb.join(", ")}.`);
          const Hb = Object.keys(eb.m);
          if (null != bb.matrix && !Hb.includes(bb.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${Hb.join(", ")}.`);
          if (null != bb.fullRange && "boolean" !== typeof bb.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = bb?.primaries ?? null, this.transfer = bb?.transfer ?? null, this.matrix = bb?.matrix ?? null, this.fullRange = bb?.fullRange ?? null
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
    const mb = bb => "undefined" !== typeof VideoFrame && bb instanceof VideoFrame,
      hb = (bb, wb, Mb) => {
        const Hb = Math.min(bb.left, wb),
          pb = Math.min(bb.top, Mb),
          Vb = Math.min(bb.width, wb - Hb),
          gb = Math.min(bb.height, Mb - pb);
        return (0, eb.L)(Vb >= 0), (0, eb.L)(gb >= 0), {
          left: Hb,
          top: pb,
          width: Vb,
          height: gb
        }
      },
      zb = (bb, wb) => {
        if (!bb || "object" !== typeof bb) throw new TypeError(wb + "crop, when provided, must be an object.");
        if (!Number.isInteger(bb.left) || bb.left < 0) throw new TypeError(wb + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(bb.top) || bb.top < 0) throw new TypeError(wb + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(bb.width) || bb.width < 0) throw new TypeError(wb + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(bb.height) || bb.height < 0) throw new TypeError(wb + "crop.height must be a non-negative integer.")
      },
      Xb = bb => {
        if (!bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (void 0 !== bb.colorSpace && !["display-p3", "srgb"].includes(bb.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== bb.format && "string" !== typeof bb.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== bb.layout) {
          if (!Array.isArray(bb.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const wb of bb.layout) {
            if (!wb || "object" !== typeof wb) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(wb.offset) || wb.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(wb.stride) || wb.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== bb.rect) {
          if (!bb.rect || "object" !== typeof bb.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== bb.rect.x && (!Number.isInteger(bb.rect.x) || bb.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== bb.rect.y && (!Number.isInteger(bb.rect.y) || bb.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== bb.rect.width && (!Number.isInteger(bb.rect.width) || bb.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== bb.rect.height && (!Number.isInteger(bb.rect.height) || bb.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      xb = (bb, wb, Mb) => {
        const eb = jb(bb),
          Hb = [];
        let pb = 0;
        for (const Vb of eb) {
          const bb = Math.ceil(wb / Vb.widthDivisor),
            eb = Math.ceil(Mb / Vb.heightDivisor),
            gb = bb * Vb.sampleBytes,
            lb = gb * eb;
          Hb.push({
            offset: pb,
            stride: gb
          }), pb += lb
        }
        return Hb
      },
      jb = bb => {
        const wb = (bb, wb, Mb, eb, Hb) => {
          const pb = [{
            sampleBytes: bb,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: wb,
            widthDivisor: Mb,
            heightDivisor: eb
          }, {
            sampleBytes: wb,
            widthDivisor: Mb,
            heightDivisor: eb
          }];
          return Hb && pb.push({
            sampleBytes: bb,
            widthDivisor: 1,
            heightDivisor: 1
          }), pb
        };
        switch (bb) {
          case "I420":
            return wb(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return wb(2, 2, 2, 2, !1);
          case "I420A":
            return wb(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return wb(2, 2, 2, 2, !0);
          case "I422":
            return wb(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return wb(2, 2, 2, 1, !1);
          case "I422A":
            return wb(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return wb(2, 2, 2, 1, !0);
          case "I444":
            return wb(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return wb(2, 2, 1, 1, !1);
          case "I444A":
            return wb(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return wb(2, 2, 1, 1, !0);
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
            (0, eb.H)(bb), (0, eb.L)(!1)
        }
      },
      Kb = (bb, wb) => {
        const Mb = {
            left: 0,
            top: 0,
            width: bb.codedWidth,
            height: bb.codedHeight
          },
          eb = wb.rect,
          Hb = rb(Mb, eb, bb.codedWidth, bb.codedHeight, bb.format),
          pb = wb.layout;
        let Vb;
        if (wb.format && wb.format !== bb.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(wb.format)) throw new Error("NotSupportedError: Invalid destination format.");
          Vb = wb.format
        } else Vb = bb.format;
        return Db(Hb, Vb, pb)
      },
      rb = (bb, wb, Mb, eb, Hb) => {
        const pb = {
          ...bb
        };
        if (void 0 !== wb) {
          if (0 === wb.width || 0 === wb.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((wb.x || 0) + (wb.width || 0) > Mb) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((wb.y || 0) + (wb.height || 0) > eb) throw new TypeError("visibleRect exceeds codedHeight.");
          pb.x = wb.x || 0, pb.y = wb.y || 0, pb.width = wb.width || 0, pb.height = wb.height || 0
        }
        if (!Rb(Hb, pb)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return pb
      },
      Rb = (bb, wb) => {
        if (null === bb) return !0;
        const Mb = jb(bb);
        for (let eb = 0; eb < Mb.length; eb++) {
          const bb = Mb[eb],
            Hb = bb.widthDivisor,
            pb = bb.heightDivisor;
          if ((wb.x || 0) % Hb !== 0) return !1;
          if ((wb.y || 0) % pb !== 0) return !1
        }
        return !0
      },
      Db = (bb, wb, Mb) => {
        const eb = jb(wb),
          Hb = eb.length;
        if (void 0 !== Mb && Mb.length !== Hb) throw new TypeError(`Layout must have ${Hb} planes.`);
        let pb = 0;
        const Vb = [],
          gb = [];
        for (let lb = 0; lb < Hb; lb++) {
          const wb = eb[lb],
            Hb = wb.sampleBytes,
            Lb = wb.widthDivisor,
            Ib = wb.heightDivisor,
            Ob = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (Ob.sourceTop = Math.ceil(Math.trunc(bb.y || 0) / Ib), Ob.sourceHeight = Math.ceil(Math.trunc(bb.height || 0) / Ib), Ob.sourceLeftBytes = Math.floor(Math.trunc(bb.x || 0) / Lb) * Hb, Ob.sourceWidthBytes = Math.floor(Math.trunc(bb.width || 0) / Lb) * Hb, void 0 !== Mb) {
            const bb = Mb[lb];
            if (bb.stride < Ob.sourceWidthBytes) throw new TypeError(`Stride for plane ${lb} is too small.`);
            Ob.destinationOffset = bb.offset, Ob.destinationStride = bb.stride
          } else Ob.destinationOffset = pb, Ob.destinationStride = Ob.sourceWidthBytes;
          const Ub = Ob.destinationStride * Ob.sourceHeight + Ob.destinationOffset;
          if (Ub > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          gb.push(Ub), pb = Math.max(pb, Ub);
          for (let bb = 0; bb < lb; bb++) {
            const wb = Vb[bb];
            if (!(gb[lb] <= wb.destinationOffset || gb[bb] <= Ob.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          Vb.push(Ob)
        }
        return {
          allocationSize: pb,
          computedLayouts: Vb
        }
      },
      cb = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class Yb {
      constructor() {
        this._referenceCount = 0
      }
    }
    class Zb {
      get microsecondTimestamp() {
        return Math.trunc(eb.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(eb.r * this.duration)
      }
      constructor(bb) {
        if (this._closed = !1, Sb(bb)) {
          if (null === bb.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = bb, this.format = bb.format, this.sampleRate = bb.sampleRate, this.numberOfFrames = bb.numberOfFrames, this.numberOfChannels = bb.numberOfChannels, this.timestamp = bb.timestamp / 1e6, this.duration = bb.numberOfFrames / bb.sampleRate
        } else if (bb instanceof Yb) {
          if (this._data = bb, bb._referenceCount++, this.format = bb.getFormat(), !cb.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = bb.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = bb.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = bb.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = bb.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!bb || "object" !== typeof bb) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!cb.has(bb.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(bb.sampleRate) || bb.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(bb.numberOfChannels) || 0 === bb.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(bb?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const wb = bb.data.byteLength / (fb(bb.format) * bb.numberOfChannels);
          if (!Number.isInteger(wb)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let Mb;
          if (this.format = bb.format, this.sampleRate = bb.sampleRate, this.numberOfFrames = wb, this.numberOfChannels = bb.numberOfChannels, this.timestamp = bb.timestamp, this.duration = wb / bb.sampleRate, bb.data instanceof ArrayBuffer) Mb = new Uint8Array(bb.data);
          else {
            if (!ArrayBuffer.isView(bb.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            Mb = new Uint8Array(bb.data.buffer, bb.data.byteOffset, bb.data.byteLength)
          }
          const eb = this.numberOfFrames * this.numberOfChannels * fb(this.format);
          if (Mb.byteLength < eb) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = Mb
        }
        Lb?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(bb) {
        if (!bb || "object" !== typeof bb) throw new TypeError("options must be an object.");
        if (!Number.isInteger(bb.planeIndex) || bb.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== bb.format && !cb.has(bb.format)) throw new TypeError("Invalid format.");
        if (void 0 !== bb.frameOffset && (!Number.isInteger(bb.frameOffset) || bb.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== bb.frameCount && (!Number.isInteger(bb.frameCount) || bb.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const wb = bb.format ?? this.format,
          Mb = bb.frameOffset ?? 0;
        if (Mb >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const eb = void 0 !== bb.frameCount ? bb.frameCount : this.numberOfFrames - Mb;
        if (eb > this.numberOfFrames - Mb) throw new RangeError("frameCount out of range");
        const Hb = fb(wb),
          pb = Ab(wb);
        if (pb && bb.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!pb && 0 !== bb.planeIndex) throw new RangeError("planeIndex out of range");
        return (pb ? eb : eb * this.numberOfChannels) * Hb
      }
      copyTo(bb, wb) {
        if (!(0, eb.sb)(bb)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!wb || "object" !== typeof wb) throw new TypeError("options must be an object.");
        if (!Number.isInteger(wb.planeIndex) || wb.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== wb.format && !cb.has(wb.format)) throw new TypeError("Invalid format.");
        if (void 0 !== wb.frameOffset && (!Number.isInteger(wb.frameOffset) || wb.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== wb.frameCount && (!Number.isInteger(wb.frameCount) || wb.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: Mb,
          frameCount: Hb,
          frameOffset: pb
        } = wb;
        let {
          planeIndex: Vb
        } = wb, gb = this.format;
        const lb = Mb ?? this.format;
        if (!lb) throw new Error("Destination format not determined");
        const Lb = this.numberOfFrames,
          Ib = this.numberOfChannels,
          Ob = pb ?? 0;
        if (Ob >= Lb) throw new RangeError("frameOffset out of range");
        const Ub = void 0 !== Hb ? Hb : Lb - Ob;
        if (Ub > Lb - Ob) throw new RangeError("frameCount out of range");
        const tb = fb(lb),
          Cb = Ab(lb);
        if (Cb && Vb >= Ib) throw new RangeError("planeIndex out of range");
        if (!Cb && 0 !== Vb) throw new RangeError("planeIndex out of range");
        const Eb = (Cb ? Ub : Ub * Ib) * tb;
        if (bb.byteLength < Eb) throw new RangeError("Destination buffer is too small");
        const Fb = (0, eb.kd)(bb),
          Bb = Jb(lb);
        if (Sb(this._data)) {
          if ((0, eb.Yb)() && Ib > 2 && lb !== gb) return void vb(this._data, Fb, gb, lb, Ib, Vb, Ob, Ub);
          try {
            return void this._data.copyTo(bb, {
              planeIndex: Vb,
              frameOffset: Ob,
              frameCount: Ub,
              format: lb
            })
          } catch (xb) {
            if ("f32-planar" === lb) throw xb;
            gb = "f32-planar"
          }
        }
        const sb = Wb(gb),
          mb = fb(gb),
          hb = Ab(gb);
        let zb;
        if (this._data instanceof Yb) {
          const bb = bb => {
            const wb = this._data.getDataPlane(bb);
            if (!(wb instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const Mb = Lb * mb * (hb ? 1 : Ib);
            if (wb.byteLength !== Mb) throw new TypeError(`Data plane ${bb} has invalid size. Expected exactly ${Mb} bytes, got ${wb.byteLength} bytes.`);
            return wb
          };
          if (hb)
            if (Cb) zb = bb(Vb), Vb = 0;
            else {
              zb = new Uint8Array(Lb * mb * Ib);
              for (let wb = 0; wb < Ib; wb++) {
                const Mb = bb(wb);
                zb.set(Mb, wb * Lb * mb)
              }
            }
          else zb = bb(0)
        } else if (this._data instanceof Uint8Array) zb = this._data;
        else if ((0, eb.L)("f32-planar" === gb), Cb) zb = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: Vb
        })), this._data.copyTo(zb, {
          format: "f32-planar",
          planeIndex: Vb
        }), Vb = 0;
        else {
          zb = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * Ib);
          for (let bb = 0; bb < Ib; bb++) this._data.copyTo(zb.subarray(bb * Lb * mb, (bb + 1) * Lb * mb), {
            format: "f32-planar",
            planeIndex: bb
          })
        }
        const Xb = (0, eb.kd)(zb);
        for (let eb = 0; eb < Ub; eb++)
          if (Cb) {
            let bb;
            bb = hb ? (Vb * Lb + (eb + Ob)) * mb : ((eb + Ob) * Ib + Vb) * mb;
            Bb(Fb, eb * tb, sb(Xb, bb))
          } else
            for (let bb = 0; bb < Ib; bb++) {
              let wb;
              wb = hb ? (bb * Lb + (eb + Ob)) * mb : ((eb + Ob) * Ib + bb) * mb;
              Bb(Fb, (eb * Ib + bb) * tb, sb(Xb, wb))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof Yb) {
          const bb = new Zb(this._data);
          return bb.setTimestamp(this.timestamp), bb
        }
        if (Sb(this._data)) {
          const bb = new Zb(this._data.clone());
          return bb.setTimestamp(this.timestamp), bb
        }
        return new Zb({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(bb) || bb < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(wb) || wb < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (bb > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (wb > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (wb < bb) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const Mb = wb - bb,
          eb = fb(this.format);
        let Hb;
        if (Ab(this.format)) {
          const wb = Mb * eb;
          if (Hb = new Uint8Array(wb * this.numberOfChannels), Mb > 0)
            for (let eb = 0; eb < this.numberOfChannels; eb++) this.copyTo(Hb.subarray(eb * wb, (eb + 1) * wb), {
              planeIndex: eb,
              format: this.format,
              frameOffset: bb,
              frameCount: Mb
            })
        } else Hb = new Uint8Array(Mb * this.numberOfChannels * eb), Mb > 0 && this.copyTo(Hb, {
          planeIndex: 0,
          format: this.format,
          frameOffset: bb,
          frameCount: Mb
        });
        return new Zb({
          data: Hb,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + bb / this.sampleRate
        })
      }
      close() {
        this._closed || (Lb?.unregister(this), this._data instanceof Yb ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : Sb(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof Yb ? this._createAudioDataFromData() : Sb(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (Ab(this.format)) {
          const bb = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            wb = new ArrayBuffer(bb * this.numberOfChannels);
          for (let Mb = 0; Mb < this.numberOfChannels; Mb++) this.copyTo(new Uint8Array(wb, Mb * bb, bb), {
            planeIndex: Mb,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: wb
          })
        } {
          const bb = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(bb, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: bb
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const bb = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          wb = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let Mb = 0; Mb < this.numberOfChannels; Mb++) this.copyTo(wb, {
          planeIndex: Mb,
          format: "f32-planar"
        }), bb.copyToChannel(wb, Mb);
        return bb
      }
      setTimestamp(bb) {
        if (!Number.isFinite(bb)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = bb
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(bb, wb) {
        if (!(bb instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const Mb = bb.numberOfChannels,
          eb = bb.sampleRate,
          Hb = bb.length,
          pb = Math.floor(24e4 / Mb);
        let Vb = 0,
          gb = Hb;
        for (; gb > 0;) {
          const Hb = Math.min(pb, gb),
            lb = new Float32Array(Mb * Hb);
          for (let wb = 0; wb < Mb; wb++) bb.copyFromChannel(lb.subarray(wb * Hb, (wb + 1) * Hb), wb, Vb);
          yield new Zb({
            format: "f32-planar",
            sampleRate: eb,
            numberOfFrames: Hb,
            numberOfChannels: Mb,
            timestamp: wb + Vb / eb,
            data: lb
          }), Vb += Hb, gb -= Hb
        }
      }
      static fromAudioBuffer(bb, wb) {
        if (!(bb instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const Mb = bb.numberOfChannels,
          eb = bb.sampleRate,
          Hb = bb.length,
          pb = Math.floor(24e4 / Mb);
        let Vb = 0,
          gb = Hb;
        const lb = [];
        for (; gb > 0;) {
          const Hb = Math.min(pb, gb),
            Lb = new Float32Array(Mb * Hb);
          for (let wb = 0; wb < Mb; wb++) bb.copyFromChannel(Lb.subarray(wb * Hb, (wb + 1) * Hb), wb, Vb);
          const Ib = new Zb({
            format: "f32-planar",
            sampleRate: eb,
            numberOfFrames: Hb,
            numberOfChannels: Mb,
            timestamp: wb + Vb / eb,
            data: Lb
          });
          lb.push(Ib), Vb += Hb, gb -= Hb
        }
        return lb
      }
    }
    const fb = bb => {
        switch (bb) {
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
      Ab = bb => {
        switch (bb) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      Wb = bb => {
        switch (bb) {
          case "u8":
          case "u8-planar":
            return (bb, wb) => (bb.getUint8(wb) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (bb, wb) => bb.getInt16(wb, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (bb, wb) => bb.getInt32(wb, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (bb, wb) => bb.getFloat32(wb, !0)
        }
      },
      Jb = bb => {
        switch (bb) {
          case "u8":
          case "u8-planar":
            return (bb, wb, Mb) => bb.setUint8(wb, (0, eb.Z)(Math.round(128 * Mb) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (bb, wb, Mb) => bb.setInt16(wb, (0, eb.Z)(Math.round(32768 * Mb), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (bb, wb, Mb) => bb.setInt32(wb, (0, eb.Z)(Math.round(2147483648 * Mb), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (bb, wb, Mb) => bb.setFloat32(wb, Mb, !0)
        }
      },
      Sb = bb => "undefined" !== typeof AudioData && bb instanceof AudioData,
      Nb = bb => {
        switch (bb) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return bb
        }
      },
      vb = (bb, wb, Mb, Hb, pb, Vb, gb, lb) => {
        const Lb = Wb(Mb),
          Ib = Jb(Hb),
          Ob = fb(Mb),
          Ub = fb(Hb),
          tb = Ab(Mb);
        if (Ab(Hb))
          if (tb) {
            const Hb = new ArrayBuffer(lb * Ob),
              pb = (0, eb.kd)(Hb);
            bb.copyTo(Hb, {
              planeIndex: Vb,
              frameOffset: gb,
              frameCount: lb,
              format: Mb
            });
            for (let bb = 0; bb < lb; bb++) {
              Ib(wb, bb * Ub, Lb(pb, bb * Ob))
            }
          } else {
            const Hb = new ArrayBuffer(lb * pb * Ob),
              tb = (0, eb.kd)(Hb);
            bb.copyTo(Hb, {
              planeIndex: 0,
              frameOffset: gb,
              frameCount: lb,
              format: Mb
            });
            for (let bb = 0; bb < lb; bb++) {
              Ib(wb, bb * Ub, Lb(tb, (bb * pb + Vb) * Ob))
            }
          }
        else if (tb) {
          const Hb = new ArrayBuffer(lb * Ob),
            Vb = (0, eb.kd)(Hb);
          for (let eb = 0; eb < pb; eb++) {
            bb.copyTo(Hb, {
              planeIndex: eb,
              frameOffset: gb,
              frameCount: lb,
              format: Mb
            });
            for (let bb = 0; bb < lb; bb++) {
              Ib(wb, (bb * pb + eb) * Ub, Lb(Vb, bb * Ob))
            }
          }
        } else {
          const Hb = new ArrayBuffer(lb * pb * Ob),
            Vb = (0, eb.kd)(Hb);
          bb.copyTo(Hb, {
            planeIndex: 0,
            frameOffset: gb,
            frameCount: lb,
            format: Mb
          });
          for (let bb = 0; bb < lb; bb++)
            for (let Mb = 0; Mb < pb; Mb++) {
              const eb = bb * pb + Mb;
              Ib(wb, eb * Ub, Lb(Vb, eb * Ob))
            }
        }
      },
      Qb = (bb, wb) => {
        const Mb = bb.allocationSize({
            format: wb,
            planeIndex: 0
          }),
          eb = new ArrayBuffer(Mb);
        return bb.copyTo(eb, {
          format: wb,
          planeIndex: 0
        }), new Zb({
          data: eb,
          format: wb,
          numberOfChannels: bb.numberOfChannels,
          sampleRate: bb.sampleRate,
          timestamp: bb.timestamp,
          duration: bb.duration
        })
      }
  },
  41303: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      h: () => Lb,
      i: () => pb,
      l: () => lb
    });
    const eb = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      Hb = /^WEBVTT(.|\n)*?\n{2}/,
      pb = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class Vb {
      constructor(bb) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = bb
      }
      parse(bb) {
        let wb;
        if (bb = bb.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), eb.lastIndex = 0, !this.preambleText) {
          if (!Hb.test(bb)) throw new Error("WebVTT preamble incorrect.");
          wb = eb.exec(bb);
          const Mb = bb.slice(0, wb?.index ?? bb.length).trimEnd();
          if (!Mb) throw new Error("No WebVTT preamble provided.");
          this.preambleText = Mb, wb && (bb = bb.slice(wb.index), eb.lastIndex = 0)
        }
        for (; wb = eb.exec(bb);) {
          const Mb = bb.slice(0, wb.index),
            Hb = wb[1],
            pb = wb.index + wb[0].length,
            Vb = bb.indexOf("\n", pb) + 1,
            gb = bb.slice(pb, Vb).trim();
          let Lb = bb.indexOf("\n\n", pb); - 1 === Lb && (Lb = bb.length);
          const Ib = lb(wb[2]),
            Ob = lb(wb[3]) - Ib,
            Ub = bb.slice(Vb, Lb).trim();
          bb = bb.slice(Lb).trimStart(), eb.lastIndex = 0;
          const tb = {
              timestamp: Ib / 1e3,
              duration: Ob / 1e3,
              text: Ub,
              identifier: Hb,
              settings: gb,
              notes: Mb
            },
            Cb = {};
          this.preambleEmitted || (Cb.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(tb, Cb)
        }
      }
    }
    const gb = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      lb = bb => {
        const wb = gb.exec(bb);
        if (!wb) throw new Error("Expected match.");
        return 36e5 * Number(wb[1] || "0") + 6e4 * Number(wb[2]) + 1e3 * Number(wb[3]) + Number(wb[4])
      },
      Lb = bb => {
        const wb = Math.floor(bb / 36e5),
          Mb = Math.floor(bb % 36e5 / 6e4),
          eb = Math.floor(bb % 6e4 / 1e3),
          Hb = bb % 1e3;
        return wb.toString().padStart(2, "0") + ":" + Mb.toString().padStart(2, "0") + ":" + eb.toString().padStart(2, "0") + "." + Hb.toString().padStart(3, "0")
      }
  },
  41316: (bb, wb, Mb) => {
    var eb;
    Mb.d(wb, {
      b: () => Lb,
      d: () => Ib,
      f: () => Ub,
      g: () => Vb
    });
    var Hb = Mb(41318),
      pb = Mb(41244);
    "undefined" !== typeof(eb || (eb = Mb.t(Hb, 2))) && (eb || (eb = Mb.t(Hb, 2)));
    class Vb extends pb.h {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(bb) {
        !1 !== this._monotonicity && (this._monotonicity = bb)
      }
      _dispatchWrite(bb, wb) {
        this.onwrite?.(bb, wb), this._emit("write", {
          start: bb,
          end: wb
        })
      }
      slice(bb) {
        if (!Number.isInteger(bb) || bb < 0) throw new TypeError("offset must be a non-negative integer.");
        return new Ob(this, bb)
      }
    }
    const gb = 65536,
      lb = 2 ** 32;
    class Lb extends Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !bb || "object" !== typeof bb) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== bb.onFinalize && "function" !== typeof bb.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = bb, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(gb, {
            maxByteLength: lb
          })
        } catch {
          this._buffer = new ArrayBuffer(gb), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(gb);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(bb) {
        let wb = this._buffer.byteLength;
        for (; wb < bb;) wb *= 2;
        if (wb !== this._buffer.byteLength) {
          if (wb > lb) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(wb);
          else {
            const bb = new ArrayBuffer(wb),
              Mb = new Uint8Array(bb);
            Mb.set(this._bytes, 0), this._buffer = bb, this._bytes = Mb
          }
        }
      }
      _start() {}
      _write(bb, wb) {
        this._ensureSize(wb + bb.byteLength), this._bytes.set(bb, wb), this._maxPos = Math.max(this._maxPos, wb + bb.byteLength), this._dispatchWrite(wb, wb + bb.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(bb, wb) {
        return this._bytes.slice(bb, wb)
      }
    }
    class Ib extends Vb {
      _start() {}
      _write(bb, wb) {
        this._dispatchWrite(wb, wb + bb.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class Ob extends Vb {
      constructor(bb, wb) {
        super(), this._baseTarget = bb, this._offset = wb
      }
      _start() {}
      _write(bb, wb) {
        this._baseTarget._write(bb, this._offset + wb), this._dispatchWrite(wb, wb + bb.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(bb) {
        super._setMonotonicity(bb), this._baseTarget._setMonotonicity(bb)
      }
    }
    class Ub {
      constructor(bb, wb) {
        if (this.rootPath = bb, this.getTarget = wb, "string" !== typeof bb) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof wb) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  41296: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = "Mediabunny v1.61.3"
  },
  41312: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(41244);
    class Hb {
      constructor(bb, wb) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, bb._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = bb, bb._setMonotonicity(wb), bb._writerAcquired = !0
      }
      start() {
        (0, eb.L)(!this.started), this.target._start(), this.started = !0
      }
      write(bb) {
        (0, eb.L)(this.started && !this.finalized), this.maybeTrackWrites(bb), this.target._write(bb, this.pos), this.pos += bb.byteLength
      }
      seek(bb) {
        this.pos = bb
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, eb.L)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, eb.L)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(bb) {
        if (!this.trackedWrites) return;
        let wb = this.getPos();
        if (wb < this.trackedStart) {
          if (wb + bb.byteLength <= this.trackedStart) return;
          bb = bb.subarray(this.trackedStart - wb), wb = 0
        }
        const Mb = wb + bb.byteLength - this.trackedStart;
        let eb = this.trackedWrites.byteLength;
        for (; eb < Mb;) eb *= 2;
        if (eb !== this.trackedWrites.byteLength) {
          const bb = new Uint8Array(eb);
          bb.set(this.trackedWrites, 0), this.trackedWrites = bb
        }
        this.trackedWrites.set(bb, wb - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, wb + bb.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const bb = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);