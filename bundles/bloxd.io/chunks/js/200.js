export const id = 200;
export const ids = [200];
export const modules = {
  40350: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      d: () => xq,
      e: () => mq
    });
    var Yq = gq(40353),
      lq = gq(4622),
      Oq = gq(40359);

    function mq(qq) {
      return qq.payloadKind === lq.hc.Msgpack ? (0, Yq.e)(qq.payload) : void 0
    }

    function xq(qq, Eq) {
      if (Eq.payloadKind === lq.hc.Bytes || Eq.payloadKind === lq.hc.MsgpackBin) return (0, Oq.e)(qq, Eq.payload)
    }

    function Aq(qq) {
      return null !== qq && "object" === typeof qq
    }
  },
  40366: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq,
      d: () => Wq,
      h: () => Nq,
      l: () => uq,
      o: () => dq
    });
    var Yq = gq(4622),
      lq = gq(40369);
    const Oq = new Map,
      mq = new Set,
      xq = new Set;
    let Aq = 0,
      cq = 0;

    function uq(qq, Eq) {
      let gq = Oq.get(qq);
      return gq || (gq = new Set, Oq.set(qq, gq)), gq.add(Eq), () => {
        gq.delete(Eq)
      }
    }

    function Bq() {
      return 0 !== Aq
    }

    function Wq(qq) {
      return mq.add(qq), () => {
        mq.delete(qq)
      }
    }

    function Nq(qq) {
      return xq.add(qq), () => {
        xq.delete(qq)
      }
    }
    const aq = "A raw message listener threw";

    function Vq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq;
      for (const Yq of Eq) try {
        Yq()
      } catch (gq) {
        qq ? (0, lq.r)(gq, aq) : console.error(aq, gq)
      }
    }
    const dq = {
      fire: function(qq) {
        if ("connection" === qq.type) {
          const Eq = qq.phase === Yq.u.Activated && qq.conn !== Aq && qq.conn > cq,
            gq = (qq.phase === Yq.u.Left || qq.phase === Yq.u.Closed) && qq.conn === Aq;
          return void(Eq || gq ? (Aq = Eq ? qq.conn : 0, Vq(!0)) : qq.phase === Yq.u.Resumed && 0 !== Aq && qq.conn > cq && (Aq = qq.conn, Vq(!0, xq)))
        }
        const Eq = Oq.get(qq.Hc);
        if (Eq && qq.conn === Aq && 0 !== Aq)
          for (const Yq of Eq) try {
            Yq(qq)
          } catch (gq) {
            (0, lq.r)(gq, aq)
          }
      },
      close: function(qq) {
        cq = Math.max(cq, qq, Aq), 0 !== Aq && (Aq = 0, Vq(!1))
      }
    }
  },
  40334: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      e: () => Aq,
      f: () => xq
    });
    var Yq = gq(1261),
      lq = gq(40318);
    const Oq = new TextDecoder,
      mq = new TextEncoder;

    function xq(qq, Eq) {
      const gq = qq.queries.entityName(Eq);
      if (gq === lq.Nc) return;
      const mq = qq.memoryData(qq.scratch(), 4 + gq, 4, "entity_name's answer");
      if (!mq) return;
      const xq = mq.getUint32(0, !0),
        Aq = Oq.decode(new Uint8Array(mq.buffer, mq.byteOffset + 4, gq));
      return (0, Yq.e)(Aq, !1, xq === lq._d ? null : xq)
    }

    function Aq(qq, Eq, gq) {
      const Yq = mq.encode(gq);
      if (Yq.length > lq.Db) return !1;
      const Oq = qq.memoryView(Uint8Array, qq.scratch(), Yq.length, "has_effect's name");
      return !!Oq && (Oq.set(Yq), 1 === qq.queries.hasEffect(Eq, Yq.length))
    }

    function cq(qq, Eq, gq, Yq) {
      const mq = qq.queries.blockData(Eq, gq, Yq);
      if (mq === lq.Nc) return;
      const xq = qq.memoryView(Uint8Array, qq.scratch(), mq, "block_data's answer");
      return xq ? JSON.parse(Oq.decode(xq)) : void 0
    }
  },
  40353: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => uq
    });
    const Yq = new TextDecoder;

    function lq(qq) {
      const Eq = new Oq(qq),
        gq = Eq.value();
      if (Eq.at !== qq.length) throw new Error(`msgpack: ${qq.length-Eq.at} bytes after the value`);
      return gq
    }
    class Oq {
      constructor(qq) {
        this.bytes = qq, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(qq.buffer, qq.byteOffset, qq.byteLength)
      }
      value() {
        const qq = this.u8();
        if (qq <= 127) return qq;
        if (qq >= 224) return qq - 256;
        if (qq >= 128 && qq <= 143) return this.map(15 & qq);
        if (qq >= 144 && qq <= 159) return this.array(15 & qq);
        if (qq >= 160 && qq <= 191) return this.str(31 & qq);
        switch (qq) {
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
            throw new Error(`msgpack: unknown byte 0x${qq.toString(16)} at ${this.at-1}`)
        }
      }
      take(qq) {
        const Eq = this.at;
        if (Eq + qq > this.bytes.length) throw new Error(`msgpack: ${qq} bytes past the end at ${Eq}`);
        return this.at = Eq + qq, Eq
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
      int64(qq) {
        const Eq = this.take(8);
        return qq ? this.view.getBigInt64(Eq, !1) : this.view.getBigUint64(Eq, !1)
      }
      str(qq) {
        const Eq = this.take(qq),
          gq = this.bytes;
        if (qq < 16) {
          let lq = "";
          for (let Oq = Eq; Oq < Eq + qq; Oq++) {
            const mq = gq[Oq];
            if (mq >= 128) return Yq.decode(gq.subarray(Eq, Eq + qq));
            lq += String.fromCharCode(mq)
          }
          return lq
        }
        return Yq.decode(gq.subarray(Eq, Eq + qq))
      }
      bin(qq) {
        const Eq = this.take(qq);
        return this.bytes.subarray(Eq, Eq + qq)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(qq) {
        this.enter();
        const Eq = [];
        for (let gq = 0; gq < qq; gq++) Eq.push(this.value());
        return this.depth--, Eq
      }
      map(qq) {
        this.enter();
        const Eq = {};
        for (let gq = 0; gq < qq; gq++) {
          const qq = this.value(),
            gq = this.value();
          Eq["__proto__" === qq ? "__proto_" : String(qq)] = gq
        }
        return this.depth--, Eq
      }
      ext(qq) {
        const Eq = this.view.getInt8(this.take(1)),
          gq = this.take(qq);
        if (0 !== Eq) {
          if (-1 === Eq) {
            if (1 === qq) return new Date(NaN);
            if (4 === qq) return new Date(1e3 * this.view.getUint32(gq, !1));
            if (8 === qq) {
              const qq = this.view.getUint32(gq, !1),
                Eq = qq >>> 2,
                Yq = 4294967296 * (3 & qq) + this.view.getUint32(gq + 4, !1);
              return new Date(1e3 * Yq + Eq / 1e6)
            }
            if (12 === qq) {
              const qq = this.view.getUint32(gq, !1),
                Eq = 4294967296 * this.view.getInt32(gq + 4, !1) + this.view.getUint32(gq + 8, !1);
              return new Date(1e3 * Eq + qq / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Eq} of ${qq} bytes`)
        }
      }
    }
    const mq = new TextEncoder,
      xq = -(2n ** 63n),
      Aq = 2n ** 63n - 1n,
      cq = 2n ** 64n - 1n;

    function uq(qq) {
      const Eq = new Bq;
      return Eq.value(qq, 0), Eq.bytes()
    }
    class Bq {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(qq, Eq) {
        if (Eq > 512) throw new Error("msgpack: nested too deep");
        switch (typeof qq) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(qq ? 195 : 194);
          case "number":
            return void this.number(qq);
          case "bigint":
            return void this.bigint(qq);
          case "string":
            return void this.string(qq);
          case "object":
            if (null === qq) this.u8(192);
            else if (qq instanceof Uint8Array) this.head(qq.length, 196, -1, 197, 198), this.room(qq.length), this.buf.set(qq, this.at), this.at += qq.length;
            else if (Array.isArray(qq)) {
              this.head(qq.length, 220, 144, 220, 221);
              for (const gq of qq) this.value(gq, Eq + 1)
            } else {
              var gq, Yq;
              if (Object.getPrototypeOf(qq) !== Object.prototype && null !== Object.getPrototypeOf(qq)) throw new Error(`msgpack: can't encode a ${null!==(gq=null===(Yq=qq.constructor)||void 0===Yq?void 0:Yq.name)&&void 0!==gq?gq:"object"}`);
              {
                const gq = Object.keys(qq);
                this.head(gq.length, 222, 128, 222, 223);
                for (const Yq of gq) this.string(Yq), this.value(qq[Yq], Eq + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof qq)
        }
      }
      number(qq) {
        Number.isInteger(qq) && qq >= -2147483648 && qq <= 4294967295 ? qq >= 0 ? qq < 128 ? this.u8(qq) : qq < 256 ? (this.u8(204), this.u8(qq)) : qq < 65536 ? (this.u8(205), this.u16(qq)) : (this.u8(206), this.u32(qq)) : qq >= -32 ? this.u8(qq + 256) : qq >= -128 ? (this.u8(208), this.u8(qq + 256)) : qq >= -32768 ? (this.u8(209), this.u16(qq + 65536)) : (this.u8(210), this.u32(qq >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, qq, !1), this.at += 8)
      }
      bigint(qq) {
        const Eq = qq >= xq && qq <= Aq;
        if (!Eq && (qq < 0n || qq > cq)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Eq ? 211 : 207), this.room(8), Eq ? this.view.setBigInt64(this.at, qq, !1) : this.view.setBigUint64(this.at, qq, !1), this.at += 8
      }
      string(qq) {
        const Eq = mq.encode(qq);
        this.head(Eq.length, 217, 160, 218, 219), this.room(Eq.length), this.buf.set(Eq, this.at), this.at += Eq.length
      }
      head(qq, Eq, gq, Yq, lq) {
        gq >= 0 && qq < (160 === gq ? 32 : 16) ? this.u8(gq | qq) : Eq !== Yq && qq < 256 ? (this.u8(Eq), this.u8(qq)) : qq < 65536 ? (this.u8(Yq), this.u16(qq)) : (this.u8(lq), this.u32(qq))
      }
      room(qq) {
        if (this.at + qq <= this.buf.length) return;
        let Eq = 2 * this.buf.length;
        for (; Eq < this.at + qq;) Eq *= 2;
        const gq = new Uint8Array(Eq);
        gq.set(this.buf.subarray(0, this.at)), this.buf = gq, this.view = new DataView(gq.buffer)
      }
      u8(qq) {
        this.room(1), this.buf[this.at++] = qq
      }
      u16(qq) {
        this.room(2), this.view.setUint16(this.at, qq, !1), this.at += 2
      }
      u32(qq) {
        this.room(4), this.view.setUint32(this.at, qq, !1), this.at += 4
      }
    }
  },
  40359: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(40343);
    const lq = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Oq {
      constructor(qq) {
        this.buf = qq, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let qq = this.u8(),
          Eq = 127 & qq,
          gq = 128;
        for (; 128 & qq;) {
          if (gq > 2 ** 63) throw new RangeError("avro: varint too long");
          qq = this.u8(), Eq += (127 & qq) * gq, gq *= 128
        }
        return Eq % 2 === 1 ? -(Eq + 1) / 2 : Eq / 2
      }
      float() {
        const qq = this.take(4);
        return this.floats().getFloat32(qq, !0)
      }
      double() {
        const qq = this.take(8);
        return this.floats().getFloat64(qq, !0)
      }
      str() {
        const qq = this.size(),
          Eq = this.take(qq),
          gq = Eq + qq;
        if (qq <= 32) {
          let qq = "";
          for (let Yq = Eq; Yq < gq; Yq++) {
            const Oq = this.buf[Yq];
            if (Oq >= 128) return lq.decode(this.buf.subarray(Eq, gq));
            qq += String.fromCharCode(Oq)
          }
          return qq
        }
        return lq.decode(this.buf.subarray(Eq, gq))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(qq) {
        const Eq = this.take(qq);
        return this.buf.slice(Eq, Eq + qq)
      }
      index(qq) {
        const Eq = this.long();
        if (!(Eq >= 0 && Eq < qq)) throw new RangeError(`avro: index ${Eq} of ${qq}`);
        return Eq
      }
      DN(qq) {
        const Eq = [];
        for (let gq = this.long(); 0 !== gq; gq = this.long()) {
          gq = this.block(gq);
          for (let Yq = 0; Yq < gq; Yq++) Eq.push(qq(this))
        }
        return Eq
      }
      map(qq) {
        const Eq = {};
        for (let gq = this.long(); 0 !== gq; gq = this.long()) {
          gq = this.block(gq);
          for (let Yq = 0; Yq < gq; Yq++) {
            Eq[this.str()] = qq(this)
          }
        }
        return Eq
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(qq) {
        let Eq = qq;
        if (Eq < 0 && (Eq = -Eq, this.long()), Eq > this.buf.length - this.at) throw new RangeError(`avro: block of ${Eq} items in ${this.buf.length-this.at} bytes`);
        return Eq
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const qq = this.long();
        if (qq < 0) throw new RangeError(`avro: length ${qq}`);
        return qq
      }
      u8() {
        const qq = this.buf[this.at];
        if (void 0 === qq) throw new RangeError("avro: truncated");
        return this.at++, qq
      }
      take(qq) {
        const Eq = this.at;
        if (qq > this.buf.length - Eq) throw new RangeError("avro: truncated");
        return this.at = Eq + qq, Eq
      }
    }

    function mq(qq, Eq) {
      const gq = new Oq(Eq),
        lq = (0, Yq.db)(qq, gq);
      return gq.end(), lq
    }
  },
  40343: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => xq,
      B: () => Nq,
      F: () => vq,
      H: () => rq,
      K: () => yq,
      O: () => uq,
      Q: () => Bq,
      T: () => hq,
      V: () => aq,
      W: () => oq,
      _: () => Vq,
      b: () => Qq,
      bb: () => Aq,
      db: () => bq,
      e: () => dq,
      h: () => jq,
      i: () => Hq,
      m: () => tq,
      p: () => Yq,
      s: () => Oq,
      t: () => Pq,
      u: () => Wq,
      v: () => cq,
      w: () => mq,
      x: () => nq,
      z: () => lq
    });
    const Yq = 2,
      lq = 12,
      Oq = 27,
      mq = 40,
      xq = 52,
      Aq = 59,
      cq = 63,
      uq = 83,
      Bq = 84,
      Wq = 89,
      Nq = 91,
      aq = 93,
      Vq = 94,
      dq = 95,
      jq = 97,
      Hq = 101,
      oq = 102,
      Pq = 73,
      Qq = 16,
      yq = 86,
      tq = 60,
      rq = 17,
      vq = 56,
      hq = 100,
      nq = 81;

    function bq(qq, Eq) {
      switch (qq) {
        case Yq:
          return function(qq) {
            return {
              tg: Kq(qq),
              hg: qq.float(),
              ng: qq.long()
            }
          }(Eq);
        case lq:
          return function(qq) {
            return {
              Oq: Tq(qq),
              mq: Tq(qq)
            }
          }(Eq);
        case Oq:
          return function(qq) {
            return {
              Jg: qq.bool(),
              kg: Tq(qq)
            }
          }(Eq);
        case mq:
          return Eq.str();
        case xq:
          return function(qq) {
            return {
              id: qq.long(),
              vY: mE(qq)
            }
          }(Eq);
        case Aq:
        case cq:
          return Eq.str();
        case uq:
        case Bq:
          return Eq.long();
        case Wq:
          return function(qq) {
            return {
              cE: qq.long(),
              uE: qq.bool(),
              BE: qq.float()
            }
          }(Eq);
        case Nq:
          return Eq.long();
        case aq:
          return function(qq) {
            return {
              vq: qq.bool(),
              hq: cE(qq)
            }
          }(Eq);
        case Vq:
          return function(qq) {
            return {
              id: qq.str(),
              position: AE(qq),
              mY: uE(qq),
              style: Jq(qq),
              AY: qq.bool()
            }
          }(Eq);
        case dq:
          return function(qq) {
            return {
              id: Tq(qq)
            }
          }(Eq);
        case jq:
          return function(qq) {
            return {
              nE: qq.long(),
              bE: qq.str(),
              iE: lE(qq),
              ZE: lE(qq),
              fE: Tq(qq),
              ME: Tq(qq),
              TE: Tq(qq),
              zE: Tq(qq),
              SE: Tq(qq),
              pE: lE(qq),
              GE: lE(qq),
              LE: Tq(qq),
              JE: Tq(qq),
              kE: Tq(qq)
            }
          }(Eq);
        case Hq:
          return Eq.str();
        case oq:
          return Eq.long();
        case Pq:
          return function(qq) {
            return {
              dY: qq.long(),
              jY: qq.str(),
              HY: qq.float()
            }
          }(Eq);
        case Qq:
          return function(qq) {
            return {
              Jq: qq.bool(),
              kq: Tq(qq),
              Rq: qq.str(),
              Uq: WE(qq),
              Fq: WE(qq),
              Xq: qq.bool(),
              wq: qq.long(),
              Kq: NE(qq)
            }
          }(Eq);
        case yq:
          return function(qq) {
            return {
              bg: Tq(qq)
            }
          }(Eq);
        case tq:
          return function(qq) {
            return {
              RE: qq.str(),
              UE: qq.str(),
              FE: aE(qq),
              sE: qq.str(),
              XE: eq(qq),
              wE: qq.float()
            }
          }(Eq);
        case rq:
          return function(qq) {
            return {
              RE: qq.str(),
              UE: qq.str(),
              FE: aE(qq)
            }
          }(Eq);
        case vq:
          return function(qq) {
            return qq.DN(VE)
          }(Eq);
        case hq:
          return function(qq) {
            return {
              xg: jE(qq),
              Wg: Uq(qq)
            }
          }(Eq);
        case nq:
          return function(qq) {
            return {
              Rl: qq.bool(),
              Ul: Tq(qq),
              Fl: oE(qq),
              Xl: zE(qq)
            }
          }(Eq);
        default:
          throw new Error(`no reader for to-client message ${qq}`)
      }
    }

    function iq(qq) {
      return {
        entityName: qq.str()
      }
    }

    function Zq(qq) {
      const Eq = qq.index(4);
      return 0 === Eq ? qq.str() : 1 === Eq ? qq.long() : 2 === Eq ? qq.bool() : iq(qq)
    }

    function fq(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return qq.map(Zq)
      }(qq)
    }

    function Mq(qq) {
      return {
        translationKey: qq.str(),
        params: fq(qq)
      }
    }

    function Tq(qq) {
      return 0 === qq.index(2) ? null : qq.str()
    }

    function zq(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          color: Tq(qq),
          colour: Tq(qq),
          fontSize: Tq(qq)
        }
      }(qq)
    }

    function Sq(qq) {
      return {
        icon: qq.str(),
        style: zq(qq)
      }
    }

    function pq(qq) {
      const Eq = qq.index(3);
      return 0 === Eq ? {
        string: qq.str()
      } : 1 === Eq ? {
        styledEntityName: iq(qq)
      } : {
        styledTranslatedText: Mq(qq)
      }
    }

    function Gq(qq) {
      const Eq = qq.index(3);
      return 0 === Eq ? null : 1 === Eq ? qq.str() : qq.long()
    }

    function Lq(qq) {
      return 0 === qq.index(2) ? null : qq.float()
    }

    function Jq(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          color: Tq(qq),
          colour: Tq(qq),
          fontWeight: Gq(qq),
          fontStyle: Tq(qq),
          fontSize: Tq(qq),
          opacity: Lq(qq)
        }
      }(qq)
    }

    function kq(qq) {
      return {
        str: pq(qq),
        style: Jq(qq),
        clickableUrl: Tq(qq)
      }
    }

    function Rq(qq) {
      return qq.str()
    }

    function Uq(qq) {
      return qq.DN(Rq)
    }

    function Fq(qq) {
      return 0 === qq.index(2) ? null : Uq(qq)
    }

    function sq(qq) {
      return {
        type: qq.str(),
        progress: qq.float(),
        width: Tq(qq),
        height: Tq(qq),
        colours: Fq(qq),
        backgroundColour: Tq(qq)
      }
    }

    function Xq(qq) {
      return {
        type: qq.str(),
        action: qq.str(),
        style: Jq(qq)
      }
    }

    function wq(qq) {
      const Eq = qq.index(7);
      return 0 === Eq ? {
        string: qq.str()
      } : 1 === Eq ? {
        entityName: iq(qq)
      } : 2 === Eq ? {
        translatedText: Mq(qq)
      } : 3 === Eq ? {
        styledIcon: Sq(qq)
      } : 4 === Eq ? {
        rg: kq(qq)
      } : 5 === Eq ? {
        styledProgressBar: sq(qq)
      } : {
        styledKeyBinding: Xq(qq)
      }
    }

    function Kq(qq) {
      return qq.DN(wq)
    }
    const Cq = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Iq(qq) {
      return Cq[qq.index(5)]
    }

    function eq(qq) {
      return 0 === qq.index(2) ? null : qq.double()
    }

    function Dq(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          ZY: eq(qq),
          fY: qq.double(),
          MY: qq.double(),
          TY: qq.bool(),
          description: Kq(qq),
          zY: qq.str(),
          scale: eq(qq),
          rotation: eq(qq)
        }
      }(qq)
    }

    function qE(qq) {
      return 0 === qq.index(2) ? null : qq.bool()
    }

    function EE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          pY: qq.double(),
          icon: qq.str(),
          label: Kq(qq),
          GY: qq.bool(),
          scale: eq(qq),
          rotation: eq(qq),
          LY: qE(qq)
        }
      }(qq)
    }

    function gE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          ZY: eq(qq),
          kY: qq.double(),
          RY: qq.double(),
          UY: qq.double(),
          gravity: qq.double(),
          FY: qq.double(),
          sY: qq.double(),
          XY: qq.double(),
          TY: qq.bool(),
          description: Kq(qq),
          icon: Tq(qq)
        }
      }(qq)
    }

    function YE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          speed: qq.double(),
          KY: qq.double(),
          label: Kq(qq),
          icon: Tq(qq),
          scale: eq(qq),
          rotation: eq(qq)
        }
      }(qq)
    }

    function lE(qq) {
      return 0 === qq.index(2) ? null : qq.long()
    }

    function OE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          IY: qq.long(),
          eY: qq.double(),
          DY: qq.double(),
          ql: lE(qq),
          label: Kq(qq),
          icon: Tq(qq)
        }
      }(qq)
    }

    function mE(qq) {
      return {
        type: Iq(qq),
        progressBar: Dq(qq),
        timedClick: EE(qq),
        gravityBar: gE(qq),
        precisionBar: YE(qq),
        rhythmClick: OE(qq)
      }
    }

    function xE(qq) {
      return qq.float()
    }

    function AE(qq) {
      return qq.DN(xE)
    }

    function cE(qq) {
      return 0 === qq.index(2) ? null : AE(qq)
    }

    function uE(qq) {
      return 0 === qq.index(2) ? null : Kq(qq)
    }

    function BE(qq) {
      return qq.long()
    }

    function WE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return qq.DN(BE)
      }(qq)
    }

    function NE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          Iq: qq.str(),
          eq: qq.long()
        }
      }(qq)
    }

    function aE(qq) {
      const Eq = qq.index(3);
      return 0 === Eq ? null : 1 === Eq ? qq.str() : Mq(qq)
    }

    function VE(qq) {
      return {
        yY: qq.str(),
        tY: qq.str(),
        rY: qq.str()
      }
    }

    function dE(qq) {
      return {
        Ag: qq.str(),
        cg: Tq(qq),
        ug: Tq(qq),
        Bg: Uq(qq)
      }
    }

    function jE(qq) {
      return qq.DN(dE)
    }

    function HE(qq) {
      return {
        sl: qq.str(),
        x: qq.long(),
        y: qq.long(),
        z: qq.long()
      }
    }

    function oE(qq) {
      return qq.DN(HE)
    }

    function PE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          aO: qq.float(),
          VO: qq.long(),
          dO: qq.long()
        }
      }(qq)
    }

    function QE(qq) {
      return {
        blockName: qq.str(),
        OO: qq.bool(),
        mO: qq.bool(),
        xO: qq.bool(),
        cO: qq.float(),
        uO: qq.float(),
        BO: qq.long(),
        WO: PE(qq)
      }
    }

    function yE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return qq.DN(QE)
      }(qq)
    }

    function tE(qq) {
      return {
        gO: qq.str(),
        YO: yE(qq)
      }
    }

    function rE(qq) {
      return {
        blockName: qq.str(),
        frequency: qq.float()
      }
    }

    function vE(qq) {
      return qq.DN(rE)
    }

    function hE(qq) {
      return {
        oO: qq.str(),
        PO: qq.str(),
        frequency: qq.float(),
        QO: vE(qq)
      }
    }

    function nE(qq) {
      return qq.DN(hE)
    }

    function bE(qq) {
      return {
        blockName: qq.str(),
        radius: qq.long(),
        vO: qq.long(),
        Cl: qq.long(),
        Il: qq.long(),
        hO: qq.float()
      }
    }

    function iE(qq) {
      return qq.DN(bE)
    }

    function ZE(qq) {
      return {
        Cl: qq.long(),
        Il: qq.long(),
        el: qq.long(),
        Dl: qq.bool(),
        qO: tE(qq),
        jO: nE(qq),
        tO: iE(qq)
      }
    }

    function fE(qq) {
      return qq.DN(ZE)
    }

    function ME(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          name: qq.str(),
          ZO: Tq(qq)
        }
      }(qq)
    }

    function TE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          terrain: ME(qq),
          fO: iE(qq)
        }
      }(qq)
    }

    function zE(qq) {
      return 0 === qq.index(2) ? null : function(qq) {
        return {
          layers: fE(qq),
          nO: TE(qq)
        }
      }(qq)
    }
  },
  40329: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => iq,
      G: () => Pq,
      H: () => Qq,
      I: () => dq,
      M: () => hq,
      O: () => fq,
      S: () => aq,
      V: () => Tq,
      Z: () => Hq,
      b: () => lq,
      bb: () => jq,
      eb: () => oq,
      f: () => Mq,
      g: () => Zq,
      gb: () => yq,
      k: () => Nq,
      o: () => Vq,
      q: () => bq,
      t: () => rq,
      w: () => nq,
      x: () => vq,
      y: () => tq
    });
    var Yq = gq(2900);
    const lq = {
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

    function Oq(qq, Eq) {
      return !ArrayBuffer.isView(qq) || qq instanceof DataView ? Array.isArray(qq) ? qq.map((qq => Eq(qq))) : qq : Array.from(qq, (qq => Eq(qq)))
    }

    function mq(qq) {
      if ("string" !== typeof qq) return qq;
      for (let Eq = 0; Eq < qq.length; Eq++) {
        const gq = qq.charCodeAt(Eq);
        if (gq >= 55296 && gq <= 57343) return Aq.decode(xq.encode(qq))
      }
      return qq
    }
    const xq = new TextEncoder,
      Aq = new TextDecoder;

    function cq(qq) {
      return qq
    }
    let uq;

    function Bq(qq) {
      return null === qq || "object" !== typeof qq ? qq : [mq(qq.Oc), mq(qq.mc)]
    }

    function Wq(qq) {
      return null === qq || "object" !== typeof qq ? qq : [Oq(qq.Uq, cq), Oq(qq.Nu, cq)]
    }

    function Nq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Hc), mq(Eq.oc)];
      var Eq
    }

    function aq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.id, Eq.xu];
      var Eq
    }

    function Vq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.nE, mq(Eq.bE), Eq.iE, mq(Eq.ME), Eq.pE, Eq.GE, Eq.Wm, mq(Eq.Nm), mq(Eq.am)];
      var Eq
    }

    function dq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Yc, cq), Eq.lc];
      var Eq
    }

    function jq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.tc, (qq => mq(qq))), mq(Eq.vc), Eq.hc];
      var Eq
    }

    function Hq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Au, cq), mq(Eq.cu), Eq.uu];
      var Eq
    }

    function oq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.tY), mq(Eq.rY)];
      var Eq
    }

    function Pq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Dc)];
      var Eq
    }

    function Qq(qq) {
      return mq(qq)
    }

    function yq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Sc), mq(Eq.Gc), mq(Eq.Oc), mq(Eq.mc)];
      var Eq
    }

    function tq(qq) {
      return Bq(qq)
    }

    function rq(qq) {
      return Bq(qq)
    }

    function vq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.um)];
      var Eq
    }

    function hq(qq) {
      return qq
    }

    function nq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.KA), mq(Eq.CA)];
      var Eq
    }

    function bq(qq) {
      return mq(qq)
    }

    function iq(qq) {
      return Wq(qq)
    }

    function Zq(qq) {
      return Wq(qq)
    }

    function fq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Bm)];
      var Eq
    }

    function Mq(qq) {
      return (uq ??= (0, Yq.e)().map((qq => qq.name)), uq).map((Eq => {
        return "string" === typeof(gq = qq[Eq]) ? mq(gq) : Oq(gq, cq);
        var gq
      }))
    }

    function Tq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.ou, Eq.Pu, Eq.Qu];
      var Eq
    }
  },
  9464: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(9433);
    const lq = "Air",
      Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39174: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      c: () => xq
    });
    var Yq = gq(307),
      lq = gq(4283);
    const Oq = new Set(lq.o),
      mq = new Map;

    function xq(qq, Eq) {
      let gq = mq.get(Eq);
      void 0 === gq && (gq = new Map, mq.set(Eq, gq));
      let lq = gq.get(qq);
      return void 0 === lq && (lq = `${qq}${(0,Yq.E)(Eq)}`, gq.set(qq, lq)), lq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);