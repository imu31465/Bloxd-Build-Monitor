export const id = 189;
export const ids = [189];
export const modules = {
  40614: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      e: () => lk,
      g: () => yk
    });
    var Xk = Ik(40623),
      Tk = Ik(4797),
      ik = Ik(40629);

    function yk(kk) {
      return kk.payloadKind === Tk.fc.Msgpack ? (0, Xk.b)(kk.payload) : void 0
    }

    function lk(kk, Fk) {
      if (Fk.payloadKind === Tk.fc.Bytes || Fk.payloadKind === Tk.fc.MsgpackBin) return (0, ik.d)(kk, Fk.payload)
    }

    function ak(kk) {
      return null !== kk && "object" === typeof kk
    }
  },
  40636: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk,
      f: () => Zk,
      j: () => jk,
      l: () => Lk,
      p: () => Hk
    });
    var Xk = Ik(4797),
      Tk = Ik(40641);
    const ik = new Map,
      yk = new Set,
      lk = new Set;
    let ak = 0,
      qk = 0;

    function Lk(kk, Fk) {
      let Ik = ik.get(kk);
      return Ik || (Ik = new Set, ik.set(kk, Ik)), Ik.add(Fk), () => {
        Ik.delete(Fk)
      }
    }

    function tk() {
      return 0 !== ak
    }

    function Zk(kk) {
      return yk.add(kk), () => {
        yk.delete(kk)
      }
    }

    function jk(kk) {
      return lk.add(kk), () => {
        lk.delete(kk)
      }
    }
    const ek = "A raw message listener threw";

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk;
      for (const Xk of Fk) try {
        Xk()
      } catch (Ik) {
        kk ? (0, Tk.i)(Ik, ek) : console.error(ek, Ik)
      }
    }
    const Hk = {
      fire: function(kk) {
        if ("connection" === kk.type) {
          const Fk = kk.phase === Xk.I.Activated && kk.conn !== ak && kk.conn > qk,
            Ik = (kk.phase === Xk.I.Left || kk.phase === Xk.I.Closed) && kk.conn === ak;
          return void(Fk || Ik ? (ak = Fk ? kk.conn : 0, wk(!0)) : kk.phase === Xk.I.Resumed && 0 !== ak && kk.conn > qk && (ak = kk.conn, wk(!0, lk)))
        }
        const Fk = ik.get(kk.oq);
        if (Fk && kk.conn === ak && 0 !== ak)
          for (const Xk of Fk) try {
            Xk(kk)
          } catch (Ik) {
            (0, Tk.i)(Ik, ek)
          }
      },
      close: function(kk) {
        qk = Math.max(qk, kk, ak), 0 !== ak && (ak = 0, wk(!1))
      }
    }
  },
  40604: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      i: () => ak,
      l: () => lk
    });
    var Xk = Ik(1253),
      Tk = Ik(40583);
    const ik = new TextDecoder,
      yk = new TextEncoder;

    function lk(kk, Fk) {
      const Ik = kk.queries.entityName(Fk);
      if (Ik === Tk.Dc) return;
      const yk = kk.memoryData(kk.scratch(), 4 + Ik, 4, "entity_name's answer");
      if (!yk) return;
      const lk = yk.getUint32(0, !0),
        ak = ik.decode(new Uint8Array(yk.buffer, yk.byteOffset + 4, Ik));
      return (0, Xk.e)(ak, !1, lk === Tk.Rd ? null : lk)
    }

    function ak(kk, Fk, Ik) {
      const Xk = yk.encode(Ik);
      if (Xk.length > Tk.Bb) return !1;
      const ik = kk.memoryView(Uint8Array, kk.scratch(), Xk.length, "has_effect's name");
      return !!ik && (ik.set(Xk), 1 === kk.queries.hasEffect(Fk, Xk.length))
    }

    function qk(kk, Fk, Ik, Xk) {
      const yk = kk.queries.blockData(Fk, Ik, Xk);
      if (yk === Tk.Dc) return;
      const lk = kk.memoryView(Uint8Array, kk.scratch(), yk, "block_data's answer");
      return lk ? JSON.parse(ik.decode(lk)) : void 0
    }
  },
  40623: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      c: () => Lk
    });
    const Xk = new TextDecoder;

    function Tk(kk) {
      const Fk = new ik(kk),
        Ik = Fk.value();
      if (Fk.at !== kk.length) throw new Error(`msgpack: ${kk.length-Fk.at} bytes after the value`);
      return Ik
    }
    class ik {
      constructor(kk) {
        this.bytes = kk, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(kk.buffer, kk.byteOffset, kk.byteLength)
      }
      value() {
        const kk = this.u8();
        if (kk <= 127) return kk;
        if (kk >= 224) return kk - 256;
        if (kk >= 128 && kk <= 143) return this.map(15 & kk);
        if (kk >= 144 && kk <= 159) return this.array(15 & kk);
        if (kk >= 160 && kk <= 191) return this.str(31 & kk);
        switch (kk) {
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
            throw new Error(`msgpack: unknown byte 0x${kk.toString(16)} at ${this.at-1}`)
        }
      }
      take(kk) {
        const Fk = this.at;
        if (Fk + kk > this.bytes.length) throw new Error(`msgpack: ${kk} bytes past the end at ${Fk}`);
        return this.at = Fk + kk, Fk
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
      int64(kk) {
        const Fk = this.take(8);
        return kk ? this.view.getBigInt64(Fk, !1) : this.view.getBigUint64(Fk, !1)
      }
      str(kk) {
        const Fk = this.take(kk),
          Ik = this.bytes;
        if (kk < 16) {
          let Tk = "";
          for (let ik = Fk; ik < Fk + kk; ik++) {
            const yk = Ik[ik];
            if (yk >= 128) return Xk.decode(Ik.subarray(Fk, Fk + kk));
            Tk += String.fromCharCode(yk)
          }
          return Tk
        }
        return Xk.decode(Ik.subarray(Fk, Fk + kk))
      }
      bin(kk) {
        const Fk = this.take(kk);
        return this.bytes.subarray(Fk, Fk + kk)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(kk) {
        this.enter();
        const Fk = [];
        for (let Ik = 0; Ik < kk; Ik++) Fk.push(this.value());
        return this.depth--, Fk
      }
      map(kk) {
        this.enter();
        const Fk = {};
        for (let Ik = 0; Ik < kk; Ik++) {
          const kk = this.value(),
            Ik = this.value();
          Fk["__proto__" === kk ? "__proto_" : String(kk)] = Ik
        }
        return this.depth--, Fk
      }
      ext(kk) {
        const Fk = this.view.getInt8(this.take(1)),
          Ik = this.take(kk);
        if (0 !== Fk) {
          if (-1 === Fk) {
            if (1 === kk) return new Date(NaN);
            if (4 === kk) return new Date(1e3 * this.view.getUint32(Ik, !1));
            if (8 === kk) {
              const kk = this.view.getUint32(Ik, !1),
                Fk = kk >>> 2,
                Xk = 4294967296 * (3 & kk) + this.view.getUint32(Ik + 4, !1);
              return new Date(1e3 * Xk + Fk / 1e6)
            }
            if (12 === kk) {
              const kk = this.view.getUint32(Ik, !1),
                Fk = 4294967296 * this.view.getInt32(Ik + 4, !1) + this.view.getUint32(Ik + 8, !1);
              return new Date(1e3 * Fk + kk / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Fk} of ${kk} bytes`)
        }
      }
    }
    const yk = new TextEncoder,
      lk = -(2n ** 63n),
      ak = 2n ** 63n - 1n,
      qk = 2n ** 64n - 1n;

    function Lk(kk) {
      const Fk = new tk;
      return Fk.value(kk, 0), Fk.bytes()
    }
    class tk {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(kk, Fk) {
        if (Fk > 512) throw new Error("msgpack: nested too deep");
        switch (typeof kk) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(kk ? 195 : 194);
          case "number":
            return void this.number(kk);
          case "bigint":
            return void this.bigint(kk);
          case "string":
            return void this.string(kk);
          case "object":
            if (null === kk) this.u8(192);
            else if (kk instanceof Uint8Array) this.head(kk.length, 196, -1, 197, 198), this.room(kk.length), this.buf.set(kk, this.at), this.at += kk.length;
            else if (Array.isArray(kk)) {
              this.head(kk.length, 220, 144, 220, 221);
              for (const Ik of kk) this.value(Ik, Fk + 1)
            } else {
              var Ik, Xk;
              if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(Ik=null===(Xk=kk.constructor)||void 0===Xk?void 0:Xk.name)&&void 0!==Ik?Ik:"object"}`);
              {
                const Ik = Object.keys(kk);
                this.head(Ik.length, 222, 128, 222, 223);
                for (const Xk of Ik) this.string(Xk), this.value(kk[Xk], Fk + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof kk)
        }
      }
      number(kk) {
        Number.isInteger(kk) && kk >= -2147483648 && kk <= 4294967295 ? kk >= 0 ? kk < 128 ? this.u8(kk) : kk < 256 ? (this.u8(204), this.u8(kk)) : kk < 65536 ? (this.u8(205), this.u16(kk)) : (this.u8(206), this.u32(kk)) : kk >= -32 ? this.u8(kk + 256) : kk >= -128 ? (this.u8(208), this.u8(kk + 256)) : kk >= -32768 ? (this.u8(209), this.u16(kk + 65536)) : (this.u8(210), this.u32(kk >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, kk, !1), this.at += 8)
      }
      bigint(kk) {
        const Fk = kk >= lk && kk <= ak;
        if (!Fk && (kk < 0n || kk > qk)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Fk ? 211 : 207), this.room(8), Fk ? this.view.setBigInt64(this.at, kk, !1) : this.view.setBigUint64(this.at, kk, !1), this.at += 8
      }
      string(kk) {
        const Fk = yk.encode(kk);
        this.head(Fk.length, 217, 160, 218, 219), this.room(Fk.length), this.buf.set(Fk, this.at), this.at += Fk.length
      }
      head(kk, Fk, Ik, Xk, Tk) {
        Ik >= 0 && kk < (160 === Ik ? 32 : 16) ? this.u8(Ik | kk) : Fk !== Xk && kk < 256 ? (this.u8(Fk), this.u8(kk)) : kk < 65536 ? (this.u8(Xk), this.u16(kk)) : (this.u8(Tk), this.u32(kk))
      }
      room(kk) {
        if (this.at + kk <= this.buf.length) return;
        let Fk = 2 * this.buf.length;
        for (; Fk < this.at + kk;) Fk *= 2;
        const Ik = new Uint8Array(Fk);
        Ik.set(this.buf.subarray(0, this.at)), this.buf = Ik, this.view = new DataView(Ik.buffer)
      }
      u8(kk) {
        this.room(1), this.buf[this.at++] = kk
      }
      u16(kk) {
        this.room(2), this.view.setUint16(this.at, kk, !1), this.at += 2
      }
      u32(kk) {
        this.room(4), this.view.setUint32(this.at, kk, !1), this.at += 4
      }
    }
  },
  40629: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(40609);
    const Tk = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class ik {
      constructor(kk) {
        this.buf = kk, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let kk = this.u8(),
          Fk = 127 & kk,
          Ik = 128;
        for (; 128 & kk;) {
          if (Ik > 2 ** 63) throw new RangeError("avro: varint too long");
          kk = this.u8(), Fk += (127 & kk) * Ik, Ik *= 128
        }
        return Fk % 2 === 1 ? -(Fk + 1) / 2 : Fk / 2
      }
      float() {
        const kk = this.take(4);
        return this.floats().getFloat32(kk, !0)
      }
      double() {
        const kk = this.take(8);
        return this.floats().getFloat64(kk, !0)
      }
      str() {
        const kk = this.size(),
          Fk = this.take(kk),
          Ik = Fk + kk;
        if (kk <= 32) {
          let kk = "";
          for (let Xk = Fk; Xk < Ik; Xk++) {
            const ik = this.buf[Xk];
            if (ik >= 128) return Tk.decode(this.buf.subarray(Fk, Ik));
            kk += String.fromCharCode(ik)
          }
          return kk
        }
        return Tk.decode(this.buf.subarray(Fk, Ik))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(kk) {
        const Fk = this.take(kk);
        return this.buf.slice(Fk, Fk + kk)
      }
      index(kk) {
        const Fk = this.long();
        if (!(Fk >= 0 && Fk < kk)) throw new RangeError(`avro: index ${Fk} of ${kk}`);
        return Fk
      }
      He(kk) {
        const Fk = [];
        for (let Ik = this.long(); 0 !== Ik; Ik = this.long()) {
          Ik = this.block(Ik);
          for (let Xk = 0; Xk < Ik; Xk++) Fk.push(kk(this))
        }
        return Fk
      }
      map(kk) {
        const Fk = {};
        for (let Ik = this.long(); 0 !== Ik; Ik = this.long()) {
          Ik = this.block(Ik);
          for (let Xk = 0; Xk < Ik; Xk++) {
            Fk[this.str()] = kk(this)
          }
        }
        return Fk
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(kk) {
        let Fk = kk;
        if (Fk < 0 && (Fk = -Fk, this.long()), Fk > this.buf.length - this.at) throw new RangeError(`avro: block of ${Fk} items in ${this.buf.length-this.at} bytes`);
        return Fk
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const kk = this.long();
        if (kk < 0) throw new RangeError(`avro: length ${kk}`);
        return kk
      }
      u8() {
        const kk = this.buf[this.at];
        if (void 0 === kk) throw new RangeError("avro: truncated");
        return this.at++, kk
      }
      take(kk) {
        const Fk = this.at;
        if (kk > this.buf.length - Fk) throw new RangeError("avro: truncated");
        return this.at = Fk + kk, Fk
      }
    }

    function yk(kk, Fk) {
      const Ik = new ik(Fk),
        Tk = (0, Xk.gb)(kk, Ik);
      return Ik.end(), Tk
    }
  },
  40609: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      $: () => wk,
      B: () => Ek,
      C: () => Tk,
      G: () => lk,
      H: () => jk,
      I: () => Sk,
      J: () => zk,
      N: () => sk,
      P: () => Lk,
      Q: () => tk,
      T: () => vk,
      W: () => ek,
      _: () => Pk,
      d: () => Qk,
      db: () => ak,
      f: () => Hk,
      gb: () => Ok,
      h: () => Jk,
      k: () => xk,
      m: () => Vk,
      p: () => Xk,
      q: () => ik,
      s: () => Kk,
      t: () => Zk,
      w: () => qk,
      x: () => yk
    });
    const Xk = 2,
      Tk = 12,
      ik = 27,
      yk = 40,
      lk = 52,
      ak = 59,
      qk = 63,
      Lk = 83,
      tk = 84,
      Zk = 89,
      jk = 91,
      ek = 93,
      wk = 94,
      Hk = 95,
      Jk = 97,
      xk = 101,
      Pk = 102,
      Kk = 73,
      Qk = 16,
      sk = 86,
      Vk = 60,
      zk = 17,
      Sk = 56,
      vk = 100,
      Ek = 81;

    function Ok(kk, Fk) {
      switch (kk) {
        case Xk:
          return function(kk) {
            return {
              Vi: hk(kk),
              zi: kk.float(),
              Si: kk.long()
            }
          }(Fk);
        case Tk:
          return function(kk) {
            return {
              OT: bk(kk),
              nT: bk(kk)
            }
          }(Fk);
        case ik:
          return function(kk) {
            return {
              vT: kk.bool(),
              ET: bk(kk)
            }
          }(Fk);
        case yk:
          return Fk.str();
        case lk:
          return function(kk) {
            return {
              id: kk.long(),
              QI: lF(kk)
            }
          }(Fk);
        case ak:
          return function(kk) {
            return {
              kT: bk(kk),
              FT: qF(kk)
            }
          }(Fk);
        case qk:
          return Fk.str();
        case Lk:
        case tk:
          return Fk.long();
        case Zk:
          return function(kk) {
            return {
              WX: kk.long(),
              fX: kk.bool(),
              BX: kk.float()
            }
          }(Fk);
        case jk:
          return Fk.long();
        case ek:
          return function(kk) {
            return {
              KX: kk.bool(),
              QX: ZF(kk)
            }
          }(Fk);
        case wk:
          return function(kk) {
            return {
              id: kk.str(),
              position: tF(kk),
              ZX: jF(kk),
              style: Wk(kk),
              eX: kk.bool()
            }
          }(Fk);
        case Hk:
          return function(kk) {
            return {
              id: bk(kk)
            }
          }(Fk);
        case Jk:
          return function(kk) {
            return {
              Wi: kk.long(),
              Bi: kk.str(),
              Yi: iF(kk),
              Ai: iF(kk),
              gi: bk(kk),
              mi: bk(kk),
              ri: bk(kk),
              Di: bk(kk),
              Mi: bk(kk),
              ky: iF(kk),
              Fy: iF(kk),
              Iy: bk(kk),
              Xy: bk(kk),
              Ty: bk(kk)
            }
          }(Fk);
        case xk:
          return Fk.str();
        case Pk:
          return Fk.long();
        case Kk:
          return function(kk) {
            return {
              Dk: kk.long(),
              Mk: kk.str(),
              kF: kk.float()
            }
          }(Fk);
        case Qk:
          return function(kk) {
            return {
              SX: kk.bool(),
              oX: bk(kk),
              vX: kk.str(),
              EX: wF(kk),
              OX: wF(kk),
              GX: kk.bool(),
              pX: kk.long(),
              uX: HF(kk)
            }
          }(Fk);
        case sk:
          return function(kk) {
            return {
              Ki: bk(kk)
            }
          }(Fk);
        case Vk:
          return function(kk) {
            return {
              wX: kk.str(),
              HX: kk.str(),
              JX: JF(kk),
              sT: kk.str(),
              VT: Mk(kk),
              zT: kk.float()
            }
          }(Fk);
        case zk:
          return function(kk) {
            return {
              wX: kk.str(),
              HX: kk.str(),
              JX: JF(kk)
            }
          }(Fk);
        case Sk:
          return function(kk) {
            return kk.He(xF)
          }(Fk);
        case vk:
          return function(kk) {
            return {
              DI: KF(kk),
              XX: dk(kk)
            }
          }(Fk);
        case Ek:
          return function(kk) {
            return {
              kk: kk.bool(),
              Fk: bk(kk),
              Ik: sF(kk),
              Tk: CF(kk)
            }
          }(Fk);
        default:
          throw new Error(`no reader for to-client message ${kk}`)
      }
    }

    function nk(kk) {
      return {
        entityName: kk.str()
      }
    }

    function Gk(kk) {
      const Fk = kk.index(4);
      return 0 === Fk ? kk.str() : 1 === Fk ? kk.long() : 2 === Fk ? kk.bool() : nk(kk)
    }

    function pk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.map(Gk)
      }(kk)
    }

    function uk(kk) {
      return {
        translationKey: kk.str(),
        params: pk(kk)
      }
    }

    function bk(kk) {
      return 0 === kk.index(2) ? null : kk.str()
    }

    function Rk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          color: bk(kk),
          colour: bk(kk),
          fontSize: bk(kk)
        }
      }(kk)
    }

    function Uk(kk) {
      return {
        icon: kk.str(),
        style: Rk(kk)
      }
    }

    function Ck(kk) {
      const Fk = kk.index(3);
      return 0 === Fk ? {
        string: kk.str()
      } : 1 === Fk ? {
        styledEntityName: nk(kk)
      } : {
        styledTranslatedText: uk(kk)
      }
    }

    function Nk(kk) {
      const Fk = kk.index(3);
      return 0 === Fk ? null : 1 === Fk ? kk.str() : kk.long()
    }

    function ck(kk) {
      return 0 === kk.index(2) ? null : kk.float()
    }

    function Wk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          color: bk(kk),
          colour: bk(kk),
          fontWeight: Nk(kk),
          fontStyle: bk(kk),
          fontSize: bk(kk),
          opacity: ck(kk)
        }
      }(kk)
    }

    function fk(kk) {
      return {
        str: Ck(kk),
        style: Wk(kk),
        clickableUrl: bk(kk)
      }
    }

    function Bk(kk) {
      return kk.str()
    }

    function dk(kk) {
      return kk.He(Bk)
    }

    function Yk(kk) {
      return 0 === kk.index(2) ? null : dk(kk)
    }

    function Ak(kk) {
      return {
        type: kk.str(),
        progress: kk.float(),
        width: bk(kk),
        height: bk(kk),
        colours: Yk(kk),
        backgroundColour: bk(kk)
      }
    }

    function gk(kk) {
      return {
        type: kk.str(),
        action: kk.str(),
        style: Wk(kk)
      }
    }

    function mk(kk) {
      const Fk = kk.index(7);
      return 0 === Fk ? {
        string: kk.str()
      } : 1 === Fk ? {
        entityName: nk(kk)
      } : 2 === Fk ? {
        translatedText: uk(kk)
      } : 3 === Fk ? {
        styledIcon: Uk(kk)
      } : 4 === Fk ? {
        OI: fk(kk)
      } : 5 === Fk ? {
        styledProgressBar: Ak(kk)
      } : {
        styledKeyBinding: gk(kk)
      }
    }

    function hk(kk) {
      return kk.He(mk)
    }
    const rk = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Dk(kk) {
      return rk[kk.index(5)]
    }

    function Mk(kk) {
      return 0 === kk.index(2) ? null : kk.double()
    }

    function kF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          SI: Mk(kk),
          oI: kk.double(),
          vI: kk.double(),
          EI: kk.bool(),
          description: hk(kk),
          GI: kk.str(),
          scale: Mk(kk),
          rotation: Mk(kk)
        }
      }(kk)
    }

    function FF(kk) {
      return 0 === kk.index(2) ? null : kk.bool()
    }

    function IF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          uI: kk.double(),
          icon: kk.str(),
          label: hk(kk),
          bI: kk.bool(),
          scale: Mk(kk),
          rotation: Mk(kk),
          RI: FF(kk)
        }
      }(kk)
    }

    function XF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          SI: Mk(kk),
          CI: kk.double(),
          NI: kk.double(),
          cI: kk.double(),
          gravity: kk.double(),
          WI: kk.double(),
          fI: kk.double(),
          BI: kk.double(),
          EI: kk.bool(),
          description: hk(kk),
          icon: bk(kk)
        }
      }(kk)
    }

    function TF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          speed: kk.double(),
          YI: kk.double(),
          label: hk(kk),
          icon: bk(kk),
          scale: Mk(kk),
          rotation: Mk(kk)
        }
      }(kk)
    }

    function iF(kk) {
      return 0 === kk.index(2) ? null : kk.long()
    }

    function yF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          gI: kk.long(),
          mI: kk.double(),
          hI: kk.double(),
          rI: iF(kk),
          label: hk(kk),
          icon: bk(kk)
        }
      }(kk)
    }

    function lF(kk) {
      return {
        type: Dk(kk),
        progressBar: kF(kk),
        timedClick: IF(kk),
        gravityBar: XF(kk),
        precisionBar: TF(kk),
        rhythmClick: yF(kk)
      }
    }
    const aF = ["playerGone", "rateLimited"];

    function qF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return aF[kk.index(2)]
      }(kk)
    }

    function LF(kk) {
      return kk.float()
    }

    function tF(kk) {
      return kk.He(LF)
    }

    function ZF(kk) {
      return 0 === kk.index(2) ? null : tF(kk)
    }

    function jF(kk) {
      return 0 === kk.index(2) ? null : hk(kk)
    }

    function eF(kk) {
      return kk.long()
    }

    function wF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.He(eF)
      }(kk)
    }

    function HF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          iX: kk.str(),
          tX: kk.long()
        }
      }(kk)
    }

    function JF(kk) {
      const Fk = kk.index(3);
      return 0 === Fk ? null : 1 === Fk ? kk.str() : uk(kk)
    }

    function xF(kk) {
      return {
        sX: kk.str(),
        VX: kk.str(),
        zX: kk.str()
      }
    }

    function PF(kk) {
      return {
        MI: kk.str(),
        kX: bk(kk),
        FX: bk(kk),
        IX: dk(kk)
      }
    }

    function KF(kk) {
      return kk.He(PF)
    }

    function QF(kk) {
      return {
        Xk: kk.str(),
        x: kk.long(),
        y: kk.long(),
        z: kk.long()
      }
    }

    function sF(kk) {
      return kk.He(QF)
    }

    function VF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Sk: kk.float(),
          vk: kk.long(),
          Ek: kk.long()
        }
      }(kk)
    }

    function zF(kk) {
      return {
        blockName: kk.str(),
        Jk: kk.bool(),
        xk: kk.bool(),
        Pk: kk.bool(),
        Kk: kk.float(),
        Qk: kk.float(),
        sk: kk.long(),
        Vk: VF(kk)
      }
    }

    function SF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.He(zF)
      }(kk)
    }

    function oF(kk) {
      return {
        jk: kk.str(),
        wk: SF(kk)
      }
    }

    function vF(kk) {
      return {
        blockName: kk.str(),
        frequency: kk.float()
      }
    }

    function EF(kk) {
      return kk.He(vF)
    }

    function OF(kk) {
      return {
        Gk: kk.str(),
        uk: kk.str(),
        frequency: kk.float(),
        bk: EF(kk)
      }
    }

    function nF(kk) {
      return kk.He(OF)
    }

    function GF(kk) {
      return {
        blockName: kk.str(),
        radius: kk.long(),
        Nk: kk.long(),
        lk: kk.long(),
        ak: kk.long(),
        Wk: kk.float()
      }
    }

    function pF(kk) {
      return kk.He(GF)
    }

    function uF(kk) {
      return {
        lk: kk.long(),
        ak: kk.long(),
        qk: kk.long(),
        Lk: kk.bool(),
        tk: oF(kk),
        Ok: nF(kk),
        Uk: pF(kk)
      }
    }

    function bF(kk) {
      return kk.He(uF)
    }

    function RF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          name: kk.str(),
          Ak: bk(kk)
        }
      }(kk)
    }

    function UF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          terrain: RF(kk),
          gk: pF(kk)
        }
      }(kk)
    }

    function CF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          layers: bF(kk),
          fk: UF(kk)
        }
      }(kk)
    }
  },
  40598: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => Vk,
      F: () => nk,
      H: () => Kk,
      L: () => Qk,
      O: () => Hk,
      R: () => vk,
      T: () => pk,
      X: () => ek,
      Z: () => bk,
      ab: () => xk,
      db: () => Jk,
      e: () => Tk,
      hb: () => Pk,
      i: () => uk,
      j: () => Gk,
      lb: () => sk,
      m: () => jk,
      q: () => wk,
      s: () => Ok,
      t: () => zk,
      x: () => Ek,
      z: () => Sk
    });
    var Xk = Ik(2913);
    const Tk = {
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

    function ik(kk, Fk) {
      return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => Fk(kk))) : kk : Array.from(kk, (kk => Fk(kk)))
    }

    function yk(kk) {
      if ("string" !== typeof kk) return kk;
      for (let Fk = 0; Fk < kk.length; Fk++) {
        const Ik = kk.charCodeAt(Fk);
        if (Ik >= 55296 && Ik <= 57343) return ak.decode(lk.encode(kk))
      }
      return kk
    }
    const lk = new TextEncoder,
      ak = new TextDecoder;

    function qk(kk) {
      return kk
    }
    let Lk;

    function tk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [yk(kk.Ya), yk(kk.Aa)]
    }

    function Zk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [ik(kk.EX, qk), ik(kk.yy, qk)]
    }

    function jk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.oq), yk(Fk.vq)];
      var Fk
    }

    function ek(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.id, Fk.HL];
      var Fk
    }

    function wk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Wi, yk(Fk.Bi), Fk.Yi, yk(Fk.mi), Fk.ky, Fk.Fy, Fk.gy, yk(Fk.my), yk(Fk.hy)];
      var Fk
    }

    function Hk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.TL, qk), Fk.iL];
      var Fk
    }

    function Jk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.wq, (kk => yk(kk))), yk(Fk.Hq), Fk.Jq];
      var Fk
    }

    function xk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.Wy, qk), yk(Fk.Yy), Fk.Ay];
      var Fk
    }

    function Pk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.VX), yk(Fk.zX)];
      var Fk
    }

    function Kk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.Il)];
      var Fk
    }

    function Qk(kk) {
      return yk(kk)
    }

    function sk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.dq), yk(Fk.Yq), yk(Fk.Ya), yk(Fk.Aa)];
      var Fk
    }

    function Vk(kk) {
      return tk(kk)
    }

    function zk(kk) {
      return tk(kk)
    }

    function Sk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.iy)];
      var Fk
    }

    function vk(kk) {
      return kk
    }

    function Ek(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.vy), yk(Fk.Ey)];
      var Fk
    }

    function Ok(kk) {
      return yk(kk)
    }

    function nk(kk) {
      return Zk(kk)
    }

    function Gk(kk) {
      return Zk(kk)
    }

    function pk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.Aq)];
      var Fk
    }

    function uk(kk) {
      return (Lk ??= (0, Xk.g)().map((kk => kk.name)), Lk).map((Fk => {
        return "string" === typeof(Ik = kk[Fk]) ? yk(Ik) : ik(Ik, qk);
        var Ik
      }))
    }

    function bk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Rq, Fk.Uq, Fk.Cq];
      var Fk
    }
  },
  9278: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      g: () => ik
    });
    var Xk = Ik(9237);
    const Tk = "Air",
      ik = Object.freeze(new Xk.g(Tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39243: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      g: () => lk
    });
    var Xk = Ik(337),
      Tk = Ik(4449);
    const ik = new Set(Tk.l),
      yk = new Map;

    function lk(kk, Fk) {
      let Ik = yk.get(Fk);
      void 0 === Ik && (Ik = new Map, yk.set(Fk, Ik));
      let Tk = Ik.get(kk);
      return void 0 === Tk && (Tk = `${kk}${(0,Xk.y)(Fk)}`, Ik.set(kk, Tk)), Tk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);