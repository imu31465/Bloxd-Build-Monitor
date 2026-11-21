export const id = 200;
export const ids = [200];
export const modules = {
  40601: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      e: () => Zd,
      f: () => Pd
    });
    var pd = kd(40610),
      Nd = kd(4680),
      Wd = kd(40615);

    function Pd(dd) {
      return dd.payloadKind === Nd.ic.Msgpack ? (0, pd.c)(dd.payload) : void 0
    }

    function Zd(dd, Jd) {
      if (Jd.payloadKind === Nd.ic.Bytes || Jd.payloadKind === Nd.ic.MsgpackBin) return (0, Wd.c)(dd, Jd.payload)
    }

    function gd(dd) {
      return null !== dd && "object" === typeof dd
    }
  },
  40624: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => od,
      f: () => ld,
      h: () => Qd,
      l: () => Kd,
      n: () => ed
    });
    var pd = kd(4680),
      Nd = kd(40629);
    const Wd = new Map,
      Pd = new Set,
      Zd = new Set;
    let gd = 0,
      Cd = 0;

    function Kd(dd, Jd) {
      let kd = Wd.get(dd);
      return kd || (kd = new Set, Wd.set(dd, kd)), kd.add(Jd), () => {
        kd.delete(Jd)
      }
    }

    function od() {
      return 0 !== gd
    }

    function ld(dd) {
      return Pd.add(dd), () => {
        Pd.delete(dd)
      }
    }

    function Qd(dd) {
      return Zd.add(dd), () => {
        Zd.delete(dd)
      }
    }
    const Ld = "A raw message listener threw";

    function Od(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pd;
      for (const pd of Jd) try {
        pd()
      } catch (kd) {
        dd ? (0, Nd.p)(kd, Ld) : console.error(Ld, kd)
      }
    }
    const ed = {
      fire: function(dd) {
        if ("connection" === dd.type) {
          const Jd = dd.phase === pd.C.Activated && dd.conn !== gd && dd.conn > Cd,
            kd = (dd.phase === pd.C.Left || dd.phase === pd.C.Closed) && dd.conn === gd;
          return void(Jd || kd ? (gd = Jd ? dd.conn : 0, Od(!0)) : dd.phase === pd.C.Resumed && 0 !== gd && dd.conn > Cd && (gd = dd.conn, Od(!0, Zd)))
        }
        const Jd = Wd.get(dd.IC);
        if (Jd && dd.conn === gd && 0 !== gd)
          for (const pd of Jd) try {
            pd(dd)
          } catch (kd) {
            (0, Nd.p)(kd, Ld)
          }
      },
      close: function(dd) {
        Cd = Math.max(Cd, dd, gd), 0 !== gd && (gd = 0, Od(!1))
      }
    }
  },
  40585: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      c: () => gd,
      g: () => Zd
    });
    var pd = kd(1288),
      Nd = kd(40569);
    const Wd = new TextDecoder,
      Pd = new TextEncoder;

    function Zd(dd, Jd) {
      const kd = dd.queries.entityName(Jd);
      if (kd === Nd.Pc) return;
      const Pd = dd.memoryData(dd.scratch(), 4 + kd, 4, "entity_name's answer");
      if (!Pd) return;
      const Zd = Pd.getUint32(0, !0),
        gd = Wd.decode(new Uint8Array(Pd.buffer, Pd.byteOffset + 4, kd));
      return (0, pd.d)(gd, !1, Zd === Nd.ge ? null : Zd)
    }

    function gd(dd, Jd, kd) {
      const pd = Pd.encode(kd);
      if (pd.length > Nd.Hb) return !1;
      const Wd = dd.memoryView(Uint8Array, dd.scratch(), pd.length, "has_effect's name");
      return !!Wd && (Wd.set(pd), 1 === dd.queries.hasEffect(Jd, pd.length))
    }

    function Cd(dd, Jd, kd, pd) {
      const Pd = dd.queries.blockData(Jd, kd, pd);
      if (Pd === Nd.Pc) return;
      const Zd = dd.memoryView(Uint8Array, dd.scratch(), Pd, "block_data's answer");
      return Zd ? JSON.parse(Wd.decode(Zd)) : void 0
    }
  },
  40610: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      e: () => Kd
    });
    const pd = new TextDecoder;

    function Nd(dd) {
      const Jd = new Wd(dd),
        kd = Jd.value();
      if (Jd.at !== dd.length) throw new Error(`msgpack: ${dd.length-Jd.at} bytes after the value`);
      return kd
    }
    class Wd {
      constructor(dd) {
        this.bytes = dd, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(dd.buffer, dd.byteOffset, dd.byteLength)
      }
      value() {
        const dd = this.u8();
        if (dd <= 127) return dd;
        if (dd >= 224) return dd - 256;
        if (dd >= 128 && dd <= 143) return this.map(15 & dd);
        if (dd >= 144 && dd <= 159) return this.array(15 & dd);
        if (dd >= 160 && dd <= 191) return this.str(31 & dd);
        switch (dd) {
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
            throw new Error(`msgpack: unknown byte 0x${dd.toString(16)} at ${this.at-1}`)
        }
      }
      take(dd) {
        const Jd = this.at;
        if (Jd + dd > this.bytes.length) throw new Error(`msgpack: ${dd} bytes past the end at ${Jd}`);
        return this.at = Jd + dd, Jd
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
      int64(dd) {
        const Jd = this.take(8);
        return dd ? this.view.getBigInt64(Jd, !1) : this.view.getBigUint64(Jd, !1)
      }
      str(dd) {
        const Jd = this.take(dd),
          kd = this.bytes;
        if (dd < 16) {
          let Nd = "";
          for (let Wd = Jd; Wd < Jd + dd; Wd++) {
            const Pd = kd[Wd];
            if (Pd >= 128) return pd.decode(kd.subarray(Jd, Jd + dd));
            Nd += String.fromCharCode(Pd)
          }
          return Nd
        }
        return pd.decode(kd.subarray(Jd, Jd + dd))
      }
      bin(dd) {
        const Jd = this.take(dd);
        return this.bytes.subarray(Jd, Jd + dd)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(dd) {
        this.enter();
        const Jd = [];
        for (let kd = 0; kd < dd; kd++) Jd.push(this.value());
        return this.depth--, Jd
      }
      map(dd) {
        this.enter();
        const Jd = {};
        for (let kd = 0; kd < dd; kd++) {
          const dd = this.value(),
            kd = this.value();
          Jd["__proto__" === dd ? "__proto_" : String(dd)] = kd
        }
        return this.depth--, Jd
      }
      ext(dd) {
        const Jd = this.view.getInt8(this.take(1)),
          kd = this.take(dd);
        if (0 !== Jd) {
          if (-1 === Jd) {
            if (1 === dd) return new Date(NaN);
            if (4 === dd) return new Date(1e3 * this.view.getUint32(kd, !1));
            if (8 === dd) {
              const dd = this.view.getUint32(kd, !1),
                Jd = dd >>> 2,
                pd = 4294967296 * (3 & dd) + this.view.getUint32(kd + 4, !1);
              return new Date(1e3 * pd + Jd / 1e6)
            }
            if (12 === dd) {
              const dd = this.view.getUint32(kd, !1),
                Jd = 4294967296 * this.view.getInt32(kd + 4, !1) + this.view.getUint32(kd + 8, !1);
              return new Date(1e3 * Jd + dd / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Jd} of ${dd} bytes`)
        }
      }
    }
    const Pd = new TextEncoder,
      Zd = -(2n ** 63n),
      gd = 2n ** 63n - 1n,
      Cd = 2n ** 64n - 1n;

    function Kd(dd) {
      const Jd = new od;
      return Jd.value(dd, 0), Jd.bytes()
    }
    class od {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(dd, Jd) {
        if (Jd > 512) throw new Error("msgpack: nested too deep");
        switch (typeof dd) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(dd ? 195 : 194);
          case "number":
            return void this.number(dd);
          case "bigint":
            return void this.bigint(dd);
          case "string":
            return void this.string(dd);
          case "object":
            if (null === dd) this.u8(192);
            else if (dd instanceof Uint8Array) this.head(dd.length, 196, -1, 197, 198), this.room(dd.length), this.buf.set(dd, this.at), this.at += dd.length;
            else if (Array.isArray(dd)) {
              this.head(dd.length, 220, 144, 220, 221);
              for (const kd of dd) this.value(kd, Jd + 1)
            } else {
              var kd, pd;
              if (Object.getPrototypeOf(dd) !== Object.prototype && null !== Object.getPrototypeOf(dd)) throw new Error(`msgpack: can't encode a ${null!==(kd=null===(pd=dd.constructor)||void 0===pd?void 0:pd.name)&&void 0!==kd?kd:"object"}`);
              {
                const kd = Object.keys(dd);
                this.head(kd.length, 222, 128, 222, 223);
                for (const pd of kd) this.string(pd), this.value(dd[pd], Jd + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof dd)
        }
      }
      number(dd) {
        Number.isInteger(dd) && dd >= -2147483648 && dd <= 4294967295 ? dd >= 0 ? dd < 128 ? this.u8(dd) : dd < 256 ? (this.u8(204), this.u8(dd)) : dd < 65536 ? (this.u8(205), this.u16(dd)) : (this.u8(206), this.u32(dd)) : dd >= -32 ? this.u8(dd + 256) : dd >= -128 ? (this.u8(208), this.u8(dd + 256)) : dd >= -32768 ? (this.u8(209), this.u16(dd + 65536)) : (this.u8(210), this.u32(dd >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, dd, !1), this.at += 8)
      }
      bigint(dd) {
        const Jd = dd >= Zd && dd <= gd;
        if (!Jd && (dd < 0n || dd > Cd)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Jd ? 211 : 207), this.room(8), Jd ? this.view.setBigInt64(this.at, dd, !1) : this.view.setBigUint64(this.at, dd, !1), this.at += 8
      }
      string(dd) {
        const Jd = Pd.encode(dd);
        this.head(Jd.length, 217, 160, 218, 219), this.room(Jd.length), this.buf.set(Jd, this.at), this.at += Jd.length
      }
      head(dd, Jd, kd, pd, Nd) {
        kd >= 0 && dd < (160 === kd ? 32 : 16) ? this.u8(kd | dd) : Jd !== pd && dd < 256 ? (this.u8(Jd), this.u8(dd)) : dd < 65536 ? (this.u8(pd), this.u16(dd)) : (this.u8(Nd), this.u32(dd))
      }
      room(dd) {
        if (this.at + dd <= this.buf.length) return;
        let Jd = 2 * this.buf.length;
        for (; Jd < this.at + dd;) Jd *= 2;
        const kd = new Uint8Array(Jd);
        kd.set(this.buf.subarray(0, this.at)), this.buf = kd, this.view = new DataView(kd.buffer)
      }
      u8(dd) {
        this.room(1), this.buf[this.at++] = dd
      }
      u16(dd) {
        this.room(2), this.view.setUint16(this.at, dd, !1), this.at += 2
      }
      u32(dd) {
        this.room(4), this.view.setUint32(this.at, dd, !1), this.at += 4
      }
    }
  },
  40615: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(40592);
    const Nd = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Wd {
      constructor(dd) {
        this.buf = dd, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let dd = this.u8(),
          Jd = 127 & dd,
          kd = 128;
        for (; 128 & dd;) {
          if (kd > 2 ** 63) throw new RangeError("avro: varint too long");
          dd = this.u8(), Jd += (127 & dd) * kd, kd *= 128
        }
        return Jd % 2 === 1 ? -(Jd + 1) / 2 : Jd / 2
      }
      float() {
        const dd = this.take(4);
        return this.floats().getFloat32(dd, !0)
      }
      double() {
        const dd = this.take(8);
        return this.floats().getFloat64(dd, !0)
      }
      str() {
        const dd = this.size(),
          Jd = this.take(dd),
          kd = Jd + dd;
        if (dd <= 32) {
          let dd = "";
          for (let pd = Jd; pd < kd; pd++) {
            const Wd = this.buf[pd];
            if (Wd >= 128) return Nd.decode(this.buf.subarray(Jd, kd));
            dd += String.fromCharCode(Wd)
          }
          return dd
        }
        return Nd.decode(this.buf.subarray(Jd, kd))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(dd) {
        const Jd = this.take(dd);
        return this.buf.slice(Jd, Jd + dd)
      }
      index(dd) {
        const Jd = this.long();
        if (!(Jd >= 0 && Jd < dd)) throw new RangeError(`avro: index ${Jd} of ${dd}`);
        return Jd
      }
      NL(dd) {
        const Jd = [];
        for (let kd = this.long(); 0 !== kd; kd = this.long()) {
          kd = this.block(kd);
          for (let pd = 0; pd < kd; pd++) Jd.push(dd(this))
        }
        return Jd
      }
      map(dd) {
        const Jd = {};
        for (let kd = this.long(); 0 !== kd; kd = this.long()) {
          kd = this.block(kd);
          for (let pd = 0; pd < kd; pd++) {
            Jd[this.str()] = dd(this)
          }
        }
        return Jd
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(dd) {
        let Jd = dd;
        if (Jd < 0 && (Jd = -Jd, this.long()), Jd > this.buf.length - this.at) throw new RangeError(`avro: block of ${Jd} items in ${this.buf.length-this.at} bytes`);
        return Jd
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const dd = this.long();
        if (dd < 0) throw new RangeError(`avro: length ${dd}`);
        return dd
      }
      u8() {
        const dd = this.buf[this.at];
        if (void 0 === dd) throw new RangeError("avro: truncated");
        return this.at++, dd
      }
      take(dd) {
        const Jd = this.at;
        if (dd > this.buf.length - Jd) throw new RangeError("avro: truncated");
        return this.at = Jd + dd, Jd
      }
    }

    function Pd(dd, Jd) {
      const kd = new Wd(Jd),
        Nd = (0, pd.Ab)(dd, kd);
      return kd.end(), Nd
    }
  },
  40592: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => vd,
      Ab: () => Yd,
      D: () => ld,
      E: () => Cd,
      I: () => Pd,
      M: () => Fd,
      P: () => Nd,
      Q: () => Zd,
      R: () => Qd,
      V: () => ad,
      Y: () => sd,
      ab: () => qd,
      e: () => xd,
      eb: () => Kd,
      g: () => ed,
      ib: () => od,
      k: () => Rd,
      lb: () => Md,
      mb: () => Ld,
      n: () => Id,
      qb: () => Gd,
      r: () => Bd,
      ub: () => Od,
      v: () => pd,
      w: () => Wd,
      wb: () => gd
    });
    const pd = 2,
      Nd = 12,
      Wd = 27,
      Pd = 40,
      Zd = 52,
      gd = 59,
      Cd = 63,
      Kd = 83,
      od = 84,
      ld = 89,
      Qd = 91,
      Ld = 93,
      Od = 94,
      ed = 95,
      Rd = 97,
      Id = 101,
      Gd = 102,
      vd = 73,
      xd = 16,
      qd = 86,
      Bd = 60,
      sd = 17,
      ad = 56,
      Md = 100,
      Fd = 81;

    function Yd(dd, Jd) {
      switch (dd) {
        case pd:
          return function(dd) {
            return {
              bk: zd(dd),
              Xk: dd.float(),
              fk: dd.long()
            }
          }(Jd);
        case Nd:
          return function(dd) {
            return {
              Nd: Xd(dd),
              Wd: Xd(dd)
            }
          }(Jd);
        case Wd:
          return function(dd) {
            return {
              Vk: dd.bool(),
              zk: Xd(dd)
            }
          }(Jd);
        case Pd:
          return Jd.str();
        case Zd:
          return function(dd) {
            return {
              id: dd.long(),
              yp: ZJ(dd)
            }
          }(Jd);
        case gd:
        case Cd:
          return Jd.str();
        case Kd:
        case od:
          return Jd.long();
        case ld:
          return function(dd) {
            return {
              LJ: dd.long(),
              OJ: dd.bool(),
              eJ: dd.float()
            }
          }(Jd);
        case Qd:
          return Jd.long();
        case Ld:
          return function(dd) {
            return {
              Fd: dd.bool(),
              Yd: KJ(dd)
            }
          }(Jd);
        case Od:
          return function(dd) {
            return {
              id: dd.str(),
              position: CJ(dd),
              Ip: oJ(dd),
              style: Td(dd),
              vp: dd.bool()
            }
          }(Jd);
        case ed:
          return function(dd) {
            return {
              id: Xd(dd)
            }
          }(Jd);
        case Rd:
          return function(dd) {
            return {
              SJ: dd.long(),
              jJ: dd.str(),
              XJ: WJ(dd),
              fJ: WJ(dd),
              nJ: Xd(dd),
              UJ: Xd(dd),
              yJ: Xd(dd),
              DJ: Xd(dd),
              TJ: Xd(dd),
              EJ: WJ(dd),
              cJ: WJ(dd),
              hJ: Xd(dd),
              rJ: Xd(dd),
              uJ: Xd(dd)
            }
          }(Jd);
        case Id:
          return Jd.str();
        case Gd:
          return Jd.long();
        case vd:
          return function(dd) {
            return {
              Fp: dd.long(),
              Yp: dd.str(),
              mp: dd.float()
            }
          }(Jd);
        case xd:
          return function(dd) {
            return {
              ud: dd.bool(),
              td: Xd(dd),
              Vd: dd.str(),
              zd: QJ(dd),
              Hd: QJ(dd),
              wd: dd.bool(),
              Ad: dd.long(),
              dJ: LJ(dd)
            }
          }(Jd);
        case qd:
          return function(dd) {
            return {
              nk: Xd(dd)
            }
          }(Jd);
        case Bd:
          return function(dd) {
            return {
              tJ: dd.str(),
              VJ: dd.str(),
              zJ: OJ(dd),
              HJ: dd.str(),
              wJ: Ad(dd),
              AJ: dd.float()
            }
          }(Jd);
        case sd:
          return function(dd) {
            return {
              tJ: dd.str(),
              VJ: dd.str(),
              zJ: OJ(dd)
            }
          }(Jd);
        case ad:
          return function(dd) {
            return dd.NL(eJ)
          }(Jd);
        case Md:
          return function(dd) {
            return {
              Ok: IJ(dd),
              xk: hd(dd)
            }
          }(Jd);
        case Fd:
          return function(dd) {
            return {
              kW: dd.bool(),
              pW: Xd(dd),
              NW: vJ(dd),
              PW: fJ(dd)
            }
          }(Jd);
        default:
          throw new Error(`no reader for to-client message ${dd}`)
      }
    }

    function md(dd) {
      return {
        entityName: dd.str()
      }
    }

    function bd(dd) {
      const Jd = dd.index(4);
      return 0 === Jd ? dd.str() : 1 === Jd ? dd.long() : 2 === Jd ? dd.bool() : md(dd)
    }

    function Sd(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return dd.map(bd)
      }(dd)
    }

    function jd(dd) {
      return {
        translationKey: dd.str(),
        params: Sd(dd)
      }
    }

    function Xd(dd) {
      return 0 === dd.index(2) ? null : dd.str()
    }

    function fd(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          color: Xd(dd),
          colour: Xd(dd),
          fontSize: Xd(dd)
        }
      }(dd)
    }

    function nd(dd) {
      return {
        icon: dd.str(),
        style: fd(dd)
      }
    }

    function Ud(dd) {
      const Jd = dd.index(3);
      return 0 === Jd ? {
        string: dd.str()
      } : 1 === Jd ? {
        styledEntityName: md(dd)
      } : {
        styledTranslatedText: jd(dd)
      }
    }

    function yd(dd) {
      const Jd = dd.index(3);
      return 0 === Jd ? null : 1 === Jd ? dd.str() : dd.long()
    }

    function Dd(dd) {
      return 0 === dd.index(2) ? null : dd.float()
    }

    function Td(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          color: Xd(dd),
          colour: Xd(dd),
          fontWeight: yd(dd),
          fontStyle: Xd(dd),
          fontSize: Xd(dd),
          opacity: Dd(dd)
        }
      }(dd)
    }

    function Ed(dd) {
      return {
        str: Ud(dd),
        style: Td(dd),
        clickableUrl: Xd(dd)
      }
    }

    function cd(dd) {
      return dd.str()
    }

    function hd(dd) {
      return dd.NL(cd)
    }

    function rd(dd) {
      return 0 === dd.index(2) ? null : hd(dd)
    }

    function ud(dd) {
      return {
        type: dd.str(),
        progress: dd.float(),
        width: Xd(dd),
        height: Xd(dd),
        colours: rd(dd),
        backgroundColour: Xd(dd)
      }
    }

    function td(dd) {
      return {
        type: dd.str(),
        action: dd.str(),
        style: Td(dd)
      }
    }

    function Vd(dd) {
      const Jd = dd.index(7);
      return 0 === Jd ? {
        string: dd.str()
      } : 1 === Jd ? {
        entityName: md(dd)
      } : 2 === Jd ? {
        translatedText: jd(dd)
      } : 3 === Jd ? {
        styledIcon: nd(dd)
      } : 4 === Jd ? {
        Sk: Ed(dd)
      } : 5 === Jd ? {
        styledProgressBar: ud(dd)
      } : {
        styledKeyBinding: td(dd)
      }
    }

    function zd(dd) {
      return dd.NL(Vd)
    }
    const Hd = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function wd(dd) {
      return Hd[dd.index(5)]
    }

    function Ad(dd) {
      return 0 === dd.index(2) ? null : dd.double()
    }

    function dJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          cp: Ad(dd),
          hp: dd.double(),
          rp: dd.double(),
          tp: dd.bool(),
          description: zd(dd),
          Vp: dd.str(),
          scale: Ad(dd),
          rotation: Ad(dd)
        }
      }(dd)
    }

    function JJ(dd) {
      return 0 === dd.index(2) ? null : dd.bool()
    }

    function kJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          Hp: dd.double(),
          icon: dd.str(),
          label: zd(dd),
          wp: dd.bool(),
          scale: Ad(dd),
          rotation: Ad(dd),
          Ap: JJ(dd)
        }
      }(dd)
    }

    function pJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          cp: Ad(dd),
          JN: dd.double(),
          kN: dd.double(),
          pN: dd.double(),
          gravity: dd.double(),
          NN: dd.double(),
          WN: dd.double(),
          PN: dd.double(),
          tp: dd.bool(),
          description: zd(dd),
          icon: Xd(dd)
        }
      }(dd)
    }

    function NJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          speed: dd.double(),
          gN: dd.double(),
          label: zd(dd),
          icon: Xd(dd),
          scale: Ad(dd),
          rotation: Ad(dd)
        }
      }(dd)
    }

    function WJ(dd) {
      return 0 === dd.index(2) ? null : dd.long()
    }

    function PJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          KN: dd.long(),
          oN: dd.double(),
          lN: dd.double(),
          QN: WJ(dd),
          label: zd(dd),
          icon: Xd(dd)
        }
      }(dd)
    }

    function ZJ(dd) {
      return {
        type: wd(dd),
        progressBar: dJ(dd),
        timedClick: kJ(dd),
        gravityBar: pJ(dd),
        precisionBar: NJ(dd),
        rhythmClick: PJ(dd)
      }
    }

    function gJ(dd) {
      return dd.float()
    }

    function CJ(dd) {
      return dd.NL(gJ)
    }

    function KJ(dd) {
      return 0 === dd.index(2) ? null : CJ(dd)
    }

    function oJ(dd) {
      return 0 === dd.index(2) ? null : zd(dd)
    }

    function lJ(dd) {
      return dd.long()
    }

    function QJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return dd.NL(lJ)
      }(dd)
    }

    function LJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          kJ: dd.str(),
          pJ: dd.long()
        }
      }(dd)
    }

    function OJ(dd) {
      const Jd = dd.index(3);
      return 0 === Jd ? null : 1 === Jd ? dd.str() : jd(dd)
    }

    function eJ(dd) {
      return {
        Xp: dd.str(),
        np: dd.str(),
        Up: dd.str()
      }
    }

    function RJ(dd) {
      return {
        Rk: dd.str(),
        Ik: Xd(dd),
        Gk: Xd(dd),
        vk: hd(dd)
      }
    }

    function IJ(dd) {
      return dd.NL(RJ)
    }

    function GJ(dd) {
      return {
        WW: dd.str(),
        x: dd.long(),
        y: dd.long(),
        z: dd.long()
      }
    }

    function vJ(dd) {
      return dd.NL(GJ)
    }

    function xJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          MW: dd.float(),
          FW: dd.long(),
          YW: dd.long()
        }
      }(dd)
    }

    function qJ(dd) {
      return {
        blockName: dd.str(),
        GW: dd.bool(),
        vW: dd.bool(),
        xW: dd.bool(),
        qW: dd.float(),
        BW: dd.float(),
        sW: dd.long(),
        iW: xJ(dd)
      }
    }

    function BJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return dd.NL(qJ)
      }(dd)
    }

    function sJ(dd) {
      return {
        eW: dd.str(),
        RW: BJ(dd)
      }
    }

    function iJ(dd) {
      return {
        blockName: dd.str(),
        frequency: dd.float()
      }
    }

    function aJ(dd) {
      return dd.NL(iJ)
    }

    function MJ(dd) {
      return {
        SW: dd.str(),
        jW: dd.str(),
        frequency: dd.float(),
        XW: aJ(dd)
      }
    }

    function FJ(dd) {
      return dd.NL(MJ)
    }

    function YJ(dd) {
      return {
        blockName: dd.str(),
        radius: dd.long(),
        yW: dd.long(),
        KW: dd.long(),
        oW: dd.long(),
        DW: dd.float()
      }
    }

    function mJ(dd) {
      return dd.NL(YJ)
    }

    function bJ(dd) {
      return {
        KW: dd.long(),
        oW: dd.long(),
        lW: dd.long(),
        QW: dd.bool(),
        LW: sJ(dd),
        mW: FJ(dd),
        nW: mJ(dd)
      }
    }

    function SJ(dd) {
      return dd.NL(bJ)
    }

    function jJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          name: dd.str(),
          hW: Xd(dd)
        }
      }(dd)
    }

    function XJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          terrain: jJ(dd),
          rW: mJ(dd)
        }
      }(dd)
    }

    function fJ(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          layers: SJ(dd),
          TW: XJ(dd)
        }
      }(dd)
    }
  },
  40578: (dd, Jd, kd) => {
    kd.d(Jd, {
      $: () => qd,
      A: () => vd,
      D: () => xd,
      G: () => ed,
      K: () => Md,
      O: () => Sd,
      Q: () => Ld,
      R: () => Xd,
      V: () => Id,
      X: () => Rd,
      Y: () => Gd,
      e: () => Nd,
      g: () => jd,
      h: () => bd,
      i: () => Qd,
      l: () => Od,
      p: () => Yd,
      r: () => sd,
      s: () => Fd,
      t: () => ad,
      w: () => Bd,
      y: () => md
    });
    var pd = kd(2839);
    const Nd = {
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

    function Wd(dd, Jd) {
      return !ArrayBuffer.isView(dd) || dd instanceof DataView ? Array.isArray(dd) ? dd.map((dd => Jd(dd))) : dd : Array.from(dd, (dd => Jd(dd)))
    }

    function Pd(dd) {
      if ("string" !== typeof dd) return dd;
      for (let Jd = 0; Jd < dd.length; Jd++) {
        const kd = dd.charCodeAt(Jd);
        if (kd >= 55296 && kd <= 57343) return gd.decode(Zd.encode(dd))
      }
      return dd
    }
    const Zd = new TextEncoder,
      gd = new TextDecoder;

    function Cd(dd) {
      return dd
    }
    let Kd;

    function od(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Pd(dd.WC), Pd(dd.PC)]
    }

    function ld(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Wd(dd.zd, Cd), Wd(dd.oK, Cd)]
    }

    function Qd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.IC), Pd(Jd.vC)];
      var Jd
    }

    function Ld(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.id, Jd.WK];
      var Jd
    }

    function Od(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.SJ, Pd(Jd.jJ), Jd.XJ, Pd(Jd.UJ), Jd.EJ, Jd.cJ, Jd.BP, Pd(Jd.sP), Pd(Jd.iP)];
      var Jd
    }

    function ed(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.pC, Cd), Jd.NC];
      var Jd
    }

    function Rd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.sC, (dd => Pd(dd))), Pd(Jd.iC), Jd.aC];
      var Jd
    }

    function Id(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.PK, Cd), Pd(Jd.ZK), Jd.gK];
      var Jd
    }

    function Gd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.np), Pd(Jd.Up)];
      var Jd
    }

    function vd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.HC)];
      var Jd
    }

    function xd(dd) {
      return Pd(dd)
    }

    function qd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.XC), Pd(Jd.fC), Pd(Jd.WC), Pd(Jd.PC)];
      var Jd
    }

    function Bd(dd) {
      return od(dd)
    }

    function sd(dd) {
      return od(dd)
    }

    function ad(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.xP)];
      var Jd
    }

    function Md(dd) {
      return dd
    }

    function Fd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.Vg), Pd(Jd.zg)];
      var Jd
    }

    function Yd(dd) {
      return Pd(dd)
    }

    function md(dd) {
      return ld(dd)
    }

    function bd(dd) {
      return ld(dd)
    }

    function Sd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.qP)];
      var Jd
    }

    function jd(dd) {
      return (Kd ??= (0, pd.g)().map((dd => dd.name)), Kd).map((Jd => {
        return "string" === typeof(kd = dd[Jd]) ? Pd(kd) : Wd(kd, Cd);
        var kd
      }))
    }

    function Xd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.RK, Jd.IK, Jd.GK];
      var Jd
    }
  },
  9422: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => Wd
    });
    var pd = kd(9383);
    const Nd = "Air",
      Wd = Object.freeze(new pd.f(Nd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39370: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd,
      e: () => Zd
    });
    var pd = kd(313),
      Nd = kd(4313);
    const Wd = new Set(Nd.p),
      Pd = new Map;

    function Zd(dd, Jd) {
      let kd = Pd.get(Jd);
      void 0 === kd && (kd = new Map, Pd.set(Jd, kd));
      let Nd = kd.get(dd);
      return void 0 === Nd && (Nd = `${dd}${(0,pd.y)(Jd)}`, kd.set(dd, Nd)), Nd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);