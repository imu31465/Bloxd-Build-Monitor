export const id = 207;
export const ids = [207];
export const modules = {
  41940: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      f: () => tH,
      i: () => hH
    });
    var AH = LH(41946),
      rH = LH(5265),
      SH = LH(41949);

    function hH(HH) {
      return HH.payloadKind === rH.jc.Msgpack ? (0, AH.e)(HH.payload) : void 0
    }

    function tH(HH, BH) {
      if (BH.payloadKind === rH.jc.Bytes || BH.payloadKind === rH.jc.MsgpackBin) return (0, SH.d)(HH, BH.payload)
    }

    function zH(HH) {
      return null !== HH && "object" === typeof HH
    }
  },
  41954: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH,
      g: () => GH,
      j: () => YH,
      k: () => EH,
      l: () => WH
    });
    var AH = LH(5265),
      rH = LH(41962);
    const SH = new Map,
      hH = new Set,
      tH = new Set;
    let zH = 0,
      CH = 0;

    function EH(HH, BH) {
      let LH = SH.get(HH);
      return LH || (LH = new Set, SH.set(HH, LH)), LH.add(BH), () => {
        LH.delete(BH)
      }
    }

    function XH() {
      return 0 !== zH
    }

    function GH(HH) {
      return hH.add(HH), () => {
        hH.delete(HH)
      }
    }

    function YH(HH) {
      return tH.add(HH), () => {
        tH.delete(HH)
      }
    }
    const uH = "A raw message listener threw";

    function QH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH;
      for (const AH of BH) try {
        AH()
      } catch (LH) {
        HH ? (0, rH.m)(LH, uH) : console.error(uH, LH)
      }
    }
    const WH = {
      fire: function(HH) {
        if ("connection" === HH.type) {
          const BH = HH.phase === AH.C.Activated && HH.conn !== zH && HH.conn > CH,
            LH = (HH.phase === AH.C.Left || HH.phase === AH.C.Closed) && HH.conn === zH;
          return void(BH || LH ? (zH = BH ? HH.conn : 0, QH(!0)) : HH.phase === AH.C.Resumed && 0 !== zH && HH.conn > CH && (zH = HH.conn, QH(!0, tH)))
        }
        const BH = SH.get(HH.kt);
        if (BH && HH.conn === zH && 0 !== zH)
          for (const AH of BH) try {
            AH(HH)
          } catch (LH) {
            (0, rH.m)(LH, uH)
          }
      },
      close: function(HH) {
        CH = Math.max(CH, HH, zH), 0 !== zH && (zH = 0, QH(!1))
      }
    }
  },
  41928: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      h: () => zH,
      k: () => tH
    });
    var AH = LH(1206),
      rH = LH(41898);
    const SH = new TextDecoder,
      hH = new TextEncoder;

    function tH(HH, BH) {
      const LH = HH.queries.entityName(BH);
      if (LH === rH.Qc) return;
      const hH = HH.memoryData(HH.scratch(), 4 + LH, 4, "entity_name's answer");
      if (!hH) return;
      const tH = hH.getUint32(0, !0),
        zH = SH.decode(new Uint8Array(hH.buffer, hH.byteOffset + 4, LH));
      return (0, AH.b)(zH, !1, tH === rH.ae ? null : tH)
    }

    function zH(HH, BH, LH) {
      const AH = hH.encode(LH);
      if (AH.length > rH.Jb) return !1;
      const SH = HH.memoryView(Uint8Array, HH.scratch(), AH.length, "has_effect's name");
      return !!SH && (SH.set(AH), 1 === HH.queries.hasEffect(BH, AH.length))
    }

    function CH(HH, BH, LH, AH) {
      const hH = HH.queries.blockData(BH, LH, AH);
      if (hH === rH.Qc) return;
      const tH = HH.memoryView(Uint8Array, HH.scratch(), hH, "block_data's answer");
      return tH ? JSON.parse(SH.decode(tH)) : void 0
    }
  },
  41946: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      g: () => EH
    });
    const AH = new TextDecoder;

    function rH(HH) {
      const BH = new SH(HH),
        LH = BH.value();
      if (BH.at !== HH.length) throw new Error(`msgpack: ${HH.length-BH.at} bytes after the value`);
      return LH
    }
    class SH {
      constructor(HH) {
        this.bytes = HH, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(HH.buffer, HH.byteOffset, HH.byteLength)
      }
      value() {
        const HH = this.u8();
        if (HH <= 127) return HH;
        if (HH >= 224) return HH - 256;
        if (HH >= 128 && HH <= 143) return this.map(15 & HH);
        if (HH >= 144 && HH <= 159) return this.array(15 & HH);
        if (HH >= 160 && HH <= 191) return this.str(31 & HH);
        switch (HH) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${HH.toString(16)} at ${this.at-1}`)
        }
      }
      take(HH) {
        const BH = this.at;
        if (BH + HH > this.bytes.length) throw new Error(`msgpack: ${HH} bytes past the end at ${BH}`);
        return this.at = BH + HH, BH
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(HH) {
        const BH = this.take(8);
        return HH ? this.view.getBigInt64(BH, !1) : this.view.getBigUint64(BH, !1)
      }
      str(HH) {
        const BH = this.take(HH),
          LH = this.bytes;
        if (HH < 16) {
          let rH = "";
          for (let SH = BH; SH < BH + HH; SH++) {
            const hH = LH[SH];
            if (hH >= 128) return AH.decode(LH.subarray(BH, BH + HH));
            rH += String.fromCharCode(hH)
          }
          return rH
        }
        return AH.decode(LH.subarray(BH, BH + HH))
      }
      bin(HH) {
        const BH = this.take(HH);
        return this.bytes.subarray(BH, BH + HH)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(HH) {
        this.enter();
        const BH = [];
        for (let LH = 0; LH < HH; LH++) BH.push(this.value());
        return this.depth--, BH
      }
      map(HH) {
        this.enter();
        const BH = {};
        for (let LH = 0; LH < HH; LH++) {
          const HH = this.value(),
            LH = this.value();
          BH["__proto__" === HH ? "__proto_" : String(HH)] = LH
        }
        return this.depth--, BH
      }
      ext(HH) {
        const BH = this.view.getInt8(this.take(1)),
          LH = this.take(HH);
        if (0 !== BH) {
          if (-1 === BH) {
            if (1 === HH) return new Date(NaN);
            if (4 === HH) return new Date(1e3 * this.view.getUint32(LH, !1));
            if (8 === HH) {
              const HH = this.view.getUint32(LH, !1),
                BH = HH >>> 2,
                AH = 4294967296 * (3 & HH) + this.view.getUint32(LH + 4, !1);
              return new Date(1e3 * AH + BH / 1e6)
            }
            if (12 === HH) {
              const HH = this.view.getUint32(LH, !1),
                BH = 4294967296 * this.view.getInt32(LH + 4, !1) + this.view.getUint32(LH + 8, !1);
              return new Date(1e3 * BH + HH / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${BH} of ${HH} bytes`)
        }
      }
    }
    const hH = new TextEncoder,
      tH = -(2n ** 63n),
      zH = 2n ** 63n - 1n,
      CH = 2n ** 64n - 1n;

    function EH(HH) {
      const BH = new XH;
      return BH.value(HH, 0), BH.bytes()
    }
    class XH {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(HH, BH) {
        if (BH > 512) throw new Error("msgpack: nested too deep");
        switch (typeof HH) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(HH ? 195 : 194);
          case "number":
            return void this.number(HH);
          case "bigint":
            return void this.bigint(HH);
          case "string":
            return void this.string(HH);
          case "object":
            if (null === HH) this.u8(192);
            else if (HH instanceof Uint8Array) this.head(HH.length, 196, -1, 197, 198), this.room(HH.length), this.buf.set(HH, this.at), this.at += HH.length;
            else if (Array.isArray(HH)) {
              this.head(HH.length, 220, 144, 220, 221);
              for (const LH of HH) this.value(LH, BH + 1)
            } else {
              var LH, AH;
              if (Object.getPrototypeOf(HH) !== Object.prototype && null !== Object.getPrototypeOf(HH)) throw new Error(`msgpack: can't encode a ${null!==(LH=null===(AH=HH.constructor)||void 0===AH?void 0:AH.name)&&void 0!==LH?LH:"object"}`);
              {
                const LH = Object.keys(HH);
                this.head(LH.length, 222, 128, 222, 223);
                for (const AH of LH) this.string(AH), this.value(HH[AH], BH + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof HH)
        }
      }
      number(HH) {
        Number.isInteger(HH) && HH >= -2147483648 && HH <= 4294967295 ? HH >= 0 ? HH < 128 ? this.u8(HH) : HH < 256 ? (this.u8(204), this.u8(HH)) : HH < 65536 ? (this.u8(205), this.u16(HH)) : (this.u8(206), this.u32(HH)) : HH >= -32 ? this.u8(HH + 256) : HH >= -128 ? (this.u8(208), this.u8(HH + 256)) : HH >= -32768 ? (this.u8(209), this.u16(HH + 65536)) : (this.u8(210), this.u32(HH >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, HH, !1), this.at += 8)
      }
      bigint(HH) {
        const BH = HH >= tH && HH <= zH;
        if (!BH && (HH < 0n || HH > CH)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(BH ? 211 : 207), this.room(8), BH ? this.view.setBigInt64(this.at, HH, !1) : this.view.setBigUint64(this.at, HH, !1), this.at += 8
      }
      string(HH) {
        const BH = hH.encode(HH);
        this.head(BH.length, 217, 160, 218, 219), this.room(BH.length), this.buf.set(BH, this.at), this.at += BH.length
      }
      head(HH, BH, LH, AH, rH) {
        LH >= 0 && HH < (160 === LH ? 32 : 16) ? this.u8(LH | HH) : BH !== AH && HH < 256 ? (this.u8(BH), this.u8(HH)) : HH < 65536 ? (this.u8(AH), this.u16(HH)) : (this.u8(rH), this.u32(HH))
      }
      room(HH) {
        if (this.at + HH <= this.buf.length) return;
        let BH = 2 * this.buf.length;
        for (; BH < this.at + HH;) BH *= 2;
        const LH = new Uint8Array(BH);
        LH.set(this.buf.subarray(0, this.at)), this.buf = LH, this.view = new DataView(LH.buffer)
      }
      u8(HH) {
        this.room(1), this.buf[this.at++] = HH
      }
      u16(HH) {
        this.room(2), this.view.setUint16(this.at, HH, !1), this.at += 2
      }
      u32(HH) {
        this.room(4), this.view.setUint32(this.at, HH, !1), this.at += 4
      }
    }
  },
  41949: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41933);
    const rH = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class SH {
      constructor(HH) {
        this.buf = HH, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let HH = this.u8(),
          BH = 127 & HH,
          LH = 128;
        for (; 128 & HH;) {
          if (LH > 2 ** 63) throw new RangeError("avro: varint too long");
          HH = this.u8(), BH += (127 & HH) * LH, LH *= 128
        }
        return BH % 2 === 1 ? -(BH + 1) / 2 : BH / 2
      }
      float() {
        const HH = this.take(4);
        return this.floats().getFloat32(HH, !0)
      }
      double() {
        const HH = this.take(8);
        return this.floats().getFloat64(HH, !0)
      }
      str() {
        const HH = this.size(),
          BH = this.take(HH),
          LH = BH + HH;
        if (HH <= 32) {
          let HH = "";
          for (let AH = BH; AH < LH; AH++) {
            const SH = this.buf[AH];
            if (SH >= 128) return rH.decode(this.buf.subarray(BH, LH));
            HH += String.fromCharCode(SH)
          }
          return HH
        }
        return rH.decode(this.buf.subarray(BH, LH))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(HH) {
        const BH = this.take(HH);
        return this.buf.slice(BH, BH + HH)
      }
      index(HH) {
        const BH = this.long();
        if (!(BH >= 0 && BH < HH)) throw new RangeError(`avro: index ${BH} of ${HH}`);
        return BH
      }
      CX(HH) {
        const BH = [];
        for (let LH = this.long(); 0 !== LH; LH = this.long()) {
          LH = this.block(LH);
          for (let AH = 0; AH < LH; AH++) BH.push(HH(this))
        }
        return BH
      }
      map(HH) {
        const BH = {};
        for (let LH = this.long(); 0 !== LH; LH = this.long()) {
          LH = this.block(LH);
          for (let AH = 0; AH < LH; AH++) {
            BH[this.str()] = HH(this)
          }
        }
        return BH
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(HH) {
        let BH = HH;
        if (BH < 0 && (BH = -BH, this.long()), BH > this.buf.length - this.at) throw new RangeError(`avro: block of ${BH} items in ${this.buf.length-this.at} bytes`);
        return BH
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const HH = this.long();
        if (HH < 0) throw new RangeError(`avro: length ${HH}`);
        return HH
      }
      u8() {
        const HH = this.buf[this.at];
        if (void 0 === HH) throw new RangeError("avro: truncated");
        return this.at++, HH
      }
      take(HH) {
        const BH = this.at;
        if (HH > this.buf.length - BH) throw new RangeError("avro: truncated");
        return this.at = BH + HH, BH
      }
    }

    function hH(HH, BH) {
      const LH = new SH(BH),
        rH = (0, AH.ib)(HH, LH);
      return LH.end(), rH
    }
  },
  41933: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => uH,
      C: () => mH,
      D: () => rH,
      F: () => tH,
      G: () => YH,
      K: () => bH,
      N: () => OH,
      R: () => UH,
      U: () => EH,
      V: () => XH,
      Z: () => kH,
      ab: () => vH,
      d: () => TH,
      db: () => QH,
      e: () => WH,
      eb: () => zH,
      i: () => MH,
      ib: () => oH,
      j: () => xH,
      k: () => VH,
      l: () => AH,
      n: () => SH,
      q: () => PH,
      u: () => GH,
      y: () => CH,
      z: () => hH
    });
    const AH = 2,
      rH = 12,
      SH = 27,
      hH = 40,
      tH = 52,
      zH = 59,
      CH = 63,
      EH = 83,
      XH = 84,
      GH = 89,
      YH = 91,
      uH = 93,
      QH = 94,
      WH = 95,
      MH = 97,
      xH = 101,
      vH = 102,
      PH = 73,
      TH = 16,
      UH = 86,
      VH = 60,
      OH = 17,
      bH = 56,
      kH = 100,
      mH = 81;

    function oH(HH, BH) {
      switch (HH) {
        case AH:
          return function(HH) {
            return {
              Zr: sH(HH),
              dr: HH.float(),
              ar: HH.long()
            }
          }(BH);
        case rH:
          return function(HH) {
            return {
              KL: cH(HH),
              cL: cH(HH)
            }
          }(BH);
        case SH:
          return function(HH) {
            return {
              eS: HH.bool(),
              qS: cH(HH)
            }
          }(BH);
        case hH:
          return BH.str();
        case tH:
          return function(HH) {
            return {
              id: HH.long(),
              qH: hB(HH)
            }
          }(BH);
        case zH:
          return function(HH) {
            return {
              Hh: cH(HH),
              Bh: zB(HH)
            }
          }(BH);
        case CH:
          return BH.str();
        case EH:
        case XH:
          return BH.long();
        case GH:
          return function(HH) {
            return {
              gS: HH.long(),
              NS: HH.bool(),
              RS: HH.float()
            }
          }(BH);
        case YH:
          return BH.long();
        case uH:
          return function(HH) {
            return {
              aA: HH.bool(),
              QA: XB(HH)
            }
          }(BH);
        case QH:
          return function(HH) {
            return {
              id: HH.str(),
              position: EB(HH),
              KA: GB(HH),
              style: jH(HH),
              eA: HH.bool()
            }
          }(BH);
        case WH:
          return function(HH) {
            return {
              id: cH(HH)
            }
          }(BH);
        case MH:
          return function(HH) {
            return {
              dB: HH.long(),
              aB: HH.str(),
              sB: rB(HH),
              JB: rB(HH),
              iB: cH(HH),
              pB: cH(HH),
              yB: cH(HH),
              HL: cH(HH),
              BL: cH(HH),
              LL: rB(HH),
              AL: rB(HH),
              rL: cH(HH),
              hL: cH(HH),
              tL: cH(HH)
            }
          }(BH);
        case xH:
          return BH.str();
        case vH:
          return BH.long();
        case PH:
          return function(HH) {
            return {
              FS: HH.long(),
              DS: HH.str(),
              wS: HH.float()
            }
          }(BH);
        case TH:
          return function(HH) {
            return {
              TL: HH.bool(),
              UL: cH(HH),
              VL: HH.str(),
              OL: uB(HH),
              bL: uB(HH),
              kL: HH.bool(),
              mL: HH.long(),
              oL: QB(HH)
            }
          }(BH);
        case UH:
          return function(HH) {
            return {
              kA: cH(HH)
            }
          }(BH);
        case VH:
          return function(HH) {
            return {
              fH: HH.str(),
              lH: HH.str(),
              KH: WB(HH),
              VA: HH.str(),
              OA: pH(HH),
              bA: HH.float()
            }
          }(BH);
        case OH:
          return function(HH) {
            return {
              fH: HH.str(),
              lH: HH.str(),
              KH: WB(HH)
            }
          }(BH);
        case bH:
          return function(HH) {
            return HH.CX(MB)
          }(BH);
        case kH:
          return function(HH) {
            return {
              RA: vB(HH),
              wA: DH(HH)
            }
          }(BH);
        case mH:
          return function(HH) {
            return {
              pA: HH.bool(),
              yA: cH(HH),
              Hr: TB(HH),
              Lr: gB(HH)
            }
          }(BH);
        default:
          throw new Error(`no reader for to-client message ${HH}`)
      }
    }

    function IH(HH) {
      return {
        entityName: HH.str()
      }
    }

    function fH(HH) {
      const BH = HH.index(4);
      return 0 === BH ? HH.str() : 1 === BH ? HH.long() : 2 === BH ? HH.bool() : IH(HH)
    }

    function lH(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return HH.map(fH)
      }(HH)
    }

    function KH(HH) {
      return {
        translationKey: HH.str(),
        params: lH(HH)
      }
    }

    function cH(HH) {
      return 0 === HH.index(2) ? null : HH.str()
    }

    function eH(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          color: cH(HH),
          colour: cH(HH),
          fontSize: cH(HH)
        }
      }(HH)
    }

    function qH(HH) {
      return {
        icon: HH.str(),
        style: eH(HH)
      }
    }

    function gH(HH) {
      const BH = HH.index(3);
      return 0 === BH ? {
        string: HH.str()
      } : 1 === BH ? {
        styledEntityName: IH(HH)
      } : {
        styledTranslatedText: KH(HH)
      }
    }

    function NH(HH) {
      const BH = HH.index(3);
      return 0 === BH ? null : 1 === BH ? HH.str() : HH.long()
    }

    function RH(HH) {
      return 0 === HH.index(2) ? null : HH.float()
    }

    function jH(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          color: cH(HH),
          colour: cH(HH),
          fontWeight: NH(HH),
          fontStyle: cH(HH),
          fontSize: cH(HH),
          opacity: RH(HH)
        }
      }(HH)
    }

    function nH(HH) {
      return {
        str: gH(HH),
        style: jH(HH),
        clickableUrl: cH(HH)
      }
    }

    function FH(HH) {
      return HH.str()
    }

    function DH(HH) {
      return HH.CX(FH)
    }

    function wH(HH) {
      return 0 === HH.index(2) ? null : DH(HH)
    }

    function ZH(HH) {
      return {
        type: HH.str(),
        progress: HH.float(),
        width: cH(HH),
        height: cH(HH),
        colours: wH(HH),
        backgroundColour: cH(HH)
      }
    }

    function dH(HH) {
      return {
        type: HH.str(),
        action: HH.str(),
        style: jH(HH)
      }
    }

    function aH(HH) {
      const BH = HH.index(7);
      return 0 === BH ? {
        string: HH.str()
      } : 1 === BH ? {
        entityName: IH(HH)
      } : 2 === BH ? {
        translatedText: KH(HH)
      } : 3 === BH ? {
        styledIcon: qH(HH)
      } : 4 === BH ? {
        wH: nH(HH)
      } : 5 === BH ? {
        styledProgressBar: ZH(HH)
      } : {
        styledKeyBinding: dH(HH)
      }
    }

    function sH(HH) {
      return HH.CX(aH)
    }
    const JH = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function iH(HH) {
      return JH[HH.index(5)]
    }

    function pH(HH) {
      return 0 === HH.index(2) ? null : HH.double()
    }

    function yH(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          jH: pH(HH),
          nH: HH.double(),
          FH: HH.double(),
          DH: HH.bool(),
          description: sH(HH),
          dH: HH.str(),
          scale: pH(HH),
          rotation: pH(HH)
        }
      }(HH)
    }

    function HB(HH) {
      return 0 === HH.index(2) ? null : HH.bool()
    }

    function BB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          sH: HH.double(),
          icon: HH.str(),
          label: sH(HH),
          JH: HH.bool(),
          scale: pH(HH),
          rotation: pH(HH),
          iH: HB(HH)
        }
      }(HH)
    }

    function LB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          jH: pH(HH),
          yH: HH.double(),
          HB: HH.double(),
          BB: HH.double(),
          gravity: HH.double(),
          LB: HH.double(),
          AB: HH.double(),
          rB: HH.double(),
          DH: HH.bool(),
          description: sH(HH),
          icon: cH(HH)
        }
      }(HH)
    }

    function AB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          speed: HH.double(),
          hB: HH.double(),
          label: sH(HH),
          icon: cH(HH),
          scale: pH(HH),
          rotation: pH(HH)
        }
      }(HH)
    }

    function rB(HH) {
      return 0 === HH.index(2) ? null : HH.long()
    }

    function SB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          zB: HH.long(),
          CB: HH.double(),
          EB: HH.double(),
          XB: rB(HH),
          label: sH(HH),
          icon: cH(HH)
        }
      }(HH)
    }

    function hB(HH) {
      return {
        type: iH(HH),
        progressBar: yH(HH),
        timedClick: BB(HH),
        gravityBar: LB(HH),
        precisionBar: AB(HH),
        rhythmClick: SB(HH)
      }
    }
    const tB = ["playerGone", "rateLimited"];

    function zB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return tB[HH.index(2)]
      }(HH)
    }

    function CB(HH) {
      return HH.float()
    }

    function EB(HH) {
      return HH.CX(CB)
    }

    function XB(HH) {
      return 0 === HH.index(2) ? null : EB(HH)
    }

    function GB(HH) {
      return 0 === HH.index(2) ? null : sH(HH)
    }

    function YB(HH) {
      return HH.long()
    }

    function uB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return HH.CX(YB)
      }(HH)
    }

    function QB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          fL: HH.str(),
          lL: HH.long()
        }
      }(HH)
    }

    function WB(HH) {
      const BH = HH.index(3);
      return 0 === BH ? null : 1 === BH ? HH.str() : KH(HH)
    }

    function MB(HH) {
      return {
        Ah: HH.str(),
        rh: HH.str(),
        Sh: HH.str()
      }
    }

    function xB(HH) {
      return {
        jA: HH.str(),
        nA: cH(HH),
        FA: cH(HH),
        DA: DH(HH)
      }
    }

    function vB(HH) {
      return HH.CX(xB)
    }

    function PB(HH) {
      return {
        Br: HH.str(),
        x: HH.long(),
        y: HH.long(),
        z: HH.long()
      }
    }

    function TB(HH) {
      return HH.CX(PB)
    }

    function UB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          Vr: HH.float(),
          br: HH.long(),
          kr: HH.long()
        }
      }(HH)
    }

    function VB(HH) {
      return {
        blockName: HH.str(),
        ur: HH.bool(),
        Qr: HH.bool(),
        Wr: HH.bool(),
        Mr: HH.float(),
        vr: HH.float(),
        Pr: HH.long(),
        Tr: UB(HH)
      }
    }

    function OB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return HH.CX(VB)
      }(HH)
    }

    function bB(HH) {
      return {
        Xr: HH.str(),
        Gr: OB(HH)
      }
    }

    function kB(HH) {
      return {
        blockName: HH.str(),
        frequency: HH.float()
      }
    }

    function mB(HH) {
      return HH.CX(kB)
    }

    function oB(HH) {
      return {
        lr: HH.str(),
        Kr: HH.str(),
        frequency: HH.float(),
        cr: mB(HH)
      }
    }

    function IB(HH) {
      return HH.CX(oB)
    }

    function fB(HH) {
      return {
        blockName: HH.str(),
        radius: HH.long(),
        Nr: HH.long(),
        Sr: HH.long(),
        hr: HH.long(),
        Rr: HH.float()
      }
    }

    function lB(HH) {
      return HH.CX(fB)
    }

    function KB(HH) {
      return {
        Sr: HH.long(),
        hr: HH.long(),
        tr: HH.long(),
        zr: HH.bool(),
        Cr: bB(HH),
        mr: IB(HH),
        qr: lB(HH)
      }
    }

    function cB(HH) {
      return HH.CX(KB)
    }

    function eB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          name: HH.str(),
          Dr: cH(HH)
        }
      }(HH)
    }

    function qB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          terrain: eB(HH),
          wr: lB(HH)
        }
      }(HH)
    }

    function gB(HH) {
      return 0 === HH.index(2) ? null : function(HH) {
        return {
          layers: cB(HH),
          jr: qB(HH)
        }
      }(HH)
    }
  },
  41920: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => VH,
      E: () => IH,
      H: () => PH,
      L: () => TH,
      O: () => WH,
      S: () => kH,
      W: () => lH,
      Z: () => uH,
      _: () => cH,
      cb: () => xH,
      d: () => rH,
      f: () => KH,
      fb: () => MH,
      h: () => fH,
      jb: () => vH,
      k: () => YH,
      kb: () => UH,
      l: () => QH,
      o: () => oH,
      p: () => OH,
      t: () => mH,
      x: () => bH
    });
    var AH = LH(3310);
    const rH = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function SH(HH, BH) {
      return !ArrayBuffer.isView(HH) || HH instanceof DataView ? Array.isArray(HH) ? HH.map((HH => BH(HH))) : HH : Array.from(HH, (HH => BH(HH)))
    }

    function hH(HH) {
      if ("string" !== typeof HH) return HH;
      for (let BH = 0; BH < HH.length; BH++) {
        const LH = HH.charCodeAt(BH);
        if (LH >= 55296 && LH <= 57343) return zH.decode(tH.encode(HH))
      }
      return HH
    }
    const tH = new TextEncoder,
      zH = new TextDecoder;

    function CH(HH) {
      return HH
    }
    let EH;

    function XH(HH) {
      return null === HH || "object" !== typeof HH ? HH : [hH(HH.policy), hH(HH.Jh)]
    }

    function GH(HH) {
      return null === HH || "object" !== typeof HH ? HH : [SH(HH.OL, CH), SH(HH.mh, CH)]
    }

    function YH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.kt), hH(BH.ot)];
      var BH
    }

    function uH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [BH.id, BH.XE];
      var BH
    }

    function QH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [BH.dB, hH(BH.aB), BH.sB, hH(BH.pB), BH.LL, BH.AL, BH.wt, hH(BH.Zt), hH(BH.dt)];
      var BH
    }

    function WH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [SH(BH.ih, CH), BH.ph];
      var BH
    }

    function MH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [SH(BH.eh, (HH => hH(HH))), hH(BH.qh), BH.gh];
      var BH
    }

    function xH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [SH(BH.kE, CH), hH(BH.mE), BH.oE];
      var BH
    }

    function vH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.rh), hH(BH.Sh)];
      var BH
    }

    function PH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.zE)];
      var BH
    }

    function TH(HH) {
      return hH(HH)
    }

    function UH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.ah), hH(BH.sh), hH(BH.policy), hH(BH.Jh)];
      var BH
    }

    function VH(HH) {
      return XH(HH)
    }

    function OH(HH) {
      return XH(HH)
    }

    function bH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.Jt)];
      var BH
    }

    function kH(HH) {
      return HH
    }

    function mH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.Ft), hH(BH.Dt)];
      var BH
    }

    function oH(HH) {
      return hH(HH)
    }

    function IH(HH) {
      return GH(HH)
    }

    function fH(HH) {
      return GH(HH)
    }

    function lH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.dh)];
      var BH
    }

    function KH(HH) {
      return (EH ??= (0, AH.c)().map((HH => HH.name)), EH).map((BH => {
        return "string" === typeof(LH = HH[BH]) ? hH(LH) : SH(LH, CH);
        var LH
      }))
    }

    function cH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [BH.Ih, BH.fh, BH.Kh];
      var BH
    }
  },
  10030: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      f: () => SH
    });
    var AH = LH(9979);
    const rH = "Air",
      SH = Object.freeze(new AH.f(rH, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40210: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => tH
    });
    var AH = LH(317),
      rH = LH(4868);
    const SH = new Set(rH.m),
      hH = new Map;

    function tH(HH, BH) {
      let LH = hH.get(BH);
      void 0 === LH && (LH = new Map, hH.set(BH, LH));
      let rH = LH.get(HH);
      return void 0 === rH && (rH = `${HH}${(0,AH.y)(BH)}`, LH.set(HH, rH)), rH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);