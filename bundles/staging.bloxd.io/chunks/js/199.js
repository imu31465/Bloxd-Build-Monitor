export const id = 199;
export const ids = [199];
export const modules = {
  40043: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => wk,
      f: () => bk,
      j: () => Xk
    });
    var Rk = Bk(40051),
      tk = Bk(4524),
      ak = Bk(40054);

    function Xk(kk) {
      return kk.payloadKind === tk.Nb.Msgpack ? (0, Rk.e)(kk.payload) : void 0
    }

    function bk(kk, Fk) {
      if (Fk.payloadKind === tk.Nb.Bytes || Fk.payloadKind === tk.Nb.MsgpackBin) return (0, ak.d)(kk, Fk.payload)
    }

    function wk(kk) {
      return null !== kk && "object" === typeof kk
    }
  },
  40063: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk,
      d: () => Jk,
      g: () => Ak,
      k: () => sk,
      n: () => fk
    });
    var Rk = Bk(4524),
      tk = Bk(40065);
    const ak = new Map,
      Xk = new Set,
      bk = new Set;
    let wk = 0,
      dk = 0;

    function sk(kk, Fk) {
      let Bk = ak.get(kk);
      return Bk || (Bk = new Set, ak.set(kk, Bk)), Bk.add(Fk), () => {
        Bk.delete(Fk)
      }
    }

    function Vk() {
      return 0 !== wk
    }

    function Jk(kk) {
      return Xk.add(kk), () => {
        Xk.delete(kk)
      }
    }

    function Ak(kk) {
      return bk.add(kk), () => {
        bk.delete(kk)
      }
    }
    const ek = "A raw message listener threw";

    function yk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk;
      for (const Rk of Fk) try {
        Rk()
      } catch (Bk) {
        kk ? (0, tk.r)(Bk, ek) : console.error(ek, Bk)
      }
    }
    const fk = {
      fire: function(kk) {
        if ("connection" === kk.type) {
          const Fk = kk.phase === Rk.y.Activated && kk.conn !== wk && kk.conn > dk,
            Bk = (kk.phase === Rk.y.Left || kk.phase === Rk.y.Closed) && kk.conn === wk;
          return void(Fk || Bk ? (wk = Fk ? kk.conn : 0, yk(!0)) : kk.phase === Rk.y.Resumed && 0 !== wk && kk.conn > dk && (wk = kk.conn, yk(!0, bk)))
        }
        const Fk = ak.get(kk.UX);
        if (Fk && kk.conn === wk && 0 !== wk)
          for (const Rk of Fk) try {
            Rk(kk)
          } catch (Bk) {
            (0, tk.r)(Bk, ek)
          }
      },
      close: function(kk) {
        dk = Math.max(dk, kk, wk), 0 !== wk && (wk = 0, yk(!1))
      }
    }
  },
  40029: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      d: () => wk,
      e: () => bk
    });
    var Rk = Bk(1219),
      tk = Bk(4e4);
    const ak = new TextDecoder,
      Xk = new TextEncoder;

    function bk(kk, Fk) {
      const Bk = kk.queries.entityName(Fk);
      if (Bk === tk.Lc) return;
      const Xk = kk.memoryData(kk.scratch(), 4 + Bk, 4, "entity_name's answer");
      if (!Xk) return;
      const bk = Xk.getUint32(0, !0),
        wk = ak.decode(new Uint8Array(Xk.buffer, Xk.byteOffset + 4, Bk));
      return (0, Rk.d)(wk, !1, bk === tk.Rd ? null : bk)
    }

    function wk(kk, Fk, Bk) {
      const Rk = Xk.encode(Bk);
      if (Rk.length > tk.Kb) return !1;
      const ak = kk.memoryView(Uint8Array, kk.scratch(), Rk.length, "has_effect's name");
      return !!ak && (ak.set(Rk), 1 === kk.queries.hasEffect(Fk, Rk.length))
    }

    function dk(kk, Fk, Bk, Rk) {
      const Xk = kk.queries.blockData(Fk, Bk, Rk);
      if (Xk === tk.Lc) return;
      const bk = kk.memoryView(Uint8Array, kk.scratch(), Xk, "block_data's answer");
      return bk ? JSON.parse(ak.decode(bk)) : void 0
    }
  },
  40051: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      g: () => sk
    });
    const Rk = new TextDecoder;

    function tk(kk) {
      const Fk = new ak(kk),
        Bk = Fk.value();
      if (Fk.at !== kk.length) throw new Error(`msgpack: ${kk.length-Fk.at} bytes after the value`);
      return Bk
    }
    class ak {
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
          Bk = this.bytes;
        if (kk < 16) {
          let tk = "";
          for (let ak = Fk; ak < Fk + kk; ak++) {
            const Xk = Bk[ak];
            if (Xk >= 128) return Rk.decode(Bk.subarray(Fk, Fk + kk));
            tk += String.fromCharCode(Xk)
          }
          return tk
        }
        return Rk.decode(Bk.subarray(Fk, Fk + kk))
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
        for (let Bk = 0; Bk < kk; Bk++) Fk.push(this.value());
        return this.depth--, Fk
      }
      map(kk) {
        this.enter();
        const Fk = {};
        for (let Bk = 0; Bk < kk; Bk++) {
          const kk = this.value(),
            Bk = this.value();
          Fk["__proto__" === kk ? "__proto_" : String(kk)] = Bk
        }
        return this.depth--, Fk
      }
      ext(kk) {
        const Fk = this.view.getInt8(this.take(1)),
          Bk = this.take(kk);
        if (0 !== Fk) {
          if (-1 === Fk) {
            if (1 === kk) return new Date(NaN);
            if (4 === kk) return new Date(1e3 * this.view.getUint32(Bk, !1));
            if (8 === kk) {
              const kk = this.view.getUint32(Bk, !1),
                Fk = kk >>> 2,
                Rk = 4294967296 * (3 & kk) + this.view.getUint32(Bk + 4, !1);
              return new Date(1e3 * Rk + Fk / 1e6)
            }
            if (12 === kk) {
              const kk = this.view.getUint32(Bk, !1),
                Fk = 4294967296 * this.view.getInt32(Bk + 4, !1) + this.view.getUint32(Bk + 8, !1);
              return new Date(1e3 * Fk + kk / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Fk} of ${kk} bytes`)
        }
      }
    }
    const Xk = new TextEncoder,
      bk = -(2n ** 63n),
      wk = 2n ** 63n - 1n,
      dk = 2n ** 64n - 1n;

    function sk(kk) {
      const Fk = new Vk;
      return Fk.value(kk, 0), Fk.bytes()
    }
    class Vk {
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
              for (const Bk of kk) this.value(Bk, Fk + 1)
            } else {
              var Bk, Rk;
              if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(Bk=null===(Rk=kk.constructor)||void 0===Rk?void 0:Rk.name)&&void 0!==Bk?Bk:"object"}`);
              {
                const Bk = Object.keys(kk);
                this.head(Bk.length, 222, 128, 222, 223);
                for (const Rk of Bk) this.string(Rk), this.value(kk[Rk], Fk + 1)
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
        const Fk = kk >= bk && kk <= wk;
        if (!Fk && (kk < 0n || kk > dk)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Fk ? 211 : 207), this.room(8), Fk ? this.view.setBigInt64(this.at, kk, !1) : this.view.setBigUint64(this.at, kk, !1), this.at += 8
      }
      string(kk) {
        const Fk = Xk.encode(kk);
        this.head(Fk.length, 217, 160, 218, 219), this.room(Fk.length), this.buf.set(Fk, this.at), this.at += Fk.length
      }
      head(kk, Fk, Bk, Rk, tk) {
        Bk >= 0 && kk < (160 === Bk ? 32 : 16) ? this.u8(Bk | kk) : Fk !== Rk && kk < 256 ? (this.u8(Fk), this.u8(kk)) : kk < 65536 ? (this.u8(Rk), this.u16(kk)) : (this.u8(tk), this.u32(kk))
      }
      room(kk) {
        if (this.at + kk <= this.buf.length) return;
        let Fk = 2 * this.buf.length;
        for (; Fk < this.at + kk;) Fk *= 2;
        const Bk = new Uint8Array(Fk);
        Bk.set(this.buf.subarray(0, this.at)), this.buf = Bk, this.view = new DataView(Bk.buffer)
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
  40054: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(40037);
    const tk = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class ak {
      constructor(kk) {
        this.buf = kk, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let kk = this.u8(),
          Fk = 127 & kk,
          Bk = 128;
        for (; 128 & kk;) {
          if (Bk > 2 ** 63) throw new RangeError("avro: varint too long");
          kk = this.u8(), Fk += (127 & kk) * Bk, Bk *= 128
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
          Bk = Fk + kk;
        if (kk <= 32) {
          let kk = "";
          for (let Rk = Fk; Rk < Bk; Rk++) {
            const ak = this.buf[Rk];
            if (ak >= 128) return tk.decode(this.buf.subarray(Fk, Bk));
            kk += String.fromCharCode(ak)
          }
          return kk
        }
        return tk.decode(this.buf.subarray(Fk, Bk))
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
      De(kk) {
        const Fk = [];
        for (let Bk = this.long(); 0 !== Bk; Bk = this.long()) {
          Bk = this.block(Bk);
          for (let Rk = 0; Rk < Bk; Rk++) Fk.push(kk(this))
        }
        return Fk
      }
      map(kk) {
        const Fk = {};
        for (let Bk = this.long(); 0 !== Bk; Bk = this.long()) {
          Bk = this.block(Bk);
          for (let Rk = 0; Rk < Bk; Rk++) {
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

    function Xk(kk, Fk) {
      const Bk = new ak(Fk),
        tk = (0, Rk.qb)(kk, Bk);
      return Bk.end(), tk
    }
  },
  40037: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      D: () => Hk,
      G: () => tk,
      I: () => bk,
      L: () => Ak,
      P: () => Sk,
      T: () => Ek,
      V: () => Lk,
      Y: () => sk,
      ab: () => Vk,
      b: () => Yk,
      eb: () => Nk,
      f: () => fk,
      g: () => mk,
      gb: () => ek,
      ib: () => vk,
      k: () => Wk,
      l: () => Ok,
      lb: () => yk,
      n: () => Rk,
      p: () => ak,
      pb: () => wk,
      qb: () => uk,
      r: () => ik,
      v: () => Jk,
      x: () => dk,
      z: () => Xk
    });
    const Rk = 2,
      tk = 12,
      ak = 27,
      Xk = 40,
      bk = 52,
      wk = 59,
      dk = 63,
      sk = 83,
      Vk = 84,
      Jk = 89,
      Ak = 91,
      ek = 93,
      yk = 94,
      fk = 95,
      mk = 97,
      Wk = 101,
      vk = 102,
      ik = 73,
      Yk = 16,
      Lk = 86,
      Ok = 60,
      Ek = 17,
      Sk = 56,
      Nk = 100,
      Hk = 81;

    function uk(kk, Fk) {
      switch (kk) {
        case Rk:
          return function(kk) {
            return {
              Ga: lk(kk),
              Ta: kk.float(),
              ra: kk.long()
            }
          }(Fk);
        case tk:
          return function(kk) {
            return {
              kk: Gk(kk),
              Fk: Gk(kk)
            }
          }(Fk);
        case ak:
          return function(kk) {
            return {
              AF: kk.bool(),
              eF: Gk(kk)
            }
          }(Fk);
        case Xk:
          return Fk.str();
        case bk:
          return function(kk) {
            return {
              id: kk.long(),
              Hk: bF(kk)
            }
          }(Fk);
        case wk:
        case dk:
          return Fk.str();
        case sk:
        case Vk:
          return Fk.long();
        case Jk:
          return function(kk) {
            return {
              aR: kk.long(),
              XR: kk.bool(),
              bR: kk.float()
            }
          }(Fk);
        case Ak:
          return Fk.long();
        case ek:
          return function(kk) {
            return {
              BB: kk.bool(),
              RB: sF(kk)
            }
          }(Fk);
        case yk:
          return function(kk) {
            return {
              id: kk.str(),
              position: dF(kk),
              Ra: VF(kk),
              style: hk(kk),
              Xa: kk.bool()
            }
          }(Fk);
        case fk:
          return function(kk) {
            return {
              id: Gk(kk)
            }
          }(Fk);
        case mk:
          return function(kk) {
            return {
              WF: kk.long(),
              vF: kk.str(),
              iF: aF(kk),
              YF: aF(kk),
              oF: Gk(kk),
              LF: Gk(kk),
              EF: Gk(kk),
              SF: Gk(kk),
              NF: Gk(kk),
              HF: aF(kk),
              uF: aF(kk),
              MF: Gk(kk),
              gF: Gk(kk),
              UF: Gk(kk)
            }
          }(Fk);
        case Wk:
          return Fk.str();
        case vk:
          return Fk.long();
        case ik:
          return function(kk) {
            return {
              pB: kk.long(),
              xB: kk.str(),
              jB: kk.float()
            }
          }(Fk);
        case Yk:
          return function(kk) {
            return {
              Ca: kk.bool(),
              Za: Gk(kk),
              Ka: kk.str(),
              xa: AF(kk),
              ja: AF(kk),
              la: kk.bool(),
              na: kk.long(),
              Ia: eF(kk)
            }
          }(Fk);
        case Lk:
          return function(kk) {
            return {
              St: Gk(kk)
            }
          }(Fk);
        case Ok:
          return function(kk) {
            return {
              bF: kk.str(),
              wF: kk.str(),
              dF: yF(kk),
              sF: kk.str(),
              VF: Qk(kk),
              JF: kk.float()
            }
          }(Fk);
        case Ek:
          return function(kk) {
            return {
              bF: kk.str(),
              wF: kk.str(),
              dF: yF(kk)
            }
          }(Fk);
        case Sk:
          return function(kk) {
            return kk.De(fF)
          }(Fk);
        case Nk:
          return function(kk) {
            return {
              wR: WF(kk),
              AR: Zk(kk)
            }
          }(Fk);
        case Hk:
          return function(kk) {
            return {
              eR: kk.bool(),
              yR: Gk(kk),
              fR: iF(kk),
              WR: TF(kk)
            }
          }(Fk);
        default:
          throw new Error(`no reader for to-client message ${kk}`)
      }
    }

    function Mk(kk) {
      return {
        entityName: kk.str()
      }
    }

    function gk(kk) {
      const Fk = kk.index(4);
      return 0 === Fk ? kk.str() : 1 === Fk ? kk.long() : 2 === Fk ? kk.bool() : Mk(kk)
    }

    function Uk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.map(gk)
      }(kk)
    }

    function ck(kk) {
      return {
        translationKey: kk.str(),
        params: Uk(kk)
      }
    }

    function Gk(kk) {
      return 0 === kk.index(2) ? null : kk.str()
    }

    function Tk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          color: Gk(kk),
          colour: Gk(kk),
          fontSize: Gk(kk)
        }
      }(kk)
    }

    function rk(kk) {
      return {
        icon: kk.str(),
        style: Tk(kk)
      }
    }

    function Dk(kk) {
      const Fk = kk.index(3);
      return 0 === Fk ? {
        string: kk.str()
      } : 1 === Fk ? {
        styledEntityName: Mk(kk)
      } : {
        styledTranslatedText: ck(kk)
      }
    }

    function zk(kk) {
      const Fk = kk.index(3);
      return 0 === Fk ? null : 1 === Fk ? kk.str() : kk.long()
    }

    function Pk(kk) {
      return 0 === kk.index(2) ? null : kk.float()
    }

    function hk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          color: Gk(kk),
          colour: Gk(kk),
          fontWeight: zk(kk),
          fontStyle: Gk(kk),
          fontSize: Gk(kk),
          opacity: Pk(kk)
        }
      }(kk)
    }

    function qk(kk) {
      return {
        str: Dk(kk),
        style: hk(kk),
        clickableUrl: Gk(kk)
      }
    }

    function Ck(kk) {
      return kk.str()
    }

    function Zk(kk) {
      return kk.De(Ck)
    }

    function pk(kk) {
      return 0 === kk.index(2) ? null : Zk(kk)
    }

    function Kk(kk) {
      return {
        type: kk.str(),
        progress: kk.float(),
        width: Gk(kk),
        height: Gk(kk),
        colours: pk(kk),
        backgroundColour: Gk(kk)
      }
    }

    function xk(kk) {
      return {
        type: kk.str(),
        action: kk.str(),
        style: hk(kk)
      }
    }

    function jk(kk) {
      const Fk = kk.index(7);
      return 0 === Fk ? {
        string: kk.str()
      } : 1 === Fk ? {
        entityName: Mk(kk)
      } : 2 === Fk ? {
        translatedText: ck(kk)
      } : 3 === Fk ? {
        styledIcon: rk(kk)
      } : 4 === Fk ? {
        Dk: qk(kk)
      } : 5 === Fk ? {
        styledProgressBar: Kk(kk)
      } : {
        styledKeyBinding: xk(kk)
      }
    }

    function lk(kk) {
      return kk.De(jk)
    }
    const nk = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Ik(kk) {
      return nk[kk.index(5)]
    }

    function Qk(kk) {
      return 0 === kk.index(2) ? null : kk.double()
    }

    function kF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Uk: Qk(kk),
          Gk: kk.double(),
          Tk: kk.double(),
          rk: kk.bool(),
          description: lk(kk),
          Pk: kk.str(),
          scale: Qk(kk),
          rotation: Qk(kk)
        }
      }(kk)
    }

    function FF(kk) {
      return 0 === kk.index(2) ? null : kk.bool()
    }

    function BF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          qk: kk.double(),
          icon: kk.str(),
          label: lk(kk),
          Ck: kk.bool(),
          scale: Qk(kk),
          rotation: Qk(kk),
          Zk: FF(kk)
        }
      }(kk)
    }

    function RF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Uk: Qk(kk),
          xk: kk.double(),
          jk: kk.double(),
          lk: kk.double(),
          gravity: kk.double(),
          nk: kk.double(),
          Ik: kk.double(),
          Qk: kk.double(),
          rk: kk.bool(),
          description: lk(kk),
          icon: Gk(kk)
        }
      }(kk)
    }

    function tF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          speed: kk.double(),
          FF: kk.double(),
          label: lk(kk),
          icon: Gk(kk),
          scale: Qk(kk),
          rotation: Qk(kk)
        }
      }(kk)
    }

    function aF(kk) {
      return 0 === kk.index(2) ? null : kk.long()
    }

    function XF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          RF: kk.long(),
          tF: kk.double(),
          aF: kk.double(),
          XF: aF(kk),
          label: lk(kk),
          icon: Gk(kk)
        }
      }(kk)
    }

    function bF(kk) {
      return {
        type: Ik(kk),
        progressBar: kF(kk),
        timedClick: BF(kk),
        gravityBar: RF(kk),
        precisionBar: tF(kk),
        rhythmClick: XF(kk)
      }
    }

    function wF(kk) {
      return kk.float()
    }

    function dF(kk) {
      return kk.De(wF)
    }

    function sF(kk) {
      return 0 === kk.index(2) ? null : dF(kk)
    }

    function VF(kk) {
      return 0 === kk.index(2) ? null : lk(kk)
    }

    function JF(kk) {
      return kk.long()
    }

    function AF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.De(JF)
      }(kk)
    }

    function eF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          EB: kk.str(),
          UB: kk.long()
        }
      }(kk)
    }

    function yF(kk) {
      const Fk = kk.index(3);
      return 0 === Fk ? null : 1 === Fk ? kk.str() : ck(kk)
    }

    function fF(kk) {
      return {
        PB: kk.str(),
        hB: kk.str(),
        qB: kk.str()
      }
    }

    function mF(kk) {
      return {
        dR: kk.str(),
        sR: Gk(kk),
        VR: Gk(kk),
        JR: Zk(kk)
      }
    }

    function WF(kk) {
      return kk.De(mF)
    }

    function vF(kk) {
      return {
        mR: kk.str(),
        x: kk.long(),
        y: kk.long(),
        z: kk.long()
      }
    }

    function iF(kk) {
      return kk.De(vF)
    }

    function YF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          PR: kk.float(),
          hR: kk.long(),
          qR: kk.long()
        }
      }(kk)
    }

    function oF(kk) {
      return {
        blockName: kk.str(),
        gR: kk.bool(),
        UR: kk.bool(),
        cR: kk.bool(),
        GR: kk.float(),
        TR: kk.float(),
        rR: kk.long(),
        DR: YF(kk)
      }
    }

    function LF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.De(oF)
      }(kk)
    }

    function OF(kk) {
      return {
        HR: kk.str(),
        uR: LF(kk)
      }
    }

    function EF(kk) {
      return {
        blockName: kk.str(),
        frequency: kk.float()
      }
    }

    function SF(kk) {
      return kk.De(EF)
    }

    function NF(kk) {
      return {
        pR: kk.str(),
        KR: kk.str(),
        frequency: kk.float(),
        xR: SF(kk)
      }
    }

    function HF(kk) {
      return kk.De(NF)
    }

    function uF(kk) {
      return {
        blockName: kk.str(),
        radius: kk.long(),
        IR: kk.long(),
        YR: kk.long(),
        oR: kk.long(),
        QR: kk.float()
      }
    }

    function MF(kk) {
      return kk.De(uF)
    }

    function gF(kk) {
      return {
        YR: kk.long(),
        oR: kk.long(),
        LR: kk.long(),
        ER: kk.bool(),
        SR: OF(kk),
        CR: HF(kk),
        lR: MF(kk)
      }
    }

    function UF(kk) {
      return kk.De(gF)
    }

    function cF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          name: kk.str(),
          Rt: Gk(kk)
        }
      }(kk)
    }

    function GF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          terrain: cF(kk),
          tt: MF(kk)
        }
      }(kk)
    }

    function TF(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          layers: UF(kk),
          kt: GF(kk)
        }
      }(kk)
    }
  },
  40021: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Mk,
      B: () => ik,
      E: () => Yk,
      G: () => fk,
      I: () => Nk,
      L: () => Uk,
      O: () => ek,
      R: () => Gk,
      S: () => Wk,
      T: () => mk,
      X: () => vk,
      Z: () => Lk,
      b: () => tk,
      f: () => ck,
      g: () => gk,
      k: () => Ak,
      n: () => yk,
      p: () => uk,
      r: () => Ek,
      v: () => Hk,
      x: () => Sk,
      y: () => Ok
    });
    var Rk = Bk(2778);
    const tk = {
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
      UpdateNameTag: 53
    };

    function ak(kk, Fk) {
      return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => Fk(kk))) : kk : Array.from(kk, (kk => Fk(kk)))
    }

    function Xk(kk) {
      if ("string" !== typeof kk) return kk;
      for (let Fk = 0; Fk < kk.length; Fk++) {
        const Bk = kk.charCodeAt(Fk);
        if (Bk >= 55296 && Bk <= 57343) return wk.decode(bk.encode(kk))
      }
      return kk
    }
    const bk = new TextEncoder,
      wk = new TextDecoder;

    function dk(kk) {
      return kk
    }
    let sk;

    function Vk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [Xk(kk.aX), Xk(kk.XX)]
    }

    function Jk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [ak(kk.xa, dk), ak(kk.Gd, dk)]
    }

    function Ak(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.UX), Xk(Fk.cX)];
      var Fk
    }

    function ek(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.id, Fk.eX];
      var Fk
    }

    function yk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.WF, Xk(Fk.vF), Fk.iF, Xk(Fk.LF), Fk.HF, Fk.uF, Fk.uX, Xk(Fk.MX), Xk(Fk.gX)];
      var Fk
    }

    function fk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ak(Fk.Gs, dk), Fk.Ts];
      var Fk
    }

    function mk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ak(Fk.Ob, (kk => Xk(kk))), Xk(Fk.Eb), Fk.Sb];
      var Fk
    }

    function Wk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ak(Fk.yX, dk), Xk(Fk.fX), Fk.mX];
      var Fk
    }

    function vk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.hB), Xk(Fk.qB)];
      var Fk
    }

    function ik(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.fb)];
      var Fk
    }

    function Yk(kk) {
      return Xk(kk)
    }

    function Lk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.AV), Xk(Fk.eV), Xk(Fk.aX), Xk(Fk.XX)];
      var Fk
    }

    function Ok(kk) {
      return Vk(kk)
    }

    function Ek(kk) {
      return Vk(kk)
    }

    function Sk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.GX)];
      var Fk
    }

    function Nk(kk) {
      return kk
    }

    function Hk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.dX), Xk(Fk.sX)];
      var Fk
    }

    function uk(kk) {
      return Xk(kk)
    }

    function Mk(kk) {
      return Jk(kk)
    }

    function gk(kk) {
      return Jk(kk)
    }

    function Uk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.ob)];
      var Fk
    }

    function ck(kk) {
      return (sk ??= (0, Rk.d)().map((kk => kk.name)), sk).map((Fk => {
        return "string" === typeof(Bk = kk[Fk]) ? Xk(Bk) : ak(Bk, dk);
        var Bk
      }))
    }

    function Gk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Mb, Fk.gb, Fk.Ub];
      var Fk
    }
  },
  9169: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak
    });
    var Rk = Bk(9127);
    const tk = "Air",
      ak = Object.freeze(new Rk.g(tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38841: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      h: () => bk
    });
    var Rk = Bk(291),
      tk = Bk(4197);
    const ak = new Set(tk.l),
      Xk = new Map;

    function bk(kk, Fk) {
      let Bk = Xk.get(Fk);
      void 0 === Bk && (Bk = new Map, Xk.set(Fk, Bk));
      let tk = Bk.get(kk);
      return void 0 === tk && (tk = `${kk}${(0,Rk.C)(Fk)}`, Bk.set(kk, tk)), tk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);