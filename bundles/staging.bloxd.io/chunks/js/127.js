export const id = 127;
export const ids = [127];
export const modules = {
  42578: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      h: () => Kd,
      k: () => Xd
    });
    var Wd = md(42587),
      Fd = md(5568),
      Rd = md(42593);

    function Xd(dd) {
      return dd.payloadKind === Fd.mc.Msgpack ? (0, Wd.b)(dd.payload) : void 0
    }

    function Kd(dd, Od) {
      if (Od.payloadKind === Fd.mc.Bytes || Od.payloadKind === Fd.mc.MsgpackBin) return (0, Rd.b)(dd, Od.payload)
    }

    function hd(dd) {
      return null !== dd && "object" === typeof dd
    }
  },
  42602: (dd, Od, md) => {
    md.d(Od, {
      c: () => td,
      g: () => od,
      i: () => Nd,
      k: () => Qd,
      m: () => yd
    });
    var Wd = md(5568),
      Fd = md(42609);
    const Rd = new Map,
      Xd = new Set,
      Kd = new Set;
    let hd = 0,
      vd = 0;

    function Qd(dd, Od) {
      let md = Rd.get(dd);
      return md || (md = new Set, Rd.set(dd, md)), md.add(Od), () => {
        md.delete(Od)
      }
    }

    function td() {
      return 0 !== hd
    }

    function od(dd) {
      return Xd.add(dd), () => {
        Xd.delete(dd)
      }
    }

    function Nd(dd) {
      return Kd.add(dd), () => {
        Kd.delete(dd)
      }
    }
    const qd = "A raw message listener threw";

    function Hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd;
      for (const Wd of Od) try {
        Wd()
      } catch (md) {
        dd ? (0, Fd.p)(md, qd) : console.error(qd, md)
      }
    }
    const yd = {
      fire: function(dd) {
        if ("connection" === dd.type) {
          const Od = dd.phase === Wd.C.Activated && dd.conn !== hd && dd.conn > vd,
            md = (dd.phase === Wd.C.Left || dd.phase === Wd.C.Closed) && dd.conn === hd;
          return void(Od || md ? (hd = Od ? dd.conn : 0, Hd(!0)) : dd.phase === Wd.C.Resumed && 0 !== hd && dd.conn > vd && (hd = dd.conn, Hd(!0, Kd)))
        }
        const Od = Rd.get(dd.tX);
        if (Od && dd.conn === hd && 0 !== hd)
          for (const Wd of Od) try {
            Wd(dd)
          } catch (md) {
            (0, Fd.p)(md, qd)
          }
      },
      close: function(dd) {
        vd = Math.max(vd, dd, hd), 0 !== hd && (hd = 0, Hd(!1))
      }
    }
  },
  42567: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      d: () => hd,
      f: () => Kd
    });
    var Wd = md(1322),
      Fd = md(42540);
    const Rd = new TextDecoder,
      Xd = new TextEncoder;

    function Kd(dd, Od) {
      const md = dd.queries.entityName(Od);
      if (md === Fd.Gc) return;
      const Xd = dd.memoryData(dd.scratch(), 4 + md, 4, "entity_name's answer");
      if (!Xd) return;
      const Kd = Xd.getUint32(0, !0),
        hd = Rd.decode(new Uint8Array(Xd.buffer, Xd.byteOffset + 4, md));
      return (0, Wd.b)(hd, !1, Kd === Fd.Yd ? null : Kd)
    }

    function hd(dd, Od, md) {
      const Wd = Xd.encode(md);
      if (Wd.length > Fd.Hb) return !1;
      const Rd = dd.memoryView(Uint8Array, dd.scratch(), Wd.length, "has_effect's name");
      return !!Rd && (Rd.set(Wd), 1 === dd.queries.hasEffect(Od, Wd.length))
    }

    function vd(dd, Od, md, Wd) {
      const Xd = dd.queries.blockData(Od, md, Wd);
      if (Xd === Fd.Gc) return;
      const Kd = dd.memoryView(Uint8Array, dd.scratch(), Xd, "block_data's answer");
      return Kd ? JSON.parse(Rd.decode(Kd)) : void 0
    }
  },
  42587: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Qd
    });
    const Wd = new TextDecoder;

    function Fd(dd) {
      const Od = new Rd(dd),
        md = Od.value();
      if (Od.at !== dd.length) throw new Error(`msgpack: ${dd.length-Od.at} bytes after the value`);
      return md
    }
    class Rd {
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
        const Od = this.at;
        if (Od + dd > this.bytes.length) throw new Error(`msgpack: ${dd} bytes past the end at ${Od}`);
        return this.at = Od + dd, Od
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
        const Od = this.take(8);
        return dd ? this.view.getBigInt64(Od, !1) : this.view.getBigUint64(Od, !1)
      }
      str(dd) {
        const Od = this.take(dd),
          md = this.bytes;
        if (dd < 16) {
          let Fd = "";
          for (let Rd = Od; Rd < Od + dd; Rd++) {
            const Xd = md[Rd];
            if (Xd >= 128) return Wd.decode(md.subarray(Od, Od + dd));
            Fd += String.fromCharCode(Xd)
          }
          return Fd
        }
        return Wd.decode(md.subarray(Od, Od + dd))
      }
      bin(dd) {
        const Od = this.take(dd);
        return this.bytes.subarray(Od, Od + dd)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(dd) {
        this.enter();
        const Od = [];
        for (let md = 0; md < dd; md++) Od.push(this.value());
        return this.depth--, Od
      }
      map(dd) {
        this.enter();
        const Od = {};
        for (let md = 0; md < dd; md++) {
          const dd = this.value(),
            md = this.value();
          Od["__proto__" === dd ? "__proto_" : String(dd)] = md
        }
        return this.depth--, Od
      }
      ext(dd) {
        const Od = this.view.getInt8(this.take(1)),
          md = this.take(dd);
        if (0 !== Od) {
          if (-1 === Od) {
            if (1 === dd) return new Date(NaN);
            if (4 === dd) return new Date(1e3 * this.view.getUint32(md, !1));
            if (8 === dd) {
              const dd = this.view.getUint32(md, !1),
                Od = dd >>> 2,
                Wd = 4294967296 * (3 & dd) + this.view.getUint32(md + 4, !1);
              return new Date(1e3 * Wd + Od / 1e6)
            }
            if (12 === dd) {
              const dd = this.view.getUint32(md, !1),
                Od = 4294967296 * this.view.getInt32(md + 4, !1) + this.view.getUint32(md + 8, !1);
              return new Date(1e3 * Od + dd / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Od} of ${dd} bytes`)
        }
      }
    }
    const Xd = new TextEncoder,
      Kd = -(2n ** 63n),
      hd = 2n ** 63n - 1n,
      vd = 2n ** 64n - 1n;

    function Qd(dd) {
      const Od = new td;
      return Od.value(dd, 0), Od.bytes()
    }
    class td {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(dd, Od) {
        if (Od > 512) throw new Error("msgpack: nested too deep");
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
              for (const md of dd) this.value(md, Od + 1)
            } else {
              var md, Wd;
              if (Object.getPrototypeOf(dd) !== Object.prototype && null !== Object.getPrototypeOf(dd)) throw new Error(`msgpack: can't encode a ${null!==(md=null===(Wd=dd.constructor)||void 0===Wd?void 0:Wd.name)&&void 0!==md?md:"object"}`);
              {
                const md = Object.keys(dd);
                this.head(md.length, 222, 128, 222, 223);
                for (const Wd of md) this.string(Wd), this.value(dd[Wd], Od + 1)
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
        const Od = dd >= Kd && dd <= hd;
        if (!Od && (dd < 0n || dd > vd)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Od ? 211 : 207), this.room(8), Od ? this.view.setBigInt64(this.at, dd, !1) : this.view.setBigUint64(this.at, dd, !1), this.at += 8
      }
      string(dd) {
        const Od = Xd.encode(dd);
        this.head(Od.length, 217, 160, 218, 219), this.room(Od.length), this.buf.set(Od, this.at), this.at += Od.length
      }
      head(dd, Od, md, Wd, Fd) {
        md >= 0 && dd < (160 === md ? 32 : 16) ? this.u8(md | dd) : Od !== Wd && dd < 256 ? (this.u8(Od), this.u8(dd)) : dd < 65536 ? (this.u8(Wd), this.u16(dd)) : (this.u8(Fd), this.u32(dd))
      }
      room(dd) {
        if (this.at + dd <= this.buf.length) return;
        let Od = 2 * this.buf.length;
        for (; Od < this.at + dd;) Od *= 2;
        const md = new Uint8Array(Od);
        md.set(this.buf.subarray(0, this.at)), this.buf = md, this.view = new DataView(md.buffer)
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
  42593: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(42573);
    const Fd = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Rd {
      constructor(dd) {
        this.buf = dd, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let dd = this.u8(),
          Od = 127 & dd,
          md = 128;
        for (; 128 & dd;) {
          if (md > 2 ** 63) throw new RangeError("avro: varint too long");
          dd = this.u8(), Od += (127 & dd) * md, md *= 128
        }
        return Od % 2 === 1 ? -(Od + 1) / 2 : Od / 2
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
          Od = this.take(dd),
          md = Od + dd;
        if (dd <= 32) {
          let dd = "";
          for (let Wd = Od; Wd < md; Wd++) {
            const Rd = this.buf[Wd];
            if (Rd >= 128) return Fd.decode(this.buf.subarray(Od, md));
            dd += String.fromCharCode(Rd)
          }
          return dd
        }
        return Fd.decode(this.buf.subarray(Od, md))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(dd) {
        const Od = this.take(dd);
        return this.buf.slice(Od, Od + dd)
      }
      index(dd) {
        const Od = this.long();
        if (!(Od >= 0 && Od < dd)) throw new RangeError(`avro: index ${Od} of ${dd}`);
        return Od
      }
      dt(dd) {
        const Od = [];
        for (let md = this.long(); 0 !== md; md = this.long()) {
          md = this.block(md);
          for (let Wd = 0; Wd < md; Wd++) Od.push(dd(this))
        }
        return Od
      }
      map(dd) {
        const Od = {};
        for (let md = this.long(); 0 !== md; md = this.long()) {
          md = this.block(md);
          for (let Wd = 0; Wd < md; Wd++) {
            Od[this.str()] = dd(this)
          }
        }
        return Od
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(dd) {
        let Od = dd;
        if (Od < 0 && (Od = -Od, this.long()), Od > this.buf.length - this.at) throw new RangeError(`avro: block of ${Od} items in ${this.buf.length-this.at} bytes`);
        return Od
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
        const Od = this.at;
        if (dd > this.buf.length - Od) throw new RangeError("avro: truncated");
        return this.at = Od + dd, Od
      }
    }

    function Xd(dd, Od) {
      const md = new Rd(Od),
        Fd = (0, Wd.kb)(dd, md);
      return md.end(), Fd
    }
  },
  42573: (dd, Od, md) => {
    md.d(Od, {
      A: () => vd,
      C: () => Xd,
      D: () => Bd,
      H: () => Fd,
      K: () => Kd,
      O: () => Nd,
      R: () => Ud,
      S: () => Jd,
      U: () => wd,
      X: () => Qd,
      Z: () => td,
      _: () => xd,
      ab: () => qd,
      b: () => gd,
      bb: () => pd,
      eb: () => Hd,
      f: () => yd,
      gb: () => hd,
      j: () => bd,
      k: () => Td,
      kb: () => Sd,
      l: () => Ed,
      n: () => Wd,
      r: () => Rd,
      u: () => Yd,
      w: () => od
    });
    const Wd = 2,
      Fd = 12,
      Rd = 27,
      Xd = 40,
      Kd = 52,
      hd = 59,
      vd = 63,
      Qd = 83,
      td = 84,
      od = 89,
      Nd = 91,
      qd = 93,
      Hd = 94,
      yd = 95,
      bd = 97,
      Td = 101,
      pd = 102,
      Yd = 73,
      gd = 16,
      wd = 86,
      Ed = 60,
      Jd = 17,
      Ud = 56,
      xd = 100,
      Bd = 81;

    function Sd(dd, Od) {
      switch (dd) {
        case Wd:
          return function(dd) {
            return {
              IR: kd(dd),
              lR: dd.float(),
              CR: dd.long()
            }
          }(Od);
        case Fd:
          return function(dd) {
            return {
              vR: rd(dd),
              QR: rd(dd)
            }
          }(Od);
        case Rd:
          return function(dd) {
            return {
              iO: dd.bool(),
              AO: rd(dd)
            }
          }(Od);
        case Xd:
          return Od.str();
        case Kd:
          return function(dd) {
            return {
              id: dd.long(),
              yR: hO(dd)
            }
          }(Od);
        case hd:
          return function(dd) {
            return {
              sO: rd(dd),
              uO: QO(dd)
            }
          }(Od);
        case vd:
          return Od.str();
        case Qd:
        case td:
          return Od.long();
        case od:
          return function(dd) {
            return {
              NR: dd.long(),
              qR: dd.bool(),
              HR: dd.float()
            }
          }(Od);
        case Nd:
          return Od.long();
        case qd:
          return function(dd) {
            return {
              rO: dd.bool(),
              GO: NO(dd)
            }
          }(Od);
        case Hd:
          return function(dd) {
            return {
              id: dd.str(),
              position: oO(dd),
              CO: qO(dd),
              style: cd(dd),
              MO: dd.bool()
            }
          }(Od);
        case yd:
          return function(dd) {
            return {
              id: rd(dd)
            }
          }(Od);
        case bd:
          return function(dd) {
            return {
              Vm: dd.long(),
              im: dd.str(),
              Am: XO(dd),
              rm: XO(dd),
              Gm: rd(dd),
              nm: rd(dd),
              Lm: rd(dd),
              Pm: rd(dd),
              zm: rd(dd),
              jm: XO(dd),
              Dm: XO(dd),
              Im: rd(dd),
              lm: rd(dd),
              Cm: rd(dd)
            }
          }(Od);
        case Td:
          return Od.str();
        case pd:
          return Od.long();
        case Yd:
          return function(dd) {
            return {
              gF: dd.long(),
              wF: dd.str(),
              aF: dd.float()
            }
          }(Od);
        case gd:
          return function(dd) {
            return {
              LF: dd.bool(),
              PF: rd(dd),
              zF: dd.str(),
              cF: yO(dd),
              jF: yO(dd),
              DF: dd.bool(),
              eF: dd.long(),
              IF: bO(dd)
            }
          }(Od);
        case wd:
          return function(dd) {
            return {
              XO: rd(dd)
            }
          }(Od);
        case Ed:
          return function(dd) {
            return {
              MR: dd.str(),
              dX: dd.str(),
              OX: TO(dd),
              mX: dd.str(),
              WX: dO(dd),
              FX: dd.float()
            }
          }(Od);
        case Jd:
          return function(dd) {
            return {
              MR: dd.str(),
              dX: dd.str(),
              OX: TO(dd)
            }
          }(Od);
        case Ud:
          return function(dd) {
            return dd.dt(pO)
          }(Od);
        case xd:
          return function(dd) {
            return {
              EF: gO(dd),
              SF: ed(dd)
            }
          }(Od);
        case Bd:
          return function(dd) {
            return {
              vW: dd.bool(),
              QW: rd(dd),
              tW: aO(dd),
              NW: LO(dd)
            }
          }(Od);
        default:
          throw new Error(`no reader for to-client message ${dd}`)
      }
    }

    function sd(dd) {
      return {
        entityName: dd.str()
      }
    }

    function ud(dd) {
      const Od = dd.index(4);
      return 0 === Od ? dd.str() : 1 === Od ? dd.long() : 2 === Od ? dd.bool() : sd(dd)
    }

    function Vd(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return dd.map(ud)
      }(dd)
    }

    function Ad(dd) {
      return {
        translationKey: dd.str(),
        params: Vd(dd)
      }
    }

    function rd(dd) {
      return 0 === dd.index(2) ? null : dd.str()
    }

    function Gd(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          color: rd(dd),
          colour: rd(dd),
          fontSize: rd(dd)
        }
      }(dd)
    }

    function nd(dd) {
      return {
        icon: dd.str(),
        style: Gd(dd)
      }
    }

    function Ld(dd) {
      const Od = dd.index(3);
      return 0 === Od ? {
        string: dd.str()
      } : 1 === Od ? {
        styledEntityName: sd(dd)
      } : {
        styledTranslatedText: Ad(dd)
      }
    }

    function Pd(dd) {
      const Od = dd.index(3);
      return 0 === Od ? null : 1 === Od ? dd.str() : dd.long()
    }

    function zd(dd) {
      return 0 === dd.index(2) ? null : dd.float()
    }

    function cd(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          color: rd(dd),
          colour: rd(dd),
          fontWeight: Pd(dd),
          fontStyle: rd(dd),
          fontSize: rd(dd),
          opacity: zd(dd)
        }
      }(dd)
    }

    function jd(dd) {
      return {
        str: Ld(dd),
        style: cd(dd),
        clickableUrl: rd(dd)
      }
    }

    function Dd(dd) {
      return dd.str()
    }

    function ed(dd) {
      return dd.dt(Dd)
    }

    function Id(dd) {
      return 0 === dd.index(2) ? null : ed(dd)
    }

    function ld(dd) {
      return {
        type: dd.str(),
        progress: dd.float(),
        width: rd(dd),
        height: rd(dd),
        colours: Id(dd),
        backgroundColour: rd(dd)
      }
    }

    function Cd(dd) {
      return {
        type: dd.str(),
        action: dd.str(),
        style: cd(dd)
      }
    }

    function Zd(dd) {
      const Od = dd.index(7);
      return 0 === Od ? {
        string: dd.str()
      } : 1 === Od ? {
        entityName: sd(dd)
      } : 2 === Od ? {
        translatedText: Ad(dd)
      } : 3 === Od ? {
        styledIcon: nd(dd)
      } : 4 === Od ? {
        ZO: jd(dd)
      } : 5 === Od ? {
        styledProgressBar: ld(dd)
      } : {
        styledKeyBinding: Cd(dd)
      }
    }

    function kd(dd) {
      return dd.dt(Zd)
    }
    const fd = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Md(dd) {
      return fd[dd.index(5)]
    }

    function dO(dd) {
      return 0 === dd.index(2) ? null : dd.double()
    }

    function OO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          gR: dO(dd),
          wR: dd.double(),
          aR: dd.double(),
          ER: dd.bool(),
          description: kd(dd),
          JR: dd.str(),
          scale: dO(dd),
          rotation: dO(dd)
        }
      }(dd)
    }

    function mO(dd) {
      return 0 === dd.index(2) ? null : dd.bool()
    }

    function WO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          xR: dd.double(),
          icon: dd.str(),
          label: kd(dd),
          BR: dd.bool(),
          scale: dO(dd),
          rotation: dO(dd),
          sR: mO(dd)
        }
      }(dd)
    }

    function FO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          gR: dO(dd),
          VR: dd.double(),
          iR: dd.double(),
          AR: dd.double(),
          gravity: dd.double(),
          rR: dd.double(),
          GR: dd.double(),
          nR: dd.double(),
          ER: dd.bool(),
          description: kd(dd),
          icon: rd(dd)
        }
      }(dd)
    }

    function RO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          speed: dd.double(),
          PR: dd.double(),
          label: kd(dd),
          icon: rd(dd),
          scale: dO(dd),
          rotation: dO(dd)
        }
      }(dd)
    }

    function XO(dd) {
      return 0 === dd.index(2) ? null : dd.long()
    }

    function KO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          cR: dd.long(),
          jR: dd.double(),
          DR: dd.double(),
          eR: XO(dd),
          label: kd(dd),
          icon: rd(dd)
        }
      }(dd)
    }

    function hO(dd) {
      return {
        type: Md(dd),
        progressBar: OO(dd),
        timedClick: WO(dd),
        gravityBar: FO(dd),
        precisionBar: RO(dd),
        rhythmClick: KO(dd)
      }
    }
    const vO = ["playerGone", "rateLimited"];

    function QO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return vO[dd.index(2)]
      }(dd)
    }

    function tO(dd) {
      return dd.float()
    }

    function oO(dd) {
      return dd.dt(tO)
    }

    function NO(dd) {
      return 0 === dd.index(2) ? null : oO(dd)
    }

    function qO(dd) {
      return 0 === dd.index(2) ? null : kd(dd)
    }

    function HO(dd) {
      return dd.long()
    }

    function yO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return dd.dt(HO)
      }(dd)
    }

    function bO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          Xm: dd.str(),
          Nm: dd.long()
        }
      }(dd)
    }

    function TO(dd) {
      const Od = dd.index(3);
      return 0 === Od ? null : 1 === Od ? dd.str() : Ad(dd)
    }

    function pO(dd) {
      return {
        XF: dd.str(),
        KF: dd.str(),
        hF: dd.str()
      }
    }

    function YO(dd) {
      return {
        JF: dd.str(),
        UF: rd(dd),
        xF: rd(dd),
        BF: ed(dd)
      }
    }

    function gO(dd) {
      return dd.dt(YO)
    }

    function wO(dd) {
      return {
        oW: dd.str(),
        x: dd.long(),
        y: dd.long(),
        z: dd.long()
      }
    }

    function aO(dd) {
      return dd.dt(wO)
    }

    function EO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          iW: dd.float(),
          AW: dd.long(),
          rW: dd.long()
        }
      }(dd)
    }

    function JO(dd) {
      return {
        blockName: dd.str(),
        JW: dd.bool(),
        UW: dd.bool(),
        xW: dd.bool(),
        BW: dd.float(),
        SW: dd.float(),
        sW: dd.long(),
        uW: EO(dd)
      }
    }

    function UO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return dd.dt(JO)
      }(dd)
    }

    function xO(dd) {
      return {
        wW: dd.str(),
        aW: UO(dd)
      }
    }

    function BO(dd) {
      return {
        blockName: dd.str(),
        frequency: dd.float()
      }
    }

    function SO(dd) {
      return dd.dt(BO)
    }

    function sO(dd) {
      return {
        LW: dd.str(),
        PW: dd.str(),
        frequency: dd.float(),
        zW: SO(dd)
      }
    }

    function uO(dd) {
      return dd.dt(sO)
    }

    function VO(dd) {
      return {
        blockName: dd.str(),
        radius: dd.long(),
        eW: dd.long(),
        yW: dd.long(),
        bW: dd.long(),
        IW: dd.float()
      }
    }

    function iO(dd) {
      return dd.dt(VO)
    }

    function AO(dd) {
      return {
        yW: dd.long(),
        bW: dd.long(),
        TW: dd.long(),
        pW: dd.bool(),
        YW: xO(dd),
        GW: uO(dd),
        jW: iO(dd)
      }
    }

    function rO(dd) {
      return dd.dt(AO)
    }

    function GO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          name: dd.str(),
          fW: rd(dd)
        }
      }(dd)
    }

    function nO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          terrain: GO(dd),
          MW: iO(dd)
        }
      }(dd)
    }

    function LO(dd) {
      return 0 === dd.index(2) ? null : function(dd) {
        return {
          layers: rO(dd),
          lW: nO(dd)
        }
      }(dd)
    }
  },
  42555: (dd, Od, md) => {
    md.d(Od, {
      $: () => bd,
      C: () => Ed,
      E: () => sd,
      I: () => Yd,
      K: () => gd,
      M: () => yd,
      O: () => xd,
      P: () => Vd,
      T: () => qd,
      X: () => rd,
      Y: () => Td,
      ab: () => pd,
      c: () => Fd,
      cb: () => wd,
      g: () => Ad,
      j: () => ud,
      l: () => Nd,
      o: () => Hd,
      q: () => Sd,
      u: () => Jd,
      w: () => Bd,
      y: () => Ud
    });
    var Wd = md(2963);
    const Fd = {
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

    function Rd(dd, Od) {
      return !ArrayBuffer.isView(dd) || dd instanceof DataView ? Array.isArray(dd) ? dd.map((dd => Od(dd))) : dd : Array.from(dd, (dd => Od(dd)))
    }

    function Xd(dd) {
      if ("string" !== typeof dd) return dd;
      for (let Od = 0; Od < dd.length; Od++) {
        const md = dd.charCodeAt(Od);
        if (md >= 55296 && md <= 57343) return hd.decode(Kd.encode(dd))
      }
      return dd
    }
    const Kd = new TextEncoder,
      hd = new TextDecoder;

    function vd(dd) {
      return dd
    }
    let Qd;

    function td(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Xd(dd.policy), Xd(dd.KK)]
    }

    function od(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Rd(dd.cF, vd), Rd(dd.ZK, vd)]
    }

    function Nd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.tX), Xd(Od.oX)];
      var Od
    }

    function qd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Od.id, Od.WQ];
      var Od
    }

    function Hd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Od.Vm, Xd(Od.im), Od.Am, Xd(Od.nm), Od.jm, Od.Dm, Od.hX, Xd(Od.vX), Xd(Od.QX)];
      var Od
    }

    function yd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Rd(Od.RK, vd), Od.XK];
      var Od
    }

    function bd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Rd(Od.oQ, (dd => Xd(dd))), Xd(Od.NQ), Od.qQ];
      var Od
    }

    function Td(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Rd(Od.MK, vd), Xd(Od.dh), Xd(Od.Oh), Od.mh];
      var Od
    }

    function pd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.KF), Xd(Od.hF)];
      var Od
    }

    function Yd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.hK)];
      var Od
    }

    function gd(dd) {
      return Xd(dd)
    }

    function wd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.SQ), Xd(Od.sQ), Xd(Od.policy), Xd(Od.KK), Rd(Od.uQ, (dd => Xd(dd)))];
      var Od
    }

    function Ed(dd) {
      return td(dd)
    }

    function Jd(dd) {
      return td(dd)
    }

    function Ud(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.dQ)];
      var Od
    }

    function xd(dd) {
      return dd
    }

    function Bd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.QQ), Xd(Od.tQ)];
      var Od
    }

    function Sd(dd) {
      return Xd(dd)
    }

    function sd(dd) {
      return od(dd)
    }

    function ud(dd) {
      return od(dd)
    }

    function Vd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Xd(Od.Iv)];
      var Od
    }

    function Ad(dd) {
      return (Qd ??= (0, Wd.e)().map((dd => dd.name)), Qd).map((Od => {
        return "string" === typeof(md = dd[Od]) ? Xd(md) : Rd(md, vd);
        var md
      }))
    }

    function rd(dd) {
      return null === (Od = dd) || "object" !== typeof Od ? Od : [Od.bX, Od.TX, Od.pX];
      var Od
    }
  },
  5819: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Rd
    });
    var Wd = md(5769);
    const Fd = "Air",
      Rd = Object.freeze(new Wd.f(Fd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40849: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Kd
    });
    var Wd = md(405),
      Fd = md(5128);
    const Rd = new Set(Fd.l),
      Xd = new Map;

    function Kd(dd, Od) {
      let md = Xd.get(Od);
      void 0 === md && (md = new Map, Xd.set(Od, md));
      let Fd = md.get(dd);
      return void 0 === Fd && (Fd = `${dd}${(0,Wd.r)(Od)}`, md.set(dd, Fd)), Fd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);