export const id = 193;
export const ids = [193];
export const modules = {
  40847: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ,
      d: () => sQ,
      h: () => zQ
    });
    var wQ = XQ(40850),
      qQ = XQ(5134),
      TQ = XQ(40853);

    function zQ(QQ) {
      return QQ.payloadKind === qQ.rc.Msgpack ? (0, wQ.d)(QQ.payload) : void 0
    }

    function sQ(QQ, WQ) {
      if (WQ.payloadKind === qQ.rc.Bytes || WQ.payloadKind === qQ.rc.MsgpackBin) return (0, TQ.c)(QQ, WQ.payload)
    }

    function FQ(QQ) {
      return null !== QQ && "object" === typeof QQ
    }
  },
  40857: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ,
      g: () => rQ,
      h: () => IQ,
      j: () => gQ,
      n: () => yQ
    });
    var wQ = XQ(5134),
      qQ = XQ(40864);
    const TQ = new Map,
      zQ = new Set,
      sQ = new Set;
    let FQ = 0,
      PQ = 0;

    function gQ(QQ, WQ) {
      let XQ = TQ.get(QQ);
      return XQ || (XQ = new Set, TQ.set(QQ, XQ)), XQ.add(WQ), () => {
        XQ.delete(WQ)
      }
    }

    function JQ() {
      return 0 !== FQ
    }

    function rQ(QQ) {
      return zQ.add(QQ), () => {
        zQ.delete(QQ)
      }
    }

    function IQ(QQ) {
      return sQ.add(QQ), () => {
        sQ.delete(QQ)
      }
    }
    const jQ = "A raw message listener threw";

    function BQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ;
      for (const wQ of WQ) try {
        wQ()
      } catch (XQ) {
        QQ ? (0, qQ.m)(XQ, jQ) : console.error(jQ, XQ)
      }
    }
    const yQ = {
      fire: function(QQ) {
        if ("connection" === QQ.type) {
          const WQ = QQ.phase === wQ.E.Activated && QQ.conn !== FQ && QQ.conn > PQ,
            XQ = (QQ.phase === wQ.E.Left || QQ.phase === wQ.E.Closed) && QQ.conn === FQ;
          return void(WQ || XQ ? (FQ = WQ ? QQ.conn : 0, BQ(!0)) : QQ.phase === wQ.E.Resumed && 0 !== FQ && QQ.conn > PQ && (FQ = QQ.conn, BQ(!0, sQ)))
        }
        const WQ = TQ.get(QQ.cg);
        if (WQ && QQ.conn === FQ && 0 !== FQ)
          for (const wQ of WQ) try {
            wQ(QQ)
          } catch (XQ) {
            (0, qQ.m)(XQ, jQ)
          }
      },
      close: function(QQ) {
        PQ = Math.max(PQ, QQ, FQ), 0 !== FQ && (FQ = 0, BQ(!1))
      }
    }
  },
  40839: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ,
      e: () => FQ,
      i: () => sQ
    });
    var wQ = XQ(1302),
      qQ = XQ(40813);
    const TQ = new TextDecoder,
      zQ = new TextEncoder;

    function sQ(QQ, WQ) {
      const XQ = QQ.queries.entityName(WQ);
      if (XQ === qQ.fd) return;
      const zQ = QQ.memoryData(QQ.scratch(), 4 + XQ, 4, "entity_name's answer");
      if (!zQ) return;
      const sQ = zQ.getUint32(0, !0),
        FQ = TQ.decode(new Uint8Array(zQ.buffer, zQ.byteOffset + 4, XQ));
      return (0, wQ.c)(FQ, !1, sQ === qQ.je ? null : sQ)
    }

    function FQ(QQ, WQ, XQ) {
      const wQ = zQ.encode(XQ);
      if (wQ.length > qQ.Rb) return !1;
      const TQ = QQ.memoryView(Uint8Array, QQ.scratch(), wQ.length, "has_effect's name");
      return !!TQ && (TQ.set(wQ), 1 === QQ.queries.hasEffect(WQ, wQ.length))
    }

    function PQ(QQ, WQ, XQ, wQ) {
      const zQ = QQ.queries.blockData(WQ, XQ, wQ);
      if (zQ === qQ.fd) return;
      const sQ = QQ.memoryView(Uint8Array, QQ.scratch(), zQ, "block_data's answer");
      return sQ ? JSON.parse(TQ.decode(sQ)) : void 0
    }
  },
  40850: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      e: () => gQ
    });
    const wQ = new TextDecoder;

    function qQ(QQ) {
      const WQ = new TQ(QQ),
        XQ = WQ.value();
      if (WQ.at !== QQ.length) throw new Error(`msgpack: ${QQ.length-WQ.at} bytes after the value`);
      return XQ
    }
    class TQ {
      constructor(QQ) {
        this.bytes = QQ, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength)
      }
      value() {
        const QQ = this.u8();
        if (QQ <= 127) return QQ;
        if (QQ >= 224) return QQ - 256;
        if (QQ >= 128 && QQ <= 143) return this.map(15 & QQ);
        if (QQ >= 144 && QQ <= 159) return this.array(15 & QQ);
        if (QQ >= 160 && QQ <= 191) return this.str(31 & QQ);
        switch (QQ) {
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
            throw new Error(`msgpack: unknown byte 0x${QQ.toString(16)} at ${this.at-1}`)
        }
      }
      take(QQ) {
        const WQ = this.at;
        if (WQ + QQ > this.bytes.length) throw new Error(`msgpack: ${QQ} bytes past the end at ${WQ}`);
        return this.at = WQ + QQ, WQ
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
      int64(QQ) {
        const WQ = this.take(8);
        return QQ ? this.view.getBigInt64(WQ, !1) : this.view.getBigUint64(WQ, !1)
      }
      str(QQ) {
        const WQ = this.take(QQ),
          XQ = this.bytes;
        if (QQ < 16) {
          let qQ = "";
          for (let TQ = WQ; TQ < WQ + QQ; TQ++) {
            const zQ = XQ[TQ];
            if (zQ >= 128) return wQ.decode(XQ.subarray(WQ, WQ + QQ));
            qQ += String.fromCharCode(zQ)
          }
          return qQ
        }
        return wQ.decode(XQ.subarray(WQ, WQ + QQ))
      }
      bin(QQ) {
        const WQ = this.take(QQ);
        return this.bytes.subarray(WQ, WQ + QQ)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(QQ) {
        this.enter();
        const WQ = [];
        for (let XQ = 0; XQ < QQ; XQ++) WQ.push(this.value());
        return this.depth--, WQ
      }
      map(QQ) {
        this.enter();
        const WQ = {};
        for (let XQ = 0; XQ < QQ; XQ++) {
          const QQ = this.value(),
            XQ = this.value();
          WQ["__proto__" === QQ ? "__proto_" : String(QQ)] = XQ
        }
        return this.depth--, WQ
      }
      ext(QQ) {
        const WQ = this.view.getInt8(this.take(1)),
          XQ = this.take(QQ);
        if (0 !== WQ) {
          if (-1 === WQ) {
            if (1 === QQ) return new Date(NaN);
            if (4 === QQ) return new Date(1e3 * this.view.getUint32(XQ, !1));
            if (8 === QQ) {
              const QQ = this.view.getUint32(XQ, !1),
                WQ = QQ >>> 2,
                wQ = 4294967296 * (3 & QQ) + this.view.getUint32(XQ + 4, !1);
              return new Date(1e3 * wQ + WQ / 1e6)
            }
            if (12 === QQ) {
              const QQ = this.view.getUint32(XQ, !1),
                WQ = 4294967296 * this.view.getInt32(XQ + 4, !1) + this.view.getUint32(XQ + 8, !1);
              return new Date(1e3 * WQ + QQ / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${WQ} of ${QQ} bytes`)
        }
      }
    }
    const zQ = new TextEncoder,
      sQ = -(2n ** 63n),
      FQ = 2n ** 63n - 1n,
      PQ = 2n ** 64n - 1n;

    function gQ(QQ) {
      const WQ = new JQ;
      return WQ.value(QQ, 0), WQ.bytes()
    }
    class JQ {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(QQ, WQ) {
        if (WQ > 512) throw new Error("msgpack: nested too deep");
        switch (typeof QQ) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(QQ ? 195 : 194);
          case "number":
            return void this.number(QQ);
          case "bigint":
            return void this.bigint(QQ);
          case "string":
            return void this.string(QQ);
          case "object":
            if (null === QQ) this.u8(192);
            else if (QQ instanceof Uint8Array) this.head(QQ.length, 196, -1, 197, 198), this.room(QQ.length), this.buf.set(QQ, this.at), this.at += QQ.length;
            else if (Array.isArray(QQ)) {
              this.head(QQ.length, 220, 144, 220, 221);
              for (const XQ of QQ) this.value(XQ, WQ + 1)
            } else {
              var XQ, wQ;
              if (Object.getPrototypeOf(QQ) !== Object.prototype && null !== Object.getPrototypeOf(QQ)) throw new Error(`msgpack: can't encode a ${null!==(XQ=null===(wQ=QQ.constructor)||void 0===wQ?void 0:wQ.name)&&void 0!==XQ?XQ:"object"}`);
              {
                const XQ = Object.keys(QQ);
                this.head(XQ.length, 222, 128, 222, 223);
                for (const wQ of XQ) this.string(wQ), this.value(QQ[wQ], WQ + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof QQ)
        }
      }
      number(QQ) {
        Number.isInteger(QQ) && QQ >= -2147483648 && QQ <= 4294967295 ? QQ >= 0 ? QQ < 128 ? this.u8(QQ) : QQ < 256 ? (this.u8(204), this.u8(QQ)) : QQ < 65536 ? (this.u8(205), this.u16(QQ)) : (this.u8(206), this.u32(QQ)) : QQ >= -32 ? this.u8(QQ + 256) : QQ >= -128 ? (this.u8(208), this.u8(QQ + 256)) : QQ >= -32768 ? (this.u8(209), this.u16(QQ + 65536)) : (this.u8(210), this.u32(QQ >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, QQ, !1), this.at += 8)
      }
      bigint(QQ) {
        const WQ = QQ >= sQ && QQ <= FQ;
        if (!WQ && (QQ < 0n || QQ > PQ)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(WQ ? 211 : 207), this.room(8), WQ ? this.view.setBigInt64(this.at, QQ, !1) : this.view.setBigUint64(this.at, QQ, !1), this.at += 8
      }
      string(QQ) {
        const WQ = zQ.encode(QQ);
        this.head(WQ.length, 217, 160, 218, 219), this.room(WQ.length), this.buf.set(WQ, this.at), this.at += WQ.length
      }
      head(QQ, WQ, XQ, wQ, qQ) {
        XQ >= 0 && QQ < (160 === XQ ? 32 : 16) ? this.u8(XQ | QQ) : WQ !== wQ && QQ < 256 ? (this.u8(WQ), this.u8(QQ)) : QQ < 65536 ? (this.u8(wQ), this.u16(QQ)) : (this.u8(qQ), this.u32(QQ))
      }
      room(QQ) {
        if (this.at + QQ <= this.buf.length) return;
        let WQ = 2 * this.buf.length;
        for (; WQ < this.at + QQ;) WQ *= 2;
        const XQ = new Uint8Array(WQ);
        XQ.set(this.buf.subarray(0, this.at)), this.buf = XQ, this.view = new DataView(XQ.buffer)
      }
      u8(QQ) {
        this.room(1), this.buf[this.at++] = QQ
      }
      u16(QQ) {
        this.room(2), this.view.setUint16(this.at, QQ, !1), this.at += 2
      }
      u32(QQ) {
        this.room(4), this.view.setUint32(this.at, QQ, !1), this.at += 4
      }
    }
  },
  40853: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(40845);
    const qQ = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class TQ {
      constructor(QQ) {
        this.buf = QQ, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let QQ = this.u8(),
          WQ = 127 & QQ,
          XQ = 128;
        for (; 128 & QQ;) {
          if (XQ > 2 ** 63) throw new RangeError("avro: varint too long");
          QQ = this.u8(), WQ += (127 & QQ) * XQ, XQ *= 128
        }
        return WQ % 2 === 1 ? -(WQ + 1) / 2 : WQ / 2
      }
      float() {
        const QQ = this.take(4);
        return this.floats().getFloat32(QQ, !0)
      }
      double() {
        const QQ = this.take(8);
        return this.floats().getFloat64(QQ, !0)
      }
      str() {
        const QQ = this.size(),
          WQ = this.take(QQ),
          XQ = WQ + QQ;
        if (QQ <= 32) {
          let QQ = "";
          for (let wQ = WQ; wQ < XQ; wQ++) {
            const TQ = this.buf[wQ];
            if (TQ >= 128) return qQ.decode(this.buf.subarray(WQ, XQ));
            QQ += String.fromCharCode(TQ)
          }
          return QQ
        }
        return qQ.decode(this.buf.subarray(WQ, XQ))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(QQ) {
        const WQ = this.take(QQ);
        return this.buf.slice(WQ, WQ + QQ)
      }
      index(QQ) {
        const WQ = this.long();
        if (!(WQ >= 0 && WQ < QQ)) throw new RangeError(`avro: index ${WQ} of ${QQ}`);
        return WQ
      }
      sj(QQ) {
        const WQ = [];
        for (let XQ = this.long(); 0 !== XQ; XQ = this.long()) {
          XQ = this.block(XQ);
          for (let wQ = 0; wQ < XQ; wQ++) WQ.push(QQ(this))
        }
        return WQ
      }
      map(QQ) {
        const WQ = {};
        for (let XQ = this.long(); 0 !== XQ; XQ = this.long()) {
          XQ = this.block(XQ);
          for (let wQ = 0; wQ < XQ; wQ++) {
            WQ[this.str()] = QQ(this)
          }
        }
        return WQ
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(QQ) {
        let WQ = QQ;
        if (WQ < 0 && (WQ = -WQ, this.long()), WQ > this.buf.length - this.at) throw new RangeError(`avro: block of ${WQ} items in ${this.buf.length-this.at} bytes`);
        return WQ
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const QQ = this.long();
        if (QQ < 0) throw new RangeError(`avro: length ${QQ}`);
        return QQ
      }
      u8() {
        const QQ = this.buf[this.at];
        if (void 0 === QQ) throw new RangeError("avro: truncated");
        return this.at++, QQ
      }
      take(QQ) {
        const WQ = this.at;
        if (QQ > this.buf.length - WQ) throw new RangeError("avro: truncated");
        return this.at = WQ + QQ, WQ
      }
    }

    function zQ(QQ, WQ) {
      const XQ = new TQ(WQ),
        qQ = (0, wQ.cb)(QQ, XQ);
      return XQ.end(), qQ
    }
  },
  40845: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => BQ,
      A: () => zQ,
      B: () => lQ,
      C: () => qQ,
      E: () => sQ,
      H: () => IQ,
      J: () => HQ,
      N: () => dQ,
      P: () => bQ,
      Q: () => gQ,
      U: () => JQ,
      W: () => aQ,
      X: () => jQ,
      Y: () => pQ,
      ab: () => FQ,
      b: () => UQ,
      cb: () => hQ,
      f: () => yQ,
      h: () => VQ,
      j: () => DQ,
      l: () => vQ,
      n: () => wQ,
      p: () => TQ,
      q: () => GQ,
      u: () => rQ,
      x: () => PQ
    });
    const wQ = 2,
      qQ = 12,
      TQ = 27,
      zQ = 40,
      sQ = 52,
      FQ = 59,
      PQ = 63,
      gQ = 83,
      JQ = 84,
      rQ = 89,
      IQ = 91,
      jQ = 93,
      BQ = 94,
      yQ = 95,
      VQ = 97,
      DQ = 101,
      pQ = 102,
      GQ = 73,
      UQ = 16,
      bQ = 86,
      vQ = 60,
      dQ = 17,
      HQ = 56,
      aQ = 100,
      lQ = 81;

    function hQ(QQ, WQ) {
      switch (QQ) {
        case wQ:
          return function(QQ) {
            return {
              aT: ZQ(QQ),
              lT: QQ.float(),
              hT: QQ.long()
            }
          }(WQ);
        case qQ:
          return function(QQ) {
            return {
              Cq: EQ(QQ),
              uq: EQ(QQ)
            }
          }(WQ);
        case TQ:
          return function(QQ) {
            return {
              sQ: QQ.bool(),
              FQ: EQ(QQ)
            }
          }(WQ);
        case zQ:
          return WQ.str();
        case sQ:
          return function(QQ) {
            return {
              id: QQ.long(),
              nQ: zW(QQ)
            }
          }(WQ);
        case FQ:
          return function(QQ) {
            return {
              nT: EQ(QQ),
              xT: FW(QQ)
            }
          }(WQ);
        case PQ:
          return WQ.str();
        case gQ:
        case JQ:
          return WQ.long();
        case rQ:
          return function(QQ) {
            return {
              iq: QQ.long(),
              cq: QQ.bool(),
              Aq: QQ.float()
            }
          }(WQ);
        case IQ:
          return WQ.long();
        case jQ:
          return function(QQ) {
            return {
              fW: QQ.bool(),
              aQ: JW(QQ)
            }
          }(WQ);
        case BQ:
          return function(QQ) {
            return {
              id: QQ.str(),
              position: gW(QQ),
              iW: rW(QQ),
              style: SQ(QQ),
              AW: QQ.bool()
            }
          }(WQ);
        case yQ:
          return function(QQ) {
            return {
              id: EQ(QQ)
            }
          }(WQ);
        case VQ:
          return function(QQ) {
            return {
              Zq: QQ.long(),
              Oq: QQ.str(),
              Kq: qW(QQ),
              mq: qW(QQ),
              Mq: EQ(QQ),
              QT: EQ(QQ),
              WT: EQ(QQ),
              XT: EQ(QQ),
              wT: EQ(QQ),
              qT: qW(QQ),
              TT: qW(QQ),
              zT: EQ(QQ),
              sT: EQ(QQ),
              FT: EQ(QQ)
            }
          }(WQ);
        case DQ:
          return WQ.str();
        case pQ:
          return WQ.long();
        case GQ:
          return function(QQ) {
            return {
              IX: QQ.long(),
              jX: QQ.str(),
              BX: QQ.float()
            }
          }(WQ);
        case UQ:
          return function(QQ) {
            return {
              Lq: QQ.bool(),
              kq: EQ(QQ),
              fq: QQ.str(),
              Sq: jW(QQ),
              tq: jW(QQ),
              oq: QQ.bool(),
              eq: QQ.long(),
              nq: BW(QQ)
            }
          }(WQ);
        case bQ:
          return function(QQ) {
            return {
              hq: EQ(QQ)
            }
          }(WQ);
        case vQ:
          return function(QQ) {
            return {
              RQ: QQ.str(),
              EQ: QQ.str(),
              CQ: yW(QQ),
              SW: QQ.str(),
              tW: mQ(QQ),
              oW: QQ.float()
            }
          }(WQ);
        case dQ:
          return function(QQ) {
            return {
              RQ: QQ.str(),
              EQ: QQ.str(),
              CQ: yW(QQ)
            }
          }(WQ);
        case HQ:
          return function(QQ) {
            return QQ.sj(VW)
          }(WQ);
        case aQ:
          return function(QQ) {
            return {
              uQ: pW(QQ),
              tQ: eQ(QQ)
            }
          }(WQ);
        case lQ:
          return function(QQ) {
            return {
              eX: QQ.bool(),
              xX: EQ(QQ),
              YX: UW(QQ),
              ZX: LW(QQ)
            }
          }(WQ);
        default:
          throw new Error(`no reader for to-client message ${QQ}`)
      }
    }

    function iQ(QQ) {
      return {
        entityName: QQ.str()
      }
    }

    function cQ(QQ) {
      const WQ = QQ.index(4);
      return 0 === WQ ? QQ.str() : 1 === WQ ? QQ.long() : 2 === WQ ? QQ.bool() : iQ(QQ)
    }

    function AQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return QQ.map(cQ)
      }(QQ)
    }

    function RQ(QQ) {
      return {
        translationKey: QQ.str(),
        params: AQ(QQ)
      }
    }

    function EQ(QQ) {
      return 0 === QQ.index(2) ? null : QQ.str()
    }

    function CQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          color: EQ(QQ),
          colour: EQ(QQ),
          fontSize: EQ(QQ)
        }
      }(QQ)
    }

    function uQ(QQ) {
      return {
        icon: QQ.str(),
        style: CQ(QQ)
      }
    }

    function LQ(QQ) {
      const WQ = QQ.index(3);
      return 0 === WQ ? {
        string: QQ.str()
      } : 1 === WQ ? {
        styledEntityName: iQ(QQ)
      } : {
        styledTranslatedText: RQ(QQ)
      }
    }

    function kQ(QQ) {
      const WQ = QQ.index(3);
      return 0 === WQ ? null : 1 === WQ ? QQ.str() : QQ.long()
    }

    function fQ(QQ) {
      return 0 === QQ.index(2) ? null : QQ.float()
    }

    function SQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          color: EQ(QQ),
          colour: EQ(QQ),
          fontWeight: kQ(QQ),
          fontStyle: EQ(QQ),
          fontSize: EQ(QQ),
          opacity: fQ(QQ)
        }
      }(QQ)
    }

    function tQ(QQ) {
      return {
        str: LQ(QQ),
        style: SQ(QQ),
        clickableUrl: EQ(QQ)
      }
    }

    function oQ(QQ) {
      return QQ.str()
    }

    function eQ(QQ) {
      return QQ.sj(oQ)
    }

    function nQ(QQ) {
      return 0 === QQ.index(2) ? null : eQ(QQ)
    }

    function xQ(QQ) {
      return {
        type: QQ.str(),
        progress: QQ.float(),
        width: EQ(QQ),
        height: EQ(QQ),
        colours: nQ(QQ),
        backgroundColour: EQ(QQ)
      }
    }

    function YQ(QQ) {
      return {
        type: QQ.str(),
        action: QQ.str(),
        style: SQ(QQ)
      }
    }

    function NQ(QQ) {
      const WQ = QQ.index(7);
      return 0 === WQ ? {
        string: QQ.str()
      } : 1 === WQ ? {
        entityName: iQ(QQ)
      } : 2 === WQ ? {
        translatedText: RQ(QQ)
      } : 3 === WQ ? {
        styledIcon: uQ(QQ)
      } : 4 === WQ ? {
        MQ: tQ(QQ)
      } : 5 === WQ ? {
        styledProgressBar: xQ(QQ)
      } : {
        styledKeyBinding: YQ(QQ)
      }
    }

    function ZQ(QQ) {
      return QQ.sj(NQ)
    }
    const OQ = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function KQ(QQ) {
      return OQ[QQ.index(5)]
    }

    function mQ(QQ) {
      return 0 === QQ.index(2) ? null : QQ.double()
    }

    function MQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          ZQ: mQ(QQ),
          OQ: QQ.double(),
          KQ: QQ.double(),
          mQ: QQ.bool(),
          description: ZQ(QQ),
          WW: QQ.str(),
          scale: mQ(QQ),
          rotation: mQ(QQ)
        }
      }(QQ)
    }

    function QW(QQ) {
      return 0 === QQ.index(2) ? null : QQ.bool()
    }

    function WW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          wW: QQ.double(),
          icon: QQ.str(),
          label: ZQ(QQ),
          qW: QQ.bool(),
          scale: mQ(QQ),
          rotation: mQ(QQ),
          TW: QW(QQ)
        }
      }(QQ)
    }

    function XW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          ZQ: mQ(QQ),
          sW: QQ.double(),
          FW: QQ.double(),
          PW: QQ.double(),
          gravity: QQ.double(),
          gW: QQ.double(),
          JW: QQ.double(),
          rW: QQ.double(),
          mQ: QQ.bool(),
          description: ZQ(QQ),
          icon: EQ(QQ)
        }
      }(QQ)
    }

    function wW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          speed: QQ.double(),
          jW: QQ.double(),
          label: ZQ(QQ),
          icon: EQ(QQ),
          scale: mQ(QQ),
          rotation: mQ(QQ)
        }
      }(QQ)
    }

    function qW(QQ) {
      return 0 === QQ.index(2) ? null : QQ.long()
    }

    function TW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          yW: QQ.long(),
          VW: QQ.double(),
          DW: QQ.double(),
          pW: qW(QQ),
          label: ZQ(QQ),
          icon: EQ(QQ)
        }
      }(QQ)
    }

    function zW(QQ) {
      return {
        type: KQ(QQ),
        progressBar: MQ(QQ),
        timedClick: WW(QQ),
        gravityBar: XW(QQ),
        precisionBar: wW(QQ),
        rhythmClick: TW(QQ)
      }
    }
    const sW = ["playerGone", "rateLimited"];

    function FW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return sW[QQ.index(2)]
      }(QQ)
    }

    function PW(QQ) {
      return QQ.float()
    }

    function gW(QQ) {
      return QQ.sj(PW)
    }

    function JW(QQ) {
      return 0 === QQ.index(2) ? null : gW(QQ)
    }

    function rW(QQ) {
      return 0 === QQ.index(2) ? null : ZQ(QQ)
    }

    function IW(QQ) {
      return QQ.long()
    }

    function jW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return QQ.sj(IW)
      }(QQ)
    }

    function BW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          Yq: QQ.str(),
          Nq: QQ.long()
        }
      }(QQ)
    }

    function yW(QQ) {
      const WQ = QQ.index(3);
      return 0 === WQ ? null : 1 === WQ ? QQ.str() : RQ(QQ)
    }

    function VW(QQ) {
      return {
        vT: QQ.str(),
        dT: QQ.str(),
        HT: QQ.str()
      }
    }

    function DW(QQ) {
      return {
        LQ: QQ.str(),
        kQ: EQ(QQ),
        fQ: EQ(QQ),
        SQ: eQ(QQ)
      }
    }

    function pW(QQ) {
      return QQ.sj(DW)
    }

    function GW(QQ) {
      return {
        NX: QQ.str(),
        x: QQ.long(),
        y: QQ.long(),
        z: QQ.long()
      }
    }

    function UW(QQ) {
      return QQ.sj(GW)
    }

    function bW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          Bw: QQ.float(),
          yw: QQ.long(),
          Vw: QQ.long()
        }
      }(QQ)
    }

    function vW(QQ) {
      return {
        blockName: QQ.str(),
        sw: QQ.bool(),
        Fw: QQ.bool(),
        Pw: QQ.bool(),
        gw: QQ.float(),
        Jw: QQ.float(),
        rw: QQ.long(),
        Iw: bW(QQ)
      }
    }

    function dW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return QQ.sj(vW)
      }(QQ)
    }

    function HW(QQ) {
      return {
        qw: QQ.str(),
        Tw: dW(QQ)
      }
    }

    function aW(QQ) {
      return {
        blockName: QQ.str(),
        frequency: QQ.float()
      }
    }

    function lW(QQ) {
      return QQ.sj(aW)
    }

    function hW(QQ) {
      return {
        Gw: QQ.str(),
        Uw: QQ.str(),
        frequency: QQ.float(),
        bw: lW(QQ)
      }
    }

    function iW(QQ) {
      return QQ.sj(hW)
    }

    function cW(QQ) {
      return {
        blockName: QQ.str(),
        radius: QQ.long(),
        lw: QQ.long(),
        mX: QQ.long(),
        MX: QQ.long(),
        hw: QQ.float()
      }
    }

    function AW(QQ) {
      return QQ.sj(cW)
    }

    function RW(QQ) {
      return {
        mX: QQ.long(),
        MX: QQ.long(),
        Qw: QQ.long(),
        Ww: QQ.bool(),
        Xw: HW(QQ),
        Dw: iW(QQ),
        Hw: AW(QQ)
      }
    }

    function EW(QQ) {
      return QQ.sj(RW)
    }

    function CW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          name: QQ.str(),
          Ew: EQ(QQ)
        }
      }(QQ)
    }

    function uW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          terrain: CW(QQ),
          Cw: AW(QQ)
        }
      }(QQ)
    }

    function LW(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          layers: EW(QQ),
          iw: uW(QQ)
        }
      }(QQ)
    }
  },
  40835: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => pQ,
      C: () => GQ,
      F: () => UQ,
      G: () => yQ,
      I: () => aQ,
      M: () => AQ,
      Q: () => jQ,
      S: () => EQ,
      U: () => DQ,
      X: () => VQ,
      bb: () => bQ,
      d: () => qQ,
      e: () => RQ,
      g: () => cQ,
      j: () => IQ,
      m: () => BQ,
      p: () => hQ,
      r: () => dQ,
      s: () => lQ,
      t: () => HQ,
      x: () => vQ,
      z: () => iQ
    });
    var wQ = XQ(3243);
    const qQ = {
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

    function TQ(QQ, WQ) {
      return !ArrayBuffer.isView(QQ) || QQ instanceof DataView ? Array.isArray(QQ) ? QQ.map((QQ => WQ(QQ))) : QQ : Array.from(QQ, (QQ => WQ(QQ)))
    }

    function zQ(QQ) {
      if ("string" !== typeof QQ) return QQ;
      for (let WQ = 0; WQ < QQ.length; WQ++) {
        const XQ = QQ.charCodeAt(WQ);
        if (XQ >= 55296 && XQ <= 57343) return FQ.decode(sQ.encode(QQ))
      }
      return QQ
    }
    const sQ = new TextEncoder,
      FQ = new TextDecoder;

    function PQ(QQ) {
      return QQ
    }
    let gQ;

    function JQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [zQ(QQ.mz), zQ(QQ.Mz)]
    }

    function rQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [TQ(QQ.Sq, PQ), TQ(QQ.ys, PQ)]
    }

    function IQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.cg), zQ(WQ.Ag)];
      var WQ
    }

    function jQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.id, WQ.yg];
      var WQ
    }

    function BQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.Zq, zQ(WQ.Oq), WQ.Kq, zQ(WQ.QT), WQ.qT, WQ.TT, WQ.lg, zQ(WQ.hg), zQ(WQ.ig)];
      var WQ
    }

    function yQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.tz, PQ), WQ.ez];
      var WQ
    }

    function VQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.kz, (QQ => zQ(QQ))), zQ(WQ.fz), WQ.Sz];
      var WQ
    }

    function DQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.UF, PQ), zQ(WQ.bF), WQ.vF];
      var WQ
    }

    function pQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.dT), zQ(WQ.HT)];
      var WQ
    }

    function GQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Rs)];
      var WQ
    }

    function UQ(QQ) {
      return zQ(QQ)
    }

    function bQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Ig), zQ(WQ.jg), zQ(WQ.mz), zQ(WQ.Mz)];
      var WQ
    }

    function vQ(QQ) {
      return JQ(QQ)
    }

    function dQ(QQ) {
      return JQ(QQ)
    }

    function HQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.IF)];
      var WQ
    }

    function aQ(QQ) {
      return QQ
    }

    function lQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Oz), zQ(WQ.Kz)];
      var WQ
    }

    function hQ(QQ) {
      return zQ(QQ)
    }

    function iQ(QQ) {
      return rQ(QQ)
    }

    function cQ(QQ) {
      return rQ(QQ)
    }

    function AQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.dF)];
      var WQ
    }

    function RQ(QQ) {
      return (gQ ??= (0, wQ.f)().map((QQ => QQ.name)), gQ).map((WQ => {
        return "string" === typeof(XQ = QQ[WQ]) ? zQ(XQ) : TQ(XQ, PQ);
        var XQ
      }))
    }

    function EQ(QQ) {
      return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.gF, WQ.JF, WQ.rF];
      var WQ
    }
  },
  9679: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ
    });
    var wQ = XQ(9634);
    const qQ = "Air",
      TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39527: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      f: () => sQ
    });
    var wQ = XQ(402),
      qQ = XQ(4774);
    const TQ = new Set(qQ.j),
      zQ = new Map;

    function sQ(QQ, WQ) {
      let XQ = zQ.get(WQ);
      void 0 === XQ && (XQ = new Map, zQ.set(WQ, XQ));
      let qQ = XQ.get(QQ);
      return void 0 === qQ && (qQ = `${QQ}${(0,wQ.D)(WQ)}`, XQ.set(QQ, qQ)), qQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);