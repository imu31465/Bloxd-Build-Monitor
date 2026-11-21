export const id = 200;
export const ids = [200];
export const modules = {
  40040: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      h: () => kQ,
      j: () => DQ
    });
    var LQ = wQ(40047),
      qQ = wQ(4632),
      oQ = wQ(40054);

    function DQ(QQ) {
      return QQ.payloadKind === qQ.Zb.Msgpack ? (0, LQ.d)(QQ.payload) : void 0
    }

    function kQ(QQ, FQ) {
      if (FQ.payloadKind === qQ.Zb.Bytes || FQ.payloadKind === qQ.Zb.MsgpackBin) return (0, oQ.e)(QQ, FQ.payload)
    }

    function vQ(QQ) {
      return null !== QQ && "object" === typeof QQ
    }
  },
  40056: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ,
      f: () => bQ,
      g: () => YQ,
      h: () => uQ,
      i: () => tQ
    });
    var LQ = wQ(4632),
      qQ = wQ(40065);
    const oQ = new Map,
      DQ = new Set,
      kQ = new Set;
    let vQ = 0,
      mQ = 0;

    function uQ(QQ, FQ) {
      let wQ = oQ.get(QQ);
      return wQ || (wQ = new Set, oQ.set(QQ, wQ)), wQ.add(FQ), () => {
        wQ.delete(FQ)
      }
    }

    function HQ() {
      return 0 !== vQ
    }

    function bQ(QQ) {
      return DQ.add(QQ), () => {
        DQ.delete(QQ)
      }
    }

    function YQ(QQ) {
      return kQ.add(QQ), () => {
        kQ.delete(QQ)
      }
    }
    const xQ = "A raw message listener threw";

    function AQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DQ;
      for (const LQ of FQ) try {
        LQ()
      } catch (wQ) {
        QQ ? (0, qQ.o)(wQ, xQ) : console.error(xQ, wQ)
      }
    }
    const tQ = {
      fire: function(QQ) {
        if ("connection" === QQ.type) {
          const FQ = QQ.phase === LQ.z.Activated && QQ.conn !== vQ && QQ.conn > mQ,
            wQ = (QQ.phase === LQ.z.Left || QQ.phase === LQ.z.Closed) && QQ.conn === vQ;
          return void(FQ || wQ ? (vQ = FQ ? QQ.conn : 0, AQ(!0)) : QQ.phase === LQ.z.Resumed && 0 !== vQ && QQ.conn > mQ && (vQ = QQ.conn, AQ(!0, kQ)))
        }
        const FQ = oQ.get(QQ.Om);
        if (FQ && QQ.conn === vQ && 0 !== vQ)
          for (const LQ of FQ) try {
            LQ(QQ)
          } catch (wQ) {
            (0, qQ.o)(wQ, xQ)
          }
      },
      close: function(QQ) {
        mQ = Math.max(mQ, QQ, vQ), 0 !== vQ && (vQ = 0, AQ(!1))
      }
    }
  },
  40027: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ,
      f: () => vQ,
      j: () => kQ
    });
    var LQ = wQ(1282),
      qQ = wQ(40003);
    const oQ = new TextDecoder,
      DQ = new TextEncoder;

    function kQ(QQ, FQ) {
      const wQ = QQ.queries.entityName(FQ);
      if (wQ === qQ.Oc) return;
      const DQ = QQ.memoryData(QQ.scratch(), 4 + wQ, 4, "entity_name's answer");
      if (!DQ) return;
      const kQ = DQ.getUint32(0, !0),
        vQ = oQ.decode(new Uint8Array(DQ.buffer, DQ.byteOffset + 4, wQ));
      return (0, LQ.e)(vQ, !1, kQ === qQ.Nd ? null : kQ)
    }

    function vQ(QQ, FQ, wQ) {
      const LQ = DQ.encode(wQ);
      if (LQ.length > qQ.Ib) return !1;
      const oQ = QQ.memoryView(Uint8Array, QQ.scratch(), LQ.length, "has_effect's name");
      return !!oQ && (oQ.set(LQ), 1 === QQ.queries.hasEffect(FQ, LQ.length))
    }

    function mQ(QQ, FQ, wQ, LQ) {
      const DQ = QQ.queries.blockData(FQ, wQ, LQ);
      if (DQ === qQ.Oc) return;
      const kQ = QQ.memoryView(Uint8Array, QQ.scratch(), DQ, "block_data's answer");
      return kQ ? JSON.parse(oQ.decode(kQ)) : void 0
    }
  },
  40047: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => uQ
    });
    const LQ = new TextDecoder;

    function qQ(QQ) {
      const FQ = new oQ(QQ),
        wQ = FQ.value();
      if (FQ.at !== QQ.length) throw new Error(`msgpack: ${QQ.length-FQ.at} bytes after the value`);
      return wQ
    }
    class oQ {
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
        const FQ = this.at;
        if (FQ + QQ > this.bytes.length) throw new Error(`msgpack: ${QQ} bytes past the end at ${FQ}`);
        return this.at = FQ + QQ, FQ
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
        const FQ = this.take(8);
        return QQ ? this.view.getBigInt64(FQ, !1) : this.view.getBigUint64(FQ, !1)
      }
      str(QQ) {
        const FQ = this.take(QQ),
          wQ = this.bytes;
        if (QQ < 16) {
          let qQ = "";
          for (let oQ = FQ; oQ < FQ + QQ; oQ++) {
            const DQ = wQ[oQ];
            if (DQ >= 128) return LQ.decode(wQ.subarray(FQ, FQ + QQ));
            qQ += String.fromCharCode(DQ)
          }
          return qQ
        }
        return LQ.decode(wQ.subarray(FQ, FQ + QQ))
      }
      bin(QQ) {
        const FQ = this.take(QQ);
        return this.bytes.subarray(FQ, FQ + QQ)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(QQ) {
        this.enter();
        const FQ = [];
        for (let wQ = 0; wQ < QQ; wQ++) FQ.push(this.value());
        return this.depth--, FQ
      }
      map(QQ) {
        this.enter();
        const FQ = {};
        for (let wQ = 0; wQ < QQ; wQ++) {
          const QQ = this.value(),
            wQ = this.value();
          FQ["__proto__" === QQ ? "__proto_" : String(QQ)] = wQ
        }
        return this.depth--, FQ
      }
      ext(QQ) {
        const FQ = this.view.getInt8(this.take(1)),
          wQ = this.take(QQ);
        if (0 !== FQ) {
          if (-1 === FQ) {
            if (1 === QQ) return new Date(NaN);
            if (4 === QQ) return new Date(1e3 * this.view.getUint32(wQ, !1));
            if (8 === QQ) {
              const QQ = this.view.getUint32(wQ, !1),
                FQ = QQ >>> 2,
                LQ = 4294967296 * (3 & QQ) + this.view.getUint32(wQ + 4, !1);
              return new Date(1e3 * LQ + FQ / 1e6)
            }
            if (12 === QQ) {
              const QQ = this.view.getUint32(wQ, !1),
                FQ = 4294967296 * this.view.getInt32(wQ + 4, !1) + this.view.getUint32(wQ + 8, !1);
              return new Date(1e3 * FQ + QQ / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${FQ} of ${QQ} bytes`)
        }
      }
    }
    const DQ = new TextEncoder,
      kQ = -(2n ** 63n),
      vQ = 2n ** 63n - 1n,
      mQ = 2n ** 64n - 1n;

    function uQ(QQ) {
      const FQ = new HQ;
      return FQ.value(QQ, 0), FQ.bytes()
    }
    class HQ {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(QQ, FQ) {
        if (FQ > 512) throw new Error("msgpack: nested too deep");
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
              for (const wQ of QQ) this.value(wQ, FQ + 1)
            } else {
              var wQ, LQ;
              if (Object.getPrototypeOf(QQ) !== Object.prototype && null !== Object.getPrototypeOf(QQ)) throw new Error(`msgpack: can't encode a ${null!==(wQ=null===(LQ=QQ.constructor)||void 0===LQ?void 0:LQ.name)&&void 0!==wQ?wQ:"object"}`);
              {
                const wQ = Object.keys(QQ);
                this.head(wQ.length, 222, 128, 222, 223);
                for (const LQ of wQ) this.string(LQ), this.value(QQ[LQ], FQ + 1)
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
        const FQ = QQ >= kQ && QQ <= vQ;
        if (!FQ && (QQ < 0n || QQ > mQ)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(FQ ? 211 : 207), this.room(8), FQ ? this.view.setBigInt64(this.at, QQ, !1) : this.view.setBigUint64(this.at, QQ, !1), this.at += 8
      }
      string(QQ) {
        const FQ = DQ.encode(QQ);
        this.head(FQ.length, 217, 160, 218, 219), this.room(FQ.length), this.buf.set(FQ, this.at), this.at += FQ.length
      }
      head(QQ, FQ, wQ, LQ, qQ) {
        wQ >= 0 && QQ < (160 === wQ ? 32 : 16) ? this.u8(wQ | QQ) : FQ !== LQ && QQ < 256 ? (this.u8(FQ), this.u8(QQ)) : QQ < 65536 ? (this.u8(LQ), this.u16(QQ)) : (this.u8(qQ), this.u32(QQ))
      }
      room(QQ) {
        if (this.at + QQ <= this.buf.length) return;
        let FQ = 2 * this.buf.length;
        for (; FQ < this.at + QQ;) FQ *= 2;
        const wQ = new Uint8Array(FQ);
        wQ.set(this.buf.subarray(0, this.at)), this.buf = wQ, this.view = new DataView(wQ.buffer)
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
  40054: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(40031);
    const qQ = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class oQ {
      constructor(QQ) {
        this.buf = QQ, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let QQ = this.u8(),
          FQ = 127 & QQ,
          wQ = 128;
        for (; 128 & QQ;) {
          if (wQ > 2 ** 63) throw new RangeError("avro: varint too long");
          QQ = this.u8(), FQ += (127 & QQ) * wQ, wQ *= 128
        }
        return FQ % 2 === 1 ? -(FQ + 1) / 2 : FQ / 2
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
          FQ = this.take(QQ),
          wQ = FQ + QQ;
        if (QQ <= 32) {
          let QQ = "";
          for (let LQ = FQ; LQ < wQ; LQ++) {
            const oQ = this.buf[LQ];
            if (oQ >= 128) return qQ.decode(this.buf.subarray(FQ, wQ));
            QQ += String.fromCharCode(oQ)
          }
          return QQ
        }
        return qQ.decode(this.buf.subarray(FQ, wQ))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(QQ) {
        const FQ = this.take(QQ);
        return this.buf.slice(FQ, FQ + QQ)
      }
      index(QQ) {
        const FQ = this.long();
        if (!(FQ >= 0 && FQ < QQ)) throw new RangeError(`avro: index ${FQ} of ${QQ}`);
        return FQ
      }
      vx(QQ) {
        const FQ = [];
        for (let wQ = this.long(); 0 !== wQ; wQ = this.long()) {
          wQ = this.block(wQ);
          for (let LQ = 0; LQ < wQ; LQ++) FQ.push(QQ(this))
        }
        return FQ
      }
      map(QQ) {
        const FQ = {};
        for (let wQ = this.long(); 0 !== wQ; wQ = this.long()) {
          wQ = this.block(wQ);
          for (let LQ = 0; LQ < wQ; LQ++) {
            FQ[this.str()] = QQ(this)
          }
        }
        return FQ
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(QQ) {
        let FQ = QQ;
        if (FQ < 0 && (FQ = -FQ, this.long()), FQ > this.buf.length - this.at) throw new RangeError(`avro: block of ${FQ} items in ${this.buf.length-this.at} bytes`);
        return FQ
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
        const FQ = this.at;
        if (QQ > this.buf.length - FQ) throw new RangeError("avro: truncated");
        return this.at = FQ + QQ, FQ
      }
    }

    function DQ(QQ, FQ) {
      const wQ = new oQ(FQ),
        qQ = (0, LQ.lb)(QQ, wQ);
      return wQ.end(), qQ
    }
  },
  40031: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => RQ,
      D: () => OQ,
      G: () => qQ,
      K: () => kQ,
      N: () => YQ,
      R: () => WQ,
      T: () => iQ,
      V: () => CQ,
      Y: () => uQ,
      Z: () => HQ,
      ab: () => xQ,
      bb: () => GQ,
      d: () => cQ,
      e: () => tQ,
      eb: () => AQ,
      h: () => eQ,
      i: () => MQ,
      ib: () => vQ,
      k: () => SQ,
      lb: () => sQ,
      m: () => LQ,
      o: () => oQ,
      r: () => pQ,
      v: () => bQ,
      y: () => mQ,
      z: () => DQ
    });
    const LQ = 2,
      qQ = 12,
      oQ = 27,
      DQ = 40,
      kQ = 52,
      vQ = 59,
      mQ = 63,
      uQ = 83,
      HQ = 84,
      bQ = 89,
      YQ = 91,
      xQ = 93,
      AQ = 94,
      tQ = 95,
      eQ = 97,
      MQ = 101,
      GQ = 102,
      pQ = 73,
      cQ = 16,
      CQ = 86,
      SQ = 60,
      iQ = 17,
      WQ = 56,
      RQ = 100,
      OQ = 81;

    function sQ(QQ, FQ) {
      switch (QQ) {
        case LQ:
          return function(QQ) {
            return {
              Sw: PQ(QQ),
              Rw: QQ.float(),
              Ow: QQ.long()
            }
          }(FQ);
        case qQ:
          return function(QQ) {
            return {
              qQ: TQ(QQ),
              oQ: TQ(QQ)
            }
          }(FQ);
        case oQ:
          return function(QQ) {
            return {
              aw: QQ.bool(),
              Xw: TQ(QQ)
            }
          }(FQ);
        case DQ:
          return FQ.str();
        case kQ:
          return function(QQ) {
            return {
              id: QQ.long(),
              WL: DF(QQ)
            }
          }(FQ);
        case vQ:
        case mQ:
          return FQ.str();
        case uQ:
        case HQ:
          return FQ.long();
        case bQ:
          return function(QQ) {
            return {
              kF: QQ.long(),
              vF: QQ.bool(),
              mF: QQ.float()
            }
          }(FQ);
        case YQ:
          return FQ.long();
        case xQ:
          return function(QQ) {
            return {
              iQ: QQ.bool(),
              WQ: mF(QQ)
            }
          }(FQ);
        case AQ:
          return function(QQ) {
            return {
              id: QQ.str(),
              position: vF(QQ),
              oL: uF(QQ),
              style: XQ(QQ),
              kL: QQ.bool()
            }
          }(FQ);
        case tQ:
          return function(QQ) {
            return {
              id: TQ(QQ)
            }
          }(FQ);
        case eQ:
          return function(QQ) {
            return {
              RF: QQ.long(),
              OF: QQ.str(),
              sF: qF(QQ),
              rF: qF(QQ),
              IF: TQ(QQ),
              UF: TQ(QQ),
              NF: TQ(QQ),
              TF: TQ(QQ),
              KF: TQ(QQ),
              zF: qF(QQ),
              lF: qF(QQ),
              jF: TQ(QQ),
              aF: TQ(QQ),
              XF: TQ(QQ)
            }
          }(FQ);
        case MQ:
          return FQ.str();
        case GQ:
          return FQ.long();
        case pQ:
          return function(QQ) {
            return {
              AL: QQ.long(),
              tL: QQ.str(),
              eL: QQ.float()
            }
          }(FQ);
        case cQ:
          return function(QQ) {
            return {
              aQ: QQ.bool(),
              XQ: TQ(QQ),
              fQ: QQ.str(),
              VQ: bF(QQ),
              hQ: bF(QQ),
              JQ: QQ.bool(),
              EQ: QQ.long(),
              nQ: YF(QQ)
            }
          }(FQ);
        case CQ:
          return function(QQ) {
            return {
              sw: TQ(QQ)
            }
          }(FQ);
        case SQ:
          return function(QQ) {
            return {
              fF: QQ.str(),
              VF: QQ.str(),
              hF: xF(QQ),
              JF: QQ.str(),
              EF: BQ(QQ),
              nF: QQ.float()
            }
          }(FQ);
        case iQ:
          return function(QQ) {
            return {
              fF: QQ.str(),
              VF: QQ.str(),
              hF: xF(QQ)
            }
          }(FQ);
        case WQ:
          return function(QQ) {
            return QQ.vx(AF)
          }(FQ);
        case RQ:
          return function(QQ) {
            return {
              Dw: eF(QQ),
              bw: hQ(QQ)
            }
          }(FQ);
        case OQ:
          return function(QQ) {
            return {
              Vq: QQ.bool(),
              hq: TQ(QQ),
              Jq: GF(QQ),
              nq: KF(QQ)
            }
          }(FQ);
        default:
          throw new Error(`no reader for to-client message ${QQ}`)
      }
    }

    function rQ(QQ) {
      return {
        entityName: QQ.str()
      }
    }

    function IQ(QQ) {
      const FQ = QQ.index(4);
      return 0 === FQ ? QQ.str() : 1 === FQ ? QQ.long() : 2 === FQ ? QQ.bool() : rQ(QQ)
    }

    function UQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return QQ.map(IQ)
      }(QQ)
    }

    function NQ(QQ) {
      return {
        translationKey: QQ.str(),
        params: UQ(QQ)
      }
    }

    function TQ(QQ) {
      return 0 === QQ.index(2) ? null : QQ.str()
    }

    function KQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          color: TQ(QQ),
          colour: TQ(QQ),
          fontSize: TQ(QQ)
        }
      }(QQ)
    }

    function zQ(QQ) {
      return {
        icon: QQ.str(),
        style: KQ(QQ)
      }
    }

    function lQ(QQ) {
      const FQ = QQ.index(3);
      return 0 === FQ ? {
        string: QQ.str()
      } : 1 === FQ ? {
        styledEntityName: rQ(QQ)
      } : {
        styledTranslatedText: NQ(QQ)
      }
    }

    function jQ(QQ) {
      const FQ = QQ.index(3);
      return 0 === FQ ? null : 1 === FQ ? QQ.str() : QQ.long()
    }

    function aQ(QQ) {
      return 0 === QQ.index(2) ? null : QQ.float()
    }

    function XQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          color: TQ(QQ),
          colour: TQ(QQ),
          fontWeight: jQ(QQ),
          fontStyle: TQ(QQ),
          fontSize: TQ(QQ),
          opacity: aQ(QQ)
        }
      }(QQ)
    }

    function fQ(QQ) {
      return {
        str: lQ(QQ),
        style: XQ(QQ),
        clickableUrl: TQ(QQ)
      }
    }

    function VQ(QQ) {
      return QQ.str()
    }

    function hQ(QQ) {
      return QQ.vx(VQ)
    }

    function JQ(QQ) {
      return 0 === QQ.index(2) ? null : hQ(QQ)
    }

    function EQ(QQ) {
      return {
        type: QQ.str(),
        progress: QQ.float(),
        width: TQ(QQ),
        height: TQ(QQ),
        colours: JQ(QQ),
        backgroundColour: TQ(QQ)
      }
    }

    function nQ(QQ) {
      return {
        type: QQ.str(),
        action: QQ.str(),
        style: XQ(QQ)
      }
    }

    function gQ(QQ) {
      const FQ = QQ.index(7);
      return 0 === FQ ? {
        string: QQ.str()
      } : 1 === FQ ? {
        entityName: rQ(QQ)
      } : 2 === FQ ? {
        translatedText: NQ(QQ)
      } : 3 === FQ ? {
        styledIcon: zQ(QQ)
      } : 4 === FQ ? {
        iw: fQ(QQ)
      } : 5 === FQ ? {
        styledProgressBar: EQ(QQ)
      } : {
        styledKeyBinding: nQ(QQ)
      }
    }

    function PQ(QQ) {
      return QQ.vx(gQ)
    }
    const ZQ = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function yQ(QQ) {
      return ZQ[QQ.index(5)]
    }

    function BQ(QQ) {
      return 0 === QQ.index(2) ? null : QQ.double()
    }

    function dQ(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          rL: BQ(QQ),
          IL: QQ.double(),
          UL: QQ.double(),
          NL: QQ.bool(),
          description: PQ(QQ),
          TL: QQ.str(),
          scale: BQ(QQ),
          rotation: BQ(QQ)
        }
      }(QQ)
    }

    function QF(QQ) {
      return 0 === QQ.index(2) ? null : QQ.bool()
    }

    function FF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          zL: QQ.double(),
          icon: QQ.str(),
          label: PQ(QQ),
          lL: QQ.bool(),
          scale: BQ(QQ),
          rotation: BQ(QQ),
          jL: QF(QQ)
        }
      }(QQ)
    }

    function wF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          rL: BQ(QQ),
          XL: QQ.double(),
          fL: QQ.double(),
          VL: QQ.double(),
          gravity: QQ.double(),
          hL: QQ.double(),
          JL: QQ.double(),
          EL: QQ.double(),
          NL: QQ.bool(),
          description: PQ(QQ),
          icon: TQ(QQ)
        }
      }(QQ)
    }

    function LF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          speed: QQ.double(),
          gL: QQ.double(),
          label: PQ(QQ),
          icon: TQ(QQ),
          scale: BQ(QQ),
          rotation: BQ(QQ)
        }
      }(QQ)
    }

    function qF(QQ) {
      return 0 === QQ.index(2) ? null : QQ.long()
    }

    function oF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          ZL: QQ.long(),
          yL: QQ.double(),
          BL: QQ.double(),
          dL: qF(QQ),
          label: PQ(QQ),
          icon: TQ(QQ)
        }
      }(QQ)
    }

    function DF(QQ) {
      return {
        type: yQ(QQ),
        progressBar: dQ(QQ),
        timedClick: FF(QQ),
        gravityBar: wF(QQ),
        precisionBar: LF(QQ),
        rhythmClick: oF(QQ)
      }
    }

    function kF(QQ) {
      return QQ.float()
    }

    function vF(QQ) {
      return QQ.vx(kF)
    }

    function mF(QQ) {
      return 0 === QQ.index(2) ? null : vF(QQ)
    }

    function uF(QQ) {
      return 0 === QQ.index(2) ? null : PQ(QQ)
    }

    function HF(QQ) {
      return QQ.long()
    }

    function bF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return QQ.vx(HF)
      }(QQ)
    }

    function YF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          PQ: QQ.str(),
          ZQ: QQ.long()
        }
      }(QQ)
    }

    function xF(QQ) {
      const FQ = QQ.index(3);
      return 0 === FQ ? null : 1 === FQ ? QQ.str() : NQ(QQ)
    }

    function AF(QQ) {
      return {
        CL: QQ.str(),
        SL: QQ.str(),
        iL: QQ.str()
      }
    }

    function tF(QQ) {
      return {
        kw: QQ.str(),
        mw: TQ(QQ),
        uw: TQ(QQ),
        Hw: hQ(QQ)
      }
    }

    function eF(QQ) {
      return QQ.vx(tF)
    }

    function MF(QQ) {
      return {
        Eq: QQ.str(),
        x: QQ.long(),
        y: QQ.long(),
        z: QQ.long()
      }
    }

    function GF(QQ) {
      return QQ.vx(MF)
    }

    function pF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          Ao: QQ.float(),
          eo: QQ.long(),
          Mo: QQ.long()
        }
      }(QQ)
    }

    function cF(QQ) {
      return {
        blockName: QQ.str(),
        Do: QQ.bool(),
        ko: QQ.bool(),
        vo: QQ.bool(),
        uo: QQ.float(),
        Ho: QQ.float(),
        bo: QQ.long(),
        Yo: pF(QQ)
      }
    }

    function CF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return QQ.vx(cF)
      }(QQ)
    }

    function SF(QQ) {
      return {
        Lo: QQ.str(),
        qo: CF(QQ)
      }
    }

    function iF(QQ) {
      return {
        blockName: QQ.str(),
        frequency: QQ.float()
      }
    }

    function WF(QQ) {
      return QQ.vx(iF)
    }

    function RF(QQ) {
      return {
        Co: QQ.str(),
        Wo: QQ.str(),
        frequency: QQ.float(),
        Ro: WF(QQ)
      }
    }

    function OF(QQ) {
      return QQ.vx(RF)
    }

    function sF(QQ) {
      return {
        blockName: QQ.str(),
        radius: QQ.long(),
        Uo: QQ.long(),
        yq: QQ.long(),
        Bq: QQ.long(),
        Ko: QQ.float()
      }
    }

    function rF(QQ) {
      return QQ.vx(sF)
    }

    function IF(QQ) {
      return {
        yq: QQ.long(),
        Bq: QQ.long(),
        dq: QQ.long(),
        Qo: QQ.bool(),
        Fo: SF(QQ),
        Go: OF(QQ),
        ro: rF(QQ)
      }
    }

    function UF(QQ) {
      return QQ.vx(IF)
    }

    function NF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          name: QQ.str(),
          Xo: TQ(QQ)
        }
      }(QQ)
    }

    function TF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          terrain: NF(QQ),
          fo: rF(QQ)
        }
      }(QQ)
    }

    function KF(QQ) {
      return 0 === QQ.index(2) ? null : function(QQ) {
        return {
          layers: UF(QQ),
          zo: TF(QQ)
        }
      }(QQ)
    }
  },
  40018: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => SQ,
      D: () => rQ,
      G: () => pQ,
      I: () => cQ,
      K: () => tQ,
      N: () => RQ,
      R: () => UQ,
      S: () => xQ,
      T: () => TQ,
      W: () => MQ,
      Y: () => eQ,
      ab: () => GQ,
      b: () => qQ,
      db: () => CQ,
      f: () => NQ,
      g: () => IQ,
      j: () => YQ,
      n: () => AQ,
      q: () => sQ,
      t: () => iQ,
      w: () => OQ,
      z: () => WQ
    });
    var LQ = wQ(2895);
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

    function oQ(QQ, FQ) {
      return !ArrayBuffer.isView(QQ) || QQ instanceof DataView ? Array.isArray(QQ) ? QQ.map((QQ => FQ(QQ))) : QQ : Array.from(QQ, (QQ => FQ(QQ)))
    }

    function DQ(QQ) {
      if ("string" !== typeof QQ) return QQ;
      for (let FQ = 0; FQ < QQ.length; FQ++) {
        const wQ = QQ.charCodeAt(FQ);
        if (wQ >= 55296 && wQ <= 57343) return vQ.decode(kQ.encode(QQ))
      }
      return QQ
    }
    const kQ = new TextEncoder,
      vQ = new TextDecoder;

    function mQ(QQ) {
      return QQ
    }
    let uQ;

    function HQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [DQ(QQ.Hm), DQ(QQ.bm)]
    }

    function bQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [oQ(QQ.VQ, mQ), oQ(QQ.pu, mQ)]
    }

    function YQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.Om), DQ(FQ.sm)];
      var FQ
    }

    function xQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.id, FQ.xu];
      var FQ
    }

    function AQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.RF, DQ(FQ.OF), FQ.sF, DQ(FQ.UF), FQ.zF, FQ.lF, FQ.CD, DQ(FQ.SD), DQ(FQ.iD)];
      var FQ
    }

    function tQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.km, mQ), FQ.um];
      var FQ
    }

    function eQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.Nm, (QQ => DQ(QQ))), DQ(FQ.Tm), FQ.Km];
      var FQ
    }

    function MQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.Au, mQ), DQ(FQ.tu), FQ.eu];
      var FQ
    }

    function GQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.SL), DQ(FQ.iL)];
      var FQ
    }

    function pQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.ou)];
      var FQ
    }

    function cQ(QQ) {
      return DQ(QQ)
    }

    function CQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.hm), DQ(FQ.Jm), DQ(FQ.Hm), DQ(FQ.bm)];
      var FQ
    }

    function SQ(QQ) {
      return HQ(QQ)
    }

    function iQ(QQ) {
      return HQ(QQ)
    }

    function WQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.pD)];
      var FQ
    }

    function RQ(QQ) {
      return QQ
    }

    function OQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.Bv), DQ(FQ.Qm)];
      var FQ
    }

    function sQ(QQ) {
      return DQ(QQ)
    }

    function rQ(QQ) {
      return bQ(QQ)
    }

    function IQ(QQ) {
      return bQ(QQ)
    }

    function UQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.cD)];
      var FQ
    }

    function NQ(QQ) {
      return (uQ ??= (0, LQ.h)().map((QQ => QQ.name)), uQ).map((FQ => {
        return "string" === typeof(wQ = QQ[FQ]) ? DQ(wQ) : oQ(wQ, mQ);
        var wQ
      }))
    }

    function TQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.Wu, FQ.Ru, FQ.Ou];
      var FQ
    }
  },
  9289: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      i: () => oQ
    });
    var LQ = wQ(9252);
    const qQ = "Air",
      oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38764: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => kQ
    });
    var LQ = wQ(317),
      qQ = wQ(4308);
    const oQ = new Set(qQ.t),
      DQ = new Map;

    function kQ(QQ, FQ) {
      let wQ = DQ.get(FQ);
      void 0 === wQ && (wQ = new Map, DQ.set(FQ, wQ));
      let qQ = wQ.get(QQ);
      return void 0 === qQ && (qQ = `${QQ}${(0,LQ.A)(FQ)}`, wQ.set(QQ, qQ)), qQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);