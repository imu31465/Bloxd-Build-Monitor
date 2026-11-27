export const id = 127;
export const ids = [127];
export const modules = {
  42134: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => cW,
      g: () => LW,
      j: () => PW
    });
    var mW = OW(42137),
      EW = OW(5546),
      NW = OW(42146);

    function PW(WW) {
      return WW.payloadKind === EW.hc.Msgpack ? (0, mW.d)(WW.payload) : void 0
    }

    function LW(WW, iW) {
      if (iW.payloadKind === EW.hc.Bytes || iW.payloadKind === EW.hc.MsgpackBin) return (0, NW.c)(WW, iW.payload)
    }

    function cW(WW) {
      return null !== WW && "object" === typeof WW
    }
  },
  42149: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => ZW,
      e: () => xW,
      i: () => lW,
      j: () => tW,
      k: () => jW
    });
    var mW = OW(5546),
      EW = OW(42158);
    const NW = new Map,
      PW = new Set,
      LW = new Set;
    let cW = 0,
      wW = 0;

    function tW(WW, iW) {
      let OW = NW.get(WW);
      return OW || (OW = new Set, NW.set(WW, OW)), OW.add(iW), () => {
        OW.delete(iW)
      }
    }

    function ZW() {
      return 0 !== cW
    }

    function xW(WW) {
      return PW.add(WW), () => {
        PW.delete(WW)
      }
    }

    function lW(WW) {
      return LW.add(WW), () => {
        LW.delete(WW)
      }
    }
    const AW = "A raw message listener threw";

    function bW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW;
      for (const mW of iW) try {
        mW()
      } catch (OW) {
        WW ? (0, EW.n)(OW, AW) : console.error(AW, OW)
      }
    }
    const jW = {
      fire: function(WW) {
        if ("connection" === WW.type) {
          const iW = WW.phase === mW.A.Activated && WW.conn !== cW && WW.conn > wW,
            OW = (WW.phase === mW.A.Left || WW.phase === mW.A.Closed) && WW.conn === cW;
          return void(iW || OW ? (cW = iW ? WW.conn : 0, bW(!0)) : WW.phase === mW.A.Resumed && 0 !== cW && WW.conn > wW && (cW = WW.conn, bW(!0, LW)))
        }
        const iW = NW.get(WW.tP);
        if (iW && WW.conn === cW && 0 !== cW)
          for (const mW of iW) try {
            mW(WW)
          } catch (OW) {
            (0, EW.n)(OW, AW)
          }
      },
      close: function(WW) {
        wW = Math.max(wW, WW, cW), 0 !== cW && (cW = 0, bW(!1))
      }
    }
  },
  42125: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      g: () => cW,
      k: () => LW
    });
    var mW = OW(1259),
      EW = OW(42094);
    const NW = new TextDecoder,
      PW = new TextEncoder;

    function LW(WW, iW) {
      const OW = WW.queries.entityName(iW);
      if (OW === EW.Yc) return;
      const PW = WW.memoryData(WW.scratch(), 4 + OW, 4, "entity_name's answer");
      if (!PW) return;
      const LW = PW.getUint32(0, !0),
        cW = NW.decode(new Uint8Array(PW.buffer, PW.byteOffset + 4, OW));
      return (0, mW.b)(cW, !1, LW === EW.be ? null : LW)
    }

    function cW(WW, iW, OW) {
      const mW = PW.encode(OW);
      if (mW.length > EW.Mb) return !1;
      const NW = WW.memoryView(Uint8Array, WW.scratch(), mW.length, "has_effect's name");
      return !!NW && (NW.set(mW), 1 === WW.queries.hasEffect(iW, mW.length))
    }

    function wW(WW, iW, OW, mW) {
      const PW = WW.queries.blockData(iW, OW, mW);
      if (PW === EW.Yc) return;
      const LW = WW.memoryView(Uint8Array, WW.scratch(), PW, "block_data's answer");
      return LW ? JSON.parse(NW.decode(LW)) : void 0
    }
  },
  42137: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      e: () => tW
    });
    const mW = new TextDecoder;

    function EW(WW) {
      const iW = new NW(WW),
        OW = iW.value();
      if (iW.at !== WW.length) throw new Error(`msgpack: ${WW.length-iW.at} bytes after the value`);
      return OW
    }
    class NW {
      constructor(WW) {
        this.bytes = WW, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(WW.buffer, WW.byteOffset, WW.byteLength)
      }
      value() {
        const WW = this.u8();
        if (WW <= 127) return WW;
        if (WW >= 224) return WW - 256;
        if (WW >= 128 && WW <= 143) return this.map(15 & WW);
        if (WW >= 144 && WW <= 159) return this.array(15 & WW);
        if (WW >= 160 && WW <= 191) return this.str(31 & WW);
        switch (WW) {
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
            throw new Error(`msgpack: unknown byte 0x${WW.toString(16)} at ${this.at-1}`)
        }
      }
      take(WW) {
        const iW = this.at;
        if (iW + WW > this.bytes.length) throw new Error(`msgpack: ${WW} bytes past the end at ${iW}`);
        return this.at = iW + WW, iW
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
      int64(WW) {
        const iW = this.take(8);
        return WW ? this.view.getBigInt64(iW, !1) : this.view.getBigUint64(iW, !1)
      }
      str(WW) {
        const iW = this.take(WW),
          OW = this.bytes;
        if (WW < 16) {
          let EW = "";
          for (let NW = iW; NW < iW + WW; NW++) {
            const PW = OW[NW];
            if (PW >= 128) return mW.decode(OW.subarray(iW, iW + WW));
            EW += String.fromCharCode(PW)
          }
          return EW
        }
        return mW.decode(OW.subarray(iW, iW + WW))
      }
      bin(WW) {
        const iW = this.take(WW);
        return this.bytes.subarray(iW, iW + WW)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(WW) {
        this.enter();
        const iW = [];
        for (let OW = 0; OW < WW; OW++) iW.push(this.value());
        return this.depth--, iW
      }
      map(WW) {
        this.enter();
        const iW = {};
        for (let OW = 0; OW < WW; OW++) {
          const WW = this.value(),
            OW = this.value();
          iW["__proto__" === WW ? "__proto_" : String(WW)] = OW
        }
        return this.depth--, iW
      }
      ext(WW) {
        const iW = this.view.getInt8(this.take(1)),
          OW = this.take(WW);
        if (0 !== iW) {
          if (-1 === iW) {
            if (1 === WW) return new Date(NaN);
            if (4 === WW) return new Date(1e3 * this.view.getUint32(OW, !1));
            if (8 === WW) {
              const WW = this.view.getUint32(OW, !1),
                iW = WW >>> 2,
                mW = 4294967296 * (3 & WW) + this.view.getUint32(OW + 4, !1);
              return new Date(1e3 * mW + iW / 1e6)
            }
            if (12 === WW) {
              const WW = this.view.getUint32(OW, !1),
                iW = 4294967296 * this.view.getInt32(OW + 4, !1) + this.view.getUint32(OW + 8, !1);
              return new Date(1e3 * iW + WW / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${iW} of ${WW} bytes`)
        }
      }
    }
    const PW = new TextEncoder,
      LW = -(2n ** 63n),
      cW = 2n ** 63n - 1n,
      wW = 2n ** 64n - 1n;

    function tW(WW) {
      const iW = new ZW;
      return iW.value(WW, 0), iW.bytes()
    }
    class ZW {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(WW, iW) {
        if (iW > 512) throw new Error("msgpack: nested too deep");
        switch (typeof WW) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(WW ? 195 : 194);
          case "number":
            return void this.number(WW);
          case "bigint":
            return void this.bigint(WW);
          case "string":
            return void this.string(WW);
          case "object":
            if (null === WW) this.u8(192);
            else if (WW instanceof Uint8Array) this.head(WW.length, 196, -1, 197, 198), this.room(WW.length), this.buf.set(WW, this.at), this.at += WW.length;
            else if (Array.isArray(WW)) {
              this.head(WW.length, 220, 144, 220, 221);
              for (const OW of WW) this.value(OW, iW + 1)
            } else {
              var OW, mW;
              if (Object.getPrototypeOf(WW) !== Object.prototype && null !== Object.getPrototypeOf(WW)) throw new Error(`msgpack: can't encode a ${null!==(OW=null===(mW=WW.constructor)||void 0===mW?void 0:mW.name)&&void 0!==OW?OW:"object"}`);
              {
                const OW = Object.keys(WW);
                this.head(OW.length, 222, 128, 222, 223);
                for (const mW of OW) this.string(mW), this.value(WW[mW], iW + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof WW)
        }
      }
      number(WW) {
        Number.isInteger(WW) && WW >= -2147483648 && WW <= 4294967295 ? WW >= 0 ? WW < 128 ? this.u8(WW) : WW < 256 ? (this.u8(204), this.u8(WW)) : WW < 65536 ? (this.u8(205), this.u16(WW)) : (this.u8(206), this.u32(WW)) : WW >= -32 ? this.u8(WW + 256) : WW >= -128 ? (this.u8(208), this.u8(WW + 256)) : WW >= -32768 ? (this.u8(209), this.u16(WW + 65536)) : (this.u8(210), this.u32(WW >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, WW, !1), this.at += 8)
      }
      bigint(WW) {
        const iW = WW >= LW && WW <= cW;
        if (!iW && (WW < 0n || WW > wW)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(iW ? 211 : 207), this.room(8), iW ? this.view.setBigInt64(this.at, WW, !1) : this.view.setBigUint64(this.at, WW, !1), this.at += 8
      }
      string(WW) {
        const iW = PW.encode(WW);
        this.head(iW.length, 217, 160, 218, 219), this.room(iW.length), this.buf.set(iW, this.at), this.at += iW.length
      }
      head(WW, iW, OW, mW, EW) {
        OW >= 0 && WW < (160 === OW ? 32 : 16) ? this.u8(OW | WW) : iW !== mW && WW < 256 ? (this.u8(iW), this.u8(WW)) : WW < 65536 ? (this.u8(mW), this.u16(WW)) : (this.u8(EW), this.u32(WW))
      }
      room(WW) {
        if (this.at + WW <= this.buf.length) return;
        let iW = 2 * this.buf.length;
        for (; iW < this.at + WW;) iW *= 2;
        const OW = new Uint8Array(iW);
        OW.set(this.buf.subarray(0, this.at)), this.buf = OW, this.view = new DataView(OW.buffer)
      }
      u8(WW) {
        this.room(1), this.buf[this.at++] = WW
      }
      u16(WW) {
        this.room(2), this.view.setUint16(this.at, WW, !1), this.at += 2
      }
      u32(WW) {
        this.room(4), this.view.setUint32(this.at, WW, !1), this.at += 4
      }
    }
  },
  42146: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(42131);
    const EW = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class NW {
      constructor(WW) {
        this.buf = WW, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let WW = this.u8(),
          iW = 127 & WW,
          OW = 128;
        for (; 128 & WW;) {
          if (OW > 2 ** 63) throw new RangeError("avro: varint too long");
          WW = this.u8(), iW += (127 & WW) * OW, OW *= 128
        }
        return iW % 2 === 1 ? -(iW + 1) / 2 : iW / 2
      }
      float() {
        const WW = this.take(4);
        return this.floats().getFloat32(WW, !0)
      }
      double() {
        const WW = this.take(8);
        return this.floats().getFloat64(WW, !0)
      }
      str() {
        const WW = this.size(),
          iW = this.take(WW),
          OW = iW + WW;
        if (WW <= 32) {
          let WW = "";
          for (let mW = iW; mW < OW; mW++) {
            const NW = this.buf[mW];
            if (NW >= 128) return EW.decode(this.buf.subarray(iW, OW));
            WW += String.fromCharCode(NW)
          }
          return WW
        }
        return EW.decode(this.buf.subarray(iW, OW))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(WW) {
        const iW = this.take(WW);
        return this.buf.slice(iW, iW + WW)
      }
      index(WW) {
        const iW = this.long();
        if (!(iW >= 0 && iW < WW)) throw new RangeError(`avro: index ${iW} of ${WW}`);
        return iW
      }
      LZ(WW) {
        const iW = [];
        for (let OW = this.long(); 0 !== OW; OW = this.long()) {
          OW = this.block(OW);
          for (let mW = 0; mW < OW; mW++) iW.push(WW(this))
        }
        return iW
      }
      map(WW) {
        const iW = {};
        for (let OW = this.long(); 0 !== OW; OW = this.long()) {
          OW = this.block(OW);
          for (let mW = 0; mW < OW; mW++) {
            iW[this.str()] = WW(this)
          }
        }
        return iW
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(WW) {
        let iW = WW;
        if (iW < 0 && (iW = -iW, this.long()), iW > this.buf.length - this.at) throw new RangeError(`avro: block of ${iW} items in ${this.buf.length-this.at} bytes`);
        return iW
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const WW = this.long();
        if (WW < 0) throw new RangeError(`avro: length ${WW}`);
        return WW
      }
      u8() {
        const WW = this.buf[this.at];
        if (void 0 === WW) throw new RangeError("avro: truncated");
        return this.at++, WW
      }
      take(WW) {
        const iW = this.at;
        if (WW > this.buf.length - iW) throw new RangeError("avro: truncated");
        return this.at = iW + WW, iW
      }
    }

    function PW(WW, iW) {
      const OW = new NW(iW),
        EW = (0, mW.tb)(WW, OW);
      return OW.end(), EW
    }
  },
  42131: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => PW,
      E: () => hW,
      F: () => EW,
      J: () => LW,
      K: () => lW,
      O: () => TW,
      S: () => yW,
      V: () => SW,
      Y: () => tW,
      ab: () => ZW,
      b: () => KW,
      d: () => jW,
      db: () => JW,
      f: () => UW,
      g: () => kW,
      hb: () => AW,
      j: () => YW,
      kb: () => sW,
      mb: () => bW,
      n: () => mW,
      o: () => NW,
      pb: () => cW,
      r: () => MW,
      tb: () => HW,
      v: () => xW,
      z: () => wW
    });
    const mW = 2,
      EW = 12,
      NW = 27,
      PW = 40,
      LW = 52,
      cW = 59,
      wW = 63,
      tW = 83,
      ZW = 84,
      xW = 89,
      lW = 91,
      AW = 93,
      bW = 94,
      jW = 95,
      UW = 97,
      kW = 101,
      sW = 102,
      MW = 73,
      KW = 16,
      SW = 86,
      YW = 60,
      yW = 17,
      TW = 56,
      JW = 100,
      hW = 81;

    function HW(WW, iW) {
      switch (WW) {
        case mW:
          return function(WW) {
            return {
              qN: aW(WW),
              RN: WW.float(),
              GN: WW.long()
            }
          }(iW);
        case EW:
          return function(WW) {
            return {
              cN: eW(WW),
              wN: eW(WW)
            }
          }(iW);
        case NW:
          return function(WW) {
            return {
              Hi: WW.bool(),
              ni: eW(WW)
            }
          }(iW);
        case PW:
          return iW.str();
        case LW:
          return function(WW) {
            return {
              id: WW.long(),
              jN: Pi(WW)
            }
          }(iW);
        case cW:
          return function(WW) {
            return {
              yi: eW(WW),
              Ti: ci(WW)
            }
          }(iW);
        case wW:
          return iW.str();
        case tW:
        case ZW:
          return iW.long();
        case xW:
          return function(WW) {
            return {
              xN: WW.long(),
              lN: WW.bool(),
              bN: WW.float()
            }
          }(iW);
        case lW:
          return iW.long();
        case AW:
          return function(WW) {
            return {
              ui: WW.bool(),
              oi: Zi(WW)
            }
          }(iW);
        case bW:
          return function(WW) {
            return {
              id: WW.str(),
              position: ti(WW),
              Gi: xi(WW),
              style: fW(WW),
              zi: WW.bool()
            }
          }(iW);
        case jW:
          return function(WW) {
            return {
              id: eW(WW)
            }
          }(iW);
        case UW:
          return function(WW) {
            return {
              uO: WW.long(),
              oO: WW.str(),
              dO: Ei(WW),
              eO: Ei(WW),
              vO: eW(WW),
              gO: eW(WW),
              DO: eW(WW),
              VO: eW(WW),
              pO: eW(WW),
              fO: Ei(WW),
              CO: Ei(WW),
              XO: eW(WW),
              BO: eW(WW),
              qO: eW(WW)
            }
          }(iW);
        case kW:
          return iW.str();
        case sW:
          return iW.long();
        case MW:
          return function(WW) {
            return {
              sE: WW.long(),
              ME: WW.str(),
              KE: WW.float()
            }
          }(iW);
        case KW:
          return function(WW) {
            return {
              VE: WW.bool(),
              pE: eW(WW),
              fE: WW.str(),
              CE: Ai(WW),
              XE: Ai(WW),
              qE: WW.bool(),
              RE: WW.long(),
              GE: bi(WW)
            }
          }(iW);
        case SW:
          return function(WW) {
            return {
              Oi: eW(WW)
            }
          }(iW);
        case YW:
          return function(WW) {
            return {
              FN: WW.str(),
              QN: WW.str(),
              WP: ji(WW),
              iP: WW.str(),
              OP: FW(WW),
              mP: WW.float()
            }
          }(iW);
        case yW:
          return function(WW) {
            return {
              FN: WW.str(),
              QN: WW.str(),
              WP: ji(WW)
            }
          }(iW);
        case TW:
          return function(WW) {
            return WW.LZ(Ui)
          }(iW);
        case JW:
          return function(WW) {
            return {
              SE: si(WW),
              hE: BW(WW)
            }
          }(iW);
        case hW:
          return function(WW) {
            return {
              Pm: WW.bool(),
              Lm: eW(WW),
              wm: Ki(WW),
              Zm: Vi(WW)
            }
          }(iW);
        default:
          throw new Error(`no reader for to-client message ${WW}`)
      }
    }

    function nW(WW) {
      return {
        entityName: WW.str()
      }
    }

    function uW(WW) {
      const iW = WW.index(4);
      return 0 === iW ? WW.str() : 1 === iW ? WW.long() : 2 === iW ? WW.bool() : nW(WW)
    }

    function oW(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return WW.map(uW)
      }(WW)
    }

    function dW(WW) {
      return {
        translationKey: WW.str(),
        params: oW(WW)
      }
    }

    function eW(WW) {
      return 0 === WW.index(2) ? null : WW.str()
    }

    function vW(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          color: eW(WW),
          colour: eW(WW),
          fontSize: eW(WW)
        }
      }(WW)
    }

    function gW(WW) {
      return {
        icon: WW.str(),
        style: vW(WW)
      }
    }

    function DW(WW) {
      const iW = WW.index(3);
      return 0 === iW ? {
        string: WW.str()
      } : 1 === iW ? {
        styledEntityName: nW(WW)
      } : {
        styledTranslatedText: dW(WW)
      }
    }

    function VW(WW) {
      const iW = WW.index(3);
      return 0 === iW ? null : 1 === iW ? WW.str() : WW.long()
    }

    function pW(WW) {
      return 0 === WW.index(2) ? null : WW.float()
    }

    function fW(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          color: eW(WW),
          colour: eW(WW),
          fontWeight: VW(WW),
          fontStyle: eW(WW),
          fontSize: eW(WW),
          opacity: pW(WW)
        }
      }(WW)
    }

    function CW(WW) {
      return {
        str: DW(WW),
        style: fW(WW),
        clickableUrl: eW(WW)
      }
    }

    function XW(WW) {
      return WW.str()
    }

    function BW(WW) {
      return WW.LZ(XW)
    }

    function qW(WW) {
      return 0 === WW.index(2) ? null : BW(WW)
    }

    function RW(WW) {
      return {
        type: WW.str(),
        progress: WW.float(),
        width: eW(WW),
        height: eW(WW),
        colours: qW(WW),
        backgroundColour: eW(WW)
      }
    }

    function GW(WW) {
      return {
        type: WW.str(),
        action: WW.str(),
        style: fW(WW)
      }
    }

    function IW(WW) {
      const iW = WW.index(7);
      return 0 === iW ? {
        string: WW.str()
      } : 1 === iW ? {
        entityName: nW(WW)
      } : 2 === iW ? {
        translatedText: dW(WW)
      } : 3 === iW ? {
        styledIcon: gW(WW)
      } : 4 === iW ? {
        Ii: CW(WW)
      } : 5 === iW ? {
        styledProgressBar: RW(WW)
      } : {
        styledKeyBinding: GW(WW)
      }
    }

    function aW(WW) {
      return WW.LZ(IW)
    }
    const rW = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function zW(WW) {
      return rW[WW.index(5)]
    }

    function FW(WW) {
      return 0 === WW.index(2) ? null : WW.double()
    }

    function QW(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          MN: FW(WW),
          KN: WW.double(),
          SN: WW.double(),
          YN: WW.bool(),
          description: aW(WW),
          yN: WW.str(),
          scale: FW(WW),
          rotation: FW(WW)
        }
      }(WW)
    }

    function Wi(WW) {
      return 0 === WW.index(2) ? null : WW.bool()
    }

    function ii(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          JN: WW.double(),
          icon: WW.str(),
          label: aW(WW),
          hN: WW.bool(),
          scale: FW(WW),
          rotation: FW(WW),
          HN: Wi(WW)
        }
      }(WW)
    }

    function Oi(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          MN: FW(WW),
          uN: WW.double(),
          oN: WW.double(),
          dN: WW.double(),
          gravity: WW.double(),
          eN: WW.double(),
          vN: WW.double(),
          gN: WW.double(),
          YN: WW.bool(),
          description: aW(WW),
          icon: eW(WW)
        }
      }(WW)
    }

    function mi(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          speed: WW.double(),
          VN: WW.double(),
          label: aW(WW),
          icon: eW(WW),
          scale: FW(WW),
          rotation: FW(WW)
        }
      }(WW)
    }

    function Ei(WW) {
      return 0 === WW.index(2) ? null : WW.long()
    }

    function Ni(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          fN: WW.long(),
          CN: WW.double(),
          XN: WW.double(),
          BN: Ei(WW),
          label: aW(WW),
          icon: eW(WW)
        }
      }(WW)
    }

    function Pi(WW) {
      return {
        type: zW(WW),
        progressBar: QW(WW),
        timedClick: ii(WW),
        gravityBar: Oi(WW),
        precisionBar: mi(WW),
        rhythmClick: Ni(WW)
      }
    }
    const Li = ["playerGone", "rateLimited"];

    function ci(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return Li[WW.index(2)]
      }(WW)
    }

    function wi(WW) {
      return WW.float()
    }

    function ti(WW) {
      return WW.LZ(wi)
    }

    function Zi(WW) {
      return 0 === WW.index(2) ? null : ti(WW)
    }

    function xi(WW) {
      return 0 === WW.index(2) ? null : aW(WW)
    }

    function li(WW) {
      return WW.long()
    }

    function Ai(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return WW.LZ(li)
      }(WW)
    }

    function bi(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          mO: WW.str(),
          tO: WW.long()
        }
      }(WW)
    }

    function ji(WW) {
      const iW = WW.index(3);
      return 0 === iW ? null : 1 === iW ? WW.str() : dW(WW)
    }

    function Ui(WW) {
      return {
        EE: WW.str(),
        NE: WW.str(),
        PE: WW.str()
      }
    }

    function ki(WW) {
      return {
        YE: WW.str(),
        yE: eW(WW),
        TE: eW(WW),
        JE: BW(WW)
      }
    }

    function si(WW) {
      return WW.LZ(ki)
    }

    function Mi(WW) {
      return {
        tm: WW.str(),
        x: WW.long(),
        y: WW.long(),
        z: WW.long()
      }
    }

    function Ki(WW) {
      return WW.LZ(Mi)
    }

    function Si(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          om: WW.float(),
          dm: WW.long(),
          gm: WW.long()
        }
      }(WW)
    }

    function Yi(WW) {
      return {
        blockName: WW.str(),
        Ym: WW.bool(),
        ym: WW.bool(),
        Tm: WW.bool(),
        Jm: WW.float(),
        hm: WW.float(),
        Hm: WW.long(),
        nm: Si(WW)
      }
    }

    function yi(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return WW.LZ(Yi)
      }(WW)
    }

    function Ti(WW) {
      return {
        Mm: WW.str(),
        Km: yi(WW)
      }
    }

    function Ji(WW) {
      return {
        blockName: WW.str(),
        frequency: WW.float()
      }
    }

    function Hi(WW) {
      return WW.LZ(Ji)
    }

    function ni(WW) {
      return {
        pm: WW.str(),
        fm: WW.str(),
        frequency: WW.float(),
        Cm: Hi(WW)
      }
    }

    function ui(WW) {
      return WW.LZ(ni)
    }

    function oi(WW) {
      return {
        blockName: WW.str(),
        radius: WW.long(),
        Rm: WW.long(),
        Am: WW.long(),
        bm: WW.long(),
        Gm: WW.float()
      }
    }

    function di(WW) {
      return WW.LZ(oi)
    }

    function ei(WW) {
      return {
        Am: WW.long(),
        bm: WW.long(),
        jm: WW.long(),
        Um: WW.bool(),
        km: Ti(WW),
        Dm: ui(WW),
        Bm: di(WW)
      }
    }

    function vi(WW) {
      return WW.LZ(ei)
    }

    function gi(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          name: WW.str(),
          zm: eW(WW)
        }
      }(WW)
    }

    function Di(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          terrain: gi(WW),
          Fm: di(WW)
        }
      }(WW)
    }

    function Vi(WW) {
      return 0 === WW.index(2) ? null : function(WW) {
        return {
          layers: vi(WW),
          Im: Di(WW)
        }
      }(WW)
    }
  },
  42116: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => UW,
      A: () => hW,
      B: () => TW,
      E: () => YW,
      G: () => nW,
      I: () => MW,
      L: () => KW,
      N: () => jW,
      P: () => JW,
      T: () => oW,
      U: () => AW,
      V: () => eW,
      Y: () => kW,
      db: () => sW,
      e: () => EW,
      gb: () => SW,
      i: () => dW,
      m: () => uW,
      p: () => lW,
      r: () => bW,
      s: () => HW,
      w: () => yW
    });
    var mW = OW(2908);
    const EW = {
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

    function NW(WW, iW) {
      return !ArrayBuffer.isView(WW) || WW instanceof DataView ? Array.isArray(WW) ? WW.map((WW => iW(WW))) : WW : Array.from(WW, (WW => iW(WW)))
    }

    function PW(WW) {
      if ("string" !== typeof WW) return WW;
      for (let iW = 0; iW < WW.length; iW++) {
        const OW = WW.charCodeAt(iW);
        if (OW >= 55296 && OW <= 57343) return cW.decode(LW.encode(WW))
      }
      return WW
    }
    const LW = new TextEncoder,
      cW = new TextDecoder;

    function wW(WW) {
      return WW
    }
    let tW;

    function ZW(WW) {
      return null === WW || "object" !== typeof WW ? WW : [PW(WW.policy), PW(WW.PL)]
    }

    function xW(WW) {
      return null === WW || "object" !== typeof WW ? WW : [NW(WW.CE, wW), NW(WW.rL, wW)]
    }

    function lW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.tP), PW(iW.ZP)];
      var iW
    }

    function AW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [iW.id, iW.ct];
      var iW
    }

    function bW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [iW.uO, PW(iW.oO), iW.dO, PW(iW.gO), iW.fO, iW.CO, iW.LP, PW(iW.cP), PW(iW.wP)];
      var iW
    }

    function jW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [NW(iW.EL, wW), iW.NL];
      var iW
    }

    function UW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [NW(iW.Ut, (WW => PW(WW))), PW(iW.kt), iW.st];
      var iW
    }

    function kW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [NW(iW.QL, wW), PW(iW.Wc), PW(iW.Oc), iW.mc];
      var iW
    }

    function sW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.NE), PW(iW.PE)];
      var iW
    }

    function MW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.LL)];
      var iW
    }

    function KW(WW) {
      return PW(WW)
    }

    function SW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.et), PW(iW.vt), PW(iW.policy), PW(iW.PL), NW(iW.gt, (WW => PW(WW)))];
      var iW
    }

    function YW(WW) {
      return ZW(WW)
    }

    function yW(WW) {
      return ZW(WW)
    }

    function TW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.Nt)];
      var iW
    }

    function JW(WW) {
      return WW
    }

    function hW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.bt), PW(iW.jt)];
      var iW
    }

    function HW(WW) {
      return PW(WW)
    }

    function nW(WW) {
      return xW(WW)
    }

    function uW(WW) {
      return xW(WW)
    }

    function oW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [PW(iW.rw)];
      var iW
    }

    function dW(WW) {
      return (tW ??= (0, mW.g)().map((WW => WW.name)), tW).map((iW => {
        return "string" === typeof(OW = WW[iW]) ? PW(OW) : NW(OW, wW);
        var OW
      }))
    }

    function eW(WW) {
      return null === (iW = WW) || "object" !== typeof iW ? iW : [iW.jP, iW.UP, iW.kP];
      var iW
    }
  },
  5807: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      f: () => NW
    });
    var mW = OW(5766);
    const EW = "Air",
      NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40469: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      h: () => LW
    });
    var mW = OW(344),
      EW = OW(5174);
    const NW = new Set(EW.o),
      PW = new Map;

    function LW(WW, iW) {
      let OW = PW.get(iW);
      void 0 === OW && (OW = new Map, PW.set(iW, OW));
      let EW = OW.get(WW);
      return void 0 === EW && (EW = `${WW}${(0,mW.C)(iW)}`, OW.set(WW, EW)), EW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);